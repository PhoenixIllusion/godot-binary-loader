import { cTexFile, try_open_ctex } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2.js";
import { BinResource, try_open_bin_resource } from "@phoenixillusion/godot-scene-reader/parse/binary/resource.js";
import { parse_remap } from "@phoenixillusion/godot-scene-reader/parse/text/remap/parse.js";
import { PckEntry, PckFile, try_open_pack } from "@phoenixillusion/godot-scene-reader/pck/parser.js";
import { PackedScene } from "@phoenixillusion/godot-scene-reader/process/scene/packed_scene.js";

import { try_open_bin_config } from "@phoenixillusion/godot-scene-reader/parse/binary/ecfg.js";
import { DefaultProjectSettings } from "./instance/types/gen/defaults/ProjectSettings.default";
import { ProjectSettings } from "./instance/types/gen";
import { unwrap_properties, unwrap_property_paths } from "@phoenixillusion/godot-scene-reader/process/scene/unwrap.js";
import { ProjectSettingsI } from "./instance/types/project_settings";
import { generateUUID } from "./instance/math";


const UnpackWorker = () => new Worker(new URL('./binary_unpack.worker.js', import.meta.url), { type: 'module' });
const LoadWorker = () => new Worker(new URL('./pck-loader.js', import.meta.url), { type: 'module' });

export type PckResources = Record<string, BinResource | cTexFile>;
export type PckScenes = Record<string, PackedScene>;

interface LoadRequest {
  path: string;
  resolve_scene?: string | null;
  allowed_extensions?: string[];
  buffer?: ArrayBuffer;
  worker_count?: number;
}
interface LoadResponse {
  projectName: string;
  settings: ProjectSettingsI | null;
  resolved_scene: string | null;
  scenes: PckScenes,
  resources: PckResources;
}

export class PckLoader {
  allowed_extensions: string[] = [];

  worker_count = 0;
  current_worker = 0;
  workers: Worker[] = [];
  worker_results: Record<string, (result: BinResource | cTexFile | BinResource | undefined) => void> = {}

  constructor(private pack: PckFile) { /* */ }

  private remapPath(pckEntry: PckEntry): Record<string, string> | null {
    return parse_remap(pckEntry.getData());
  }

