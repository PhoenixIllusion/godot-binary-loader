import { Object3D } from "three/src/core/Object3D.js";
import { FileLoader } from "three/src/loaders/FileLoader.js";
import { Loader } from "three/src/loaders/Loader.js";
import { LoadingManager } from "three/src/loaders/LoadingManager.js";
import { Camera } from "three/src/cameras/Camera.js";
import { Texture } from "three/src/textures/Texture.js";
import { Mesh } from "three/src/objects/Mesh.js";
import { ThreeAnimation } from "./animation";
import { Skeleton } from "three/src/objects/Skeleton.js";
import { DefaultPhysicsData, PhysicsData } from "./physics";
import { ThreeAnimationTree } from "./animation-tree";
import { BinResource } from "@phoenixillusion/godot-scene-reader/parse/binary/resource.js";
import { cTexFile } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2.js";
import { SceneInstance } from "@phoenixillusion/godot-binary-loader/instance/scene.js";
import { PckLoader } from "@phoenixillusion/godot-binary-loader/pck-loader.js";

import { ThreeParticleEmitter } from "./particle";
import { LightmapGIInstance } from "@phoenixillusion/godot-binary-loader/instance/lightmap_gi.js";

export interface GodotPck {
  scene: Object3D | null;
  camera: Camera[];
  mesh: Mesh[];
  textures: Texture[];
  skeletons: Skeleton[];
  animations: ThreeAnimation[];
  animationTrees: ThreeAnimationTree[];
  particles: ThreeParticleEmitter[];
  physics: PhysicsData;
  lightmapGI: LightmapGIInstance[];
  maps: {
    object3d: Map<SceneInstance.Node, Object3D>
  }
}

export class GodotPckLoader extends Loader<GodotPck> {
  main_scene: string | null = null;

  compressed_texture_formats: string[] = [];
  worker_count = 0;

  constructor(manager?: LoadingManager) {
    super(manager);
  }

  override load(url: string, onLoad: (data: GodotPck) => void, onProgress?: (event: ProgressEvent) => void, onError?: (err: unknown) => void): void {
    const scope = this;
    const loader = new FileLoader(this.manager);
    loader.setPath(this.path);
    loader.setRequestHeader(this.requestHeader);
    loader.setWithCredentials(this.withCredentials);
    loader.setResponseType('arraybuffer');
    loader.load(url, async function (resp: ArrayBuffer | string) {
      try {
        onLoad(await scope.parse(url, <ArrayBuffer>resp));
      } catch (e) {
        if (onError) {
          onError(e);
        } else {
          console.error(e);
        }
        scope.manager.itemError(url);
      }
    }, onProgress, onError);
  }
  override loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<GodotPck> {
    return new Promise((resolve, reject) => this.load(url, resolve, onProgress, reject));
  }

  async parse(url: string, buffer: ArrayBuffer): Promise<GodotPck> {
    const pckData = await PckLoader.load({ path: url, allowed_extensions: this.compressed_texture_formats, buffer, resolve_scene: this.main_scene, worker_count: this.worker_count })
    const scene: GodotPck = {
      scene: null, camera: [], mesh: [], textures: [], skeletons: [], animations: [],
       animationTrees: [], particles: [], lightmapGI: [],
      physics: DefaultPhysicsData(), maps: { object3d: new Map() }
    };
    if (pckData.resolved_scene) {
      const main_entry = pckData.scenes[pckData.resolved_scene];
      if (main_entry) {
        const instance = new SceneInstance(main_entry, {
          getExternal<T extends BinResource | cTexFile>(path: string): T | undefined {
            return pckData.resources[path] as T;
          },
          getExternalScene(path) {
            return pckData.scenes[path]
          },
        });
        instance.bindParents();
        const { buildScene } = await import("./scene-builder");
        scene.scene = await buildScene(scene, new Object3D(), instance.root);
      }
    }
    return scene;
  }
}