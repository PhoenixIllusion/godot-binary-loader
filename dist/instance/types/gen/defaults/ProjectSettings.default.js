/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultObject } from './Object.default';
export function DefaultProjectSettings(item) {
    DefaultObject(item);
    item['animation/warnings/check_angle_interpolation_type_conflicting'] ?? (item['animation/warnings/check_angle_interpolation_type_conflicting'] = true);
    item['animation/warnings/check_invalid_track_paths'] ?? (item['animation/warnings/check_invalid_track_paths'] = true);
    item['application/boot_splash/bg_color'] ?? (item['application/boot_splash/bg_color'] = create.Color(0.14, 0.14, 0.14, 1));
    item['application/boot_splash/fullsize'] ?? (item['application/boot_splash/fullsize'] = true);
    item['application/boot_splash/image'] ?? (item['application/boot_splash/image'] = "");
    item['application/boot_splash/minimum_display_time'] ?? (item['application/boot_splash/minimum_display_time'] = 0);
    item['application/boot_splash/show_image'] ?? (item['application/boot_splash/show_image'] = true);
    item['application/boot_splash/use_filter'] ?? (item['application/boot_splash/use_filter'] = true);
    item['application/config/auto_accept_quit'] ?? (item['application/config/auto_accept_quit'] = true);
    item['application/config/custom_user_dir_name'] ?? (item['application/config/custom_user_dir_name'] = "");
    item['application/config/description'] ?? (item['application/config/description'] = "");
    item['application/config/icon'] ?? (item['application/config/icon'] = "");
    item['application/config/macos_native_icon'] ?? (item['application/config/macos_native_icon'] = "");
    item['application/config/name'] ?? (item['application/config/name'] = "");
    //application/config/name_localized = {}
    item['application/config/project_settings_override'] ?? (item['application/config/project_settings_override'] = "");
    item['application/config/quit_on_go_back'] ?? (item['application/config/quit_on_go_back'] = true);
    item['application/config/use_custom_user_dir'] ?? (item['application/config/use_custom_user_dir'] = false);
    item['application/config/use_hidden_project_data_directory'] ?? (item['application/config/use_hidden_project_data_directory'] = true);
    item['application/config/version'] ?? (item['application/config/version'] = "");
    item['application/config/windows_native_icon'] ?? (item['application/config/windows_native_icon'] = "");
    item['application/run/delta_smoothing'] ?? (item['application/run/delta_smoothing'] = true);
    item['application/run/disable_stderr'] ?? (item['application/run/disable_stderr'] = false);
    item['application/run/disable_stdout'] ?? (item['application/run/disable_stdout'] = false);
    item['application/run/enable_alt_space_menu'] ?? (item['application/run/enable_alt_space_menu'] = false);
    item['application/run/flush_stdout_on_print'] ?? (item['application/run/flush_stdout_on_print'] = false);
    item['application/run/flush_stdout_on_print.debug'] ?? (item['application/run/flush_stdout_on_print.debug'] = true);
    item['application/run/frame_delay_msec'] ?? (item['application/run/frame_delay_msec'] = 0);
    item['application/run/low_processor_mode'] ?? (item['application/run/low_processor_mode'] = false);
    item['application/run/low_processor_mode_sleep_usec'] ?? (item['application/run/low_processor_mode_sleep_usec'] = 6900);
    item['application/run/main_loop_type'] ?? (item['application/run/main_loop_type'] = "SceneTree");
    item['application/run/main_scene'] ?? (item['application/run/main_scene'] = "");
    item['application/run/max_fps'] ?? (item['application/run/max_fps'] = 0);
    item['application/run/print_header'] ?? (item['application/run/print_header'] = true);
    item['audio/buses/channel_disable_threshold_db'] ?? (item['audio/buses/channel_disable_threshold_db'] = -60.0);
    item['audio/buses/channel_disable_time'] ?? (item['audio/buses/channel_disable_time'] = 2.0);
    item['audio/buses/default_bus_layout'] ?? (item['audio/buses/default_bus_layout'] = "res://default_bus_layout.tres");
    //audio/driver/driver
    item['audio/driver/enable_input'] ?? (item['audio/driver/enable_input'] = false);
    item['audio/driver/mix_rate'] ?? (item['audio/driver/mix_rate'] = 44100);
    item['audio/driver/mix_rate.web'] ?? (item['audio/driver/mix_rate.web'] = 0);
    item['audio/driver/output_latency'] ?? (item['audio/driver/output_latency'] = 15);
    item['audio/driver/output_latency.web'] ?? (item['audio/driver/output_latency.web'] = 50);
    item['audio/general/2d_panning_strength'] ?? (item['audio/general/2d_panning_strength'] = 0.5);
    item['audio/general/3d_panning_strength'] ?? (item['audio/general/3d_panning_strength'] = 0.5);
    item['audio/general/default_playback_type'] ?? (item['audio/general/default_playback_type'] = 0);
    item['audio/general/default_playback_type.web'] ?? (item['audio/general/default_playback_type.web'] = 1);
    item['audio/general/ios/mix_with_others'] ?? (item['audio/general/ios/mix_with_others'] = false);
    item['audio/general/ios/session_category'] ?? (item['audio/general/ios/session_category'] = 0);
    item['audio/general/text_to_speech'] ?? (item['audio/general/text_to_speech'] = false);
    item['audio/video/video_delay_compensation_ms'] ?? (item['audio/video/video_delay_compensation_ms'] = 0);
    item['collada/use_ambient'] ?? (item['collada/use_ambient'] = false);
    item['compression/formats/gzip/compression_level'] ?? (item['compression/formats/gzip/compression_level'] = -1);
    item['compression/formats/zlib/compression_level'] ?? (item['compression/formats/zlib/compression_level'] = -1);
    item['compression/formats/zstd/compression_level'] ?? (item['compression/formats/zstd/compression_level'] = 3);
    item['compression/formats/zstd/long_distance_matching'] ?? (item['compression/formats/zstd/long_distance_matching'] = false);
    item['compression/formats/zstd/window_log_size'] ?? (item['compression/formats/zstd/window_log_size'] = 27);
    item['debug/canvas_items/debug_redraw_color'] ?? (item['debug/canvas_items/debug_redraw_color'] = create.Color(1, 0.2, 0.2, 0.5));
    item['debug/canvas_items/debug_redraw_time'] ?? (item['debug/canvas_items/debug_redraw_time'] = 1.0);
    item['debug/file_logging/enable_file_logging'] ?? (item['debug/file_logging/enable_file_logging'] = false);
    item['debug/file_logging/enable_file_logging.pc'] ?? (item['debug/file_logging/enable_file_logging.pc'] = true);
    item['debug/file_logging/log_path'] ?? (item['debug/file_logging/log_path'] = "user://logs/godot.log");
    item['debug/file_logging/max_log_files'] ?? (item['debug/file_logging/max_log_files'] = 5);
    item['debug/gdscript/warnings/assert_always_false'] ?? (item['debug/gdscript/warnings/assert_always_false'] = 1);
    item['debug/gdscript/warnings/assert_always_true'] ?? (item['debug/gdscript/warnings/assert_always_true'] = 1);
    item['debug/gdscript/warnings/confusable_capture_reassignment'] ?? (item['debug/gdscript/warnings/confusable_capture_reassignment'] = 1);
    item['debug/gdscript/warnings/confusable_identifier'] ?? (item['debug/gdscript/warnings/confusable_identifier'] = 1);
    item['debug/gdscript/warnings/confusable_local_declaration'] ?? (item['debug/gdscript/warnings/confusable_local_declaration'] = 1);
    item['debug/gdscript/warnings/confusable_local_usage'] ?? (item['debug/gdscript/warnings/confusable_local_usage'] = 1);
    item['debug/gdscript/warnings/constant_used_as_function'] ?? (item['debug/gdscript/warnings/constant_used_as_function'] = 1);
    item['debug/gdscript/warnings/deprecated_keyword'] ?? (item['debug/gdscript/warnings/deprecated_keyword'] = 1);
    item['debug/gdscript/warnings/empty_file'] ?? (item['debug/gdscript/warnings/empty_file'] = 1);
    item['debug/gdscript/warnings/enable'] ?? (item['debug/gdscript/warnings/enable'] = true);
    item['debug/gdscript/warnings/enum_variable_without_default'] ?? (item['debug/gdscript/warnings/enum_variable_without_default'] = 1);
    item['debug/gdscript/warnings/exclude_addons'] ?? (item['debug/gdscript/warnings/exclude_addons'] = true);
    item['debug/gdscript/warnings/function_used_as_property'] ?? (item['debug/gdscript/warnings/function_used_as_property'] = 1);
    item['debug/gdscript/warnings/get_node_default_without_onready'] ?? (item['debug/gdscript/warnings/get_node_default_without_onready'] = 2);
    item['debug/gdscript/warnings/incompatible_ternary'] ?? (item['debug/gdscript/warnings/incompatible_ternary'] = 1);
    item['debug/gdscript/warnings/inference_on_variant'] ?? (item['debug/gdscript/warnings/inference_on_variant'] = 2);
    item['debug/gdscript/warnings/inferred_declaration'] ?? (item['debug/gdscript/warnings/inferred_declaration'] = 0);
    item['debug/gdscript/warnings/int_as_enum_without_cast'] ?? (item['debug/gdscript/warnings/int_as_enum_without_cast'] = 1);
    item['debug/gdscript/warnings/int_as_enum_without_match'] ?? (item['debug/gdscript/warnings/int_as_enum_without_match'] = 1);
    item['debug/gdscript/warnings/integer_division'] ?? (item['debug/gdscript/warnings/integer_division'] = 1);
    item['debug/gdscript/warnings/missing_tool'] ?? (item['debug/gdscript/warnings/missing_tool'] = 1);
    item['debug/gdscript/warnings/narrowing_conversion'] ?? (item['debug/gdscript/warnings/narrowing_conversion'] = 1);
    item['debug/gdscript/warnings/native_method_override'] ?? (item['debug/gdscript/warnings/native_method_override'] = 2);
    item['debug/gdscript/warnings/onready_with_export'] ?? (item['debug/gdscript/warnings/onready_with_export'] = 2);
    item['debug/gdscript/warnings/property_used_as_function'] ?? (item['debug/gdscript/warnings/property_used_as_function'] = 1);
    item['debug/gdscript/warnings/redundant_await'] ?? (item['debug/gdscript/warnings/redundant_await'] = 1);
    item['debug/gdscript/warnings/redundant_static_unload'] ?? (item['debug/gdscript/warnings/redundant_static_unload'] = 1);
    item['debug/gdscript/warnings/renamed_in_godot_4_hint'] ?? (item['debug/gdscript/warnings/renamed_in_godot_4_hint'] = 1);
    item['debug/gdscript/warnings/return_value_discarded'] ?? (item['debug/gdscript/warnings/return_value_discarded'] = 0);
    item['debug/gdscript/warnings/shadowed_global_identifier'] ?? (item['debug/gdscript/warnings/shadowed_global_identifier'] = 1);
    item['debug/gdscript/warnings/shadowed_variable'] ?? (item['debug/gdscript/warnings/shadowed_variable'] = 1);
    item['debug/gdscript/warnings/shadowed_variable_base_class'] ?? (item['debug/gdscript/warnings/shadowed_variable_base_class'] = 1);
    item['debug/gdscript/warnings/standalone_expression'] ?? (item['debug/gdscript/warnings/standalone_expression'] = 1);
    item['debug/gdscript/warnings/standalone_ternary'] ?? (item['debug/gdscript/warnings/standalone_ternary'] = 1);
    item['debug/gdscript/warnings/static_called_on_instance'] ?? (item['debug/gdscript/warnings/static_called_on_instance'] = 1);
    item['debug/gdscript/warnings/unassigned_variable'] ?? (item['debug/gdscript/warnings/unassigned_variable'] = 1);
    item['debug/gdscript/warnings/unassigned_variable_op_assign'] ?? (item['debug/gdscript/warnings/unassigned_variable_op_assign'] = 1);
    item['debug/gdscript/warnings/unreachable_code'] ?? (item['debug/gdscript/warnings/unreachable_code'] = 1);
    item['debug/gdscript/warnings/unreachable_pattern'] ?? (item['debug/gdscript/warnings/unreachable_pattern'] = 1);
    item['debug/gdscript/warnings/unsafe_call_argument'] ?? (item['debug/gdscript/warnings/unsafe_call_argument'] = 0);
    item['debug/gdscript/warnings/unsafe_cast'] ?? (item['debug/gdscript/warnings/unsafe_cast'] = 0);
    item['debug/gdscript/warnings/unsafe_method_access'] ?? (item['debug/gdscript/warnings/unsafe_method_access'] = 0);
    item['debug/gdscript/warnings/unsafe_property_access'] ?? (item['debug/gdscript/warnings/unsafe_property_access'] = 0);
    item['debug/gdscript/warnings/unsafe_void_return'] ?? (item['debug/gdscript/warnings/unsafe_void_return'] = 1);
    item['debug/gdscript/warnings/untyped_declaration'] ?? (item['debug/gdscript/warnings/untyped_declaration'] = 0);
    item['debug/gdscript/warnings/unused_local_constant'] ?? (item['debug/gdscript/warnings/unused_local_constant'] = 1);
    item['debug/gdscript/warnings/unused_parameter'] ?? (item['debug/gdscript/warnings/unused_parameter'] = 1);
    item['debug/gdscript/warnings/unused_private_class_variable'] ?? (item['debug/gdscript/warnings/unused_private_class_variable'] = 1);
    item['debug/gdscript/warnings/unused_signal'] ?? (item['debug/gdscript/warnings/unused_signal'] = 1);
    item['debug/gdscript/warnings/unused_variable'] ?? (item['debug/gdscript/warnings/unused_variable'] = 1);
    item['debug/settings/crash_handler/message'] ?? (item['debug/settings/crash_handler/message'] = "Please include this when reporting the bug to the project developer.");
    item['debug/settings/crash_handler/message.editor'] ?? (item['debug/settings/crash_handler/message.editor'] = "Please include this when reporting the bug on: https://github.com/godotengine/godot/issues");
    item['debug/settings/gdscript/max_call_stack'] ?? (item['debug/settings/gdscript/max_call_stack'] = 1024);
    item['debug/settings/physics_interpolation/enable_warnings'] ?? (item['debug/settings/physics_interpolation/enable_warnings'] = true);
    item['debug/settings/profiler/max_functions'] ?? (item['debug/settings/profiler/max_functions'] = 16384);
    item['debug/settings/profiler/max_timestamp_query_elements'] ?? (item['debug/settings/profiler/max_timestamp_query_elements'] = 256);
    item['debug/settings/stdout/print_fps'] ?? (item['debug/settings/stdout/print_fps'] = false);
    item['debug/settings/stdout/print_gpu_profile'] ?? (item['debug/settings/stdout/print_gpu_profile'] = false);
    item['debug/settings/stdout/verbose_stdout'] ?? (item['debug/settings/stdout/verbose_stdout'] = false);
    item['debug/shader_language/warnings/device_limit_exceeded'] ?? (item['debug/shader_language/warnings/device_limit_exceeded'] = true);
    item['debug/shader_language/warnings/enable'] ?? (item['debug/shader_language/warnings/enable'] = true);
    item['debug/shader_language/warnings/float_comparison'] ?? (item['debug/shader_language/warnings/float_comparison'] = true);
    item['debug/shader_language/warnings/formatting_error'] ?? (item['debug/shader_language/warnings/formatting_error'] = true);
    item['debug/shader_language/warnings/magic_position_write'] ?? (item['debug/shader_language/warnings/magic_position_write'] = true);
    item['debug/shader_language/warnings/treat_warnings_as_errors'] ?? (item['debug/shader_language/warnings/treat_warnings_as_errors'] = false);
    item['debug/shader_language/warnings/unused_constant'] ?? (item['debug/shader_language/warnings/unused_constant'] = true);
    item['debug/shader_language/warnings/unused_function'] ?? (item['debug/shader_language/warnings/unused_function'] = true);
    item['debug/shader_language/warnings/unused_local_variable'] ?? (item['debug/shader_language/warnings/unused_local_variable'] = true);
    item['debug/shader_language/warnings/unused_struct'] ?? (item['debug/shader_language/warnings/unused_struct'] = true);
    item['debug/shader_language/warnings/unused_uniform'] ?? (item['debug/shader_language/warnings/unused_uniform'] = true);
    item['debug/shader_language/warnings/unused_varying'] ?? (item['debug/shader_language/warnings/unused_varying'] = true);
    item['debug/shapes/avoidance/agents_radius_color'] ?? (item['debug/shapes/avoidance/agents_radius_color'] = create.Color(1, 1, 0, 0.25));
    item['debug/shapes/avoidance/enable_agents_radius'] ?? (item['debug/shapes/avoidance/enable_agents_radius'] = true);
    item['debug/shapes/avoidance/enable_obstacles_radius'] ?? (item['debug/shapes/avoidance/enable_obstacles_radius'] = true);
    item['debug/shapes/avoidance/enable_obstacles_static'] ?? (item['debug/shapes/avoidance/enable_obstacles_static'] = true);
    item['debug/shapes/avoidance/obstacles_radius_color'] ?? (item['debug/shapes/avoidance/obstacles_radius_color'] = create.Color(1, 0.5, 0, 0.25));
    item['debug/shapes/avoidance/obstacles_static_edge_pushin_color'] ?? (item['debug/shapes/avoidance/obstacles_static_edge_pushin_color'] = create.Color(1, 0, 0, 1));
    item['debug/shapes/avoidance/obstacles_static_edge_pushout_color'] ?? (item['debug/shapes/avoidance/obstacles_static_edge_pushout_color'] = create.Color(1, 1, 0, 1));
    item['debug/shapes/avoidance/obstacles_static_face_pushin_color'] ?? (item['debug/shapes/avoidance/obstacles_static_face_pushin_color'] = create.Color(1, 0, 0, 0));
    item['debug/shapes/avoidance/obstacles_static_face_pushout_color'] ?? (item['debug/shapes/avoidance/obstacles_static_face_pushout_color'] = create.Color(1, 1, 0, 0.5));
    item['debug/shapes/collision/contact_color'] ?? (item['debug/shapes/collision/contact_color'] = create.Color(1, 0.2, 0.1, 0.8));
    item['debug/shapes/collision/draw_2d_outlines'] ?? (item['debug/shapes/collision/draw_2d_outlines'] = true);
    item['debug/shapes/collision/max_contacts_displayed'] ?? (item['debug/shapes/collision/max_contacts_displayed'] = 10000);
    item['debug/shapes/collision/shape_color'] ?? (item['debug/shapes/collision/shape_color'] = create.Color(0, 0.6, 0.7, 0.42));
    item['debug/shapes/navigation/agent_path_color'] ?? (item['debug/shapes/navigation/agent_path_color'] = create.Color(1, 0, 0, 1));
    item['debug/shapes/navigation/agent_path_point_size'] ?? (item['debug/shapes/navigation/agent_path_point_size'] = 4.0);
    item['debug/shapes/navigation/edge_connection_color'] ?? (item['debug/shapes/navigation/edge_connection_color'] = create.Color(1, 0, 1, 1));
    item['debug/shapes/navigation/enable_agent_paths'] ?? (item['debug/shapes/navigation/enable_agent_paths'] = true);
    item['debug/shapes/navigation/enable_agent_paths_xray'] ?? (item['debug/shapes/navigation/enable_agent_paths_xray'] = true);
    item['debug/shapes/navigation/enable_edge_connections'] ?? (item['debug/shapes/navigation/enable_edge_connections'] = true);
    item['debug/shapes/navigation/enable_edge_connections_xray'] ?? (item['debug/shapes/navigation/enable_edge_connections_xray'] = true);
    item['debug/shapes/navigation/enable_edge_lines'] ?? (item['debug/shapes/navigation/enable_edge_lines'] = true);
    item['debug/shapes/navigation/enable_edge_lines_xray'] ?? (item['debug/shapes/navigation/enable_edge_lines_xray'] = true);
    item['debug/shapes/navigation/enable_geometry_face_random_color'] ?? (item['debug/shapes/navigation/enable_geometry_face_random_color'] = true);
    item['debug/shapes/navigation/enable_link_connections'] ?? (item['debug/shapes/navigation/enable_link_connections'] = true);
    item['debug/shapes/navigation/enable_link_connections_xray'] ?? (item['debug/shapes/navigation/enable_link_connections_xray'] = true);
    item['debug/shapes/navigation/geometry_edge_color'] ?? (item['debug/shapes/navigation/geometry_edge_color'] = create.Color(0.5, 1, 1, 1));
    item['debug/shapes/navigation/geometry_edge_disabled_color'] ?? (item['debug/shapes/navigation/geometry_edge_disabled_color'] = create.Color(0.5, 0.5, 0.5, 1));
    item['debug/shapes/navigation/geometry_face_color'] ?? (item['debug/shapes/navigation/geometry_face_color'] = create.Color(0.5, 1, 1, 0.4));
    item['debug/shapes/navigation/geometry_face_disabled_color'] ?? (item['debug/shapes/navigation/geometry_face_disabled_color'] = create.Color(0.5, 0.5, 0.5, 0.4));
    item['debug/shapes/navigation/link_connection_color'] ?? (item['debug/shapes/navigation/link_connection_color'] = create.Color(1, 0.5, 1, 1));
    item['debug/shapes/navigation/link_connection_disabled_color'] ?? (item['debug/shapes/navigation/link_connection_disabled_color'] = create.Color(0.5, 0.5, 0.5, 1));
    item['debug/shapes/paths/geometry_color'] ?? (item['debug/shapes/paths/geometry_color'] = create.Color(0.1, 1, 0.7, 0.4));
    item['debug/shapes/paths/geometry_width'] ?? (item['debug/shapes/paths/geometry_width'] = 2.0);
    //display/display_server/driver
    //display/display_server/driver.android
    //display/display_server/driver.ios
    //display/display_server/driver.linuxbsd
    //display/display_server/driver.macos
    //display/display_server/driver.windows
    item['display/mouse_cursor/custom_image'] ?? (item['display/mouse_cursor/custom_image'] = "");
    item['display/mouse_cursor/custom_image_hotspot'] ?? (item['display/mouse_cursor/custom_image_hotspot'] = create.Vector2(0, 0));
    item['display/mouse_cursor/tooltip_position_offset'] ?? (item['display/mouse_cursor/tooltip_position_offset'] = create.Vector2(10, 10));
    item['display/window/dpi/allow_hidpi'] ?? (item['display/window/dpi/allow_hidpi'] = true);
    item['display/window/energy_saving/keep_screen_on'] ?? (item['display/window/energy_saving/keep_screen_on'] = true);
    item['display/window/frame_pacing/android/enable_frame_pacing'] ?? (item['display/window/frame_pacing/android/enable_frame_pacing'] = true);
    item['display/window/frame_pacing/android/swappy_mode'] ?? (item['display/window/frame_pacing/android/swappy_mode'] = 2);
    item['display/window/handheld/orientation'] ?? (item['display/window/handheld/orientation'] = 0);
    item['display/window/ios/allow_high_refresh_rate'] ?? (item['display/window/ios/allow_high_refresh_rate'] = true);
    item['display/window/ios/hide_home_indicator'] ?? (item['display/window/ios/hide_home_indicator'] = true);
    item['display/window/ios/hide_status_bar'] ?? (item['display/window/ios/hide_status_bar'] = true);
    item['display/window/ios/suppress_ui_gesture'] ?? (item['display/window/ios/suppress_ui_gesture'] = true);
    item['display/window/per_pixel_transparency/allowed'] ?? (item['display/window/per_pixel_transparency/allowed'] = false);
    item['display/window/size/always_on_top'] ?? (item['display/window/size/always_on_top'] = false);
    item['display/window/size/borderless'] ?? (item['display/window/size/borderless'] = false);
    item['display/window/size/extend_to_title'] ?? (item['display/window/size/extend_to_title'] = false);
    item['display/window/size/initial_position'] ?? (item['display/window/size/initial_position'] = create.Vector2i(0, 0));
    item['display/window/size/initial_position_type'] ?? (item['display/window/size/initial_position_type'] = 1);
    item['display/window/size/initial_screen'] ?? (item['display/window/size/initial_screen'] = 0);
    item['display/window/size/mode'] ?? (item['display/window/size/mode'] = 0);
    item['display/window/size/no_focus'] ?? (item['display/window/size/no_focus'] = false);
    item['display/window/size/resizable'] ?? (item['display/window/size/resizable'] = true);
    item['display/window/size/sharp_corners'] ?? (item['display/window/size/sharp_corners'] = false);
    item['display/window/size/transparent'] ?? (item['display/window/size/transparent'] = false);
    item['display/window/size/viewport_height'] ?? (item['display/window/size/viewport_height'] = 648);
    item['display/window/size/viewport_width'] ?? (item['display/window/size/viewport_width'] = 1152);
    item['display/window/size/window_height_override'] ?? (item['display/window/size/window_height_override'] = 0);
    item['display/window/size/window_width_override'] ?? (item['display/window/size/window_width_override'] = 0);
    item['display/window/stretch/aspect'] ?? (item['display/window/stretch/aspect'] = "keep");
    item['display/window/stretch/mode'] ?? (item['display/window/stretch/mode'] = "disabled");
    item['display/window/stretch/scale'] ?? (item['display/window/stretch/scale'] = 1.0);
    item['display/window/stretch/scale_mode'] ?? (item['display/window/stretch/scale_mode'] = "fractional");
    item['display/window/subwindows/embed_subwindows'] ?? (item['display/window/subwindows/embed_subwindows'] = true);
    item['display/window/vsync/vsync_mode'] ?? (item['display/window/vsync/vsync_mode'] = 1);
    item['dotnet/project/assembly_name'] ?? (item['dotnet/project/assembly_name'] = "");
    item['dotnet/project/assembly_reload_attempts'] ?? (item['dotnet/project/assembly_reload_attempts'] = 3);
    item['dotnet/project/solution_directory'] ?? (item['dotnet/project/solution_directory'] = "");
    item['editor/export/convert_text_resources_to_binary'] ?? (item['editor/export/convert_text_resources_to_binary'] = true);
    item['editor/import/atlas_max_width'] ?? (item['editor/import/atlas_max_width'] = 2048);
    item['editor/import/reimport_missing_imported_files'] ?? (item['editor/import/reimport_missing_imported_files'] = true);
    item['editor/import/use_multiple_threads'] ?? (item['editor/import/use_multiple_threads'] = true);
    item['editor/movie_writer/disable_vsync'] ?? (item['editor/movie_writer/disable_vsync'] = false);
    item['editor/movie_writer/fps'] ?? (item['editor/movie_writer/fps'] = 60);
    item['editor/movie_writer/mix_rate'] ?? (item['editor/movie_writer/mix_rate'] = 48000);
    item['editor/movie_writer/mjpeg_quality'] ?? (item['editor/movie_writer/mjpeg_quality'] = 0.75);
    item['editor/movie_writer/movie_file'] ?? (item['editor/movie_writer/movie_file'] = "");
    item['editor/movie_writer/speaker_mode'] ?? (item['editor/movie_writer/speaker_mode'] = 0);
    //editor/naming/default_signal_callback_name = "_on_{node_name}_{signal_name}"
    //editor/naming/default_signal_callback_to_self_name = "_on_{signal_name}"
    item['editor/naming/node_name_casing'] ?? (item['editor/naming/node_name_casing'] = 0);
    item['editor/naming/node_name_num_separator'] ?? (item['editor/naming/node_name_num_separator'] = 0);
    item['editor/naming/scene_name_casing'] ?? (item['editor/naming/scene_name_casing'] = 2);
    item['editor/naming/script_name_casing'] ?? (item['editor/naming/script_name_casing'] = 0);
    item['editor/run/main_run_args'] ?? (item['editor/run/main_run_args'] = "");
    //editor/script/search_in_file_extensions
    item['editor/script/templates_search_path'] ?? (item['editor/script/templates_search_path'] = "res://script_templates");
    item['editor/version_control/autoload_on_startup'] ?? (item['editor/version_control/autoload_on_startup'] = false);
    item['editor/version_control/plugin_name'] ?? (item['editor/version_control/plugin_name'] = "");
    item['filesystem/import/blender/enabled'] ?? (item['filesystem/import/blender/enabled'] = true);
    item['filesystem/import/blender/enabled.android'] ?? (item['filesystem/import/blender/enabled.android'] = false);
    item['filesystem/import/blender/enabled.web'] ?? (item['filesystem/import/blender/enabled.web'] = false);
    item['filesystem/import/fbx2gltf/enabled'] ?? (item['filesystem/import/fbx2gltf/enabled'] = true);
    item['filesystem/import/fbx2gltf/enabled.android'] ?? (item['filesystem/import/fbx2gltf/enabled.android'] = false);
    item['filesystem/import/fbx2gltf/enabled.web'] ?? (item['filesystem/import/fbx2gltf/enabled.web'] = false);
    item['gui/common/default_scroll_deadzone'] ?? (item['gui/common/default_scroll_deadzone'] = 0);
    item['gui/common/snap_controls_to_pixels'] ?? (item['gui/common/snap_controls_to_pixels'] = true);
    //gui/common/swap_cancel_ok
    item['gui/common/text_edit_undo_stack_max_size'] ?? (item['gui/common/text_edit_undo_stack_max_size'] = 1024);
    item['gui/fonts/dynamic_fonts/use_oversampling'] ?? (item['gui/fonts/dynamic_fonts/use_oversampling'] = true);
    item['gui/theme/custom'] ?? (item['gui/theme/custom'] = "");
    item['gui/theme/custom_font'] ?? (item['gui/theme/custom_font'] = "");
    item['gui/theme/default_font_antialiasing'] ?? (item['gui/theme/default_font_antialiasing'] = 1);
    item['gui/theme/default_font_generate_mipmaps'] ?? (item['gui/theme/default_font_generate_mipmaps'] = false);
    item['gui/theme/default_font_hinting'] ?? (item['gui/theme/default_font_hinting'] = 1);
    item['gui/theme/default_font_multichannel_signed_distance_field'] ?? (item['gui/theme/default_font_multichannel_signed_distance_field'] = false);
    item['gui/theme/default_font_subpixel_positioning'] ?? (item['gui/theme/default_font_subpixel_positioning'] = 1);
    item['gui/theme/default_theme_scale'] ?? (item['gui/theme/default_theme_scale'] = 1.0);
    item['gui/theme/lcd_subpixel_layout'] ?? (item['gui/theme/lcd_subpixel_layout'] = 1);
    item['gui/timers/button_shortcut_feedback_highlight_time'] ?? (item['gui/timers/button_shortcut_feedback_highlight_time'] = 0.2);
    item['gui/timers/incremental_search_max_interval_msec'] ?? (item['gui/timers/incremental_search_max_interval_msec'] = 2000);
    item['gui/timers/text_edit_idle_detect_sec'] ?? (item['gui/timers/text_edit_idle_detect_sec'] = 3);
    item['gui/timers/tooltip_delay_sec'] ?? (item['gui/timers/tooltip_delay_sec'] = 0.5);
    item['gui/timers/tooltip_delay_sec.editor_hint'] ?? (item['gui/timers/tooltip_delay_sec.editor_hint'] = 0.5);
    //input/ui_accept
    //input/ui_cancel
    //input/ui_copy
    //input/ui_cut
    //input/ui_down
    //input/ui_end
    //input/ui_filedialog_refresh
    //input/ui_filedialog_show_hidden
    //input/ui_filedialog_up_one_level
    //input/ui_focus_next
    //input/ui_focus_prev
    //input/ui_graph_delete
    //input/ui_graph_duplicate
    //input/ui_home
    //input/ui_left
    //input/ui_menu
    //input/ui_page_down
    //input/ui_page_up
    //input/ui_paste
    //input/ui_redo
    //input/ui_right
    //input/ui_select
    //input/ui_swap_input_direction
    //input/ui_text_add_selection_for_next_occurrence
    //input/ui_text_backspace
    //input/ui_text_backspace_all_to_left
    //input/ui_text_backspace_all_to_left.macos
    //input/ui_text_backspace_word
    //input/ui_text_backspace_word.macos
    //input/ui_text_caret_add_above
    //input/ui_text_caret_add_above.macos
    //input/ui_text_caret_add_below
    //input/ui_text_caret_add_below.macos
    //input/ui_text_caret_document_end
    //input/ui_text_caret_document_end.macos
    //input/ui_text_caret_document_start
    //input/ui_text_caret_document_start.macos
    //input/ui_text_caret_down
    //input/ui_text_caret_left
    //input/ui_text_caret_line_end
    //input/ui_text_caret_line_end.macos
    //input/ui_text_caret_line_start
    //input/ui_text_caret_line_start.macos
    //input/ui_text_caret_page_down
    //input/ui_text_caret_page_up
    //input/ui_text_caret_right
    //input/ui_text_caret_up
    //input/ui_text_caret_word_left
    //input/ui_text_caret_word_left.macos
    //input/ui_text_caret_word_right
    //input/ui_text_caret_word_right.macos
    //input/ui_text_clear_carets_and_selection
    //input/ui_text_completion_accept
    //input/ui_text_completion_query
    //input/ui_text_completion_replace
    //input/ui_text_dedent
    //input/ui_text_delete
    //input/ui_text_delete_all_to_right
    //input/ui_text_delete_all_to_right.macos
    //input/ui_text_delete_word
    //input/ui_text_delete_word.macos
    //input/ui_text_indent
    //input/ui_text_newline
    //input/ui_text_newline_above
    //input/ui_text_newline_blank
    //input/ui_text_scroll_down
    //input/ui_text_scroll_down.macos
    //input/ui_text_scroll_up
    //input/ui_text_scroll_up.macos
    //input/ui_text_select_all
    //input/ui_text_select_word_under_caret
    //input/ui_text_select_word_under_caret.macos
    //input/ui_text_skip_selection_for_next_occurrence
    //input/ui_text_submit
    //input/ui_text_toggle_insert_mode
    //input/ui_undo
    //input/ui_unicode_start
    //input/ui_up
    item['input_devices/buffering/agile_event_flushing'] ?? (item['input_devices/buffering/agile_event_flushing'] = false);
    item['input_devices/compatibility/legacy_just_pressed_behavior'] ?? (item['input_devices/compatibility/legacy_just_pressed_behavior'] = false);
    //input_devices/pen_tablet/driver
    //input_devices/pen_tablet/driver.windows
    item['input_devices/pointing/android/enable_long_press_as_right_click'] ?? (item['input_devices/pointing/android/enable_long_press_as_right_click'] = false);
    item['input_devices/pointing/android/enable_pan_and_scale_gestures'] ?? (item['input_devices/pointing/android/enable_pan_and_scale_gestures'] = false);
    item['input_devices/pointing/android/rotary_input_scroll_axis'] ?? (item['input_devices/pointing/android/rotary_input_scroll_axis'] = 1);
    item['input_devices/pointing/emulate_mouse_from_touch'] ?? (item['input_devices/pointing/emulate_mouse_from_touch'] = true);
    item['input_devices/pointing/emulate_touch_from_mouse'] ?? (item['input_devices/pointing/emulate_touch_from_mouse'] = false);
    item['input_devices/sensors/enable_accelerometer'] ?? (item['input_devices/sensors/enable_accelerometer'] = false);
    item['input_devices/sensors/enable_gravity'] ?? (item['input_devices/sensors/enable_gravity'] = false);
    item['input_devices/sensors/enable_gyroscope'] ?? (item['input_devices/sensors/enable_gyroscope'] = false);
    item['input_devices/sensors/enable_magnetometer'] ?? (item['input_devices/sensors/enable_magnetometer'] = false);
    item['internationalization/locale/fallback'] ?? (item['internationalization/locale/fallback'] = "en");
    item['internationalization/locale/include_text_server_data'] ?? (item['internationalization/locale/include_text_server_data'] = false);
    item['internationalization/locale/test'] ?? (item['internationalization/locale/test'] = "");
    item['internationalization/pseudolocalization/double_vowels'] ?? (item['internationalization/pseudolocalization/double_vowels'] = false);
    item['internationalization/pseudolocalization/expansion_ratio'] ?? (item['internationalization/pseudolocalization/expansion_ratio'] = 0.0);
    item['internationalization/pseudolocalization/fake_bidi'] ?? (item['internationalization/pseudolocalization/fake_bidi'] = false);
    item['internationalization/pseudolocalization/override'] ?? (item['internationalization/pseudolocalization/override'] = false);
    item['internationalization/pseudolocalization/prefix'] ?? (item['internationalization/pseudolocalization/prefix'] = "[");
    item['internationalization/pseudolocalization/replace_with_accents'] ?? (item['internationalization/pseudolocalization/replace_with_accents'] = true);
    item['internationalization/pseudolocalization/skip_placeholders'] ?? (item['internationalization/pseudolocalization/skip_placeholders'] = true);
    item['internationalization/pseudolocalization/suffix'] ?? (item['internationalization/pseudolocalization/suffix'] = "]");
    item['internationalization/pseudolocalization/use_pseudolocalization'] ?? (item['internationalization/pseudolocalization/use_pseudolocalization'] = false);
    item['internationalization/rendering/force_right_to_left_layout_direction'] ?? (item['internationalization/rendering/force_right_to_left_layout_direction'] = false);
    item['internationalization/rendering/root_node_auto_translate'] ?? (item['internationalization/rendering/root_node_auto_translate'] = true);
    item['internationalization/rendering/root_node_layout_direction'] ?? (item['internationalization/rendering/root_node_layout_direction'] = 0);
    item['internationalization/rendering/text_driver'] ?? (item['internationalization/rendering/text_driver'] = "");
    item['layer_names/2d_navigation/layer_1'] ?? (item['layer_names/2d_navigation/layer_1'] = "");
    item['layer_names/2d_navigation/layer_2'] ?? (item['layer_names/2d_navigation/layer_2'] = "");
    item['layer_names/2d_navigation/layer_3'] ?? (item['layer_names/2d_navigation/layer_3'] = "");
    item['layer_names/2d_navigation/layer_4'] ?? (item['layer_names/2d_navigation/layer_4'] = "");
    item['layer_names/2d_navigation/layer_5'] ?? (item['layer_names/2d_navigation/layer_5'] = "");
    item['layer_names/2d_navigation/layer_6'] ?? (item['layer_names/2d_navigation/layer_6'] = "");
    item['layer_names/2d_navigation/layer_7'] ?? (item['layer_names/2d_navigation/layer_7'] = "");
    item['layer_names/2d_navigation/layer_8'] ?? (item['layer_names/2d_navigation/layer_8'] = "");
    item['layer_names/2d_navigation/layer_9'] ?? (item['layer_names/2d_navigation/layer_9'] = "");
    item['layer_names/2d_navigation/layer_10'] ?? (item['layer_names/2d_navigation/layer_10'] = "");
    item['layer_names/2d_navigation/layer_11'] ?? (item['layer_names/2d_navigation/layer_11'] = "");
    item['layer_names/2d_navigation/layer_12'] ?? (item['layer_names/2d_navigation/layer_12'] = "");
    item['layer_names/2d_navigation/layer_13'] ?? (item['layer_names/2d_navigation/layer_13'] = "");
    item['layer_names/2d_navigation/layer_14'] ?? (item['layer_names/2d_navigation/layer_14'] = "");
    item['layer_names/2d_navigation/layer_15'] ?? (item['layer_names/2d_navigation/layer_15'] = "");
    item['layer_names/2d_navigation/layer_16'] ?? (item['layer_names/2d_navigation/layer_16'] = "");
    item['layer_names/2d_navigation/layer_17'] ?? (item['layer_names/2d_navigation/layer_17'] = "");
    item['layer_names/2d_navigation/layer_18'] ?? (item['layer_names/2d_navigation/layer_18'] = "");
    item['layer_names/2d_navigation/layer_19'] ?? (item['layer_names/2d_navigation/layer_19'] = "");
    item['layer_names/2d_navigation/layer_20'] ?? (item['layer_names/2d_navigation/layer_20'] = "");
    item['layer_names/2d_navigation/layer_21'] ?? (item['layer_names/2d_navigation/layer_21'] = "");
    item['layer_names/2d_navigation/layer_22'] ?? (item['layer_names/2d_navigation/layer_22'] = "");
    item['layer_names/2d_navigation/layer_23'] ?? (item['layer_names/2d_navigation/layer_23'] = "");
    item['layer_names/2d_navigation/layer_24'] ?? (item['layer_names/2d_navigation/layer_24'] = "");
    item['layer_names/2d_navigation/layer_25'] ?? (item['layer_names/2d_navigation/layer_25'] = "");
    item['layer_names/2d_navigation/layer_26'] ?? (item['layer_names/2d_navigation/layer_26'] = "");
    item['layer_names/2d_navigation/layer_27'] ?? (item['layer_names/2d_navigation/layer_27'] = "");
    item['layer_names/2d_navigation/layer_28'] ?? (item['layer_names/2d_navigation/layer_28'] = "");
    item['layer_names/2d_navigation/layer_29'] ?? (item['layer_names/2d_navigation/layer_29'] = "");
    item['layer_names/2d_navigation/layer_30'] ?? (item['layer_names/2d_navigation/layer_30'] = "");
    item['layer_names/2d_navigation/layer_31'] ?? (item['layer_names/2d_navigation/layer_31'] = "");
    item['layer_names/2d_navigation/layer_32'] ?? (item['layer_names/2d_navigation/layer_32'] = "");
    item['layer_names/2d_physics/layer_1'] ?? (item['layer_names/2d_physics/layer_1'] = "");
    item['layer_names/2d_physics/layer_2'] ?? (item['layer_names/2d_physics/layer_2'] = "");
    item['layer_names/2d_physics/layer_3'] ?? (item['layer_names/2d_physics/layer_3'] = "");
    item['layer_names/2d_physics/layer_4'] ?? (item['layer_names/2d_physics/layer_4'] = "");
    item['layer_names/2d_physics/layer_5'] ?? (item['layer_names/2d_physics/layer_5'] = "");
    item['layer_names/2d_physics/layer_6'] ?? (item['layer_names/2d_physics/layer_6'] = "");
    item['layer_names/2d_physics/layer_7'] ?? (item['layer_names/2d_physics/layer_7'] = "");
    item['layer_names/2d_physics/layer_8'] ?? (item['layer_names/2d_physics/layer_8'] = "");
    item['layer_names/2d_physics/layer_9'] ?? (item['layer_names/2d_physics/layer_9'] = "");
    item['layer_names/2d_physics/layer_10'] ?? (item['layer_names/2d_physics/layer_10'] = "");
    item['layer_names/2d_physics/layer_11'] ?? (item['layer_names/2d_physics/layer_11'] = "");
    item['layer_names/2d_physics/layer_12'] ?? (item['layer_names/2d_physics/layer_12'] = "");
    item['layer_names/2d_physics/layer_13'] ?? (item['layer_names/2d_physics/layer_13'] = "");
    item['layer_names/2d_physics/layer_14'] ?? (item['layer_names/2d_physics/layer_14'] = "");
    item['layer_names/2d_physics/layer_15'] ?? (item['layer_names/2d_physics/layer_15'] = "");
    item['layer_names/2d_physics/layer_16'] ?? (item['layer_names/2d_physics/layer_16'] = "");
    item['layer_names/2d_physics/layer_17'] ?? (item['layer_names/2d_physics/layer_17'] = "");
    item['layer_names/2d_physics/layer_18'] ?? (item['layer_names/2d_physics/layer_18'] = "");
    item['layer_names/2d_physics/layer_19'] ?? (item['layer_names/2d_physics/layer_19'] = "");
    item['layer_names/2d_physics/layer_20'] ?? (item['layer_names/2d_physics/layer_20'] = "");
    item['layer_names/2d_physics/layer_21'] ?? (item['layer_names/2d_physics/layer_21'] = "");
    item['layer_names/2d_physics/layer_22'] ?? (item['layer_names/2d_physics/layer_22'] = "");
    item['layer_names/2d_physics/layer_23'] ?? (item['layer_names/2d_physics/layer_23'] = "");
    item['layer_names/2d_physics/layer_24'] ?? (item['layer_names/2d_physics/layer_24'] = "");
    item['layer_names/2d_physics/layer_25'] ?? (item['layer_names/2d_physics/layer_25'] = "");
    item['layer_names/2d_physics/layer_26'] ?? (item['layer_names/2d_physics/layer_26'] = "");
    item['layer_names/2d_physics/layer_27'] ?? (item['layer_names/2d_physics/layer_27'] = "");
    item['layer_names/2d_physics/layer_28'] ?? (item['layer_names/2d_physics/layer_28'] = "");
    item['layer_names/2d_physics/layer_29'] ?? (item['layer_names/2d_physics/layer_29'] = "");
    item['layer_names/2d_physics/layer_30'] ?? (item['layer_names/2d_physics/layer_30'] = "");
    item['layer_names/2d_physics/layer_31'] ?? (item['layer_names/2d_physics/layer_31'] = "");
    item['layer_names/2d_physics/layer_32'] ?? (item['layer_names/2d_physics/layer_32'] = "");
    item['layer_names/2d_render/layer_1'] ?? (item['layer_names/2d_render/layer_1'] = "");
    item['layer_names/2d_render/layer_2'] ?? (item['layer_names/2d_render/layer_2'] = "");
    item['layer_names/2d_render/layer_3'] ?? (item['layer_names/2d_render/layer_3'] = "");
    item['layer_names/2d_render/layer_4'] ?? (item['layer_names/2d_render/layer_4'] = "");
    item['layer_names/2d_render/layer_5'] ?? (item['layer_names/2d_render/layer_5'] = "");
    item['layer_names/2d_render/layer_6'] ?? (item['layer_names/2d_render/layer_6'] = "");
    item['layer_names/2d_render/layer_7'] ?? (item['layer_names/2d_render/layer_7'] = "");
    item['layer_names/2d_render/layer_8'] ?? (item['layer_names/2d_render/layer_8'] = "");
    item['layer_names/2d_render/layer_9'] ?? (item['layer_names/2d_render/layer_9'] = "");
    item['layer_names/2d_render/layer_10'] ?? (item['layer_names/2d_render/layer_10'] = "");
    item['layer_names/2d_render/layer_11'] ?? (item['layer_names/2d_render/layer_11'] = "");
    item['layer_names/2d_render/layer_12'] ?? (item['layer_names/2d_render/layer_12'] = "");
    item['layer_names/2d_render/layer_13'] ?? (item['layer_names/2d_render/layer_13'] = "");
    item['layer_names/2d_render/layer_14'] ?? (item['layer_names/2d_render/layer_14'] = "");
    item['layer_names/2d_render/layer_15'] ?? (item['layer_names/2d_render/layer_15'] = "");
    item['layer_names/2d_render/layer_16'] ?? (item['layer_names/2d_render/layer_16'] = "");
    item['layer_names/2d_render/layer_17'] ?? (item['layer_names/2d_render/layer_17'] = "");
    item['layer_names/2d_render/layer_18'] ?? (item['layer_names/2d_render/layer_18'] = "");
    item['layer_names/2d_render/layer_19'] ?? (item['layer_names/2d_render/layer_19'] = "");
    item['layer_names/2d_render/layer_20'] ?? (item['layer_names/2d_render/layer_20'] = "");
    item['layer_names/3d_navigation/layer_1'] ?? (item['layer_names/3d_navigation/layer_1'] = "");
    item['layer_names/3d_navigation/layer_2'] ?? (item['layer_names/3d_navigation/layer_2'] = "");
    item['layer_names/3d_navigation/layer_3'] ?? (item['layer_names/3d_navigation/layer_3'] = "");
    item['layer_names/3d_navigation/layer_4'] ?? (item['layer_names/3d_navigation/layer_4'] = "");
    item['layer_names/3d_navigation/layer_5'] ?? (item['layer_names/3d_navigation/layer_5'] = "");
    item['layer_names/3d_navigation/layer_6'] ?? (item['layer_names/3d_navigation/layer_6'] = "");
    item['layer_names/3d_navigation/layer_7'] ?? (item['layer_names/3d_navigation/layer_7'] = "");
    item['layer_names/3d_navigation/layer_8'] ?? (item['layer_names/3d_navigation/layer_8'] = "");
    item['layer_names/3d_navigation/layer_9'] ?? (item['layer_names/3d_navigation/layer_9'] = "");
    item['layer_names/3d_navigation/layer_10'] ?? (item['layer_names/3d_navigation/layer_10'] = "");
    item['layer_names/3d_navigation/layer_11'] ?? (item['layer_names/3d_navigation/layer_11'] = "");
    item['layer_names/3d_navigation/layer_12'] ?? (item['layer_names/3d_navigation/layer_12'] = "");
    item['layer_names/3d_navigation/layer_13'] ?? (item['layer_names/3d_navigation/layer_13'] = "");
    item['layer_names/3d_navigation/layer_14'] ?? (item['layer_names/3d_navigation/layer_14'] = "");
    item['layer_names/3d_navigation/layer_15'] ?? (item['layer_names/3d_navigation/layer_15'] = "");
    item['layer_names/3d_navigation/layer_16'] ?? (item['layer_names/3d_navigation/layer_16'] = "");
    item['layer_names/3d_navigation/layer_17'] ?? (item['layer_names/3d_navigation/layer_17'] = "");
    item['layer_names/3d_navigation/layer_18'] ?? (item['layer_names/3d_navigation/layer_18'] = "");
    item['layer_names/3d_navigation/layer_19'] ?? (item['layer_names/3d_navigation/layer_19'] = "");
    item['layer_names/3d_navigation/layer_20'] ?? (item['layer_names/3d_navigation/layer_20'] = "");
    item['layer_names/3d_navigation/layer_21'] ?? (item['layer_names/3d_navigation/layer_21'] = "");
    item['layer_names/3d_navigation/layer_22'] ?? (item['layer_names/3d_navigation/layer_22'] = "");
    item['layer_names/3d_navigation/layer_23'] ?? (item['layer_names/3d_navigation/layer_23'] = "");
    item['layer_names/3d_navigation/layer_24'] ?? (item['layer_names/3d_navigation/layer_24'] = "");
    item['layer_names/3d_navigation/layer_25'] ?? (item['layer_names/3d_navigation/layer_25'] = "");
    item['layer_names/3d_navigation/layer_26'] ?? (item['layer_names/3d_navigation/layer_26'] = "");
    item['layer_names/3d_navigation/layer_27'] ?? (item['layer_names/3d_navigation/layer_27'] = "");
    item['layer_names/3d_navigation/layer_28'] ?? (item['layer_names/3d_navigation/layer_28'] = "");
    item['layer_names/3d_navigation/layer_29'] ?? (item['layer_names/3d_navigation/layer_29'] = "");
    item['layer_names/3d_navigation/layer_30'] ?? (item['layer_names/3d_navigation/layer_30'] = "");
    item['layer_names/3d_navigation/layer_31'] ?? (item['layer_names/3d_navigation/layer_31'] = "");
    item['layer_names/3d_navigation/layer_32'] ?? (item['layer_names/3d_navigation/layer_32'] = "");
    item['layer_names/3d_physics/layer_1'] ?? (item['layer_names/3d_physics/layer_1'] = "");
    item['layer_names/3d_physics/layer_2'] ?? (item['layer_names/3d_physics/layer_2'] = "");
    item['layer_names/3d_physics/layer_3'] ?? (item['layer_names/3d_physics/layer_3'] = "");
    item['layer_names/3d_physics/layer_4'] ?? (item['layer_names/3d_physics/layer_4'] = "");
    item['layer_names/3d_physics/layer_5'] ?? (item['layer_names/3d_physics/layer_5'] = "");
    item['layer_names/3d_physics/layer_6'] ?? (item['layer_names/3d_physics/layer_6'] = "");
    item['layer_names/3d_physics/layer_7'] ?? (item['layer_names/3d_physics/layer_7'] = "");
    item['layer_names/3d_physics/layer_8'] ?? (item['layer_names/3d_physics/layer_8'] = "");
    item['layer_names/3d_physics/layer_9'] ?? (item['layer_names/3d_physics/layer_9'] = "");
    item['layer_names/3d_physics/layer_10'] ?? (item['layer_names/3d_physics/layer_10'] = "");
    item['layer_names/3d_physics/layer_11'] ?? (item['layer_names/3d_physics/layer_11'] = "");
    item['layer_names/3d_physics/layer_12'] ?? (item['layer_names/3d_physics/layer_12'] = "");
    item['layer_names/3d_physics/layer_13'] ?? (item['layer_names/3d_physics/layer_13'] = "");
    item['layer_names/3d_physics/layer_14'] ?? (item['layer_names/3d_physics/layer_14'] = "");
    item['layer_names/3d_physics/layer_15'] ?? (item['layer_names/3d_physics/layer_15'] = "");
    item['layer_names/3d_physics/layer_16'] ?? (item['layer_names/3d_physics/layer_16'] = "");
    item['layer_names/3d_physics/layer_17'] ?? (item['layer_names/3d_physics/layer_17'] = "");
    item['layer_names/3d_physics/layer_18'] ?? (item['layer_names/3d_physics/layer_18'] = "");
    item['layer_names/3d_physics/layer_19'] ?? (item['layer_names/3d_physics/layer_19'] = "");
    item['layer_names/3d_physics/layer_20'] ?? (item['layer_names/3d_physics/layer_20'] = "");
    item['layer_names/3d_physics/layer_21'] ?? (item['layer_names/3d_physics/layer_21'] = "");
    item['layer_names/3d_physics/layer_22'] ?? (item['layer_names/3d_physics/layer_22'] = "");
    item['layer_names/3d_physics/layer_23'] ?? (item['layer_names/3d_physics/layer_23'] = "");
    item['layer_names/3d_physics/layer_24'] ?? (item['layer_names/3d_physics/layer_24'] = "");
    item['layer_names/3d_physics/layer_25'] ?? (item['layer_names/3d_physics/layer_25'] = "");
    item['layer_names/3d_physics/layer_26'] ?? (item['layer_names/3d_physics/layer_26'] = "");
    item['layer_names/3d_physics/layer_27'] ?? (item['layer_names/3d_physics/layer_27'] = "");
    item['layer_names/3d_physics/layer_28'] ?? (item['layer_names/3d_physics/layer_28'] = "");
    item['layer_names/3d_physics/layer_29'] ?? (item['layer_names/3d_physics/layer_29'] = "");
    item['layer_names/3d_physics/layer_30'] ?? (item['layer_names/3d_physics/layer_30'] = "");
    item['layer_names/3d_physics/layer_31'] ?? (item['layer_names/3d_physics/layer_31'] = "");
    item['layer_names/3d_physics/layer_32'] ?? (item['layer_names/3d_physics/layer_32'] = "");
    item['layer_names/3d_render/layer_1'] ?? (item['layer_names/3d_render/layer_1'] = "");
    item['layer_names/3d_render/layer_2'] ?? (item['layer_names/3d_render/layer_2'] = "");
    item['layer_names/3d_render/layer_3'] ?? (item['layer_names/3d_render/layer_3'] = "");
    item['layer_names/3d_render/layer_4'] ?? (item['layer_names/3d_render/layer_4'] = "");
    item['layer_names/3d_render/layer_5'] ?? (item['layer_names/3d_render/layer_5'] = "");
    item['layer_names/3d_render/layer_6'] ?? (item['layer_names/3d_render/layer_6'] = "");
    item['layer_names/3d_render/layer_7'] ?? (item['layer_names/3d_render/layer_7'] = "");
    item['layer_names/3d_render/layer_8'] ?? (item['layer_names/3d_render/layer_8'] = "");
    item['layer_names/3d_render/layer_9'] ?? (item['layer_names/3d_render/layer_9'] = "");
    item['layer_names/3d_render/layer_10'] ?? (item['layer_names/3d_render/layer_10'] = "");
    item['layer_names/3d_render/layer_11'] ?? (item['layer_names/3d_render/layer_11'] = "");
    item['layer_names/3d_render/layer_12'] ?? (item['layer_names/3d_render/layer_12'] = "");
    item['layer_names/3d_render/layer_13'] ?? (item['layer_names/3d_render/layer_13'] = "");
    item['layer_names/3d_render/layer_14'] ?? (item['layer_names/3d_render/layer_14'] = "");
    item['layer_names/3d_render/layer_15'] ?? (item['layer_names/3d_render/layer_15'] = "");
    item['layer_names/3d_render/layer_16'] ?? (item['layer_names/3d_render/layer_16'] = "");
    item['layer_names/3d_render/layer_17'] ?? (item['layer_names/3d_render/layer_17'] = "");
    item['layer_names/3d_render/layer_18'] ?? (item['layer_names/3d_render/layer_18'] = "");
    item['layer_names/3d_render/layer_19'] ?? (item['layer_names/3d_render/layer_19'] = "");
    item['layer_names/3d_render/layer_20'] ?? (item['layer_names/3d_render/layer_20'] = "");
    item['layer_names/avoidance/layer_1'] ?? (item['layer_names/avoidance/layer_1'] = "");
    item['layer_names/avoidance/layer_2'] ?? (item['layer_names/avoidance/layer_2'] = "");
    item['layer_names/avoidance/layer_3'] ?? (item['layer_names/avoidance/layer_3'] = "");
    item['layer_names/avoidance/layer_4'] ?? (item['layer_names/avoidance/layer_4'] = "");
    item['layer_names/avoidance/layer_5'] ?? (item['layer_names/avoidance/layer_5'] = "");
    item['layer_names/avoidance/layer_6'] ?? (item['layer_names/avoidance/layer_6'] = "");
    item['layer_names/avoidance/layer_7'] ?? (item['layer_names/avoidance/layer_7'] = "");
    item['layer_names/avoidance/layer_8'] ?? (item['layer_names/avoidance/layer_8'] = "");
    item['layer_names/avoidance/layer_9'] ?? (item['layer_names/avoidance/layer_9'] = "");
    item['layer_names/avoidance/layer_10'] ?? (item['layer_names/avoidance/layer_10'] = "");
    item['layer_names/avoidance/layer_11'] ?? (item['layer_names/avoidance/layer_11'] = "");
    item['layer_names/avoidance/layer_12'] ?? (item['layer_names/avoidance/layer_12'] = "");
    item['layer_names/avoidance/layer_13'] ?? (item['layer_names/avoidance/layer_13'] = "");
    item['layer_names/avoidance/layer_14'] ?? (item['layer_names/avoidance/layer_14'] = "");
    item['layer_names/avoidance/layer_15'] ?? (item['layer_names/avoidance/layer_15'] = "");
    item['layer_names/avoidance/layer_16'] ?? (item['layer_names/avoidance/layer_16'] = "");
    item['layer_names/avoidance/layer_17'] ?? (item['layer_names/avoidance/layer_17'] = "");
    item['layer_names/avoidance/layer_18'] ?? (item['layer_names/avoidance/layer_18'] = "");
    item['layer_names/avoidance/layer_19'] ?? (item['layer_names/avoidance/layer_19'] = "");
    item['layer_names/avoidance/layer_20'] ?? (item['layer_names/avoidance/layer_20'] = "");
    item['layer_names/avoidance/layer_21'] ?? (item['layer_names/avoidance/layer_21'] = "");
    item['layer_names/avoidance/layer_22'] ?? (item['layer_names/avoidance/layer_22'] = "");
    item['layer_names/avoidance/layer_23'] ?? (item['layer_names/avoidance/layer_23'] = "");
    item['layer_names/avoidance/layer_24'] ?? (item['layer_names/avoidance/layer_24'] = "");
    item['layer_names/avoidance/layer_25'] ?? (item['layer_names/avoidance/layer_25'] = "");
    item['layer_names/avoidance/layer_26'] ?? (item['layer_names/avoidance/layer_26'] = "");
    item['layer_names/avoidance/layer_27'] ?? (item['layer_names/avoidance/layer_27'] = "");
    item['layer_names/avoidance/layer_28'] ?? (item['layer_names/avoidance/layer_28'] = "");
    item['layer_names/avoidance/layer_29'] ?? (item['layer_names/avoidance/layer_29'] = "");
    item['layer_names/avoidance/layer_30'] ?? (item['layer_names/avoidance/layer_30'] = "");
    item['layer_names/avoidance/layer_31'] ?? (item['layer_names/avoidance/layer_31'] = "");
    item['layer_names/avoidance/layer_32'] ?? (item['layer_names/avoidance/layer_32'] = "");
    item['memory/limits/message_queue/max_size_mb'] ?? (item['memory/limits/message_queue/max_size_mb'] = 32);
    item['navigation/2d/default_cell_size'] ?? (item['navigation/2d/default_cell_size'] = 1.0);
    item['navigation/2d/default_edge_connection_margin'] ?? (item['navigation/2d/default_edge_connection_margin'] = 1.0);
    item['navigation/2d/default_link_connection_radius'] ?? (item['navigation/2d/default_link_connection_radius'] = 4.0);
    item['navigation/2d/use_edge_connections'] ?? (item['navigation/2d/use_edge_connections'] = true);
    item['navigation/3d/default_cell_height'] ?? (item['navigation/3d/default_cell_height'] = 0.25);
    item['navigation/3d/default_cell_size'] ?? (item['navigation/3d/default_cell_size'] = 0.25);
    item['navigation/3d/default_edge_connection_margin'] ?? (item['navigation/3d/default_edge_connection_margin'] = 0.25);
    item['navigation/3d/default_link_connection_radius'] ?? (item['navigation/3d/default_link_connection_radius'] = 1.0);
    item['navigation/3d/default_up'] ?? (item['navigation/3d/default_up'] = create.Vector3(0, 1, 0));
    item['navigation/3d/merge_rasterizer_cell_scale'] ?? (item['navigation/3d/merge_rasterizer_cell_scale'] = 1.0);
    item['navigation/3d/use_edge_connections'] ?? (item['navigation/3d/use_edge_connections'] = true);
    item['navigation/avoidance/thread_model/avoidance_use_high_priority_threads'] ?? (item['navigation/avoidance/thread_model/avoidance_use_high_priority_threads'] = true);
    item['navigation/avoidance/thread_model/avoidance_use_multiple_threads'] ?? (item['navigation/avoidance/thread_model/avoidance_use_multiple_threads'] = true);
    item['navigation/baking/thread_model/baking_use_high_priority_threads'] ?? (item['navigation/baking/thread_model/baking_use_high_priority_threads'] = true);
    item['navigation/baking/thread_model/baking_use_multiple_threads'] ?? (item['navigation/baking/thread_model/baking_use_multiple_threads'] = true);
    item['navigation/baking/use_crash_prevention_checks'] ?? (item['navigation/baking/use_crash_prevention_checks'] = true);
    item['network/limits/debugger/max_chars_per_second'] ?? (item['network/limits/debugger/max_chars_per_second'] = 32768);
    item['network/limits/debugger/max_errors_per_second'] ?? (item['network/limits/debugger/max_errors_per_second'] = 400);
    item['network/limits/debugger/max_queued_messages'] ?? (item['network/limits/debugger/max_queued_messages'] = 2048);
    item['network/limits/debugger/max_warnings_per_second'] ?? (item['network/limits/debugger/max_warnings_per_second'] = 400);
    item['network/limits/packet_peer_stream/max_buffer_po2'] ?? (item['network/limits/packet_peer_stream/max_buffer_po2'] = 16);
    item['network/limits/tcp/connect_timeout_seconds'] ?? (item['network/limits/tcp/connect_timeout_seconds'] = 30);
    item['network/limits/webrtc/max_channel_in_buffer_kb'] ?? (item['network/limits/webrtc/max_channel_in_buffer_kb'] = 64);
    item['network/tls/certificate_bundle_override'] ?? (item['network/tls/certificate_bundle_override'] = "");
    item['physics/2d/default_angular_damp'] ?? (item['physics/2d/default_angular_damp'] = 1.0);
    item['physics/2d/default_gravity'] ?? (item['physics/2d/default_gravity'] = 980.0);
    item['physics/2d/default_gravity_vector'] ?? (item['physics/2d/default_gravity_vector'] = create.Vector2(0, 1));
    item['physics/2d/default_linear_damp'] ?? (item['physics/2d/default_linear_damp'] = 0.1);
    item['physics/2d/physics_engine'] ?? (item['physics/2d/physics_engine'] = "DEFAULT");
    item['physics/2d/run_on_separate_thread'] ?? (item['physics/2d/run_on_separate_thread'] = false);
    item['physics/2d/sleep_threshold_angular'] ?? (item['physics/2d/sleep_threshold_angular'] = 0.139626);
    item['physics/2d/sleep_threshold_linear'] ?? (item['physics/2d/sleep_threshold_linear'] = 2.0);
    item['physics/2d/solver/contact_max_allowed_penetration'] ?? (item['physics/2d/solver/contact_max_allowed_penetration'] = 0.3);
    item['physics/2d/solver/contact_max_separation'] ?? (item['physics/2d/solver/contact_max_separation'] = 1.5);
    item['physics/2d/solver/contact_recycle_radius'] ?? (item['physics/2d/solver/contact_recycle_radius'] = 1.0);
    item['physics/2d/solver/default_constraint_bias'] ?? (item['physics/2d/solver/default_constraint_bias'] = 0.2);
    item['physics/2d/solver/default_contact_bias'] ?? (item['physics/2d/solver/default_contact_bias'] = 0.8);
    item['physics/2d/solver/solver_iterations'] ?? (item['physics/2d/solver/solver_iterations'] = 16);
    item['physics/2d/time_before_sleep'] ?? (item['physics/2d/time_before_sleep'] = 0.5);
    item['physics/3d/default_angular_damp'] ?? (item['physics/3d/default_angular_damp'] = 0.1);
    item['physics/3d/default_gravity'] ?? (item['physics/3d/default_gravity'] = 9.8);
    item['physics/3d/default_gravity_vector'] ?? (item['physics/3d/default_gravity_vector'] = create.Vector3(0, -1, 0));
    item['physics/3d/default_linear_damp'] ?? (item['physics/3d/default_linear_damp'] = 0.1);
    item['physics/3d/physics_engine'] ?? (item['physics/3d/physics_engine'] = "DEFAULT");
    item['physics/3d/run_on_separate_thread'] ?? (item['physics/3d/run_on_separate_thread'] = false);
    item['physics/3d/sleep_threshold_angular'] ?? (item['physics/3d/sleep_threshold_angular'] = 0.139626);
    item['physics/3d/sleep_threshold_linear'] ?? (item['physics/3d/sleep_threshold_linear'] = 0.1);
    item['physics/3d/solver/contact_max_allowed_penetration'] ?? (item['physics/3d/solver/contact_max_allowed_penetration'] = 0.01);
    item['physics/3d/solver/contact_max_separation'] ?? (item['physics/3d/solver/contact_max_separation'] = 0.05);
    item['physics/3d/solver/contact_recycle_radius'] ?? (item['physics/3d/solver/contact_recycle_radius'] = 0.01);
    item['physics/3d/solver/default_contact_bias'] ?? (item['physics/3d/solver/default_contact_bias'] = 0.8);
    item['physics/3d/solver/solver_iterations'] ?? (item['physics/3d/solver/solver_iterations'] = 16);
    item['physics/3d/time_before_sleep'] ?? (item['physics/3d/time_before_sleep'] = 0.5);
    item['physics/common/enable_object_picking'] ?? (item['physics/common/enable_object_picking'] = true);
    item['physics/common/max_physics_steps_per_frame'] ?? (item['physics/common/max_physics_steps_per_frame'] = 8);
    item['physics/common/physics_interpolation'] ?? (item['physics/common/physics_interpolation'] = false);
    item['physics/common/physics_jitter_fix'] ?? (item['physics/common/physics_jitter_fix'] = 0.5);
    item['physics/common/physics_ticks_per_second'] ?? (item['physics/common/physics_ticks_per_second'] = 60);
    item['rendering/2d/batching/item_buffer_size'] ?? (item['rendering/2d/batching/item_buffer_size'] = 16384);
    item['rendering/2d/batching/uniform_set_cache_size'] ?? (item['rendering/2d/batching/uniform_set_cache_size'] = 256);
    item['rendering/2d/sdf/oversize'] ?? (item['rendering/2d/sdf/oversize'] = 1);
    item['rendering/2d/sdf/scale'] ?? (item['rendering/2d/sdf/scale'] = 1);
    item['rendering/2d/shadow_atlas/size'] ?? (item['rendering/2d/shadow_atlas/size'] = 2048);
    item['rendering/2d/snap/snap_2d_transforms_to_pixel'] ?? (item['rendering/2d/snap/snap_2d_transforms_to_pixel'] = false);
    item['rendering/2d/snap/snap_2d_vertices_to_pixel'] ?? (item['rendering/2d/snap/snap_2d_vertices_to_pixel'] = false);
    item['rendering/anti_aliasing/quality/msaa_2d'] ?? (item['rendering/anti_aliasing/quality/msaa_2d'] = 0);
    item['rendering/anti_aliasing/quality/msaa_3d'] ?? (item['rendering/anti_aliasing/quality/msaa_3d'] = 0);
    item['rendering/anti_aliasing/quality/screen_space_aa'] ?? (item['rendering/anti_aliasing/quality/screen_space_aa'] = 0);
    item['rendering/anti_aliasing/quality/use_debanding'] ?? (item['rendering/anti_aliasing/quality/use_debanding'] = false);
    item['rendering/anti_aliasing/quality/use_taa'] ?? (item['rendering/anti_aliasing/quality/use_taa'] = false);
    item['rendering/anti_aliasing/screen_space_roughness_limiter/amount'] ?? (item['rendering/anti_aliasing/screen_space_roughness_limiter/amount'] = 0.25);
    item['rendering/anti_aliasing/screen_space_roughness_limiter/enabled'] ?? (item['rendering/anti_aliasing/screen_space_roughness_limiter/enabled'] = true);
    item['rendering/anti_aliasing/screen_space_roughness_limiter/limit'] ?? (item['rendering/anti_aliasing/screen_space_roughness_limiter/limit'] = 0.18);
    item['rendering/camera/depth_of_field/depth_of_field_bokeh_quality'] ?? (item['rendering/camera/depth_of_field/depth_of_field_bokeh_quality'] = 1);
    item['rendering/camera/depth_of_field/depth_of_field_bokeh_shape'] ?? (item['rendering/camera/depth_of_field/depth_of_field_bokeh_shape'] = 1);
    item['rendering/camera/depth_of_field/depth_of_field_use_jitter'] ?? (item['rendering/camera/depth_of_field/depth_of_field_use_jitter'] = false);
    item['rendering/driver/depth_prepass/disable_for_vendors'] ?? (item['rendering/driver/depth_prepass/disable_for_vendors'] = "PowerVR,Mali,Adreno,Apple");
    item['rendering/driver/depth_prepass/enable'] ?? (item['rendering/driver/depth_prepass/enable'] = true);
    item['rendering/driver/threads/thread_model'] ?? (item['rendering/driver/threads/thread_model'] = 1);
    item['rendering/environment/defaults/default_clear_color'] ?? (item['rendering/environment/defaults/default_clear_color'] = create.Color(0.3, 0.3, 0.3, 1));
    item['rendering/environment/defaults/default_environment'] ?? (item['rendering/environment/defaults/default_environment'] = "");
    item['rendering/environment/glow/upscale_mode'] ?? (item['rendering/environment/glow/upscale_mode'] = 1);
    item['rendering/environment/glow/upscale_mode.mobile'] ?? (item['rendering/environment/glow/upscale_mode.mobile'] = 0);
    item['rendering/environment/screen_space_reflection/roughness_quality'] ?? (item['rendering/environment/screen_space_reflection/roughness_quality'] = 1);
    item['rendering/environment/ssao/adaptive_target'] ?? (item['rendering/environment/ssao/adaptive_target'] = 0.5);
    item['rendering/environment/ssao/blur_passes'] ?? (item['rendering/environment/ssao/blur_passes'] = 2);
    item['rendering/environment/ssao/fadeout_from'] ?? (item['rendering/environment/ssao/fadeout_from'] = 50.0);
    item['rendering/environment/ssao/fadeout_to'] ?? (item['rendering/environment/ssao/fadeout_to'] = 300.0);
    item['rendering/environment/ssao/half_size'] ?? (item['rendering/environment/ssao/half_size'] = true);
    item['rendering/environment/ssao/quality'] ?? (item['rendering/environment/ssao/quality'] = 2);
    item['rendering/environment/ssil/adaptive_target'] ?? (item['rendering/environment/ssil/adaptive_target'] = 0.5);
    item['rendering/environment/ssil/blur_passes'] ?? (item['rendering/environment/ssil/blur_passes'] = 4);
    item['rendering/environment/ssil/fadeout_from'] ?? (item['rendering/environment/ssil/fadeout_from'] = 50.0);
    item['rendering/environment/ssil/fadeout_to'] ?? (item['rendering/environment/ssil/fadeout_to'] = 300.0);
    item['rendering/environment/ssil/half_size'] ?? (item['rendering/environment/ssil/half_size'] = true);
    item['rendering/environment/ssil/quality'] ?? (item['rendering/environment/ssil/quality'] = 2);
    item['rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale'] ?? (item['rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale'] = 0.01);
    item['rendering/environment/subsurface_scattering/subsurface_scattering_quality'] ?? (item['rendering/environment/subsurface_scattering/subsurface_scattering_quality'] = 1);
    item['rendering/environment/subsurface_scattering/subsurface_scattering_scale'] ?? (item['rendering/environment/subsurface_scattering/subsurface_scattering_scale'] = 0.05);
    item['rendering/environment/volumetric_fog/use_filter'] ?? (item['rendering/environment/volumetric_fog/use_filter'] = 1);
    item['rendering/environment/volumetric_fog/volume_depth'] ?? (item['rendering/environment/volumetric_fog/volume_depth'] = 64);
    item['rendering/environment/volumetric_fog/volume_size'] ?? (item['rendering/environment/volumetric_fog/volume_size'] = 64);
    //rendering/gl_compatibility/driver
    //rendering/gl_compatibility/driver.android
    //rendering/gl_compatibility/driver.ios
    //rendering/gl_compatibility/driver.linuxbsd
    //rendering/gl_compatibility/driver.macos
    //rendering/gl_compatibility/driver.web
    //rendering/gl_compatibility/driver.windows
    item['rendering/gl_compatibility/fallback_to_angle'] ?? (item['rendering/gl_compatibility/fallback_to_angle'] = true);
    item['rendering/gl_compatibility/fallback_to_gles'] ?? (item['rendering/gl_compatibility/fallback_to_gles'] = true);
    item['rendering/gl_compatibility/fallback_to_native'] ?? (item['rendering/gl_compatibility/fallback_to_native'] = true);
    //rendering/gl_compatibility/force_angle_on_devices
    item['rendering/gl_compatibility/item_buffer_size'] ?? (item['rendering/gl_compatibility/item_buffer_size'] = 16384);
    item['rendering/gl_compatibility/nvidia_disable_threaded_optimization'] ?? (item['rendering/gl_compatibility/nvidia_disable_threaded_optimization'] = true);
    item['rendering/global_illumination/gi/use_half_resolution'] ?? (item['rendering/global_illumination/gi/use_half_resolution'] = false);
    item['rendering/global_illumination/sdfgi/frames_to_converge'] ?? (item['rendering/global_illumination/sdfgi/frames_to_converge'] = 5);
    item['rendering/global_illumination/sdfgi/frames_to_update_lights'] ?? (item['rendering/global_illumination/sdfgi/frames_to_update_lights'] = 2);
    item['rendering/global_illumination/sdfgi/probe_ray_count'] ?? (item['rendering/global_illumination/sdfgi/probe_ray_count'] = 1);
    item['rendering/global_illumination/voxel_gi/quality'] ?? (item['rendering/global_illumination/voxel_gi/quality'] = 0);
    item['rendering/lightmapping/bake_performance/max_rays_per_pass'] ?? (item['rendering/lightmapping/bake_performance/max_rays_per_pass'] = 32);
    item['rendering/lightmapping/bake_performance/max_rays_per_probe_pass'] ?? (item['rendering/lightmapping/bake_performance/max_rays_per_probe_pass'] = 64);
    item['rendering/lightmapping/bake_performance/region_size'] ?? (item['rendering/lightmapping/bake_performance/region_size'] = 512);
    item['rendering/lightmapping/bake_quality/high_quality_probe_ray_count'] ?? (item['rendering/lightmapping/bake_quality/high_quality_probe_ray_count'] = 512);
    item['rendering/lightmapping/bake_quality/high_quality_ray_count'] ?? (item['rendering/lightmapping/bake_quality/high_quality_ray_count'] = 512);
    item['rendering/lightmapping/bake_quality/low_quality_probe_ray_count'] ?? (item['rendering/lightmapping/bake_quality/low_quality_probe_ray_count'] = 64);
    item['rendering/lightmapping/bake_quality/low_quality_ray_count'] ?? (item['rendering/lightmapping/bake_quality/low_quality_ray_count'] = 32);
    item['rendering/lightmapping/bake_quality/medium_quality_probe_ray_count'] ?? (item['rendering/lightmapping/bake_quality/medium_quality_probe_ray_count'] = 256);
    item['rendering/lightmapping/bake_quality/medium_quality_ray_count'] ?? (item['rendering/lightmapping/bake_quality/medium_quality_ray_count'] = 128);
    item['rendering/lightmapping/bake_quality/ultra_quality_probe_ray_count'] ?? (item['rendering/lightmapping/bake_quality/ultra_quality_probe_ray_count'] = 2048);
    item['rendering/lightmapping/bake_quality/ultra_quality_ray_count'] ?? (item['rendering/lightmapping/bake_quality/ultra_quality_ray_count'] = 2048);
    item['rendering/lightmapping/denoising/denoiser'] ?? (item['rendering/lightmapping/denoising/denoiser'] = 0);
    item['rendering/lightmapping/lightmap_gi/use_bicubic_filter'] ?? (item['rendering/lightmapping/lightmap_gi/use_bicubic_filter'] = true);
    item['rendering/lightmapping/primitive_meshes/texel_size'] ?? (item['rendering/lightmapping/primitive_meshes/texel_size'] = 0.2);
    item['rendering/lightmapping/probe_capture/update_speed'] ?? (item['rendering/lightmapping/probe_capture/update_speed'] = 15);
    item['rendering/lights_and_shadows/directional_shadow/16_bits'] ?? (item['rendering/lights_and_shadows/directional_shadow/16_bits'] = true);
    item['rendering/lights_and_shadows/directional_shadow/size'] ?? (item['rendering/lights_and_shadows/directional_shadow/size'] = 4096);
    item['rendering/lights_and_shadows/directional_shadow/size.mobile'] ?? (item['rendering/lights_and_shadows/directional_shadow/size.mobile'] = 2048);
    item['rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality'] ?? (item['rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality'] = 2);
    item['rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality.mobile'] ?? (item['rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality.mobile'] = 0);
    item['rendering/lights_and_shadows/positional_shadow/atlas_16_bits'] ?? (item['rendering/lights_and_shadows/positional_shadow/atlas_16_bits'] = true);
    item['rendering/lights_and_shadows/positional_shadow/atlas_quadrant_0_subdiv'] ?? (item['rendering/lights_and_shadows/positional_shadow/atlas_quadrant_0_subdiv'] = 2);
    item['rendering/lights_and_shadows/positional_shadow/atlas_quadrant_1_subdiv'] ?? (item['rendering/lights_and_shadows/positional_shadow/atlas_quadrant_1_subdiv'] = 2);
    item['rendering/lights_and_shadows/positional_shadow/atlas_quadrant_2_subdiv'] ?? (item['rendering/lights_and_shadows/positional_shadow/atlas_quadrant_2_subdiv'] = 3);
    item['rendering/lights_and_shadows/positional_shadow/atlas_quadrant_3_subdiv'] ?? (item['rendering/lights_and_shadows/positional_shadow/atlas_quadrant_3_subdiv'] = 4);
    item['rendering/lights_and_shadows/positional_shadow/atlas_size'] ?? (item['rendering/lights_and_shadows/positional_shadow/atlas_size'] = 4096);
    item['rendering/lights_and_shadows/positional_shadow/atlas_size.mobile'] ?? (item['rendering/lights_and_shadows/positional_shadow/atlas_size.mobile'] = 2048);
    item['rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality'] ?? (item['rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality'] = 2);
    item['rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality.mobile'] ?? (item['rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality.mobile'] = 0);
    item['rendering/lights_and_shadows/tighter_shadow_caster_culling'] ?? (item['rendering/lights_and_shadows/tighter_shadow_caster_culling'] = true);
    item['rendering/lights_and_shadows/use_physical_light_units'] ?? (item['rendering/lights_and_shadows/use_physical_light_units'] = false);
    item['rendering/limits/cluster_builder/max_clustered_elements'] ?? (item['rendering/limits/cluster_builder/max_clustered_elements'] = 512);
    item['rendering/limits/global_shader_variables/buffer_size'] ?? (item['rendering/limits/global_shader_variables/buffer_size'] = 65536);
    item['rendering/limits/opengl/max_lights_per_object'] ?? (item['rendering/limits/opengl/max_lights_per_object'] = 8);
    item['rendering/limits/opengl/max_renderable_elements'] ?? (item['rendering/limits/opengl/max_renderable_elements'] = 65536);
    item['rendering/limits/opengl/max_renderable_lights'] ?? (item['rendering/limits/opengl/max_renderable_lights'] = 32);
    item['rendering/limits/spatial_indexer/threaded_cull_minimum_instances'] ?? (item['rendering/limits/spatial_indexer/threaded_cull_minimum_instances'] = 1000);
    item['rendering/limits/spatial_indexer/update_iterations_per_frame'] ?? (item['rendering/limits/spatial_indexer/update_iterations_per_frame'] = 10);
    item['rendering/limits/time/time_rollover_secs'] ?? (item['rendering/limits/time/time_rollover_secs'] = 3600);
    item['rendering/mesh_lod/lod_change/threshold_pixels'] ?? (item['rendering/mesh_lod/lod_change/threshold_pixels'] = 1.0);
    item['rendering/occlusion_culling/bvh_build_quality'] ?? (item['rendering/occlusion_culling/bvh_build_quality'] = 2);
    item['rendering/occlusion_culling/jitter_projection'] ?? (item['rendering/occlusion_culling/jitter_projection'] = true);
    item['rendering/occlusion_culling/occlusion_rays_per_thread'] ?? (item['rendering/occlusion_culling/occlusion_rays_per_thread'] = 512);
    item['rendering/occlusion_culling/use_occlusion_culling'] ?? (item['rendering/occlusion_culling/use_occlusion_culling'] = false);
    item['rendering/reflections/reflection_atlas/reflection_count'] ?? (item['rendering/reflections/reflection_atlas/reflection_count'] = 64);
    item['rendering/reflections/reflection_atlas/reflection_size'] ?? (item['rendering/reflections/reflection_atlas/reflection_size'] = 256);
    item['rendering/reflections/reflection_atlas/reflection_size.mobile'] ?? (item['rendering/reflections/reflection_atlas/reflection_size.mobile'] = 128);
    item['rendering/reflections/sky_reflections/fast_filter_high_quality'] ?? (item['rendering/reflections/sky_reflections/fast_filter_high_quality'] = false);
    item['rendering/reflections/sky_reflections/ggx_samples'] ?? (item['rendering/reflections/sky_reflections/ggx_samples'] = 32);
    item['rendering/reflections/sky_reflections/ggx_samples.mobile'] ?? (item['rendering/reflections/sky_reflections/ggx_samples.mobile'] = 16);
    item['rendering/reflections/sky_reflections/roughness_layers'] ?? (item['rendering/reflections/sky_reflections/roughness_layers'] = 8);
    item['rendering/reflections/sky_reflections/texture_array_reflections'] ?? (item['rendering/reflections/sky_reflections/texture_array_reflections'] = true);
    item['rendering/reflections/sky_reflections/texture_array_reflections.mobile'] ?? (item['rendering/reflections/sky_reflections/texture_array_reflections.mobile'] = false);
    item['rendering/renderer/rendering_method'] ?? (item['rendering/renderer/rendering_method'] = "forward_plus");
    item['rendering/renderer/rendering_method.mobile'] ?? (item['rendering/renderer/rendering_method.mobile'] = "mobile");
    item['rendering/renderer/rendering_method.web'] ?? (item['rendering/renderer/rendering_method.web'] = "gl_compatibility");
    item['rendering/rendering_device/d3d12/agility_sdk_version'] ?? (item['rendering/rendering_device/d3d12/agility_sdk_version'] = 613);
    item['rendering/rendering_device/d3d12/max_misc_descriptors_per_frame'] ?? (item['rendering/rendering_device/d3d12/max_misc_descriptors_per_frame'] = 512);
    item['rendering/rendering_device/d3d12/max_resource_descriptors_per_frame'] ?? (item['rendering/rendering_device/d3d12/max_resource_descriptors_per_frame'] = 16384);
    item['rendering/rendering_device/d3d12/max_sampler_descriptors_per_frame'] ?? (item['rendering/rendering_device/d3d12/max_sampler_descriptors_per_frame'] = 1024);
    //rendering/rendering_device/driver
    //rendering/rendering_device/driver.android
    //rendering/rendering_device/driver.ios
    //rendering/rendering_device/driver.linuxbsd
    //rendering/rendering_device/driver.macos
    //rendering/rendering_device/driver.windows
    item['rendering/rendering_device/fallback_to_d3d12'] ?? (item['rendering/rendering_device/fallback_to_d3d12'] = true);
    item['rendering/rendering_device/fallback_to_opengl3'] ?? (item['rendering/rendering_device/fallback_to_opengl3'] = true);
    item['rendering/rendering_device/fallback_to_vulkan'] ?? (item['rendering/rendering_device/fallback_to_vulkan'] = true);
    item['rendering/rendering_device/pipeline_cache/enable'] ?? (item['rendering/rendering_device/pipeline_cache/enable'] = true);
    item['rendering/rendering_device/pipeline_cache/save_chunk_size_mb'] ?? (item['rendering/rendering_device/pipeline_cache/save_chunk_size_mb'] = 3.0);
    item['rendering/rendering_device/staging_buffer/block_size_kb'] ?? (item['rendering/rendering_device/staging_buffer/block_size_kb'] = 256);
    item['rendering/rendering_device/staging_buffer/max_size_mb'] ?? (item['rendering/rendering_device/staging_buffer/max_size_mb'] = 128);
    item['rendering/rendering_device/staging_buffer/texture_upload_region_size_px'] ?? (item['rendering/rendering_device/staging_buffer/texture_upload_region_size_px'] = 64);
    item['rendering/rendering_device/vsync/frame_queue_size'] ?? (item['rendering/rendering_device/vsync/frame_queue_size'] = 2);
    item['rendering/rendering_device/vsync/swapchain_image_count'] ?? (item['rendering/rendering_device/vsync/swapchain_image_count'] = 3);
    item['rendering/rendering_device/vulkan/max_descriptors_per_pool'] ?? (item['rendering/rendering_device/vulkan/max_descriptors_per_pool'] = 64);
    item['rendering/scaling_3d/fsr_sharpness'] ?? (item['rendering/scaling_3d/fsr_sharpness'] = 0.2);
    item['rendering/scaling_3d/mode'] ?? (item['rendering/scaling_3d/mode'] = 0);
    item['rendering/scaling_3d/scale'] ?? (item['rendering/scaling_3d/scale'] = 1.0);
    item['rendering/shader_compiler/shader_cache/compress'] ?? (item['rendering/shader_compiler/shader_cache/compress'] = true);
    item['rendering/shader_compiler/shader_cache/enabled'] ?? (item['rendering/shader_compiler/shader_cache/enabled'] = true);
    item['rendering/shader_compiler/shader_cache/strip_debug'] ?? (item['rendering/shader_compiler/shader_cache/strip_debug'] = false);
    item['rendering/shader_compiler/shader_cache/strip_debug.release'] ?? (item['rendering/shader_compiler/shader_cache/strip_debug.release'] = true);
    item['rendering/shader_compiler/shader_cache/use_zstd_compression'] ?? (item['rendering/shader_compiler/shader_cache/use_zstd_compression'] = true);
    item['rendering/shading/overrides/force_lambert_over_burley'] ?? (item['rendering/shading/overrides/force_lambert_over_burley'] = false);
    item['rendering/shading/overrides/force_lambert_over_burley.mobile'] ?? (item['rendering/shading/overrides/force_lambert_over_burley.mobile'] = true);
    item['rendering/shading/overrides/force_vertex_shading'] ?? (item['rendering/shading/overrides/force_vertex_shading'] = false);
    item['rendering/textures/canvas_textures/default_texture_filter'] ?? (item['rendering/textures/canvas_textures/default_texture_filter'] = 1);
    item['rendering/textures/canvas_textures/default_texture_repeat'] ?? (item['rendering/textures/canvas_textures/default_texture_repeat'] = 0);
    item['rendering/textures/decals/filter'] ?? (item['rendering/textures/decals/filter'] = 3);
    item['rendering/textures/default_filters/anisotropic_filtering_level'] ?? (item['rendering/textures/default_filters/anisotropic_filtering_level'] = 2);
    item['rendering/textures/default_filters/texture_mipmap_bias'] ?? (item['rendering/textures/default_filters/texture_mipmap_bias'] = 0.0);
    item['rendering/textures/default_filters/use_nearest_mipmap_filter'] ?? (item['rendering/textures/default_filters/use_nearest_mipmap_filter'] = false);
    item['rendering/textures/light_projectors/filter'] ?? (item['rendering/textures/light_projectors/filter'] = 3);
    item['rendering/textures/lossless_compression/force_png'] ?? (item['rendering/textures/lossless_compression/force_png'] = false);
    item['rendering/textures/vram_compression/cache_gpu_compressor'] ?? (item['rendering/textures/vram_compression/cache_gpu_compressor'] = true);
    item['rendering/textures/vram_compression/compress_with_gpu'] ?? (item['rendering/textures/vram_compression/compress_with_gpu'] = true);
    item['rendering/textures/vram_compression/import_etc2_astc'] ?? (item['rendering/textures/vram_compression/import_etc2_astc'] = false);
    item['rendering/textures/vram_compression/import_s3tc_bptc'] ?? (item['rendering/textures/vram_compression/import_s3tc_bptc'] = false);
    item['rendering/textures/webp_compression/compression_method'] ?? (item['rendering/textures/webp_compression/compression_method'] = 2);
    item['rendering/textures/webp_compression/lossless_compression_factor'] ?? (item['rendering/textures/webp_compression/lossless_compression_factor'] = 25);
    item['rendering/viewport/hdr_2d'] ?? (item['rendering/viewport/hdr_2d'] = false);
    item['rendering/viewport/transparent_background'] ?? (item['rendering/viewport/transparent_background'] = false);
    item['rendering/vrs/mode'] ?? (item['rendering/vrs/mode'] = 0);
    item['rendering/vrs/texture'] ?? (item['rendering/vrs/texture'] = "");
    item['threading/worker_pool/low_priority_thread_ratio'] ?? (item['threading/worker_pool/low_priority_thread_ratio'] = 0.3);
    item['threading/worker_pool/max_threads'] ?? (item['threading/worker_pool/max_threads'] = -1);
    item['xr/openxr/default_action_map'] ?? (item['xr/openxr/default_action_map'] = "res://openxr_action_map.tres");
    item['xr/openxr/enabled'] ?? (item['xr/openxr/enabled'] = false);
    item['xr/openxr/environment_blend_mode'] ?? (item['xr/openxr/environment_blend_mode'] = "0");
    item['xr/openxr/extensions/debug_message_types'] ?? (item['xr/openxr/extensions/debug_message_types'] = "15");
    item['xr/openxr/extensions/debug_utils'] ?? (item['xr/openxr/extensions/debug_utils'] = "0");
    item['xr/openxr/extensions/eye_gaze_interaction'] ?? (item['xr/openxr/extensions/eye_gaze_interaction'] = false);
    item['xr/openxr/extensions/hand_interaction_profile'] ?? (item['xr/openxr/extensions/hand_interaction_profile'] = false);
    item['xr/openxr/extensions/hand_tracking'] ?? (item['xr/openxr/extensions/hand_tracking'] = false);
    item['xr/openxr/extensions/hand_tracking_controller_data_source'] ?? (item['xr/openxr/extensions/hand_tracking_controller_data_source'] = false);
    item['xr/openxr/extensions/hand_tracking_unobstructed_data_source'] ?? (item['xr/openxr/extensions/hand_tracking_unobstructed_data_source'] = false);
    item['xr/openxr/form_factor'] ?? (item['xr/openxr/form_factor'] = "0");
    item['xr/openxr/foveation_dynamic'] ?? (item['xr/openxr/foveation_dynamic'] = false);
    item['xr/openxr/foveation_level'] ?? (item['xr/openxr/foveation_level'] = "0");
    item['xr/openxr/reference_space'] ?? (item['xr/openxr/reference_space'] = "1");
    item['xr/openxr/startup_alert'] ?? (item['xr/openxr/startup_alert'] = true);
    item['xr/openxr/submit_depth_buffer'] ?? (item['xr/openxr/submit_depth_buffer'] = false);
    item['xr/openxr/view_configuration'] ?? (item['xr/openxr/view_configuration'] = "1");
    item['xr/shaders/enabled'] ?? (item['xr/shaders/enabled'] = false);
}
