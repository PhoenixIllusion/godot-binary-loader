/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
import { create } from './../types';
import { DefaultAudioStream } from './AudioStream.default';
export function DefaultAudioStreamWAV(item) {
    DefaultAudioStream(item);
    item.data ?? (item.data = create.PackedByteArray());
    item.format ?? (item.format = 0);
    item.loop_begin ?? (item.loop_begin = 0);
    item.loop_end ?? (item.loop_end = 0);
    item.loop_mode ?? (item.loop_mode = 0);
    item.mix_rate ?? (item.mix_rate = 44100);
    item.stereo ?? (item.stereo = false);
}
