import { unwrap_property_paths } from "@phoenixillusion/godot-scene-reader/process/scene/unwrap.js";
import { create } from './animation/index';
import { allocPlaybackInfo } from "./animation/blend";
import { navigate_nodepath, unwrap_properties_cached } from "./util";
import { Animation } from "./animation/animation";
import { AnimationMixerInstance } from "./animation-mixer";
import { DefaultAnimationTree } from "./types/gen/defaults/AnimationTree.default";
import { AnimationPlayerInstance } from "./animation-player";
import { _blend_process } from "./animation/blend_process";
import { is_zero_approx } from "./math";
export class AnimationTreeInstance extends AnimationMixerInstance {
    constructor(node) {
        super(node);
        this.nodes = [];
        if (node.type != 'AnimationTree') {
            throw new Error("AnimationTreeInstance constructor requires node of type 'AnimationTree'");
        }
        const animationTree = unwrap_properties_cached(node.properties);
        DefaultAnimationTree(animationTree);
        Object.assign(this, animationTree);
        const root = animationTree.tree_root;
        const { parameters } = unwrap_property_paths(animationTree);
        if (root.type == 'AnimationRootNode') {
            throw new Error("Attempted to Create abstract 'Root' node");
        }
        const animationPlayer = navigate_nodepath(node, animationTree.anim_player);
        if (animationPlayer == null || animationPlayer.type != 'AnimationPlayer') {
            throw new Error(`Failed to find AnimationPlayer for AnimationTree: [${animationTree.anim_player.names.join(', ')}]`);
        }
        this.animationPlayerNode = animationPlayer;
        this.animationPlayer = new AnimationPlayerInstance(animationPlayer);
        this.animations = this.animationPlayer.animations;
        this.root = create(root, 'root');
        this.root.configure(this);
        this._update_caches();
        this.nodes.forEach(node => this.setupNode(node));
        this.root.parameters(parameters);
    }
    setupNode(node) {
        node.node_state.track_weights = new Float32Array(this.track_count);
        if (node.filter_enabled) {
            const filter_mask = node.filter_mask = new Float32Array(this.track_count);
            node.filters.forEach(filter => {
                if (this.track_map[filter] == undefined) {
                    throw new Error('attempted to filter non-existent node');
                }
                filter_mask[this.track_map[filter]] = 1;
            });
        }
    }
    configureNode(node) {
        if (node instanceof Animation) {
            node.animationInstance = this.animationPlayer.animations[node.animation];
            if (!this.animation_set.includes(node.animation))
                this.animation_set.push(node.animation);
        }
        this.nodes.push(node);
    }
    make_animation_instance(animation, playback_info, track_weights) {
        for (const w of track_weights) {
            if (!is_zero_approx(w)) {
                this.animation_instances.push({ animation, playback_info, track_weights });
                return;
            }
        }
    }
    apply_animation(animation_instances, delta) {
        _blend_process(this, animation_instances, delta, false);
    }
    process_animation(delta) {
        const pi = allocPlaybackInfo();
        pi.delta = delta;
        this.root.node_state.track_weights.fill(1);
        this.animation_instances.length = 0;
        this.root.process(pi);
        this._blend_init();
        this._blend_calc_total_weight();
        this.apply_animation(this.animation_instances, delta);
        this.animation_instances.length = 0;
    }
}
