import { _pi, FilterAction } from './blend';
import { Node } from './node';
export class SyncNode extends Node {
}
export class BlendNode extends SyncNode {
    constructor() {
        super(...arguments);
        this.blend_amount = 0;
    }
}
export class AddNode extends SyncNode {
    constructor() {
        super(...arguments);
        this.add_amount = 0;
    }
}
export class SubNode extends SyncNode {
    constructor() {
        super(...arguments);
        this.sub_amount = 0;
    }
}
export class Add2 extends AddNode {
    constructor(properties, name) {
        super(properties, name, 'AnimationNodeAdd2');
        this.source_names = ['in', 'add'];
    }
    _process(p_playback_info) {
        const amount = this.add_amount;
        const pi = _pi(p_playback_info);
        pi.weight = 1.0;
        const nti = this.blend_input(0, pi, FilterAction.FILTER_IGNORE, this.sync);
        pi.weight = amount;
        this.blend_input(1, pi, FilterAction.FILTER_PASS, this.sync);
        return nti;
    }
}
export class Add3 extends AddNode {
    constructor(properties, name) {
        super(properties, name, 'AnimationNodeAdd3');
        this.source_names = ['-add', 'in', '+add'];
    }
    _process(p_playback_info) {
        const amount = this.add_amount;
        const pi = _pi(p_playback_info);
        pi.weight = Math.max(0, -amount);
        this.blend_input(0, pi, FilterAction.FILTER_PASS, this.sync);
        pi.weight = 1.0;
        const nti = this.blend_input(1, pi, FilterAction.FILTER_IGNORE, this.sync);
        pi.weight = Math.max(0, amount);
        this.blend_input(2, pi, FilterAction.FILTER_PASS, this.sync);
        return nti;
    }
}
export class Blend2 extends BlendNode {
    constructor(properties, name) {
        super(properties, name, 'AnimationNodeBlend2');
        this.source_names = ['in', 'blend'];
    }
    _process(p_playback_info) {
        const amount = this.blend_amount;
        const pi = _pi(p_playback_info);
        pi.weight = 1.0 - amount;
        const nti0 = this.blend_input(0, pi, FilterAction.FILTER_BLEND, this.sync);
        pi.weight = amount;
        const nti1 = this.blend_input(1, pi, FilterAction.FILTER_PASS, this.sync);
        return amount > 0.5 ? nti1 : nti0; // Hacky but good enough.
    }
}
export class Blend3 extends BlendNode {
    constructor(properties, name) {
        super(properties, name, 'AnimationNodeBlend3');
        this.source_names = ['-blend', 'in', '+blend'];
    }
    _process(p_playback_info) {
        const amount = this.blend_amount;
        const pi = _pi(p_playback_info);
        pi.weight = Math.max(0, -amount);
        const nti0 = this.blend_input(0, pi, FilterAction.FILTER_IGNORE, this.sync);
        pi.weight = 1.0 - Math.abs(amount);
        const nti1 = this.blend_input(1, pi, FilterAction.FILTER_IGNORE, this.sync);
        pi.weight = Math.max(0, amount);
        const nti2 = this.blend_input(2, pi, FilterAction.FILTER_IGNORE, this.sync);
        return amount > 0.5 ? nti2 : (amount < -0.5 ? nti0 : nti1); // Hacky but good enough.
    }
}
export class Sub2 extends SubNode {
    constructor(properties, name) {
        super(properties, name, 'AnimationNodeSub2');
        this.sub_amount = 0;
        this.source_names = ['in', 'sub'];
    }
    _process(p_playback_info) {
        const amount = this.sub_amount;
        const pi = _pi(p_playback_info);
        // Out = Sub.Transform3D^(-1) * In.Transform3D
        pi.weight = -amount;
        this.blend_input(1, pi, FilterAction.FILTER_PASS, this.sync);
        pi.weight = 1.0;
        return this.blend_input(0, pi, FilterAction.FILTER_IGNORE, this.sync);
    }
}
Node.registerType('AnimationNodeAdd2', Add2);
Node.registerType('AnimationNodeAdd3', Add3);
Node.registerType('AnimationNodeBlend2', Blend2);
Node.registerType('AnimationNodeBlend3', Blend3);
Node.registerType('AnimationNodeSub2', Sub2);
