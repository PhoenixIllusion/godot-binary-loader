import { unwrap_property_array } from "@phoenixillusion/godot-scene-reader/process/scene/unwrap.js";
import { Animation, AnimationPlayer, AnimationLibrary as AnimationLibraryT } from "./types/gen";
import { DefaultAnimation } from "./types/gen/defaults/Animation.default";
import { NodePath } from "./types/gen/types";
import { animation_convert_track_float32_array, TrackKeys, TrackType, UpdateMode } from "@phoenixillusion/godot-scene-reader/process/scene/animation.js";

export interface TrackWithBuffer {
  enabled: boolean;
  imported: false;
  interp: Animation.InterpolationType;
  keys: Float32Array;
  loop_wrap: boolean;
  path: NodePath;
  type: TrackType;
}

export interface Track {
  enabled: boolean;
  imported: false;
  interp: Animation.InterpolationType;
  keys: TrackKeys;
  loop_wrap: boolean;
  path: NodePath;
  type: TrackType;
  update: UpdateMode;
}

function convertTrackBufferIfNeeded(track: Track|TrackWithBuffer): Track {
  if(track.keys instanceof Float32Array){
    const keys= track.keys;
    track.keys = animation_convert_track_float32_array(track.type, keys);
  }
  
  return track as Track;
}

interface AnimationData  extends Animation {
  update: Animation.UpdateMode;
  tracks: (Track|TrackWithBuffer)[];
}

interface AnimationLibrary extends AnimationLibraryT {
  _data: Record<string, {'properties': AnimationData}>;
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

export class AnimationPlayerInstance {
  autoPlay: string;
  animations: Record<string, AnimationInstance> = {}
  constructor(animation: AnimationPlayer) {
    const { autoplay } = animation;
    this.autoPlay = autoplay;
    const libraries: Record<string, { properties: AnimationLibrary }> = (<any>animation).libraries;
    for(const [libName, lib] of Object.entries(libraries)) {
      for(const [animName, data] of Object.entries(lib.properties._data)) {
        const { properties } = data;
        DefaultAnimation(properties);
        properties.tracks = unwrap_property_array(properties, 'tracks', ['enabled', 'imported', 'interp', 'keys', 'loop_wrap','path', 'type']);
        const name = libName.length ? `${libName}/${animName}` : animName;
        this.animations[name] = new AnimationInstance(name, properties)
      }
    }
  }
}
