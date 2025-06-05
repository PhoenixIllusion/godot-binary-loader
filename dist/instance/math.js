import { mat4, quat, vec3 } from "gl-matrix";
export const CMP_EPSILON = 0.00001;
export function is_zero_approx(val) {
    return val < CMP_EPSILON && val > -CMP_EPSILON;
}
function lerp(p_from, p_to, p_weight) { return p_from + (p_to - p_from) * p_weight; }
export function is_equal_approx(a, b) {
    // Check for exact equality first, required to handle "infinity" values.
    if (a == b) {
        return true;
    }
    // Then check for approximate equality.
    let tolerance = CMP_EPSILON * Math.abs(a);
    if (tolerance < CMP_EPSILON) {
        tolerance = CMP_EPSILON;
    }
    return Math.abs(a - b) < tolerance;
}
export function is_less_or_equal_approx(a, b) {
    return a < b || is_equal_approx(a, b);
}
export function is_less_approx(a, b) {
    return a < b && !is_equal_approx(a, b);
}
export function is_greater_or_equal_approx(a, b) {
    return a > b || is_equal_approx(a, b);
}
export function is_greater_approx(a, b) {
    return a > b && !is_equal_approx(a, b);
}
export function fposmod(n, d) {
    return ((n % d) + d) % d;
}
export function fract(x) {
    return x - Math.floor(x);
}
export function pingpong(value, length) {
    return (length != 0.0) ? Math.abs(fract((value - length) / (length * 2.0)) * length * 2.0 - length) : 0.0;
}
export function signbit(value) {
    return value < 0 ? 1 : 0;
}
export function CLAMP(v, min, max) {
    return v < min ? min : v > max ? max : v;
}
export const round = Math.round;
export function cubic_interpolate(p_from, p_to, p_pre, p_post, p_weight) {
    return 0.5 *
        ((p_from * 2.0) +
            (-p_pre + p_to) * p_weight +
            (2.0 * p_pre - 5.0 * p_from + 4.0 * p_to - p_post) * (p_weight * p_weight) +
            (-p_pre + 3.0 * p_from - 3.0 * p_to + p_post) * (p_weight * p_weight * p_weight));
}
export function cubic_interpolate_in_time(p_from, p_to, p_pre, p_post, p_weight, p_to_t, p_pre_t, p_post_t) {
    /* Barry-Goldman method */
    const t = lerp(0.0, p_to_t, p_weight);
    const a1 = lerp(p_pre, p_from, p_pre_t == 0 ? 0.0 : (t - p_pre_t) / -p_pre_t);
    const a2 = lerp(p_from, p_to, p_to_t == 0 ? 0.5 : t / p_to_t);
    const a3 = lerp(p_to, p_post, p_post_t - p_to_t == 0 ? 1.0 : (t - p_to_t) / (p_post_t - p_to_t));
    const b1 = lerp(a1, a2, p_to_t - p_pre_t == 0 ? 0.0 : (t - p_pre_t) / (p_to_t - p_pre_t));
    const b2 = lerp(a2, a3, p_post_t == 0 ? 1.0 : t / p_post_t);
    return lerp(b1, b2, p_to_t == 0 ? 0.5 : t / p_to_t);
}
export function cubic_interpolate_vec3(res, p_a, p_b, p_pre_a, p_post_b, p_weight) {
    res[0] = cubic_interpolate(p_a[0], p_b[0], p_pre_a[0], p_post_b[0], p_weight);
    res[1] = cubic_interpolate(p_a[1], p_b[1], p_pre_a[1], p_post_b[1], p_weight);
    res[2] = cubic_interpolate(p_a[2], p_b[2], p_pre_a[2], p_post_b[2], p_weight);
    return res;
}
export function cubic_interpolate_in_time_vec3(res, p_a, p_b, p_pre_a, p_post_b, p_weight, p_b_t, p_pre_a_t, p_post_b_t) {
    res[0] = cubic_interpolate_in_time(p_a[0], p_b[0], p_pre_a[0], p_post_b[0], p_weight, p_b_t, p_pre_a_t, p_post_b_t);
    res[1] = cubic_interpolate_in_time(p_a[1], p_b[1], p_pre_a[1], p_post_b[1], p_weight, p_b_t, p_pre_a_t, p_post_b_t);
    res[2] = cubic_interpolate_in_time(p_a[2], p_b[2], p_pre_a[2], p_post_b[2], p_weight, p_b_t, p_pre_a_t, p_post_b_t);
    return res;
}
const tmp_q = {
    from_q: quat.create(),
    pre_q: quat.create(),
    to_q: quat.create(),
    post_q: quat.create(),
    from_inv: quat.create(),
    to_inv: quat.create(),
    ln_from: quat.create(),
    ln_to: quat.create(),
    ln_pre: quat.create(),
    ln_post: quat.create(),
    ln: quat.create(),
    q1: quat.create(),
    q2: quat.create(),
    q: quat.create(),
    vec3: vec3.create()
};
function quat_exp(out, q) {
    const [x, y, z] = q;
    const src_v = vec3.set(tmp_q.vec3, x, y, z);
    const theta = vec3.length(src_v);
    vec3.normalize(src_v, src_v);
    if (theta < CMP_EPSILON) {
        return quat.set(out, 0, 0, 0, 1);
    }
    {
        const [x, y, z] = src_v;
        return quat.set(out, x, y, z, theta);
    }
}
function quat_log(out, q) {
    let [x, y, z, w] = q;
    if (!(Math.abs(w) > 1 - CMP_EPSILON)) {
        const r = (1.0) / Math.sqrt(1 - w * w);
        x *= r;
        y *= r;
        z *= r;
    }
    const a = 2 * Math.acos(w); //angle
    return quat.set(out, x * a, y * a, z * a, 0);
}
export function spherical_cubic_interpolate(res, p_a, p_b, p_pre_a, p_post_b, p_weight) {
    const from_q = quat.copy(tmp_q.from_q, p_a);
    const pre_q = quat.copy(tmp_q.pre_q, p_pre_a);
    const to_q = quat.copy(tmp_q.to_q, p_b);
    const post_q = quat.copy(tmp_q.post_q, p_post_b);
    const flip1 = signbit(quat.dot(from_q, pre_q));
    if (flip1)
        quat.scale(pre_q, pre_q, -1);
    const flip2 = signbit(quat.dot(from_q, to_q));
    if (flip2)
        quat.scale(to_q, to_q, -1);
    const flip3 = flip2 ? quat.dot(to_q, post_q) <= 0 : signbit(quat.dot(to_q, post_q));
    if (flip3)
        quat.scale(post_q, post_q, -1);
    const from_inv = quat.invert(tmp_q.from_inv, from_q);
    const to_inv = quat.invert(tmp_q.to_inv, to_q);
    const ln_from = quat.set(tmp_q.ln_from, 0, 0, 0, 0);
    const q = tmp_q.q;
    const ln_to = quat_log(tmp_q.ln_to, quat.multiply(q, from_inv, to_q));
    const ln_pre = quat_log(tmp_q.ln_pre, quat.multiply(q, from_inv, pre_q));
    const ln_post = quat_log(tmp_q.ln_post, quat.multiply(q, from_inv, post_q));
    const ln = quat.set(tmp_q.ln, 0, 0, 0, 0);
    ln[0] = cubic_interpolate(ln_from[0], ln_to[0], ln_pre[0], ln_post[0], p_weight);
    ln[1] = cubic_interpolate(ln_from[1], ln_to[1], ln_pre[1], ln_post[1], p_weight);
    ln[2] = cubic_interpolate(ln_from[2], ln_to[2], ln_pre[2], ln_post[2], p_weight);
    const q1 = quat_exp(tmp_q.q1, quat.multiply(tmp_q.q1, from_q, ln));
    quat_log(ln_to, quat.multiply(q, to_inv, from_q));
    quat.set(ln_to, 0, 0, 0, 0);
    ;
    quat_log(ln_pre, quat.multiply(q, to_inv, pre_q));
    quat_log(ln_post, quat.multiply(q, to_inv, post_q));
    quat.set(ln, 0, 0, 0, 0);
    ln[0] = cubic_interpolate(ln_from[0], ln_to[0], ln_pre[0], ln_post[0], p_weight);
    ln[1] = cubic_interpolate(ln_from[1], ln_to[1], ln_pre[1], ln_post[1], p_weight);
    ln[2] = cubic_interpolate(ln_from[2], ln_to[2], ln_pre[2], ln_post[2], p_weight);
    const q2 = quat_exp(tmp_q.q2, quat.multiply(tmp_q.q2, to_q, ln));
    return quat.slerp(res, q1, q2, p_weight);
}
export function spherical_cubic_interpolate_in_time(res, p_a, p_b, p_pre_a, p_post_b, p_weight, p_b_t, p_pre_a_t, p_post_b_t) {
    const from_q = quat.copy(tmp_q.from_q, p_a);
    const pre_q = quat.copy(tmp_q.pre_q, p_pre_a);
    const to_q = quat.copy(tmp_q.to_q, p_b);
    const post_q = quat.copy(tmp_q.post_q, p_post_b);
    const flip1 = signbit(quat.dot(from_q, pre_q));
    if (flip1)
        quat.scale(pre_q, pre_q, -1);
    const flip2 = signbit(quat.dot(from_q, to_q));
    if (flip2)
        quat.scale(to_q, to_q, -1);
    const flip3 = flip2 ? quat.dot(to_q, post_q) <= 0 : signbit(quat.dot(to_q, post_q));
    if (flip3)
        quat.scale(post_q, post_q, -1);
    const from_inv = quat.invert(tmp_q.from_inv, from_q);
    const to_inv = quat.invert(tmp_q.to_inv, to_q);
    const ln_from = quat.set(tmp_q.ln_from, 0, 0, 0, 0);
    const q = tmp_q.q;
    const ln_to = quat_log(tmp_q.ln_to, quat.multiply(q, from_inv, to_q));
    const ln_pre = quat_log(tmp_q.ln_pre, quat.multiply(q, from_inv, pre_q));
    const ln_post = quat_log(tmp_q.ln_post, quat.multiply(q, from_inv, post_q));
    const ln = quat.set(tmp_q.ln, 0, 0, 0, 0);
    ln[0] = cubic_interpolate_in_time(ln_from[0], ln_to[0], ln_pre[0], ln_post[0], p_weight, p_b_t, p_pre_a_t, p_post_b_t);
    ln[1] = cubic_interpolate_in_time(ln_from[1], ln_to[1], ln_pre[1], ln_post[1], p_weight, p_b_t, p_pre_a_t, p_post_b_t);
    ln[2] = cubic_interpolate_in_time(ln_from[2], ln_to[2], ln_pre[2], ln_post[2], p_weight, p_b_t, p_pre_a_t, p_post_b_t);
    const q1 = quat_exp(tmp_q.q1, quat.multiply(tmp_q.q1, from_q, ln));
    quat_log(ln_to, quat.multiply(q, to_inv, from_q));
    quat.set(ln_to, 0, 0, 0, 0);
    ;
    quat_log(ln_pre, quat.multiply(q, to_inv, pre_q));
    quat_log(ln_post, quat.multiply(q, to_inv, post_q));
    quat.set(ln, 0, 0, 0, 0);
    ln[0] = cubic_interpolate_in_time(ln_from[0], ln_to[0], ln_pre[0], ln_post[0], p_weight, p_b_t, p_pre_a_t, p_post_b_t);
    ln[1] = cubic_interpolate_in_time(ln_from[1], ln_to[1], ln_pre[1], ln_post[1], p_weight, p_b_t, p_pre_a_t, p_post_b_t);
    ln[2] = cubic_interpolate_in_time(ln_from[2], ln_to[2], ln_pre[2], ln_post[2], p_weight, p_b_t, p_pre_a_t, p_post_b_t);
    const q2 = quat_exp(tmp_q.q2, quat.multiply(tmp_q.q2, to_q, ln));
    return quat.slerp(res, q1, q2, p_weight);
}
export function transform3d_to_mat4(transform, out = mat4.create()) {
    mat4.identity(out);
    const r = transform.basis.rows;
    const t = transform.origin;
    mat4.set(out, r[0].x, r[1].x, r[2].x, 0, r[0].y, r[1].y, r[2].y, 0, r[0].z, r[1].z, r[2].z, 0, t.x, t.y, t.z, 1);
    return out;
}
const _lut = [];
for (var i = 0; i < 256; i++) {
    _lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
}
export function generateUUID() {
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
    const d0 = Math.random() * 0xffffffff | 0;
    const d1 = Math.random() * 0xffffffff | 0;
    const d2 = Math.random() * 0xffffffff | 0;
    const d3 = Math.random() * 0xffffffff | 0;
    const uuid = _lut[d0 & 0xff] + _lut[d0 >> 8 & 0xff] + _lut[d0 >> 16 & 0xff] + _lut[d0 >> 24 & 0xff] + '-' +
        _lut[d1 & 0xff] + _lut[d1 >> 8 & 0xff] + '-' + _lut[d1 >> 16 & 0x0f | 0x40] + _lut[d1 >> 24 & 0xff] + '-' +
        _lut[d2 & 0x3f | 0x80] + _lut[d2 >> 8 & 0xff] + '-' + _lut[d2 >> 16 & 0xff] + _lut[d2 >> 24 & 0xff] +
        _lut[d3 & 0xff] + _lut[d3 >> 8 & 0xff] + _lut[d3 >> 16 & 0xff] + _lut[d3 >> 24 & 0xff];
    // .toLowerCase() here flattens concatenated strings to save heap memory space.
    return uuid.toLowerCase();
}
