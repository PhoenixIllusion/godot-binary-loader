import { Color, Vector2, Vector3 } from "./gen/types.js";
import { InputEvent } from './gen/index.js';
export interface ProjectSettingsI {
    application: {
        config: {
            name: string;
            description: string;
            tags: string[];
            features: string[];
            icon: string;
            auto_accept_quit: boolean;
            custom_user_dir_name: string;
            macos_native_icon: string;
            project_settings_override: string;
            quit_on_go_back: boolean;
            use_custom_user_dir: boolean;
            use_hidden_project_data_directory: boolean;
            version: string;
            windows_native_icon: string;
        };
        run: {
            main_scene: string;
            delta_smoothing: boolean;
            disable_stderr: boolean;
            disable_stdout: boolean;
            enable_alt_space_menu: boolean;
            flush_stdout_on_print: boolean;
            'flush_stdout_on_print.debug': boolean;
            frame_delay_msec: number;
            low_processor_mode: boolean;
            low_processor_mode_sleep_usec: number;
            main_loop_type: string;
            max_fps: number;
            print_header: boolean;
        };
        boot_splash: {
            bg_color: Color;
            fullsize: boolean;
            image: string;
            minimum_display_time: number;
            show_image: boolean;
            use_filter: boolean;
        };
    };
    debug: {
        gdscript: {
            warnings: {
                untyped_declaration: number;
                assert_always_true: number;
                assert_always_false: number;
                confusable_capture_reassignment: number;
                confusable_identifier: number;
                confusable_local_declaration: number;
                confusable_local_usage: number;
                constant_used_as_function: number;
                deprecated_keyword: number;
                empty_file: number;
                enable: boolean;
                enum_variable_without_default: number;
                exclude_addons: boolean;
                function_used_as_property: number;
                get_node_default_without_onready: number;
                incompatible_ternary: number;
                inference_on_variant: number;
                inferred_declaration: number;
                int_as_enum_without_cast: number;
                int_as_enum_without_match: number;
                integer_division: number;
                missing_tool: number;
                narrowing_conversion: number;
                native_method_override: number;
                onready_with_export: number;
                property_used_as_function: number;
                redundant_await: number;
                redundant_static_unload: number;
                renamed_in_godot_4_hint: number;
                return_value_discarded: number;
                shadowed_global_identifier: number;
                shadowed_variable: number;
                shadowed_variable_base_class: number;
                standalone_expression: number;
                standalone_ternary: number;
                static_called_on_instance: number;
                unassigned_variable: number;
                unassigned_variable_op_assign: number;
                unreachable_code: number;
                unreachable_pattern: number;
                unsafe_call_argument: number;
                unsafe_cast: number;
                unsafe_method_access: number;
                unsafe_property_access: number;
                unsafe_void_return: number;
                unused_local_constant: number;
                unused_parameter: number;
                unused_private_class_variable: number;
                unused_signal: number;
                unused_variable: number;
            };
        };
        canvas_items: {
            debug_redraw_color: Color;
            debug_redraw_time: number;
        };
        file_logging: {
            enable_file_logging: boolean;
            'enable_file_logging.pc': boolean;
            log_path: string;
            max_log_files: number;
        };
        settings: {
            crash_handler: {
                message: string;
                'message.editor': string;
            };
            gdscript: {
                max_call_stack: number;
            };
            physics_interpolation: {
                enable_warnings: boolean;
            };
            profiler: {
                max_functions: number;
                max_timestamp_query_elements: number;
            };
            stdout: {
                print_fps: boolean;
                print_gpu_profile: boolean;
                verbose_stdout: boolean;
            };
        };
        shader_language: {
            warnings: {
                device_limit_exceeded: boolean;
                enable: boolean;
                float_comparison: boolean;
                formatting_error: boolean;
                magic_position_write: boolean;
                treat_warnings_as_errors: boolean;
                unused_constant: boolean;
                unused_function: boolean;
                unused_local_variable: boolean;
                unused_struct: boolean;
                unused_uniform: boolean;
                unused_varying: boolean;
            };
        };
        shapes: {
            avoidance: {
                agents_radius_color: Color;
                enable_agents_radius: boolean;
                enable_obstacles_radius: boolean;
                enable_obstacles_static: boolean;
                obstacles_radius_color: Color;
                obstacles_static_edge_pushin_color: Color;
                obstacles_static_edge_pushout_color: Color;
                obstacles_static_face_pushin_color: Color;
                obstacles_static_face_pushout_color: Color;
            };
            collision: {
                contact_color: Color;
                draw_2d_outlines: boolean;
                max_contacts_displayed: number;
                shape_color: Color;
            };
            navigation: {
                agent_path_color: Color;
                agent_path_point_size: number;
                edge_connection_color: Color;
                enable_agent_paths: boolean;
                enable_agent_paths_xray: boolean;
                enable_edge_connections: boolean;
                enable_edge_connections_xray: boolean;
                enable_edge_lines: boolean;
                enable_edge_lines_xray: boolean;
                enable_geometry_face_random_color: boolean;
                enable_link_connections: boolean;
                enable_link_connections_xray: boolean;
                geometry_edge_color: Color;
                geometry_edge_disabled_color: Color;
                geometry_face_color: Color;
                geometry_face_disabled_color: Color;
                link_connection_color: Color;
                link_connection_disabled_color: Color;
            };
            paths: {
                geometry_color: Color;
                geometry_width: number;
            };
        };
    };
    input: {
        [key: string]: {
            deadzone: number;
            events: InputEvent[];
        };
    };
    physics: {
        common: {
            physics_ticks_per_second: number;
            physics_interpolation: boolean;
            enable_object_picking: boolean;
            max_physics_steps_per_frame: number;
            physics_jitter_fix: number;
        };
        '3d': {
            physics_engine: string;
            default_gravity: number;
            default_angular_damp: number;
            default_gravity_vector: Vector3;
            default_linear_damp: number;
            run_on_separate_thread: boolean;
            sleep_threshold_angular: number;
            sleep_threshold_linear: number;
            solver: {
                contact_max_allowed_penetration: number;
                contact_max_separation: number;
                contact_recycle_radius: number;
                default_contact_bias: number;
                solver_iterations: number;
            };
            time_before_sleep: number;
        };
        '2d': {
            default_angular_damp: number;
            default_gravity: number;
            default_gravity_vector: Vector2;
            default_linear_damp: number;
            physics_engine: string;
            run_on_separate_thread: boolean;
            sleep_threshold_angular: number;
            sleep_threshold_linear: number;
            solver: {
                contact_max_allowed_penetration: number;
                contact_max_separation: number;
                contact_recycle_radius: number;
                default_constraint_bias: number;
                default_contact_bias: number;
                solver_iterations: number;
            };
            time_before_sleep: number;
        };
    };
    rendering: {
        lights_and_shadows: {
            directional_shadow: {
                size: number;
                soft_shadow_filter_quality: number;
                '16_bits': boolean;
                'size.mobile': number;
                'soft_shadow_filter_quality.mobile': number;
            };
            positional_shadow: {
                soft_shadow_filter_quality: number;
                atlas_size: number;
                'atlas_size.mobile': number;
                atlas_16_bits: boolean;
                atlas_quadrant_0_subdiv: number;
                atlas_quadrant_1_subdiv: number;
                atlas_quadrant_2_subdiv: number;
                atlas_quadrant_3_subdiv: number;
                'soft_shadow_filter_quality.mobile': number;
            };
            tighter_shadow_caster_culling: boolean;
            use_physical_light_units: boolean;
        };
        textures: {
            default_filters: {
                anisotropic_filtering_level: number;
                texture_mipmap_bias: number;
                use_nearest_mipmap_filter: boolean;
            };
            decals: {
                filter: number;
            };
            canvas_textures: {
                default_texture_filter: number;
                default_texture_repeat: number;
            };
            light_projectors: {
                filter: number;
            };
            lossless_compression: {
                force_png: boolean;
            };
            vram_compression: {
                cache_gpu_compressor: boolean;
                compress_with_gpu: boolean;
                import_etc2_astc: boolean;
                import_s3tc_bptc: boolean;
            };
            webp_compression: {
                compression_method: number;
                lossless_compression_factor: number;
            };
        };
        anti_aliasing: {
            quality: {
                msaa_3d: number;
                use_debanding: boolean;
                msaa_2d: number;
                screen_space_aa: number;
                use_taa: boolean;
            };
            screen_space_roughness_limiter: {
                amount: number;
                enabled: boolean;
                limit: number;
            };
        };
        '2d': {
            batching: {
                item_buffer_size: number;
                uniform_set_cache_size: number;
            };
            sdf: {
                oversize: number;
                scale: number;
            };
            shadow_atlas: {
                size: number;
            };
            snap: {
                snap_2d_transforms_to_pixel: boolean;
                snap_2d_vertices_to_pixel: boolean;
            };
        };
        camera: {
            depth_of_field: {
                depth_of_field_bokeh_quality: number;
                depth_of_field_bokeh_shape: number;
                depth_of_field_use_jitter: boolean;
            };
        };
        driver: {
            depth_prepass: {
                disable_for_vendors: string;
                enable: boolean;
            };
            threads: {
                thread_model: number;
            };
        };
        environment: {
            defaults: {
                default_clear_color: Color;
                default_environment: string;
            };
            glow: {
                upscale_mode: number;
                'upscale_mode.mobile': number;
            };
            screen_space_reflection: {
                roughness_quality: number;
            };
            ssao: {
                adaptive_target: number;
                blur_passes: number;
                fadeout_from: number;
                fadeout_to: number;
                half_size: boolean;
                quality: number;
            };
            ssil: {
                adaptive_target: number;
                blur_passes: number;
                fadeout_from: number;
                fadeout_to: number;
                half_size: boolean;
                quality: number;
            };
            subsurface_scattering: {
                subsurface_scattering_depth_scale: number;
                subsurface_scattering_quality: number;
                subsurface_scattering_scale: number;
            };
            volumetric_fog: {
                use_filter: number;
                volume_depth: number;
                volume_size: number;
            };
        };
        gl_compatibility: {
            fallback_to_angle: boolean;
            fallback_to_gles: boolean;
            fallback_to_native: boolean;
            item_buffer_size: number;
            nvidia_disable_threaded_optimization: boolean;
        };
        global_illumination: {
            gi: {
                use_half_resolution: boolean;
            };
            sdfgi: {
                frames_to_converge: number;
                frames_to_update_lights: number;
                probe_ray_count: number;
            };
            voxel_gi: {
                quality: number;
            };
        };
        lightmapping: {
            bake_performance: {
                max_rays_per_pass: number;
                max_rays_per_probe_pass: number;
                region_size: number;
            };
            bake_quality: {
                high_quality_probe_ray_count: number;
                high_quality_ray_count: number;
                low_quality_probe_ray_count: number;
                low_quality_ray_count: number;
                medium_quality_probe_ray_count: number;
                medium_quality_ray_count: number;
                ultra_quality_probe_ray_count: number;
                ultra_quality_ray_count: number;
            };
            denoising: {
                denoiser: number;
            };
            lightmap_gi: {
                use_bicubic_filter: boolean;
            };
            primitive_meshes: {
                texel_size: number;
            };
            probe_capture: {
                update_speed: number;
            };
        };
        limits: {
            cluster_builder: {
                max_clustered_elements: number;
            };
            global_shader_variables: {
                buffer_size: number;
            };
            opengl: {
                max_lights_per_object: number;
                max_renderable_elements: number;
                max_renderable_lights: number;
            };
            spatial_indexer: {
                threaded_cull_minimum_instances: number;
                update_iterations_per_frame: number;
            };
            time: {
                time_rollover_secs: number;
            };
        };
        mesh_lod: {
            lod_change: {
                threshold_pixels: number;
            };
        };
        occlusion_culling: {
            bvh_build_quality: number;
            jitter_projection: boolean;
            occlusion_rays_per_thread: number;
            use_occlusion_culling: boolean;
        };
        reflections: {
            reflection_atlas: {
                reflection_count: number;
                reflection_size: number;
                'reflection_size.mobile': number;
            };
            sky_reflections: {
                fast_filter_high_quality: boolean;
                ggx_samples: number;
                'ggx_samples.mobile': number;
                roughness_layers: number;
                texture_array_reflections: boolean;
                'texture_array_reflections.mobile': boolean;
            };
        };
        renderer: {
            rendering_method: string;
            'rendering_method.mobile': string;
            'rendering_method.web': string;
        };
        rendering_device: {
            d3d12: {
                agility_sdk_version: number;
                max_misc_descriptors_per_frame: number;
                max_resource_descriptors_per_frame: number;
                max_sampler_descriptors_per_frame: number;
            };
            fallback_to_d3d12: boolean;
            fallback_to_opengl3: boolean;
            fallback_to_vulkan: boolean;
            pipeline_cache: {
                enable: boolean;
                save_chunk_size_mb: number;
            };
            staging_buffer: {
                block_size_kb: number;
                max_size_mb: number;
                texture_upload_region_size_px: number;
            };
            vsync: {
                frame_queue_size: number;
                swapchain_image_count: number;
            };
            vulkan: {
                max_descriptors_per_pool: number;
            };
        };
        scaling_3d: {
            fsr_sharpness: number;
            mode: number;
            scale: number;
        };
        shader_compiler: {
            shader_cache: {
                compress: boolean;
                enabled: boolean;
                strip_debug: boolean;
                'strip_debug.release': boolean;
                use_zstd_compression: boolean;
            };
        };
        shading: {
            overrides: {
                force_lambert_over_burley: boolean;
                'force_lambert_over_burley.mobile': boolean;
                force_vertex_shading: boolean;
            };
        };
        viewport: {
            hdr_2d: boolean;
            transparent_background: boolean;
        };
        vrs: {
            mode: number;
            texture: string;
        };
    };
    animation: {
        warnings: {
            check_angle_interpolation_type_conflicting: boolean;
            check_invalid_track_paths: boolean;
        };
    };
    audio: {
        buses: {
            channel_disable_threshold_db: -60;
            channel_disable_time: number;
            default_bus_layout: string;
        };
        driver: {
            enable_input: boolean;
            mix_rate: number;
            'mix_rate.web': number;
            output_latency: number;
            'output_latency.web': number;
        };
        general: {
            '2d_panning_strength': number;
            '3d_panning_strength': number;
            default_playback_type: number;
            'default_playback_type.web': number;
            ios: {
                mix_with_others: boolean;
                session_category: number;
            };
            text_to_speech: boolean;
        };
        video: {
            video_delay_compensation_ms: number;
        };
    };
    collada: {
        use_ambient: boolean;
    };
    compression: {
        formats: {
            gzip: {
                compression_level: number;
            };
            zlib: {
                compression_level: number;
            };
            zstd: {
                compression_level: number;
                long_distance_matching: boolean;
                window_log_size: number;
            };
        };
    };
    display: {
        mouse_cursor: {
            custom_image: string;
            custom_image_hotspot: Vector2;
            tooltip_position_offset: Vector2;
        };
        window: {
            dpi: {
                allow_hidpi: boolean;
            };
            energy_saving: {
                keep_screen_on: boolean;
            };
            frame_pacing: {
                android: {
                    enable_frame_pacing: boolean;
                    swappy_mode: number;
                };
            };
            handheld: {
                orientation: number;
            };
            ios: {
                allow_high_refresh_rate: boolean;
                hide_home_indicator: boolean;
                hide_status_bar: boolean;
                suppress_ui_gesture: boolean;
            };
            per_pixel_transparency: {
                allowed: boolean;
            };
            size: {
                always_on_top: boolean;
                borderless: boolean;
                extend_to_title: boolean;
                initial_position: Vector2;
                initial_position_type: number;
                initial_screen: number;
                mode: number;
                no_focus: boolean;
                resizable: boolean;
                sharp_corners: boolean;
                transparent: boolean;
                viewport_height: number;
                viewport_width: number;
                window_height_override: number;
                window_width_override: number;
            };
            stretch: {
                aspect: string;
                mode: string;
                scale: number;
                scale_mode: string;
            };
            subwindows: {
                embed_subwindows: boolean;
            };
            vsync: {
                vsync_mode: number;
            };
        };
    };
    dotnet: {
        project: {
            assembly_name: string;
            assembly_reload_attempts: number;
            solution_directory: string;
        };
    };
    editor: {
        export: {
            convert_text_resources_to_binary: boolean;
        };
        import: {
            atlas_max_width: number;
            reimport_missing_imported_files: boolean;
            use_multiple_threads: boolean;
        };
        movie_writer: {
            disable_vsync: boolean;
            fps: number;
            mix_rate: number;
            mjpeg_quality: number;
            movie_file: string;
            speaker_mode: number;
        };
        naming: {
            node_name_casing: number;
            node_name_num_separator: number;
            scene_name_casing: number;
            script_name_casing: number;
        };
        run: {
            main_run_args: string;
        };
        script: {
            templates_search_path: string;
        };
        version_control: {
            autoload_on_startup: boolean;
            plugin_name: string;
        };
    };
    filesystem: {
        import: {
            blender: {
                enabled: boolean;
                'enabled.android': boolean;
                'enabled.web': boolean;
            };
            fbx2gltf: {
                enabled: boolean;
                'enabled.android': boolean;
                'enabled.web': boolean;
            };
        };
    };
    gui: {
        common: {
            default_scroll_deadzone: number;
            snap_controls_to_pixels: boolean;
            text_edit_undo_stack_max_size: number;
        };
        fonts: {
            dynamic_fonts: {
                use_oversampling: boolean;
            };
        };
        theme: {
            custom: string;
            custom_font: string;
            default_font_antialiasing: number;
            default_font_generate_mipmaps: boolean;
            default_font_hinting: number;
            default_font_multichannel_signed_distance_field: boolean;
            default_font_subpixel_positioning: number;
            default_theme_scale: number;
            lcd_subpixel_layout: number;
        };
        timers: {
            button_shortcut_feedback_highlight_time: number;
            incremental_search_max_interval_msec: number;
            text_edit_idle_detect_sec: number;
            tooltip_delay_sec: number;
            'tooltip_delay_sec.editor_hint': number;
        };
    };
    input_devices: {
        buffering: {
            agile_event_flushing: boolean;
        };
        compatibility: {
            legacy_just_pressed_behavior: boolean;
        };
        pointing: {
            android: {
                enable_long_press_as_right_click: boolean;
                enable_pan_and_scale_gestures: boolean;
                rotary_input_scroll_axis: number;
            };
            emulate_mouse_from_touch: boolean;
            emulate_touch_from_mouse: boolean;
        };
        sensors: {
            enable_accelerometer: boolean;
            enable_gravity: boolean;
            enable_gyroscope: boolean;
            enable_magnetometer: boolean;
        };
    };
    internationalization: {
        locale: {
            fallback: string;
            include_text_server_data: boolean;
            test: string;
        };
        pseudolocalization: {
            double_vowels: boolean;
            expansion_ratio: number;
            fake_bidi: boolean;
            override: boolean;
            prefix: string;
            replace_with_accents: boolean;
            skip_placeholders: boolean;
            suffix: string;
            use_pseudolocalization: boolean;
        };
        rendering: {
            force_right_to_left_layout_direction: boolean;
            root_node_auto_translate: boolean;
            root_node_layout_direction: number;
            text_driver: string;
        };
    };
    layer_names: {
        '2d_navigation': {
            layer_1: string;
            layer_2: string;
            layer_3: string;
            layer_4: string;
            layer_5: string;
            layer_6: string;
            layer_7: string;
            layer_8: string;
            layer_9: string;
            layer_10: string;
            layer_11: string;
            layer_12: string;
            layer_13: string;
            layer_14: string;
            layer_15: string;
            layer_16: string;
            layer_17: string;
            layer_18: string;
            layer_19: string;
            layer_20: string;
            layer_21: string;
            layer_22: string;
            layer_23: string;
            layer_24: string;
            layer_25: string;
            layer_26: string;
            layer_27: string;
            layer_28: string;
            layer_29: string;
            layer_30: string;
            layer_31: string;
            layer_32: string;
        };
        '2d_physics': {
            layer_1: string;
            layer_2: string;
            layer_3: string;
            layer_4: string;
            layer_5: string;
            layer_6: string;
            layer_7: string;
            layer_8: string;
            layer_9: string;
            layer_10: string;
            layer_11: string;
            layer_12: string;
            layer_13: string;
            layer_14: string;
            layer_15: string;
            layer_16: string;
            layer_17: string;
            layer_18: string;
            layer_19: string;
            layer_20: string;
            layer_21: string;
            layer_22: string;
            layer_23: string;
            layer_24: string;
            layer_25: string;
            layer_26: string;
            layer_27: string;
            layer_28: string;
            layer_29: string;
            layer_30: string;
            layer_31: string;
            layer_32: string;
        };
        '2d_render': {
            layer_1: string;
            layer_2: string;
            layer_3: string;
            layer_4: string;
            layer_5: string;
            layer_6: string;
            layer_7: string;
            layer_8: string;
            layer_9: string;
            layer_10: string;
            layer_11: string;
            layer_12: string;
            layer_13: string;
            layer_14: string;
            layer_15: string;
            layer_16: string;
            layer_17: string;
            layer_18: string;
            layer_19: string;
            layer_20: string;
        };
        '3d_navigation': {
            layer_1: string;
            layer_2: string;
            layer_3: string;
            layer_4: string;
            layer_5: string;
            layer_6: string;
            layer_7: string;
            layer_8: string;
            layer_9: string;
            layer_10: string;
            layer_11: string;
            layer_12: string;
            layer_13: string;
            layer_14: string;
            layer_15: string;
            layer_16: string;
            layer_17: string;
            layer_18: string;
            layer_19: string;
            layer_20: string;
            layer_21: string;
            layer_22: string;
            layer_23: string;
            layer_24: string;
            layer_25: string;
            layer_26: string;
            layer_27: string;
            layer_28: string;
            layer_29: string;
            layer_30: string;
            layer_31: string;
            layer_32: string;
        };
        '3d_physics': {
            layer_1: string;
            layer_2: string;
            layer_3: string;
            layer_4: string;
            layer_5: string;
            layer_6: string;
            layer_7: string;
            layer_8: string;
            layer_9: string;
            layer_10: string;
            layer_11: string;
            layer_12: string;
            layer_13: string;
            layer_14: string;
            layer_15: string;
            layer_16: string;
            layer_17: string;
            layer_18: string;
            layer_19: string;
            layer_20: string;
            layer_21: string;
            layer_22: string;
            layer_23: string;
            layer_24: string;
            layer_25: string;
            layer_26: string;
            layer_27: string;
            layer_28: string;
            layer_29: string;
            layer_30: string;
            layer_31: string;
            layer_32: string;
        };
        '3d_render': {
            layer_1: string;
            layer_2: string;
            layer_3: string;
            layer_4: string;
            layer_5: string;
            layer_6: string;
            layer_7: string;
            layer_8: string;
            layer_9: string;
            layer_10: string;
            layer_11: string;
            layer_12: string;
            layer_13: string;
            layer_14: string;
            layer_15: string;
            layer_16: string;
            layer_17: string;
            layer_18: string;
            layer_19: string;
            layer_20: string;
        };
        avoidance: {
            layer_1: string;
            layer_2: string;
            layer_3: string;
            layer_4: string;
            layer_5: string;
            layer_6: string;
            layer_7: string;
            layer_8: string;
            layer_9: string;
            layer_10: string;
            layer_11: string;
            layer_12: string;
            layer_13: string;
            layer_14: string;
            layer_15: string;
            layer_16: string;
            layer_17: string;
            layer_18: string;
            layer_19: string;
            layer_20: string;
            layer_21: string;
            layer_22: string;
            layer_23: string;
            layer_24: string;
            layer_25: string;
            layer_26: string;
            layer_27: string;
            layer_28: string;
            layer_29: string;
            layer_30: string;
            layer_31: string;
            layer_32: string;
        };
    };
    memory: {
        limits: {
            message_queue: {
                max_size_mb: number;
            };
        };
    };
    navigation: {
        '2d': {
            default_cell_size: number;
            default_edge_connection_margin: number;
            default_link_connection_radius: number;
            use_edge_connections: boolean;
        };
        '3d': {
            default_cell_height: number;
            default_cell_size: number;
            default_edge_connection_margin: number;
            default_link_connection_radius: number;
            default_up: Vector3;
            merge_rasterizer_cell_scale: number;
            use_edge_connections: boolean;
        };
        avoidance: {
            thread_model: {
                avoidance_use_high_priority_threads: boolean;
                avoidance_use_multiple_threads: boolean;
            };
        };
        baking: {
            thread_model: {
                baking_use_high_priority_threads: boolean;
                baking_use_multiple_threads: boolean;
            };
            use_crash_prevention_checks: boolean;
        };
    };
    network: {
        limits: {
            debugger: {
                max_chars_per_second: number;
                max_errors_per_second: number;
                max_queued_messages: number;
                max_warnings_per_second: number;
            };
            packet_peer_stream: {
                max_buffer_po2: number;
            };
            tcp: {
                connect_timeout_seconds: number;
            };
            webrtc: {
                max_channel_in_buffer_kb: number;
            };
        };
        tls: {
            certificate_bundle_override: string;
        };
    };
    threading: {
        worker_pool: {
            low_priority_thread_ratio: number;
            max_threads: number;
        };
    };
    xr: {
        openxr: {
            default_action_map: string;
            enabled: boolean;
            environment_blend_mode: string;
            extensions: {
                debug_message_types: string;
                debug_utils: string;
                eye_gaze_interaction: boolean;
                hand_interaction_profile: boolean;
                hand_tracking: boolean;
                hand_tracking_controller_data_source: boolean;
                hand_tracking_unobstructed_data_source: boolean;
            };
            form_factor: string;
            foveation_dynamic: boolean;
            foveation_level: string;
            reference_space: string;
            startup_alert: boolean;
            submit_depth_buffer: boolean;
            view_configuration: string;
        };
        shaders: {
            enabled: boolean;
        };
    };
}
