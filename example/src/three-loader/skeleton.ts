import { Skeleton } from "three/src/objects/Skeleton.js";
import { Bone } from "three/src/objects/Bone.js";
import { setTransform3D } from "./scene-builder";
import { SkinnedMesh } from "three/src/objects/SkinnedMesh.js";
import { Matrix4 } from "three/src/math/Matrix4.js";
import { Mesh } from "three/src/objects/Mesh.js";
import { GodotPck } from "./pck-loader";
import { Object3D } from "three/src/core/Object3D.js";
import { unwrap_properties } from "@phoenixillusion/godot-scene-reader/process/scene/unwrap.js";

import { Skeleton3DInstance, SkinInstance } from "@phoenixillusion/godot-binary-loader/instance/skeleton.js";
import { Skeleton3D } from "@phoenixillusion/godot-binary-loader/instance/types/gen/index.js";
import { NodeExtType } from "@phoenixillusion/godot-binary-loader/instance/types";
import { SceneInstance } from "@phoenixillusion/godot-binary-loader/instance/scene.js";

export function makeSkeleton(skin_inst: SkinInstance, skeleton_inst: Skeleton3DInstance): Skeleton {
  const bindMap = new Map<string, SkinInstance.Bind>();
  skin_inst.bind.forEach(b => { bindMap.set(b.name, b) });
  const matrix = new Matrix4();
  const bones: Bone[] = [];
  skeleton_inst.bone.forEach(b => {
    const bind = bindMap.get(b.name)!;

    const bone = new Bone();
    bone.name = b.name.replace(/\./g, '_');
    setTransform3D(matrix, bind.pose);
    matrix.invert().decompose(bone.position, bone.quaternion, bone.scale);
    bones.push(bone);
    if (b.parent < 0xffffffff) {
      const p = bones[b.parent];
      p.updateWorldMatrix(true, false);
      bone.updateWorldMatrix(true, false);
      matrix.copy(p.matrixWorld).invert().multiply(bone.matrixWorld);
      matrix.decompose(bone.position, bone.quaternion, bone.scale);
      p.add(bone);
    }
  });
  return new Skeleton(bones);;
}

export function setupSkeleton(scene: GodotPck, skeleton3d: Skeleton3D, child: SceneInstance.Node, obj: Object3D | null, skeleton: { skeleton?: Skeleton }) {

  if (child.type == 'MeshInstance3D' && obj?.type == 'Mesh') {
    const child_node = { type: child.type, properties: unwrap_properties(child.properties) } as NodeExtType;
    if ('skin' in child_node.properties) {
      const mesh_o = obj as Mesh;
      const mesh = new SkinnedMesh(mesh_o.geometry, mesh_o.material);
      if (!skeleton.skeleton) {
        const skin_inst = new SkinInstance(child_node.properties.skin.properties);
        const skeleton_inst = new Skeleton3DInstance(skeleton3d);
        const skel = skeleton.skeleton = makeSkeleton(skin_inst, skeleton_inst);
        scene.skeletons.push(skel);
        mesh.add(skel.bones[0]);
        mesh.bind(skeleton.skeleton);
        skeleton_inst.bone.forEach((b, idx) => {
          const bone = skel.bones[idx];
          const poseMtrx = new Matrix4();
          setTransform3D(poseMtrx, b.rest);
          poseMtrx.decompose(bone.position, bone.quaternion, bone.scale);
        });
      } else {
        mesh.bind(skeleton.skeleton);
      }
      mesh.name = obj.name;
      obj = mesh;
    }
  }
  return obj;
} 