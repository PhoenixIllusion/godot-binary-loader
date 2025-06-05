import { DefaultResource } from './Resource.default';
export function DefaultVisualShaderNode(item) {
    DefaultResource(item);
    item.linked_parent_graph_frame ?? (item.linked_parent_graph_frame = -1);
    item.output_port_for_preview ?? (item.output_port_for_preview = -1);
}
