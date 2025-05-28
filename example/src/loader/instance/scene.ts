import { cTexFile } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2.js";
import { BinResource, ExtResource, InternalResourceEntry } from "@phoenixillusion/godot-scene-reader/parse/binary/resource.js";
import { VariantType, Array as ArrayT, Dictionary, StringName } from "@phoenixillusion/godot-scene-reader/parse/binary/variant.js";
import { NodeConnection, PackedScene, SceneNode } from "@phoenixillusion/godot-scene-reader/process/scene/packed_scene.js";

export type LinkRef = { type: 'ref', value: InternalResourceEntry };

export namespace SceneInstance {
  export interface Resolver {
    getExternalScene(path: string): PackedScene | undefined;
    getExternal<T extends BinResource | cTexFile>(path: string): T | undefined;
  }
  export interface Connection {
    from: Node;
    to: Node;
    signal: string;
    method: string;
    flags: number;
    binds: VariantType[];
    unbinds?: number;
  }
  export interface Node {
    path: string[];
    type: string;
    name: string;
    instance: VariantType | null;
    properties: Record<string, VariantType>;
    children: Node[];
    connections: Connection[]
  }
}

function buildConnection(from: SceneInstance.Node, to: SceneInstance.Node, connection: NodeConnection): SceneInstance.Connection {
  const { signal, method, flags, binds, unbinds } = connection;
  return { from, to, signal, method, flags, binds, unbinds }
}

const propertyCache = new Map<VariantType,VariantType>();
export class SceneInstance {

  public root: SceneInstance.Node;
  private pathMap: Record<string, SceneInstance.Node> = {}
  private nodeMap: Map<SceneNode, SceneInstance.Node> = new Map();
  constructor(scene: PackedScene, private resolver: SceneInstance.Resolver, private rootPath: string[] = []) {
    this.root = this.resolveNode(scene.nodes[0], scene);
    scene.connections.forEach( conn => {
      const fromNode = this.nodeMap.get(scene.nodes[conn.from])!
      const toNode = this.nodeMap.get(scene.nodes[conn.to])!
      const connection = buildConnection(fromNode, toNode, conn);
      fromNode.connections.push(connection);
      if(fromNode != toNode) {
        toNode.connections.push(connection);
      }
    })
    this.resolveAllProperties();
  }
  private resolveInternalProperties(path: string[], property_path: string[], entry: BinResource): InternalResourceEntry {
    const rootEntry = entry!.internal_entries[entry!.internal_entries.length - 1];
    this.resolveProperties(path, property_path, rootEntry.properties);
    return rootEntry;
  }
  private resolveProperty(path: string[], property_path: string[], val: VariantType): VariantType {
    const val_o = val;
    if(propertyCache.has(val)) {
      return propertyCache.get(val)!;
    }
    if (val?.type == 'ext_res') {
      const { res } = (val as { type: 'ext_res', res: ExtResource });
      if (res.type == 'Script') return val;
      const loaded_ref = this.resolver.getExternal(res.path);
      if (!loaded_ref) throw new Error(`Attempted to link to unresolvable Resource as property: ${path.join('/')}`);
      let value: InternalResourceEntry | VariantType = ('internal_entries' in loaded_ref)
        ? this.resolveInternalProperties(path, path, loaded_ref) : { 'type': 'ctex', value: loaded_ref } as VariantType;
      val = { 'type': 'ref', value } as VariantType;
    } else
    if (val?.type == 'array') {
      const arr = <ArrayT>val;
      arr.value.forEach((x, i) => {
        arr.value[i] = this.resolveProperty(path, [...property_path, '' + i], x);
      })
    } else
    if (val?.type == 'dictionary') {
      const dic = <Dictionary>val;
      for (const [k, v] of dic.value.entries()) {
        dic.value.set(k, this.resolveProperty(path, [... property_path, (<StringName>k).value], v))
      }
    } else
    if (val?.type == 'ref') {
      const intResource = val as { type: 'ref', value: InternalResourceEntry };
      if (intResource.value.type != 'ctex')
        this.resolveProperties(path, path, intResource.value.properties)
    }
    propertyCache.set(val_o, val);
    return val
  }

  private resolveProperties(path: string[], property_path: string[], properties: Record<string, VariantType>) {
    for (const [key, val] of Object.entries(properties)) {
      properties[key] = this.resolveProperty(path, [...property_path, key], val);
    }
  }

  private resolveNode(node: SceneNode, packedScene: PackedScene): SceneInstance.Node {
    const path = [... this.rootPath, ...node.path];
    const { type, name, instance } = node;
    if (node.instance?.type == 'ext_res') {
      const { res } = (node.instance as { type: 'ext_res', res: ExtResource });
      if (res.type != 'PackedScene') throw new Error(`Attempted to link Non PackedScene into Scene: ${res.path}`);
      const packed_scene = this.resolver.getExternalScene(res.path);
      if (!packed_scene) throw new Error(`Attempted to link to unresolvable PackedScene into Scene: ${res.path}`);
      const scene = new SceneInstance(packed_scene, this.resolver, path);
      const modifications: { path: string[], node: SceneNode }[] = []
      const addSceneNode = (n: SceneNode) => {
        const path = n.path.slice(node.path.length)
        modifications.push({ path, node: n });
        n.children?.forEach(x => addSceneNode(packedScene.nodes[x]));
      }
      addSceneNode(node);
      scene.applyModifications(modifications, packedScene);
      scene.root.name = node.name;
      this.pathMap[scene.root.path.join('/')] = scene.root;
      this.nodeMap.set(node, scene.root);
      return scene.root;
    }
    const children = node.children.map(x => this.resolveNode(packedScene.nodes[x], packedScene));
    const properties = Object.assign({}, node.properties);
    const result = { path, type, name, instance, properties, children, connections:[] }
    this.pathMap[path.join('/')] = result;
    this.nodeMap.set(node, result);
    return result;
  }

  applyModification(path: string[], node: SceneNode, scene: PackedScene) {
    let current = this.root;
    path.slice(0, path.length - 1).forEach(name => {
      current = current.children.find(x => x.name == name)!;
      if (!current) throw new Error('Attempted to node_path link to non-existent node');
    })
    if (node.type == '_instantiated') {
      if (path.length > 0) {
        current = current.children.find(x => x.name == node.name)!;
        if (!current) throw new Error('Attempted to node_path link to non-existent node');
      }
      current.properties = Object.assign({}, current.properties, node.properties);
      this.resolveProperties(current.path, current.path, current.properties);
    } else {
      current.children.push(this.resolveNode(node, scene));
    }
  }
  
  applyModifications(modifications: { path: string[], node: SceneNode }[], scene: PackedScene) {
    modifications.forEach(({ path, node }) => this.applyModification(path, node, scene));
  }
  
  resolveAllProperties() {
    const nodes: SceneInstance.Node[] = [ this.root ];
    while(nodes.length > 0) {
      const node = nodes.shift();
      if(node) {
        nodes.push(... node.children);
        this.resolveProperties(node.path, node.path, node.properties);
      }
    }
  }
}