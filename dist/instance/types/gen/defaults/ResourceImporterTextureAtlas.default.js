import { DefaultResourceImporter } from './ResourceImporter.default.js';
export function DefaultResourceImporterTextureAtlas(item) {
    DefaultResourceImporter(item);
    item.atlas_file ?? (item.atlas_file = "");
    item.crop_to_region ?? (item.crop_to_region = false);
    item.import_mode ?? (item.import_mode = 0);
    item.trim_alpha_border_from_region ?? (item.trim_alpha_border_from_region = true);
}
