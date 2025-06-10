import { AnimationNodeAdd2, AnimationNodeAdd3, AnimationNodeBlend2, AnimationNodeBlend3, AnimationNodeSub2 } from '../types/gen';
import { PlaybackInfo, NodeTimeInfo, _pi, FilterAction } from './blend';
import { Node } from './node';
export abstract class SyncNode extends Node {
  sync!: boolean;
}
export abstract class BlendNode extends SyncNode {
  blend_amount = 0;
}
export abstract class AddNode extends SyncNode {
  add_amount = 0;
}
export abstract class SubNode extends SyncNode {
  sub_amount = 0;
}

export class Add2 extends AddNode {
  source_names = ['in', 'add'];
  constructor(properties: AnimationNodeAdd2, name: string) {
    super(properties, name, 'AnimationNodeAdd2');
  }
  _process(p_playback_info: PlaybackInfo): NodeTimeInfo {
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
  source_names = ['-add', 'in', '+add'];
  constructor(properties: AnimationNodeAdd3, name: string) {
    super(properties, name, 'AnimationNodeAdd3');
  }
  _process(p_playback_info: PlaybackInfo): NodeTimeInfo {
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
  source_names = ['in', 'blend'];
  constructor(properties: AnimationNodeBlend2, name: string) {
    super(properties, name, 'AnimationNodeBlend2');
  }
  _process(p_playback_info: PlaybackInfo): NodeTimeInfo {
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
  source_names = ['-blend', 'in', '+blend'];
  constructor(properties: AnimationNodeBlend3, name: string) {
    super(properties, name, 'AnimationNodeBlend3');
  }
  _process(p_playback_info: PlaybackInfo): NodeTimeInfo {
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
  sub_amount = 0;
  source_names = ['in', 'sub'];
  constructor(properties: AnimationNodeSub2, name: string) {
    super(properties, name, 'AnimationNodeSub2');
  }
  _process(p_playback_info: PlaybackInfo): NodeTimeInfo {
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
