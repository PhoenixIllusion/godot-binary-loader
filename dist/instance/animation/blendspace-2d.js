import { unwrap_property_paths } from "@phoenixillusion/godot-scene-reader/process/scene/unwrap.js";
import Delaunator from "delaunator";
import { AnimationNodeBlendSpace2D } from "../types/gen";
import { DefaultAnimationNodeBlendSpace2D } from "../types/gen/defaults/AnimationNodeBlendSpace2D.default";
import { BlendSpace, convertRaw } from "./blendspace";
import { Animation } from './animation';
import { NodeTimeInfo, _pi, FilterAction } from "./blend";
import { vec2 } from 'gl-matrix';
import { is_zero_approx } from "../math";
const tmp = [vec2.create(), vec2.create(), vec2.create(), vec2.create()];
function cross(a, b) {
    return a[0] * b[1] - a[1] * b[0];
}
function is_point_in_triangle(s, a, b, c) {
    const an = vec2.sub(tmp[0], a, s);
    const bn = vec2.sub(tmp[1], b, s);
    const cn = vec2.sub(tmp[2], c, s);
    const orientation = cross(an, bn) > 0;
    if ((cross(bn, cn) > 0) != orientation) {
        return false;
    }
    return (cross(cn, an) > 0) == orientation;
}
function get_closest_point_to_segment(p_point, p_segment) {
    const p = vec2.sub(tmp[0], p_point, p_segment[0]);
    const n = vec2.sub(tmp[1], p_segment[1], p_segment[0]);
    const l2 = vec2.squaredLength(n);
    if (l2 < 1e-20) {
        return p_segment[0]; // Both points are the same, just give any.
    }
    const d = vec2.dot(n, p) / l2;
    if (d <= 0.0) {
        return p_segment[0]; // Before first point.
    }
    else if (d >= 1.0) {
        return p_segment[1]; // After first point.
    }
    else {
        return vec2.scaleAndAdd(vec2.create(), p_segment[0], n, d); // Inside.
    }
}
const distance_squared_to = vec2.squaredDistance;
const distance_to = vec2.distance;
function vec2_is_equal_approx(a, b) {
    return is_zero_approx(a[0] - b[0]) && is_zero_approx(a[1] - b[1]);
}
function _blend_triangle(p_pos, p_points, r_weights) {
    if (vec2_is_equal_approx(p_pos, p_points[0])) {
        r_weights[0] = 1;
        r_weights[1] = 0;
        r_weights[2] = 0;
        return;
    }
    if (vec2_is_equal_approx(p_pos, p_points[1])) {
        r_weights[0] = 0;
        r_weights[1] = 1;
        r_weights[2] = 0;
        return;
    }
    if (vec2_is_equal_approx(p_pos, p_points[2])) {
        r_weights[0] = 0;
        r_weights[1] = 0;
        r_weights[2] = 1;
        return;
    }
    const v0 = vec2.sub(tmp[0], p_points[1], p_points[0]);
    const v1 = vec2.sub(tmp[1], p_points[2], p_points[0]);
    const v2 = vec2.sub(tmp[2], p_pos, p_points[0]);
    const d00 = vec2.dot(v0, v0);
    const d01 = vec2.dot(v0, v1);
    const d11 = vec2.dot(v1, v1);
    const d20 = vec2.dot(v2, v0);
    const d21 = vec2.dot(v2, v1);
    const denom = (d00 * d11 - d01 * d01);
    if (denom == 0) {
        r_weights[0] = 1;
        r_weights[1] = 0;
        r_weights[2] = 0;
        return;
    }
    const v = (d11 * d20 - d01 * d21) / denom;
    const w = (d00 * d21 - d01 * d20) / denom;
    const u = 1.0 - v - w;
    r_weights[0] = u;
    r_weights[1] = v;
    r_weights[2] = w;
}
const BLEND_MODE_INTERPOLATED = AnimationNodeBlendSpace2D.BlendMode.BLEND_MODE_INTERPOLATED;
const BLEND_MODE_DISCRETE_CARRY = AnimationNodeBlendSpace2D.BlendMode.BLEND_MODE_DISCRETE_CARRY;
const ZERO = [0, 0];
export class BlendSpace2D extends BlendSpace {
    set blend_position(v) { vec2.set(this._blend_position, v.x, v.y); }
    get blend_position() { return { x: this._blend_position[0], y: this._blend_position[1] }; }
    constructor(properties, name) {
        super(properties, name, 'AnimationNodeBlendSpace2D');
        this._blend_position = vec2.create();
        this.closest = -1;
        const blendSpace2DProperties = unwrap_property_paths(properties);
        this.source_names = [];
        for (const [key, val] of Object.entries(blendSpace2DProperties)) {
            if (key.startsWith('blend_point_')) {
                const input = val;
                const { node, pos } = convertRaw(input, this.name, this.blend_points.length);
                this.blend_points.push({ node, pos: vec2.set(vec2.create(), pos.x, pos.y) });
                delete blendSpace2DProperties[key];
                this.source.push(node);
                this.source_names.push(node.name);
            }
        }
        DefaultAnimationNodeBlendSpace2D(blendSpace2DProperties);
        Object.assign(this, blendSpace2DProperties);
        this._points = new Float32Array(this.blend_points.map(point => [...point.pos]).flat());
        if (this.auto_triangles || !this.triangles) {
            const del = new Delaunator(this._points);
            this.triangles = del.triangles;
        }
    }
    _process(p_playback_info) {
        const { blend_points, blend_mode, sync, triangles } = this;
        const blend_points_used = this.blend_points.length;
        if (!blend_points_used) {
            return new NodeTimeInfo();
        }
        const blend_pos = this._blend_position;
        let cur_closest = this.closest;
        let mind = undefined; //time of min distance point
        const pi = _pi(p_playback_info);
        if (blend_mode == BLEND_MODE_INTERPOLATED) {
            if (triangles.length == 0) {
                return new NodeTimeInfo();
            }
            let best_point = ZERO;
            let first = true;
            let blend_triangle = -1;
            const blend_weights = [0, 0, 0];
            for (let i = 0; i < triangles.length; i += 3) {
                const points = [
                    blend_points[triangles[i]].pos,
                    blend_points[triangles[i + 1]].pos,
                    blend_points[triangles[i + 2]].pos
                ];
                if (is_point_in_triangle(blend_pos, points[0], points[1], points[2])) {
                    blend_triangle = i;
                    _blend_triangle(blend_pos, points, blend_weights);
                    break;
                }
                for (let j = 0; j < 3; j++) {
                    const s = [
                        points[j],
                        points[(j + 1) % 3]
                    ];
                    const closest2 = get_closest_point_to_segment(blend_pos, s);
                    if (first || distance_to(closest2, blend_pos) < distance_to(best_point, blend_pos)) {
                        best_point = closest2;
                        blend_triangle = i;
                        first = false;
                        const d = distance_to(s[0], s[1]);
                        if (d == 0.0) {
                            blend_weights[j] = 1.0;
                            blend_weights[(j + 1) % 3] = 0.0;
                            blend_weights[(j + 2) % 3] = 0.0;
                        }
                        else {
                            const c = distance_to(s[0], closest2) / d;
                            blend_weights[j] = 1.0 - c;
                            blend_weights[(j + 1) % 3] = c;
                            blend_weights[(j + 2) % 3] = 0.0;
                        }
                    }
                }
            }
            const triangle_points = triangles.slice(blend_triangle, blend_triangle * 3 + 3);
            first = true;
            let max_weight = 0.0;
            for (let i = 0; i < blend_points_used; i++) {
                let found = false;
                for (let j = 0; j < 3; j++) {
                    if (i == triangle_points[j]) {
                        //blend with the given weight
                        pi.weight = blend_weights[j];
                        const t = this.blend_node(blend_points[i].node, pi, FilterAction.FILTER_IGNORE, true);
                        if (first || pi.weight > max_weight) {
                            mind = t;
                            max_weight = pi.weight;
                            first = false;
                        }
                        found = true;
                        break;
                    }
                }
                if (sync && !found) {
                    pi.weight = 0;
                    this.blend_node(blend_points[i].node, pi, FilterAction.FILTER_IGNORE, true);
                }
            }
        }
        else {
            let new_closest = -1;
            let new_closest_dist = 1e20;
            for (let i = 0; i < blend_points_used; i++) {
                const d = distance_squared_to(blend_points[i].pos, blend_pos);
                if (d < new_closest_dist) {
                    new_closest = i;
                    new_closest_dist = d;
                }
            }
            if (new_closest != cur_closest && new_closest != -1) {
                let from;
                if (blend_mode == BLEND_MODE_DISCRETE_CARRY && cur_closest != -1) {
                    //for ping-pong loop
                    const na_c = blend_points[cur_closest].node;
                    const na_n = blend_points[new_closest].node;
                    if (na_c && na_c instanceof Animation && na_n && na_n instanceof Animation) {
                        na_n.set_backward(na_c.is_backward());
                    }
                    //see how much animation remains
                    pi.seeked = false;
                    pi.weight = 0;
                    from = this.blend_node(blend_points[cur_closest].node, pi, FilterAction.FILTER_IGNORE, true);
                }
                else
                    from = new NodeTimeInfo();
                pi.time = from.position;
                pi.seeked = true;
                pi.weight = 1.0;
                mind = this.blend_node(blend_points[new_closest].node, pi, FilterAction.FILTER_IGNORE, true);
                cur_closest = new_closest;
            }
            else {
                pi.weight = 1.0;
                mind = this.blend_node(blend_points[cur_closest].node, pi, FilterAction.FILTER_IGNORE, true);
            }
            if (sync) {
                const pi = _pi(p_playback_info);
                pi.weight = 0;
                for (let i = 0; i < blend_points_used; i++) {
                    if (i != cur_closest) {
                        this.blend_node(blend_points[i].node, pi, FilterAction.FILTER_IGNORE, true);
                    }
                }
            }
        }
        this.closest = cur_closest;
        return mind;
    }
}
BlendSpace2D.registerType('AnimationNodeBlendSpace2D', BlendSpace2D);
