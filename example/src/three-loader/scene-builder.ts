import { Matrix4 } from 'three/src/math/Matrix4.js';
import { SceneInstance } from '../loader/instance/scene';
import { Object3D } from 'three/src/core/Object3D.js';
import { Vector3, Vector3Like } from 'three/src/math/Vector3.js';
import { Group } from 'three/src/objects/Group.js';
import { NodeExtType } from '../loader/instance/types';
import { loadMesh } from './mesh-loader';
import { Camera3D } from '../loader/instance/types/gen';
import { Basis, Transform3D } from '../loader/instance/types/gen/types';
import { loadWorldEnvironment } from './environment';
import { DefaultDirectionalLight3D } from '../loader/instance/types/gen/defaults/DirectionalLight3D.default';
import { DirectionalLight } from 'three/src/lights/DirectionalLight.js';
import { DefaultCamera3D } from '../loader/instance/types/gen/defaults/Camera3D.default';
import { GodotPck } from './pck-loader';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera.js';
import { setupSkeleton } from './skeleton';
import { ThreeAnimation } from './animation';
import { gridmap_get_instance_mesh } from './grid-map';
import { unwrap_properties, unwrap_property } from '@phoenixillusion/godot-scene-reader/process/scene/unwrap.js';
import { VariantType } from '@phoenixillusion/godot-scene-reader/parse/binary/variant.js';
import { PhysicsShapeData } from './physics';
import { DefaultCharacterBody3D } from '../loader/instance/types/gen/defaults/CharacterBody3D.default';
import { DefaultRigidBody3D } from '../loader/instance/types/gen/defaults/RigidBody3D.default';
import { DefaultStaticBody3D } from '../loader/instance/types/gen/defaults/StaticBody3D.default';
import { DefaultArea3D } from '../loader/instance/types/gen/defaults/Area3D.default';
import { ThreeAnimationTree } from './animation-tree';
import { Skeleton } from 'three';
import { unwrap_properties_cached } from '../loader/instance/util';

function v3(vlike: Vector3Like): Vector3 {
  return new Vector3().copy(vlike);
}

export function setTransform3D(matrix4: Matrix4, transform3d: { basis: Basis, origin: Vector3Like }): void {
  const rows = transform3d.basis.rows;
  matrix4.makeBasis(
    new Vector3(rows[0].x, rows[1].x, rows[2].x),
    new Vector3(rows[0].y, rows[1].y, rows[2].y),
    new Vector3(rows[0].z, rows[1].z, rows[2].z)
  );
  matrix4.setPosition(v3(transform3d.origin));
}
function trySetTransform(node3d: Object3D, transform: Transform3D) {
  if (transform) {
    setTransform3D(node3d.matrix, transform);
    node3d.matrix.decompose(node3d.position, node3d.quaternion, node3d.scale);
  }
}

function getTransformMatrix(g_node: NodeExtType): Matrix4 {
  const matrix = new Matrix4().identity();
  if ('transform' in g_node.properties && 'basis' in g_node.properties.transform) {
    setTransform3D(matrix, g_node.properties.transform);
  }
  return matrix;
}

function collectPhysicsShapes(collision_object_3d: PhysicsShapeData[]) {
  return function (child: SceneInstance.Node, obj: Object3D | null): Object3D | null {
    const g_node = { type: child.type, properties: unwrap_properties(child.properties) } as NodeExtType;
    if (g_node.type == 'CollisionShape3D') {
      const { shape } = g_node.properties;
      const matrix = getTransformMatrix(g_node);
      collision_object_3d.push({ shape, matrix });
    }
    return obj;
  }
}

