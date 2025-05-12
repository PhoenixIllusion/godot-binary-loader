import { AABB, Vector4 } from "@phoenixillusion/godot-scene-reader/parse/binary/variant.js";
import { ARRAY_FLAG_MASK, BlendShapeMode, PrimitiveType } from "@phoenixillusion/godot-scene-reader/process/scene/mesh/mesh_types.js";
import { _get_array_from_surface } from "@phoenixillusion/godot-scene-reader/process/scene/mesh/mesh_get_arrays.js"
import { V3Like, V2Like } from "./type";
import { MaterialType } from "./material";

interface MeshSurface {
  format: bigint;
  primitive: PrimitiveType;

  vertex_count: number;
  index_count: number;

  aabb: AABB;
  uv_scale: Vector4;

  vertex_data: Uint8Array;
  attribute_data?: Uint8Array;
  index_data?: Uint8Array;
  skin_data?: Uint8Array;

  material?: MaterialType;
}

interface MeshProperties {
  BoxMesh: { size: V3Like, subdivide_width: number, subdivide_height: number, subdivide_depth: number },
  QuadMesh: { size: V2Like },
  SphereMesh: { height: number, radius: number, rings: number, radial_segments: number },
  CapsuleMesh: { height: number, radius: number, rings: number, radial_segments: number },
  CylinderMesh: { bottom_radius: number, height: number, radial_segments: number, rings: number, top_radius: number },
  ArrayMesh: { resource_name?: string, blend_shape_mode?: number, _surfaces?: MeshSurface[] }
}
export function MeshWithDefaults<T extends MeshType>(mesh: T): T {
  switch (mesh.type) {
    case 'BoxMesh': {
      const p = mesh.properties;
      p.size ??= { x: 1, y: 1, z: 1 };
      p.subdivide_width ??= 0;
      p.subdivide_height ??= 0;
      p.subdivide_depth ??= 0;
      break;
    }
    case 'QuadMesh': {
      const p = mesh.properties;
      p.size ??= { x: 1, y: 1 };
      break;
    }
    case 'SphereMesh': {
      const p = mesh.properties;
      p.height ??= 1
      p.radius ??= 0.5
      p.rings ??= 32
      p.radial_segments ??= 64;
      break;
    }
    case "CapsuleMesh": {
      const p = mesh.properties;
      p.height ??= 2
      p.radius ??= 0.5
      p.rings ??= 8
      p.radial_segments ??= 64;
      break;
    }
    case "CylinderMesh": {
      const p = mesh.properties;
      p.bottom_radius ??= 0.5
      p.height ??= 2
      p.radial_segments ??= 64
      p.rings ??= 4
      p.top_radius = 0.5
      break;
    }
  }
  return mesh;
}

type MeshNames = keyof MeshProperties;

type MeshTypeMap = {
  [K in MeshNames]: { type: K; properties: MeshProperties[K] };
};
export type MeshType = MeshTypeMap[keyof MeshTypeMap];

export class Surface {
  primitive: PrimitiveType;

  aabb: AABB;
  uv_scale: Vector4;

  vertex_count: number;
  index_count: number;

  arrays: ReturnType<typeof _get_array_from_surface>;
  material?: MaterialType;

  constructor(surface: MeshSurface) {
    this.primitive = surface.primitive;
    this.aabb = surface.aabb;
    this.uv_scale = surface.uv_scale;

    this.vertex_count = surface.vertex_count;
    this.index_count = surface.index_count;

    this.material = surface.material;
    this.primitive = surface.primitive;

    const format = Number(surface.format & ARRAY_FLAG_MASK);
    const { vertex_data, attribute_data, skin_data, index_data } = surface;
    this.arrays = _get_array_from_surface(format, vertex_data.buffer, attribute_data?.buffer || null, skin_data?.buffer || null,
      this.vertex_count, index_data?.buffer || null, this.index_count, this.aabb, this.uv_scale);
  }
}

export class Mesh {
  name: string;
  blend_shape_mode: BlendShapeMode;
  surfaces: Surface[] = [];
  constructor(properties: MeshProperties['ArrayMesh']) {
    this.name = properties.resource_name || "<no_name>";
    this.blend_shape_mode = properties.blend_shape_mode!;
    this.surfaces = properties._surfaces!.map(x => new Surface(x))
  }
}
