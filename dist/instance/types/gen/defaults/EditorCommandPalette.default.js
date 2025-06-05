import { DefaultConfirmationDialog } from './ConfirmationDialog.default';
export function DefaultEditorCommandPalette(item) {
    DefaultConfirmationDialog(item);
    item.dialog_hide_on_ok ?? (item.dialog_hide_on_ok = false);
}
