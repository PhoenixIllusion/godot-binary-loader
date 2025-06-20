import { AnimationNode, AnimationNodeProperties } from "../types/gen";
import { Vector2 } from "../types/gen/types";
import { NodeState, NodeTimeInfo, PlaybackInfo, FilterAction } from "./blend";
import { PlayerInterface } from "./player_interface";
export declare abstract class Node {
    name: string;
    type: keyof AnimationNodeProperties;
    source: Node[];
    filter_enabled: boolean;
    filters: string[];
    filter_mask: Float32Array | null;
    node_state: NodeState;
    current_length: number;
    current_position: number;
    current_delta: number;
    _nti: NodeTimeInfo;
    playerInterface: PlayerInterface;
    position?: Vector2;
    source_names: string[];
    constructor(properties: AnimationNode, name: string, type: keyof AnimationNodeProperties);
    parameters(_parameters: Record<string, any>): void;
    configure(p_interface: PlayerInterface): void;
    set_node_time_info(nti: NodeTimeInfo): void;
    get_node_time_info(): NodeTimeInfo;
    blend_input(p_input: number, p_playback_info: PlaybackInfo, p_filter: FilterAction, p_sync: boolean): NodeTimeInfo;
    blend_node(node: Node, p_playback_info: PlaybackInfo, p_filter: FilterAction, p_sync: boolean): NodeTimeInfo;
    process(p_playback_info: PlaybackInfo): NodeTimeInfo;
    abstract _process(p_playback_info: PlaybackInfo): NodeTimeInfo;
}
