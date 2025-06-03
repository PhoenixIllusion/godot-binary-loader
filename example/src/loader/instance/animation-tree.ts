import { unwrap_property_paths } from "@phoenixillusion/godot-scene-reader/process/scene/unwrap.js";
import { AnimationPlayer, AnimationRootNodeType, AnimationTree } from "./types/gen";
import { create } from './animation/index';
import { Node } from './animation/node';
import { PlayerInterface } from "./animation/player_interface";
import { AnimationInstance, AnimationPlayerInstance } from "./animation";
import { allocPlaybackInfo, PlaybackInfo } from "./animation/blend";
import { SceneInstance } from "./scene";
import { navigate_nodepath, unwrap_properties_cached } from "./util";
import { Animation } from "./animation/animation";

export class AnimationTreeInstance implements PlayerInterface {

  animationPlayer: AnimationPlayerInstance;
  animationPlayerNode: SceneInstance.Node;

  rootNode: SceneInstance.Node;
  root: Node;

  private nodes: Node[] = [];
  tracks: string[] = [];
  tracks_idx: Record<string, number> = {};

  constructor(node: SceneInstance.Node) {
    if (node.type != 'AnimationTree') {
      throw new Error("AnimationTreeInstance constructor requires node of type 'AnimationTree'");
    }
    const animationTree = unwrap_properties_cached(node.properties) as AnimationTree;
    const root = animationTree.tree_root as AnimationRootNodeType;
    const { parameters } = unwrap_property_paths(animationTree) as { parameters: Record<string, any> };
    if (root.type == 'AnimationRootNode') {
      throw new Error("Attempted to Create abstract 'Root' node");
    }

    const animationPlayer = navigate_nodepath<SceneInstance.Node>(node, animationTree.anim_player);
    if(animationPlayer == null || animationPlayer.type != 'AnimationPlayer') {
      throw new Error(`Failed to find AnimationPlayer for AnimationTree: [${ animationTree.anim_player.names.join(', ')}]`)
    }
    this.animationPlayerNode = animationPlayer;
    this.animationPlayer =  new AnimationPlayerInstance(unwrap_properties_cached(animationPlayer.properties) as AnimationPlayer);

    const rootNode = navigate_nodepath<SceneInstance.Node>(node, animationTree.root_node);
    if(rootNode == null) {
      throw new Error(`Failed to find Root Node for AnimationTree: [${ animationTree.root_node.names.join(', ')}]`)
    }
    this.rootNode =  rootNode;

    this.root = create(root, 'root');
    this.root.configure(this);
    this.nodes.forEach(node => this.setupNode(node));
    this.root.parameters(parameters);
    this.process_animation(0);
  }

  setupNode<T extends Node>(node: T): void {
    node.node_state.track_weights = new Float32Array(this.tracks.length);
    if(node.filter_enabled) {
      const filter_mask = node.filter_mask = new Float32Array(this.tracks.length);
      node.filters.forEach(filter => {
        const idx = this.tracks_idx[filter];
        if(idx !== undefined) {
          filter_mask[idx] = 1;
        }
      })
    }
  }

  configureNode<T extends Node>(node: T): void {
    if(node instanceof Animation) {
      node.animationInstance = this.animationPlayer.animations[node.animation];
      node.animationInstance.tracks.forEach(track => {
        const key = track.path.names.join('/') + ':' + track.path.subnames.join(':');
        if(!this.tracks_idx[key]) {
          this.tracks_idx[key] = this.tracks.length;
          this.tracks.push(key);
        }
      })
    }
    this.nodes.push(node);
  }

  make_animation_instance(animation: AnimationInstance, p_playback_info: PlaybackInfo, track_weights: Float32Array): void {
    
  }
  process_animation(delta: number) {
    const pi = allocPlaybackInfo();
    pi.delta = delta;
    this.root.process(pi)
    this.root.node_state.track_weights.fill(1);
  }
}