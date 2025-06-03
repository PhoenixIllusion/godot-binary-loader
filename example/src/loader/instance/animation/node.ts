import { AnimationNode, AnimationNodeProperties } from "../types/gen";
import { Vector2 } from "../types/gen/types";
import { NodeState, NodeTimeInfo, PlaybackInfo, FilterAction, blend_node, _pi } from "./blend";
import { PlayerInterface } from "./player_interface";

  export abstract class Node {
    source: Node[] = [];
    filter_enabled: boolean;
    filters: string[];
    filter_mask: Float32Array | null = null;

    node_state: NodeState = { track_weights: new Float32Array() }
    current_length: number = 0;
    current_position: number = 0;
    current_delta: number = 0;

    _nti = new NodeTimeInfo();
    playerInterface!: PlayerInterface;

    position?: Vector2;

    source_names = ['in'];

    constructor(properties: AnimationNode, public name: string, public type: keyof AnimationNodeProperties) {
      this.filter_enabled = properties.filter_enabled ?? false;
      this.filters = (<any>properties).filters ?? [];
    }

    parameters(_parameters: Record<string, any>) { }

    configure(p_interface: PlayerInterface) {
      p_interface.configureNode(this);
      this.playerInterface = p_interface;
      this.source.forEach(source => source.configure(p_interface))
    }
    set_node_time_info(nti: NodeTimeInfo) {
      this.current_length = nti.length;
      this.current_position = nti.position;
      this.current_delta = nti.delta;
      this._nti.length = nti.length;
      this._nti.position = nti.position;
      this._nti.delta = nti.delta;
    }
    get_node_time_info() { return this._nti; }

    blend_input(p_input: number, p_playback_info: PlaybackInfo, p_filter: FilterAction, p_sync: boolean): NodeTimeInfo {
      const node = this.source[p_input];
      return blend_node(this, node, p_playback_info, p_filter, p_sync);
    }
    blend_node(node: Node, p_playback_info: PlaybackInfo, p_filter: FilterAction, p_sync: boolean) {
      return blend_node(this, node, p_playback_info, p_filter, p_sync)
    }

    process(p_playback_info: PlaybackInfo): NodeTimeInfo {
      const pi = _pi(p_playback_info);
      if (p_playback_info.seeked) {
        pi.delta = this.get_node_time_info().position - p_playback_info.time;
      } else {
        pi.time = this.get_node_time_info().position + p_playback_info.delta;
      }
      const nti = this._process(pi);
      this.set_node_time_info(nti);
      return nti;
    }
    abstract _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
  }