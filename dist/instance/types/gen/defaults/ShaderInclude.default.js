import { DefaultResource } from './Resource.default';
export function DefaultShaderInclude(item) {
    DefaultResource(item);
    item.code ?? (item.code = "");
}
