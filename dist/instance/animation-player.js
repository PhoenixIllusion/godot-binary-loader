import { unwrap_property_array } from "@phoenixillusion/godot-scene-reader/process/scene/unwrap.js";
import { DefaultAnimation } from "./types/gen/defaults/Animation.default.js";
import { AnimationInstance } from "./animation.js";
import { AnimationMixerInstance } from "./animation-mixer.js";
import { unwrap_properties_cached } from "./util.js";
import { DefaultAnimationPlayer } from "./types/gen/defaults/AnimationPlayer.default.js";
export class AnimationPlayerInstance extends AnimationMixerInstance {
    constructor(node) {
        super(node);
        if (node.type != 'AnimationPlayer') {
            throw new Error("AnimationPlayerInstance constructor requires node of type 'AnimationPlayer'");
        }
        const animationPlayer = unwrap_properties_cached(node.properties);
        DefaultAnimationPlayer(animationPlayer);
        Object.assign(this, animationPlayer);
        const libraries = animationPlayer.libraries;
        for (const [libName, lib] of Object.entries(libraries)) {
            for (const [animName, data] of Object.entries(lib.properties._data)) {
                const { properties } = data;
                DefaultAnimation(properties);
                properties.tracks = unwrap_property_array(properties, 'tracks', ['enabled', 'imported', 'interp', 'keys', 'loop_wrap', 'path', 'type']);
                const name = libName.length ? `${libName}/${animName}` : animName;
                this.animations[name] = new AnimationInstance(name, properties);
                this.animation_set.push(name);
            }
        }
        this._update_caches();
    }
}
