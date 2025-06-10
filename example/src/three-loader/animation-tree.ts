import { Object3D } from "three/src/core/Object3D.js";
import { SceneInstance } from "@phoenixillusion/godot-binary-loader/instance/scene.js";
import { AnimationTreeInstance } from '@phoenixillusion/godot-binary-loader/instance/animation-tree.js'
import { TrackCacheTransform } from '@phoenixillusion/godot-binary-loader/instance/animation/anim-cache.js'
import { Skeleton } from "three/src/objects/Skeleton.js";


export class ThreeAnimationTree extends AnimationTreeInstance {
  constructor(node: SceneInstance.Node) {
    super(node);
  }

  _apply_transforms: (() => void)[] = []
  configure(objectMap: Map<SceneInstance.Node, Object3D>) {
    const apply = (obj3d: Object3D, transx: TrackCacheTransform) => {
      if (this.root_motion_track_str != transx.path_str) {
        if (transx.loc_used)
          this._apply_transforms.push(() => obj3d.position.set(transx.loc[0], transx.loc[1], transx.loc[2]));
        if (transx.scale_used)
          this._apply_transforms.push(() => obj3d.scale.set(transx.scale[0], transx.scale[1], transx.scale[2]))
        if (transx.rot_used)
          this._apply_transforms.push(() => obj3d.quaternion.set(transx.rot[0], transx.rot[1], transx.rot[2], transx.rot[3]))
      }
    }
    for (const track of Object.values(this.track_cache)) {
      if (track.type == 'position_3d') {
        const transx = track as TrackCacheTransform;
        const object = objectMap.get(track.object_id!);
        if (object) {
          const { skeleton } = object.userData as { skeleton: Skeleton };
          if (transx.bone_idx && skeleton) {
            const bone = skeleton.getBoneByName(transx.bone_idx.name.replace(/\./g, '_'));
            if (bone)
              apply(bone, transx)
            else
              console.error("Unable to find bone: ", transx.bone_idx)
          } else {
            apply(object, transx)
          }
        }
      }
    }
  }

  process_animation(delta: number): void {
    super.process_animation(delta);
    this._apply_transforms.forEach(cb => cb())
  }
}