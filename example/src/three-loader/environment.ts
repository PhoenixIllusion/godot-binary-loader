import { Object3D } from "three/src/core/Object3D.js";
import { Environment, NodeTypeMap, PanoramaSkyMaterial } from "../loader/instance/types/gen";
import { DefaultEnvironment } from "../loader/instance/types/gen/defaults/Environment.default";
import { SphereGeometry } from "three/src/geometries/SphereGeometry.js";
import { MeshBasicMaterial } from "three/src/materials/MeshBasicMaterial.js";
import { cast_ctex, getTexture } from "./texture-loader";
import { Mesh } from "three/src/objects/Mesh.js";
import { AmbientLight } from "three/src/lights/AmbientLight.js";
import { Color } from "three/src/math/Color.js";

export function loadWorldEnvironment(root: Object3D, world: NodeTypeMap['WorldEnvironment']) {
  const environment = world.properties.environment?.properties || {};
  DefaultEnvironment(environment);

  switch(environment.background_mode) {
    case Environment.BGMode.BG_SKY: {
      const { sky  } = environment;
      const sky_mat = sky?.properties?.sky_material?.properties;
      if(sky_mat && 'panorama' in sky_mat) {
				const geometry = new SphereGeometry( 500, 60, 40 );
        geometry.scale( - 1, -1, -1 );
				const material = new MeshBasicMaterial();
        const panorama_mat = sky_mat as PanoramaSkyMaterial;
        const sky_tex = cast_ctex(panorama_mat.panorama)!;
        getTexture(sky_tex).then(tex => {
          material.map = tex;
          material.map.needsUpdate = true;
          material.needsUpdate = true;
        })
        root.add(new Mesh( geometry, material));
      }
    }break;
  }
  switch(environment.ambient_light_source) {
    case Environment.AmbientSource.AMBIENT_SOURCE_COLOR:
    case Environment.AmbientSource.AMBIENT_SOURCE_SKY:
      const {r,g,b} = environment.ambient_light_color;
      const ambientLight = new AmbientLight(new Color(r,g,b));
      root.add(ambientLight);
      break;
  }
}