/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultResource } from './Resource.default';
export function DefaultRDShaderSPIRV(item) {
    DefaultResource(item);
    item.bytecode_compute ?? (item.bytecode_compute = create.PackedByteArray());
    item.bytecode_fragment ?? (item.bytecode_fragment = create.PackedByteArray());
    item.bytecode_tesselation_control ?? (item.bytecode_tesselation_control = create.PackedByteArray());
    item.bytecode_tesselation_evaluation ?? (item.bytecode_tesselation_evaluation = create.PackedByteArray());
    item.bytecode_vertex ?? (item.bytecode_vertex = create.PackedByteArray());
    item.compile_error_compute ?? (item.compile_error_compute = "");
    item.compile_error_fragment ?? (item.compile_error_fragment = "");
    item.compile_error_tesselation_control ?? (item.compile_error_tesselation_control = "");
    item.compile_error_tesselation_evaluation ?? (item.compile_error_tesselation_evaluation = "");
    item.compile_error_vertex ?? (item.compile_error_vertex = "");
}
