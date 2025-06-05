import { try_open_bin_resource, try_open_ctex } from "@phoenixillusion/godot-scene-reader";
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
        globalThis.postMessage({ path, data: {
                flags: 0, height: 0, images: [arrayBuffer], mipmap_limit: 0, version: 0, width: 0
            } });
    }
    else
        throw new Error("uknown command: " + method);
};
