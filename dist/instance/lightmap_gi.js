import { DefaultLightmapGI } from "./types/gen/defaults/LightmapGI.default";
import { unwrap_properties_cached } from "./util";
export class LightmapGIDataInstance {
    constructor(data) {
        this.lightmap_textures = [];
        this.atlasData = [];
        const { user_data } = data;
        let i = 0;
        while (i < user_data.length) {
            const path = user_data[i++];
            const rect = user_data[i++];
            const textureIndex = user_data[i++];
            const instanceIndex = user_data[i++];
            this.atlasData.push({ path, rect, textureIndex, instanceIndex });
        }
        const { lightmap_textures } = data;
        if (lightmap_textures) {
            lightmap_textures.forEach(tex => {
                this.lightmap_textures.push(...tex.value);
            });
        }
    }
}
export class LightmapGIInstance {
    constructor(node) {
        this.node = node;
        if (node.type != 'LightmapGI') {
            throw new Error("LightmapGIInstance constructor requires node of type 'LightmapGI'");
        }
        this.lightmapGI = unwrap_properties_cached(node.properties);
        DefaultLightmapGI(this.lightmapGI);
        this.lightData = new LightmapGIDataInstance(this.lightmapGI.light_data.properties);
    }
}
