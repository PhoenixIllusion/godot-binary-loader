import { unwrap_property_paths } from "@phoenixillusion/godot-scene-reader/process/scene/unwrap.js";
import { AnimationNodeBlendSpace1D } from "../types/gen/index.js";
import { DefaultAnimationNodeBlendSpace2D } from "../types/gen/defaults/AnimationNodeBlendSpace2D.default.js";
import { BlendSpace, convertRaw } from "./blendspace.js";
import { _pi, FilterAction, NodeTimeInfo } from "./blend.js";
import { Animation } from "./animation.js";
const BLEND_MODE_INTERPOLATED = AnimationNodeBlendSpace1D.BlendMode.BLEND_MODE_INTERPOLATED;
const BLEND_MODE_DISCRETE_CARRY = AnimationNodeBlendSpace1D.BlendMode.BLEND_MODE_DISCRETE_CARRY;
export class BlendSpace1D extends BlendSpace {
    constructor(properties, name) {
        super(properties, name, 'AnimationNodeBlendSpace1D');
        this.blend_position = 0;
        this.closest = -1;
        const blendSpace2DProperties = unwrap_property_paths(properties);
        this.source_names = [];
        for (const [key, val] of Object.entries(blendSpace2DProperties)) {
            if (key.startsWith('blend_point_')) {
                const input = val;
                const node = convertRaw(input, this.name, this.blend_points.length);
                this.source.push(node.node);
                this.blend_points.push(node);
                this.source_names.push(node.node.name);
                delete blendSpace2DProperties[key];
            }
        }
        DefaultAnimationNodeBlendSpace2D(blendSpace2DProperties);
        Object.assign(this, blendSpace2DProperties);
    }
    _process(p_playback_info) {
        const { blend_points, blend_mode, sync } = this;
        const blend_points_used = this.blend_points.length;
        if (!blend_points_used) {
            return new NodeTimeInfo();
        }
        const pi = _pi(p_playback_info);
        if (blend_points_used == 1) {
            // only one point available, just play that animation
            pi.weight = 1.0;
            return this.blend_node(blend_points[0].node, pi, FilterAction.FILTER_IGNORE, true);
        }
        const blend_pos = this.blend_position;
        let cur_closest = this.closest;
        let mind = undefined;
        if (blend_mode == BLEND_MODE_INTERPOLATED) {
            let point_lower = -1;
            let pos_lower = 0.0;
            let point_higher = -1;
            let pos_higher = 0.0;
            // find the closest two points to blend between
            for (let i = 0; i < blend_points_used; i++) {
                let pos = blend_points[i].pos;
                if (pos <= blend_pos) {
                    if (point_lower == -1 || pos > pos_lower) {
                        point_lower = i;
                        pos_lower = pos;
                    }
                }
                else if (point_higher == -1 || pos < pos_higher) {
                    point_higher = i;
                    pos_higher = pos;
                }
            }
            // fill in weights
            const weights = [];
            if (point_lower == -1 && point_higher != -1) {
                // we are on the left side, no other point to the left
                // we just play the next point.
                weights[point_higher] = 1.0;
            }
            else if (point_higher == -1) {
                // we are on the right side, no other point to the right
                // we just play the previous point
                weights[point_lower] = 1.0;
            }
            else {
                // we are between two points.
                // figure out weights, then blend the animations
                const distance_between_points = pos_higher - pos_lower;
                const current_pos_inbetween = blend_pos - pos_lower;
                const blend_percentage = current_pos_inbetween / distance_between_points;
                const blend_lower = 1.0 - blend_percentage;
                const blend_higher = blend_percentage;
                weights[point_lower] = blend_lower;
                weights[point_higher] = blend_higher;
            }
            // actually blend the animations now
            let first = true;
            let max_weight = 0.0;
            for (let i = 0; i < blend_points_used; i++) {
                if (i == point_lower || i == point_higher) {
                    pi.weight = weights[i];
                    const t = this.blend_node(blend_points[i].node, pi, FilterAction.FILTER_IGNORE, true);
                    if (first || pi.weight > max_weight) {
                        max_weight = pi.weight;
                        mind = t;
                        first = false;
                    }
                }
                else if (sync) {
                    pi.weight = 0;
                    this.blend_node(blend_points[i].node, pi, FilterAction.FILTER_IGNORE, true);
                }
            }
        }
        else {
            let new_closest = -1;
            let new_closest_dist = 1e20;
            for (let i = 0; i < blend_points_used; i++) {
                const d = Math.abs(blend_points[i].pos - blend_pos);
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
BlendSpace1D.registerType('AnimationNodeBlendSpace1D', BlendSpace1D);
