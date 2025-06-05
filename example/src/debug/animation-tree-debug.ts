
import ELK, { ElkEdge, ElkExtendedEdge, ElkLabel, ElkNode, ElkPort, ElkPrimitiveEdge, LayoutOptions } from 'elkjs';
import elkSVG from 'elkjs-svg';
import ElkWorker from './elk-worker?worker'
import { ReadonlyVec2, vec2 } from "gl-matrix";

import { Node as AnimationNode } from '@phoenixillusion/godot-binary-loader/instance/animation/node.js'
import { AnimationTreeInstance } from "@phoenixillusion/godot-binary-loader/instance/animation-tree.js";
import { Animation } from "@phoenixillusion/godot-binary-loader/instance/animation/animation.js";
import { AddNode, BlendNode, SubNode } from "@phoenixillusion/godot-binary-loader/instance/animation/sync.js";
import { TimeScale } from "@phoenixillusion/godot-binary-loader/instance/animation/time-scale.js";
import { Transition } from "@phoenixillusion/godot-binary-loader/instance/animation/transition.js";
import { OneShot } from "@phoenixillusion/godot-binary-loader/instance/animation/one-shot.js";
import { AnimationNodeOneShot } from "@phoenixillusion/godot-binary-loader/instance/types/gen/index.js";
import { BlendSpace2D } from "@phoenixillusion/godot-binary-loader/instance/animation/blendspace-2d.js";


(<any>window).g = null;
(<any>window).i = null;
interface ElkNodeSVG {
  style?: string;
  class?: string[];
  attributes?: Record<string,any>
}

const bg_colors: Record<string,string> = {
  AnimationNodeAnimation: 'fill: #ff9999',

  AnimationNodeBlend2: 'fill: #9999ff',
  AnimationNodeBlend3: 'fill: #9999ff',
  
  AnimationNodeAdd2: 'fill: #9ff999',
  AnimationNodeAdd3: 'fill: #99ff99',

  AnimationNodeTimeScale: 'fill: #999999',
  AnimationNodeTimeSeek: 'fill: #99ffff'
}

const style =
`<style>
  .animation-debug-container {
  pointer-events: none;
  font-family: monospace;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; height: 100%;
  }
  .animation-debug-container .Node {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .animation-debug-container .Node input {
    pointer-events: auto;
    width: 4em;
    height: 1.2em;
    line-height: 1.2em;
  }
  .animation-debug-container .AnimationNodeAnimation {
    justify-content: flex-end;
  }
  .animation-debug-container .progress {
    position: relative;
    align-self: stretch;
    height: 1.2em;
    margin: 5px;
    border: 1px solid black;
    color: white;
    font-size: 15px;
    line-height: 1.2em;
    font-weight: bold;
    background: #999999;
  }
  .animation-debug-container .progress .bar {
    height: 100%;
    background: blue;
    width: var(--time-progress);
    position: absolute;
    z-index: 0;
  }
  .animation-debug-container .progress .progress-text {
    margin-left: 5px;
    position: absolute;
    display: block;
    z-index: 1;
  }
  svg .clickable {
    cursor: pointer;
  }
  svg .port.active text {
    text-decoration: underline;
    font-weight: bold;
  }
  svg .blend-space-map .graph { fill: rgba(255,255,255,0.3); }
  svg .blend-space-map .blend_point { fill: #999999; stroke: #000 }
  svg .blend-space-map .blend_position { fill: #FF0000; }
}
</style>`

const NODE_WIDTH = 120;
const NODE_HEIGHT = 100;
const NODE_PADDING = 12;

const BLEND_SPACE_2D_WIDTH = 300;
const BLEND_SPACE_2D_HEIGHT = 300;
const BLEND_SPACE_2D_PADDING = 5;

function makeNodeId(node: AnimationNode) {
  return `node-${node.name.replace(' ','_')}`;
}

function setSvgOpts(svg: SVGElement, attr: Record<string,string|number>) {
  for(const [key, val] of Object.entries(attr)) {
    svg.setAttribute(key, ''+val)
  }
}
function createSvgEl(tag: string, attr: Record<string,string|number> ): SVGElement {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  setSvgOpts(el, attr);
  return el;
}

