/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultViewport } from './Viewport.default.js';
export function DefaultSubViewport(item) {
    DefaultViewport(item);
    item.render_target_clear_mode ?? (item.render_target_clear_mode = 0);
    item.render_target_update_mode ?? (item.render_target_update_mode = 2);
    item.size ?? (item.size = create.Vector2i(512, 512));
    item.size_2d_override ?? (item.size_2d_override = create.Vector2i(0, 0));
    item.size_2d_override_stretch ?? (item.size_2d_override_stretch = false);
}
