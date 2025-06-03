import { GodotPckLoader } from "../three-loader/pck-loader";
import { AnimationMixer } from "three/src/animation/AnimationMixer.js";
import { AnimationClip } from "three/src/animation/AnimationClip.js";
import { DirectionalLight } from "three/src/lights/DirectionalLight.js";
import { Config, setupDefaultScene } from "./default-scene";
import { AnimationTreeDebug } from "../loader/debug/animation-tree-debug";

const pckLoader = new GodotPckLoader();

export async function render(config: Config = {}) {
  const { scene, renderer, controls, camera } = setupDefaultScene(pckLoader, config);
  var dirLight = new DirectionalLight(0xffffff, 1);
  dirLight.position.set(10, 10, 5);
  scene.add(dirLight);
  
  pckLoader.main_scene = 'res://player/player.tscn';

  //const [pck] = await Promise.all([pckLoader.loadAsync('platformer.pck')]);
  const [pck] = await Promise.all([pckLoader.loadAsync('third-person-shooter.pck')]);
  const animations = pck.animations.map(x => x.build());

  if (pck.scene)
    scene.add(pck.scene);



  const mixer = new AnimationMixer(scene);
  animations.forEach((x,idx) => {
    console.log(x.clips.map(x => x.name).join('\n'))
    const clip = AnimationClip.findByName( x.clips, pck.animations[idx].autoPlay);
    if(clip) {
      const action = mixer.clipAction( clip, x.target );
      action.play();
    }
    return mixer;
  });

  let animationTreeDebug: AnimationTreeDebug | null = null;
  if(pck.animationTrees?.length) {
    animationTreeDebug = new AnimationTreeDebug();
    animationTreeDebug.init(pck.animationTrees[0]);
    document.body.appendChild(animationTreeDebug);
    //const action = pck.animationTrees[0].getAnimationAction(mixer);
    //action?.play();
  }

  let last_delta = 0;
  const animate = (delta: number) => {
    const tick = (delta-last_delta)/1000;
    renderer.render(scene, camera);
    controls.update();
    if(last_delta != 0) {
      mixer.update(tick)
    }
    last_delta = delta;
    animationTreeDebug?.tree?.process_animation(tick/10)
    animationTreeDebug?.update();
  }

  renderer.setAnimationLoop(animate);
}

