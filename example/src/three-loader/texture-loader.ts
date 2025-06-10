import { parse_ctex_image_format } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2_image_format_gl_map.js";
import { cTexFile } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2.js";
import { Texture } from "three/src/textures/Texture.js";
import { CompressedTexture } from "three/src/textures/CompressedTexture.js";
import {
  CompressedPixelFormat,
  PixelFormat,
  TextureDataType
} from "three/src/constants.js";
import { DataTexture } from "three/src/textures/DataTexture.js";

import { Texture as TextureT } from "@phoenixillusion/godot-binary-loader/instance/types/gen/index.js";
import { DataFormat } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2_format.js";

async function parseCTexEntry(file: cTexFile): Promise<Texture> {
  const entry = file.images[0];
  switch (entry.data_format) {
    case DataFormat.DATA_FORMAT_IMAGE: // compressed/raw
      const { internal_format, format, type, compressed } = parse_ctex_image_format(file.images[0].image_format);
      if (internal_format > 0) {
        if (compressed)
          return new CompressedTexture(file.images.map(x => ({ width: x.width, height: x.height, data: x.buffer })),
            entry.width, entry.height, <CompressedPixelFormat>internal_format, <TextureDataType>type);
        else {
          const data_tex = new DataTexture(entry.buffer, entry.width, entry.height, <PixelFormat>format, <TextureDataType>type)
          data_tex.mipmaps = file.images.map(x => ({ width: x.width, height: x.height, data: x.buffer }));
          return data_tex;
        }
      }
      throw new Error("Unhandled Compressed Texture Type: " + entry.image_format)
    case DataFormat.DATA_FORMAT_PNG:
    case DataFormat.DATA_FORMAT_WEBP:
      return createImageBitmap(new Blob([entry.buffer])).then(img => new Texture(img));
    case DataFormat.DATA_FORMAT_BASIS_UNIVERSAL:
      break;
  }
  throw new Error("Unhandled Texture Type: " + entry.data_format)
}


const ctexCache: Map<cTexFile, Promise<Texture>> = new Map();
export async function getTexture(entry: cTexFile): Promise<Texture> {
  const res = ctexCache.get(entry);
  if (!res) {
    const newInst = parseCTexEntry(entry);
    ctexCache.set(entry, newInst);
    return newInst;
  }
  return res;
}

export function cast_ctex<T extends { properties: Z }, Z extends TextureT>(tex: T): cTexFile | null {
  const unknown_tex = tex as any;
  if (unknown_tex.type == 'ctex') {
    return unknown_tex.value as cTexFile;
  }
  return null;
}