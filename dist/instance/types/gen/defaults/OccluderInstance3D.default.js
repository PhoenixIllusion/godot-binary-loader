import { DefaultVisualInstance3D } from './VisualInstance3D.default.js';
export function DefaultOccluderInstance3D(item) {
    DefaultVisualInstance3D(item);
    item.bake_mask ?? (item.bake_mask = 4294967295);
    item.bake_simplification_distance ?? (item.bake_simplification_distance = 0.1);
    //occluder  
}
