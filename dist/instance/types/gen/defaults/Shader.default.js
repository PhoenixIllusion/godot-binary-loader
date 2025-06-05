import { DefaultResource } from './Resource.default';
export function DefaultShader(item) {
    DefaultResource(item);
    item.code ?? (item.code = "");
}
