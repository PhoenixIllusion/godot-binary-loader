import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PerspectiveCamera } from "three/src/cameras/PerspectiveCamera.js";
import { AmbientLight } from "three/src/lights/AmbientLight.js";
import { DirectionalLight } from "three/src/lights/DirectionalLight.js";
import { WebGLRenderer } from "three/src/renderers/WebGLRenderer.js";
import { Scene } from "three/src/scenes/Scene.js";
import { GodotPckLoader } from "../three-loader/pck-loader";
import { BasicShadowMap } from "three/src/constants.js";

interface Config {
  initialZoom?: number;
  main_scene?: string;
}

const pckLoader = new GodotPckLoader();

export async function render(config: Config = {}) {
  const canvas = document.getElementById('app') as HTMLCanvasElement;
  canvas.width = (canvas.parentElement?.clientWidth || 640);
  canvas.height = (canvas.parentElement?.clientHeight || 640);
  const scene = new Scene();
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new WebGLRenderer({ canvas, powerPreference: 'low-power', antialias: true });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = BasicShadowMap;
  renderer.setSize(canvas.width, canvas.height, false);
  const controls = new OrbitControls(camera, renderer.domElement);
  const directionalLight = new DirectionalLight(0xffffff, 0.75);
  directionalLight.position.set(30, 100, 0)
  directionalLight.castShadow = true;
  const ambientLight = new AmbientLight(0xffffff, 0.25);
  scene.add(directionalLight, ambientLight);
  
  camera.position.z = 1 * (config.initialZoom || 20);
  camera.position.y = camera.position.z / 2;

  controls.update();
  const animate = () => {
    renderer.render(scene, camera);
    controls.update();
  }
  renderer.setAnimationLoop(animate);
  //pckLoader.main_scene = 'res://first.tscn';
  //pckLoader.main_scene = 'res://sample/sample-mesh-lib.glb';
  //pckLoader.main_scene = 'res://enemy/enemy.glb';
  pckLoader.main_scene = 'res://game.tscn';
  const pck = await pckLoader.loadAsync('./index.pck');
  if(pck.scene)
    scene.add(pck.scene);
}
