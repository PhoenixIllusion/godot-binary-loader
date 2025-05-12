
import { Transform3D } from "@phoenixillusion/godot-scene-reader/parse/binary/variant.js";
import { MeshLibraryItem, MeshLibraryInstance, MeshLibrary, GridMapNode } from "./types";
import * as GridMap from './types/grid-map';

export interface GridMapItemInstance {
  item: MeshLibraryItem;
  scale: number;
  transforms: Transform3D[]
}

export class MeshLibraryTool {
  instance: MeshLibraryInstance;
  constructor(meshLibrary: MeshLibrary) {
    this.instance = new MeshLibraryInstance(meshLibrary);
  }
  allocateInstances(gridmap: GridMapNode, cells: GridMap.IndexKeyCell[]): GridMapItemInstance[] {
    const mesh: Record<number,GridMapItemInstance> = {};

    cells.forEach(cell => {
      if(!mesh[cell.item]) {
        mesh[cell.item] = {item: this.instance.item[cell.item], scale: gridmap.cell_scale, transforms: []};
      }
      const entry = mesh[cell.item];
      const x = cell.x + (gridmap.cell_center_x ? 0.5: 0);
      const y = cell.y + (gridmap.cell_center_y ? 0.5: 0);
      const z = cell.z + (gridmap.cell_center_z ? 0.5: 0);
      const s = gridmap.cell_size;
      if(entry){
        const v3 = { type: 'vector3', x: x * s.x, y: y * s.y, z: z * s.z };
        const transform: Transform3D = { type: 'transform3d', origin: v3, basis: GridMap.ORTHO_BASIS[cell.rot] };
        entry.transforms.push(transform); 
      }
    })
    
    return Object.values(mesh);
  }
}

const meshLibraryCache = new Map<MeshLibrary,MeshLibraryTool>();
export function getMeshLibrary<T extends MeshLibraryTool>( meshLibrary: MeshLibrary, factory: (lib: MeshLibrary) => T): T {
  const res = meshLibraryCache.get(meshLibrary);
  if(!res) {
    const newInst = factory(meshLibrary);
    meshLibraryCache.set(meshLibrary, newInst);
    return newInst;
  }
  return res as T;
}