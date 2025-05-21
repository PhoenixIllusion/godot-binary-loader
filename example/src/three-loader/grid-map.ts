import * as GridMap from '@phoenixillusion/godot-scene-reader/process/scene/grid_map.js'
import { Matrix4 } from "three/src/math/Matrix4.js";
import { InstancedMesh } from "three/src/objects/InstancedMesh.js";
import * as GodotNode from '../loader/instance/types/node';
import { loadMesh } from "./mesh-loader";
import { MeshInstance3D, MeshType, Shape3DType, StaticBody3D } from "../loader/instance/types/gen";
import { StaticBodyData } from "./physics";
import { setTransform3D } from "./scene-builder";

import { MeshLibrary, MeshLibraryItem, meshlibray_extract_items } from "@phoenixillusion/godot-scene-reader/process/scene/mesh_library.js";

type MeshLibraryGen = MeshLibrary<MeshType, Shape3DType>;
type MeshLibraryItemGen = MeshLibraryItem<MeshType, Shape3DType>;

const meshLibraryCache = new Map<MeshLibraryGen,MeshLibraryItemGen[]>();
function getMeshLibrary(meshLibrary: MeshLibraryGen) {
  const res = meshLibraryCache.get(meshLibrary);
  if (!res) {
    const newInst = meshlibray_extract_items(meshLibrary);
    meshLibraryCache.set(meshLibrary, newInst);
    return newInst;
  }
  return res;
}

export async function gridmap_get_instance_mesh(gridmap: GodotNode.GridMap): Promise<{instances: InstancedMesh[], static_bodies: StaticBodyData[]}> {
    const items = getMeshLibrary(gridmap.mesh_library.properties);
    //gridmap.cell_scale = 1;
    //GridMap.DefaultGridMap(gridmap);
    //Object.assign(gridmap.cell_size, { x: 1, y: 1, z: 1});
    const instances = GridMap.gridmap_item_instances(gridmap, items);
    const result: InstancedMesh[] = [];

    const { physics_material } = gridmap;
    const static_body_physics: StaticBody3D = <StaticBody3D>{ physics_material_override: physics_material ? { type: 'PhysicsMaterial', properties: physics_material } : undefined };
    const static_bodies: StaticBodyData[] = [];
    for(const inst of instances) {
      const data = GridMap.gridmap_cell_data(inst);
      const mesh = await loadMesh({ properties: { ...inst.item } as any as MeshInstance3D, type: 'MeshInstance3D' });

      const static_body: StaticBodyData = {
        properties: static_body_physics,
        root_transforms: [], 
        shapes: []
      }
      if (mesh) {
        const instanced = new InstancedMesh(mesh.geometry.clone(), mesh.material, data.root_transforms.length);
        instanced.name = mesh.name;

        const mesh_transform = new Matrix4();
        data.root_transforms.forEach((root, idx) => {
          const root_transform = new Matrix4();
          setTransform3D(root_transform, root)
          static_body.root_transforms.push(new Matrix4().copy(root_transform));
          setTransform3D(mesh_transform, data.mesh_transform);
          instanced.setMatrixAt(idx, root_transform.multiply(mesh_transform));
        });
        result.push(instanced);
      }
      data.collision.forEach(({shape, transform}) => {
          const matrix = new Matrix4().identity();
          setTransform3D(matrix, transform);
          static_body.shapes.push({shape, matrix});
      })
      static_bodies.push(static_body);
    };
    return { instances: result, static_bodies };
  }