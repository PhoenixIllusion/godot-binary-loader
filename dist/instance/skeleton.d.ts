import { Skeleton3D, Skin } from "./types/gen";
import { Quaternion, Transform3D, Vector3 } from "./types/gen/types";
export declare class SkinInstance {
    bind: SkinInstance.Bind[];
    constructor(skin: Skin);
}
export declare namespace SkinInstance {
    interface Bind {
        bone: number;
        name: string;
        pose: Transform3D;
    }
}
export declare class Skeleton3DInstance {
    bone: Skeleton3DInstance.Bone[];
    constructor(skeleton: Skeleton3D);
}
export declare namespace Skeleton3DInstance {
    interface Bone {
        enabled: boolean;
        name: string;
        parent: number;
        position: Vector3;
        rest: Transform3D;
        rotation: Quaternion;
        scale: Vector3;
    }
}
