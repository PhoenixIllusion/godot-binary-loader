

import { BatchedParticleRenderer, ConeEmitter, ConstantColor, ConstantValue, IntervalValue, ParticleEmitter, ParticleSystem, RandomQuatGenerator, RenderMode, Vector4 } from "three.quarks";
import { CPUParticles3D, MeshInstance3D, Node3DTypeMap } from "@phoenixillusion/godot-binary-loader/instance/types/gen/index.js";
import { SceneInstance } from "@phoenixillusion/godot-binary-loader/instance/scene.js";
import { loadMesh } from "./mesh-loader";
import { Scene } from "three/src/scenes/Scene.js";
import { MeshBasicMaterial, ShaderChunk as ShaderChunkT } from "three";
import { ShaderChunk } from "three/src/renderers/shaders/ShaderChunk.js";
import { unwrap_properties_cached } from "../../../dist/instance/util";

export class ThreeParticleEmitter {
  emitter!: ParticleEmitter;

  particlesNode: Node3DTypeMap['CPUParticles3D'] | Node3DTypeMap['GPUParticles3D'];
  constructor(public node: SceneInstance.Node) {
    this.particlesNode = unwrap_properties_cached(node.properties)
  }
  async build() {
    registerShaderChunks();
    const particlesNode = this.particlesNode;
    if (particlesNode.type == 'CPUParticles3D') {
      const particle3d: CPUParticles3D = particlesNode.properties;
      const mesh = await loadMesh({ properties: { mesh: particle3d.mesh } as any as MeshInstance3D, type: 'MeshInstance3D' });
      let ps = new ParticleSystem({
        duration: 100,
        looping: true,
        prewarm: true,
        startLife: new IntervalValue(2.0, 3.0),
        startSpeed: new ConstantValue(1),
        startSize: new ConstantValue(0.1),
        startColor: new ConstantColor(new Vector4(1, 1, 1, 1)),
        startRotation: new RandomQuatGenerator(),
        worldSpace: true,

        emissionOverTime: new ConstantValue(60),
        emissionBursts: [],

        shape: new ConeEmitter({ radius: 0.1, angle: 1 }),
        material: <MeshBasicMaterial>mesh!.material,
        renderMode: RenderMode.VerticalBillBoard
      });
      ps.emitter.rotation.x = -Math.PI / 2;
      this.emitter = ps.emitter;
      return ps.emitter;
    }
  }
}
export function registerShaderChunks() {
  for (const [key, val] of Object.entries(ShaderChunkT)) {
    (<any>ShaderChunk)[key] = val;
  }
}
export function setupParticles(scene: Scene, emitters: ParticleEmitter[]) {
  const batchRenderer = new BatchedParticleRenderer();
  scene.add(batchRenderer);
  emitters.forEach(e =>
    batchRenderer.addSystem(e.system));
  return batchRenderer;
}