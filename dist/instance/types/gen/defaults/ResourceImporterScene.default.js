import { DefaultResourceImporter } from './ResourceImporter.default.js';
export function DefaultResourceImporterScene(item) {
    DefaultResourceImporter(item);
    //_subresources = {}
    item['animation/fps'] ?? (item['animation/fps'] = 30);
    item['animation/import'] ?? (item['animation/import'] = true);
    item['animation/import_rest_as_RESET'] ?? (item['animation/import_rest_as_RESET'] = false);
    item['animation/remove_immutable_tracks'] ?? (item['animation/remove_immutable_tracks'] = true);
    item['animation/trimming'] ?? (item['animation/trimming'] = false);
    item['import_script/path'] ?? (item['import_script/path'] = "");
    item['meshes/create_shadow_meshes'] ?? (item['meshes/create_shadow_meshes'] = true);
    item['meshes/ensure_tangents'] ?? (item['meshes/ensure_tangents'] = true);
    item['meshes/force_disable_compression'] ?? (item['meshes/force_disable_compression'] = false);
    item['meshes/generate_lods'] ?? (item['meshes/generate_lods'] = true);
    item['meshes/light_baking'] ?? (item['meshes/light_baking'] = 1);
    item['meshes/lightmap_texel_size'] ?? (item['meshes/lightmap_texel_size'] = 0.2);
    item['nodes/apply_root_scale'] ?? (item['nodes/apply_root_scale'] = true);
    item['nodes/import_as_skeleton_bones'] ?? (item['nodes/import_as_skeleton_bones'] = false);
    item['nodes/root_name'] ?? (item['nodes/root_name'] = "");
    item['nodes/root_scale'] ?? (item['nodes/root_scale'] = 1.0);
    item['nodes/root_type'] ?? (item['nodes/root_type'] = "");
    item['nodes/use_node_type_suffixes'] ?? (item['nodes/use_node_type_suffixes'] = true);
    item['skins/use_named_skins'] ?? (item['skins/use_named_skins'] = true);
}
