import { DefaultResource } from './Resource.default';
export function DefaultRDShaderFile(item) {
    DefaultResource(item);
    item.base_error ?? (item.base_error = "");
}
