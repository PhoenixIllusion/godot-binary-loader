import { GodotPckLoader } from "../three-loader/pck-loader";
import { AnimationMixer } from "three/src/animation/AnimationMixer.js";
import { AnimationClip } from "three/src/animation/AnimationClip.js";
import { DirectionalLight } from "three/src/lights/DirectionalLight.js";
import { createArea3DBody, createRigidBody, createStaticBody, initPhysics, updatePhysics } from "../three-loader/jolt-physics";
import { createCharacter3D } from "./createCharacter3D";
import { Config, setupDefaultScene } from "./default-scene";

const pckLoader = new GodotPckLoader();

export async function render(config: Config = {}) {
  const { scene, renderer, controls, camera } = setupDefaultScene(pckLoader, config);
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
  //const pck = await pckLoader.loadAsync('platformer.pck');
  //pckLoader.main_scene = 'res://level/level.tscn';
  //third-person-shooter.pck
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
    const clip = AnimationClip.findByName( x.clips, pck.animations[idx].autoplay||'walk');
    if(clip) {
      const action = mixer.clipAction( clip );
      action.play();
    }
    return mixer;
  });
  let updatePlayer = (_: number) => {};
  pck.physics.static_bodies.forEach(x => {
    createStaticBody(jolt, scene, x);
  })
  pck.physics.rigid_bodies.forEach(x => {
    createRigidBody(jolt, scene, x);
  })
  pck.physics.areas.forEach(x => {
    createArea3DBody(jolt, scene, x);
  })
  if(pck.physics.character3d_bodies.length) {
    updatePlayer = createCharacter3D(camera, pck.physics.character3d_bodies[0], jolt);
  }
  let last_delta = 0;
  const animate = (delta: number) => {
    const tick = (delta-last_delta)/1000;
    renderer.render(scene, camera);
    controls.update();
    if(last_delta != 0) {
      mixers.forEach(mixer => mixer.update(tick));
      updatePhysics(jolt, tick);
    }
    updatePlayer(tick)
    last_delta = delta;
  }
  console.log("To Display: ", performance.now() - NOW);
  renderer.setAnimationLoop(animate);
}

