import { DefaultRefCounted } from './RefCounted.default';
export function DefaultTranslationDomain(item) {
    DefaultRefCounted(item);
    item.pseudolocalization_accents_enabled ?? (item.pseudolocalization_accents_enabled = true);
    item.pseudolocalization_double_vowels_enabled ?? (item.pseudolocalization_double_vowels_enabled = false);
    item.pseudolocalization_enabled ?? (item.pseudolocalization_enabled = false);
    item.pseudolocalization_expansion_ratio ?? (item.pseudolocalization_expansion_ratio = 0.0);
    item.pseudolocalization_fake_bidi_enabled ?? (item.pseudolocalization_fake_bidi_enabled = false);
    item.pseudolocalization_override_enabled ?? (item.pseudolocalization_override_enabled = false);
    item.pseudolocalization_prefix ?? (item.pseudolocalization_prefix = "[");
    item.pseudolocalization_skip_placeholders_enabled ?? (item.pseudolocalization_skip_placeholders_enabled = true);
    item.pseudolocalization_suffix ?? (item.pseudolocalization_suffix = "]");
}
