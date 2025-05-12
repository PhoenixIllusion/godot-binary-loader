import { BoxGeometry } from "three/src/geometries/BoxGeometry.js";
import { MeshStandardMaterial } from "three/src/materials/MeshStandardMaterial.js";
import { BufferGeometry } from "three/src/core/BufferGeometry.js";
import { Mesh } from "three/src/objects/Mesh.js";
import { SphereGeometry } from "three/src/geometries/SphereGeometry.js";
import { Material } from "three/src/materials/Material.js";
import { Color } from "three/src/math/Color.js";
import { CapsuleGeometry } from "three/src/geometries/CapsuleGeometry.js";
import { CylinderGeometry } from "three/src/geometries/CylinderGeometry.js";
import { BufferAttribute } from "three/src/core/BufferAttribute.js";
import { PlaneGeometry } from "three/src/geometries/PlaneGeometry.js";
import { BufferGeometryUtils } from "three/examples/jsm/Addons.js";
import { Texture } from "three/src/textures/Texture.js";
import { MeshWithDefaults, MeshType } from "../loader/instance/types/mesh";
import * as GodotNodes from '../loader/instance/types';
import { getTexture } from "./texture-loader";

const standardMaterial = new MeshStandardMaterial( { color: 0xffffff});
const meshCache = new Map<MeshType, Mesh|null>()
export function loadMesh(node: GodotNodes.Node['MeshInstance3D']): Mesh | null {
  const mesh = MeshWithDefaults(node.properties.mesh);
  const m = mesh;
  const p = 'properties';

  if(meshCache.has(mesh)) {
    const cached = meshCache.get(mesh)!;
    return cached.clone();
  }

  let geo: BufferGeometry[] = [];
  let material: Material[] = [standardMaterial];
  let name: string = mesh.type;
  switch(m.type) {
    case 'BoxMesh':{
      const { subdivide_width, subdivide_height, subdivide_depth, size } = m[p];
      const { x, y, z} = size;
      geo.push(new BoxGeometry(x,y,z, subdivide_width + 1, subdivide_height + 1, subdivide_depth + 1));
      break;
    }
    case 'QuadMesh':{
      const { x, y } = m[p].size;
      geo.push(new PlaneGeometry(x,y));
      break;
    }
    case 'SphereMesh':{
      const { radius, radial_segments, rings } = m[p];
      geo.push(new SphereGeometry(radius, radial_segments, rings));
    }
    break;
    case "CapsuleMesh":{
      const { radius, radial_segments, height, rings } = m[p];
      geo.push(new CapsuleGeometry(radius, height, undefined, radial_segments, rings));
    }
    break;
    case "CylinderMesh":{
      const { top_radius, bottom_radius, height, radial_segments, rings } = m[p];
      geo.push(new CylinderGeometry(top_radius, bottom_radius, height, radial_segments, rings));
    }
    break;
    case "ArrayMesh":{
      material = [];
      const g_mesh = new GodotNodes.Mesh(m[p]);
      name = m[p].resource_name ?? '<no name>'
      g_mesh.surfaces.forEach(surface => {
        const [ pos, normal, _tan, _, uv ] = surface.arrays;
        const index = surface.arrays[12/*ArrayType.ARRAY_INDEX*/];
        let s_material = standardMaterial;
        const s_geo = new BufferGeometry();
        s_geo.setAttribute('position', new BufferAttribute( new Float32Array((<number[][]>pos).flat()), 3 ) );
        if(normal)
          s_geo.setAttribute('normal', new BufferAttribute( new Float32Array((<number[][]>normal).flat()), 3 ) );
        if(uv)
          s_geo.setAttribute('uv', new BufferAttribute( new Float32Array((<number[][]>uv).flat()), 2 ) );
        if(index) {
          for(let i=0;i<index.length;i+=3) {
            const a = index[i];
            index[i] = index[i+2];
            index[i+2] = a;
          }
          s_geo.setIndex(index as number[]);
        }
        const mat_props = surface?.material?.properties;
        if(mat_props) {
          s_material = s_material.clone() as MeshStandardMaterial;
          if(mat_props?.albedo_color) {
            const { r, g, b } = mat_props.albedo_color;
            s_material.color = new Color(r, g, b);
          }
          if(mat_props?.albedo_texture) {
            getTexture(mat_props.albedo_texture.value).then(tex => {
              s_material.map = new Texture(tex.data);
              s_material.map.needsUpdate = true;
              s_material.needsUpdate = true;
            })
          }
          if(mat_props?.roughness !== undefined) {
            s_material.roughness = mat_props.roughness;
          }
          if(mat_props?.roughness_texture) {
            s_material = s_material.clone();
            getTexture(mat_props.roughness_texture.value).then(tex => {
              s_material.roughnessMap = new Texture(tex.data);
              s_material.roughnessMap.needsUpdate = true;
              s_material.needsUpdate = true;
            })
          }
        }
        geo.push(s_geo);
        material.push(s_material);
      });
    }
    break;
  }
  if(geo.length) {
    const mat_prop = node.properties['surface_material_override/0']?.properties;
    if(mat_prop?.albedo_color) {
      const { r, g, b } = mat_prop.albedo_color;
      material[0] = new MeshStandardMaterial({ color: new Color(r, g, b)})
    }
    let mesh: Mesh;
    if(geo.length == 1) {
      mesh = new Mesh(geo[0], material[0]);
    } else {
      const combo_geo = BufferGeometryUtils.mergeGeometries(geo, true);
      mesh = new Mesh(combo_geo, material);
    }
    mesh.name = name;
    return mesh;
  }
  return null;
}