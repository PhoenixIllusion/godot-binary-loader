import { DefaultResourceImporter } from './ResourceImporter.default';
export function DefaultResourceImporterLayeredTexture(item) {
    DefaultResourceImporter(item);
    item['compress/channel_pack'] ?? (item['compress/channel_pack'] = 0);
    item['compress/hdr_compression'] ?? (item['compress/hdr_compression'] = 1);
    item['compress/high_quality'] ?? (item['compress/high_quality'] = false);
    item['compress/lossy_quality'] ?? (item['compress/lossy_quality'] = 0.7);
    item['compress/mode'] ?? (item['compress/mode'] = 1);
    item['mipmaps/generate'] ?? (item['mipmaps/generate'] = true);
    item['mipmaps/limit'] ?? (item['mipmaps/limit'] = -1);
    item['slices/arrangement'] ?? (item['slices/arrangement'] = 1);
}
