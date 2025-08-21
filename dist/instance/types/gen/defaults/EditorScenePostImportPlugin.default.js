import { DefaultRefCounted } from './RefCounted.default.js';
export function DefaultEditorScenePostImportPlugin(item) {
    DefaultRefCounted(item);
}
