import { animation_convert_track_float32_array } from "@phoenixillusion/godot-scene-reader/process/scene/animation.js";
import { node_path_string } from "./util";
export function get_cache_type(p_type) {
    if (p_type == 'bezier') {
        return 'value';
    }
    if (p_type == 'rotation_3d' || p_type == 'scale_3d') {
        return 'position_3d'; // Reference them as position3D tracks, even if they modify rotation or scale.
    }
    return p_type;
}
export function get_cache_type_thash(track) {
    return get_cache_type(track.type) + '!' + track.path_str;
}
function convertTrackBufferIfNeeded(track) {
    if (track.keys instanceof Float32Array) {
        const keys = track.keys;
        track.keys = animation_convert_track_float32_array(track.type, keys);
    }
    track.path_str = node_path_string(track.path);
    track.thash = get_cache_type_thash(track);
    return track;
}
export class AnimationInstance {
    constructor(name, data) {
        this.name = name;
        this.tracks = data.tracks.map(convertTrackBufferIfNeeded);
        this.length = data.length;
        this.loop_mode = data.loop_mode;
        this.step = data.step;
    }
}
