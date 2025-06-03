
import { unwrap_property_paths } from "@phoenixillusion/godot-scene-reader/process/scene/unwrap.js";
import { AnimationNodeBlendTree } from "../types/gen";
import { Node as BaseNode } from './node';
import { Vector2 } from "../types/gen/types";
import { create, NonAbstractAnimationNodeType } from "./index";
import { _pi, FilterAction, NodeTimeInfo, PlaybackInfo } from "./blend";

export interface Node {
  node?: NonAbstractAnimationNodeType;
  position: Vector2;
}

type RepeatingPattern<T extends any[]> = T extends [infer A, infer B, infer C, ...infer Rest]
  ? [A, B, C, ...RepeatingPattern<Rest>]
  : [];

export type ConnectionEntry = [string, 0 | 1, string];
export interface Properties {
  nodes: { [key: string]: Node };
  node_connections: RepeatingPattern<ConnectionEntry>
}

export class BlendTree extends BaseNode {

  nodeMap: Record<string, BaseNode> = {};

  constructor(blendTree: AnimationNodeBlendTree, name = 'blend-tree') {
    super(blendTree, name, 'AnimationNodeBlendTree')
    let output: BaseNode | null = null;
    const nodeMap = this.nodeMap;
    const { node_connections, nodes } = unwrap_property_paths(blendTree) as Properties;
    for (const [name, treeNode] of Object.entries(nodes)) {
      const { node, position } = treeNode;
      if (node) {
        nodeMap[name] = create(node, name);
        nodeMap[name].position = position
      }
    }

    for (let i = 0; i < node_connections.length; i += 3) {
      const [input_node, input_index, output_node] = node_connections.slice(i, i + 3) as ConnectionEntry;
      if ((input_node == 'output' || nodes[input_node]) && nodes[output_node]) {
        if (input_node == 'output') {
          output = nodeMap[output_node]
        } else {
          nodeMap[input_node].source[input_index] = nodeMap[output_node];
        }
      } else {
        const could_not_find: string[] = []
        if (!nodes[input_node])
          could_not_find.push(input_node)
        if (!nodes[output_node])
          could_not_find.push(output_node)
        throw new Error(`Attempted to build AnimationTree, but could not find either [${could_not_find.join('] or [')}]`)
      }
    }
    if (output === null) {
      throw new Error(`Attempted to build AnimationTree, but could not find [output] node`);
    }
    this.source = [output];
  }
  parameters(parameters: Record<string, any>): void {
    for (const [key, val] of Object.entries(parameters)) {
      const node = this.nodeMap[key];
      if (!node) throw new Error(`Attempted to set AnimationNode Parameters on non-existant node [${key}]`);
      Object.assign(node, val);
    }
  }

  _process(p_playback_info: PlaybackInfo): NodeTimeInfo {
    const pi = _pi(p_playback_info);
    const output = 0
    pi.weight = 1.0;

    return this.blend_input(output, pi, FilterAction.FILTER_IGNORE, true);
  }

}