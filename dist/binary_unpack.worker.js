import { try_open_ctex, try_open_ctexarray } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2.js";
import { try_open_bin_resource } from "@phoenixillusion/godot-scene-reader/parse/binary/resource.js";
globalThis.onmessage = async (evt) => {
    const { method, path, payload } = evt.data;
    if (method == 'try_open_bin_resource') {
        const { arrayBuffer, p_no_resource, p_keep_uuid_paths } = payload;
        const data = await try_open_bin_resource(path, arrayBuffer, p_no_resource, p_keep_uuid_paths);
        globalThis.postMessage({ path, data });
    }
    else if (method == 'try_open_ctex') {
        const arrayBuffer = payload;
        globalThis.postMessage({ path, data: try_open_ctex(arrayBuffer) });
    }
    else if (method == 'try_open_ctex3d') {
        const arrayBuffer = payload;
        globalThis.postMessage({ path, data: try_open_ctexarray(arrayBuffer) });
    }
    else if (method == 'try_open_ctexarray') {
        const arrayBuffer = payload;
        globalThis.postMessage({ path, data: try_open_ctexarray(arrayBuffer) });
    }
    else
        throw new Error("uknown command: " + method);
};
