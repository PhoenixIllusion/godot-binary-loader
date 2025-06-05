import { DefaultConfirmationDialog } from './ConfirmationDialog.default';
export function DefaultScriptCreateDialog(item) {
    DefaultConfirmationDialog(item);
    item.dialog_hide_on_ok ?? (item.dialog_hide_on_ok = false);
    item.ok_button_text ?? (item.ok_button_text = "Create");
    item.title ?? (item.title = "Attach Node Script");
}
