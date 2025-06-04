import { GodotPckLoader } from "../three-loader/pck-loader";
import { AnimationMixer } from "three/src/animation/AnimationMixer.js";
import { AnimationClip } from "three/src/animation/AnimationClip.js";
import { DirectionalLight } from "three/src/lights/DirectionalLight.js";
import { Config, setupDefaultScene } from "./default-scene";
import { AnimationTreeDebug } from "../loader/debug/animation-tree-debug";
import { Bone } from "three/src/objects/Bone.js";
import { AnimationTreeInstance } from "../loader/instance/animation-tree";
import { TrackCacheTransform } from "../loader/instance/animation/anim-cache";
const pckLoader = new GodotPckLoader();

export async function render(config: Config = {}) {
  const { scene, renderer, controls, camera } = setupDefaultScene(pckLoader, config);
  var dirLight = new DirectionalLight(0xffffff, 1);
  dirLight.position.set(10, 10, 5);
  scene.add(dirLight);
  
  pckLoader.main_scene = 'res://player/player.tscn';
  //pckLoader.main_scene = 'res://coin/coin.tscn';
  //pckLoader.main_scene = 'res://enemy/enemy.tscn';
  //const [pck] = await Promise.all([pckLoader.loadAsync('platformer.pck')]);
  const [pck] = await Promise.all([pckLoader.loadAsync('third-person-shooter.pck')]);
  const animations = pck.animations.map(x => x.build());

  if (pck.scene)
    scene.add(pck.scene);



  const mixer = new AnimationMixer(scene);
  animations.forEach((x,idx) => {
    console.log(x.clips.map(x => x.name).join('\n'))
    const clip = AnimationClip.findByName( x.clips, pck.animations[idx].autoplay||'jump_4_falling');
    if(clip) {
      const action = mixer.clipAction( clip, x.target );
      action.play();
    }
    return mixer;
  });

  let animationTreeDebug: AnimationTreeDebug | null = null;
  if(pck.animationTrees?.length) {
    animationTreeDebug = new AnimationTreeDebug();
    pck.animationTrees[0].configure(pck.maps.object3d)
    animationTreeDebug.init(pck.animationTrees[0]);
    document.body.appendChild(animationTreeDebug);
    /* set_tree_values(animationTreeDebug.tree!, {
      'eye_blend': { 'blend_amount': 0},
      'state': { 'current_index': 0, 'current_state': 'jump_down' }
    }) */
    animationTreeDebug.tree!.process_animation(0/30.0)

    log_godot_animation(pck.animationTrees[0])
    //action?.play();
  }
  log_object3d_bones(pck.skeletons[0].bones);

  let last_delta = 0;
  const animate = (delta: number) => {
    const tick = (delta-last_delta)/1000;
    renderer.render(scene, camera);
    controls.update();
    if(last_delta != 0) {
      //mixer.update(tick)
    }
    last_delta = delta;
    pck.animationTrees[0]?.process_animation(tick)
    animationTreeDebug?.update();
  }

  renderer.setAnimationLoop(animate);
}

function set_tree_values(tree: AnimationTreeInstance, args: Record<string,Record<string,number|string>>) {
  for(const [node_name, val] of Object.entries(args)) {
    const node = tree.nodes.find( x => x.name == node_name);
    if(node) {
      for(const [attrib, attrib_v] of Object.entries(val)) {
        (<any>node)[attrib] = attrib_v;
      }
    }
  }
}

function log_godot_animation(tree: AnimationTreeInstance) {
  const _set = new Set<string>();
  console.log(JSON.stringify(tree.animation_track_num_to_track_cache.jump_4_falling.map(y => {
    const x = y as TrackCacheTransform;
    if(_set.has(x.bone_idx!.name)) return null;
    _set.add(x.bone_idx!.name)
    return ({
      bone: x.bone_idx!.name,
      //init_loc: [... x.init_loc],
      //init_scale: [... x.init_scale],
      //init_rot: [... x.init_rot],
      loc: [...x.loc],
      scale: [...x.scale],
      rot: [...x.rot]
    })
  }).filter(x => x)
  , undefined, '  '))
}
function log_object3d_bones(bones: Bone[]) {
  console.log(JSON.stringify(bones.map(x => ({bone: x.name, loc: x.position.toArray(), scale: x.scale.toArray(), rot: x.quaternion.toArray() })), undefined, '  '))
}