import { GodotPckLoader } from "../three-loader/pck-loader";
import { AnimationMixer } from "three/src/animation/AnimationMixer.js";
import { AnimationClip } from "three/src/animation/AnimationClip.js";
import { DirectionalLight } from "three/src/lights/DirectionalLight.js";
import { initPhysics, updatePhysics } from "../three-loader/jolt-physics";
import { Config, setupDefaultScene } from "./default-scene";
import { rigPhysics } from "./physics";

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
  pckLoader.main_scene = 'res://vehicles/tow_truck.tscn';
  //pckLoader.main_scene = 'res://level_1.tscn';
  //pckLoader.main_scene = 'res://mesh_library.tscn';

  //const pck = await pckLoader.loadAsync('index.pck');
  //const pck = await pckLoader.loadAsync('platformer.pck');
  //pckLoader.main_scene = 'res://level/level.tscn';
  //third-person-shooter.pck
  const NOW = performance.now();
  const [pck, jolt] = await Promise.all([pckLoader.loadAsync('truck-town.pck'), initPhysics()]);
  if (1 && pck.scene)
    scene.add(pck.scene);
  else {
    var dirLight = new DirectionalLight(0xffffff, 1);
    dirLight.position.set(10, 10, 5);
    scene.add(dirLight);
  }


  const mixer = new AnimationMixer(scene);
  pck.animationTrees?.forEach(animTree => {
    animTree.configure(pck.maps.object3d);
    const animNode = pck.animations.findIndex(x => x.node == animTree.animationPlayerNode);
    if (animNode >= 0) {
      pck.animations.splice(animNode, 1);
    }
  });
  const animations = pck.animations.map(x => x.build());
  animations.forEach((x, idx) => {
    console.log(x.clips.map(x => x.name).join('\n'))
    const clip = AnimationClip.findByName(x.clips, pck.animations[idx].autoplay || 'jump_4_falling');
    if (clip) {
      const action = mixer.clipAction(clip, x.target);
      action.play();
    }
    return mixer;
  });

  let updates: ((_: number) => void)[] = [];
  if (pck.particles.length) {
    //const batchRender = setupParticles(scene, pck.particles.map(x => x.emitter));
    //updates.push((tick) => batchRender.update(tick));
  }

  rigPhysics(pck, camera, scene, jolt, updates);

  let last_delta = 0;
  const animate = (delta: number) => {
    const tick = (delta - last_delta) / 1000;
    renderer.render(scene, camera);
    controls.update();
    if (last_delta != 0) {
      mixer.update(tick);
      updatePhysics(jolt, tick);
      updates.forEach(run => run(tick))
    }
    last_delta = delta;
  }
  console.log("To Display: ", performance.now() - NOW);
  renderer.setAnimationLoop(animate);
}

