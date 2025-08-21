import { DefaultRefCounted } from './RefCounted.default.js';
export function DefaultRDPipelineSpecializationConstant(item) {
    DefaultRefCounted(item);
    item.constant_id ?? (item.constant_id = 0);
    //value  
}
