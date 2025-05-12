export interface Sky {
  process_mode: ProcessMode;
  radiance_size: RadianceSize;
  sky_material: Material;  
  }
  export function DefaultSky(item: Sky) {
  item.process_mode ??= 0;
  item.radiance_size ??= 3;
  //sky_material  
}