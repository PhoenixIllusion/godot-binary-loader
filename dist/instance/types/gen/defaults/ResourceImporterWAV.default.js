import { DefaultResourceImporter } from './ResourceImporter.default.js';
export function DefaultResourceImporterWAV(item) {
    DefaultResourceImporter(item);
    item['compress/mode'] ?? (item['compress/mode'] = 2);
    item['edit/loop_begin'] ?? (item['edit/loop_begin'] = 0);
    item['edit/loop_end'] ?? (item['edit/loop_end'] = -1);
    item['edit/loop_mode'] ?? (item['edit/loop_mode'] = 0);
    item['edit/normalize'] ?? (item['edit/normalize'] = false);
    item['edit/trim'] ?? (item['edit/trim'] = false);
    item['force/8_bit'] ?? (item['force/8_bit'] = false);
    item['force/max_rate'] ?? (item['force/max_rate'] = false);
    item['force/max_rate_hz'] ?? (item['force/max_rate_hz'] = 44100);
    item['force/mono'] ?? (item['force/mono'] = false);
}