export async function buildScene(scene: GodotPck, parent: Object3D, node: SceneInstance.Node): Promise<Object3D | null> {
  const godotNode = { type: node.type, properties: unwrap_properties_cached(node.properties) } as NodeExtType;
  let node3d: Object3D | null = null;
  let onChild = (_child: SceneInstance.Node, obj: Object3D | null): Object3D | null => obj
  switch (godotNode.type) {
    case 'Node':
      node3d = new Group();
      break;
    case 'CharacterBody3D':
    case 'GridMap':
    case 'MeshInstance3D':
    case 'Skeleton3D':
    case 'Area3D':
    case 'RigidBody3D':
    case 'StaticBody3D':
    case 'WorldEnvironment':
    case 'AnimationPlayer':
    case 'AnimationTree':
    case 'VehicleBody3D':
    case 'VehicleWheel3D':
    case 'Node3D': {
      node3d = new Object3D();
      node3d.name = node.name;
      if ('transform' in godotNode.properties) {
        const { transform } = godotNode.properties;
        trySetTransform(node3d, transform);
      }
    }
  }
  switch (godotNode.type) {
    case 'Camera3D':
      const camera = godotNode.properties;
      DefaultCamera3D(camera);
      switch (camera.projection) {
        case Camera3D.ProjectionType.PROJECTION_PERSPECTIVE:
          const cam = new PerspectiveCamera(camera.fov, window.innerWidth / window.innerHeight, camera.near, camera.far);
          trySetTransform(cam, camera.transform);
          scene.camera.push(cam);
          node3d = cam;
          node3d.name = node.name;
      }
      break;
    case 'AnimationPlayer': {
      const animationPlayer = new ThreeAnimation(node, parent);
      node3d!.userData.animationPlayer = animationPlayer;
      scene.animations.push(animationPlayer);
      }
      break;
    case 'AnimationTree': {
        const animationTree = new ThreeAnimationTree(node);
        node3d!.userData.animationTree = animationTree;
        scene.animationTrees.push(animationTree);
      }
      break;
    case 'Area3D':
    case 'CharacterBody3D':
    case 'RigidBody3D':
    case 'StaticBody3D': {
      const collision_object_3d: PhysicsShapeData[] = [];
      onChild = collectPhysicsShapes(collision_object_3d);
      switch (godotNode.type) {
        case 'CharacterBody3D': {
          const properties = godotNode.properties;
          DefaultCharacterBody3D(properties);
          scene.physics.character3d_bodies.push({ properties, node: node3d!, shapes: collision_object_3d });
        }; break;
        case 'RigidBody3D': {
          const properties = godotNode.properties;
          DefaultRigidBody3D(properties);
          scene.physics.rigid_bodies.push({ properties, node: node3d!, shapes: collision_object_3d })
        }; break;
        case 'Area3D': {
          const properties = godotNode.properties;
          DefaultArea3D(properties);
          scene.physics.areas.push({ properties, node: node3d!, shapes: collision_object_3d })
        }; break;
        case 'StaticBody3D': {
          parent.add(node3d!); node3d?.updateWorldMatrix(true, false);
          parent.remove(node3d!);
          const properties = godotNode.properties;
          DefaultStaticBody3D(properties);
          scene.physics.static_bodies.push({ properties, root_transforms: [node3d!.matrixWorld], shapes: collision_object_3d });
        }; break;
      }
    }
      break;
    case 'Skeleton3D': {
      const skeleton: { skeleton?: Skeleton } = node3d!.userData;
      onChild = (child, obj) => setupSkeleton(scene, godotNode.properties, child, obj, skeleton);
      }
      break;
    case 'DirectionalLight3D':
      const dirLight = godotNode.properties;
      DefaultDirectionalLight3D(dirLight);
      const light = new DirectionalLight();
      light.position.y += 10;
      node3d = new Object3D();
      node3d.add(light);
      trySetTransform(node3d, dirLight.transform);
      break;
    case 'WorldEnvironment':
      loadWorldEnvironment(node3d!, godotNode);
      break;
    case 'GridMap': {
      const p = godotNode.properties;
      const grid_map = await gridmap_get_instance_mesh(p);
      for (const inst of grid_map.instances) {
        node3d?.add(inst);
        scene.mesh.push(inst);
      }
      parent.add(node3d!); node3d?.updateWorldMatrix(true, false);
      const root_matrix = node3d!.matrixWorld.clone();
      grid_map.static_bodies.forEach(body => {
        body.root_transforms.forEach(matrix => {
          matrix.premultiply(root_matrix)
        })
        scene.physics.static_bodies.push(body);
      })
    }
      break;
    case 'MeshInstance3D': {
      const { mesh } = godotNode.properties;
      if (mesh) {
        const meshInst = node3d = await loadMesh(godotNode);
        if (meshInst) {
          scene.mesh.push(meshInst);
        }
      }
      if (node3d) {
        node3d.name = node.name;
        const { transform } = godotNode.properties;
        trySetTransform(node3d, transform);
      }
      break;
    }
  }
  if (!node3d) {
    console.log(node.type)
  }
  if(node3d) {
    scene.maps.object3d.set(node, node3d);
    node3d.userData.node = node;
    node3d.userData.godot = godotNode;
    if('visible' in godotNode.properties) {
      node3d.visible = godotNode.properties.visible;
    }
  }
  if (node3d && node?.children)
    for (const child of node.children) {
      let c = await buildScene(scene, node3d, child);
      c = onChild(child, c);
      if (c) {
        node3d?.add(c);
      }
    };
  return node3d;
}
