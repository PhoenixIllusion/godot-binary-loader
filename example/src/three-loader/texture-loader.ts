
import { DataFormat, ImageFormat } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2_format.js";
import { cTexFile } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2.js";
import { Source } from "three/src/textures/Source.js";
import { AnyPixelFormat, RGBAFormat } from "three/src/constants.js";

function getPixelFormat(fmt: ImageFormat): AnyPixelFormat {
  switch(fmt) {
    case ImageFormat.FORMAT_L8:
      return RGBAFormat;
  }
  return RGBAFormat;
}

async function parseCTexEntry(file: cTexFile): Promise<Source> {
  const entry = file.images[0];
  switch(entry.data_format) {
    case DataFormat.DATA_FORMAT_IMAGE: // data
    break;
    case DataFormat.DATA_FORMAT_PNG: // png
    case DataFormat.DATA_FORMAT_WEBP: // webp
    {
      return createImageBitmap(new Blob([entry.buffer])).then(img => new Source(img));
    }
    break;
    case DataFormat.DATA_FORMAT_BASIS_UNIVERSAL: //basis universal
    break;
  }
  return new Source(null);
}


const ctexCache: Map<cTexFile, Promise<Source>> = new Map();
export function getTexture(entry: cTexFile): Promise<Source> {
  const res = ctexCache.get(entry);
  if(!res) {
    const newInst = parseCTexEntry(entry);
    ctexCache.set(entry, newInst);
    return newInst;
  }
  return res;
}
