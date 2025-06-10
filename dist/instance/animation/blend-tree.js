import { unwrap_property_paths } from "@phoenixillusion/godot-scene-reader/process/scene/unwrap.js";
import { Node as BaseNode } from './node';
import { _pi, FilterAction } from "./blend";
export class BlendTree extends BaseNode {
    constructor(blendTree, name = 'blend-tree') {
        super(blendTree, name, 'AnimationNodeBlendTree');
        this.nodeMap = {};
        let output = null;
        const nodeMap = this.nodeMap;
        const { node_connections, nodes } = unwrap_property_paths(blendTree);
        for (const [name, treeNode] of Object.entries(nodes)) {
            const { node, position } = treeNode;
            if (node) {
                nodeMap[name] = BlendTree.create(node, name);
                nodeMap[name].position = position;
            }
        }
        for (let i = 0; i < node_connections.length; i += 3) {
            const [input_node, input_index, output_node] = node_connections.slice(i, i + 3);
            if ((input_node == 'output' || nodes[input_node]) && nodes[output_node]) {
                if (input_node == 'output') {
                    output = nodeMap[output_node];
                }
                else {
                    nodeMap[input_node].source[input_index] = nodeMap[output_node];
                }
            }
            else {
                const could_not_find = [];
                if (!nodes[input_node])
                    could_not_find.push(input_node);
                if (!nodes[output_node])
                    could_not_find.push(output_node);
                throw new Error(`Attempted to build AnimationTree, but could not find either [${could_not_find.join('] or [')}]`);
            }
        }
        if (output === null) {
            throw new Error(`Attempted to build AnimationTree, but could not find [output] node`);
        }
        this.source = [output];
    }
    parameters(parameters) {
        for (const [key, val] of Object.entries(parameters)) {
            const node = this.nodeMap[key];
            if (!node)
                throw new Error(`Attempted to set AnimationNode Parameters on non-existant node [${key}]`);
            Object.assign(node, val);
        }
    }
    _process(p_playback_info) {
        const pi = _pi(p_playback_info);
        const output = 0;
        pi.weight = 1.0;
        return this.blend_input(output, pi, FilterAction.FILTER_IGNORE, true);
    }
}
BlendTree.registerType('AnimationNodeBlendTree', BlendTree);