function wireFeedbackElement(node: AnimationNode, div: HTMLDivElement, updateRoutines: (() => void)[] = []) {
  if(node.type == 'AnimationNodeAnimation') {
    div.innerHTML = `<div class='progress'><div class='bar'></div><span class='progress-text'></span></div>`;
    const bar = div.querySelector('.progress-text') as HTMLSpanElement;
    updateRoutines.push(() => {
      const progress = node.current_length > 0 ? `${(node.current_position*100/node.current_length).toFixed(2)}%`: '0%';
      div.style.setProperty('--time-progress', progress);
      bar.innerText = progress;
    });
  }
  if(node instanceof BlendNode || node instanceof AddNode || node instanceof SubNode || node instanceof TimeScale) {
    div.innerHTML = `<input type='number' max=1 min=0 step=0.01 class='input-num' />`;
    const _in = div.querySelector('input') as HTMLInputElement;
    if(node.type.endsWith('3')) {
      _in.min='-1';
    }
    if(node.type == 'AnimationNodeTimeScale') {
      _in.max='10'
    }
    let val = '0';
    let set_val = (_: number) => {}
    if(node instanceof BlendNode) { val = node.blend_amount.toFixed(2); set_val = v => node.blend_amount = v; }
    if(node instanceof AddNode) { val = node.add_amount.toFixed(2); set_val = v => node.add_amount = v; }
    if(node instanceof SubNode) { val = node.sub_amount.toFixed(2); set_val = v => node.sub_amount = v; }
    if(node instanceof TimeScale) { val = node.scale.toFixed(2); set_val = v => node.scale = v; }
    _in.value = val;
    _in.onchange = () => { set_val(parseFloat(_in.value)); }
  }
}

function constructBlendSpace2D(root: SVGElement, node: BlendSpace2D, dim: {top: number, left: number, width: number, height: number}): void {
  const [x, y, width, height] = [dim.left+BLEND_SPACE_2D_PADDING, dim.top+BLEND_SPACE_2D_PADDING,
     BLEND_SPACE_2D_WIDTH-2*BLEND_SPACE_2D_PADDING, BLEND_SPACE_2D_HEIGHT-2*BLEND_SPACE_2D_PADDING]
  const rect = createSvgEl('rect', { x, y, width, height, class: 'graph', 'pointer-events':'bounding-box' })

  let minX = 1e20,maxX=-1e20,minY=1e20,maxY=-1e20;
  node.blend_points.map(x => x.pos).forEach(([x,y])=> {
    minX = Math.min(minX,x);maxX = Math.max(maxX,x);
    minY = Math.min(minY,y);maxY = Math.max(maxY,y);
  })
  const range = [minX, minY, maxX-minX, maxY-minY];
  range[0] -= range[2]*0.05; range[2] *= 1.1;
  range[1] -= range[3]*0.05; range[3] *= 1.1; // extend viewport by 5% in all direction;
  function mapBlendToSvg(p: ReadonlyVec2): [number,number] {
    const px = x + (p[0] - range[0]) / range[2] * width;
    const py = y + height + (range[1] - p[1]) / range[3] * height;
    return [px,py];
  }
  function mapSvgToBlend(p: ReadonlyVec2): [number,number] {
    const [px, py] = p;
    const sx = ((px - x)/width * range[2]) + range[0];
    const sy = ((py - y - height)/height * range[3]) - range[1]
    return [sx,-sy];
  }

  const curLoc = mapBlendToSvg(node._blend_position)
  const point = createSvgEl('circle', { r: 5, cx: curLoc[0], cy: curLoc[1], class: 'blend_position' })
  let is_down = false;
  const setPoint = (e: MouseEvent) => {
    if(is_down) {
      const { offsetX, offsetY } = e;
      vec2.copy(node._blend_position, mapSvgToBlend([offsetX, offsetY]))
      point.setAttribute('cx',''+offsetX)
      point.setAttribute('cy',''+offsetY)
    }
  }

  rect.addEventListener('mousedown', (e) => { is_down = true; setPoint(e) })
  rect.addEventListener('mouseleave', () => { is_down = false })
  rect.addEventListener('mouseup',  () => { is_down = false })
  rect.addEventListener('mousemove', e => setPoint(e))
  const t = node.triangles;
  for(let i = 0; i< t.length; i+=3) {
    const p0 = mapBlendToSvg(node.blend_points[t[i+0]].pos).join(',')
    const p1 = mapBlendToSvg(node.blend_points[t[i+1]].pos).join(',')
    const p2 = mapBlendToSvg(node.blend_points[t[i+2]].pos).join(',')
    const path = createSvgEl('path', { d: `M ${p0} L ${p1} L ${p2} L ${p0}` })
    root.append(path);
  }
  node.blend_points.forEach(p => {
    const point = mapBlendToSvg(p.pos);
    const blend_p = createSvgEl('circle', { r: 5, cx: point[0], cy: point[1], class: 'blend_point'})
    root.append(blend_p);
  })
  root.append(point);
  root.append(rect);
}

