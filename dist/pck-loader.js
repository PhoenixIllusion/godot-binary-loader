import { try_open_ctex, try_open_ctexarray } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2.js";
import { try_open_bin_resource } from "@phoenixillusion/godot-scene-reader/parse/binary/resource.js";
import { parse_remap } from "@phoenixillusion/godot-scene-reader/parse/text/remap/parse.js";
import { try_open_pack } from "@phoenixillusion/godot-scene-reader/pck/parser.js";
import { PackedScene } from "@phoenixillusion/godot-scene-reader/process/scene/packed_scene.js";
import { try_open_bin_config } from "@phoenixillusion/godot-scene-reader/parse/binary/ecfg.js";
import { DefaultProjectSettings } from "./instance/types/gen/defaults/ProjectSettings.default.js";
import { unwrap_properties, unwrap_property_paths } from "@phoenixillusion/godot-scene-reader/process/scene/unwrap.js";
import { generateUUID } from "./instance/math.js";
import { decoder } from "@phoenixillusion/godot-scene-reader/util/data-reader.js";
const UnpackWorker = () => new Worker(new URL('./binary_unpack.worker.js', import.meta.url), { type: 'module' });
const LoadWorker = () => new Worker(new URL('./pck-loader.js', import.meta.url), { type: 'module' });
export class PckLoader {
    constructor(pack) {
        this.pack = pack;
        this.allowed_extensions = [];
        this.worker_count = 0;
        this.current_worker = 0;
        this.workers = [];
        this.worker_results = {};
        this.resourceCache = {};
        this.sceneCache = {};
    }
    remapPath(pckEntry) {
        return parse_remap(pckEntry.getData());
    }
    resolvePath(path) {
        try {
            const pck = this.pack;
            const path_s = path.replace(/^res:\/\//, '');
            const direct = pck[path] || pck[path_s];
            if (direct) {
                return direct;
            }
            const remap = pck[`${path}.remap`] || pck[`${path_s}.remap`] || pck[`${path}.import`] || pck[`${path_s}.import`];
            if (remap) {
                const paths = this.remapPath(remap);
                if (paths) {
                    for (const ext of [...this.allowed_extensions, '']) {
                        const key = `path${ext}`;
                        if (paths[key]) {
                            return this.resolvePath(paths[key]);
                        }
                    }
                    debugger;
                }
            }
        }
        catch { }
        return null;
    }
    getExternalScene(path) {
        return this.sceneCache[path];
    }
    getExternal(path) {
        return this.resourceCache[path];
    }
    queue_worker_task(method, path, payload) {
        if (this.workers.length == 0) {
            for (let i = 0; i < this.worker_count; i++) {
                this.workers[i] = UnpackWorker();
                this.workers[i].onmessage = (event) => {
                    const { path, data } = event.data;
                    if (this.worker_results[path]) {
                        this.worker_results[path](data);
                        delete this.worker_results[path];
                    }
                    else {
                        console.error("Unknown path: ", path);
                    }
                };
            }
        }
        const idx = this.current_worker++;
        this.workers[idx].postMessage({ method, path, payload });
        this.current_worker %= this.worker_count;
    }
    try_open_bin_resource(res_path, arrayBuffer, p_no_resource, p_keep_uuid_paths) {
        if (this.worker_count == 0) {
            return try_open_bin_resource(res_path, arrayBuffer, p_no_resource, p_keep_uuid_paths);
        }
        return new Promise(resolve => {
            const guid = generateUUID();
            this.worker_results[guid] = resolve;
            this.queue_worker_task('try_open_bin_resource', guid, { arrayBuffer, p_no_resource, p_keep_uuid_paths });
        });
    }
    async try_open_ctex(arrayBuffer) {
        if (this.worker_count == 0) {
            return try_open_ctex(arrayBuffer);
        }
        return new Promise(resolve => {
            const guid = generateUUID();
            this.worker_results[guid] = resolve;
            this.queue_worker_task('try_open_ctex', guid, arrayBuffer);
        });
    }
    async try_open_ctex3d(arrayBuffer) {
        if (this.worker_count == 0) {
            return try_open_ctexarray(arrayBuffer);
        }
        return new Promise(resolve => {
            const guid = generateUUID();
            this.worker_results[guid] = resolve;
            this.queue_worker_task('try_open_ctex3d', guid, arrayBuffer);
        });
    }
    async try_open_ctexarray(arrayBuffer) {
        if (this.worker_count == 0) {
            return try_open_ctexarray(arrayBuffer);
        }
        return new Promise(resolve => {
            const guid = generateUUID();
            this.worker_results[guid] = resolve;
            this.queue_worker_task('try_open_ctexarray', guid, arrayBuffer);
        });
    }
    async cacheResource(path, entry, func) {
        const data = await func(entry);
        this.resourceCache[path] = data;
        return data;
    }
    async resolveFile(path, entry) {
        if (this.resourceCache[path]) {
            return this.resourceCache[path];
        }
        let isBinary = false;
        ['.scn', '.res', '.mesh', '.material', '.occ', '.ogg', '.wav', '.fontdata', '.lmbake'].forEach(ext => {
            if (path.endsWith(ext) || entry.path.endsWith(ext)) {
                isBinary = true;
            }
        });
        if (isBinary) {
            const data = await this.cacheResource(path, entry, entry => this.try_open_bin_resource(path, entry.getData(), false, false));
            await Promise.all(data?.external_resources?.map(ext => this.resolve(ext.path)) || []);
            if (data?.type == 'PackedScene') {
                const scene = new PackedScene(data.internal_entries[data.internal_entries.length - 1]);
                this.sceneCache[path] = scene;
            }
            return data;
        }
        if (entry.path.endsWith('.gdshader')) {
            const data = await this.cacheResource(path, entry, async (entry) => {
                return {
                    type: 'Shader',
                    path,
                    text: decoder.decode(new Uint8Array(entry.getData()))
                };
            });
            return data;
        }
        if (entry.path.endsWith('.gdc')) {
            console.log("Skipping GdScript Binary");
            return undefined;
        }
        if (entry.path.endsWith('.sample')) {
            const data = await this.cacheResource(path, entry, entry => this.try_open_bin_resource(path, entry.getData(), false, false));
            await Promise.all(data?.external_resources?.map(ext => this.resolve(ext.path)) || []);
            return data;
        }
        if (entry.path.endsWith('.ctex')) {
            const data = await this.cacheResource(path, entry, entry => this.try_open_ctex(entry.getData()));
            return data;
        }
        if (entry.path.endsWith('.ctex3d')) {
            const data = await this.cacheResource(path, entry, entry => this.try_open_ctex3d(entry.getData()));
            return data;
        }
        if (entry.path.endsWith('.ctexarray')) {
            const data = await this.cacheResource(path, entry, entry => this.try_open_ctexarray(entry.getData()));
            return data;
        }
        return undefined;
    }
    async resolve(path) {
        const entry = this.resolvePath(path);
        if (entry) {
            return this.resolveFile(path, entry);
        }
        return null;
    }
    static async load(request) {
        const path = request.path;
        let resolve_scene = request.resolve_scene;
        const allowed_extensions = request.allowed_extensions ?? [];
        const buffer = request.buffer ?? await (fetch(request.path).then(res => res.arrayBuffer()));
        const pck = try_open_pack(path, buffer);
        const loader = new PckLoader(pck);
        loader.worker_count = request.worker_count || 0;
        loader.allowed_extensions.push(...allowed_extensions);
        const project = pck['project.binary'];
        let projectName = path;
        let settings = null;
        if (project) {
            settings = unwrap_properties(await try_open_bin_config(project.getData()));
            DefaultProjectSettings(settings);
            projectName = settings['application/config/name'] ?? name;
        }
        if (!resolve_scene && settings) {
            resolve_scene = settings['application/run/main_scene'] || null;
        }
        if (resolve_scene) {
            await loader.resolve(resolve_scene);
        }
        return {
            projectName,
            settings: settings ? unwrap_property_paths(settings) : null,
            resolved_scene: resolve_scene || null,
            scenes: loader.sceneCache,
            resources: loader.resourceCache
        };
    }
    static async loadWithWorker(request) {
        return new Promise(resolve => {
            const worker = LoadWorker();
            worker.onmessage = (evt) => {
                const result = evt.data;
                resolve(result);
            };
            worker.postMessage(request);
        });
    }
}
function isWebWorker() {
    return typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
}
if (isWebWorker()) {
    globalThis.onmessage = async (ev) => {
        const request = ev.data;
        PckLoader.load(request).then(response => {
            globalThis.postMessage(response);
            globalThis.close();
        });
    };
}
