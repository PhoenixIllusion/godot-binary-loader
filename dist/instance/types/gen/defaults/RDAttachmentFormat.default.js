import { DefaultRefCounted } from './RefCounted.default';
export function DefaultRDAttachmentFormat(item) {
    DefaultRefCounted(item);
    item.format ?? (item.format = 36);
    item.samples ?? (item.samples = 0);
    item.usage_flags ?? (item.usage_flags = 0);
}
