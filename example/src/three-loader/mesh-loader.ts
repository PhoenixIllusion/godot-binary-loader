import { BoxGeometry } from "three/src/geometries/BoxGeometry.js";
import { MeshStandardMaterial } from "three/src/materials/MeshStandardMaterial.js";
import { BufferGeometry } from "three/src/core/BufferGeometry.js";
import { Mesh } from "three/src/objects/Mesh.js";
import { SphereGeometry } from "three/src/geometries/SphereGeometry.js";
import { Material } from "three/src/materials/Material.js";
import { CapsuleGeometry } from "three/src/geometries/CapsuleGeometry.js";
import { CylinderGeometry } from "three/src/geometries/CylinderGeometry.js";
import { BufferAttribute } from "three/src/core/BufferAttribute.js";
import { PlaneGeometry } from "three/src/geometries/PlaneGeometry.js";
import { BufferGeometryUtils } from "three/examples/jsm/Addons.js";
import * as GodotMesh from '../loader/instance/types/mesh';
import { MeshType, Node3DTypeMap, Mesh as MeshNS } from "../loader/instance/types/gen";
import { HasSurfaceMaterialOverride } from "../loader/instance/types";
import { MeshWithDefaults } from "../loader/instance/types/mesh";
import { FA } from "@phoenixillusion/godot-scene-reader/process/scene/mesh/mesh_get_arrays.js";
import { configureMaterial } from "./material";


const standardMaterial = new MeshStandardMaterial({ color: 0xffffff });
const meshCache = new Map<MeshType, Mesh | null>()
export async function loadMesh(node: Node3DTypeMap['MeshInstance3D']): Promise<Mesh | null> {
  const mesh = MeshWithDefaults(node.properties.mesh as MeshType);
  const m = mesh;
  const p = 'properties';

  if (meshCache.has(mesh)) {
    const cached = meshCache.get(mesh)!;
    return cached.clone();
  }

  let geo: BufferGeometry[] = [];
  let material: Material[] = [standardMaterial];
  let name: string = mesh.type;
  switch (m.type) {
    case 'BoxMesh': {
      const { subdivide_width, subdivide_height, subdivide_depth, size } = m[p];
      const { x, y, z } = size;
      geo.push(new BoxGeometry(x, y, z, subdivide_width + 1, subdivide_height + 1, subdivide_depth + 1));
      break;
    }
    case 'QuadMesh': {
      const { x, y } = m[p].size;
      geo.push(new PlaneGeometry(x, y));
      break;
    }
    case 'SphereMesh': {
      const { radius, radial_segments, rings } = m[p];
      geo.push(new SphereGeometry(radius, radial_segments, rings));
    }
      break;
    case "CapsuleMesh": {
      const { radius, radial_segments, height, rings } = m[p];
      geo.push(new CapsuleGeometry(radius, height, undefined, radial_segments, rings));
    }
      break;
    case "CylinderMesh": {
      const { top_radius, bottom_radius, height, radial_segments, rings } = m[p];
      geo.push(new CylinderGeometry(top_radius, bottom_radius, height, radial_segments, rings));
    }
      break;
    case "ArrayMesh": {
      material = [];

      function flat(arr: Uint8Array<ArrayBufferLike>[] | FA): number[] {
        return (<number[][]>arr).flat();
      }

      const g_mesh = new GodotMesh.Mesh(m[p]);
      name = m[p].resource_name ?? '<no name>'
      for(const surface of g_mesh.surfaces) {
        const [pos, normal, _tan, _, uv] = surface.arrays;
        const index = surface.arrays[MeshNS.ArrayType.ARRAY_INDEX];
        const bone_index = surface.arrays[MeshNS.ArrayType.ARRAY_BONES];
        const bone_weights = surface.arrays[MeshNS.ArrayType.ARRAY_WEIGHTS];
        let s_material = standardMaterial;
        const s_geo = new BufferGeometry();
        s_geo.setAttribute('position', new BufferAttribute(new Float32Array(flat(pos)), 3));
        if (normal)
          s_geo.setAttribute('normal', new BufferAttribute(new Float32Array(flat(normal)), 3));
        if (uv)
          s_geo.setAttribute('uv', new BufferAttribute(new Float32Array(flat(uv)), 2));
        if(bone_index && bone_weights) {
          s_geo.setAttribute('skinIndex', new BufferAttribute(new Uint16Array(flat(bone_index)), (<number[][]>bone_index)[0].length));
          s_geo.setAttribute('skinWeight', new BufferAttribute(new Float32Array(flat(bone_weights)), (<number[][]>bone_weights)[0].length));
        }
        if (index) {
          for (let i = 0; i < index.length; i += 3) {
            const a = index[i];
            index[i] = index[i + 2];
            index[i + 2] = a;
          }
          s_geo.setIndex(index as number[]);
        }
        const mat_props = surface?.material?.properties;
        if (mat_props) {
          s_material = await configureMaterial(s_material, surface.material!);
        }
        geo.push(s_geo);
        material.push(s_material);
      }
    }
      break;
  }
  if (geo.length) {
    const mat= (node.properties as any as HasSurfaceMaterialOverride)['surface_material_override/0'];
    if (mat?.properties) {
      material[0] = await configureMaterial( <MeshStandardMaterial>material[0], mat);
    }
    let three_mesh: Mesh;
    if (geo.length == 1) {
      three_mesh = new Mesh(geo[0], material[0]);
    } else {
      const combo_geo = BufferGeometryUtils.mergeGeometries(geo, true);
      three_mesh = new Mesh(combo_geo, material);
    }
    three_mesh.name = name;
    if(m.type == 'QuadMesh' && three_mesh) {
      three_mesh.onBeforeRender = (_renderer, _scene, camera, _geo, _material) => {
        _material.depthWrite = false
        three_mesh.quaternion.copy(camera.quaternion);
      }
    }
    meshCache.set(mesh, three_mesh)
    return three_mesh;
  }
  return null;
}
