import { Basis } from "@phoenixillusion/godot-scene-reader/parse/binary/variant.js";
import { GridMapNode } from "./node";

export interface IndexKey {
  x: number;
  y: number;
  z: number;
}
export interface Cell {
  item: number;
  rot: number;
  layer: number;
}
export type IndexKeyCell = IndexKey & Cell;

function MakeBasis(xx: number, xy: number, xz: number, yx: number, yy: number, yz: number, zx: number, zy: number, zz: number) {
  const basis = new Basis();
  basis.rows[0] = { type: 'vector3', x: xx, y: xy, z: xz }
  basis.rows[1] = { type: 'vector3', x: yx, y: yy, z: yz }
  basis.rows[2] = { type: 'vector3', x: zx, y: zy, z: zz }
  return basis;
}

export const ORTHO_BASIS = [
  MakeBasis(1, 0, 0, 0, 1, 0, 0, 0, 1),
  MakeBasis(0, -1, 0, 1, 0, 0, 0, 0, 1),
  MakeBasis(-1, 0, 0, 0, -1, 0, 0, 0, 1),
  MakeBasis(0, 1, 0, -1, 0, 0, 0, 0, 1),
  MakeBasis(1, 0, 0, 0, 0, -1, 0, 1, 0),
  MakeBasis(0, 0, 1, 1, 0, 0, 0, 1, 0),
  MakeBasis(-1, 0, 0, 0, 0, 1, 0, 1, 0),
  MakeBasis(0, 0, -1, -1, 0, 0, 0, 1, 0),
  MakeBasis(1, 0, 0, 0, -1, 0, 0, 0, -1),
  MakeBasis(0, 1, 0, 1, 0, 0, 0, 0, -1),
  MakeBasis(-1, 0, 0, 0, 1, 0, 0, 0, -1),
  MakeBasis(0, -1, 0, -1, 0, 0, 0, 0, -1),
  MakeBasis(1, 0, 0, 0, 0, 1, 0, -1, 0),
  MakeBasis(0, 0, -1, 1, 0, 0, 0, -1, 0),
  MakeBasis(-1, 0, 0, 0, 0, -1, 0, -1, 0),
  MakeBasis(0, 0, 1, -1, 0, 0, 0, -1, 0),
  MakeBasis(0, 0, 1, 0, 1, 0, -1, 0, 0),
  MakeBasis(0, -1, 0, 0, 0, 1, -1, 0, 0),
  MakeBasis(0, 0, -1, 0, -1, 0, -1, 0, 0),
  MakeBasis(0, 1, 0, 0, 0, -1, -1, 0, 0),
  MakeBasis(0, 0, 1, 0, -1, 0, 1, 0, 0),
  MakeBasis(0, 1, 0, 0, 0, 1, 1, 0, 0),
  MakeBasis(0, 0, -1, 0, 1, 0, 1, 0, 0),
  MakeBasis(0, -1, 0, 0, 0, -1, 1, 0, 0)
]
export function parseCell(vals: Uint32Array) {
  const res: IndexKeyCell[] = [];
  const dv = new DataView(vals.buffer);
  for (let i = 0; i < vals.length; i += 3) {
    const offset = i * 4;
    const x = dv.getInt16(offset, true);
    const y = dv.getInt16(offset + 2, true);
    const z = dv.getInt16(offset + 4, true);
    const item = dv.getUint16(offset + 8, true);
    const rot_layer = dv.getUint16(offset + 10, true);
    const rot = rot_layer & 0x1F;
    const layer = rot_layer >> 5;
    res.push({ x, y, z, item, rot, layer })
  }
  return res;
}
export function Defaults(gridmap: GridMapNode) {
  gridmap.cell_center_x ??= true;
  gridmap.cell_center_y ??= true;
  gridmap.cell_center_z ??= true;
  gridmap.cell_octant_size ??= 8;
  gridmap.cell_scale ??= 1;
  gridmap.cell_size ??= { x: 2, y: 2, z: 2 };
  gridmap.collision_layer ??= 1;
  gridmap.collision_mask ??= 1;
  gridmap.collision_priority ??= 1;
  return gridmap;
}