import { TrackType } from "@phoenixillusion/godot-scene-reader/process/scene/animation.js";
import { quat, vec3 } from "gl-matrix";
import { _interpolate } from "./interpolate.js";
import { SceneInstance } from "../scene.js";
import { Skeleton3DInstance } from "../skeleton.js";
import { NodePath } from "../types/gen/types.js";

export class TrackCache {
  root_motion = false;
  setup_pass = 0;
  type: TrackType = 'animation';
  path = { type: 'node_path', names: [''], subnames: [], absolute: false } as NodePath;
  path_str: string = '';
  blend_idx = -1;
  object_id: SceneInstance.Node | null = null;
  total_weight = 0.0;
}
export class TrackCacheTransform extends TrackCache {
  type: TrackType = 'position_3d';
  loc_used = false;
  rot_used = false;
  scale_used = false;
  readonly init_loc = vec3.set(vec3.create(), 0, 0, 0);
  readonly init_rot = quat.set(quat.create(), 0, 0, 0, 1);
  readonly init_scale = vec3.set(vec3.create(), 1, 1, 1);
  readonly loc: vec3 = vec3.create();
  readonly rot: quat = quat.create();
  readonly scale: vec3 = vec3.create();
  bone_idx: Skeleton3DInstance.Bone | null = null;
  skeleton_id: Skeleton3DInstance | null = null;
}
export class TrackCacheValue extends TrackCache {
  type: TrackType = 'value';
  init_value!: any
  value!: any;
  subpath: string[] = []

  is_init = false;
  use_continuous = false;
  use_discrete = false;
  is_using_angle = false;
  is_variant_interpolatable = true;

}
export class TrackCacheMethod extends TrackCache {
  type: TrackType = 'method';

}
export class TrackCacheBlendShape extends TrackCache {
  type: TrackType = 'blend_shape';
  value = 0;
  init_value = 0;
}
export class TrackCacheAudio extends TrackCache {
  type: TrackType = 'audio';

}
export class TrackCacheAnimation extends TrackCache {

}

export class RootMotion {
  readonly loc = vec3.set(vec3.create(), 0, 0, 0);
  readonly rot = quat.set(quat.create(), 0, 0, 0, 1);
  readonly scale = vec3.set(vec3.create(), 1, 1, 1);
}
