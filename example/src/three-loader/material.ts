import { MeshStandardMaterial } from "three/src/materials/MeshStandardMaterial.js";
import { Color } from "three/src/math/Color.js";
import { Texture } from "three/src/textures/Texture.js";
import { cast_ctex, getTexture } from "./texture-loader";
import { AdditiveBlending, ClampToEdgeWrapping, LinearFilter, MultiplyBlending, NearestFilter, NormalBlending, RepeatWrapping, SRGBColorSpace, SubtractiveBlending } from "three/src/constants.js";

import { MaterialType, TextureType, BaseMaterial3D } from "@phoenixillusion/godot-binary-loader/instance/types/gen/index.js";
import { DefaultGradientTexture2D } from "@phoenixillusion/godot-binary-loader/instance/types/gen/defaults/GradientTexture2D.default.js";
import { DefaultStandardMaterial3D } from "@phoenixillusion/godot-binary-loader/instance/types/gen/defaults/StandardMaterial3D.default.js";
import { DefaultBaseMaterial3D } from "@phoenixillusion/godot-binary-loader/instance/types/gen/defaults/BaseMaterial3D.default.js";
import { create_gradient_canvas } from "@phoenixillusion/godot-binary-loader/instance/material.js";

function parseTexture(tex: TextureType): Promise<Texture> {
  if(<any>(tex.type) == 'ctex') {
    const ctex = cast_ctex(tex)!;
    return getTexture(ctex);
  }
  if(tex.type == 'GradientTexture2D') {
     DefaultGradientTexture2D(tex.properties);
    return Promise.resolve(new Texture(create_gradient_canvas(tex.properties)))
  }
  throw new Error("Unknown tex type");
}

const cacheMaterial = new Map<MaterialType,MeshStandardMaterial>();
export async function configureMaterial(base: MeshStandardMaterial, mat: MaterialType): Promise<MeshStandardMaterial> {
  if(cacheMaterial.has(mat)) {
    return cacheMaterial.get(mat)!;
  }
  const s_material = base.clone() as MeshStandardMaterial;
  if(mat.type == 'StandardMaterial3D') {
    DefaultStandardMaterial3D(mat.properties);
  }
  if(mat.type == 'BaseMaterial3D') {
    DefaultBaseMaterial3D(mat.properties);
  }
  const mat_props = mat.properties;
  if ('albedo_color' in mat_props) {
    const { r, g, b } = mat_props.albedo_color;
    s_material.color = new Color(r, g, b);
  }
  if ('albedo_texture' in mat_props) {
    s_material.map = await parseTexture(mat_props.albedo_texture);
    s_material.map.colorSpace = SRGBColorSpace
    s_material.map!.needsUpdate = true;
    s_material.needsUpdate = true;
  }
  if(s_material.map && 'texture_filter' in mat_props) {
    switch(mat_props.texture_filter) {
      case BaseMaterial3D.TextureFilter.TEXTURE_FILTER_LINEAR:
        s_material.map.minFilter = s_material.map.magFilter = LinearFilter;
        break;
      case BaseMaterial3D.TextureFilter.TEXTURE_FILTER_NEAREST:
        s_material.map.minFilter = s_material.map.magFilter = NearestFilter;
        break;
    }
  }
  if(s_material.map && 'texture_repeat' in mat_props) {
    s_material.map.wrapS = s_material.map.wrapT = mat_props.texture_repeat ? RepeatWrapping : ClampToEdgeWrapping;
  }
  if ('roughness' in mat_props) {
    s_material.roughness = mat_props.roughness;
  }
  if ('roughness_texture' in mat_props) {
    s_material.roughnessMap = await parseTexture(mat_props.roughness_texture);
    s_material.roughnessMap!.needsUpdate = true;
    s_material.needsUpdate = true;
  }
  if ('metallic' in mat_props) {
    //s_material.metalness = mat_props.metallic;
  }
  if ('transparency' in mat_props) {
    s_material.transparent = !!mat_props.transparency;
  }
  if('blend_mode' in mat_props) {
    switch(mat_props.blend_mode) {
      case BaseMaterial3D.BlendMode.BLEND_MODE_MIX: {
        s_material.blending = NormalBlending;
      }break;
      case BaseMaterial3D.BlendMode.BLEND_MODE_ADD: {
        s_material.blending = AdditiveBlending;
      }break;
      case BaseMaterial3D.BlendMode.BLEND_MODE_MUL: {
        s_material.blending = MultiplyBlending;
      }break;
      case BaseMaterial3D.BlendMode.BLEND_MODE_SUB: {
        s_material.blending = SubtractiveBlending;
      }break;
    }
  }
  if('emission_enabled' in mat_props) {
    s_material.emissive = mat_props.emission_enabled ? new Color(0xFFFFFF): new Color(0);
    if(mat_props.emission_enabled && 'emission' in mat_props) {
      const { r,g,b, a } = mat_props.emission
      s_material.emissive = new Color(r,g,b);
      s_material.emissiveIntensity = a;
    }
  }
  cacheMaterial.set(mat, s_material);
  return s_material;
}