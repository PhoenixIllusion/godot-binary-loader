import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PerspectiveCamera } from "three/src/cameras/PerspectiveCamera.js";
import { WebGLRenderer } from "three/src/renderers/WebGLRenderer.js";
import { Scene } from "three/src/scenes/Scene.js";
import { GodotPckLoader } from "../three-loader/pck-loader";
import { AmbientLight } from "three/src/lights/AmbientLight.js";
import { AnimationMixer } from "three/src/animation/AnimationMixer.js";
import { AnimationClip } from "three/src/animation/AnimationClip.js";
import { DirectionalLight } from "three/src/lights/DirectionalLight.js";
import { Color } from "three/src/math/Color.js";
import { createRigidBody, createStaticBody, initPhysics, updatePhysics } from "../three-loader/jolt-physics";

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
  const renderer = new WebGLRenderer({ canvas, powerPreference: 'low-power', antialias: true });
  renderer.setSize(canvas.width, canvas.height, false);
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
  if(0){
    const dir = new DirectionalLight();
    dir.position.set(0,20,4)
    scene.add(dir);
  }

  camera.position.z = 1 * (config.initialZoom ||5);
  camera.position.y = camera.position.z / 2;

  controls.update();
  //pckLoader.main_scene = 'res://first.tscn';
  //pckLoader.main_scene = 'res://sample/sample-mesh-lib.glb';
  //pckLoader.main_scene = 'res://enemy/enemy.glb';
  pckLoader.main_scene = 'res://game.tscn';
  //pckLoader.main_scene = 'res://player/player.tscn';
  //pckLoader.main_scene = 'res://coin/coin.tscn';

  //pckLoader.main_scene = 'res://town/town_scene.tscn';
  //pckLoader.main_scene = 'res://vehicles/tow_truck.tscn';
  //pckLoader.main_scene = 'res://level_1.tscn';
  //pckLoader.main_scene = 'res://mesh_library.tscn';

  //const pck = await pckLoader.loadAsync('index.pck');

  const NOW = performance.now();
  const [pck, jolt] = await Promise.all([pckLoader.loadAsync('platformer.pck'), initPhysics()]);
  const animations = pck.animations.map(x => x.build());
  if (1 && pck.scene)
    scene.add(pck.scene);
  else
  {
    var dirLight = new DirectionalLight(0xffffff, 1);
    dirLight.position.set(10, 10, 5);
    scene.add(dirLight);
  }


  const mixers: AnimationMixer[] = animations.map((x,idx) => {
    const mixer = new AnimationMixer(x.target);
    const clip = AnimationClip.findByName( x.clips, pck.animations[idx].autoPlay||'spin');
    if(clip) {
      const action = mixer.clipAction( clip );
      action.play();
    }
    return mixer;
  });
  pck.physics.static_bodies.forEach(x => {
    createStaticBody(jolt, scene, x);
  })
  pck.physics.rigid_bodies.forEach(x => {
    createRigidBody(jolt, scene, x);
  })
  let last_delta = 0;
  const animate = (delta: number) => {
    renderer.render(scene, camera);
    controls.update();
    if(last_delta != 0) {
      mixers.forEach(mixer => mixer.update((delta-last_delta)/1000));
      updatePhysics(jolt, (delta-last_delta)/1000);
    }
    last_delta = delta;
  }
  alert(performance.now() - NOW);
  renderer.setAnimationLoop(animate);
}
