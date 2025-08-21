import { DefaultResourceImporter } from './ResourceImporter.default.js';
export function DefaultResourceImporterTexture(item) {
    DefaultResourceImporter(item);
    item['compress/channel_pack'] ?? (item['compress/channel_pack'] = 0);
    item['compress/hdr_compression'] ?? (item['compress/hdr_compression'] = 1);
    item['compress/high_quality'] ?? (item['compress/high_quality'] = false);
    item['compress/lossy_quality'] ?? (item['compress/lossy_quality'] = 0.7);
    item['compress/mode'] ?? (item['compress/mode'] = 0);
    item['compress/normal_map'] ?? (item['compress/normal_map'] = 0);
    item['detect_3d/compress_to'] ?? (item['detect_3d/compress_to'] = 1);
    item['editor/convert_colors_with_editor_theme'] ?? (item['editor/convert_colors_with_editor_theme'] = false);
    item['editor/scale_with_editor_scale'] ?? (item['editor/scale_with_editor_scale'] = false);
    item['mipmaps/generate'] ?? (item['mipmaps/generate'] = false);
    item['mipmaps/limit'] ?? (item['mipmaps/limit'] = -1);
    item['process/fix_alpha_border'] ?? (item['process/fix_alpha_border'] = true);
    item['process/hdr_as_srgb'] ?? (item['process/hdr_as_srgb'] = false);
    item['process/hdr_clamp_exposure'] ?? (item['process/hdr_clamp_exposure'] = false);
    item['process/normal_map_invert_y'] ?? (item['process/normal_map_invert_y'] = false);
    item['process/premult_alpha'] ?? (item['process/premult_alpha'] = false);
    item['process/size_limit'] ?? (item['process/size_limit'] = 0);
    item['roughness/mode'] ?? (item['roughness/mode'] = 0);
    item['roughness/src_normal'] ?? (item['roughness/src_normal'] = "");
    item['svg/scale'] ?? (item['svg/scale'] = 1.0);
}
