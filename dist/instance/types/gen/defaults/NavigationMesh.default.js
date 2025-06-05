/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultResource } from './Resource.default';
export function DefaultNavigationMesh(item) {
    DefaultResource(item);
    item.agent_height ?? (item.agent_height = 1.5);
    item.agent_max_climb ?? (item.agent_max_climb = 0.25);
    item.agent_max_slope ?? (item.agent_max_slope = 45.0);
    item.agent_radius ?? (item.agent_radius = 0.5);
    item.border_size ?? (item.border_size = 0.0);
    item.cell_height ?? (item.cell_height = 0.25);
    item.cell_size ?? (item.cell_size = 0.25);
    item.detail_sample_distance ?? (item.detail_sample_distance = 6.0);
    item.detail_sample_max_error ?? (item.detail_sample_max_error = 1.0);
    item.edge_max_error ?? (item.edge_max_error = 1.3);
    item.edge_max_length ?? (item.edge_max_length = 0.0);
    item.filter_baking_aabb ?? (item.filter_baking_aabb = create.AABB(0, 0, 0, 0, 0, 0));
    item.filter_baking_aabb_offset ?? (item.filter_baking_aabb_offset = create.Vector3(0, 0, 0));
    item.filter_ledge_spans ?? (item.filter_ledge_spans = false);
    item.filter_low_hanging_obstacles ?? (item.filter_low_hanging_obstacles = false);
    item.filter_walkable_low_height_spans ?? (item.filter_walkable_low_height_spans = false);
    item.geometry_collision_mask ?? (item.geometry_collision_mask = 4294967295);
    item.geometry_parsed_geometry_type ?? (item.geometry_parsed_geometry_type = 2);
    item.geometry_source_geometry_mode ?? (item.geometry_source_geometry_mode = 0);
    item.geometry_source_group_name ?? (item.geometry_source_group_name = "navigation_mesh_source_group");
    item.region_merge_size ?? (item.region_merge_size = 20.0);
    item.region_min_size ?? (item.region_min_size = 2.0);
    item.sample_partition_type ?? (item.sample_partition_type = 0);
    item.vertices_per_polygon ?? (item.vertices_per_polygon = 6.0);
}
