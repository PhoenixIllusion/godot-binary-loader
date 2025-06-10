import { NodeTimeInfo, blend_node, _pi } from "./blend";
export class Node {
    constructor(properties, name, type) {
        this.name = name;
        this.type = type;
        this.source = [];
        this.filter_mask = null;
        this.node_state = { track_weights: new Float32Array() };
        this.current_length = 0;
        this.current_position = 0;
        this.current_delta = 0;
        this._nti = new NodeTimeInfo();
        this.source_names = ['in'];
        this.filter_enabled = properties.filter_enabled ?? false;
        this.filters = properties.filters ?? [];
    }
    parameters(_parameters) { }
    configure(p_interface) {
        p_interface.configureNode(this);
        this.playerInterface = p_interface;
        this.source.forEach(source => source.configure(p_interface));
    }
    set_node_time_info(nti) {
        this.current_length = nti.length;
        this.current_position = nti.position;
        this.current_delta = nti.delta;
        this._nti.length = nti.length;
        this._nti.position = nti.position;
        this._nti.delta = nti.delta;
    }
    get_node_time_info() { return this._nti; }
    blend_input(p_input, p_playback_info, p_filter, p_sync) {
        const node = this.source[p_input];
        return blend_node(this, node, p_playback_info, p_filter, p_sync);
    }
    blend_node(node, p_playback_info, p_filter, p_sync) {
        return blend_node(this, node, p_playback_info, p_filter, p_sync);
    }
    process(p_playback_info) {
        const pi = _pi(p_playback_info);
        if (p_playback_info.seeked) {
            pi.delta = this.get_node_time_info().position - p_playback_info.time;
        }
        else {
            pi.time = this.get_node_time_info().position + p_playback_info.delta;
        }
        const nti = this._process(pi);
        this.set_node_time_info(nti);
        return nti;
    }
    static registerType(type, _class) {
        this._typeMap[type] = _class;
        return _class;
    }
    static create(node, name) {
        const ctor = this._typeMap[node.type] || null;
        if (ctor) {
            return new ctor(node.properties, name);
        }
        throw new Error(`Unknown Node Type ${node.type}`);
    }
}
Node._typeMap = {};
