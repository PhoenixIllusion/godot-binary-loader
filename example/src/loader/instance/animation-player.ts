import { unwrap_property_array } from "@phoenixillusion/godot-scene-reader/process/scene/unwrap.js";
import { AnimationPlayer, AnimationLibrary as AnimationLibraryT } from "./types/gen";
import { DefaultAnimation } from "./types/gen/defaults/Animation.default";
import { AnimationData, AnimationInstance } from "./animation";
import { AnimationMixerInstance } from "./animation-mixer";
import { SceneInstance } from "./scene";
import { unwrap_properties_cached } from "./util";
import { DefaultAnimationPlayer } from "./types/gen/defaults/AnimationPlayer.default";

interface AnimationLibrary extends AnimationLibraryT {
  _data: Record<string, {'properties': AnimationData}>;
}

export class AnimationPlayerInstance extends AnimationMixerInstance {
  autoplay!: string;
  constructor(node: SceneInstance.Node) {
    super(node);
    if (node.type != 'AnimationPlayer') {
      throw new Error("AnimationPlayerInstance constructor requires node of type 'AnimationPlayer'");
    }
    const animationPlayer = unwrap_properties_cached(node.properties) as AnimationPlayer;
    DefaultAnimationPlayer(animationPlayer);
    Object.assign(this, animationPlayer);
    const libraries: Record<string, { properties: AnimationLibrary }> = (<any>animationPlayer).libraries;
    for(const [libName, lib] of Object.entries(libraries)) {
      for(const [animName, data] of Object.entries(lib.properties._data)) {
        const { properties } = data;
        DefaultAnimation(properties);
        properties.tracks = unwrap_property_array(properties, 'tracks', ['enabled', 'imported', 'interp', 'keys', 'loop_wrap','path', 'type']);
        const name = libName.length ? `${libName}/${animName}` : animName;
        this.animations[name] = new AnimationInstance(name, properties);
        this.animation_set.push(name);
      }
    }
    this._update_caches();
  }
}
