import { DefaultResource } from './Resource.default.js';
export function DefaultRDShaderFile(item) {
    DefaultResource(item);
    item.base_error ?? (item.base_error = "");
}
