import { DefaultNode } from './Node.default';
export function DefaultHTTPRequest(item) {
    DefaultNode(item);
    item.accept_gzip ?? (item.accept_gzip = true);
    item.body_size_limit ?? (item.body_size_limit = -1);
    item.download_chunk_size ?? (item.download_chunk_size = 65536);
    item.download_file ?? (item.download_file = "");
    item.max_redirects ?? (item.max_redirects = 8);
    item.timeout ?? (item.timeout = 0.0);
    item.use_threads ?? (item.use_threads = false);
}
