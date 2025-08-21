/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultResource } from './Resource.default.js';
export function DefaultNavigationPolygon(item) {
    DefaultResource(item);
    item.agent_radius ?? (item.agent_radius = 10.0);
    item.baking_rect ?? (item.baking_rect = create.Rect2(0, 0, 0, 0));
    item.baking_rect_offset ?? (item.baking_rect_offset = create.Vector2(0, 0));
    item.border_size ?? (item.border_size = 0.0);
    item.cell_size ?? (item.cell_size = 1.0);
    item.parsed_collision_mask ?? (item.parsed_collision_mask = 4294967295);
    item.parsed_geometry_type ?? (item.parsed_geometry_type = 2);
    item.sample_partition_type ?? (item.sample_partition_type = 0);
    item.source_geometry_group_name ?? (item.source_geometry_group_name = "navigation_polygon_source_geometry_group");
    item.source_geometry_mode ?? (item.source_geometry_mode = 0);
}
