import { mat4, quat, vec3 } from "gl-matrix";
import { get_cache_type } from "./animation";
import { RootMotion, TrackCacheTransform, TrackCacheValue, TrackCacheMethod, TrackCacheAudio, TrackCacheAnimation } from "./animation/anim-cache";
import { DefaultAnimationMixer } from "./types/gen/defaults/AnimationMixer.default";
import { Animation } from "./types/gen";
import { navigate_nodepath, navigate_nodepath_subpath, node_path_string, unwrap_properties_cached } from "./util";
import { ERR_PRINT, WARN_PRINT } from "@phoenixillusion/godot-scene-reader/util/data-reader.js";
import { Skeleton3DInstance } from "./skeleton";
import { transform3d_to_mat4 } from "./math";
import './animation/index';
const UPDATE_DISCRETE = 1;
function is_variant_interpolatable(_v) {
    return false;
}
function variant_zero(v) {
    if (typeof v == 'number') {
        return 0;
    }
    if (typeof v == 'boolean') {
        return false;
    }
    if (typeof v == 'object') {
        if ('type' in v) {
            switch (v.type) {
                case 'vector2':
                case 'vector2i':
                case 'vector3':
                case 'vector3i':
                case 'vector4':
                case 'vector4i':
                case 'quaternion':
                    return { type: v.type, x: 0, y: 0, z: 0, w: 0 };
            }
        }
    }
}
export class AnimationMixerInstance {
    has_animation(name) {
        return !!this.animations[name];
    }
    get_animation(name) {
        return this.animations[name];
    }
    constructor(node) {
        this.animations = {};
        this.animation_set = [];
        this.root_motion_cache = new RootMotion();
        this.track_cache = {};
        this.track_map = {};
        this.animation_track_num_to_track_cache = {};
        this.track_count = 0;
        this.animation_instances = [];
        this.cache_valid = false;
        const animationMixer = unwrap_properties_cached(node.properties);
        DefaultAnimationMixer(animationMixer);
        Object.assign(this, animationMixer);
        const rootNode = navigate_nodepath(node, this.root_node);
        if (rootNode == null) {
            throw new Error(`Failed to find Root Node for AnimationTree: [${this.root_node.names.join(', ')}]`);
        }
        this.rootNode = rootNode;
        this.root_motion_track_str = node_path_string(this.root_motion_track);
    }
    _blend_init() {
        if (!this.cache_valid) {
            if (!this._update_caches()) {
                return;
            }
        }
        // Init all value/transform/blend/bezier tracks that track_cache has.
        for (const K of Object.values(this.track_cache)) {
            const track = K;
            track.total_weight = 0.0;
            const root_motion_cache = this.root_motion_cache;
            switch (track.type) {
                case 'position_3d':
                    {
                        const t = (track);
                        if (track.root_motion) {
                            vec3.set(root_motion_cache.loc, 0, 0, 0);
                            quat.set(root_motion_cache.rot, 0, 0, 0, 1);
                            vec3.set(root_motion_cache.scale, 1, 1, 1);
                        }
                        vec3.copy(t.loc, t.init_loc);
                        quat.copy(t.rot, t.init_rot);
                        vec3.copy(t.scale, t.init_scale);
                    }
                    break;
                case 'blend_shape':
                    {
                        const t = (track);
                        t.value = t.init_value;
                    }
                    break;
                case 'value':
                    {
                        const t = (track);
                        //t.value = Animation::cast_to_blendwise(t.init_value);
                        //t.element_size = t.init_value.is_string() ? (real_t)(t.init_value.operator String()).length() : 0;
                        t.use_continuous = false;
                        t.use_discrete = false;
                    }
                    break;
                case 'audio':
                    {
                        /*
                        const t = <TrackCacheAudio>(track);
                        for (KeyValue<ObjectID, PlayingAudioTrackInfo> &L : t.playing_streams) {
                          PlayingAudioTrackInfo &track_info = L.value;
                          track_info.volume = 0.0;
                        }*/
                    }
                    break;
                default:
                    {
                    }
                    break;
            }
        }
    }
    _blend_calc_total_weight() {
        for (const ai of this.animation_instances) {
            const a = ai.animation;
            const weight = ai.playback_info.weight;
            const track_weights_ptr = ai.track_weights;
            const track_weights_count = track_weights_ptr.length;
            //ERR_CONTINUE_EDMSG(!animation_track_num_to_track_cashe.has(a), "No animation in cache.");
            const track_num_to_track_cache = this.animation_track_num_to_track_cache[a.name];
            const tracks = a.tracks;
            const tracks_ptr = tracks;
            const count = tracks.length;
            const processed_hashes = new Set();
            for (let i = 0; i < count; i++) {
                const animation_track = tracks_ptr[i];
                if (!animation_track.enabled) {
                    continue;
                }
                const thash = animation_track.thash;
                const track = track_num_to_track_cache[i];
                if (track == null || processed_hashes.has(thash)) {
                    // No path, but avoid error spamming.
                    // Or, there is the case different track type with same path; These can be distinguished by hash. So don't add the weight doubly.
                    continue;
                }
                const blend_idx = track.blend_idx;
                //ERR_CONTINUE(blend_idx < 0 || blend_idx >= this.track_count);
                const blend = blend_idx < track_weights_count ? track_weights_ptr[blend_idx] * weight : weight;
                track.total_weight += blend;
                processed_hashes.add(thash);
            }
        }
    }
    _update_caches() {
        const { root_motion_cache, track_cache } = this;
        vec3.set(root_motion_cache.loc, 0, 0, 0);
        quat.set(root_motion_cache.rot, 0, 0, 0, 1);
        vec3.set(root_motion_cache.scale, 1, 1, 1);
        const sname_list = this.animation_set;
        const parent = this.rootNode || null;
        if (!parent) {
            this.cache_valid = false;
            return false;
        }
        const mixer_name = "AnimationMixer";
        let reset_anim = null;
        const has_reset_anim = this.has_animation('RESET');
        if (has_reset_anim) {
            reset_anim = this.get_animation('RESET');
        }
        const _mat4 = mat4.create();
        for (const E of sname_list) {
            const anim = this.get_animation(E);
            for (let i = 0; i < anim.tracks.length; i++) {
                const a_track = anim.tracks[i];
                const path = a_track.path;
                const path_str = node_path_string(path);
                const thash = a_track.thash;
                const track_src_type = a_track.type;
                const track_cache_type = get_cache_type(track_src_type);
                let track = null;
                if (track_cache[thash]) {
                    track = track_cache[thash];
                }
                // If not valid, delete track.
                if (track && (track.type != track_cache_type || track.object_id == null)) {
                    track = null;
                }
                if (!track) {
                    const child = navigate_nodepath(parent, path);
                    const leftover_path = [];
                    if (!child) {
                        WARN_PRINT(mixer_name + ": '" + String(E) + "', couldn't resolve track:  '" + String(path) + "'. This warning can be disabled in Project Settings.");
                        continue;
                    }
                    const resource = navigate_nodepath_subpath(child, path, leftover_path);
                    switch (track_src_type) {
                        case 'bezier':
                        case 'value':
                            {
                                // If a value track without a key is cached first, the initial value cannot be determined.
                                // It is a corner case, but which may cause problems with blending.
                                const track_value = new TrackCacheValue();
                                if (resource != null) {
                                    track_value.object_id = resource;
                                }
                                else {
                                    track_value.object_id = child;
                                }
                                track_value.is_using_angle = a_track.interp == Animation.InterpolationType.INTERPOLATION_LINEAR_ANGLE ||
                                    a_track.interp == Animation.InterpolationType.INTERPOLATION_CUBIC_ANGLE;
                                track_value.subpath = leftover_path;
                                track = track_value;
                                const is_value = track_src_type == 'value';
                                track_value.init_value = variant_zero(a_track.keys.values[0]);
                                track_value.is_init = false;
                                // Can't interpolate them, need to convert.
                                track_value.is_variant_interpolatable = is_variant_interpolatable(track_value.init_value);
                                // If there is a Reset Animation, it takes precedence by overwriting.
                                if (has_reset_anim) {
                                    const rt = reset_anim.tracks.find(track => track.path_str == path_str && track.type == track_src_type);
                                    if (rt) {
                                        const rt_values = rt.keys.values;
                                        if (is_value) {
                                            if (rt_values.length > 0) {
                                                track_value.init_value = rt_values[0];
                                            }
                                        }
                                        else {
                                            if (rt_values.length > 0) {
                                                track_value.init_value = rt_values[0];
                                            }
                                        }
                                    }
                                }
                            }
                            break;
                        case 'position_3d':
                        case 'rotation_3d':
                        case 'scale_3d':
                            {
                                const node_3d = child;
                                if (!node_3d) {
                                    ERR_PRINT(mixer_name + ": '" + String(E) + "', transform track does not point to Node3D:  '" + String(path) + "'.");
                                    continue;
                                }
                                const track_xform = new TrackCacheTransform();
                                track_xform.type = 'position_3d';
                                track_xform.bone_idx = null;
                                let has_rest = false;
                                if (child.type == 'Skeleton3D') {
                                    const sk = new Skeleton3DInstance(unwrap_properties_cached(child.properties));
                                    if (sk && path.subnames.length == 1) {
                                        track_xform.skeleton_id = sk;
                                        let bone_idx = sk.bone.find(x => x.name == path.subnames[0]);
                                        if (bone_idx) {
                                            has_rest = true;
                                            track_xform.bone_idx = bone_idx;
                                            const rest = bone_idx.rest;
                                            const rest_mat = transform3d_to_mat4(rest, _mat4);
                                            mat4.decompose(track_xform.init_rot, track_xform.init_loc, track_xform.init_scale, rest_mat);
                                        }
                                    }
                                }
                                track_xform.object_id = node_3d;
                                track = track_xform;
                                switch (track_src_type) {
                                    case 'position_3d':
                                        {
                                            track_xform.loc_used = true;
                                        }
                                        break;
                                    case 'rotation_3d':
                                        {
                                            track_xform.rot_used = true;
                                        }
                                        break;
                                    case 'scale_3d':
                                        {
                                            track_xform.scale_used = true;
                                        }
                                        break;
                                    default: {
                                    }
                                }
                                // For non Skeleton3D bone animation.
                                if (has_reset_anim && !has_rest) {
                                    const rt = reset_anim.tracks.find(track => track.path_str == path_str && track.type == track_src_type);
                                    if (rt && rt.keys.values.length > 0) {
                                        const rt_values = rt.keys.values;
                                        switch (track_src_type) {
                                            case 'position_3d':
                                                {
                                                    vec3.copy(track_xform.init_loc, rt_values[0]);
                                                }
                                                break;
                                            case 'rotation_3d':
                                                {
                                                    quat.copy(track_xform.init_rot, rt_values[0]);
                                                }
                                                break;
                                            case 'scale_3d':
                                                {
                                                    vec3.copy(track_xform.init_scale, rt_values[0]);
                                                }
                                                break;
                                            default: {
                                            }
                                        }
                                    }
                                }
                            }
                            break; /*
                                case 'blend_shape': {
                                    if (path.subnames.length != 1) {
                                        ERR_PRINT(mixer_name + ": '" + String(E) + "', blend shape track does not contain a blend shape subname:  '" + String(path) + "'.");
                                        continue;
                                    }
                                    const mesh_3d = child;
            
                                    if (mesh_3d.type != 'MeshInstance3D') {
                                        ERR_PRINT(mixer_name + ": '" + String(E) + "', blend shape track does not point to MeshInstance3D:  '" + String(path) + "'.");
                                        continue;
                                    }
            
                                    const blend_shape_name = path.subnames[0];
                                    int blend_shape_idx = mesh_3d.find_blend_shape_by_name(blend_shape_name);
                                    if (blend_shape_idx == -1) {
                                        ERR_PRINT(mixer_name + ": '" + String(E) + "', blend shape track points to a non-existing name:  '" + String(blend_shape_name) + "'.");
                                        continue;
                                    }
            
                                    const track_bshape = new TrackCacheBlendShape();
            
                                    track_bshape.shape_index = blend_shape_idx;
                                    track_bshape.object_id = mesh_3d.get_instance_id();
                                    track = track_bshape;
            
                                    if (has_reset_anim) {
                                        int rt = reset_anim.find_track(path, track_src_type);
                                        if (rt >= 0 && reset_anim.track_get_key_count(rt) > 0) {
                                            track_bshape.init_value = reset_anim.track_get_key_value(rt, 0);
                                        }
                                    }
                                } break;*/
                        case 'method':
                            {
                                const track_method = new TrackCacheMethod();
                                if (resource) {
                                    track_method.object_id = resource;
                                }
                                else {
                                    track_method.object_id = child;
                                }
                                track = track_method;
                            }
                            break;
                        case 'audio':
                            {
                                const track_audio = new TrackCacheAudio();
                                /*
                                track_audio.object_id = child;
                                track_audio.audio_stream.instantiate();
                                track_audio.audio_stream.set_polyphony(audio_max_polyphony);
                                track_audio.playback_type = (AudioServer::PlaybackType)(int)(child.call(SNAME("get_playback_type")));
                                track_audio.bus = (StringName)(child.call(SNAME("get_bus")));
                                */
                                track = track_audio;
                            }
                            break;
                        case 'animation':
                            {
                                const track_animation = new TrackCacheAnimation();
                                track_animation.object_id = child;
                                track = track_animation;
                            }
                            break;
                        default: {
                            ERR_PRINT("Animation corrupted (invalid track type).");
                            continue;
                        }
                    }
                    track.path_str = path_str;
                    track.path = path;
                    track_cache[thash] = track;
                }
                else if (track_cache_type == 'position_3d') {
                    const track_xform = track;
                    /*if (track.setup_pass != setup_pass) {
                      track_xform.loc_used = false;
                      track_xform.rot_used = false;
                      track_xform.scale_used = false;
                    }*/
                    switch (track_src_type) {
                        case 'position_3d':
                            {
                                track_xform.loc_used = true;
                            }
                            break;
                        case 'rotation_3d':
                            {
                                track_xform.rot_used = true;
                            }
                            break;
                        case 'scale_3d':
                            {
                                track_xform.scale_used = true;
                            }
                            break;
                        default: {
                        }
                    }
                }
                else if (track_cache_type == 'value') {
                    const track_value = (track);
                    // If it has at least one angle interpolation, it also uses angle interpolation for blending.
                    // let was_using_angle = track_value.is_using_angle;
                    if (track_src_type == 'value') {
                        if (typeof track_value.init_value == 'string' && a_track.update != UPDATE_DISCRETE) {
                            //WARN_PRINT_ONCE_ED(mixer_name + ": '" + String(E) + "', Value Track: '" + String(path) + "' blends String types. This is an experimental algorithm.");
                        }
                        track_value.is_using_angle = track_value.is_using_angle || a_track.interp == Animation.InterpolationType.INTERPOLATION_LINEAR_ANGLE ||
                            a_track.interp == Animation.InterpolationType.INTERPOLATION_CUBIC_ANGLE;
                    }
                    //if (check_angle_interpolation && (was_using_angle != track_value.is_using_angle)) {
                    //	WARN_PRINT_ED(mixer_name + ": '" + String(E) + "', Value Track: '" + String(path) + "' has different interpolation types for rotation between some animations which may be blended together. Blending prioritizes angle interpolation, so the blending result uses the shortest path referenced to the initial (RESET animation) value.");
                    //}
                }
            }
        }
        this.track_map = {};
        let idx = 0;
        for (const K of Object.values(track_cache)) {
            this.track_map[K.path_str] = idx;
            idx++;
        }
        for (const K of Object.values(track_cache)) {
            K.blend_idx = this.track_map[K.path_str];
        }
        this.animation_track_num_to_track_cache = {};
        for (const E of sname_list) {
            const anim = this.get_animation(E);
            const tracks = anim.tracks;
            const track_num_to_track_cashe = [];
            for (let i = 0; i < tracks.length; i++) {
                const track_ptr = track_cache[tracks[i].thash] || null;
                if (track_ptr == null) {
                    track_num_to_track_cashe[i] = null;
                }
                else {
                    track_num_to_track_cashe[i] = track_ptr;
                }
            }
            this.animation_track_num_to_track_cache[anim.name] = track_num_to_track_cashe;
        }
        this.track_count = idx;
        return true;
    }
}