export class AnimationTreeDebug extends HTMLElement {
  tree: AnimationTreeInstance | null = null;

  svg: SVGElement | null = null;

  nodes: AnimationNode[] = [];
  updateRoutines: (() => void)[] = [];

  connectedCallback() {
  }

  disconnectedCallback() {
    if(this.svg)
      this.removeChild(this.svg);
    this.svg = null;
  }
  init(tree: AnimationTreeInstance) {
    this.tree = tree;
    const elk = new ELK({workerFactory: () => new ElkWorker()});
    const edges: ElkEdge[] = [];
    const graph: ElkNode = {
      id: "root",
      layoutOptions: {
        "elk.algorithm": "layered",
        "org.eclipse.elk.padding": "[top=12,left=12,bottom=12,right=12]"
      },
      children: [],
      edges
    }
    const toElkNode = (node: AnimationNode) => {
      const baseId = makeNodeId(node);
      const ports: ElkPort[] = node.source.map((_,idx) => makePort(node.source_names[idx], idx));
      node.source.forEach((x, idx) => makeEdge(x, idx));
      const elkN: ElkNode & ElkNodeSVG = {
        id: baseId,
        labels: [makeLabel(baseId, 'name: '+node.name, {
            "org.eclipse.elk.nodeLabels.placement": "[H_LEFT, V_TOP, INSIDE]"
          },{style: 'font-weight: bold'}),makeLabel(baseId+'-type', node.type.replace('AnimationNode',''), {
            "org.eclipse.elk.nodeLabels.placement": "[H_LEFT, V_BOTTOM, OUTSIDE]"
          }, { style: 'font-style: italic'})],
        width: NODE_WIDTH,
        height: NODE_HEIGHT,
        ports,
        layoutOptions: {
        "org.eclipse.elk.nodeLabels.padding": `[top=${NODE_PADDING},left=${NODE_PADDING},bottom=${NODE_PADDING},right=${NODE_PADDING}]`,
        "org.eclipse.elk.nodeSize.options": "[COMPUTE_PADDING]",
        "org.eclipse.elk.portLabels.placement": "[NEXT_TO_PORT_IF_POSSIBLE]",
        }
      }
      if(node instanceof BlendSpace2D) {
        elkN.width = BLEND_SPACE_2D_WIDTH;
        elkN.height = BLEND_SPACE_2D_HEIGHT;
        
      }
      function makePortId(idx: number) {
        return `${baseId}-port-${idx}`;
      }
      function makeLabel(baseId: string, text: string, layoutOptions?: LayoutOptions, extra: ElkNodeSVG = {}): ElkLabel {
        const label: ElkLabel & ElkNodeSVG= {
          id: `${baseId}-label`, text, layoutOptions, height: 10, ... extra
        };
        return label
      }
      function makePort(name: string, idx: number): ElkPort & ElkNodeSVG {
        const id = makePortId(idx);
        return {
          id , labels: [makeLabel(id, name)],
          layoutOptions: {
            "org.eclipse.elk.spacing.labelPortHorizontal": "[15]" as any
          },
          style: 'padding-left: 5px'
        }
      }
      function makeEdge(nodeB: AnimationNode, idx: number) {
        const id = `${baseId}-edge-${idx};`
        const edge: ElkPrimitiveEdge = {
          id, 
          target: baseId,
          targetPort: ports[idx].id,
          source: makeNodeId(nodeB),
          layoutOptions: {
            "	org.eclipse.elk.core.options.EdgeType": "[DIRECTED]"
          }
        };
        edges.push(edge);
      }
      function makeCenterText(value: string) {
        elkN.labels?.push(makeLabel(baseId+'-value', value, {
            "org.eclipse.elk.nodeLabels.placement": "[H_CENTER, V_CENTER, INSIDE]"
          }, { style: 'font-size: 12;font-weight:bold;', attributes: { 'text-anchor': 'middle'}}))
      }
      if(node instanceof Animation) {
        makeCenterText(node.animation);
      }
      if(bg_colors[node.type]) {
        elkN.style = bg_colors[node.type]
      }
      graph.children?.push(elkN)
      node.source.forEach(toElkNode);
      this.nodes.push(node);
    }
    toElkNode(tree.root);
    elk.layout(graph)
      .then(data => {
        var renderer = new elkSVG.Renderer();
        data.edges?.forEach(edge => {
          (<ElkExtendedEdge>edge).sources = [(<ElkPrimitiveEdge>edge).source];
          (<ElkExtendedEdge>edge).targets = [(<ElkPrimitiveEdge>edge).target];
        })
        data.children?.forEach( (child) => {
          child.ports?.forEach(port => {
          port.labels?.forEach(label => {
            label.x = label.x! + 5;
          })
        })})
        var svg = renderer.toSvg(data);
        this.innerHTML = style+svg
        this.svg = this.children[1] as SVGElement;
        const svgDim = this.svg.getBoundingClientRect();
        const animationDebugContainer = document.createElement('div');
        animationDebugContainer.className = 'animation-debug-container'
        this.append(animationDebugContainer);

        for(const node of this.nodes) {
          const node_id = makeNodeId(node);
          const ele = this.svg.querySelector('#'+node_id)
          if(ele) {
            const dim = ele.getBoundingClientRect();
            const div = document.createElement('div');
            div.className = `Node `+node.type;
            div.style.position = 'absolute';
            div.style.width = dim.width+'px'
            div.style.height = dim.height+'px'
            div.style.top = dim.top+'px'
            div.style.left = dim.left+'px'
            animationDebugContainer.append(div);
            wireFeedbackElement(node, div, this.updateRoutines);
            if(ele && node instanceof BlendSpace2D) {
              const g = createSvgEl('g', { class: 'blend-space-map'})
              this.svg.append(g);
              constructBlendSpace2D(g, node, { top: dim.top - svgDim.top, left: dim.left - svgDim.left, width: dim.width, height: dim.height });
            }
          }
          if(ele && node instanceof Transition) {
            const ports = Array.from(this.svg.querySelectorAll('g[id^='+node_id+'-port]'))
            this.updateRoutines.push(() => {
              const selectedIndex = node.input_data.findIndex( x => x.name == node.current_state);
              if(selectedIndex >= 0) {
                ports.forEach((g,idx) => { {g.classList.add('clickable'); if(idx == selectedIndex) g.classList.add('active'); else g.classList.remove('active') } })
              }
            });
            ports.forEach((g,idx) => g.addEventListener('click', () => { node.transition_request = node.input_data[idx].name }))
          }
          if(ele && node instanceof OneShot) {
            const ports = Array.from(this.svg.querySelectorAll('g[id^='+node_id+'-port]'))
            this.updateRoutines.push(() => {
              const selectedIndex = node.active ? 1: 0;
              if(selectedIndex >= 0) {
                ports.forEach((g,idx) => { if(idx == selectedIndex) g.classList.add('active'); else g.classList.remove('active') })
              }
            });
            ports.forEach((g,idx) => {g.classList.add('clickable');g.addEventListener('click', () => {if(!node.active && idx== 1) node.request = AnimationNodeOneShot.OneShotRequest.ONE_SHOT_REQUEST_FIRE })})
          }
        }
      })
  }

  last_tick = 0;
  update() {
    if(this.svg && this.tree) {
      const NOW = performance.now();
      if(NOW - this.last_tick > 50) {
        this.updateRoutines.forEach(cb => cb());
        this.last_tick = NOW;
      }
    }
  }
}
customElements.define("animation-tree-debug", AnimationTreeDebug);
