import { Animation } from "./types/gen/index.js";
import { NodePath } from "./types/gen/types.js";
import type { TrackType } from "@phoenixillusion/godot-scene-reader/process/scene/animation.js";
import { animation_convert_track_float32_array, TrackKeys, UpdateMode } from "@phoenixillusion/godot-scene-reader/process/scene/animation.js";
import { node_path_string } from "./util.js";

export function get_cache_type(p_type: TrackType): TrackType {
  if (p_type == 'bezier') {
    return 'value';
  }
  if (p_type == 'rotation_3d' || p_type == 'scale_3d') {
    return 'position_3d'; // Reference them as position3D tracks, even if they modify rotation or scale.
  }
  return p_type;
}
export function get_cache_type_thash(track: TrackBase): string {
  return get_cache_type(track.type) + '!' + track.path_str
}

export { TrackType };
interface TrackBase {
  enabled: boolean;
  imported: false;
  interp: Animation.InterpolationType;
  loop_wrap: boolean;
  path: NodePath;
  path_str: string;
  type: TrackType;
  thash: string;
}

export interface TrackWithBuffer extends TrackBase {
  keys: Float32Array;
}

export interface Track extends TrackBase {
  keys: TrackKeys;
  update: UpdateMode;
}

function convertTrackBufferIfNeeded(track: Track | TrackWithBuffer): Track {
  if (track.keys instanceof Float32Array) {
    const keys = track.keys;
    track.keys = animation_convert_track_float32_array(track.type, keys);
  }
  track.path_str = node_path_string(track.path);
  track.thash = get_cache_type_thash(track);
  return track as Track;
}

export interface AnimationData extends Animation {
  update: Animation.UpdateMode;
  tracks: (Track | TrackWithBuffer)[];
}


export class AnimationInstance {
  length: number;
  loop_mode: Animation.LoopMode;
  step: number;
  tracks: Track[]
  constructor(public name: string, data: AnimationData) {
    this.tracks = data.tracks.map(convertTrackBufferIfNeeded);
    this.length = data.length;
    this.loop_mode = data.loop_mode;
    this.step = data.step;
  }
}
