import { DefaultMaterial } from './Material.default';
export function DefaultPanoramaSkyMaterial(item) {
    DefaultMaterial(item);
    item.energy_multiplier ?? (item.energy_multiplier = 1.0);
    item.filter ?? (item.filter = true);
    //panorama  
}
