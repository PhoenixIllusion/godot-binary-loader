import { Object3D } from "three/src/core/Object3D.js";
import { AnimationPlayerInstance } from "../loader/instance/animation-player";
import { AnimationClip } from "three/src/animation/AnimationClip.js";
import { Interpolant } from "three/src/math/Interpolant.js";
import { KeyframeTrack } from "three/src/animation/KeyframeTrack.js";
import { TypedArray } from "three/src/core/BufferAttribute.js";
import { Vector3,Vector4 } from "../loader/instance/types/gen/types";
import { Euler } from "three/src/math/Euler.js";
import { Quaternion } from "three/src/math/Quaternion.js";
import { BooleanKeyframeTrack } from "three/src/animation/tracks/BooleanKeyframeTrack.js";
import { NumberKeyframeTrack } from "three/src/animation/tracks/NumberKeyframeTrack.js";
import { VectorKeyframeTrack } from "three/src/animation/tracks/VectorKeyframeTrack.js";
import { QuaternionKeyframeTrack } from "three/src/animation/tracks/QuaternionKeyframeTrack.js";
import { animation_transition_ease } from "@phoenixillusion/godot-scene-reader/process/scene/animation.js";
import { degToRad } from "three/src/math/MathUtils.js";
import { AnimationPlayer } from "../loader/instance/types/gen";
import { SceneInstance } from "../loader/instance/scene";

/**
 * A basic linear interpolant.
 *
 * @augments Interpolant
 */
export abstract class GodotInterpolant extends Interpolant {

	/**
	 * Constructs a new linear interpolant.
	 *
	 * @param {TypedArray} parameterPositions - The parameter positions hold the interpolation factors.
	 * @param {TypedArray} sampleValues - The sample values.
	 * @param {number} sampleSize - The sample size
	 * @param {TypedArray} [resultBuffer] - The result buffer.
	 */
	constructor( parameterPositions: TypedArray, sampleValues: TypedArray, sampleSize: number, resultBuffer: TypedArray ) {
		super( parameterPositions, sampleValues, sampleSize, resultBuffer );
	}

  abstract getTransitionEasing(): number[];

	interpolate_( i1: number, t0: number, t: number, t1: number ) {

		const result = this.resultBuffer;
		const values = this.sampleValues;
		const stride = this.valueSize;

    const offset1 = i1 * stride;
    const offset0 = offset1 - stride;

    const weight = ( t - t0 ) / ( t1 - t0 );

		for ( let i = 0; i !== stride; ++ i ) {
      const val0 = values[offset0 + i];
      const val1 = values[offset0 + i];
			result[ i ] = val0 + (val1-val0) * animation_transition_ease(weight, this.getTransitionEasing()[i1-1]);

		}

		return result;

	}

}

declare module "three/src/math/Euler.js" {
  export interface Euler {
    fromArray(array: ArrayLike<number>, offset: number): Euler;
  }
}

interface ClipCollection {
  target: Object3D,
  clips: AnimationClip[]
}

function flattenV3(v: any): [number,number,number] {
  const  { x, y, z } = <Vector3>v;
  return [x,y,z];
}
function flattenV4(v: any): [number,number,number,number] {
  const  { x, y, z, w } = <Vector4>v;
  return [x,y,z,w];
}

