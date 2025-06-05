/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultSyntaxHighlighter } from './SyntaxHighlighter.default';
export function DefaultCodeHighlighter(item) {
    DefaultSyntaxHighlighter(item);
    //color_regions = {}
    item.function_color ?? (item.function_color = create.Color(0, 0, 0, 1));
    //keyword_colors = {}
    //member_keyword_colors = {}
    item.member_variable_color ?? (item.member_variable_color = create.Color(0, 0, 0, 1));
    item.number_color ?? (item.number_color = create.Color(0, 0, 0, 1));
    item.symbol_color ?? (item.symbol_color = create.Color(0, 0, 0, 1));
}
