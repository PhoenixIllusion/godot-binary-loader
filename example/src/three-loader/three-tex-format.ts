import { AlphaFormat, RedFormat, RedIntegerFormat, RGFormat, RGIntegerFormat, RGBFormat, RGBAFormat, RGBAIntegerFormat, RGB_S3TC_DXT1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGB_PVRTC_2BPPV1_Format, RGBA_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGB_ETC1_Format, RGB_ETC2_Format, RGBA_ETC2_EAC_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_10x10_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_BPTC_Format, RGB_BPTC_SIGNED_Format, RGB_BPTC_UNSIGNED_Format, RED_RGTC1_Format, SIGNED_RED_RGTC1_Format, RED_GREEN_RGTC2_Format, SIGNED_RED_GREEN_RGTC2_Format, PixelFormat, UnsignedInt248Type, DepthFormat, DepthStencilFormat } from 'three/src/constants.js'
import { UnsignedByteType, ByteType, UnsignedShortType, ShortType, HalfFloatType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedIntType, IntType, FloatType, UnsignedInt5999Type, TextureDataType } from 'three/src/constants.js'
import { ColorManagement } from 'three/src/math/ColorManagement.js';
import { WebGLUtils } from 'three/src/renderers/webgl/WebGLUtils.js';

const UNSIGNED_BYTE = 0x1401;
const UNSIGNED_SHORT_4_4_4_4 = 0x8033;
const UNSIGNED_SHORT_5_5_5_1 = 0x8034;
const UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
const UNSIGNED_INT_24_8 = 34042

const BYTE = 5120
const SHORT = 5122
const UNSIGNED_SHORT = 5123
const INT = 5124
const UNSIGNED_INT = 5125
const FLOAT = 5126
const HALF_FLOAT = 5131

export function getThreeTextureType(glType: number): TextureDataType {
  if (glType === UNSIGNED_BYTE) return UnsignedByteType;
  if (glType === UNSIGNED_SHORT_4_4_4_4) return UnsignedShort4444Type;
  if (glType === UNSIGNED_SHORT_5_5_5_1) return UnsignedShort5551Type;
  if (glType === UNSIGNED_INT_5_9_9_9_REV) return UnsignedInt5999Type;

  if (glType === BYTE) return ByteType;
  if (glType === SHORT) return ShortType;
  if (glType === UNSIGNED_SHORT) return UnsignedShortType;
  if (glType === INT) return IntType;
  if (glType === UNSIGNED_INT) return UnsignedIntType;
  if (glType === FLOAT) return FloatType;
  if (glType === HALF_FLOAT) return HalfFloatType;
  if (glType === UNSIGNED_INT_24_8) return UnsignedInt248Type;
  throw new Error('Unrecognized glType ' + glType);
}

export function convertTextureDataType(glType: number, buffer: Uint8Array): ArrayBufferView {
  if (glType === UNSIGNED_BYTE) return new Uint8Array(buffer.buffer, buffer.byteOffset);
  if (glType === UNSIGNED_SHORT_4_4_4_4) return new Uint16Array(buffer.buffer, buffer.byteOffset);
  if (glType === UNSIGNED_SHORT_5_5_5_1) return new Uint16Array(buffer.buffer, buffer.byteOffset);
  if (glType === UNSIGNED_INT_5_9_9_9_REV) return new Uint32Array(buffer.buffer, buffer.byteOffset);

  if (glType === BYTE) return new Int8Array(buffer.buffer, buffer.byteOffset);
  if (glType === SHORT) return new Int16Array(buffer.buffer, buffer.byteOffset);
  if (glType === UNSIGNED_SHORT) return new Uint16Array(buffer.buffer, buffer.byteOffset);
  if (glType === INT) return new Int32Array(buffer.buffer, buffer.byteOffset);
  if (glType === UNSIGNED_INT) return new Uint32Array(buffer.buffer, buffer.byteOffset);
  if (glType === FLOAT) return new Float32Array(buffer.buffer, buffer.byteOffset);
  if (glType === HALF_FLOAT) return new Uint16Array(buffer.buffer, buffer.byteOffset);
  if (glType === UNSIGNED_INT_24_8) return new Uint32Array(buffer.buffer, buffer.byteOffset);
  throw new Error('Unrecognized glType ' + glType);
}

const ALPHA = 6406
const RGB = 6407
const RGBA = 6408
const DEPTH_COMPONENT = 6402
const DEPTH_STENCIL = 34041

const RED = 6403
const RED_INTEGER = 36244
const RG = 33319
const RG_INTEGER = 33320
const RGBA_INTEGER = 36249

export function getThreeTextureFormat(glFormat: number): { format: PixelFormat, colorSpace: string } {
  let colorSpace = '';

  if (glFormat === ALPHA) return { format: AlphaFormat, colorSpace };
  if (glFormat === RGB) return { format: RGBFormat, colorSpace };
  if (glFormat === RGBA) return { format: RGBAFormat, colorSpace };
  if (glFormat === DEPTH_COMPONENT) return { format: DepthFormat, colorSpace };
  if (glFormat === DEPTH_STENCIL) return { format: DepthStencilFormat, colorSpace };

  // WebGL2 formats.

  if (glFormat === RED) return { format: RedFormat, colorSpace };
  if (glFormat === RED_INTEGER) return { format: RedIntegerFormat, colorSpace };
  if (glFormat === RG) return { format: RGFormat, colorSpace };
  if (glFormat === RG_INTEGER) return { format: RGIntegerFormat, colorSpace };
  if (glFormat === RGBA_INTEGER) return { format: RGBAIntegerFormat, colorSpace };

  throw new Error('Unrecognized glFormat ' + glFormat);
}