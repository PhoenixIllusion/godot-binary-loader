import { DefaultContainer } from './Container.default';
export function DefaultEditorProperty(item) {
    DefaultContainer(item);
    item.checkable ?? (item.checkable = false);
    item.checked ?? (item.checked = false);
    item.deletable ?? (item.deletable = false);
    item.draw_warning ?? (item.draw_warning = false);
    item.keying ?? (item.keying = false);
    item.label ?? (item.label = "");
    item.read_only ?? (item.read_only = false);
}
