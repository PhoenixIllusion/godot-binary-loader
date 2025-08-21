import { SyncNode } from "./sync.js";
import { Node } from './node.js';
export class BlendSpace extends SyncNode {
    constructor() {
        super(...arguments);
        this.blend_points = [];
    }
}
export function convertRaw(_in, prefix, idx) {
    return {
        pos: _in.pos,
        node: Node.create(_in.node, prefix + '_blend_input' + idx)
    };
}
