import { DefaultResource } from './Resource.default.js';
export function DefaultShader(item) {
    DefaultResource(item);
    item.code ?? (item.code = "");
}
