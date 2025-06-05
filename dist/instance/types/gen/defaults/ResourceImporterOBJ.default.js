/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultResourceImporter } from './ResourceImporter.default';
export function DefaultResourceImporterOBJ(item) {
    DefaultResourceImporter(item);
    item.force_disable_mesh_compression ?? (item.force_disable_mesh_compression = false);
    item.generate_lightmap_uv2 ?? (item.generate_lightmap_uv2 = false);
    item.generate_lightmap_uv2_texel_size ?? (item.generate_lightmap_uv2_texel_size = 0.2);
    item.generate_lods ?? (item.generate_lods = true);
    item.generate_shadow_mesh ?? (item.generate_shadow_mesh = true);
    item.generate_tangents ?? (item.generate_tangents = true);
    item.offset_mesh ?? (item.offset_mesh = create.Vector3(0, 0, 0));
    item.scale_mesh ?? (item.scale_mesh = create.Vector3(1, 1, 1));
}
