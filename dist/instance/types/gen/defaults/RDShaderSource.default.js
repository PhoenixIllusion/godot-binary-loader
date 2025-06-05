import { DefaultRefCounted } from './RefCounted.default';
export function DefaultRDShaderSource(item) {
    DefaultRefCounted(item);
    item.language ?? (item.language = 0);
    item.source_compute ?? (item.source_compute = "");
    item.source_fragment ?? (item.source_fragment = "");
    item.source_tesselation_control ?? (item.source_tesselation_control = "");
    item.source_tesselation_evaluation ?? (item.source_tesselation_evaluation = "");
    item.source_vertex ?? (item.source_vertex = "");
}
