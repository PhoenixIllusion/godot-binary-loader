import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PerspectiveCamera } from "three/src/cameras/PerspectiveCamera.js";
import { WebGLRenderer } from "three/src/renderers/WebGLRenderer.js";
import { Scene } from "three/src/scenes/Scene.js";
import { AmbientLight } from "three/src/lights/AmbientLight.js";
import { Color } from "three/src/math/Color.js";
import { GodotPckLoader } from "../three-loader/pck-loader";

export interface Config {
  initialZoom?: number;
  main_scene?: string;
}


export function setupDefaultScene(pckLoader: GodotPckLoader, config: Config) {
    const canvas = document.getElementById('app') as HTMLCanvasElement;
    canvas.width = (canvas.clientWidth || 640);
    canvas.height = (canvas.clientHeight || 640);
    const scene = new Scene();
    const renderer = new WebGLRenderer({ canvas, powerPreference: 'low-power', antialias: true });
    renderer.setSize(canvas.width, canvas.height, false);
    renderer.setClearColor(0xFF00FF)
    let camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const controls = new OrbitControls(camera, renderer.domElement);
  
    ['astc','etc','pvrtc','s3tc','bptc','rgtc'].forEach(s => {
      if(renderer.extensions.has('WEBGL_compressed_texture_'+s)) {
        pckLoader.compressed_texture_formats.push(`.${s}`);
      }
      if(renderer.extensions.has('EXT_texture_compression_'+s)) {
        pckLoader.compressed_texture_formats.push(`.${s}`);
      }
    })
  
    const ambientLight = new AmbientLight(new Color(0xffffff), 0.5);
    scene.add(ambientLight);
    camera.position.z = 1 * (config.initialZoom ||5);
    camera.position.y = camera.position.z / 2;
    controls.update();

    return { scene, renderer, controls, camera }
}