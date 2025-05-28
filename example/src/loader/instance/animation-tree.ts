import { unwrap_property_paths } from "@phoenixillusion/godot-scene-reader/process/scene/unwrap.js";
import { AnimationNodeBlendSpace2D, AnimationNodeBlendTree, AnimationNodeProperties, AnimationNodeType, AnimationRootNodeType, AnimationTree } from "./types/gen";
import { Vector2 } from "./types/gen/types";

namespace Animation {
  export class Node {
    source: Node[] = [];
    filter_enabled: boolean = false;
    filters: string[] = [];
    constructor(public name: string, public type: keyof AnimationNodeProperties) {}
  }
  export class Animation extends Node {
    constructor(name: string, public animation: string) {
      super(name, 'AnimationNodeAnimation');
    }
  }
  export class Blend2 extends Node {
    blend_amount = 0;
    constructor(name: string) {
      super(name, 'AnimationNodeBlend2');
    }
  }
  export class TimeScale extends Node {
    scale = 1;
    constructor(name: string) {
      super(name, 'AnimationNodeTimeScale');
    }
  }
  export class Add3 extends Node {
    constructor(name: string) {
      super(name, 'AnimationNodeAdd3');
    }
  }
  export class OneShot extends Node {
    autorestart_random_delay = 1;
    fadein_time = 0.25;
    fadeout_time = 0.25;
    constructor(name: string) {
      super(name, 'AnimationNodeOneShot');
    }
  }

  interface TransitionStates {
    name: string;
    break_loop_at_end: boolean;
    auto_advance: boolean;
    reset: boolean;
  }

  export class Transition extends Node {
    xfade_time = 0.2;
    inputs: TransitionStates[] = []
    constructor(name: string) {
      super(name, 'AnimationNodeTransition');
    }
  }
  interface BlendPoint {
    node: Node;
    pos: Vector2;
  }

  export class BlendSpace2D extends Node {
    blend_points: BlendPoint[] = []
    constructor(name: string) {
      super(name, 'AnimationNodeTransition');
    }
  }


export class BlendTree extends Node{

  output: Animation.Node;
  nodeMap: Record<string, Animation.Node> = {};

  constructor(blendTree: AnimationNodeBlendTree, name = 'blend-tree') {
    super('blend-tree', 'AnimationNodeBlendTree')
    let output: Animation.Node | null = null;
    const nodeMap = this.nodeMap;
    const { node_connections, nodes }  = unwrap_property_paths(blendTree) as AnimationBlendTree.Properties;
    for(const [name, treeNode] of Object.entries(nodes)) {
      const { node } = treeNode;
      if(node)
        nodeMap[name] = create(node, name);
    }
     
    for(let i=0;i<node_connections.length;i+=3) {
      const [ input_node, input_index, output_node] = node_connections.slice(i, i+3) as AnimationBlendTree.ConnectionEntry;
      if((input_node == 'output' || nodes[input_node]) && nodes[output_node]) {
        if(input_node == 'output') {
          output = nodeMap[output_node]
        } else {
          nodeMap[input_node].source[input_index] = nodeMap[output_node];
        }
      } else {
        const could_not_find: string[] = []
        if(!nodes[input_node])
            could_not_find.push(input_node)
        if(!nodes[output_node])
            could_not_find.push(output_node)
        throw new Error(`Attempted to build AnimationTree, but could not find either [${could_not_find.join('] or [')}]`)
      }
    }
    if(output === null) {
      throw new Error(`Attempted to build AnimationTree, but could not find [output] node`);
    }
    this.output = output;
  }
}

  export function create(node: AnimationNodeType, name: string): Node {
    switch(node.type) {
        case 'AnimationNodeAnimation':
          return new Animation(name, node.properties.animation)
        case 'AnimationNodeBlend2':
          return new Blend2(name);
        case 'AnimationNodeTimeScale':
          return new TimeScale(name);
        case 'AnimationNodeAdd3':
          return new Add3(name);
        case 'AnimationNodeOneShot':
          return new OneShot(name);
        case 'AnimationNodeTransition':
          return new Transition(name);
        case 'AnimationNodeBlendSpace2D':
          return new BlendSpace2D(name);
        case 'AnimationNodeBlendTree':
          return new BlendTree(node.properties, name);
      }
    throw new Error(`Unknown Node Type ${node.type}`)
  }
}

namespace AnimationBlendTree {
  export interface Node {
    node?: AnimationNodeType;
    position: Vector2;
  }
  
  type RepeatingPattern<T extends any[]> = T extends [infer A, infer B, infer C, ...infer Rest] 
      ? [A, B, C, ...RepeatingPattern<Rest>] 
      : [];
  
  export type ConnectionEntry = [string, 0|1, string];
  export interface Properties {
    nodes: { [key: string]: Node };
    node_connections: RepeatingPattern<ConnectionEntry>
  }
  
}


export class AnimationTreeInstance<T> {

  root: Animation.Node;
  constructor(animationTree: AnimationTree) {
    const root = animationTree.tree_root as AnimationRootNodeType;
    this.root = Animation.create(root, 'root');
  }
}