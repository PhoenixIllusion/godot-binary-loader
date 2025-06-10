import { SyncNode } from "./sync";
import { Node } from './node';
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
