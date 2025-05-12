import { cTexFile } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2.js";
import { Vector3, Vector3i, Vector2, Vector4, Color, NodePath, Transform3D, RID } from './index'

export type V2Like = { x: number, y: number };
export type V3Like = { x: number, y: number, z: number };
export type V4Like = { x: number, y: number, z: number, w: number };
export const inf = Number.POSITIVE_INFINITY;

export type float = number;
export type int = number;
export type bool = boolean;
export type String = string;
export type StringName = string;
export type Texture = { type: 'ctex', value: cTexFile }
export type Basis = { rows: [Vector3, Vector3, Vector3] }
export type AABB = { position: Vector3, size: Vector3 }
export type Rect2 = { position: Vector2, size: Vector2 }
export type Projection = { columns: [Vector4, Vector4, Vector4, Vector4] }
export type Rect2i = Rect2;
export type Quaternion = Vector4;
export type Transform2D = { columns: [Vector2, Vector2, Vector2] }
export type Plane = { normal: Vector3, d: number  }
export type Array = any[];
export type PackedColorArray = Color[];
export type PackedVector3Array = Vector3[];
export type PackedStringArray = string[];
export type PackedVector2Array = Vector2[];

export type PackedByteArray = Uint8Array;
export type PackedFloat32Array = Float32Array;
export type PackedInt32Array = Int32Array;
export type PackedInt64Array = BigInt64Array;

export namespace create {
  export function AABB(px: number, py: number, pz: number, w: number, h: number, d: number): AABB {
    return { position: Vector3(px,py,pz), size: Vector3(w,h,d) };
  }
  export function Rect2(px: number, py: number, w: number, h: number): Rect2 {
    return { position: Vector2(px,py), size: Vector2(w,h)};
  }
  export function Rect2i(px: number, py: number, w: number, h: number): Rect2i {
    return { position: Vector2(px,py), size: Vector2(w,h)};
  }
  export function Color(r: number, g: number, b: number, a: number): Color {
    return { r, g, b, a } as Color;
  }
  export function Vector2(x: number, y: number): Vector2 {
    return { x, y}
  }
  export function Vector3(x: number, y: number, z: number): Vector3 {
    return { x, y, z};
  }
  export function Vector3i(x: number, y: number, z: number): Vector3i {
    return { x, y, z};
  }
  export function Vector4(x: number, y: number, z: number, w: number): Vector4 {
    return { x, y, z, w};
  }
  export function Vector4i(x: number, y: number, z: number, w: number): Vector4 {
    return { x, y, z, w};
  }
  export function Quaternion(x: number, y: number, z: number, w: number): Quaternion {
    return { x, y, z, w};
  }
  export function NodePath(... names: string[]): NodePath {
    return { names, absolute: false } as NodePath
  }
  export function PackedVector2Array(): Vector2[] {
    return []
  }
  export function PackedVector3Array(): Vector3[] {
    return [];
  }
  export function PackedStringArray(): PackedStringArray {
    return [];
  }
  export function Vector2i(x: number, y: number): Vector2 {
    return { x, y}
  }
  export function PackedByteArray(... args: number[]): PackedByteArray {
    return new Uint8Array(args);
  }
  export function PackedFloat32Array(... args: number[]): PackedFloat32Array {
    return new Float32Array(args);
  }
  export function PackedInt32Array(... args: number[]): PackedInt32Array {
    return new Int32Array(args);
  }
  
  export function PackedInt64Array(... args: bigint[]): PackedInt64Array {
    return new BigInt64Array(args);
  }

  export function PackedColorArray(... args: number[]): PackedColorArray {
    const ret: Color[] = [];
    for(let i=0; i < args.length; i++) {
      const [r,g,b,a] = args.slice(i);
      ret.push({r,g,b,a} as Color);
    }
    return ret;
  }
  export function Basis( x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): Basis {
    return {
      rows: [ Vector3(x0,y0,y0), Vector3(x1,y1,z1), Vector3(x2,y2,z2)]
    }
  }
  export function Transform3D(
    x0: number, y0: number, z0: number,
    x1: number, y1: number, z1: number,
    x2: number, y2: number, z2: number,
    ox: number, oy: number, oz: number): Transform3D {
    const basis = Basis(x0, y0, z0, x1, y1, z1, x2, y2, z2);
    const origin = Vector3(ox, oy, oz);
    return { basis, origin};
  }
  export function RID(): RID {
    return {}
  }
  export function Transform2D( x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): Transform2D {
    return {
      columns: [ Vector2(x0,y0), Vector2(x1,y1), Vector2(x2,y2)]
    }
  }
  export function Plane(x: number, y: number, z: number, d: number): Plane {
    return { normal: { x, y, z}, d };
  }
  export function Projection( 
    x0: number, y0: number, z0: number, w0: number,
    x1: number, y1: number, z1: number, w1: number,
    x2: number, y2: number, z2: number, w2: number,
    x3: number, y3: number, z3: number, w3: number,): Projection {
      return { columns:[ Vector4(x0,y0,z0,w0), Vector4(x1,y1,z1,w1), Vector4(x2,y2,z2,w2), Vector4(x3,y3,z3,w3)] };   
  }
}