import { cTexFile, try_open_ctex } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2.js";
import { BinResource, try_open_bin_resource } from "@phoenixillusion/godot-scene-reader/parse/binary/resource.js";
import { parse_remap } from "@phoenixillusion/godot-scene-reader/parse/text/remap/parse.js";
import { PckEntry, PckFile } from "@phoenixillusion/godot-scene-reader/pck/parser.js";
import { PackedScene } from "@phoenixillusion/godot-scene-reader/process/scene/packed_scene.js";

export class PckLoader {
  allowed_extensions = ['.s3tc'];

  constructor(private pack: PckFile) { /* */ }
  private remapPath(pckEntry: PckEntry): Record<string, string> | null {
    return parse_remap(pckEntry.getData());
  }

  private resolvePath(path: string): PckEntry | null {
    try {
      const pck = this.pack;
      const path_s = path.replace(/^res:\/\//, '');
      const direct = pck[path] || pck[path_s];
      if (direct) {
        return direct;
      }
      const remap = pck[`${path}.remap`] || pck[`${path_s}.remap`] || pck[`${path}.import`] || pck[`${path_s}.import`];
      if (remap) {
        const paths = this.remapPath(remap)
        if (paths) {
          for (const ext of [... this.allowed_extensions, '']) {
            const key = `path${ext}`;
            if (paths[key]) {
              return this.resolvePath(paths[key]);
            }
          }
          debugger;
        }
      }
    } catch { }
    return null;
  }

  private resourceCache: Map<string, BinResource | cTexFile> = new Map();
  private sceneCache: Map<string, PackedScene> = new Map();

  getExternalScene(path: string): PackedScene | undefined {
    return this.sceneCache.get(path);
  }
  getExternal<T extends BinResource | cTexFile>(path: string): T | undefined {
    return this.resourceCache.get(path) as T;
  }

  private async cacheResource<T extends BinResource | cTexFile>(path: string, entry: PckEntry, func: (entry: PckEntry) => Promise<T>): Promise<T> {
    const data = await func(entry);
    this.resourceCache.set(path, data);
    return data;
  }
  private async resolveFile(path: string, entry: PckEntry) {
    if (this.resourceCache.has(path)) {
      return this.resourceCache.get(path);
    }
    if (entry.path.endsWith('.scn') || entry.path.endsWith('res')) {
      const data = await this.cacheResource(path, entry, entry => try_open_bin_resource(path, entry.getData(), false, false));
      await Promise.all(data?.external_resources?.map(ext =>
        this.resolve(ext.path)) || []
      );
      if (data?.type == 'PackedScene') {
        const scene = new PackedScene(data.internal_entries[data.internal_entries.length - 1]);
        this.sceneCache.set(path, scene);
      }
      return data;
    }
    if (entry.path.endsWith('.gdc')) {
      console.log("Skipping GdScript Binary")
      return undefined;
    }
    if (entry.path.endsWith('.sample')) {
      const data = await this.cacheResource(path, entry, entry => try_open_bin_resource(path, entry.getData(), false, false));
      await Promise.all(data?.external_resources?.map(ext =>
        this.resolve(ext.path)) || []
      );
    }
    if (entry.path.endsWith('.ctex')) {
      const data = await this.cacheResource(path, entry, entry => Promise.resolve(try_open_ctex(entry.getData())));
      return data;
    }
    return undefined;
  }

  async resolve(path: string) {
    const entry = this.resolvePath(path);
    if (entry) {
      return this.resolveFile(path, entry);
    }
    return null;
  }

}