import { DefaultResourceImporter } from './ResourceImporter.default.js';
export function DefaultResourceImporterCSVTranslation(item) {
    DefaultResourceImporter(item);
    item.compress ?? (item.compress = true);
    item.delimiter ?? (item.delimiter = 0);
}
