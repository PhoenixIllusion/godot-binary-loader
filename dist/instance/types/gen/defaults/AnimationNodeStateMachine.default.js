import { DefaultAnimationRootNode } from './AnimationRootNode.default';
export function DefaultAnimationNodeStateMachine(item) {
    DefaultAnimationRootNode(item);
    item.allow_transition_to_self ?? (item.allow_transition_to_self = false);
    item.reset_ends ?? (item.reset_ends = false);
    item.state_machine_type ?? (item.state_machine_type = 0);
}
