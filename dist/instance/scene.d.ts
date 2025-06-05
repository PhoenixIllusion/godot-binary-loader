import { cTexFile } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2.js";
import { BinResource, InternalResourceEntry } from "@phoenixillusion/godot-scene-reader/parse/binary/resource.js";
import { VariantType } from "@phoenixillusion/godot-scene-reader/parse/binary/variant.js";
import { PackedScene, SceneNode } from "@phoenixillusion/godot-scene-reader/process/scene/packed_scene.js";
export type LinkRef = {
    type: 'ref';
    value: InternalResourceEntry;
};
export declare namespace SceneInstance {
    interface Resolver {
        getExternalScene(path: string): PackedScene | undefined;
        getExternal<T extends BinResource | cTexFile>(path: string): T | undefined;
    }
    interface Connection {
        from: Node;
        to: Node;
        signal: string;
        method: string;
        flags: number;
        binds: VariantType[];
        unbinds?: number;
    }
    interface Node {
        path: string[];
        type: string;
        name: string;
        instance: VariantType | null;
        properties: Record<string, VariantType>;
        children: Node[];
        connections: Connection[];
        parent: Node | null;
    }
}
export declare class SceneInstance {
    private resolver;
    private rootPath;
    root: SceneInstance.Node;
    private pathMap;
    private nodeMap;
    constructor(scene: PackedScene, resolver: SceneInstance.Resolver, rootPath?: string[]);
    private resolveInternalProperties;
    private resolveProperty;
    private resolveProperties;
    private resolveNode;
    applyModification(path: string[], node: SceneNode, scene: PackedScene): void;
    applyModifications(modifications: {
        path: string[];
        node: SceneNode;
    }[], scene: PackedScene): void;
    resolveAllProperties(): void;
    bindParents(node?: SceneInstance.Node): void;
}
