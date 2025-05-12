import { cTexFile } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2.js";
import { BinResource, ExtResource, InternalResourceEntry } from "@phoenixillusion/godot-scene-reader/parse/binary/resource.js";
import { VariantType, Array as ArrayT, Dictionary } from "@phoenixillusion/godot-scene-reader/parse/binary/variant.js";
import { PackedScene, SceneNode } from "@phoenixillusion/godot-scene-reader/process/scene/packed_scene.js";

export type LinkRef = { type: 'ref', value: InternalResourceEntry};

export namespace SceneInstance {
  export interface Resolver {
    getExternalScene(path: string): PackedScene | undefined;
    getExternal<T extends BinResource | cTexFile>(path: string): T | undefined;
  }
  export interface Node {
    path: string[];
    type: string;
    name: string;
    instance: VariantType | null;
    properties: Record<string, VariantType>;
    children: Node[];
  }
}
export class SceneInstance {

    public root: SceneInstance.Node;
    constructor(scene: PackedScene, private resolver: SceneInstance.Resolver, private rootPath: string[] = []) {
      this.root = this.resolveNode(scene.nodes[0]);

    }
    private resolveInternalProperties(path: string[], entry: BinResource): InternalResourceEntry {
      const rootEntry = entry!.internal_entries[entry!.internal_entries.length - 1];
      this.resolveProperties(path, rootEntry.properties);
      return rootEntry;
    }
    private resolveProperty(path: string[], val: VariantType): VariantType {
      if(val?.type == 'ext_res') {
        const { res } = (val as { type: 'ext_res', res: ExtResource});
        if(res.type == 'Script') return val;
        const loaded_ref = this.resolver.getExternal(res.path);
        if(!loaded_ref) throw new Error(`Attempted to link to unresolvable Resource as property: ${path.join('/')}`);
        let value: InternalResourceEntry | VariantType = ('internal_entries' in loaded_ref)
           ? this.resolveInternalProperties([... path],loaded_ref) : { 'type': 'ctex', value: loaded_ref} as VariantType;
        return { 'type': 'ref', value} as VariantType;
      }
      if(val?.type == 'array') {
        const arr = <ArrayT>val;
        arr.value.forEach((x,i)=> {
          arr.value[i] = this.resolveProperty([... path, ''+i], x);
        })
      }
      if(val?.type == 'dictionary') {
        const dic = <Dictionary>val;
        for (const [k,v] of dic.value.entries()) {
          dic.value.set(k, this.resolveProperty(path, v))
        }
      }
      if(val?.type == 'ref') {
        const intResource = val as { type: 'ref', value: InternalResourceEntry };
        if(intResource.value.type != 'ctex')
          this.resolveProperties(path, intResource.value.properties)
      }
      return val
    }
    private resolveProperties(path: string[], properties: Record<string, VariantType>) {
      for (const [key, val] of Object.entries(properties)) {
        properties[key] = this.resolveProperty([... path, key], val);
      }
    }
    private resolveNode(node: SceneNode): SceneInstance.Node {
      const path = [... this.rootPath, ... node.path];
      const { type, name, instance } = node;
      if(node.instance?.type == 'ext_res') {
        const { res } = (node.instance as { type: 'ext_res', res: ExtResource});
        if(res.type != 'PackedScene') throw new Error(`Attempted to link Non PackedScene into Scene: ${res.path}`);
        const packed_scene = this.resolver.getExternalScene(res.path);
        if(!packed_scene) throw new Error(`Attempted to link to unresolvable PackedScene into Scene: ${res.path}`);
        const scene = new SceneInstance(packed_scene, this.resolver, path);
        const modifications: {path: string[], node: SceneNode}[] = []
        function addSceneNode(n: SceneNode) {
          const path = n.path.slice(node.path.length)
          modifications.push({ path, node: n});
          n.children?.forEach(x => addSceneNode(x));
        }
        addSceneNode(node);
        scene.applyModifications(modifications);
        scene.root.name = node.name;
        return scene.root;
      }
      const children = node.children.map(x => this.resolveNode(x));
      const properties = Object.assign({}, node.properties);
      this.resolveProperties(path, properties);
      return { path, type, name, instance, properties, children}
    }

    applyModification(path: string[], node: SceneNode) {
      let current = this.root;
      path.slice(0, path.length -1).forEach(name => {
        current = current.children.find(x => x.name == name)!;
        if(!current) throw new Error('Attempted to node_path link to non-existent node');
      })
      if(node.type == '_instantiated') {
        if(path.length > 0) {
          current = current.children.find(x => x.name == node.name)!;
          if(!current) throw new Error('Attempted to node_path link to non-existent node');
        }
        current.properties = Object.assign({}, current.properties, node.properties);
        this.resolveProperties(current.path, current.properties);
      } else {
        current.children.push(this.resolveNode(node));
      }
    }
    applyModifications(modifications: {path: string[], node: SceneNode}[]) {
      modifications.forEach(({path, node}) => this.applyModification(path, node));
    }
}