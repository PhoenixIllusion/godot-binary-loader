import { DefaultResourceImporter } from './ResourceImporter.default.js';
export function DefaultResourceImporterBMFont(item) {
    DefaultResourceImporter(item);
    item.compress ?? (item.compress = true);
    item.fallbacks ?? (item.fallbacks = []);
    item.scaling_mode ?? (item.scaling_mode = 2);
}
