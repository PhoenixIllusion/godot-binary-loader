import { AnimationInstance } from "../animation";
import { Animation } from '../types/gen/index';
import {
	is_zero_approx, is_less_approx,
	is_greater_approx, fposmod, pingpong, cubic_interpolate_in_time_vec3, spherical_cubic_interpolate_in_time
} from "../math";
import { quat, ReadonlyQuat, vec3 } from "gl-matrix";
import { _interpolate, InterpolateFunctions } from "./interpolate";
import { TrackCacheTransform } from "./anim-cache";
import { AnimationInstanceData } from "./player_interface";
import { AnimationMixerInstance } from "../animation-mixer";

type Error = boolean;
const OK = true;

//const Math_PI = Math.PI;
//const Math_TAU = Math_PI * 2;

export const UPDATE_CONTINUOUS = 0,
	UPDATE_DISCRETE = 1,
	UPDATE_CAPTURE = 2;

const vec3_interpolators: InterpolateFunctions<vec3> = {
	_set: vec3.copy,
	_interpolate: vec3.lerp,
	_interpolate_angle: vec3.lerp,
	_cubic_interpolate_in_time: cubic_interpolate_in_time_vec3,
	_cubic_interpolate_angle_in_time: cubic_interpolate_in_time_vec3
}
const quat_interpolators: InterpolateFunctions<quat> = {
	_set: quat.copy,
	_interpolate: quat.slerp,
	_interpolate_angle: quat.slerp,
	_cubic_interpolate_in_time: spherical_cubic_interpolate_in_time,
	_cubic_interpolate_angle_in_time: spherical_cubic_interpolate_in_time
}

function try_position_track_interpolate(animation: AnimationInstance, track: number, p_time: number, result: vec3, p_backwards: boolean = false): Error {
	const t = animation.tracks[track];
	const ok: [boolean] = [false];
	_interpolate<vec3>(result, animation.tracks[track].keys, p_time, t.interp, t.loop_wrap, ok, p_backwards, animation.loop_mode, vec3_interpolators)
	return ok[0];
}
function try_scale_track_interpolate(animation: AnimationInstance, track: number, p_time: number, result: vec3, p_backwards: boolean = false): Error {
	const t = animation.tracks[track];
	const ok: [boolean] = [false];
	_interpolate<vec3>(result, animation.tracks[track].keys, p_time, t.interp, t.loop_wrap, ok, p_backwards, animation.loop_mode, vec3_interpolators)
	return ok[0];
}
function try_rotation_track_interpolate(animation: AnimationInstance, track: number, p_time: number, result: quat, p_backwards: boolean = false): Error {
	const t = animation.tracks[track];
	const ok: [boolean] = [false];
	_interpolate<quat>(result, animation.tracks[track].keys, p_time, t.interp, t.loop_wrap, ok, p_backwards, animation.loop_mode, quat_interpolators)
	return ok[0];
}

const loc = [vec3.create(), vec3.create()];
const scale = [vec3.create(), vec3.create()];
const rot = [quat.create(), quat.create()];

function add_vec3_delta(dest: vec3, new_val: vec3, old_val: vec3, blend: number) {
	dest[0] += (new_val[0] - old_val[0]) * blend;
	dest[1] += (new_val[1] - old_val[1]) * blend;
	dest[2] += (new_val[2] - old_val[2]) * blend;
}

const q = quat.create();
const q_ident = quat.identity(quat.create());
function incremental_quat_delta(dest: quat, new_val: ReadonlyQuat, old_val: ReadonlyQuat, blend: number) {
	quat.invert(q, old_val);
	quat.multiply(q, q, new_val)
	quat.slerp(q, q_ident, q, blend);
	quat.mul(dest, dest, q);
	quat.normalize(dest, dest);
}

