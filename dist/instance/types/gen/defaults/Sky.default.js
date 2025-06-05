import { DefaultResource } from './Resource.default';
export function DefaultSky(item) {
    DefaultResource(item);
    item.process_mode ?? (item.process_mode = 0);
    item.radiance_size ?? (item.radiance_size = 3);
    //sky_material  
}
