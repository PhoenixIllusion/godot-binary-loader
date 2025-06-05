import { DefaultRefCounted } from './RefCounted.default';
export function DefaultEditorScenePostImportPlugin(item) {
    DefaultRefCounted(item);
}