export function _blend_process(mixer: AnimationMixerInstance, animation_instances: AnimationInstanceData[], _p_delta: number, _p_update_only: boolean) {
	// Apply value/transform/blend/bezier blends to track caches and execute method/audio/animation tracks.
	const { deterministic, root_motion_track_str, root_motion_cache, animation_track_num_to_track_cache } = mixer;
	for (const ai of animation_instances) {
		const a = ai.animation;
		const time = ai.playback_info.time;
		const delta = ai.playback_info.delta;
		const start = ai.playback_info.start;
		const end = ai.playback_info.end;
		const seeked = ai.playback_info.seeked;
		//const looped_flag = ai.playback_info.looped_flag;
		const is_external_seeking = ai.playback_info.is_external_seeking;
		const weight = ai.playback_info.weight;
		const track_weights_ptr = ai.track_weights;
		const track_weights_count = ai.track_weights.length;
		const backward = 0 < delta; // This flag is used by the root motion calculates or detecting the end of audio stream.
		//const seeked_backward = 0 < p_delta;
		const calc_root = !seeked || is_external_seeking;

		const track_num_to_track_cashe = animation_track_num_to_track_cache[a.name]!;
		const tracks_ptr = a.tracks;
		//const a_length = a.length;
		const count = tracks_ptr.length;
		for (let i = 0; i < count; i++) {
			const animation_track = tracks_ptr[i];
			if (!animation_track.enabled) {
				continue;
			}
			const track = track_num_to_track_cashe[i];
			if (track == null) {
				continue; // No path, but avoid error spamming.
			}
			const blend_idx = track.blend_idx;
			let blend = blend_idx < track_weights_count ? track_weights_ptr[blend_idx] * weight : weight;
			if (!deterministic) {
				// If non-deterministic, do normalization.
				// It would be better to make this if statement outside the for loop, but come here since too much code...
				if (is_zero_approx(track.total_weight)) {
					continue;
				}
				blend = blend / track.total_weight;
			}
			const ttype = animation_track.type;
			track.root_motion = root_motion_track_str == animation_track.path_str;
			switch (ttype) {
				case 'position_3d': {
					if (is_zero_approx(blend)) {
						continue; // Nothing to blend.
					}
					const t = <TrackCacheTransform>(track);
					if (track.root_motion && calc_root) {
						let prev_time = time - delta;
						if (!backward) {
							if (is_less_approx(prev_time, start)) {
								switch (a.loop_mode) {
									case Animation.LoopMode.LOOP_NONE: {
										prev_time = start;
									} break;
									case Animation.LoopMode.LOOP_LINEAR: {
										prev_time = fposmod(prev_time - start, end - start) + start;
									} break;
									case Animation.LoopMode.LOOP_PINGPONG: {
										prev_time = pingpong(prev_time - start, end - start) + start;
									} break;
									default:
										break;
								}
							}
						} else {
							if (is_greater_approx(prev_time, end)) {
								switch (a.loop_mode) {
									case Animation.LoopMode.LOOP_NONE: {
										prev_time = end;
									} break;
									case Animation.LoopMode.LOOP_LINEAR: {
										prev_time = fposmod(prev_time - start, end - start) + start;
									} break;
									case Animation.LoopMode.LOOP_PINGPONG: {
										prev_time = pingpong(prev_time - start, end - start) + start;
									} break;
									default:
										break;
								}
							}
						}
						if (!backward) {
							if (is_greater_approx(prev_time, time)) {
								const err = try_position_track_interpolate(a, i, prev_time, loc[0]);
								if (err != OK) {
									continue;
								}
								try_position_track_interpolate(a, i, end, loc[1]);
								add_vec3_delta(root_motion_cache.loc, loc[1], loc[0], blend);
								prev_time = start;
							}
						} else {
							if (is_less_approx(prev_time, time)) {
								const err = try_position_track_interpolate(a, i, prev_time, loc[0]);
								if (err != OK) {
									continue;
								}
								try_position_track_interpolate(a, i, start, loc[1]);
								add_vec3_delta(root_motion_cache.loc, loc[1], loc[0], blend);
								prev_time = end;
							}
						}
						const err = try_position_track_interpolate(a, i, prev_time, loc[0]);
						if (err != OK) {
							continue;
						}
						try_position_track_interpolate(a, i, time, loc[1]);
						add_vec3_delta(root_motion_cache.loc, loc[1], loc[0], blend);
						prev_time = !backward ? start : end;
					}
					{
						const err = try_position_track_interpolate(a, i, time, loc[0]);
						if (err != OK) {
							continue;
						}
						add_vec3_delta(t.loc, loc[0], t.init_loc, blend);
					}
				} break;
				case 'rotation_3d': {
					if (is_zero_approx(blend)) {
						continue; // Nothing to blend.
					}
					const t = <TrackCacheTransform>(track);
					if (track.root_motion && calc_root) {
						let prev_time = time - delta;
						if (!backward) {
							if (is_less_approx(prev_time, start)) {
								switch (a.loop_mode) {
									case Animation.LoopMode.LOOP_NONE: {
										prev_time = start;
									} break;
									case Animation.LoopMode.LOOP_LINEAR: {
										prev_time = fposmod(prev_time - start, end - start) + start;
									} break;
									case Animation.LoopMode.LOOP_PINGPONG: {
										prev_time = pingpong(prev_time - start, end - start) + start;
									} break;
									default:
										break;
								}
							}
						} else {
							if (is_greater_approx(prev_time, end)) {
								switch (a.loop_mode) {
									case Animation.LoopMode.LOOP_NONE: {
										prev_time = end;
									} break;
									case Animation.LoopMode.LOOP_LINEAR: {
										prev_time = fposmod(prev_time - start, end - start) + start;
									} break;
									case Animation.LoopMode.LOOP_PINGPONG: {
										prev_time = pingpong(prev_time - start, end - start) + start;
									} break;
									default:
										break;
								}
							}
						}
						if (!backward) {
							if (is_greater_approx(prev_time, time)) {
								const err = try_rotation_track_interpolate(a, i, prev_time, rot[0]);
								if (err != OK) {
									continue;
								}
								try_rotation_track_interpolate(a, i, end, rot[1]);
								incremental_quat_delta(root_motion_cache.rot, rot[1], rot[0], blend);
								prev_time = start;
							}
						} else {
							if (is_less_approx(prev_time, time)) {
								const err = try_rotation_track_interpolate(a, i, prev_time, rot[0]);
								if (err != OK) {
									continue;
								}
								try_rotation_track_interpolate(a, i, start, rot[1]);
								incremental_quat_delta(root_motion_cache.rot, rot[1], rot[0], blend);
								prev_time = end;
							}
						}
						const err = try_rotation_track_interpolate(a, i, prev_time, rot[0]);
						if (err != OK) {
							continue;
						}
						try_rotation_track_interpolate(a, i, time, rot[1]);
						incremental_quat_delta(root_motion_cache.rot, rot[1], rot[0], blend);
						prev_time = !backward ? start : end;
					}
					{
						const err = try_rotation_track_interpolate(a, i, time, rot[0]);
						if (err != OK) {
							continue;
						}
						incremental_quat_delta(t.rot, rot[0], t.init_rot, blend);
					}
				} break;
				case 'scale_3d': {
					if (is_zero_approx(blend)) {
						continue; // Nothing to blend.
					}
					const t = <TrackCacheTransform>(track);
					if (track.root_motion && calc_root) {
						let prev_time = time - delta;
						if (!backward) {
							if (is_less_approx(prev_time, start)) {
								switch (a.loop_mode) {
									case Animation.LoopMode.LOOP_NONE: {
										prev_time = start;
									} break;
									case Animation.LoopMode.LOOP_LINEAR: {
										prev_time = fposmod(prev_time - start, end - start) + start;
									} break;
									case Animation.LoopMode.LOOP_PINGPONG: {
										prev_time = pingpong(prev_time - start, end - start) + start;
									} break;
									default:
										break;
								}
							}
						} else {
							if (is_greater_approx(prev_time, end)) {
								switch (a.loop_mode) {
									case Animation.LoopMode.LOOP_NONE: {
										prev_time = end;
									} break;
									case Animation.LoopMode.LOOP_LINEAR: {
										prev_time = fposmod(prev_time - start, end - start) + start;
									} break;
									case Animation.LoopMode.LOOP_PINGPONG: {
										prev_time = pingpong(prev_time - start, end - start) + start;
									} break;
									default:
										break;
								}
							}
						}
						if (!backward) {
							if (is_greater_approx(prev_time, time)) {
								const err = try_scale_track_interpolate(a, i, prev_time, scale[0]);
								if (err != OK) {
									continue;
								}
								try_scale_track_interpolate(a, i, end, scale[1]);
								add_vec3_delta(root_motion_cache.scale, scale[1], scale[0], blend);
								prev_time = start;
							}
						} else {
							if (is_less_approx(prev_time, time)) {
								const err = try_scale_track_interpolate(a, i, prev_time, scale[0]);
								if (err != OK) {
									continue;
								}
								try_scale_track_interpolate(a, i, start, scale[1]);
								add_vec3_delta(root_motion_cache.scale, scale[1], scale[0], blend);
								prev_time = end;
							}
						}
						const err = try_scale_track_interpolate(a, i, prev_time, scale[0]);
						if (err != OK) {
							continue;
						}
						try_scale_track_interpolate(a, i, time, scale[1]);
						add_vec3_delta(root_motion_cache.scale, scale[1], scale[0], blend);
						prev_time = !backward ? start : end;
					}
					{
						const err = try_scale_track_interpolate(a, i, time, scale[0]);
						if (err != OK) {
							continue;
						}
						add_vec3_delta(t.scale, scale[0], t.init_scale, blend);
					}
				} break;/*
				case TYPE_BLEND_SHAPE: {
					if (is_zero_approx(blend)) {
						continue; // Nothing to blend.
					}
					TrackCacheBlendShape *t = static_cast<TrackCacheBlendShape *>(track);
					float value;
					const err = a.try_blend_shape_track_interpolate(i, time, &value);
					//ERR_CONTINUE(err!=OK); //used for testing, should be removed
					if (err != OK) {
						continue;
					}
.					t.value += (value - t.init_value) * blend;
				} break; 
				case TYPE_BEZIER:*//*
				case 'value': {
					if (is_zero_approx(blend)) {
						continue; // Nothing to blend.
					}
					const t = <TrackCacheValue>(track);
					const is_value = ttype == 'value';
					const is_discrete = is_value && a.tracks[i].update == UPDATE_DISCRETE;
					const force_continuous = callback_mode_discrete == AnimationMixer.AnimationCallbackModeDiscrete.ANIMATION_CALLBACK_MODE_DISCRETE_FORCE_CONTINUOUS;
					if (!is_discrete || force_continuous) {
						t.use_continuous = true;

						let value: any | null = null;
						if (t.is_variant_interpolatable) {
							//value = is_value ? a.value_track_interpolate(i, time, is_discrete && force_continuous ? backward : false) : Variant(a.bezier_track_interpolate(i, time));
							value = a.value_track_interpolate(i, time, is_discrete && force_continuous ? backward : false);
							if (value == null) {
								continue;
							}
						} else {
							// Discrete track sets the value in the current _blend_process() function,
							// but Force Continuous track does not set the value here because the value must be set in the _blend_apply() function later.
							const idx = a.track_find_key(i, time, FIND_MODE_NEAREST, false, backward);
							if (idx < 0) {
								continue;
							}
							value = a.track_get_key_value(i, idx);
							if (value == null) {
								continue;
							}
							t.value = value;
							continue;
						}

						// Special case for angle interpolation.
						if (t.is_using_angle) {
							// For blending consistency, it prevents rotation of more than 180 degrees from init_value.
							// This is the same as for Quaternion blends.
							let rot_a = t.value;
							let rot_b = value;
							let rot_init = t.init_value;
							rot_a = fposmod(rot_a, Math_TAU);
							rot_b = fposmod(rot_b, Math_TAU);
							rot_init = fposmod(rot_init, Math_TAU);
							if (rot_init < Math_PI) {
								rot_a = rot_a > rot_init + Math_PI ? rot_a - Math_TAU : rot_a;
								rot_b = rot_b > rot_init + Math_PI ? rot_b - Math_TAU : rot_b;
							} else {
								rot_a = rot_a < rot_init - Math_PI ? rot_a + Math_TAU : rot_a;
								rot_b = rot_b < rot_init - Math_PI ? rot_b + Math_TAU : rot_b;
							}
							t.value = fposmod(rot_a + (rot_b - rot_init) * blend, Math_TAU);
						} else {
							value = cast_to_blendwise(value);
							if (t.init_value.is_array()) {
								t.element_size = MAX(t.element_size.operator int(), (value.operator Array()).size());
							} else if (t.init_value.is_string()) {
								real_t length = subtract_variant((real_t)(value.operator Array()).size(), (real_t)(t.init_value.operator String()).length());
								t.element_size = blend_variant(t.element_size, length, blend);
							}
							value = subtract_variant(value, cast_to_blendwise(t.init_value));
							t.value = blend_variant(t.value, value, blend);
						}
					} else {
						if (seeked) {
							int idx = a.track_find_key(i, time, is_external_seeking ? FIND_MODE_NEAREST : FIND_MODE_EXACT, false, seeked_backward);
							if (idx < 0) {
								continue;
							}
							t.use_discrete = true;
							Variant value = a.track_get_key_value(i, idx);
							Object *t_obj = ObjectDB::get_instance(t.object_id);
							if (t_obj) {
								t_obj.set_indexed(t.subpath, value);
							}
						} else {
							List<int> indices;
							a.track_get_key_indices_in_range(i, time, delta, &indices, looped_flag);
							for (int &F : indices) {
								t.use_discrete = true;
								Variant value = a.track_get_key_value(i, F);
								Object *t_obj = ObjectDB::get_instance(t.object_id);
								if (t_obj) {
									t_obj.set_indexed(t.subpath, value);
								}
							}
						}
					}
				} break;*/ /*
				case TYPE_METHOD: {
					if (p_update_only || is_zero_approx(blend)) {
						continue;
					}
					TrackCacheMethod *t = static_cast<TrackCacheMethod *>(track);
					if (seeked) {
						int idx = a.track_find_key(i, time, is_external_seeking ? FIND_MODE_NEAREST : FIND_MODE_EXACT, true);
						if (idx < 0) {
							continue;
						}
						StringName method = a.method_track_get_name(i, idx);
						Vector<Variant> params = a.method_track_get_params(i, idx);
						_call_object(t.object_id, method, params, callback_mode_method == ANIMATION_CALLBACK_MODE_METHOD_DEFERRED);
					} else {
						List<int> indices;
						a.track_get_key_indices_in_range(i, time, delta, &indices, looped_flag);
						for (int &F : indices) {
							StringName method = a.method_track_get_name(i, F);
							Vector<Variant> params = a.method_track_get_params(i, F);
							_call_object(t.object_id, method, params, callback_mode_method == ANIMATION_CALLBACK_MODE_METHOD_DEFERRED);
						}
					}
				} break;
				case TYPE_AUDIO: {
					// The end of audio should be observed even if the blend value is 0, build up the information and store to the cache for that.
					TrackCacheAudio *t = static_cast<TrackCacheAudio *>(track);
					Object *t_obj = ObjectDB::get_instance(t.object_id);
					Node *asp = t_obj ? Object::cast_to<Node>(t_obj) : nullptr;
					if (!t_obj || !asp) {
						t.playing_streams.clear();
						continue;
					}
					ObjectID oid = a.get_instance_id();
					if (!t.playing_streams.has(oid)) {
						t.playing_streams[oid] = PlayingAudioTrackInfo();
					}

					PlayingAudioTrackInfo &track_info = t.playing_streams[oid];
					track_info.length = a_length;
					track_info.time = time;
					track_info.volume += blend;
					track_info.loop = a.get_loop_mode() != Animation.LoopMode.LOOP_NONE;
					track_info.backward = backward;
					track_info.use_blend = a.audio_track_is_use_blend(i);
					AHashMap<int, PlayingAudioStreamInfo> &map = track_info.stream_info;

					// Main process to fire key is started from here.
					if (p_update_only) {
						continue;
					}
					// Find stream.
					int idx = -1;
					if (seeked) {
						// Audio key may be playbacked from the middle, should use FIND_MODE_NEAREST.
						// Then, check the current playing stream to prevent to playback doubly.
						idx = a.track_find_key(i, time, FIND_MODE_NEAREST, true);
						// Discard previous stream when seeking.
						if (map.has(idx)) {
							t.audio_stream_playback.stop_stream(map[idx].index);
							map.erase(idx);
						}
					} else {
						List<int> to_play;
						a.track_get_key_indices_in_range(i, time, delta, &to_play, looped_flag);
						if (to_play.size()) {
							idx = to_play.back().get();
						}
					}
					if (idx < 0) {
						continue;
					}

					// Play stream.
					Ref<AudioStream> stream = a.audio_track_get_key_stream(i, idx);
					if (stream.is_valid()) {
						double start_ofs = a.audio_track_get_key_start_offset(i, idx);
						double end_ofs = a.audio_track_get_key_end_offset(i, idx);
						double len = stream.get_length();
						if (seeked) {
							start_ofs += time - a.track_get_key_time(i, idx);
						}

						if (t_obj.call(SNAME("get_stream")) != t.audio_stream) {
							t_obj.call(SNAME("set_stream"), t.audio_stream);
							t.audio_stream_playback.unref();
							if (!playing_audio_stream_players.has(asp)) {
								playing_audio_stream_players.push_back(asp);
							}
						}
						if (!t_obj.call(SNAME("is_playing"))) {
							t_obj.call(SNAME("play"));
						}
						if (!t_obj.call(SNAME("has_stream_playback"))) {
							t.audio_stream_playback.unref();
							continue;
						}
						if (t.audio_stream_playback.is_null()) {
							t.audio_stream_playback = t_obj.call(SNAME("get_stream_playback"));
						}

						if (t_obj.call(SNAME("get_is_sample"))) {
							if (t.audio_stream_playback.get_sample_playback().is_valid()) {
								AudioServer::get_singleton().stop_sample_playback(t.audio_stream_playback.get_sample_playback());
							}
							Ref<AudioSamplePlayback> sample_playback;
							sample_playback.instantiate();
							sample_playback.stream = stream;
							t.audio_stream_playback.set_sample_playback(sample_playback);
							AudioServer::get_singleton().start_sample_playback(sample_playback);
							continue;
						}

						PlayingAudioStreamInfo pasi;
						pasi.index = t.audio_stream_playback.play_stream(stream, start_ofs, 0, 1.0, t.playback_type, t.bus);
						pasi.start = time;
						if (len && is_greater_approx(end_ofs, 0)) { // Force an end at a time.
							pasi.len = len - start_ofs - end_ofs;
						} else {
							pasi.len = 0;
						}
						map[idx] = pasi;
					}
				} break;
				case TYPE_ANIMATION: {
					if (is_zero_approx(blend)) {
						continue;
					}
					TrackCacheAnimation *t = static_cast<TrackCacheAnimation *>(track);
					Object *t_obj = ObjectDB::get_instance(t.object_id);
					if (!t_obj) {
						continue;
					}
					AnimationPlayer *player2 = Object::cast_to<AnimationPlayer>(t_obj);
					if (!player2) {
						continue;
					}
					// TODO: Make it possible to embed section info in animation track keys.
					if (seeked) {
						// Seek.
						int idx = a.track_find_key(i, time, FIND_MODE_NEAREST, true);
						if (idx < 0) {
							continue;
						}
						double pos = a.track_get_key_time(i, idx);
						StringName anim_name = a.animation_track_get_key_animation(i, idx);
						if (String(anim_name) == "[stop]" || !player2.has_animation(anim_name)) {
							continue;
						}
						Ref<Animation> anim = player2.get_animation(anim_name);
						double at_anim_pos = start;
						switch (anim.get_loop_mode()) {
							case Animation.LoopMode.LOOP_NONE: {
								if (!is_external_seeking && ((!backward && is_greater_or_equal_approx(time, pos + end)) || (backward && is_less_or_equal_approx(time, pos + start)))) {
									continue; // Do nothing if current time is outside of length when started.
								}
								at_anim_pos = MIN(end, time - pos); // Seek to end.
							} break;
							case Animation.LoopMode.LOOP_LINEAR: {
								at_anim_pos = fposmod(time - pos - start, end - start) + start; // Seek to loop.
							} break;
							case Animation.LoopMode.LOOP_PINGPONG: {
								at_anim_pos = pingpong(time - pos - start, end - start) + start;
							} break;
							default:
								break;
						}
						if (player2.is_playing() || !is_external_seeking) {
							player2.seek(at_anim_pos, false, p_update_only);
							player2.play(anim_name);
							t.playing = true;
							playing_caches.insert(t);
						} else {
							player2.set_assigned_animation(anim_name);
							player2.seek(at_anim_pos, true, p_update_only);
						}
					} else {
						// Find stuff to play.
						List<int> to_play;
						a.track_get_key_indices_in_range(i, time, delta, &to_play, looped_flag);
						if (to_play.size()) {
							int idx = to_play.back().get();
							StringName anim_name = a.animation_track_get_key_animation(i, idx);
							if (String(anim_name) == "[stop]" || !player2.has_animation(anim_name)) {
								if (playing_caches.has(t)) {
									playing_caches.erase(t);
									player2.stop();
									t.playing = false;
								}
							} else {
								player2.play(anim_name);
								t.playing = true;
								playing_caches.insert(t);
							}
						}
					}
				} break; */
			}
		}
	}
}