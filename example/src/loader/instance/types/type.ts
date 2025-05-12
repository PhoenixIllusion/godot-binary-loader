import { cTexFile } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2.js";
import { Color, Vector3 } from "@phoenixillusion/godot-scene-reader/parse/binary/variant.js";
export { Color, Vector3 };
export type V2Like = { x: number, y: number };
export type V3Like = { x: number, y: number, z: number };
export type V4Like = { x: number, y: number, z: number, w: number };


export type float = number;
export type int = number;
export type bool = boolean;
export type Texture = { type: 'ctex', value: cTexFile }

export function _Vector3(x: number, y: number, z: number): Vector3 {
  return { type: 'vector3', x, y, z};
}
export function _Color(r: number, g: number, b: number, a: number): Color {
  return { type: 'color', r, g, b, a };
}