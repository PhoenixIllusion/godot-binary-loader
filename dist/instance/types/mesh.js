import { DefaultBoxMesh } from "./gen/defaults/BoxMesh.default";
import { DefaultQuadMesh } from "./gen/defaults/QuadMesh.default";
import { DefaultSphereMesh } from "./gen/defaults/SphereMesh.default";
import { DefaultCapsuleMesh } from "./gen/defaults/CapsuleMesh.default";
import { DefaultCylinderMesh } from "./gen/defaults/CylinderMesh.default";
import { Surface } from "@phoenixillusion/godot-scene-reader/process/scene/mesh/mesh.js";
export function MeshWithDefaults(mesh) {
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
export class Mesh {
    constructor(properties) {
        this.surfaces = [];
        this.name = properties.resource_name || "<no_name>";
        this.blend_shape_mode = properties.blend_shape_mode;
        this.surfaces = properties._surfaces?.map(x => new Surface(x)) || [];
    }
}
