import { BlendShapeMode } from "@phoenixillusion/godot-scene-reader/process/scene/mesh/mesh_types.js";
import { _get_array_from_surface } from "@phoenixillusion/godot-scene-reader/process/scene/mesh/mesh_get_arrays.js"
import { MaterialType, MeshProperties, MeshType } from "./gen/index.js";
import { DefaultBoxMesh } from "./gen/defaults/BoxMesh.default.js";
import { DefaultQuadMesh } from "./gen/defaults/QuadMesh.default.js";
import { DefaultSphereMesh } from "./gen/defaults/SphereMesh.default.js";
import { DefaultCapsuleMesh } from "./gen/defaults/CapsuleMesh.default.js";
import { DefaultCylinderMesh } from "./gen/defaults/CylinderMesh.default.js";
import { Surface, SurfaceData } from "@phoenixillusion/godot-scene-reader/process/scene/mesh/mesh.js";

export function MeshWithDefaults<T extends MeshType>(mesh: T): T {
  switch (mesh.type) {
    case 'BoxMesh': {
      const p = mesh.properties;
      DefaultBoxMesh(p);
      break;
    }
    case 'QuadMesh': {
      const p = mesh.properties;
      DefaultQuadMesh(p);
      break;
    }
    case 'SphereMesh': {
      const p = mesh.properties;
      DefaultSphereMesh(p);
      break;
    }
    case "CapsuleMesh": {
      const p = mesh.properties;
      DefaultCapsuleMesh(p);
      break;
    }
    case "CylinderMesh": {
      const p = mesh.properties;
      DefaultCylinderMesh(p);
      break;
    }
  }
  return mesh;
}


interface HasSurfaces {
  _surfaces?: SurfaceData<MaterialType>[];
}


export class Mesh {
  name: string;
  blend_shape_mode: BlendShapeMode;
  surfaces: Surface<MaterialType>[] = [];
  constructor(properties: MeshProperties['ArrayMesh']) {
    this.name = properties.resource_name || "<no_name>";
    this.blend_shape_mode = properties.blend_shape_mode!;
    this.surfaces = (properties as HasSurfaces)._surfaces?.map(x => new Surface(x)) || []
  }
}
