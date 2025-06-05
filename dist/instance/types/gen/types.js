export * as Godot from './index';
export const inf = Number.POSITIVE_INFINITY;
export var create;
(function (create) {
    function AABB(px, py, pz, w, h, d) {
        return { position: Vector3(px, py, pz), size: Vector3(w, h, d) };
    }
    create.AABB = AABB;
    function Rect2(px, py, w, h) {
        return { position: Vector2(px, py), size: Vector2(w, h) };
    }
    create.Rect2 = Rect2;
    function Rect2i(px, py, w, h) {
        return { position: Vector2(px, py), size: Vector2(w, h) };
    }
    create.Rect2i = Rect2i;
    function Color(r, g, b, a) {
        return { r, g, b, a };
    }
    create.Color = Color;
    function Vector2(x, y) {
        return { x, y };
    }
    create.Vector2 = Vector2;
    function Vector3(x, y, z) {
        return { x, y, z };
    }
    create.Vector3 = Vector3;
    function Vector3i(x, y, z) {
        return { x, y, z };
    }
    create.Vector3i = Vector3i;
    function Vector4(x, y, z, w) {
        return { x, y, z, w };
    }
    create.Vector4 = Vector4;
    function Vector4i(x, y, z, w) {
        return { x, y, z, w };
    }
    create.Vector4i = Vector4i;
    function Quaternion(x, y, z, w) {
        return { x, y, z, w };
    }
    create.Quaternion = Quaternion;
    function NodePath(...names) {
        return { names, absolute: false };
    }
    create.NodePath = NodePath;
    function PackedVector2Array() {
        return [];
    }
    create.PackedVector2Array = PackedVector2Array;
    function PackedVector3Array() {
        return [];
    }
    create.PackedVector3Array = PackedVector3Array;
    function PackedStringArray() {
        return [];
    }
    create.PackedStringArray = PackedStringArray;
    function Vector2i(x, y) {
        return { x, y };
    }
    create.Vector2i = Vector2i;
    function PackedByteArray(...args) {
        return new Uint8Array(args);
    }
    create.PackedByteArray = PackedByteArray;
    function PackedFloat32Array(...args) {
        return new Float32Array(args);
    }
    create.PackedFloat32Array = PackedFloat32Array;
    function PackedInt32Array(...args) {
        return new Int32Array(args);
    }
    create.PackedInt32Array = PackedInt32Array;
    function PackedInt64Array(...args) {
        return new BigInt64Array(args);
    }
    create.PackedInt64Array = PackedInt64Array;
    function PackedColorArray(...args) {
        const ret = [];
        for (let i = 0; i < args.length; i++) {
            const [r, g, b, a] = args.slice(i);
            ret.push({ r, g, b, a });
        }
        return ret;
    }
    create.PackedColorArray = PackedColorArray;
    function Basis(x0, y0, z0, x1, y1, z1, x2, y2, z2) {
        return {
            rows: [Vector3(x0, y0, z0), Vector3(x1, y1, z1), Vector3(x2, y2, z2)]
        };
    }
    create.Basis = Basis;
    function Transform3D(x0, y0, z0, x1, y1, z1, x2, y2, z2, ox, oy, oz) {
        const basis = Basis(x0, y0, z0, x1, y1, z1, x2, y2, z2);
        const origin = Vector3(ox, oy, oz);
        return { basis, origin };
    }
    create.Transform3D = Transform3D;
    function RID() {
        return {};
    }
    create.RID = RID;
    function Transform2D(x0, y0, x1, y1, x2, y2) {
        return {
            columns: [Vector2(x0, y0), Vector2(x1, y1), Vector2(x2, y2)]
        };
    }
    create.Transform2D = Transform2D;
    function Plane(x, y, z, d) {
        return { normal: { x, y, z }, d };
    }
    create.Plane = Plane;
    function Projection(x0, y0, z0, w0, x1, y1, z1, w1, x2, y2, z2, w2, x3, y3, z3, w3) {
        return { columns: [Vector4(x0, y0, z0, w0), Vector4(x1, y1, z1, w1), Vector4(x2, y2, z2, w2), Vector4(x3, y3, z3, w3)] };
    }
    create.Projection = Projection;
})(create || (create = {}));
