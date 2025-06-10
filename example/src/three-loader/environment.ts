import { Object3D } from "three/src/core/Object3D.js";
import { SphereGeometry } from "three/src/geometries/SphereGeometry.js";
import { MeshBasicMaterial } from "three/src/materials/MeshBasicMaterial.js";
import { cast_ctex, getTexture } from "./texture-loader";
import { Mesh } from "three/src/objects/Mesh.js";
import { AmbientLight } from "three/src/lights/AmbientLight.js";
import { Color } from "three/src/math/Color.js";
import { Material } from "three/src/materials/Material.js";
import { ShaderMaterial } from "three/src/materials/ShaderMaterial.js";
import { Vector4 } from "three/src/math/Vector4.js";

import { Environment, MaterialType, NodeTypeMap } from "@phoenixillusion/godot-binary-loader/instance/types/gen/index.js";
import { DefaultEnvironment } from "@phoenixillusion/godot-binary-loader/instance/types/gen/defaults/Environment.default.js";
import { DefaultPanoramaSkyMaterial } from "@phoenixillusion/godot-binary-loader/instance/types/gen/defaults/PanoramaSkyMaterial.default.js";

import type { Color as ColorT } from "@phoenixillusion/godot-binary-loader/instance/types/gen/types.js";

const proceduralSky = {
  vertexShader:
    `varying vec3 vWorldPosition;
varying vec2 vUv;

void main() {

  vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
  vWorldPosition = worldPosition.xyz;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

}
`,
  fragmentShader:
    `uniform vec4 sky_top_color;
uniform vec4 sky_horizon_color;
uniform float sky_curve;
uniform float sky_energy; // In Lux.
uniform sampler2D sky_cover;
uniform vec4 sky_cover_modulate;
uniform vec4 ground_bottom_color;
uniform vec4 ground_horizon_color;
uniform float ground_curve;
uniform float ground_energy;
uniform float sun_angle_max;
uniform float sun_curve;
uniform float exposure;

varying vec3 vWorldPosition;
varying vec2 vUv;

void sky() {
  float PI = 3.14159; 
	float h = normalize( vWorldPosition).y;
	float v_angle = acos(clamp(h, -1.0, 1.0));
	float c = (1.0 - v_angle / (PI * 0.5));
	vec3 sky = mix(sky_horizon_color.rgb, sky_top_color.rgb, clamp(1.0 - pow(1.0 - c, 1.0 / sky_curve), 0.0, 1.0));
	sky *= sky_energy;

	vec4 sky_cover_texture = texture(sky_cover, vUv);
	sky += (sky_cover_texture.rgb * sky_cover_modulate.rgb) * sky_cover_texture.a * sky_cover_modulate.a * sky_energy;

	c = (v_angle - (PI * 0.5)) / (PI * 0.5);
	vec3 ground = mix(ground_horizon_color.rgb, ground_bottom_color.rgb, clamp(1.0 - pow(1.0 - c, 1.0 / ground_curve), 0.0, 1.0));
	ground *= ground_energy;

  gl_FragColor = vec4(mix(ground, sky, step(0.0, h)) * exposure,1);
}

			void main() {
				sky();
			}
`
}


export function loadWorldEnvironment(root: Object3D, world: NodeTypeMap['WorldEnvironment']) {
  const environment = world.properties.environment?.properties || {};
  DefaultEnvironment(environment);

  switch (environment.background_mode) {
    case Environment.BGMode.BG_SKY: {
      const { sky } = environment;
      const sky_mat = <MaterialType | undefined>sky?.properties?.sky_material;
      let material: Material | undefined = undefined;
      if (sky_mat) {
        const geometry = new SphereGeometry(500, 60, 40);
        geometry.scale(- 1, -1, -1);
        if (sky_mat.type == 'PanoramaSkyMaterial') {
          const panorama_mat = sky_mat.properties;
          DefaultPanoramaSkyMaterial(panorama_mat);
          const sky_tex = cast_ctex(panorama_mat.panorama)!;
          const mesh_material = material = new MeshBasicMaterial();
          getTexture(sky_tex).then(tex => {
            mesh_material.map = tex;
            mesh_material.map.needsUpdate = true;
            mesh_material.needsUpdate = true;
          })
        }
        if (sky_mat.type == 'ProceduralSkyMaterial') {
          const p = sky_mat.properties;
          function c(c: ColorT): Vector4 {
            return new Vector4(c.r, c.g, c.b, c.a);
          }
          const vertexShader = proceduralSky.vertexShader;
          const fragmentShader = proceduralSky.fragmentShader;
          const uniforms = {
            sky_top_color: { value: p.sky_top_color ? c(p.sky_top_color) : new Vector4(0.385, 0.454, 0.55, 1.0) },
            sky_horizon_color: { value: p.sky_horizon_color ? c(p.sky_horizon_color) : new Vector4(0.646, 0.656, 0.67, 1.0) },
            sky_curve: { value: p.sky_curve ?? 0.15 },
            sky_energy: { value: p.sky_energy_multiplier ?? 1.0 }, // In Lux.
            sky_cover_modulate: { value: p.sky_cover_modulate ? c(p.sky_cover_modulate) : new Vector4(1.0, 1.0, 1.0, 1.0) },
            ground_bottom_color: { value: p.ground_bottom_color ? c(p.ground_bottom_color) : new Vector4(0.2, 0.169, 0.133, 1.0) },
            ground_horizon_color: { value: p.ground_horizon_color ? c(p.ground_horizon_color) : new Vector4(0.646, 0.656, 0.67, 1.0) },
            ground_curve: { value: p.ground_curve ?? 0.02 },
            ground_energy: { value: p.ground_energy_multiplier ?? 1.0 },
            sun_angle_max: { value: p.sun_angle_max ?? 30.0 },
            sun_curve: { value: p.sun_curve ?? 0.15 },
            exposure: { value: 1.0 },
          };
          material = new ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
          });
        }
        if (material)
          root.add(new Mesh(geometry, material));
      }
    } break;
  }
  switch (environment.ambient_light_source) {
    case Environment.AmbientSource.AMBIENT_SOURCE_COLOR:
    case Environment.AmbientSource.AMBIENT_SOURCE_SKY:
      const { r, g, b } = environment.ambient_light_color;
      const ambientLight = new AmbientLight(new Color(r, g, b));
      root.add(ambientLight);
      break;
  }
}