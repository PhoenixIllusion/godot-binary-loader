/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultRefCounted } from './RefCounted.default.js';
export function DefaultRenderSceneBuffersConfiguration(item) {
    DefaultRefCounted(item);
    item.fsr_sharpness ?? (item.fsr_sharpness = 0.0);
    item.internal_size ?? (item.internal_size = create.Vector2i(0, 0));
    item.msaa_3d ?? (item.msaa_3d = 0);
    item.render_target ?? (item.render_target = create.RID());
    item.scaling_3d_mode ?? (item.scaling_3d_mode = 255);
    item.screen_space_aa ?? (item.screen_space_aa = 0);
    item.target_size ?? (item.target_size = create.Vector2i(0, 0));
    item.texture_mipmap_bias ?? (item.texture_mipmap_bias = 0.0);
    item.view_count ?? (item.view_count = 1);
}