export class ThreeAnimation extends AnimationPlayerInstance {
  constructor(animation: SceneInstance.Node, public target: Object3D) {
    super(animation);
  }
  convertTrack(values: any[]): {values: Float32Array | null, KeyFrameType: typeof KeyframeTrack } {
    let result: Float32Array | null = null;
    let KeyFrameType: typeof KeyframeTrack = KeyframeTrack;
    if(typeof values[0] == 'boolean') {
      result = new Float32Array(values.map(x => x ? 1: 0));
      KeyFrameType = BooleanKeyframeTrack;
    } else
    if(typeof values[0] == 'number') {
      result = new Float32Array(values);
      KeyFrameType = NumberKeyframeTrack;
    } else
    if(values[0] instanceof Float32Array) {
      result = new Float32Array(values.map(x => [...x]).flat());
      KeyFrameType = values[0].length == 3 ? VectorKeyframeTrack : QuaternionKeyframeTrack
    } else
    if('type' in values[0]) {
      if(values[0].type == 'vector3') {
        result = new Float32Array(values.map(flattenV3).flat())
        KeyFrameType = VectorKeyframeTrack
      } else
      if(values[0].type == 'quaternion') {
        result = new Float32Array(values.map(flattenV4).flat())
        KeyFrameType = QuaternionKeyframeTrack
      }
    }
    return { values: result, KeyFrameType };
  }

  build(target: Object3D = this.target, only_animations: string[] = []): ClipCollection {
    const animations = this.animations;
    let max_back = 0;
    // normalize to farthest root so all tracks work on single root
    Object.values(animations).forEach(entry => {
      entry.tracks.forEach(track => {
        max_back = Math.max(max_back, track.path.names.filter(x => x == '..').length);
      })
    })

    let path_prefix: string[] = [];
    for(let i=0;i<max_back;i++) {
      path_prefix.push(target.name);
      target = target.parent!;
    }
    const clips: AnimationClip[] = [];
    for(const [name, trackData] of Object.entries(animations)) {
      if(only_animations.length && !only_animations.includes(name)) {
        continue;
      }
      const tracks: KeyframeTrack[] = [];
      trackData.tracks.forEach(track => {
        const prefix = [... path_prefix];
        track.path.names.forEach(x => {
          if(x == '..') {
            prefix.pop();
          } else {
            if(x == '.') {
              x = target.name;
            }
            prefix.push(x);
          }
        });
        const overrideProp: string[] = [];
        switch(track.type) {
          case 'rotation_3d':
            overrideProp.push('quaternion');
            break;
          case 'position_3d':
            overrideProp.push('position');
            break;
          case 'scale_3d':
            overrideProp.push('scale');
            break;
        }

        const subNames = [... prefix, ... track.path.subnames, ... overrideProp].map(x => x.replace(/\./g,'_'));
        let propName = subNames.pop();
        let { values, KeyFrameType }  = this.convertTrack(track.keys.values)
        let times = track.keys.times;
        if(values) {
          if(propName == 'rotation' || propName == 'rotation_degrees') {
            propName = 'quaternion';
            const quatValues: number[][] = [];
            const eu = new Euler();
            const prev_eu = new Euler();
            const new_times: number[] = [];
            eu.order = 'YXZ';
            const quat = new Quaternion();
            for(let i=0;i<times.length;i++) {
              const v3 = values.slice(i*3, i*3+3);
              if(propName == 'rotation_degrees')
                eu.fromArray(<any>v3.map(x => degToRad(x)));
              else 
                eu.fromArray(<any>v3);
              if(i > 0) {
                new_times.push((times[i]+times[i-1])/2);
                const { x, y, z} = eu;
                prev_eu.x += x; prev_eu.x /= 2;
                prev_eu.y += y; prev_eu.y /= 2;
                prev_eu.z += z; prev_eu.z /= 2;
                quatValues.push(quat.setFromEuler(prev_eu).toArray());
              }
              new_times.push(times[i]);
              quatValues.push(quat.setFromEuler(eu).toArray());
              prev_eu.copy(eu);
            }
            KeyFrameType = QuaternionKeyframeTrack;
            values = new Float32Array(quatValues.flat());
            times = new Float32Array(new_times.flat());
          }
          if(times.length == 1 && times[0] == 0) {
            values = new Float32Array([... values, ... values]);
            times = new Float32Array([0, trackData.length]);
          }
          tracks.push( new KeyFrameType(subNames.join('/') +'.'+propName, times, values));
        }
      });
      if(tracks.length > 0)
        clips.push(new AnimationClip(name, trackData.length, tracks));
    }
    return { target, clips }
  }
}
