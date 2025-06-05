/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultNode } from './Node.default';
export function DefaultNavigationAgent3D(item) {
    DefaultNode(item);
    item.avoidance_enabled ?? (item.avoidance_enabled = false);
    item.avoidance_layers ?? (item.avoidance_layers = 1);
    item.avoidance_mask ?? (item.avoidance_mask = 1);
    item.avoidance_priority ?? (item.avoidance_priority = 1.0);
    item.debug_enabled ?? (item.debug_enabled = false);
    item.debug_path_custom_color ?? (item.debug_path_custom_color = create.Color(1, 1, 1, 1));
    item.debug_path_custom_point_size ?? (item.debug_path_custom_point_size = 4.0);
    item.debug_use_custom ?? (item.debug_use_custom = false);
    item.height ?? (item.height = 1.0);
    item.keep_y_velocity ?? (item.keep_y_velocity = true);
    item.max_neighbors ?? (item.max_neighbors = 10);
    item.max_speed ?? (item.max_speed = 10.0);
    item.navigation_layers ?? (item.navigation_layers = 1);
    item.neighbor_distance ?? (item.neighbor_distance = 50.0);
    item.path_desired_distance ?? (item.path_desired_distance = 1.0);
    item.path_height_offset ?? (item.path_height_offset = 0.0);
    item.path_max_distance ?? (item.path_max_distance = 5.0);
    item.path_metadata_flags ?? (item.path_metadata_flags = 7);
    item.path_postprocessing ?? (item.path_postprocessing = 0);
    item.pathfinding_algorithm ?? (item.pathfinding_algorithm = 0);
    item.radius ?? (item.radius = 0.5);
    item.simplify_epsilon ?? (item.simplify_epsilon = 0.0);
    item.simplify_path ?? (item.simplify_path = false);
    item.target_desired_distance ?? (item.target_desired_distance = 1.0);
    item.target_position ?? (item.target_position = create.Vector3(0, 0, 0));
    item.time_horizon_agents ?? (item.time_horizon_agents = 1.0);
    item.time_horizon_obstacles ?? (item.time_horizon_obstacles = 0.0);
    item.use_3d_avoidance ?? (item.use_3d_avoidance = false);
    item.velocity ?? (item.velocity = create.Vector3(0, 0, 0));
}
