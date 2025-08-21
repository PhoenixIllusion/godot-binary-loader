import { DefaultResource } from './Resource.default.js';
export function DefaultShaderInclude(item) {
    DefaultResource(item);
    item.code ?? (item.code = "");
}