  private resolvePath(path: string): PckEntry | null {
    try {
      const pck = this.pack;
      const path_s = path.replace(/^res:\/\//, '');
      const direct = pck[path] || pck[path_s];
      if (direct) {
        return direct;
      }
      const remap = pck[`${path}.remap`] || pck[`${path_s}.remap`] || pck[`${path}.import`] || pck[`${path_s}.import`];
      if (remap) {
        const paths = this.remapPath(remap)
        if (paths) {
          for (const ext of [... this.allowed_extensions, '']) {
            const key = `path${ext}`;
            if (paths[key]) {
              return this.resolvePath(paths[key]);
            }
          }
          debugger;
        }
      }
    } catch { }
    return null;
  }

  private resourceCache: PckResources = {};
  private sceneCache: PckScenes = {};

  getExternalScene(path: string): PackedScene | undefined {
    return this.sceneCache[path];
  }
  getExternal<T extends BinResource | cTexFile>(path: string): T | undefined {
    return this.resourceCache[path] as T;
  }
  private queue_worker_task(method: string, path: string, payload: any) {
    if (this.workers.length == 0) {
      for (let i = 0; i < this.worker_count; i++) {
        this.workers[i] = UnpackWorker();
        this.workers[i].onmessage = (event) => {
          const { path, data } = event.data;
          if (this.worker_results[path]) {
            this.worker_results[path](data);
            delete this.worker_results[path];
          } else {
            console.error("Unknown path: ", path)
          }
        }
      }
    }
    const idx = this.current_worker++;
    this.workers[idx].postMessage({ method, path, payload })
    this.current_worker %= this.worker_count;
  }

  try_open_bin_resource(res_path: string, arrayBuffer: ArrayBuffer, p_no_resource: boolean, p_keep_uuid_paths: boolean): Promise<BinResource> {
    if (this.worker_count == 0) {
      return try_open_bin_resource(res_path, arrayBuffer, p_no_resource, p_keep_uuid_paths);
    }
    return new Promise<BinResource>(resolve => {
      const guid = generateUUID();
      this.worker_results[guid] = resolve as any;
      this.queue_worker_task('try_open_bin_resource', guid, { arrayBuffer, p_no_resource, p_keep_uuid_paths });
    })
  }
  async try_open_ctex(arrayBuffer: ArrayBuffer): Promise<cTexFile> {
    if (this.worker_count == 0) {
      return try_open_ctex(arrayBuffer);
    }
    return new Promise<cTexFile>(resolve => {
      const guid = generateUUID();
      this.worker_results[guid] = resolve as any;
      this.queue_worker_task('try_open_ctex', guid, arrayBuffer);
    })
  }
  async try_open_ctex3d(arrayBuffer: ArrayBuffer): Promise<cTexFile> {
    if (this.worker_count == 0) {
      return {
        flags: 0, height: 0, images: [], mipmap_limit: 0, version: 0, width: 0
      };
    }
    return new Promise<cTexFile>(resolve => {
      const guid = generateUUID();
      this.worker_results[guid] = resolve as any;
      this.queue_worker_task('try_open_ctex3d', guid, arrayBuffer);
    })
  }

  private async cacheResource<T extends BinResource | cTexFile>(path: string, entry: PckEntry, func: (entry: PckEntry) => Promise<T>): Promise<T> {
    const data = await func(entry);
    this.resourceCache[path] = data;
    return data;
  }
  private async resolveFile(path: string, entry: PckEntry) {
    if (this.resourceCache[path]) {
      return this.resourceCache[path];
    }
    let isBinary = false;
    ['.scn', '.res', '.mesh', '.material', '.occ', '.ogg', '.wav'].forEach(ext => {
      if (path.endsWith(ext) || entry.path.endsWith(ext)) {
        isBinary = true;
      }
    })
    if (isBinary) {
      const data = await this.cacheResource(path, entry, entry => this.try_open_bin_resource(path, entry.getData(), false, false));
      await Promise.all(data?.external_resources?.map(ext =>
        this.resolve(ext.path)) || []
      );
      if (data?.type == 'PackedScene') {
        const scene = new PackedScene(data.internal_entries[data.internal_entries.length - 1]);
        this.sceneCache[path] = scene;
      }
      return data;
    }
    if (entry.path.endsWith('.gdc')) {
      console.log("Skipping GdScript Binary")
      return undefined;
    }
    if (entry.path.endsWith('.sample')) {
      const data = await this.cacheResource(path, entry, entry => this.try_open_bin_resource(path, entry.getData(), false, false));
      await Promise.all(data?.external_resources?.map(ext =>
        this.resolve(ext.path)) || []
      );
    }
    if (entry.path.endsWith('.ctex')) {
      const data = await this.cacheResource(path, entry, entry => this.try_open_ctex(entry.getData()));
      return data;
    }
    if (entry.path.endsWith('.ctex3d')) {
      const data = await this.cacheResource(path, entry, entry => this.try_open_ctex3d(entry.getData()));
      return data;
    }
    return undefined;
  }

  async resolve(path: string) {
    const entry = this.resolvePath(path);
    if (entry) {
      return this.resolveFile(path, entry);
    }
    return null;
  }

  static async load(request: LoadRequest): Promise<LoadResponse> {
    const path = request.path;
    let resolve_scene = request.resolve_scene;
    const allowed_extensions: string[] = request.allowed_extensions ?? [];
    const buffer: ArrayBuffer = request.buffer ?? await (fetch(request.path).then(res => res.arrayBuffer()));

    const pck = try_open_pack(path, buffer);
    const loader = new PckLoader(pck);
    loader.worker_count = request.worker_count || 0;
    loader.allowed_extensions.push(...allowed_extensions);
    const project = pck['project.binary'];

    let projectName = path;
    let settings: ProjectSettings | null = null;
    if (project) {
      settings = <ProjectSettings>unwrap_properties(await try_open_bin_config(project.getData()))!;
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
    }
  }
  static async loadWithWorker(request: LoadRequest): Promise<LoadResponse> {
    return new Promise<LoadResponse>(resolve => {
      const worker = LoadWorker();
      worker.onmessage = (evt: MessageEvent) => {
        const result: LoadResponse = evt.data;
        resolve(result);
      }
      worker.postMessage(request);
    })
  }
}
function isWebWorker(): boolean {
  return typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
}


if (isWebWorker()) {
  globalThis.onmessage = async (ev) => {
    const request = ev.data as LoadRequest;
    PckLoader.load(request).then(response => {
      globalThis.postMessage(response);
      globalThis.close();
    })
  }
}