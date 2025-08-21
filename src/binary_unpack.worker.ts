import { try_open_ctex, try_open_ctexarray } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2.js";
import { try_open_bin_resource } from "@phoenixillusion/godot-scene-reader/parse/binary/resource.js";

interface WorkerRequest {
  method: 'try_open_bin_resource' | 'try_open_ctex' | 'try_open_ctex3d' | 'try_open_ctexarray';
  path: string;
  payload: any;
}
interface BinResourceRequest {
  arrayBuffer: ArrayBuffer;
  p_no_resource: boolean;
  p_keep_uuid_paths: boolean;
}

globalThis.onmessage = async (evt) => {
  const { method, path, payload } = evt.data as WorkerRequest;
  if (method == 'try_open_bin_resource') {
    const { arrayBuffer, p_no_resource, p_keep_uuid_paths } = payload as BinResourceRequest;
    const data = await try_open_bin_resource(path, arrayBuffer, p_no_resource, p_keep_uuid_paths)
    globalThis.postMessage({ path, data });
  } else
  if (method == 'try_open_ctex') {
    const arrayBuffer = payload as ArrayBuffer;
    globalThis.postMessage({ path, data: try_open_ctex(arrayBuffer) });
  } else
  if (method == 'try_open_ctex3d') {
    const arrayBuffer = payload as ArrayBuffer;
    globalThis.postMessage({ path, data: try_open_ctexarray(arrayBuffer) });
  } else
  if (method == 'try_open_ctexarray') {
    const arrayBuffer = payload as ArrayBuffer;
    globalThis.postMessage({ path, data: try_open_ctexarray(arrayBuffer) });
  } else
    throw new Error("uknown command: " + method)

}