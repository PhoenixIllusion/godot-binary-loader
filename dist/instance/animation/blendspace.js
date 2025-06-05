import { SyncNode } from "./sync";
import { create } from "./index";
export class BlendSpace extends SyncNode {
    constructor() {
        super(...arguments);
        this.blend_points = [];
    }
}
export function convertRaw(_in, prefix, idx) {
    return {
        pos: _in.pos,
        node: create(_in.node, prefix + '_blend_input' + idx)
    };
}
