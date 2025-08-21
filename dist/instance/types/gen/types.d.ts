import { cTexFile } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2.js";
import { RID } from './index.js';
export * as Godot from './index.js';
export type V2Like = {
    x: number;
    y: number;
};
export type V3Like = {
    x: number;
    y: number;
    z: number;
};
export type V4Like = {
    x: number;
    y: number;
    z: number;
    w: number;
};
export declare const inf: number;
export type float = number;
export type int = number;
export type bool = boolean;
export type String = string;
export type StringName = string;
export type Vector2 = V2Like;
export type Vector2i = V2Like;
export type Vector3 = V3Like;
export type Vector3i = V3Like;
export type Vector4 = V4Like;
export type Vector4i = V4Like;
export type Color = {
    r: number;
    g: number;
    b: number;
    a: number;
};
export type Texture = {
    type: 'ctex';
    value: cTexFile;
};
export type Basis = {
    rows: [Vector3, Vector3, Vector3];
};
export type AABB = {
    position: Vector3;
    size: Vector3;
};
export type Rect2 = {
    position: Vector2;
    size: Vector2;
};
export type Projection = {
    columns: [Vector4, Vector4, Vector4, Vector4];
};
export type NodePath = {
    names: string[];
    subnames: string[];
    absolute: boolean;
};
export type Rect2i = Rect2;
export type Quaternion = Vector4;
export type Transform2D = {
    columns: [Vector2, Vector2, Vector2];
};
export type Transform3D = {
    origin: Vector3;
    basis: Basis;
};
export type Plane = {
    normal: Vector3;
    d: number;
};
export type Array = any[];
export type PackedColorArray = Color[];
export type PackedStringArray = string[];
export type PackedVector2Array = Vector2[];
export type PackedVector3Array = Vector3[];
export type PackedVector4Array = Vector4[];
export type PackedByteArray = Uint8Array;
export type PackedFloat32Array = Float32Array;
export type PackedInt32Array = Int32Array;
export type PackedInt64Array = BigInt64Array;
export type PackedF64Array = Float64Array;
export declare namespace create {
    function AABB(px: number, py: number, pz: number, w: number, h: number, d: number): AABB;
    function Rect2(px: number, py: number, w: number, h: number): Rect2;
    function Rect2i(px: number, py: number, w: number, h: number): Rect2i;
    function Color(r: number, g: number, b: number, a: number): Color;
    function Vector2(x: number, y: number): Vector2;
    function Vector3(x: number, y: number, z: number): Vector3;
    function Vector3i(x: number, y: number, z: number): Vector3i;
    function Vector4(x: number, y: number, z: number, w: number): Vector4;
    function Vector4i(x: number, y: number, z: number, w: number): Vector4;
    function Quaternion(x: number, y: number, z: number, w: number): Quaternion;
    function NodePath(...names: string[]): NodePath;
    function PackedVector2Array(): Vector2[];
    function PackedVector3Array(): Vector3[];
    function PackedStringArray(): PackedStringArray;
    function Vector2i(x: number, y: number): Vector2;
    function PackedByteArray(...args: number[]): PackedByteArray;
    function PackedFloat32Array(...args: number[]): PackedFloat32Array;
    function PackedInt32Array(...args: number[]): PackedInt32Array;
    function PackedInt64Array(...args: bigint[]): PackedInt64Array;
    function PackedColorArray(...args: number[]): PackedColorArray;
    function Basis(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): Basis;
    function Transform3D(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ox: number, oy: number, oz: number): Transform3D;
    function RID(): RID;
    function Transform2D(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): Transform2D;
    function Plane(x: number, y: number, z: number, d: number): Plane;
    function Projection(x0: number, y0: number, z0: number, w0: number, x1: number, y1: number, z1: number, w1: number, x2: number, y2: number, z2: number, w2: number, x3: number, y3: number, z3: number, w3: number): Projection;
}
