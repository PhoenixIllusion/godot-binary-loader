import { try_open_bin_resource, try_open_ctex } from "@phoenixillusion/godot-scene-reader";

interface WorkerRequest {
  method: "try_open_bin_resource"|"try_open_ctex";
  path: string;
  payload: any;
}
interface BinResourceRequest {
  arrayBuffer: ArrayBuffer;
  p_no_resource: boolean;
  p_keep_uuid_paths: boolean;
}

globalThis.onmessage = async ( evt ) => {
  const { method, path, payload } = evt.data as WorkerRequest;
  if(method == 'try_open_bin_resource') {
    const { arrayBuffer, p_no_resource, p_keep_uuid_paths} = payload as BinResourceRequest;
    const data = await try_open_bin_resource(path, arrayBuffer, p_no_resource, p_keep_uuid_paths)
    globalThis.postMessage({ path, data });
  }
  if(method == 'try_open_ctex') {
    const arrayBuffer = payload as ArrayBuffer;
    globalThis.postMessage({ path, data: try_open_ctex(arrayBuffer)});
  }
}