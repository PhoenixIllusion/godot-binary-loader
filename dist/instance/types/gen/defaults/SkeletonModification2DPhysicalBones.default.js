import { DefaultSkeletonModification2D } from './SkeletonModification2D.default';
export function DefaultSkeletonModification2DPhysicalBones(item) {
    DefaultSkeletonModification2D(item);
    item.physical_bone_chain_length ?? (item.physical_bone_chain_length = 0);
}
