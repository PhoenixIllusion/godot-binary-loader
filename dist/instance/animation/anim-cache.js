import { quat, vec3 } from "gl-matrix";
export class TrackCache {
    constructor() {
        this.root_motion = false;
        this.setup_pass = 0;
        this.type = 'animation';
        this.path = { type: 'node_path', names: [''], subnames: [], absolute: false };
        this.path_str = '';
        this.blend_idx = -1;
        this.object_id = null;
        this.total_weight = 0.0;
    }
}
export class TrackCacheTransform extends TrackCache {
    constructor() {
        super(...arguments);
        this.type = 'position_3d';
        this.loc_used = false;
        this.rot_used = false;
        this.scale_used = false;
        this.init_loc = vec3.set(vec3.create(), 0, 0, 0);
        this.init_rot = quat.set(quat.create(), 0, 0, 0, 1);
        this.init_scale = vec3.set(vec3.create(), 1, 1, 1);
        this.loc = vec3.create();
        this.rot = quat.create();
        this.scale = vec3.create();
        this.bone_idx = null;
        this.skeleton_id = null;
    }
}
export class TrackCacheValue extends TrackCache {
    constructor() {
        super(...arguments);
        this.type = 'value';
        this.subpath = [];
        this.is_init = false;
        this.use_continuous = false;
        this.use_discrete = false;
        this.is_using_angle = false;
        this.is_variant_interpolatable = true;
    }
}
export class TrackCacheMethod extends TrackCache {
    constructor() {
        super(...arguments);
        this.type = 'method';
    }
}
export class TrackCacheBlendShape extends TrackCache {
    constructor() {
        super(...arguments);
        this.type = 'blend_shape';
        this.value = 0;
        this.init_value = 0;
    }
}
export class TrackCacheAudio extends TrackCache {
    constructor() {
        super(...arguments);
        this.type = 'audio';
    }
}
export class TrackCacheAnimation extends TrackCache {
}
export class RootMotion {
    constructor() {
        this.loc = vec3.set(vec3.create(), 0, 0, 0);
        this.rot = quat.set(quat.create(), 0, 0, 0, 1);
        this.scale = vec3.set(vec3.create(), 1, 1, 1);
    }
}
