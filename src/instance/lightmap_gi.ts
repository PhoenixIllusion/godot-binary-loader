import { SceneInstance } from "./scene";
import { LightmapGI, LightmapGIData } from "./types/gen";
import { DefaultLightmapGI } from "./types/gen/defaults/LightmapGI.default";
import { NodePath, Rect2 } from "./types/gen/types";
import { cTexFile } from "@phoenixillusion/godot-scene-reader/parse/binary/gst2.js";
import { unwrap_properties_cached } from "./util";

interface HasUserData {
  user_data: any[];
}

interface HasLightmapTextures {
  lightmap_textures: { type: 'ctex', value: cTexFile[]}[]
}

interface AtlasData {
  path: NodePath;
  rect: Rect2;
  textureIndex: number;
  instanceIndex: number;
}

export class LightmapGIDataInstance {
  lightmap_textures: cTexFile[] = [];
  atlasData: AtlasData[] = [];
  constructor(data: LightmapGIData) {
    const { user_data } = (data as any as HasUserData);
    let i=0;
    while(i<user_data.length) {
      const path: NodePath = user_data[i++];
      const rect: Rect2 = user_data[i++];
      const textureIndex: number = user_data[i++];
      const instanceIndex: number = user_data[i++];
      this.atlasData.push({ path, rect, textureIndex, instanceIndex })
    }
    const {lightmap_textures } = (data as any as HasLightmapTextures);
    if(lightmap_textures) {
      lightmap_textures.forEach(tex => {
        this.lightmap_textures.push(... tex.value)
      })
    }
  }
}

export class LightmapGIInstance {
  lightmapGI: LightmapGI;
  lightData: LightmapGIDataInstance;
  constructor(public node: SceneInstance.Node) {
    if (node.type != 'LightmapGI') {
      throw new Error("LightmapGIInstance constructor requires node of type 'LightmapGI'");
    }
    this.lightmapGI = unwrap_properties_cached(node.properties) as LightmapGI;
    DefaultLightmapGI(this.lightmapGI);
    this.lightData = new LightmapGIDataInstance(this.lightmapGI.light_data.properties);
  }
}