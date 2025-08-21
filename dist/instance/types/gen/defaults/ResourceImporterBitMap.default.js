import { DefaultResourceImporter } from './ResourceImporter.default.js';
export function DefaultResourceImporterBitMap(item) {
    DefaultResourceImporter(item);
    item.create_from ?? (item.create_from = 0);
    item.threshold ?? (item.threshold = 0.5);
}
