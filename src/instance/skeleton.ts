import { unwrap_property_array } from "@phoenixillusion/godot-scene-reader/process/scene/unwrap.js";
import { Skeleton3D, Skin } from "./types/gen/index.js";
import { Quaternion, Transform3D, Vector3 } from "./types/gen/types.js";


export class SkinInstance {
  bind: SkinInstance.Bind[];
  constructor(skin: Skin) {
    this.bind = unwrap_property_array(skin, "bind", ["bone", "name", "pose"])
  }
}
export namespace SkinInstance {
  export interface Bind {
    bone: number;
    name: string;
    pose: Transform3D;
  }
}


export class Skeleton3DInstance {
  bone: Skeleton3DInstance.Bone[];
  constructor(skeleton: Skeleton3D) {
    this.bone = unwrap_property_array(skeleton, "bones", ["enabled", "name", "parent", "position", "rest", "rotation", "scale"])
  }
}
export namespace Skeleton3DInstance {
  export interface Bone {
    enabled: boolean;
    name: string;
    parent: number;
    position: Vector3;
    rest: Transform3D;
    rotation: Quaternion;
    scale: Vector3;
  }
}