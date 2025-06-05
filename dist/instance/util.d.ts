import { VariantType } from "@phoenixillusion/godot-scene-reader/parse/binary/variant.js";
import { NodePath } from "./types/gen/types";
export declare function resolve_nodepath(currentPath: string[], nodePath: string[], absolute: boolean): string[];
export declare function node_path_string(nodePath: NodePath | undefined): string;
interface ParentChildSystem<T> {
    name: string;
    parent: ParentChildSystem<T> | null;
    children: ParentChildSystem<T>[];
}
export declare function navigate_nodepath<T extends ParentChildSystem<T>>(obj: T, nodePath: NodePath): T | null;
export declare function navigate_nodepath_subpath<T extends Record<string, any>>(obj: T, nodePath: NodePath, leftover_path: string[], last_is_property?: number): any | null;
export declare function unwrap_properties_cached<T extends Record<string, any>>(properties: Record<string, VariantType>): T;
export declare function clear_unwrap_properties_cached(): void;
export {};
