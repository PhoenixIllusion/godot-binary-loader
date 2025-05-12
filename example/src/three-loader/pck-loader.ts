import { try_open_bin_config } from "@phoenixillusion/godot-scene-reader/parse/binary/ecfg.js";
import { try_open_pack } from "@phoenixillusion/godot-scene-reader/pck/parser.js";
import { Object3D } from "three/src/core/Object3D.js";
import { FileLoader } from "three/src/loaders/FileLoader.js";
import { Loader } from "three/src/loaders/Loader.js";
import { LoadingManager } from "three/src/loaders/LoadingManager.js";
import { PckLoader } from "../loader/pck-loader";
import { SceneInstance } from "../loader/instance/scene";
import { buildScene } from "./scene-builder";

export interface GodotPck {
  scene: Object3D | null;
}

export class GodotPckLoader extends Loader<GodotPck> {
  main_scene: string | null = null;


	constructor( manager?: LoadingManager ) {
		super( manager );
	}

  override load(url: string, onLoad: (data: GodotPck) => void, onProgress?: (event: ProgressEvent) => void, onError?: (err: unknown) => void): void {
		const scope = this;
		const loader = new FileLoader( this.manager );
		loader.setPath( this.path );
		loader.setRequestHeader( this.requestHeader );
		loader.setWithCredentials( this.withCredentials );
    loader.setResponseType('arraybuffer');
		loader.load( url, async function ( resp: ArrayBuffer | string ) {
			try {
				onLoad( await scope.parse(url, <ArrayBuffer>resp ) );
			} catch ( e ) {
				if ( onError ) {
					onError( e );
				} else {
					console.error( e );
				}
				scope.manager.itemError( url );
			}
		}, onProgress, onError );
  }
  override loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<GodotPck> {
    return new Promise((resolve, reject) => this.load(url, resolve, onProgress, reject));
  }

  async parse(url: string, buffer: ArrayBuffer): Promise<GodotPck> {
    const TIMER = performance.now();
    const pck = try_open_pack(url, buffer);
    let name = url;
    const project = pck['project.binary'];
    const loader = new PckLoader(pck);
    if(!this.main_scene && project) {
      const settings = await try_open_bin_config(project.getData());
      name = settings['application/config/name'] ?? name;
      this.main_scene = settings['application/run/main_scene'] || null;
    }
    let scene: Object3D | null = null;
    if(this.main_scene) {
       await loader.resolve(this.main_scene);
       const main_entry = loader.getExternalScene(this.main_scene)
      if(main_entry) {
        const instance = new SceneInstance(main_entry, loader);
        scene = buildScene(instance.root);
      }
    }
    return { scene };
  }
}