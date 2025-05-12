import { Matrix4 } from "three/src/math/Matrix4.js";
import { SceneInstance } from "../loader/instance/scene";
import { Basis, Transform3D } from "@phoenixillusion/godot-scene-reader/parse/binary/variant.js";
import { Object3D } from "three/src/core/Object3D.js";
import { Vector3, Vector3Like } from "three/src/math/Vector3.js";
import { Group } from "three/src/objects/Group.js";
import { unwrap_properties } from "../loader/instance/util";
import { InstancedMesh } from "three/src/objects/InstancedMesh.js";
import { getMeshLibrary, MeshLibraryTool } from "../loader/instance/mesh-library";
import { GridMapNode, HasSurfaceMaterialOverride, MeshLibrary, Node } from "../loader/instance/types";
import * as GridMap from '../loader/instance/types/grid-map'
import * as GodotNodes from '../loader/instance/types';
import { loadMesh } from "./mesh-loader";


class ThreeMeshLibraryTool extends MeshLibraryTool {
  constructor(meshLibrary: MeshLibrary) {
    super(meshLibrary);
  }
  getInstances(gridmap: GridMapNode, cells: GridMap.IndexKeyCell[]): InstancedMesh[] {
    const instances = super.allocateInstances(gridmap, cells);
    const result: InstancedMesh[] = [];
    instances.forEach(inst => {
      const mesh = loadMesh({properties: { ... inst.item} as HasSurfaceMaterialOverride, type: 'MeshInstance3D'} as Node['MeshInstance3D']);
      if(mesh) {
        const { transforms } = inst;
        const instanced = new InstancedMesh(mesh.geometry, mesh.material, transforms.length);
        transforms.forEach((transform3d,idx) => {
          const matrix = new Matrix4().identity();
          setTransform3D(matrix, transform3d);
          instanced.setMatrixAt(idx, matrix)
        });
        result.push(instanced);
      }
    });
    return result;
  }
}

function v3(vlike: Vector3Like): Vector3 {
  return new Vector3().copy(vlike);
}

function setTransform3D( matrix4: Matrix4, transform3d: { basis: Basis, origin: Vector3Like }):void {
  const rows = transform3d.basis.rows;
  matrix4.makeBasis(
    new Vector3(rows[0].x, rows[1].x, rows[2].x),
    new Vector3(rows[0].y, rows[1].y, rows[2].y),
    new Vector3(rows[0].z, rows[1].z, rows[2].z)
  );
  matrix4.setPosition(v3(transform3d.origin));
}
function trySetTransform(node3d: Object3D, transform: Transform3D) {
  if(transform) {
    setTransform3D(node3d.matrix, transform);
    node3d.matrix.decompose(node3d.position, node3d.quaternion, node3d.scale);
  }
}

export function buildScene(node: SceneInstance.Node): Object3D | null {
  const godotNode = {type: node.type, properties: unwrap_properties(node.properties)} as GodotNodes.GodotNodeType;
  let node3d: Object3D | null = null;
  switch(godotNode.type) {
    case 'Node':
      node3d = new Group();
    break;
    case "CharacterBody3D":
    case "RigidBody3D":
    case "GridMap":
    case "MeshInstance3D":
    case "Skeleton3D":
    case 'Area3D':
    case 'CollisionShape3D':
    case 'Node3D':{
      node3d = new Object3D();
      node3d.name = node.name;
      const { transform } = godotNode.properties; 
      trySetTransform(node3d, transform);
    }
  }
  switch(godotNode.type) {
    case "GridMap":
      const p = GridMap.Defaults(godotNode.properties);
      const cells = GridMap.parseCell(new Uint32Array(p.data.cells.buffer));
      const meshLib = getMeshLibrary(p.mesh_library.properties, t => new ThreeMeshLibraryTool(t));
      const meshes = meshLib.getInstances(p, cells);
      meshes.forEach(inst => {
        node3d?.add(inst);
      })
      break;
    case 'MeshInstance3D':{
      const { mesh } = godotNode.properties; 
      if(mesh) {
        node3d = loadMesh(godotNode);
      }
      if(node3d) {
        const { transform } = godotNode.properties; 
        trySetTransform(node3d, transform);
      }
      break;
    }
  }

  node?.children?.forEach(child => {
    const c = buildScene(child);
    if(c) {
      node3d?.add(c);
    }
  });
  return node3d;
}
