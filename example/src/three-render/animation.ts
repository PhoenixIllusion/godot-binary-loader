import { GodotPckLoader } from "../three-loader/pck-loader";
import { AnimationMixer } from "three/src/animation/AnimationMixer.js";
import { AnimationClip } from "three/src/animation/AnimationClip.js";
import { DirectionalLight } from "three/src/lights/DirectionalLight.js";
import { Config, setupDefaultScene } from "./default-scene";

const pckLoader = new GodotPckLoader();

export async function render(config: Config = {}) {
  const { scene, renderer, controls, camera } = setupDefaultScene(pckLoader, config);

  var dirLight = new DirectionalLight(0xffffff, 1);
  dirLight.position.set(10, 10, 5);
  scene.add(dirLight);
  
  pckLoader.main_scene = 'res://player/player.tscn';

  const [pck] = await Promise.all([pckLoader.loadAsync('third-person-shooter.pck')]);
  const animations = pck.animations.map(x => x.build());

  if (pck.scene)
    scene.add(pck.scene);



  const mixers: AnimationMixer[] = animations.map((x,idx) => {
    const mixer = new AnimationMixer(x.target);
    console.log(x.clips.map(x => x.name).join('\n'))
    const clip = AnimationClip.findByName( x.clips, pck.animations[idx].autoPlay||'strafe_allinone-noexp');
    if(clip) {
      const action = mixer.clipAction( clip );
      action.play();
    }
    return mixer;
  });

  let last_delta = 0;
  const animate = (delta: number) => {
    const tick = (delta-last_delta)/1000;
    renderer.render(scene, camera);
    controls.update();
    if(last_delta != 0) {
      mixers.forEach(mixer => mixer.update(tick));
    }
    last_delta = delta;
  }

  renderer.setAnimationLoop(animate);
}

