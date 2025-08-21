import * as type from './types.js';
export interface PhysicsBody3D extends CollisionObject3D {
    axis_lock_angular_x: type.bool;
    axis_lock_angular_y: type.bool;
    axis_lock_angular_z: type.bool;
    axis_lock_linear_x: type.bool;
    axis_lock_linear_y: type.bool;
    axis_lock_linear_z: type.bool;
}
export interface SpriteBase3D extends GeometryInstance3D {
    alpha_antialiasing_edge: type.float;
    alpha_antialiasing_mode: type.int;
    alpha_cut: type.int;
    alpha_hash_scale: type.float;
    alpha_scissor_threshold: type.float;
    axis: type.int;
    billboard: type.int;
    centered: type.bool;
    double_sided: type.bool;
    fixed_size: type.bool;
    flip_h: type.bool;
    flip_v: type.bool;
    modulate: type.Color;
    no_depth_test: type.bool;
    offset: type.Vector2;
    pixel_size: type.float;
    render_priority: type.int;
    shaded: type.bool;
    texture_filter: type.int;
    transparent: type.bool;
}
export declare namespace SpriteBase3D {
    const enum DrawFlags {
        FLAG_TRANSPARENT = 0,
        FLAG_SHADED = 1,
        FLAG_DOUBLE_SIDED = 2,
        FLAG_DISABLE_DEPTH_TEST = 3,
        FLAG_FIXED_SIZE = 4,
        FLAG_MAX = 5
    }
    const enum AlphaCutMode {
        ALPHA_CUT_DISABLED = 0,
        ALPHA_CUT_DISCARD = 1,
        ALPHA_CUT_OPAQUE_PREPASS = 2,
        ALPHA_CUT_HASH = 3
    }
}
export interface RDSamplerState extends RefCounted {
    anisotropy_max: type.float;
    border_color: type.int;
    compare_op: type.int;
    enable_compare: type.bool;
    lod_bias: type.float;
    mag_filter: type.int;
    max_lod: type.float;
    min_filter: type.int;
    min_lod: type.float;
    mip_filter: type.int;
    repeat_u: type.int;
    repeat_v: type.int;
    repeat_w: type.int;
    unnormalized_uvw: type.bool;
    use_anisotropy: type.bool;
}
export interface ResourcePreloader extends Node {
}
export interface FileSystemDock extends VBoxContainer {
}
export interface BaseButton extends Control {
    action_mode: type.int;
    button_group: {
        type: "ButtonGroup";
        properties: ButtonGroup;
    };
    button_mask: type.int;
    button_pressed: type.bool;
    disabled: type.bool;
    focus_mode: type.int;
    keep_pressed_outside: type.bool;
    shortcut: {
        type: "Shortcut";
        properties: Shortcut;
    };
    shortcut_feedback: type.bool;
    shortcut_in_tooltip: type.bool;
    toggle_mode: type.bool;
}
export declare namespace BaseButton {
    const enum DrawMode {
        DRAW_NORMAL = 0,
        DRAW_PRESSED = 1,
        DRAW_HOVER = 2,
        DRAW_DISABLED = 3,
        DRAW_HOVER_PRESSED = 4
    }
    const enum ActionMode {
        ACTION_MODE_BUTTON_PRESS = 0,
        ACTION_MODE_BUTTON_RELEASE = 1
    }
}
export interface MeshInstance3D extends GeometryInstance3D {
    mesh: {
        type: "Mesh";
        properties: Mesh;
    };
    skeleton: type.NodePath;
    skin: {
        type: "Skin";
        properties: Skin;
    };
}
export interface OccluderPolygon2D extends Resource {
    closed: type.bool;
    cull_mode: type.int;
    polygon: type.PackedVector2Array;
}
export declare namespace OccluderPolygon2D {
    const enum CullMode {
        CULL_DISABLED = 0,
        CULL_CLOCKWISE = 1,
        CULL_COUNTER_CLOCKWISE = 2
    }
}
export interface XMLParser extends RefCounted {
}
export declare namespace XMLParser {
    const enum NodeType {
        NODE_NONE = 0,
        NODE_ELEMENT = 1,
        NODE_ELEMENT_END = 2,
        NODE_TEXT = 3,
        NODE_COMMENT = 4,
        NODE_CDATA = 5,
        NODE_UNKNOWN = 6
    }
}
export interface Material extends Resource {
    next_pass: {
        type: "Material";
        properties: Material;
    };
    render_priority: type.int;
}
export declare namespace Material {
    const RENDER_PRIORITY_MAX = 127;
    const RENDER_PRIORITY_MIN = -128;
}
export interface TextureLayeredRD extends TextureLayered {
    texture_rd_rid: {
        type: "RID";
        properties: RID;
    };
}
export interface StreamPeerExtension extends StreamPeer {
}
export interface Viewport extends Node {
    audio_listener_enable_2d: type.bool;
    audio_listener_enable_3d: type.bool;
    canvas_cull_mask: type.int;
    canvas_item_default_texture_filter: type.int;
    canvas_item_default_texture_repeat: type.int;
    canvas_transform: type.Transform2D;
    debug_draw: type.int;
    disable_3d: type.bool;
    fsr_sharpness: type.float;
    global_canvas_transform: type.Transform2D;
    gui_disable_input: type.bool;
    gui_embed_subwindows: type.bool;
    gui_snap_controls_to_pixels: type.bool;
    handle_input_locally: type.bool;
    mesh_lod_threshold: type.float;
    msaa_2d: type.int;
    msaa_3d: type.int;
    own_world_3d: type.bool;
    physics_interpolation_mode: type.int;
    physics_object_picking: type.bool;
    physics_object_picking_first_only: type.bool;
    physics_object_picking_sort: type.bool;
    positional_shadow_atlas_16_bits: type.bool;
    positional_shadow_atlas_quad_0: type.int;
    positional_shadow_atlas_quad_1: type.int;
    positional_shadow_atlas_quad_2: type.int;
    positional_shadow_atlas_quad_3: type.int;
    positional_shadow_atlas_size: type.int;
    scaling_3d_mode: type.int;
    scaling_3d_scale: type.float;
    screen_space_aa: type.int;
    sdf_oversize: type.int;
    sdf_scale: type.int;
    snap_2d_transforms_to_pixel: type.bool;
    snap_2d_vertices_to_pixel: type.bool;
    texture_mipmap_bias: type.float;
    transparent_bg: type.bool;
    use_debanding: type.bool;
    use_hdr_2d: type.bool;
    use_occlusion_culling: type.bool;
    use_taa: type.bool;
    use_xr: type.bool;
    vrs_mode: type.int;
    vrs_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    vrs_update_mode: type.int;
    world_2d: {
        type: "World2D";
        properties: World2D;
    };
    world_3d: {
        type: "World3D";
        properties: World3D;
    };
}
export declare namespace Viewport {
    const enum PositionalShadowAtlasQuadrantSubdiv {
        SHADOW_ATLAS_QUADRANT_SUBDIV_DISABLED = 0,
        SHADOW_ATLAS_QUADRANT_SUBDIV_1 = 1,
        SHADOW_ATLAS_QUADRANT_SUBDIV_4 = 2,
        SHADOW_ATLAS_QUADRANT_SUBDIV_16 = 3,
        SHADOW_ATLAS_QUADRANT_SUBDIV_64 = 4,
        SHADOW_ATLAS_QUADRANT_SUBDIV_256 = 5,
        SHADOW_ATLAS_QUADRANT_SUBDIV_1024 = 6,
        SHADOW_ATLAS_QUADRANT_SUBDIV_MAX = 7
    }
    const enum Scaling3DMode {
        SCALING_3D_MODE_BILINEAR = 0,
        SCALING_3D_MODE_FSR = 1,
        SCALING_3D_MODE_FSR2 = 2,
        SCALING_3D_MODE_MAX = 3
    }
    const enum MSAA {
        MSAA_DISABLED = 0,
        MSAA_2X = 1,
        MSAA_4X = 2,
        MSAA_8X = 3,
        MSAA_MAX = 4
    }
    const enum ScreenSpaceAA {
        SCREEN_SPACE_AA_DISABLED = 0,
        SCREEN_SPACE_AA_FXAA = 1,
        SCREEN_SPACE_AA_MAX = 2
    }
    const enum RenderInfo {
        RENDER_INFO_OBJECTS_IN_FRAME = 0,
        RENDER_INFO_PRIMITIVES_IN_FRAME = 1,
        RENDER_INFO_DRAW_CALLS_IN_FRAME = 2,
        RENDER_INFO_MAX = 3
    }
    const enum RenderInfoType {
        RENDER_INFO_TYPE_VISIBLE = 0,
        RENDER_INFO_TYPE_SHADOW = 1,
        RENDER_INFO_TYPE_CANVAS = 2,
        RENDER_INFO_TYPE_MAX = 3
    }
    const enum DebugDraw {
        DEBUG_DRAW_DISABLED = 0,
        DEBUG_DRAW_UNSHADED = 1,
        DEBUG_DRAW_LIGHTING = 2,
        DEBUG_DRAW_OVERDRAW = 3,
        DEBUG_DRAW_WIREFRAME = 4,
        DEBUG_DRAW_NORMAL_BUFFER = 5,
        DEBUG_DRAW_VOXEL_GI_ALBEDO = 6,
        DEBUG_DRAW_VOXEL_GI_LIGHTING = 7,
        DEBUG_DRAW_VOXEL_GI_EMISSION = 8,
        DEBUG_DRAW_SHADOW_ATLAS = 9,
        DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS = 10,
        DEBUG_DRAW_SCENE_LUMINANCE = 11,
        DEBUG_DRAW_SSAO = 12,
        DEBUG_DRAW_SSIL = 13,
        DEBUG_DRAW_PSSM_SPLITS = 14,
        DEBUG_DRAW_DECAL_ATLAS = 15,
        DEBUG_DRAW_SDFGI = 16,
        DEBUG_DRAW_SDFGI_PROBES = 17,
        DEBUG_DRAW_GI_BUFFER = 18,
        DEBUG_DRAW_DISABLE_LOD = 19,
        DEBUG_DRAW_CLUSTER_OMNI_LIGHTS = 20,
        DEBUG_DRAW_CLUSTER_SPOT_LIGHTS = 21,
        DEBUG_DRAW_CLUSTER_DECALS = 22,
        DEBUG_DRAW_CLUSTER_REFLECTION_PROBES = 23,
        DEBUG_DRAW_OCCLUDERS = 24,
        DEBUG_DRAW_MOTION_VECTORS = 25,
        DEBUG_DRAW_INTERNAL_BUFFER = 26
    }
    const enum DefaultCanvasItemTextureFilter {
        DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST = 0,
        DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR = 1,
        DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 2,
        DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 3,
        DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_MAX = 4
    }
    const enum DefaultCanvasItemTextureRepeat {
        DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_DISABLED = 0,
        DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_ENABLED = 1,
        DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MIRROR = 2,
        DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MAX = 3
    }
    const enum SDFOversize {
        SDF_OVERSIZE_100_PERCENT = 0,
        SDF_OVERSIZE_120_PERCENT = 1,
        SDF_OVERSIZE_150_PERCENT = 2,
        SDF_OVERSIZE_200_PERCENT = 3,
        SDF_OVERSIZE_MAX = 4
    }
    const enum SDFScale {
        SDF_SCALE_100_PERCENT = 0,
        SDF_SCALE_50_PERCENT = 1,
        SDF_SCALE_25_PERCENT = 2,
        SDF_SCALE_MAX = 3
    }
    const enum VRSMode {
        VRS_DISABLED = 0,
        VRS_TEXTURE = 1,
        VRS_XR = 2,
        VRS_MAX = 3
    }
    const enum VRSUpdateMode {
        VRS_UPDATE_DISABLED = 0,
        VRS_UPDATE_ONCE = 1,
        VRS_UPDATE_ALWAYS = 2,
        VRS_UPDATE_MAX = 3
    }
}
export interface AudioStreamPlayer3D extends Node3D {
    area_mask: type.int;
    attenuation_filter_cutoff_hz: type.float;
    attenuation_filter_db: type.float;
    attenuation_model: type.int;
    autoplay: type.bool;
    bus: type.StringName;
    doppler_tracking: type.int;
    emission_angle_degrees: type.float;
    emission_angle_enabled: type.bool;
    emission_angle_filter_attenuation_db: type.float;
    max_db: type.float;
    max_distance: type.float;
    max_polyphony: type.int;
    panning_strength: type.float;
    pitch_scale: type.float;
    playback_type: type.int;
    playing: type.bool;
    stream: {
        type: "AudioStream";
        properties: AudioStream;
    };
    stream_paused: type.bool;
    unit_size: type.float;
    volume_db: type.float;
}
export declare namespace AudioStreamPlayer3D {
    const enum AttenuationModel {
        ATTENUATION_INVERSE_DISTANCE = 0,
        ATTENUATION_INVERSE_SQUARE_DISTANCE = 1,
        ATTENUATION_LOGARITHMIC = 2,
        ATTENUATION_DISABLED = 3
    }
    const enum DopplerTracking {
        DOPPLER_TRACKING_DISABLED = 0,
        DOPPLER_TRACKING_IDLE_STEP = 1,
        DOPPLER_TRACKING_PHYSICS_STEP = 2
    }
}
export interface SphereShape3D extends Shape3D {
    radius: type.float;
}
export interface ParticleProcessMaterial extends Material {
    alpha_curve: {
        type: "Texture2D";
        properties: Texture2D;
    };
    angle_curve: {
        type: "Texture2D";
        properties: Texture2D;
    };
    angle_max: type.float;
    angle_min: type.float;
    angular_velocity_curve: {
        type: "Texture2D";
        properties: Texture2D;
    };
    angular_velocity_max: type.float;
    angular_velocity_min: type.float;
    anim_offset_curve: {
        type: "Texture2D";
        properties: Texture2D;
    };
    anim_offset_max: type.float;
    anim_offset_min: type.float;
    anim_speed_curve: {
        type: "Texture2D";
        properties: Texture2D;
    };
    anim_speed_max: type.float;
    anim_speed_min: type.float;
    attractor_interaction_enabled: type.bool;
    collision_bounce: type.float;
    collision_friction: type.float;
    collision_mode: type.int;
    collision_use_scale: type.bool;
    color: type.Color;
    color_initial_ramp: {
        type: "Texture2D";
        properties: Texture2D;
    };
    color_ramp: {
        type: "Texture2D";
        properties: Texture2D;
    };
    damping_curve: {
        type: "Texture2D";
        properties: Texture2D;
    };
    damping_max: type.float;
    damping_min: type.float;
    direction: type.Vector3;
    directional_velocity_curve: {
        type: "Texture2D";
        properties: Texture2D;
    };
    directional_velocity_max: type.float;
    directional_velocity_min: type.float;
    emission_box_extents: type.Vector3;
    emission_color_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    emission_curve: {
        type: "Texture2D";
        properties: Texture2D;
    };
    emission_normal_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    emission_point_count: type.int;
    emission_point_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    emission_ring_axis: type.Vector3;
    emission_ring_cone_angle: type.float;
    emission_ring_height: type.float;
    emission_ring_inner_radius: type.float;
    emission_ring_radius: type.float;
    emission_shape: type.int;
    emission_shape_offset: type.Vector3;
    emission_shape_scale: type.Vector3;
    emission_sphere_radius: type.float;
    flatness: type.float;
    gravity: type.Vector3;
    hue_variation_curve: {
        type: "Texture2D";
        properties: Texture2D;
    };
    hue_variation_max: type.float;
    hue_variation_min: type.float;
    inherit_velocity_ratio: type.float;
    initial_velocity_max: type.float;
    initial_velocity_min: type.float;
    lifetime_randomness: type.float;
    linear_accel_curve: {
        type: "Texture2D";
        properties: Texture2D;
    };
    linear_accel_max: type.float;
    linear_accel_min: type.float;
    orbit_velocity_curve: {
        type: "Texture2D";
        properties: Texture2D;
    };
    orbit_velocity_max: type.float;
    orbit_velocity_min: type.float;
    particle_flag_align_y: type.bool;
    particle_flag_damping_as_friction: type.bool;
    particle_flag_disable_z: type.bool;
    particle_flag_rotate_y: type.bool;
    radial_accel_curve: {
        type: "Texture2D";
        properties: Texture2D;
    };
    radial_accel_max: type.float;
    radial_accel_min: type.float;
    radial_velocity_curve: {
        type: "Texture2D";
        properties: Texture2D;
    };
    radial_velocity_max: type.float;
    radial_velocity_min: type.float;
    scale_curve: {
        type: "Texture2D";
        properties: Texture2D;
    };
    scale_max: type.float;
    scale_min: type.float;
    scale_over_velocity_curve: {
        type: "Texture2D";
        properties: Texture2D;
    };
    scale_over_velocity_max: type.float;
    scale_over_velocity_min: type.float;
    spread: type.float;
    sub_emitter_amount_at_collision: type.int;
    sub_emitter_amount_at_end: type.int;
    sub_emitter_frequency: type.float;
    sub_emitter_keep_velocity: type.bool;
    sub_emitter_mode: type.int;
    tangential_accel_curve: {
        type: "Texture2D";
        properties: Texture2D;
    };
    tangential_accel_max: type.float;
    tangential_accel_min: type.float;
    turbulence_enabled: type.bool;
    turbulence_influence_max: type.float;
    turbulence_influence_min: type.float;
    turbulence_influence_over_life: {
        type: "Texture2D";
        properties: Texture2D;
    };
    turbulence_initial_displacement_max: type.float;
    turbulence_initial_displacement_min: type.float;
    turbulence_noise_scale: type.float;
    turbulence_noise_speed: type.Vector3;
    turbulence_noise_speed_random: type.float;
    turbulence_noise_strength: type.float;
    velocity_limit_curve: {
        type: "Texture2D";
        properties: Texture2D;
    };
    velocity_pivot: type.Vector3;
}
export declare namespace ParticleProcessMaterial {
    const enum Parameter {
        PARAM_INITIAL_LINEAR_VELOCITY = 0,
        PARAM_ANGULAR_VELOCITY = 1,
        PARAM_ORBIT_VELOCITY = 2,
        PARAM_LINEAR_ACCEL = 3,
        PARAM_RADIAL_ACCEL = 4,
        PARAM_TANGENTIAL_ACCEL = 5,
        PARAM_DAMPING = 6,
        PARAM_ANGLE = 7,
        PARAM_SCALE = 8,
        PARAM_HUE_VARIATION = 9,
        PARAM_ANIM_SPEED = 10,
        PARAM_ANIM_OFFSET = 11,
        PARAM_RADIAL_VELOCITY = 15,
        PARAM_DIRECTIONAL_VELOCITY = 16,
        PARAM_SCALE_OVER_VELOCITY = 17,
        PARAM_MAX = 18,
        PARAM_TURB_VEL_INFLUENCE = 13,
        PARAM_TURB_INIT_DISPLACEMENT = 14,
        PARAM_TURB_INFLUENCE_OVER_LIFE = 12
    }
    const enum ParticleFlags {
        PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY = 0,
        PARTICLE_FLAG_ROTATE_Y = 1,
        PARTICLE_FLAG_DISABLE_Z = 2,
        PARTICLE_FLAG_DAMPING_AS_FRICTION = 3,
        PARTICLE_FLAG_MAX = 4
    }
    const enum EmissionShape {
        EMISSION_SHAPE_POINT = 0,
        EMISSION_SHAPE_SPHERE = 1,
        EMISSION_SHAPE_SPHERE_SURFACE = 2,
        EMISSION_SHAPE_BOX = 3,
        EMISSION_SHAPE_POINTS = 4,
        EMISSION_SHAPE_DIRECTED_POINTS = 5,
        EMISSION_SHAPE_RING = 6,
        EMISSION_SHAPE_MAX = 7
    }
    const enum SubEmitterMode {
        SUB_EMITTER_DISABLED = 0,
        SUB_EMITTER_CONSTANT = 1,
        SUB_EMITTER_AT_END = 2,
        SUB_EMITTER_AT_COLLISION = 3,
        SUB_EMITTER_MAX = 4
    }
    const enum CollisionMode {
        COLLISION_DISABLED = 0,
        COLLISION_RIGID = 1,
        COLLISION_HIDE_ON_CONTACT = 2,
        COLLISION_MAX = 3
    }
}
export interface Slider extends Range {
    editable: type.bool;
    focus_mode: type.int;
    scrollable: type.bool;
    step: type.float;
    tick_count: type.int;
    ticks_on_borders: type.bool;
    center_grabber: type.int;
    grabber_offset: type.int;
    grabber: {
        type: "Texture2D";
        properties: Texture2D;
    };
    grabber_disabled: {
        type: "Texture2D";
        properties: Texture2D;
    };
    grabber_highlight: {
        type: "Texture2D";
        properties: Texture2D;
    };
    tick: {
        type: "Texture2D";
        properties: Texture2D;
    };
    grabber_area: {
        type: "StyleBox";
        properties: StyleBox;
    };
    grabber_area_highlight: {
        type: "StyleBox";
        properties: StyleBox;
    };
    slider: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export interface TextureProgressBar extends Range {
    fill_mode: type.int;
    mouse_filter: type.int;
    nine_patch_stretch: type.bool;
    radial_center_offset: type.Vector2;
    radial_fill_degrees: type.float;
    radial_initial_angle: type.float;
    size_flags_vertical: type.int;
    step: type.float;
    stretch_margin_bottom: type.int;
    stretch_margin_left: type.int;
    stretch_margin_right: type.int;
    stretch_margin_top: type.int;
    texture_over: {
        type: "Texture2D";
        properties: Texture2D;
    };
    texture_progress: {
        type: "Texture2D";
        properties: Texture2D;
    };
    texture_progress_offset: type.Vector2;
    texture_under: {
        type: "Texture2D";
        properties: Texture2D;
    };
    tint_over: type.Color;
    tint_progress: type.Color;
    tint_under: type.Color;
}
export declare namespace TextureProgressBar {
    const enum FillMode {
        FILL_LEFT_TO_RIGHT = 0,
        FILL_RIGHT_TO_LEFT = 1,
        FILL_TOP_TO_BOTTOM = 2,
        FILL_BOTTOM_TO_TOP = 3,
        FILL_CLOCKWISE = 4,
        FILL_COUNTER_CLOCKWISE = 5,
        FILL_BILINEAR_LEFT_AND_RIGHT = 6,
        FILL_BILINEAR_TOP_AND_BOTTOM = 7,
        FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE = 8
    }
}
export interface Translation extends Resource {
    locale: type.String;
}
export interface PropertyTweener extends Tweener {
}
export interface Expression extends RefCounted {
}
export interface VisualShaderNodeFloatConstant extends VisualShaderNodeConstant {
    constant: type.float;
}
export interface MarginContainer extends Container {
    margin_bottom: type.int;
    margin_left: type.int;
    margin_right: type.int;
    margin_top: type.int;
}
export interface AudioEffectDistortion extends AudioEffect {
    drive: type.float;
    keep_hf_hz: type.float;
    mode: type.int;
    post_gain: type.float;
    pre_gain: type.float;
}
export declare namespace AudioEffectDistortion {
    const enum Mode {
        MODE_CLIP = 0,
        MODE_ATAN = 1,
        MODE_LOFI = 2,
        MODE_OVERDRIVE = 3,
        MODE_WAVESHAPE = 4
    }
}
export interface EditorSelection extends Object {
}
export interface TextMesh extends PrimitiveMesh {
    autowrap_mode: type.int;
    curve_step: type.float;
    depth: type.float;
    font: {
        type: "Font";
        properties: Font;
    };
    font_size: type.int;
    horizontal_alignment: type.int;
    justification_flags: type.int;
    language: type.String;
    line_spacing: type.float;
    offset: type.Vector2;
    pixel_size: type.float;
    structured_text_bidi_override: type.int;
    structured_text_bidi_override_options: type.Array;
    text: type.String;
    text_direction: type.int;
    uppercase: type.bool;
    vertical_alignment: type.int;
    width: type.float;
}
export interface AnimationNodeSub2 extends AnimationNodeSync {
}
export interface ImporterMesh extends Resource {
}
export interface Semaphore extends RefCounted {
}
export interface ProjectSettings extends Object {
    'animation/warnings/check_angle_interpolation_type_conflicting': type.bool;
    'animation/warnings/check_invalid_track_paths': type.bool;
    'application/boot_splash/bg_color': type.Color;
    'application/boot_splash/fullsize': type.bool;
    'application/boot_splash/image': type.String;
    'application/boot_splash/minimum_display_time': type.int;
    'application/boot_splash/show_image': type.bool;
    'application/boot_splash/use_filter': type.bool;
    'application/config/auto_accept_quit': type.bool;
    'application/config/custom_user_dir_name': type.String;
    'application/config/description': type.String;
    'application/config/icon': type.String;
    'application/config/macos_native_icon': type.String;
    'application/config/name': type.String;
    'application/config/name_localized': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'application/config/project_settings_override': type.String;
    'application/config/quit_on_go_back': type.bool;
    'application/config/use_custom_user_dir': type.bool;
    'application/config/use_hidden_project_data_directory': type.bool;
    'application/config/version': type.String;
    'application/config/windows_native_icon': type.String;
    'application/run/delta_smoothing': type.bool;
    'application/run/disable_stderr': type.bool;
    'application/run/disable_stdout': type.bool;
    'application/run/enable_alt_space_menu': type.bool;
    'application/run/flush_stdout_on_print': type.bool;
    'application/run/flush_stdout_on_print.debug': type.bool;
    'application/run/frame_delay_msec': type.int;
    'application/run/low_processor_mode': type.bool;
    'application/run/low_processor_mode_sleep_usec': type.int;
    'application/run/main_loop_type': type.String;
    'application/run/main_scene': type.String;
    'application/run/max_fps': type.int;
    'application/run/print_header': type.bool;
    'audio/buses/channel_disable_threshold_db': type.float;
    'audio/buses/channel_disable_time': type.float;
    'audio/buses/default_bus_layout': type.String;
    'audio/driver/driver': type.String;
    'audio/driver/enable_input': type.bool;
    'audio/driver/mix_rate': type.int;
    'audio/driver/mix_rate.web': type.int;
    'audio/driver/output_latency': type.int;
    'audio/driver/output_latency.web': type.int;
    'audio/general/2d_panning_strength': type.float;
    'audio/general/3d_panning_strength': type.float;
    'audio/general/default_playback_type': type.int;
    'audio/general/default_playback_type.web': type.int;
    'audio/general/ios/mix_with_others': type.bool;
    'audio/general/ios/session_category': type.int;
    'audio/general/text_to_speech': type.bool;
    'audio/video/video_delay_compensation_ms': type.int;
    'collada/use_ambient': type.bool;
    'compression/formats/gzip/compression_level': type.int;
    'compression/formats/zlib/compression_level': type.int;
    'compression/formats/zstd/compression_level': type.int;
    'compression/formats/zstd/long_distance_matching': type.bool;
    'compression/formats/zstd/window_log_size': type.int;
    'debug/canvas_items/debug_redraw_color': type.Color;
    'debug/canvas_items/debug_redraw_time': type.float;
    'debug/file_logging/enable_file_logging': type.bool;
    'debug/file_logging/enable_file_logging.pc': type.bool;
    'debug/file_logging/log_path': type.String;
    'debug/file_logging/max_log_files': type.int;
    'debug/gdscript/warnings/assert_always_false': type.int;
    'debug/gdscript/warnings/assert_always_true': type.int;
    'debug/gdscript/warnings/confusable_capture_reassignment': type.int;
    'debug/gdscript/warnings/confusable_identifier': type.int;
    'debug/gdscript/warnings/confusable_local_declaration': type.int;
    'debug/gdscript/warnings/confusable_local_usage': type.int;
    'debug/gdscript/warnings/constant_used_as_function': type.int;
    'debug/gdscript/warnings/deprecated_keyword': type.int;
    'debug/gdscript/warnings/empty_file': type.int;
    'debug/gdscript/warnings/enable': type.bool;
    'debug/gdscript/warnings/enum_variable_without_default': type.int;
    'debug/gdscript/warnings/exclude_addons': type.bool;
    'debug/gdscript/warnings/function_used_as_property': type.int;
    'debug/gdscript/warnings/get_node_default_without_onready': type.int;
    'debug/gdscript/warnings/incompatible_ternary': type.int;
    'debug/gdscript/warnings/inference_on_variant': type.int;
    'debug/gdscript/warnings/inferred_declaration': type.int;
    'debug/gdscript/warnings/int_as_enum_without_cast': type.int;
    'debug/gdscript/warnings/int_as_enum_without_match': type.int;
    'debug/gdscript/warnings/integer_division': type.int;
    'debug/gdscript/warnings/missing_tool': type.int;
    'debug/gdscript/warnings/narrowing_conversion': type.int;
    'debug/gdscript/warnings/native_method_override': type.int;
    'debug/gdscript/warnings/onready_with_export': type.int;
    'debug/gdscript/warnings/property_used_as_function': type.int;
    'debug/gdscript/warnings/redundant_await': type.int;
    'debug/gdscript/warnings/redundant_static_unload': type.int;
    'debug/gdscript/warnings/renamed_in_godot_4_hint': type.bool;
    'debug/gdscript/warnings/return_value_discarded': type.int;
    'debug/gdscript/warnings/shadowed_global_identifier': type.int;
    'debug/gdscript/warnings/shadowed_variable': type.int;
    'debug/gdscript/warnings/shadowed_variable_base_class': type.int;
    'debug/gdscript/warnings/standalone_expression': type.int;
    'debug/gdscript/warnings/standalone_ternary': type.int;
    'debug/gdscript/warnings/static_called_on_instance': type.int;
    'debug/gdscript/warnings/unassigned_variable': type.int;
    'debug/gdscript/warnings/unassigned_variable_op_assign': type.int;
    'debug/gdscript/warnings/unreachable_code': type.int;
    'debug/gdscript/warnings/unreachable_pattern': type.int;
    'debug/gdscript/warnings/unsafe_call_argument': type.int;
    'debug/gdscript/warnings/unsafe_cast': type.int;
    'debug/gdscript/warnings/unsafe_method_access': type.int;
    'debug/gdscript/warnings/unsafe_property_access': type.int;
    'debug/gdscript/warnings/unsafe_void_return': type.int;
    'debug/gdscript/warnings/untyped_declaration': type.int;
    'debug/gdscript/warnings/unused_local_constant': type.int;
    'debug/gdscript/warnings/unused_parameter': type.int;
    'debug/gdscript/warnings/unused_private_class_variable': type.int;
    'debug/gdscript/warnings/unused_signal': type.int;
    'debug/gdscript/warnings/unused_variable': type.int;
    'debug/settings/crash_handler/message': type.String;
    'debug/settings/crash_handler/message.editor': type.String;
    'debug/settings/gdscript/max_call_stack': type.int;
    'debug/settings/physics_interpolation/enable_warnings': type.bool;
    'debug/settings/profiler/max_functions': type.int;
    'debug/settings/profiler/max_timestamp_query_elements': type.int;
    'debug/settings/stdout/print_fps': type.bool;
    'debug/settings/stdout/print_gpu_profile': type.bool;
    'debug/settings/stdout/verbose_stdout': type.bool;
    'debug/shader_language/warnings/device_limit_exceeded': type.bool;
    'debug/shader_language/warnings/enable': type.bool;
    'debug/shader_language/warnings/float_comparison': type.bool;
    'debug/shader_language/warnings/formatting_error': type.bool;
    'debug/shader_language/warnings/magic_position_write': type.bool;
    'debug/shader_language/warnings/treat_warnings_as_errors': type.bool;
    'debug/shader_language/warnings/unused_constant': type.bool;
    'debug/shader_language/warnings/unused_function': type.bool;
    'debug/shader_language/warnings/unused_local_variable': type.bool;
    'debug/shader_language/warnings/unused_struct': type.bool;
    'debug/shader_language/warnings/unused_uniform': type.bool;
    'debug/shader_language/warnings/unused_varying': type.bool;
    'debug/shapes/avoidance/agents_radius_color': type.Color;
    'debug/shapes/avoidance/enable_agents_radius': type.bool;
    'debug/shapes/avoidance/enable_obstacles_radius': type.bool;
    'debug/shapes/avoidance/enable_obstacles_static': type.bool;
    'debug/shapes/avoidance/obstacles_radius_color': type.Color;
    'debug/shapes/avoidance/obstacles_static_edge_pushin_color': type.Color;
    'debug/shapes/avoidance/obstacles_static_edge_pushout_color': type.Color;
    'debug/shapes/avoidance/obstacles_static_face_pushin_color': type.Color;
    'debug/shapes/avoidance/obstacles_static_face_pushout_color': type.Color;
    'debug/shapes/collision/contact_color': type.Color;
    'debug/shapes/collision/draw_2d_outlines': type.bool;
    'debug/shapes/collision/max_contacts_displayed': type.int;
    'debug/shapes/collision/shape_color': type.Color;
    'debug/shapes/navigation/agent_path_color': type.Color;
    'debug/shapes/navigation/agent_path_point_size': type.float;
    'debug/shapes/navigation/edge_connection_color': type.Color;
    'debug/shapes/navigation/enable_agent_paths': type.bool;
    'debug/shapes/navigation/enable_agent_paths_xray': type.bool;
    'debug/shapes/navigation/enable_edge_connections': type.bool;
    'debug/shapes/navigation/enable_edge_connections_xray': type.bool;
    'debug/shapes/navigation/enable_edge_lines': type.bool;
    'debug/shapes/navigation/enable_edge_lines_xray': type.bool;
    'debug/shapes/navigation/enable_geometry_face_random_color': type.bool;
    'debug/shapes/navigation/enable_link_connections': type.bool;
    'debug/shapes/navigation/enable_link_connections_xray': type.bool;
    'debug/shapes/navigation/geometry_edge_color': type.Color;
    'debug/shapes/navigation/geometry_edge_disabled_color': type.Color;
    'debug/shapes/navigation/geometry_face_color': type.Color;
    'debug/shapes/navigation/geometry_face_disabled_color': type.Color;
    'debug/shapes/navigation/link_connection_color': type.Color;
    'debug/shapes/navigation/link_connection_disabled_color': type.Color;
    'debug/shapes/paths/geometry_color': type.Color;
    'debug/shapes/paths/geometry_width': type.float;
    'display/display_server/driver': type.String;
    'display/display_server/driver.android': type.String;
    'display/display_server/driver.ios': type.String;
    'display/display_server/driver.linuxbsd': type.String;
    'display/display_server/driver.macos': type.String;
    'display/display_server/driver.windows': type.String;
    'display/mouse_cursor/custom_image': type.String;
    'display/mouse_cursor/custom_image_hotspot': type.Vector2;
    'display/mouse_cursor/tooltip_position_offset': type.Vector2;
    'display/window/dpi/allow_hidpi': type.bool;
    'display/window/energy_saving/keep_screen_on': type.bool;
    'display/window/frame_pacing/android/enable_frame_pacing': type.bool;
    'display/window/frame_pacing/android/swappy_mode': type.int;
    'display/window/handheld/orientation': type.int;
    'display/window/ios/allow_high_refresh_rate': type.bool;
    'display/window/ios/hide_home_indicator': type.bool;
    'display/window/ios/hide_status_bar': type.bool;
    'display/window/ios/suppress_ui_gesture': type.bool;
    'display/window/per_pixel_transparency/allowed': type.bool;
    'display/window/size/always_on_top': type.bool;
    'display/window/size/borderless': type.bool;
    'display/window/size/extend_to_title': type.bool;
    'display/window/size/initial_position': type.Vector2i;
    'display/window/size/initial_position_type': type.int;
    'display/window/size/initial_screen': type.int;
    'display/window/size/mode': type.int;
    'display/window/size/no_focus': type.bool;
    'display/window/size/resizable': type.bool;
    'display/window/size/sharp_corners': type.bool;
    'display/window/size/transparent': type.bool;
    'display/window/size/viewport_height': type.int;
    'display/window/size/viewport_width': type.int;
    'display/window/size/window_height_override': type.int;
    'display/window/size/window_width_override': type.int;
    'display/window/stretch/aspect': type.String;
    'display/window/stretch/mode': type.String;
    'display/window/stretch/scale': type.float;
    'display/window/stretch/scale_mode': type.String;
    'display/window/subwindows/embed_subwindows': type.bool;
    'display/window/vsync/vsync_mode': type.int;
    'dotnet/project/assembly_name': type.String;
    'dotnet/project/assembly_reload_attempts': type.int;
    'dotnet/project/solution_directory': type.String;
    'editor/export/convert_text_resources_to_binary': type.bool;
    'editor/import/atlas_max_width': type.int;
    'editor/import/reimport_missing_imported_files': type.bool;
    'editor/import/use_multiple_threads': type.bool;
    'editor/movie_writer/disable_vsync': type.bool;
    'editor/movie_writer/fps': type.int;
    'editor/movie_writer/mix_rate': type.int;
    'editor/movie_writer/mjpeg_quality': type.float;
    'editor/movie_writer/movie_file': type.String;
    'editor/movie_writer/speaker_mode': type.int;
    'editor/naming/default_signal_callback_name': type.String;
    'editor/naming/default_signal_callback_to_self_name': type.String;
    'editor/naming/node_name_casing': type.int;
    'editor/naming/node_name_num_separator': type.int;
    'editor/naming/scene_name_casing': type.int;
    'editor/naming/script_name_casing': type.int;
    'editor/run/main_run_args': type.String;
    'editor/script/search_in_file_extensions': type.PackedStringArray;
    'editor/script/templates_search_path': type.String;
    'editor/version_control/autoload_on_startup': type.bool;
    'editor/version_control/plugin_name': type.String;
    'filesystem/import/blender/enabled': type.bool;
    'filesystem/import/blender/enabled.android': type.bool;
    'filesystem/import/blender/enabled.web': type.bool;
    'filesystem/import/fbx2gltf/enabled': type.bool;
    'filesystem/import/fbx2gltf/enabled.android': type.bool;
    'filesystem/import/fbx2gltf/enabled.web': type.bool;
    'gui/common/default_scroll_deadzone': type.int;
    'gui/common/snap_controls_to_pixels': type.bool;
    'gui/common/swap_cancel_ok': type.bool;
    'gui/common/text_edit_undo_stack_max_size': type.int;
    'gui/fonts/dynamic_fonts/use_oversampling': type.bool;
    'gui/theme/custom': type.String;
    'gui/theme/custom_font': type.String;
    'gui/theme/default_font_antialiasing': type.int;
    'gui/theme/default_font_generate_mipmaps': type.bool;
    'gui/theme/default_font_hinting': type.int;
    'gui/theme/default_font_multichannel_signed_distance_field': type.bool;
    'gui/theme/default_font_subpixel_positioning': type.int;
    'gui/theme/default_theme_scale': type.float;
    'gui/theme/lcd_subpixel_layout': type.int;
    'gui/timers/button_shortcut_feedback_highlight_time': type.float;
    'gui/timers/incremental_search_max_interval_msec': type.int;
    'gui/timers/text_edit_idle_detect_sec': type.float;
    'gui/timers/tooltip_delay_sec': type.float;
    'gui/timers/tooltip_delay_sec.editor_hint': type.float;
    'input/ui_accept': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_cancel': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_copy': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_cut': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_down': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_end': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_filedialog_refresh': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_filedialog_show_hidden': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_filedialog_up_one_level': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_focus_next': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_focus_prev': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_graph_delete': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_graph_duplicate': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_home': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_left': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_menu': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_page_down': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_page_up': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_paste': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_redo': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_right': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_select': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_swap_input_direction': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_add_selection_for_next_occurrence': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_backspace': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_backspace_all_to_left': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_backspace_all_to_left.macos': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_backspace_word': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_backspace_word.macos': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_add_above': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_add_above.macos': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_add_below': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_add_below.macos': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_document_end': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_document_end.macos': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_document_start': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_document_start.macos': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_down': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_left': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_line_end': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_line_end.macos': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_line_start': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_line_start.macos': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_page_down': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_page_up': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_right': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_up': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_word_left': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_word_left.macos': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_word_right': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_caret_word_right.macos': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_clear_carets_and_selection': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_completion_accept': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_completion_query': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_completion_replace': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_dedent': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_delete': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_delete_all_to_right': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_delete_all_to_right.macos': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_delete_word': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_delete_word.macos': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_indent': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_newline': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_newline_above': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_newline_blank': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_scroll_down': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_scroll_down.macos': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_scroll_up': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_scroll_up.macos': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_select_all': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_select_word_under_caret': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_select_word_under_caret.macos': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_skip_selection_for_next_occurrence': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_submit': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_text_toggle_insert_mode': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_undo': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_unicode_start': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input/ui_up': {
        type: "Dictionary";
        properties: Dictionary;
    };
    'input_devices/buffering/agile_event_flushing': type.bool;
    'input_devices/compatibility/legacy_just_pressed_behavior': type.bool;
    'input_devices/pen_tablet/driver': type.String;
    'input_devices/pen_tablet/driver.windows': type.String;
    'input_devices/pointing/android/enable_long_press_as_right_click': type.bool;
    'input_devices/pointing/android/enable_pan_and_scale_gestures': type.bool;
    'input_devices/pointing/android/rotary_input_scroll_axis': type.int;
    'input_devices/pointing/emulate_mouse_from_touch': type.bool;
    'input_devices/pointing/emulate_touch_from_mouse': type.bool;
    'input_devices/sensors/enable_accelerometer': type.bool;
    'input_devices/sensors/enable_gravity': type.bool;
    'input_devices/sensors/enable_gyroscope': type.bool;
    'input_devices/sensors/enable_magnetometer': type.bool;
    'internationalization/locale/fallback': type.String;
    'internationalization/locale/include_text_server_data': type.bool;
    'internationalization/locale/test': type.String;
    'internationalization/pseudolocalization/double_vowels': type.bool;
    'internationalization/pseudolocalization/expansion_ratio': type.float;
    'internationalization/pseudolocalization/fake_bidi': type.bool;
    'internationalization/pseudolocalization/override': type.bool;
    'internationalization/pseudolocalization/prefix': type.String;
    'internationalization/pseudolocalization/replace_with_accents': type.bool;
    'internationalization/pseudolocalization/skip_placeholders': type.bool;
    'internationalization/pseudolocalization/suffix': type.String;
    'internationalization/pseudolocalization/use_pseudolocalization': type.bool;
    'internationalization/rendering/force_right_to_left_layout_direction': type.bool;
    'internationalization/rendering/root_node_auto_translate': type.bool;
    'internationalization/rendering/root_node_layout_direction': type.int;
    'internationalization/rendering/text_driver': type.String;
    'layer_names/2d_navigation/layer_1': type.String;
    'layer_names/2d_navigation/layer_2': type.String;
    'layer_names/2d_navigation/layer_3': type.String;
    'layer_names/2d_navigation/layer_4': type.String;
    'layer_names/2d_navigation/layer_5': type.String;
    'layer_names/2d_navigation/layer_6': type.String;
    'layer_names/2d_navigation/layer_7': type.String;
    'layer_names/2d_navigation/layer_8': type.String;
    'layer_names/2d_navigation/layer_9': type.String;
    'layer_names/2d_navigation/layer_10': type.String;
    'layer_names/2d_navigation/layer_11': type.String;
    'layer_names/2d_navigation/layer_12': type.String;
    'layer_names/2d_navigation/layer_13': type.String;
    'layer_names/2d_navigation/layer_14': type.String;
    'layer_names/2d_navigation/layer_15': type.String;
    'layer_names/2d_navigation/layer_16': type.String;
    'layer_names/2d_navigation/layer_17': type.String;
    'layer_names/2d_navigation/layer_18': type.String;
    'layer_names/2d_navigation/layer_19': type.String;
    'layer_names/2d_navigation/layer_20': type.String;
    'layer_names/2d_navigation/layer_21': type.String;
    'layer_names/2d_navigation/layer_22': type.String;
    'layer_names/2d_navigation/layer_23': type.String;
    'layer_names/2d_navigation/layer_24': type.String;
    'layer_names/2d_navigation/layer_25': type.String;
    'layer_names/2d_navigation/layer_26': type.String;
    'layer_names/2d_navigation/layer_27': type.String;
    'layer_names/2d_navigation/layer_28': type.String;
    'layer_names/2d_navigation/layer_29': type.String;
    'layer_names/2d_navigation/layer_30': type.String;
    'layer_names/2d_navigation/layer_31': type.String;
    'layer_names/2d_navigation/layer_32': type.String;
    'layer_names/2d_physics/layer_1': type.String;
    'layer_names/2d_physics/layer_2': type.String;
    'layer_names/2d_physics/layer_3': type.String;
    'layer_names/2d_physics/layer_4': type.String;
    'layer_names/2d_physics/layer_5': type.String;
    'layer_names/2d_physics/layer_6': type.String;
    'layer_names/2d_physics/layer_7': type.String;
    'layer_names/2d_physics/layer_8': type.String;
    'layer_names/2d_physics/layer_9': type.String;
    'layer_names/2d_physics/layer_10': type.String;
    'layer_names/2d_physics/layer_11': type.String;
    'layer_names/2d_physics/layer_12': type.String;
    'layer_names/2d_physics/layer_13': type.String;
    'layer_names/2d_physics/layer_14': type.String;
    'layer_names/2d_physics/layer_15': type.String;
    'layer_names/2d_physics/layer_16': type.String;
    'layer_names/2d_physics/layer_17': type.String;
    'layer_names/2d_physics/layer_18': type.String;
    'layer_names/2d_physics/layer_19': type.String;
    'layer_names/2d_physics/layer_20': type.String;
    'layer_names/2d_physics/layer_21': type.String;
    'layer_names/2d_physics/layer_22': type.String;
    'layer_names/2d_physics/layer_23': type.String;
    'layer_names/2d_physics/layer_24': type.String;
    'layer_names/2d_physics/layer_25': type.String;
    'layer_names/2d_physics/layer_26': type.String;
    'layer_names/2d_physics/layer_27': type.String;
    'layer_names/2d_physics/layer_28': type.String;
    'layer_names/2d_physics/layer_29': type.String;
    'layer_names/2d_physics/layer_30': type.String;
    'layer_names/2d_physics/layer_31': type.String;
    'layer_names/2d_physics/layer_32': type.String;
    'layer_names/2d_render/layer_1': type.String;
    'layer_names/2d_render/layer_2': type.String;
    'layer_names/2d_render/layer_3': type.String;
    'layer_names/2d_render/layer_4': type.String;
    'layer_names/2d_render/layer_5': type.String;
    'layer_names/2d_render/layer_6': type.String;
    'layer_names/2d_render/layer_7': type.String;
    'layer_names/2d_render/layer_8': type.String;
    'layer_names/2d_render/layer_9': type.String;
    'layer_names/2d_render/layer_10': type.String;
    'layer_names/2d_render/layer_11': type.String;
    'layer_names/2d_render/layer_12': type.String;
    'layer_names/2d_render/layer_13': type.String;
    'layer_names/2d_render/layer_14': type.String;
    'layer_names/2d_render/layer_15': type.String;
    'layer_names/2d_render/layer_16': type.String;
    'layer_names/2d_render/layer_17': type.String;
    'layer_names/2d_render/layer_18': type.String;
    'layer_names/2d_render/layer_19': type.String;
    'layer_names/2d_render/layer_20': type.String;
    'layer_names/3d_navigation/layer_1': type.String;
    'layer_names/3d_navigation/layer_2': type.String;
    'layer_names/3d_navigation/layer_3': type.String;
    'layer_names/3d_navigation/layer_4': type.String;
    'layer_names/3d_navigation/layer_5': type.String;
    'layer_names/3d_navigation/layer_6': type.String;
    'layer_names/3d_navigation/layer_7': type.String;
    'layer_names/3d_navigation/layer_8': type.String;
    'layer_names/3d_navigation/layer_9': type.String;
    'layer_names/3d_navigation/layer_10': type.String;
    'layer_names/3d_navigation/layer_11': type.String;
    'layer_names/3d_navigation/layer_12': type.String;
    'layer_names/3d_navigation/layer_13': type.String;
    'layer_names/3d_navigation/layer_14': type.String;
    'layer_names/3d_navigation/layer_15': type.String;
    'layer_names/3d_navigation/layer_16': type.String;
    'layer_names/3d_navigation/layer_17': type.String;
    'layer_names/3d_navigation/layer_18': type.String;
    'layer_names/3d_navigation/layer_19': type.String;
    'layer_names/3d_navigation/layer_20': type.String;
    'layer_names/3d_navigation/layer_21': type.String;
    'layer_names/3d_navigation/layer_22': type.String;
    'layer_names/3d_navigation/layer_23': type.String;
    'layer_names/3d_navigation/layer_24': type.String;
    'layer_names/3d_navigation/layer_25': type.String;
    'layer_names/3d_navigation/layer_26': type.String;
    'layer_names/3d_navigation/layer_27': type.String;
    'layer_names/3d_navigation/layer_28': type.String;
    'layer_names/3d_navigation/layer_29': type.String;
    'layer_names/3d_navigation/layer_30': type.String;
    'layer_names/3d_navigation/layer_31': type.String;
    'layer_names/3d_navigation/layer_32': type.String;
    'layer_names/3d_physics/layer_1': type.String;
    'layer_names/3d_physics/layer_2': type.String;
    'layer_names/3d_physics/layer_3': type.String;
    'layer_names/3d_physics/layer_4': type.String;
    'layer_names/3d_physics/layer_5': type.String;
    'layer_names/3d_physics/layer_6': type.String;
    'layer_names/3d_physics/layer_7': type.String;
    'layer_names/3d_physics/layer_8': type.String;
    'layer_names/3d_physics/layer_9': type.String;
    'layer_names/3d_physics/layer_10': type.String;
    'layer_names/3d_physics/layer_11': type.String;
    'layer_names/3d_physics/layer_12': type.String;
    'layer_names/3d_physics/layer_13': type.String;
    'layer_names/3d_physics/layer_14': type.String;
    'layer_names/3d_physics/layer_15': type.String;
    'layer_names/3d_physics/layer_16': type.String;
    'layer_names/3d_physics/layer_17': type.String;
    'layer_names/3d_physics/layer_18': type.String;
    'layer_names/3d_physics/layer_19': type.String;
    'layer_names/3d_physics/layer_20': type.String;
    'layer_names/3d_physics/layer_21': type.String;
    'layer_names/3d_physics/layer_22': type.String;
    'layer_names/3d_physics/layer_23': type.String;
    'layer_names/3d_physics/layer_24': type.String;
    'layer_names/3d_physics/layer_25': type.String;
    'layer_names/3d_physics/layer_26': type.String;
    'layer_names/3d_physics/layer_27': type.String;
    'layer_names/3d_physics/layer_28': type.String;
    'layer_names/3d_physics/layer_29': type.String;
    'layer_names/3d_physics/layer_30': type.String;
    'layer_names/3d_physics/layer_31': type.String;
    'layer_names/3d_physics/layer_32': type.String;
    'layer_names/3d_render/layer_1': type.String;
    'layer_names/3d_render/layer_2': type.String;
    'layer_names/3d_render/layer_3': type.String;
    'layer_names/3d_render/layer_4': type.String;
    'layer_names/3d_render/layer_5': type.String;
    'layer_names/3d_render/layer_6': type.String;
    'layer_names/3d_render/layer_7': type.String;
    'layer_names/3d_render/layer_8': type.String;
    'layer_names/3d_render/layer_9': type.String;
    'layer_names/3d_render/layer_10': type.String;
    'layer_names/3d_render/layer_11': type.String;
    'layer_names/3d_render/layer_12': type.String;
    'layer_names/3d_render/layer_13': type.String;
    'layer_names/3d_render/layer_14': type.String;
    'layer_names/3d_render/layer_15': type.String;
    'layer_names/3d_render/layer_16': type.String;
    'layer_names/3d_render/layer_17': type.String;
    'layer_names/3d_render/layer_18': type.String;
    'layer_names/3d_render/layer_19': type.String;
    'layer_names/3d_render/layer_20': type.String;
    'layer_names/avoidance/layer_1': type.String;
    'layer_names/avoidance/layer_2': type.String;
    'layer_names/avoidance/layer_3': type.String;
    'layer_names/avoidance/layer_4': type.String;
    'layer_names/avoidance/layer_5': type.String;
    'layer_names/avoidance/layer_6': type.String;
    'layer_names/avoidance/layer_7': type.String;
    'layer_names/avoidance/layer_8': type.String;
    'layer_names/avoidance/layer_9': type.String;
    'layer_names/avoidance/layer_10': type.String;
    'layer_names/avoidance/layer_11': type.String;
    'layer_names/avoidance/layer_12': type.String;
    'layer_names/avoidance/layer_13': type.String;
    'layer_names/avoidance/layer_14': type.String;
    'layer_names/avoidance/layer_15': type.String;
    'layer_names/avoidance/layer_16': type.String;
    'layer_names/avoidance/layer_17': type.String;
    'layer_names/avoidance/layer_18': type.String;
    'layer_names/avoidance/layer_19': type.String;
    'layer_names/avoidance/layer_20': type.String;
    'layer_names/avoidance/layer_21': type.String;
    'layer_names/avoidance/layer_22': type.String;
    'layer_names/avoidance/layer_23': type.String;
    'layer_names/avoidance/layer_24': type.String;
    'layer_names/avoidance/layer_25': type.String;
    'layer_names/avoidance/layer_26': type.String;
    'layer_names/avoidance/layer_27': type.String;
    'layer_names/avoidance/layer_28': type.String;
    'layer_names/avoidance/layer_29': type.String;
    'layer_names/avoidance/layer_30': type.String;
    'layer_names/avoidance/layer_31': type.String;
    'layer_names/avoidance/layer_32': type.String;
    'memory/limits/message_queue/max_size_mb': type.int;
    'navigation/2d/default_cell_size': type.float;
    'navigation/2d/default_edge_connection_margin': type.float;
    'navigation/2d/default_link_connection_radius': type.float;
    'navigation/2d/use_edge_connections': type.bool;
    'navigation/3d/default_cell_height': type.float;
    'navigation/3d/default_cell_size': type.float;
    'navigation/3d/default_edge_connection_margin': type.float;
    'navigation/3d/default_link_connection_radius': type.float;
    'navigation/3d/default_up': type.Vector3;
    'navigation/3d/merge_rasterizer_cell_scale': type.float;
    'navigation/3d/use_edge_connections': type.bool;
    'navigation/avoidance/thread_model/avoidance_use_high_priority_threads': type.bool;
    'navigation/avoidance/thread_model/avoidance_use_multiple_threads': type.bool;
    'navigation/baking/thread_model/baking_use_high_priority_threads': type.bool;
    'navigation/baking/thread_model/baking_use_multiple_threads': type.bool;
    'navigation/baking/use_crash_prevention_checks': type.bool;
    'network/limits/debugger/max_chars_per_second': type.int;
    'network/limits/debugger/max_errors_per_second': type.int;
    'network/limits/debugger/max_queued_messages': type.int;
    'network/limits/debugger/max_warnings_per_second': type.int;
    'network/limits/packet_peer_stream/max_buffer_po2': type.int;
    'network/limits/tcp/connect_timeout_seconds': type.int;
    'network/limits/webrtc/max_channel_in_buffer_kb': type.int;
    'network/tls/certificate_bundle_override': type.String;
    'physics/2d/default_angular_damp': type.float;
    'physics/2d/default_gravity': type.float;
    'physics/2d/default_gravity_vector': type.Vector2;
    'physics/2d/default_linear_damp': type.float;
    'physics/2d/physics_engine': type.String;
    'physics/2d/run_on_separate_thread': type.bool;
    'physics/2d/sleep_threshold_angular': type.float;
    'physics/2d/sleep_threshold_linear': type.float;
    'physics/2d/solver/contact_max_allowed_penetration': type.float;
    'physics/2d/solver/contact_max_separation': type.float;
    'physics/2d/solver/contact_recycle_radius': type.float;
    'physics/2d/solver/default_constraint_bias': type.float;
    'physics/2d/solver/default_contact_bias': type.float;
    'physics/2d/solver/solver_iterations': type.int;
    'physics/2d/time_before_sleep': type.float;
    'physics/3d/default_angular_damp': type.float;
    'physics/3d/default_gravity': type.float;
    'physics/3d/default_gravity_vector': type.Vector3;
    'physics/3d/default_linear_damp': type.float;
    'physics/3d/physics_engine': type.String;
    'physics/3d/run_on_separate_thread': type.bool;
    'physics/3d/sleep_threshold_angular': type.float;
    'physics/3d/sleep_threshold_linear': type.float;
    'physics/3d/solver/contact_max_allowed_penetration': type.float;
    'physics/3d/solver/contact_max_separation': type.float;
    'physics/3d/solver/contact_recycle_radius': type.float;
    'physics/3d/solver/default_contact_bias': type.float;
    'physics/3d/solver/solver_iterations': type.int;
    'physics/3d/time_before_sleep': type.float;
    'physics/common/enable_object_picking': type.bool;
    'physics/common/max_physics_steps_per_frame': type.int;
    'physics/common/physics_interpolation': type.bool;
    'physics/common/physics_jitter_fix': type.float;
    'physics/common/physics_ticks_per_second': type.int;
    'rendering/2d/batching/item_buffer_size': type.int;
    'rendering/2d/batching/uniform_set_cache_size': type.int;
    'rendering/2d/sdf/oversize': type.int;
    'rendering/2d/sdf/scale': type.int;
    'rendering/2d/shadow_atlas/size': type.int;
    'rendering/2d/snap/snap_2d_transforms_to_pixel': type.bool;
    'rendering/2d/snap/snap_2d_vertices_to_pixel': type.bool;
    'rendering/anti_aliasing/quality/msaa_2d': type.int;
    'rendering/anti_aliasing/quality/msaa_3d': type.int;
    'rendering/anti_aliasing/quality/screen_space_aa': type.int;
    'rendering/anti_aliasing/quality/use_debanding': type.bool;
    'rendering/anti_aliasing/quality/use_taa': type.bool;
    'rendering/anti_aliasing/screen_space_roughness_limiter/amount': type.float;
    'rendering/anti_aliasing/screen_space_roughness_limiter/enabled': type.bool;
    'rendering/anti_aliasing/screen_space_roughness_limiter/limit': type.float;
    'rendering/camera/depth_of_field/depth_of_field_bokeh_quality': type.int;
    'rendering/camera/depth_of_field/depth_of_field_bokeh_shape': type.int;
    'rendering/camera/depth_of_field/depth_of_field_use_jitter': type.bool;
    'rendering/driver/depth_prepass/disable_for_vendors': type.String;
    'rendering/driver/depth_prepass/enable': type.bool;
    'rendering/driver/threads/thread_model': type.int;
    'rendering/environment/defaults/default_clear_color': type.Color;
    'rendering/environment/defaults/default_environment': type.String;
    'rendering/environment/glow/upscale_mode': type.int;
    'rendering/environment/glow/upscale_mode.mobile': type.int;
    'rendering/environment/screen_space_reflection/roughness_quality': type.int;
    'rendering/environment/ssao/adaptive_target': type.float;
    'rendering/environment/ssao/blur_passes': type.int;
    'rendering/environment/ssao/fadeout_from': type.float;
    'rendering/environment/ssao/fadeout_to': type.float;
    'rendering/environment/ssao/half_size': type.bool;
    'rendering/environment/ssao/quality': type.int;
    'rendering/environment/ssil/adaptive_target': type.float;
    'rendering/environment/ssil/blur_passes': type.int;
    'rendering/environment/ssil/fadeout_from': type.float;
    'rendering/environment/ssil/fadeout_to': type.float;
    'rendering/environment/ssil/half_size': type.bool;
    'rendering/environment/ssil/quality': type.int;
    'rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale': type.float;
    'rendering/environment/subsurface_scattering/subsurface_scattering_quality': type.int;
    'rendering/environment/subsurface_scattering/subsurface_scattering_scale': type.float;
    'rendering/environment/volumetric_fog/use_filter': type.int;
    'rendering/environment/volumetric_fog/volume_depth': type.int;
    'rendering/environment/volumetric_fog/volume_size': type.int;
    'rendering/gl_compatibility/driver': type.String;
    'rendering/gl_compatibility/driver.android': type.String;
    'rendering/gl_compatibility/driver.ios': type.String;
    'rendering/gl_compatibility/driver.linuxbsd': type.String;
    'rendering/gl_compatibility/driver.macos': type.String;
    'rendering/gl_compatibility/driver.web': type.String;
    'rendering/gl_compatibility/driver.windows': type.String;
    'rendering/gl_compatibility/fallback_to_angle': type.bool;
    'rendering/gl_compatibility/fallback_to_gles': type.bool;
    'rendering/gl_compatibility/fallback_to_native': type.bool;
    'rendering/gl_compatibility/force_angle_on_devices': type.Array;
    'rendering/gl_compatibility/item_buffer_size': type.int;
    'rendering/gl_compatibility/nvidia_disable_threaded_optimization': type.bool;
    'rendering/global_illumination/gi/use_half_resolution': type.bool;
    'rendering/global_illumination/sdfgi/frames_to_converge': type.int;
    'rendering/global_illumination/sdfgi/frames_to_update_lights': type.int;
    'rendering/global_illumination/sdfgi/probe_ray_count': type.int;
    'rendering/global_illumination/voxel_gi/quality': type.int;
    'rendering/lightmapping/bake_performance/max_rays_per_pass': type.int;
    'rendering/lightmapping/bake_performance/max_rays_per_probe_pass': type.int;
    'rendering/lightmapping/bake_performance/region_size': type.int;
    'rendering/lightmapping/bake_quality/high_quality_probe_ray_count': type.int;
    'rendering/lightmapping/bake_quality/high_quality_ray_count': type.int;
    'rendering/lightmapping/bake_quality/low_quality_probe_ray_count': type.int;
    'rendering/lightmapping/bake_quality/low_quality_ray_count': type.int;
    'rendering/lightmapping/bake_quality/medium_quality_probe_ray_count': type.int;
    'rendering/lightmapping/bake_quality/medium_quality_ray_count': type.int;
    'rendering/lightmapping/bake_quality/ultra_quality_probe_ray_count': type.int;
    'rendering/lightmapping/bake_quality/ultra_quality_ray_count': type.int;
    'rendering/lightmapping/denoising/denoiser': type.int;
    'rendering/lightmapping/lightmap_gi/use_bicubic_filter': type.bool;
    'rendering/lightmapping/primitive_meshes/texel_size': type.float;
    'rendering/lightmapping/probe_capture/update_speed': type.float;
    'rendering/lights_and_shadows/directional_shadow/16_bits': type.bool;
    'rendering/lights_and_shadows/directional_shadow/size': type.int;
    'rendering/lights_and_shadows/directional_shadow/size.mobile': type.int;
    'rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality': type.int;
    'rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality.mobile': type.int;
    'rendering/lights_and_shadows/positional_shadow/atlas_16_bits': type.bool;
    'rendering/lights_and_shadows/positional_shadow/atlas_quadrant_0_subdiv': type.int;
    'rendering/lights_and_shadows/positional_shadow/atlas_quadrant_1_subdiv': type.int;
    'rendering/lights_and_shadows/positional_shadow/atlas_quadrant_2_subdiv': type.int;
    'rendering/lights_and_shadows/positional_shadow/atlas_quadrant_3_subdiv': type.int;
    'rendering/lights_and_shadows/positional_shadow/atlas_size': type.int;
    'rendering/lights_and_shadows/positional_shadow/atlas_size.mobile': type.int;
    'rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality': type.int;
    'rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality.mobile': type.int;
    'rendering/lights_and_shadows/tighter_shadow_caster_culling': type.bool;
    'rendering/lights_and_shadows/use_physical_light_units': type.bool;
    'rendering/limits/cluster_builder/max_clustered_elements': type.float;
    'rendering/limits/global_shader_variables/buffer_size': type.int;
    'rendering/limits/opengl/max_lights_per_object': type.int;
    'rendering/limits/opengl/max_renderable_elements': type.int;
    'rendering/limits/opengl/max_renderable_lights': type.int;
    'rendering/limits/spatial_indexer/threaded_cull_minimum_instances': type.int;
    'rendering/limits/spatial_indexer/update_iterations_per_frame': type.int;
    'rendering/limits/time/time_rollover_secs': type.float;
    'rendering/mesh_lod/lod_change/threshold_pixels': type.float;
    'rendering/occlusion_culling/bvh_build_quality': type.int;
    'rendering/occlusion_culling/jitter_projection': type.bool;
    'rendering/occlusion_culling/occlusion_rays_per_thread': type.int;
    'rendering/occlusion_culling/use_occlusion_culling': type.bool;
    'rendering/reflections/reflection_atlas/reflection_count': type.int;
    'rendering/reflections/reflection_atlas/reflection_size': type.int;
    'rendering/reflections/reflection_atlas/reflection_size.mobile': type.int;
    'rendering/reflections/sky_reflections/fast_filter_high_quality': type.bool;
    'rendering/reflections/sky_reflections/ggx_samples': type.int;
    'rendering/reflections/sky_reflections/ggx_samples.mobile': type.int;
    'rendering/reflections/sky_reflections/roughness_layers': type.int;
    'rendering/reflections/sky_reflections/texture_array_reflections': type.bool;
    'rendering/reflections/sky_reflections/texture_array_reflections.mobile': type.bool;
    'rendering/renderer/rendering_method': type.String;
    'rendering/renderer/rendering_method.mobile': type.String;
    'rendering/renderer/rendering_method.web': type.String;
    'rendering/rendering_device/d3d12/agility_sdk_version': type.int;
    'rendering/rendering_device/d3d12/max_misc_descriptors_per_frame': type.int;
    'rendering/rendering_device/d3d12/max_resource_descriptors_per_frame': type.int;
    'rendering/rendering_device/d3d12/max_sampler_descriptors_per_frame': type.int;
    'rendering/rendering_device/driver': type.String;
    'rendering/rendering_device/driver.android': type.String;
    'rendering/rendering_device/driver.ios': type.String;
    'rendering/rendering_device/driver.linuxbsd': type.String;
    'rendering/rendering_device/driver.macos': type.String;
    'rendering/rendering_device/driver.windows': type.String;
    'rendering/rendering_device/fallback_to_d3d12': type.bool;
    'rendering/rendering_device/fallback_to_opengl3': type.bool;
    'rendering/rendering_device/fallback_to_vulkan': type.bool;
    'rendering/rendering_device/pipeline_cache/enable': type.bool;
    'rendering/rendering_device/pipeline_cache/save_chunk_size_mb': type.float;
    'rendering/rendering_device/staging_buffer/block_size_kb': type.int;
    'rendering/rendering_device/staging_buffer/max_size_mb': type.int;
    'rendering/rendering_device/staging_buffer/texture_upload_region_size_px': type.int;
    'rendering/rendering_device/vsync/frame_queue_size': type.int;
    'rendering/rendering_device/vsync/swapchain_image_count': type.int;
    'rendering/rendering_device/vulkan/max_descriptors_per_pool': type.int;
    'rendering/scaling_3d/fsr_sharpness': type.float;
    'rendering/scaling_3d/mode': type.int;
    'rendering/scaling_3d/scale': type.float;
    'rendering/shader_compiler/shader_cache/compress': type.bool;
    'rendering/shader_compiler/shader_cache/enabled': type.bool;
    'rendering/shader_compiler/shader_cache/strip_debug': type.bool;
    'rendering/shader_compiler/shader_cache/strip_debug.release': type.bool;
    'rendering/shader_compiler/shader_cache/use_zstd_compression': type.bool;
    'rendering/shading/overrides/force_lambert_over_burley': type.bool;
    'rendering/shading/overrides/force_lambert_over_burley.mobile': type.bool;
    'rendering/shading/overrides/force_vertex_shading': type.bool;
    'rendering/textures/canvas_textures/default_texture_filter': type.int;
    'rendering/textures/canvas_textures/default_texture_repeat': type.int;
    'rendering/textures/decals/filter': type.int;
    'rendering/textures/default_filters/anisotropic_filtering_level': type.int;
    'rendering/textures/default_filters/texture_mipmap_bias': type.float;
    'rendering/textures/default_filters/use_nearest_mipmap_filter': type.bool;
    'rendering/textures/light_projectors/filter': type.int;
    'rendering/textures/lossless_compression/force_png': type.bool;
    'rendering/textures/vram_compression/cache_gpu_compressor': type.bool;
    'rendering/textures/vram_compression/compress_with_gpu': type.bool;
    'rendering/textures/vram_compression/import_etc2_astc': type.bool;
    'rendering/textures/vram_compression/import_s3tc_bptc': type.bool;
    'rendering/textures/webp_compression/compression_method': type.int;
    'rendering/textures/webp_compression/lossless_compression_factor': type.float;
    'rendering/viewport/hdr_2d': type.bool;
    'rendering/viewport/transparent_background': type.bool;
    'rendering/vrs/mode': type.int;
    'rendering/vrs/texture': type.String;
    'threading/worker_pool/low_priority_thread_ratio': type.float;
    'threading/worker_pool/max_threads': type.int;
    'xr/openxr/default_action_map': type.String;
    'xr/openxr/enabled': type.bool;
    'xr/openxr/environment_blend_mode': type.int;
    'xr/openxr/extensions/debug_message_types': type.int;
    'xr/openxr/extensions/debug_utils': type.int;
    'xr/openxr/extensions/eye_gaze_interaction': type.bool;
    'xr/openxr/extensions/hand_interaction_profile': type.bool;
    'xr/openxr/extensions/hand_tracking': type.bool;
    'xr/openxr/extensions/hand_tracking_controller_data_source': type.bool;
    'xr/openxr/extensions/hand_tracking_unobstructed_data_source': type.bool;
    'xr/openxr/form_factor': type.int;
    'xr/openxr/foveation_dynamic': type.bool;
    'xr/openxr/foveation_level': type.int;
    'xr/openxr/reference_space': type.int;
    'xr/openxr/startup_alert': type.bool;
    'xr/openxr/submit_depth_buffer': type.bool;
    'xr/openxr/view_configuration': type.int;
    'xr/shaders/enabled': type.bool;
}
export interface TextEdit extends Control {
    autowrap_mode: type.int;
    caret_blink: type.bool;
    caret_blink_interval: type.float;
    caret_draw_when_editable_disabled: type.bool;
    caret_mid_grapheme: type.bool;
    caret_move_on_right_click: type.bool;
    caret_multiple: type.bool;
    caret_type: type.int;
    clip_contents: type.bool;
    context_menu_enabled: type.bool;
    custom_word_separators: type.String;
    deselect_on_focus_loss_enabled: type.bool;
    drag_and_drop_selection_enabled: type.bool;
    draw_control_chars: type.bool;
    draw_spaces: type.bool;
    draw_tabs: type.bool;
    editable: type.bool;
    empty_selection_clipboard_enabled: type.bool;
    focus_mode: type.int;
    highlight_all_occurrences: type.bool;
    highlight_current_line: type.bool;
    indent_wrapped_lines: type.bool;
    language: type.String;
    middle_mouse_paste_enabled: type.bool;
    minimap_draw: type.bool;
    minimap_width: type.int;
    mouse_default_cursor_shape: type.int;
    placeholder_text: type.String;
    scroll_fit_content_height: type.bool;
    scroll_fit_content_width: type.bool;
    scroll_horizontal: type.int;
    scroll_past_end_of_file: type.bool;
    scroll_smooth: type.bool;
    scroll_v_scroll_speed: type.float;
    scroll_vertical: type.float;
    selecting_enabled: type.bool;
    shortcut_keys_enabled: type.bool;
    structured_text_bidi_override: type.int;
    structured_text_bidi_override_options: type.Array;
    syntax_highlighter: {
        type: "SyntaxHighlighter";
        properties: SyntaxHighlighter;
    };
    text: type.String;
    text_direction: type.int;
    use_custom_word_separators: type.bool;
    use_default_word_separators: type.bool;
    virtual_keyboard_enabled: type.bool;
    wrap_mode: type.int;
    background_color: type.Color;
    caret_background_color: type.Color;
    caret_color: type.Color;
    current_line_color: type.Color;
    font_color: type.Color;
    font_outline_color: type.Color;
    font_placeholder_color: type.Color;
    font_readonly_color: type.Color;
    font_selected_color: type.Color;
    search_result_border_color: type.Color;
    search_result_color: type.Color;
    selection_color: type.Color;
    word_highlighted_color: type.Color;
    caret_width: type.int;
    line_spacing: type.int;
    outline_size: type.int;
    font: {
        type: "Font";
        properties: Font;
    };
    font_size: type.int;
    space: {
        type: "Texture2D";
        properties: Texture2D;
    };
    tab: {
        type: "Texture2D";
        properties: Texture2D;
    };
    focus: {
        type: "StyleBox";
        properties: StyleBox;
    };
    normal: {
        type: "StyleBox";
        properties: StyleBox;
    };
    read_only: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export declare namespace TextEdit {
    const enum MenuItems {
        MENU_CUT = 0,
        MENU_COPY = 1,
        MENU_PASTE = 2,
        MENU_CLEAR = 3,
        MENU_SELECT_ALL = 4,
        MENU_UNDO = 5,
        MENU_REDO = 6,
        MENU_SUBMENU_TEXT_DIR = 7,
        MENU_DIR_INHERITED = 8,
        MENU_DIR_AUTO = 9,
        MENU_DIR_LTR = 10,
        MENU_DIR_RTL = 11,
        MENU_DISPLAY_UCC = 12,
        MENU_SUBMENU_INSERT_UCC = 13,
        MENU_INSERT_LRM = 14,
        MENU_INSERT_RLM = 15,
        MENU_INSERT_LRE = 16,
        MENU_INSERT_RLE = 17,
        MENU_INSERT_LRO = 18,
        MENU_INSERT_RLO = 19,
        MENU_INSERT_PDF = 20,
        MENU_INSERT_ALM = 21,
        MENU_INSERT_LRI = 22,
        MENU_INSERT_RLI = 23,
        MENU_INSERT_FSI = 24,
        MENU_INSERT_PDI = 25,
        MENU_INSERT_ZWJ = 26,
        MENU_INSERT_ZWNJ = 27,
        MENU_INSERT_WJ = 28,
        MENU_INSERT_SHY = 29,
        MENU_MAX = 30
    }
    const enum EditAction {
        ACTION_NONE = 0,
        ACTION_TYPING = 1,
        ACTION_BACKSPACE = 2,
        ACTION_DELETE = 3
    }
    const enum SearchFlags {
        SEARCH_MATCH_CASE = 1,
        SEARCH_WHOLE_WORDS = 2,
        SEARCH_BACKWARDS = 4
    }
    const enum CaretType {
        CARET_TYPE_LINE = 0,
        CARET_TYPE_BLOCK = 1
    }
    const enum SelectionMode {
        SELECTION_MODE_NONE = 0,
        SELECTION_MODE_SHIFT = 1,
        SELECTION_MODE_POINTER = 2,
        SELECTION_MODE_WORD = 3,
        SELECTION_MODE_LINE = 4
    }
    const enum LineWrappingMode {
        LINE_WRAPPING_NONE = 0,
        LINE_WRAPPING_BOUNDARY = 1
    }
    const enum GutterType {
        GUTTER_TYPE_STRING = 0,
        GUTTER_TYPE_ICON = 1,
        GUTTER_TYPE_CUSTOM = 2
    }
}
export interface Gradient extends Resource {
    colors: type.PackedColorArray;
    interpolation_color_space: type.int;
    interpolation_mode: type.int;
    offsets: type.PackedFloat32Array;
}
export declare namespace Gradient {
    const enum InterpolationMode {
        GRADIENT_INTERPOLATE_LINEAR = 0,
        GRADIENT_INTERPOLATE_CONSTANT = 1,
        GRADIENT_INTERPOLATE_CUBIC = 2
    }
    const enum ColorSpace {
        GRADIENT_COLOR_SPACE_SRGB = 0,
        GRADIENT_COLOR_SPACE_LINEAR_SRGB = 1,
        GRADIENT_COLOR_SPACE_OKLAB = 2
    }
}
export interface TileMap extends Node2D {
    collision_animatable: type.bool;
    collision_visibility_mode: type.int;
    navigation_visibility_mode: type.int;
    rendering_quadrant_size: type.int;
    tile_set: {
        type: "TileSet";
        properties: TileSet;
    };
}
export declare namespace TileMap {
    const enum VisibilityMode {
        VISIBILITY_MODE_DEFAULT = 0,
        VISIBILITY_MODE_FORCE_HIDE = 2,
        VISIBILITY_MODE_FORCE_SHOW = 1
    }
}
export interface VisualShaderNodeLinearSceneDepth extends VisualShaderNode {
}
export interface TextureCubemapArrayRD extends TextureLayeredRD {
}
export interface SubViewportContainer extends Container {
    focus_mode: type.int;
    stretch: type.bool;
    stretch_shrink: type.int;
}
export interface XRVRS extends Object {
    vrs_min_radius: type.float;
    vrs_strength: type.float;
}
export interface VisualShaderNodeParticleRandomness extends VisualShaderNode {
    op_type: type.int;
}
export declare namespace VisualShaderNodeParticleRandomness {
    const enum OpType {
        OP_TYPE_SCALAR = 0,
        OP_TYPE_VECTOR_2D = 1,
        OP_TYPE_VECTOR_3D = 2,
        OP_TYPE_VECTOR_4D = 3,
        OP_TYPE_MAX = 4
    }
}
export interface CompressedTexture2DArray extends CompressedTextureLayered {
}
export interface CanvasLayer extends Node {
    custom_viewport: {
        type: "Node";
        properties: Node;
    };
    follow_viewport_enabled: type.bool;
    follow_viewport_scale: type.float;
    layer: type.int;
    offset: type.Vector2;
    rotation: type.float;
    scale: type.Vector2;
    transform: type.Transform2D;
    visible: type.bool;
}
export interface ConvexPolygonShape3D extends Shape3D {
    points: type.PackedVector3Array;
}
export interface CanvasTexture extends Texture2D {
    diffuse_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    normal_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    resource_local_to_scene: type.bool;
    specular_color: type.Color;
    specular_shininess: type.float;
    specular_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    texture_filter: type.int;
    texture_repeat: type.int;
}
export interface EditorInspectorPlugin extends RefCounted {
}
export interface NavigationServer3D extends Object {
}
export declare namespace NavigationServer3D {
    const enum ProcessInfo {
        INFO_ACTIVE_MAPS = 0,
        INFO_REGION_COUNT = 1,
        INFO_AGENT_COUNT = 2,
        INFO_LINK_COUNT = 3,
        INFO_POLYGON_COUNT = 4,
        INFO_EDGE_COUNT = 5,
        INFO_EDGE_MERGE_COUNT = 6,
        INFO_EDGE_CONNECTION_COUNT = 7,
        INFO_EDGE_FREE_COUNT = 8,
        INFO_OBSTACLE_COUNT = 9
    }
}
export interface VisualShaderNodeVectorFunc extends VisualShaderNodeVectorBase {
    function: type.int;
}
export declare namespace VisualShaderNodeVectorFunc {
    const enum Function {
        FUNC_NORMALIZE = 0,
        FUNC_SATURATE = 1,
        FUNC_NEGATE = 2,
        FUNC_RECIPROCAL = 3,
        FUNC_ABS = 4,
        FUNC_ACOS = 5,
        FUNC_ACOSH = 6,
        FUNC_ASIN = 7,
        FUNC_ASINH = 8,
        FUNC_ATAN = 9,
        FUNC_ATANH = 10,
        FUNC_CEIL = 11,
        FUNC_COS = 12,
        FUNC_COSH = 13,
        FUNC_DEGREES = 14,
        FUNC_EXP = 15,
        FUNC_EXP2 = 16,
        FUNC_FLOOR = 17,
        FUNC_FRACT = 18,
        FUNC_INVERSE_SQRT = 19,
        FUNC_LOG = 20,
        FUNC_LOG2 = 21,
        FUNC_RADIANS = 22,
        FUNC_ROUND = 23,
        FUNC_ROUNDEVEN = 24,
        FUNC_SIGN = 25,
        FUNC_SIN = 26,
        FUNC_SINH = 27,
        FUNC_SQRT = 28,
        FUNC_TAN = 29,
        FUNC_TANH = 30,
        FUNC_TRUNC = 31,
        FUNC_ONEMINUS = 32,
        FUNC_MAX = 33
    }
}
export interface TileMapPattern extends Resource {
}
export interface Marker2D extends Node2D {
    gizmo_extents: type.float;
}
export interface NavigationLink2D extends Node2D {
    bidirectional: type.bool;
    enabled: type.bool;
    end_position: type.Vector2;
    enter_cost: type.float;
    navigation_layers: type.int;
    start_position: type.Vector2;
    travel_cost: type.float;
}
export interface Marshalls extends Object {
}
export interface VisualShaderNodeUIntOp extends VisualShaderNode {
    operator: type.int;
}
export declare namespace VisualShaderNodeUIntOp {
    const enum Operator {
        OP_ADD = 0,
        OP_SUB = 1,
        OP_MUL = 2,
        OP_DIV = 3,
        OP_MOD = 4,
        OP_MAX = 5,
        OP_MIN = 6,
        OP_BITWISE_AND = 7,
        OP_BITWISE_OR = 8,
        OP_BITWISE_XOR = 9,
        OP_BITWISE_LEFT_SHIFT = 10,
        OP_BITWISE_RIGHT_SHIFT = 11,
        OP_ENUM_SIZE = 12
    }
}
export interface VisualShaderNodeStep extends VisualShaderNode {
    op_type: type.int;
}
export declare namespace VisualShaderNodeStep {
    const enum OpType {
        OP_TYPE_SCALAR = 0,
        OP_TYPE_VECTOR_2D = 1,
        OP_TYPE_VECTOR_2D_SCALAR = 2,
        OP_TYPE_VECTOR_3D = 3,
        OP_TYPE_VECTOR_3D_SCALAR = 4,
        OP_TYPE_VECTOR_4D = 5,
        OP_TYPE_VECTOR_4D_SCALAR = 6,
        OP_TYPE_MAX = 7
    }
}
export interface Node2D extends CanvasItem {
    global_position: type.Vector2;
    global_rotation: type.float;
    global_rotation_degrees: type.float;
    global_scale: type.Vector2;
    global_skew: type.float;
    global_transform: type.Transform2D;
    position: type.Vector2;
    rotation: type.float;
    rotation_degrees: type.float;
    scale: type.Vector2;
    skew: type.float;
    transform: type.Transform2D;
}
export interface RandomNumberGenerator extends RefCounted {
    seed: type.int;
    state: type.int;
}
export interface LightmapGIData extends Resource {
    light_texture: {
        type: "TextureLayered";
        properties: TextureLayered;
    };
    lightmap_textures: {
        type: "TextureLayered[]";
        properties: TextureLayered[];
    };
}
export interface Container extends Control {
    mouse_filter: type.int;
}
export declare namespace Container {
    const NOTIFICATION_PRE_SORT_CHILDREN = 50;
    const NOTIFICATION_SORT_CHILDREN = 51;
}
export interface CallbackTweener extends Tweener {
}
export interface ImageTexture3D extends Texture3D {
}
export interface VisualShaderNodeRotationByAxis extends VisualShaderNode {
}
export interface ImageTexture extends Texture2D {
    resource_local_to_scene: type.bool;
}
export interface GridContainer extends Container {
    columns: type.int;
    h_separation: type.int;
    v_separation: type.int;
}
export interface World3D extends Resource {
    camera_attributes: {
        type: "CameraAttributes";
        properties: CameraAttributes;
    };
    direct_space_state: {
        type: "PhysicsDirectSpaceState3D";
        properties: PhysicsDirectSpaceState3D;
    };
    environment: {
        type: "Environment";
        properties: Environment;
    };
    fallback_environment: {
        type: "Environment";
        properties: Environment;
    };
    navigation_map: {
        type: "RID";
        properties: RID;
    };
    scenario: {
        type: "RID";
        properties: RID;
    };
    space: {
        type: "RID";
        properties: RID;
    };
}
export interface InputEventMouseButton extends InputEventMouse {
    button_index: type.int;
    canceled: type.bool;
    double_click: type.bool;
    factor: type.float;
    pressed: type.bool;
}
export interface ResourceUID extends Object {
}
export declare namespace ResourceUID {
    const INVALID_ID = -1;
}
export interface PanoramaSkyMaterial extends Material {
    energy_multiplier: type.float;
    filter: type.bool;
    panorama: {
        type: "Texture2D";
        properties: Texture2D;
    };
}
export interface PhysicsDirectSpaceState2D extends Object {
}
export interface CanvasItemMaterial extends Material {
    blend_mode: type.int;
    light_mode: type.int;
    particles_anim_h_frames: type.int;
    particles_anim_loop: type.bool;
    particles_anim_v_frames: type.int;
    particles_animation: type.bool;
}
export declare namespace CanvasItemMaterial {
    const enum BlendMode {
        BLEND_MODE_MIX = 0,
        BLEND_MODE_ADD = 1,
        BLEND_MODE_SUB = 2,
        BLEND_MODE_MUL = 3,
        BLEND_MODE_PREMULT_ALPHA = 4
    }
    const enum LightMode {
        LIGHT_MODE_NORMAL = 0,
        LIGHT_MODE_UNSHADED = 1,
        LIGHT_MODE_LIGHT_ONLY = 2
    }
}
export interface SeparationRayShape3D extends Shape3D {
    length: type.float;
    slide_on_slope: type.bool;
}
export interface VideoStream extends Resource {
    file: type.String;
}
export interface CollisionPolygon3D extends Node3D {
    depth: type.float;
    disabled: type.bool;
    margin: type.float;
    polygon: type.PackedVector2Array;
}
export interface InputEventPanGesture extends InputEventGesture {
    delta: type.Vector2;
}
export interface StreamPeerBuffer extends StreamPeer {
    data_array: type.PackedByteArray;
}
export interface StaticBody3D extends PhysicsBody3D {
    constant_angular_velocity: type.Vector3;
    constant_linear_velocity: type.Vector3;
    physics_material_override: {
        type: "PhysicsMaterial";
        properties: PhysicsMaterial;
    };
}
export interface EditorFileDialog extends ConfirmationDialog {
    access: type.int;
    current_dir: type.String;
    current_file: type.String;
    current_path: type.String;
    dialog_hide_on_ok: type.bool;
    disable_overwrite_warning: type.bool;
    display_mode: type.int;
    file_mode: type.int;
    filters: type.PackedStringArray;
    option_count: type.int;
    show_hidden_files: type.bool;
    title: type.String;
}
export declare namespace EditorFileDialog {
    const enum FileMode {
        FILE_MODE_OPEN_FILE = 0,
        FILE_MODE_OPEN_FILES = 1,
        FILE_MODE_OPEN_DIR = 2,
        FILE_MODE_OPEN_ANY = 3,
        FILE_MODE_SAVE_FILE = 4
    }
    const enum Access {
        ACCESS_RESOURCES = 0,
        ACCESS_USERDATA = 1,
        ACCESS_FILESYSTEM = 2
    }
    const enum DisplayMode {
        DISPLAY_THUMBNAILS = 0,
        DISPLAY_LIST = 1
    }
}
export interface VisualShaderNodeVec2Parameter extends VisualShaderNodeParameter {
    default_value: type.Vector2;
    default_value_enabled: type.bool;
}
export interface Texture2D extends Texture {
}
export interface Engine extends Object {
    max_fps: type.int;
    max_physics_steps_per_frame: type.int;
    physics_jitter_fix: type.float;
    physics_ticks_per_second: type.int;
    print_error_messages: type.bool;
    print_to_stdout: type.bool;
    time_scale: type.float;
}
export interface EditorNode3DGizmo extends Node3DGizmo {
}
export interface RenderSceneData extends Object {
}
export interface Camera3D extends Node3D {
    attributes: {
        type: "CameraAttributes";
        properties: CameraAttributes;
    };
    compositor: {
        type: "Compositor";
        properties: Compositor;
    };
    cull_mask: type.int;
    current: type.bool;
    doppler_tracking: type.int;
    environment: {
        type: "Environment";
        properties: Environment;
    };
    far: type.float;
    fov: type.float;
    frustum_offset: type.Vector2;
    h_offset: type.float;
    keep_aspect: type.int;
    near: type.float;
    projection: type.int;
    size: type.float;
    v_offset: type.float;
}
export declare namespace Camera3D {
    const enum ProjectionType {
        PROJECTION_PERSPECTIVE = 0,
        PROJECTION_ORTHOGONAL = 1,
        PROJECTION_FRUSTUM = 2
    }
    const enum KeepAspect {
        KEEP_WIDTH = 0,
        KEEP_HEIGHT = 1
    }
    const enum DopplerTracking {
        DOPPLER_TRACKING_DISABLED = 0,
        DOPPLER_TRACKING_IDLE_STEP = 1,
        DOPPLER_TRACKING_PHYSICS_STEP = 2
    }
}
export interface VisualShaderNodeUIntFunc extends VisualShaderNode {
    function: type.int;
}
export declare namespace VisualShaderNodeUIntFunc {
    const enum Function {
        FUNC_NEGATE = 0,
        FUNC_BITWISE_NOT = 1,
        FUNC_MAX = 2
    }
}
export interface RenderSceneBuffers extends RefCounted {
}
export interface JavaClass extends RefCounted {
}
export interface ConcavePolygonShape3D extends Shape3D {
    backface_collision: type.bool;
}
export interface Crypto extends RefCounted {
}
export interface WorldBoundaryShape3D extends Shape3D {
    plane: type.Plane;
}
export interface SkeletonModification2DLookAt extends SkeletonModification2D {
    bone2d_node: type.NodePath;
    bone_index: type.int;
    target_nodepath: type.NodePath;
}
export interface PhysicsTestMotionResult3D extends RefCounted {
}
export interface VisualShaderNodeParticleEmitter extends VisualShaderNode {
    mode_2d: type.bool;
}
export interface VFlowContainer extends FlowContainer {
}
export interface AnimatableBody3D extends StaticBody3D {
    sync_to_physics: type.bool;
}
export interface FogMaterial extends Material {
    albedo: type.Color;
    density: type.float;
    density_texture: {
        type: "Texture3D";
        properties: Texture3D;
    };
    edge_fade: type.float;
    emission: type.Color;
    height_falloff: type.float;
}
export interface TextLine extends RefCounted {
    alignment: type.int;
    direction: type.int;
    ellipsis_char: type.String;
    flags: type.int;
    orientation: type.int;
    preserve_control: type.bool;
    preserve_invalid: type.bool;
    text_overrun_behavior: type.int;
    width: type.float;
}
export interface MenuButton extends Button {
    action_mode: type.int;
    flat: type.bool;
    focus_mode: type.int;
    item_count: type.int;
    switch_on_hover: type.bool;
    toggle_mode: type.bool;
}
export interface RootMotionView extends VisualInstance3D {
    animation_path: type.NodePath;
    cell_size: type.float;
    color: type.Color;
    radius: type.float;
    zero_y: type.bool;
}
export interface PhysicsShapeQueryParameters3D extends RefCounted {
    collide_with_areas: type.bool;
    collide_with_bodies: type.bool;
    collision_mask: type.int;
    exclude: {
        type: "RID[]";
        properties: RID[];
    };
    margin: type.float;
    motion: type.Vector3;
    shape: {
        type: "Resource";
        properties: Resource;
    };
    shape_rid: {
        type: "RID";
        properties: RID;
    };
    transform: type.Transform3D;
}
export interface AudioStreamPlaybackPolyphonic extends AudioStreamPlayback {
}
export declare namespace AudioStreamPlaybackPolyphonic {
    const INVALID_ID = -1;
}
export interface VisualShaderNodeTexture3DParameter extends VisualShaderNodeTextureParameter {
}
export interface AudioEffectHighPassFilter extends AudioEffectFilter {
}
export interface Callable {
}
export interface VisualShaderNodeParticleEmit extends VisualShaderNode {
    flags: type.int;
}
export declare namespace VisualShaderNodeParticleEmit {
    const enum EmitFlags {
        EMIT_FLAG_POSITION = 1,
        EMIT_FLAG_ROT_SCALE = 2,
        EMIT_FLAG_VELOCITY = 4,
        EMIT_FLAG_COLOR = 8,
        EMIT_FLAG_CUSTOM = 16
    }
}
export interface StreamPeer extends RefCounted {
    big_endian: type.bool;
}
export interface ResourceImporterBitMap extends ResourceImporter {
    create_from: type.int;
    threshold: type.float;
}
export interface LinkButton extends BaseButton {
    focus_mode: type.int;
    language: type.String;
    mouse_default_cursor_shape: type.int;
    structured_text_bidi_override: type.int;
    structured_text_bidi_override_options: type.Array;
    text: type.String;
    text_direction: type.int;
    underline: type.int;
    uri: type.String;
    font_color: type.Color;
    font_disabled_color: type.Color;
    font_focus_color: type.Color;
    font_hover_color: type.Color;
    font_hover_pressed_color: type.Color;
    font_outline_color: type.Color;
    font_pressed_color: type.Color;
    outline_size: type.int;
    underline_spacing: type.int;
    font: {
        type: "Font";
        properties: Font;
    };
    font_size: type.int;
    focus: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export declare namespace LinkButton {
    const enum UnderlineMode {
        UNDERLINE_MODE_ALWAYS = 0,
        UNDERLINE_MODE_ON_HOVER = 1,
        UNDERLINE_MODE_NEVER = 2
    }
}
export interface ButtonGroup extends Resource {
    allow_unpress: type.bool;
    resource_local_to_scene: type.bool;
}
export interface PhysicsShapeQueryParameters2D extends RefCounted {
    collide_with_areas: type.bool;
    collide_with_bodies: type.bool;
    collision_mask: type.int;
    exclude: {
        type: "RID[]";
        properties: RID[];
    };
    margin: type.float;
    motion: type.Vector2;
    shape: {
        type: "Resource";
        properties: Resource;
    };
    shape_rid: {
        type: "RID";
        properties: RID;
    };
    transform: type.Transform2D;
}
export interface ThemeDB extends Object {
    fallback_base_scale: type.float;
    fallback_font: {
        type: "Font";
        properties: Font;
    };
    fallback_font_size: type.int;
    fallback_icon: {
        type: "Texture2D";
        properties: Texture2D;
    };
    fallback_stylebox: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export interface StreamPeerTCP extends StreamPeer {
}
export declare namespace StreamPeerTCP {
    const enum Status {
        STATUS_NONE = 0,
        STATUS_CONNECTING = 1,
        STATUS_CONNECTED = 2,
        STATUS_ERROR = 3
    }
}
export interface XRFaceTracker extends XRTracker {
    blend_shapes: type.PackedFloat32Array;
    type: type.int;
}
export declare namespace XRFaceTracker {
    const enum BlendShapeEntry {
        FT_EYE_LOOK_OUT_RIGHT = 0,
        FT_EYE_LOOK_IN_RIGHT = 1,
        FT_EYE_LOOK_UP_RIGHT = 2,
        FT_EYE_LOOK_DOWN_RIGHT = 3,
        FT_EYE_LOOK_OUT_LEFT = 4,
        FT_EYE_LOOK_IN_LEFT = 5,
        FT_EYE_LOOK_UP_LEFT = 6,
        FT_EYE_LOOK_DOWN_LEFT = 7,
        FT_EYE_CLOSED_RIGHT = 8,
        FT_EYE_CLOSED_LEFT = 9,
        FT_EYE_SQUINT_RIGHT = 10,
        FT_EYE_SQUINT_LEFT = 11,
        FT_EYE_WIDE_RIGHT = 12,
        FT_EYE_WIDE_LEFT = 13,
        FT_EYE_DILATION_RIGHT = 14,
        FT_EYE_DILATION_LEFT = 15,
        FT_EYE_CONSTRICT_RIGHT = 16,
        FT_EYE_CONSTRICT_LEFT = 17,
        FT_BROW_PINCH_RIGHT = 18,
        FT_BROW_PINCH_LEFT = 19,
        FT_BROW_LOWERER_RIGHT = 20,
        FT_BROW_LOWERER_LEFT = 21,
        FT_BROW_INNER_UP_RIGHT = 22,
        FT_BROW_INNER_UP_LEFT = 23,
        FT_BROW_OUTER_UP_RIGHT = 24,
        FT_BROW_OUTER_UP_LEFT = 25,
        FT_NOSE_SNEER_RIGHT = 26,
        FT_NOSE_SNEER_LEFT = 27,
        FT_NASAL_DILATION_RIGHT = 28,
        FT_NASAL_DILATION_LEFT = 29,
        FT_NASAL_CONSTRICT_RIGHT = 30,
        FT_NASAL_CONSTRICT_LEFT = 31,
        FT_CHEEK_SQUINT_RIGHT = 32,
        FT_CHEEK_SQUINT_LEFT = 33,
        FT_CHEEK_PUFF_RIGHT = 34,
        FT_CHEEK_PUFF_LEFT = 35,
        FT_CHEEK_SUCK_RIGHT = 36,
        FT_CHEEK_SUCK_LEFT = 37,
        FT_JAW_OPEN = 38,
        FT_MOUTH_CLOSED = 39,
        FT_JAW_RIGHT = 40,
        FT_JAW_LEFT = 41,
        FT_JAW_FORWARD = 42,
        FT_JAW_BACKWARD = 43,
        FT_JAW_CLENCH = 44,
        FT_JAW_MANDIBLE_RAISE = 45,
        FT_LIP_SUCK_UPPER_RIGHT = 46,
        FT_LIP_SUCK_UPPER_LEFT = 47,
        FT_LIP_SUCK_LOWER_RIGHT = 48,
        FT_LIP_SUCK_LOWER_LEFT = 49,
        FT_LIP_SUCK_CORNER_RIGHT = 50,
        FT_LIP_SUCK_CORNER_LEFT = 51,
        FT_LIP_FUNNEL_UPPER_RIGHT = 52,
        FT_LIP_FUNNEL_UPPER_LEFT = 53,
        FT_LIP_FUNNEL_LOWER_RIGHT = 54,
        FT_LIP_FUNNEL_LOWER_LEFT = 55,
        FT_LIP_PUCKER_UPPER_RIGHT = 56,
        FT_LIP_PUCKER_UPPER_LEFT = 57,
        FT_LIP_PUCKER_LOWER_RIGHT = 58,
        FT_LIP_PUCKER_LOWER_LEFT = 59,
        FT_MOUTH_UPPER_UP_RIGHT = 60,
        FT_MOUTH_UPPER_UP_LEFT = 61,
        FT_MOUTH_LOWER_DOWN_RIGHT = 62,
        FT_MOUTH_LOWER_DOWN_LEFT = 63,
        FT_MOUTH_UPPER_DEEPEN_RIGHT = 64,
        FT_MOUTH_UPPER_DEEPEN_LEFT = 65,
        FT_MOUTH_UPPER_RIGHT = 66,
        FT_MOUTH_UPPER_LEFT = 67,
        FT_MOUTH_LOWER_RIGHT = 68,
        FT_MOUTH_LOWER_LEFT = 69,
        FT_MOUTH_CORNER_PULL_RIGHT = 70,
        FT_MOUTH_CORNER_PULL_LEFT = 71,
        FT_MOUTH_CORNER_SLANT_RIGHT = 72,
        FT_MOUTH_CORNER_SLANT_LEFT = 73,
        FT_MOUTH_FROWN_RIGHT = 74,
        FT_MOUTH_FROWN_LEFT = 75,
        FT_MOUTH_STRETCH_RIGHT = 76,
        FT_MOUTH_STRETCH_LEFT = 77,
        FT_MOUTH_DIMPLE_RIGHT = 78,
        FT_MOUTH_DIMPLE_LEFT = 79,
        FT_MOUTH_RAISER_UPPER = 80,
        FT_MOUTH_RAISER_LOWER = 81,
        FT_MOUTH_PRESS_RIGHT = 82,
        FT_MOUTH_PRESS_LEFT = 83,
        FT_MOUTH_TIGHTENER_RIGHT = 84,
        FT_MOUTH_TIGHTENER_LEFT = 85,
        FT_TONGUE_OUT = 86,
        FT_TONGUE_UP = 87,
        FT_TONGUE_DOWN = 88,
        FT_TONGUE_RIGHT = 89,
        FT_TONGUE_LEFT = 90,
        FT_TONGUE_ROLL = 91,
        FT_TONGUE_BLEND_DOWN = 92,
        FT_TONGUE_CURL_UP = 93,
        FT_TONGUE_SQUISH = 94,
        FT_TONGUE_FLAT = 95,
        FT_TONGUE_TWIST_RIGHT = 96,
        FT_TONGUE_TWIST_LEFT = 97,
        FT_SOFT_PALATE_CLOSE = 98,
        FT_THROAT_SWALLOW = 99,
        FT_NECK_FLEX_RIGHT = 100,
        FT_NECK_FLEX_LEFT = 101,
        FT_EYE_CLOSED = 102,
        FT_EYE_WIDE = 103,
        FT_EYE_SQUINT = 104,
        FT_EYE_DILATION = 105,
        FT_EYE_CONSTRICT = 106,
        FT_BROW_DOWN_RIGHT = 107,
        FT_BROW_DOWN_LEFT = 108,
        FT_BROW_DOWN = 109,
        FT_BROW_UP_RIGHT = 110,
        FT_BROW_UP_LEFT = 111,
        FT_BROW_UP = 112,
        FT_NOSE_SNEER = 113,
        FT_NASAL_DILATION = 114,
        FT_NASAL_CONSTRICT = 115,
        FT_CHEEK_PUFF = 116,
        FT_CHEEK_SUCK = 117,
        FT_CHEEK_SQUINT = 118,
        FT_LIP_SUCK_UPPER = 119,
        FT_LIP_SUCK_LOWER = 120,
        FT_LIP_SUCK = 121,
        FT_LIP_FUNNEL_UPPER = 122,
        FT_LIP_FUNNEL_LOWER = 123,
        FT_LIP_FUNNEL = 124,
        FT_LIP_PUCKER_UPPER = 125,
        FT_LIP_PUCKER_LOWER = 126,
        FT_LIP_PUCKER = 127,
        FT_MOUTH_UPPER_UP = 128,
        FT_MOUTH_LOWER_DOWN = 129,
        FT_MOUTH_OPEN = 130,
        FT_MOUTH_RIGHT = 131,
        FT_MOUTH_LEFT = 132,
        FT_MOUTH_SMILE_RIGHT = 133,
        FT_MOUTH_SMILE_LEFT = 134,
        FT_MOUTH_SMILE = 135,
        FT_MOUTH_SAD_RIGHT = 136,
        FT_MOUTH_SAD_LEFT = 137,
        FT_MOUTH_SAD = 138,
        FT_MOUTH_STRETCH = 139,
        FT_MOUTH_DIMPLE = 140,
        FT_MOUTH_TIGHTENER = 141,
        FT_MOUTH_PRESS = 142,
        FT_MAX = 143
    }
}
export interface AnimatableBody2D extends StaticBody2D {
    sync_to_physics: type.bool;
}
export interface MultiMesh extends Resource {
    buffer: type.PackedFloat32Array;
    color_array: type.PackedColorArray;
    custom_aabb: type.AABB;
    custom_data_array: type.PackedColorArray;
    instance_count: type.int;
    mesh: {
        type: "Mesh";
        properties: Mesh;
    };
    physics_interpolation_quality: type.int;
    transform_2d_array: type.PackedVector2Array;
    transform_array: type.PackedVector3Array;
    transform_format: type.int;
    use_colors: type.bool;
    use_custom_data: type.bool;
    visible_instance_count: type.int;
}
export declare namespace MultiMesh {
    const enum TransformFormat {
        TRANSFORM_2D = 0,
        TRANSFORM_3D = 1
    }
    const enum PhysicsInterpolationQuality {
        INTERP_QUALITY_FAST = 0,
        INTERP_QUALITY_HIGH = 1
    }
}
export interface VisualInstance3D extends Node3D {
    layers: type.int;
    sorting_offset: type.float;
    sorting_use_aabb_center: type.bool;
}
export interface WorldBoundaryShape2D extends Shape2D {
    distance: type.float;
    normal: type.Vector2;
}
export interface FramebufferCacheRD extends Object {
}
export interface PhysicsTestMotionResult2D extends RefCounted {
}
export interface LabelSettings extends Resource {
    font: {
        type: "Font";
        properties: Font;
    };
    font_color: type.Color;
    font_size: type.int;
    line_spacing: type.float;
    outline_color: type.Color;
    outline_size: type.int;
    shadow_color: type.Color;
    shadow_offset: type.Vector2;
    shadow_size: type.int;
}
export interface ConcavePolygonShape2D extends Shape2D {
    segments: type.PackedVector2Array;
}
export interface Camera2D extends Node2D {
    anchor_mode: type.int;
    custom_viewport: {
        type: "Node";
        properties: Node;
    };
    drag_bottom_margin: type.float;
    drag_horizontal_enabled: type.bool;
    drag_horizontal_offset: type.float;
    drag_left_margin: type.float;
    drag_right_margin: type.float;
    drag_top_margin: type.float;
    drag_vertical_enabled: type.bool;
    drag_vertical_offset: type.float;
    editor_draw_drag_margin: type.bool;
    editor_draw_limits: type.bool;
    editor_draw_screen: type.bool;
    enabled: type.bool;
    ignore_rotation: type.bool;
    limit_bottom: type.int;
    limit_left: type.int;
    limit_right: type.int;
    limit_smoothed: type.bool;
    limit_top: type.int;
    offset: type.Vector2;
    position_smoothing_enabled: type.bool;
    position_smoothing_speed: type.float;
    process_callback: type.int;
    rotation_smoothing_enabled: type.bool;
    rotation_smoothing_speed: type.float;
    zoom: type.Vector2;
}
export declare namespace Camera2D {
    const enum AnchorMode {
        ANCHOR_MODE_FIXED_TOP_LEFT = 0,
        ANCHOR_MODE_DRAG_CENTER = 1
    }
    const enum Camera2DProcessCallback {
        CAMERA2D_PROCESS_PHYSICS = 0,
        CAMERA2D_PROCESS_IDLE = 1
    }
}
export interface PacketPeerUDP extends PacketPeer {
}
export interface LightmapGI extends VisualInstance3D {
    bias: type.float;
    bounce_indirect_energy: type.float;
    bounces: type.int;
    camera_attributes: {
        type: "CameraAttributes";
        properties: CameraAttributes;
    };
    denoiser_range: type.int;
    denoiser_strength: type.float;
    directional: type.bool;
    environment_custom_color: type.Color;
    environment_custom_energy: type.float;
    environment_custom_sky: {
        type: "Sky";
        properties: Sky;
    };
    environment_mode: type.int;
    generate_probes_subdiv: type.int;
    interior: type.bool;
    light_data: {
        type: "LightmapGIData";
        properties: LightmapGIData;
    };
    max_texture_size: type.int;
    quality: type.int;
    texel_scale: type.float;
    use_denoiser: type.bool;
    use_texture_for_bounces: type.bool;
}
export declare namespace LightmapGI {
    const enum BakeQuality {
        BAKE_QUALITY_LOW = 0,
        BAKE_QUALITY_MEDIUM = 1,
        BAKE_QUALITY_HIGH = 2,
        BAKE_QUALITY_ULTRA = 3
    }
    const enum GenerateProbes {
        GENERATE_PROBES_DISABLED = 0,
        GENERATE_PROBES_SUBDIV_4 = 1,
        GENERATE_PROBES_SUBDIV_8 = 2,
        GENERATE_PROBES_SUBDIV_16 = 3,
        GENERATE_PROBES_SUBDIV_32 = 4
    }
    const enum BakeError {
        BAKE_ERROR_OK = 0,
        BAKE_ERROR_NO_SCENE_ROOT = 1,
        BAKE_ERROR_FOREIGN_DATA = 2,
        BAKE_ERROR_NO_LIGHTMAPPER = 3,
        BAKE_ERROR_NO_SAVE_PATH = 4,
        BAKE_ERROR_NO_MESHES = 5,
        BAKE_ERROR_MESHES_INVALID = 6,
        BAKE_ERROR_CANT_CREATE_IMAGE = 7,
        BAKE_ERROR_USER_ABORTED = 8,
        BAKE_ERROR_TEXTURE_SIZE_TOO_SMALL = 9,
        BAKE_ERROR_LIGHTMAP_TOO_SMALL = 10,
        BAKE_ERROR_ATLAS_TOO_SMALL = 11
    }
    const enum EnvironmentMode {
        ENVIRONMENT_MODE_DISABLED = 0,
        ENVIRONMENT_MODE_SCENE = 1,
        ENVIRONMENT_MODE_CUSTOM_SKY = 2,
        ENVIRONMENT_MODE_CUSTOM_COLOR = 3
    }
}
export interface AStarGrid2D extends RefCounted {
    cell_shape: type.int;
    cell_size: type.Vector2;
    default_compute_heuristic: type.int;
    default_estimate_heuristic: type.int;
    diagonal_mode: type.int;
    jumping_enabled: type.bool;
    offset: type.Vector2;
    region: type.Rect2i;
    size: type.Vector2i;
}
export declare namespace AStarGrid2D {
    const enum Heuristic {
        HEURISTIC_EUCLIDEAN = 0,
        HEURISTIC_MANHATTAN = 1,
        HEURISTIC_OCTILE = 2,
        HEURISTIC_CHEBYSHEV = 3,
        HEURISTIC_MAX = 4
    }
    const enum DiagonalMode {
        DIAGONAL_MODE_ALWAYS = 0,
        DIAGONAL_MODE_NEVER = 1,
        DIAGONAL_MODE_AT_LEAST_ONE_WALKABLE = 2,
        DIAGONAL_MODE_ONLY_IF_NO_OBSTACLES = 3,
        DIAGONAL_MODE_MAX = 4
    }
    const enum CellShape {
        CELL_SHAPE_SQUARE = 0,
        CELL_SHAPE_ISOMETRIC_RIGHT = 1,
        CELL_SHAPE_ISOMETRIC_DOWN = 2,
        CELL_SHAPE_MAX = 3
    }
}
export interface Texture3D extends Texture {
}
export interface Time extends Object {
}
export declare namespace Time {
    const enum Month {
        MONTH_JANUARY = 1,
        MONTH_FEBRUARY = 2,
        MONTH_MARCH = 3,
        MONTH_APRIL = 4,
        MONTH_MAY = 5,
        MONTH_JUNE = 6,
        MONTH_JULY = 7,
        MONTH_AUGUST = 8,
        MONTH_SEPTEMBER = 9,
        MONTH_OCTOBER = 10,
        MONTH_NOVEMBER = 11,
        MONTH_DECEMBER = 12
    }
    const enum Weekday {
        WEEKDAY_SUNDAY = 0,
        WEEKDAY_MONDAY = 1,
        WEEKDAY_TUESDAY = 2,
        WEEKDAY_WEDNESDAY = 3,
        WEEKDAY_THURSDAY = 4,
        WEEKDAY_FRIDAY = 5,
        WEEKDAY_SATURDAY = 6
    }
}
export interface VisualShaderNodeTransformVecMult extends VisualShaderNode {
    operator: type.int;
}
export declare namespace VisualShaderNodeTransformVecMult {
    const enum Operator {
        OP_AxB = 0,
        OP_BxA = 1,
        OP_3x3_AxB = 2,
        OP_3x3_BxA = 3,
        OP_MAX = 4
    }
}
export interface VehicleBody3D extends RigidBody3D {
    brake: type.float;
    engine_force: type.float;
    mass: type.float;
    steering: type.float;
}
export interface AudioStreamRandomizer extends AudioStream {
    playback_mode: type.int;
    random_pitch: type.float;
    random_volume_offset_db: type.float;
    streams_count: type.int;
}
export declare namespace AudioStreamRandomizer {
    const enum PlaybackMode {
        PLAYBACK_RANDOM_NO_REPEATS = 0,
        PLAYBACK_RANDOM = 1,
        PLAYBACK_SEQUENTIAL = 2
    }
}
export interface PhysicsDirectSpaceState3DExtension extends PhysicsDirectSpaceState3D {
}
export interface VisualShaderNodeOutput extends VisualShaderNode {
}
export interface VisualShaderNodeParameterRef extends VisualShaderNode {
    parameter_name: type.String;
}
export interface AudioEffectStereoEnhance extends AudioEffect {
    pan_pullout: type.float;
    surround: type.float;
    time_pullout_ms: type.float;
}
export interface ResourceImporterImageFont extends ResourceImporter {
    ascent: type.int;
    character_margin: type.Rect2i;
    character_ranges: type.PackedStringArray;
    columns: type.int;
    compress: type.bool;
    descent: type.int;
    fallbacks: type.Array;
    image_margin: type.Rect2i;
    kerning_pairs: type.PackedStringArray;
    rows: type.int;
    scaling_mode: type.int;
}
export interface PhysicsMaterial extends Resource {
    absorbent: type.bool;
    bounce: type.float;
    friction: type.float;
    rough: type.bool;
}
export interface Bone2D extends Node2D {
    rest: type.Transform2D;
}
export interface StaticBody2D extends PhysicsBody2D {
    constant_angular_velocity: type.float;
    constant_linear_velocity: type.Vector2;
    physics_material_override: {
        type: "PhysicsMaterial";
        properties: PhysicsMaterial;
    };
}
export interface TLSOptions extends RefCounted {
}
export interface AudioEffectPhaser extends AudioEffect {
    depth: type.float;
    feedback: type.float;
    range_max_hz: type.float;
    range_min_hz: type.float;
    rate_hz: type.float;
}
export interface VisualShaderNodeReroute extends VisualShaderNode {
}
export interface VisualShaderNodeSwitch extends VisualShaderNode {
    op_type: type.int;
}
export declare namespace VisualShaderNodeSwitch {
    const enum OpType {
        OP_TYPE_FLOAT = 0,
        OP_TYPE_INT = 1,
        OP_TYPE_UINT = 2,
        OP_TYPE_VECTOR_2D = 3,
        OP_TYPE_VECTOR_3D = 4,
        OP_TYPE_VECTOR_4D = 5,
        OP_TYPE_BOOLEAN = 6,
        OP_TYPE_TRANSFORM = 7,
        OP_TYPE_MAX = 8
    }
}
export interface NativeMenu extends Object {
}
export declare namespace NativeMenu {
    const enum Feature {
        FEATURE_GLOBAL_MENU = 0,
        FEATURE_POPUP_MENU = 1,
        FEATURE_OPEN_CLOSE_CALLBACK = 2,
        FEATURE_HOVER_CALLBACK = 3,
        FEATURE_KEY_CALLBACK = 4
    }
    const enum SystemMenus {
        INVALID_MENU_ID = 0,
        MAIN_MENU_ID = 1,
        APPLICATION_MENU_ID = 2,
        WINDOW_MENU_ID = 3,
        HELP_MENU_ID = 4,
        DOCK_MENU_ID = 5
    }
}
export interface SeparationRayShape2D extends Shape2D {
    length: type.float;
    slide_on_slope: type.bool;
}
export interface XRBodyTracker extends XRPositionalTracker {
    body_flags: type.int;
    has_tracking_data: type.bool;
    type: type.int;
}
export declare namespace XRBodyTracker {
    const enum BodyFlags {
        BODY_FLAG_UPPER_BODY_SUPPORTED = 1,
        BODY_FLAG_LOWER_BODY_SUPPORTED = 2,
        BODY_FLAG_HANDS_SUPPORTED = 4
    }
    const enum Joint {
        JOINT_ROOT = 0,
        JOINT_HIPS = 1,
        JOINT_SPINE = 2,
        JOINT_CHEST = 3,
        JOINT_UPPER_CHEST = 4,
        JOINT_NECK = 5,
        JOINT_HEAD = 6,
        JOINT_HEAD_TIP = 7,
        JOINT_LEFT_SHOULDER = 8,
        JOINT_LEFT_UPPER_ARM = 9,
        JOINT_LEFT_LOWER_ARM = 10,
        JOINT_RIGHT_SHOULDER = 11,
        JOINT_RIGHT_UPPER_ARM = 12,
        JOINT_RIGHT_LOWER_ARM = 13,
        JOINT_LEFT_UPPER_LEG = 14,
        JOINT_LEFT_LOWER_LEG = 15,
        JOINT_LEFT_FOOT = 16,
        JOINT_LEFT_TOES = 17,
        JOINT_RIGHT_UPPER_LEG = 18,
        JOINT_RIGHT_LOWER_LEG = 19,
        JOINT_RIGHT_FOOT = 20,
        JOINT_RIGHT_TOES = 21,
        JOINT_LEFT_HAND = 22,
        JOINT_LEFT_PALM = 23,
        JOINT_LEFT_WRIST = 24,
        JOINT_LEFT_THUMB_METACARPAL = 25,
        JOINT_LEFT_THUMB_PHALANX_PROXIMAL = 26,
        JOINT_LEFT_THUMB_PHALANX_DISTAL = 27,
        JOINT_LEFT_THUMB_TIP = 28,
        JOINT_LEFT_INDEX_FINGER_METACARPAL = 29,
        JOINT_LEFT_INDEX_FINGER_PHALANX_PROXIMAL = 30,
        JOINT_LEFT_INDEX_FINGER_PHALANX_INTERMEDIATE = 31,
        JOINT_LEFT_INDEX_FINGER_PHALANX_DISTAL = 32,
        JOINT_LEFT_INDEX_FINGER_TIP = 33,
        JOINT_LEFT_MIDDLE_FINGER_METACARPAL = 34,
        JOINT_LEFT_MIDDLE_FINGER_PHALANX_PROXIMAL = 35,
        JOINT_LEFT_MIDDLE_FINGER_PHALANX_INTERMEDIATE = 36,
        JOINT_LEFT_MIDDLE_FINGER_PHALANX_DISTAL = 37,
        JOINT_LEFT_MIDDLE_FINGER_TIP = 38,
        JOINT_LEFT_RING_FINGER_METACARPAL = 39,
        JOINT_LEFT_RING_FINGER_PHALANX_PROXIMAL = 40,
        JOINT_LEFT_RING_FINGER_PHALANX_INTERMEDIATE = 41,
        JOINT_LEFT_RING_FINGER_PHALANX_DISTAL = 42,
        JOINT_LEFT_RING_FINGER_TIP = 43,
        JOINT_LEFT_PINKY_FINGER_METACARPAL = 44,
        JOINT_LEFT_PINKY_FINGER_PHALANX_PROXIMAL = 45,
        JOINT_LEFT_PINKY_FINGER_PHALANX_INTERMEDIATE = 46,
        JOINT_LEFT_PINKY_FINGER_PHALANX_DISTAL = 47,
        JOINT_LEFT_PINKY_FINGER_TIP = 48,
        JOINT_RIGHT_HAND = 49,
        JOINT_RIGHT_PALM = 50,
        JOINT_RIGHT_WRIST = 51,
        JOINT_RIGHT_THUMB_METACARPAL = 52,
        JOINT_RIGHT_THUMB_PHALANX_PROXIMAL = 53,
        JOINT_RIGHT_THUMB_PHALANX_DISTAL = 54,
        JOINT_RIGHT_THUMB_TIP = 55,
        JOINT_RIGHT_INDEX_FINGER_METACARPAL = 56,
        JOINT_RIGHT_INDEX_FINGER_PHALANX_PROXIMAL = 57,
        JOINT_RIGHT_INDEX_FINGER_PHALANX_INTERMEDIATE = 58,
        JOINT_RIGHT_INDEX_FINGER_PHALANX_DISTAL = 59,
        JOINT_RIGHT_INDEX_FINGER_TIP = 60,
        JOINT_RIGHT_MIDDLE_FINGER_METACARPAL = 61,
        JOINT_RIGHT_MIDDLE_FINGER_PHALANX_PROXIMAL = 62,
        JOINT_RIGHT_MIDDLE_FINGER_PHALANX_INTERMEDIATE = 63,
        JOINT_RIGHT_MIDDLE_FINGER_PHALANX_DISTAL = 64,
        JOINT_RIGHT_MIDDLE_FINGER_TIP = 65,
        JOINT_RIGHT_RING_FINGER_METACARPAL = 66,
        JOINT_RIGHT_RING_FINGER_PHALANX_PROXIMAL = 67,
        JOINT_RIGHT_RING_FINGER_PHALANX_INTERMEDIATE = 68,
        JOINT_RIGHT_RING_FINGER_PHALANX_DISTAL = 69,
        JOINT_RIGHT_RING_FINGER_TIP = 70,
        JOINT_RIGHT_PINKY_FINGER_METACARPAL = 71,
        JOINT_RIGHT_PINKY_FINGER_PHALANX_PROXIMAL = 72,
        JOINT_RIGHT_PINKY_FINGER_PHALANX_INTERMEDIATE = 73,
        JOINT_RIGHT_PINKY_FINGER_PHALANX_DISTAL = 74,
        JOINT_RIGHT_PINKY_FINGER_TIP = 75,
        JOINT_MAX = 76
    }
    const enum JointFlags {
        JOINT_FLAG_ORIENTATION_VALID = 1,
        JOINT_FLAG_ORIENTATION_TRACKED = 2,
        JOINT_FLAG_POSITION_VALID = 4,
        JOINT_FLAG_POSITION_TRACKED = 8
    }
}
export interface CollisionPolygon2D extends Node2D {
    build_mode: type.int;
    disabled: type.bool;
    one_way_collision: type.bool;
    one_way_collision_margin: type.float;
    polygon: type.PackedVector2Array;
}
export declare namespace CollisionPolygon2D {
    const enum BuildMode {
        BUILD_SOLIDS = 0,
        BUILD_SEGMENTS = 1
    }
}
export interface AudioEffectLimiter extends AudioEffect {
    ceiling_db: type.float;
    soft_clip_db: type.float;
    soft_clip_ratio: type.float;
    threshold_db: type.float;
}
export interface Polygon2D extends Node2D {
    antialiased: type.bool;
    color: type.Color;
    internal_vertex_count: type.int;
    invert_border: type.float;
    invert_enabled: type.bool;
    offset: type.Vector2;
    polygon: type.PackedVector2Array;
    polygons: type.Array;
    skeleton: type.NodePath;
    texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    texture_offset: type.Vector2;
    texture_rotation: type.float;
    texture_scale: type.Vector2;
    uv: type.PackedVector2Array;
    vertex_colors: type.PackedColorArray;
}
export interface PhysicsDirectSpaceState3D extends Object {
}
export interface Dictionary {
}
export interface World2D extends Resource {
    canvas: {
        type: "RID";
        properties: RID;
    };
    direct_space_state: {
        type: "PhysicsDirectSpaceState2D";
        properties: PhysicsDirectSpaceState2D;
    };
    navigation_map: {
        type: "RID";
        properties: RID;
    };
    space: {
        type: "RID";
        properties: RID;
    };
}
export interface InputEventGesture extends InputEventWithModifiers {
    position: type.Vector2;
}
export interface VBoxContainer extends BoxContainer {
}
export interface AudioStreamGeneratorPlayback extends AudioStreamPlaybackResampled {
}
export interface HTTPRequest extends Node {
    accept_gzip: type.bool;
    body_size_limit: type.int;
    download_chunk_size: type.int;
    download_file: type.String;
    max_redirects: type.int;
    timeout: type.float;
    use_threads: type.bool;
}
export declare namespace HTTPRequest {
    const enum Result {
        RESULT_SUCCESS = 0,
        RESULT_CHUNKED_BODY_SIZE_MISMATCH = 1,
        RESULT_CANT_CONNECT = 2,
        RESULT_CANT_RESOLVE = 3,
        RESULT_CONNECTION_ERROR = 4,
        RESULT_TLS_HANDSHAKE_ERROR = 5,
        RESULT_NO_RESPONSE = 6,
        RESULT_BODY_SIZE_LIMIT_EXCEEDED = 7,
        RESULT_BODY_DECOMPRESS_FAILED = 8,
        RESULT_REQUEST_FAILED = 9,
        RESULT_DOWNLOAD_FILE_CANT_OPEN = 10,
        RESULT_DOWNLOAD_FILE_WRITE_ERROR = 11,
        RESULT_REDIRECT_LIMIT_REACHED = 12,
        RESULT_TIMEOUT = 13
    }
}
export interface VisualShaderNodeVec3Constant extends VisualShaderNodeConstant {
    constant: type.Vector3;
}
export interface VisualShaderNodeTexture2DArray extends VisualShaderNodeSample3D {
    texture_array: {
        type: "TextureLayered";
        properties: TextureLayered;
    };
}
export interface MissingNode extends Node {
    original_class: type.String;
    original_scene: type.String;
    recording_properties: type.bool;
}
export interface EditorScript extends RefCounted {
}
export interface AnimationNodeBlendSpace2D extends AnimationRootNode {
    auto_triangles: type.bool;
    blend_mode: type.int;
    max_space: type.Vector2;
    min_space: type.Vector2;
    snap: type.Vector2;
    sync: type.bool;
    x_label: type.String;
    y_label: type.String;
}
export declare namespace AnimationNodeBlendSpace2D {
    const enum BlendMode {
        BLEND_MODE_INTERPOLATED = 0,
        BLEND_MODE_DISCRETE = 1,
        BLEND_MODE_DISCRETE_CARRY = 2
    }
}
export interface AnimationNodeOutput extends AnimationNode {
}
export interface GeometryInstance3D extends VisualInstance3D {
    cast_shadow: type.int;
    custom_aabb: type.AABB;
    extra_cull_margin: type.float;
    gi_lightmap_scale: type.int;
    gi_mode: type.int;
    ignore_occlusion_culling: type.bool;
    lod_bias: type.float;
    material_overlay: {
        type: "Material";
        properties: Material;
    };
    material_override: {
        type: "Material";
        properties: Material;
    };
    transparency: type.float;
    visibility_range_begin: type.float;
    visibility_range_begin_margin: type.float;
    visibility_range_end: type.float;
    visibility_range_end_margin: type.float;
    visibility_range_fade_mode: type.int;
}
export declare namespace GeometryInstance3D {
    const enum ShadowCastingSetting {
        SHADOW_CASTING_SETTING_OFF = 0,
        SHADOW_CASTING_SETTING_ON = 1,
        SHADOW_CASTING_SETTING_DOUBLE_SIDED = 2,
        SHADOW_CASTING_SETTING_SHADOWS_ONLY = 3
    }
    const enum GIMode {
        GI_MODE_DISABLED = 0,
        GI_MODE_STATIC = 1,
        GI_MODE_DYNAMIC = 2
    }
    const enum LightmapScale {
        LIGHTMAP_SCALE_1X = 0,
        LIGHTMAP_SCALE_2X = 1,
        LIGHTMAP_SCALE_4X = 2,
        LIGHTMAP_SCALE_8X = 3,
        LIGHTMAP_SCALE_MAX = 4
    }
    const enum VisibilityRangeFadeMode {
        VISIBILITY_RANGE_FADE_DISABLED = 0,
        VISIBILITY_RANGE_FADE_SELF = 1,
        VISIBILITY_RANGE_FADE_DEPENDENCIES = 2
    }
}
export interface Node3D extends Node {
    basis: type.Basis;
    global_basis: type.Basis;
    global_position: type.Vector3;
    global_rotation: type.Vector3;
    global_rotation_degrees: type.Vector3;
    global_transform: type.Transform3D;
    position: type.Vector3;
    quaternion: type.Quaternion;
    rotation: type.Vector3;
    rotation_degrees: type.Vector3;
    rotation_edit_mode: type.int;
    rotation_order: type.int;
    scale: type.Vector3;
    top_level: type.bool;
    transform: type.Transform3D;
    visibility_parent: type.NodePath;
    visible: type.bool;
}
export declare namespace Node3D {
    const NOTIFICATION_TRANSFORM_CHANGED = 2000;
    const NOTIFICATION_ENTER_WORLD = 41;
    const NOTIFICATION_EXIT_WORLD = 42;
    const NOTIFICATION_VISIBILITY_CHANGED = 43;
    const NOTIFICATION_LOCAL_TRANSFORM_CHANGED = 44;
    const enum RotationEditMode {
        ROTATION_EDIT_MODE_EULER = 0,
        ROTATION_EDIT_MODE_QUATERNION = 1,
        ROTATION_EDIT_MODE_BASIS = 2
    }
}
export interface VisualShader extends Shader {
    graph_offset: type.Vector2;
}
export declare namespace VisualShader {
    const enum Type {
        TYPE_VERTEX = 0,
        TYPE_FRAGMENT = 1,
        TYPE_LIGHT = 2,
        TYPE_START = 3,
        TYPE_PROCESS = 4,
        TYPE_COLLIDE = 5,
        TYPE_START_CUSTOM = 6,
        TYPE_PROCESS_CUSTOM = 7,
        TYPE_SKY = 8,
        TYPE_FOG = 9,
        TYPE_MAX = 10
    }
    const enum VaryingMode {
        VARYING_MODE_VERTEX_TO_FRAG_LIGHT = 0,
        VARYING_MODE_FRAG_TO_LIGHT = 1,
        VARYING_MODE_MAX = 2
    }
    const enum VaryingType {
        VARYING_TYPE_FLOAT = 0,
        VARYING_TYPE_INT = 1,
        VARYING_TYPE_UINT = 2,
        VARYING_TYPE_VECTOR_2D = 3,
        VARYING_TYPE_VECTOR_3D = 4,
        VARYING_TYPE_VECTOR_4D = 5,
        VARYING_TYPE_BOOLEAN = 6,
        VARYING_TYPE_TRANSFORM = 7,
        VARYING_TYPE_MAX = 8
    }
    const NODE_ID_INVALID = -1;
    const NODE_ID_OUTPUT = 0;
}
export interface Compositor extends Resource {
    compositor_effects: {
        type: "CompositorEffect[]";
        properties: CompositorEffect[];
    };
}
export interface VisualShaderNodeVec4Parameter extends VisualShaderNodeParameter {
    default_value: type.Vector4;
    default_value_enabled: type.bool;
}
export interface VisualShaderNodeColorFunc extends VisualShaderNode {
    function: type.int;
}
export declare namespace VisualShaderNodeColorFunc {
    const enum Function {
        FUNC_GRAYSCALE = 0,
        FUNC_HSV2RGB = 1,
        FUNC_RGB2HSV = 2,
        FUNC_SEPIA = 3,
        FUNC_MAX = 4
    }
}
export interface ConfigFile extends RefCounted {
}
export interface NavigationLink3D extends Node3D {
    bidirectional: type.bool;
    enabled: type.bool;
    end_position: type.Vector3;
    enter_cost: type.float;
    navigation_layers: type.int;
    start_position: type.Vector3;
    travel_cost: type.float;
}
export interface VisualShaderNodeVec3Parameter extends VisualShaderNodeParameter {
    default_value: type.Vector3;
    default_value_enabled: type.bool;
}
export interface RefCounted extends Object {
}
export interface Marker3D extends Node3D {
    gizmo_extents: type.float;
}
export interface ConvexPolygonShape2D extends Shape2D {
    points: type.PackedVector2Array;
}
export interface NavigationServer2D extends Object {
}
export interface JSON extends Resource {
    data: {
        type: "Variant";
        properties: Variant;
    };
}
export interface MultiplayerPeer extends PacketPeer {
    refuse_new_connections: type.bool;
    transfer_channel: type.int;
    transfer_mode: type.int;
}
export declare namespace MultiplayerPeer {
    const enum ConnectionStatus {
        CONNECTION_DISCONNECTED = 0,
        CONNECTION_CONNECTING = 1,
        CONNECTION_CONNECTED = 2
    }
    const TARGET_PEER_BROADCAST = 0;
    const TARGET_PEER_SERVER = 1;
    const enum TransferMode {
        TRANSFER_MODE_UNRELIABLE = 0,
        TRANSFER_MODE_UNRELIABLE_ORDERED = 1,
        TRANSFER_MODE_RELIABLE = 2
    }
}
export interface AudioEffectAmplify extends AudioEffect {
    volume_db: type.float;
}
export interface ScriptExtension extends Script {
}
export interface InputEventMagnifyGesture extends InputEventGesture {
    factor: type.float;
}
export interface AudioEffectEQ10 extends AudioEffectEQ {
}
export interface VisualShaderNodeTexture3D extends VisualShaderNodeSample3D {
    texture: {
        type: "Texture3D";
        properties: Texture3D;
    };
}
export interface TextureButton extends BaseButton {
    flip_h: type.bool;
    flip_v: type.bool;
    ignore_texture_size: type.bool;
    stretch_mode: type.int;
    texture_click_mask: {
        type: "BitMap";
        properties: BitMap;
    };
    texture_disabled: {
        type: "Texture2D";
        properties: Texture2D;
    };
    texture_focused: {
        type: "Texture2D";
        properties: Texture2D;
    };
    texture_hover: {
        type: "Texture2D";
        properties: Texture2D;
    };
    texture_normal: {
        type: "Texture2D";
        properties: Texture2D;
    };
    texture_pressed: {
        type: "Texture2D";
        properties: Texture2D;
    };
}
export declare namespace TextureButton {
    const enum StretchMode {
        STRETCH_SCALE = 0,
        STRETCH_TILE = 1,
        STRETCH_KEEP = 2,
        STRETCH_KEEP_CENTERED = 3,
        STRETCH_KEEP_ASPECT = 4,
        STRETCH_KEEP_ASPECT_CENTERED = 5,
        STRETCH_KEEP_ASPECT_COVERED = 6
    }
}
export interface XRInterface extends RefCounted {
    ar_is_anchor_detection_enabled: type.bool;
    environment_blend_mode: type.int;
    interface_is_primary: type.bool;
    xr_play_area_mode: type.int;
}
export declare namespace XRInterface {
    const enum Capabilities {
        XR_NONE = 0,
        XR_MONO = 1,
        XR_STEREO = 2,
        XR_QUAD = 4,
        XR_VR = 8,
        XR_AR = 16,
        XR_EXTERNAL = 32
    }
    const enum TrackingStatus {
        XR_NORMAL_TRACKING = 0,
        XR_EXCESSIVE_MOTION = 1,
        XR_INSUFFICIENT_FEATURES = 2,
        XR_UNKNOWN_TRACKING = 3,
        XR_NOT_TRACKING = 4
    }
    const enum PlayAreaMode {
        XR_PLAY_AREA_UNKNOWN = 0,
        XR_PLAY_AREA_3DOF = 1,
        XR_PLAY_AREA_SITTING = 2,
        XR_PLAY_AREA_ROOMSCALE = 3,
        XR_PLAY_AREA_STAGE = 4
    }
    const enum EnvironmentBlendMode {
        XR_ENV_BLEND_MODE_OPAQUE = 0,
        XR_ENV_BLEND_MODE_ADDITIVE = 1,
        XR_ENV_BLEND_MODE_ALPHA_BLEND = 2
    }
}
export interface SkeletonIK3D extends SkeletonModifier3D {
    interpolation: type.float;
    magnet: type.Vector3;
    max_iterations: type.int;
    min_distance: type.float;
    override_tip_basis: type.bool;
    root_bone: type.StringName;
    target: type.Transform3D;
    target_node: type.NodePath;
    tip_bone: type.StringName;
    use_magnet: type.bool;
}
export interface MultiplayerAPI extends RefCounted {
    multiplayer_peer: {
        type: "MultiplayerPeer";
        properties: MultiplayerPeer;
    };
}
export declare namespace MultiplayerAPI {
    const enum RPCMode {
        RPC_MODE_DISABLED = 0,
        RPC_MODE_ANY_PEER = 1,
        RPC_MODE_AUTHORITY = 2
    }
}
export interface AudioStreamPlayer2D extends Node2D {
    area_mask: type.int;
    attenuation: type.float;
    autoplay: type.bool;
    bus: type.StringName;
    max_distance: type.float;
    max_polyphony: type.int;
    panning_strength: type.float;
    pitch_scale: type.float;
    playback_type: type.int;
    playing: type.bool;
    stream: {
        type: "AudioStream";
        properties: AudioStream;
    };
    stream_paused: type.bool;
    volume_db: type.float;
}
export interface VisualShaderNodeParticleMultiplyByAxisAngle extends VisualShaderNode {
    degrees_mode: type.bool;
}
export interface VisualShaderNodeFrame extends VisualShaderNodeResizableBase {
    attached_nodes: type.PackedInt32Array;
    autoshrink: type.bool;
    tint_color: type.Color;
    tint_color_enabled: type.bool;
    title: type.String;
}
export interface VoxelGI extends VisualInstance3D {
    camera_attributes: {
        type: "CameraAttributes";
        properties: CameraAttributes;
    };
    data: {
        type: "VoxelGIData";
        properties: VoxelGIData;
    };
    size: type.Vector3;
    subdiv: type.int;
}
export declare namespace VoxelGI {
    const enum Subdiv {
        SUBDIV_64 = 0,
        SUBDIV_128 = 1,
        SUBDIV_256 = 2,
        SUBDIV_512 = 3,
        SUBDIV_MAX = 4
    }
}
export interface VisualShaderNodeInput extends VisualShaderNode {
    input_name: type.String;
}
export interface VisualShaderNodeParticleMeshEmitter extends VisualShaderNodeParticleEmitter {
    mesh: {
        type: "Mesh";
        properties: Mesh;
    };
    surface_index: type.int;
    use_all_surfaces: type.bool;
}
export interface ScriptEditorBase extends VBoxContainer {
}
export interface EditorTranslationParserPlugin extends RefCounted {
}
export interface RectangleShape2D extends Shape2D {
    size: type.Vector2;
}
export interface PacketPeer extends RefCounted {
    encode_buffer_max_size: type.int;
}
export interface MeshInstance2D extends Node2D {
    mesh: {
        type: "Mesh";
        properties: Mesh;
    };
    texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
}
export interface NinePatchRect extends Control {
    axis_stretch_horizontal: type.int;
    axis_stretch_vertical: type.int;
    draw_center: type.bool;
    mouse_filter: type.int;
    patch_margin_bottom: type.int;
    patch_margin_left: type.int;
    patch_margin_right: type.int;
    patch_margin_top: type.int;
    region_rect: type.Rect2;
    texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
}
export declare namespace NinePatchRect {
    const enum AxisStretchMode {
        AXIS_STRETCH_MODE_STRETCH = 0,
        AXIS_STRETCH_MODE_TILE = 1,
        AXIS_STRETCH_MODE_TILE_FIT = 2
    }
}
export interface FileAccess extends RefCounted {
    big_endian: type.bool;
}
export declare namespace FileAccess {
    const enum ModeFlags {
        READ = 1,
        WRITE = 2,
        READ_WRITE = 3,
        WRITE_READ = 7
    }
    const enum CompressionMode {
        COMPRESSION_FASTLZ = 0,
        COMPRESSION_DEFLATE = 1,
        COMPRESSION_ZSTD = 2,
        COMPRESSION_GZIP = 3,
        COMPRESSION_BROTLI = 4
    }
    const enum UnixPermissionFlags {
        UNIX_READ_OWNER = 256,
        UNIX_WRITE_OWNER = 128,
        UNIX_EXECUTE_OWNER = 64,
        UNIX_READ_GROUP = 32,
        UNIX_WRITE_GROUP = 16,
        UNIX_EXECUTE_GROUP = 8,
        UNIX_READ_OTHER = 4,
        UNIX_WRITE_OTHER = 2,
        UNIX_EXECUTE_OTHER = 1,
        UNIX_SET_USER_ID = 2048,
        UNIX_SET_GROUP_ID = 1024,
        UNIX_RESTRICTED_DELETE = 512
    }
}
export interface PhysicsBody2D extends CollisionObject2D {
    input_pickable: type.bool;
}
export interface VisualShaderNodeCurveTexture extends VisualShaderNodeResizableBase {
    texture: {
        type: "CurveTexture";
        properties: CurveTexture;
    };
}
export interface OptimizedTranslation extends Translation {
}
export interface RDTextureView extends RefCounted {
    format_override: type.int;
    swizzle_a: type.int;
    swizzle_b: type.int;
    swizzle_g: type.int;
    swizzle_r: type.int;
}
export interface Light3D extends VisualInstance3D {
    distance_fade_begin: type.float;
    distance_fade_enabled: type.bool;
    distance_fade_length: type.float;
    distance_fade_shadow: type.float;
    editor_only: type.bool;
    light_angular_distance: type.float;
    light_bake_mode: type.int;
    light_color: type.Color;
    light_cull_mask: type.int;
    light_energy: type.float;
    light_indirect_energy: type.float;
    light_intensity_lumens: type.float;
    light_intensity_lux: type.float;
    light_negative: type.bool;
    light_projector: {
        type: "Texture2D";
        properties: Texture2D;
    };
    light_size: type.float;
    light_specular: type.float;
    light_temperature: type.float;
    light_volumetric_fog_energy: type.float;
    shadow_bias: type.float;
    shadow_blur: type.float;
    shadow_caster_mask: type.int;
    shadow_enabled: type.bool;
    shadow_normal_bias: type.float;
    shadow_opacity: type.float;
    shadow_reverse_cull_face: type.bool;
    shadow_transmittance_bias: type.float;
}
export declare namespace Light3D {
    const enum Param {
        PARAM_ENERGY = 0,
        PARAM_INDIRECT_ENERGY = 1,
        PARAM_VOLUMETRIC_FOG_ENERGY = 2,
        PARAM_SPECULAR = 3,
        PARAM_RANGE = 4,
        PARAM_SIZE = 5,
        PARAM_ATTENUATION = 6,
        PARAM_SPOT_ANGLE = 7,
        PARAM_SPOT_ATTENUATION = 8,
        PARAM_SHADOW_MAX_DISTANCE = 9,
        PARAM_SHADOW_SPLIT_1_OFFSET = 10,
        PARAM_SHADOW_SPLIT_2_OFFSET = 11,
        PARAM_SHADOW_SPLIT_3_OFFSET = 12,
        PARAM_SHADOW_FADE_START = 13,
        PARAM_SHADOW_NORMAL_BIAS = 14,
        PARAM_SHADOW_BIAS = 15,
        PARAM_SHADOW_PANCAKE_SIZE = 16,
        PARAM_SHADOW_OPACITY = 17,
        PARAM_SHADOW_BLUR = 18,
        PARAM_TRANSMITTANCE_BIAS = 19,
        PARAM_INTENSITY = 20,
        PARAM_MAX = 21
    }
    const enum BakeMode {
        BAKE_DISABLED = 0,
        BAKE_STATIC = 1,
        BAKE_DYNAMIC = 2
    }
}
export interface PhysicsTestMotionParameters2D extends RefCounted {
    collide_separation_ray: type.bool;
    exclude_bodies: {
        type: "RID[]";
        properties: RID[];
    };
    exclude_objects: type.int[];
    from: type.Transform2D;
    margin: type.float;
    motion: type.Vector2;
    recovery_as_collision: type.bool;
}
export interface VisibleOnScreenEnabler3D extends VisibleOnScreenNotifier3D {
    enable_mode: type.int;
    enable_node_path: type.NodePath;
}
export declare namespace VisibleOnScreenEnabler3D {
    const enum EnableMode {
        ENABLE_MODE_INHERIT = 0,
        ENABLE_MODE_ALWAYS = 1,
        ENABLE_MODE_WHEN_PAUSED = 2
    }
}
export interface PhysicsServer3DManager extends Object {
}
export interface CenterContainer extends Container {
    use_top_left: type.bool;
}
export interface XRAnchor3D extends XRNode3D {
}
export interface SkeletonModification2DFABRIK extends SkeletonModification2D {
    fabrik_data_chain_length: type.int;
    target_nodepath: type.NodePath;
}
export interface AnimatedSprite2D extends Node2D {
    animation: type.StringName;
    autoplay: type.String;
    centered: type.bool;
    flip_h: type.bool;
    flip_v: type.bool;
    frame: type.int;
    frame_progress: type.float;
    offset: type.Vector2;
    speed_scale: type.float;
    sprite_frames: {
        type: "SpriteFrames";
        properties: SpriteFrames;
    };
}
export interface VisualShaderNodeIf extends VisualShaderNode {
}
export interface AudioEffectCompressor extends AudioEffect {
    attack_us: type.float;
    gain: type.float;
    mix: type.float;
    ratio: type.float;
    release_ms: type.float;
    sidechain: type.StringName;
    threshold: type.float;
}
export interface RDPipelineColorBlendStateAttachment extends RefCounted {
    alpha_blend_op: type.int;
    color_blend_op: type.int;
    dst_alpha_blend_factor: type.int;
    dst_color_blend_factor: type.int;
    enable_blend: type.bool;
    src_alpha_blend_factor: type.int;
    src_color_blend_factor: type.int;
    write_a: type.bool;
    write_b: type.bool;
    write_g: type.bool;
    write_r: type.bool;
}
export interface HFlowContainer extends FlowContainer {
}
export interface VisualShaderNodeMix extends VisualShaderNode {
    op_type: type.int;
}
export declare namespace VisualShaderNodeMix {
    const enum OpType {
        OP_TYPE_SCALAR = 0,
        OP_TYPE_VECTOR_2D = 1,
        OP_TYPE_VECTOR_2D_SCALAR = 2,
        OP_TYPE_VECTOR_3D = 3,
        OP_TYPE_VECTOR_3D_SCALAR = 4,
        OP_TYPE_VECTOR_4D = 5,
        OP_TYPE_VECTOR_4D_SCALAR = 6,
        OP_TYPE_MAX = 7
    }
}
export interface XRFaceModifier3D extends Node3D {
    face_tracker: type.StringName;
    target: type.NodePath;
}
export interface InputEvent extends Resource {
    device: type.int;
}
export declare namespace InputEvent {
    const DEVICE_ID_EMULATION = -1;
}
export interface CircleShape2D extends Shape2D {
    radius: type.float;
}
export interface XRBodyModifier3D extends SkeletonModifier3D {
    body_tracker: type.StringName;
    body_update: type.int;
    bone_update: type.int;
}
export declare namespace XRBodyModifier3D {
    const enum BodyUpdate {
        BODY_UPDATE_UPPER_BODY = 1,
        BODY_UPDATE_LOWER_BODY = 2,
        BODY_UPDATE_HANDS = 4
    }
    const enum BoneUpdate {
        BONE_UPDATE_FULL = 0,
        BONE_UPDATE_ROTATION_ONLY = 1,
        BONE_UPDATE_MAX = 2
    }
}
export interface OptionButton extends Button {
    action_mode: type.int;
    alignment: type.int;
    allow_reselect: type.bool;
    fit_to_longest_item: type.bool;
    item_count: type.int;
    selected: type.int;
    toggle_mode: type.bool;
    arrow_margin: type.int;
    modulate_arrow: type.int;
    arrow: {
        type: "Texture2D";
        properties: Texture2D;
    };
}
export interface ClassDB extends Object {
}
export declare namespace ClassDB {
    const enum APIType {
        API_CORE = 0,
        API_EDITOR = 1,
        API_EXTENSION = 2,
        API_EDITOR_EXTENSION = 3,
        API_NONE = 4
    }
}
export interface AnimationNodeStateMachine extends AnimationRootNode {
    allow_transition_to_self: type.bool;
    reset_ends: type.bool;
    state_machine_type: type.int;
}
export declare namespace AnimationNodeStateMachine {
    const enum StateMachineType {
        STATE_MACHINE_TYPE_ROOT = 0,
        STATE_MACHINE_TYPE_NESTED = 1,
        STATE_MACHINE_TYPE_GROUPED = 2
    }
}
export interface AudioEffectEQ extends AudioEffect {
}
export interface ResourceImporterTextureAtlas extends ResourceImporter {
    atlas_file: type.String;
    crop_to_region: type.bool;
    import_mode: type.int;
    trim_alpha_border_from_region: type.bool;
}
export interface KinematicCollision2D extends RefCounted {
}
export interface ViewportTexture extends Texture2D {
    viewport_path: type.NodePath;
}
export interface VisualShaderNodeVectorRefract extends VisualShaderNodeVectorBase {
}
export interface SkeletonModification2DPhysicalBones extends SkeletonModification2D {
    physical_bone_chain_length: type.int;
}
export interface Signal {
}
export interface GraphElement extends Container {
    draggable: type.bool;
    position_offset: type.Vector2;
    resizable: type.bool;
    selectable: type.bool;
    selected: type.bool;
    resizer: {
        type: "Texture2D";
        properties: Texture2D;
    };
}
export interface PhysicsDirectBodyState3D extends Object {
    angular_velocity: type.Vector3;
    center_of_mass: type.Vector3;
    center_of_mass_local: type.Vector3;
    inverse_inertia: type.Vector3;
    inverse_inertia_tensor: type.Basis;
    inverse_mass: type.float;
    linear_velocity: type.Vector3;
    principal_inertia_axes: type.Basis;
    sleeping: type.bool;
    step: type.float;
    total_angular_damp: type.float;
    total_gravity: type.Vector3;
    total_linear_damp: type.float;
    transform: type.Transform3D;
}
export interface Area2D extends CollisionObject2D {
    angular_damp: type.float;
    angular_damp_space_override: type.int;
    audio_bus_name: type.StringName;
    audio_bus_override: type.bool;
    gravity: type.float;
    gravity_direction: type.Vector2;
    gravity_point: type.bool;
    gravity_point_center: type.Vector2;
    gravity_point_unit_distance: type.float;
    gravity_space_override: type.int;
    linear_damp: type.float;
    linear_damp_space_override: type.int;
    monitorable: type.bool;
    monitoring: type.bool;
    priority: type.int;
}
export declare namespace Area2D {
    const enum SpaceOverride {
        SPACE_OVERRIDE_DISABLED = 0,
        SPACE_OVERRIDE_COMBINE = 1,
        SPACE_OVERRIDE_COMBINE_REPLACE = 2,
        SPACE_OVERRIDE_REPLACE = 3,
        SPACE_OVERRIDE_REPLACE_COMBINE = 4
    }
}
export interface VisualShaderNodeIntParameter extends VisualShaderNodeParameter {
    default_value: type.int;
    default_value_enabled: type.bool;
    enum_names: type.PackedStringArray;
    hint: type.int;
    max: type.int;
    min: type.int;
    step: type.int;
}
export declare namespace VisualShaderNodeIntParameter {
    const enum Hint {
        HINT_NONE = 0,
        HINT_RANGE = 1,
        HINT_RANGE_STEP = 2,
        HINT_ENUM = 3,
        HINT_MAX = 4
    }
}
export interface SkeletonModification2DJiggle extends SkeletonModification2D {
    damping: type.float;
    gravity: type.Vector2;
    jiggle_data_chain_length: type.int;
    mass: type.float;
    stiffness: type.float;
    target_nodepath: type.NodePath;
    use_gravity: type.bool;
}
export interface Control extends CanvasItem {
    anchor_bottom: type.float;
    anchor_left: type.float;
    anchor_right: type.float;
    anchor_top: type.float;
    auto_translate: type.bool;
    clip_contents: type.bool;
    custom_minimum_size: type.Vector2;
    focus_mode: type.int;
    focus_neighbor_bottom: type.NodePath;
    focus_neighbor_left: type.NodePath;
    focus_neighbor_right: type.NodePath;
    focus_neighbor_top: type.NodePath;
    focus_next: type.NodePath;
    focus_previous: type.NodePath;
    global_position: type.Vector2;
    grow_horizontal: type.int;
    grow_vertical: type.int;
    layout_direction: type.int;
    localize_numeral_system: type.bool;
    mouse_default_cursor_shape: type.int;
    mouse_filter: type.int;
    mouse_force_pass_scroll_events: type.bool;
    offset_bottom: type.float;
    offset_left: type.float;
    offset_right: type.float;
    offset_top: type.float;
    physics_interpolation_mode: type.int;
    pivot_offset: type.Vector2;
    position: type.Vector2;
    rotation: type.float;
    rotation_degrees: type.float;
    scale: type.Vector2;
    shortcut_context: {
        type: "Node";
        properties: Node;
    };
    size: type.Vector2;
    size_flags_horizontal: type.int;
    size_flags_stretch_ratio: type.float;
    size_flags_vertical: type.int;
    theme: {
        type: "Theme";
        properties: Theme;
    };
    theme_type_variation: type.StringName;
    tooltip_auto_translate_mode: type.int;
    tooltip_text: type.String;
}
export declare namespace Control {
    const enum FocusMode {
        FOCUS_NONE = 0,
        FOCUS_CLICK = 1,
        FOCUS_ALL = 2
    }
    const NOTIFICATION_RESIZED = 40;
    const NOTIFICATION_MOUSE_ENTER = 41;
    const NOTIFICATION_MOUSE_EXIT = 42;
    const NOTIFICATION_MOUSE_ENTER_SELF = 60;
    const NOTIFICATION_MOUSE_EXIT_SELF = 61;
    const NOTIFICATION_FOCUS_ENTER = 43;
    const NOTIFICATION_FOCUS_EXIT = 44;
    const NOTIFICATION_THEME_CHANGED = 45;
    const NOTIFICATION_SCROLL_BEGIN = 47;
    const NOTIFICATION_SCROLL_END = 48;
    const NOTIFICATION_LAYOUT_DIRECTION_CHANGED = 49;
    const enum CursorShape {
        CURSOR_ARROW = 0,
        CURSOR_IBEAM = 1,
        CURSOR_POINTING_HAND = 2,
        CURSOR_CROSS = 3,
        CURSOR_WAIT = 4,
        CURSOR_BUSY = 5,
        CURSOR_DRAG = 6,
        CURSOR_CAN_DROP = 7,
        CURSOR_FORBIDDEN = 8,
        CURSOR_VSIZE = 9,
        CURSOR_HSIZE = 10,
        CURSOR_BDIAGSIZE = 11,
        CURSOR_FDIAGSIZE = 12,
        CURSOR_MOVE = 13,
        CURSOR_VSPLIT = 14,
        CURSOR_HSPLIT = 15,
        CURSOR_HELP = 16
    }
    const enum LayoutPreset {
        PRESET_TOP_LEFT = 0,
        PRESET_TOP_RIGHT = 1,
        PRESET_BOTTOM_LEFT = 2,
        PRESET_BOTTOM_RIGHT = 3,
        PRESET_CENTER_LEFT = 4,
        PRESET_CENTER_TOP = 5,
        PRESET_CENTER_RIGHT = 6,
        PRESET_CENTER_BOTTOM = 7,
        PRESET_CENTER = 8,
        PRESET_LEFT_WIDE = 9,
        PRESET_TOP_WIDE = 10,
        PRESET_RIGHT_WIDE = 11,
        PRESET_BOTTOM_WIDE = 12,
        PRESET_VCENTER_WIDE = 13,
        PRESET_HCENTER_WIDE = 14,
        PRESET_FULL_RECT = 15
    }
    const enum LayoutPresetMode {
        PRESET_MODE_MINSIZE = 0,
        PRESET_MODE_KEEP_WIDTH = 1,
        PRESET_MODE_KEEP_HEIGHT = 2,
        PRESET_MODE_KEEP_SIZE = 3
    }
    const enum SizeFlags {
        SIZE_SHRINK_BEGIN = 0,
        SIZE_FILL = 1,
        SIZE_EXPAND = 2,
        SIZE_EXPAND_FILL = 3,
        SIZE_SHRINK_CENTER = 4,
        SIZE_SHRINK_END = 8
    }
    const enum MouseFilter {
        MOUSE_FILTER_STOP = 0,
        MOUSE_FILTER_PASS = 1,
        MOUSE_FILTER_IGNORE = 2
    }
    const enum GrowDirection {
        GROW_DIRECTION_BEGIN = 0,
        GROW_DIRECTION_END = 1,
        GROW_DIRECTION_BOTH = 2
    }
    const enum Anchor {
        ANCHOR_BEGIN = 0,
        ANCHOR_END = 1
    }
    const enum LayoutDirection {
        LAYOUT_DIRECTION_INHERITED = 0,
        LAYOUT_DIRECTION_APPLICATION_LOCALE = 1,
        LAYOUT_DIRECTION_LTR = 2,
        LAYOUT_DIRECTION_RTL = 3,
        LAYOUT_DIRECTION_SYSTEM_LOCALE = 4,
        LAYOUT_DIRECTION_MAX = 5,
        LAYOUT_DIRECTION_LOCALE = 1
    }
    const enum TextDirection {
        TEXT_DIRECTION_INHERITED = 3,
        TEXT_DIRECTION_AUTO = 0,
        TEXT_DIRECTION_LTR = 1,
        TEXT_DIRECTION_RTL = 2
    }
}
export interface VisualShaderNodeFloatOp extends VisualShaderNode {
    operator: type.int;
}
export declare namespace VisualShaderNodeFloatOp {
    const enum Operator {
        OP_ADD = 0,
        OP_SUB = 1,
        OP_MUL = 2,
        OP_DIV = 3,
        OP_MOD = 4,
        OP_POW = 5,
        OP_MAX = 6,
        OP_MIN = 7,
        OP_ATAN2 = 8,
        OP_STEP = 9,
        OP_ENUM_SIZE = 10
    }
}
export interface AnimationTree extends AnimationMixer {
    advance_expression_base_node: type.NodePath;
    anim_player: type.NodePath;
    callback_mode_discrete: type.int;
    deterministic: type.bool;
    tree_root: {
        type: "AnimationRootNode";
        properties: AnimationRootNode;
    };
}
export declare namespace AnimationTree {
    const enum AnimationProcessCallback {
        ANIMATION_PROCESS_PHYSICS = 0,
        ANIMATION_PROCESS_IDLE = 1,
        ANIMATION_PROCESS_MANUAL = 2
    }
}
export interface ScriptLanguage extends Object {
}
export declare namespace ScriptLanguage {
    const enum ScriptNameCasing {
        SCRIPT_NAME_CASING_AUTO = 0,
        SCRIPT_NAME_CASING_PASCAL_CASE = 1,
        SCRIPT_NAME_CASING_SNAKE_CASE = 2,
        SCRIPT_NAME_CASING_KEBAB_CASE = 3
    }
}
export interface VisualShaderNodeCurveXYZTexture extends VisualShaderNodeResizableBase {
    texture: {
        type: "CurveXYZTexture";
        properties: CurveXYZTexture;
    };
}
export interface PointLight2D extends Light2D {
    height: type.float;
    offset: type.Vector2;
    texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    texture_scale: type.float;
}
export interface GPUParticlesAttractorVectorField3D extends GPUParticlesAttractor3D {
    size: type.Vector3;
    texture: {
        type: "Texture3D";
        properties: Texture3D;
    };
}
export interface XRPositionalTracker extends XRTracker {
    hand: type.int;
    profile: type.String;
}
export declare namespace XRPositionalTracker {
    const enum TrackerHand {
        TRACKER_HAND_UNKNOWN = 0,
        TRACKER_HAND_LEFT = 1,
        TRACKER_HAND_RIGHT = 2,
        TRACKER_HAND_MAX = 3
    }
}
export interface NavigationMeshGenerator extends Object {
}
export interface Skeleton3D extends Node3D {
    animate_physical_bones: type.bool;
    modifier_callback_mode_process: type.int;
    motion_scale: type.float;
    show_rest_only: type.bool;
}
export declare namespace Skeleton3D {
    const NOTIFICATION_UPDATE_SKELETON = 50;
    const enum ModifierCallbackModeProcess {
        MODIFIER_CALLBACK_MODE_PROCESS_PHYSICS = 0,
        MODIFIER_CALLBACK_MODE_PROCESS_IDLE = 1
    }
}
export interface VisualShaderNodeUVPolarCoord extends VisualShaderNode {
}
export interface HSlider extends Slider {
}
export interface CryptoKey extends Resource {
}
export interface VisualShaderNodeFloatFunc extends VisualShaderNode {
    function: type.int;
}
export declare namespace VisualShaderNodeFloatFunc {
    const enum Function {
        FUNC_SIN = 0,
        FUNC_COS = 1,
        FUNC_TAN = 2,
        FUNC_ASIN = 3,
        FUNC_ACOS = 4,
        FUNC_ATAN = 5,
        FUNC_SINH = 6,
        FUNC_COSH = 7,
        FUNC_TANH = 8,
        FUNC_LOG = 9,
        FUNC_EXP = 10,
        FUNC_SQRT = 11,
        FUNC_ABS = 12,
        FUNC_SIGN = 13,
        FUNC_FLOOR = 14,
        FUNC_ROUND = 15,
        FUNC_CEIL = 16,
        FUNC_FRACT = 17,
        FUNC_SATURATE = 18,
        FUNC_NEGATE = 19,
        FUNC_ACOSH = 20,
        FUNC_ASINH = 21,
        FUNC_ATANH = 22,
        FUNC_DEGREES = 23,
        FUNC_EXP2 = 24,
        FUNC_INVERSE_SQRT = 25,
        FUNC_LOG2 = 26,
        FUNC_RADIANS = 27,
        FUNC_RECIPROCAL = 28,
        FUNC_ROUNDEVEN = 29,
        FUNC_TRUNC = 30,
        FUNC_ONEMINUS = 31,
        FUNC_MAX = 32
    }
}
export interface InputEventMouseMotion extends InputEventMouse {
    pen_inverted: type.bool;
    pressure: type.float;
    relative: type.Vector2;
    screen_relative: type.Vector2;
    screen_velocity: type.Vector2;
    tilt: type.Vector2;
    velocity: type.Vector2;
}
export interface Path3D extends Node3D {
    curve: {
        type: "Curve3D";
        properties: Curve3D;
    };
}
export interface Line2D extends Node2D {
    antialiased: type.bool;
    begin_cap_mode: type.int;
    closed: type.bool;
    default_color: type.Color;
    end_cap_mode: type.int;
    gradient: {
        type: "Gradient";
        properties: Gradient;
    };
    joint_mode: type.int;
    points: type.PackedVector2Array;
    round_precision: type.int;
    sharp_limit: type.float;
    texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    texture_mode: type.int;
    width: type.float;
    width_curve: {
        type: "Curve";
        properties: Curve;
    };
}
export declare namespace Line2D {
    const enum LineJointMode {
        LINE_JOINT_SHARP = 0,
        LINE_JOINT_BEVEL = 1,
        LINE_JOINT_ROUND = 2
    }
    const enum LineCapMode {
        LINE_CAP_NONE = 0,
        LINE_CAP_BOX = 1,
        LINE_CAP_ROUND = 2
    }
    const enum LineTextureMode {
        LINE_TEXTURE_NONE = 0,
        LINE_TEXTURE_TILE = 1,
        LINE_TEXTURE_STRETCH = 2
    }
}
export interface GPUParticlesCollisionHeightField3D extends GPUParticlesCollision3D {
    follow_camera_enabled: type.bool;
    resolution: type.int;
    size: type.Vector3;
    update_mode: type.int;
}
export declare namespace GPUParticlesCollisionHeightField3D {
    const enum Resolution {
        RESOLUTION_256 = 0,
        RESOLUTION_512 = 1,
        RESOLUTION_1024 = 2,
        RESOLUTION_2048 = 3,
        RESOLUTION_4096 = 4,
        RESOLUTION_8192 = 5,
        RESOLUTION_MAX = 6
    }
    const enum UpdateMode {
        UPDATE_MODE_WHEN_MOVED = 0,
        UPDATE_MODE_ALWAYS = 1
    }
}
export interface Label extends Control {
    autowrap_mode: type.int;
    clip_text: type.bool;
    ellipsis_char: type.String;
    horizontal_alignment: type.int;
    justification_flags: type.int;
    label_settings: {
        type: "LabelSettings";
        properties: LabelSettings;
    };
    language: type.String;
    lines_skipped: type.int;
    max_lines_visible: type.int;
    mouse_filter: type.int;
    size_flags_vertical: type.int;
    structured_text_bidi_override: type.int;
    structured_text_bidi_override_options: type.Array;
    tab_stops: type.PackedFloat32Array;
    text: type.String;
    text_direction: type.int;
    text_overrun_behavior: type.int;
    uppercase: type.bool;
    vertical_alignment: type.int;
    visible_characters: type.int;
    visible_characters_behavior: type.int;
    visible_ratio: type.float;
    font_color: type.Color;
    font_outline_color: type.Color;
    font_shadow_color: type.Color;
    line_spacing: type.int;
    outline_size: type.int;
    shadow_offset_x: type.int;
    shadow_offset_y: type.int;
    shadow_outline_size: type.int;
    font: {
        type: "Font";
        properties: Font;
    };
    font_size: type.int;
    normal: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export interface EngineProfiler extends RefCounted {
}
export interface CharacterBody3D extends PhysicsBody3D {
    floor_block_on_wall: type.bool;
    floor_constant_speed: type.bool;
    floor_max_angle: type.float;
    floor_snap_length: type.float;
    floor_stop_on_slope: type.bool;
    max_slides: type.int;
    motion_mode: type.int;
    platform_floor_layers: type.int;
    platform_on_leave: type.int;
    platform_wall_layers: type.int;
    safe_margin: type.float;
    slide_on_ceiling: type.bool;
    up_direction: type.Vector3;
    velocity: type.Vector3;
    wall_min_slide_angle: type.float;
}
export declare namespace CharacterBody3D {
    const enum MotionMode {
        MOTION_MODE_GROUNDED = 0,
        MOTION_MODE_FLOATING = 1
    }
    const enum PlatformOnLeave {
        PLATFORM_ON_LEAVE_ADD_VELOCITY = 0,
        PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY = 1,
        PLATFORM_ON_LEAVE_DO_NOTHING = 2
    }
}
export interface CanvasModulate extends Node2D {
    color: type.Color;
}
export interface Shape3D extends Resource {
    custom_solver_bias: type.float;
    margin: type.float;
}
export interface RDShaderSource extends RefCounted {
    language: type.int;
    source_compute: type.String;
    source_fragment: type.String;
    source_tesselation_control: type.String;
    source_tesselation_evaluation: type.String;
    source_vertex: type.String;
}
export interface PanelContainer extends Container {
    mouse_filter: type.int;
    panel: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export interface CameraAttributes extends Resource {
    auto_exposure_enabled: type.bool;
    auto_exposure_scale: type.float;
    auto_exposure_speed: type.float;
    exposure_multiplier: type.float;
    exposure_sensitivity: type.float;
}
export interface EditorNode3DGizmoPlugin extends Resource {
}
export interface PhysicsPointQueryParameters2D extends RefCounted {
    canvas_instance_id: type.int;
    collide_with_areas: type.bool;
    collide_with_bodies: type.bool;
    collision_mask: type.int;
    exclude: {
        type: "RID[]";
        properties: RID[];
    };
    position: type.Vector2;
}
export interface PlaceholderMaterial extends Material {
}
export interface AudioEffectHardLimiter extends AudioEffect {
    ceiling_db: type.float;
    pre_gain_db: type.float;
    release: type.float;
}
export interface AcceptDialog extends Window {
    dialog_autowrap: type.bool;
    dialog_close_on_escape: type.bool;
    dialog_hide_on_ok: type.bool;
    dialog_text: type.String;
    exclusive: type.bool;
    keep_title_visible: type.bool;
    ok_button_text: type.String;
    title: type.String;
    transient: type.bool;
    visible: type.bool;
    wrap_controls: type.bool;
    buttons_min_height: type.int;
    buttons_min_width: type.int;
    buttons_separation: type.int;
    panel: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export interface VisualShaderNode extends Resource {
    linked_parent_graph_frame: type.int;
    output_port_for_preview: type.int;
}
export declare namespace VisualShaderNode {
    const enum PortType {
        PORT_TYPE_SCALAR = 0,
        PORT_TYPE_SCALAR_INT = 1,
        PORT_TYPE_SCALAR_UINT = 2,
        PORT_TYPE_VECTOR_2D = 3,
        PORT_TYPE_VECTOR_3D = 4,
        PORT_TYPE_VECTOR_4D = 5,
        PORT_TYPE_BOOLEAN = 6,
        PORT_TYPE_TRANSFORM = 7,
        PORT_TYPE_SAMPLER = 8,
        PORT_TYPE_MAX = 9
    }
}
export interface Animation extends Resource {
    capture_included: type.bool;
    length: type.float;
    loop_mode: type.int;
    step: type.float;
}
export declare namespace Animation {
    const enum TrackType {
        TYPE_VALUE = 0,
        TYPE_POSITION_3D = 1,
        TYPE_ROTATION_3D = 2,
        TYPE_SCALE_3D = 3,
        TYPE_BLEND_SHAPE = 4,
        TYPE_METHOD = 5,
        TYPE_BEZIER = 6,
        TYPE_AUDIO = 7,
        TYPE_ANIMATION = 8
    }
    const enum InterpolationType {
        INTERPOLATION_NEAREST = 0,
        INTERPOLATION_LINEAR = 1,
        INTERPOLATION_CUBIC = 2,
        INTERPOLATION_LINEAR_ANGLE = 3,
        INTERPOLATION_CUBIC_ANGLE = 4
    }
    const enum UpdateMode {
        UPDATE_CONTINUOUS = 0,
        UPDATE_DISCRETE = 1,
        UPDATE_CAPTURE = 2
    }
    const enum LoopMode {
        LOOP_NONE = 0,
        LOOP_LINEAR = 1,
        LOOP_PINGPONG = 2
    }
    const enum LoopedFlag {
        LOOPED_FLAG_NONE = 0,
        LOOPED_FLAG_END = 1,
        LOOPED_FLAG_START = 2
    }
    const enum FindMode {
        FIND_MODE_NEAREST = 0,
        FIND_MODE_APPROX = 1,
        FIND_MODE_EXACT = 2
    }
}
export interface ResourceFormatLoader extends RefCounted {
}
export declare namespace ResourceFormatLoader {
    const enum CacheMode {
        CACHE_MODE_IGNORE = 0,
        CACHE_MODE_REUSE = 1,
        CACHE_MODE_REPLACE = 2,
        CACHE_MODE_IGNORE_DEEP = 3,
        CACHE_MODE_REPLACE_DEEP = 4
    }
}
export interface PhysicsDirectBodyState2DExtension extends PhysicsDirectBodyState2D {
}
export interface StyleBoxFlat extends StyleBox {
    anti_aliasing: type.bool;
    anti_aliasing_size: type.float;
    bg_color: type.Color;
    border_blend: type.bool;
    border_color: type.Color;
    border_width_bottom: type.int;
    border_width_left: type.int;
    border_width_right: type.int;
    border_width_top: type.int;
    corner_detail: type.int;
    corner_radius_bottom_left: type.int;
    corner_radius_bottom_right: type.int;
    corner_radius_top_left: type.int;
    corner_radius_top_right: type.int;
    draw_center: type.bool;
    expand_margin_bottom: type.float;
    expand_margin_left: type.float;
    expand_margin_right: type.float;
    expand_margin_top: type.float;
    shadow_color: type.Color;
    shadow_offset: type.Vector2;
    shadow_size: type.int;
    skew: type.Vector2;
}
export interface CPUParticles3D extends GeometryInstance3D {
    amount: type.int;
    angle_curve: {
        type: "Curve";
        properties: Curve;
    };
    angle_max: type.float;
    angle_min: type.float;
    angular_velocity_curve: {
        type: "Curve";
        properties: Curve;
    };
    angular_velocity_max: type.float;
    angular_velocity_min: type.float;
    anim_offset_curve: {
        type: "Curve";
        properties: Curve;
    };
    anim_offset_max: type.float;
    anim_offset_min: type.float;
    anim_speed_curve: {
        type: "Curve";
        properties: Curve;
    };
    anim_speed_max: type.float;
    anim_speed_min: type.float;
    color: type.Color;
    color_initial_ramp: {
        type: "Gradient";
        properties: Gradient;
    };
    color_ramp: {
        type: "Gradient";
        properties: Gradient;
    };
    damping_curve: {
        type: "Curve";
        properties: Curve;
    };
    damping_max: type.float;
    damping_min: type.float;
    direction: type.Vector3;
    draw_order: type.int;
    emission_box_extents: type.Vector3;
    emission_colors: type.PackedColorArray;
    emission_normals: type.PackedVector3Array;
    emission_points: type.PackedVector3Array;
    emission_ring_axis: type.Vector3;
    emission_ring_cone_angle: type.float;
    emission_ring_height: type.float;
    emission_ring_inner_radius: type.float;
    emission_ring_radius: type.float;
    emission_shape: type.int;
    emission_sphere_radius: type.float;
    emitting: type.bool;
    explosiveness: type.float;
    fixed_fps: type.int;
    flatness: type.float;
    fract_delta: type.bool;
    gravity: type.Vector3;
    hue_variation_curve: {
        type: "Curve";
        properties: Curve;
    };
    hue_variation_max: type.float;
    hue_variation_min: type.float;
    initial_velocity_max: type.float;
    initial_velocity_min: type.float;
    lifetime: type.float;
    lifetime_randomness: type.float;
    linear_accel_curve: {
        type: "Curve";
        properties: Curve;
    };
    linear_accel_max: type.float;
    linear_accel_min: type.float;
    local_coords: type.bool;
    mesh: {
        type: "Mesh";
        properties: Mesh;
    };
    one_shot: type.bool;
    orbit_velocity_curve: {
        type: "Curve";
        properties: Curve;
    };
    orbit_velocity_max: type.float;
    orbit_velocity_min: type.float;
    particle_flag_align_y: type.bool;
    particle_flag_disable_z: type.bool;
    particle_flag_rotate_y: type.bool;
    preprocess: type.float;
    radial_accel_curve: {
        type: "Curve";
        properties: Curve;
    };
    radial_accel_max: type.float;
    radial_accel_min: type.float;
    randomness: type.float;
    scale_amount_curve: {
        type: "Curve";
        properties: Curve;
    };
    scale_amount_max: type.float;
    scale_amount_min: type.float;
    scale_curve_x: {
        type: "Curve";
        properties: Curve;
    };
    scale_curve_y: {
        type: "Curve";
        properties: Curve;
    };
    scale_curve_z: {
        type: "Curve";
        properties: Curve;
    };
    speed_scale: type.float;
    split_scale: type.bool;
    spread: type.float;
    tangential_accel_curve: {
        type: "Curve";
        properties: Curve;
    };
    tangential_accel_max: type.float;
    tangential_accel_min: type.float;
    visibility_aabb: type.AABB;
}
export declare namespace CPUParticles3D {
    const enum DrawOrder {
        DRAW_ORDER_INDEX = 0,
        DRAW_ORDER_LIFETIME = 1,
        DRAW_ORDER_VIEW_DEPTH = 2
    }
    const enum Parameter {
        PARAM_INITIAL_LINEAR_VELOCITY = 0,
        PARAM_ANGULAR_VELOCITY = 1,
        PARAM_ORBIT_VELOCITY = 2,
        PARAM_LINEAR_ACCEL = 3,
        PARAM_RADIAL_ACCEL = 4,
        PARAM_TANGENTIAL_ACCEL = 5,
        PARAM_DAMPING = 6,
        PARAM_ANGLE = 7,
        PARAM_SCALE = 8,
        PARAM_HUE_VARIATION = 9,
        PARAM_ANIM_SPEED = 10,
        PARAM_ANIM_OFFSET = 11,
        PARAM_MAX = 12
    }
    const enum ParticleFlags {
        PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY = 0,
        PARTICLE_FLAG_ROTATE_Y = 1,
        PARTICLE_FLAG_DISABLE_Z = 2,
        PARTICLE_FLAG_MAX = 3
    }
    const enum EmissionShape {
        EMISSION_SHAPE_POINT = 0,
        EMISSION_SHAPE_SPHERE = 1,
        EMISSION_SHAPE_SPHERE_SURFACE = 2,
        EMISSION_SHAPE_BOX = 3,
        EMISSION_SHAPE_POINTS = 4,
        EMISSION_SHAPE_DIRECTED_POINTS = 5,
        EMISSION_SHAPE_RING = 6,
        EMISSION_SHAPE_MAX = 7
    }
}
export interface SceneState extends RefCounted {
}
export declare namespace SceneState {
    const enum GenEditState {
        GEN_EDIT_STATE_DISABLED = 0,
        GEN_EDIT_STATE_INSTANCE = 1,
        GEN_EDIT_STATE_MAIN = 2,
        GEN_EDIT_STATE_MAIN_INHERITED = 3
    }
}
export interface RayCast3D extends Node3D {
    collide_with_areas: type.bool;
    collide_with_bodies: type.bool;
    collision_mask: type.int;
    debug_shape_custom_color: type.Color;
    debug_shape_thickness: type.int;
    enabled: type.bool;
    exclude_parent: type.bool;
    hit_back_faces: type.bool;
    hit_from_inside: type.bool;
    target_position: type.Vector3;
}
export interface PhysicsServer2DExtension extends PhysicsServer2D {
}
export interface VisualShaderNodeResizableBase extends VisualShaderNode {
    size: type.Vector2;
}
export interface UniformSetCacheRD extends Object {
}
export interface PlaceholderMesh extends Mesh {
    aabb: type.AABB;
}
export interface PhysicalBone2D extends RigidBody2D {
    auto_configure_joint: type.bool;
    bone2d_index: type.int;
    bone2d_nodepath: type.NodePath;
    follow_bone_when_simulating: type.bool;
    simulate_physics: type.bool;
}
export interface ResourceImporterLayeredTexture extends ResourceImporter {
    'compress/channel_pack': type.int;
    'compress/hdr_compression': type.int;
    'compress/high_quality': type.bool;
    'compress/lossy_quality': type.float;
    'compress/mode': type.int;
    'mipmaps/generate': type.bool;
    'mipmaps/limit': type.int;
    'slices/arrangement': type.int;
}
export interface SpotLight3D extends Light3D {
    shadow_bias: type.float;
    shadow_normal_bias: type.float;
    spot_angle: type.float;
    spot_angle_attenuation: type.float;
    spot_attenuation: type.float;
    spot_range: type.float;
}
export interface VisualShaderNodeVectorOp extends VisualShaderNodeVectorBase {
    operator: type.int;
}
export declare namespace VisualShaderNodeVectorOp {
    const enum Operator {
        OP_ADD = 0,
        OP_SUB = 1,
        OP_MUL = 2,
        OP_DIV = 3,
        OP_MOD = 4,
        OP_POW = 5,
        OP_MAX = 6,
        OP_MIN = 7,
        OP_CROSS = 8,
        OP_ATAN2 = 9,
        OP_REFLECT = 10,
        OP_STEP = 11,
        OP_ENUM_SIZE = 12
    }
}
export interface GradientTexture2D extends Texture2D {
    fill: type.int;
    fill_from: type.Vector2;
    fill_to: type.Vector2;
    gradient: {
        type: "Gradient";
        properties: Gradient;
    };
    height: type.int;
    repeat: type.int;
    resource_local_to_scene: type.bool;
    use_hdr: type.bool;
    width: type.int;
}
export declare namespace GradientTexture2D {
    const enum Fill {
        FILL_LINEAR = 0,
        FILL_RADIAL = 1,
        FILL_SQUARE = 2
    }
    const enum Repeat {
        REPEAT_NONE = 0,
        REPEAT = 1,
        REPEAT_MIRROR = 2
    }
}
export interface GPUParticles2D extends Node2D {
    amount: type.int;
    amount_ratio: type.float;
    collision_base_size: type.float;
    draw_order: type.int;
    emitting: type.bool;
    explosiveness: type.float;
    fixed_fps: type.int;
    fract_delta: type.bool;
    interp_to_end: type.float;
    interpolate: type.bool;
    lifetime: type.float;
    local_coords: type.bool;
    one_shot: type.bool;
    preprocess: type.float;
    process_material: {
        type: "Material";
        properties: Material;
    };
    randomness: type.float;
    speed_scale: type.float;
    sub_emitter: type.NodePath;
    texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    trail_enabled: type.bool;
    trail_lifetime: type.float;
    trail_section_subdivisions: type.int;
    trail_sections: type.int;
    visibility_rect: type.Rect2;
}
export declare namespace GPUParticles2D {
    const enum DrawOrder {
        DRAW_ORDER_INDEX = 0,
        DRAW_ORDER_LIFETIME = 1,
        DRAW_ORDER_REVERSE_LIFETIME = 2
    }
    const enum EmitFlags {
        EMIT_FLAG_POSITION = 1,
        EMIT_FLAG_ROTATION_SCALE = 2,
        EMIT_FLAG_VELOCITY = 4,
        EMIT_FLAG_COLOR = 8,
        EMIT_FLAG_CUSTOM = 16
    }
}
export interface RDPipelineRasterizationState extends RefCounted {
    cull_mode: type.int;
    depth_bias_clamp: type.float;
    depth_bias_constant_factor: type.float;
    depth_bias_enabled: type.bool;
    depth_bias_slope_factor: type.float;
    discard_primitives: type.bool;
    enable_depth_clamp: type.bool;
    front_face: type.int;
    line_width: type.float;
    patch_control_points: type.int;
    wireframe: type.bool;
}
export interface CompressedTexture2D extends Texture2D {
    load_path: type.String;
    resource_local_to_scene: type.bool;
}
export interface AudioEffectCapture extends AudioEffect {
    buffer_length: type.float;
}
export interface VisualShaderNodeVaryingGetter extends VisualShaderNodeVarying {
}
export interface VisualShaderNodeSDFToScreenUV extends VisualShaderNode {
}
export interface MultiplayerAPIExtension extends MultiplayerAPI {
}
export interface VisualShaderNodeVectorDistance extends VisualShaderNodeVectorBase {
}
export interface Theme extends Resource {
    default_base_scale: type.float;
    default_font: {
        type: "Font";
        properties: Font;
    };
    default_font_size: type.int;
}
export declare namespace Theme {
    const enum DataType {
        DATA_TYPE_COLOR = 0,
        DATA_TYPE_CONSTANT = 1,
        DATA_TYPE_FONT = 2,
        DATA_TYPE_FONT_SIZE = 3,
        DATA_TYPE_ICON = 4,
        DATA_TYPE_STYLEBOX = 5,
        DATA_TYPE_MAX = 6
    }
}
export interface MovieWriter extends Object {
}
export interface AudioEffectSpectrumAnalyzer extends AudioEffect {
    buffer_length: type.float;
    fft_size: type.int;
    tap_back_pos: type.float;
}
export declare namespace AudioEffectSpectrumAnalyzer {
    const enum FFTSize {
        FFT_SIZE_256 = 0,
        FFT_SIZE_512 = 1,
        FFT_SIZE_1024 = 2,
        FFT_SIZE_2048 = 3,
        FFT_SIZE_4096 = 4,
        FFT_SIZE_MAX = 5
    }
}
export interface InputEventKey extends InputEventWithModifiers {
    echo: type.bool;
    key_label: type.int;
    keycode: type.int;
    location: type.int;
    physical_keycode: type.int;
    pressed: type.bool;
    unicode: type.int;
}
export interface VisualShaderNodeFloatParameter extends VisualShaderNodeParameter {
    default_value: type.float;
    default_value_enabled: type.bool;
    hint: type.int;
    max: type.float;
    min: type.float;
    step: type.float;
}
export declare namespace VisualShaderNodeFloatParameter {
    const enum Hint {
        HINT_NONE = 0,
        HINT_RANGE = 1,
        HINT_RANGE_STEP = 2,
        HINT_MAX = 3
    }
}
export interface ORMMaterial3D extends BaseMaterial3D {
}
export interface RenderingServer extends Object {
    render_loop_enabled: type.bool;
}
export declare namespace RenderingServer {
    const NO_INDEX_ARRAY = -1;
    const ARRAY_WEIGHTS_SIZE = 4;
    const CANVAS_ITEM_Z_MIN = -4096;
    const CANVAS_ITEM_Z_MAX = 4096;
    const MAX_GLOW_LEVELS = 7;
    const MAX_CURSORS = 8;
    const MAX_2D_DIRECTIONAL_LIGHTS = 8;
    const MAX_MESH_SURFACES = 256;
    const MATERIAL_RENDER_PRIORITY_MIN = -128;
    const MATERIAL_RENDER_PRIORITY_MAX = 127;
    const ARRAY_CUSTOM_COUNT = 4;
    const PARTICLES_EMIT_FLAG_POSITION = 1;
    const PARTICLES_EMIT_FLAG_ROTATION_SCALE = 2;
    const PARTICLES_EMIT_FLAG_VELOCITY = 4;
    const PARTICLES_EMIT_FLAG_COLOR = 8;
    const PARTICLES_EMIT_FLAG_CUSTOM = 16;
    const enum TextureType {
        TEXTURE_TYPE_2D = 0,
        TEXTURE_TYPE_LAYERED = 1,
        TEXTURE_TYPE_3D = 2
    }
    const enum TextureLayeredType {
        TEXTURE_LAYERED_2D_ARRAY = 0,
        TEXTURE_LAYERED_CUBEMAP = 1,
        TEXTURE_LAYERED_CUBEMAP_ARRAY = 2
    }
    const enum CubeMapLayer {
        CUBEMAP_LAYER_LEFT = 0,
        CUBEMAP_LAYER_RIGHT = 1,
        CUBEMAP_LAYER_BOTTOM = 2,
        CUBEMAP_LAYER_TOP = 3,
        CUBEMAP_LAYER_FRONT = 4,
        CUBEMAP_LAYER_BACK = 5
    }
    const enum ShaderMode {
        SHADER_SPATIAL = 0,
        SHADER_CANVAS_ITEM = 1,
        SHADER_PARTICLES = 2,
        SHADER_SKY = 3,
        SHADER_FOG = 4,
        SHADER_MAX = 5
    }
    const enum ArrayType {
        ARRAY_VERTEX = 0,
        ARRAY_NORMAL = 1,
        ARRAY_TANGENT = 2,
        ARRAY_COLOR = 3,
        ARRAY_TEX_UV = 4,
        ARRAY_TEX_UV2 = 5,
        ARRAY_CUSTOM0 = 6,
        ARRAY_CUSTOM1 = 7,
        ARRAY_CUSTOM2 = 8,
        ARRAY_CUSTOM3 = 9,
        ARRAY_BONES = 10,
        ARRAY_WEIGHTS = 11,
        ARRAY_INDEX = 12,
        ARRAY_MAX = 13
    }
    const enum ArrayCustomFormat {
        ARRAY_CUSTOM_RGBA8_UNORM = 0,
        ARRAY_CUSTOM_RGBA8_SNORM = 1,
        ARRAY_CUSTOM_RG_HALF = 2,
        ARRAY_CUSTOM_RGBA_HALF = 3,
        ARRAY_CUSTOM_R_FLOAT = 4,
        ARRAY_CUSTOM_RG_FLOAT = 5,
        ARRAY_CUSTOM_RGB_FLOAT = 6,
        ARRAY_CUSTOM_RGBA_FLOAT = 7,
        ARRAY_CUSTOM_MAX = 8
    }
    const enum ArrayFormat {
        ARRAY_FORMAT_VERTEX = 1,
        ARRAY_FORMAT_NORMAL = 2,
        ARRAY_FORMAT_TANGENT = 4,
        ARRAY_FORMAT_COLOR = 8,
        ARRAY_FORMAT_TEX_UV = 16,
        ARRAY_FORMAT_TEX_UV2 = 32,
        ARRAY_FORMAT_CUSTOM0 = 64,
        ARRAY_FORMAT_CUSTOM1 = 128,
        ARRAY_FORMAT_CUSTOM2 = 256,
        ARRAY_FORMAT_CUSTOM3 = 512,
        ARRAY_FORMAT_BONES = 1024,
        ARRAY_FORMAT_WEIGHTS = 2048,
        ARRAY_FORMAT_INDEX = 4096,
        ARRAY_FORMAT_BLEND_SHAPE_MASK = 7,
        ARRAY_FORMAT_CUSTOM_BASE = 13,
        ARRAY_FORMAT_CUSTOM_BITS = 3,
        ARRAY_FORMAT_CUSTOM0_SHIFT = 13,
        ARRAY_FORMAT_CUSTOM1_SHIFT = 16,
        ARRAY_FORMAT_CUSTOM2_SHIFT = 19,
        ARRAY_FORMAT_CUSTOM3_SHIFT = 22,
        ARRAY_FORMAT_CUSTOM_MASK = 7,
        ARRAY_COMPRESS_FLAGS_BASE = 25,
        ARRAY_FLAG_USE_2D_VERTICES = 33554432,
        ARRAY_FLAG_USE_DYNAMIC_UPDATE = 67108864,
        ARRAY_FLAG_USE_8_BONE_WEIGHTS = 134217728,
        ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY = 268435456,
        ARRAY_FLAG_COMPRESS_ATTRIBUTES = 536870912,
        ARRAY_FLAG_FORMAT_VERSION_BASE = 35,
        ARRAY_FLAG_FORMAT_VERSION_SHIFT = 35,
        ARRAY_FLAG_FORMAT_VERSION_1 = 0,
        ARRAY_FLAG_FORMAT_VERSION_2 = 34359738368,
        ARRAY_FLAG_FORMAT_CURRENT_VERSION = 34359738368,
        ARRAY_FLAG_FORMAT_VERSION_MASK = 255
    }
    const enum PrimitiveType {
        PRIMITIVE_POINTS = 0,
        PRIMITIVE_LINES = 1,
        PRIMITIVE_LINE_STRIP = 2,
        PRIMITIVE_TRIANGLES = 3,
        PRIMITIVE_TRIANGLE_STRIP = 4,
        PRIMITIVE_MAX = 5
    }
    const enum BlendShapeMode {
        BLEND_SHAPE_MODE_NORMALIZED = 0,
        BLEND_SHAPE_MODE_RELATIVE = 1
    }
    const enum MultimeshTransformFormat {
        MULTIMESH_TRANSFORM_2D = 0,
        MULTIMESH_TRANSFORM_3D = 1
    }
    const enum MultimeshPhysicsInterpolationQuality {
        MULTIMESH_INTERP_QUALITY_FAST = 0,
        MULTIMESH_INTERP_QUALITY_HIGH = 1
    }
    const enum LightProjectorFilter {
        LIGHT_PROJECTOR_FILTER_NEAREST = 0,
        LIGHT_PROJECTOR_FILTER_LINEAR = 1,
        LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS = 2,
        LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS = 3,
        LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS_ANISOTROPIC = 4,
        LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS_ANISOTROPIC = 5
    }
    const enum LightType {
        LIGHT_DIRECTIONAL = 0,
        LIGHT_OMNI = 1,
        LIGHT_SPOT = 2
    }
    const enum LightParam {
        LIGHT_PARAM_ENERGY = 0,
        LIGHT_PARAM_INDIRECT_ENERGY = 1,
        LIGHT_PARAM_VOLUMETRIC_FOG_ENERGY = 2,
        LIGHT_PARAM_SPECULAR = 3,
        LIGHT_PARAM_RANGE = 4,
        LIGHT_PARAM_SIZE = 5,
        LIGHT_PARAM_ATTENUATION = 6,
        LIGHT_PARAM_SPOT_ANGLE = 7,
        LIGHT_PARAM_SPOT_ATTENUATION = 8,
        LIGHT_PARAM_SHADOW_MAX_DISTANCE = 9,
        LIGHT_PARAM_SHADOW_SPLIT_1_OFFSET = 10,
        LIGHT_PARAM_SHADOW_SPLIT_2_OFFSET = 11,
        LIGHT_PARAM_SHADOW_SPLIT_3_OFFSET = 12,
        LIGHT_PARAM_SHADOW_FADE_START = 13,
        LIGHT_PARAM_SHADOW_NORMAL_BIAS = 14,
        LIGHT_PARAM_SHADOW_BIAS = 15,
        LIGHT_PARAM_SHADOW_PANCAKE_SIZE = 16,
        LIGHT_PARAM_SHADOW_OPACITY = 17,
        LIGHT_PARAM_SHADOW_BLUR = 18,
        LIGHT_PARAM_TRANSMITTANCE_BIAS = 19,
        LIGHT_PARAM_INTENSITY = 20,
        LIGHT_PARAM_MAX = 21
    }
    const enum LightBakeMode {
        LIGHT_BAKE_DISABLED = 0,
        LIGHT_BAKE_STATIC = 1,
        LIGHT_BAKE_DYNAMIC = 2
    }
    const enum LightOmniShadowMode {
        LIGHT_OMNI_SHADOW_DUAL_PARABOLOID = 0,
        LIGHT_OMNI_SHADOW_CUBE = 1
    }
    const enum LightDirectionalShadowMode {
        LIGHT_DIRECTIONAL_SHADOW_ORTHOGONAL = 0,
        LIGHT_DIRECTIONAL_SHADOW_PARALLEL_2_SPLITS = 1,
        LIGHT_DIRECTIONAL_SHADOW_PARALLEL_4_SPLITS = 2
    }
    const enum LightDirectionalSkyMode {
        LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_AND_SKY = 0,
        LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_ONLY = 1,
        LIGHT_DIRECTIONAL_SKY_MODE_SKY_ONLY = 2
    }
    const enum ShadowQuality {
        SHADOW_QUALITY_HARD = 0,
        SHADOW_QUALITY_SOFT_VERY_LOW = 1,
        SHADOW_QUALITY_SOFT_LOW = 2,
        SHADOW_QUALITY_SOFT_MEDIUM = 3,
        SHADOW_QUALITY_SOFT_HIGH = 4,
        SHADOW_QUALITY_SOFT_ULTRA = 5,
        SHADOW_QUALITY_MAX = 6
    }
    const enum ReflectionProbeUpdateMode {
        REFLECTION_PROBE_UPDATE_ONCE = 0,
        REFLECTION_PROBE_UPDATE_ALWAYS = 1
    }
    const enum ReflectionProbeAmbientMode {
        REFLECTION_PROBE_AMBIENT_DISABLED = 0,
        REFLECTION_PROBE_AMBIENT_ENVIRONMENT = 1,
        REFLECTION_PROBE_AMBIENT_COLOR = 2
    }
    const enum DecalTexture {
        DECAL_TEXTURE_ALBEDO = 0,
        DECAL_TEXTURE_NORMAL = 1,
        DECAL_TEXTURE_ORM = 2,
        DECAL_TEXTURE_EMISSION = 3,
        DECAL_TEXTURE_MAX = 4
    }
    const enum DecalFilter {
        DECAL_FILTER_NEAREST = 0,
        DECAL_FILTER_LINEAR = 1,
        DECAL_FILTER_NEAREST_MIPMAPS = 2,
        DECAL_FILTER_LINEAR_MIPMAPS = 3,
        DECAL_FILTER_NEAREST_MIPMAPS_ANISOTROPIC = 4,
        DECAL_FILTER_LINEAR_MIPMAPS_ANISOTROPIC = 5
    }
    const enum VoxelGIQuality {
        VOXEL_GI_QUALITY_LOW = 0,
        VOXEL_GI_QUALITY_HIGH = 1
    }
    const enum ParticlesMode {
        PARTICLES_MODE_2D = 0,
        PARTICLES_MODE_3D = 1
    }
    const enum ParticlesTransformAlign {
        PARTICLES_TRANSFORM_ALIGN_DISABLED = 0,
        PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD = 1,
        PARTICLES_TRANSFORM_ALIGN_Y_TO_VELOCITY = 2,
        PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY = 3
    }
    const enum ParticlesDrawOrder {
        PARTICLES_DRAW_ORDER_INDEX = 0,
        PARTICLES_DRAW_ORDER_LIFETIME = 1,
        PARTICLES_DRAW_ORDER_REVERSE_LIFETIME = 2,
        PARTICLES_DRAW_ORDER_VIEW_DEPTH = 3
    }
    const enum ParticlesCollisionType {
        PARTICLES_COLLISION_TYPE_SPHERE_ATTRACT = 0,
        PARTICLES_COLLISION_TYPE_BOX_ATTRACT = 1,
        PARTICLES_COLLISION_TYPE_VECTOR_FIELD_ATTRACT = 2,
        PARTICLES_COLLISION_TYPE_SPHERE_COLLIDE = 3,
        PARTICLES_COLLISION_TYPE_BOX_COLLIDE = 4,
        PARTICLES_COLLISION_TYPE_SDF_COLLIDE = 5,
        PARTICLES_COLLISION_TYPE_HEIGHTFIELD_COLLIDE = 6
    }
    const enum ParticlesCollisionHeightfieldResolution {
        PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_256 = 0,
        PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_512 = 1,
        PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_1024 = 2,
        PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_2048 = 3,
        PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_4096 = 4,
        PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_8192 = 5,
        PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_MAX = 6
    }
    const enum FogVolumeShape {
        FOG_VOLUME_SHAPE_ELLIPSOID = 0,
        FOG_VOLUME_SHAPE_CONE = 1,
        FOG_VOLUME_SHAPE_CYLINDER = 2,
        FOG_VOLUME_SHAPE_BOX = 3,
        FOG_VOLUME_SHAPE_WORLD = 4,
        FOG_VOLUME_SHAPE_MAX = 5
    }
    const enum ViewportScaling3DMode {
        VIEWPORT_SCALING_3D_MODE_BILINEAR = 0,
        VIEWPORT_SCALING_3D_MODE_FSR = 1,
        VIEWPORT_SCALING_3D_MODE_FSR2 = 2,
        VIEWPORT_SCALING_3D_MODE_MAX = 3
    }
    const enum ViewportUpdateMode {
        VIEWPORT_UPDATE_DISABLED = 0,
        VIEWPORT_UPDATE_ONCE = 1,
        VIEWPORT_UPDATE_WHEN_VISIBLE = 2,
        VIEWPORT_UPDATE_WHEN_PARENT_VISIBLE = 3,
        VIEWPORT_UPDATE_ALWAYS = 4
    }
    const enum ViewportClearMode {
        VIEWPORT_CLEAR_ALWAYS = 0,
        VIEWPORT_CLEAR_NEVER = 1,
        VIEWPORT_CLEAR_ONLY_NEXT_FRAME = 2
    }
    const enum ViewportEnvironmentMode {
        VIEWPORT_ENVIRONMENT_DISABLED = 0,
        VIEWPORT_ENVIRONMENT_ENABLED = 1,
        VIEWPORT_ENVIRONMENT_INHERIT = 2,
        VIEWPORT_ENVIRONMENT_MAX = 3
    }
    const enum ViewportSDFOversize {
        VIEWPORT_SDF_OVERSIZE_100_PERCENT = 0,
        VIEWPORT_SDF_OVERSIZE_120_PERCENT = 1,
        VIEWPORT_SDF_OVERSIZE_150_PERCENT = 2,
        VIEWPORT_SDF_OVERSIZE_200_PERCENT = 3,
        VIEWPORT_SDF_OVERSIZE_MAX = 4
    }
    const enum ViewportSDFScale {
        VIEWPORT_SDF_SCALE_100_PERCENT = 0,
        VIEWPORT_SDF_SCALE_50_PERCENT = 1,
        VIEWPORT_SDF_SCALE_25_PERCENT = 2,
        VIEWPORT_SDF_SCALE_MAX = 3
    }
    const enum ViewportMSAA {
        VIEWPORT_MSAA_DISABLED = 0,
        VIEWPORT_MSAA_2X = 1,
        VIEWPORT_MSAA_4X = 2,
        VIEWPORT_MSAA_8X = 3,
        VIEWPORT_MSAA_MAX = 4
    }
    const enum ViewportScreenSpaceAA {
        VIEWPORT_SCREEN_SPACE_AA_DISABLED = 0,
        VIEWPORT_SCREEN_SPACE_AA_FXAA = 1,
        VIEWPORT_SCREEN_SPACE_AA_MAX = 2
    }
    const enum ViewportOcclusionCullingBuildQuality {
        VIEWPORT_OCCLUSION_BUILD_QUALITY_LOW = 0,
        VIEWPORT_OCCLUSION_BUILD_QUALITY_MEDIUM = 1,
        VIEWPORT_OCCLUSION_BUILD_QUALITY_HIGH = 2
    }
    const enum ViewportRenderInfo {
        VIEWPORT_RENDER_INFO_OBJECTS_IN_FRAME = 0,
        VIEWPORT_RENDER_INFO_PRIMITIVES_IN_FRAME = 1,
        VIEWPORT_RENDER_INFO_DRAW_CALLS_IN_FRAME = 2,
        VIEWPORT_RENDER_INFO_MAX = 3
    }
    const enum ViewportRenderInfoType {
        VIEWPORT_RENDER_INFO_TYPE_VISIBLE = 0,
        VIEWPORT_RENDER_INFO_TYPE_SHADOW = 1,
        VIEWPORT_RENDER_INFO_TYPE_CANVAS = 2,
        VIEWPORT_RENDER_INFO_TYPE_MAX = 3
    }
    const enum ViewportDebugDraw {
        VIEWPORT_DEBUG_DRAW_DISABLED = 0,
        VIEWPORT_DEBUG_DRAW_UNSHADED = 1,
        VIEWPORT_DEBUG_DRAW_LIGHTING = 2,
        VIEWPORT_DEBUG_DRAW_OVERDRAW = 3,
        VIEWPORT_DEBUG_DRAW_WIREFRAME = 4,
        VIEWPORT_DEBUG_DRAW_NORMAL_BUFFER = 5,
        VIEWPORT_DEBUG_DRAW_VOXEL_GI_ALBEDO = 6,
        VIEWPORT_DEBUG_DRAW_VOXEL_GI_LIGHTING = 7,
        VIEWPORT_DEBUG_DRAW_VOXEL_GI_EMISSION = 8,
        VIEWPORT_DEBUG_DRAW_SHADOW_ATLAS = 9,
        VIEWPORT_DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS = 10,
        VIEWPORT_DEBUG_DRAW_SCENE_LUMINANCE = 11,
        VIEWPORT_DEBUG_DRAW_SSAO = 12,
        VIEWPORT_DEBUG_DRAW_SSIL = 13,
        VIEWPORT_DEBUG_DRAW_PSSM_SPLITS = 14,
        VIEWPORT_DEBUG_DRAW_DECAL_ATLAS = 15,
        VIEWPORT_DEBUG_DRAW_SDFGI = 16,
        VIEWPORT_DEBUG_DRAW_SDFGI_PROBES = 17,
        VIEWPORT_DEBUG_DRAW_GI_BUFFER = 18,
        VIEWPORT_DEBUG_DRAW_DISABLE_LOD = 19,
        VIEWPORT_DEBUG_DRAW_CLUSTER_OMNI_LIGHTS = 20,
        VIEWPORT_DEBUG_DRAW_CLUSTER_SPOT_LIGHTS = 21,
        VIEWPORT_DEBUG_DRAW_CLUSTER_DECALS = 22,
        VIEWPORT_DEBUG_DRAW_CLUSTER_REFLECTION_PROBES = 23,
        VIEWPORT_DEBUG_DRAW_OCCLUDERS = 24,
        VIEWPORT_DEBUG_DRAW_MOTION_VECTORS = 25,
        VIEWPORT_DEBUG_DRAW_INTERNAL_BUFFER = 26
    }
    const enum ViewportVRSMode {
        VIEWPORT_VRS_DISABLED = 0,
        VIEWPORT_VRS_TEXTURE = 1,
        VIEWPORT_VRS_XR = 2,
        VIEWPORT_VRS_MAX = 3
    }
    const enum ViewportVRSUpdateMode {
        VIEWPORT_VRS_UPDATE_DISABLED = 0,
        VIEWPORT_VRS_UPDATE_ONCE = 1,
        VIEWPORT_VRS_UPDATE_ALWAYS = 2,
        VIEWPORT_VRS_UPDATE_MAX = 3
    }
    const enum SkyMode {
        SKY_MODE_AUTOMATIC = 0,
        SKY_MODE_QUALITY = 1,
        SKY_MODE_INCREMENTAL = 2,
        SKY_MODE_REALTIME = 3
    }
    const enum CompositorEffectFlags {
        COMPOSITOR_EFFECT_FLAG_ACCESS_RESOLVED_COLOR = 1,
        COMPOSITOR_EFFECT_FLAG_ACCESS_RESOLVED_DEPTH = 2,
        COMPOSITOR_EFFECT_FLAG_NEEDS_MOTION_VECTORS = 4,
        COMPOSITOR_EFFECT_FLAG_NEEDS_ROUGHNESS = 8,
        COMPOSITOR_EFFECT_FLAG_NEEDS_SEPARATE_SPECULAR = 16
    }
    const enum CompositorEffectCallbackType {
        COMPOSITOR_EFFECT_CALLBACK_TYPE_PRE_OPAQUE = 0,
        COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_OPAQUE = 1,
        COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_SKY = 2,
        COMPOSITOR_EFFECT_CALLBACK_TYPE_PRE_TRANSPARENT = 3,
        COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_TRANSPARENT = 4,
        COMPOSITOR_EFFECT_CALLBACK_TYPE_ANY = -1
    }
    const enum EnvironmentBG {
        ENV_BG_CLEAR_COLOR = 0,
        ENV_BG_COLOR = 1,
        ENV_BG_SKY = 2,
        ENV_BG_CANVAS = 3,
        ENV_BG_KEEP = 4,
        ENV_BG_CAMERA_FEED = 5,
        ENV_BG_MAX = 6
    }
    const enum EnvironmentAmbientSource {
        ENV_AMBIENT_SOURCE_BG = 0,
        ENV_AMBIENT_SOURCE_DISABLED = 1,
        ENV_AMBIENT_SOURCE_COLOR = 2,
        ENV_AMBIENT_SOURCE_SKY = 3
    }
    const enum EnvironmentReflectionSource {
        ENV_REFLECTION_SOURCE_BG = 0,
        ENV_REFLECTION_SOURCE_DISABLED = 1,
        ENV_REFLECTION_SOURCE_SKY = 2
    }
    const enum EnvironmentGlowBlendMode {
        ENV_GLOW_BLEND_MODE_ADDITIVE = 0,
        ENV_GLOW_BLEND_MODE_SCREEN = 1,
        ENV_GLOW_BLEND_MODE_SOFTLIGHT = 2,
        ENV_GLOW_BLEND_MODE_REPLACE = 3,
        ENV_GLOW_BLEND_MODE_MIX = 4
    }
    const enum EnvironmentFogMode {
        ENV_FOG_MODE_EXPONENTIAL = 0,
        ENV_FOG_MODE_DEPTH = 1
    }
    const enum EnvironmentToneMapper {
        ENV_TONE_MAPPER_LINEAR = 0,
        ENV_TONE_MAPPER_REINHARD = 1,
        ENV_TONE_MAPPER_FILMIC = 2,
        ENV_TONE_MAPPER_ACES = 3
    }
    const enum EnvironmentSSRRoughnessQuality {
        ENV_SSR_ROUGHNESS_QUALITY_DISABLED = 0,
        ENV_SSR_ROUGHNESS_QUALITY_LOW = 1,
        ENV_SSR_ROUGHNESS_QUALITY_MEDIUM = 2,
        ENV_SSR_ROUGHNESS_QUALITY_HIGH = 3
    }
    const enum EnvironmentSSAOQuality {
        ENV_SSAO_QUALITY_VERY_LOW = 0,
        ENV_SSAO_QUALITY_LOW = 1,
        ENV_SSAO_QUALITY_MEDIUM = 2,
        ENV_SSAO_QUALITY_HIGH = 3,
        ENV_SSAO_QUALITY_ULTRA = 4
    }
    const enum EnvironmentSSILQuality {
        ENV_SSIL_QUALITY_VERY_LOW = 0,
        ENV_SSIL_QUALITY_LOW = 1,
        ENV_SSIL_QUALITY_MEDIUM = 2,
        ENV_SSIL_QUALITY_HIGH = 3,
        ENV_SSIL_QUALITY_ULTRA = 4
    }
    const enum EnvironmentSDFGIYScale {
        ENV_SDFGI_Y_SCALE_50_PERCENT = 0,
        ENV_SDFGI_Y_SCALE_75_PERCENT = 1,
        ENV_SDFGI_Y_SCALE_100_PERCENT = 2
    }
    const enum EnvironmentSDFGIRayCount {
        ENV_SDFGI_RAY_COUNT_4 = 0,
        ENV_SDFGI_RAY_COUNT_8 = 1,
        ENV_SDFGI_RAY_COUNT_16 = 2,
        ENV_SDFGI_RAY_COUNT_32 = 3,
        ENV_SDFGI_RAY_COUNT_64 = 4,
        ENV_SDFGI_RAY_COUNT_96 = 5,
        ENV_SDFGI_RAY_COUNT_128 = 6,
        ENV_SDFGI_RAY_COUNT_MAX = 7
    }
    const enum EnvironmentSDFGIFramesToConverge {
        ENV_SDFGI_CONVERGE_IN_5_FRAMES = 0,
        ENV_SDFGI_CONVERGE_IN_10_FRAMES = 1,
        ENV_SDFGI_CONVERGE_IN_15_FRAMES = 2,
        ENV_SDFGI_CONVERGE_IN_20_FRAMES = 3,
        ENV_SDFGI_CONVERGE_IN_25_FRAMES = 4,
        ENV_SDFGI_CONVERGE_IN_30_FRAMES = 5,
        ENV_SDFGI_CONVERGE_MAX = 6
    }
    const enum EnvironmentSDFGIFramesToUpdateLight {
        ENV_SDFGI_UPDATE_LIGHT_IN_1_FRAME = 0,
        ENV_SDFGI_UPDATE_LIGHT_IN_2_FRAMES = 1,
        ENV_SDFGI_UPDATE_LIGHT_IN_4_FRAMES = 2,
        ENV_SDFGI_UPDATE_LIGHT_IN_8_FRAMES = 3,
        ENV_SDFGI_UPDATE_LIGHT_IN_16_FRAMES = 4,
        ENV_SDFGI_UPDATE_LIGHT_MAX = 5
    }
    const enum SubSurfaceScatteringQuality {
        SUB_SURFACE_SCATTERING_QUALITY_DISABLED = 0,
        SUB_SURFACE_SCATTERING_QUALITY_LOW = 1,
        SUB_SURFACE_SCATTERING_QUALITY_MEDIUM = 2,
        SUB_SURFACE_SCATTERING_QUALITY_HIGH = 3
    }
    const enum DOFBokehShape {
        DOF_BOKEH_BOX = 0,
        DOF_BOKEH_HEXAGON = 1,
        DOF_BOKEH_CIRCLE = 2
    }
    const enum DOFBlurQuality {
        DOF_BLUR_QUALITY_VERY_LOW = 0,
        DOF_BLUR_QUALITY_LOW = 1,
        DOF_BLUR_QUALITY_MEDIUM = 2,
        DOF_BLUR_QUALITY_HIGH = 3
    }
    const enum InstanceType {
        INSTANCE_NONE = 0,
        INSTANCE_MESH = 1,
        INSTANCE_MULTIMESH = 2,
        INSTANCE_PARTICLES = 3,
        INSTANCE_PARTICLES_COLLISION = 4,
        INSTANCE_LIGHT = 5,
        INSTANCE_REFLECTION_PROBE = 6,
        INSTANCE_DECAL = 7,
        INSTANCE_VOXEL_GI = 8,
        INSTANCE_LIGHTMAP = 9,
        INSTANCE_OCCLUDER = 10,
        INSTANCE_VISIBLITY_NOTIFIER = 11,
        INSTANCE_FOG_VOLUME = 12,
        INSTANCE_MAX = 13,
        INSTANCE_GEOMETRY_MASK = 14
    }
    const enum InstanceFlags {
        INSTANCE_FLAG_USE_BAKED_LIGHT = 0,
        INSTANCE_FLAG_USE_DYNAMIC_GI = 1,
        INSTANCE_FLAG_DRAW_NEXT_FRAME_IF_VISIBLE = 2,
        INSTANCE_FLAG_IGNORE_OCCLUSION_CULLING = 3,
        INSTANCE_FLAG_MAX = 4
    }
    const enum ShadowCastingSetting {
        SHADOW_CASTING_SETTING_OFF = 0,
        SHADOW_CASTING_SETTING_ON = 1,
        SHADOW_CASTING_SETTING_DOUBLE_SIDED = 2,
        SHADOW_CASTING_SETTING_SHADOWS_ONLY = 3
    }
    const enum VisibilityRangeFadeMode {
        VISIBILITY_RANGE_FADE_DISABLED = 0,
        VISIBILITY_RANGE_FADE_SELF = 1,
        VISIBILITY_RANGE_FADE_DEPENDENCIES = 2
    }
    const enum BakeChannels {
        BAKE_CHANNEL_ALBEDO_ALPHA = 0,
        BAKE_CHANNEL_NORMAL = 1,
        BAKE_CHANNEL_ORM = 2,
        BAKE_CHANNEL_EMISSION = 3
    }
    const enum CanvasTextureChannel {
        CANVAS_TEXTURE_CHANNEL_DIFFUSE = 0,
        CANVAS_TEXTURE_CHANNEL_NORMAL = 1,
        CANVAS_TEXTURE_CHANNEL_SPECULAR = 2
    }
    const enum NinePatchAxisMode {
        NINE_PATCH_STRETCH = 0,
        NINE_PATCH_TILE = 1,
        NINE_PATCH_TILE_FIT = 2
    }
    const enum CanvasItemTextureFilter {
        CANVAS_ITEM_TEXTURE_FILTER_DEFAULT = 0,
        CANVAS_ITEM_TEXTURE_FILTER_NEAREST = 1,
        CANVAS_ITEM_TEXTURE_FILTER_LINEAR = 2,
        CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 3,
        CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 4,
        CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC = 5,
        CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC = 6,
        CANVAS_ITEM_TEXTURE_FILTER_MAX = 7
    }
    const enum CanvasItemTextureRepeat {
        CANVAS_ITEM_TEXTURE_REPEAT_DEFAULT = 0,
        CANVAS_ITEM_TEXTURE_REPEAT_DISABLED = 1,
        CANVAS_ITEM_TEXTURE_REPEAT_ENABLED = 2,
        CANVAS_ITEM_TEXTURE_REPEAT_MIRROR = 3,
        CANVAS_ITEM_TEXTURE_REPEAT_MAX = 4
    }
    const enum CanvasGroupMode {
        CANVAS_GROUP_MODE_DISABLED = 0,
        CANVAS_GROUP_MODE_CLIP_ONLY = 1,
        CANVAS_GROUP_MODE_CLIP_AND_DRAW = 2,
        CANVAS_GROUP_MODE_TRANSPARENT = 3
    }
    const enum CanvasLightMode {
        CANVAS_LIGHT_MODE_POINT = 0,
        CANVAS_LIGHT_MODE_DIRECTIONAL = 1
    }
    const enum CanvasLightBlendMode {
        CANVAS_LIGHT_BLEND_MODE_ADD = 0,
        CANVAS_LIGHT_BLEND_MODE_SUB = 1,
        CANVAS_LIGHT_BLEND_MODE_MIX = 2
    }
    const enum CanvasLightShadowFilter {
        CANVAS_LIGHT_FILTER_NONE = 0,
        CANVAS_LIGHT_FILTER_PCF5 = 1,
        CANVAS_LIGHT_FILTER_PCF13 = 2,
        CANVAS_LIGHT_FILTER_MAX = 3
    }
    const enum CanvasOccluderPolygonCullMode {
        CANVAS_OCCLUDER_POLYGON_CULL_DISABLED = 0,
        CANVAS_OCCLUDER_POLYGON_CULL_CLOCKWISE = 1,
        CANVAS_OCCLUDER_POLYGON_CULL_COUNTER_CLOCKWISE = 2
    }
    const enum GlobalShaderParameterType {
        GLOBAL_VAR_TYPE_BOOL = 0,
        GLOBAL_VAR_TYPE_BVEC2 = 1,
        GLOBAL_VAR_TYPE_BVEC3 = 2,
        GLOBAL_VAR_TYPE_BVEC4 = 3,
        GLOBAL_VAR_TYPE_INT = 4,
        GLOBAL_VAR_TYPE_IVEC2 = 5,
        GLOBAL_VAR_TYPE_IVEC3 = 6,
        GLOBAL_VAR_TYPE_IVEC4 = 7,
        GLOBAL_VAR_TYPE_RECT2I = 8,
        GLOBAL_VAR_TYPE_UINT = 9,
        GLOBAL_VAR_TYPE_UVEC2 = 10,
        GLOBAL_VAR_TYPE_UVEC3 = 11,
        GLOBAL_VAR_TYPE_UVEC4 = 12,
        GLOBAL_VAR_TYPE_FLOAT = 13,
        GLOBAL_VAR_TYPE_VEC2 = 14,
        GLOBAL_VAR_TYPE_VEC3 = 15,
        GLOBAL_VAR_TYPE_VEC4 = 16,
        GLOBAL_VAR_TYPE_COLOR = 17,
        GLOBAL_VAR_TYPE_RECT2 = 18,
        GLOBAL_VAR_TYPE_MAT2 = 19,
        GLOBAL_VAR_TYPE_MAT3 = 20,
        GLOBAL_VAR_TYPE_MAT4 = 21,
        GLOBAL_VAR_TYPE_TRANSFORM_2D = 22,
        GLOBAL_VAR_TYPE_TRANSFORM = 23,
        GLOBAL_VAR_TYPE_SAMPLER2D = 24,
        GLOBAL_VAR_TYPE_SAMPLER2DARRAY = 25,
        GLOBAL_VAR_TYPE_SAMPLER3D = 26,
        GLOBAL_VAR_TYPE_SAMPLERCUBE = 27,
        GLOBAL_VAR_TYPE_SAMPLEREXT = 28,
        GLOBAL_VAR_TYPE_MAX = 29
    }
    const enum RenderingInfo {
        RENDERING_INFO_TOTAL_OBJECTS_IN_FRAME = 0,
        RENDERING_INFO_TOTAL_PRIMITIVES_IN_FRAME = 1,
        RENDERING_INFO_TOTAL_DRAW_CALLS_IN_FRAME = 2,
        RENDERING_INFO_TEXTURE_MEM_USED = 3,
        RENDERING_INFO_BUFFER_MEM_USED = 4,
        RENDERING_INFO_VIDEO_MEM_USED = 5,
        RENDERING_INFO_PIPELINE_COMPILATIONS_CANVAS = 6,
        RENDERING_INFO_PIPELINE_COMPILATIONS_MESH = 7,
        RENDERING_INFO_PIPELINE_COMPILATIONS_SURFACE = 8,
        RENDERING_INFO_PIPELINE_COMPILATIONS_DRAW = 9,
        RENDERING_INFO_PIPELINE_COMPILATIONS_SPECIALIZATION = 10
    }
    const enum PipelineSource {
        PIPELINE_SOURCE_CANVAS = 0,
        PIPELINE_SOURCE_MESH = 1,
        PIPELINE_SOURCE_SURFACE = 2,
        PIPELINE_SOURCE_DRAW = 3,
        PIPELINE_SOURCE_SPECIALIZATION = 4,
        PIPELINE_SOURCE_MAX = 5
    }
    const enum Features {
        FEATURE_SHADERS = 0,
        FEATURE_MULTITHREADED = 1
    }
}
export interface ProgressBar extends Range {
    editor_preview_indeterminate: type.bool;
    fill_mode: type.int;
    indeterminate: type.bool;
    show_percentage: type.bool;
    font_color: type.Color;
    font_outline_color: type.Color;
    outline_size: type.int;
    font: {
        type: "Font";
        properties: Font;
    };
    font_size: type.int;
    background: {
        type: "StyleBox";
        properties: StyleBox;
    };
    fill: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export declare namespace ProgressBar {
    const enum FillMode {
        FILL_BEGIN_TO_END = 0,
        FILL_END_TO_BEGIN = 1,
        FILL_TOP_TO_BOTTOM = 2,
        FILL_BOTTOM_TO_TOP = 3
    }
}
export interface RichTextLabel extends Control {
    autowrap_mode: type.int;
    bbcode_enabled: type.bool;
    clip_contents: type.bool;
    context_menu_enabled: type.bool;
    custom_effects: type.Array;
    deselect_on_focus_loss_enabled: type.bool;
    drag_and_drop_selection_enabled: type.bool;
    fit_content: type.bool;
    hint_underlined: type.bool;
    horizontal_alignment: type.int;
    justification_flags: type.int;
    language: type.String;
    meta_underlined: type.bool;
    progress_bar_delay: type.int;
    scroll_active: type.bool;
    scroll_following: type.bool;
    selection_enabled: type.bool;
    shortcut_keys_enabled: type.bool;
    structured_text_bidi_override: type.int;
    structured_text_bidi_override_options: type.Array;
    tab_size: type.int;
    tab_stops: type.PackedFloat32Array;
    text: type.String;
    text_direction: type.int;
    threaded: type.bool;
    visible_characters: type.int;
    visible_characters_behavior: type.int;
    visible_ratio: type.float;
    default_color: type.Color;
    font_outline_color: type.Color;
    font_selected_color: type.Color;
    font_shadow_color: type.Color;
    selection_color: type.Color;
    table_border: type.Color;
    table_even_row_bg: type.Color;
    table_odd_row_bg: type.Color;
    line_separation: type.int;
    outline_size: type.int;
    shadow_offset_x: type.int;
    shadow_offset_y: type.int;
    shadow_outline_size: type.int;
    table_h_separation: type.int;
    table_v_separation: type.int;
    text_highlight_h_padding: type.int;
    text_highlight_v_padding: type.int;
    bold_font: {
        type: "Font";
        properties: Font;
    };
    bold_italics_font: {
        type: "Font";
        properties: Font;
    };
    italics_font: {
        type: "Font";
        properties: Font;
    };
    mono_font: {
        type: "Font";
        properties: Font;
    };
    normal_font: {
        type: "Font";
        properties: Font;
    };
    bold_font_size: type.int;
    bold_italics_font_size: type.int;
    italics_font_size: type.int;
    mono_font_size: type.int;
    normal_font_size: type.int;
    focus: {
        type: "StyleBox";
        properties: StyleBox;
    };
    normal: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export declare namespace RichTextLabel {
    const enum ListType {
        LIST_NUMBERS = 0,
        LIST_LETTERS = 1,
        LIST_ROMAN = 2,
        LIST_DOTS = 3
    }
    const enum MenuItems {
        MENU_COPY = 0,
        MENU_SELECT_ALL = 1,
        MENU_MAX = 2
    }
    const enum MetaUnderline {
        META_UNDERLINE_NEVER = 0,
        META_UNDERLINE_ALWAYS = 1,
        META_UNDERLINE_ON_HOVER = 2
    }
    const enum ImageUpdateMask {
        UPDATE_TEXTURE = 1,
        UPDATE_SIZE = 2,
        UPDATE_COLOR = 4,
        UPDATE_ALIGNMENT = 8,
        UPDATE_REGION = 16,
        UPDATE_PAD = 32,
        UPDATE_TOOLTIP = 64,
        UPDATE_WIDTH_IN_PERCENT = 128
    }
}
export interface VisualShaderNodeIs extends VisualShaderNode {
    function: type.int;
}
export declare namespace VisualShaderNodeIs {
    const enum Function {
        FUNC_IS_INF = 0,
        FUNC_IS_NAN = 1,
        FUNC_MAX = 2
    }
}
export interface CapsuleShape3D extends Shape3D {
    height: type.float;
    radius: type.float;
}
export interface VisualShaderNodeColorOp extends VisualShaderNode {
    operator: type.int;
}
export declare namespace VisualShaderNodeColorOp {
    const enum Operator {
        OP_SCREEN = 0,
        OP_DIFFERENCE = 1,
        OP_DARKEN = 2,
        OP_LIGHTEN = 3,
        OP_OVERLAY = 4,
        OP_DODGE = 5,
        OP_BURN = 6,
        OP_SOFT_LIGHT = 7,
        OP_HARD_LIGHT = 8,
        OP_MAX = 9
    }
}
export interface PointMesh extends PrimitiveMesh {
}
export interface JavaScriptBridge extends Object {
}
export interface CanvasItem extends Node {
    clip_children: type.int;
    light_mask: type.int;
    material: {
        type: "Material";
        properties: Material;
    };
    modulate: type.Color;
    self_modulate: type.Color;
    show_behind_parent: type.bool;
    texture_filter: type.int;
    texture_repeat: type.int;
    top_level: type.bool;
    use_parent_material: type.bool;
    visibility_layer: type.int;
    visible: type.bool;
    y_sort_enabled: type.bool;
    z_as_relative: type.bool;
    z_index: type.int;
}
export declare namespace CanvasItem {
    const NOTIFICATION_TRANSFORM_CHANGED = 2000;
    const NOTIFICATION_LOCAL_TRANSFORM_CHANGED = 35;
    const NOTIFICATION_DRAW = 30;
    const NOTIFICATION_VISIBILITY_CHANGED = 31;
    const NOTIFICATION_ENTER_CANVAS = 32;
    const NOTIFICATION_EXIT_CANVAS = 33;
    const NOTIFICATION_WORLD_2D_CHANGED = 36;
    const enum TextureFilter {
        TEXTURE_FILTER_PARENT_NODE = 0,
        TEXTURE_FILTER_NEAREST = 1,
        TEXTURE_FILTER_LINEAR = 2,
        TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 3,
        TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 4,
        TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC = 5,
        TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC = 6,
        TEXTURE_FILTER_MAX = 7
    }
    const enum TextureRepeat {
        TEXTURE_REPEAT_PARENT_NODE = 0,
        TEXTURE_REPEAT_DISABLED = 1,
        TEXTURE_REPEAT_ENABLED = 2,
        TEXTURE_REPEAT_MIRROR = 3,
        TEXTURE_REPEAT_MAX = 4
    }
    const enum ClipChildrenMode {
        CLIP_CHILDREN_DISABLED = 0,
        CLIP_CHILDREN_ONLY = 1,
        CLIP_CHILDREN_AND_DRAW = 2,
        CLIP_CHILDREN_MAX = 3
    }
}
export interface CylinderShape3D extends Shape3D {
    height: type.float;
    radius: type.float;
}
export interface NavigationPolygon extends Resource {
    agent_radius: type.float;
    baking_rect: type.Rect2;
    baking_rect_offset: type.Vector2;
    border_size: type.float;
    cell_size: type.float;
    parsed_collision_mask: type.int;
    parsed_geometry_type: type.int;
    sample_partition_type: type.int;
    source_geometry_group_name: type.StringName;
    source_geometry_mode: type.int;
}
export declare namespace NavigationPolygon {
    const enum SamplePartitionType {
        SAMPLE_PARTITION_CONVEX_PARTITION = 0,
        SAMPLE_PARTITION_TRIANGULATE = 1,
        SAMPLE_PARTITION_MAX = 2
    }
    const enum ParsedGeometryType {
        PARSED_GEOMETRY_MESH_INSTANCES = 0,
        PARSED_GEOMETRY_STATIC_COLLIDERS = 1,
        PARSED_GEOMETRY_BOTH = 2,
        PARSED_GEOMETRY_MAX = 3
    }
    const enum SourceGeometryMode {
        SOURCE_GEOMETRY_ROOT_NODE_CHILDREN = 0,
        SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN = 1,
        SOURCE_GEOMETRY_GROUPS_EXPLICIT = 2,
        SOURCE_GEOMETRY_MAX = 3
    }
}
export interface VisualShaderNodeRemap extends VisualShaderNode {
    op_type: type.int;
}
export declare namespace VisualShaderNodeRemap {
    const enum OpType {
        OP_TYPE_SCALAR = 0,
        OP_TYPE_VECTOR_2D = 1,
        OP_TYPE_VECTOR_2D_SCALAR = 2,
        OP_TYPE_VECTOR_3D = 3,
        OP_TYPE_VECTOR_3D_SCALAR = 4,
        OP_TYPE_VECTOR_4D = 5,
        OP_TYPE_VECTOR_4D_SCALAR = 6,
        OP_TYPE_MAX = 7
    }
}
export interface AudioEffectNotchFilter extends AudioEffectFilter {
}
export interface EditorInspector extends ScrollContainer {
    follow_focus: type.bool;
    horizontal_scroll_mode: type.int;
}
export interface PinJoint3D extends Joint3D {
    'params/bias': type.float;
    'params/damping': type.float;
    'params/impulse_clamp': type.float;
}
export declare namespace PinJoint3D {
    const enum Param {
        PARAM_BIAS = 0,
        PARAM_DAMPING = 1,
        PARAM_IMPULSE_CLAMP = 2
    }
}
export interface SceneTree extends MainLoop {
    auto_accept_quit: type.bool;
    current_scene: {
        type: "Node";
        properties: Node;
    };
    debug_collisions_hint: type.bool;
    debug_navigation_hint: type.bool;
    debug_paths_hint: type.bool;
    edited_scene_root: {
        type: "Node";
        properties: Node;
    };
    multiplayer_poll: type.bool;
    paused: type.bool;
    physics_interpolation: type.bool;
    quit_on_go_back: type.bool;
    root: {
        type: "Window";
        properties: Window;
    };
}
export declare namespace SceneTree {
    const enum GroupCallFlags {
        GROUP_CALL_DEFAULT = 0,
        GROUP_CALL_REVERSE = 1,
        GROUP_CALL_DEFERRED = 2,
        GROUP_CALL_UNIQUE = 4
    }
}
export interface VisualShaderNodeParticleBoxEmitter extends VisualShaderNodeParticleEmitter {
}
export interface HTTPClient extends RefCounted {
    blocking_mode_enabled: type.bool;
    connection: {
        type: "StreamPeer";
        properties: StreamPeer;
    };
    read_chunk_size: type.int;
}
export declare namespace HTTPClient {
    const enum Method {
        METHOD_GET = 0,
        METHOD_HEAD = 1,
        METHOD_POST = 2,
        METHOD_PUT = 3,
        METHOD_DELETE = 4,
        METHOD_OPTIONS = 5,
        METHOD_TRACE = 6,
        METHOD_CONNECT = 7,
        METHOD_PATCH = 8,
        METHOD_MAX = 9
    }
    const enum Status {
        STATUS_DISCONNECTED = 0,
        STATUS_RESOLVING = 1,
        STATUS_CANT_RESOLVE = 2,
        STATUS_CONNECTING = 3,
        STATUS_CANT_CONNECT = 4,
        STATUS_CONNECTED = 5,
        STATUS_REQUESTING = 6,
        STATUS_BODY = 7,
        STATUS_CONNECTION_ERROR = 8,
        STATUS_TLS_HANDSHAKE_ERROR = 9
    }
    const enum ResponseCode {
        RESPONSE_CONTINUE = 100,
        RESPONSE_SWITCHING_PROTOCOLS = 101,
        RESPONSE_PROCESSING = 102,
        RESPONSE_OK = 200,
        RESPONSE_CREATED = 201,
        RESPONSE_ACCEPTED = 202,
        RESPONSE_NON_AUTHORITATIVE_INFORMATION = 203,
        RESPONSE_NO_CONTENT = 204,
        RESPONSE_RESET_CONTENT = 205,
        RESPONSE_PARTIAL_CONTENT = 206,
        RESPONSE_MULTI_STATUS = 207,
        RESPONSE_ALREADY_REPORTED = 208,
        RESPONSE_IM_USED = 226,
        RESPONSE_MULTIPLE_CHOICES = 300,
        RESPONSE_MOVED_PERMANENTLY = 301,
        RESPONSE_FOUND = 302,
        RESPONSE_SEE_OTHER = 303,
        RESPONSE_NOT_MODIFIED = 304,
        RESPONSE_USE_PROXY = 305,
        RESPONSE_SWITCH_PROXY = 306,
        RESPONSE_TEMPORARY_REDIRECT = 307,
        RESPONSE_PERMANENT_REDIRECT = 308,
        RESPONSE_BAD_REQUEST = 400,
        RESPONSE_UNAUTHORIZED = 401,
        RESPONSE_PAYMENT_REQUIRED = 402,
        RESPONSE_FORBIDDEN = 403,
        RESPONSE_NOT_FOUND = 404,
        RESPONSE_METHOD_NOT_ALLOWED = 405,
        RESPONSE_NOT_ACCEPTABLE = 406,
        RESPONSE_PROXY_AUTHENTICATION_REQUIRED = 407,
        RESPONSE_REQUEST_TIMEOUT = 408,
        RESPONSE_CONFLICT = 409,
        RESPONSE_GONE = 410,
        RESPONSE_LENGTH_REQUIRED = 411,
        RESPONSE_PRECONDITION_FAILED = 412,
        RESPONSE_REQUEST_ENTITY_TOO_LARGE = 413,
        RESPONSE_REQUEST_URI_TOO_LONG = 414,
        RESPONSE_UNSUPPORTED_MEDIA_TYPE = 415,
        RESPONSE_REQUESTED_RANGE_NOT_SATISFIABLE = 416,
        RESPONSE_EXPECTATION_FAILED = 417,
        RESPONSE_IM_A_TEAPOT = 418,
        RESPONSE_MISDIRECTED_REQUEST = 421,
        RESPONSE_UNPROCESSABLE_ENTITY = 422,
        RESPONSE_LOCKED = 423,
        RESPONSE_FAILED_DEPENDENCY = 424,
        RESPONSE_UPGRADE_REQUIRED = 426,
        RESPONSE_PRECONDITION_REQUIRED = 428,
        RESPONSE_TOO_MANY_REQUESTS = 429,
        RESPONSE_REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
        RESPONSE_UNAVAILABLE_FOR_LEGAL_REASONS = 451,
        RESPONSE_INTERNAL_SERVER_ERROR = 500,
        RESPONSE_NOT_IMPLEMENTED = 501,
        RESPONSE_BAD_GATEWAY = 502,
        RESPONSE_SERVICE_UNAVAILABLE = 503,
        RESPONSE_GATEWAY_TIMEOUT = 504,
        RESPONSE_HTTP_VERSION_NOT_SUPPORTED = 505,
        RESPONSE_VARIANT_ALSO_NEGOTIATES = 506,
        RESPONSE_INSUFFICIENT_STORAGE = 507,
        RESPONSE_LOOP_DETECTED = 508,
        RESPONSE_NOT_EXTENDED = 510,
        RESPONSE_NETWORK_AUTH_REQUIRED = 511
    }
}
export interface PinJoint2D extends Joint2D {
    angular_limit_enabled: type.bool;
    angular_limit_lower: type.float;
    angular_limit_upper: type.float;
    motor_enabled: type.bool;
    motor_target_velocity: type.float;
    softness: type.float;
}
export interface Texture2DRD extends Texture2D {
    resource_local_to_scene: type.bool;
    texture_rd_rid: {
        type: "RID";
        properties: RID;
    };
}
export interface EncodedObjectAsID extends RefCounted {
    object_id: type.int;
}
export interface EditorScenePostImportPlugin extends RefCounted {
}
export declare namespace EditorScenePostImportPlugin {
    const enum InternalImportCategory {
        INTERNAL_IMPORT_CATEGORY_NODE = 0,
        INTERNAL_IMPORT_CATEGORY_MESH_3D_NODE = 1,
        INTERNAL_IMPORT_CATEGORY_MESH = 2,
        INTERNAL_IMPORT_CATEGORY_MATERIAL = 3,
        INTERNAL_IMPORT_CATEGORY_ANIMATION = 4,
        INTERNAL_IMPORT_CATEGORY_ANIMATION_NODE = 5,
        INTERNAL_IMPORT_CATEGORY_SKELETON_3D_NODE = 6,
        INTERNAL_IMPORT_CATEGORY_MAX = 7
    }
}
export interface CapsuleShape2D extends Shape2D {
    height: type.float;
    radius: type.float;
}
export interface SurfaceTool extends RefCounted {
}
export declare namespace SurfaceTool {
    const enum CustomFormat {
        CUSTOM_RGBA8_UNORM = 0,
        CUSTOM_RGBA8_SNORM = 1,
        CUSTOM_RG_HALF = 2,
        CUSTOM_RGBA_HALF = 3,
        CUSTOM_R_FLOAT = 4,
        CUSTOM_RG_FLOAT = 5,
        CUSTOM_RGB_FLOAT = 6,
        CUSTOM_RGBA_FLOAT = 7,
        CUSTOM_MAX = 8
    }
    const enum SkinWeightCount {
        SKIN_4_WEIGHTS = 0,
        SKIN_8_WEIGHTS = 1
    }
}
export interface PortableCompressedTexture2D extends Texture2D {
    keep_compressed_buffer: type.bool;
    resource_local_to_scene: type.bool;
    size_override: type.Vector2;
}
export declare namespace PortableCompressedTexture2D {
    const enum CompressionMode {
        COMPRESSION_MODE_LOSSLESS = 0,
        COMPRESSION_MODE_LOSSY = 1,
        COMPRESSION_MODE_BASIS_UNIVERSAL = 2,
        COMPRESSION_MODE_S3TC = 3,
        COMPRESSION_MODE_ETC2 = 4,
        COMPRESSION_MODE_BPTC = 5
    }
}
export interface VisualShaderNodeGroupBase extends VisualShaderNodeResizableBase {
}
export interface OfflineMultiplayerPeer extends MultiplayerPeer {
}
export interface AnimationRootNode extends AnimationNode {
}
export interface TileSetSource extends Resource {
}
export interface AnimationMixer extends Node {
    active: type.bool;
    audio_max_polyphony: type.int;
    callback_mode_discrete: type.int;
    callback_mode_method: type.int;
    callback_mode_process: type.int;
    deterministic: type.bool;
    reset_on_save: type.bool;
    root_motion_track: type.NodePath;
    root_node: type.NodePath;
}
export declare namespace AnimationMixer {
    const enum AnimationCallbackModeProcess {
        ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS = 0,
        ANIMATION_CALLBACK_MODE_PROCESS_IDLE = 1,
        ANIMATION_CALLBACK_MODE_PROCESS_MANUAL = 2
    }
    const enum AnimationCallbackModeMethod {
        ANIMATION_CALLBACK_MODE_METHOD_DEFERRED = 0,
        ANIMATION_CALLBACK_MODE_METHOD_IMMEDIATE = 1
    }
    const enum AnimationCallbackModeDiscrete {
        ANIMATION_CALLBACK_MODE_DISCRETE_DOMINANT = 0,
        ANIMATION_CALLBACK_MODE_DISCRETE_RECESSIVE = 1,
        ANIMATION_CALLBACK_MODE_DISCRETE_FORCE_CONTINUOUS = 2
    }
}
export interface AnimationPlayer extends AnimationMixer {
    assigned_animation: type.String;
    autoplay: type.String;
    current_animation: type.String;
    current_animation_length: type.float;
    current_animation_position: type.float;
    movie_quit_on_finish: type.bool;
    playback_auto_capture: type.bool;
    playback_auto_capture_duration: type.float;
    playback_auto_capture_ease_type: type.int;
    playback_auto_capture_transition_type: type.int;
    playback_default_blend_time: type.float;
    speed_scale: type.float;
}
export declare namespace AnimationPlayer {
    const enum AnimationProcessCallback {
        ANIMATION_PROCESS_PHYSICS = 0,
        ANIMATION_PROCESS_IDLE = 1,
        ANIMATION_PROCESS_MANUAL = 2
    }
    const enum AnimationMethodCallMode {
        ANIMATION_METHOD_CALL_DEFERRED = 0,
        ANIMATION_METHOD_CALL_IMMEDIATE = 1
    }
}
export interface ArrayOccluder3D extends Occluder3D {
    indices: type.PackedInt32Array;
    vertices: type.PackedVector3Array;
}
export interface AnimationLibrary extends Resource {
}
export interface CheckButton extends Button {
    alignment: type.int;
    toggle_mode: type.bool;
    check_v_offset: type.int;
    checked: {
        type: "Texture2D";
        properties: Texture2D;
    };
    checked_disabled: {
        type: "Texture2D";
        properties: Texture2D;
    };
    checked_disabled_mirrored: {
        type: "Texture2D";
        properties: Texture2D;
    };
    checked_mirrored: {
        type: "Texture2D";
        properties: Texture2D;
    };
    unchecked: {
        type: "Texture2D";
        properties: Texture2D;
    };
    unchecked_disabled: {
        type: "Texture2D";
        properties: Texture2D;
    };
    unchecked_disabled_mirrored: {
        type: "Texture2D";
        properties: Texture2D;
    };
    unchecked_mirrored: {
        type: "Texture2D";
        properties: Texture2D;
    };
}
export interface Shortcut extends Resource {
    events: type.Array;
}
export interface ImmediateMesh extends Mesh {
}
export interface EditorScriptPicker extends EditorResourcePicker {
    script_owner: {
        type: "Node";
        properties: Node;
    };
}
export interface CompressedTexture3D extends Texture3D {
    load_path: type.String;
}
export interface StyleBoxTexture extends StyleBox {
    axis_stretch_horizontal: type.int;
    axis_stretch_vertical: type.int;
    draw_center: type.bool;
    expand_margin_bottom: type.float;
    expand_margin_left: type.float;
    expand_margin_right: type.float;
    expand_margin_top: type.float;
    modulate_color: type.Color;
    region_rect: type.Rect2;
    texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    texture_margin_bottom: type.float;
    texture_margin_left: type.float;
    texture_margin_right: type.float;
    texture_margin_top: type.float;
}
export declare namespace StyleBoxTexture {
    const enum AxisStretchMode {
        AXIS_STRETCH_MODE_STRETCH = 0,
        AXIS_STRETCH_MODE_TILE = 1,
        AXIS_STRETCH_MODE_TILE_FIT = 2
    }
}
export interface VisualShaderNodeConstant extends VisualShaderNode {
}
export interface GraphFrame extends GraphElement {
    autoshrink_enabled: type.bool;
    autoshrink_margin: type.int;
    drag_margin: type.int;
    mouse_filter: type.int;
    tint_color: type.Color;
    tint_color_enabled: type.bool;
    title: type.String;
    resizer_color: type.Color;
    panel: {
        type: "StyleBox";
        properties: StyleBox;
    };
    panel_selected: {
        type: "StyleBox";
        properties: StyleBox;
    };
    titlebar: {
        type: "StyleBox";
        properties: StyleBox;
    };
    titlebar_selected: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export interface GPUParticles3D extends GeometryInstance3D {
    amount: type.int;
    amount_ratio: type.float;
    collision_base_size: type.float;
    draw_order: type.int;
    draw_pass_1: {
        type: "Mesh";
        properties: Mesh;
    };
    draw_pass_2: {
        type: "Mesh";
        properties: Mesh;
    };
    draw_pass_3: {
        type: "Mesh";
        properties: Mesh;
    };
    draw_pass_4: {
        type: "Mesh";
        properties: Mesh;
    };
    draw_passes: type.int;
    draw_skin: {
        type: "Skin";
        properties: Skin;
    };
    emitting: type.bool;
    explosiveness: type.float;
    fixed_fps: type.int;
    fract_delta: type.bool;
    interp_to_end: type.float;
    interpolate: type.bool;
    lifetime: type.float;
    local_coords: type.bool;
    one_shot: type.bool;
    preprocess: type.float;
    process_material: {
        type: "Material";
        properties: Material;
    };
    randomness: type.float;
    speed_scale: type.float;
    sub_emitter: type.NodePath;
    trail_enabled: type.bool;
    trail_lifetime: type.float;
    transform_align: type.int;
    visibility_aabb: type.AABB;
}
export declare namespace GPUParticles3D {
    const enum DrawOrder {
        DRAW_ORDER_INDEX = 0,
        DRAW_ORDER_LIFETIME = 1,
        DRAW_ORDER_REVERSE_LIFETIME = 2,
        DRAW_ORDER_VIEW_DEPTH = 3
    }
    const enum EmitFlags {
        EMIT_FLAG_POSITION = 1,
        EMIT_FLAG_ROTATION_SCALE = 2,
        EMIT_FLAG_VELOCITY = 4,
        EMIT_FLAG_COLOR = 8,
        EMIT_FLAG_CUSTOM = 16
    }
    const MAX_DRAW_PASSES = 4;
    const enum TransformAlign {
        TRANSFORM_ALIGN_DISABLED = 0,
        TRANSFORM_ALIGN_Z_BILLBOARD = 1,
        TRANSFORM_ALIGN_Y_TO_VELOCITY = 2,
        TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY = 3
    }
}
export interface CodeHighlighter extends SyntaxHighlighter {
    color_regions: {
        type: "Dictionary";
        properties: Dictionary;
    };
    function_color: type.Color;
    keyword_colors: {
        type: "Dictionary";
        properties: Dictionary;
    };
    member_keyword_colors: {
        type: "Dictionary";
        properties: Dictionary;
    };
    member_variable_color: type.Color;
    number_color: type.Color;
    symbol_color: type.Color;
}
export interface AnimationNode extends Resource {
    filter_enabled: type.bool;
}
export declare namespace AnimationNode {
    const enum FilterAction {
        FILTER_IGNORE = 0,
        FILTER_PASS = 1,
        FILTER_STOP = 2,
        FILTER_BLEND = 3
    }
}
export interface VisualShaderNodeDeterminant extends VisualShaderNode {
}
export interface RenderSceneDataRD extends RenderSceneData {
}
export interface VisualShaderNodeOuterProduct extends VisualShaderNode {
}
export interface AudioEffectFilter extends AudioEffect {
    cutoff_hz: type.float;
    db: type.int;
    gain: type.float;
    resonance: type.float;
}
export declare namespace AudioEffectFilter {
    const enum FilterDB {
        FILTER_6DB = 0,
        FILTER_12DB = 1,
        FILTER_18DB = 2,
        FILTER_24DB = 3
    }
}
export interface AudioEffectHighShelfFilter extends AudioEffectFilter {
}
export interface CompositorEffect extends Resource {
    access_resolved_color: type.bool;
    access_resolved_depth: type.bool;
    effect_callback_type: type.int;
    enabled: type.bool;
    needs_motion_vectors: type.bool;
    needs_normal_roughness: type.bool;
    needs_separate_specular: type.bool;
}
export declare namespace CompositorEffect {
    const enum EffectCallbackType {
        EFFECT_CALLBACK_TYPE_PRE_OPAQUE = 0,
        EFFECT_CALLBACK_TYPE_POST_OPAQUE = 1,
        EFFECT_CALLBACK_TYPE_POST_SKY = 2,
        EFFECT_CALLBACK_TYPE_PRE_TRANSPARENT = 3,
        EFFECT_CALLBACK_TYPE_POST_TRANSPARENT = 4,
        EFFECT_CALLBACK_TYPE_MAX = 5
    }
}
export interface PhysicalBone3D extends PhysicsBody3D {
    angular_damp: type.float;
    angular_damp_mode: type.int;
    angular_velocity: type.Vector3;
    body_offset: type.Transform3D;
    bounce: type.float;
    can_sleep: type.bool;
    custom_integrator: type.bool;
    friction: type.float;
    gravity_scale: type.float;
    joint_offset: type.Transform3D;
    joint_rotation: type.Vector3;
    joint_type: type.int;
    linear_damp: type.float;
    linear_damp_mode: type.int;
    linear_velocity: type.Vector3;
    mass: type.float;
}
export declare namespace PhysicalBone3D {
    const enum DampMode {
        DAMP_MODE_COMBINE = 0,
        DAMP_MODE_REPLACE = 1
    }
    const enum JointType {
        JOINT_TYPE_NONE = 0,
        JOINT_TYPE_PIN = 1,
        JOINT_TYPE_CONE = 2,
        JOINT_TYPE_HINGE = 3,
        JOINT_TYPE_SLIDER = 4,
        JOINT_TYPE_6DOF = 5
    }
}
export interface VehicleWheel3D extends Node3D {
    brake: type.float;
    damping_compression: type.float;
    damping_relaxation: type.float;
    engine_force: type.float;
    steering: type.float;
    suspension_max_force: type.float;
    suspension_stiffness: type.float;
    suspension_travel: type.float;
    use_as_steering: type.bool;
    use_as_traction: type.bool;
    wheel_friction_slip: type.float;
    wheel_radius: type.float;
    wheel_rest_length: type.float;
    wheel_roll_influence: type.float;
}
export interface XRHandTracker extends XRPositionalTracker {
    hand: type.int;
    hand_tracking_source: type.int;
    has_tracking_data: type.bool;
    type: type.int;
}
export declare namespace XRHandTracker {
    const enum HandTrackingSource {
        HAND_TRACKING_SOURCE_UNKNOWN = 0,
        HAND_TRACKING_SOURCE_UNOBSTRUCTED = 1,
        HAND_TRACKING_SOURCE_CONTROLLER = 2,
        HAND_TRACKING_SOURCE_NOT_TRACKED = 3,
        HAND_TRACKING_SOURCE_MAX = 4
    }
    const enum HandJoint {
        HAND_JOINT_PALM = 0,
        HAND_JOINT_WRIST = 1,
        HAND_JOINT_THUMB_METACARPAL = 2,
        HAND_JOINT_THUMB_PHALANX_PROXIMAL = 3,
        HAND_JOINT_THUMB_PHALANX_DISTAL = 4,
        HAND_JOINT_THUMB_TIP = 5,
        HAND_JOINT_INDEX_FINGER_METACARPAL = 6,
        HAND_JOINT_INDEX_FINGER_PHALANX_PROXIMAL = 7,
        HAND_JOINT_INDEX_FINGER_PHALANX_INTERMEDIATE = 8,
        HAND_JOINT_INDEX_FINGER_PHALANX_DISTAL = 9,
        HAND_JOINT_INDEX_FINGER_TIP = 10,
        HAND_JOINT_MIDDLE_FINGER_METACARPAL = 11,
        HAND_JOINT_MIDDLE_FINGER_PHALANX_PROXIMAL = 12,
        HAND_JOINT_MIDDLE_FINGER_PHALANX_INTERMEDIATE = 13,
        HAND_JOINT_MIDDLE_FINGER_PHALANX_DISTAL = 14,
        HAND_JOINT_MIDDLE_FINGER_TIP = 15,
        HAND_JOINT_RING_FINGER_METACARPAL = 16,
        HAND_JOINT_RING_FINGER_PHALANX_PROXIMAL = 17,
        HAND_JOINT_RING_FINGER_PHALANX_INTERMEDIATE = 18,
        HAND_JOINT_RING_FINGER_PHALANX_DISTAL = 19,
        HAND_JOINT_RING_FINGER_TIP = 20,
        HAND_JOINT_PINKY_FINGER_METACARPAL = 21,
        HAND_JOINT_PINKY_FINGER_PHALANX_PROXIMAL = 22,
        HAND_JOINT_PINKY_FINGER_PHALANX_INTERMEDIATE = 23,
        HAND_JOINT_PINKY_FINGER_PHALANX_DISTAL = 24,
        HAND_JOINT_PINKY_FINGER_TIP = 25,
        HAND_JOINT_MAX = 26
    }
    const enum HandJointFlags {
        HAND_JOINT_FLAG_ORIENTATION_VALID = 1,
        HAND_JOINT_FLAG_ORIENTATION_TRACKED = 2,
        HAND_JOINT_FLAG_POSITION_VALID = 4,
        HAND_JOINT_FLAG_POSITION_TRACKED = 8,
        HAND_JOINT_FLAG_LINEAR_VELOCITY_VALID = 16,
        HAND_JOINT_FLAG_ANGULAR_VELOCITY_VALID = 32
    }
}
export interface AnimationNodeAnimation extends AnimationRootNode {
    animation: type.StringName;
    loop_mode: type.int;
    play_mode: type.int;
    start_offset: type.float;
    stretch_time_scale: type.bool;
    timeline_length: type.float;
    use_custom_timeline: type.bool;
}
export declare namespace AnimationNodeAnimation {
    const enum PlayMode {
        PLAY_MODE_FORWARD = 0,
        PLAY_MODE_BACKWARD = 1
    }
}
export interface TextParagraph extends RefCounted {
    alignment: type.int;
    break_flags: type.int;
    custom_punctuation: type.String;
    direction: type.int;
    ellipsis_char: type.String;
    justification_flags: type.int;
    max_lines_visible: type.int;
    orientation: type.int;
    preserve_control: type.bool;
    preserve_invalid: type.bool;
    text_overrun_behavior: type.int;
    width: type.float;
}
export interface VisualShaderNodeIntConstant extends VisualShaderNodeConstant {
    constant: type.int;
}
export interface RenderDataExtension extends RenderData {
}
export interface CPUParticles2D extends Node2D {
    amount: type.int;
    angle_curve: {
        type: "Curve";
        properties: Curve;
    };
    angle_max: type.float;
    angle_min: type.float;
    angular_velocity_curve: {
        type: "Curve";
        properties: Curve;
    };
    angular_velocity_max: type.float;
    angular_velocity_min: type.float;
    anim_offset_curve: {
        type: "Curve";
        properties: Curve;
    };
    anim_offset_max: type.float;
    anim_offset_min: type.float;
    anim_speed_curve: {
        type: "Curve";
        properties: Curve;
    };
    anim_speed_max: type.float;
    anim_speed_min: type.float;
    color: type.Color;
    color_initial_ramp: {
        type: "Gradient";
        properties: Gradient;
    };
    color_ramp: {
        type: "Gradient";
        properties: Gradient;
    };
    damping_curve: {
        type: "Curve";
        properties: Curve;
    };
    damping_max: type.float;
    damping_min: type.float;
    direction: type.Vector2;
    draw_order: type.int;
    emission_colors: type.PackedColorArray;
    emission_normals: type.PackedVector2Array;
    emission_points: type.PackedVector2Array;
    emission_rect_extents: type.Vector2;
    emission_shape: type.int;
    emission_sphere_radius: type.float;
    emitting: type.bool;
    explosiveness: type.float;
    fixed_fps: type.int;
    fract_delta: type.bool;
    gravity: type.Vector2;
    hue_variation_curve: {
        type: "Curve";
        properties: Curve;
    };
    hue_variation_max: type.float;
    hue_variation_min: type.float;
    initial_velocity_max: type.float;
    initial_velocity_min: type.float;
    lifetime: type.float;
    lifetime_randomness: type.float;
    linear_accel_curve: {
        type: "Curve";
        properties: Curve;
    };
    linear_accel_max: type.float;
    linear_accel_min: type.float;
    local_coords: type.bool;
    one_shot: type.bool;
    orbit_velocity_curve: {
        type: "Curve";
        properties: Curve;
    };
    orbit_velocity_max: type.float;
    orbit_velocity_min: type.float;
    particle_flag_align_y: type.bool;
    preprocess: type.float;
    radial_accel_curve: {
        type: "Curve";
        properties: Curve;
    };
    radial_accel_max: type.float;
    radial_accel_min: type.float;
    randomness: type.float;
    scale_amount_curve: {
        type: "Curve";
        properties: Curve;
    };
    scale_amount_max: type.float;
    scale_amount_min: type.float;
    scale_curve_x: {
        type: "Curve";
        properties: Curve;
    };
    scale_curve_y: {
        type: "Curve";
        properties: Curve;
    };
    speed_scale: type.float;
    split_scale: type.bool;
    spread: type.float;
    tangential_accel_curve: {
        type: "Curve";
        properties: Curve;
    };
    tangential_accel_max: type.float;
    tangential_accel_min: type.float;
    texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
}
export declare namespace CPUParticles2D {
    const enum DrawOrder {
        DRAW_ORDER_INDEX = 0,
        DRAW_ORDER_LIFETIME = 1
    }
    const enum Parameter {
        PARAM_INITIAL_LINEAR_VELOCITY = 0,
        PARAM_ANGULAR_VELOCITY = 1,
        PARAM_ORBIT_VELOCITY = 2,
        PARAM_LINEAR_ACCEL = 3,
        PARAM_RADIAL_ACCEL = 4,
        PARAM_TANGENTIAL_ACCEL = 5,
        PARAM_DAMPING = 6,
        PARAM_ANGLE = 7,
        PARAM_SCALE = 8,
        PARAM_HUE_VARIATION = 9,
        PARAM_ANIM_SPEED = 10,
        PARAM_ANIM_OFFSET = 11,
        PARAM_MAX = 12
    }
    const enum ParticleFlags {
        PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY = 0,
        PARTICLE_FLAG_ROTATE_Y = 1,
        PARTICLE_FLAG_DISABLE_Z = 2,
        PARTICLE_FLAG_MAX = 3
    }
    const enum EmissionShape {
        EMISSION_SHAPE_POINT = 0,
        EMISSION_SHAPE_SPHERE = 1,
        EMISSION_SHAPE_SPHERE_SURFACE = 2,
        EMISSION_SHAPE_RECTANGLE = 3,
        EMISSION_SHAPE_POINTS = 4,
        EMISSION_SHAPE_DIRECTED_POINTS = 5,
        EMISSION_SHAPE_MAX = 6
    }
}
export interface CompressedTextureLayered extends TextureLayered {
    load_path: type.String;
}
export interface RayCast2D extends Node2D {
    collide_with_areas: type.bool;
    collide_with_bodies: type.bool;
    collision_mask: type.int;
    enabled: type.bool;
    exclude_parent: type.bool;
    hit_from_inside: type.bool;
    target_position: type.Vector2;
}
export interface ResourceImporterTexture extends ResourceImporter {
    'compress/channel_pack': type.int;
    'compress/hdr_compression': type.int;
    'compress/high_quality': type.bool;
    'compress/lossy_quality': type.float;
    'compress/mode': type.int;
    'compress/normal_map': type.int;
    'detect_3d/compress_to': type.int;
    'editor/convert_colors_with_editor_theme': type.bool;
    'editor/scale_with_editor_scale': type.bool;
    'mipmaps/generate': type.bool;
    'mipmaps/limit': type.int;
    'process/fix_alpha_border': type.bool;
    'process/hdr_as_srgb': type.bool;
    'process/hdr_clamp_exposure': type.bool;
    'process/normal_map_invert_y': type.bool;
    'process/premult_alpha': type.bool;
    'process/size_limit': type.int;
    'roughness/mode': type.int;
    'roughness/src_normal': type.String;
    'svg/scale': type.float;
}
export interface AudioStreamMicrophone extends AudioStream {
}
export interface VisualShaderNodeMultiplyAdd extends VisualShaderNode {
    op_type: type.int;
}
export declare namespace VisualShaderNodeMultiplyAdd {
    const enum OpType {
        OP_TYPE_SCALAR = 0,
        OP_TYPE_VECTOR_2D = 1,
        OP_TYPE_VECTOR_3D = 2,
        OP_TYPE_VECTOR_4D = 3,
        OP_TYPE_MAX = 4
    }
}
export interface ReflectionProbe extends VisualInstance3D {
    ambient_color: type.Color;
    ambient_color_energy: type.float;
    ambient_mode: type.int;
    box_projection: type.bool;
    cull_mask: type.int;
    enable_shadows: type.bool;
    intensity: type.float;
    interior: type.bool;
    max_distance: type.float;
    mesh_lod_threshold: type.float;
    origin_offset: type.Vector3;
    reflection_mask: type.int;
    size: type.Vector3;
    update_mode: type.int;
}
export declare namespace ReflectionProbe {
    const enum UpdateMode {
        UPDATE_ONCE = 0,
        UPDATE_ALWAYS = 1
    }
    const enum AmbientMode {
        AMBIENT_DISABLED = 0,
        AMBIENT_ENVIRONMENT = 1,
        AMBIENT_COLOR = 2
    }
}
export interface FlowContainer extends Container {
    alignment: type.int;
    last_wrap_alignment: type.int;
    reverse_fill: type.bool;
    vertical: type.bool;
    h_separation: type.int;
    v_separation: type.int;
}
export declare namespace FlowContainer {
    const enum AlignmentMode {
        ALIGNMENT_BEGIN = 0,
        ALIGNMENT_CENTER = 1,
        ALIGNMENT_END = 2
    }
    const enum LastWrapAlignmentMode {
        LAST_WRAP_ALIGNMENT_INHERIT = 0,
        LAST_WRAP_ALIGNMENT_BEGIN = 1,
        LAST_WRAP_ALIGNMENT_CENTER = 2,
        LAST_WRAP_ALIGNMENT_END = 3
    }
}
export interface AudioBusLayout extends Resource {
}
export interface TileSetScenesCollectionSource extends TileSetSource {
}
export interface MeshConvexDecompositionSettings extends RefCounted {
    convex_hull_approximation: type.bool;
    convex_hull_downsampling: type.int;
    max_concavity: type.float;
    max_convex_hulls: type.int;
    max_num_vertices_per_convex_hull: type.int;
    min_volume_per_convex_hull: type.float;
    mode: type.int;
    normalize_mesh: type.bool;
    plane_downsampling: type.int;
    project_hull_vertices: type.bool;
    resolution: type.int;
    revolution_axes_clipping_bias: type.float;
    symmetry_planes_clipping_bias: type.float;
}
export declare namespace MeshConvexDecompositionSettings {
    const enum Mode {
        CONVEX_DECOMPOSITION_MODE_VOXEL = 0,
        CONVEX_DECOMPOSITION_MODE_TETRAHEDRON = 1
    }
}
export interface VisualShaderNodeWorldPositionFromDepth extends VisualShaderNode {
}
export interface PhysicsPointQueryParameters3D extends RefCounted {
    collide_with_areas: type.bool;
    collide_with_bodies: type.bool;
    collision_mask: type.int;
    exclude: {
        type: "RID[]";
        properties: RID[];
    };
    position: type.Vector3;
}
export interface CharacterBody2D extends PhysicsBody2D {
    floor_block_on_wall: type.bool;
    floor_constant_speed: type.bool;
    floor_max_angle: type.float;
    floor_snap_length: type.float;
    floor_stop_on_slope: type.bool;
    max_slides: type.int;
    motion_mode: type.int;
    platform_floor_layers: type.int;
    platform_on_leave: type.int;
    platform_wall_layers: type.int;
    safe_margin: type.float;
    slide_on_ceiling: type.bool;
    up_direction: type.Vector2;
    velocity: type.Vector2;
    wall_min_slide_angle: type.float;
}
export declare namespace CharacterBody2D {
    const enum MotionMode {
        MOTION_MODE_GROUNDED = 0,
        MOTION_MODE_FLOATING = 1
    }
    const enum PlatformOnLeave {
        PLATFORM_ON_LEAVE_ADD_VELOCITY = 0,
        PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY = 1,
        PLATFORM_ON_LEAVE_DO_NOTHING = 2
    }
}
export interface VisualShaderNodeTransformCompose extends VisualShaderNode {
}
export interface Shape2D extends Resource {
    custom_solver_bias: type.float;
}
export interface NavigationMesh extends Resource {
    agent_height: type.float;
    agent_max_climb: type.float;
    agent_max_slope: type.float;
    agent_radius: type.float;
    border_size: type.float;
    cell_height: type.float;
    cell_size: type.float;
    detail_sample_distance: type.float;
    detail_sample_max_error: type.float;
    edge_max_error: type.float;
    edge_max_length: type.float;
    filter_baking_aabb: type.AABB;
    filter_baking_aabb_offset: type.Vector3;
    filter_ledge_spans: type.bool;
    filter_low_hanging_obstacles: type.bool;
    filter_walkable_low_height_spans: type.bool;
    geometry_collision_mask: type.int;
    geometry_parsed_geometry_type: type.int;
    geometry_source_geometry_mode: type.int;
    geometry_source_group_name: type.StringName;
    region_merge_size: type.float;
    region_min_size: type.float;
    sample_partition_type: type.int;
    vertices_per_polygon: type.float;
}
export declare namespace NavigationMesh {
    const enum SamplePartitionType {
        SAMPLE_PARTITION_WATERSHED = 0,
        SAMPLE_PARTITION_MONOTONE = 1,
        SAMPLE_PARTITION_LAYERS = 2,
        SAMPLE_PARTITION_MAX = 3
    }
    const enum ParsedGeometryType {
        PARSED_GEOMETRY_MESH_INSTANCES = 0,
        PARSED_GEOMETRY_STATIC_COLLIDERS = 1,
        PARSED_GEOMETRY_BOTH = 2,
        PARSED_GEOMETRY_MAX = 3
    }
    const enum SourceGeometryMode {
        SOURCE_GEOMETRY_ROOT_NODE_CHILDREN = 0,
        SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN = 1,
        SOURCE_GEOMETRY_GROUPS_EXPLICIT = 2,
        SOURCE_GEOMETRY_MAX = 3
    }
}
export interface VisualShaderNodeVectorBase extends VisualShaderNode {
    op_type: type.int;
}
export declare namespace VisualShaderNodeVectorBase {
    const enum OpType {
        OP_TYPE_VECTOR_2D = 0,
        OP_TYPE_VECTOR_3D = 1,
        OP_TYPE_VECTOR_4D = 2,
        OP_TYPE_MAX = 3
    }
}
export interface EditorSettings extends Resource {
    'asset_library/use_threads': type.bool;
    'debugger/auto_switch_to_remote_scene_tree': type.bool;
    'debugger/profile_native_calls': type.bool;
    'debugger/profiler_frame_history_size': type.int;
    'debugger/profiler_frame_max_functions': type.int;
    'debugger/profiler_target_fps': type.int;
    'debugger/remote_inspect_refresh_interval': type.float;
    'debugger/remote_scene_tree_refresh_interval': type.float;
    'docks/filesystem/always_show_folders': type.bool;
    'docks/filesystem/other_file_extensions': type.String;
    'docks/filesystem/textfile_extensions': type.String;
    'docks/filesystem/thumbnail_size': type.int;
    'docks/property_editor/auto_refresh_interval': type.float;
    'docks/property_editor/subresource_hue_tint': type.float;
    'docks/scene_tree/ask_before_deleting_related_animation_tracks': type.bool;
    'docks/scene_tree/ask_before_revoking_unique_name': type.bool;
    'docks/scene_tree/auto_expand_to_selected': type.bool;
    'docks/scene_tree/center_node_on_reparent': type.bool;
    'docks/scene_tree/start_create_dialog_fully_expanded': type.bool;
    'editors/2d/bone_color1': type.Color;
    'editors/2d/bone_color2': type.Color;
    'editors/2d/bone_ik_color': type.Color;
    'editors/2d/bone_outline_color': type.Color;
    'editors/2d/bone_outline_size': type.float;
    'editors/2d/bone_selected_color': type.Color;
    'editors/2d/bone_width': type.float;
    'editors/2d/grid_color': type.Color;
    'editors/2d/guides_color': type.Color;
    'editors/2d/smart_snapping_line_color': type.Color;
    'editors/2d/use_integer_zoom_by_default': type.bool;
    'editors/2d/viewport_border_color': type.Color;
    'editors/2d/zoom_speed_factor': type.float;
    'editors/3d/default_fov': type.float;
    'editors/3d/default_z_far': type.float;
    'editors/3d/default_z_near': type.float;
    'editors/3d/freelook/freelook_activation_modifier': type.int;
    'editors/3d/freelook/freelook_base_speed': type.float;
    'editors/3d/freelook/freelook_inertia': type.float;
    'editors/3d/freelook/freelook_navigation_scheme': type.int;
    'editors/3d/freelook/freelook_sensitivity': type.float;
    'editors/3d/freelook/freelook_speed_zoom_link': type.bool;
    'editors/3d/grid_division_level_bias': type.float;
    'editors/3d/grid_division_level_max': type.int;
    'editors/3d/grid_division_level_min': type.int;
    'editors/3d/grid_size': type.int;
    'editors/3d/grid_xy_plane': type.bool;
    'editors/3d/grid_xz_plane': type.bool;
    'editors/3d/grid_yz_plane': type.bool;
    'editors/3d/manipulator_gizmo_opacity': type.float;
    'editors/3d/manipulator_gizmo_size': type.int;
    'editors/3d/navigation/emulate_3_button_mouse': type.bool;
    'editors/3d/navigation/emulate_numpad': type.bool;
    'editors/3d/navigation/invert_x_axis': type.bool;
    'editors/3d/navigation/invert_y_axis': type.bool;
    'editors/3d/navigation/navigation_scheme': type.int;
    'editors/3d/navigation/orbit_mouse_button': type.int;
    'editors/3d/navigation/pan_mouse_button': type.int;
    'editors/3d/navigation/show_viewport_navigation_gizmo': type.bool;
    'editors/3d/navigation/show_viewport_rotation_gizmo': type.bool;
    'editors/3d/navigation/warped_mouse_panning': type.bool;
    'editors/3d/navigation/zoom_mouse_button': type.int;
    'editors/3d/navigation/zoom_style': type.int;
    'editors/3d/navigation_feel/orbit_inertia': type.float;
    'editors/3d/navigation_feel/orbit_sensitivity': type.float;
    'editors/3d/navigation_feel/translation_inertia': type.float;
    'editors/3d/navigation_feel/zoom_inertia': type.float;
    'editors/3d/primary_grid_color': type.Color;
    'editors/3d/primary_grid_steps': type.int;
    'editors/3d/secondary_grid_color': type.Color;
    'editors/3d/selection_box_color': type.Color;
    'editors/3d_gizmos/gizmo_colors/aabb': type.Color;
    'editors/3d_gizmos/gizmo_colors/camera': type.Color;
    'editors/3d_gizmos/gizmo_colors/csg': type.Color;
    'editors/3d_gizmos/gizmo_colors/decal': type.Color;
    'editors/3d_gizmos/gizmo_colors/fog_volume': type.Color;
    'editors/3d_gizmos/gizmo_colors/instantiated': type.Color;
    'editors/3d_gizmos/gizmo_colors/joint': type.Color;
    'editors/3d_gizmos/gizmo_colors/joint_body_a': type.Color;
    'editors/3d_gizmos/gizmo_colors/joint_body_b': type.Color;
    'editors/3d_gizmos/gizmo_colors/lightmap_lines': type.Color;
    'editors/3d_gizmos/gizmo_colors/lightprobe_lines': type.Color;
    'editors/3d_gizmos/gizmo_colors/occluder': type.Color;
    'editors/3d_gizmos/gizmo_colors/particle_attractor': type.Color;
    'editors/3d_gizmos/gizmo_colors/particle_collision': type.Color;
    'editors/3d_gizmos/gizmo_colors/particles': type.Color;
    'editors/3d_gizmos/gizmo_colors/path_tilt': type.Color;
    'editors/3d_gizmos/gizmo_colors/reflection_probe': type.Color;
    'editors/3d_gizmos/gizmo_colors/selected_bone': type.Color;
    'editors/3d_gizmos/gizmo_colors/skeleton': type.Color;
    'editors/3d_gizmos/gizmo_colors/stream_player_3d': type.Color;
    'editors/3d_gizmos/gizmo_colors/visibility_notifier': type.Color;
    'editors/3d_gizmos/gizmo_colors/voxel_gi': type.Color;
    'editors/3d_gizmos/gizmo_settings/bone_axis_length': type.float;
    'editors/3d_gizmos/gizmo_settings/bone_shape': type.int;
    'editors/3d_gizmos/gizmo_settings/path3d_tilt_disk_size': type.float;
    'editors/animation/autorename_animation_tracks': type.bool;
    'editors/animation/confirm_insert_track': type.bool;
    'editors/animation/default_create_bezier_tracks': type.bool;
    'editors/animation/default_create_reset_tracks': type.bool;
    'editors/animation/onion_layers_future_color': type.Color;
    'editors/animation/onion_layers_past_color': type.Color;
    'editors/bone_mapper/handle_colors/error': type.Color;
    'editors/bone_mapper/handle_colors/missing': type.Color;
    'editors/bone_mapper/handle_colors/set': type.Color;
    'editors/bone_mapper/handle_colors/unset': type.Color;
    'editors/grid_map/editor_side': type.int;
    'editors/grid_map/palette_min_width': type.int;
    'editors/grid_map/pick_distance': type.float;
    'editors/grid_map/preview_size': type.int;
    'editors/panning/2d_editor_pan_speed': type.int;
    'editors/panning/2d_editor_panning_scheme': type.int;
    'editors/panning/animation_editors_panning_scheme': type.int;
    'editors/panning/simple_panning': type.bool;
    'editors/panning/sub_editors_panning_scheme': type.int;
    'editors/panning/warped_mouse_panning': type.bool;
    'editors/polygon_editor/auto_bake_delay': type.float;
    'editors/polygon_editor/point_grab_radius': type.int;
    'editors/polygon_editor/show_previous_outline': type.bool;
    'editors/shader_editor/behavior/files/restore_shaders_on_load': type.bool;
    'editors/tiles_editor/display_grid': type.bool;
    'editors/tiles_editor/grid_color': type.Color;
    'editors/tiles_editor/highlight_selected_layer': type.bool;
    'editors/visual_editors/category_colors/color_color': type.Color;
    'editors/visual_editors/category_colors/conditional_color': type.Color;
    'editors/visual_editors/category_colors/input_color': type.Color;
    'editors/visual_editors/category_colors/output_color': type.Color;
    'editors/visual_editors/category_colors/particle_color': type.Color;
    'editors/visual_editors/category_colors/scalar_color': type.Color;
    'editors/visual_editors/category_colors/special_color': type.Color;
    'editors/visual_editors/category_colors/textures_color': type.Color;
    'editors/visual_editors/category_colors/transform_color': type.Color;
    'editors/visual_editors/category_colors/utility_color': type.Color;
    'editors/visual_editors/category_colors/vector_color': type.Color;
    'editors/visual_editors/color_theme': type.String;
    'editors/visual_editors/connection_colors/boolean_color': type.Color;
    'editors/visual_editors/connection_colors/sampler_color': type.Color;
    'editors/visual_editors/connection_colors/scalar_color': type.Color;
    'editors/visual_editors/connection_colors/transform_color': type.Color;
    'editors/visual_editors/connection_colors/vector2_color': type.Color;
    'editors/visual_editors/connection_colors/vector3_color': type.Color;
    'editors/visual_editors/connection_colors/vector4_color': type.Color;
    'editors/visual_editors/grid_pattern': type.int;
    'editors/visual_editors/lines_curvature': type.float;
    'editors/visual_editors/minimap_opacity': type.float;
    'editors/visual_editors/visual_shader/port_preview_size': type.int;
    'export/ssh/scp': type.String;
    'export/ssh/ssh': type.String;
    'filesystem/directories/autoscan_project_path': type.String;
    'filesystem/directories/default_project_path': type.String;
    'filesystem/external_programs/3d_model_editor': type.String;
    'filesystem/external_programs/audio_editor': type.String;
    'filesystem/external_programs/raster_image_editor': type.String;
    'filesystem/external_programs/terminal_emulator': type.String;
    'filesystem/external_programs/terminal_emulator_flags': type.String;
    'filesystem/external_programs/vector_image_editor': type.String;
    'filesystem/file_dialog/display_mode': type.int;
    'filesystem/file_dialog/show_hidden_files': type.bool;
    'filesystem/file_dialog/thumbnail_size': type.int;
    'filesystem/file_server/password': type.String;
    'filesystem/file_server/port': type.int;
    'filesystem/import/blender/blender_path': type.String;
    'filesystem/import/blender/rpc_port': type.int;
    'filesystem/import/blender/rpc_server_uptime': type.float;
    'filesystem/import/fbx/fbx2gltf_path': type.String;
    'filesystem/on_save/compress_binary_resources': type.bool;
    'filesystem/on_save/safe_save_on_backup_then_rename': type.bool;
    'filesystem/quick_open_dialog/default_display_mode': type.int;
    'filesystem/quick_open_dialog/include_addons': type.bool;
    'filesystem/tools/oidn/oidn_denoise_path': type.String;
    'input/buffering/agile_event_flushing': type.bool;
    'input/buffering/use_accumulated_input': type.bool;
    'interface/editor/accept_dialog_cancel_ok_buttons': type.int;
    'interface/editor/automatically_open_screenshots': type.bool;
    'interface/editor/code_font': type.String;
    'interface/editor/code_font_contextual_ligatures': type.int;
    'interface/editor/code_font_custom_opentype_features': type.String;
    'interface/editor/code_font_custom_variations': type.String;
    'interface/editor/code_font_size': type.int;
    'interface/editor/custom_display_scale': type.float;
    'interface/editor/display_scale': type.int;
    'interface/editor/dock_tab_style': type.int;
    'interface/editor/editor_language': type.String;
    'interface/editor/editor_screen': type.int;
    'interface/editor/expand_to_title': type.bool;
    'interface/editor/font_allow_msdf': type.bool;
    'interface/editor/font_antialiasing': type.int;
    'interface/editor/font_disable_embedded_bitmaps': type.bool;
    'interface/editor/font_hinting': type.int;
    'interface/editor/font_subpixel_positioning': type.int;
    'interface/editor/import_resources_when_unfocused': type.bool;
    'interface/editor/keep_screen_on': type.bool;
    'interface/editor/localize_settings': type.bool;
    'interface/editor/low_processor_mode_sleep_usec': type.int;
    'interface/editor/main_font': type.String;
    'interface/editor/main_font_bold': type.String;
    'interface/editor/main_font_size': type.int;
    'interface/editor/mouse_extra_buttons_navigate_history': type.bool;
    'interface/editor/project_manager_screen': type.int;
    'interface/editor/save_each_scene_on_quit': type.bool;
    'interface/editor/save_on_focus_loss': type.bool;
    'interface/editor/separate_distraction_mode': type.bool;
    'interface/editor/show_internal_errors_in_toast_notifications': type.int;
    'interface/editor/show_update_spinner': type.int;
    'interface/editor/single_window_mode': type.bool;
    'interface/editor/ui_layout_direction': type.int;
    'interface/editor/unfocused_low_processor_mode_sleep_usec': type.int;
    'interface/editor/update_continuously': type.bool;
    'interface/editor/use_embedded_menu': type.bool;
    'interface/editor/use_native_file_dialogs': type.bool;
    'interface/editor/vsync_mode': type.int;
    'interface/editors/derive_script_globals_by_name': type.bool;
    'interface/editors/show_scene_tree_root_selection': type.bool;
    'interface/inspector/auto_unfold_foreign_scenes': type.bool;
    'interface/inspector/default_color_picker_mode': type.int;
    'interface/inspector/default_color_picker_shape': type.int;
    'interface/inspector/default_float_step': type.float;
    'interface/inspector/default_property_name_style': type.int;
    'interface/inspector/delimitate_all_container_and_resources': type.bool;
    'interface/inspector/disable_folding': type.bool;
    'interface/inspector/float_drag_speed': type.float;
    'interface/inspector/horizontal_vector2_editing': type.bool;
    'interface/inspector/horizontal_vector_types_editing': type.bool;
    'interface/inspector/max_array_dictionary_items_per_page': type.int;
    'interface/inspector/nested_color_mode': type.int;
    'interface/inspector/open_resources_in_current_inspector': type.bool;
    'interface/inspector/resources_to_open_in_new_inspector': type.PackedStringArray;
    'interface/inspector/show_low_level_opentype_features': type.bool;
    'interface/multi_window/enable': type.bool;
    'interface/multi_window/maximize_window': type.bool;
    'interface/multi_window/restore_windows_on_load': type.bool;
    'interface/scene_tabs/display_close_button': type.int;
    'interface/scene_tabs/maximum_width': type.int;
    'interface/scene_tabs/restore_scenes_on_load': type.bool;
    'interface/scene_tabs/show_script_button': type.bool;
    'interface/scene_tabs/show_thumbnail_on_hover': type.bool;
    'interface/theme/accent_color': type.Color;
    'interface/theme/additional_spacing': type.int;
    'interface/theme/base_color': type.Color;
    'interface/theme/base_spacing': type.int;
    'interface/theme/border_size': type.int;
    'interface/theme/contrast': type.float;
    'interface/theme/corner_radius': type.int;
    'interface/theme/custom_theme': type.String;
    'interface/theme/draw_extra_borders': type.bool;
    'interface/theme/follow_system_theme': type.bool;
    'interface/theme/icon_and_font_color': type.int;
    'interface/theme/icon_saturation': type.float;
    'interface/theme/preset': type.String;
    'interface/theme/relationship_line_opacity': type.float;
    'interface/theme/spacing_preset': type.String;
    'interface/theme/use_system_accent_color': type.bool;
    'interface/touchscreen/enable_long_press_as_right_click': type.bool;
    'interface/touchscreen/enable_pan_and_scale_gestures': type.bool;
    'interface/touchscreen/increase_scrollbar_touch_area': type.bool;
    'interface/touchscreen/scale_gizmo_handles': type.float;
    'network/connection/engine_version_update_mode': type.int;
    'network/connection/network_mode': type.int;
    'network/debug/remote_host': type.String;
    'network/debug/remote_port': type.int;
    'network/http_proxy/host': type.String;
    'network/http_proxy/port': type.int;
    'network/tls/editor_tls_certificates': type.String;
    'project_manager/default_renderer': type.String;
    'project_manager/directory_naming_convention': type.int;
    'project_manager/sorting_order': type.int;
    'run/auto_save/save_before_running': type.bool;
    'run/bottom_panel/action_on_play': type.int;
    'run/bottom_panel/action_on_stop': type.int;
    'run/output/always_clear_output_on_play': type.bool;
    'run/output/font_size': type.int;
    'run/output/max_lines': type.int;
    'run/platforms/linuxbsd/prefer_wayland': type.bool;
    'run/window_placement/android_window': type.int;
    'run/window_placement/play_window_pip_mode': type.int;
    'run/window_placement/rect': type.int;
    'run/window_placement/rect_custom_position': type.Vector2;
    'run/window_placement/screen': type.int;
    'text_editor/appearance/caret/caret_blink': type.bool;
    'text_editor/appearance/caret/caret_blink_interval': type.float;
    'text_editor/appearance/caret/highlight_all_occurrences': type.bool;
    'text_editor/appearance/caret/highlight_current_line': type.bool;
    'text_editor/appearance/caret/type': type.int;
    'text_editor/appearance/guidelines/line_length_guideline_hard_column': type.int;
    'text_editor/appearance/guidelines/line_length_guideline_soft_column': type.int;
    'text_editor/appearance/guidelines/show_line_length_guidelines': type.bool;
    'text_editor/appearance/gutters/highlight_type_safe_lines': type.bool;
    'text_editor/appearance/gutters/line_numbers_zero_padded': type.bool;
    'text_editor/appearance/gutters/show_info_gutter': type.bool;
    'text_editor/appearance/gutters/show_line_numbers': type.bool;
    'text_editor/appearance/lines/autowrap_mode': type.int;
    'text_editor/appearance/lines/code_folding': type.bool;
    'text_editor/appearance/lines/word_wrap': type.int;
    'text_editor/appearance/minimap/minimap_width': type.int;
    'text_editor/appearance/minimap/show_minimap': type.bool;
    'text_editor/appearance/whitespace/draw_spaces': type.bool;
    'text_editor/appearance/whitespace/draw_tabs': type.bool;
    'text_editor/appearance/whitespace/line_spacing': type.int;
    'text_editor/behavior/files/auto_reload_and_parse_scripts_on_save': type.bool;
    'text_editor/behavior/files/auto_reload_scripts_on_external_change': type.bool;
    'text_editor/behavior/files/autosave_interval_secs': type.int;
    'text_editor/behavior/files/convert_indent_on_save': type.bool;
    'text_editor/behavior/files/open_dominant_script_on_scene_change': type.bool;
    'text_editor/behavior/files/restore_scripts_on_load': type.bool;
    'text_editor/behavior/files/trim_final_newlines_on_save': type.bool;
    'text_editor/behavior/files/trim_trailing_whitespace_on_save': type.bool;
    'text_editor/behavior/general/empty_selection_clipboard': type.bool;
    'text_editor/behavior/indent/auto_indent': type.bool;
    'text_editor/behavior/indent/indent_wrapped_lines': type.bool;
    'text_editor/behavior/indent/size': type.int;
    'text_editor/behavior/indent/type': type.int;
    'text_editor/behavior/navigation/custom_word_separators': type.String;
    'text_editor/behavior/navigation/drag_and_drop_selection': type.bool;
    'text_editor/behavior/navigation/move_caret_on_right_click': type.bool;
    'text_editor/behavior/navigation/open_script_when_connecting_signal_to_existing_method': type.bool;
    'text_editor/behavior/navigation/scroll_past_end_of_file': type.bool;
    'text_editor/behavior/navigation/smooth_scrolling': type.bool;
    'text_editor/behavior/navigation/stay_in_script_editor_on_node_selected': type.bool;
    'text_editor/behavior/navigation/use_custom_word_separators': type.bool;
    'text_editor/behavior/navigation/use_default_word_separators': type.bool;
    'text_editor/behavior/navigation/v_scroll_speed': type.int;
    'text_editor/completion/add_node_path_literals': type.bool;
    'text_editor/completion/add_string_name_literals': type.bool;
    'text_editor/completion/add_type_hints': type.bool;
    'text_editor/completion/auto_brace_complete': type.bool;
    'text_editor/completion/code_complete_delay': type.float;
    'text_editor/completion/code_complete_enabled': type.bool;
    'text_editor/completion/colorize_suggestions': type.bool;
    'text_editor/completion/complete_file_paths': type.bool;
    'text_editor/completion/idle_parse_delay': type.float;
    'text_editor/completion/put_callhint_tooltip_below_current_line': type.bool;
    'text_editor/completion/use_single_quotes': type.bool;
    'text_editor/external/exec_flags': type.String;
    'text_editor/external/exec_path': type.String;
    'text_editor/external/use_external_editor': type.bool;
    'text_editor/help/class_reference_examples': type.int;
    'text_editor/help/help_font_size': type.int;
    'text_editor/help/help_source_font_size': type.int;
    'text_editor/help/help_title_font_size': type.int;
    'text_editor/help/show_help_index': type.bool;
    'text_editor/help/sort_functions_alphabetically': type.bool;
    'text_editor/script_list/group_help_pages': type.bool;
    'text_editor/script_list/list_script_names_as': type.int;
    'text_editor/script_list/script_temperature_enabled': type.bool;
    'text_editor/script_list/script_temperature_history_size': type.int;
    'text_editor/script_list/show_members_overview': type.bool;
    'text_editor/script_list/sort_members_outline_alphabetically': type.bool;
    'text_editor/script_list/sort_scripts_by': type.int;
    'text_editor/theme/color_theme': type.String;
    'text_editor/theme/highlighting/background_color': type.Color;
    'text_editor/theme/highlighting/base_type_color': type.Color;
    'text_editor/theme/highlighting/bookmark_color': type.Color;
    'text_editor/theme/highlighting/brace_mismatch_color': type.Color;
    'text_editor/theme/highlighting/breakpoint_color': type.Color;
    'text_editor/theme/highlighting/caret_background_color': type.Color;
    'text_editor/theme/highlighting/caret_color': type.Color;
    'text_editor/theme/highlighting/code_folding_color': type.Color;
    'text_editor/theme/highlighting/comment_color': type.Color;
    'text_editor/theme/highlighting/completion_background_color': type.Color;
    'text_editor/theme/highlighting/completion_existing_color': type.Color;
    'text_editor/theme/highlighting/completion_font_color': type.Color;
    'text_editor/theme/highlighting/completion_scroll_color': type.Color;
    'text_editor/theme/highlighting/completion_scroll_hovered_color': type.Color;
    'text_editor/theme/highlighting/completion_selected_color': type.Color;
    'text_editor/theme/highlighting/control_flow_keyword_color': type.Color;
    'text_editor/theme/highlighting/current_line_color': type.Color;
    'text_editor/theme/highlighting/doc_comment_color': type.Color;
    'text_editor/theme/highlighting/engine_type_color': type.Color;
    'text_editor/theme/highlighting/executing_line_color': type.Color;
    'text_editor/theme/highlighting/folded_code_region_color': type.Color;
    'text_editor/theme/highlighting/function_color': type.Color;
    'text_editor/theme/highlighting/keyword_color': type.Color;
    'text_editor/theme/highlighting/line_length_guideline_color': type.Color;
    'text_editor/theme/highlighting/line_number_color': type.Color;
    'text_editor/theme/highlighting/mark_color': type.Color;
    'text_editor/theme/highlighting/member_variable_color': type.Color;
    'text_editor/theme/highlighting/number_color': type.Color;
    'text_editor/theme/highlighting/safe_line_number_color': type.Color;
    'text_editor/theme/highlighting/search_result_border_color': type.Color;
    'text_editor/theme/highlighting/search_result_color': type.Color;
    'text_editor/theme/highlighting/selection_color': type.Color;
    'text_editor/theme/highlighting/string_color': type.Color;
    'text_editor/theme/highlighting/symbol_color': type.Color;
    'text_editor/theme/highlighting/text_color': type.Color;
    'text_editor/theme/highlighting/text_selected_color': type.Color;
    'text_editor/theme/highlighting/user_type_color': type.Color;
    'text_editor/theme/highlighting/word_highlighted_color': type.Color;
    'text_editor/theme/line_spacing': type.int;
    'version_control/ssh_private_key_path': type.String;
    'version_control/ssh_public_key_path': type.String;
    'version_control/username': type.String;
}
export declare namespace EditorSettings {
    const NOTIFICATION_EDITOR_SETTINGS_CHANGED = 10000;
}
export interface MeshDataTool extends RefCounted {
}
export interface VisualShaderNodeColorConstant extends VisualShaderNodeConstant {
    constant: type.Color;
}
export interface StatusIndicator extends Node {
    icon: {
        type: "Texture2D";
        properties: Texture2D;
    };
    menu: type.NodePath;
    tooltip: type.String;
    visible: type.bool;
}
export interface AudioSample extends RefCounted {
}
export interface HMACContext extends RefCounted {
}
export interface TorusMesh extends PrimitiveMesh {
    inner_radius: type.float;
    outer_radius: type.float;
    ring_segments: type.int;
    rings: type.int;
}
export interface Path2D extends Node2D {
    curve: {
        type: "Curve2D";
        properties: Curve2D;
    };
}
export interface InputEventAction extends InputEvent {
    action: type.StringName;
    event_index: type.int;
    pressed: type.bool;
    strength: type.float;
}
export interface PopupMenu extends Popup {
    allow_search: type.bool;
    hide_on_checkable_item_selection: type.bool;
    hide_on_item_selection: type.bool;
    hide_on_state_item_selection: type.bool;
    item_count: type.int;
    prefer_native_menu: type.bool;
    submenu_popup_delay: type.float;
    system_menu_id: type.int;
    font_accelerator_color: type.Color;
    font_color: type.Color;
    font_disabled_color: type.Color;
    font_hover_color: type.Color;
    font_outline_color: type.Color;
    font_separator_color: type.Color;
    font_separator_outline_color: type.Color;
    h_separation: type.int;
    icon_max_width: type.int;
    indent: type.int;
    item_end_padding: type.int;
    item_start_padding: type.int;
    outline_size: type.int;
    separator_outline_size: type.int;
    v_separation: type.int;
    font: {
        type: "Font";
        properties: Font;
    };
    font_separator: {
        type: "Font";
        properties: Font;
    };
    font_separator_size: type.int;
    font_size: type.int;
    checked: {
        type: "Texture2D";
        properties: Texture2D;
    };
    checked_disabled: {
        type: "Texture2D";
        properties: Texture2D;
    };
    radio_checked: {
        type: "Texture2D";
        properties: Texture2D;
    };
    radio_checked_disabled: {
        type: "Texture2D";
        properties: Texture2D;
    };
    radio_unchecked: {
        type: "Texture2D";
        properties: Texture2D;
    };
    radio_unchecked_disabled: {
        type: "Texture2D";
        properties: Texture2D;
    };
    submenu: {
        type: "Texture2D";
        properties: Texture2D;
    };
    submenu_mirrored: {
        type: "Texture2D";
        properties: Texture2D;
    };
    unchecked: {
        type: "Texture2D";
        properties: Texture2D;
    };
    unchecked_disabled: {
        type: "Texture2D";
        properties: Texture2D;
    };
    hover: {
        type: "StyleBox";
        properties: StyleBox;
    };
    labeled_separator_left: {
        type: "StyleBox";
        properties: StyleBox;
    };
    labeled_separator_right: {
        type: "StyleBox";
        properties: StyleBox;
    };
    panel: {
        type: "StyleBox";
        properties: StyleBox;
    };
    separator: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export interface VoxelGIData extends Resource {
    bias: type.float;
    dynamic_range: type.float;
    energy: type.float;
    interior: type.bool;
    normal_bias: type.float;
    propagation: type.float;
    use_two_bounces: type.bool;
}
export interface ImageFormatLoader extends RefCounted {
}
export declare namespace ImageFormatLoader {
    const enum LoaderFlags {
        FLAG_NONE = 0,
        FLAG_FORCE_LINEAR = 1,
        FLAG_CONVERT_COLORS = 2
    }
}
export interface TCPServer extends RefCounted {
}
export interface ConfirmationDialog extends AcceptDialog {
    cancel_button_text: type.String;
    min_size: type.Vector2i;
    size: type.Vector2i;
    title: type.String;
}
export interface TextureCubemapRD extends TextureLayeredRD {
}
export interface VideoStreamPlayer extends Control {
    audio_track: type.int;
    autoplay: type.bool;
    buffering_msec: type.int;
    bus: type.StringName;
    expand: type.bool;
    loop: type.bool;
    paused: type.bool;
    stream: {
        type: "VideoStream";
        properties: VideoStream;
    };
    stream_position: type.float;
    volume: type.float;
    volume_db: type.float;
}
export interface VisualShaderNodeUVFunc extends VisualShaderNode {
    function: type.int;
}
export declare namespace VisualShaderNodeUVFunc {
    const enum Function {
        FUNC_PANNING = 0,
        FUNC_SCALING = 1,
        FUNC_MAX = 2
    }
}
export interface Skeleton2D extends Node2D {
}
export interface GPUParticlesCollisionSphere3D extends GPUParticlesCollision3D {
    radius: type.float;
}
export interface EditorScenePostImport extends RefCounted {
}
export interface PhysicalBoneSimulator3D extends SkeletonModifier3D {
}
export interface VisualShaderNodeVaryingSetter extends VisualShaderNodeVarying {
}
export interface AESContext extends RefCounted {
}
export declare namespace AESContext {
    const enum Mode {
        MODE_ECB_ENCRYPT = 0,
        MODE_ECB_DECRYPT = 1,
        MODE_CBC_ENCRYPT = 2,
        MODE_CBC_DECRYPT = 3,
        MODE_MAX = 4
    }
}
export interface Variant {
}
export interface InputEventWithModifiers extends InputEventFromWindow {
    alt_pressed: type.bool;
    command_or_control_autoremap: type.bool;
    ctrl_pressed: type.bool;
    meta_pressed: type.bool;
    shift_pressed: type.bool;
}
export interface EditorSceneFormatImporter extends RefCounted {
}
export declare namespace EditorSceneFormatImporter {
    const IMPORT_SCENE = 1;
    const IMPORT_ANIMATION = 2;
    const IMPORT_FAIL_ON_MISSING_DEPENDENCIES = 4;
    const IMPORT_GENERATE_TANGENT_ARRAYS = 8;
    const IMPORT_USE_NAMED_SKIN_BINDS = 16;
    const IMPORT_DISCARD_MESHES_AND_MATERIALS = 32;
    const IMPORT_FORCE_DISABLE_MESH_COMPRESSION = 64;
}
export interface PacketPeerExtension extends PacketPeer {
}
export interface PhysicsDirectBodyState2D extends Object {
    angular_velocity: type.float;
    center_of_mass: type.Vector2;
    center_of_mass_local: type.Vector2;
    inverse_inertia: type.float;
    inverse_mass: type.float;
    linear_velocity: type.Vector2;
    sleeping: type.bool;
    step: type.float;
    total_angular_damp: type.float;
    total_gravity: type.Vector2;
    total_linear_damp: type.float;
    transform: type.Transform2D;
}
export interface Area3D extends CollisionObject3D {
    angular_damp: type.float;
    angular_damp_space_override: type.int;
    audio_bus_name: type.StringName;
    audio_bus_override: type.bool;
    gravity: type.float;
    gravity_direction: type.Vector3;
    gravity_point: type.bool;
    gravity_point_center: type.Vector3;
    gravity_point_unit_distance: type.float;
    gravity_space_override: type.int;
    linear_damp: type.float;
    linear_damp_space_override: type.int;
    monitorable: type.bool;
    monitoring: type.bool;
    priority: type.int;
    reverb_bus_amount: type.float;
    reverb_bus_enabled: type.bool;
    reverb_bus_name: type.StringName;
    reverb_bus_uniformity: type.float;
    wind_attenuation_factor: type.float;
    wind_force_magnitude: type.float;
    wind_source_path: type.NodePath;
}
export declare namespace Area3D {
    const enum SpaceOverride {
        SPACE_OVERRIDE_DISABLED = 0,
        SPACE_OVERRIDE_COMBINE = 1,
        SPACE_OVERRIDE_COMBINE_REPLACE = 2,
        SPACE_OVERRIDE_REPLACE = 3,
        SPACE_OVERRIDE_REPLACE_COMBINE = 4
    }
}
export interface ResourceImporterBMFont extends ResourceImporter {
    compress: type.bool;
    fallbacks: type.Array;
    scaling_mode: type.int;
}
export interface QuadMesh extends PlaneMesh {
    orientation: type.int;
    size: type.Vector2;
}
export interface PhysicsServer3DRenderingServerHandler extends Object {
}
export interface KinematicCollision3D extends RefCounted {
}
export interface ResourceFormatSaver extends RefCounted {
}
export interface RDPipelineSpecializationConstant extends RefCounted {
    constant_id: type.int;
    value: {
        type: "Variant";
        properties: Variant;
    };
}
export interface MeshTexture extends Texture2D {
    base_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    image_size: type.Vector2;
    mesh: {
        type: "Mesh";
        properties: Mesh;
    };
    resource_local_to_scene: type.bool;
}
export interface RDVertexAttribute extends RefCounted {
    format: type.int;
    frequency: type.int;
    location: type.int;
    offset: type.int;
    stride: type.int;
}
export interface GDExtension extends Resource {
}
export declare namespace GDExtension {
    const enum InitializationLevel {
        INITIALIZATION_LEVEL_CORE = 0,
        INITIALIZATION_LEVEL_SERVERS = 1,
        INITIALIZATION_LEVEL_SCENE = 2,
        INITIALIZATION_LEVEL_EDITOR = 3
    }
}
export interface GDExtensionManager extends Object {
}
export declare namespace GDExtensionManager {
    const enum LoadStatus {
        LOAD_STATUS_OK = 0,
        LOAD_STATUS_FAILED = 1,
        LOAD_STATUS_ALREADY_LOADED = 2,
        LOAD_STATUS_NOT_LOADED = 3,
        LOAD_STATUS_NEEDS_RESTART = 4
    }
}
export interface EditorInterface extends Object {
    distraction_free_mode: type.bool;
    movie_maker_enabled: type.bool;
}
export interface VisualShaderNodeIntFunc extends VisualShaderNode {
    function: type.int;
}
export declare namespace VisualShaderNodeIntFunc {
    const enum Function {
        FUNC_ABS = 0,
        FUNC_NEGATE = 1,
        FUNC_SIGN = 2,
        FUNC_BITWISE_NOT = 3,
        FUNC_MAX = 4
    }
}
export interface VisualShaderNodeUIntParameter extends VisualShaderNodeParameter {
    default_value: type.int;
    default_value_enabled: type.bool;
}
export interface CurveXYZTexture extends Texture2D {
    curve_x: {
        type: "Curve";
        properties: Curve;
    };
    curve_y: {
        type: "Curve";
        properties: Curve;
    };
    curve_z: {
        type: "Curve";
        properties: Curve;
    };
    resource_local_to_scene: type.bool;
    width: type.int;
}
export interface AnimatedSprite3D extends SpriteBase3D {
    animation: type.StringName;
    autoplay: type.String;
    frame: type.int;
    frame_progress: type.float;
    speed_scale: type.float;
    sprite_frames: {
        type: "SpriteFrames";
        properties: SpriteFrames;
    };
}
export interface VSlider extends Slider {
    size_flags_horizontal: type.int;
    size_flags_vertical: type.int;
}
export interface JNISingleton extends Object {
}
export interface GrooveJoint2D extends Joint2D {
    initial_offset: type.float;
    length: type.float;
}
export interface CubemapArray extends ImageTextureLayered {
}
export interface PhysicsTestMotionParameters3D extends RefCounted {
    collide_separation_ray: type.bool;
    exclude_bodies: {
        type: "RID[]";
        properties: RID[];
    };
    exclude_objects: type.int[];
    from: type.Transform3D;
    margin: type.float;
    max_collisions: type.int;
    motion: type.Vector3;
    recovery_as_collision: type.bool;
}
export interface TileSetAtlasSource extends TileSetSource {
    margins: type.Vector2i;
    separation: type.Vector2i;
    texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    texture_region_size: type.Vector2i;
    use_texture_padding: type.bool;
}
export declare namespace TileSetAtlasSource {
    const enum TileAnimationMode {
        TILE_ANIMATION_MODE_DEFAULT = 0,
        TILE_ANIMATION_MODE_RANDOM_START_TIMES = 1,
        TILE_ANIMATION_MODE_MAX = 2
    }
    const TRANSFORM_FLIP_H = 4096;
    const TRANSFORM_FLIP_V = 8192;
    const TRANSFORM_TRANSPOSE = 16384;
}
export interface VisibleOnScreenEnabler2D extends VisibleOnScreenNotifier2D {
    enable_mode: type.int;
    enable_node_path: type.NodePath;
}
export declare namespace VisibleOnScreenEnabler2D {
    const enum EnableMode {
        ENABLE_MODE_INHERIT = 0,
        ENABLE_MODE_ALWAYS = 1,
        ENABLE_MODE_WHEN_PAUSED = 2
    }
}
export interface GPUParticlesAttractor3D extends VisualInstance3D {
    attenuation: type.float;
    cull_mask: type.int;
    directionality: type.float;
    strength: type.float;
}
export interface JavaObject extends RefCounted {
}
export interface CameraAttributesPractical extends CameraAttributes {
    auto_exposure_max_sensitivity: type.float;
    auto_exposure_min_sensitivity: type.float;
    dof_blur_amount: type.float;
    dof_blur_far_distance: type.float;
    dof_blur_far_enabled: type.bool;
    dof_blur_far_transition: type.float;
    dof_blur_near_distance: type.float;
    dof_blur_near_enabled: type.bool;
    dof_blur_near_transition: type.float;
}
export interface Light2D extends Node2D {
    blend_mode: type.int;
    color: type.Color;
    editor_only: type.bool;
    enabled: type.bool;
    energy: type.float;
    range_item_cull_mask: type.int;
    range_layer_max: type.int;
    range_layer_min: type.int;
    range_z_max: type.int;
    range_z_min: type.int;
    shadow_color: type.Color;
    shadow_enabled: type.bool;
    shadow_filter: type.int;
    shadow_filter_smooth: type.float;
    shadow_item_cull_mask: type.int;
}
export declare namespace Light2D {
    const enum ShadowFilter {
        SHADOW_FILTER_NONE = 0,
        SHADOW_FILTER_PCF5 = 1,
        SHADOW_FILTER_PCF13 = 2
    }
    const enum BlendMode {
        BLEND_MODE_ADD = 0,
        BLEND_MODE_SUB = 1,
        BLEND_MODE_MIX = 2
    }
}
export interface VisualShaderNodeGlobalExpression extends VisualShaderNodeExpression {
}
export interface StyleBox extends Resource {
    content_margin_bottom: type.float;
    content_margin_left: type.float;
    content_margin_right: type.float;
    content_margin_top: type.float;
}
export interface IP extends Object {
}
export declare namespace IP {
    const enum ResolverStatus {
        RESOLVER_STATUS_NONE = 0,
        RESOLVER_STATUS_WAITING = 1,
        RESOLVER_STATUS_DONE = 2,
        RESOLVER_STATUS_ERROR = 3
    }
    const RESOLVER_MAX_QUERIES = 256;
    const RESOLVER_INVALID_ID = -1;
    const enum Type {
        TYPE_NONE = 0,
        TYPE_IPV4 = 1,
        TYPE_IPV6 = 2,
        TYPE_ANY = 3
    }
}
export interface NavigationPathQueryResult2D extends RefCounted {
    path: type.PackedVector2Array;
    path_owner_ids: type.PackedInt64Array;
    path_rids: {
        type: "RID[]";
        properties: RID[];
    };
    path_types: type.PackedInt32Array;
}
export declare namespace NavigationPathQueryResult2D {
    const enum PathSegmentType {
        PATH_SEGMENT_TYPE_REGION = 0,
        PATH_SEGMENT_TYPE_LINK = 1
    }
}
export interface Font extends Resource {
    fallbacks: {
        type: "Font[]";
        properties: Font[];
    };
}
export interface SkeletonProfileHumanoid extends SkeletonProfile {
    bone_size: type.int;
    group_size: type.int;
    root_bone: type.StringName;
    scale_base_bone: type.StringName;
}
export interface LightmapperRD extends Lightmapper {
}
export interface StandardMaterial3D extends BaseMaterial3D {
}
export interface XRPose extends RefCounted {
    angular_velocity: type.Vector3;
    has_tracking_data: type.bool;
    linear_velocity: type.Vector3;
    name: type.StringName;
    tracking_confidence: type.int;
    transform: type.Transform3D;
}
export declare namespace XRPose {
    const enum TrackingConfidence {
        XR_TRACKING_CONFIDENCE_NONE = 0,
        XR_TRACKING_CONFIDENCE_LOW = 1,
        XR_TRACKING_CONFIDENCE_HIGH = 2
    }
}
export interface SliderJoint3D extends Joint3D {
    'angular_limit/damping': type.float;
    'angular_limit/lower_angle': type.float;
    'angular_limit/restitution': type.float;
    'angular_limit/softness': type.float;
    'angular_limit/upper_angle': type.float;
    'angular_motion/damping': type.float;
    'angular_motion/restitution': type.float;
    'angular_motion/softness': type.float;
    'angular_ortho/damping': type.float;
    'angular_ortho/restitution': type.float;
    'angular_ortho/softness': type.float;
    'linear_limit/damping': type.float;
    'linear_limit/lower_distance': type.float;
    'linear_limit/restitution': type.float;
    'linear_limit/softness': type.float;
    'linear_limit/upper_distance': type.float;
    'linear_motion/damping': type.float;
    'linear_motion/restitution': type.float;
    'linear_motion/softness': type.float;
    'linear_ortho/damping': type.float;
    'linear_ortho/restitution': type.float;
    'linear_ortho/softness': type.float;
}
export declare namespace SliderJoint3D {
    const enum Param {
        PARAM_LINEAR_LIMIT_UPPER = 0,
        PARAM_LINEAR_LIMIT_LOWER = 1,
        PARAM_LINEAR_LIMIT_SOFTNESS = 2,
        PARAM_LINEAR_LIMIT_RESTITUTION = 3,
        PARAM_LINEAR_LIMIT_DAMPING = 4,
        PARAM_LINEAR_MOTION_SOFTNESS = 5,
        PARAM_LINEAR_MOTION_RESTITUTION = 6,
        PARAM_LINEAR_MOTION_DAMPING = 7,
        PARAM_LINEAR_ORTHOGONAL_SOFTNESS = 8,
        PARAM_LINEAR_ORTHOGONAL_RESTITUTION = 9,
        PARAM_LINEAR_ORTHOGONAL_DAMPING = 10,
        PARAM_ANGULAR_LIMIT_UPPER = 11,
        PARAM_ANGULAR_LIMIT_LOWER = 12,
        PARAM_ANGULAR_LIMIT_SOFTNESS = 13,
        PARAM_ANGULAR_LIMIT_RESTITUTION = 14,
        PARAM_ANGULAR_LIMIT_DAMPING = 15,
        PARAM_ANGULAR_MOTION_SOFTNESS = 16,
        PARAM_ANGULAR_MOTION_RESTITUTION = 17,
        PARAM_ANGULAR_MOTION_DAMPING = 18,
        PARAM_ANGULAR_ORTHOGONAL_SOFTNESS = 19,
        PARAM_ANGULAR_ORTHOGONAL_RESTITUTION = 20,
        PARAM_ANGULAR_ORTHOGONAL_DAMPING = 21,
        PARAM_MAX = 22
    }
}
export interface AnimationNodeBlend2 extends AnimationNodeSync {
}
export interface AudioEffectLowShelfFilter extends AudioEffectFilter {
}
export interface VisualShaderNodeTexture2DArrayParameter extends VisualShaderNodeTextureParameter {
}
export interface VisualShaderNodeTransformParameter extends VisualShaderNodeParameter {
    default_value: type.Transform3D;
    default_value_enabled: type.bool;
}
export interface NavigationPathQueryParameters2D extends RefCounted {
    map: {
        type: "RID";
        properties: RID;
    };
    metadata_flags: type.int;
    navigation_layers: type.int;
    path_postprocessing: type.int;
    pathfinding_algorithm: type.int;
    simplify_epsilon: type.float;
    simplify_path: type.bool;
    start_position: type.Vector2;
    target_position: type.Vector2;
}
export declare namespace NavigationPathQueryParameters2D {
    const enum PathfindingAlgorithm {
        PATHFINDING_ALGORITHM_ASTAR = 0
    }
    const enum PathPostProcessing {
        PATH_POSTPROCESSING_CORRIDORFUNNEL = 0,
        PATH_POSTPROCESSING_EDGECENTERED = 1
    }
    const enum PathMetadataFlags {
        PATH_METADATA_INCLUDE_NONE = 0,
        PATH_METADATA_INCLUDE_TYPES = 1,
        PATH_METADATA_INCLUDE_RIDS = 2,
        PATH_METADATA_INCLUDE_OWNERS = 4,
        PATH_METADATA_INCLUDE_ALL = 7
    }
}
export interface AudioEffectEQ6 extends AudioEffectEQ {
}
export interface VisualShaderNodeBooleanConstant extends VisualShaderNodeConstant {
    constant: type.bool;
}
export interface ColorRect extends Control {
    color: type.Color;
}
export interface RDPipelineDepthStencilState extends RefCounted {
    back_op_compare: type.int;
    back_op_compare_mask: type.int;
    back_op_depth_fail: type.int;
    back_op_fail: type.int;
    back_op_pass: type.int;
    back_op_reference: type.int;
    back_op_write_mask: type.int;
    depth_compare_operator: type.int;
    depth_range_max: type.float;
    depth_range_min: type.float;
    enable_depth_range: type.bool;
    enable_depth_test: type.bool;
    enable_depth_write: type.bool;
    enable_stencil: type.bool;
    front_op_compare: type.int;
    front_op_compare_mask: type.int;
    front_op_depth_fail: type.int;
    front_op_fail: type.int;
    front_op_pass: type.int;
    front_op_reference: type.int;
    front_op_write_mask: type.int;
}
export interface EditorExportPlatformExtension extends EditorExportPlatform {
}
export interface XROrigin3D extends Node3D {
    current: type.bool;
    world_scale: type.float;
}
export interface TubeTrailMesh extends PrimitiveMesh {
    cap_bottom: type.bool;
    cap_top: type.bool;
    curve: {
        type: "Curve";
        properties: Curve;
    };
    radial_steps: type.int;
    radius: type.float;
    section_length: type.float;
    section_rings: type.int;
    sections: type.int;
}
export interface VisualShaderNodeCubemap extends VisualShaderNode {
    cube_map: {
        type: "TextureLayered";
        properties: TextureLayered;
    };
    source: type.int;
    texture_type: type.int;
}
export declare namespace VisualShaderNodeCubemap {
    const enum Source {
        SOURCE_TEXTURE = 0,
        SOURCE_PORT = 1,
        SOURCE_MAX = 2
    }
    const enum TextureType {
        TYPE_DATA = 0,
        TYPE_COLOR = 1,
        TYPE_NORMAL_MAP = 2,
        TYPE_MAX = 3
    }
}
export interface TextServerManager extends Object {
}
export interface Timer extends Node {
    autostart: type.bool;
    one_shot: type.bool;
    paused: type.bool;
    process_callback: type.int;
    time_left: type.float;
    wait_time: type.float;
}
export declare namespace Timer {
    const enum TimerProcessCallback {
        TIMER_PROCESS_PHYSICS = 0,
        TIMER_PROCESS_IDLE = 1
    }
}
export interface MenuBar extends Control {
    flat: type.bool;
    language: type.String;
    prefer_global_menu: type.bool;
    start_index: type.int;
    switch_on_hover: type.bool;
    text_direction: type.int;
    font_color: type.Color;
    font_disabled_color: type.Color;
    font_focus_color: type.Color;
    font_hover_color: type.Color;
    font_hover_pressed_color: type.Color;
    font_outline_color: type.Color;
    font_pressed_color: type.Color;
    h_separation: type.int;
    outline_size: type.int;
    font: {
        type: "Font";
        properties: Font;
    };
    font_size: type.int;
    disabled: {
        type: "StyleBox";
        properties: StyleBox;
    };
    disabled_mirrored: {
        type: "StyleBox";
        properties: StyleBox;
    };
    hover: {
        type: "StyleBox";
        properties: StyleBox;
    };
    hover_mirrored: {
        type: "StyleBox";
        properties: StyleBox;
    };
    hover_pressed: {
        type: "StyleBox";
        properties: StyleBox;
    };
    hover_pressed_mirrored: {
        type: "StyleBox";
        properties: StyleBox;
    };
    normal: {
        type: "StyleBox";
        properties: StyleBox;
    };
    normal_mirrored: {
        type: "StyleBox";
        properties: StyleBox;
    };
    pressed: {
        type: "StyleBox";
        properties: StyleBox;
    };
    pressed_mirrored: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export interface VisibleOnScreenNotifier3D extends VisualInstance3D {
    aabb: type.AABB;
}
export interface ShaderInclude extends Resource {
    code: type.String;
}
export interface AudioStreamPolyphonic extends AudioStream {
    polyphony: type.int;
}
export interface SkeletonModification2DTwoBoneIK extends SkeletonModification2D {
    flip_bend_direction: type.bool;
    target_maximum_distance: type.float;
    target_minimum_distance: type.float;
    target_nodepath: type.NodePath;
}
export interface GraphNode extends GraphElement {
    ignore_invalid_connection_type: type.bool;
    mouse_filter: type.int;
    title: type.String;
    resizer_color: type.Color;
    port_h_offset: type.int;
    separation: type.int;
    port: {
        type: "Texture2D";
        properties: Texture2D;
    };
    panel: {
        type: "StyleBox";
        properties: StyleBox;
    };
    panel_selected: {
        type: "StyleBox";
        properties: StyleBox;
    };
    slot: {
        type: "StyleBox";
        properties: StyleBox;
    };
    titlebar: {
        type: "StyleBox";
        properties: StyleBox;
    };
    titlebar_selected: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export interface Cubemap extends ImageTextureLayered {
}
export interface PlaneMesh extends PrimitiveMesh {
    center_offset: type.Vector3;
    orientation: type.int;
    size: type.Vector2;
    subdivide_depth: type.int;
    subdivide_width: type.int;
}
export declare namespace PlaneMesh {
    const enum Orientation {
        FACE_X = 0,
        FACE_Y = 1,
        FACE_Z = 2
    }
}
export interface Node extends Object {
    auto_translate_mode: type.int;
    editor_description: type.String;
    multiplayer: {
        type: "MultiplayerAPI";
        properties: MultiplayerAPI;
    };
    name: type.StringName;
    owner: {
        type: "Node";
        properties: Node;
    };
    physics_interpolation_mode: type.int;
    process_mode: type.int;
    process_physics_priority: type.int;
    process_priority: type.int;
    process_thread_group: type.int;
    process_thread_group_order: type.int;
    process_thread_messages: type.int;
    scene_file_path: type.String;
    unique_name_in_owner: type.bool;
}
export declare namespace Node {
    const NOTIFICATION_ENTER_TREE = 10;
    const NOTIFICATION_EXIT_TREE = 11;
    const NOTIFICATION_MOVED_IN_PARENT = 12;
    const NOTIFICATION_READY = 13;
    const NOTIFICATION_PAUSED = 14;
    const NOTIFICATION_UNPAUSED = 15;
    const NOTIFICATION_PHYSICS_PROCESS = 16;
    const NOTIFICATION_PROCESS = 17;
    const NOTIFICATION_PARENTED = 18;
    const NOTIFICATION_UNPARENTED = 19;
    const NOTIFICATION_SCENE_INSTANTIATED = 20;
    const NOTIFICATION_DRAG_BEGIN = 21;
    const NOTIFICATION_DRAG_END = 22;
    const NOTIFICATION_PATH_RENAMED = 23;
    const NOTIFICATION_CHILD_ORDER_CHANGED = 24;
    const NOTIFICATION_INTERNAL_PROCESS = 25;
    const NOTIFICATION_INTERNAL_PHYSICS_PROCESS = 26;
    const NOTIFICATION_POST_ENTER_TREE = 27;
    const NOTIFICATION_DISABLED = 28;
    const NOTIFICATION_ENABLED = 29;
    const NOTIFICATION_RESET_PHYSICS_INTERPOLATION = 2001;
    const NOTIFICATION_EDITOR_PRE_SAVE = 9001;
    const NOTIFICATION_EDITOR_POST_SAVE = 9002;
    const NOTIFICATION_WM_MOUSE_ENTER = 1002;
    const NOTIFICATION_WM_MOUSE_EXIT = 1003;
    const NOTIFICATION_WM_WINDOW_FOCUS_IN = 1004;
    const NOTIFICATION_WM_WINDOW_FOCUS_OUT = 1005;
    const NOTIFICATION_WM_CLOSE_REQUEST = 1006;
    const NOTIFICATION_WM_GO_BACK_REQUEST = 1007;
    const NOTIFICATION_WM_SIZE_CHANGED = 1008;
    const NOTIFICATION_WM_DPI_CHANGE = 1009;
    const NOTIFICATION_VP_MOUSE_ENTER = 1010;
    const NOTIFICATION_VP_MOUSE_EXIT = 1011;
    const NOTIFICATION_OS_MEMORY_WARNING = 2009;
    const NOTIFICATION_TRANSLATION_CHANGED = 2010;
    const NOTIFICATION_WM_ABOUT = 2011;
    const NOTIFICATION_CRASH = 2012;
    const NOTIFICATION_OS_IME_UPDATE = 2013;
    const NOTIFICATION_APPLICATION_RESUMED = 2014;
    const NOTIFICATION_APPLICATION_PAUSED = 2015;
    const NOTIFICATION_APPLICATION_FOCUS_IN = 2016;
    const NOTIFICATION_APPLICATION_FOCUS_OUT = 2017;
    const NOTIFICATION_TEXT_SERVER_CHANGED = 2018;
    const enum ProcessMode {
        PROCESS_MODE_INHERIT = 0,
        PROCESS_MODE_PAUSABLE = 1,
        PROCESS_MODE_WHEN_PAUSED = 2,
        PROCESS_MODE_ALWAYS = 3,
        PROCESS_MODE_DISABLED = 4
    }
    const enum ProcessThreadGroup {
        PROCESS_THREAD_GROUP_INHERIT = 0,
        PROCESS_THREAD_GROUP_MAIN_THREAD = 1,
        PROCESS_THREAD_GROUP_SUB_THREAD = 2
    }
    const enum ProcessThreadMessages {
        FLAG_PROCESS_THREAD_MESSAGES = 1,
        FLAG_PROCESS_THREAD_MESSAGES_PHYSICS = 2,
        FLAG_PROCESS_THREAD_MESSAGES_ALL = 3
    }
    const enum PhysicsInterpolationMode {
        PHYSICS_INTERPOLATION_MODE_INHERIT = 0,
        PHYSICS_INTERPOLATION_MODE_ON = 1,
        PHYSICS_INTERPOLATION_MODE_OFF = 2
    }
    const enum DuplicateFlags {
        DUPLICATE_SIGNALS = 1,
        DUPLICATE_GROUPS = 2,
        DUPLICATE_SCRIPTS = 4,
        DUPLICATE_USE_INSTANTIATION = 8
    }
    const enum InternalMode {
        INTERNAL_MODE_DISABLED = 0,
        INTERNAL_MODE_FRONT = 1,
        INTERNAL_MODE_BACK = 2
    }
    const enum AutoTranslateMode {
        AUTO_TRANSLATE_MODE_INHERIT = 0,
        AUTO_TRANSLATE_MODE_ALWAYS = 1,
        AUTO_TRANSLATE_MODE_DISABLED = 2
    }
}
export interface MainLoop extends Object {
}
export declare namespace MainLoop {
    const NOTIFICATION_OS_MEMORY_WARNING = 2009;
    const NOTIFICATION_TRANSLATION_CHANGED = 2010;
    const NOTIFICATION_WM_ABOUT = 2011;
    const NOTIFICATION_CRASH = 2012;
    const NOTIFICATION_OS_IME_UPDATE = 2013;
    const NOTIFICATION_APPLICATION_RESUMED = 2014;
    const NOTIFICATION_APPLICATION_PAUSED = 2015;
    const NOTIFICATION_APPLICATION_FOCUS_IN = 2016;
    const NOTIFICATION_APPLICATION_FOCUS_OUT = 2017;
    const NOTIFICATION_TEXT_SERVER_CHANGED = 2018;
}
export interface PhysicsRayQueryParameters3D extends RefCounted {
    collide_with_areas: type.bool;
    collide_with_bodies: type.bool;
    collision_mask: type.int;
    exclude: {
        type: "RID[]";
        properties: RID[];
    };
    from: type.Vector3;
    hit_back_faces: type.bool;
    hit_from_inside: type.bool;
    to: type.Vector3;
}
export interface PCKPacker extends RefCounted {
}
export interface EditorResourceConversionPlugin extends RefCounted {
}
export interface VisualShaderNodeClamp extends VisualShaderNode {
    op_type: type.int;
}
export declare namespace VisualShaderNodeClamp {
    const enum OpType {
        OP_TYPE_FLOAT = 0,
        OP_TYPE_INT = 1,
        OP_TYPE_UINT = 2,
        OP_TYPE_VECTOR_2D = 3,
        OP_TYPE_VECTOR_3D = 4,
        OP_TYPE_VECTOR_4D = 5,
        OP_TYPE_MAX = 6
    }
}
export interface VisualShaderNodeTransformFunc extends VisualShaderNode {
    function: type.int;
}
export declare namespace VisualShaderNodeTransformFunc {
    const enum Function {
        FUNC_INVERSE = 0,
        FUNC_TRANSPOSE = 1,
        FUNC_MAX = 2
    }
}
export interface AnimationNodeBlend3 extends AnimationNodeSync {
}
export interface ScriptCreateDialog extends ConfirmationDialog {
    dialog_hide_on_ok: type.bool;
    ok_button_text: type.String;
    title: type.String;
}
export interface JavaClassWrapper extends Object {
}
export interface Popup extends Window {
    borderless: type.bool;
    popup_window: type.bool;
    transient: type.bool;
    unresizable: type.bool;
    visible: type.bool;
    wrap_controls: type.bool;
}
export interface CompressedCubemapArray extends CompressedTextureLayered {
}
export interface Object {
}
export declare namespace Object {
    const NOTIFICATION_POSTINITIALIZE = 0;
    const NOTIFICATION_PREDELETE = 1;
    const NOTIFICATION_EXTENSION_RELOADED = 2;
    const enum ConnectFlags {
        CONNECT_DEFERRED = 1,
        CONNECT_PERSIST = 2,
        CONNECT_ONE_SHOT = 4,
        CONNECT_REFERENCE_COUNTED = 8
    }
}
export interface IntervalTweener extends Tweener {
}
export interface TranslationServer extends Object {
    pseudolocalization_enabled: type.bool;
}
export interface VisualShaderNodeScreenUVToSDF extends VisualShaderNode {
}
export interface SkeletonModificationStack2D extends Resource {
    enabled: type.bool;
    modification_count: type.int;
    strength: type.float;
}
export interface VisualShaderNodeDotProduct extends VisualShaderNode {
}
export interface VisualShaderNodeColorParameter extends VisualShaderNodeParameter {
    default_value: type.Color;
    default_value_enabled: type.bool;
}
export interface CameraAttributesPhysical extends CameraAttributes {
    auto_exposure_max_exposure_value: type.float;
    auto_exposure_min_exposure_value: type.float;
    exposure_aperture: type.float;
    exposure_shutter_speed: type.float;
    frustum_far: type.float;
    frustum_focal_length: type.float;
    frustum_focus_distance: type.float;
    frustum_near: type.float;
}
export interface ResourceImporterDynamicFont extends ResourceImporter {
    allow_system_fallback: type.bool;
    antialiasing: type.int;
    compress: type.bool;
    disable_embedded_bitmaps: type.bool;
    fallbacks: type.Array;
    force_autohinter: type.bool;
    generate_mipmaps: type.bool;
    hinting: type.int;
    language_support: {
        type: "Dictionary";
        properties: Dictionary;
    };
    msdf_pixel_range: type.int;
    msdf_size: type.int;
    multichannel_signed_distance_field: type.bool;
    opentype_features: {
        type: "Dictionary";
        properties: Dictionary;
    };
    oversampling: type.float;
    preload: type.Array;
    script_support: {
        type: "Dictionary";
        properties: Dictionary;
    };
    subpixel_positioning: type.int;
}
export interface AnimationNodeStateMachinePlayback extends Resource {
    resource_local_to_scene: type.bool;
}
export interface JavaScriptObject extends RefCounted {
}
export interface TextServer extends RefCounted {
}
export declare namespace TextServer {
    const enum FontAntialiasing {
        FONT_ANTIALIASING_NONE = 0,
        FONT_ANTIALIASING_GRAY = 1,
        FONT_ANTIALIASING_LCD = 2
    }
    const enum FontLCDSubpixelLayout {
        FONT_LCD_SUBPIXEL_LAYOUT_NONE = 0,
        FONT_LCD_SUBPIXEL_LAYOUT_HRGB = 1,
        FONT_LCD_SUBPIXEL_LAYOUT_HBGR = 2,
        FONT_LCD_SUBPIXEL_LAYOUT_VRGB = 3,
        FONT_LCD_SUBPIXEL_LAYOUT_VBGR = 4,
        FONT_LCD_SUBPIXEL_LAYOUT_MAX = 5
    }
    const enum Direction {
        DIRECTION_AUTO = 0,
        DIRECTION_LTR = 1,
        DIRECTION_RTL = 2,
        DIRECTION_INHERITED = 3
    }
    const enum Orientation {
        ORIENTATION_HORIZONTAL = 0,
        ORIENTATION_VERTICAL = 1
    }
    const enum JustificationFlag {
        JUSTIFICATION_NONE = 0,
        JUSTIFICATION_KASHIDA = 1,
        JUSTIFICATION_WORD_BOUND = 2,
        JUSTIFICATION_TRIM_EDGE_SPACES = 4,
        JUSTIFICATION_AFTER_LAST_TAB = 8,
        JUSTIFICATION_CONSTRAIN_ELLIPSIS = 16,
        JUSTIFICATION_SKIP_LAST_LINE = 32,
        JUSTIFICATION_SKIP_LAST_LINE_WITH_VISIBLE_CHARS = 64,
        JUSTIFICATION_DO_NOT_SKIP_SINGLE_LINE = 128
    }
    const enum AutowrapMode {
        AUTOWRAP_OFF = 0,
        AUTOWRAP_ARBITRARY = 1,
        AUTOWRAP_WORD = 2,
        AUTOWRAP_WORD_SMART = 3
    }
    const enum LineBreakFlag {
        BREAK_NONE = 0,
        BREAK_MANDATORY = 1,
        BREAK_WORD_BOUND = 2,
        BREAK_GRAPHEME_BOUND = 4,
        BREAK_ADAPTIVE = 8,
        BREAK_TRIM_EDGE_SPACES = 16,
        BREAK_TRIM_INDENT = 32
    }
    const enum VisibleCharactersBehavior {
        VC_CHARS_BEFORE_SHAPING = 0,
        VC_CHARS_AFTER_SHAPING = 1,
        VC_GLYPHS_AUTO = 2,
        VC_GLYPHS_LTR = 3,
        VC_GLYPHS_RTL = 4
    }
    const enum OverrunBehavior {
        OVERRUN_NO_TRIMMING = 0,
        OVERRUN_TRIM_CHAR = 1,
        OVERRUN_TRIM_WORD = 2,
        OVERRUN_TRIM_ELLIPSIS = 3,
        OVERRUN_TRIM_WORD_ELLIPSIS = 4
    }
    const enum TextOverrunFlag {
        OVERRUN_NO_TRIM = 0,
        OVERRUN_TRIM = 1,
        OVERRUN_TRIM_WORD_ONLY = 2,
        OVERRUN_ADD_ELLIPSIS = 4,
        OVERRUN_ENFORCE_ELLIPSIS = 8,
        OVERRUN_JUSTIFICATION_AWARE = 16
    }
    const enum GraphemeFlag {
        GRAPHEME_IS_VALID = 1,
        GRAPHEME_IS_RTL = 2,
        GRAPHEME_IS_VIRTUAL = 4,
        GRAPHEME_IS_SPACE = 8,
        GRAPHEME_IS_BREAK_HARD = 16,
        GRAPHEME_IS_BREAK_SOFT = 32,
        GRAPHEME_IS_TAB = 64,
        GRAPHEME_IS_ELONGATION = 128,
        GRAPHEME_IS_PUNCTUATION = 256,
        GRAPHEME_IS_UNDERSCORE = 512,
        GRAPHEME_IS_CONNECTED = 1024,
        GRAPHEME_IS_SAFE_TO_INSERT_TATWEEL = 2048,
        GRAPHEME_IS_EMBEDDED_OBJECT = 4096,
        GRAPHEME_IS_SOFT_HYPHEN = 8192
    }
    const enum Hinting {
        HINTING_NONE = 0,
        HINTING_LIGHT = 1,
        HINTING_NORMAL = 2
    }
    const enum SubpixelPositioning {
        SUBPIXEL_POSITIONING_DISABLED = 0,
        SUBPIXEL_POSITIONING_AUTO = 1,
        SUBPIXEL_POSITIONING_ONE_HALF = 2,
        SUBPIXEL_POSITIONING_ONE_QUARTER = 3,
        SUBPIXEL_POSITIONING_ONE_HALF_MAX_SIZE = 20,
        SUBPIXEL_POSITIONING_ONE_QUARTER_MAX_SIZE = 16
    }
    const enum Feature {
        FEATURE_SIMPLE_LAYOUT = 1,
        FEATURE_BIDI_LAYOUT = 2,
        FEATURE_VERTICAL_LAYOUT = 4,
        FEATURE_SHAPING = 8,
        FEATURE_KASHIDA_JUSTIFICATION = 16,
        FEATURE_BREAK_ITERATORS = 32,
        FEATURE_FONT_BITMAP = 64,
        FEATURE_FONT_DYNAMIC = 128,
        FEATURE_FONT_MSDF = 256,
        FEATURE_FONT_SYSTEM = 512,
        FEATURE_FONT_VARIABLE = 1024,
        FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION = 2048,
        FEATURE_USE_SUPPORT_DATA = 4096,
        FEATURE_UNICODE_IDENTIFIERS = 8192,
        FEATURE_UNICODE_SECURITY = 16384
    }
    const enum ContourPointTag {
        CONTOUR_CURVE_TAG_ON = 1,
        CONTOUR_CURVE_TAG_OFF_CONIC = 0,
        CONTOUR_CURVE_TAG_OFF_CUBIC = 2
    }
    const enum SpacingType {
        SPACING_GLYPH = 0,
        SPACING_SPACE = 1,
        SPACING_TOP = 2,
        SPACING_BOTTOM = 3,
        SPACING_MAX = 4
    }
    const enum FontStyle {
        FONT_BOLD = 1,
        FONT_ITALIC = 2,
        FONT_FIXED_WIDTH = 4
    }
    const enum StructuredTextParser {
        STRUCTURED_TEXT_DEFAULT = 0,
        STRUCTURED_TEXT_URI = 1,
        STRUCTURED_TEXT_FILE = 2,
        STRUCTURED_TEXT_EMAIL = 3,
        STRUCTURED_TEXT_LIST = 4,
        STRUCTURED_TEXT_GDSCRIPT = 5,
        STRUCTURED_TEXT_CUSTOM = 6
    }
    const enum FixedSizeScaleMode {
        FIXED_SIZE_SCALE_DISABLE = 0,
        FIXED_SIZE_SCALE_INTEGER_ONLY = 1,
        FIXED_SIZE_SCALE_ENABLED = 2
    }
}
export interface VideoStreamPlayback extends Resource {
}
export interface InputEventScreenTouch extends InputEventFromWindow {
    canceled: type.bool;
    double_tap: type.bool;
    index: type.int;
    position: type.Vector2;
    pressed: type.bool;
}
export interface AudioEffect extends Resource {
}
export interface VisualShaderNodeProximityFade extends VisualShaderNode {
}
export interface VisualShaderNodeVec2Constant extends VisualShaderNodeConstant {
    constant: type.Vector2;
}
export interface VSeparator extends Separator {
}
export interface Generic6DOFJoint3D extends Joint3D {
    'angular_limit_x/damping': type.float;
    'angular_limit_x/enabled': type.bool;
    'angular_limit_x/erp': type.float;
    'angular_limit_x/force_limit': type.float;
    'angular_limit_x/lower_angle': type.float;
    'angular_limit_x/restitution': type.float;
    'angular_limit_x/softness': type.float;
    'angular_limit_x/upper_angle': type.float;
    'angular_limit_y/damping': type.float;
    'angular_limit_y/enabled': type.bool;
    'angular_limit_y/erp': type.float;
    'angular_limit_y/force_limit': type.float;
    'angular_limit_y/lower_angle': type.float;
    'angular_limit_y/restitution': type.float;
    'angular_limit_y/softness': type.float;
    'angular_limit_y/upper_angle': type.float;
    'angular_limit_z/damping': type.float;
    'angular_limit_z/enabled': type.bool;
    'angular_limit_z/erp': type.float;
    'angular_limit_z/force_limit': type.float;
    'angular_limit_z/lower_angle': type.float;
    'angular_limit_z/restitution': type.float;
    'angular_limit_z/softness': type.float;
    'angular_limit_z/upper_angle': type.float;
    'angular_motor_x/enabled': type.bool;
    'angular_motor_x/force_limit': type.float;
    'angular_motor_x/target_velocity': type.float;
    'angular_motor_y/enabled': type.bool;
    'angular_motor_y/force_limit': type.float;
    'angular_motor_y/target_velocity': type.float;
    'angular_motor_z/enabled': type.bool;
    'angular_motor_z/force_limit': type.float;
    'angular_motor_z/target_velocity': type.float;
    'angular_spring_x/damping': type.float;
    'angular_spring_x/enabled': type.bool;
    'angular_spring_x/equilibrium_point': type.float;
    'angular_spring_x/stiffness': type.float;
    'angular_spring_y/damping': type.float;
    'angular_spring_y/enabled': type.bool;
    'angular_spring_y/equilibrium_point': type.float;
    'angular_spring_y/stiffness': type.float;
    'angular_spring_z/damping': type.float;
    'angular_spring_z/enabled': type.bool;
    'angular_spring_z/equilibrium_point': type.float;
    'angular_spring_z/stiffness': type.float;
    'linear_limit_x/damping': type.float;
    'linear_limit_x/enabled': type.bool;
    'linear_limit_x/lower_distance': type.float;
    'linear_limit_x/restitution': type.float;
    'linear_limit_x/softness': type.float;
    'linear_limit_x/upper_distance': type.float;
    'linear_limit_y/damping': type.float;
    'linear_limit_y/enabled': type.bool;
    'linear_limit_y/lower_distance': type.float;
    'linear_limit_y/restitution': type.float;
    'linear_limit_y/softness': type.float;
    'linear_limit_y/upper_distance': type.float;
    'linear_limit_z/damping': type.float;
    'linear_limit_z/enabled': type.bool;
    'linear_limit_z/lower_distance': type.float;
    'linear_limit_z/restitution': type.float;
    'linear_limit_z/softness': type.float;
    'linear_limit_z/upper_distance': type.float;
    'linear_motor_x/enabled': type.bool;
    'linear_motor_x/force_limit': type.float;
    'linear_motor_x/target_velocity': type.float;
    'linear_motor_y/enabled': type.bool;
    'linear_motor_y/force_limit': type.float;
    'linear_motor_y/target_velocity': type.float;
    'linear_motor_z/enabled': type.bool;
    'linear_motor_z/force_limit': type.float;
    'linear_motor_z/target_velocity': type.float;
    'linear_spring_x/damping': type.float;
    'linear_spring_x/enabled': type.bool;
    'linear_spring_x/equilibrium_point': type.float;
    'linear_spring_x/stiffness': type.float;
    'linear_spring_y/damping': type.float;
    'linear_spring_y/enabled': type.bool;
    'linear_spring_y/equilibrium_point': type.float;
    'linear_spring_y/stiffness': type.float;
    'linear_spring_z/damping': type.float;
    'linear_spring_z/enabled': type.bool;
    'linear_spring_z/equilibrium_point': type.float;
    'linear_spring_z/stiffness': type.float;
}
export declare namespace Generic6DOFJoint3D {
    const enum Param {
        PARAM_LINEAR_LOWER_LIMIT = 0,
        PARAM_LINEAR_UPPER_LIMIT = 1,
        PARAM_LINEAR_LIMIT_SOFTNESS = 2,
        PARAM_LINEAR_RESTITUTION = 3,
        PARAM_LINEAR_DAMPING = 4,
        PARAM_LINEAR_MOTOR_TARGET_VELOCITY = 5,
        PARAM_LINEAR_MOTOR_FORCE_LIMIT = 6,
        PARAM_LINEAR_SPRING_STIFFNESS = 7,
        PARAM_LINEAR_SPRING_DAMPING = 8,
        PARAM_LINEAR_SPRING_EQUILIBRIUM_POINT = 9,
        PARAM_ANGULAR_LOWER_LIMIT = 10,
        PARAM_ANGULAR_UPPER_LIMIT = 11,
        PARAM_ANGULAR_LIMIT_SOFTNESS = 12,
        PARAM_ANGULAR_DAMPING = 13,
        PARAM_ANGULAR_RESTITUTION = 14,
        PARAM_ANGULAR_FORCE_LIMIT = 15,
        PARAM_ANGULAR_ERP = 16,
        PARAM_ANGULAR_MOTOR_TARGET_VELOCITY = 17,
        PARAM_ANGULAR_MOTOR_FORCE_LIMIT = 18,
        PARAM_ANGULAR_SPRING_STIFFNESS = 19,
        PARAM_ANGULAR_SPRING_DAMPING = 20,
        PARAM_ANGULAR_SPRING_EQUILIBRIUM_POINT = 21,
        PARAM_MAX = 22
    }
    const enum Flag {
        FLAG_ENABLE_LINEAR_LIMIT = 0,
        FLAG_ENABLE_ANGULAR_LIMIT = 1,
        FLAG_ENABLE_LINEAR_SPRING = 3,
        FLAG_ENABLE_ANGULAR_SPRING = 2,
        FLAG_ENABLE_MOTOR = 4,
        FLAG_ENABLE_LINEAR_MOTOR = 5,
        FLAG_MAX = 6
    }
}
export interface InputEventShortcut extends InputEvent {
    shortcut: {
        type: "Shortcut";
        properties: Shortcut;
    };
}
export interface ItemList extends Control {
    allow_reselect: type.bool;
    allow_rmb_select: type.bool;
    allow_search: type.bool;
    auto_height: type.bool;
    auto_width: type.bool;
    clip_contents: type.bool;
    fixed_column_width: type.int;
    fixed_icon_size: type.Vector2i;
    focus_mode: type.int;
    icon_mode: type.int;
    icon_scale: type.float;
    item_count: type.int;
    max_columns: type.int;
    max_text_lines: type.int;
    same_column_width: type.bool;
    select_mode: type.int;
    text_overrun_behavior: type.int;
    font_color: type.Color;
    font_hovered_color: type.Color;
    font_outline_color: type.Color;
    font_selected_color: type.Color;
    guide_color: type.Color;
    h_separation: type.int;
    icon_margin: type.int;
    line_separation: type.int;
    outline_size: type.int;
    v_separation: type.int;
    font: {
        type: "Font";
        properties: Font;
    };
    font_size: type.int;
    cursor: {
        type: "StyleBox";
        properties: StyleBox;
    };
    cursor_unfocused: {
        type: "StyleBox";
        properties: StyleBox;
    };
    focus: {
        type: "StyleBox";
        properties: StyleBox;
    };
    hovered: {
        type: "StyleBox";
        properties: StyleBox;
    };
    panel: {
        type: "StyleBox";
        properties: StyleBox;
    };
    selected: {
        type: "StyleBox";
        properties: StyleBox;
    };
    selected_focus: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export declare namespace ItemList {
    const enum IconMode {
        ICON_MODE_TOP = 0,
        ICON_MODE_LEFT = 1
    }
    const enum SelectMode {
        SELECT_SINGLE = 0,
        SELECT_MULTI = 1
    }
}
export interface RenderSceneBuffersConfiguration extends RefCounted {
    fsr_sharpness: type.float;
    internal_size: type.Vector2i;
    msaa_3d: type.int;
    render_target: {
        type: "RID";
        properties: RID;
    };
    scaling_3d_mode: type.int;
    screen_space_aa: type.int;
    target_size: type.Vector2i;
    texture_mipmap_bias: type.float;
    view_count: type.int;
}
export interface OccluderInstance3D extends VisualInstance3D {
    bake_mask: type.int;
    bake_simplification_distance: type.float;
    occluder: {
        type: "Occluder3D";
        properties: Occluder3D;
    };
}
export interface XRControllerTracker extends XRPositionalTracker {
    type: type.int;
}
export interface Lightmapper extends RefCounted {
}
export interface CapsuleMesh extends PrimitiveMesh {
    height: type.float;
    radial_segments: type.int;
    radius: type.float;
    rings: type.int;
}
export interface MultiMeshInstance3D extends GeometryInstance3D {
    multimesh: {
        type: "MultiMesh";
        properties: MultiMesh;
    };
}
export interface Script extends Resource {
    source_code: type.String;
}
export interface EditorResourceTooltipPlugin extends RefCounted {
}
export interface NavigationAgent3D extends Node {
    avoidance_enabled: type.bool;
    avoidance_layers: type.int;
    avoidance_mask: type.int;
    avoidance_priority: type.float;
    debug_enabled: type.bool;
    debug_path_custom_color: type.Color;
    debug_path_custom_point_size: type.float;
    debug_use_custom: type.bool;
    height: type.float;
    keep_y_velocity: type.bool;
    max_neighbors: type.int;
    max_speed: type.float;
    navigation_layers: type.int;
    neighbor_distance: type.float;
    path_desired_distance: type.float;
    path_height_offset: type.float;
    path_max_distance: type.float;
    path_metadata_flags: type.int;
    path_postprocessing: type.int;
    pathfinding_algorithm: type.int;
    radius: type.float;
    simplify_epsilon: type.float;
    simplify_path: type.bool;
    target_desired_distance: type.float;
    target_position: type.Vector3;
    time_horizon_agents: type.float;
    time_horizon_obstacles: type.float;
    use_3d_avoidance: type.bool;
    velocity: type.Vector3;
}
export interface EditorExportPlatformPC extends EditorExportPlatform {
}
export interface ArrayMesh extends Mesh {
    blend_shape_mode: type.int;
    custom_aabb: type.AABB;
    shadow_mesh: {
        type: "ArrayMesh";
        properties: ArrayMesh;
    };
}
export interface SkeletonModifier3D extends Node3D {
    active: type.bool;
    influence: type.float;
}
export interface AudioEffectBandLimitFilter extends AudioEffectFilter {
}
export interface ScrollContainer extends Container {
    clip_contents: type.bool;
    follow_focus: type.bool;
    horizontal_scroll_mode: type.int;
    scroll_deadzone: type.int;
    scroll_horizontal: type.int;
    scroll_horizontal_custom_step: type.float;
    scroll_vertical: type.int;
    scroll_vertical_custom_step: type.float;
    vertical_scroll_mode: type.int;
    panel: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export declare namespace ScrollContainer {
    const enum ScrollMode {
        SCROLL_MODE_DISABLED = 0,
        SCROLL_MODE_AUTO = 1,
        SCROLL_MODE_SHOW_ALWAYS = 2,
        SCROLL_MODE_SHOW_NEVER = 3,
        SCROLL_MODE_RESERVE = 4
    }
}
export interface ShapeCast3D extends Node3D {
    collide_with_areas: type.bool;
    collide_with_bodies: type.bool;
    collision_mask: type.int;
    collision_result: type.Array;
    debug_shape_custom_color: type.Color;
    enabled: type.bool;
    exclude_parent: type.bool;
    margin: type.float;
    max_results: type.int;
    shape: {
        type: "Shape3D";
        properties: Shape3D;
    };
    target_position: type.Vector3;
}
export interface InputMap extends Object {
}
export interface EditorExportPlugin extends RefCounted {
}
export interface EditorResourcePicker extends HBoxContainer {
    base_type: type.String;
    editable: type.bool;
    edited_resource: {
        type: "Resource";
        properties: Resource;
    };
    toggle_mode: type.bool;
}
export interface XRInterfaceExtension extends XRInterface {
}
export interface MeshLibrary extends Resource {
}
export interface EditorResourcePreviewGenerator extends RefCounted {
}
export interface RigidBody2D extends PhysicsBody2D {
    angular_damp: type.float;
    angular_damp_mode: type.int;
    angular_velocity: type.float;
    can_sleep: type.bool;
    center_of_mass: type.Vector2;
    center_of_mass_mode: type.int;
    constant_force: type.Vector2;
    constant_torque: type.float;
    contact_monitor: type.bool;
    continuous_cd: type.int;
    custom_integrator: type.bool;
    freeze: type.bool;
    freeze_mode: type.int;
    gravity_scale: type.float;
    inertia: type.float;
    linear_damp: type.float;
    linear_damp_mode: type.int;
    linear_velocity: type.Vector2;
    lock_rotation: type.bool;
    mass: type.float;
    max_contacts_reported: type.int;
    physics_material_override: {
        type: "PhysicsMaterial";
        properties: PhysicsMaterial;
    };
    sleeping: type.bool;
}
export declare namespace RigidBody2D {
    const enum FreezeMode {
        FREEZE_MODE_STATIC = 0,
        FREEZE_MODE_KINEMATIC = 1
    }
    const enum CenterOfMassMode {
        CENTER_OF_MASS_MODE_AUTO = 0,
        CENTER_OF_MASS_MODE_CUSTOM = 1
    }
    const enum DampMode {
        DAMP_MODE_COMBINE = 0,
        DAMP_MODE_REPLACE = 1
    }
    const enum CCDMode {
        CCD_MODE_DISABLED = 0,
        CCD_MODE_CAST_RAY = 1,
        CCD_MODE_CAST_SHAPE = 2
    }
}
export interface PhysicsServer3D extends Object {
}
export declare namespace PhysicsServer3D {
    const enum JointType {
        JOINT_TYPE_PIN = 0,
        JOINT_TYPE_HINGE = 1,
        JOINT_TYPE_SLIDER = 2,
        JOINT_TYPE_CONE_TWIST = 3,
        JOINT_TYPE_6DOF = 4,
        JOINT_TYPE_MAX = 5
    }
    const enum PinJointParam {
        PIN_JOINT_BIAS = 0,
        PIN_JOINT_DAMPING = 1,
        PIN_JOINT_IMPULSE_CLAMP = 2
    }
    const enum HingeJointParam {
        HINGE_JOINT_BIAS = 0,
        HINGE_JOINT_LIMIT_UPPER = 1,
        HINGE_JOINT_LIMIT_LOWER = 2,
        HINGE_JOINT_LIMIT_BIAS = 3,
        HINGE_JOINT_LIMIT_SOFTNESS = 4,
        HINGE_JOINT_LIMIT_RELAXATION = 5,
        HINGE_JOINT_MOTOR_TARGET_VELOCITY = 6,
        HINGE_JOINT_MOTOR_MAX_IMPULSE = 7
    }
    const enum HingeJointFlag {
        HINGE_JOINT_FLAG_USE_LIMIT = 0,
        HINGE_JOINT_FLAG_ENABLE_MOTOR = 1
    }
    const enum SliderJointParam {
        SLIDER_JOINT_LINEAR_LIMIT_UPPER = 0,
        SLIDER_JOINT_LINEAR_LIMIT_LOWER = 1,
        SLIDER_JOINT_LINEAR_LIMIT_SOFTNESS = 2,
        SLIDER_JOINT_LINEAR_LIMIT_RESTITUTION = 3,
        SLIDER_JOINT_LINEAR_LIMIT_DAMPING = 4,
        SLIDER_JOINT_LINEAR_MOTION_SOFTNESS = 5,
        SLIDER_JOINT_LINEAR_MOTION_RESTITUTION = 6,
        SLIDER_JOINT_LINEAR_MOTION_DAMPING = 7,
        SLIDER_JOINT_LINEAR_ORTHOGONAL_SOFTNESS = 8,
        SLIDER_JOINT_LINEAR_ORTHOGONAL_RESTITUTION = 9,
        SLIDER_JOINT_LINEAR_ORTHOGONAL_DAMPING = 10,
        SLIDER_JOINT_ANGULAR_LIMIT_UPPER = 11,
        SLIDER_JOINT_ANGULAR_LIMIT_LOWER = 12,
        SLIDER_JOINT_ANGULAR_LIMIT_SOFTNESS = 13,
        SLIDER_JOINT_ANGULAR_LIMIT_RESTITUTION = 14,
        SLIDER_JOINT_ANGULAR_LIMIT_DAMPING = 15,
        SLIDER_JOINT_ANGULAR_MOTION_SOFTNESS = 16,
        SLIDER_JOINT_ANGULAR_MOTION_RESTITUTION = 17,
        SLIDER_JOINT_ANGULAR_MOTION_DAMPING = 18,
        SLIDER_JOINT_ANGULAR_ORTHOGONAL_SOFTNESS = 19,
        SLIDER_JOINT_ANGULAR_ORTHOGONAL_RESTITUTION = 20,
        SLIDER_JOINT_ANGULAR_ORTHOGONAL_DAMPING = 21,
        SLIDER_JOINT_MAX = 22
    }
    const enum ConeTwistJointParam {
        CONE_TWIST_JOINT_SWING_SPAN = 0,
        CONE_TWIST_JOINT_TWIST_SPAN = 1,
        CONE_TWIST_JOINT_BIAS = 2,
        CONE_TWIST_JOINT_SOFTNESS = 3,
        CONE_TWIST_JOINT_RELAXATION = 4
    }
    const enum G6DOFJointAxisParam {
        G6DOF_JOINT_LINEAR_LOWER_LIMIT = 0,
        G6DOF_JOINT_LINEAR_UPPER_LIMIT = 1,
        G6DOF_JOINT_LINEAR_LIMIT_SOFTNESS = 2,
        G6DOF_JOINT_LINEAR_RESTITUTION = 3,
        G6DOF_JOINT_LINEAR_DAMPING = 4,
        G6DOF_JOINT_LINEAR_MOTOR_TARGET_VELOCITY = 5,
        G6DOF_JOINT_LINEAR_MOTOR_FORCE_LIMIT = 6,
        G6DOF_JOINT_LINEAR_SPRING_STIFFNESS = 7,
        G6DOF_JOINT_LINEAR_SPRING_DAMPING = 8,
        G6DOF_JOINT_LINEAR_SPRING_EQUILIBRIUM_POINT = 9,
        G6DOF_JOINT_ANGULAR_LOWER_LIMIT = 10,
        G6DOF_JOINT_ANGULAR_UPPER_LIMIT = 11,
        G6DOF_JOINT_ANGULAR_LIMIT_SOFTNESS = 12,
        G6DOF_JOINT_ANGULAR_DAMPING = 13,
        G6DOF_JOINT_ANGULAR_RESTITUTION = 14,
        G6DOF_JOINT_ANGULAR_FORCE_LIMIT = 15,
        G6DOF_JOINT_ANGULAR_ERP = 16,
        G6DOF_JOINT_ANGULAR_MOTOR_TARGET_VELOCITY = 17,
        G6DOF_JOINT_ANGULAR_MOTOR_FORCE_LIMIT = 18,
        G6DOF_JOINT_ANGULAR_SPRING_STIFFNESS = 19,
        G6DOF_JOINT_ANGULAR_SPRING_DAMPING = 20,
        G6DOF_JOINT_ANGULAR_SPRING_EQUILIBRIUM_POINT = 21,
        G6DOF_JOINT_MAX = 22
    }
    const enum G6DOFJointAxisFlag {
        G6DOF_JOINT_FLAG_ENABLE_LINEAR_LIMIT = 0,
        G6DOF_JOINT_FLAG_ENABLE_ANGULAR_LIMIT = 1,
        G6DOF_JOINT_FLAG_ENABLE_ANGULAR_SPRING = 2,
        G6DOF_JOINT_FLAG_ENABLE_LINEAR_SPRING = 3,
        G6DOF_JOINT_FLAG_ENABLE_MOTOR = 4,
        G6DOF_JOINT_FLAG_ENABLE_LINEAR_MOTOR = 5,
        G6DOF_JOINT_FLAG_MAX = 6
    }
    const enum ShapeType {
        SHAPE_WORLD_BOUNDARY = 0,
        SHAPE_SEPARATION_RAY = 1,
        SHAPE_SPHERE = 2,
        SHAPE_BOX = 3,
        SHAPE_CAPSULE = 4,
        SHAPE_CYLINDER = 5,
        SHAPE_CONVEX_POLYGON = 6,
        SHAPE_CONCAVE_POLYGON = 7,
        SHAPE_HEIGHTMAP = 8,
        SHAPE_SOFT_BODY = 9,
        SHAPE_CUSTOM = 10
    }
    const enum AreaParameter {
        AREA_PARAM_GRAVITY_OVERRIDE_MODE = 0,
        AREA_PARAM_GRAVITY = 1,
        AREA_PARAM_GRAVITY_VECTOR = 2,
        AREA_PARAM_GRAVITY_IS_POINT = 3,
        AREA_PARAM_GRAVITY_POINT_UNIT_DISTANCE = 4,
        AREA_PARAM_LINEAR_DAMP_OVERRIDE_MODE = 5,
        AREA_PARAM_LINEAR_DAMP = 6,
        AREA_PARAM_ANGULAR_DAMP_OVERRIDE_MODE = 7,
        AREA_PARAM_ANGULAR_DAMP = 8,
        AREA_PARAM_PRIORITY = 9,
        AREA_PARAM_WIND_FORCE_MAGNITUDE = 10,
        AREA_PARAM_WIND_SOURCE = 11,
        AREA_PARAM_WIND_DIRECTION = 12,
        AREA_PARAM_WIND_ATTENUATION_FACTOR = 13
    }
    const enum AreaSpaceOverrideMode {
        AREA_SPACE_OVERRIDE_DISABLED = 0,
        AREA_SPACE_OVERRIDE_COMBINE = 1,
        AREA_SPACE_OVERRIDE_COMBINE_REPLACE = 2,
        AREA_SPACE_OVERRIDE_REPLACE = 3,
        AREA_SPACE_OVERRIDE_REPLACE_COMBINE = 4
    }
    const enum BodyMode {
        BODY_MODE_STATIC = 0,
        BODY_MODE_KINEMATIC = 1,
        BODY_MODE_RIGID = 2,
        BODY_MODE_RIGID_LINEAR = 3
    }
    const enum BodyParameter {
        BODY_PARAM_BOUNCE = 0,
        BODY_PARAM_FRICTION = 1,
        BODY_PARAM_MASS = 2,
        BODY_PARAM_INERTIA = 3,
        BODY_PARAM_CENTER_OF_MASS = 4,
        BODY_PARAM_GRAVITY_SCALE = 5,
        BODY_PARAM_LINEAR_DAMP_MODE = 6,
        BODY_PARAM_ANGULAR_DAMP_MODE = 7,
        BODY_PARAM_LINEAR_DAMP = 8,
        BODY_PARAM_ANGULAR_DAMP = 9,
        BODY_PARAM_MAX = 10
    }
    const enum BodyDampMode {
        BODY_DAMP_MODE_COMBINE = 0,
        BODY_DAMP_MODE_REPLACE = 1
    }
    const enum BodyState {
        BODY_STATE_TRANSFORM = 0,
        BODY_STATE_LINEAR_VELOCITY = 1,
        BODY_STATE_ANGULAR_VELOCITY = 2,
        BODY_STATE_SLEEPING = 3,
        BODY_STATE_CAN_SLEEP = 4
    }
    const enum AreaBodyStatus {
        AREA_BODY_ADDED = 0,
        AREA_BODY_REMOVED = 1
    }
    const enum ProcessInfo {
        INFO_ACTIVE_OBJECTS = 0,
        INFO_COLLISION_PAIRS = 1,
        INFO_ISLAND_COUNT = 2
    }
    const enum SpaceParameter {
        SPACE_PARAM_CONTACT_RECYCLE_RADIUS = 0,
        SPACE_PARAM_CONTACT_MAX_SEPARATION = 1,
        SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION = 2,
        SPACE_PARAM_CONTACT_DEFAULT_BIAS = 3,
        SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD = 4,
        SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD = 5,
        SPACE_PARAM_BODY_TIME_TO_SLEEP = 6,
        SPACE_PARAM_SOLVER_ITERATIONS = 7
    }
    const enum BodyAxis {
        BODY_AXIS_LINEAR_X = 1,
        BODY_AXIS_LINEAR_Y = 2,
        BODY_AXIS_LINEAR_Z = 4,
        BODY_AXIS_ANGULAR_X = 8,
        BODY_AXIS_ANGULAR_Y = 16,
        BODY_AXIS_ANGULAR_Z = 32
    }
}
export interface VScrollBar extends ScrollBar {
    size_flags_horizontal: type.int;
    size_flags_vertical: type.int;
}
export interface TouchScreenButton extends Node2D {
    action: type.String;
    bitmask: {
        type: "BitMap";
        properties: BitMap;
    };
    passby_press: type.bool;
    shape: {
        type: "Shape2D";
        properties: Shape2D;
    };
    shape_centered: type.bool;
    shape_visible: type.bool;
    texture_normal: {
        type: "Texture2D";
        properties: Texture2D;
    };
    texture_pressed: {
        type: "Texture2D";
        properties: Texture2D;
    };
    visibility_mode: type.int;
}
export declare namespace TouchScreenButton {
    const enum VisibilityMode {
        VISIBILITY_ALWAYS = 0,
        VISIBILITY_TOUCHSCREEN_ONLY = 1
    }
}
export interface RDShaderSPIRV extends Resource {
    bytecode_compute: type.PackedByteArray;
    bytecode_fragment: type.PackedByteArray;
    bytecode_tesselation_control: type.PackedByteArray;
    bytecode_tesselation_evaluation: type.PackedByteArray;
    bytecode_vertex: type.PackedByteArray;
    compile_error_compute: type.String;
    compile_error_fragment: type.String;
    compile_error_tesselation_control: type.String;
    compile_error_tesselation_evaluation: type.String;
    compile_error_vertex: type.String;
}
export interface ReferenceRect extends Control {
    border_color: type.Color;
    border_width: type.float;
    editor_only: type.bool;
}
export interface CollisionShape2D extends Node2D {
    debug_color: type.Color;
    disabled: type.bool;
    one_way_collision: type.bool;
    one_way_collision_margin: type.float;
    shape: {
        type: "Shape2D";
        properties: Shape2D;
    };
}
export interface NavigationObstacle3D extends Node3D {
    affect_navigation_mesh: type.bool;
    avoidance_enabled: type.bool;
    avoidance_layers: type.int;
    carve_navigation_mesh: type.bool;
    height: type.float;
    radius: type.float;
    use_3d_avoidance: type.bool;
    velocity: type.Vector3;
    vertices: type.PackedVector3Array;
}
export interface CollisionObject3D extends Node3D {
    collision_layer: type.int;
    collision_mask: type.int;
    collision_priority: type.float;
    disable_mode: type.int;
    input_capture_on_drag: type.bool;
    input_ray_pickable: type.bool;
}
export declare namespace CollisionObject3D {
    const enum DisableMode {
        DISABLE_MODE_REMOVE = 0,
        DISABLE_MODE_MAKE_STATIC = 1,
        DISABLE_MODE_KEEP_ACTIVE = 2
    }
}
export interface HeightMapShape3D extends Shape3D {
    map_data: type.PackedFloat32Array;
    map_depth: type.int;
    map_width: type.int;
}
export interface AudioStreamPlayback extends RefCounted {
}
export interface Window extends Viewport {
    always_on_top: type.bool;
    auto_translate: type.bool;
    borderless: type.bool;
    content_scale_aspect: type.int;
    content_scale_factor: type.float;
    content_scale_mode: type.int;
    content_scale_size: type.Vector2i;
    content_scale_stretch: type.int;
    current_screen: type.int;
    exclusive: type.bool;
    extend_to_title: type.bool;
    force_native: type.bool;
    initial_position: type.int;
    keep_title_visible: type.bool;
    max_size: type.Vector2i;
    min_size: type.Vector2i;
    mode: type.int;
    mouse_passthrough: type.bool;
    mouse_passthrough_polygon: type.PackedVector2Array;
    popup_window: type.bool;
    position: type.Vector2i;
    sharp_corners: type.bool;
    size: type.Vector2i;
    theme: {
        type: "Theme";
        properties: Theme;
    };
    theme_type_variation: type.StringName;
    title: type.String;
    transient: type.bool;
    transient_to_focused: type.bool;
    transparent: type.bool;
    unfocusable: type.bool;
    unresizable: type.bool;
    visible: type.bool;
    wrap_controls: type.bool;
    title_color: type.Color;
    title_outline_modulate: type.Color;
    close_h_offset: type.int;
    close_v_offset: type.int;
    resize_margin: type.int;
    title_height: type.int;
    title_outline_size: type.int;
    title_font: {
        type: "Font";
        properties: Font;
    };
    title_font_size: type.int;
    close: {
        type: "Texture2D";
        properties: Texture2D;
    };
    close_pressed: {
        type: "Texture2D";
        properties: Texture2D;
    };
    embedded_border: {
        type: "StyleBox";
        properties: StyleBox;
    };
    embedded_unfocused_border: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export declare namespace Window {
    const NOTIFICATION_VISIBILITY_CHANGED = 30;
    const NOTIFICATION_THEME_CHANGED = 32;
    const enum Mode {
        MODE_WINDOWED = 0,
        MODE_MINIMIZED = 1,
        MODE_MAXIMIZED = 2,
        MODE_FULLSCREEN = 3,
        MODE_EXCLUSIVE_FULLSCREEN = 4
    }
    const enum Flags {
        FLAG_RESIZE_DISABLED = 0,
        FLAG_BORDERLESS = 1,
        FLAG_ALWAYS_ON_TOP = 2,
        FLAG_TRANSPARENT = 3,
        FLAG_NO_FOCUS = 4,
        FLAG_POPUP = 5,
        FLAG_EXTEND_TO_TITLE = 6,
        FLAG_MOUSE_PASSTHROUGH = 7,
        FLAG_SHARP_CORNERS = 8,
        FLAG_MAX = 9
    }
    const enum ContentScaleMode {
        CONTENT_SCALE_MODE_DISABLED = 0,
        CONTENT_SCALE_MODE_CANVAS_ITEMS = 1,
        CONTENT_SCALE_MODE_VIEWPORT = 2
    }
    const enum ContentScaleAspect {
        CONTENT_SCALE_ASPECT_IGNORE = 0,
        CONTENT_SCALE_ASPECT_KEEP = 1,
        CONTENT_SCALE_ASPECT_KEEP_WIDTH = 2,
        CONTENT_SCALE_ASPECT_KEEP_HEIGHT = 3,
        CONTENT_SCALE_ASPECT_EXPAND = 4
    }
    const enum ContentScaleStretch {
        CONTENT_SCALE_STRETCH_FRACTIONAL = 0,
        CONTENT_SCALE_STRETCH_INTEGER = 1
    }
    const enum LayoutDirection {
        LAYOUT_DIRECTION_INHERITED = 0,
        LAYOUT_DIRECTION_APPLICATION_LOCALE = 1,
        LAYOUT_DIRECTION_LTR = 2,
        LAYOUT_DIRECTION_RTL = 3,
        LAYOUT_DIRECTION_SYSTEM_LOCALE = 4,
        LAYOUT_DIRECTION_MAX = 5,
        LAYOUT_DIRECTION_LOCALE = 1
    }
    const enum WindowInitialPosition {
        WINDOW_INITIAL_POSITION_ABSOLUTE = 0,
        WINDOW_INITIAL_POSITION_CENTER_PRIMARY_SCREEN = 1,
        WINDOW_INITIAL_POSITION_CENTER_MAIN_WINDOW_SCREEN = 2,
        WINDOW_INITIAL_POSITION_CENTER_OTHER_SCREEN = 3,
        WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_MOUSE_FOCUS = 4,
        WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_KEYBOARD_FOCUS = 5
    }
}
export interface RemoteTransform3D extends Node3D {
    remote_path: type.NodePath;
    update_position: type.bool;
    update_rotation: type.bool;
    update_scale: type.bool;
    use_global_coordinates: type.bool;
}
export interface CurveTexture extends Texture2D {
    curve: {
        type: "Curve";
        properties: Curve;
    };
    resource_local_to_scene: type.bool;
    texture_mode: type.int;
    width: type.int;
}
export declare namespace CurveTexture {
    const enum TextureMode {
        TEXTURE_MODE_RGB = 0,
        TEXTURE_MODE_RED = 1
    }
}
export interface VisualShaderNodeParticleRingEmitter extends VisualShaderNodeParticleEmitter {
}
export interface InputEventMIDI extends InputEvent {
    channel: type.int;
    controller_number: type.int;
    controller_value: type.int;
    instrument: type.int;
    message: type.int;
    pitch: type.int;
    pressure: type.int;
    velocity: type.int;
}
export interface RemoteTransform2D extends Node2D {
    remote_path: type.NodePath;
    update_position: type.bool;
    update_rotation: type.bool;
    update_scale: type.bool;
    use_global_coordinates: type.bool;
}
export interface InputEventMouse extends InputEventWithModifiers {
    button_mask: type.int;
    global_position: type.Vector2;
    position: type.Vector2;
}
export interface AudioEffectChorus extends AudioEffect {
    dry: type.float;
    'voice/1/cutoff_hz': type.float;
    'voice/1/delay_ms': type.float;
    'voice/1/depth_ms': type.float;
    'voice/1/level_db': type.float;
    'voice/1/pan': type.float;
    'voice/1/rate_hz': type.float;
    'voice/2/cutoff_hz': type.float;
    'voice/2/delay_ms': type.float;
    'voice/2/depth_ms': type.float;
    'voice/2/level_db': type.float;
    'voice/2/pan': type.float;
    'voice/2/rate_hz': type.float;
    'voice/3/cutoff_hz': type.float;
    'voice/3/delay_ms': type.float;
    'voice/3/depth_ms': type.float;
    'voice/3/level_db': type.float;
    'voice/3/pan': type.float;
    'voice/3/rate_hz': type.float;
    'voice/4/cutoff_hz': type.float;
    'voice/4/delay_ms': type.float;
    'voice/4/depth_ms': type.float;
    'voice/4/level_db': type.float;
    'voice/4/pan': type.float;
    'voice/4/rate_hz': type.float;
    voice_count: type.int;
    wet: type.float;
}
export interface MultiplayerPeerExtension extends MultiplayerPeer {
}
export interface LightmapProbe extends Node3D {
}
export interface HScrollBar extends ScrollBar {
}
export interface Sky extends Resource {
    process_mode: type.int;
    radiance_size: type.int;
    sky_material: {
        type: "Material";
        properties: Material;
    };
}
export declare namespace Sky {
    const enum RadianceSize {
        RADIANCE_SIZE_32 = 0,
        RADIANCE_SIZE_64 = 1,
        RADIANCE_SIZE_128 = 2,
        RADIANCE_SIZE_256 = 3,
        RADIANCE_SIZE_512 = 4,
        RADIANCE_SIZE_1024 = 5,
        RADIANCE_SIZE_2048 = 6,
        RADIANCE_SIZE_MAX = 7
    }
    const enum ProcessMode {
        PROCESS_MODE_AUTOMATIC = 0,
        PROCESS_MODE_QUALITY = 1,
        PROCESS_MODE_INCREMENTAL = 2,
        PROCESS_MODE_REALTIME = 3
    }
}
export interface StyleBoxLine extends StyleBox {
    color: type.Color;
    grow_begin: type.float;
    grow_end: type.float;
    thickness: type.int;
    vertical: type.bool;
}
export interface NavigationObstacle2D extends Node2D {
    affect_navigation_mesh: type.bool;
    avoidance_enabled: type.bool;
    avoidance_layers: type.int;
    carve_navigation_mesh: type.bool;
    radius: type.float;
    velocity: type.Vector2;
    vertices: type.PackedVector2Array;
}
export interface CollisionObject2D extends Node2D {
    collision_layer: type.int;
    collision_mask: type.int;
    collision_priority: type.float;
    disable_mode: type.int;
    input_pickable: type.bool;
}
export declare namespace CollisionObject2D {
    const enum DisableMode {
        DISABLE_MODE_REMOVE = 0,
        DISABLE_MODE_MAKE_STATIC = 1,
        DISABLE_MODE_KEEP_ACTIVE = 2
    }
}
export interface SphereMesh extends PrimitiveMesh {
    height: type.float;
    is_hemisphere: type.bool;
    radial_segments: type.int;
    radius: type.float;
    rings: type.int;
}
export interface AnimationNodeTimeScale extends AnimationNode {
}
export interface PopupPanel extends Popup {
    panel: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export interface CollisionShape3D extends Node3D {
    disabled: type.bool;
    shape: {
        type: "Shape3D";
        properties: Shape3D;
    };
}
export interface EditorSpinSlider extends Range {
    flat: type.bool;
    focus_mode: type.int;
    hide_slider: type.bool;
    label: type.String;
    read_only: type.bool;
    size_flags_vertical: type.int;
    step: type.float;
    suffix: type.String;
    updown: {
        type: "Texture2D";
        properties: Texture2D;
    };
    updown_disabled: {
        type: "Texture2D";
        properties: Texture2D;
    };
}
export interface Panel extends Control {
    panel: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export interface FileDialog extends ConfirmationDialog {
    access: type.int;
    current_dir: type.String;
    current_file: type.String;
    current_path: type.String;
    dialog_hide_on_ok: type.bool;
    file_mode: type.int;
    filename_filter: type.String;
    filters: type.PackedStringArray;
    mode_overrides_title: type.bool;
    option_count: type.int;
    root_subfolder: type.String;
    show_hidden_files: type.bool;
    size: type.Vector2i;
    title: type.String;
    use_native_dialog: type.bool;
    file_disabled_color: type.Color;
    file_icon_color: type.Color;
    folder_icon_color: type.Color;
    back_folder: {
        type: "Texture2D";
        properties: Texture2D;
    };
    create_folder: {
        type: "Texture2D";
        properties: Texture2D;
    };
    file: {
        type: "Texture2D";
        properties: Texture2D;
    };
    folder: {
        type: "Texture2D";
        properties: Texture2D;
    };
    forward_folder: {
        type: "Texture2D";
        properties: Texture2D;
    };
    parent_folder: {
        type: "Texture2D";
        properties: Texture2D;
    };
    reload: {
        type: "Texture2D";
        properties: Texture2D;
    };
    toggle_filename_filter: {
        type: "Texture2D";
        properties: Texture2D;
    };
    toggle_hidden: {
        type: "Texture2D";
        properties: Texture2D;
    };
}
export declare namespace FileDialog {
    const enum FileMode {
        FILE_MODE_OPEN_FILE = 0,
        FILE_MODE_OPEN_FILES = 1,
        FILE_MODE_OPEN_DIR = 2,
        FILE_MODE_OPEN_ANY = 3,
        FILE_MODE_SAVE_FILE = 4
    }
    const enum Access {
        ACCESS_RESOURCES = 0,
        ACCESS_USERDATA = 1,
        ACCESS_FILESYSTEM = 2
    }
}
export interface AudioEffectReverb extends AudioEffect {
    damping: type.float;
    dry: type.float;
    hipass: type.float;
    predelay_feedback: type.float;
    predelay_msec: type.float;
    room_size: type.float;
    spread: type.float;
    wet: type.float;
}
export interface AnimationNodeOneShot extends AnimationNodeSync {
    autorestart: type.bool;
    autorestart_delay: type.float;
    autorestart_random_delay: type.float;
    break_loop_at_end: type.bool;
    fadein_curve: {
        type: "Curve";
        properties: Curve;
    };
    fadein_time: type.float;
    fadeout_curve: {
        type: "Curve";
        properties: Curve;
    };
    fadeout_time: type.float;
    mix_mode: type.int;
}
export declare namespace AnimationNodeOneShot {
    const enum OneShotRequest {
        ONE_SHOT_REQUEST_NONE = 0,
        ONE_SHOT_REQUEST_FIRE = 1,
        ONE_SHOT_REQUEST_ABORT = 2,
        ONE_SHOT_REQUEST_FADE_OUT = 3
    }
    const enum MixMode {
        MIX_MODE_BLEND = 0,
        MIX_MODE_ADD = 1
    }
}
export interface RigidBody3D extends PhysicsBody3D {
    angular_damp: type.float;
    angular_damp_mode: type.int;
    angular_velocity: type.Vector3;
    can_sleep: type.bool;
    center_of_mass: type.Vector3;
    center_of_mass_mode: type.int;
    constant_force: type.Vector3;
    constant_torque: type.Vector3;
    contact_monitor: type.bool;
    continuous_cd: type.bool;
    custom_integrator: type.bool;
    freeze: type.bool;
    freeze_mode: type.int;
    gravity_scale: type.float;
    inertia: type.Vector3;
    linear_damp: type.float;
    linear_damp_mode: type.int;
    linear_velocity: type.Vector3;
    lock_rotation: type.bool;
    mass: type.float;
    max_contacts_reported: type.int;
    physics_material_override: {
        type: "PhysicsMaterial";
        properties: PhysicsMaterial;
    };
    sleeping: type.bool;
}
export declare namespace RigidBody3D {
    const enum FreezeMode {
        FREEZE_MODE_STATIC = 0,
        FREEZE_MODE_KINEMATIC = 1
    }
    const enum CenterOfMassMode {
        CENTER_OF_MASS_MODE_AUTO = 0,
        CENTER_OF_MASS_MODE_CUSTOM = 1
    }
    const enum DampMode {
        DAMP_MODE_COMBINE = 0,
        DAMP_MODE_REPLACE = 1
    }
}
export interface PhysicsServer2D extends Object {
}
export declare namespace PhysicsServer2D {
    const enum SpaceParameter {
        SPACE_PARAM_CONTACT_RECYCLE_RADIUS = 0,
        SPACE_PARAM_CONTACT_MAX_SEPARATION = 1,
        SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION = 2,
        SPACE_PARAM_CONTACT_DEFAULT_BIAS = 3,
        SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD = 4,
        SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD = 5,
        SPACE_PARAM_BODY_TIME_TO_SLEEP = 6,
        SPACE_PARAM_CONSTRAINT_DEFAULT_BIAS = 7,
        SPACE_PARAM_SOLVER_ITERATIONS = 8
    }
    const enum ShapeType {
        SHAPE_WORLD_BOUNDARY = 0,
        SHAPE_SEPARATION_RAY = 1,
        SHAPE_SEGMENT = 2,
        SHAPE_CIRCLE = 3,
        SHAPE_RECTANGLE = 4,
        SHAPE_CAPSULE = 5,
        SHAPE_CONVEX_POLYGON = 6,
        SHAPE_CONCAVE_POLYGON = 7,
        SHAPE_CUSTOM = 8
    }
    const enum AreaParameter {
        AREA_PARAM_GRAVITY_OVERRIDE_MODE = 0,
        AREA_PARAM_GRAVITY = 1,
        AREA_PARAM_GRAVITY_VECTOR = 2,
        AREA_PARAM_GRAVITY_IS_POINT = 3,
        AREA_PARAM_GRAVITY_POINT_UNIT_DISTANCE = 4,
        AREA_PARAM_LINEAR_DAMP_OVERRIDE_MODE = 5,
        AREA_PARAM_LINEAR_DAMP = 6,
        AREA_PARAM_ANGULAR_DAMP_OVERRIDE_MODE = 7,
        AREA_PARAM_ANGULAR_DAMP = 8,
        AREA_PARAM_PRIORITY = 9
    }
    const enum AreaSpaceOverrideMode {
        AREA_SPACE_OVERRIDE_DISABLED = 0,
        AREA_SPACE_OVERRIDE_COMBINE = 1,
        AREA_SPACE_OVERRIDE_COMBINE_REPLACE = 2,
        AREA_SPACE_OVERRIDE_REPLACE = 3,
        AREA_SPACE_OVERRIDE_REPLACE_COMBINE = 4
    }
    const enum BodyMode {
        BODY_MODE_STATIC = 0,
        BODY_MODE_KINEMATIC = 1,
        BODY_MODE_RIGID = 2,
        BODY_MODE_RIGID_LINEAR = 3
    }
    const enum BodyParameter {
        BODY_PARAM_BOUNCE = 0,
        BODY_PARAM_FRICTION = 1,
        BODY_PARAM_MASS = 2,
        BODY_PARAM_INERTIA = 3,
        BODY_PARAM_CENTER_OF_MASS = 4,
        BODY_PARAM_GRAVITY_SCALE = 5,
        BODY_PARAM_LINEAR_DAMP_MODE = 6,
        BODY_PARAM_ANGULAR_DAMP_MODE = 7,
        BODY_PARAM_LINEAR_DAMP = 8,
        BODY_PARAM_ANGULAR_DAMP = 9,
        BODY_PARAM_MAX = 10
    }
    const enum BodyDampMode {
        BODY_DAMP_MODE_COMBINE = 0,
        BODY_DAMP_MODE_REPLACE = 1
    }
    const enum BodyState {
        BODY_STATE_TRANSFORM = 0,
        BODY_STATE_LINEAR_VELOCITY = 1,
        BODY_STATE_ANGULAR_VELOCITY = 2,
        BODY_STATE_SLEEPING = 3,
        BODY_STATE_CAN_SLEEP = 4
    }
    const enum JointType {
        JOINT_TYPE_PIN = 0,
        JOINT_TYPE_GROOVE = 1,
        JOINT_TYPE_DAMPED_SPRING = 2,
        JOINT_TYPE_MAX = 3
    }
    const enum JointParam {
        JOINT_PARAM_BIAS = 0,
        JOINT_PARAM_MAX_BIAS = 1,
        JOINT_PARAM_MAX_FORCE = 2
    }
    const enum PinJointParam {
        PIN_JOINT_SOFTNESS = 0,
        PIN_JOINT_LIMIT_UPPER = 1,
        PIN_JOINT_LIMIT_LOWER = 2,
        PIN_JOINT_MOTOR_TARGET_VELOCITY = 3
    }
    const enum PinJointFlag {
        PIN_JOINT_FLAG_ANGULAR_LIMIT_ENABLED = 0,
        PIN_JOINT_FLAG_MOTOR_ENABLED = 1
    }
    const enum DampedSpringParam {
        DAMPED_SPRING_REST_LENGTH = 0,
        DAMPED_SPRING_STIFFNESS = 1,
        DAMPED_SPRING_DAMPING = 2
    }
    const enum CCDMode {
        CCD_MODE_DISABLED = 0,
        CCD_MODE_CAST_RAY = 1,
        CCD_MODE_CAST_SHAPE = 2
    }
    const enum AreaBodyStatus {
        AREA_BODY_ADDED = 0,
        AREA_BODY_REMOVED = 1
    }
    const enum ProcessInfo {
        INFO_ACTIVE_OBJECTS = 0,
        INFO_COLLISION_PAIRS = 1,
        INFO_ISLAND_COUNT = 2
    }
}
export interface Shader extends Resource {
    code: type.String;
}
export declare namespace Shader {
    const enum Mode {
        MODE_SPATIAL = 0,
        MODE_CANVAS_ITEM = 1,
        MODE_PARTICLES = 2,
        MODE_SKY = 3,
        MODE_FOG = 4
    }
}
export interface VisualShaderNodeComment extends VisualShaderNodeFrame {
    description: type.String;
}
export interface WorldEnvironment extends Node {
    camera_attributes: {
        type: "CameraAttributes";
        properties: CameraAttributes;
    };
    compositor: {
        type: "Compositor";
        properties: Compositor;
    };
    environment: {
        type: "Environment";
        properties: Environment;
    };
}
export interface ShapeCast2D extends Node2D {
    collide_with_areas: type.bool;
    collide_with_bodies: type.bool;
    collision_mask: type.int;
    collision_result: type.Array;
    enabled: type.bool;
    exclude_parent: type.bool;
    margin: type.float;
    max_results: type.int;
    shape: {
        type: "Shape2D";
        properties: Shape2D;
    };
    target_position: type.Vector2;
}
export interface SpinBox extends Range {
    alignment: type.int;
    custom_arrow_step: type.float;
    editable: type.bool;
    prefix: type.String;
    select_all_on_focus: type.bool;
    size_flags_vertical: type.int;
    step: type.float;
    suffix: type.String;
    update_on_text_changed: type.bool;
    down_disabled_icon_modulate: type.Color;
    down_hover_icon_modulate: type.Color;
    down_icon_modulate: type.Color;
    down_pressed_icon_modulate: type.Color;
    up_disabled_icon_modulate: type.Color;
    up_hover_icon_modulate: type.Color;
    up_icon_modulate: type.Color;
    up_pressed_icon_modulate: type.Color;
    buttons_vertical_separation: type.int;
    buttons_width: type.int;
    field_and_buttons_separation: type.int;
    set_min_buttons_width_from_icons: type.int;
    down: {
        type: "Texture2D";
        properties: Texture2D;
    };
    down_disabled: {
        type: "Texture2D";
        properties: Texture2D;
    };
    down_hover: {
        type: "Texture2D";
        properties: Texture2D;
    };
    down_pressed: {
        type: "Texture2D";
        properties: Texture2D;
    };
    up: {
        type: "Texture2D";
        properties: Texture2D;
    };
    up_disabled: {
        type: "Texture2D";
        properties: Texture2D;
    };
    up_hover: {
        type: "Texture2D";
        properties: Texture2D;
    };
    up_pressed: {
        type: "Texture2D";
        properties: Texture2D;
    };
    updown: {
        type: "Texture2D";
        properties: Texture2D;
    };
    down_background: {
        type: "StyleBox";
        properties: StyleBox;
    };
    down_background_disabled: {
        type: "StyleBox";
        properties: StyleBox;
    };
    down_background_hovered: {
        type: "StyleBox";
        properties: StyleBox;
    };
    down_background_pressed: {
        type: "StyleBox";
        properties: StyleBox;
    };
    field_and_buttons_separator: {
        type: "StyleBox";
        properties: StyleBox;
    };
    up_background: {
        type: "StyleBox";
        properties: StyleBox;
    };
    up_background_disabled: {
        type: "StyleBox";
        properties: StyleBox;
    };
    up_background_hovered: {
        type: "StyleBox";
        properties: StyleBox;
    };
    up_background_pressed: {
        type: "StyleBox";
        properties: StyleBox;
    };
    up_down_buttons_separator: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export interface GradientTexture1D extends Texture2D {
    gradient: {
        type: "Gradient";
        properties: Gradient;
    };
    resource_local_to_scene: type.bool;
    use_hdr: type.bool;
    width: type.int;
}
export interface ResourceImporterOBJ extends ResourceImporter {
    force_disable_mesh_compression: type.bool;
    generate_lightmap_uv2: type.bool;
    generate_lightmap_uv2_texel_size: type.float;
    generate_lods: type.bool;
    generate_shadow_mesh: type.bool;
    generate_tangents: type.bool;
    offset_mesh: type.Vector3;
    scale_mesh: type.Vector3;
}
export interface MultiMeshInstance2D extends Node2D {
    multimesh: {
        type: "MultiMesh";
        properties: MultiMesh;
    };
    texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
}
export interface XRHandModifier3D extends SkeletonModifier3D {
    bone_update: type.int;
    hand_tracker: type.StringName;
}
export declare namespace XRHandModifier3D {
    const enum BoneUpdate {
        BONE_UPDATE_FULL = 0,
        BONE_UPDATE_ROTATION_ONLY = 1,
        BONE_UPDATE_MAX = 2
    }
}
export interface EditorUndoRedoManager extends Object {
}
export declare namespace EditorUndoRedoManager {
    const enum SpecialHistory {
        GLOBAL_HISTORY = 0,
        REMOTE_HISTORY = -9,
        INVALID_HISTORY = -99
    }
}
export interface NavigationAgent2D extends Node {
    avoidance_enabled: type.bool;
    avoidance_layers: type.int;
    avoidance_mask: type.int;
    avoidance_priority: type.float;
    debug_enabled: type.bool;
    debug_path_custom_color: type.Color;
    debug_path_custom_line_width: type.float;
    debug_path_custom_point_size: type.float;
    debug_use_custom: type.bool;
    max_neighbors: type.int;
    max_speed: type.float;
    navigation_layers: type.int;
    neighbor_distance: type.float;
    path_desired_distance: type.float;
    path_max_distance: type.float;
    path_metadata_flags: type.int;
    path_postprocessing: type.int;
    pathfinding_algorithm: type.int;
    radius: type.float;
    simplify_epsilon: type.float;
    simplify_path: type.bool;
    target_desired_distance: type.float;
    target_position: type.Vector2;
    time_horizon_agents: type.float;
    time_horizon_obstacles: type.float;
    velocity: type.Vector2;
}
export interface StreamPeerGZIP extends StreamPeer {
}
export interface InputEventScreenDrag extends InputEventFromWindow {
    index: type.int;
    pen_inverted: type.bool;
    position: type.Vector2;
    pressure: type.float;
    relative: type.Vector2;
    screen_relative: type.Vector2;
    screen_velocity: type.Vector2;
    tilt: type.Vector2;
    velocity: type.Vector2;
}
export interface VisualShaderNodeFresnel extends VisualShaderNode {
}
export interface ParallaxLayer extends Node2D {
    motion_mirroring: type.Vector2;
    motion_offset: type.Vector2;
    motion_scale: type.Vector2;
    physics_interpolation_mode: type.int;
}
export interface Parallax2D extends Node2D {
    autoscroll: type.Vector2;
    follow_viewport: type.bool;
    ignore_camera_scroll: type.bool;
    limit_begin: type.Vector2;
    limit_end: type.Vector2;
    physics_interpolation_mode: type.int;
    repeat_size: type.Vector2;
    repeat_times: type.int;
    screen_offset: type.Vector2;
    scroll_offset: type.Vector2;
    scroll_scale: type.Vector2;
}
export interface ResourceImporterShaderFile extends ResourceImporter {
}
export interface CanvasGroup extends Node2D {
    clear_margin: type.float;
    fit_margin: type.float;
    use_mipmaps: type.bool;
}
export interface AnimatedTexture extends Texture2D {
    current_frame: type.int;
    frames: type.int;
    one_shot: type.bool;
    pause: type.bool;
    resource_local_to_scene: type.bool;
    speed_scale: type.float;
}
export declare namespace AnimatedTexture {
    const MAX_FRAMES = 256;
}
export interface MethodTweener extends Tweener {
}
export interface HBoxContainer extends BoxContainer {
}
export interface AnimationNodeStateMachineTransition extends Resource {
    advance_condition: type.StringName;
    advance_expression: type.String;
    advance_mode: type.int;
    break_loop_at_end: type.bool;
    priority: type.int;
    reset: type.bool;
    switch_mode: type.int;
    xfade_curve: {
        type: "Curve";
        properties: Curve;
    };
    xfade_time: type.float;
}
export declare namespace AnimationNodeStateMachineTransition {
    const enum SwitchMode {
        SWITCH_MODE_IMMEDIATE = 0,
        SWITCH_MODE_SYNC = 1,
        SWITCH_MODE_AT_END = 2
    }
    const enum AdvanceMode {
        ADVANCE_MODE_DISABLED = 0,
        ADVANCE_MODE_ENABLED = 1,
        ADVANCE_MODE_AUTO = 2
    }
}
export interface MissingResource extends Resource {
    original_class: type.String;
    recording_properties: type.bool;
}
export interface Tree extends Control {
    allow_reselect: type.bool;
    allow_rmb_select: type.bool;
    allow_search: type.bool;
    clip_contents: type.bool;
    column_titles_visible: type.bool;
    columns: type.int;
    drop_mode_flags: type.int;
    enable_recursive_folding: type.bool;
    focus_mode: type.int;
    hide_folding: type.bool;
    hide_root: type.bool;
    scroll_horizontal_enabled: type.bool;
    scroll_vertical_enabled: type.bool;
    select_mode: type.int;
    children_hl_line_color: type.Color;
    custom_button_font_highlight: type.Color;
    drop_position_color: type.Color;
    font_color: type.Color;
    font_disabled_color: type.Color;
    font_hovered_color: type.Color;
    font_hovered_dimmed_color: type.Color;
    font_outline_color: type.Color;
    font_selected_color: type.Color;
    guide_color: type.Color;
    parent_hl_line_color: type.Color;
    relationship_line_color: type.Color;
    title_button_color: type.Color;
    button_margin: type.int;
    children_hl_line_width: type.int;
    draw_guides: type.int;
    draw_relationship_lines: type.int;
    h_separation: type.int;
    icon_max_width: type.int;
    inner_item_margin_bottom: type.int;
    inner_item_margin_left: type.int;
    inner_item_margin_right: type.int;
    inner_item_margin_top: type.int;
    item_margin: type.int;
    outline_size: type.int;
    parent_hl_line_margin: type.int;
    parent_hl_line_width: type.int;
    relationship_line_width: type.int;
    scroll_border: type.int;
    scroll_speed: type.int;
    scrollbar_h_separation: type.int;
    scrollbar_margin_bottom: type.int;
    scrollbar_margin_left: type.int;
    scrollbar_margin_right: type.int;
    scrollbar_margin_top: type.int;
    scrollbar_v_separation: type.int;
    v_separation: type.int;
    font: {
        type: "Font";
        properties: Font;
    };
    title_button_font: {
        type: "Font";
        properties: Font;
    };
    font_size: type.int;
    title_button_font_size: type.int;
    arrow: {
        type: "Texture2D";
        properties: Texture2D;
    };
    arrow_collapsed: {
        type: "Texture2D";
        properties: Texture2D;
    };
    arrow_collapsed_mirrored: {
        type: "Texture2D";
        properties: Texture2D;
    };
    checked: {
        type: "Texture2D";
        properties: Texture2D;
    };
    checked_disabled: {
        type: "Texture2D";
        properties: Texture2D;
    };
    indeterminate: {
        type: "Texture2D";
        properties: Texture2D;
    };
    indeterminate_disabled: {
        type: "Texture2D";
        properties: Texture2D;
    };
    select_arrow: {
        type: "Texture2D";
        properties: Texture2D;
    };
    unchecked: {
        type: "Texture2D";
        properties: Texture2D;
    };
    unchecked_disabled: {
        type: "Texture2D";
        properties: Texture2D;
    };
    updown: {
        type: "Texture2D";
        properties: Texture2D;
    };
    button_hover: {
        type: "StyleBox";
        properties: StyleBox;
    };
    button_pressed: {
        type: "StyleBox";
        properties: StyleBox;
    };
    cursor: {
        type: "StyleBox";
        properties: StyleBox;
    };
    cursor_unfocused: {
        type: "StyleBox";
        properties: StyleBox;
    };
    custom_button: {
        type: "StyleBox";
        properties: StyleBox;
    };
    custom_button_hover: {
        type: "StyleBox";
        properties: StyleBox;
    };
    custom_button_pressed: {
        type: "StyleBox";
        properties: StyleBox;
    };
    focus: {
        type: "StyleBox";
        properties: StyleBox;
    };
    hovered: {
        type: "StyleBox";
        properties: StyleBox;
    };
    hovered_dimmed: {
        type: "StyleBox";
        properties: StyleBox;
    };
    panel: {
        type: "StyleBox";
        properties: StyleBox;
    };
    selected: {
        type: "StyleBox";
        properties: StyleBox;
    };
    selected_focus: {
        type: "StyleBox";
        properties: StyleBox;
    };
    title_button_hover: {
        type: "StyleBox";
        properties: StyleBox;
    };
    title_button_normal: {
        type: "StyleBox";
        properties: StyleBox;
    };
    title_button_pressed: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export declare namespace Tree {
    const enum SelectMode {
        SELECT_SINGLE = 0,
        SELECT_ROW = 1,
        SELECT_MULTI = 2
    }
    const enum DropModeFlags {
        DROP_MODE_DISABLED = 0,
        DROP_MODE_ON_ITEM = 1,
        DROP_MODE_INBETWEEN = 2
    }
}
export interface HSeparator extends Separator {
}
export interface RDFramebufferPass extends RefCounted {
    color_attachments: type.PackedInt32Array;
    depth_attachment: type.int;
    input_attachments: type.PackedInt32Array;
    preserve_attachments: type.PackedInt32Array;
    resolve_attachments: type.PackedInt32Array;
}
export declare namespace RDFramebufferPass {
    const ATTACHMENT_UNUSED = -1;
}
export interface VisualShaderNodeCustom extends VisualShaderNode {
}
export interface ResourceImporterCSVTranslation extends ResourceImporter {
    compress: type.bool;
    delimiter: type.int;
}
export interface EditorSyntaxHighlighter extends SyntaxHighlighter {
}
export interface VisualShaderNodeFaceForward extends VisualShaderNodeVectorBase {
}
export interface RDPipelineColorBlendState extends RefCounted {
    attachments: {
        type: "RDPipelineColorBlendStateAttachment[]";
        properties: RDPipelineColorBlendStateAttachment[];
    };
    blend_constant: type.Color;
    enable_logic_op: type.bool;
    logic_op: type.int;
}
export interface AudioStreamWAV extends AudioStream {
    data: type.PackedByteArray;
    format: type.int;
    loop_begin: type.int;
    loop_end: type.int;
    loop_mode: type.int;
    mix_rate: type.int;
    stereo: type.bool;
}
export declare namespace AudioStreamWAV {
    const enum Format {
        FORMAT_8_BITS = 0,
        FORMAT_16_BITS = 1,
        FORMAT_IMA_ADPCM = 2,
        FORMAT_QOA = 3
    }
    const enum LoopMode {
        LOOP_DISABLED = 0,
        LOOP_FORWARD = 1,
        LOOP_PINGPONG = 2,
        LOOP_BACKWARD = 3
    }
}
export interface ResourceImporter extends RefCounted {
}
export declare namespace ResourceImporter {
    const enum ImportOrder {
        IMPORT_ORDER_DEFAULT = 0,
        IMPORT_ORDER_SCENE = 100
    }
}
export interface OmniLight3D extends Light3D {
    omni_attenuation: type.float;
    omni_range: type.float;
    omni_shadow_mode: type.int;
    shadow_normal_bias: type.float;
}
export declare namespace OmniLight3D {
    const enum ShadowMode {
        SHADOW_DUAL_PARABOLOID = 0,
        SHADOW_CUBE = 1
    }
}
export interface SkeletonModification2DCCDIK extends SkeletonModification2D {
    ccdik_data_chain_length: type.int;
    target_nodepath: type.NodePath;
    tip_nodepath: type.NodePath;
}
export interface TranslationDomain extends RefCounted {
    pseudolocalization_accents_enabled: type.bool;
    pseudolocalization_double_vowels_enabled: type.bool;
    pseudolocalization_enabled: type.bool;
    pseudolocalization_expansion_ratio: type.float;
    pseudolocalization_fake_bidi_enabled: type.bool;
    pseudolocalization_override_enabled: type.bool;
    pseudolocalization_prefix: type.String;
    pseudolocalization_skip_placeholders_enabled: type.bool;
    pseudolocalization_suffix: type.String;
}
export interface VisualShaderNodeCubemapParameter extends VisualShaderNodeTextureParameter {
}
export interface PacketPeerStream extends PacketPeer {
    input_buffer_max_size: type.int;
    output_buffer_max_size: type.int;
    stream_peer: {
        type: "StreamPeer";
        properties: StreamPeer;
    };
}
export interface RichTextEffect extends Resource {
}
export interface VisualShaderNodeTexture extends VisualShaderNode {
    source: type.int;
    texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    texture_type: type.int;
}
export declare namespace VisualShaderNodeTexture {
    const enum Source {
        SOURCE_TEXTURE = 0,
        SOURCE_SCREEN = 1,
        SOURCE_2D_TEXTURE = 2,
        SOURCE_2D_NORMAL = 3,
        SOURCE_DEPTH = 4,
        SOURCE_PORT = 5,
        SOURCE_3D_NORMAL = 6,
        SOURCE_ROUGHNESS = 7,
        SOURCE_MAX = 8
    }
    const enum TextureType {
        TYPE_DATA = 0,
        TYPE_COLOR = 1,
        TYPE_NORMAL_MAP = 2,
        TYPE_MAX = 3
    }
}
export interface ImporterMeshInstance3D extends Node3D {
    cast_shadow: type.int;
    layer_mask: type.int;
    mesh: {
        type: "ImporterMesh";
        properties: ImporterMesh;
    };
    skeleton_path: type.NodePath;
    skin: {
        type: "Skin";
        properties: Skin;
    };
    visibility_range_begin: type.float;
    visibility_range_begin_margin: type.float;
    visibility_range_end: type.float;
    visibility_range_end_margin: type.float;
    visibility_range_fade_mode: type.int;
}
export interface Texture2DArray extends ImageTextureLayered {
}
export interface AudioEffectPanner extends AudioEffect {
    pan: type.float;
}
export interface PlaceholderTexture2DArray extends PlaceholderTextureLayered {
}
export interface VisualShaderNodeParticleAccelerator extends VisualShaderNode {
    mode: type.int;
}
export declare namespace VisualShaderNodeParticleAccelerator {
    const enum Mode {
        MODE_LINEAR = 0,
        MODE_RADIAL = 1,
        MODE_TANGENTIAL = 2,
        MODE_MAX = 3
    }
}
export interface PhysicsRayQueryParameters2D extends RefCounted {
    collide_with_areas: type.bool;
    collide_with_bodies: type.bool;
    collision_mask: type.int;
    exclude: {
        type: "RID[]";
        properties: RID[];
    };
    from: type.Vector2;
    hit_from_inside: type.bool;
    to: type.Vector2;
}
export interface BoxMesh extends PrimitiveMesh {
    size: type.Vector3;
    subdivide_depth: type.int;
    subdivide_height: type.int;
    subdivide_width: type.int;
}
export interface VisualShaderNodeUIntConstant extends VisualShaderNodeConstant {
    constant: type.int;
}
export interface AudioStreamGenerator extends AudioStream {
    buffer_length: type.float;
    mix_rate: type.float;
}
export interface AtlasTexture extends Texture2D {
    atlas: {
        type: "Texture2D";
        properties: Texture2D;
    };
    filter_clip: type.bool;
    margin: type.Rect2;
    region: type.Rect2;
    resource_local_to_scene: type.bool;
}
export interface UDPServer extends RefCounted {
    max_pending_connections: type.int;
}
export interface RenderSceneDataExtension extends RenderSceneData {
}
export interface EditorDebuggerPlugin extends RefCounted {
}
export interface XRTracker extends RefCounted {
    description: type.String;
    name: type.StringName;
    type: type.int;
}
export interface XRCamera3D extends Camera3D {
}
export interface VisualShaderNodeExpression extends VisualShaderNodeGroupBase {
    expression: type.String;
}
export interface ExternalTexture extends Texture2D {
    resource_local_to_scene: type.bool;
    size: type.Vector2;
}
export interface VisibleOnScreenNotifier2D extends Node2D {
    rect: type.Rect2;
}
export interface BackBufferCopy extends Node2D {
    copy_mode: type.int;
    rect: type.Rect2;
}
export declare namespace BackBufferCopy {
    const enum CopyMode {
        COPY_MODE_DISABLED = 0,
        COPY_MODE_RECT = 1,
        COPY_MODE_VIEWPORT = 2
    }
}
export interface EditorFeatureProfile extends RefCounted {
}
export declare namespace EditorFeatureProfile {
    const enum Feature {
        FEATURE_3D = 0,
        FEATURE_SCRIPT = 1,
        FEATURE_ASSET_LIB = 2,
        FEATURE_SCENE_TREE = 3,
        FEATURE_NODE_DOCK = 4,
        FEATURE_FILESYSTEM_DOCK = 5,
        FEATURE_IMPORT_DOCK = 6,
        FEATURE_HISTORY_DOCK = 7,
        FEATURE_GAME = 8,
        FEATURE_MAX = 9
    }
}
export interface VisualShaderNodeTextureSDFNormal extends VisualShaderNode {
}
export interface Texture2DArrayRD extends TextureLayeredRD {
}
export interface EditorResourcePreview extends Node {
}
export interface AudioStream extends Resource {
}
export interface VisualShaderNodeBooleanParameter extends VisualShaderNodeParameter {
    default_value: type.bool;
    default_value_enabled: type.bool;
}
export interface TreeItem extends Object {
    collapsed: type.bool;
    custom_minimum_height: type.int;
    disable_folding: type.bool;
    visible: type.bool;
}
export declare namespace TreeItem {
    const enum TreeCellMode {
        CELL_MODE_STRING = 0,
        CELL_MODE_CHECK = 1,
        CELL_MODE_RANGE = 2,
        CELL_MODE_ICON = 3,
        CELL_MODE_CUSTOM = 4
    }
}
export interface GPUParticlesCollisionBox3D extends GPUParticlesCollision3D {
    size: type.Vector3;
}
export interface CodeEdit extends TextEdit {
    auto_brace_completion_enabled: type.bool;
    auto_brace_completion_highlight_matching: type.bool;
    auto_brace_completion_pairs: {
        type: "Dictionary";
        properties: Dictionary;
    };
    code_completion_enabled: type.bool;
    code_completion_prefixes: type.String[];
    delimiter_comments: type.String[];
    delimiter_strings: type.String[];
    gutters_draw_bookmarks: type.bool;
    gutters_draw_breakpoints_gutter: type.bool;
    gutters_draw_executing_lines: type.bool;
    gutters_draw_fold_gutter: type.bool;
    gutters_draw_line_numbers: type.bool;
    gutters_zero_pad_line_numbers: type.bool;
    indent_automatic: type.bool;
    indent_automatic_prefixes: type.String[];
    indent_size: type.int;
    indent_use_spaces: type.bool;
    layout_direction: type.int;
    line_folding: type.bool;
    line_length_guidelines: type.int[];
    symbol_lookup_on_click: type.bool;
    text_direction: type.int;
    bookmark_color: type.Color;
    brace_mismatch_color: type.Color;
    breakpoint_color: type.Color;
    code_folding_color: type.Color;
    completion_background_color: type.Color;
    completion_existing_color: type.Color;
    completion_scroll_color: type.Color;
    completion_scroll_hovered_color: type.Color;
    completion_selected_color: type.Color;
    executing_line_color: type.Color;
    folded_code_region_color: type.Color;
    line_length_guideline_color: type.Color;
    line_number_color: type.Color;
    completion_lines: type.int;
    completion_max_width: type.int;
    completion_scroll_width: type.int;
    bookmark: {
        type: "Texture2D";
        properties: Texture2D;
    };
    breakpoint: {
        type: "Texture2D";
        properties: Texture2D;
    };
    can_fold: {
        type: "Texture2D";
        properties: Texture2D;
    };
    can_fold_code_region: {
        type: "Texture2D";
        properties: Texture2D;
    };
    completion_color_bg: {
        type: "Texture2D";
        properties: Texture2D;
    };
    executing_line: {
        type: "Texture2D";
        properties: Texture2D;
    };
    folded: {
        type: "Texture2D";
        properties: Texture2D;
    };
    folded_code_region: {
        type: "Texture2D";
        properties: Texture2D;
    };
    folded_eol_icon: {
        type: "Texture2D";
        properties: Texture2D;
    };
    completion: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export declare namespace CodeEdit {
    const enum CodeCompletionKind {
        KIND_CLASS = 0,
        KIND_FUNCTION = 1,
        KIND_SIGNAL = 2,
        KIND_VARIABLE = 3,
        KIND_MEMBER = 4,
        KIND_ENUM = 5,
        KIND_CONSTANT = 6,
        KIND_NODE_PATH = 7,
        KIND_FILE_PATH = 8,
        KIND_PLAIN_TEXT = 9
    }
    const enum CodeCompletionLocation {
        LOCATION_LOCAL = 0,
        LOCATION_PARENT_MASK = 256,
        LOCATION_OTHER_USER_CODE = 512,
        LOCATION_OTHER = 1024
    }
}
export interface Skin extends Resource {
}
export interface FontVariation extends Font {
    base_font: {
        type: "Font";
        properties: Font;
    };
    baseline_offset: type.float;
    opentype_features: {
        type: "Dictionary";
        properties: Dictionary;
    };
    spacing_bottom: type.int;
    spacing_glyph: type.int;
    spacing_space: type.int;
    spacing_top: type.int;
    variation_embolden: type.float;
    variation_face_index: type.int;
    variation_opentype: {
        type: "Dictionary";
        properties: Dictionary;
    };
    variation_transform: type.Transform2D;
}
export interface NavigationPathQueryParameters3D extends RefCounted {
    map: {
        type: "RID";
        properties: RID;
    };
    metadata_flags: type.int;
    navigation_layers: type.int;
    path_postprocessing: type.int;
    pathfinding_algorithm: type.int;
    simplify_epsilon: type.float;
    simplify_path: type.bool;
    start_position: type.Vector3;
    target_position: type.Vector3;
}
export declare namespace NavigationPathQueryParameters3D {
    const enum PathfindingAlgorithm {
        PATHFINDING_ALGORITHM_ASTAR = 0
    }
    const enum PathPostProcessing {
        PATH_POSTPROCESSING_CORRIDORFUNNEL = 0,
        PATH_POSTPROCESSING_EDGECENTERED = 1
    }
    const enum PathMetadataFlags {
        PATH_METADATA_INCLUDE_NONE = 0,
        PATH_METADATA_INCLUDE_TYPES = 1,
        PATH_METADATA_INCLUDE_RIDS = 2,
        PATH_METADATA_INCLUDE_OWNERS = 4,
        PATH_METADATA_INCLUDE_ALL = 7
    }
}
export interface SkeletonProfile extends Resource {
    bone_size: type.int;
    group_size: type.int;
    root_bone: type.StringName;
    scale_base_bone: type.StringName;
}
export declare namespace SkeletonProfile {
    const enum TailDirection {
        TAIL_DIRECTION_AVERAGE_CHILDREN = 0,
        TAIL_DIRECTION_SPECIFIC_CHILD = 1,
        TAIL_DIRECTION_END = 2
    }
}
export interface InputEventJoypadButton extends InputEvent {
    button_index: type.int;
    pressed: type.bool;
    pressure: type.float;
}
export interface UndoRedo extends Object {
    max_steps: type.int;
}
export declare namespace UndoRedo {
    const enum MergeMode {
        MERGE_DISABLE = 0,
        MERGE_ENDS = 1,
        MERGE_ALL = 2
    }
}
export interface PhysicsDirectBodyState3DExtension extends PhysicsDirectBodyState3D {
}
export interface CameraServer extends Object {
}
export declare namespace CameraServer {
    const enum FeedImage {
        FEED_RGBA_IMAGE = 0,
        FEED_YCBCR_IMAGE = 0,
        FEED_Y_IMAGE = 0,
        FEED_CBCR_IMAGE = 1
    }
}
export interface Texture extends Resource {
}
export interface PhysicsServer3DExtension extends PhysicsServer3D {
}
export interface ProceduralSkyMaterial extends Material {
    energy_multiplier: type.float;
    ground_bottom_color: type.Color;
    ground_curve: type.float;
    ground_energy_multiplier: type.float;
    ground_horizon_color: type.Color;
    sky_cover: {
        type: "Texture2D";
        properties: Texture2D;
    };
    sky_cover_modulate: type.Color;
    sky_curve: type.float;
    sky_energy_multiplier: type.float;
    sky_horizon_color: type.Color;
    sky_top_color: type.Color;
    sun_angle_max: type.float;
    sun_curve: type.float;
    use_debanding: type.bool;
}
export interface CylinderMesh extends PrimitiveMesh {
    bottom_radius: type.float;
    cap_bottom: type.bool;
    cap_top: type.bool;
    height: type.float;
    radial_segments: type.int;
    rings: type.int;
    top_radius: type.float;
}
export interface InstancePlaceholder extends Node {
}
export interface NavigationPathQueryResult3D extends RefCounted {
    path: type.PackedVector3Array;
    path_owner_ids: type.PackedInt64Array;
    path_rids: {
        type: "RID[]";
        properties: RID[];
    };
    path_types: type.PackedInt32Array;
}
export declare namespace NavigationPathQueryResult3D {
    const enum PathSegmentType {
        PATH_SEGMENT_TYPE_REGION = 0,
        PATH_SEGMENT_TYPE_LINK = 1
    }
}
export interface PlaceholderCubemapArray extends PlaceholderTextureLayered {
}
export interface SpringArm3D extends Node3D {
    collision_mask: type.int;
    margin: type.float;
    shape: {
        type: "Shape3D";
        properties: Shape3D;
    };
    spring_length: type.float;
}
export interface OS extends Object {
    delta_smoothing: type.bool;
    low_processor_usage_mode: type.bool;
    low_processor_usage_mode_sleep_usec: type.int;
}
export declare namespace OS {
    const enum RenderingDriver {
        RENDERING_DRIVER_VULKAN = 0,
        RENDERING_DRIVER_OPENGL3 = 1,
        RENDERING_DRIVER_D3D12 = 2,
        RENDERING_DRIVER_METAL = 3
    }
    const enum SystemDir {
        SYSTEM_DIR_DESKTOP = 0,
        SYSTEM_DIR_DCIM = 1,
        SYSTEM_DIR_DOCUMENTS = 2,
        SYSTEM_DIR_DOWNLOADS = 3,
        SYSTEM_DIR_MOVIES = 4,
        SYSTEM_DIR_MUSIC = 5,
        SYSTEM_DIR_PICTURES = 6,
        SYSTEM_DIR_RINGTONES = 7
    }
}
export interface TextureRect extends Control {
    expand_mode: type.int;
    flip_h: type.bool;
    flip_v: type.bool;
    mouse_filter: type.int;
    stretch_mode: type.int;
    texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
}
export declare namespace TextureRect {
    const enum ExpandMode {
        EXPAND_KEEP_SIZE = 0,
        EXPAND_IGNORE_SIZE = 1,
        EXPAND_FIT_WIDTH = 2,
        EXPAND_FIT_WIDTH_PROPORTIONAL = 3,
        EXPAND_FIT_HEIGHT = 4,
        EXPAND_FIT_HEIGHT_PROPORTIONAL = 5
    }
    const enum StretchMode {
        STRETCH_SCALE = 0,
        STRETCH_TILE = 1,
        STRETCH_KEEP = 2,
        STRETCH_KEEP_CENTERED = 3,
        STRETCH_KEEP_ASPECT = 4,
        STRETCH_KEEP_ASPECT_CENTERED = 5,
        STRETCH_KEEP_ASPECT_COVERED = 6
    }
}
export interface SpriteFrames extends Resource {
}
export interface VisualShaderNodeSDFRaymarch extends VisualShaderNode {
}
export interface BoxShape3D extends Shape3D {
    size: type.Vector3;
}
export interface AudioEffectPitchShift extends AudioEffect {
    fft_size: type.int;
    oversampling: type.int;
    pitch_scale: type.float;
}
export declare namespace AudioEffectPitchShift {
    const enum FFTSize {
        FFT_SIZE_256 = 0,
        FFT_SIZE_512 = 1,
        FFT_SIZE_1024 = 2,
        FFT_SIZE_2048 = 3,
        FFT_SIZE_4096 = 4,
        FFT_SIZE_MAX = 5
    }
}
export interface ResourceImporterWAV extends ResourceImporter {
    'compress/mode': type.int;
    'edit/loop_begin': type.int;
    'edit/loop_end': type.int;
    'edit/loop_mode': type.int;
    'edit/normalize': type.bool;
    'edit/trim': type.bool;
    'force/8_bit': type.bool;
    'force/max_rate': type.bool;
    'force/max_rate_hz': type.float;
    'force/mono': type.bool;
}
export interface Mesh extends Resource {
    lightmap_size_hint: type.Vector2i;
}
export declare namespace Mesh {
    const enum PrimitiveType {
        PRIMITIVE_POINTS = 0,
        PRIMITIVE_LINES = 1,
        PRIMITIVE_LINE_STRIP = 2,
        PRIMITIVE_TRIANGLES = 3,
        PRIMITIVE_TRIANGLE_STRIP = 4
    }
    const enum ArrayType {
        ARRAY_VERTEX = 0,
        ARRAY_NORMAL = 1,
        ARRAY_TANGENT = 2,
        ARRAY_COLOR = 3,
        ARRAY_TEX_UV = 4,
        ARRAY_TEX_UV2 = 5,
        ARRAY_CUSTOM0 = 6,
        ARRAY_CUSTOM1 = 7,
        ARRAY_CUSTOM2 = 8,
        ARRAY_CUSTOM3 = 9,
        ARRAY_BONES = 10,
        ARRAY_WEIGHTS = 11,
        ARRAY_INDEX = 12,
        ARRAY_MAX = 13
    }
    const enum ArrayCustomFormat {
        ARRAY_CUSTOM_RGBA8_UNORM = 0,
        ARRAY_CUSTOM_RGBA8_SNORM = 1,
        ARRAY_CUSTOM_RG_HALF = 2,
        ARRAY_CUSTOM_RGBA_HALF = 3,
        ARRAY_CUSTOM_R_FLOAT = 4,
        ARRAY_CUSTOM_RG_FLOAT = 5,
        ARRAY_CUSTOM_RGB_FLOAT = 6,
        ARRAY_CUSTOM_RGBA_FLOAT = 7,
        ARRAY_CUSTOM_MAX = 8
    }
    const enum ArrayFormat {
        ARRAY_FORMAT_VERTEX = 1,
        ARRAY_FORMAT_NORMAL = 2,
        ARRAY_FORMAT_TANGENT = 4,
        ARRAY_FORMAT_COLOR = 8,
        ARRAY_FORMAT_TEX_UV = 16,
        ARRAY_FORMAT_TEX_UV2 = 32,
        ARRAY_FORMAT_CUSTOM0 = 64,
        ARRAY_FORMAT_CUSTOM1 = 128,
        ARRAY_FORMAT_CUSTOM2 = 256,
        ARRAY_FORMAT_CUSTOM3 = 512,
        ARRAY_FORMAT_BONES = 1024,
        ARRAY_FORMAT_WEIGHTS = 2048,
        ARRAY_FORMAT_INDEX = 4096,
        ARRAY_FORMAT_BLEND_SHAPE_MASK = 7,
        ARRAY_FORMAT_CUSTOM_BASE = 13,
        ARRAY_FORMAT_CUSTOM_BITS = 3,
        ARRAY_FORMAT_CUSTOM0_SHIFT = 13,
        ARRAY_FORMAT_CUSTOM1_SHIFT = 16,
        ARRAY_FORMAT_CUSTOM2_SHIFT = 19,
        ARRAY_FORMAT_CUSTOM3_SHIFT = 22,
        ARRAY_FORMAT_CUSTOM_MASK = 7,
        ARRAY_COMPRESS_FLAGS_BASE = 25,
        ARRAY_FLAG_USE_2D_VERTICES = 33554432,
        ARRAY_FLAG_USE_DYNAMIC_UPDATE = 67108864,
        ARRAY_FLAG_USE_8_BONE_WEIGHTS = 134217728,
        ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY = 268435456,
        ARRAY_FLAG_COMPRESS_ATTRIBUTES = 536870912
    }
    const enum BlendShapeMode {
        BLEND_SHAPE_MODE_NORMALIZED = 0,
        BLEND_SHAPE_MODE_RELATIVE = 1
    }
}
export interface VSplitContainer extends SplitContainer {
}
export interface Input extends Object {
    emulate_mouse_from_touch: type.bool;
    emulate_touch_from_mouse: type.bool;
    mouse_mode: type.int;
    use_accumulated_input: type.bool;
}
export declare namespace Input {
    const enum MouseMode {
        MOUSE_MODE_VISIBLE = 0,
        MOUSE_MODE_HIDDEN = 1,
        MOUSE_MODE_CAPTURED = 2,
        MOUSE_MODE_CONFINED = 3,
        MOUSE_MODE_CONFINED_HIDDEN = 4
    }
    const enum CursorShape {
        CURSOR_ARROW = 0,
        CURSOR_IBEAM = 1,
        CURSOR_POINTING_HAND = 2,
        CURSOR_CROSS = 3,
        CURSOR_WAIT = 4,
        CURSOR_BUSY = 5,
        CURSOR_DRAG = 6,
        CURSOR_CAN_DROP = 7,
        CURSOR_FORBIDDEN = 8,
        CURSOR_VSIZE = 9,
        CURSOR_HSIZE = 10,
        CURSOR_BDIAGSIZE = 11,
        CURSOR_FDIAGSIZE = 12,
        CURSOR_MOVE = 13,
        CURSOR_VSPLIT = 14,
        CURSOR_HSPLIT = 15,
        CURSOR_HELP = 16
    }
}
export interface AudioStreamPlaybackResampled extends AudioStreamPlayback {
}
export interface AudioEffectDelay extends AudioEffect {
    dry: type.float;
    feedback_active: type.bool;
    feedback_delay_ms: type.float;
    feedback_level_db: type.float;
    feedback_lowpass: type.float;
    tap1_active: type.bool;
    tap1_delay_ms: type.float;
    tap1_level_db: type.float;
    tap1_pan: type.float;
    tap2_active: type.bool;
    tap2_delay_ms: type.float;
    tap2_level_db: type.float;
    tap2_pan: type.float;
}
export interface RDTextureFormat extends RefCounted {
    array_layers: type.int;
    depth: type.int;
    format: type.int;
    height: type.int;
    mipmaps: type.int;
    samples: type.int;
    texture_type: type.int;
    usage_bits: type.int;
    width: type.int;
}
export interface RenderDataRD extends RenderData {
}
export interface PrimitiveMesh extends Mesh {
    add_uv2: type.bool;
    custom_aabb: type.AABB;
    flip_faces: type.bool;
    material: {
        type: "Material";
        properties: Material;
    };
    uv2_padding: type.float;
}
export interface PlaceholderTexture2D extends Texture2D {
    resource_local_to_scene: type.bool;
    size: type.Vector2;
}
export interface ColorPicker extends VBoxContainer {
    can_add_swatches: type.bool;
    color: type.Color;
    color_mode: type.int;
    color_modes_visible: type.bool;
    deferred_mode: type.bool;
    edit_alpha: type.bool;
    hex_visible: type.bool;
    picker_shape: type.int;
    presets_visible: type.bool;
    sampler_visible: type.bool;
    sliders_visible: type.bool;
    center_slider_grabbers: type.int;
    h_width: type.int;
    label_width: type.int;
    margin: type.int;
    sv_height: type.int;
    sv_width: type.int;
    add_preset: {
        type: "Texture2D";
        properties: Texture2D;
    };
    bar_arrow: {
        type: "Texture2D";
        properties: Texture2D;
    };
    color_hue: {
        type: "Texture2D";
        properties: Texture2D;
    };
    color_okhsl_hue: {
        type: "Texture2D";
        properties: Texture2D;
    };
    expanded_arrow: {
        type: "Texture2D";
        properties: Texture2D;
    };
    folded_arrow: {
        type: "Texture2D";
        properties: Texture2D;
    };
    overbright_indicator: {
        type: "Texture2D";
        properties: Texture2D;
    };
    picker_cursor: {
        type: "Texture2D";
        properties: Texture2D;
    };
    sample_bg: {
        type: "Texture2D";
        properties: Texture2D;
    };
    sample_revert: {
        type: "Texture2D";
        properties: Texture2D;
    };
    screen_picker: {
        type: "Texture2D";
        properties: Texture2D;
    };
    shape_circle: {
        type: "Texture2D";
        properties: Texture2D;
    };
    shape_rect: {
        type: "Texture2D";
        properties: Texture2D;
    };
    shape_rect_wheel: {
        type: "Texture2D";
        properties: Texture2D;
    };
}
export declare namespace ColorPicker {
    const enum ColorModeType {
        MODE_RGB = 0,
        MODE_HSV = 1,
        MODE_RAW = 2,
        MODE_OKHSL = 3
    }
    const enum PickerShapeType {
        SHAPE_HSV_RECTANGLE = 0,
        SHAPE_HSV_WHEEL = 1,
        SHAPE_VHS_CIRCLE = 2,
        SHAPE_OKHSL_CIRCLE = 3,
        SHAPE_NONE = 4
    }
}
export interface Geometry3D extends Object {
}
export interface AudioListener2D extends Node2D {
}
export interface AnimationNodeTimeSeek extends AnimationNode {
}
export interface VisualShaderNodeTextureSDF extends VisualShaderNode {
}
export interface EditorPaths extends Object {
}
export interface Tween extends RefCounted {
}
export declare namespace Tween {
    const enum TweenProcessMode {
        TWEEN_PROCESS_PHYSICS = 0,
        TWEEN_PROCESS_IDLE = 1
    }
    const enum TweenPauseMode {
        TWEEN_PAUSE_BOUND = 0,
        TWEEN_PAUSE_STOP = 1,
        TWEEN_PAUSE_PROCESS = 2
    }
    const enum TransitionType {
        TRANS_LINEAR = 0,
        TRANS_SINE = 1,
        TRANS_QUINT = 2,
        TRANS_QUART = 3,
        TRANS_QUAD = 4,
        TRANS_EXPO = 5,
        TRANS_ELASTIC = 6,
        TRANS_CUBIC = 7,
        TRANS_CIRC = 8,
        TRANS_BOUNCE = 9,
        TRANS_BACK = 10,
        TRANS_SPRING = 11
    }
    const enum EaseType {
        EASE_IN = 0,
        EASE_OUT = 1,
        EASE_IN_OUT = 2,
        EASE_OUT_IN = 3
    }
}
export interface TabBar extends Control {
    clip_tabs: type.bool;
    current_tab: type.int;
    deselect_enabled: type.bool;
    drag_to_rearrange_enabled: type.bool;
    focus_mode: type.int;
    max_tab_width: type.int;
    scroll_to_selected: type.bool;
    scrolling_enabled: type.bool;
    select_with_rmb: type.bool;
    tab_alignment: type.int;
    tab_close_display_policy: type.int;
    tab_count: type.int;
    tabs_rearrange_group: type.int;
    drop_mark_color: type.Color;
    font_disabled_color: type.Color;
    font_hovered_color: type.Color;
    font_outline_color: type.Color;
    font_selected_color: type.Color;
    font_unselected_color: type.Color;
    h_separation: type.int;
    icon_max_width: type.int;
    outline_size: type.int;
    font: {
        type: "Font";
        properties: Font;
    };
    font_size: type.int;
    close: {
        type: "Texture2D";
        properties: Texture2D;
    };
    decrement: {
        type: "Texture2D";
        properties: Texture2D;
    };
    decrement_highlight: {
        type: "Texture2D";
        properties: Texture2D;
    };
    drop_mark: {
        type: "Texture2D";
        properties: Texture2D;
    };
    increment: {
        type: "Texture2D";
        properties: Texture2D;
    };
    increment_highlight: {
        type: "Texture2D";
        properties: Texture2D;
    };
    button_highlight: {
        type: "StyleBox";
        properties: StyleBox;
    };
    button_pressed: {
        type: "StyleBox";
        properties: StyleBox;
    };
    tab_disabled: {
        type: "StyleBox";
        properties: StyleBox;
    };
    tab_focus: {
        type: "StyleBox";
        properties: StyleBox;
    };
    tab_hovered: {
        type: "StyleBox";
        properties: StyleBox;
    };
    tab_selected: {
        type: "StyleBox";
        properties: StyleBox;
    };
    tab_unselected: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export declare namespace TabBar {
    const enum AlignmentMode {
        ALIGNMENT_LEFT = 0,
        ALIGNMENT_CENTER = 1,
        ALIGNMENT_RIGHT = 2,
        ALIGNMENT_MAX = 3
    }
    const enum CloseButtonDisplayPolicy {
        CLOSE_BUTTON_SHOW_NEVER = 0,
        CLOSE_BUTTON_SHOW_ACTIVE_ONLY = 1,
        CLOSE_BUTTON_SHOW_ALWAYS = 2,
        CLOSE_BUTTON_MAX = 3
    }
}
export interface EditorProperty extends Container {
    checkable: type.bool;
    checked: type.bool;
    deletable: type.bool;
    draw_warning: type.bool;
    keying: type.bool;
    label: type.String;
    read_only: type.bool;
}
export interface AspectRatioContainer extends Container {
    alignment_horizontal: type.int;
    alignment_vertical: type.int;
    ratio: type.float;
    stretch_mode: type.int;
}
export declare namespace AspectRatioContainer {
    const enum StretchMode {
        STRETCH_WIDTH_CONTROLS_HEIGHT = 0,
        STRETCH_HEIGHT_CONTROLS_WIDTH = 1,
        STRETCH_FIT = 2,
        STRETCH_COVER = 3
    }
    const enum AlignmentMode {
        ALIGNMENT_BEGIN = 0,
        ALIGNMENT_CENTER = 1,
        ALIGNMENT_END = 2
    }
}
export interface AStar3D extends RefCounted {
}
export interface SubViewport extends Viewport {
    render_target_clear_mode: type.int;
    render_target_update_mode: type.int;
    size: type.Vector2i;
    size_2d_override: type.Vector2i;
    size_2d_override_stretch: type.bool;
}
export declare namespace SubViewport {
    const enum ClearMode {
        CLEAR_MODE_ALWAYS = 0,
        CLEAR_MODE_NEVER = 1,
        CLEAR_MODE_ONCE = 2
    }
    const enum UpdateMode {
        UPDATE_DISABLED = 0,
        UPDATE_ONCE = 1,
        UPDATE_WHEN_VISIBLE = 2,
        UPDATE_WHEN_PARENT_VISIBLE = 3,
        UPDATE_ALWAYS = 4
    }
}
export interface TileSet extends Resource {
    tile_layout: type.int;
    tile_offset_axis: type.int;
    tile_shape: type.int;
    tile_size: type.Vector2i;
    uv_clipping: type.bool;
}
export declare namespace TileSet {
    const enum TileShape {
        TILE_SHAPE_SQUARE = 0,
        TILE_SHAPE_ISOMETRIC = 1,
        TILE_SHAPE_HALF_OFFSET_SQUARE = 2,
        TILE_SHAPE_HEXAGON = 3
    }
    const enum TileLayout {
        TILE_LAYOUT_STACKED = 0,
        TILE_LAYOUT_STACKED_OFFSET = 1,
        TILE_LAYOUT_STAIRS_RIGHT = 2,
        TILE_LAYOUT_STAIRS_DOWN = 3,
        TILE_LAYOUT_DIAMOND_RIGHT = 4,
        TILE_LAYOUT_DIAMOND_DOWN = 5
    }
    const enum TileOffsetAxis {
        TILE_OFFSET_AXIS_HORIZONTAL = 0,
        TILE_OFFSET_AXIS_VERTICAL = 1
    }
    const enum CellNeighbor {
        CELL_NEIGHBOR_RIGHT_SIDE = 0,
        CELL_NEIGHBOR_RIGHT_CORNER = 1,
        CELL_NEIGHBOR_BOTTOM_RIGHT_SIDE = 2,
        CELL_NEIGHBOR_BOTTOM_RIGHT_CORNER = 3,
        CELL_NEIGHBOR_BOTTOM_SIDE = 4,
        CELL_NEIGHBOR_BOTTOM_CORNER = 5,
        CELL_NEIGHBOR_BOTTOM_LEFT_SIDE = 6,
        CELL_NEIGHBOR_BOTTOM_LEFT_CORNER = 7,
        CELL_NEIGHBOR_LEFT_SIDE = 8,
        CELL_NEIGHBOR_LEFT_CORNER = 9,
        CELL_NEIGHBOR_TOP_LEFT_SIDE = 10,
        CELL_NEIGHBOR_TOP_LEFT_CORNER = 11,
        CELL_NEIGHBOR_TOP_SIDE = 12,
        CELL_NEIGHBOR_TOP_CORNER = 13,
        CELL_NEIGHBOR_TOP_RIGHT_SIDE = 14,
        CELL_NEIGHBOR_TOP_RIGHT_CORNER = 15
    }
    const enum TerrainMode {
        TERRAIN_MODE_MATCH_CORNERS_AND_SIDES = 0,
        TERRAIN_MODE_MATCH_CORNERS = 1,
        TERRAIN_MODE_MATCH_SIDES = 2
    }
}
export interface AudioEffectEQ21 extends AudioEffectEQ {
}
export interface RenderingDevice extends Object {
}
export declare namespace RenderingDevice {
    const enum DeviceType {
        DEVICE_TYPE_OTHER = 0,
        DEVICE_TYPE_INTEGRATED_GPU = 1,
        DEVICE_TYPE_DISCRETE_GPU = 2,
        DEVICE_TYPE_VIRTUAL_GPU = 3,
        DEVICE_TYPE_CPU = 4,
        DEVICE_TYPE_MAX = 5
    }
    const enum DriverResource {
        DRIVER_RESOURCE_LOGICAL_DEVICE = 0,
        DRIVER_RESOURCE_PHYSICAL_DEVICE = 1,
        DRIVER_RESOURCE_TOPMOST_OBJECT = 2,
        DRIVER_RESOURCE_COMMAND_QUEUE = 3,
        DRIVER_RESOURCE_QUEUE_FAMILY = 4,
        DRIVER_RESOURCE_TEXTURE = 5,
        DRIVER_RESOURCE_TEXTURE_VIEW = 6,
        DRIVER_RESOURCE_TEXTURE_DATA_FORMAT = 7,
        DRIVER_RESOURCE_SAMPLER = 8,
        DRIVER_RESOURCE_UNIFORM_SET = 9,
        DRIVER_RESOURCE_BUFFER = 10,
        DRIVER_RESOURCE_COMPUTE_PIPELINE = 11,
        DRIVER_RESOURCE_RENDER_PIPELINE = 12,
        DRIVER_RESOURCE_VULKAN_DEVICE = 0,
        DRIVER_RESOURCE_VULKAN_PHYSICAL_DEVICE = 1,
        DRIVER_RESOURCE_VULKAN_INSTANCE = 2,
        DRIVER_RESOURCE_VULKAN_QUEUE = 3,
        DRIVER_RESOURCE_VULKAN_QUEUE_FAMILY_INDEX = 4,
        DRIVER_RESOURCE_VULKAN_IMAGE = 5,
        DRIVER_RESOURCE_VULKAN_IMAGE_VIEW = 6,
        DRIVER_RESOURCE_VULKAN_IMAGE_NATIVE_TEXTURE_FORMAT = 7,
        DRIVER_RESOURCE_VULKAN_SAMPLER = 8,
        DRIVER_RESOURCE_VULKAN_DESCRIPTOR_SET = 9,
        DRIVER_RESOURCE_VULKAN_BUFFER = 10,
        DRIVER_RESOURCE_VULKAN_COMPUTE_PIPELINE = 11,
        DRIVER_RESOURCE_VULKAN_RENDER_PIPELINE = 12
    }
    const enum DataFormat {
        DATA_FORMAT_R4G4_UNORM_PACK8 = 0,
        DATA_FORMAT_R4G4B4A4_UNORM_PACK16 = 1,
        DATA_FORMAT_B4G4R4A4_UNORM_PACK16 = 2,
        DATA_FORMAT_R5G6B5_UNORM_PACK16 = 3,
        DATA_FORMAT_B5G6R5_UNORM_PACK16 = 4,
        DATA_FORMAT_R5G5B5A1_UNORM_PACK16 = 5,
        DATA_FORMAT_B5G5R5A1_UNORM_PACK16 = 6,
        DATA_FORMAT_A1R5G5B5_UNORM_PACK16 = 7,
        DATA_FORMAT_R8_UNORM = 8,
        DATA_FORMAT_R8_SNORM = 9,
        DATA_FORMAT_R8_USCALED = 10,
        DATA_FORMAT_R8_SSCALED = 11,
        DATA_FORMAT_R8_UINT = 12,
        DATA_FORMAT_R8_SINT = 13,
        DATA_FORMAT_R8_SRGB = 14,
        DATA_FORMAT_R8G8_UNORM = 15,
        DATA_FORMAT_R8G8_SNORM = 16,
        DATA_FORMAT_R8G8_USCALED = 17,
        DATA_FORMAT_R8G8_SSCALED = 18,
        DATA_FORMAT_R8G8_UINT = 19,
        DATA_FORMAT_R8G8_SINT = 20,
        DATA_FORMAT_R8G8_SRGB = 21,
        DATA_FORMAT_R8G8B8_UNORM = 22,
        DATA_FORMAT_R8G8B8_SNORM = 23,
        DATA_FORMAT_R8G8B8_USCALED = 24,
        DATA_FORMAT_R8G8B8_SSCALED = 25,
        DATA_FORMAT_R8G8B8_UINT = 26,
        DATA_FORMAT_R8G8B8_SINT = 27,
        DATA_FORMAT_R8G8B8_SRGB = 28,
        DATA_FORMAT_B8G8R8_UNORM = 29,
        DATA_FORMAT_B8G8R8_SNORM = 30,
        DATA_FORMAT_B8G8R8_USCALED = 31,
        DATA_FORMAT_B8G8R8_SSCALED = 32,
        DATA_FORMAT_B8G8R8_UINT = 33,
        DATA_FORMAT_B8G8R8_SINT = 34,
        DATA_FORMAT_B8G8R8_SRGB = 35,
        DATA_FORMAT_R8G8B8A8_UNORM = 36,
        DATA_FORMAT_R8G8B8A8_SNORM = 37,
        DATA_FORMAT_R8G8B8A8_USCALED = 38,
        DATA_FORMAT_R8G8B8A8_SSCALED = 39,
        DATA_FORMAT_R8G8B8A8_UINT = 40,
        DATA_FORMAT_R8G8B8A8_SINT = 41,
        DATA_FORMAT_R8G8B8A8_SRGB = 42,
        DATA_FORMAT_B8G8R8A8_UNORM = 43,
        DATA_FORMAT_B8G8R8A8_SNORM = 44,
        DATA_FORMAT_B8G8R8A8_USCALED = 45,
        DATA_FORMAT_B8G8R8A8_SSCALED = 46,
        DATA_FORMAT_B8G8R8A8_UINT = 47,
        DATA_FORMAT_B8G8R8A8_SINT = 48,
        DATA_FORMAT_B8G8R8A8_SRGB = 49,
        DATA_FORMAT_A8B8G8R8_UNORM_PACK32 = 50,
        DATA_FORMAT_A8B8G8R8_SNORM_PACK32 = 51,
        DATA_FORMAT_A8B8G8R8_USCALED_PACK32 = 52,
        DATA_FORMAT_A8B8G8R8_SSCALED_PACK32 = 53,
        DATA_FORMAT_A8B8G8R8_UINT_PACK32 = 54,
        DATA_FORMAT_A8B8G8R8_SINT_PACK32 = 55,
        DATA_FORMAT_A8B8G8R8_SRGB_PACK32 = 56,
        DATA_FORMAT_A2R10G10B10_UNORM_PACK32 = 57,
        DATA_FORMAT_A2R10G10B10_SNORM_PACK32 = 58,
        DATA_FORMAT_A2R10G10B10_USCALED_PACK32 = 59,
        DATA_FORMAT_A2R10G10B10_SSCALED_PACK32 = 60,
        DATA_FORMAT_A2R10G10B10_UINT_PACK32 = 61,
        DATA_FORMAT_A2R10G10B10_SINT_PACK32 = 62,
        DATA_FORMAT_A2B10G10R10_UNORM_PACK32 = 63,
        DATA_FORMAT_A2B10G10R10_SNORM_PACK32 = 64,
        DATA_FORMAT_A2B10G10R10_USCALED_PACK32 = 65,
        DATA_FORMAT_A2B10G10R10_SSCALED_PACK32 = 66,
        DATA_FORMAT_A2B10G10R10_UINT_PACK32 = 67,
        DATA_FORMAT_A2B10G10R10_SINT_PACK32 = 68,
        DATA_FORMAT_R16_UNORM = 69,
        DATA_FORMAT_R16_SNORM = 70,
        DATA_FORMAT_R16_USCALED = 71,
        DATA_FORMAT_R16_SSCALED = 72,
        DATA_FORMAT_R16_UINT = 73,
        DATA_FORMAT_R16_SINT = 74,
        DATA_FORMAT_R16_SFLOAT = 75,
        DATA_FORMAT_R16G16_UNORM = 76,
        DATA_FORMAT_R16G16_SNORM = 77,
        DATA_FORMAT_R16G16_USCALED = 78,
        DATA_FORMAT_R16G16_SSCALED = 79,
        DATA_FORMAT_R16G16_UINT = 80,
        DATA_FORMAT_R16G16_SINT = 81,
        DATA_FORMAT_R16G16_SFLOAT = 82,
        DATA_FORMAT_R16G16B16_UNORM = 83,
        DATA_FORMAT_R16G16B16_SNORM = 84,
        DATA_FORMAT_R16G16B16_USCALED = 85,
        DATA_FORMAT_R16G16B16_SSCALED = 86,
        DATA_FORMAT_R16G16B16_UINT = 87,
        DATA_FORMAT_R16G16B16_SINT = 88,
        DATA_FORMAT_R16G16B16_SFLOAT = 89,
        DATA_FORMAT_R16G16B16A16_UNORM = 90,
        DATA_FORMAT_R16G16B16A16_SNORM = 91,
        DATA_FORMAT_R16G16B16A16_USCALED = 92,
        DATA_FORMAT_R16G16B16A16_SSCALED = 93,
        DATA_FORMAT_R16G16B16A16_UINT = 94,
        DATA_FORMAT_R16G16B16A16_SINT = 95,
        DATA_FORMAT_R16G16B16A16_SFLOAT = 96,
        DATA_FORMAT_R32_UINT = 97,
        DATA_FORMAT_R32_SINT = 98,
        DATA_FORMAT_R32_SFLOAT = 99,
        DATA_FORMAT_R32G32_UINT = 100,
        DATA_FORMAT_R32G32_SINT = 101,
        DATA_FORMAT_R32G32_SFLOAT = 102,
        DATA_FORMAT_R32G32B32_UINT = 103,
        DATA_FORMAT_R32G32B32_SINT = 104,
        DATA_FORMAT_R32G32B32_SFLOAT = 105,
        DATA_FORMAT_R32G32B32A32_UINT = 106,
        DATA_FORMAT_R32G32B32A32_SINT = 107,
        DATA_FORMAT_R32G32B32A32_SFLOAT = 108,
        DATA_FORMAT_R64_UINT = 109,
        DATA_FORMAT_R64_SINT = 110,
        DATA_FORMAT_R64_SFLOAT = 111,
        DATA_FORMAT_R64G64_UINT = 112,
        DATA_FORMAT_R64G64_SINT = 113,
        DATA_FORMAT_R64G64_SFLOAT = 114,
        DATA_FORMAT_R64G64B64_UINT = 115,
        DATA_FORMAT_R64G64B64_SINT = 116,
        DATA_FORMAT_R64G64B64_SFLOAT = 117,
        DATA_FORMAT_R64G64B64A64_UINT = 118,
        DATA_FORMAT_R64G64B64A64_SINT = 119,
        DATA_FORMAT_R64G64B64A64_SFLOAT = 120,
        DATA_FORMAT_B10G11R11_UFLOAT_PACK32 = 121,
        DATA_FORMAT_E5B9G9R9_UFLOAT_PACK32 = 122,
        DATA_FORMAT_D16_UNORM = 123,
        DATA_FORMAT_X8_D24_UNORM_PACK32 = 124,
        DATA_FORMAT_D32_SFLOAT = 125,
        DATA_FORMAT_S8_UINT = 126,
        DATA_FORMAT_D16_UNORM_S8_UINT = 127,
        DATA_FORMAT_D24_UNORM_S8_UINT = 128,
        DATA_FORMAT_D32_SFLOAT_S8_UINT = 129,
        DATA_FORMAT_BC1_RGB_UNORM_BLOCK = 130,
        DATA_FORMAT_BC1_RGB_SRGB_BLOCK = 131,
        DATA_FORMAT_BC1_RGBA_UNORM_BLOCK = 132,
        DATA_FORMAT_BC1_RGBA_SRGB_BLOCK = 133,
        DATA_FORMAT_BC2_UNORM_BLOCK = 134,
        DATA_FORMAT_BC2_SRGB_BLOCK = 135,
        DATA_FORMAT_BC3_UNORM_BLOCK = 136,
        DATA_FORMAT_BC3_SRGB_BLOCK = 137,
        DATA_FORMAT_BC4_UNORM_BLOCK = 138,
        DATA_FORMAT_BC4_SNORM_BLOCK = 139,
        DATA_FORMAT_BC5_UNORM_BLOCK = 140,
        DATA_FORMAT_BC5_SNORM_BLOCK = 141,
        DATA_FORMAT_BC6H_UFLOAT_BLOCK = 142,
        DATA_FORMAT_BC6H_SFLOAT_BLOCK = 143,
        DATA_FORMAT_BC7_UNORM_BLOCK = 144,
        DATA_FORMAT_BC7_SRGB_BLOCK = 145,
        DATA_FORMAT_ETC2_R8G8B8_UNORM_BLOCK = 146,
        DATA_FORMAT_ETC2_R8G8B8_SRGB_BLOCK = 147,
        DATA_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK = 148,
        DATA_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK = 149,
        DATA_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK = 150,
        DATA_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK = 151,
        DATA_FORMAT_EAC_R11_UNORM_BLOCK = 152,
        DATA_FORMAT_EAC_R11_SNORM_BLOCK = 153,
        DATA_FORMAT_EAC_R11G11_UNORM_BLOCK = 154,
        DATA_FORMAT_EAC_R11G11_SNORM_BLOCK = 155,
        DATA_FORMAT_ASTC_4x4_UNORM_BLOCK = 156,
        DATA_FORMAT_ASTC_4x4_SRGB_BLOCK = 157,
        DATA_FORMAT_ASTC_5x4_UNORM_BLOCK = 158,
        DATA_FORMAT_ASTC_5x4_SRGB_BLOCK = 159,
        DATA_FORMAT_ASTC_5x5_UNORM_BLOCK = 160,
        DATA_FORMAT_ASTC_5x5_SRGB_BLOCK = 161,
        DATA_FORMAT_ASTC_6x5_UNORM_BLOCK = 162,
        DATA_FORMAT_ASTC_6x5_SRGB_BLOCK = 163,
        DATA_FORMAT_ASTC_6x6_UNORM_BLOCK = 164,
        DATA_FORMAT_ASTC_6x6_SRGB_BLOCK = 165,
        DATA_FORMAT_ASTC_8x5_UNORM_BLOCK = 166,
        DATA_FORMAT_ASTC_8x5_SRGB_BLOCK = 167,
        DATA_FORMAT_ASTC_8x6_UNORM_BLOCK = 168,
        DATA_FORMAT_ASTC_8x6_SRGB_BLOCK = 169,
        DATA_FORMAT_ASTC_8x8_UNORM_BLOCK = 170,
        DATA_FORMAT_ASTC_8x8_SRGB_BLOCK = 171,
        DATA_FORMAT_ASTC_10x5_UNORM_BLOCK = 172,
        DATA_FORMAT_ASTC_10x5_SRGB_BLOCK = 173,
        DATA_FORMAT_ASTC_10x6_UNORM_BLOCK = 174,
        DATA_FORMAT_ASTC_10x6_SRGB_BLOCK = 175,
        DATA_FORMAT_ASTC_10x8_UNORM_BLOCK = 176,
        DATA_FORMAT_ASTC_10x8_SRGB_BLOCK = 177,
        DATA_FORMAT_ASTC_10x10_UNORM_BLOCK = 178,
        DATA_FORMAT_ASTC_10x10_SRGB_BLOCK = 179,
        DATA_FORMAT_ASTC_12x10_UNORM_BLOCK = 180,
        DATA_FORMAT_ASTC_12x10_SRGB_BLOCK = 181,
        DATA_FORMAT_ASTC_12x12_UNORM_BLOCK = 182,
        DATA_FORMAT_ASTC_12x12_SRGB_BLOCK = 183,
        DATA_FORMAT_G8B8G8R8_422_UNORM = 184,
        DATA_FORMAT_B8G8R8G8_422_UNORM = 185,
        DATA_FORMAT_G8_B8_R8_3PLANE_420_UNORM = 186,
        DATA_FORMAT_G8_B8R8_2PLANE_420_UNORM = 187,
        DATA_FORMAT_G8_B8_R8_3PLANE_422_UNORM = 188,
        DATA_FORMAT_G8_B8R8_2PLANE_422_UNORM = 189,
        DATA_FORMAT_G8_B8_R8_3PLANE_444_UNORM = 190,
        DATA_FORMAT_R10X6_UNORM_PACK16 = 191,
        DATA_FORMAT_R10X6G10X6_UNORM_2PACK16 = 192,
        DATA_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16 = 193,
        DATA_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16 = 194,
        DATA_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16 = 195,
        DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16 = 196,
        DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16 = 197,
        DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16 = 198,
        DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16 = 199,
        DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16 = 200,
        DATA_FORMAT_R12X4_UNORM_PACK16 = 201,
        DATA_FORMAT_R12X4G12X4_UNORM_2PACK16 = 202,
        DATA_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16 = 203,
        DATA_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16 = 204,
        DATA_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16 = 205,
        DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16 = 206,
        DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16 = 207,
        DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16 = 208,
        DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16 = 209,
        DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16 = 210,
        DATA_FORMAT_G16B16G16R16_422_UNORM = 211,
        DATA_FORMAT_B16G16R16G16_422_UNORM = 212,
        DATA_FORMAT_G16_B16_R16_3PLANE_420_UNORM = 213,
        DATA_FORMAT_G16_B16R16_2PLANE_420_UNORM = 214,
        DATA_FORMAT_G16_B16_R16_3PLANE_422_UNORM = 215,
        DATA_FORMAT_G16_B16R16_2PLANE_422_UNORM = 216,
        DATA_FORMAT_G16_B16_R16_3PLANE_444_UNORM = 217,
        DATA_FORMAT_MAX = 218
    }
    const enum BarrierMask {
        BARRIER_MASK_VERTEX = 1,
        BARRIER_MASK_FRAGMENT = 8,
        BARRIER_MASK_COMPUTE = 2,
        BARRIER_MASK_TRANSFER = 4,
        BARRIER_MASK_RASTER = 9,
        BARRIER_MASK_ALL_BARRIERS = 32767,
        BARRIER_MASK_NO_BARRIER = 32768
    }
    const enum TextureType {
        TEXTURE_TYPE_1D = 0,
        TEXTURE_TYPE_2D = 1,
        TEXTURE_TYPE_3D = 2,
        TEXTURE_TYPE_CUBE = 3,
        TEXTURE_TYPE_1D_ARRAY = 4,
        TEXTURE_TYPE_2D_ARRAY = 5,
        TEXTURE_TYPE_CUBE_ARRAY = 6,
        TEXTURE_TYPE_MAX = 7
    }
    const enum TextureSamples {
        TEXTURE_SAMPLES_1 = 0,
        TEXTURE_SAMPLES_2 = 1,
        TEXTURE_SAMPLES_4 = 2,
        TEXTURE_SAMPLES_8 = 3,
        TEXTURE_SAMPLES_16 = 4,
        TEXTURE_SAMPLES_32 = 5,
        TEXTURE_SAMPLES_64 = 6,
        TEXTURE_SAMPLES_MAX = 7
    }
    const enum TextureUsageBits {
        TEXTURE_USAGE_SAMPLING_BIT = 1,
        TEXTURE_USAGE_COLOR_ATTACHMENT_BIT = 2,
        TEXTURE_USAGE_DEPTH_STENCIL_ATTACHMENT_BIT = 4,
        TEXTURE_USAGE_STORAGE_BIT = 8,
        TEXTURE_USAGE_STORAGE_ATOMIC_BIT = 16,
        TEXTURE_USAGE_CPU_READ_BIT = 32,
        TEXTURE_USAGE_CAN_UPDATE_BIT = 64,
        TEXTURE_USAGE_CAN_COPY_FROM_BIT = 128,
        TEXTURE_USAGE_CAN_COPY_TO_BIT = 256,
        TEXTURE_USAGE_INPUT_ATTACHMENT_BIT = 512
    }
    const enum TextureSwizzle {
        TEXTURE_SWIZZLE_IDENTITY = 0,
        TEXTURE_SWIZZLE_ZERO = 1,
        TEXTURE_SWIZZLE_ONE = 2,
        TEXTURE_SWIZZLE_R = 3,
        TEXTURE_SWIZZLE_G = 4,
        TEXTURE_SWIZZLE_B = 5,
        TEXTURE_SWIZZLE_A = 6,
        TEXTURE_SWIZZLE_MAX = 7
    }
    const enum TextureSliceType {
        TEXTURE_SLICE_2D = 0,
        TEXTURE_SLICE_CUBEMAP = 1,
        TEXTURE_SLICE_3D = 2
    }
    const enum SamplerFilter {
        SAMPLER_FILTER_NEAREST = 0,
        SAMPLER_FILTER_LINEAR = 1
    }
    const enum SamplerRepeatMode {
        SAMPLER_REPEAT_MODE_REPEAT = 0,
        SAMPLER_REPEAT_MODE_MIRRORED_REPEAT = 1,
        SAMPLER_REPEAT_MODE_CLAMP_TO_EDGE = 2,
        SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER = 3,
        SAMPLER_REPEAT_MODE_MIRROR_CLAMP_TO_EDGE = 4,
        SAMPLER_REPEAT_MODE_MAX = 5
    }
    const enum SamplerBorderColor {
        SAMPLER_BORDER_COLOR_FLOAT_TRANSPARENT_BLACK = 0,
        SAMPLER_BORDER_COLOR_INT_TRANSPARENT_BLACK = 1,
        SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_BLACK = 2,
        SAMPLER_BORDER_COLOR_INT_OPAQUE_BLACK = 3,
        SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_WHITE = 4,
        SAMPLER_BORDER_COLOR_INT_OPAQUE_WHITE = 5,
        SAMPLER_BORDER_COLOR_MAX = 6
    }
    const enum VertexFrequency {
        VERTEX_FREQUENCY_VERTEX = 0,
        VERTEX_FREQUENCY_INSTANCE = 1
    }
    const enum IndexBufferFormat {
        INDEX_BUFFER_FORMAT_UINT16 = 0,
        INDEX_BUFFER_FORMAT_UINT32 = 1
    }
    const enum StorageBufferUsage {
        STORAGE_BUFFER_USAGE_DISPATCH_INDIRECT = 1
    }
    const enum UniformType {
        UNIFORM_TYPE_SAMPLER = 0,
        UNIFORM_TYPE_SAMPLER_WITH_TEXTURE = 1,
        UNIFORM_TYPE_TEXTURE = 2,
        UNIFORM_TYPE_IMAGE = 3,
        UNIFORM_TYPE_TEXTURE_BUFFER = 4,
        UNIFORM_TYPE_SAMPLER_WITH_TEXTURE_BUFFER = 5,
        UNIFORM_TYPE_IMAGE_BUFFER = 6,
        UNIFORM_TYPE_UNIFORM_BUFFER = 7,
        UNIFORM_TYPE_STORAGE_BUFFER = 8,
        UNIFORM_TYPE_INPUT_ATTACHMENT = 9,
        UNIFORM_TYPE_MAX = 10
    }
    const enum RenderPrimitive {
        RENDER_PRIMITIVE_POINTS = 0,
        RENDER_PRIMITIVE_LINES = 1,
        RENDER_PRIMITIVE_LINES_WITH_ADJACENCY = 2,
        RENDER_PRIMITIVE_LINESTRIPS = 3,
        RENDER_PRIMITIVE_LINESTRIPS_WITH_ADJACENCY = 4,
        RENDER_PRIMITIVE_TRIANGLES = 5,
        RENDER_PRIMITIVE_TRIANGLES_WITH_ADJACENCY = 6,
        RENDER_PRIMITIVE_TRIANGLE_STRIPS = 7,
        RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_AJACENCY = 8,
        RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_RESTART_INDEX = 9,
        RENDER_PRIMITIVE_TESSELATION_PATCH = 10,
        RENDER_PRIMITIVE_MAX = 11
    }
    const enum PolygonCullMode {
        POLYGON_CULL_DISABLED = 0,
        POLYGON_CULL_FRONT = 1,
        POLYGON_CULL_BACK = 2
    }
    const enum PolygonFrontFace {
        POLYGON_FRONT_FACE_CLOCKWISE = 0,
        POLYGON_FRONT_FACE_COUNTER_CLOCKWISE = 1
    }
    const enum StencilOperation {
        STENCIL_OP_KEEP = 0,
        STENCIL_OP_ZERO = 1,
        STENCIL_OP_REPLACE = 2,
        STENCIL_OP_INCREMENT_AND_CLAMP = 3,
        STENCIL_OP_DECREMENT_AND_CLAMP = 4,
        STENCIL_OP_INVERT = 5,
        STENCIL_OP_INCREMENT_AND_WRAP = 6,
        STENCIL_OP_DECREMENT_AND_WRAP = 7,
        STENCIL_OP_MAX = 8
    }
    const enum CompareOperator {
        COMPARE_OP_NEVER = 0,
        COMPARE_OP_LESS = 1,
        COMPARE_OP_EQUAL = 2,
        COMPARE_OP_LESS_OR_EQUAL = 3,
        COMPARE_OP_GREATER = 4,
        COMPARE_OP_NOT_EQUAL = 5,
        COMPARE_OP_GREATER_OR_EQUAL = 6,
        COMPARE_OP_ALWAYS = 7,
        COMPARE_OP_MAX = 8
    }
    const enum LogicOperation {
        LOGIC_OP_CLEAR = 0,
        LOGIC_OP_AND = 1,
        LOGIC_OP_AND_REVERSE = 2,
        LOGIC_OP_COPY = 3,
        LOGIC_OP_AND_INVERTED = 4,
        LOGIC_OP_NO_OP = 5,
        LOGIC_OP_XOR = 6,
        LOGIC_OP_OR = 7,
        LOGIC_OP_NOR = 8,
        LOGIC_OP_EQUIVALENT = 9,
        LOGIC_OP_INVERT = 10,
        LOGIC_OP_OR_REVERSE = 11,
        LOGIC_OP_COPY_INVERTED = 12,
        LOGIC_OP_OR_INVERTED = 13,
        LOGIC_OP_NAND = 14,
        LOGIC_OP_SET = 15,
        LOGIC_OP_MAX = 16
    }
    const enum BlendFactor {
        BLEND_FACTOR_ZERO = 0,
        BLEND_FACTOR_ONE = 1,
        BLEND_FACTOR_SRC_COLOR = 2,
        BLEND_FACTOR_ONE_MINUS_SRC_COLOR = 3,
        BLEND_FACTOR_DST_COLOR = 4,
        BLEND_FACTOR_ONE_MINUS_DST_COLOR = 5,
        BLEND_FACTOR_SRC_ALPHA = 6,
        BLEND_FACTOR_ONE_MINUS_SRC_ALPHA = 7,
        BLEND_FACTOR_DST_ALPHA = 8,
        BLEND_FACTOR_ONE_MINUS_DST_ALPHA = 9,
        BLEND_FACTOR_CONSTANT_COLOR = 10,
        BLEND_FACTOR_ONE_MINUS_CONSTANT_COLOR = 11,
        BLEND_FACTOR_CONSTANT_ALPHA = 12,
        BLEND_FACTOR_ONE_MINUS_CONSTANT_ALPHA = 13,
        BLEND_FACTOR_SRC_ALPHA_SATURATE = 14,
        BLEND_FACTOR_SRC1_COLOR = 15,
        BLEND_FACTOR_ONE_MINUS_SRC1_COLOR = 16,
        BLEND_FACTOR_SRC1_ALPHA = 17,
        BLEND_FACTOR_ONE_MINUS_SRC1_ALPHA = 18,
        BLEND_FACTOR_MAX = 19
    }
    const enum BlendOperation {
        BLEND_OP_ADD = 0,
        BLEND_OP_SUBTRACT = 1,
        BLEND_OP_REVERSE_SUBTRACT = 2,
        BLEND_OP_MINIMUM = 3,
        BLEND_OP_MAXIMUM = 4,
        BLEND_OP_MAX = 5
    }
    const enum PipelineDynamicStateFlags {
        DYNAMIC_STATE_LINE_WIDTH = 1,
        DYNAMIC_STATE_DEPTH_BIAS = 2,
        DYNAMIC_STATE_BLEND_CONSTANTS = 4,
        DYNAMIC_STATE_DEPTH_BOUNDS = 8,
        DYNAMIC_STATE_STENCIL_COMPARE_MASK = 16,
        DYNAMIC_STATE_STENCIL_WRITE_MASK = 32,
        DYNAMIC_STATE_STENCIL_REFERENCE = 64
    }
    const enum InitialAction {
        INITIAL_ACTION_LOAD = 0,
        INITIAL_ACTION_CLEAR = 1,
        INITIAL_ACTION_DISCARD = 2,
        INITIAL_ACTION_MAX = 3,
        INITIAL_ACTION_CLEAR_REGION = 1,
        INITIAL_ACTION_CLEAR_REGION_CONTINUE = 1,
        INITIAL_ACTION_KEEP = 0,
        INITIAL_ACTION_DROP = 2,
        INITIAL_ACTION_CONTINUE = 0
    }
    const enum FinalAction {
        FINAL_ACTION_STORE = 0,
        FINAL_ACTION_DISCARD = 1,
        FINAL_ACTION_MAX = 2,
        FINAL_ACTION_READ = 0,
        FINAL_ACTION_CONTINUE = 0
    }
    const enum ShaderStage {
        SHADER_STAGE_VERTEX = 0,
        SHADER_STAGE_FRAGMENT = 1,
        SHADER_STAGE_TESSELATION_CONTROL = 2,
        SHADER_STAGE_TESSELATION_EVALUATION = 3,
        SHADER_STAGE_COMPUTE = 4,
        SHADER_STAGE_MAX = 5,
        SHADER_STAGE_VERTEX_BIT = 1,
        SHADER_STAGE_FRAGMENT_BIT = 2,
        SHADER_STAGE_TESSELATION_CONTROL_BIT = 4,
        SHADER_STAGE_TESSELATION_EVALUATION_BIT = 8,
        SHADER_STAGE_COMPUTE_BIT = 16
    }
    const enum ShaderLanguage {
        SHADER_LANGUAGE_GLSL = 0,
        SHADER_LANGUAGE_HLSL = 1
    }
    const enum PipelineSpecializationConstantType {
        PIPELINE_SPECIALIZATION_CONSTANT_TYPE_BOOL = 0,
        PIPELINE_SPECIALIZATION_CONSTANT_TYPE_INT = 1,
        PIPELINE_SPECIALIZATION_CONSTANT_TYPE_FLOAT = 2
    }
    const enum Limit {
        LIMIT_MAX_BOUND_UNIFORM_SETS = 0,
        LIMIT_MAX_FRAMEBUFFER_COLOR_ATTACHMENTS = 1,
        LIMIT_MAX_TEXTURES_PER_UNIFORM_SET = 2,
        LIMIT_MAX_SAMPLERS_PER_UNIFORM_SET = 3,
        LIMIT_MAX_STORAGE_BUFFERS_PER_UNIFORM_SET = 4,
        LIMIT_MAX_STORAGE_IMAGES_PER_UNIFORM_SET = 5,
        LIMIT_MAX_UNIFORM_BUFFERS_PER_UNIFORM_SET = 6,
        LIMIT_MAX_DRAW_INDEXED_INDEX = 7,
        LIMIT_MAX_FRAMEBUFFER_HEIGHT = 8,
        LIMIT_MAX_FRAMEBUFFER_WIDTH = 9,
        LIMIT_MAX_TEXTURE_ARRAY_LAYERS = 10,
        LIMIT_MAX_TEXTURE_SIZE_1D = 11,
        LIMIT_MAX_TEXTURE_SIZE_2D = 12,
        LIMIT_MAX_TEXTURE_SIZE_3D = 13,
        LIMIT_MAX_TEXTURE_SIZE_CUBE = 14,
        LIMIT_MAX_TEXTURES_PER_SHADER_STAGE = 15,
        LIMIT_MAX_SAMPLERS_PER_SHADER_STAGE = 16,
        LIMIT_MAX_STORAGE_BUFFERS_PER_SHADER_STAGE = 17,
        LIMIT_MAX_STORAGE_IMAGES_PER_SHADER_STAGE = 18,
        LIMIT_MAX_UNIFORM_BUFFERS_PER_SHADER_STAGE = 19,
        LIMIT_MAX_PUSH_CONSTANT_SIZE = 20,
        LIMIT_MAX_UNIFORM_BUFFER_SIZE = 21,
        LIMIT_MAX_VERTEX_INPUT_ATTRIBUTE_OFFSET = 22,
        LIMIT_MAX_VERTEX_INPUT_ATTRIBUTES = 23,
        LIMIT_MAX_VERTEX_INPUT_BINDINGS = 24,
        LIMIT_MAX_VERTEX_INPUT_BINDING_STRIDE = 25,
        LIMIT_MIN_UNIFORM_BUFFER_OFFSET_ALIGNMENT = 26,
        LIMIT_MAX_COMPUTE_SHARED_MEMORY_SIZE = 27,
        LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_X = 28,
        LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Y = 29,
        LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Z = 30,
        LIMIT_MAX_COMPUTE_WORKGROUP_INVOCATIONS = 31,
        LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_X = 32,
        LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Y = 33,
        LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Z = 34,
        LIMIT_MAX_VIEWPORT_DIMENSIONS_X = 35,
        LIMIT_MAX_VIEWPORT_DIMENSIONS_Y = 36
    }
    const enum MemoryType {
        MEMORY_TEXTURES = 0,
        MEMORY_BUFFERS = 1,
        MEMORY_TOTAL = 2
    }
    const INVALID_ID = -1;
    const INVALID_FORMAT_ID = -1;
    const enum BreadcrumbMarker {
        NONE = 0,
        REFLECTION_PROBES = 65536,
        SKY_PASS = 131072,
        LIGHTMAPPER_PASS = 196608,
        SHADOW_PASS_DIRECTIONAL = 262144,
        SHADOW_PASS_CUBE = 327680,
        OPAQUE_PASS = 393216,
        ALPHA_PASS = 458752,
        TRANSPARENT_PASS = 524288,
        POST_PROCESSING_PASS = 589824,
        BLIT_PASS = 655360,
        UI_PASS = 720896,
        DEBUG_PASS = 786432
    }
}
export interface Performance extends Object {
}
export declare namespace Performance {
    const enum Monitor {
        TIME_FPS = 0,
        TIME_PROCESS = 1,
        TIME_PHYSICS_PROCESS = 2,
        TIME_NAVIGATION_PROCESS = 3,
        MEMORY_STATIC = 4,
        MEMORY_STATIC_MAX = 5,
        MEMORY_MESSAGE_BUFFER_MAX = 6,
        OBJECT_COUNT = 7,
        OBJECT_RESOURCE_COUNT = 8,
        OBJECT_NODE_COUNT = 9,
        OBJECT_ORPHAN_NODE_COUNT = 10,
        RENDER_TOTAL_OBJECTS_IN_FRAME = 11,
        RENDER_TOTAL_PRIMITIVES_IN_FRAME = 12,
        RENDER_TOTAL_DRAW_CALLS_IN_FRAME = 13,
        RENDER_VIDEO_MEM_USED = 14,
        RENDER_TEXTURE_MEM_USED = 15,
        RENDER_BUFFER_MEM_USED = 16,
        PHYSICS_2D_ACTIVE_OBJECTS = 17,
        PHYSICS_2D_COLLISION_PAIRS = 18,
        PHYSICS_2D_ISLAND_COUNT = 19,
        PHYSICS_3D_ACTIVE_OBJECTS = 20,
        PHYSICS_3D_COLLISION_PAIRS = 21,
        PHYSICS_3D_ISLAND_COUNT = 22,
        AUDIO_OUTPUT_LATENCY = 23,
        NAVIGATION_ACTIVE_MAPS = 24,
        NAVIGATION_REGION_COUNT = 25,
        NAVIGATION_AGENT_COUNT = 26,
        NAVIGATION_LINK_COUNT = 27,
        NAVIGATION_POLYGON_COUNT = 28,
        NAVIGATION_EDGE_COUNT = 29,
        NAVIGATION_EDGE_MERGE_COUNT = 30,
        NAVIGATION_EDGE_CONNECTION_COUNT = 31,
        NAVIGATION_EDGE_FREE_COUNT = 32,
        NAVIGATION_OBSTACLE_COUNT = 33,
        PIPELINE_COMPILATIONS_CANVAS = 34,
        PIPELINE_COMPILATIONS_MESH = 35,
        PIPELINE_COMPILATIONS_SURFACE = 36,
        PIPELINE_COMPILATIONS_DRAW = 37,
        PIPELINE_COMPILATIONS_SPECIALIZATION = 38,
        MONITOR_MAX = 39
    }
}
export interface VisualShaderNodeBillboard extends VisualShaderNode {
    billboard_type: type.int;
    keep_scale: type.bool;
}
export declare namespace VisualShaderNodeBillboard {
    const enum BillboardType {
        BILLBOARD_TYPE_DISABLED = 0,
        BILLBOARD_TYPE_ENABLED = 1,
        BILLBOARD_TYPE_FIXED_Y = 2,
        BILLBOARD_TYPE_PARTICLES = 3,
        BILLBOARD_TYPE_MAX = 4
    }
}
export interface PhysicsDirectSpaceState2DExtension extends PhysicsDirectSpaceState2D {
}
export interface Range extends Control {
    allow_greater: type.bool;
    allow_lesser: type.bool;
    exp_edit: type.bool;
    max_value: type.float;
    min_value: type.float;
    page: type.float;
    ratio: type.float;
    rounded: type.bool;
    size_flags_vertical: type.int;
    step: type.float;
    value: type.float;
}
export interface EngineDebugger extends Object {
}
export interface BoneMap extends Resource {
    profile: {
        type: "SkeletonProfile";
        properties: SkeletonProfile;
    };
}
export interface AnimationNodeSync extends AnimationNode {
    sync: type.bool;
}
export interface Label3D extends GeometryInstance3D {
    alpha_antialiasing_edge: type.float;
    alpha_antialiasing_mode: type.int;
    alpha_cut: type.int;
    alpha_hash_scale: type.float;
    alpha_scissor_threshold: type.float;
    autowrap_mode: type.int;
    billboard: type.int;
    cast_shadow: type.int;
    double_sided: type.bool;
    fixed_size: type.bool;
    font: {
        type: "Font";
        properties: Font;
    };
    font_size: type.int;
    gi_mode: type.int;
    horizontal_alignment: type.int;
    justification_flags: type.int;
    language: type.String;
    line_spacing: type.float;
    modulate: type.Color;
    no_depth_test: type.bool;
    offset: type.Vector2;
    outline_modulate: type.Color;
    outline_render_priority: type.int;
    outline_size: type.int;
    pixel_size: type.float;
    render_priority: type.int;
    shaded: type.bool;
    structured_text_bidi_override: type.int;
    structured_text_bidi_override_options: type.Array;
    text: type.String;
    text_direction: type.int;
    texture_filter: type.int;
    uppercase: type.bool;
    vertical_alignment: type.int;
    width: type.float;
}
export declare namespace Label3D {
    const enum DrawFlags {
        FLAG_SHADED = 0,
        FLAG_DOUBLE_SIDED = 1,
        FLAG_DISABLE_DEPTH_TEST = 2,
        FLAG_FIXED_SIZE = 3,
        FLAG_MAX = 4
    }
    const enum AlphaCutMode {
        ALPHA_CUT_DISABLED = 0,
        ALPHA_CUT_DISCARD = 1,
        ALPHA_CUT_OPAQUE_PREPASS = 2,
        ALPHA_CUT_HASH = 3
    }
}
export interface VisualShaderNodeDistanceFade extends VisualShaderNode {
}
export interface BaseMaterial3D extends Material {
    albedo_color: type.Color;
    albedo_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    albedo_texture_force_srgb: type.bool;
    albedo_texture_msdf: type.bool;
    alpha_antialiasing_edge: type.float;
    alpha_antialiasing_mode: type.int;
    alpha_hash_scale: type.float;
    alpha_scissor_threshold: type.float;
    anisotropy: type.float;
    anisotropy_enabled: type.bool;
    anisotropy_flowmap: {
        type: "Texture2D";
        properties: Texture2D;
    };
    ao_enabled: type.bool;
    ao_light_affect: type.float;
    ao_on_uv2: type.bool;
    ao_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    ao_texture_channel: type.int;
    backlight: type.Color;
    backlight_enabled: type.bool;
    backlight_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    billboard_keep_scale: type.bool;
    billboard_mode: type.int;
    blend_mode: type.int;
    clearcoat: type.float;
    clearcoat_enabled: type.bool;
    clearcoat_roughness: type.float;
    clearcoat_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    cull_mode: type.int;
    depth_draw_mode: type.int;
    detail_albedo: {
        type: "Texture2D";
        properties: Texture2D;
    };
    detail_blend_mode: type.int;
    detail_enabled: type.bool;
    detail_mask: {
        type: "Texture2D";
        properties: Texture2D;
    };
    detail_normal: {
        type: "Texture2D";
        properties: Texture2D;
    };
    detail_uv_layer: type.int;
    diffuse_mode: type.int;
    disable_ambient_light: type.bool;
    disable_fog: type.bool;
    disable_receive_shadows: type.bool;
    distance_fade_max_distance: type.float;
    distance_fade_min_distance: type.float;
    distance_fade_mode: type.int;
    emission: type.Color;
    emission_enabled: type.bool;
    emission_energy_multiplier: type.float;
    emission_intensity: type.float;
    emission_on_uv2: type.bool;
    emission_operator: type.int;
    emission_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    fixed_size: type.bool;
    grow: type.bool;
    grow_amount: type.float;
    heightmap_deep_parallax: type.bool;
    heightmap_enabled: type.bool;
    heightmap_flip_binormal: type.bool;
    heightmap_flip_tangent: type.bool;
    heightmap_flip_texture: type.bool;
    heightmap_max_layers: type.int;
    heightmap_min_layers: type.int;
    heightmap_scale: type.float;
    heightmap_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    metallic: type.float;
    metallic_specular: type.float;
    metallic_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    metallic_texture_channel: type.int;
    msdf_outline_size: type.float;
    msdf_pixel_range: type.float;
    no_depth_test: type.bool;
    normal_enabled: type.bool;
    normal_scale: type.float;
    normal_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    orm_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    particles_anim_h_frames: type.int;
    particles_anim_loop: type.bool;
    particles_anim_v_frames: type.int;
    point_size: type.float;
    proximity_fade_distance: type.float;
    proximity_fade_enabled: type.bool;
    refraction_enabled: type.bool;
    refraction_scale: type.float;
    refraction_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    refraction_texture_channel: type.int;
    rim: type.float;
    rim_enabled: type.bool;
    rim_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    rim_tint: type.float;
    roughness: type.float;
    roughness_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    roughness_texture_channel: type.int;
    shading_mode: type.int;
    shadow_to_opacity: type.bool;
    specular_mode: type.int;
    subsurf_scatter_enabled: type.bool;
    subsurf_scatter_skin_mode: type.bool;
    subsurf_scatter_strength: type.float;
    subsurf_scatter_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    subsurf_scatter_transmittance_boost: type.float;
    subsurf_scatter_transmittance_color: type.Color;
    subsurf_scatter_transmittance_depth: type.float;
    subsurf_scatter_transmittance_enabled: type.bool;
    subsurf_scatter_transmittance_texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    texture_filter: type.int;
    texture_repeat: type.bool;
    transparency: type.int;
    use_particle_trails: type.bool;
    use_point_size: type.bool;
    uv1_offset: type.Vector3;
    uv1_scale: type.Vector3;
    uv1_triplanar: type.bool;
    uv1_triplanar_sharpness: type.float;
    uv1_world_triplanar: type.bool;
    uv2_offset: type.Vector3;
    uv2_scale: type.Vector3;
    uv2_triplanar: type.bool;
    uv2_triplanar_sharpness: type.float;
    uv2_world_triplanar: type.bool;
    vertex_color_is_srgb: type.bool;
    vertex_color_use_as_albedo: type.bool;
}
export declare namespace BaseMaterial3D {
    const enum TextureParam {
        TEXTURE_ALBEDO = 0,
        TEXTURE_METALLIC = 1,
        TEXTURE_ROUGHNESS = 2,
        TEXTURE_EMISSION = 3,
        TEXTURE_NORMAL = 4,
        TEXTURE_RIM = 5,
        TEXTURE_CLEARCOAT = 6,
        TEXTURE_FLOWMAP = 7,
        TEXTURE_AMBIENT_OCCLUSION = 8,
        TEXTURE_HEIGHTMAP = 9,
        TEXTURE_SUBSURFACE_SCATTERING = 10,
        TEXTURE_SUBSURFACE_TRANSMITTANCE = 11,
        TEXTURE_BACKLIGHT = 12,
        TEXTURE_REFRACTION = 13,
        TEXTURE_DETAIL_MASK = 14,
        TEXTURE_DETAIL_ALBEDO = 15,
        TEXTURE_DETAIL_NORMAL = 16,
        TEXTURE_ORM = 17,
        TEXTURE_MAX = 18
    }
    const enum TextureFilter {
        TEXTURE_FILTER_NEAREST = 0,
        TEXTURE_FILTER_LINEAR = 1,
        TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 2,
        TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 3,
        TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC = 4,
        TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC = 5,
        TEXTURE_FILTER_MAX = 6
    }
    const enum DetailUV {
        DETAIL_UV_1 = 0,
        DETAIL_UV_2 = 1
    }
    const enum Transparency {
        TRANSPARENCY_DISABLED = 0,
        TRANSPARENCY_ALPHA = 1,
        TRANSPARENCY_ALPHA_SCISSOR = 2,
        TRANSPARENCY_ALPHA_HASH = 3,
        TRANSPARENCY_ALPHA_DEPTH_PRE_PASS = 4,
        TRANSPARENCY_MAX = 5
    }
    const enum ShadingMode {
        SHADING_MODE_UNSHADED = 0,
        SHADING_MODE_PER_PIXEL = 1,
        SHADING_MODE_PER_VERTEX = 2,
        SHADING_MODE_MAX = 3
    }
    const enum Feature {
        FEATURE_EMISSION = 0,
        FEATURE_NORMAL_MAPPING = 1,
        FEATURE_RIM = 2,
        FEATURE_CLEARCOAT = 3,
        FEATURE_ANISOTROPY = 4,
        FEATURE_AMBIENT_OCCLUSION = 5,
        FEATURE_HEIGHT_MAPPING = 6,
        FEATURE_SUBSURFACE_SCATTERING = 7,
        FEATURE_SUBSURFACE_TRANSMITTANCE = 8,
        FEATURE_BACKLIGHT = 9,
        FEATURE_REFRACTION = 10,
        FEATURE_DETAIL = 11,
        FEATURE_MAX = 12
    }
    const enum BlendMode {
        BLEND_MODE_MIX = 0,
        BLEND_MODE_ADD = 1,
        BLEND_MODE_SUB = 2,
        BLEND_MODE_MUL = 3,
        BLEND_MODE_PREMULT_ALPHA = 4
    }
    const enum AlphaAntiAliasing {
        ALPHA_ANTIALIASING_OFF = 0,
        ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE = 1,
        ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE_AND_TO_ONE = 2
    }
    const enum DepthDrawMode {
        DEPTH_DRAW_OPAQUE_ONLY = 0,
        DEPTH_DRAW_ALWAYS = 1,
        DEPTH_DRAW_DISABLED = 2
    }
    const enum CullMode {
        CULL_BACK = 0,
        CULL_FRONT = 1,
        CULL_DISABLED = 2
    }
    const enum Flags {
        FLAG_DISABLE_DEPTH_TEST = 0,
        FLAG_ALBEDO_FROM_VERTEX_COLOR = 1,
        FLAG_SRGB_VERTEX_COLOR = 2,
        FLAG_USE_POINT_SIZE = 3,
        FLAG_FIXED_SIZE = 4,
        FLAG_BILLBOARD_KEEP_SCALE = 5,
        FLAG_UV1_USE_TRIPLANAR = 6,
        FLAG_UV2_USE_TRIPLANAR = 7,
        FLAG_UV1_USE_WORLD_TRIPLANAR = 8,
        FLAG_UV2_USE_WORLD_TRIPLANAR = 9,
        FLAG_AO_ON_UV2 = 10,
        FLAG_EMISSION_ON_UV2 = 11,
        FLAG_ALBEDO_TEXTURE_FORCE_SRGB = 12,
        FLAG_DONT_RECEIVE_SHADOWS = 13,
        FLAG_DISABLE_AMBIENT_LIGHT = 14,
        FLAG_USE_SHADOW_TO_OPACITY = 15,
        FLAG_USE_TEXTURE_REPEAT = 16,
        FLAG_INVERT_HEIGHTMAP = 17,
        FLAG_SUBSURFACE_MODE_SKIN = 18,
        FLAG_PARTICLE_TRAILS_MODE = 19,
        FLAG_ALBEDO_TEXTURE_MSDF = 20,
        FLAG_DISABLE_FOG = 21,
        FLAG_MAX = 22
    }
    const enum DiffuseMode {
        DIFFUSE_BURLEY = 0,
        DIFFUSE_LAMBERT = 1,
        DIFFUSE_LAMBERT_WRAP = 2,
        DIFFUSE_TOON = 3
    }
    const enum SpecularMode {
        SPECULAR_SCHLICK_GGX = 0,
        SPECULAR_TOON = 1,
        SPECULAR_DISABLED = 2
    }
    const enum BillboardMode {
        BILLBOARD_DISABLED = 0,
        BILLBOARD_ENABLED = 1,
        BILLBOARD_FIXED_Y = 2,
        BILLBOARD_PARTICLES = 3
    }
    const enum TextureChannel {
        TEXTURE_CHANNEL_RED = 0,
        TEXTURE_CHANNEL_GREEN = 1,
        TEXTURE_CHANNEL_BLUE = 2,
        TEXTURE_CHANNEL_ALPHA = 3,
        TEXTURE_CHANNEL_GRAYSCALE = 4
    }
    const enum EmissionOperator {
        EMISSION_OP_ADD = 0,
        EMISSION_OP_MULTIPLY = 1
    }
    const enum DistanceFadeMode {
        DISTANCE_FADE_DISABLED = 0,
        DISTANCE_FADE_PIXEL_ALPHA = 1,
        DISTANCE_FADE_PIXEL_DITHER = 2,
        DISTANCE_FADE_OBJECT_DITHER = 3
    }
}
export interface Node3DGizmo extends RefCounted {
}
export interface RibbonTrailMesh extends PrimitiveMesh {
    curve: {
        type: "Curve";
        properties: Curve;
    };
    section_length: type.float;
    section_segments: type.int;
    sections: type.int;
    shape: type.int;
    size: type.float;
}
export declare namespace RibbonTrailMesh {
    const enum Shape {
        SHAPE_FLAT = 0,
        SHAPE_CROSS = 1
    }
}
export interface VisualShaderNodeTransformDecompose extends VisualShaderNode {
}
export interface Thread extends RefCounted {
}
export declare namespace Thread {
    const enum Priority {
        PRIORITY_LOW = 0,
        PRIORITY_NORMAL = 1,
        PRIORITY_HIGH = 2
    }
}
export interface CompressedCubemap extends CompressedTextureLayered {
}
export interface CheckBox extends Button {
    alignment: type.int;
    toggle_mode: type.bool;
    check_v_offset: type.int;
    checked: {
        type: "Texture2D";
        properties: Texture2D;
    };
    checked_disabled: {
        type: "Texture2D";
        properties: Texture2D;
    };
    radio_checked: {
        type: "Texture2D";
        properties: Texture2D;
    };
    radio_checked_disabled: {
        type: "Texture2D";
        properties: Texture2D;
    };
    radio_unchecked: {
        type: "Texture2D";
        properties: Texture2D;
    };
    radio_unchecked_disabled: {
        type: "Texture2D";
        properties: Texture2D;
    };
    unchecked: {
        type: "Texture2D";
        properties: Texture2D;
    };
    unchecked_disabled: {
        type: "Texture2D";
        properties: Texture2D;
    };
}
export interface Decal extends VisualInstance3D {
    albedo_mix: type.float;
    cull_mask: type.int;
    distance_fade_begin: type.float;
    distance_fade_enabled: type.bool;
    distance_fade_length: type.float;
    emission_energy: type.float;
    lower_fade: type.float;
    modulate: type.Color;
    normal_fade: type.float;
    size: type.Vector3;
    texture_albedo: {
        type: "Texture2D";
        properties: Texture2D;
    };
    texture_emission: {
        type: "Texture2D";
        properties: Texture2D;
    };
    texture_normal: {
        type: "Texture2D";
        properties: Texture2D;
    };
    texture_orm: {
        type: "Texture2D";
        properties: Texture2D;
    };
    upper_fade: type.float;
}
export declare namespace Decal {
    const enum DecalTexture {
        TEXTURE_ALBEDO = 0,
        TEXTURE_NORMAL = 1,
        TEXTURE_ORM = 2,
        TEXTURE_EMISSION = 3,
        TEXTURE_MAX = 4
    }
}
export interface ParallaxBackground extends CanvasLayer {
    layer: type.int;
    scroll_base_offset: type.Vector2;
    scroll_base_scale: type.Vector2;
    scroll_ignore_camera_zoom: type.bool;
    scroll_limit_begin: type.Vector2;
    scroll_limit_end: type.Vector2;
    scroll_offset: type.Vector2;
}
export interface ConeTwistJoint3D extends Joint3D {
    bias: type.float;
    relaxation: type.float;
    softness: type.float;
    swing_span: type.float;
    twist_span: type.float;
}
export declare namespace ConeTwistJoint3D {
    const enum Param {
        PARAM_SWING_SPAN = 0,
        PARAM_TWIST_SPAN = 1,
        PARAM_BIAS = 2,
        PARAM_SOFTNESS = 3,
        PARAM_RELAXATION = 4,
        PARAM_MAX = 5
    }
}
export interface AudioEffectRecord extends AudioEffect {
    format: type.int;
}
export interface AudioStreamPlayer extends Node {
    autoplay: type.bool;
    bus: type.StringName;
    max_polyphony: type.int;
    mix_target: type.int;
    pitch_scale: type.float;
    playback_type: type.int;
    playing: type.bool;
    stream: {
        type: "AudioStream";
        properties: AudioStream;
    };
    stream_paused: type.bool;
    volume_db: type.float;
}
export declare namespace AudioStreamPlayer {
    const enum MixTarget {
        MIX_TARGET_STEREO = 0,
        MIX_TARGET_SURROUND = 1,
        MIX_TARGET_CENTER = 2
    }
}
export interface GraphEdit extends Control {
    clip_contents: type.bool;
    connection_lines_antialiased: type.bool;
    connection_lines_curvature: type.float;
    connection_lines_thickness: type.float;
    focus_mode: type.int;
    grid_pattern: type.int;
    minimap_enabled: type.bool;
    minimap_opacity: type.float;
    minimap_size: type.Vector2;
    panning_scheme: type.int;
    right_disconnects: type.bool;
    scroll_offset: type.Vector2;
    show_arrange_button: type.bool;
    show_grid: type.bool;
    show_grid_buttons: type.bool;
    show_menu: type.bool;
    show_minimap_button: type.bool;
    show_zoom_buttons: type.bool;
    show_zoom_label: type.bool;
    snapping_distance: type.int;
    snapping_enabled: type.bool;
    zoom: type.float;
    zoom_max: type.float;
    zoom_min: type.float;
    zoom_step: type.float;
    activity: type.Color;
    connection_hover_tint_color: type.Color;
    connection_rim_color: type.Color;
    connection_valid_target_tint_color: type.Color;
    grid_major: type.Color;
    grid_minor: type.Color;
    selection_fill: type.Color;
    selection_stroke: type.Color;
    port_hotzone_inner_extent: type.int;
    port_hotzone_outer_extent: type.int;
    grid_toggle: {
        type: "Texture2D";
        properties: Texture2D;
    };
    layout: {
        type: "Texture2D";
        properties: Texture2D;
    };
    minimap_toggle: {
        type: "Texture2D";
        properties: Texture2D;
    };
    snapping_toggle: {
        type: "Texture2D";
        properties: Texture2D;
    };
    zoom_in: {
        type: "Texture2D";
        properties: Texture2D;
    };
    zoom_out: {
        type: "Texture2D";
        properties: Texture2D;
    };
    zoom_reset: {
        type: "Texture2D";
        properties: Texture2D;
    };
    menu_panel: {
        type: "StyleBox";
        properties: StyleBox;
    };
    panel: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export declare namespace GraphEdit {
    const enum PanningScheme {
        SCROLL_ZOOMS = 0,
        SCROLL_PANS = 1
    }
    const enum GridPattern {
        GRID_PATTERN_LINES = 0,
        GRID_PATTERN_DOTS = 1
    }
}
export interface Sprite2D extends Node2D {
    centered: type.bool;
    flip_h: type.bool;
    flip_v: type.bool;
    frame: type.int;
    frame_coords: type.Vector2i;
    hframes: type.int;
    offset: type.Vector2;
    region_enabled: type.bool;
    region_filter_clip_enabled: type.bool;
    region_rect: type.Rect2;
    texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    vframes: type.int;
}
export interface LightOccluder2D extends Node2D {
    occluder: {
        type: "OccluderPolygon2D";
        properties: OccluderPolygon2D;
    };
    occluder_light_mask: type.int;
    sdf_collision: type.bool;
}
export interface PlaceholderCubemap extends PlaceholderTextureLayered {
}
export interface Mutex extends RefCounted {
}
export interface Occluder3D extends Resource {
}
export interface HSplitContainer extends SplitContainer {
}
export interface StreamPeerTLS extends StreamPeer {
}
export declare namespace StreamPeerTLS {
    const enum Status {
        STATUS_DISCONNECTED = 0,
        STATUS_HANDSHAKING = 1,
        STATUS_CONNECTED = 2,
        STATUS_ERROR = 3,
        STATUS_ERROR_HOSTNAME_MISMATCH = 4
    }
}
export interface TriangleMesh extends RefCounted {
}
export interface ResourceImporterImage extends ResourceImporter {
}
export interface PackedDataContainerRef extends RefCounted {
}
export interface AnimationNodeAdd2 extends AnimationNodeSync {
}
export interface SplitContainer extends Container {
    collapsed: type.bool;
    drag_area_highlight_in_editor: type.bool;
    drag_area_margin_begin: type.int;
    drag_area_margin_end: type.int;
    drag_area_offset: type.int;
    dragger_visibility: type.int;
    dragging_enabled: type.bool;
    split_offset: type.int;
    vertical: type.bool;
    autohide: type.int;
    minimum_grab_thickness: type.int;
    separation: type.int;
    grabber: {
        type: "Texture2D";
        properties: Texture2D;
    };
    h_grabber: {
        type: "Texture2D";
        properties: Texture2D;
    };
    v_grabber: {
        type: "Texture2D";
        properties: Texture2D;
    };
    split_bar_background: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export declare namespace SplitContainer {
    const enum DraggerVisibility {
        DRAGGER_VISIBLE = 0,
        DRAGGER_HIDDEN = 1,
        DRAGGER_HIDDEN_COLLAPSED = 2
    }
}
export interface FontFile extends Font {
    allow_system_fallback: type.bool;
    antialiasing: type.int;
    data: type.PackedByteArray;
    disable_embedded_bitmaps: type.bool;
    fixed_size: type.int;
    fixed_size_scale_mode: type.int;
    font_name: type.String;
    font_stretch: type.int;
    font_style: type.int;
    font_weight: type.int;
    force_autohinter: type.bool;
    generate_mipmaps: type.bool;
    hinting: type.int;
    msdf_pixel_range: type.int;
    msdf_size: type.int;
    multichannel_signed_distance_field: type.bool;
    opentype_feature_overrides: {
        type: "Dictionary";
        properties: Dictionary;
    };
    oversampling: type.float;
    style_name: type.String;
    subpixel_positioning: type.int;
}
export interface RDAttachmentFormat extends RefCounted {
    format: type.int;
    samples: type.int;
    usage_flags: type.int;
}
export interface EditorExportPreset extends RefCounted {
}
export declare namespace EditorExportPreset {
    const enum ExportFilter {
        EXPORT_ALL_RESOURCES = 0,
        EXPORT_SELECTED_SCENES = 1,
        EXPORT_SELECTED_RESOURCES = 2,
        EXCLUDE_SELECTED_RESOURCES = 3,
        EXPORT_CUSTOMIZED = 4
    }
    const enum FileExportMode {
        MODE_FILE_NOT_CUSTOMIZED = 0,
        MODE_FILE_STRIP = 1,
        MODE_FILE_KEEP = 2,
        MODE_FILE_REMOVE = 3
    }
    const enum ScriptExportMode {
        MODE_SCRIPT_TEXT = 0,
        MODE_SCRIPT_BINARY_TOKENS = 1,
        MODE_SCRIPT_BINARY_TOKENS_COMPRESSED = 2
    }
}
export interface ColorPickerButton extends Button {
    color: type.Color;
    edit_alpha: type.bool;
    toggle_mode: type.bool;
    bg: {
        type: "Texture2D";
        properties: Texture2D;
    };
}
export interface EditorContextMenuPlugin extends RefCounted {
}
export declare namespace EditorContextMenuPlugin {
    const enum ContextMenuSlot {
        CONTEXT_SLOT_SCENE_TREE = 0,
        CONTEXT_SLOT_FILESYSTEM = 1,
        CONTEXT_SLOT_FILESYSTEM_CREATE = 3,
        CONTEXT_SLOT_SCRIPT_EDITOR = 2
    }
}
export interface EditorImportPlugin extends ResourceImporter {
}
export interface CharFXTransform extends RefCounted {
    color: type.Color;
    elapsed_time: type.float;
    env: {
        type: "Dictionary";
        properties: Dictionary;
    };
    font: {
        type: "RID";
        properties: RID;
    };
    glyph_count: type.int;
    glyph_flags: type.int;
    glyph_index: type.int;
    offset: type.Vector2;
    outline: type.bool;
    range: type.Vector2i;
    relative_index: type.int;
    transform: type.Transform2D;
    visible: type.bool;
}
export interface VisualShaderNodeVectorCompose extends VisualShaderNodeVectorBase {
}
export interface VisualShaderNodeIntOp extends VisualShaderNode {
    operator: type.int;
}
export declare namespace VisualShaderNodeIntOp {
    const enum Operator {
        OP_ADD = 0,
        OP_SUB = 1,
        OP_MUL = 2,
        OP_DIV = 3,
        OP_MOD = 4,
        OP_MAX = 5,
        OP_MIN = 6,
        OP_BITWISE_AND = 7,
        OP_BITWISE_OR = 8,
        OP_BITWISE_XOR = 9,
        OP_BITWISE_LEFT_SHIFT = 10,
        OP_BITWISE_RIGHT_SHIFT = 11,
        OP_ENUM_SIZE = 12
    }
}
export interface EditorExportPlatform extends RefCounted {
}
export declare namespace EditorExportPlatform {
    const enum ExportMessageType {
        EXPORT_MESSAGE_NONE = 0,
        EXPORT_MESSAGE_INFO = 1,
        EXPORT_MESSAGE_WARNING = 2,
        EXPORT_MESSAGE_ERROR = 3
    }
    const enum DebugFlags {
        DEBUG_FLAG_DUMB_CLIENT = 1,
        DEBUG_FLAG_REMOTE_DEBUG = 2,
        DEBUG_FLAG_REMOTE_DEBUG_LOCALHOST = 4,
        DEBUG_FLAG_VIEW_COLLISIONS = 8,
        DEBUG_FLAG_VIEW_NAVIGATION = 16
    }
}
export interface GPUParticlesCollision3D extends VisualInstance3D {
    cull_mask: type.int;
}
export interface NavigationMeshSourceGeometryData3D extends Resource {
}
export interface ResourceImporterScene extends ResourceImporter {
    _subresources: {
        type: "Dictionary";
        properties: Dictionary;
    };
    'animation/fps': type.float;
    'animation/import': type.bool;
    'animation/import_rest_as_RESET': type.bool;
    'animation/remove_immutable_tracks': type.bool;
    'animation/trimming': type.bool;
    'import_script/path': type.String;
    'meshes/create_shadow_meshes': type.bool;
    'meshes/ensure_tangents': type.bool;
    'meshes/force_disable_compression': type.bool;
    'meshes/generate_lods': type.bool;
    'meshes/light_baking': type.int;
    'meshes/lightmap_texel_size': type.float;
    'nodes/apply_root_scale': type.bool;
    'nodes/import_as_skeleton_bones': type.bool;
    'nodes/root_name': type.String;
    'nodes/root_scale': type.float;
    'nodes/root_type': type.String;
    'nodes/use_node_type_suffixes': type.bool;
    'skins/use_named_skins': type.bool;
}
export interface PlaceholderTextureLayered extends TextureLayered {
    layers: type.int;
    size: type.Vector2i;
}
export interface TextureLayered extends Texture {
}
export declare namespace TextureLayered {
    const enum LayeredType {
        LAYERED_TYPE_2D_ARRAY = 0,
        LAYERED_TYPE_CUBEMAP = 1,
        LAYERED_TYPE_CUBEMAP_ARRAY = 2
    }
}
export interface NavigationRegion2D extends Node2D {
    enabled: type.bool;
    enter_cost: type.float;
    navigation_layers: type.int;
    navigation_polygon: {
        type: "NavigationPolygon";
        properties: NavigationPolygon;
    };
    travel_cost: type.float;
    use_edge_connections: type.bool;
}
export interface PolygonPathFinder extends Resource {
}
export interface TileData extends Object {
    flip_h: type.bool;
    flip_v: type.bool;
    material: {
        type: "Material";
        properties: Material;
    };
    modulate: type.Color;
    probability: type.float;
    terrain: type.int;
    terrain_set: type.int;
    texture_origin: type.Vector2i;
    transpose: type.bool;
    y_sort_origin: type.int;
    z_index: type.int;
}
export interface VisualShaderNodeTransformOp extends VisualShaderNode {
    operator: type.int;
}
export declare namespace VisualShaderNodeTransformOp {
    const enum Operator {
        OP_AxB = 0,
        OP_BxA = 1,
        OP_AxB_COMP = 2,
        OP_BxA_COMP = 3,
        OP_ADD = 4,
        OP_A_MINUS_B = 5,
        OP_B_MINUS_A = 6,
        OP_A_DIV_B = 7,
        OP_B_DIV_A = 8,
        OP_MAX = 9
    }
}
export interface DirectionalLight3D extends Light3D {
    directional_shadow_blend_splits: type.bool;
    directional_shadow_fade_start: type.float;
    directional_shadow_max_distance: type.float;
    directional_shadow_mode: type.int;
    directional_shadow_pancake_size: type.float;
    directional_shadow_split_1: type.float;
    directional_shadow_split_2: type.float;
    directional_shadow_split_3: type.float;
    sky_mode: type.int;
}
export declare namespace DirectionalLight3D {
    const enum ShadowMode {
        SHADOW_ORTHOGONAL = 0,
        SHADOW_PARALLEL_2_SPLITS = 1,
        SHADOW_PARALLEL_4_SPLITS = 2
    }
    const enum SkyMode {
        SKY_MODE_LIGHT_AND_SKY = 0,
        SKY_MODE_LIGHT_ONLY = 1,
        SKY_MODE_SKY_ONLY = 2
    }
}
export interface VisualShaderNodeVectorDecompose extends VisualShaderNodeVectorBase {
}
export interface JSONRPC extends Object {
}
export declare namespace JSONRPC {
    const enum ErrorCode {
        PARSE_ERROR = -32700,
        INVALID_REQUEST = -32600,
        METHOD_NOT_FOUND = -32601,
        INVALID_PARAMS = -32602,
        INTERNAL_ERROR = -32603
    }
}
export interface FogVolume extends VisualInstance3D {
    material: {
        type: "Material";
        properties: Material;
    };
    shape: type.int;
    size: type.Vector3;
}
export interface VisualShaderNodeParticleOutput extends VisualShaderNodeOutput {
}
export interface SystemFont extends Font {
    allow_system_fallback: type.bool;
    antialiasing: type.int;
    disable_embedded_bitmaps: type.bool;
    font_italic: type.bool;
    font_names: type.PackedStringArray;
    font_stretch: type.int;
    font_weight: type.int;
    force_autohinter: type.bool;
    generate_mipmaps: type.bool;
    hinting: type.int;
    msdf_pixel_range: type.int;
    msdf_size: type.int;
    multichannel_signed_distance_field: type.bool;
    oversampling: type.float;
    subpixel_positioning: type.int;
}
export interface RDPipelineMultisampleState extends RefCounted {
    enable_alpha_to_coverage: type.bool;
    enable_alpha_to_one: type.bool;
    enable_sample_shading: type.bool;
    min_sample_shading: type.float;
    sample_count: type.int;
    sample_masks: type.int[];
}
export interface SphereOccluder3D extends Occluder3D {
    radius: type.float;
}
export interface LineEdit extends Control {
    alignment: type.int;
    caret_blink: type.bool;
    caret_blink_interval: type.float;
    caret_column: type.int;
    caret_force_displayed: type.bool;
    caret_mid_grapheme: type.bool;
    clear_button_enabled: type.bool;
    context_menu_enabled: type.bool;
    deselect_on_focus_loss_enabled: type.bool;
    drag_and_drop_selection_enabled: type.bool;
    draw_control_chars: type.bool;
    editable: type.bool;
    expand_to_text_length: type.bool;
    flat: type.bool;
    focus_mode: type.int;
    language: type.String;
    max_length: type.int;
    middle_mouse_paste_enabled: type.bool;
    mouse_default_cursor_shape: type.int;
    placeholder_text: type.String;
    right_icon: {
        type: "Texture2D";
        properties: Texture2D;
    };
    secret: type.bool;
    secret_character: type.String;
    select_all_on_focus: type.bool;
    selecting_enabled: type.bool;
    shortcut_keys_enabled: type.bool;
    structured_text_bidi_override: type.int;
    structured_text_bidi_override_options: type.Array;
    text: type.String;
    text_direction: type.int;
    virtual_keyboard_enabled: type.bool;
    virtual_keyboard_type: type.int;
    caret_color: type.Color;
    clear_button_color: type.Color;
    clear_button_color_pressed: type.Color;
    font_color: type.Color;
    font_outline_color: type.Color;
    font_placeholder_color: type.Color;
    font_selected_color: type.Color;
    font_uneditable_color: type.Color;
    selection_color: type.Color;
    caret_width: type.int;
    minimum_character_width: type.int;
    outline_size: type.int;
    font: {
        type: "Font";
        properties: Font;
    };
    font_size: type.int;
    clear: {
        type: "Texture2D";
        properties: Texture2D;
    };
    focus: {
        type: "StyleBox";
        properties: StyleBox;
    };
    normal: {
        type: "StyleBox";
        properties: StyleBox;
    };
    read_only: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export declare namespace LineEdit {
    const enum MenuItems {
        MENU_CUT = 0,
        MENU_COPY = 1,
        MENU_PASTE = 2,
        MENU_CLEAR = 3,
        MENU_SELECT_ALL = 4,
        MENU_UNDO = 5,
        MENU_REDO = 6,
        MENU_SUBMENU_TEXT_DIR = 7,
        MENU_DIR_INHERITED = 8,
        MENU_DIR_AUTO = 9,
        MENU_DIR_LTR = 10,
        MENU_DIR_RTL = 11,
        MENU_DISPLAY_UCC = 12,
        MENU_SUBMENU_INSERT_UCC = 13,
        MENU_INSERT_LRM = 14,
        MENU_INSERT_RLM = 15,
        MENU_INSERT_LRE = 16,
        MENU_INSERT_RLE = 17,
        MENU_INSERT_LRO = 18,
        MENU_INSERT_RLO = 19,
        MENU_INSERT_PDF = 20,
        MENU_INSERT_ALM = 21,
        MENU_INSERT_LRI = 22,
        MENU_INSERT_RLI = 23,
        MENU_INSERT_FSI = 24,
        MENU_INSERT_PDI = 25,
        MENU_INSERT_ZWJ = 26,
        MENU_INSERT_ZWNJ = 27,
        MENU_INSERT_WJ = 28,
        MENU_INSERT_SHY = 29,
        MENU_MAX = 30
    }
    const enum VirtualKeyboardType {
        KEYBOARD_TYPE_DEFAULT = 0,
        KEYBOARD_TYPE_MULTILINE = 1,
        KEYBOARD_TYPE_NUMBER = 2,
        KEYBOARD_TYPE_NUMBER_DECIMAL = 3,
        KEYBOARD_TYPE_PHONE = 4,
        KEYBOARD_TYPE_EMAIL_ADDRESS = 5,
        KEYBOARD_TYPE_PASSWORD = 6,
        KEYBOARD_TYPE_URL = 7
    }
}
export interface StyleBoxEmpty extends StyleBox {
}
export interface HingeJoint3D extends Joint3D {
    'angular_limit/bias': type.float;
    'angular_limit/enable': type.bool;
    'angular_limit/lower': type.float;
    'angular_limit/relaxation': type.float;
    'angular_limit/softness': type.float;
    'angular_limit/upper': type.float;
    'motor/enable': type.bool;
    'motor/max_impulse': type.float;
    'motor/target_velocity': type.float;
    'params/bias': type.float;
}
export declare namespace HingeJoint3D {
    const enum Param {
        PARAM_BIAS = 0,
        PARAM_LIMIT_UPPER = 1,
        PARAM_LIMIT_LOWER = 2,
        PARAM_LIMIT_BIAS = 3,
        PARAM_LIMIT_SOFTNESS = 4,
        PARAM_LIMIT_RELAXATION = 5,
        PARAM_MOTOR_TARGET_VELOCITY = 6,
        PARAM_MOTOR_MAX_IMPULSE = 7,
        PARAM_MAX = 8
    }
    const enum Flag {
        FLAG_USE_LIMIT = 0,
        FLAG_ENABLE_MOTOR = 1,
        FLAG_MAX = 2
    }
}
export interface Curve3D extends Resource {
    bake_interval: type.float;
    point_count: type.int;
    up_vector_enabled: type.bool;
}
export interface ResourceSaver extends Object {
}
export declare namespace ResourceSaver {
    const enum SaverFlags {
        FLAG_NONE = 0,
        FLAG_RELATIVE_PATHS = 1,
        FLAG_BUNDLE_RESOURCES = 2,
        FLAG_CHANGE_PATH = 4,
        FLAG_OMIT_EDITOR_PROPERTIES = 8,
        FLAG_SAVE_BIG_ENDIAN = 16,
        FLAG_COMPRESS = 32,
        FLAG_REPLACE_SUBRESOURCE_PATHS = 64
    }
}
export interface Joint3D extends Node3D {
    exclude_nodes_from_collision: type.bool;
    node_a: type.NodePath;
    node_b: type.NodePath;
    solver_priority: type.int;
}
export interface EditorFileSystemImportFormatSupportQuery extends RefCounted {
}
export interface PathFollow2D extends Node2D {
    cubic_interp: type.bool;
    h_offset: type.float;
    loop: type.bool;
    progress: type.float;
    progress_ratio: type.float;
    rotates: type.bool;
    v_offset: type.float;
}
export interface X509Certificate extends Resource {
}
export interface VisualShaderNodeVec4Constant extends VisualShaderNodeConstant {
    constant: type.Quaternion;
}
export interface GPUParticlesCollisionSDF3D extends GPUParticlesCollision3D {
    bake_mask: type.int;
    resolution: type.int;
    size: type.Vector3;
    texture: {
        type: "Texture3D";
        properties: Texture3D;
    };
    thickness: type.float;
}
export declare namespace GPUParticlesCollisionSDF3D {
    const enum Resolution {
        RESOLUTION_16 = 0,
        RESOLUTION_32 = 1,
        RESOLUTION_64 = 2,
        RESOLUTION_128 = 3,
        RESOLUTION_256 = 4,
        RESOLUTION_512 = 5,
        RESOLUTION_MAX = 6
    }
}
export interface QuadOccluder3D extends Occluder3D {
    size: type.Vector2;
}
export interface VisualShaderNodeParticleConeVelocity extends VisualShaderNode {
}
export interface ScriptLanguageExtension extends ScriptLanguage {
}
export declare namespace ScriptLanguageExtension {
    const enum LookupResultType {
        LOOKUP_RESULT_SCRIPT_LOCATION = 0,
        LOOKUP_RESULT_CLASS = 1,
        LOOKUP_RESULT_CLASS_CONSTANT = 2,
        LOOKUP_RESULT_CLASS_PROPERTY = 3,
        LOOKUP_RESULT_CLASS_METHOD = 4,
        LOOKUP_RESULT_CLASS_SIGNAL = 5,
        LOOKUP_RESULT_CLASS_ENUM = 6,
        LOOKUP_RESULT_CLASS_TBD_GLOBALSCOPE = 7,
        LOOKUP_RESULT_CLASS_ANNOTATION = 8,
        LOOKUP_RESULT_MAX = 9
    }
    const enum CodeCompletionLocation {
        LOCATION_LOCAL = 0,
        LOCATION_PARENT_MASK = 256,
        LOCATION_OTHER_USER_CODE = 512,
        LOCATION_OTHER = 1024
    }
    const enum CodeCompletionKind {
        CODE_COMPLETION_KIND_CLASS = 0,
        CODE_COMPLETION_KIND_FUNCTION = 1,
        CODE_COMPLETION_KIND_SIGNAL = 2,
        CODE_COMPLETION_KIND_VARIABLE = 3,
        CODE_COMPLETION_KIND_MEMBER = 4,
        CODE_COMPLETION_KIND_ENUM = 5,
        CODE_COMPLETION_KIND_CONSTANT = 6,
        CODE_COMPLETION_KIND_NODE_PATH = 7,
        CODE_COMPLETION_KIND_FILE_PATH = 8,
        CODE_COMPLETION_KIND_PLAIN_TEXT = 9,
        CODE_COMPLETION_KIND_MAX = 10
    }
}
export interface AnimationNodeAdd3 extends AnimationNodeSync {
}
export interface ResourceLoader extends Object {
}
export declare namespace ResourceLoader {
    const enum ThreadLoadStatus {
        THREAD_LOAD_INVALID_RESOURCE = 0,
        THREAD_LOAD_IN_PROGRESS = 1,
        THREAD_LOAD_FAILED = 2,
        THREAD_LOAD_LOADED = 3
    }
    const enum CacheMode {
        CACHE_MODE_IGNORE = 0,
        CACHE_MODE_REUSE = 1,
        CACHE_MODE_REPLACE = 2,
        CACHE_MODE_IGNORE_DEEP = 3,
        CACHE_MODE_REPLACE_DEEP = 4
    }
}
export interface PrismMesh extends PrimitiveMesh {
    left_to_right: type.float;
    size: type.Vector3;
    subdivide_depth: type.int;
    subdivide_height: type.int;
    subdivide_width: type.int;
}
export interface AnimationNodeBlendTree extends AnimationRootNode {
    graph_offset: type.Vector2;
}
export declare namespace AnimationNodeBlendTree {
    const CONNECTION_OK = 0;
    const CONNECTION_ERROR_NO_INPUT = 1;
    const CONNECTION_ERROR_NO_INPUT_INDEX = 2;
    const CONNECTION_ERROR_NO_OUTPUT = 3;
    const CONNECTION_ERROR_SAME_NODE = 4;
    const CONNECTION_ERROR_CONNECTION_EXISTS = 5;
}
export interface GPUParticlesAttractorBox3D extends GPUParticlesAttractor3D {
    size: type.Vector3;
}
export interface RDUniform extends RefCounted {
    binding: type.int;
    uniform_type: type.int;
}
export interface AnimationNodeBlendSpace1D extends AnimationRootNode {
    blend_mode: type.int;
    max_space: type.float;
    min_space: type.float;
    snap: type.float;
    sync: type.bool;
    value_label: type.String;
}
export declare namespace AnimationNodeBlendSpace1D {
    const enum BlendMode {
        BLEND_MODE_INTERPOLATED = 0,
        BLEND_MODE_DISCRETE = 1,
        BLEND_MODE_DISCRETE_CARRY = 2
    }
}
export interface Separator extends Control {
    separation: type.int;
    separator: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export interface XRController3D extends XRNode3D {
}
export interface ShaderGlobalsOverride extends Node {
}
export interface SceneTreeTimer extends RefCounted {
    time_left: type.float;
}
export interface HashingContext extends RefCounted {
}
export declare namespace HashingContext {
    const enum HashType {
        HASH_MD5 = 0,
        HASH_SHA1 = 1,
        HASH_SHA256 = 2
    }
}
export interface InputEventJoypadMotion extends InputEvent {
    axis: type.int;
    axis_value: type.float;
}
export interface InputEventFromWindow extends InputEvent {
    window_id: type.int;
}
export interface PhysicalSkyMaterial extends Material {
    energy_multiplier: type.float;
    ground_color: type.Color;
    mie_coefficient: type.float;
    mie_color: type.Color;
    mie_eccentricity: type.float;
    night_sky: {
        type: "Texture2D";
        properties: Texture2D;
    };
    rayleigh_coefficient: type.float;
    rayleigh_color: type.Color;
    sun_disk_scale: type.float;
    turbidity: type.float;
    use_debanding: type.bool;
}
export interface AudioServer extends Object {
    bus_count: type.int;
    input_device: type.String;
    output_device: type.String;
    playback_speed_scale: type.float;
}
export declare namespace AudioServer {
    const enum SpeakerMode {
        SPEAKER_MODE_STEREO = 0,
        SPEAKER_SURROUND_31 = 1,
        SPEAKER_SURROUND_51 = 2,
        SPEAKER_SURROUND_71 = 3
    }
    const enum PlaybackType {
        PLAYBACK_TYPE_DEFAULT = 0,
        PLAYBACK_TYPE_STREAM = 1,
        PLAYBACK_TYPE_SAMPLE = 2,
        PLAYBACK_TYPE_MAX = 3
    }
}
export interface EditorCommandPalette extends ConfirmationDialog {
    dialog_hide_on_ok: type.bool;
}
export interface VisualShaderNodeSample3D extends VisualShaderNode {
    source: type.int;
}
export declare namespace VisualShaderNodeSample3D {
    const enum Source {
        SOURCE_TEXTURE = 0,
        SOURCE_PORT = 1,
        SOURCE_MAX = 2
    }
}
export interface SegmentShape2D extends Shape2D {
    a: type.Vector2;
    b: type.Vector2;
}
export interface Joint2D extends Node2D {
    bias: type.float;
    disable_collision: type.bool;
    node_a: type.NodePath;
    node_b: type.NodePath;
}
export interface PathFollow3D extends Node3D {
    cubic_interp: type.bool;
    h_offset: type.float;
    loop: type.bool;
    progress: type.float;
    progress_ratio: type.float;
    rotation_mode: type.int;
    tilt_enabled: type.bool;
    use_model_front: type.bool;
    v_offset: type.float;
}
export declare namespace PathFollow3D {
    const enum RotationMode {
        ROTATION_NONE = 0,
        ROTATION_Y = 1,
        ROTATION_XY = 2,
        ROTATION_XYZ = 3,
        ROTATION_ORIENTED = 4
    }
}
export interface BoneAttachment3D extends Node3D {
    bone_idx: type.int;
    bone_name: type.String;
    override_pose: type.bool;
}
export interface VisualShaderNodeVarying extends VisualShaderNode {
    varying_name: type.String;
    varying_type: type.int;
}
export interface Curve2D extends Resource {
    bake_interval: type.float;
    point_count: type.int;
}
export interface XRServer extends Object {
    primary_interface: {
        type: "XRInterface";
        properties: XRInterface;
    };
    world_origin: type.Transform3D;
    world_scale: type.float;
}
export declare namespace XRServer {
    const enum TrackerType {
        TRACKER_HEAD = 1,
        TRACKER_CONTROLLER = 2,
        TRACKER_BASESTATION = 4,
        TRACKER_ANCHOR = 8,
        TRACKER_HAND = 16,
        TRACKER_BODY = 32,
        TRACKER_FACE = 64,
        TRACKER_ANY_KNOWN = 127,
        TRACKER_UNKNOWN = 128,
        TRACKER_ANY = 255
    }
    const enum RotationMode {
        RESET_FULL_ROTATION = 0,
        RESET_BUT_KEEP_TILT = 1,
        DONT_RESET_ROTATION = 2
    }
}
export interface Resource extends RefCounted {
    resource_local_to_scene: type.bool;
    resource_name: type.String;
    resource_path: type.String;
    resource_scene_unique_id: type.String;
}
export interface WorkerThreadPool extends Object {
}
export interface EditorFileSystemDirectory extends Object {
}
export interface EditorPlugin extends Node {
}
export declare namespace EditorPlugin {
    const enum CustomControlContainer {
        CONTAINER_TOOLBAR = 0,
        CONTAINER_SPATIAL_EDITOR_MENU = 1,
        CONTAINER_SPATIAL_EDITOR_SIDE_LEFT = 2,
        CONTAINER_SPATIAL_EDITOR_SIDE_RIGHT = 3,
        CONTAINER_SPATIAL_EDITOR_BOTTOM = 4,
        CONTAINER_CANVAS_EDITOR_MENU = 5,
        CONTAINER_CANVAS_EDITOR_SIDE_LEFT = 6,
        CONTAINER_CANVAS_EDITOR_SIDE_RIGHT = 7,
        CONTAINER_CANVAS_EDITOR_BOTTOM = 8,
        CONTAINER_INSPECTOR_BOTTOM = 9,
        CONTAINER_PROJECT_SETTING_TAB_LEFT = 10,
        CONTAINER_PROJECT_SETTING_TAB_RIGHT = 11
    }
    const enum DockSlot {
        DOCK_SLOT_LEFT_UL = 0,
        DOCK_SLOT_LEFT_BL = 1,
        DOCK_SLOT_LEFT_UR = 2,
        DOCK_SLOT_LEFT_BR = 3,
        DOCK_SLOT_RIGHT_UL = 4,
        DOCK_SLOT_RIGHT_BL = 5,
        DOCK_SLOT_RIGHT_UR = 6,
        DOCK_SLOT_RIGHT_BR = 7,
        DOCK_SLOT_MAX = 8
    }
    const enum AfterGUIInput {
        AFTER_GUI_INPUT_PASS = 0,
        AFTER_GUI_INPUT_STOP = 1,
        AFTER_GUI_INPUT_CUSTOM = 2
    }
}
export interface VisualShaderNodeDerivativeFunc extends VisualShaderNode {
    function: type.int;
    op_type: type.int;
    precision: type.int;
}
export declare namespace VisualShaderNodeDerivativeFunc {
    const enum OpType {
        OP_TYPE_SCALAR = 0,
        OP_TYPE_VECTOR_2D = 1,
        OP_TYPE_VECTOR_3D = 2,
        OP_TYPE_VECTOR_4D = 3,
        OP_TYPE_MAX = 4
    }
    const enum Function {
        FUNC_SUM = 0,
        FUNC_X = 1,
        FUNC_Y = 2,
        FUNC_MAX = 3
    }
    const enum Precision {
        PRECISION_NONE = 0,
        PRECISION_COARSE = 1,
        PRECISION_FINE = 2,
        PRECISION_MAX = 3
    }
}
export interface SoftBody3D extends MeshInstance3D {
    collision_layer: type.int;
    collision_mask: type.int;
    damping_coefficient: type.float;
    disable_mode: type.int;
    drag_coefficient: type.float;
    linear_stiffness: type.float;
    parent_collision_ignore: type.NodePath;
    pressure_coefficient: type.float;
    ray_pickable: type.bool;
    simulation_precision: type.int;
    total_mass: type.float;
}
export declare namespace SoftBody3D {
    const enum DisableMode {
        DISABLE_MODE_REMOVE = 0,
        DISABLE_MODE_KEEP_ACTIVE = 1
    }
}
export interface DirectionalLight2D extends Light2D {
    height: type.float;
    max_distance: type.float;
}
export interface BoxContainer extends Container {
    alignment: type.int;
    vertical: type.bool;
    separation: type.int;
}
export declare namespace BoxContainer {
    const enum AlignmentMode {
        ALIGNMENT_BEGIN = 0,
        ALIGNMENT_CENTER = 1,
        ALIGNMENT_END = 2
    }
}
export interface NavigationRegion3D extends Node3D {
    enabled: type.bool;
    enter_cost: type.float;
    navigation_layers: type.int;
    navigation_mesh: {
        type: "NavigationMesh";
        properties: NavigationMesh;
    };
    travel_cost: type.float;
    use_edge_connections: type.bool;
}
export interface DirAccess extends RefCounted {
    include_hidden: type.bool;
    include_navigational: type.bool;
}
export interface RenderData extends Object {
}
export interface NavigationMeshSourceGeometryData2D extends Resource {
}
export interface DampedSpringJoint2D extends Joint2D {
    damping: type.float;
    length: type.float;
    rest_length: type.float;
    stiffness: type.float;
}
export interface BitMap extends Resource {
}
export interface VisualShaderNodeRandomRange extends VisualShaderNode {
}
export interface ScrollBar extends Range {
    custom_step: type.float;
    step: type.float;
    decrement: {
        type: "Texture2D";
        properties: Texture2D;
    };
    decrement_highlight: {
        type: "Texture2D";
        properties: Texture2D;
    };
    decrement_pressed: {
        type: "Texture2D";
        properties: Texture2D;
    };
    increment: {
        type: "Texture2D";
        properties: Texture2D;
    };
    increment_highlight: {
        type: "Texture2D";
        properties: Texture2D;
    };
    increment_pressed: {
        type: "Texture2D";
        properties: Texture2D;
    };
    grabber: {
        type: "StyleBox";
        properties: StyleBox;
    };
    grabber_highlight: {
        type: "StyleBox";
        properties: StyleBox;
    };
    grabber_pressed: {
        type: "StyleBox";
        properties: StyleBox;
    };
    scroll: {
        type: "StyleBox";
        properties: StyleBox;
    };
    scroll_focus: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export interface AudioEffectSpectrumAnalyzerInstance extends AudioEffectInstance {
}
export declare namespace AudioEffectSpectrumAnalyzerInstance {
    const enum MagnitudeMode {
        MAGNITUDE_AVERAGE = 0,
        MAGNITUDE_MAX = 1
    }
}
export interface AudioSamplePlayback extends RefCounted {
}
export interface PackedDataContainer extends Resource {
}
export interface RID {
}
export interface SkeletonModification2D extends Resource {
    enabled: type.bool;
    execution_mode: type.int;
}
export interface Curve extends Resource {
    bake_resolution: type.int;
    max_value: type.float;
    min_value: type.float;
    point_count: type.int;
}
export declare namespace Curve {
    const enum TangentMode {
        TANGENT_FREE = 0,
        TANGENT_LINEAR = 1,
        TANGENT_MODE_COUNT = 2
    }
}
export interface AudioEffectLowPassFilter extends AudioEffectFilter {
}
export interface SyntaxHighlighter extends Resource {
}
export interface TabContainer extends Container {
    all_tabs_in_front: type.bool;
    clip_tabs: type.bool;
    current_tab: type.int;
    deselect_enabled: type.bool;
    drag_to_rearrange_enabled: type.bool;
    tab_alignment: type.int;
    tab_focus_mode: type.int;
    tabs_position: type.int;
    tabs_rearrange_group: type.int;
    tabs_visible: type.bool;
    use_hidden_tabs_for_min_size: type.bool;
    drop_mark_color: type.Color;
    font_disabled_color: type.Color;
    font_hovered_color: type.Color;
    font_outline_color: type.Color;
    font_selected_color: type.Color;
    font_unselected_color: type.Color;
    icon_max_width: type.int;
    icon_separation: type.int;
    outline_size: type.int;
    side_margin: type.int;
    font: {
        type: "Font";
        properties: Font;
    };
    font_size: type.int;
    decrement: {
        type: "Texture2D";
        properties: Texture2D;
    };
    decrement_highlight: {
        type: "Texture2D";
        properties: Texture2D;
    };
    drop_mark: {
        type: "Texture2D";
        properties: Texture2D;
    };
    increment: {
        type: "Texture2D";
        properties: Texture2D;
    };
    increment_highlight: {
        type: "Texture2D";
        properties: Texture2D;
    };
    menu: {
        type: "Texture2D";
        properties: Texture2D;
    };
    menu_highlight: {
        type: "Texture2D";
        properties: Texture2D;
    };
    panel: {
        type: "StyleBox";
        properties: StyleBox;
    };
    tab_disabled: {
        type: "StyleBox";
        properties: StyleBox;
    };
    tab_focus: {
        type: "StyleBox";
        properties: StyleBox;
    };
    tab_hovered: {
        type: "StyleBox";
        properties: StyleBox;
    };
    tab_selected: {
        type: "StyleBox";
        properties: StyleBox;
    };
    tab_unselected: {
        type: "StyleBox";
        properties: StyleBox;
    };
    tabbar_background: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export declare namespace TabContainer {
    const enum TabPosition {
        POSITION_TOP = 0,
        POSITION_BOTTOM = 1,
        POSITION_MAX = 2
    }
}
export interface ImageFormatLoaderExtension extends ImageFormatLoader {
}
export interface ImageTextureLayered extends TextureLayered {
}
export interface PacketPeerDTLS extends PacketPeer {
}
export declare namespace PacketPeerDTLS {
    const enum Status {
        STATUS_DISCONNECTED = 0,
        STATUS_HANDSHAKING = 1,
        STATUS_CONNECTED = 2,
        STATUS_ERROR = 3,
        STATUS_ERROR_HOSTNAME_MISMATCH = 4
    }
}
export interface CameraTexture extends Texture2D {
    camera_feed_id: type.int;
    camera_is_active: type.bool;
    resource_local_to_scene: type.bool;
    which_feed: type.int;
}
export interface ScriptEditor extends PanelContainer {
}
export interface GPUParticlesAttractorSphere3D extends GPUParticlesAttractor3D {
    radius: type.float;
}
export interface RDShaderFile extends Resource {
    base_error: type.String;
}
export interface SkinReference extends RefCounted {
}
export interface Tweener extends RefCounted {
}
export interface VisualShaderNodeScreenNormalWorldSpace extends VisualShaderNode {
}
export interface VisualShaderNodeSmoothStep extends VisualShaderNode {
    op_type: type.int;
}
export declare namespace VisualShaderNodeSmoothStep {
    const enum OpType {
        OP_TYPE_SCALAR = 0,
        OP_TYPE_VECTOR_2D = 1,
        OP_TYPE_VECTOR_2D_SCALAR = 2,
        OP_TYPE_VECTOR_3D = 3,
        OP_TYPE_VECTOR_3D_SCALAR = 4,
        OP_TYPE_VECTOR_4D = 5,
        OP_TYPE_VECTOR_4D_SCALAR = 6,
        OP_TYPE_MAX = 7
    }
}
export interface VisualShaderNodeParticleSphereEmitter extends VisualShaderNodeParticleEmitter {
}
export interface TextServerExtension extends TextServer {
}
export interface AnimationNodeTransition extends AnimationNodeSync {
    allow_transition_to_self: type.bool;
    input_count: type.int;
    xfade_curve: {
        type: "Curve";
        properties: Curve;
    };
    xfade_time: type.float;
}
export interface VisualShaderNodeParameter extends VisualShaderNode {
    parameter_name: type.String;
    qualifier: type.int;
}
export declare namespace VisualShaderNodeParameter {
    const enum Qualifier {
        QUAL_NONE = 0,
        QUAL_GLOBAL = 1,
        QUAL_INSTANCE = 2,
        QUAL_MAX = 3
    }
}
export interface Sprite3D extends SpriteBase3D {
    frame: type.int;
    frame_coords: type.Vector2i;
    hframes: type.int;
    region_enabled: type.bool;
    region_rect: type.Rect2;
    texture: {
        type: "Texture2D";
        properties: Texture2D;
    };
    vframes: type.int;
}
export interface VisualShaderNodeTexture2DParameter extends VisualShaderNodeTextureParameter {
}
export interface PolygonOccluder3D extends Occluder3D {
    polygon: type.PackedVector2Array;
}
export interface DisplayServer extends Object {
}
export declare namespace DisplayServer {
    const enum Feature {
        FEATURE_GLOBAL_MENU = 0,
        FEATURE_SUBWINDOWS = 1,
        FEATURE_TOUCHSCREEN = 2,
        FEATURE_MOUSE = 3,
        FEATURE_MOUSE_WARP = 4,
        FEATURE_CLIPBOARD = 5,
        FEATURE_VIRTUAL_KEYBOARD = 6,
        FEATURE_CURSOR_SHAPE = 7,
        FEATURE_CUSTOM_CURSOR_SHAPE = 8,
        FEATURE_NATIVE_DIALOG = 9,
        FEATURE_IME = 10,
        FEATURE_WINDOW_TRANSPARENCY = 11,
        FEATURE_HIDPI = 12,
        FEATURE_ICON = 13,
        FEATURE_NATIVE_ICON = 14,
        FEATURE_ORIENTATION = 15,
        FEATURE_SWAP_BUFFERS = 16,
        FEATURE_CLIPBOARD_PRIMARY = 18,
        FEATURE_TEXT_TO_SPEECH = 19,
        FEATURE_EXTEND_TO_TITLE = 20,
        FEATURE_SCREEN_CAPTURE = 21,
        FEATURE_STATUS_INDICATOR = 22,
        FEATURE_NATIVE_HELP = 23,
        FEATURE_NATIVE_DIALOG_INPUT = 24,
        FEATURE_NATIVE_DIALOG_FILE = 25,
        FEATURE_NATIVE_DIALOG_FILE_EXTRA = 26
    }
    const enum MouseMode {
        MOUSE_MODE_VISIBLE = 0,
        MOUSE_MODE_HIDDEN = 1,
        MOUSE_MODE_CAPTURED = 2,
        MOUSE_MODE_CONFINED = 3,
        MOUSE_MODE_CONFINED_HIDDEN = 4
    }
    const SCREEN_WITH_MOUSE_FOCUS = -4;
    const SCREEN_WITH_KEYBOARD_FOCUS = -3;
    const SCREEN_PRIMARY = -2;
    const SCREEN_OF_MAIN_WINDOW = -1;
    const MAIN_WINDOW_ID = 0;
    const INVALID_WINDOW_ID = -1;
    const INVALID_INDICATOR_ID = -1;
    const enum ScreenOrientation {
        SCREEN_LANDSCAPE = 0,
        SCREEN_PORTRAIT = 1,
        SCREEN_REVERSE_LANDSCAPE = 2,
        SCREEN_REVERSE_PORTRAIT = 3,
        SCREEN_SENSOR_LANDSCAPE = 4,
        SCREEN_SENSOR_PORTRAIT = 5,
        SCREEN_SENSOR = 6
    }
    const enum VirtualKeyboardType {
        KEYBOARD_TYPE_DEFAULT = 0,
        KEYBOARD_TYPE_MULTILINE = 1,
        KEYBOARD_TYPE_NUMBER = 2,
        KEYBOARD_TYPE_NUMBER_DECIMAL = 3,
        KEYBOARD_TYPE_PHONE = 4,
        KEYBOARD_TYPE_EMAIL_ADDRESS = 5,
        KEYBOARD_TYPE_PASSWORD = 6,
        KEYBOARD_TYPE_URL = 7
    }
    const enum CursorShape {
        CURSOR_ARROW = 0,
        CURSOR_IBEAM = 1,
        CURSOR_POINTING_HAND = 2,
        CURSOR_CROSS = 3,
        CURSOR_WAIT = 4,
        CURSOR_BUSY = 5,
        CURSOR_DRAG = 6,
        CURSOR_CAN_DROP = 7,
        CURSOR_FORBIDDEN = 8,
        CURSOR_VSIZE = 9,
        CURSOR_HSIZE = 10,
        CURSOR_BDIAGSIZE = 11,
        CURSOR_FDIAGSIZE = 12,
        CURSOR_MOVE = 13,
        CURSOR_VSPLIT = 14,
        CURSOR_HSPLIT = 15,
        CURSOR_HELP = 16,
        CURSOR_MAX = 17
    }
    const enum FileDialogMode {
        FILE_DIALOG_MODE_OPEN_FILE = 0,
        FILE_DIALOG_MODE_OPEN_FILES = 1,
        FILE_DIALOG_MODE_OPEN_DIR = 2,
        FILE_DIALOG_MODE_OPEN_ANY = 3,
        FILE_DIALOG_MODE_SAVE_FILE = 4
    }
    const enum WindowMode {
        WINDOW_MODE_WINDOWED = 0,
        WINDOW_MODE_MINIMIZED = 1,
        WINDOW_MODE_MAXIMIZED = 2,
        WINDOW_MODE_FULLSCREEN = 3,
        WINDOW_MODE_EXCLUSIVE_FULLSCREEN = 4
    }
    const enum WindowFlags {
        WINDOW_FLAG_RESIZE_DISABLED = 0,
        WINDOW_FLAG_BORDERLESS = 1,
        WINDOW_FLAG_ALWAYS_ON_TOP = 2,
        WINDOW_FLAG_TRANSPARENT = 3,
        WINDOW_FLAG_NO_FOCUS = 4,
        WINDOW_FLAG_POPUP = 5,
        WINDOW_FLAG_EXTEND_TO_TITLE = 6,
        WINDOW_FLAG_MOUSE_PASSTHROUGH = 7,
        WINDOW_FLAG_SHARP_CORNERS = 8,
        WINDOW_FLAG_MAX = 9
    }
    const enum WindowEvent {
        WINDOW_EVENT_MOUSE_ENTER = 0,
        WINDOW_EVENT_MOUSE_EXIT = 1,
        WINDOW_EVENT_FOCUS_IN = 2,
        WINDOW_EVENT_FOCUS_OUT = 3,
        WINDOW_EVENT_CLOSE_REQUEST = 4,
        WINDOW_EVENT_GO_BACK_REQUEST = 5,
        WINDOW_EVENT_DPI_CHANGE = 6,
        WINDOW_EVENT_TITLEBAR_CHANGE = 7
    }
    const enum VSyncMode {
        VSYNC_DISABLED = 0,
        VSYNC_ENABLED = 1,
        VSYNC_ADAPTIVE = 2,
        VSYNC_MAILBOX = 3
    }
    const enum HandleType {
        DISPLAY_HANDLE = 0,
        WINDOW_HANDLE = 1,
        WINDOW_VIEW = 2,
        OPENGL_CONTEXT = 3,
        EGL_DISPLAY = 4,
        EGL_CONFIG = 5
    }
    const enum TTSUtteranceEvent {
        TTS_UTTERANCE_STARTED = 0,
        TTS_UTTERANCE_ENDED = 1,
        TTS_UTTERANCE_CANCELED = 2,
        TTS_UTTERANCE_BOUNDARY = 3
    }
}
export interface VisualShaderNodeTextureParameterTriplanar extends VisualShaderNodeTextureParameter {
}
export interface Environment extends Resource {
    adjustment_brightness: type.float;
    adjustment_color_correction: {
        type: "Texture";
        properties: Texture;
    };
    adjustment_contrast: type.float;
    adjustment_enabled: type.bool;
    adjustment_saturation: type.float;
    ambient_light_color: type.Color;
    ambient_light_energy: type.float;
    ambient_light_sky_contribution: type.float;
    ambient_light_source: type.int;
    background_camera_feed_id: type.int;
    background_canvas_max_layer: type.int;
    background_color: type.Color;
    background_energy_multiplier: type.float;
    background_intensity: type.float;
    background_mode: type.int;
    fog_aerial_perspective: type.float;
    fog_density: type.float;
    fog_depth_begin: type.float;
    fog_depth_curve: type.float;
    fog_depth_end: type.float;
    fog_enabled: type.bool;
    fog_height: type.float;
    fog_height_density: type.float;
    fog_light_color: type.Color;
    fog_light_energy: type.float;
    fog_mode: type.int;
    fog_sky_affect: type.float;
    fog_sun_scatter: type.float;
    glow_blend_mode: type.int;
    glow_bloom: type.float;
    glow_enabled: type.bool;
    glow_hdr_luminance_cap: type.float;
    glow_hdr_scale: type.float;
    glow_hdr_threshold: type.float;
    glow_intensity: type.float;
    'glow_levels/1': type.float;
    'glow_levels/2': type.float;
    'glow_levels/3': type.float;
    'glow_levels/4': type.float;
    'glow_levels/5': type.float;
    'glow_levels/6': type.float;
    'glow_levels/7': type.float;
    glow_map: {
        type: "Texture";
        properties: Texture;
    };
    glow_map_strength: type.float;
    glow_mix: type.float;
    glow_normalized: type.bool;
    glow_strength: type.float;
    reflected_light_source: type.int;
    sdfgi_bounce_feedback: type.float;
    sdfgi_cascade0_distance: type.float;
    sdfgi_cascades: type.int;
    sdfgi_enabled: type.bool;
    sdfgi_energy: type.float;
    sdfgi_max_distance: type.float;
    sdfgi_min_cell_size: type.float;
    sdfgi_normal_bias: type.float;
    sdfgi_probe_bias: type.float;
    sdfgi_read_sky_light: type.bool;
    sdfgi_use_occlusion: type.bool;
    sdfgi_y_scale: type.int;
    sky: {
        type: "Sky";
        properties: Sky;
    };
    sky_custom_fov: type.float;
    sky_rotation: type.Vector3;
    ssao_ao_channel_affect: type.float;
    ssao_detail: type.float;
    ssao_enabled: type.bool;
    ssao_horizon: type.float;
    ssao_intensity: type.float;
    ssao_light_affect: type.float;
    ssao_power: type.float;
    ssao_radius: type.float;
    ssao_sharpness: type.float;
    ssil_enabled: type.bool;
    ssil_intensity: type.float;
    ssil_normal_rejection: type.float;
    ssil_radius: type.float;
    ssil_sharpness: type.float;
    ssr_depth_tolerance: type.float;
    ssr_enabled: type.bool;
    ssr_fade_in: type.float;
    ssr_fade_out: type.float;
    ssr_max_steps: type.int;
    tonemap_exposure: type.float;
    tonemap_mode: type.int;
    tonemap_white: type.float;
    volumetric_fog_albedo: type.Color;
    volumetric_fog_ambient_inject: type.float;
    volumetric_fog_anisotropy: type.float;
    volumetric_fog_density: type.float;
    volumetric_fog_detail_spread: type.float;
    volumetric_fog_emission: type.Color;
    volumetric_fog_emission_energy: type.float;
    volumetric_fog_enabled: type.bool;
    volumetric_fog_gi_inject: type.float;
    volumetric_fog_length: type.float;
    volumetric_fog_sky_affect: type.float;
    volumetric_fog_temporal_reprojection_amount: type.float;
    volumetric_fog_temporal_reprojection_enabled: type.bool;
}
export declare namespace Environment {
    const enum BGMode {
        BG_CLEAR_COLOR = 0,
        BG_COLOR = 1,
        BG_SKY = 2,
        BG_CANVAS = 3,
        BG_KEEP = 4,
        BG_CAMERA_FEED = 5,
        BG_MAX = 6
    }
    const enum AmbientSource {
        AMBIENT_SOURCE_BG = 0,
        AMBIENT_SOURCE_DISABLED = 1,
        AMBIENT_SOURCE_COLOR = 2,
        AMBIENT_SOURCE_SKY = 3
    }
    const enum ReflectionSource {
        REFLECTION_SOURCE_BG = 0,
        REFLECTION_SOURCE_DISABLED = 1,
        REFLECTION_SOURCE_SKY = 2
    }
    const enum ToneMapper {
        TONE_MAPPER_LINEAR = 0,
        TONE_MAPPER_REINHARDT = 1,
        TONE_MAPPER_FILMIC = 2,
        TONE_MAPPER_ACES = 3
    }
    const enum GlowBlendMode {
        GLOW_BLEND_MODE_ADDITIVE = 0,
        GLOW_BLEND_MODE_SCREEN = 1,
        GLOW_BLEND_MODE_SOFTLIGHT = 2,
        GLOW_BLEND_MODE_REPLACE = 3,
        GLOW_BLEND_MODE_MIX = 4
    }
    const enum FogMode {
        FOG_MODE_EXPONENTIAL = 0,
        FOG_MODE_DEPTH = 1
    }
    const enum SDFGIYScale {
        SDFGI_Y_SCALE_50_PERCENT = 0,
        SDFGI_Y_SCALE_75_PERCENT = 1,
        SDFGI_Y_SCALE_100_PERCENT = 2
    }
}
export interface RenderSceneBuffersExtension extends RenderSceneBuffers {
}
export interface BoxOccluder3D extends Occluder3D {
    size: type.Vector3;
}
export interface CameraFeed extends RefCounted {
    feed_is_active: type.bool;
    feed_transform: type.Transform2D;
    formats: type.Array;
}
export declare namespace CameraFeed {
    const enum FeedDataType {
        FEED_NOIMAGE = 0,
        FEED_RGB = 1,
        FEED_YCBCR = 2,
        FEED_YCBCR_SEP = 3,
        FEED_EXTERNAL = 4
    }
    const enum FeedPosition {
        FEED_UNSPECIFIED = 0,
        FEED_FRONT = 1,
        FEED_BACK = 2
    }
}
export interface RenderSceneBuffersRD extends RenderSceneBuffers {
}
export interface Image extends Resource {
    data: {
        type: "Dictionary";
        properties: Dictionary;
    };
}
export declare namespace Image {
    const MAX_WIDTH = 16777216;
    const MAX_HEIGHT = 16777216;
    const enum Format {
        FORMAT_L8 = 0,
        FORMAT_LA8 = 1,
        FORMAT_R8 = 2,
        FORMAT_RG8 = 3,
        FORMAT_RGB8 = 4,
        FORMAT_RGBA8 = 5,
        FORMAT_RGBA4444 = 6,
        FORMAT_RGB565 = 7,
        FORMAT_RF = 8,
        FORMAT_RGF = 9,
        FORMAT_RGBF = 10,
        FORMAT_RGBAF = 11,
        FORMAT_RH = 12,
        FORMAT_RGH = 13,
        FORMAT_RGBH = 14,
        FORMAT_RGBAH = 15,
        FORMAT_RGBE9995 = 16,
        FORMAT_DXT1 = 17,
        FORMAT_DXT3 = 18,
        FORMAT_DXT5 = 19,
        FORMAT_RGTC_R = 20,
        FORMAT_RGTC_RG = 21,
        FORMAT_BPTC_RGBA = 22,
        FORMAT_BPTC_RGBF = 23,
        FORMAT_BPTC_RGBFU = 24,
        FORMAT_ETC = 25,
        FORMAT_ETC2_R11 = 26,
        FORMAT_ETC2_R11S = 27,
        FORMAT_ETC2_RG11 = 28,
        FORMAT_ETC2_RG11S = 29,
        FORMAT_ETC2_RGB8 = 30,
        FORMAT_ETC2_RGBA8 = 31,
        FORMAT_ETC2_RGB8A1 = 32,
        FORMAT_ETC2_RA_AS_RG = 33,
        FORMAT_DXT5_RA_AS_RG = 34,
        FORMAT_ASTC_4x4 = 35,
        FORMAT_ASTC_4x4_HDR = 36,
        FORMAT_ASTC_8x8 = 37,
        FORMAT_ASTC_8x8_HDR = 38,
        FORMAT_MAX = 39
    }
    const enum Interpolation {
        INTERPOLATE_NEAREST = 0,
        INTERPOLATE_BILINEAR = 1,
        INTERPOLATE_CUBIC = 2,
        INTERPOLATE_TRILINEAR = 3,
        INTERPOLATE_LANCZOS = 4
    }
    const enum AlphaMode {
        ALPHA_NONE = 0,
        ALPHA_BIT = 1,
        ALPHA_BLEND = 2
    }
    const enum CompressMode {
        COMPRESS_S3TC = 0,
        COMPRESS_ETC = 1,
        COMPRESS_ETC2 = 2,
        COMPRESS_BPTC = 3,
        COMPRESS_ASTC = 4,
        COMPRESS_MAX = 5
    }
    const enum UsedChannels {
        USED_CHANNELS_L = 0,
        USED_CHANNELS_LA = 1,
        USED_CHANNELS_R = 2,
        USED_CHANNELS_RG = 3,
        USED_CHANNELS_RGB = 4,
        USED_CHANNELS_RGBA = 5
    }
    const enum CompressSource {
        COMPRESS_SOURCE_GENERIC = 0,
        COMPRESS_SOURCE_SRGB = 1,
        COMPRESS_SOURCE_NORMAL = 2
    }
    const enum ASTCFormat {
        ASTC_FORMAT_4x4 = 0,
        ASTC_FORMAT_8x8 = 1
    }
}
export interface WeakRef extends RefCounted {
}
export interface XRNode3D extends Node3D {
    pose: type.StringName;
    show_when_tracked: type.bool;
    tracker: type.StringName;
}
export interface AudioEffectBandPassFilter extends AudioEffectFilter {
}
export interface VisualShaderNodeVectorLen extends VisualShaderNodeVectorBase {
}
export interface VisualShaderNodeTextureParameter extends VisualShaderNodeParameter {
    color_default: type.int;
    texture_filter: type.int;
    texture_repeat: type.int;
    texture_source: type.int;
    texture_type: type.int;
}
export declare namespace VisualShaderNodeTextureParameter {
    const enum TextureType {
        TYPE_DATA = 0,
        TYPE_COLOR = 1,
        TYPE_NORMAL_MAP = 2,
        TYPE_ANISOTROPY = 3,
        TYPE_MAX = 4
    }
    const enum ColorDefault {
        COLOR_DEFAULT_WHITE = 0,
        COLOR_DEFAULT_BLACK = 1,
        COLOR_DEFAULT_TRANSPARENT = 2,
        COLOR_DEFAULT_MAX = 3
    }
    const enum TextureFilter {
        FILTER_DEFAULT = 0,
        FILTER_NEAREST = 1,
        FILTER_LINEAR = 2,
        FILTER_NEAREST_MIPMAP = 3,
        FILTER_LINEAR_MIPMAP = 4,
        FILTER_NEAREST_MIPMAP_ANISOTROPIC = 5,
        FILTER_LINEAR_MIPMAP_ANISOTROPIC = 6,
        FILTER_MAX = 7
    }
    const enum TextureRepeat {
        REPEAT_DEFAULT = 0,
        REPEAT_ENABLED = 1,
        REPEAT_DISABLED = 2,
        REPEAT_MAX = 3
    }
    const enum TextureSource {
        SOURCE_NONE = 0,
        SOURCE_SCREEN = 1,
        SOURCE_DEPTH = 2,
        SOURCE_NORMAL_ROUGHNESS = 3,
        SOURCE_MAX = 4
    }
}
export interface SkeletonModification2DStackHolder extends SkeletonModification2D {
}
export interface VisualShaderNodeCompare extends VisualShaderNode {
    condition: type.int;
    function: type.int;
    type: type.int;
}
export declare namespace VisualShaderNodeCompare {
    const enum ComparisonType {
        CTYPE_SCALAR = 0,
        CTYPE_SCALAR_INT = 1,
        CTYPE_SCALAR_UINT = 2,
        CTYPE_VECTOR_2D = 3,
        CTYPE_VECTOR_3D = 4,
        CTYPE_VECTOR_4D = 5,
        CTYPE_BOOLEAN = 6,
        CTYPE_TRANSFORM = 7,
        CTYPE_MAX = 8
    }
    const enum Function {
        FUNC_EQUAL = 0,
        FUNC_NOT_EQUAL = 1,
        FUNC_GREATER_THAN = 2,
        FUNC_GREATER_THAN_EQUAL = 3,
        FUNC_LESS_THAN = 4,
        FUNC_LESS_THAN_EQUAL = 5,
        FUNC_MAX = 6
    }
    const enum Condition {
        COND_ALL = 0,
        COND_ANY = 1,
        COND_MAX = 2
    }
}
export interface ShaderMaterial extends Material {
    shader: {
        type: "Shader";
        properties: Shader;
    };
}
export interface DTLSServer extends RefCounted {
}
export interface AStar2D extends RefCounted {
}
export interface Geometry2D extends Object {
}
export declare namespace Geometry2D {
    const enum PolyBooleanOperation {
        OPERATION_UNION = 0,
        OPERATION_DIFFERENCE = 1,
        OPERATION_INTERSECTION = 2,
        OPERATION_XOR = 3
    }
    const enum PolyJoinType {
        JOIN_SQUARE = 0,
        JOIN_ROUND = 1,
        JOIN_MITER = 2
    }
    const enum PolyEndType {
        END_POLYGON = 0,
        END_JOINED = 1,
        END_BUTT = 2,
        END_SQUARE = 3,
        END_ROUND = 4
    }
}
export interface PhysicsServer2DManager extends Object {
}
export interface Texture3DRD extends Texture3D {
    texture_rd_rid: {
        type: "RID";
        properties: RID;
    };
}
export interface AudioListener3D extends Node3D {
}
export interface TextServerDummy extends TextServerExtension {
}
export interface EditorVCSInterface extends Object {
}
export declare namespace EditorVCSInterface {
    const enum ChangeType {
        CHANGE_TYPE_NEW = 0,
        CHANGE_TYPE_MODIFIED = 1,
        CHANGE_TYPE_RENAMED = 2,
        CHANGE_TYPE_DELETED = 3,
        CHANGE_TYPE_TYPECHANGE = 4,
        CHANGE_TYPE_UNMERGED = 5
    }
    const enum TreeArea {
        TREE_AREA_COMMIT = 0,
        TREE_AREA_STAGED = 1,
        TREE_AREA_UNSTAGED = 2
    }
}
export interface PlaceholderTexture3D extends Texture3D {
    size: type.Vector3i;
}
export interface PackedScene extends Resource {
}
export declare namespace PackedScene {
    const enum GenEditState {
        GEN_EDIT_STATE_DISABLED = 0,
        GEN_EDIT_STATE_INSTANCE = 1,
        GEN_EDIT_STATE_MAIN = 2,
        GEN_EDIT_STATE_MAIN_INHERITED = 3
    }
}
export interface Button extends BaseButton {
    alignment: type.int;
    autowrap_mode: type.int;
    clip_text: type.bool;
    expand_icon: type.bool;
    flat: type.bool;
    icon_alignment: type.int;
    language: type.String;
    text: type.String;
    text_direction: type.int;
    text_overrun_behavior: type.int;
    vertical_icon_alignment: type.int;
    font_color: type.Color;
    font_disabled_color: type.Color;
    font_focus_color: type.Color;
    font_hover_color: type.Color;
    font_hover_pressed_color: type.Color;
    font_outline_color: type.Color;
    font_pressed_color: type.Color;
    icon_disabled_color: type.Color;
    icon_focus_color: type.Color;
    icon_hover_color: type.Color;
    icon_hover_pressed_color: type.Color;
    icon_normal_color: type.Color;
    icon_pressed_color: type.Color;
    align_to_largest_stylebox: type.int;
    h_separation: type.int;
    icon_max_width: type.int;
    outline_size: type.int;
    font: {
        type: "Font";
        properties: Font;
    };
    font_size: type.int;
    icon: {
        type: "Texture2D";
        properties: Texture2D;
    };
    disabled_mirrored: {
        type: "StyleBox";
        properties: StyleBox;
    };
    focus: {
        type: "StyleBox";
        properties: StyleBox;
    };
    hover: {
        type: "StyleBox";
        properties: StyleBox;
    };
    hover_mirrored: {
        type: "StyleBox";
        properties: StyleBox;
    };
    hover_pressed: {
        type: "StyleBox";
        properties: StyleBox;
    };
    hover_pressed_mirrored: {
        type: "StyleBox";
        properties: StyleBox;
    };
    normal: {
        type: "StyleBox";
        properties: StyleBox;
    };
    normal_mirrored: {
        type: "StyleBox";
        properties: StyleBox;
    };
    pressed: {
        type: "StyleBox";
        properties: StyleBox;
    };
    pressed_mirrored: {
        type: "StyleBox";
        properties: StyleBox;
    };
}
export interface TileMapLayer extends Node2D {
    collision_enabled: type.bool;
    collision_visibility_mode: type.int;
    enabled: type.bool;
    navigation_enabled: type.bool;
    navigation_visibility_mode: type.int;
    occlusion_enabled: type.bool;
    rendering_quadrant_size: type.int;
    tile_map_data: type.PackedByteArray;
    tile_set: {
        type: "TileSet";
        properties: TileSet;
    };
    use_kinematic_bodies: type.bool;
    x_draw_order_reversed: type.bool;
    y_sort_origin: type.int;
}
export declare namespace TileMapLayer {
    const enum DebugVisibilityMode {
        DEBUG_VISIBILITY_MODE_DEFAULT = 0,
        DEBUG_VISIBILITY_MODE_FORCE_HIDE = 2,
        DEBUG_VISIBILITY_MODE_FORCE_SHOW = 1
    }
}
export interface EditorFileSystem extends Node {
}
export interface AudioEffectInstance extends RefCounted {
}
export interface EditorDebuggerSession extends RefCounted {
}
export interface VisualShaderNodeTransformConstant extends VisualShaderNodeConstant {
    constant: type.Transform3D;
}
export interface NodeProperties {
    PhysicsBody3D: PhysicsBody3D;
    SpriteBase3D: SpriteBase3D;
    ResourcePreloader: ResourcePreloader;
    FileSystemDock: FileSystemDock;
    BaseButton: BaseButton;
    MeshInstance3D: MeshInstance3D;
    Viewport: Viewport;
    AudioStreamPlayer3D: AudioStreamPlayer3D;
    Slider: Slider;
    TextureProgressBar: TextureProgressBar;
    MarginContainer: MarginContainer;
    TextEdit: TextEdit;
    TileMap: TileMap;
    SubViewportContainer: SubViewportContainer;
    CanvasLayer: CanvasLayer;
    Marker2D: Marker2D;
    NavigationLink2D: NavigationLink2D;
    Node2D: Node2D;
    Container: Container;
    GridContainer: GridContainer;
    CollisionPolygon3D: CollisionPolygon3D;
    StaticBody3D: StaticBody3D;
    EditorFileDialog: EditorFileDialog;
    Camera3D: Camera3D;
    VFlowContainer: VFlowContainer;
    AnimatableBody3D: AnimatableBody3D;
    MenuButton: MenuButton;
    RootMotionView: RootMotionView;
    LinkButton: LinkButton;
    AnimatableBody2D: AnimatableBody2D;
    VisualInstance3D: VisualInstance3D;
    Camera2D: Camera2D;
    LightmapGI: LightmapGI;
    VehicleBody3D: VehicleBody3D;
    Bone2D: Bone2D;
    StaticBody2D: StaticBody2D;
    CollisionPolygon2D: CollisionPolygon2D;
    Polygon2D: Polygon2D;
    VBoxContainer: VBoxContainer;
    HTTPRequest: HTTPRequest;
    MissingNode: MissingNode;
    GeometryInstance3D: GeometryInstance3D;
    Node3D: Node3D;
    NavigationLink3D: NavigationLink3D;
    Marker3D: Marker3D;
    TextureButton: TextureButton;
    SkeletonIK3D: SkeletonIK3D;
    AudioStreamPlayer2D: AudioStreamPlayer2D;
    VoxelGI: VoxelGI;
    ScriptEditorBase: ScriptEditorBase;
    MeshInstance2D: MeshInstance2D;
    NinePatchRect: NinePatchRect;
    PhysicsBody2D: PhysicsBody2D;
    Light3D: Light3D;
    VisibleOnScreenEnabler3D: VisibleOnScreenEnabler3D;
    CenterContainer: CenterContainer;
    XRAnchor3D: XRAnchor3D;
    AnimatedSprite2D: AnimatedSprite2D;
    HFlowContainer: HFlowContainer;
    XRFaceModifier3D: XRFaceModifier3D;
    XRBodyModifier3D: XRBodyModifier3D;
    OptionButton: OptionButton;
    GraphElement: GraphElement;
    Area2D: Area2D;
    Control: Control;
    AnimationTree: AnimationTree;
    PointLight2D: PointLight2D;
    GPUParticlesAttractorVectorField3D: GPUParticlesAttractorVectorField3D;
    Skeleton3D: Skeleton3D;
    HSlider: HSlider;
    Path3D: Path3D;
    Line2D: Line2D;
    GPUParticlesCollisionHeightField3D: GPUParticlesCollisionHeightField3D;
    Label: Label;
    CharacterBody3D: CharacterBody3D;
    CanvasModulate: CanvasModulate;
    PanelContainer: PanelContainer;
    AcceptDialog: AcceptDialog;
    CPUParticles3D: CPUParticles3D;
    RayCast3D: RayCast3D;
    PhysicalBone2D: PhysicalBone2D;
    SpotLight3D: SpotLight3D;
    GPUParticles2D: GPUParticles2D;
    ProgressBar: ProgressBar;
    RichTextLabel: RichTextLabel;
    CanvasItem: CanvasItem;
    EditorInspector: EditorInspector;
    PinJoint3D: PinJoint3D;
    PinJoint2D: PinJoint2D;
    AnimationMixer: AnimationMixer;
    AnimationPlayer: AnimationPlayer;
    CheckButton: CheckButton;
    EditorScriptPicker: EditorScriptPicker;
    GraphFrame: GraphFrame;
    GPUParticles3D: GPUParticles3D;
    PhysicalBone3D: PhysicalBone3D;
    VehicleWheel3D: VehicleWheel3D;
    CPUParticles2D: CPUParticles2D;
    RayCast2D: RayCast2D;
    ReflectionProbe: ReflectionProbe;
    FlowContainer: FlowContainer;
    CharacterBody2D: CharacterBody2D;
    StatusIndicator: StatusIndicator;
    Path2D: Path2D;
    PopupMenu: PopupMenu;
    ConfirmationDialog: ConfirmationDialog;
    VideoStreamPlayer: VideoStreamPlayer;
    Skeleton2D: Skeleton2D;
    GPUParticlesCollisionSphere3D: GPUParticlesCollisionSphere3D;
    PhysicalBoneSimulator3D: PhysicalBoneSimulator3D;
    Area3D: Area3D;
    AnimatedSprite3D: AnimatedSprite3D;
    VSlider: VSlider;
    GrooveJoint2D: GrooveJoint2D;
    VisibleOnScreenEnabler2D: VisibleOnScreenEnabler2D;
    GPUParticlesAttractor3D: GPUParticlesAttractor3D;
    Light2D: Light2D;
    SliderJoint3D: SliderJoint3D;
    ColorRect: ColorRect;
    XROrigin3D: XROrigin3D;
    Timer: Timer;
    MenuBar: MenuBar;
    VisibleOnScreenNotifier3D: VisibleOnScreenNotifier3D;
    GraphNode: GraphNode;
    Node: Node;
    ScriptCreateDialog: ScriptCreateDialog;
    Popup: Popup;
    VSeparator: VSeparator;
    Generic6DOFJoint3D: Generic6DOFJoint3D;
    ItemList: ItemList;
    OccluderInstance3D: OccluderInstance3D;
    MultiMeshInstance3D: MultiMeshInstance3D;
    NavigationAgent3D: NavigationAgent3D;
    SkeletonModifier3D: SkeletonModifier3D;
    ScrollContainer: ScrollContainer;
    ShapeCast3D: ShapeCast3D;
    EditorResourcePicker: EditorResourcePicker;
    RigidBody2D: RigidBody2D;
    VScrollBar: VScrollBar;
    TouchScreenButton: TouchScreenButton;
    ReferenceRect: ReferenceRect;
    CollisionShape2D: CollisionShape2D;
    NavigationObstacle3D: NavigationObstacle3D;
    CollisionObject3D: CollisionObject3D;
    Window: Window;
    RemoteTransform3D: RemoteTransform3D;
    RemoteTransform2D: RemoteTransform2D;
    LightmapProbe: LightmapProbe;
    HScrollBar: HScrollBar;
    NavigationObstacle2D: NavigationObstacle2D;
    CollisionObject2D: CollisionObject2D;
    PopupPanel: PopupPanel;
    CollisionShape3D: CollisionShape3D;
    EditorSpinSlider: EditorSpinSlider;
    Panel: Panel;
    FileDialog: FileDialog;
    RigidBody3D: RigidBody3D;
    WorldEnvironment: WorldEnvironment;
    ShapeCast2D: ShapeCast2D;
    SpinBox: SpinBox;
    MultiMeshInstance2D: MultiMeshInstance2D;
    XRHandModifier3D: XRHandModifier3D;
    NavigationAgent2D: NavigationAgent2D;
    ParallaxLayer: ParallaxLayer;
    Parallax2D: Parallax2D;
    CanvasGroup: CanvasGroup;
    HBoxContainer: HBoxContainer;
    Tree: Tree;
    HSeparator: HSeparator;
    OmniLight3D: OmniLight3D;
    ImporterMeshInstance3D: ImporterMeshInstance3D;
    XRCamera3D: XRCamera3D;
    VisibleOnScreenNotifier2D: VisibleOnScreenNotifier2D;
    BackBufferCopy: BackBufferCopy;
    EditorResourcePreview: EditorResourcePreview;
    GPUParticlesCollisionBox3D: GPUParticlesCollisionBox3D;
    CodeEdit: CodeEdit;
    InstancePlaceholder: InstancePlaceholder;
    SpringArm3D: SpringArm3D;
    TextureRect: TextureRect;
    VSplitContainer: VSplitContainer;
    ColorPicker: ColorPicker;
    AudioListener2D: AudioListener2D;
    TabBar: TabBar;
    EditorProperty: EditorProperty;
    AspectRatioContainer: AspectRatioContainer;
    SubViewport: SubViewport;
    Range: Range;
    Label3D: Label3D;
    CheckBox: CheckBox;
    Decal: Decal;
    ParallaxBackground: ParallaxBackground;
    ConeTwistJoint3D: ConeTwistJoint3D;
    AudioStreamPlayer: AudioStreamPlayer;
    GraphEdit: GraphEdit;
    Sprite2D: Sprite2D;
    LightOccluder2D: LightOccluder2D;
    HSplitContainer: HSplitContainer;
    SplitContainer: SplitContainer;
    ColorPickerButton: ColorPickerButton;
    GPUParticlesCollision3D: GPUParticlesCollision3D;
    NavigationRegion2D: NavigationRegion2D;
    DirectionalLight3D: DirectionalLight3D;
    FogVolume: FogVolume;
    LineEdit: LineEdit;
    HingeJoint3D: HingeJoint3D;
    Joint3D: Joint3D;
    PathFollow2D: PathFollow2D;
    GPUParticlesCollisionSDF3D: GPUParticlesCollisionSDF3D;
    GPUParticlesAttractorBox3D: GPUParticlesAttractorBox3D;
    Separator: Separator;
    XRController3D: XRController3D;
    ShaderGlobalsOverride: ShaderGlobalsOverride;
    EditorCommandPalette: EditorCommandPalette;
    Joint2D: Joint2D;
    PathFollow3D: PathFollow3D;
    BoneAttachment3D: BoneAttachment3D;
    EditorPlugin: EditorPlugin;
    SoftBody3D: SoftBody3D;
    DirectionalLight2D: DirectionalLight2D;
    BoxContainer: BoxContainer;
    NavigationRegion3D: NavigationRegion3D;
    DampedSpringJoint2D: DampedSpringJoint2D;
    ScrollBar: ScrollBar;
    TabContainer: TabContainer;
    ScriptEditor: ScriptEditor;
    GPUParticlesAttractorSphere3D: GPUParticlesAttractorSphere3D;
    Sprite3D: Sprite3D;
    XRNode3D: XRNode3D;
    AudioListener3D: AudioListener3D;
    Button: Button;
    TileMapLayer: TileMapLayer;
    EditorFileSystem: EditorFileSystem;
}
type NodeTypeNames = keyof NodeProperties;
export type NodeTypeMap = {
    [K in NodeTypeNames]: {
        type: K;
        properties: NodeProperties[K];
    };
};
export type NodeType = NodeTypeMap[keyof NodeTypeMap];
export interface Node3DProperties {
    PhysicsBody3D: PhysicsBody3D;
    SpriteBase3D: SpriteBase3D;
    MeshInstance3D: MeshInstance3D;
    AudioStreamPlayer3D: AudioStreamPlayer3D;
    CollisionPolygon3D: CollisionPolygon3D;
    StaticBody3D: StaticBody3D;
    Camera3D: Camera3D;
    AnimatableBody3D: AnimatableBody3D;
    RootMotionView: RootMotionView;
    VisualInstance3D: VisualInstance3D;
    LightmapGI: LightmapGI;
    VehicleBody3D: VehicleBody3D;
    GeometryInstance3D: GeometryInstance3D;
    Node3D: Node3D;
    NavigationLink3D: NavigationLink3D;
    Marker3D: Marker3D;
    SkeletonIK3D: SkeletonIK3D;
    VoxelGI: VoxelGI;
    Light3D: Light3D;
    VisibleOnScreenEnabler3D: VisibleOnScreenEnabler3D;
    XRAnchor3D: XRAnchor3D;
    XRFaceModifier3D: XRFaceModifier3D;
    XRBodyModifier3D: XRBodyModifier3D;
    GPUParticlesAttractorVectorField3D: GPUParticlesAttractorVectorField3D;
    Skeleton3D: Skeleton3D;
    Path3D: Path3D;
    GPUParticlesCollisionHeightField3D: GPUParticlesCollisionHeightField3D;
    CharacterBody3D: CharacterBody3D;
    CPUParticles3D: CPUParticles3D;
    RayCast3D: RayCast3D;
    SpotLight3D: SpotLight3D;
    PinJoint3D: PinJoint3D;
    GPUParticles3D: GPUParticles3D;
    PhysicalBone3D: PhysicalBone3D;
    VehicleWheel3D: VehicleWheel3D;
    ReflectionProbe: ReflectionProbe;
    GPUParticlesCollisionSphere3D: GPUParticlesCollisionSphere3D;
    PhysicalBoneSimulator3D: PhysicalBoneSimulator3D;
    Area3D: Area3D;
    AnimatedSprite3D: AnimatedSprite3D;
    GPUParticlesAttractor3D: GPUParticlesAttractor3D;
    SliderJoint3D: SliderJoint3D;
    XROrigin3D: XROrigin3D;
    VisibleOnScreenNotifier3D: VisibleOnScreenNotifier3D;
    Generic6DOFJoint3D: Generic6DOFJoint3D;
    OccluderInstance3D: OccluderInstance3D;
    MultiMeshInstance3D: MultiMeshInstance3D;
    SkeletonModifier3D: SkeletonModifier3D;
    ShapeCast3D: ShapeCast3D;
    NavigationObstacle3D: NavigationObstacle3D;
    CollisionObject3D: CollisionObject3D;
    RemoteTransform3D: RemoteTransform3D;
    LightmapProbe: LightmapProbe;
    CollisionShape3D: CollisionShape3D;
    RigidBody3D: RigidBody3D;
    XRHandModifier3D: XRHandModifier3D;
    OmniLight3D: OmniLight3D;
    ImporterMeshInstance3D: ImporterMeshInstance3D;
    XRCamera3D: XRCamera3D;
    GPUParticlesCollisionBox3D: GPUParticlesCollisionBox3D;
    SpringArm3D: SpringArm3D;
    Label3D: Label3D;
    Decal: Decal;
    ConeTwistJoint3D: ConeTwistJoint3D;
    GPUParticlesCollision3D: GPUParticlesCollision3D;
    DirectionalLight3D: DirectionalLight3D;
    FogVolume: FogVolume;
    HingeJoint3D: HingeJoint3D;
    Joint3D: Joint3D;
    GPUParticlesCollisionSDF3D: GPUParticlesCollisionSDF3D;
    GPUParticlesAttractorBox3D: GPUParticlesAttractorBox3D;
    XRController3D: XRController3D;
    PathFollow3D: PathFollow3D;
    BoneAttachment3D: BoneAttachment3D;
    SoftBody3D: SoftBody3D;
    NavigationRegion3D: NavigationRegion3D;
    GPUParticlesAttractorSphere3D: GPUParticlesAttractorSphere3D;
    Sprite3D: Sprite3D;
    XRNode3D: XRNode3D;
    AudioListener3D: AudioListener3D;
}
type Node3DTypeNames = keyof Node3DProperties;
export type Node3DTypeMap = {
    [K in Node3DTypeNames]: {
        type: K;
        properties: Node3DProperties[K];
    };
};
export type Node3DType = Node3DTypeMap[keyof Node3DTypeMap];
export interface Node2DProperties {
    TileMap: TileMap;
    Marker2D: Marker2D;
    NavigationLink2D: NavigationLink2D;
    Node2D: Node2D;
    AnimatableBody2D: AnimatableBody2D;
    Camera2D: Camera2D;
    Bone2D: Bone2D;
    StaticBody2D: StaticBody2D;
    CollisionPolygon2D: CollisionPolygon2D;
    Polygon2D: Polygon2D;
    AudioStreamPlayer2D: AudioStreamPlayer2D;
    MeshInstance2D: MeshInstance2D;
    PhysicsBody2D: PhysicsBody2D;
    AnimatedSprite2D: AnimatedSprite2D;
    Area2D: Area2D;
    PointLight2D: PointLight2D;
    Line2D: Line2D;
    CanvasModulate: CanvasModulate;
    PhysicalBone2D: PhysicalBone2D;
    GPUParticles2D: GPUParticles2D;
    PinJoint2D: PinJoint2D;
    CPUParticles2D: CPUParticles2D;
    RayCast2D: RayCast2D;
    CharacterBody2D: CharacterBody2D;
    Path2D: Path2D;
    Skeleton2D: Skeleton2D;
    GrooveJoint2D: GrooveJoint2D;
    VisibleOnScreenEnabler2D: VisibleOnScreenEnabler2D;
    Light2D: Light2D;
    RigidBody2D: RigidBody2D;
    TouchScreenButton: TouchScreenButton;
    CollisionShape2D: CollisionShape2D;
    RemoteTransform2D: RemoteTransform2D;
    NavigationObstacle2D: NavigationObstacle2D;
    CollisionObject2D: CollisionObject2D;
    ShapeCast2D: ShapeCast2D;
    MultiMeshInstance2D: MultiMeshInstance2D;
    ParallaxLayer: ParallaxLayer;
    Parallax2D: Parallax2D;
    CanvasGroup: CanvasGroup;
    VisibleOnScreenNotifier2D: VisibleOnScreenNotifier2D;
    BackBufferCopy: BackBufferCopy;
    AudioListener2D: AudioListener2D;
    Sprite2D: Sprite2D;
    LightOccluder2D: LightOccluder2D;
    NavigationRegion2D: NavigationRegion2D;
    PathFollow2D: PathFollow2D;
    Joint2D: Joint2D;
    DirectionalLight2D: DirectionalLight2D;
    DampedSpringJoint2D: DampedSpringJoint2D;
    TileMapLayer: TileMapLayer;
}
type Node2DTypeNames = keyof Node2DProperties;
export type Node2DTypeMap = {
    [K in Node2DTypeNames]: {
        type: K;
        properties: Node2DProperties[K];
    };
};
export type Node2DType = Node2DTypeMap[keyof Node2DTypeMap];
export interface CollisionObject3DProperties {
    PhysicsBody3D: PhysicsBody3D;
    StaticBody3D: StaticBody3D;
    AnimatableBody3D: AnimatableBody3D;
    VehicleBody3D: VehicleBody3D;
    CharacterBody3D: CharacterBody3D;
    PhysicalBone3D: PhysicalBone3D;
    Area3D: Area3D;
    CollisionObject3D: CollisionObject3D;
    RigidBody3D: RigidBody3D;
}
type CollisionObject3DTypeNames = keyof CollisionObject3DProperties;
export type CollisionObject3DTypeMap = {
    [K in CollisionObject3DTypeNames]: {
        type: K;
        properties: CollisionObject3DProperties[K];
    };
};
export type CollisionObject3DType = CollisionObject3DTypeMap[keyof CollisionObject3DTypeMap];
export interface ResourceProperties {
    OccluderPolygon2D: OccluderPolygon2D;
    Material: Material;
    TextureLayeredRD: TextureLayeredRD;
    SphereShape3D: SphereShape3D;
    ParticleProcessMaterial: ParticleProcessMaterial;
    Translation: Translation;
    VisualShaderNodeFloatConstant: VisualShaderNodeFloatConstant;
    AudioEffectDistortion: AudioEffectDistortion;
    TextMesh: TextMesh;
    AnimationNodeSub2: AnimationNodeSub2;
    ImporterMesh: ImporterMesh;
    Gradient: Gradient;
    VisualShaderNodeLinearSceneDepth: VisualShaderNodeLinearSceneDepth;
    TextureCubemapArrayRD: TextureCubemapArrayRD;
    VisualShaderNodeParticleRandomness: VisualShaderNodeParticleRandomness;
    CompressedTexture2DArray: CompressedTexture2DArray;
    ConvexPolygonShape3D: ConvexPolygonShape3D;
    CanvasTexture: CanvasTexture;
    VisualShaderNodeVectorFunc: VisualShaderNodeVectorFunc;
    TileMapPattern: TileMapPattern;
    VisualShaderNodeUIntOp: VisualShaderNodeUIntOp;
    VisualShaderNodeStep: VisualShaderNodeStep;
    LightmapGIData: LightmapGIData;
    ImageTexture3D: ImageTexture3D;
    VisualShaderNodeRotationByAxis: VisualShaderNodeRotationByAxis;
    ImageTexture: ImageTexture;
    World3D: World3D;
    InputEventMouseButton: InputEventMouseButton;
    PanoramaSkyMaterial: PanoramaSkyMaterial;
    CanvasItemMaterial: CanvasItemMaterial;
    SeparationRayShape3D: SeparationRayShape3D;
    VideoStream: VideoStream;
    InputEventPanGesture: InputEventPanGesture;
    VisualShaderNodeVec2Parameter: VisualShaderNodeVec2Parameter;
    Texture2D: Texture2D;
    VisualShaderNodeUIntFunc: VisualShaderNodeUIntFunc;
    ConcavePolygonShape3D: ConcavePolygonShape3D;
    WorldBoundaryShape3D: WorldBoundaryShape3D;
    SkeletonModification2DLookAt: SkeletonModification2DLookAt;
    VisualShaderNodeParticleEmitter: VisualShaderNodeParticleEmitter;
    FogMaterial: FogMaterial;
    VisualShaderNodeTexture3DParameter: VisualShaderNodeTexture3DParameter;
    AudioEffectHighPassFilter: AudioEffectHighPassFilter;
    VisualShaderNodeParticleEmit: VisualShaderNodeParticleEmit;
    ButtonGroup: ButtonGroup;
    MultiMesh: MultiMesh;
    WorldBoundaryShape2D: WorldBoundaryShape2D;
    LabelSettings: LabelSettings;
    ConcavePolygonShape2D: ConcavePolygonShape2D;
    Texture3D: Texture3D;
    VisualShaderNodeTransformVecMult: VisualShaderNodeTransformVecMult;
    AudioStreamRandomizer: AudioStreamRandomizer;
    VisualShaderNodeOutput: VisualShaderNodeOutput;
    VisualShaderNodeParameterRef: VisualShaderNodeParameterRef;
    AudioEffectStereoEnhance: AudioEffectStereoEnhance;
    PhysicsMaterial: PhysicsMaterial;
    AudioEffectPhaser: AudioEffectPhaser;
    VisualShaderNodeReroute: VisualShaderNodeReroute;
    VisualShaderNodeSwitch: VisualShaderNodeSwitch;
    SeparationRayShape2D: SeparationRayShape2D;
    AudioEffectLimiter: AudioEffectLimiter;
    World2D: World2D;
    InputEventGesture: InputEventGesture;
    VisualShaderNodeVec3Constant: VisualShaderNodeVec3Constant;
    VisualShaderNodeTexture2DArray: VisualShaderNodeTexture2DArray;
    AnimationNodeBlendSpace2D: AnimationNodeBlendSpace2D;
    AnimationNodeOutput: AnimationNodeOutput;
    VisualShader: VisualShader;
    Compositor: Compositor;
    VisualShaderNodeVec4Parameter: VisualShaderNodeVec4Parameter;
    VisualShaderNodeColorFunc: VisualShaderNodeColorFunc;
    VisualShaderNodeVec3Parameter: VisualShaderNodeVec3Parameter;
    ConvexPolygonShape2D: ConvexPolygonShape2D;
    JSON: JSON;
    AudioEffectAmplify: AudioEffectAmplify;
    ScriptExtension: ScriptExtension;
    InputEventMagnifyGesture: InputEventMagnifyGesture;
    AudioEffectEQ10: AudioEffectEQ10;
    VisualShaderNodeTexture3D: VisualShaderNodeTexture3D;
    VisualShaderNodeParticleMultiplyByAxisAngle: VisualShaderNodeParticleMultiplyByAxisAngle;
    VisualShaderNodeFrame: VisualShaderNodeFrame;
    VisualShaderNodeInput: VisualShaderNodeInput;
    VisualShaderNodeParticleMeshEmitter: VisualShaderNodeParticleMeshEmitter;
    RectangleShape2D: RectangleShape2D;
    VisualShaderNodeCurveTexture: VisualShaderNodeCurveTexture;
    OptimizedTranslation: OptimizedTranslation;
    SkeletonModification2DFABRIK: SkeletonModification2DFABRIK;
    VisualShaderNodeIf: VisualShaderNodeIf;
    AudioEffectCompressor: AudioEffectCompressor;
    VisualShaderNodeMix: VisualShaderNodeMix;
    InputEvent: InputEvent;
    CircleShape2D: CircleShape2D;
    AnimationNodeStateMachine: AnimationNodeStateMachine;
    AudioEffectEQ: AudioEffectEQ;
    ViewportTexture: ViewportTexture;
    VisualShaderNodeVectorRefract: VisualShaderNodeVectorRefract;
    SkeletonModification2DPhysicalBones: SkeletonModification2DPhysicalBones;
    VisualShaderNodeIntParameter: VisualShaderNodeIntParameter;
    SkeletonModification2DJiggle: SkeletonModification2DJiggle;
    VisualShaderNodeFloatOp: VisualShaderNodeFloatOp;
    VisualShaderNodeCurveXYZTexture: VisualShaderNodeCurveXYZTexture;
    VisualShaderNodeUVPolarCoord: VisualShaderNodeUVPolarCoord;
    CryptoKey: CryptoKey;
    VisualShaderNodeFloatFunc: VisualShaderNodeFloatFunc;
    InputEventMouseMotion: InputEventMouseMotion;
    Shape3D: Shape3D;
    CameraAttributes: CameraAttributes;
    EditorNode3DGizmoPlugin: EditorNode3DGizmoPlugin;
    PlaceholderMaterial: PlaceholderMaterial;
    AudioEffectHardLimiter: AudioEffectHardLimiter;
    VisualShaderNode: VisualShaderNode;
    Animation: Animation;
    StyleBoxFlat: StyleBoxFlat;
    VisualShaderNodeResizableBase: VisualShaderNodeResizableBase;
    PlaceholderMesh: PlaceholderMesh;
    VisualShaderNodeVectorOp: VisualShaderNodeVectorOp;
    GradientTexture2D: GradientTexture2D;
    CompressedTexture2D: CompressedTexture2D;
    AudioEffectCapture: AudioEffectCapture;
    VisualShaderNodeVaryingGetter: VisualShaderNodeVaryingGetter;
    VisualShaderNodeSDFToScreenUV: VisualShaderNodeSDFToScreenUV;
    VisualShaderNodeVectorDistance: VisualShaderNodeVectorDistance;
    Theme: Theme;
    AudioEffectSpectrumAnalyzer: AudioEffectSpectrumAnalyzer;
    InputEventKey: InputEventKey;
    VisualShaderNodeFloatParameter: VisualShaderNodeFloatParameter;
    ORMMaterial3D: ORMMaterial3D;
    VisualShaderNodeIs: VisualShaderNodeIs;
    CapsuleShape3D: CapsuleShape3D;
    VisualShaderNodeColorOp: VisualShaderNodeColorOp;
    PointMesh: PointMesh;
    CylinderShape3D: CylinderShape3D;
    NavigationPolygon: NavigationPolygon;
    VisualShaderNodeRemap: VisualShaderNodeRemap;
    AudioEffectNotchFilter: AudioEffectNotchFilter;
    VisualShaderNodeParticleBoxEmitter: VisualShaderNodeParticleBoxEmitter;
    Texture2DRD: Texture2DRD;
    CapsuleShape2D: CapsuleShape2D;
    PortableCompressedTexture2D: PortableCompressedTexture2D;
    VisualShaderNodeGroupBase: VisualShaderNodeGroupBase;
    AnimationRootNode: AnimationRootNode;
    TileSetSource: TileSetSource;
    ArrayOccluder3D: ArrayOccluder3D;
    AnimationLibrary: AnimationLibrary;
    Shortcut: Shortcut;
    ImmediateMesh: ImmediateMesh;
    CompressedTexture3D: CompressedTexture3D;
    StyleBoxTexture: StyleBoxTexture;
    VisualShaderNodeConstant: VisualShaderNodeConstant;
    CodeHighlighter: CodeHighlighter;
    AnimationNode: AnimationNode;
    VisualShaderNodeDeterminant: VisualShaderNodeDeterminant;
    VisualShaderNodeOuterProduct: VisualShaderNodeOuterProduct;
    AudioEffectFilter: AudioEffectFilter;
    AudioEffectHighShelfFilter: AudioEffectHighShelfFilter;
    CompositorEffect: CompositorEffect;
    AnimationNodeAnimation: AnimationNodeAnimation;
    VisualShaderNodeIntConstant: VisualShaderNodeIntConstant;
    CompressedTextureLayered: CompressedTextureLayered;
    AudioStreamMicrophone: AudioStreamMicrophone;
    VisualShaderNodeMultiplyAdd: VisualShaderNodeMultiplyAdd;
    AudioBusLayout: AudioBusLayout;
    TileSetScenesCollectionSource: TileSetScenesCollectionSource;
    VisualShaderNodeWorldPositionFromDepth: VisualShaderNodeWorldPositionFromDepth;
    VisualShaderNodeTransformCompose: VisualShaderNodeTransformCompose;
    Shape2D: Shape2D;
    NavigationMesh: NavigationMesh;
    VisualShaderNodeVectorBase: VisualShaderNodeVectorBase;
    EditorSettings: EditorSettings;
    VisualShaderNodeColorConstant: VisualShaderNodeColorConstant;
    TorusMesh: TorusMesh;
    InputEventAction: InputEventAction;
    VoxelGIData: VoxelGIData;
    TextureCubemapRD: TextureCubemapRD;
    VisualShaderNodeUVFunc: VisualShaderNodeUVFunc;
    VisualShaderNodeVaryingSetter: VisualShaderNodeVaryingSetter;
    InputEventWithModifiers: InputEventWithModifiers;
    QuadMesh: QuadMesh;
    MeshTexture: MeshTexture;
    GDExtension: GDExtension;
    VisualShaderNodeIntFunc: VisualShaderNodeIntFunc;
    VisualShaderNodeUIntParameter: VisualShaderNodeUIntParameter;
    CurveXYZTexture: CurveXYZTexture;
    CubemapArray: CubemapArray;
    TileSetAtlasSource: TileSetAtlasSource;
    CameraAttributesPractical: CameraAttributesPractical;
    VisualShaderNodeGlobalExpression: VisualShaderNodeGlobalExpression;
    StyleBox: StyleBox;
    Font: Font;
    SkeletonProfileHumanoid: SkeletonProfileHumanoid;
    StandardMaterial3D: StandardMaterial3D;
    AnimationNodeBlend2: AnimationNodeBlend2;
    AudioEffectLowShelfFilter: AudioEffectLowShelfFilter;
    VisualShaderNodeTexture2DArrayParameter: VisualShaderNodeTexture2DArrayParameter;
    VisualShaderNodeTransformParameter: VisualShaderNodeTransformParameter;
    AudioEffectEQ6: AudioEffectEQ6;
    VisualShaderNodeBooleanConstant: VisualShaderNodeBooleanConstant;
    TubeTrailMesh: TubeTrailMesh;
    VisualShaderNodeCubemap: VisualShaderNodeCubemap;
    ShaderInclude: ShaderInclude;
    AudioStreamPolyphonic: AudioStreamPolyphonic;
    SkeletonModification2DTwoBoneIK: SkeletonModification2DTwoBoneIK;
    Cubemap: Cubemap;
    PlaneMesh: PlaneMesh;
    VisualShaderNodeClamp: VisualShaderNodeClamp;
    VisualShaderNodeTransformFunc: VisualShaderNodeTransformFunc;
    AnimationNodeBlend3: AnimationNodeBlend3;
    CompressedCubemapArray: CompressedCubemapArray;
    VisualShaderNodeScreenUVToSDF: VisualShaderNodeScreenUVToSDF;
    SkeletonModificationStack2D: SkeletonModificationStack2D;
    VisualShaderNodeDotProduct: VisualShaderNodeDotProduct;
    VisualShaderNodeColorParameter: VisualShaderNodeColorParameter;
    CameraAttributesPhysical: CameraAttributesPhysical;
    AnimationNodeStateMachinePlayback: AnimationNodeStateMachinePlayback;
    VideoStreamPlayback: VideoStreamPlayback;
    InputEventScreenTouch: InputEventScreenTouch;
    AudioEffect: AudioEffect;
    VisualShaderNodeProximityFade: VisualShaderNodeProximityFade;
    VisualShaderNodeVec2Constant: VisualShaderNodeVec2Constant;
    InputEventShortcut: InputEventShortcut;
    CapsuleMesh: CapsuleMesh;
    Script: Script;
    ArrayMesh: ArrayMesh;
    AudioEffectBandLimitFilter: AudioEffectBandLimitFilter;
    MeshLibrary: MeshLibrary;
    RDShaderSPIRV: RDShaderSPIRV;
    HeightMapShape3D: HeightMapShape3D;
    CurveTexture: CurveTexture;
    VisualShaderNodeParticleRingEmitter: VisualShaderNodeParticleRingEmitter;
    InputEventMIDI: InputEventMIDI;
    InputEventMouse: InputEventMouse;
    AudioEffectChorus: AudioEffectChorus;
    Sky: Sky;
    StyleBoxLine: StyleBoxLine;
    SphereMesh: SphereMesh;
    AnimationNodeTimeScale: AnimationNodeTimeScale;
    AudioEffectReverb: AudioEffectReverb;
    AnimationNodeOneShot: AnimationNodeOneShot;
    Shader: Shader;
    VisualShaderNodeComment: VisualShaderNodeComment;
    GradientTexture1D: GradientTexture1D;
    InputEventScreenDrag: InputEventScreenDrag;
    VisualShaderNodeFresnel: VisualShaderNodeFresnel;
    AnimatedTexture: AnimatedTexture;
    AnimationNodeStateMachineTransition: AnimationNodeStateMachineTransition;
    MissingResource: MissingResource;
    VisualShaderNodeCustom: VisualShaderNodeCustom;
    EditorSyntaxHighlighter: EditorSyntaxHighlighter;
    VisualShaderNodeFaceForward: VisualShaderNodeFaceForward;
    AudioStreamWAV: AudioStreamWAV;
    SkeletonModification2DCCDIK: SkeletonModification2DCCDIK;
    VisualShaderNodeCubemapParameter: VisualShaderNodeCubemapParameter;
    RichTextEffect: RichTextEffect;
    VisualShaderNodeTexture: VisualShaderNodeTexture;
    Texture2DArray: Texture2DArray;
    AudioEffectPanner: AudioEffectPanner;
    PlaceholderTexture2DArray: PlaceholderTexture2DArray;
    VisualShaderNodeParticleAccelerator: VisualShaderNodeParticleAccelerator;
    BoxMesh: BoxMesh;
    VisualShaderNodeUIntConstant: VisualShaderNodeUIntConstant;
    AudioStreamGenerator: AudioStreamGenerator;
    AtlasTexture: AtlasTexture;
    VisualShaderNodeExpression: VisualShaderNodeExpression;
    ExternalTexture: ExternalTexture;
    VisualShaderNodeTextureSDFNormal: VisualShaderNodeTextureSDFNormal;
    Texture2DArrayRD: Texture2DArrayRD;
    AudioStream: AudioStream;
    VisualShaderNodeBooleanParameter: VisualShaderNodeBooleanParameter;
    Skin: Skin;
    FontVariation: FontVariation;
    SkeletonProfile: SkeletonProfile;
    InputEventJoypadButton: InputEventJoypadButton;
    Texture: Texture;
    ProceduralSkyMaterial: ProceduralSkyMaterial;
    CylinderMesh: CylinderMesh;
    PlaceholderCubemapArray: PlaceholderCubemapArray;
    SpriteFrames: SpriteFrames;
    VisualShaderNodeSDFRaymarch: VisualShaderNodeSDFRaymarch;
    BoxShape3D: BoxShape3D;
    AudioEffectPitchShift: AudioEffectPitchShift;
    Mesh: Mesh;
    AudioEffectDelay: AudioEffectDelay;
    PrimitiveMesh: PrimitiveMesh;
    PlaceholderTexture2D: PlaceholderTexture2D;
    AnimationNodeTimeSeek: AnimationNodeTimeSeek;
    VisualShaderNodeTextureSDF: VisualShaderNodeTextureSDF;
    TileSet: TileSet;
    AudioEffectEQ21: AudioEffectEQ21;
    VisualShaderNodeBillboard: VisualShaderNodeBillboard;
    BoneMap: BoneMap;
    AnimationNodeSync: AnimationNodeSync;
    VisualShaderNodeDistanceFade: VisualShaderNodeDistanceFade;
    BaseMaterial3D: BaseMaterial3D;
    RibbonTrailMesh: RibbonTrailMesh;
    VisualShaderNodeTransformDecompose: VisualShaderNodeTransformDecompose;
    CompressedCubemap: CompressedCubemap;
    AudioEffectRecord: AudioEffectRecord;
    PlaceholderCubemap: PlaceholderCubemap;
    Occluder3D: Occluder3D;
    AnimationNodeAdd2: AnimationNodeAdd2;
    FontFile: FontFile;
    VisualShaderNodeVectorCompose: VisualShaderNodeVectorCompose;
    VisualShaderNodeIntOp: VisualShaderNodeIntOp;
    NavigationMeshSourceGeometryData3D: NavigationMeshSourceGeometryData3D;
    PlaceholderTextureLayered: PlaceholderTextureLayered;
    TextureLayered: TextureLayered;
    PolygonPathFinder: PolygonPathFinder;
    VisualShaderNodeTransformOp: VisualShaderNodeTransformOp;
    VisualShaderNodeVectorDecompose: VisualShaderNodeVectorDecompose;
    VisualShaderNodeParticleOutput: VisualShaderNodeParticleOutput;
    SystemFont: SystemFont;
    SphereOccluder3D: SphereOccluder3D;
    StyleBoxEmpty: StyleBoxEmpty;
    Curve3D: Curve3D;
    X509Certificate: X509Certificate;
    VisualShaderNodeVec4Constant: VisualShaderNodeVec4Constant;
    QuadOccluder3D: QuadOccluder3D;
    VisualShaderNodeParticleConeVelocity: VisualShaderNodeParticleConeVelocity;
    AnimationNodeAdd3: AnimationNodeAdd3;
    PrismMesh: PrismMesh;
    AnimationNodeBlendTree: AnimationNodeBlendTree;
    AnimationNodeBlendSpace1D: AnimationNodeBlendSpace1D;
    InputEventJoypadMotion: InputEventJoypadMotion;
    InputEventFromWindow: InputEventFromWindow;
    PhysicalSkyMaterial: PhysicalSkyMaterial;
    VisualShaderNodeSample3D: VisualShaderNodeSample3D;
    SegmentShape2D: SegmentShape2D;
    VisualShaderNodeVarying: VisualShaderNodeVarying;
    Curve2D: Curve2D;
    Resource: Resource;
    VisualShaderNodeDerivativeFunc: VisualShaderNodeDerivativeFunc;
    NavigationMeshSourceGeometryData2D: NavigationMeshSourceGeometryData2D;
    BitMap: BitMap;
    VisualShaderNodeRandomRange: VisualShaderNodeRandomRange;
    PackedDataContainer: PackedDataContainer;
    SkeletonModification2D: SkeletonModification2D;
    Curve: Curve;
    AudioEffectLowPassFilter: AudioEffectLowPassFilter;
    SyntaxHighlighter: SyntaxHighlighter;
    ImageTextureLayered: ImageTextureLayered;
    CameraTexture: CameraTexture;
    RDShaderFile: RDShaderFile;
    VisualShaderNodeScreenNormalWorldSpace: VisualShaderNodeScreenNormalWorldSpace;
    VisualShaderNodeSmoothStep: VisualShaderNodeSmoothStep;
    VisualShaderNodeParticleSphereEmitter: VisualShaderNodeParticleSphereEmitter;
    AnimationNodeTransition: AnimationNodeTransition;
    VisualShaderNodeParameter: VisualShaderNodeParameter;
    VisualShaderNodeTexture2DParameter: VisualShaderNodeTexture2DParameter;
    PolygonOccluder3D: PolygonOccluder3D;
    VisualShaderNodeTextureParameterTriplanar: VisualShaderNodeTextureParameterTriplanar;
    Environment: Environment;
    BoxOccluder3D: BoxOccluder3D;
    Image: Image;
    AudioEffectBandPassFilter: AudioEffectBandPassFilter;
    VisualShaderNodeVectorLen: VisualShaderNodeVectorLen;
    VisualShaderNodeTextureParameter: VisualShaderNodeTextureParameter;
    SkeletonModification2DStackHolder: SkeletonModification2DStackHolder;
    VisualShaderNodeCompare: VisualShaderNodeCompare;
    ShaderMaterial: ShaderMaterial;
    Texture3DRD: Texture3DRD;
    PlaceholderTexture3D: PlaceholderTexture3D;
    PackedScene: PackedScene;
    VisualShaderNodeTransformConstant: VisualShaderNodeTransformConstant;
}
type ResourceTypeNames = keyof ResourceProperties;
export type ResourceTypeMap = {
    [K in ResourceTypeNames]: {
        type: K;
        properties: ResourceProperties[K];
    };
};
export type ResourceType = ResourceTypeMap[keyof ResourceTypeMap];
export interface TextureProperties {
    TextureLayeredRD: TextureLayeredRD;
    TextureCubemapArrayRD: TextureCubemapArrayRD;
    CompressedTexture2DArray: CompressedTexture2DArray;
    CanvasTexture: CanvasTexture;
    ImageTexture3D: ImageTexture3D;
    ImageTexture: ImageTexture;
    Texture2D: Texture2D;
    Texture3D: Texture3D;
    ViewportTexture: ViewportTexture;
    GradientTexture2D: GradientTexture2D;
    CompressedTexture2D: CompressedTexture2D;
    Texture2DRD: Texture2DRD;
    PortableCompressedTexture2D: PortableCompressedTexture2D;
    CompressedTexture3D: CompressedTexture3D;
    CompressedTextureLayered: CompressedTextureLayered;
    TextureCubemapRD: TextureCubemapRD;
    MeshTexture: MeshTexture;
    CurveXYZTexture: CurveXYZTexture;
    CubemapArray: CubemapArray;
    Cubemap: Cubemap;
    CompressedCubemapArray: CompressedCubemapArray;
    CurveTexture: CurveTexture;
    GradientTexture1D: GradientTexture1D;
    AnimatedTexture: AnimatedTexture;
    Texture2DArray: Texture2DArray;
    PlaceholderTexture2DArray: PlaceholderTexture2DArray;
    AtlasTexture: AtlasTexture;
    ExternalTexture: ExternalTexture;
    Texture2DArrayRD: Texture2DArrayRD;
    Texture: Texture;
    PlaceholderCubemapArray: PlaceholderCubemapArray;
    PlaceholderTexture2D: PlaceholderTexture2D;
    CompressedCubemap: CompressedCubemap;
    PlaceholderCubemap: PlaceholderCubemap;
    PlaceholderTextureLayered: PlaceholderTextureLayered;
    TextureLayered: TextureLayered;
    ImageTextureLayered: ImageTextureLayered;
    CameraTexture: CameraTexture;
    Texture3DRD: Texture3DRD;
    PlaceholderTexture3D: PlaceholderTexture3D;
}
type TextureTypeNames = keyof TextureProperties;
export type TextureTypeMap = {
    [K in TextureTypeNames]: {
        type: K;
        properties: TextureProperties[K];
    };
};
export type TextureType = TextureTypeMap[keyof TextureTypeMap];
export interface MeshProperties {
    TextMesh: TextMesh;
    PlaceholderMesh: PlaceholderMesh;
    PointMesh: PointMesh;
    ImmediateMesh: ImmediateMesh;
    TorusMesh: TorusMesh;
    QuadMesh: QuadMesh;
    TubeTrailMesh: TubeTrailMesh;
    PlaneMesh: PlaneMesh;
    CapsuleMesh: CapsuleMesh;
    ArrayMesh: ArrayMesh;
    SphereMesh: SphereMesh;
    BoxMesh: BoxMesh;
    CylinderMesh: CylinderMesh;
    Mesh: Mesh;
    PrimitiveMesh: PrimitiveMesh;
    RibbonTrailMesh: RibbonTrailMesh;
    PrismMesh: PrismMesh;
}
type MeshTypeNames = keyof MeshProperties;
export type MeshTypeMap = {
    [K in MeshTypeNames]: {
        type: K;
        properties: MeshProperties[K];
    };
};
export type MeshType = MeshTypeMap[keyof MeshTypeMap];
export interface MaterialProperties {
    Material: Material;
    ParticleProcessMaterial: ParticleProcessMaterial;
    PanoramaSkyMaterial: PanoramaSkyMaterial;
    CanvasItemMaterial: CanvasItemMaterial;
    FogMaterial: FogMaterial;
    PlaceholderMaterial: PlaceholderMaterial;
    ORMMaterial3D: ORMMaterial3D;
    StandardMaterial3D: StandardMaterial3D;
    ProceduralSkyMaterial: ProceduralSkyMaterial;
    BaseMaterial3D: BaseMaterial3D;
    PhysicalSkyMaterial: PhysicalSkyMaterial;
    ShaderMaterial: ShaderMaterial;
}
type MaterialTypeNames = keyof MaterialProperties;
export type MaterialTypeMap = {
    [K in MaterialTypeNames]: {
        type: K;
        properties: MaterialProperties[K];
    };
};
export type MaterialType = MaterialTypeMap[keyof MaterialTypeMap];
export interface Shape3DProperties {
    SphereShape3D: SphereShape3D;
    ConvexPolygonShape3D: ConvexPolygonShape3D;
    SeparationRayShape3D: SeparationRayShape3D;
    ConcavePolygonShape3D: ConcavePolygonShape3D;
    WorldBoundaryShape3D: WorldBoundaryShape3D;
    Shape3D: Shape3D;
    CapsuleShape3D: CapsuleShape3D;
    CylinderShape3D: CylinderShape3D;
    HeightMapShape3D: HeightMapShape3D;
    BoxShape3D: BoxShape3D;
}
type Shape3DTypeNames = keyof Shape3DProperties;
export type Shape3DTypeMap = {
    [K in Shape3DTypeNames]: {
        type: K;
        properties: Shape3DProperties[K];
    };
};
export type Shape3DType = Shape3DTypeMap[keyof Shape3DTypeMap];
export interface AudioStreamProperties {
    AudioStreamRandomizer: AudioStreamRandomizer;
    AudioStreamMicrophone: AudioStreamMicrophone;
    AudioStreamPolyphonic: AudioStreamPolyphonic;
    AudioStreamWAV: AudioStreamWAV;
    AudioStreamGenerator: AudioStreamGenerator;
    AudioStream: AudioStream;
}
type AudioStreamTypeNames = keyof AudioStreamProperties;
export type AudioStreamTypeMap = {
    [K in AudioStreamTypeNames]: {
        type: K;
        properties: AudioStreamProperties[K];
    };
};
export type AudioStreamType = AudioStreamTypeMap[keyof AudioStreamTypeMap];
export interface AnimationNodeProperties {
    AnimationNodeSub2: AnimationNodeSub2;
    AnimationNodeBlendSpace2D: AnimationNodeBlendSpace2D;
    AnimationNodeOutput: AnimationNodeOutput;
    AnimationNodeStateMachine: AnimationNodeStateMachine;
    AnimationRootNode: AnimationRootNode;
    AnimationNode: AnimationNode;
    AnimationNodeAnimation: AnimationNodeAnimation;
    AnimationNodeBlend2: AnimationNodeBlend2;
    AnimationNodeBlend3: AnimationNodeBlend3;
    AnimationNodeTimeScale: AnimationNodeTimeScale;
    AnimationNodeOneShot: AnimationNodeOneShot;
    AnimationNodeTimeSeek: AnimationNodeTimeSeek;
    AnimationNodeSync: AnimationNodeSync;
    AnimationNodeAdd2: AnimationNodeAdd2;
    AnimationNodeAdd3: AnimationNodeAdd3;
    AnimationNodeBlendTree: AnimationNodeBlendTree;
    AnimationNodeBlendSpace1D: AnimationNodeBlendSpace1D;
    AnimationNodeTransition: AnimationNodeTransition;
}
type AnimationNodeTypeNames = keyof AnimationNodeProperties;
export type AnimationNodeTypeMap = {
    [K in AnimationNodeTypeNames]: {
        type: K;
        properties: AnimationNodeProperties[K];
    };
};
export type AnimationNodeType = AnimationNodeTypeMap[keyof AnimationNodeTypeMap];
export interface AnimationRootNodeProperties {
    AnimationNodeBlendSpace2D: AnimationNodeBlendSpace2D;
    AnimationNodeStateMachine: AnimationNodeStateMachine;
    AnimationRootNode: AnimationRootNode;
    AnimationNodeAnimation: AnimationNodeAnimation;
    AnimationNodeBlendTree: AnimationNodeBlendTree;
    AnimationNodeBlendSpace1D: AnimationNodeBlendSpace1D;
}
type AnimationRootNodeTypeNames = keyof AnimationRootNodeProperties;
export type AnimationRootNodeTypeMap = {
    [K in AnimationRootNodeTypeNames]: {
        type: K;
        properties: AnimationRootNodeProperties[K];
    };
};
export type AnimationRootNodeType = AnimationRootNodeTypeMap[keyof AnimationRootNodeTypeMap];
export interface ControlProperties {
    FileSystemDock: FileSystemDock;
    BaseButton: BaseButton;
    Slider: Slider;
    TextureProgressBar: TextureProgressBar;
    MarginContainer: MarginContainer;
    TextEdit: TextEdit;
    SubViewportContainer: SubViewportContainer;
    Container: Container;
    GridContainer: GridContainer;
    VFlowContainer: VFlowContainer;
    MenuButton: MenuButton;
    LinkButton: LinkButton;
    VBoxContainer: VBoxContainer;
    TextureButton: TextureButton;
    ScriptEditorBase: ScriptEditorBase;
    NinePatchRect: NinePatchRect;
    CenterContainer: CenterContainer;
    HFlowContainer: HFlowContainer;
    OptionButton: OptionButton;
    GraphElement: GraphElement;
    Control: Control;
    HSlider: HSlider;
    Label: Label;
    PanelContainer: PanelContainer;
    ProgressBar: ProgressBar;
    RichTextLabel: RichTextLabel;
    EditorInspector: EditorInspector;
    CheckButton: CheckButton;
    EditorScriptPicker: EditorScriptPicker;
    GraphFrame: GraphFrame;
    FlowContainer: FlowContainer;
    VideoStreamPlayer: VideoStreamPlayer;
    VSlider: VSlider;
    ColorRect: ColorRect;
    MenuBar: MenuBar;
    GraphNode: GraphNode;
    VSeparator: VSeparator;
    ItemList: ItemList;
    ScrollContainer: ScrollContainer;
    EditorResourcePicker: EditorResourcePicker;
    VScrollBar: VScrollBar;
    ReferenceRect: ReferenceRect;
    HScrollBar: HScrollBar;
    EditorSpinSlider: EditorSpinSlider;
    Panel: Panel;
    SpinBox: SpinBox;
    HBoxContainer: HBoxContainer;
    Tree: Tree;
    HSeparator: HSeparator;
    CodeEdit: CodeEdit;
    TextureRect: TextureRect;
    VSplitContainer: VSplitContainer;
    ColorPicker: ColorPicker;
    TabBar: TabBar;
    EditorProperty: EditorProperty;
    AspectRatioContainer: AspectRatioContainer;
    Range: Range;
    CheckBox: CheckBox;
    GraphEdit: GraphEdit;
    HSplitContainer: HSplitContainer;
    SplitContainer: SplitContainer;
    ColorPickerButton: ColorPickerButton;
    LineEdit: LineEdit;
    Separator: Separator;
    BoxContainer: BoxContainer;
    ScrollBar: ScrollBar;
    TabContainer: TabContainer;
    ScriptEditor: ScriptEditor;
    Button: Button;
}
type ControlTypeNames = keyof ControlProperties;
export type ControlTypeMap = {
    [K in ControlTypeNames]: {
        type: K;
        properties: ControlProperties[K];
    };
};
export type ControlType = ControlTypeMap[keyof ControlTypeMap];
export interface ButtonProperties {
    MenuButton: MenuButton;
    OptionButton: OptionButton;
    CheckButton: CheckButton;
    CheckBox: CheckBox;
    ColorPickerButton: ColorPickerButton;
    Button: Button;
}
type ButtonTypeNames = keyof ButtonProperties;
export type ButtonTypeMap = {
    [K in ButtonTypeNames]: {
        type: K;
        properties: ButtonProperties[K];
    };
};
export type ButtonType = ButtonTypeMap[keyof ButtonTypeMap];
export interface ContainerProperties {
    FileSystemDock: FileSystemDock;
    MarginContainer: MarginContainer;
    SubViewportContainer: SubViewportContainer;
    Container: Container;
    GridContainer: GridContainer;
    VFlowContainer: VFlowContainer;
    VBoxContainer: VBoxContainer;
    ScriptEditorBase: ScriptEditorBase;
    CenterContainer: CenterContainer;
    HFlowContainer: HFlowContainer;
    GraphElement: GraphElement;
    PanelContainer: PanelContainer;
    EditorInspector: EditorInspector;
    EditorScriptPicker: EditorScriptPicker;
    GraphFrame: GraphFrame;
    FlowContainer: FlowContainer;
    GraphNode: GraphNode;
    ScrollContainer: ScrollContainer;
    EditorResourcePicker: EditorResourcePicker;
    HBoxContainer: HBoxContainer;
    VSplitContainer: VSplitContainer;
    ColorPicker: ColorPicker;
    EditorProperty: EditorProperty;
    AspectRatioContainer: AspectRatioContainer;
    HSplitContainer: HSplitContainer;
    SplitContainer: SplitContainer;
    BoxContainer: BoxContainer;
    TabContainer: TabContainer;
    ScriptEditor: ScriptEditor;
}
type ContainerTypeNames = keyof ContainerProperties;
export type ContainerTypeMap = {
    [K in ContainerTypeNames]: {
        type: K;
        properties: ContainerProperties[K];
    };
};
export type ContainerType = ContainerTypeMap[keyof ContainerTypeMap];
export {};
