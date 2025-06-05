import { unwrap_property_array } from "@phoenixillusion/godot-scene-reader/process/scene/unwrap.js";
export class SkinInstance {
    constructor(skin) {
        this.bind = unwrap_property_array(skin, "bind", ["bone", "name", "pose"]);
    }
}
export class Skeleton3DInstance {
    constructor(skeleton) {
        this.bone = unwrap_property_array(skeleton, "bones", ["enabled", "name", "parent", "position", "rest", "rotation", "scale"]);
    }
}
