import { GodotPckLoader } from "../three-loader/pck-loader";
import { AnimationMixer } from "three/src/animation/AnimationMixer.js";
import { AnimationClip } from "three/src/animation/AnimationClip.js";
import { DirectionalLight } from "three/src/lights/DirectionalLight.js";
import { initPhysics, updatePhysics } from "../three-loader/jolt-physics";
import { Config, setupDefaultScene } from "./default-scene";
import { rigPhysics } from "./physics";
import { navigate_nodepath } from "@phoenixillusion/godot-binary-loader/instance/util.js";
import { SceneInstance } from "@phoenixillusion/godot-binary-loader/instance/scene.js";
import { Mesh } from "three/src/objects/Mesh.js";
import { getTexture } from "../three-loader/texture-loader";
import { MeshStandardMaterial } from "three/src/materials/MeshStandardMaterial.js";
import { PlaneGeometry } from "three/src/geometries/PlaneGeometry.js";
import { MeshLambertMaterial } from "three/src/materials/MeshLambertMaterial.js";

const pckLoader = new GodotPckLoader();

export async function render(config: Config = {}) {
  const { scene, renderer, controls, camera } = setupDefaultScene(pckLoader, config);
  pckLoader.main_scene = 'res://test.tscn';
  //pckLoader.main_scene = 'res://sample/sample-mesh-lib.glb';
  //pckLoader.main_scene = 'res://enemy/enemy.glb';
  //pckLoader.main_scene = 'res://game.tscn';
  //pckLoader.main_scene = 'res://scenes/level1.tscn'
  //pckLoader.main_scene = 'res://player/player.tscn';
  //pckLoader.main_scene = 'res://coin/coin.tscn';

  //pckLoader.main_scene = 'res://town/town_scene.tscn';
  //pckLoader.main_scene = 'res://car_select/car_select.tscn';
  //pckLoader.main_scene = 'res://level_1.tscn';
  //pckLoader.main_scene = 'res://mesh_library.tscn';

  //const pck = await pckLoader.loadAsync('index.pck');
  //const pck = await pckLoader.loadAsync('platformer.pck');
  //pckLoader.main_scene = 'res://level/level.tscn';
  //third-person-shooter.pck
  //truck-town.pck
  const NOW = performance.now();
  //const [pck, jolt] = await Promise.all([pckLoader.loadAsync('platformer.pck'), initPhysics()]);
  const [pck, jolt] = await Promise.all([pckLoader.loadAsync('global_illumination.pck'), initPhysics()]);
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
  if(pck.lightmapGI.length) {
    const lightmap = pck.lightmapGI[1];
    lightmap.lightData.atlasData.forEach(async (entry,idx) => {
      const node = navigate_nodepath<SceneInstance.Node>(lightmap.node, entry.path);
      if(node && pck.maps.object3d.has(node)) {
        const obj = pck.maps.object3d.get(node)!;
        if(obj.type == 'Mesh') {
          const mesh = obj as Mesh;
          //mesh.geometry.setAttribute( 'uv', mesh.geometry.getAttribute('uv2') );
          const tex = (await getTexture(lightmap.lightData.lightmap_textures[entry.textureIndex])).clone();
          tex.matrixAutoUpdate = false;
          const off = entry.rect.position;
          const scale = entry.rect.size;
          tex.matrix.set(
            scale.x, 0, off.x,
            0, scale.y, off.y,
            0, 0, 1
          );
          tex.needsUpdate = true;
          const mat = new MeshLambertMaterial();
          mat.copy(mesh.material as MeshStandardMaterial);
          //mat.map = tex;
          mat.lightMap = tex;
          mat.lightMap.channel = 1;
          mat.needsUpdate = true;
          
            const geo = new PlaneGeometry();
            //newMat.map.matrix.set(1,0,0, 0,1,0, 0,0,1)
            const boxMesh = new Mesh(geo, mat);
            scene.add(boxMesh);
            boxMesh.position.y += 20;
            boxMesh.position.x = 10 * idx;

          mesh.material = mat;
        }
      }
    });
  }

  //createFloor(jolt, scene, 50);
  rigPhysics(pck, camera, scene, jolt, updates);

  let last_delta = 0;
  const animate = (delta: number) => {
    const tick = (delta - last_delta) / 1000;
    renderer.render(scene, camera);
    controls.update();
    if (last_delta != 0) {
      mixer.update(tick);
      updates.forEach(run => run(tick))
      updatePhysics(jolt, tick);
    }
    last_delta = delta;
  }
  console.log("To Display: ", performance.now() - NOW);
  renderer.setAnimationLoop(animate);
}

