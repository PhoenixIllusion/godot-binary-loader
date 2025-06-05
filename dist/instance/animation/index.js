import { Animation } from "./animation";
import { BlendTree } from "./blend-tree";
import { BlendSpace1D } from "./blendspace-1d";
import { BlendSpace2D } from "./blendspace-2d";
import { OneShot } from "./one-shot";
import { Output } from "./output";
import { Sub2, Blend2, Blend3, Add2, Add3 } from "./sync";
import { TimeScale } from "./time-scale";
import { TimeSeek } from "./time-seek";
import { Transition } from "./transition";
const Nodes = {
    AnimationNodeSub2: Sub2,
    AnimationNodeBlendSpace2D: BlendSpace2D,
    AnimationNodeOutput: Output,
    AnimationNodeStateMachine: undefined,
    AnimationNodeAnimation: Animation,
    AnimationNodeBlend2: Blend2,
    AnimationNodeBlend3: Blend3,
    AnimationNodeTimeScale: TimeScale,
    AnimationNodeOneShot: OneShot,
    AnimationNodeTimeSeek: TimeSeek,
    AnimationNodeAdd2: Add2,
    AnimationNodeAdd3: Add3,
    AnimationNodeBlendTree: BlendTree,
    AnimationNodeBlendSpace1D: BlendSpace1D,
    AnimationNodeTransition: Transition
};
export function create(node, name) {
    const ctor = Nodes[node.type] || null;
    if (ctor) {
        return new ctor(node.properties, name);
    }
    throw new Error(`Unknown Node Type ${node.type}`);
}
