import { Nil, Transform3D } from "@phoenixillusion/godot-scene-reader/parse/binary/variant.js";
import { _get_array_from_surface } from "@phoenixillusion/godot-scene-reader/process/scene/mesh/mesh_get_arrays.js"
import { cTexFile } from "@phoenixillusion/godot-scene-reader";
import { MeshType } from "./mesh";


export type MeshLibrary = {
  [key: `item/${number}/mesh`]: MeshType,
  [key: `item/${number}/mesh_transform`]: Transform3D,
  [key: `item/${number}/name`]: string,
  [key: `item/${number}/navigation_mesh`]: MeshType | Nil,
  [key: `item/${number}/navigation_mesh_transform`]: Transform3D,
  [key: `item/${number}/preview`]: { type: 'ctex', value: cTexFile },
  [key: `item/${number}/shapes`]: (ShapeType | Transform3D)[]
}
export interface MeshLibraryItem {
  mesh: MeshType;
  mesh_transform: Transform3D;
  name: string;
  navigation_mesh: MeshType | null;
  navigation_mesh_tranform: Transform3D;
  preview: cTexFile;
  shapes: ShapeType | Transform3D;
}
export class MeshLibraryInstance {
  item: MeshLibraryItem[];
  constructor(meshLib: MeshLibrary) {
    this.item = [];
    for (let i = 0; i < Object.keys(meshLib).length / 8; i++) {
      if (meshLib[`item/${i}/mesh`]) {
        const entry = {} as MeshLibraryItem;
        (<(keyof MeshLibraryItem)[]>['mesh', 'mesh_transform', 'name', 'navigation_mesh', 'navigation_mesh_transform', 'preview', 'shapes']).forEach(k => {
          entry[k] = (meshLib as any)[`item/${i}/${k}`]
        });
        this.item.push(entry);
      }
    }
  }
}