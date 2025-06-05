export var SpriteBase3D;
(function (SpriteBase3D) {
    let DrawFlags;
    (function (DrawFlags) {
        DrawFlags[DrawFlags["FLAG_TRANSPARENT"] = 0] = "FLAG_TRANSPARENT";
        DrawFlags[DrawFlags["FLAG_SHADED"] = 1] = "FLAG_SHADED";
        DrawFlags[DrawFlags["FLAG_DOUBLE_SIDED"] = 2] = "FLAG_DOUBLE_SIDED";
        DrawFlags[DrawFlags["FLAG_DISABLE_DEPTH_TEST"] = 3] = "FLAG_DISABLE_DEPTH_TEST";
        DrawFlags[DrawFlags["FLAG_FIXED_SIZE"] = 4] = "FLAG_FIXED_SIZE";
        DrawFlags[DrawFlags["FLAG_MAX"] = 5] = "FLAG_MAX";
    })(DrawFlags = SpriteBase3D.DrawFlags || (SpriteBase3D.DrawFlags = {}));
    let AlphaCutMode;
    (function (AlphaCutMode) {
        AlphaCutMode[AlphaCutMode["ALPHA_CUT_DISABLED"] = 0] = "ALPHA_CUT_DISABLED";
        AlphaCutMode[AlphaCutMode["ALPHA_CUT_DISCARD"] = 1] = "ALPHA_CUT_DISCARD";
        AlphaCutMode[AlphaCutMode["ALPHA_CUT_OPAQUE_PREPASS"] = 2] = "ALPHA_CUT_OPAQUE_PREPASS";
        AlphaCutMode[AlphaCutMode["ALPHA_CUT_HASH"] = 3] = "ALPHA_CUT_HASH";
    })(AlphaCutMode = SpriteBase3D.AlphaCutMode || (SpriteBase3D.AlphaCutMode = {}));
})(SpriteBase3D || (SpriteBase3D = {}));
export var BaseButton;
(function (BaseButton) {
    let DrawMode;
    (function (DrawMode) {
        DrawMode[DrawMode["DRAW_NORMAL"] = 0] = "DRAW_NORMAL";
        DrawMode[DrawMode["DRAW_PRESSED"] = 1] = "DRAW_PRESSED";
        DrawMode[DrawMode["DRAW_HOVER"] = 2] = "DRAW_HOVER";
        DrawMode[DrawMode["DRAW_DISABLED"] = 3] = "DRAW_DISABLED";
        DrawMode[DrawMode["DRAW_HOVER_PRESSED"] = 4] = "DRAW_HOVER_PRESSED";
    })(DrawMode = BaseButton.DrawMode || (BaseButton.DrawMode = {}));
    let ActionMode;
    (function (ActionMode) {
        ActionMode[ActionMode["ACTION_MODE_BUTTON_PRESS"] = 0] = "ACTION_MODE_BUTTON_PRESS";
        ActionMode[ActionMode["ACTION_MODE_BUTTON_RELEASE"] = 1] = "ACTION_MODE_BUTTON_RELEASE";
    })(ActionMode = BaseButton.ActionMode || (BaseButton.ActionMode = {}));
})(BaseButton || (BaseButton = {}));
export var OccluderPolygon2D;
(function (OccluderPolygon2D) {
    let CullMode;
    (function (CullMode) {
        CullMode[CullMode["CULL_DISABLED"] = 0] = "CULL_DISABLED";
        CullMode[CullMode["CULL_CLOCKWISE"] = 1] = "CULL_CLOCKWISE";
        CullMode[CullMode["CULL_COUNTER_CLOCKWISE"] = 2] = "CULL_COUNTER_CLOCKWISE";
    })(CullMode = OccluderPolygon2D.CullMode || (OccluderPolygon2D.CullMode = {}));
})(OccluderPolygon2D || (OccluderPolygon2D = {}));
export var XMLParser;
(function (XMLParser) {
    let NodeType;
    (function (NodeType) {
        NodeType[NodeType["NODE_NONE"] = 0] = "NODE_NONE";
        NodeType[NodeType["NODE_ELEMENT"] = 1] = "NODE_ELEMENT";
        NodeType[NodeType["NODE_ELEMENT_END"] = 2] = "NODE_ELEMENT_END";
        NodeType[NodeType["NODE_TEXT"] = 3] = "NODE_TEXT";
        NodeType[NodeType["NODE_COMMENT"] = 4] = "NODE_COMMENT";
        NodeType[NodeType["NODE_CDATA"] = 5] = "NODE_CDATA";
        NodeType[NodeType["NODE_UNKNOWN"] = 6] = "NODE_UNKNOWN";
    })(NodeType = XMLParser.NodeType || (XMLParser.NodeType = {}));
})(XMLParser || (XMLParser = {}));
export var Material;
(function (Material) {
    Material.RENDER_PRIORITY_MAX = 127;
    Material.RENDER_PRIORITY_MIN = -128;
})(Material || (Material = {}));
export var Viewport;
(function (Viewport) {
    let PositionalShadowAtlasQuadrantSubdiv;
    (function (PositionalShadowAtlasQuadrantSubdiv) {
        PositionalShadowAtlasQuadrantSubdiv[PositionalShadowAtlasQuadrantSubdiv["SHADOW_ATLAS_QUADRANT_SUBDIV_DISABLED"] = 0] = "SHADOW_ATLAS_QUADRANT_SUBDIV_DISABLED";
        PositionalShadowAtlasQuadrantSubdiv[PositionalShadowAtlasQuadrantSubdiv["SHADOW_ATLAS_QUADRANT_SUBDIV_1"] = 1] = "SHADOW_ATLAS_QUADRANT_SUBDIV_1";
        PositionalShadowAtlasQuadrantSubdiv[PositionalShadowAtlasQuadrantSubdiv["SHADOW_ATLAS_QUADRANT_SUBDIV_4"] = 2] = "SHADOW_ATLAS_QUADRANT_SUBDIV_4";
        PositionalShadowAtlasQuadrantSubdiv[PositionalShadowAtlasQuadrantSubdiv["SHADOW_ATLAS_QUADRANT_SUBDIV_16"] = 3] = "SHADOW_ATLAS_QUADRANT_SUBDIV_16";
        PositionalShadowAtlasQuadrantSubdiv[PositionalShadowAtlasQuadrantSubdiv["SHADOW_ATLAS_QUADRANT_SUBDIV_64"] = 4] = "SHADOW_ATLAS_QUADRANT_SUBDIV_64";
        PositionalShadowAtlasQuadrantSubdiv[PositionalShadowAtlasQuadrantSubdiv["SHADOW_ATLAS_QUADRANT_SUBDIV_256"] = 5] = "SHADOW_ATLAS_QUADRANT_SUBDIV_256";
        PositionalShadowAtlasQuadrantSubdiv[PositionalShadowAtlasQuadrantSubdiv["SHADOW_ATLAS_QUADRANT_SUBDIV_1024"] = 6] = "SHADOW_ATLAS_QUADRANT_SUBDIV_1024";
        PositionalShadowAtlasQuadrantSubdiv[PositionalShadowAtlasQuadrantSubdiv["SHADOW_ATLAS_QUADRANT_SUBDIV_MAX"] = 7] = "SHADOW_ATLAS_QUADRANT_SUBDIV_MAX";
    })(PositionalShadowAtlasQuadrantSubdiv = Viewport.PositionalShadowAtlasQuadrantSubdiv || (Viewport.PositionalShadowAtlasQuadrantSubdiv = {}));
    let Scaling3DMode;
    (function (Scaling3DMode) {
        Scaling3DMode[Scaling3DMode["SCALING_3D_MODE_BILINEAR"] = 0] = "SCALING_3D_MODE_BILINEAR";
        Scaling3DMode[Scaling3DMode["SCALING_3D_MODE_FSR"] = 1] = "SCALING_3D_MODE_FSR";
        Scaling3DMode[Scaling3DMode["SCALING_3D_MODE_FSR2"] = 2] = "SCALING_3D_MODE_FSR2";
        Scaling3DMode[Scaling3DMode["SCALING_3D_MODE_MAX"] = 3] = "SCALING_3D_MODE_MAX";
    })(Scaling3DMode = Viewport.Scaling3DMode || (Viewport.Scaling3DMode = {}));
    let MSAA;
    (function (MSAA) {
        MSAA[MSAA["MSAA_DISABLED"] = 0] = "MSAA_DISABLED";
        MSAA[MSAA["MSAA_2X"] = 1] = "MSAA_2X";
        MSAA[MSAA["MSAA_4X"] = 2] = "MSAA_4X";
        MSAA[MSAA["MSAA_8X"] = 3] = "MSAA_8X";
        MSAA[MSAA["MSAA_MAX"] = 4] = "MSAA_MAX";
    })(MSAA = Viewport.MSAA || (Viewport.MSAA = {}));
    let ScreenSpaceAA;
    (function (ScreenSpaceAA) {
        ScreenSpaceAA[ScreenSpaceAA["SCREEN_SPACE_AA_DISABLED"] = 0] = "SCREEN_SPACE_AA_DISABLED";
        ScreenSpaceAA[ScreenSpaceAA["SCREEN_SPACE_AA_FXAA"] = 1] = "SCREEN_SPACE_AA_FXAA";
        ScreenSpaceAA[ScreenSpaceAA["SCREEN_SPACE_AA_MAX"] = 2] = "SCREEN_SPACE_AA_MAX";
    })(ScreenSpaceAA = Viewport.ScreenSpaceAA || (Viewport.ScreenSpaceAA = {}));
    let RenderInfo;
    (function (RenderInfo) {
        RenderInfo[RenderInfo["RENDER_INFO_OBJECTS_IN_FRAME"] = 0] = "RENDER_INFO_OBJECTS_IN_FRAME";
        RenderInfo[RenderInfo["RENDER_INFO_PRIMITIVES_IN_FRAME"] = 1] = "RENDER_INFO_PRIMITIVES_IN_FRAME";
        RenderInfo[RenderInfo["RENDER_INFO_DRAW_CALLS_IN_FRAME"] = 2] = "RENDER_INFO_DRAW_CALLS_IN_FRAME";
        RenderInfo[RenderInfo["RENDER_INFO_MAX"] = 3] = "RENDER_INFO_MAX";
    })(RenderInfo = Viewport.RenderInfo || (Viewport.RenderInfo = {}));
    let RenderInfoType;
    (function (RenderInfoType) {
        RenderInfoType[RenderInfoType["RENDER_INFO_TYPE_VISIBLE"] = 0] = "RENDER_INFO_TYPE_VISIBLE";
        RenderInfoType[RenderInfoType["RENDER_INFO_TYPE_SHADOW"] = 1] = "RENDER_INFO_TYPE_SHADOW";
        RenderInfoType[RenderInfoType["RENDER_INFO_TYPE_CANVAS"] = 2] = "RENDER_INFO_TYPE_CANVAS";
        RenderInfoType[RenderInfoType["RENDER_INFO_TYPE_MAX"] = 3] = "RENDER_INFO_TYPE_MAX";
    })(RenderInfoType = Viewport.RenderInfoType || (Viewport.RenderInfoType = {}));
    let DebugDraw;
    (function (DebugDraw) {
        DebugDraw[DebugDraw["DEBUG_DRAW_DISABLED"] = 0] = "DEBUG_DRAW_DISABLED";
        DebugDraw[DebugDraw["DEBUG_DRAW_UNSHADED"] = 1] = "DEBUG_DRAW_UNSHADED";
        DebugDraw[DebugDraw["DEBUG_DRAW_LIGHTING"] = 2] = "DEBUG_DRAW_LIGHTING";
        DebugDraw[DebugDraw["DEBUG_DRAW_OVERDRAW"] = 3] = "DEBUG_DRAW_OVERDRAW";
        DebugDraw[DebugDraw["DEBUG_DRAW_WIREFRAME"] = 4] = "DEBUG_DRAW_WIREFRAME";
        DebugDraw[DebugDraw["DEBUG_DRAW_NORMAL_BUFFER"] = 5] = "DEBUG_DRAW_NORMAL_BUFFER";
        DebugDraw[DebugDraw["DEBUG_DRAW_VOXEL_GI_ALBEDO"] = 6] = "DEBUG_DRAW_VOXEL_GI_ALBEDO";
        DebugDraw[DebugDraw["DEBUG_DRAW_VOXEL_GI_LIGHTING"] = 7] = "DEBUG_DRAW_VOXEL_GI_LIGHTING";
        DebugDraw[DebugDraw["DEBUG_DRAW_VOXEL_GI_EMISSION"] = 8] = "DEBUG_DRAW_VOXEL_GI_EMISSION";
        DebugDraw[DebugDraw["DEBUG_DRAW_SHADOW_ATLAS"] = 9] = "DEBUG_DRAW_SHADOW_ATLAS";
        DebugDraw[DebugDraw["DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS"] = 10] = "DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS";
        DebugDraw[DebugDraw["DEBUG_DRAW_SCENE_LUMINANCE"] = 11] = "DEBUG_DRAW_SCENE_LUMINANCE";
        DebugDraw[DebugDraw["DEBUG_DRAW_SSAO"] = 12] = "DEBUG_DRAW_SSAO";
        DebugDraw[DebugDraw["DEBUG_DRAW_SSIL"] = 13] = "DEBUG_DRAW_SSIL";
        DebugDraw[DebugDraw["DEBUG_DRAW_PSSM_SPLITS"] = 14] = "DEBUG_DRAW_PSSM_SPLITS";
        DebugDraw[DebugDraw["DEBUG_DRAW_DECAL_ATLAS"] = 15] = "DEBUG_DRAW_DECAL_ATLAS";
        DebugDraw[DebugDraw["DEBUG_DRAW_SDFGI"] = 16] = "DEBUG_DRAW_SDFGI";
        DebugDraw[DebugDraw["DEBUG_DRAW_SDFGI_PROBES"] = 17] = "DEBUG_DRAW_SDFGI_PROBES";
        DebugDraw[DebugDraw["DEBUG_DRAW_GI_BUFFER"] = 18] = "DEBUG_DRAW_GI_BUFFER";
        DebugDraw[DebugDraw["DEBUG_DRAW_DISABLE_LOD"] = 19] = "DEBUG_DRAW_DISABLE_LOD";
        DebugDraw[DebugDraw["DEBUG_DRAW_CLUSTER_OMNI_LIGHTS"] = 20] = "DEBUG_DRAW_CLUSTER_OMNI_LIGHTS";
        DebugDraw[DebugDraw["DEBUG_DRAW_CLUSTER_SPOT_LIGHTS"] = 21] = "DEBUG_DRAW_CLUSTER_SPOT_LIGHTS";
        DebugDraw[DebugDraw["DEBUG_DRAW_CLUSTER_DECALS"] = 22] = "DEBUG_DRAW_CLUSTER_DECALS";
        DebugDraw[DebugDraw["DEBUG_DRAW_CLUSTER_REFLECTION_PROBES"] = 23] = "DEBUG_DRAW_CLUSTER_REFLECTION_PROBES";
        DebugDraw[DebugDraw["DEBUG_DRAW_OCCLUDERS"] = 24] = "DEBUG_DRAW_OCCLUDERS";
        DebugDraw[DebugDraw["DEBUG_DRAW_MOTION_VECTORS"] = 25] = "DEBUG_DRAW_MOTION_VECTORS";
        DebugDraw[DebugDraw["DEBUG_DRAW_INTERNAL_BUFFER"] = 26] = "DEBUG_DRAW_INTERNAL_BUFFER";
    })(DebugDraw = Viewport.DebugDraw || (Viewport.DebugDraw = {}));
    let DefaultCanvasItemTextureFilter;
    (function (DefaultCanvasItemTextureFilter) {
        DefaultCanvasItemTextureFilter[DefaultCanvasItemTextureFilter["DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST"] = 0] = "DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST";
        DefaultCanvasItemTextureFilter[DefaultCanvasItemTextureFilter["DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR"] = 1] = "DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR";
        DefaultCanvasItemTextureFilter[DefaultCanvasItemTextureFilter["DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS"] = 2] = "DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS";
        DefaultCanvasItemTextureFilter[DefaultCanvasItemTextureFilter["DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS"] = 3] = "DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS";
        DefaultCanvasItemTextureFilter[DefaultCanvasItemTextureFilter["DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_MAX"] = 4] = "DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_MAX";
    })(DefaultCanvasItemTextureFilter = Viewport.DefaultCanvasItemTextureFilter || (Viewport.DefaultCanvasItemTextureFilter = {}));
    let DefaultCanvasItemTextureRepeat;
    (function (DefaultCanvasItemTextureRepeat) {
        DefaultCanvasItemTextureRepeat[DefaultCanvasItemTextureRepeat["DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_DISABLED"] = 0] = "DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_DISABLED";
        DefaultCanvasItemTextureRepeat[DefaultCanvasItemTextureRepeat["DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_ENABLED"] = 1] = "DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_ENABLED";
        DefaultCanvasItemTextureRepeat[DefaultCanvasItemTextureRepeat["DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MIRROR"] = 2] = "DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MIRROR";
        DefaultCanvasItemTextureRepeat[DefaultCanvasItemTextureRepeat["DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MAX"] = 3] = "DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MAX";
    })(DefaultCanvasItemTextureRepeat = Viewport.DefaultCanvasItemTextureRepeat || (Viewport.DefaultCanvasItemTextureRepeat = {}));
    let SDFOversize;
    (function (SDFOversize) {
        SDFOversize[SDFOversize["SDF_OVERSIZE_100_PERCENT"] = 0] = "SDF_OVERSIZE_100_PERCENT";
        SDFOversize[SDFOversize["SDF_OVERSIZE_120_PERCENT"] = 1] = "SDF_OVERSIZE_120_PERCENT";
        SDFOversize[SDFOversize["SDF_OVERSIZE_150_PERCENT"] = 2] = "SDF_OVERSIZE_150_PERCENT";
        SDFOversize[SDFOversize["SDF_OVERSIZE_200_PERCENT"] = 3] = "SDF_OVERSIZE_200_PERCENT";
        SDFOversize[SDFOversize["SDF_OVERSIZE_MAX"] = 4] = "SDF_OVERSIZE_MAX";
    })(SDFOversize = Viewport.SDFOversize || (Viewport.SDFOversize = {}));
    let SDFScale;
    (function (SDFScale) {
        SDFScale[SDFScale["SDF_SCALE_100_PERCENT"] = 0] = "SDF_SCALE_100_PERCENT";
        SDFScale[SDFScale["SDF_SCALE_50_PERCENT"] = 1] = "SDF_SCALE_50_PERCENT";
        SDFScale[SDFScale["SDF_SCALE_25_PERCENT"] = 2] = "SDF_SCALE_25_PERCENT";
        SDFScale[SDFScale["SDF_SCALE_MAX"] = 3] = "SDF_SCALE_MAX";
    })(SDFScale = Viewport.SDFScale || (Viewport.SDFScale = {}));
    let VRSMode;
    (function (VRSMode) {
        VRSMode[VRSMode["VRS_DISABLED"] = 0] = "VRS_DISABLED";
        VRSMode[VRSMode["VRS_TEXTURE"] = 1] = "VRS_TEXTURE";
        VRSMode[VRSMode["VRS_XR"] = 2] = "VRS_XR";
        VRSMode[VRSMode["VRS_MAX"] = 3] = "VRS_MAX";
    })(VRSMode = Viewport.VRSMode || (Viewport.VRSMode = {}));
    let VRSUpdateMode;
    (function (VRSUpdateMode) {
        VRSUpdateMode[VRSUpdateMode["VRS_UPDATE_DISABLED"] = 0] = "VRS_UPDATE_DISABLED";
        VRSUpdateMode[VRSUpdateMode["VRS_UPDATE_ONCE"] = 1] = "VRS_UPDATE_ONCE";
        VRSUpdateMode[VRSUpdateMode["VRS_UPDATE_ALWAYS"] = 2] = "VRS_UPDATE_ALWAYS";
        VRSUpdateMode[VRSUpdateMode["VRS_UPDATE_MAX"] = 3] = "VRS_UPDATE_MAX";
    })(VRSUpdateMode = Viewport.VRSUpdateMode || (Viewport.VRSUpdateMode = {}));
})(Viewport || (Viewport = {}));
export var AudioStreamPlayer3D;
(function (AudioStreamPlayer3D) {
    let AttenuationModel;
    (function (AttenuationModel) {
        AttenuationModel[AttenuationModel["ATTENUATION_INVERSE_DISTANCE"] = 0] = "ATTENUATION_INVERSE_DISTANCE";
        AttenuationModel[AttenuationModel["ATTENUATION_INVERSE_SQUARE_DISTANCE"] = 1] = "ATTENUATION_INVERSE_SQUARE_DISTANCE";
        AttenuationModel[AttenuationModel["ATTENUATION_LOGARITHMIC"] = 2] = "ATTENUATION_LOGARITHMIC";
        AttenuationModel[AttenuationModel["ATTENUATION_DISABLED"] = 3] = "ATTENUATION_DISABLED";
    })(AttenuationModel = AudioStreamPlayer3D.AttenuationModel || (AudioStreamPlayer3D.AttenuationModel = {}));
    let DopplerTracking;
    (function (DopplerTracking) {
        DopplerTracking[DopplerTracking["DOPPLER_TRACKING_DISABLED"] = 0] = "DOPPLER_TRACKING_DISABLED";
        DopplerTracking[DopplerTracking["DOPPLER_TRACKING_IDLE_STEP"] = 1] = "DOPPLER_TRACKING_IDLE_STEP";
        DopplerTracking[DopplerTracking["DOPPLER_TRACKING_PHYSICS_STEP"] = 2] = "DOPPLER_TRACKING_PHYSICS_STEP";
    })(DopplerTracking = AudioStreamPlayer3D.DopplerTracking || (AudioStreamPlayer3D.DopplerTracking = {}));
})(AudioStreamPlayer3D || (AudioStreamPlayer3D = {}));
export var ParticleProcessMaterial;
(function (ParticleProcessMaterial) {
    let Parameter;
    (function (Parameter) {
        Parameter[Parameter["PARAM_INITIAL_LINEAR_VELOCITY"] = 0] = "PARAM_INITIAL_LINEAR_VELOCITY";
        Parameter[Parameter["PARAM_ANGULAR_VELOCITY"] = 1] = "PARAM_ANGULAR_VELOCITY";
        Parameter[Parameter["PARAM_ORBIT_VELOCITY"] = 2] = "PARAM_ORBIT_VELOCITY";
        Parameter[Parameter["PARAM_LINEAR_ACCEL"] = 3] = "PARAM_LINEAR_ACCEL";
        Parameter[Parameter["PARAM_RADIAL_ACCEL"] = 4] = "PARAM_RADIAL_ACCEL";
        Parameter[Parameter["PARAM_TANGENTIAL_ACCEL"] = 5] = "PARAM_TANGENTIAL_ACCEL";
        Parameter[Parameter["PARAM_DAMPING"] = 6] = "PARAM_DAMPING";
        Parameter[Parameter["PARAM_ANGLE"] = 7] = "PARAM_ANGLE";
        Parameter[Parameter["PARAM_SCALE"] = 8] = "PARAM_SCALE";
        Parameter[Parameter["PARAM_HUE_VARIATION"] = 9] = "PARAM_HUE_VARIATION";
        Parameter[Parameter["PARAM_ANIM_SPEED"] = 10] = "PARAM_ANIM_SPEED";
        Parameter[Parameter["PARAM_ANIM_OFFSET"] = 11] = "PARAM_ANIM_OFFSET";
        Parameter[Parameter["PARAM_RADIAL_VELOCITY"] = 15] = "PARAM_RADIAL_VELOCITY";
        Parameter[Parameter["PARAM_DIRECTIONAL_VELOCITY"] = 16] = "PARAM_DIRECTIONAL_VELOCITY";
        Parameter[Parameter["PARAM_SCALE_OVER_VELOCITY"] = 17] = "PARAM_SCALE_OVER_VELOCITY";
        Parameter[Parameter["PARAM_MAX"] = 18] = "PARAM_MAX";
        Parameter[Parameter["PARAM_TURB_VEL_INFLUENCE"] = 13] = "PARAM_TURB_VEL_INFLUENCE";
        Parameter[Parameter["PARAM_TURB_INIT_DISPLACEMENT"] = 14] = "PARAM_TURB_INIT_DISPLACEMENT";
        Parameter[Parameter["PARAM_TURB_INFLUENCE_OVER_LIFE"] = 12] = "PARAM_TURB_INFLUENCE_OVER_LIFE";
    })(Parameter = ParticleProcessMaterial.Parameter || (ParticleProcessMaterial.Parameter = {}));
    let ParticleFlags;
    (function (ParticleFlags) {
        ParticleFlags[ParticleFlags["PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY"] = 0] = "PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY";
        ParticleFlags[ParticleFlags["PARTICLE_FLAG_ROTATE_Y"] = 1] = "PARTICLE_FLAG_ROTATE_Y";
        ParticleFlags[ParticleFlags["PARTICLE_FLAG_DISABLE_Z"] = 2] = "PARTICLE_FLAG_DISABLE_Z";
        ParticleFlags[ParticleFlags["PARTICLE_FLAG_DAMPING_AS_FRICTION"] = 3] = "PARTICLE_FLAG_DAMPING_AS_FRICTION";
        ParticleFlags[ParticleFlags["PARTICLE_FLAG_MAX"] = 4] = "PARTICLE_FLAG_MAX";
    })(ParticleFlags = ParticleProcessMaterial.ParticleFlags || (ParticleProcessMaterial.ParticleFlags = {}));
    let EmissionShape;
    (function (EmissionShape) {
        EmissionShape[EmissionShape["EMISSION_SHAPE_POINT"] = 0] = "EMISSION_SHAPE_POINT";
        EmissionShape[EmissionShape["EMISSION_SHAPE_SPHERE"] = 1] = "EMISSION_SHAPE_SPHERE";
        EmissionShape[EmissionShape["EMISSION_SHAPE_SPHERE_SURFACE"] = 2] = "EMISSION_SHAPE_SPHERE_SURFACE";
        EmissionShape[EmissionShape["EMISSION_SHAPE_BOX"] = 3] = "EMISSION_SHAPE_BOX";
        EmissionShape[EmissionShape["EMISSION_SHAPE_POINTS"] = 4] = "EMISSION_SHAPE_POINTS";
        EmissionShape[EmissionShape["EMISSION_SHAPE_DIRECTED_POINTS"] = 5] = "EMISSION_SHAPE_DIRECTED_POINTS";
        EmissionShape[EmissionShape["EMISSION_SHAPE_RING"] = 6] = "EMISSION_SHAPE_RING";
        EmissionShape[EmissionShape["EMISSION_SHAPE_MAX"] = 7] = "EMISSION_SHAPE_MAX";
    })(EmissionShape = ParticleProcessMaterial.EmissionShape || (ParticleProcessMaterial.EmissionShape = {}));
    let SubEmitterMode;
    (function (SubEmitterMode) {
        SubEmitterMode[SubEmitterMode["SUB_EMITTER_DISABLED"] = 0] = "SUB_EMITTER_DISABLED";
        SubEmitterMode[SubEmitterMode["SUB_EMITTER_CONSTANT"] = 1] = "SUB_EMITTER_CONSTANT";
        SubEmitterMode[SubEmitterMode["SUB_EMITTER_AT_END"] = 2] = "SUB_EMITTER_AT_END";
        SubEmitterMode[SubEmitterMode["SUB_EMITTER_AT_COLLISION"] = 3] = "SUB_EMITTER_AT_COLLISION";
        SubEmitterMode[SubEmitterMode["SUB_EMITTER_MAX"] = 4] = "SUB_EMITTER_MAX";
    })(SubEmitterMode = ParticleProcessMaterial.SubEmitterMode || (ParticleProcessMaterial.SubEmitterMode = {}));
    let CollisionMode;
    (function (CollisionMode) {
        CollisionMode[CollisionMode["COLLISION_DISABLED"] = 0] = "COLLISION_DISABLED";
        CollisionMode[CollisionMode["COLLISION_RIGID"] = 1] = "COLLISION_RIGID";
        CollisionMode[CollisionMode["COLLISION_HIDE_ON_CONTACT"] = 2] = "COLLISION_HIDE_ON_CONTACT";
        CollisionMode[CollisionMode["COLLISION_MAX"] = 3] = "COLLISION_MAX";
    })(CollisionMode = ParticleProcessMaterial.CollisionMode || (ParticleProcessMaterial.CollisionMode = {}));
})(ParticleProcessMaterial || (ParticleProcessMaterial = {}));
export var TextureProgressBar;
(function (TextureProgressBar) {
    let FillMode;
    (function (FillMode) {
        FillMode[FillMode["FILL_LEFT_TO_RIGHT"] = 0] = "FILL_LEFT_TO_RIGHT";
        FillMode[FillMode["FILL_RIGHT_TO_LEFT"] = 1] = "FILL_RIGHT_TO_LEFT";
        FillMode[FillMode["FILL_TOP_TO_BOTTOM"] = 2] = "FILL_TOP_TO_BOTTOM";
        FillMode[FillMode["FILL_BOTTOM_TO_TOP"] = 3] = "FILL_BOTTOM_TO_TOP";
        FillMode[FillMode["FILL_CLOCKWISE"] = 4] = "FILL_CLOCKWISE";
        FillMode[FillMode["FILL_COUNTER_CLOCKWISE"] = 5] = "FILL_COUNTER_CLOCKWISE";
        FillMode[FillMode["FILL_BILINEAR_LEFT_AND_RIGHT"] = 6] = "FILL_BILINEAR_LEFT_AND_RIGHT";
        FillMode[FillMode["FILL_BILINEAR_TOP_AND_BOTTOM"] = 7] = "FILL_BILINEAR_TOP_AND_BOTTOM";
        FillMode[FillMode["FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE"] = 8] = "FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE";
    })(FillMode = TextureProgressBar.FillMode || (TextureProgressBar.FillMode = {}));
})(TextureProgressBar || (TextureProgressBar = {}));
export var AudioEffectDistortion;
(function (AudioEffectDistortion) {
    let Mode;
    (function (Mode) {
        Mode[Mode["MODE_CLIP"] = 0] = "MODE_CLIP";
        Mode[Mode["MODE_ATAN"] = 1] = "MODE_ATAN";
        Mode[Mode["MODE_LOFI"] = 2] = "MODE_LOFI";
        Mode[Mode["MODE_OVERDRIVE"] = 3] = "MODE_OVERDRIVE";
        Mode[Mode["MODE_WAVESHAPE"] = 4] = "MODE_WAVESHAPE";
    })(Mode = AudioEffectDistortion.Mode || (AudioEffectDistortion.Mode = {}));
})(AudioEffectDistortion || (AudioEffectDistortion = {}));
export var TextEdit;
(function (TextEdit) {
    let MenuItems;
    (function (MenuItems) {
        MenuItems[MenuItems["MENU_CUT"] = 0] = "MENU_CUT";
        MenuItems[MenuItems["MENU_COPY"] = 1] = "MENU_COPY";
        MenuItems[MenuItems["MENU_PASTE"] = 2] = "MENU_PASTE";
        MenuItems[MenuItems["MENU_CLEAR"] = 3] = "MENU_CLEAR";
        MenuItems[MenuItems["MENU_SELECT_ALL"] = 4] = "MENU_SELECT_ALL";
        MenuItems[MenuItems["MENU_UNDO"] = 5] = "MENU_UNDO";
        MenuItems[MenuItems["MENU_REDO"] = 6] = "MENU_REDO";
        MenuItems[MenuItems["MENU_SUBMENU_TEXT_DIR"] = 7] = "MENU_SUBMENU_TEXT_DIR";
        MenuItems[MenuItems["MENU_DIR_INHERITED"] = 8] = "MENU_DIR_INHERITED";
        MenuItems[MenuItems["MENU_DIR_AUTO"] = 9] = "MENU_DIR_AUTO";
        MenuItems[MenuItems["MENU_DIR_LTR"] = 10] = "MENU_DIR_LTR";
        MenuItems[MenuItems["MENU_DIR_RTL"] = 11] = "MENU_DIR_RTL";
        MenuItems[MenuItems["MENU_DISPLAY_UCC"] = 12] = "MENU_DISPLAY_UCC";
        MenuItems[MenuItems["MENU_SUBMENU_INSERT_UCC"] = 13] = "MENU_SUBMENU_INSERT_UCC";
        MenuItems[MenuItems["MENU_INSERT_LRM"] = 14] = "MENU_INSERT_LRM";
        MenuItems[MenuItems["MENU_INSERT_RLM"] = 15] = "MENU_INSERT_RLM";
        MenuItems[MenuItems["MENU_INSERT_LRE"] = 16] = "MENU_INSERT_LRE";
        MenuItems[MenuItems["MENU_INSERT_RLE"] = 17] = "MENU_INSERT_RLE";
        MenuItems[MenuItems["MENU_INSERT_LRO"] = 18] = "MENU_INSERT_LRO";
        MenuItems[MenuItems["MENU_INSERT_RLO"] = 19] = "MENU_INSERT_RLO";
        MenuItems[MenuItems["MENU_INSERT_PDF"] = 20] = "MENU_INSERT_PDF";
        MenuItems[MenuItems["MENU_INSERT_ALM"] = 21] = "MENU_INSERT_ALM";
        MenuItems[MenuItems["MENU_INSERT_LRI"] = 22] = "MENU_INSERT_LRI";
        MenuItems[MenuItems["MENU_INSERT_RLI"] = 23] = "MENU_INSERT_RLI";
        MenuItems[MenuItems["MENU_INSERT_FSI"] = 24] = "MENU_INSERT_FSI";
        MenuItems[MenuItems["MENU_INSERT_PDI"] = 25] = "MENU_INSERT_PDI";
        MenuItems[MenuItems["MENU_INSERT_ZWJ"] = 26] = "MENU_INSERT_ZWJ";
        MenuItems[MenuItems["MENU_INSERT_ZWNJ"] = 27] = "MENU_INSERT_ZWNJ";
        MenuItems[MenuItems["MENU_INSERT_WJ"] = 28] = "MENU_INSERT_WJ";
        MenuItems[MenuItems["MENU_INSERT_SHY"] = 29] = "MENU_INSERT_SHY";
        MenuItems[MenuItems["MENU_MAX"] = 30] = "MENU_MAX";
    })(MenuItems = TextEdit.MenuItems || (TextEdit.MenuItems = {}));
    let EditAction;
    (function (EditAction) {
        EditAction[EditAction["ACTION_NONE"] = 0] = "ACTION_NONE";
        EditAction[EditAction["ACTION_TYPING"] = 1] = "ACTION_TYPING";
        EditAction[EditAction["ACTION_BACKSPACE"] = 2] = "ACTION_BACKSPACE";
        EditAction[EditAction["ACTION_DELETE"] = 3] = "ACTION_DELETE";
    })(EditAction = TextEdit.EditAction || (TextEdit.EditAction = {}));
    let SearchFlags;
    (function (SearchFlags) {
        SearchFlags[SearchFlags["SEARCH_MATCH_CASE"] = 1] = "SEARCH_MATCH_CASE";
        SearchFlags[SearchFlags["SEARCH_WHOLE_WORDS"] = 2] = "SEARCH_WHOLE_WORDS";
        SearchFlags[SearchFlags["SEARCH_BACKWARDS"] = 4] = "SEARCH_BACKWARDS";
    })(SearchFlags = TextEdit.SearchFlags || (TextEdit.SearchFlags = {}));
    let CaretType;
    (function (CaretType) {
        CaretType[CaretType["CARET_TYPE_LINE"] = 0] = "CARET_TYPE_LINE";
        CaretType[CaretType["CARET_TYPE_BLOCK"] = 1] = "CARET_TYPE_BLOCK";
    })(CaretType = TextEdit.CaretType || (TextEdit.CaretType = {}));
    let SelectionMode;
    (function (SelectionMode) {
        SelectionMode[SelectionMode["SELECTION_MODE_NONE"] = 0] = "SELECTION_MODE_NONE";
        SelectionMode[SelectionMode["SELECTION_MODE_SHIFT"] = 1] = "SELECTION_MODE_SHIFT";
        SelectionMode[SelectionMode["SELECTION_MODE_POINTER"] = 2] = "SELECTION_MODE_POINTER";
        SelectionMode[SelectionMode["SELECTION_MODE_WORD"] = 3] = "SELECTION_MODE_WORD";
        SelectionMode[SelectionMode["SELECTION_MODE_LINE"] = 4] = "SELECTION_MODE_LINE";
    })(SelectionMode = TextEdit.SelectionMode || (TextEdit.SelectionMode = {}));
    let LineWrappingMode;
    (function (LineWrappingMode) {
        LineWrappingMode[LineWrappingMode["LINE_WRAPPING_NONE"] = 0] = "LINE_WRAPPING_NONE";
        LineWrappingMode[LineWrappingMode["LINE_WRAPPING_BOUNDARY"] = 1] = "LINE_WRAPPING_BOUNDARY";
    })(LineWrappingMode = TextEdit.LineWrappingMode || (TextEdit.LineWrappingMode = {}));
    let GutterType;
    (function (GutterType) {
        GutterType[GutterType["GUTTER_TYPE_STRING"] = 0] = "GUTTER_TYPE_STRING";
        GutterType[GutterType["GUTTER_TYPE_ICON"] = 1] = "GUTTER_TYPE_ICON";
        GutterType[GutterType["GUTTER_TYPE_CUSTOM"] = 2] = "GUTTER_TYPE_CUSTOM";
    })(GutterType = TextEdit.GutterType || (TextEdit.GutterType = {}));
})(TextEdit || (TextEdit = {}));
export var Gradient;
(function (Gradient) {
    let InterpolationMode;
    (function (InterpolationMode) {
        InterpolationMode[InterpolationMode["GRADIENT_INTERPOLATE_LINEAR"] = 0] = "GRADIENT_INTERPOLATE_LINEAR";
        InterpolationMode[InterpolationMode["GRADIENT_INTERPOLATE_CONSTANT"] = 1] = "GRADIENT_INTERPOLATE_CONSTANT";
        InterpolationMode[InterpolationMode["GRADIENT_INTERPOLATE_CUBIC"] = 2] = "GRADIENT_INTERPOLATE_CUBIC";
    })(InterpolationMode = Gradient.InterpolationMode || (Gradient.InterpolationMode = {}));
    let ColorSpace;
    (function (ColorSpace) {
        ColorSpace[ColorSpace["GRADIENT_COLOR_SPACE_SRGB"] = 0] = "GRADIENT_COLOR_SPACE_SRGB";
        ColorSpace[ColorSpace["GRADIENT_COLOR_SPACE_LINEAR_SRGB"] = 1] = "GRADIENT_COLOR_SPACE_LINEAR_SRGB";
        ColorSpace[ColorSpace["GRADIENT_COLOR_SPACE_OKLAB"] = 2] = "GRADIENT_COLOR_SPACE_OKLAB";
    })(ColorSpace = Gradient.ColorSpace || (Gradient.ColorSpace = {}));
})(Gradient || (Gradient = {}));
export var TileMap;
(function (TileMap) {
    let VisibilityMode;
    (function (VisibilityMode) {
        VisibilityMode[VisibilityMode["VISIBILITY_MODE_DEFAULT"] = 0] = "VISIBILITY_MODE_DEFAULT";
        VisibilityMode[VisibilityMode["VISIBILITY_MODE_FORCE_HIDE"] = 2] = "VISIBILITY_MODE_FORCE_HIDE";
        VisibilityMode[VisibilityMode["VISIBILITY_MODE_FORCE_SHOW"] = 1] = "VISIBILITY_MODE_FORCE_SHOW";
    })(VisibilityMode = TileMap.VisibilityMode || (TileMap.VisibilityMode = {}));
})(TileMap || (TileMap = {}));
export var VisualShaderNodeParticleRandomness;
(function (VisualShaderNodeParticleRandomness) {
    let OpType;
    (function (OpType) {
        OpType[OpType["OP_TYPE_SCALAR"] = 0] = "OP_TYPE_SCALAR";
        OpType[OpType["OP_TYPE_VECTOR_2D"] = 1] = "OP_TYPE_VECTOR_2D";
        OpType[OpType["OP_TYPE_VECTOR_3D"] = 2] = "OP_TYPE_VECTOR_3D";
        OpType[OpType["OP_TYPE_VECTOR_4D"] = 3] = "OP_TYPE_VECTOR_4D";
        OpType[OpType["OP_TYPE_MAX"] = 4] = "OP_TYPE_MAX";
    })(OpType = VisualShaderNodeParticleRandomness.OpType || (VisualShaderNodeParticleRandomness.OpType = {}));
})(VisualShaderNodeParticleRandomness || (VisualShaderNodeParticleRandomness = {}));
export var NavigationServer3D;
(function (NavigationServer3D) {
    let ProcessInfo;
    (function (ProcessInfo) {
        ProcessInfo[ProcessInfo["INFO_ACTIVE_MAPS"] = 0] = "INFO_ACTIVE_MAPS";
        ProcessInfo[ProcessInfo["INFO_REGION_COUNT"] = 1] = "INFO_REGION_COUNT";
        ProcessInfo[ProcessInfo["INFO_AGENT_COUNT"] = 2] = "INFO_AGENT_COUNT";
        ProcessInfo[ProcessInfo["INFO_LINK_COUNT"] = 3] = "INFO_LINK_COUNT";
        ProcessInfo[ProcessInfo["INFO_POLYGON_COUNT"] = 4] = "INFO_POLYGON_COUNT";
        ProcessInfo[ProcessInfo["INFO_EDGE_COUNT"] = 5] = "INFO_EDGE_COUNT";
        ProcessInfo[ProcessInfo["INFO_EDGE_MERGE_COUNT"] = 6] = "INFO_EDGE_MERGE_COUNT";
        ProcessInfo[ProcessInfo["INFO_EDGE_CONNECTION_COUNT"] = 7] = "INFO_EDGE_CONNECTION_COUNT";
        ProcessInfo[ProcessInfo["INFO_EDGE_FREE_COUNT"] = 8] = "INFO_EDGE_FREE_COUNT";
        ProcessInfo[ProcessInfo["INFO_OBSTACLE_COUNT"] = 9] = "INFO_OBSTACLE_COUNT";
    })(ProcessInfo = NavigationServer3D.ProcessInfo || (NavigationServer3D.ProcessInfo = {}));
})(NavigationServer3D || (NavigationServer3D = {}));
export var VisualShaderNodeVectorFunc;
(function (VisualShaderNodeVectorFunc) {
    let Function;
    (function (Function) {
        Function[Function["FUNC_NORMALIZE"] = 0] = "FUNC_NORMALIZE";
        Function[Function["FUNC_SATURATE"] = 1] = "FUNC_SATURATE";
        Function[Function["FUNC_NEGATE"] = 2] = "FUNC_NEGATE";
        Function[Function["FUNC_RECIPROCAL"] = 3] = "FUNC_RECIPROCAL";
        Function[Function["FUNC_ABS"] = 4] = "FUNC_ABS";
        Function[Function["FUNC_ACOS"] = 5] = "FUNC_ACOS";
        Function[Function["FUNC_ACOSH"] = 6] = "FUNC_ACOSH";
        Function[Function["FUNC_ASIN"] = 7] = "FUNC_ASIN";
        Function[Function["FUNC_ASINH"] = 8] = "FUNC_ASINH";
        Function[Function["FUNC_ATAN"] = 9] = "FUNC_ATAN";
        Function[Function["FUNC_ATANH"] = 10] = "FUNC_ATANH";
        Function[Function["FUNC_CEIL"] = 11] = "FUNC_CEIL";
        Function[Function["FUNC_COS"] = 12] = "FUNC_COS";
        Function[Function["FUNC_COSH"] = 13] = "FUNC_COSH";
        Function[Function["FUNC_DEGREES"] = 14] = "FUNC_DEGREES";
        Function[Function["FUNC_EXP"] = 15] = "FUNC_EXP";
        Function[Function["FUNC_EXP2"] = 16] = "FUNC_EXP2";
        Function[Function["FUNC_FLOOR"] = 17] = "FUNC_FLOOR";
        Function[Function["FUNC_FRACT"] = 18] = "FUNC_FRACT";
        Function[Function["FUNC_INVERSE_SQRT"] = 19] = "FUNC_INVERSE_SQRT";
        Function[Function["FUNC_LOG"] = 20] = "FUNC_LOG";
        Function[Function["FUNC_LOG2"] = 21] = "FUNC_LOG2";
        Function[Function["FUNC_RADIANS"] = 22] = "FUNC_RADIANS";
        Function[Function["FUNC_ROUND"] = 23] = "FUNC_ROUND";
        Function[Function["FUNC_ROUNDEVEN"] = 24] = "FUNC_ROUNDEVEN";
        Function[Function["FUNC_SIGN"] = 25] = "FUNC_SIGN";
        Function[Function["FUNC_SIN"] = 26] = "FUNC_SIN";
        Function[Function["FUNC_SINH"] = 27] = "FUNC_SINH";
        Function[Function["FUNC_SQRT"] = 28] = "FUNC_SQRT";
        Function[Function["FUNC_TAN"] = 29] = "FUNC_TAN";
        Function[Function["FUNC_TANH"] = 30] = "FUNC_TANH";
        Function[Function["FUNC_TRUNC"] = 31] = "FUNC_TRUNC";
        Function[Function["FUNC_ONEMINUS"] = 32] = "FUNC_ONEMINUS";
        Function[Function["FUNC_MAX"] = 33] = "FUNC_MAX";
    })(Function = VisualShaderNodeVectorFunc.Function || (VisualShaderNodeVectorFunc.Function = {}));
})(VisualShaderNodeVectorFunc || (VisualShaderNodeVectorFunc = {}));
export var VisualShaderNodeUIntOp;
(function (VisualShaderNodeUIntOp) {
    let Operator;
    (function (Operator) {
        Operator[Operator["OP_ADD"] = 0] = "OP_ADD";
        Operator[Operator["OP_SUB"] = 1] = "OP_SUB";
        Operator[Operator["OP_MUL"] = 2] = "OP_MUL";
        Operator[Operator["OP_DIV"] = 3] = "OP_DIV";
        Operator[Operator["OP_MOD"] = 4] = "OP_MOD";
        Operator[Operator["OP_MAX"] = 5] = "OP_MAX";
        Operator[Operator["OP_MIN"] = 6] = "OP_MIN";
        Operator[Operator["OP_BITWISE_AND"] = 7] = "OP_BITWISE_AND";
        Operator[Operator["OP_BITWISE_OR"] = 8] = "OP_BITWISE_OR";
        Operator[Operator["OP_BITWISE_XOR"] = 9] = "OP_BITWISE_XOR";
        Operator[Operator["OP_BITWISE_LEFT_SHIFT"] = 10] = "OP_BITWISE_LEFT_SHIFT";
        Operator[Operator["OP_BITWISE_RIGHT_SHIFT"] = 11] = "OP_BITWISE_RIGHT_SHIFT";
        Operator[Operator["OP_ENUM_SIZE"] = 12] = "OP_ENUM_SIZE";
    })(Operator = VisualShaderNodeUIntOp.Operator || (VisualShaderNodeUIntOp.Operator = {}));
})(VisualShaderNodeUIntOp || (VisualShaderNodeUIntOp = {}));
export var VisualShaderNodeStep;
(function (VisualShaderNodeStep) {
    let OpType;
    (function (OpType) {
        OpType[OpType["OP_TYPE_SCALAR"] = 0] = "OP_TYPE_SCALAR";
        OpType[OpType["OP_TYPE_VECTOR_2D"] = 1] = "OP_TYPE_VECTOR_2D";
        OpType[OpType["OP_TYPE_VECTOR_2D_SCALAR"] = 2] = "OP_TYPE_VECTOR_2D_SCALAR";
        OpType[OpType["OP_TYPE_VECTOR_3D"] = 3] = "OP_TYPE_VECTOR_3D";
        OpType[OpType["OP_TYPE_VECTOR_3D_SCALAR"] = 4] = "OP_TYPE_VECTOR_3D_SCALAR";
        OpType[OpType["OP_TYPE_VECTOR_4D"] = 5] = "OP_TYPE_VECTOR_4D";
        OpType[OpType["OP_TYPE_VECTOR_4D_SCALAR"] = 6] = "OP_TYPE_VECTOR_4D_SCALAR";
        OpType[OpType["OP_TYPE_MAX"] = 7] = "OP_TYPE_MAX";
    })(OpType = VisualShaderNodeStep.OpType || (VisualShaderNodeStep.OpType = {}));
})(VisualShaderNodeStep || (VisualShaderNodeStep = {}));
export var Container;
(function (Container) {
    Container.NOTIFICATION_PRE_SORT_CHILDREN = 50;
    Container.NOTIFICATION_SORT_CHILDREN = 51;
})(Container || (Container = {}));
export var ResourceUID;
(function (ResourceUID) {
    ResourceUID.INVALID_ID = -1;
})(ResourceUID || (ResourceUID = {}));
export var CanvasItemMaterial;
(function (CanvasItemMaterial) {
    let BlendMode;
    (function (BlendMode) {
        BlendMode[BlendMode["BLEND_MODE_MIX"] = 0] = "BLEND_MODE_MIX";
        BlendMode[BlendMode["BLEND_MODE_ADD"] = 1] = "BLEND_MODE_ADD";
        BlendMode[BlendMode["BLEND_MODE_SUB"] = 2] = "BLEND_MODE_SUB";
        BlendMode[BlendMode["BLEND_MODE_MUL"] = 3] = "BLEND_MODE_MUL";
        BlendMode[BlendMode["BLEND_MODE_PREMULT_ALPHA"] = 4] = "BLEND_MODE_PREMULT_ALPHA";
    })(BlendMode = CanvasItemMaterial.BlendMode || (CanvasItemMaterial.BlendMode = {}));
    let LightMode;
    (function (LightMode) {
        LightMode[LightMode["LIGHT_MODE_NORMAL"] = 0] = "LIGHT_MODE_NORMAL";
        LightMode[LightMode["LIGHT_MODE_UNSHADED"] = 1] = "LIGHT_MODE_UNSHADED";
        LightMode[LightMode["LIGHT_MODE_LIGHT_ONLY"] = 2] = "LIGHT_MODE_LIGHT_ONLY";
    })(LightMode = CanvasItemMaterial.LightMode || (CanvasItemMaterial.LightMode = {}));
})(CanvasItemMaterial || (CanvasItemMaterial = {}));
export var EditorFileDialog;
(function (EditorFileDialog) {
    let FileMode;
    (function (FileMode) {
        FileMode[FileMode["FILE_MODE_OPEN_FILE"] = 0] = "FILE_MODE_OPEN_FILE";
        FileMode[FileMode["FILE_MODE_OPEN_FILES"] = 1] = "FILE_MODE_OPEN_FILES";
        FileMode[FileMode["FILE_MODE_OPEN_DIR"] = 2] = "FILE_MODE_OPEN_DIR";
        FileMode[FileMode["FILE_MODE_OPEN_ANY"] = 3] = "FILE_MODE_OPEN_ANY";
        FileMode[FileMode["FILE_MODE_SAVE_FILE"] = 4] = "FILE_MODE_SAVE_FILE";
    })(FileMode = EditorFileDialog.FileMode || (EditorFileDialog.FileMode = {}));
    let Access;
    (function (Access) {
        Access[Access["ACCESS_RESOURCES"] = 0] = "ACCESS_RESOURCES";
        Access[Access["ACCESS_USERDATA"] = 1] = "ACCESS_USERDATA";
        Access[Access["ACCESS_FILESYSTEM"] = 2] = "ACCESS_FILESYSTEM";
    })(Access = EditorFileDialog.Access || (EditorFileDialog.Access = {}));
    let DisplayMode;
    (function (DisplayMode) {
        DisplayMode[DisplayMode["DISPLAY_THUMBNAILS"] = 0] = "DISPLAY_THUMBNAILS";
        DisplayMode[DisplayMode["DISPLAY_LIST"] = 1] = "DISPLAY_LIST";
    })(DisplayMode = EditorFileDialog.DisplayMode || (EditorFileDialog.DisplayMode = {}));
})(EditorFileDialog || (EditorFileDialog = {}));
export var Camera3D;
(function (Camera3D) {
    let ProjectionType;
    (function (ProjectionType) {
        ProjectionType[ProjectionType["PROJECTION_PERSPECTIVE"] = 0] = "PROJECTION_PERSPECTIVE";
        ProjectionType[ProjectionType["PROJECTION_ORTHOGONAL"] = 1] = "PROJECTION_ORTHOGONAL";
        ProjectionType[ProjectionType["PROJECTION_FRUSTUM"] = 2] = "PROJECTION_FRUSTUM";
    })(ProjectionType = Camera3D.ProjectionType || (Camera3D.ProjectionType = {}));
    let KeepAspect;
    (function (KeepAspect) {
        KeepAspect[KeepAspect["KEEP_WIDTH"] = 0] = "KEEP_WIDTH";
        KeepAspect[KeepAspect["KEEP_HEIGHT"] = 1] = "KEEP_HEIGHT";
    })(KeepAspect = Camera3D.KeepAspect || (Camera3D.KeepAspect = {}));
    let DopplerTracking;
    (function (DopplerTracking) {
        DopplerTracking[DopplerTracking["DOPPLER_TRACKING_DISABLED"] = 0] = "DOPPLER_TRACKING_DISABLED";
        DopplerTracking[DopplerTracking["DOPPLER_TRACKING_IDLE_STEP"] = 1] = "DOPPLER_TRACKING_IDLE_STEP";
        DopplerTracking[DopplerTracking["DOPPLER_TRACKING_PHYSICS_STEP"] = 2] = "DOPPLER_TRACKING_PHYSICS_STEP";
    })(DopplerTracking = Camera3D.DopplerTracking || (Camera3D.DopplerTracking = {}));
})(Camera3D || (Camera3D = {}));
export var VisualShaderNodeUIntFunc;
(function (VisualShaderNodeUIntFunc) {
    let Function;
    (function (Function) {
        Function[Function["FUNC_NEGATE"] = 0] = "FUNC_NEGATE";
        Function[Function["FUNC_BITWISE_NOT"] = 1] = "FUNC_BITWISE_NOT";
        Function[Function["FUNC_MAX"] = 2] = "FUNC_MAX";
    })(Function = VisualShaderNodeUIntFunc.Function || (VisualShaderNodeUIntFunc.Function = {}));
})(VisualShaderNodeUIntFunc || (VisualShaderNodeUIntFunc = {}));
export var AudioStreamPlaybackPolyphonic;
(function (AudioStreamPlaybackPolyphonic) {
    AudioStreamPlaybackPolyphonic.INVALID_ID = -1;
})(AudioStreamPlaybackPolyphonic || (AudioStreamPlaybackPolyphonic = {}));
export var VisualShaderNodeParticleEmit;
(function (VisualShaderNodeParticleEmit) {
    let EmitFlags;
    (function (EmitFlags) {
        EmitFlags[EmitFlags["EMIT_FLAG_POSITION"] = 1] = "EMIT_FLAG_POSITION";
        EmitFlags[EmitFlags["EMIT_FLAG_ROT_SCALE"] = 2] = "EMIT_FLAG_ROT_SCALE";
        EmitFlags[EmitFlags["EMIT_FLAG_VELOCITY"] = 4] = "EMIT_FLAG_VELOCITY";
        EmitFlags[EmitFlags["EMIT_FLAG_COLOR"] = 8] = "EMIT_FLAG_COLOR";
        EmitFlags[EmitFlags["EMIT_FLAG_CUSTOM"] = 16] = "EMIT_FLAG_CUSTOM";
    })(EmitFlags = VisualShaderNodeParticleEmit.EmitFlags || (VisualShaderNodeParticleEmit.EmitFlags = {}));
})(VisualShaderNodeParticleEmit || (VisualShaderNodeParticleEmit = {}));
export var LinkButton;
(function (LinkButton) {
    let UnderlineMode;
    (function (UnderlineMode) {
        UnderlineMode[UnderlineMode["UNDERLINE_MODE_ALWAYS"] = 0] = "UNDERLINE_MODE_ALWAYS";
        UnderlineMode[UnderlineMode["UNDERLINE_MODE_ON_HOVER"] = 1] = "UNDERLINE_MODE_ON_HOVER";
        UnderlineMode[UnderlineMode["UNDERLINE_MODE_NEVER"] = 2] = "UNDERLINE_MODE_NEVER";
    })(UnderlineMode = LinkButton.UnderlineMode || (LinkButton.UnderlineMode = {}));
})(LinkButton || (LinkButton = {}));
export var StreamPeerTCP;
(function (StreamPeerTCP) {
    let Status;
    (function (Status) {
        Status[Status["STATUS_NONE"] = 0] = "STATUS_NONE";
        Status[Status["STATUS_CONNECTING"] = 1] = "STATUS_CONNECTING";
        Status[Status["STATUS_CONNECTED"] = 2] = "STATUS_CONNECTED";
        Status[Status["STATUS_ERROR"] = 3] = "STATUS_ERROR";
    })(Status = StreamPeerTCP.Status || (StreamPeerTCP.Status = {}));
})(StreamPeerTCP || (StreamPeerTCP = {}));
export var XRFaceTracker;
(function (XRFaceTracker) {
    let BlendShapeEntry;
    (function (BlendShapeEntry) {
        BlendShapeEntry[BlendShapeEntry["FT_EYE_LOOK_OUT_RIGHT"] = 0] = "FT_EYE_LOOK_OUT_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_LOOK_IN_RIGHT"] = 1] = "FT_EYE_LOOK_IN_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_LOOK_UP_RIGHT"] = 2] = "FT_EYE_LOOK_UP_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_LOOK_DOWN_RIGHT"] = 3] = "FT_EYE_LOOK_DOWN_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_LOOK_OUT_LEFT"] = 4] = "FT_EYE_LOOK_OUT_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_LOOK_IN_LEFT"] = 5] = "FT_EYE_LOOK_IN_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_LOOK_UP_LEFT"] = 6] = "FT_EYE_LOOK_UP_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_LOOK_DOWN_LEFT"] = 7] = "FT_EYE_LOOK_DOWN_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_CLOSED_RIGHT"] = 8] = "FT_EYE_CLOSED_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_CLOSED_LEFT"] = 9] = "FT_EYE_CLOSED_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_SQUINT_RIGHT"] = 10] = "FT_EYE_SQUINT_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_SQUINT_LEFT"] = 11] = "FT_EYE_SQUINT_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_WIDE_RIGHT"] = 12] = "FT_EYE_WIDE_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_WIDE_LEFT"] = 13] = "FT_EYE_WIDE_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_DILATION_RIGHT"] = 14] = "FT_EYE_DILATION_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_DILATION_LEFT"] = 15] = "FT_EYE_DILATION_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_CONSTRICT_RIGHT"] = 16] = "FT_EYE_CONSTRICT_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_CONSTRICT_LEFT"] = 17] = "FT_EYE_CONSTRICT_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_BROW_PINCH_RIGHT"] = 18] = "FT_BROW_PINCH_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_BROW_PINCH_LEFT"] = 19] = "FT_BROW_PINCH_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_BROW_LOWERER_RIGHT"] = 20] = "FT_BROW_LOWERER_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_BROW_LOWERER_LEFT"] = 21] = "FT_BROW_LOWERER_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_BROW_INNER_UP_RIGHT"] = 22] = "FT_BROW_INNER_UP_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_BROW_INNER_UP_LEFT"] = 23] = "FT_BROW_INNER_UP_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_BROW_OUTER_UP_RIGHT"] = 24] = "FT_BROW_OUTER_UP_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_BROW_OUTER_UP_LEFT"] = 25] = "FT_BROW_OUTER_UP_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_NOSE_SNEER_RIGHT"] = 26] = "FT_NOSE_SNEER_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_NOSE_SNEER_LEFT"] = 27] = "FT_NOSE_SNEER_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_NASAL_DILATION_RIGHT"] = 28] = "FT_NASAL_DILATION_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_NASAL_DILATION_LEFT"] = 29] = "FT_NASAL_DILATION_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_NASAL_CONSTRICT_RIGHT"] = 30] = "FT_NASAL_CONSTRICT_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_NASAL_CONSTRICT_LEFT"] = 31] = "FT_NASAL_CONSTRICT_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_CHEEK_SQUINT_RIGHT"] = 32] = "FT_CHEEK_SQUINT_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_CHEEK_SQUINT_LEFT"] = 33] = "FT_CHEEK_SQUINT_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_CHEEK_PUFF_RIGHT"] = 34] = "FT_CHEEK_PUFF_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_CHEEK_PUFF_LEFT"] = 35] = "FT_CHEEK_PUFF_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_CHEEK_SUCK_RIGHT"] = 36] = "FT_CHEEK_SUCK_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_CHEEK_SUCK_LEFT"] = 37] = "FT_CHEEK_SUCK_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_JAW_OPEN"] = 38] = "FT_JAW_OPEN";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_CLOSED"] = 39] = "FT_MOUTH_CLOSED";
        BlendShapeEntry[BlendShapeEntry["FT_JAW_RIGHT"] = 40] = "FT_JAW_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_JAW_LEFT"] = 41] = "FT_JAW_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_JAW_FORWARD"] = 42] = "FT_JAW_FORWARD";
        BlendShapeEntry[BlendShapeEntry["FT_JAW_BACKWARD"] = 43] = "FT_JAW_BACKWARD";
        BlendShapeEntry[BlendShapeEntry["FT_JAW_CLENCH"] = 44] = "FT_JAW_CLENCH";
        BlendShapeEntry[BlendShapeEntry["FT_JAW_MANDIBLE_RAISE"] = 45] = "FT_JAW_MANDIBLE_RAISE";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_SUCK_UPPER_RIGHT"] = 46] = "FT_LIP_SUCK_UPPER_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_SUCK_UPPER_LEFT"] = 47] = "FT_LIP_SUCK_UPPER_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_SUCK_LOWER_RIGHT"] = 48] = "FT_LIP_SUCK_LOWER_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_SUCK_LOWER_LEFT"] = 49] = "FT_LIP_SUCK_LOWER_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_SUCK_CORNER_RIGHT"] = 50] = "FT_LIP_SUCK_CORNER_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_SUCK_CORNER_LEFT"] = 51] = "FT_LIP_SUCK_CORNER_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_FUNNEL_UPPER_RIGHT"] = 52] = "FT_LIP_FUNNEL_UPPER_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_FUNNEL_UPPER_LEFT"] = 53] = "FT_LIP_FUNNEL_UPPER_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_FUNNEL_LOWER_RIGHT"] = 54] = "FT_LIP_FUNNEL_LOWER_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_FUNNEL_LOWER_LEFT"] = 55] = "FT_LIP_FUNNEL_LOWER_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_PUCKER_UPPER_RIGHT"] = 56] = "FT_LIP_PUCKER_UPPER_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_PUCKER_UPPER_LEFT"] = 57] = "FT_LIP_PUCKER_UPPER_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_PUCKER_LOWER_RIGHT"] = 58] = "FT_LIP_PUCKER_LOWER_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_PUCKER_LOWER_LEFT"] = 59] = "FT_LIP_PUCKER_LOWER_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_UPPER_UP_RIGHT"] = 60] = "FT_MOUTH_UPPER_UP_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_UPPER_UP_LEFT"] = 61] = "FT_MOUTH_UPPER_UP_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_LOWER_DOWN_RIGHT"] = 62] = "FT_MOUTH_LOWER_DOWN_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_LOWER_DOWN_LEFT"] = 63] = "FT_MOUTH_LOWER_DOWN_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_UPPER_DEEPEN_RIGHT"] = 64] = "FT_MOUTH_UPPER_DEEPEN_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_UPPER_DEEPEN_LEFT"] = 65] = "FT_MOUTH_UPPER_DEEPEN_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_UPPER_RIGHT"] = 66] = "FT_MOUTH_UPPER_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_UPPER_LEFT"] = 67] = "FT_MOUTH_UPPER_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_LOWER_RIGHT"] = 68] = "FT_MOUTH_LOWER_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_LOWER_LEFT"] = 69] = "FT_MOUTH_LOWER_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_CORNER_PULL_RIGHT"] = 70] = "FT_MOUTH_CORNER_PULL_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_CORNER_PULL_LEFT"] = 71] = "FT_MOUTH_CORNER_PULL_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_CORNER_SLANT_RIGHT"] = 72] = "FT_MOUTH_CORNER_SLANT_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_CORNER_SLANT_LEFT"] = 73] = "FT_MOUTH_CORNER_SLANT_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_FROWN_RIGHT"] = 74] = "FT_MOUTH_FROWN_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_FROWN_LEFT"] = 75] = "FT_MOUTH_FROWN_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_STRETCH_RIGHT"] = 76] = "FT_MOUTH_STRETCH_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_STRETCH_LEFT"] = 77] = "FT_MOUTH_STRETCH_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_DIMPLE_RIGHT"] = 78] = "FT_MOUTH_DIMPLE_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_DIMPLE_LEFT"] = 79] = "FT_MOUTH_DIMPLE_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_RAISER_UPPER"] = 80] = "FT_MOUTH_RAISER_UPPER";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_RAISER_LOWER"] = 81] = "FT_MOUTH_RAISER_LOWER";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_PRESS_RIGHT"] = 82] = "FT_MOUTH_PRESS_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_PRESS_LEFT"] = 83] = "FT_MOUTH_PRESS_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_TIGHTENER_RIGHT"] = 84] = "FT_MOUTH_TIGHTENER_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_TIGHTENER_LEFT"] = 85] = "FT_MOUTH_TIGHTENER_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_TONGUE_OUT"] = 86] = "FT_TONGUE_OUT";
        BlendShapeEntry[BlendShapeEntry["FT_TONGUE_UP"] = 87] = "FT_TONGUE_UP";
        BlendShapeEntry[BlendShapeEntry["FT_TONGUE_DOWN"] = 88] = "FT_TONGUE_DOWN";
        BlendShapeEntry[BlendShapeEntry["FT_TONGUE_RIGHT"] = 89] = "FT_TONGUE_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_TONGUE_LEFT"] = 90] = "FT_TONGUE_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_TONGUE_ROLL"] = 91] = "FT_TONGUE_ROLL";
        BlendShapeEntry[BlendShapeEntry["FT_TONGUE_BLEND_DOWN"] = 92] = "FT_TONGUE_BLEND_DOWN";
        BlendShapeEntry[BlendShapeEntry["FT_TONGUE_CURL_UP"] = 93] = "FT_TONGUE_CURL_UP";
        BlendShapeEntry[BlendShapeEntry["FT_TONGUE_SQUISH"] = 94] = "FT_TONGUE_SQUISH";
        BlendShapeEntry[BlendShapeEntry["FT_TONGUE_FLAT"] = 95] = "FT_TONGUE_FLAT";
        BlendShapeEntry[BlendShapeEntry["FT_TONGUE_TWIST_RIGHT"] = 96] = "FT_TONGUE_TWIST_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_TONGUE_TWIST_LEFT"] = 97] = "FT_TONGUE_TWIST_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_SOFT_PALATE_CLOSE"] = 98] = "FT_SOFT_PALATE_CLOSE";
        BlendShapeEntry[BlendShapeEntry["FT_THROAT_SWALLOW"] = 99] = "FT_THROAT_SWALLOW";
        BlendShapeEntry[BlendShapeEntry["FT_NECK_FLEX_RIGHT"] = 100] = "FT_NECK_FLEX_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_NECK_FLEX_LEFT"] = 101] = "FT_NECK_FLEX_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_CLOSED"] = 102] = "FT_EYE_CLOSED";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_WIDE"] = 103] = "FT_EYE_WIDE";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_SQUINT"] = 104] = "FT_EYE_SQUINT";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_DILATION"] = 105] = "FT_EYE_DILATION";
        BlendShapeEntry[BlendShapeEntry["FT_EYE_CONSTRICT"] = 106] = "FT_EYE_CONSTRICT";
        BlendShapeEntry[BlendShapeEntry["FT_BROW_DOWN_RIGHT"] = 107] = "FT_BROW_DOWN_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_BROW_DOWN_LEFT"] = 108] = "FT_BROW_DOWN_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_BROW_DOWN"] = 109] = "FT_BROW_DOWN";
        BlendShapeEntry[BlendShapeEntry["FT_BROW_UP_RIGHT"] = 110] = "FT_BROW_UP_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_BROW_UP_LEFT"] = 111] = "FT_BROW_UP_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_BROW_UP"] = 112] = "FT_BROW_UP";
        BlendShapeEntry[BlendShapeEntry["FT_NOSE_SNEER"] = 113] = "FT_NOSE_SNEER";
        BlendShapeEntry[BlendShapeEntry["FT_NASAL_DILATION"] = 114] = "FT_NASAL_DILATION";
        BlendShapeEntry[BlendShapeEntry["FT_NASAL_CONSTRICT"] = 115] = "FT_NASAL_CONSTRICT";
        BlendShapeEntry[BlendShapeEntry["FT_CHEEK_PUFF"] = 116] = "FT_CHEEK_PUFF";
        BlendShapeEntry[BlendShapeEntry["FT_CHEEK_SUCK"] = 117] = "FT_CHEEK_SUCK";
        BlendShapeEntry[BlendShapeEntry["FT_CHEEK_SQUINT"] = 118] = "FT_CHEEK_SQUINT";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_SUCK_UPPER"] = 119] = "FT_LIP_SUCK_UPPER";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_SUCK_LOWER"] = 120] = "FT_LIP_SUCK_LOWER";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_SUCK"] = 121] = "FT_LIP_SUCK";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_FUNNEL_UPPER"] = 122] = "FT_LIP_FUNNEL_UPPER";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_FUNNEL_LOWER"] = 123] = "FT_LIP_FUNNEL_LOWER";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_FUNNEL"] = 124] = "FT_LIP_FUNNEL";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_PUCKER_UPPER"] = 125] = "FT_LIP_PUCKER_UPPER";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_PUCKER_LOWER"] = 126] = "FT_LIP_PUCKER_LOWER";
        BlendShapeEntry[BlendShapeEntry["FT_LIP_PUCKER"] = 127] = "FT_LIP_PUCKER";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_UPPER_UP"] = 128] = "FT_MOUTH_UPPER_UP";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_LOWER_DOWN"] = 129] = "FT_MOUTH_LOWER_DOWN";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_OPEN"] = 130] = "FT_MOUTH_OPEN";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_RIGHT"] = 131] = "FT_MOUTH_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_LEFT"] = 132] = "FT_MOUTH_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_SMILE_RIGHT"] = 133] = "FT_MOUTH_SMILE_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_SMILE_LEFT"] = 134] = "FT_MOUTH_SMILE_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_SMILE"] = 135] = "FT_MOUTH_SMILE";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_SAD_RIGHT"] = 136] = "FT_MOUTH_SAD_RIGHT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_SAD_LEFT"] = 137] = "FT_MOUTH_SAD_LEFT";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_SAD"] = 138] = "FT_MOUTH_SAD";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_STRETCH"] = 139] = "FT_MOUTH_STRETCH";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_DIMPLE"] = 140] = "FT_MOUTH_DIMPLE";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_TIGHTENER"] = 141] = "FT_MOUTH_TIGHTENER";
        BlendShapeEntry[BlendShapeEntry["FT_MOUTH_PRESS"] = 142] = "FT_MOUTH_PRESS";
        BlendShapeEntry[BlendShapeEntry["FT_MAX"] = 143] = "FT_MAX";
    })(BlendShapeEntry = XRFaceTracker.BlendShapeEntry || (XRFaceTracker.BlendShapeEntry = {}));
})(XRFaceTracker || (XRFaceTracker = {}));
export var MultiMesh;
(function (MultiMesh) {
    let TransformFormat;
    (function (TransformFormat) {
        TransformFormat[TransformFormat["TRANSFORM_2D"] = 0] = "TRANSFORM_2D";
        TransformFormat[TransformFormat["TRANSFORM_3D"] = 1] = "TRANSFORM_3D";
    })(TransformFormat = MultiMesh.TransformFormat || (MultiMesh.TransformFormat = {}));
    let PhysicsInterpolationQuality;
    (function (PhysicsInterpolationQuality) {
        PhysicsInterpolationQuality[PhysicsInterpolationQuality["INTERP_QUALITY_FAST"] = 0] = "INTERP_QUALITY_FAST";
        PhysicsInterpolationQuality[PhysicsInterpolationQuality["INTERP_QUALITY_HIGH"] = 1] = "INTERP_QUALITY_HIGH";
    })(PhysicsInterpolationQuality = MultiMesh.PhysicsInterpolationQuality || (MultiMesh.PhysicsInterpolationQuality = {}));
})(MultiMesh || (MultiMesh = {}));
export var Camera2D;
(function (Camera2D) {
    let AnchorMode;
    (function (AnchorMode) {
        AnchorMode[AnchorMode["ANCHOR_MODE_FIXED_TOP_LEFT"] = 0] = "ANCHOR_MODE_FIXED_TOP_LEFT";
        AnchorMode[AnchorMode["ANCHOR_MODE_DRAG_CENTER"] = 1] = "ANCHOR_MODE_DRAG_CENTER";
    })(AnchorMode = Camera2D.AnchorMode || (Camera2D.AnchorMode = {}));
    let Camera2DProcessCallback;
    (function (Camera2DProcessCallback) {
        Camera2DProcessCallback[Camera2DProcessCallback["CAMERA2D_PROCESS_PHYSICS"] = 0] = "CAMERA2D_PROCESS_PHYSICS";
        Camera2DProcessCallback[Camera2DProcessCallback["CAMERA2D_PROCESS_IDLE"] = 1] = "CAMERA2D_PROCESS_IDLE";
    })(Camera2DProcessCallback = Camera2D.Camera2DProcessCallback || (Camera2D.Camera2DProcessCallback = {}));
})(Camera2D || (Camera2D = {}));
export var LightmapGI;
(function (LightmapGI) {
    let BakeQuality;
    (function (BakeQuality) {
        BakeQuality[BakeQuality["BAKE_QUALITY_LOW"] = 0] = "BAKE_QUALITY_LOW";
        BakeQuality[BakeQuality["BAKE_QUALITY_MEDIUM"] = 1] = "BAKE_QUALITY_MEDIUM";
        BakeQuality[BakeQuality["BAKE_QUALITY_HIGH"] = 2] = "BAKE_QUALITY_HIGH";
        BakeQuality[BakeQuality["BAKE_QUALITY_ULTRA"] = 3] = "BAKE_QUALITY_ULTRA";
    })(BakeQuality = LightmapGI.BakeQuality || (LightmapGI.BakeQuality = {}));
    let GenerateProbes;
    (function (GenerateProbes) {
        GenerateProbes[GenerateProbes["GENERATE_PROBES_DISABLED"] = 0] = "GENERATE_PROBES_DISABLED";
        GenerateProbes[GenerateProbes["GENERATE_PROBES_SUBDIV_4"] = 1] = "GENERATE_PROBES_SUBDIV_4";
        GenerateProbes[GenerateProbes["GENERATE_PROBES_SUBDIV_8"] = 2] = "GENERATE_PROBES_SUBDIV_8";
        GenerateProbes[GenerateProbes["GENERATE_PROBES_SUBDIV_16"] = 3] = "GENERATE_PROBES_SUBDIV_16";
        GenerateProbes[GenerateProbes["GENERATE_PROBES_SUBDIV_32"] = 4] = "GENERATE_PROBES_SUBDIV_32";
    })(GenerateProbes = LightmapGI.GenerateProbes || (LightmapGI.GenerateProbes = {}));
    let BakeError;
    (function (BakeError) {
        BakeError[BakeError["BAKE_ERROR_OK"] = 0] = "BAKE_ERROR_OK";
        BakeError[BakeError["BAKE_ERROR_NO_SCENE_ROOT"] = 1] = "BAKE_ERROR_NO_SCENE_ROOT";
        BakeError[BakeError["BAKE_ERROR_FOREIGN_DATA"] = 2] = "BAKE_ERROR_FOREIGN_DATA";
        BakeError[BakeError["BAKE_ERROR_NO_LIGHTMAPPER"] = 3] = "BAKE_ERROR_NO_LIGHTMAPPER";
        BakeError[BakeError["BAKE_ERROR_NO_SAVE_PATH"] = 4] = "BAKE_ERROR_NO_SAVE_PATH";
        BakeError[BakeError["BAKE_ERROR_NO_MESHES"] = 5] = "BAKE_ERROR_NO_MESHES";
        BakeError[BakeError["BAKE_ERROR_MESHES_INVALID"] = 6] = "BAKE_ERROR_MESHES_INVALID";
        BakeError[BakeError["BAKE_ERROR_CANT_CREATE_IMAGE"] = 7] = "BAKE_ERROR_CANT_CREATE_IMAGE";
        BakeError[BakeError["BAKE_ERROR_USER_ABORTED"] = 8] = "BAKE_ERROR_USER_ABORTED";
        BakeError[BakeError["BAKE_ERROR_TEXTURE_SIZE_TOO_SMALL"] = 9] = "BAKE_ERROR_TEXTURE_SIZE_TOO_SMALL";
        BakeError[BakeError["BAKE_ERROR_LIGHTMAP_TOO_SMALL"] = 10] = "BAKE_ERROR_LIGHTMAP_TOO_SMALL";
        BakeError[BakeError["BAKE_ERROR_ATLAS_TOO_SMALL"] = 11] = "BAKE_ERROR_ATLAS_TOO_SMALL";
    })(BakeError = LightmapGI.BakeError || (LightmapGI.BakeError = {}));
    let EnvironmentMode;
    (function (EnvironmentMode) {
        EnvironmentMode[EnvironmentMode["ENVIRONMENT_MODE_DISABLED"] = 0] = "ENVIRONMENT_MODE_DISABLED";
        EnvironmentMode[EnvironmentMode["ENVIRONMENT_MODE_SCENE"] = 1] = "ENVIRONMENT_MODE_SCENE";
        EnvironmentMode[EnvironmentMode["ENVIRONMENT_MODE_CUSTOM_SKY"] = 2] = "ENVIRONMENT_MODE_CUSTOM_SKY";
        EnvironmentMode[EnvironmentMode["ENVIRONMENT_MODE_CUSTOM_COLOR"] = 3] = "ENVIRONMENT_MODE_CUSTOM_COLOR";
    })(EnvironmentMode = LightmapGI.EnvironmentMode || (LightmapGI.EnvironmentMode = {}));
})(LightmapGI || (LightmapGI = {}));
export var AStarGrid2D;
(function (AStarGrid2D) {
    let Heuristic;
    (function (Heuristic) {
        Heuristic[Heuristic["HEURISTIC_EUCLIDEAN"] = 0] = "HEURISTIC_EUCLIDEAN";
        Heuristic[Heuristic["HEURISTIC_MANHATTAN"] = 1] = "HEURISTIC_MANHATTAN";
        Heuristic[Heuristic["HEURISTIC_OCTILE"] = 2] = "HEURISTIC_OCTILE";
        Heuristic[Heuristic["HEURISTIC_CHEBYSHEV"] = 3] = "HEURISTIC_CHEBYSHEV";
        Heuristic[Heuristic["HEURISTIC_MAX"] = 4] = "HEURISTIC_MAX";
    })(Heuristic = AStarGrid2D.Heuristic || (AStarGrid2D.Heuristic = {}));
    let DiagonalMode;
    (function (DiagonalMode) {
        DiagonalMode[DiagonalMode["DIAGONAL_MODE_ALWAYS"] = 0] = "DIAGONAL_MODE_ALWAYS";
        DiagonalMode[DiagonalMode["DIAGONAL_MODE_NEVER"] = 1] = "DIAGONAL_MODE_NEVER";
        DiagonalMode[DiagonalMode["DIAGONAL_MODE_AT_LEAST_ONE_WALKABLE"] = 2] = "DIAGONAL_MODE_AT_LEAST_ONE_WALKABLE";
        DiagonalMode[DiagonalMode["DIAGONAL_MODE_ONLY_IF_NO_OBSTACLES"] = 3] = "DIAGONAL_MODE_ONLY_IF_NO_OBSTACLES";
        DiagonalMode[DiagonalMode["DIAGONAL_MODE_MAX"] = 4] = "DIAGONAL_MODE_MAX";
    })(DiagonalMode = AStarGrid2D.DiagonalMode || (AStarGrid2D.DiagonalMode = {}));
    let CellShape;
    (function (CellShape) {
        CellShape[CellShape["CELL_SHAPE_SQUARE"] = 0] = "CELL_SHAPE_SQUARE";
        CellShape[CellShape["CELL_SHAPE_ISOMETRIC_RIGHT"] = 1] = "CELL_SHAPE_ISOMETRIC_RIGHT";
        CellShape[CellShape["CELL_SHAPE_ISOMETRIC_DOWN"] = 2] = "CELL_SHAPE_ISOMETRIC_DOWN";
        CellShape[CellShape["CELL_SHAPE_MAX"] = 3] = "CELL_SHAPE_MAX";
    })(CellShape = AStarGrid2D.CellShape || (AStarGrid2D.CellShape = {}));
})(AStarGrid2D || (AStarGrid2D = {}));
export var Time;
(function (Time) {
    let Month;
    (function (Month) {
        Month[Month["MONTH_JANUARY"] = 1] = "MONTH_JANUARY";
        Month[Month["MONTH_FEBRUARY"] = 2] = "MONTH_FEBRUARY";
        Month[Month["MONTH_MARCH"] = 3] = "MONTH_MARCH";
        Month[Month["MONTH_APRIL"] = 4] = "MONTH_APRIL";
        Month[Month["MONTH_MAY"] = 5] = "MONTH_MAY";
        Month[Month["MONTH_JUNE"] = 6] = "MONTH_JUNE";
        Month[Month["MONTH_JULY"] = 7] = "MONTH_JULY";
        Month[Month["MONTH_AUGUST"] = 8] = "MONTH_AUGUST";
        Month[Month["MONTH_SEPTEMBER"] = 9] = "MONTH_SEPTEMBER";
        Month[Month["MONTH_OCTOBER"] = 10] = "MONTH_OCTOBER";
        Month[Month["MONTH_NOVEMBER"] = 11] = "MONTH_NOVEMBER";
        Month[Month["MONTH_DECEMBER"] = 12] = "MONTH_DECEMBER";
    })(Month = Time.Month || (Time.Month = {}));
    let Weekday;
    (function (Weekday) {
        Weekday[Weekday["WEEKDAY_SUNDAY"] = 0] = "WEEKDAY_SUNDAY";
        Weekday[Weekday["WEEKDAY_MONDAY"] = 1] = "WEEKDAY_MONDAY";
        Weekday[Weekday["WEEKDAY_TUESDAY"] = 2] = "WEEKDAY_TUESDAY";
        Weekday[Weekday["WEEKDAY_WEDNESDAY"] = 3] = "WEEKDAY_WEDNESDAY";
        Weekday[Weekday["WEEKDAY_THURSDAY"] = 4] = "WEEKDAY_THURSDAY";
        Weekday[Weekday["WEEKDAY_FRIDAY"] = 5] = "WEEKDAY_FRIDAY";
        Weekday[Weekday["WEEKDAY_SATURDAY"] = 6] = "WEEKDAY_SATURDAY";
    })(Weekday = Time.Weekday || (Time.Weekday = {}));
})(Time || (Time = {}));
export var VisualShaderNodeTransformVecMult;
(function (VisualShaderNodeTransformVecMult) {
    let Operator;
    (function (Operator) {
        Operator[Operator["OP_AxB"] = 0] = "OP_AxB";
        Operator[Operator["OP_BxA"] = 1] = "OP_BxA";
        Operator[Operator["OP_3x3_AxB"] = 2] = "OP_3x3_AxB";
        Operator[Operator["OP_3x3_BxA"] = 3] = "OP_3x3_BxA";
        Operator[Operator["OP_MAX"] = 4] = "OP_MAX";
    })(Operator = VisualShaderNodeTransformVecMult.Operator || (VisualShaderNodeTransformVecMult.Operator = {}));
})(VisualShaderNodeTransformVecMult || (VisualShaderNodeTransformVecMult = {}));
export var AudioStreamRandomizer;
(function (AudioStreamRandomizer) {
    let PlaybackMode;
    (function (PlaybackMode) {
        PlaybackMode[PlaybackMode["PLAYBACK_RANDOM_NO_REPEATS"] = 0] = "PLAYBACK_RANDOM_NO_REPEATS";
        PlaybackMode[PlaybackMode["PLAYBACK_RANDOM"] = 1] = "PLAYBACK_RANDOM";
        PlaybackMode[PlaybackMode["PLAYBACK_SEQUENTIAL"] = 2] = "PLAYBACK_SEQUENTIAL";
    })(PlaybackMode = AudioStreamRandomizer.PlaybackMode || (AudioStreamRandomizer.PlaybackMode = {}));
})(AudioStreamRandomizer || (AudioStreamRandomizer = {}));
export var VisualShaderNodeSwitch;
(function (VisualShaderNodeSwitch) {
    let OpType;
    (function (OpType) {
        OpType[OpType["OP_TYPE_FLOAT"] = 0] = "OP_TYPE_FLOAT";
        OpType[OpType["OP_TYPE_INT"] = 1] = "OP_TYPE_INT";
        OpType[OpType["OP_TYPE_UINT"] = 2] = "OP_TYPE_UINT";
        OpType[OpType["OP_TYPE_VECTOR_2D"] = 3] = "OP_TYPE_VECTOR_2D";
        OpType[OpType["OP_TYPE_VECTOR_3D"] = 4] = "OP_TYPE_VECTOR_3D";
        OpType[OpType["OP_TYPE_VECTOR_4D"] = 5] = "OP_TYPE_VECTOR_4D";
        OpType[OpType["OP_TYPE_BOOLEAN"] = 6] = "OP_TYPE_BOOLEAN";
        OpType[OpType["OP_TYPE_TRANSFORM"] = 7] = "OP_TYPE_TRANSFORM";
        OpType[OpType["OP_TYPE_MAX"] = 8] = "OP_TYPE_MAX";
    })(OpType = VisualShaderNodeSwitch.OpType || (VisualShaderNodeSwitch.OpType = {}));
})(VisualShaderNodeSwitch || (VisualShaderNodeSwitch = {}));
export var NativeMenu;
(function (NativeMenu) {
    let Feature;
    (function (Feature) {
        Feature[Feature["FEATURE_GLOBAL_MENU"] = 0] = "FEATURE_GLOBAL_MENU";
        Feature[Feature["FEATURE_POPUP_MENU"] = 1] = "FEATURE_POPUP_MENU";
        Feature[Feature["FEATURE_OPEN_CLOSE_CALLBACK"] = 2] = "FEATURE_OPEN_CLOSE_CALLBACK";
        Feature[Feature["FEATURE_HOVER_CALLBACK"] = 3] = "FEATURE_HOVER_CALLBACK";
        Feature[Feature["FEATURE_KEY_CALLBACK"] = 4] = "FEATURE_KEY_CALLBACK";
    })(Feature = NativeMenu.Feature || (NativeMenu.Feature = {}));
    let SystemMenus;
    (function (SystemMenus) {
        SystemMenus[SystemMenus["INVALID_MENU_ID"] = 0] = "INVALID_MENU_ID";
        SystemMenus[SystemMenus["MAIN_MENU_ID"] = 1] = "MAIN_MENU_ID";
        SystemMenus[SystemMenus["APPLICATION_MENU_ID"] = 2] = "APPLICATION_MENU_ID";
        SystemMenus[SystemMenus["WINDOW_MENU_ID"] = 3] = "WINDOW_MENU_ID";
        SystemMenus[SystemMenus["HELP_MENU_ID"] = 4] = "HELP_MENU_ID";
        SystemMenus[SystemMenus["DOCK_MENU_ID"] = 5] = "DOCK_MENU_ID";
    })(SystemMenus = NativeMenu.SystemMenus || (NativeMenu.SystemMenus = {}));
})(NativeMenu || (NativeMenu = {}));
export var XRBodyTracker;
(function (XRBodyTracker) {
    let BodyFlags;
    (function (BodyFlags) {
        BodyFlags[BodyFlags["BODY_FLAG_UPPER_BODY_SUPPORTED"] = 1] = "BODY_FLAG_UPPER_BODY_SUPPORTED";
        BodyFlags[BodyFlags["BODY_FLAG_LOWER_BODY_SUPPORTED"] = 2] = "BODY_FLAG_LOWER_BODY_SUPPORTED";
        BodyFlags[BodyFlags["BODY_FLAG_HANDS_SUPPORTED"] = 4] = "BODY_FLAG_HANDS_SUPPORTED";
    })(BodyFlags = XRBodyTracker.BodyFlags || (XRBodyTracker.BodyFlags = {}));
    let Joint;
    (function (Joint) {
        Joint[Joint["JOINT_ROOT"] = 0] = "JOINT_ROOT";
        Joint[Joint["JOINT_HIPS"] = 1] = "JOINT_HIPS";
        Joint[Joint["JOINT_SPINE"] = 2] = "JOINT_SPINE";
        Joint[Joint["JOINT_CHEST"] = 3] = "JOINT_CHEST";
        Joint[Joint["JOINT_UPPER_CHEST"] = 4] = "JOINT_UPPER_CHEST";
        Joint[Joint["JOINT_NECK"] = 5] = "JOINT_NECK";
        Joint[Joint["JOINT_HEAD"] = 6] = "JOINT_HEAD";
        Joint[Joint["JOINT_HEAD_TIP"] = 7] = "JOINT_HEAD_TIP";
        Joint[Joint["JOINT_LEFT_SHOULDER"] = 8] = "JOINT_LEFT_SHOULDER";
        Joint[Joint["JOINT_LEFT_UPPER_ARM"] = 9] = "JOINT_LEFT_UPPER_ARM";
        Joint[Joint["JOINT_LEFT_LOWER_ARM"] = 10] = "JOINT_LEFT_LOWER_ARM";
        Joint[Joint["JOINT_RIGHT_SHOULDER"] = 11] = "JOINT_RIGHT_SHOULDER";
        Joint[Joint["JOINT_RIGHT_UPPER_ARM"] = 12] = "JOINT_RIGHT_UPPER_ARM";
        Joint[Joint["JOINT_RIGHT_LOWER_ARM"] = 13] = "JOINT_RIGHT_LOWER_ARM";
        Joint[Joint["JOINT_LEFT_UPPER_LEG"] = 14] = "JOINT_LEFT_UPPER_LEG";
        Joint[Joint["JOINT_LEFT_LOWER_LEG"] = 15] = "JOINT_LEFT_LOWER_LEG";
        Joint[Joint["JOINT_LEFT_FOOT"] = 16] = "JOINT_LEFT_FOOT";
        Joint[Joint["JOINT_LEFT_TOES"] = 17] = "JOINT_LEFT_TOES";
        Joint[Joint["JOINT_RIGHT_UPPER_LEG"] = 18] = "JOINT_RIGHT_UPPER_LEG";
        Joint[Joint["JOINT_RIGHT_LOWER_LEG"] = 19] = "JOINT_RIGHT_LOWER_LEG";
        Joint[Joint["JOINT_RIGHT_FOOT"] = 20] = "JOINT_RIGHT_FOOT";
        Joint[Joint["JOINT_RIGHT_TOES"] = 21] = "JOINT_RIGHT_TOES";
        Joint[Joint["JOINT_LEFT_HAND"] = 22] = "JOINT_LEFT_HAND";
        Joint[Joint["JOINT_LEFT_PALM"] = 23] = "JOINT_LEFT_PALM";
        Joint[Joint["JOINT_LEFT_WRIST"] = 24] = "JOINT_LEFT_WRIST";
        Joint[Joint["JOINT_LEFT_THUMB_METACARPAL"] = 25] = "JOINT_LEFT_THUMB_METACARPAL";
        Joint[Joint["JOINT_LEFT_THUMB_PHALANX_PROXIMAL"] = 26] = "JOINT_LEFT_THUMB_PHALANX_PROXIMAL";
        Joint[Joint["JOINT_LEFT_THUMB_PHALANX_DISTAL"] = 27] = "JOINT_LEFT_THUMB_PHALANX_DISTAL";
        Joint[Joint["JOINT_LEFT_THUMB_TIP"] = 28] = "JOINT_LEFT_THUMB_TIP";
        Joint[Joint["JOINT_LEFT_INDEX_FINGER_METACARPAL"] = 29] = "JOINT_LEFT_INDEX_FINGER_METACARPAL";
        Joint[Joint["JOINT_LEFT_INDEX_FINGER_PHALANX_PROXIMAL"] = 30] = "JOINT_LEFT_INDEX_FINGER_PHALANX_PROXIMAL";
        Joint[Joint["JOINT_LEFT_INDEX_FINGER_PHALANX_INTERMEDIATE"] = 31] = "JOINT_LEFT_INDEX_FINGER_PHALANX_INTERMEDIATE";
        Joint[Joint["JOINT_LEFT_INDEX_FINGER_PHALANX_DISTAL"] = 32] = "JOINT_LEFT_INDEX_FINGER_PHALANX_DISTAL";
        Joint[Joint["JOINT_LEFT_INDEX_FINGER_TIP"] = 33] = "JOINT_LEFT_INDEX_FINGER_TIP";
        Joint[Joint["JOINT_LEFT_MIDDLE_FINGER_METACARPAL"] = 34] = "JOINT_LEFT_MIDDLE_FINGER_METACARPAL";
        Joint[Joint["JOINT_LEFT_MIDDLE_FINGER_PHALANX_PROXIMAL"] = 35] = "JOINT_LEFT_MIDDLE_FINGER_PHALANX_PROXIMAL";
        Joint[Joint["JOINT_LEFT_MIDDLE_FINGER_PHALANX_INTERMEDIATE"] = 36] = "JOINT_LEFT_MIDDLE_FINGER_PHALANX_INTERMEDIATE";
        Joint[Joint["JOINT_LEFT_MIDDLE_FINGER_PHALANX_DISTAL"] = 37] = "JOINT_LEFT_MIDDLE_FINGER_PHALANX_DISTAL";
        Joint[Joint["JOINT_LEFT_MIDDLE_FINGER_TIP"] = 38] = "JOINT_LEFT_MIDDLE_FINGER_TIP";
        Joint[Joint["JOINT_LEFT_RING_FINGER_METACARPAL"] = 39] = "JOINT_LEFT_RING_FINGER_METACARPAL";
        Joint[Joint["JOINT_LEFT_RING_FINGER_PHALANX_PROXIMAL"] = 40] = "JOINT_LEFT_RING_FINGER_PHALANX_PROXIMAL";
        Joint[Joint["JOINT_LEFT_RING_FINGER_PHALANX_INTERMEDIATE"] = 41] = "JOINT_LEFT_RING_FINGER_PHALANX_INTERMEDIATE";
        Joint[Joint["JOINT_LEFT_RING_FINGER_PHALANX_DISTAL"] = 42] = "JOINT_LEFT_RING_FINGER_PHALANX_DISTAL";
        Joint[Joint["JOINT_LEFT_RING_FINGER_TIP"] = 43] = "JOINT_LEFT_RING_FINGER_TIP";
        Joint[Joint["JOINT_LEFT_PINKY_FINGER_METACARPAL"] = 44] = "JOINT_LEFT_PINKY_FINGER_METACARPAL";
        Joint[Joint["JOINT_LEFT_PINKY_FINGER_PHALANX_PROXIMAL"] = 45] = "JOINT_LEFT_PINKY_FINGER_PHALANX_PROXIMAL";
        Joint[Joint["JOINT_LEFT_PINKY_FINGER_PHALANX_INTERMEDIATE"] = 46] = "JOINT_LEFT_PINKY_FINGER_PHALANX_INTERMEDIATE";
        Joint[Joint["JOINT_LEFT_PINKY_FINGER_PHALANX_DISTAL"] = 47] = "JOINT_LEFT_PINKY_FINGER_PHALANX_DISTAL";
        Joint[Joint["JOINT_LEFT_PINKY_FINGER_TIP"] = 48] = "JOINT_LEFT_PINKY_FINGER_TIP";
        Joint[Joint["JOINT_RIGHT_HAND"] = 49] = "JOINT_RIGHT_HAND";
        Joint[Joint["JOINT_RIGHT_PALM"] = 50] = "JOINT_RIGHT_PALM";
        Joint[Joint["JOINT_RIGHT_WRIST"] = 51] = "JOINT_RIGHT_WRIST";
        Joint[Joint["JOINT_RIGHT_THUMB_METACARPAL"] = 52] = "JOINT_RIGHT_THUMB_METACARPAL";
        Joint[Joint["JOINT_RIGHT_THUMB_PHALANX_PROXIMAL"] = 53] = "JOINT_RIGHT_THUMB_PHALANX_PROXIMAL";
        Joint[Joint["JOINT_RIGHT_THUMB_PHALANX_DISTAL"] = 54] = "JOINT_RIGHT_THUMB_PHALANX_DISTAL";
        Joint[Joint["JOINT_RIGHT_THUMB_TIP"] = 55] = "JOINT_RIGHT_THUMB_TIP";
        Joint[Joint["JOINT_RIGHT_INDEX_FINGER_METACARPAL"] = 56] = "JOINT_RIGHT_INDEX_FINGER_METACARPAL";
        Joint[Joint["JOINT_RIGHT_INDEX_FINGER_PHALANX_PROXIMAL"] = 57] = "JOINT_RIGHT_INDEX_FINGER_PHALANX_PROXIMAL";
        Joint[Joint["JOINT_RIGHT_INDEX_FINGER_PHALANX_INTERMEDIATE"] = 58] = "JOINT_RIGHT_INDEX_FINGER_PHALANX_INTERMEDIATE";
        Joint[Joint["JOINT_RIGHT_INDEX_FINGER_PHALANX_DISTAL"] = 59] = "JOINT_RIGHT_INDEX_FINGER_PHALANX_DISTAL";
        Joint[Joint["JOINT_RIGHT_INDEX_FINGER_TIP"] = 60] = "JOINT_RIGHT_INDEX_FINGER_TIP";
        Joint[Joint["JOINT_RIGHT_MIDDLE_FINGER_METACARPAL"] = 61] = "JOINT_RIGHT_MIDDLE_FINGER_METACARPAL";
        Joint[Joint["JOINT_RIGHT_MIDDLE_FINGER_PHALANX_PROXIMAL"] = 62] = "JOINT_RIGHT_MIDDLE_FINGER_PHALANX_PROXIMAL";
        Joint[Joint["JOINT_RIGHT_MIDDLE_FINGER_PHALANX_INTERMEDIATE"] = 63] = "JOINT_RIGHT_MIDDLE_FINGER_PHALANX_INTERMEDIATE";
        Joint[Joint["JOINT_RIGHT_MIDDLE_FINGER_PHALANX_DISTAL"] = 64] = "JOINT_RIGHT_MIDDLE_FINGER_PHALANX_DISTAL";
        Joint[Joint["JOINT_RIGHT_MIDDLE_FINGER_TIP"] = 65] = "JOINT_RIGHT_MIDDLE_FINGER_TIP";
        Joint[Joint["JOINT_RIGHT_RING_FINGER_METACARPAL"] = 66] = "JOINT_RIGHT_RING_FINGER_METACARPAL";
        Joint[Joint["JOINT_RIGHT_RING_FINGER_PHALANX_PROXIMAL"] = 67] = "JOINT_RIGHT_RING_FINGER_PHALANX_PROXIMAL";
        Joint[Joint["JOINT_RIGHT_RING_FINGER_PHALANX_INTERMEDIATE"] = 68] = "JOINT_RIGHT_RING_FINGER_PHALANX_INTERMEDIATE";
        Joint[Joint["JOINT_RIGHT_RING_FINGER_PHALANX_DISTAL"] = 69] = "JOINT_RIGHT_RING_FINGER_PHALANX_DISTAL";
        Joint[Joint["JOINT_RIGHT_RING_FINGER_TIP"] = 70] = "JOINT_RIGHT_RING_FINGER_TIP";
        Joint[Joint["JOINT_RIGHT_PINKY_FINGER_METACARPAL"] = 71] = "JOINT_RIGHT_PINKY_FINGER_METACARPAL";
        Joint[Joint["JOINT_RIGHT_PINKY_FINGER_PHALANX_PROXIMAL"] = 72] = "JOINT_RIGHT_PINKY_FINGER_PHALANX_PROXIMAL";
        Joint[Joint["JOINT_RIGHT_PINKY_FINGER_PHALANX_INTERMEDIATE"] = 73] = "JOINT_RIGHT_PINKY_FINGER_PHALANX_INTERMEDIATE";
        Joint[Joint["JOINT_RIGHT_PINKY_FINGER_PHALANX_DISTAL"] = 74] = "JOINT_RIGHT_PINKY_FINGER_PHALANX_DISTAL";
        Joint[Joint["JOINT_RIGHT_PINKY_FINGER_TIP"] = 75] = "JOINT_RIGHT_PINKY_FINGER_TIP";
        Joint[Joint["JOINT_MAX"] = 76] = "JOINT_MAX";
    })(Joint = XRBodyTracker.Joint || (XRBodyTracker.Joint = {}));
    let JointFlags;
    (function (JointFlags) {
        JointFlags[JointFlags["JOINT_FLAG_ORIENTATION_VALID"] = 1] = "JOINT_FLAG_ORIENTATION_VALID";
        JointFlags[JointFlags["JOINT_FLAG_ORIENTATION_TRACKED"] = 2] = "JOINT_FLAG_ORIENTATION_TRACKED";
        JointFlags[JointFlags["JOINT_FLAG_POSITION_VALID"] = 4] = "JOINT_FLAG_POSITION_VALID";
        JointFlags[JointFlags["JOINT_FLAG_POSITION_TRACKED"] = 8] = "JOINT_FLAG_POSITION_TRACKED";
    })(JointFlags = XRBodyTracker.JointFlags || (XRBodyTracker.JointFlags = {}));
})(XRBodyTracker || (XRBodyTracker = {}));
export var CollisionPolygon2D;
(function (CollisionPolygon2D) {
    let BuildMode;
    (function (BuildMode) {
        BuildMode[BuildMode["BUILD_SOLIDS"] = 0] = "BUILD_SOLIDS";
        BuildMode[BuildMode["BUILD_SEGMENTS"] = 1] = "BUILD_SEGMENTS";
    })(BuildMode = CollisionPolygon2D.BuildMode || (CollisionPolygon2D.BuildMode = {}));
})(CollisionPolygon2D || (CollisionPolygon2D = {}));
export var HTTPRequest;
(function (HTTPRequest) {
    let Result;
    (function (Result) {
        Result[Result["RESULT_SUCCESS"] = 0] = "RESULT_SUCCESS";
        Result[Result["RESULT_CHUNKED_BODY_SIZE_MISMATCH"] = 1] = "RESULT_CHUNKED_BODY_SIZE_MISMATCH";
        Result[Result["RESULT_CANT_CONNECT"] = 2] = "RESULT_CANT_CONNECT";
        Result[Result["RESULT_CANT_RESOLVE"] = 3] = "RESULT_CANT_RESOLVE";
        Result[Result["RESULT_CONNECTION_ERROR"] = 4] = "RESULT_CONNECTION_ERROR";
        Result[Result["RESULT_TLS_HANDSHAKE_ERROR"] = 5] = "RESULT_TLS_HANDSHAKE_ERROR";
        Result[Result["RESULT_NO_RESPONSE"] = 6] = "RESULT_NO_RESPONSE";
        Result[Result["RESULT_BODY_SIZE_LIMIT_EXCEEDED"] = 7] = "RESULT_BODY_SIZE_LIMIT_EXCEEDED";
        Result[Result["RESULT_BODY_DECOMPRESS_FAILED"] = 8] = "RESULT_BODY_DECOMPRESS_FAILED";
        Result[Result["RESULT_REQUEST_FAILED"] = 9] = "RESULT_REQUEST_FAILED";
        Result[Result["RESULT_DOWNLOAD_FILE_CANT_OPEN"] = 10] = "RESULT_DOWNLOAD_FILE_CANT_OPEN";
        Result[Result["RESULT_DOWNLOAD_FILE_WRITE_ERROR"] = 11] = "RESULT_DOWNLOAD_FILE_WRITE_ERROR";
        Result[Result["RESULT_REDIRECT_LIMIT_REACHED"] = 12] = "RESULT_REDIRECT_LIMIT_REACHED";
        Result[Result["RESULT_TIMEOUT"] = 13] = "RESULT_TIMEOUT";
    })(Result = HTTPRequest.Result || (HTTPRequest.Result = {}));
})(HTTPRequest || (HTTPRequest = {}));
export var AnimationNodeBlendSpace2D;
(function (AnimationNodeBlendSpace2D) {
    let BlendMode;
    (function (BlendMode) {
        BlendMode[BlendMode["BLEND_MODE_INTERPOLATED"] = 0] = "BLEND_MODE_INTERPOLATED";
        BlendMode[BlendMode["BLEND_MODE_DISCRETE"] = 1] = "BLEND_MODE_DISCRETE";
        BlendMode[BlendMode["BLEND_MODE_DISCRETE_CARRY"] = 2] = "BLEND_MODE_DISCRETE_CARRY";
    })(BlendMode = AnimationNodeBlendSpace2D.BlendMode || (AnimationNodeBlendSpace2D.BlendMode = {}));
})(AnimationNodeBlendSpace2D || (AnimationNodeBlendSpace2D = {}));
export var GeometryInstance3D;
(function (GeometryInstance3D) {
    let ShadowCastingSetting;
    (function (ShadowCastingSetting) {
        ShadowCastingSetting[ShadowCastingSetting["SHADOW_CASTING_SETTING_OFF"] = 0] = "SHADOW_CASTING_SETTING_OFF";
        ShadowCastingSetting[ShadowCastingSetting["SHADOW_CASTING_SETTING_ON"] = 1] = "SHADOW_CASTING_SETTING_ON";
        ShadowCastingSetting[ShadowCastingSetting["SHADOW_CASTING_SETTING_DOUBLE_SIDED"] = 2] = "SHADOW_CASTING_SETTING_DOUBLE_SIDED";
        ShadowCastingSetting[ShadowCastingSetting["SHADOW_CASTING_SETTING_SHADOWS_ONLY"] = 3] = "SHADOW_CASTING_SETTING_SHADOWS_ONLY";
    })(ShadowCastingSetting = GeometryInstance3D.ShadowCastingSetting || (GeometryInstance3D.ShadowCastingSetting = {}));
    let GIMode;
    (function (GIMode) {
        GIMode[GIMode["GI_MODE_DISABLED"] = 0] = "GI_MODE_DISABLED";
        GIMode[GIMode["GI_MODE_STATIC"] = 1] = "GI_MODE_STATIC";
        GIMode[GIMode["GI_MODE_DYNAMIC"] = 2] = "GI_MODE_DYNAMIC";
    })(GIMode = GeometryInstance3D.GIMode || (GeometryInstance3D.GIMode = {}));
    let LightmapScale;
    (function (LightmapScale) {
        LightmapScale[LightmapScale["LIGHTMAP_SCALE_1X"] = 0] = "LIGHTMAP_SCALE_1X";
        LightmapScale[LightmapScale["LIGHTMAP_SCALE_2X"] = 1] = "LIGHTMAP_SCALE_2X";
        LightmapScale[LightmapScale["LIGHTMAP_SCALE_4X"] = 2] = "LIGHTMAP_SCALE_4X";
        LightmapScale[LightmapScale["LIGHTMAP_SCALE_8X"] = 3] = "LIGHTMAP_SCALE_8X";
        LightmapScale[LightmapScale["LIGHTMAP_SCALE_MAX"] = 4] = "LIGHTMAP_SCALE_MAX";
    })(LightmapScale = GeometryInstance3D.LightmapScale || (GeometryInstance3D.LightmapScale = {}));
    let VisibilityRangeFadeMode;
    (function (VisibilityRangeFadeMode) {
        VisibilityRangeFadeMode[VisibilityRangeFadeMode["VISIBILITY_RANGE_FADE_DISABLED"] = 0] = "VISIBILITY_RANGE_FADE_DISABLED";
        VisibilityRangeFadeMode[VisibilityRangeFadeMode["VISIBILITY_RANGE_FADE_SELF"] = 1] = "VISIBILITY_RANGE_FADE_SELF";
        VisibilityRangeFadeMode[VisibilityRangeFadeMode["VISIBILITY_RANGE_FADE_DEPENDENCIES"] = 2] = "VISIBILITY_RANGE_FADE_DEPENDENCIES";
    })(VisibilityRangeFadeMode = GeometryInstance3D.VisibilityRangeFadeMode || (GeometryInstance3D.VisibilityRangeFadeMode = {}));
})(GeometryInstance3D || (GeometryInstance3D = {}));
export var Node3D;
(function (Node3D) {
    Node3D.NOTIFICATION_TRANSFORM_CHANGED = 2000;
    Node3D.NOTIFICATION_ENTER_WORLD = 41;
    Node3D.NOTIFICATION_EXIT_WORLD = 42;
    Node3D.NOTIFICATION_VISIBILITY_CHANGED = 43;
    Node3D.NOTIFICATION_LOCAL_TRANSFORM_CHANGED = 44;
    let RotationEditMode;
    (function (RotationEditMode) {
        RotationEditMode[RotationEditMode["ROTATION_EDIT_MODE_EULER"] = 0] = "ROTATION_EDIT_MODE_EULER";
        RotationEditMode[RotationEditMode["ROTATION_EDIT_MODE_QUATERNION"] = 1] = "ROTATION_EDIT_MODE_QUATERNION";
        RotationEditMode[RotationEditMode["ROTATION_EDIT_MODE_BASIS"] = 2] = "ROTATION_EDIT_MODE_BASIS";
    })(RotationEditMode = Node3D.RotationEditMode || (Node3D.RotationEditMode = {}));
})(Node3D || (Node3D = {}));
export var VisualShader;
(function (VisualShader) {
    let Type;
    (function (Type) {
        Type[Type["TYPE_VERTEX"] = 0] = "TYPE_VERTEX";
        Type[Type["TYPE_FRAGMENT"] = 1] = "TYPE_FRAGMENT";
        Type[Type["TYPE_LIGHT"] = 2] = "TYPE_LIGHT";
        Type[Type["TYPE_START"] = 3] = "TYPE_START";
        Type[Type["TYPE_PROCESS"] = 4] = "TYPE_PROCESS";
        Type[Type["TYPE_COLLIDE"] = 5] = "TYPE_COLLIDE";
        Type[Type["TYPE_START_CUSTOM"] = 6] = "TYPE_START_CUSTOM";
        Type[Type["TYPE_PROCESS_CUSTOM"] = 7] = "TYPE_PROCESS_CUSTOM";
        Type[Type["TYPE_SKY"] = 8] = "TYPE_SKY";
        Type[Type["TYPE_FOG"] = 9] = "TYPE_FOG";
        Type[Type["TYPE_MAX"] = 10] = "TYPE_MAX";
    })(Type = VisualShader.Type || (VisualShader.Type = {}));
    let VaryingMode;
    (function (VaryingMode) {
        VaryingMode[VaryingMode["VARYING_MODE_VERTEX_TO_FRAG_LIGHT"] = 0] = "VARYING_MODE_VERTEX_TO_FRAG_LIGHT";
        VaryingMode[VaryingMode["VARYING_MODE_FRAG_TO_LIGHT"] = 1] = "VARYING_MODE_FRAG_TO_LIGHT";
        VaryingMode[VaryingMode["VARYING_MODE_MAX"] = 2] = "VARYING_MODE_MAX";
    })(VaryingMode = VisualShader.VaryingMode || (VisualShader.VaryingMode = {}));
    let VaryingType;
    (function (VaryingType) {
        VaryingType[VaryingType["VARYING_TYPE_FLOAT"] = 0] = "VARYING_TYPE_FLOAT";
        VaryingType[VaryingType["VARYING_TYPE_INT"] = 1] = "VARYING_TYPE_INT";
        VaryingType[VaryingType["VARYING_TYPE_UINT"] = 2] = "VARYING_TYPE_UINT";
        VaryingType[VaryingType["VARYING_TYPE_VECTOR_2D"] = 3] = "VARYING_TYPE_VECTOR_2D";
        VaryingType[VaryingType["VARYING_TYPE_VECTOR_3D"] = 4] = "VARYING_TYPE_VECTOR_3D";
        VaryingType[VaryingType["VARYING_TYPE_VECTOR_4D"] = 5] = "VARYING_TYPE_VECTOR_4D";
        VaryingType[VaryingType["VARYING_TYPE_BOOLEAN"] = 6] = "VARYING_TYPE_BOOLEAN";
        VaryingType[VaryingType["VARYING_TYPE_TRANSFORM"] = 7] = "VARYING_TYPE_TRANSFORM";
        VaryingType[VaryingType["VARYING_TYPE_MAX"] = 8] = "VARYING_TYPE_MAX";
    })(VaryingType = VisualShader.VaryingType || (VisualShader.VaryingType = {}));
    VisualShader.NODE_ID_INVALID = -1;
    VisualShader.NODE_ID_OUTPUT = 0;
})(VisualShader || (VisualShader = {}));
export var VisualShaderNodeColorFunc;
(function (VisualShaderNodeColorFunc) {
    let Function;
    (function (Function) {
        Function[Function["FUNC_GRAYSCALE"] = 0] = "FUNC_GRAYSCALE";
        Function[Function["FUNC_HSV2RGB"] = 1] = "FUNC_HSV2RGB";
        Function[Function["FUNC_RGB2HSV"] = 2] = "FUNC_RGB2HSV";
        Function[Function["FUNC_SEPIA"] = 3] = "FUNC_SEPIA";
        Function[Function["FUNC_MAX"] = 4] = "FUNC_MAX";
    })(Function = VisualShaderNodeColorFunc.Function || (VisualShaderNodeColorFunc.Function = {}));
})(VisualShaderNodeColorFunc || (VisualShaderNodeColorFunc = {}));
export var MultiplayerPeer;
(function (MultiplayerPeer) {
    let ConnectionStatus;
    (function (ConnectionStatus) {
        ConnectionStatus[ConnectionStatus["CONNECTION_DISCONNECTED"] = 0] = "CONNECTION_DISCONNECTED";
        ConnectionStatus[ConnectionStatus["CONNECTION_CONNECTING"] = 1] = "CONNECTION_CONNECTING";
        ConnectionStatus[ConnectionStatus["CONNECTION_CONNECTED"] = 2] = "CONNECTION_CONNECTED";
    })(ConnectionStatus = MultiplayerPeer.ConnectionStatus || (MultiplayerPeer.ConnectionStatus = {}));
    MultiplayerPeer.TARGET_PEER_BROADCAST = 0;
    MultiplayerPeer.TARGET_PEER_SERVER = 1;
    let TransferMode;
    (function (TransferMode) {
        TransferMode[TransferMode["TRANSFER_MODE_UNRELIABLE"] = 0] = "TRANSFER_MODE_UNRELIABLE";
        TransferMode[TransferMode["TRANSFER_MODE_UNRELIABLE_ORDERED"] = 1] = "TRANSFER_MODE_UNRELIABLE_ORDERED";
        TransferMode[TransferMode["TRANSFER_MODE_RELIABLE"] = 2] = "TRANSFER_MODE_RELIABLE";
    })(TransferMode = MultiplayerPeer.TransferMode || (MultiplayerPeer.TransferMode = {}));
})(MultiplayerPeer || (MultiplayerPeer = {}));
export var TextureButton;
(function (TextureButton) {
    let StretchMode;
    (function (StretchMode) {
        StretchMode[StretchMode["STRETCH_SCALE"] = 0] = "STRETCH_SCALE";
        StretchMode[StretchMode["STRETCH_TILE"] = 1] = "STRETCH_TILE";
        StretchMode[StretchMode["STRETCH_KEEP"] = 2] = "STRETCH_KEEP";
        StretchMode[StretchMode["STRETCH_KEEP_CENTERED"] = 3] = "STRETCH_KEEP_CENTERED";
        StretchMode[StretchMode["STRETCH_KEEP_ASPECT"] = 4] = "STRETCH_KEEP_ASPECT";
        StretchMode[StretchMode["STRETCH_KEEP_ASPECT_CENTERED"] = 5] = "STRETCH_KEEP_ASPECT_CENTERED";
        StretchMode[StretchMode["STRETCH_KEEP_ASPECT_COVERED"] = 6] = "STRETCH_KEEP_ASPECT_COVERED";
    })(StretchMode = TextureButton.StretchMode || (TextureButton.StretchMode = {}));
})(TextureButton || (TextureButton = {}));
export var XRInterface;
(function (XRInterface) {
    let Capabilities;
    (function (Capabilities) {
        Capabilities[Capabilities["XR_NONE"] = 0] = "XR_NONE";
        Capabilities[Capabilities["XR_MONO"] = 1] = "XR_MONO";
        Capabilities[Capabilities["XR_STEREO"] = 2] = "XR_STEREO";
        Capabilities[Capabilities["XR_QUAD"] = 4] = "XR_QUAD";
        Capabilities[Capabilities["XR_VR"] = 8] = "XR_VR";
        Capabilities[Capabilities["XR_AR"] = 16] = "XR_AR";
        Capabilities[Capabilities["XR_EXTERNAL"] = 32] = "XR_EXTERNAL";
    })(Capabilities = XRInterface.Capabilities || (XRInterface.Capabilities = {}));
    let TrackingStatus;
    (function (TrackingStatus) {
        TrackingStatus[TrackingStatus["XR_NORMAL_TRACKING"] = 0] = "XR_NORMAL_TRACKING";
        TrackingStatus[TrackingStatus["XR_EXCESSIVE_MOTION"] = 1] = "XR_EXCESSIVE_MOTION";
        TrackingStatus[TrackingStatus["XR_INSUFFICIENT_FEATURES"] = 2] = "XR_INSUFFICIENT_FEATURES";
        TrackingStatus[TrackingStatus["XR_UNKNOWN_TRACKING"] = 3] = "XR_UNKNOWN_TRACKING";
        TrackingStatus[TrackingStatus["XR_NOT_TRACKING"] = 4] = "XR_NOT_TRACKING";
    })(TrackingStatus = XRInterface.TrackingStatus || (XRInterface.TrackingStatus = {}));
    let PlayAreaMode;
    (function (PlayAreaMode) {
        PlayAreaMode[PlayAreaMode["XR_PLAY_AREA_UNKNOWN"] = 0] = "XR_PLAY_AREA_UNKNOWN";
        PlayAreaMode[PlayAreaMode["XR_PLAY_AREA_3DOF"] = 1] = "XR_PLAY_AREA_3DOF";
        PlayAreaMode[PlayAreaMode["XR_PLAY_AREA_SITTING"] = 2] = "XR_PLAY_AREA_SITTING";
        PlayAreaMode[PlayAreaMode["XR_PLAY_AREA_ROOMSCALE"] = 3] = "XR_PLAY_AREA_ROOMSCALE";
        PlayAreaMode[PlayAreaMode["XR_PLAY_AREA_STAGE"] = 4] = "XR_PLAY_AREA_STAGE";
    })(PlayAreaMode = XRInterface.PlayAreaMode || (XRInterface.PlayAreaMode = {}));
    let EnvironmentBlendMode;
    (function (EnvironmentBlendMode) {
        EnvironmentBlendMode[EnvironmentBlendMode["XR_ENV_BLEND_MODE_OPAQUE"] = 0] = "XR_ENV_BLEND_MODE_OPAQUE";
        EnvironmentBlendMode[EnvironmentBlendMode["XR_ENV_BLEND_MODE_ADDITIVE"] = 1] = "XR_ENV_BLEND_MODE_ADDITIVE";
        EnvironmentBlendMode[EnvironmentBlendMode["XR_ENV_BLEND_MODE_ALPHA_BLEND"] = 2] = "XR_ENV_BLEND_MODE_ALPHA_BLEND";
    })(EnvironmentBlendMode = XRInterface.EnvironmentBlendMode || (XRInterface.EnvironmentBlendMode = {}));
})(XRInterface || (XRInterface = {}));
export var MultiplayerAPI;
(function (MultiplayerAPI) {
    let RPCMode;
    (function (RPCMode) {
        RPCMode[RPCMode["RPC_MODE_DISABLED"] = 0] = "RPC_MODE_DISABLED";
        RPCMode[RPCMode["RPC_MODE_ANY_PEER"] = 1] = "RPC_MODE_ANY_PEER";
        RPCMode[RPCMode["RPC_MODE_AUTHORITY"] = 2] = "RPC_MODE_AUTHORITY";
    })(RPCMode = MultiplayerAPI.RPCMode || (MultiplayerAPI.RPCMode = {}));
})(MultiplayerAPI || (MultiplayerAPI = {}));
export var VoxelGI;
(function (VoxelGI) {
    let Subdiv;
    (function (Subdiv) {
        Subdiv[Subdiv["SUBDIV_64"] = 0] = "SUBDIV_64";
        Subdiv[Subdiv["SUBDIV_128"] = 1] = "SUBDIV_128";
        Subdiv[Subdiv["SUBDIV_256"] = 2] = "SUBDIV_256";
        Subdiv[Subdiv["SUBDIV_512"] = 3] = "SUBDIV_512";
        Subdiv[Subdiv["SUBDIV_MAX"] = 4] = "SUBDIV_MAX";
    })(Subdiv = VoxelGI.Subdiv || (VoxelGI.Subdiv = {}));
})(VoxelGI || (VoxelGI = {}));
export var NinePatchRect;
(function (NinePatchRect) {
    let AxisStretchMode;
    (function (AxisStretchMode) {
        AxisStretchMode[AxisStretchMode["AXIS_STRETCH_MODE_STRETCH"] = 0] = "AXIS_STRETCH_MODE_STRETCH";
        AxisStretchMode[AxisStretchMode["AXIS_STRETCH_MODE_TILE"] = 1] = "AXIS_STRETCH_MODE_TILE";
        AxisStretchMode[AxisStretchMode["AXIS_STRETCH_MODE_TILE_FIT"] = 2] = "AXIS_STRETCH_MODE_TILE_FIT";
    })(AxisStretchMode = NinePatchRect.AxisStretchMode || (NinePatchRect.AxisStretchMode = {}));
})(NinePatchRect || (NinePatchRect = {}));
export var FileAccess;
(function (FileAccess) {
    let ModeFlags;
    (function (ModeFlags) {
        ModeFlags[ModeFlags["READ"] = 1] = "READ";
        ModeFlags[ModeFlags["WRITE"] = 2] = "WRITE";
        ModeFlags[ModeFlags["READ_WRITE"] = 3] = "READ_WRITE";
        ModeFlags[ModeFlags["WRITE_READ"] = 7] = "WRITE_READ";
    })(ModeFlags = FileAccess.ModeFlags || (FileAccess.ModeFlags = {}));
    let CompressionMode;
    (function (CompressionMode) {
        CompressionMode[CompressionMode["COMPRESSION_FASTLZ"] = 0] = "COMPRESSION_FASTLZ";
        CompressionMode[CompressionMode["COMPRESSION_DEFLATE"] = 1] = "COMPRESSION_DEFLATE";
        CompressionMode[CompressionMode["COMPRESSION_ZSTD"] = 2] = "COMPRESSION_ZSTD";
        CompressionMode[CompressionMode["COMPRESSION_GZIP"] = 3] = "COMPRESSION_GZIP";
        CompressionMode[CompressionMode["COMPRESSION_BROTLI"] = 4] = "COMPRESSION_BROTLI";
    })(CompressionMode = FileAccess.CompressionMode || (FileAccess.CompressionMode = {}));
    let UnixPermissionFlags;
    (function (UnixPermissionFlags) {
        UnixPermissionFlags[UnixPermissionFlags["UNIX_READ_OWNER"] = 256] = "UNIX_READ_OWNER";
        UnixPermissionFlags[UnixPermissionFlags["UNIX_WRITE_OWNER"] = 128] = "UNIX_WRITE_OWNER";
        UnixPermissionFlags[UnixPermissionFlags["UNIX_EXECUTE_OWNER"] = 64] = "UNIX_EXECUTE_OWNER";
        UnixPermissionFlags[UnixPermissionFlags["UNIX_READ_GROUP"] = 32] = "UNIX_READ_GROUP";
        UnixPermissionFlags[UnixPermissionFlags["UNIX_WRITE_GROUP"] = 16] = "UNIX_WRITE_GROUP";
        UnixPermissionFlags[UnixPermissionFlags["UNIX_EXECUTE_GROUP"] = 8] = "UNIX_EXECUTE_GROUP";
        UnixPermissionFlags[UnixPermissionFlags["UNIX_READ_OTHER"] = 4] = "UNIX_READ_OTHER";
        UnixPermissionFlags[UnixPermissionFlags["UNIX_WRITE_OTHER"] = 2] = "UNIX_WRITE_OTHER";
        UnixPermissionFlags[UnixPermissionFlags["UNIX_EXECUTE_OTHER"] = 1] = "UNIX_EXECUTE_OTHER";
        UnixPermissionFlags[UnixPermissionFlags["UNIX_SET_USER_ID"] = 2048] = "UNIX_SET_USER_ID";
        UnixPermissionFlags[UnixPermissionFlags["UNIX_SET_GROUP_ID"] = 1024] = "UNIX_SET_GROUP_ID";
        UnixPermissionFlags[UnixPermissionFlags["UNIX_RESTRICTED_DELETE"] = 512] = "UNIX_RESTRICTED_DELETE";
    })(UnixPermissionFlags = FileAccess.UnixPermissionFlags || (FileAccess.UnixPermissionFlags = {}));
})(FileAccess || (FileAccess = {}));
export var Light3D;
(function (Light3D) {
    let Param;
    (function (Param) {
        Param[Param["PARAM_ENERGY"] = 0] = "PARAM_ENERGY";
        Param[Param["PARAM_INDIRECT_ENERGY"] = 1] = "PARAM_INDIRECT_ENERGY";
        Param[Param["PARAM_VOLUMETRIC_FOG_ENERGY"] = 2] = "PARAM_VOLUMETRIC_FOG_ENERGY";
        Param[Param["PARAM_SPECULAR"] = 3] = "PARAM_SPECULAR";
        Param[Param["PARAM_RANGE"] = 4] = "PARAM_RANGE";
        Param[Param["PARAM_SIZE"] = 5] = "PARAM_SIZE";
        Param[Param["PARAM_ATTENUATION"] = 6] = "PARAM_ATTENUATION";
        Param[Param["PARAM_SPOT_ANGLE"] = 7] = "PARAM_SPOT_ANGLE";
        Param[Param["PARAM_SPOT_ATTENUATION"] = 8] = "PARAM_SPOT_ATTENUATION";
        Param[Param["PARAM_SHADOW_MAX_DISTANCE"] = 9] = "PARAM_SHADOW_MAX_DISTANCE";
        Param[Param["PARAM_SHADOW_SPLIT_1_OFFSET"] = 10] = "PARAM_SHADOW_SPLIT_1_OFFSET";
        Param[Param["PARAM_SHADOW_SPLIT_2_OFFSET"] = 11] = "PARAM_SHADOW_SPLIT_2_OFFSET";
        Param[Param["PARAM_SHADOW_SPLIT_3_OFFSET"] = 12] = "PARAM_SHADOW_SPLIT_3_OFFSET";
        Param[Param["PARAM_SHADOW_FADE_START"] = 13] = "PARAM_SHADOW_FADE_START";
        Param[Param["PARAM_SHADOW_NORMAL_BIAS"] = 14] = "PARAM_SHADOW_NORMAL_BIAS";
        Param[Param["PARAM_SHADOW_BIAS"] = 15] = "PARAM_SHADOW_BIAS";
        Param[Param["PARAM_SHADOW_PANCAKE_SIZE"] = 16] = "PARAM_SHADOW_PANCAKE_SIZE";
        Param[Param["PARAM_SHADOW_OPACITY"] = 17] = "PARAM_SHADOW_OPACITY";
        Param[Param["PARAM_SHADOW_BLUR"] = 18] = "PARAM_SHADOW_BLUR";
        Param[Param["PARAM_TRANSMITTANCE_BIAS"] = 19] = "PARAM_TRANSMITTANCE_BIAS";
        Param[Param["PARAM_INTENSITY"] = 20] = "PARAM_INTENSITY";
        Param[Param["PARAM_MAX"] = 21] = "PARAM_MAX";
    })(Param = Light3D.Param || (Light3D.Param = {}));
    let BakeMode;
    (function (BakeMode) {
        BakeMode[BakeMode["BAKE_DISABLED"] = 0] = "BAKE_DISABLED";
        BakeMode[BakeMode["BAKE_STATIC"] = 1] = "BAKE_STATIC";
        BakeMode[BakeMode["BAKE_DYNAMIC"] = 2] = "BAKE_DYNAMIC";
    })(BakeMode = Light3D.BakeMode || (Light3D.BakeMode = {}));
})(Light3D || (Light3D = {}));
export var VisibleOnScreenEnabler3D;
(function (VisibleOnScreenEnabler3D) {
    let EnableMode;
    (function (EnableMode) {
        EnableMode[EnableMode["ENABLE_MODE_INHERIT"] = 0] = "ENABLE_MODE_INHERIT";
        EnableMode[EnableMode["ENABLE_MODE_ALWAYS"] = 1] = "ENABLE_MODE_ALWAYS";
        EnableMode[EnableMode["ENABLE_MODE_WHEN_PAUSED"] = 2] = "ENABLE_MODE_WHEN_PAUSED";
    })(EnableMode = VisibleOnScreenEnabler3D.EnableMode || (VisibleOnScreenEnabler3D.EnableMode = {}));
})(VisibleOnScreenEnabler3D || (VisibleOnScreenEnabler3D = {}));
export var VisualShaderNodeMix;
(function (VisualShaderNodeMix) {
    let OpType;
    (function (OpType) {
        OpType[OpType["OP_TYPE_SCALAR"] = 0] = "OP_TYPE_SCALAR";
        OpType[OpType["OP_TYPE_VECTOR_2D"] = 1] = "OP_TYPE_VECTOR_2D";
        OpType[OpType["OP_TYPE_VECTOR_2D_SCALAR"] = 2] = "OP_TYPE_VECTOR_2D_SCALAR";
        OpType[OpType["OP_TYPE_VECTOR_3D"] = 3] = "OP_TYPE_VECTOR_3D";
        OpType[OpType["OP_TYPE_VECTOR_3D_SCALAR"] = 4] = "OP_TYPE_VECTOR_3D_SCALAR";
        OpType[OpType["OP_TYPE_VECTOR_4D"] = 5] = "OP_TYPE_VECTOR_4D";
        OpType[OpType["OP_TYPE_VECTOR_4D_SCALAR"] = 6] = "OP_TYPE_VECTOR_4D_SCALAR";
        OpType[OpType["OP_TYPE_MAX"] = 7] = "OP_TYPE_MAX";
    })(OpType = VisualShaderNodeMix.OpType || (VisualShaderNodeMix.OpType = {}));
})(VisualShaderNodeMix || (VisualShaderNodeMix = {}));
export var InputEvent;
(function (InputEvent) {
    InputEvent.DEVICE_ID_EMULATION = -1;
})(InputEvent || (InputEvent = {}));
export var XRBodyModifier3D;
(function (XRBodyModifier3D) {
    let BodyUpdate;
    (function (BodyUpdate) {
        BodyUpdate[BodyUpdate["BODY_UPDATE_UPPER_BODY"] = 1] = "BODY_UPDATE_UPPER_BODY";
        BodyUpdate[BodyUpdate["BODY_UPDATE_LOWER_BODY"] = 2] = "BODY_UPDATE_LOWER_BODY";
        BodyUpdate[BodyUpdate["BODY_UPDATE_HANDS"] = 4] = "BODY_UPDATE_HANDS";
    })(BodyUpdate = XRBodyModifier3D.BodyUpdate || (XRBodyModifier3D.BodyUpdate = {}));
    let BoneUpdate;
    (function (BoneUpdate) {
        BoneUpdate[BoneUpdate["BONE_UPDATE_FULL"] = 0] = "BONE_UPDATE_FULL";
        BoneUpdate[BoneUpdate["BONE_UPDATE_ROTATION_ONLY"] = 1] = "BONE_UPDATE_ROTATION_ONLY";
        BoneUpdate[BoneUpdate["BONE_UPDATE_MAX"] = 2] = "BONE_UPDATE_MAX";
    })(BoneUpdate = XRBodyModifier3D.BoneUpdate || (XRBodyModifier3D.BoneUpdate = {}));
})(XRBodyModifier3D || (XRBodyModifier3D = {}));
export var ClassDB;
(function (ClassDB) {
    let APIType;
    (function (APIType) {
        APIType[APIType["API_CORE"] = 0] = "API_CORE";
        APIType[APIType["API_EDITOR"] = 1] = "API_EDITOR";
        APIType[APIType["API_EXTENSION"] = 2] = "API_EXTENSION";
        APIType[APIType["API_EDITOR_EXTENSION"] = 3] = "API_EDITOR_EXTENSION";
        APIType[APIType["API_NONE"] = 4] = "API_NONE";
    })(APIType = ClassDB.APIType || (ClassDB.APIType = {}));
})(ClassDB || (ClassDB = {}));
export var AnimationNodeStateMachine;
(function (AnimationNodeStateMachine) {
    let StateMachineType;
    (function (StateMachineType) {
        StateMachineType[StateMachineType["STATE_MACHINE_TYPE_ROOT"] = 0] = "STATE_MACHINE_TYPE_ROOT";
        StateMachineType[StateMachineType["STATE_MACHINE_TYPE_NESTED"] = 1] = "STATE_MACHINE_TYPE_NESTED";
        StateMachineType[StateMachineType["STATE_MACHINE_TYPE_GROUPED"] = 2] = "STATE_MACHINE_TYPE_GROUPED";
    })(StateMachineType = AnimationNodeStateMachine.StateMachineType || (AnimationNodeStateMachine.StateMachineType = {}));
})(AnimationNodeStateMachine || (AnimationNodeStateMachine = {}));
export var Area2D;
(function (Area2D) {
    let SpaceOverride;
    (function (SpaceOverride) {
        SpaceOverride[SpaceOverride["SPACE_OVERRIDE_DISABLED"] = 0] = "SPACE_OVERRIDE_DISABLED";
        SpaceOverride[SpaceOverride["SPACE_OVERRIDE_COMBINE"] = 1] = "SPACE_OVERRIDE_COMBINE";
        SpaceOverride[SpaceOverride["SPACE_OVERRIDE_COMBINE_REPLACE"] = 2] = "SPACE_OVERRIDE_COMBINE_REPLACE";
        SpaceOverride[SpaceOverride["SPACE_OVERRIDE_REPLACE"] = 3] = "SPACE_OVERRIDE_REPLACE";
        SpaceOverride[SpaceOverride["SPACE_OVERRIDE_REPLACE_COMBINE"] = 4] = "SPACE_OVERRIDE_REPLACE_COMBINE";
    })(SpaceOverride = Area2D.SpaceOverride || (Area2D.SpaceOverride = {}));
})(Area2D || (Area2D = {}));
export var VisualShaderNodeIntParameter;
(function (VisualShaderNodeIntParameter) {
    let Hint;
    (function (Hint) {
        Hint[Hint["HINT_NONE"] = 0] = "HINT_NONE";
        Hint[Hint["HINT_RANGE"] = 1] = "HINT_RANGE";
        Hint[Hint["HINT_RANGE_STEP"] = 2] = "HINT_RANGE_STEP";
        Hint[Hint["HINT_ENUM"] = 3] = "HINT_ENUM";
        Hint[Hint["HINT_MAX"] = 4] = "HINT_MAX";
    })(Hint = VisualShaderNodeIntParameter.Hint || (VisualShaderNodeIntParameter.Hint = {}));
})(VisualShaderNodeIntParameter || (VisualShaderNodeIntParameter = {}));
export var Control;
(function (Control) {
    let FocusMode;
    (function (FocusMode) {
        FocusMode[FocusMode["FOCUS_NONE"] = 0] = "FOCUS_NONE";
        FocusMode[FocusMode["FOCUS_CLICK"] = 1] = "FOCUS_CLICK";
        FocusMode[FocusMode["FOCUS_ALL"] = 2] = "FOCUS_ALL";
    })(FocusMode = Control.FocusMode || (Control.FocusMode = {}));
    Control.NOTIFICATION_RESIZED = 40;
    Control.NOTIFICATION_MOUSE_ENTER = 41;
    Control.NOTIFICATION_MOUSE_EXIT = 42;
    Control.NOTIFICATION_MOUSE_ENTER_SELF = 60;
    Control.NOTIFICATION_MOUSE_EXIT_SELF = 61;
    Control.NOTIFICATION_FOCUS_ENTER = 43;
    Control.NOTIFICATION_FOCUS_EXIT = 44;
    Control.NOTIFICATION_THEME_CHANGED = 45;
    Control.NOTIFICATION_SCROLL_BEGIN = 47;
    Control.NOTIFICATION_SCROLL_END = 48;
    Control.NOTIFICATION_LAYOUT_DIRECTION_CHANGED = 49;
    let CursorShape;
    (function (CursorShape) {
        CursorShape[CursorShape["CURSOR_ARROW"] = 0] = "CURSOR_ARROW";
        CursorShape[CursorShape["CURSOR_IBEAM"] = 1] = "CURSOR_IBEAM";
        CursorShape[CursorShape["CURSOR_POINTING_HAND"] = 2] = "CURSOR_POINTING_HAND";
        CursorShape[CursorShape["CURSOR_CROSS"] = 3] = "CURSOR_CROSS";
        CursorShape[CursorShape["CURSOR_WAIT"] = 4] = "CURSOR_WAIT";
        CursorShape[CursorShape["CURSOR_BUSY"] = 5] = "CURSOR_BUSY";
        CursorShape[CursorShape["CURSOR_DRAG"] = 6] = "CURSOR_DRAG";
        CursorShape[CursorShape["CURSOR_CAN_DROP"] = 7] = "CURSOR_CAN_DROP";
        CursorShape[CursorShape["CURSOR_FORBIDDEN"] = 8] = "CURSOR_FORBIDDEN";
        CursorShape[CursorShape["CURSOR_VSIZE"] = 9] = "CURSOR_VSIZE";
        CursorShape[CursorShape["CURSOR_HSIZE"] = 10] = "CURSOR_HSIZE";
        CursorShape[CursorShape["CURSOR_BDIAGSIZE"] = 11] = "CURSOR_BDIAGSIZE";
        CursorShape[CursorShape["CURSOR_FDIAGSIZE"] = 12] = "CURSOR_FDIAGSIZE";
        CursorShape[CursorShape["CURSOR_MOVE"] = 13] = "CURSOR_MOVE";
        CursorShape[CursorShape["CURSOR_VSPLIT"] = 14] = "CURSOR_VSPLIT";
        CursorShape[CursorShape["CURSOR_HSPLIT"] = 15] = "CURSOR_HSPLIT";
        CursorShape[CursorShape["CURSOR_HELP"] = 16] = "CURSOR_HELP";
    })(CursorShape = Control.CursorShape || (Control.CursorShape = {}));
    let LayoutPreset;
    (function (LayoutPreset) {
        LayoutPreset[LayoutPreset["PRESET_TOP_LEFT"] = 0] = "PRESET_TOP_LEFT";
        LayoutPreset[LayoutPreset["PRESET_TOP_RIGHT"] = 1] = "PRESET_TOP_RIGHT";
        LayoutPreset[LayoutPreset["PRESET_BOTTOM_LEFT"] = 2] = "PRESET_BOTTOM_LEFT";
        LayoutPreset[LayoutPreset["PRESET_BOTTOM_RIGHT"] = 3] = "PRESET_BOTTOM_RIGHT";
        LayoutPreset[LayoutPreset["PRESET_CENTER_LEFT"] = 4] = "PRESET_CENTER_LEFT";
        LayoutPreset[LayoutPreset["PRESET_CENTER_TOP"] = 5] = "PRESET_CENTER_TOP";
        LayoutPreset[LayoutPreset["PRESET_CENTER_RIGHT"] = 6] = "PRESET_CENTER_RIGHT";
        LayoutPreset[LayoutPreset["PRESET_CENTER_BOTTOM"] = 7] = "PRESET_CENTER_BOTTOM";
        LayoutPreset[LayoutPreset["PRESET_CENTER"] = 8] = "PRESET_CENTER";
        LayoutPreset[LayoutPreset["PRESET_LEFT_WIDE"] = 9] = "PRESET_LEFT_WIDE";
        LayoutPreset[LayoutPreset["PRESET_TOP_WIDE"] = 10] = "PRESET_TOP_WIDE";
        LayoutPreset[LayoutPreset["PRESET_RIGHT_WIDE"] = 11] = "PRESET_RIGHT_WIDE";
        LayoutPreset[LayoutPreset["PRESET_BOTTOM_WIDE"] = 12] = "PRESET_BOTTOM_WIDE";
        LayoutPreset[LayoutPreset["PRESET_VCENTER_WIDE"] = 13] = "PRESET_VCENTER_WIDE";
        LayoutPreset[LayoutPreset["PRESET_HCENTER_WIDE"] = 14] = "PRESET_HCENTER_WIDE";
        LayoutPreset[LayoutPreset["PRESET_FULL_RECT"] = 15] = "PRESET_FULL_RECT";
    })(LayoutPreset = Control.LayoutPreset || (Control.LayoutPreset = {}));
    let LayoutPresetMode;
    (function (LayoutPresetMode) {
        LayoutPresetMode[LayoutPresetMode["PRESET_MODE_MINSIZE"] = 0] = "PRESET_MODE_MINSIZE";
        LayoutPresetMode[LayoutPresetMode["PRESET_MODE_KEEP_WIDTH"] = 1] = "PRESET_MODE_KEEP_WIDTH";
        LayoutPresetMode[LayoutPresetMode["PRESET_MODE_KEEP_HEIGHT"] = 2] = "PRESET_MODE_KEEP_HEIGHT";
        LayoutPresetMode[LayoutPresetMode["PRESET_MODE_KEEP_SIZE"] = 3] = "PRESET_MODE_KEEP_SIZE";
    })(LayoutPresetMode = Control.LayoutPresetMode || (Control.LayoutPresetMode = {}));
    let SizeFlags;
    (function (SizeFlags) {
        SizeFlags[SizeFlags["SIZE_SHRINK_BEGIN"] = 0] = "SIZE_SHRINK_BEGIN";
        SizeFlags[SizeFlags["SIZE_FILL"] = 1] = "SIZE_FILL";
        SizeFlags[SizeFlags["SIZE_EXPAND"] = 2] = "SIZE_EXPAND";
        SizeFlags[SizeFlags["SIZE_EXPAND_FILL"] = 3] = "SIZE_EXPAND_FILL";
        SizeFlags[SizeFlags["SIZE_SHRINK_CENTER"] = 4] = "SIZE_SHRINK_CENTER";
        SizeFlags[SizeFlags["SIZE_SHRINK_END"] = 8] = "SIZE_SHRINK_END";
    })(SizeFlags = Control.SizeFlags || (Control.SizeFlags = {}));
    let MouseFilter;
    (function (MouseFilter) {
        MouseFilter[MouseFilter["MOUSE_FILTER_STOP"] = 0] = "MOUSE_FILTER_STOP";
        MouseFilter[MouseFilter["MOUSE_FILTER_PASS"] = 1] = "MOUSE_FILTER_PASS";
        MouseFilter[MouseFilter["MOUSE_FILTER_IGNORE"] = 2] = "MOUSE_FILTER_IGNORE";
    })(MouseFilter = Control.MouseFilter || (Control.MouseFilter = {}));
    let GrowDirection;
    (function (GrowDirection) {
        GrowDirection[GrowDirection["GROW_DIRECTION_BEGIN"] = 0] = "GROW_DIRECTION_BEGIN";
        GrowDirection[GrowDirection["GROW_DIRECTION_END"] = 1] = "GROW_DIRECTION_END";
        GrowDirection[GrowDirection["GROW_DIRECTION_BOTH"] = 2] = "GROW_DIRECTION_BOTH";
    })(GrowDirection = Control.GrowDirection || (Control.GrowDirection = {}));
    let Anchor;
    (function (Anchor) {
        Anchor[Anchor["ANCHOR_BEGIN"] = 0] = "ANCHOR_BEGIN";
        Anchor[Anchor["ANCHOR_END"] = 1] = "ANCHOR_END";
    })(Anchor = Control.Anchor || (Control.Anchor = {}));
    let LayoutDirection;
    (function (LayoutDirection) {
        LayoutDirection[LayoutDirection["LAYOUT_DIRECTION_INHERITED"] = 0] = "LAYOUT_DIRECTION_INHERITED";
        LayoutDirection[LayoutDirection["LAYOUT_DIRECTION_APPLICATION_LOCALE"] = 1] = "LAYOUT_DIRECTION_APPLICATION_LOCALE";
        LayoutDirection[LayoutDirection["LAYOUT_DIRECTION_LTR"] = 2] = "LAYOUT_DIRECTION_LTR";
        LayoutDirection[LayoutDirection["LAYOUT_DIRECTION_RTL"] = 3] = "LAYOUT_DIRECTION_RTL";
        LayoutDirection[LayoutDirection["LAYOUT_DIRECTION_SYSTEM_LOCALE"] = 4] = "LAYOUT_DIRECTION_SYSTEM_LOCALE";
        LayoutDirection[LayoutDirection["LAYOUT_DIRECTION_MAX"] = 5] = "LAYOUT_DIRECTION_MAX";
        LayoutDirection[LayoutDirection["LAYOUT_DIRECTION_LOCALE"] = 1] = "LAYOUT_DIRECTION_LOCALE";
    })(LayoutDirection = Control.LayoutDirection || (Control.LayoutDirection = {}));
    let TextDirection;
    (function (TextDirection) {
        TextDirection[TextDirection["TEXT_DIRECTION_INHERITED"] = 3] = "TEXT_DIRECTION_INHERITED";
        TextDirection[TextDirection["TEXT_DIRECTION_AUTO"] = 0] = "TEXT_DIRECTION_AUTO";
        TextDirection[TextDirection["TEXT_DIRECTION_LTR"] = 1] = "TEXT_DIRECTION_LTR";
        TextDirection[TextDirection["TEXT_DIRECTION_RTL"] = 2] = "TEXT_DIRECTION_RTL";
    })(TextDirection = Control.TextDirection || (Control.TextDirection = {}));
})(Control || (Control = {}));
export var VisualShaderNodeFloatOp;
(function (VisualShaderNodeFloatOp) {
    let Operator;
    (function (Operator) {
        Operator[Operator["OP_ADD"] = 0] = "OP_ADD";
        Operator[Operator["OP_SUB"] = 1] = "OP_SUB";
        Operator[Operator["OP_MUL"] = 2] = "OP_MUL";
        Operator[Operator["OP_DIV"] = 3] = "OP_DIV";
        Operator[Operator["OP_MOD"] = 4] = "OP_MOD";
        Operator[Operator["OP_POW"] = 5] = "OP_POW";
        Operator[Operator["OP_MAX"] = 6] = "OP_MAX";
        Operator[Operator["OP_MIN"] = 7] = "OP_MIN";
        Operator[Operator["OP_ATAN2"] = 8] = "OP_ATAN2";
        Operator[Operator["OP_STEP"] = 9] = "OP_STEP";
        Operator[Operator["OP_ENUM_SIZE"] = 10] = "OP_ENUM_SIZE";
    })(Operator = VisualShaderNodeFloatOp.Operator || (VisualShaderNodeFloatOp.Operator = {}));
})(VisualShaderNodeFloatOp || (VisualShaderNodeFloatOp = {}));
export var AnimationTree;
(function (AnimationTree) {
    let AnimationProcessCallback;
    (function (AnimationProcessCallback) {
        AnimationProcessCallback[AnimationProcessCallback["ANIMATION_PROCESS_PHYSICS"] = 0] = "ANIMATION_PROCESS_PHYSICS";
        AnimationProcessCallback[AnimationProcessCallback["ANIMATION_PROCESS_IDLE"] = 1] = "ANIMATION_PROCESS_IDLE";
        AnimationProcessCallback[AnimationProcessCallback["ANIMATION_PROCESS_MANUAL"] = 2] = "ANIMATION_PROCESS_MANUAL";
    })(AnimationProcessCallback = AnimationTree.AnimationProcessCallback || (AnimationTree.AnimationProcessCallback = {}));
})(AnimationTree || (AnimationTree = {}));
export var ScriptLanguage;
(function (ScriptLanguage) {
    let ScriptNameCasing;
    (function (ScriptNameCasing) {
        ScriptNameCasing[ScriptNameCasing["SCRIPT_NAME_CASING_AUTO"] = 0] = "SCRIPT_NAME_CASING_AUTO";
        ScriptNameCasing[ScriptNameCasing["SCRIPT_NAME_CASING_PASCAL_CASE"] = 1] = "SCRIPT_NAME_CASING_PASCAL_CASE";
        ScriptNameCasing[ScriptNameCasing["SCRIPT_NAME_CASING_SNAKE_CASE"] = 2] = "SCRIPT_NAME_CASING_SNAKE_CASE";
        ScriptNameCasing[ScriptNameCasing["SCRIPT_NAME_CASING_KEBAB_CASE"] = 3] = "SCRIPT_NAME_CASING_KEBAB_CASE";
    })(ScriptNameCasing = ScriptLanguage.ScriptNameCasing || (ScriptLanguage.ScriptNameCasing = {}));
})(ScriptLanguage || (ScriptLanguage = {}));
export var XRPositionalTracker;
(function (XRPositionalTracker) {
    let TrackerHand;
    (function (TrackerHand) {
        TrackerHand[TrackerHand["TRACKER_HAND_UNKNOWN"] = 0] = "TRACKER_HAND_UNKNOWN";
        TrackerHand[TrackerHand["TRACKER_HAND_LEFT"] = 1] = "TRACKER_HAND_LEFT";
        TrackerHand[TrackerHand["TRACKER_HAND_RIGHT"] = 2] = "TRACKER_HAND_RIGHT";
        TrackerHand[TrackerHand["TRACKER_HAND_MAX"] = 3] = "TRACKER_HAND_MAX";
    })(TrackerHand = XRPositionalTracker.TrackerHand || (XRPositionalTracker.TrackerHand = {}));
})(XRPositionalTracker || (XRPositionalTracker = {}));
export var Skeleton3D;
(function (Skeleton3D) {
    Skeleton3D.NOTIFICATION_UPDATE_SKELETON = 50;
    let ModifierCallbackModeProcess;
    (function (ModifierCallbackModeProcess) {
        ModifierCallbackModeProcess[ModifierCallbackModeProcess["MODIFIER_CALLBACK_MODE_PROCESS_PHYSICS"] = 0] = "MODIFIER_CALLBACK_MODE_PROCESS_PHYSICS";
        ModifierCallbackModeProcess[ModifierCallbackModeProcess["MODIFIER_CALLBACK_MODE_PROCESS_IDLE"] = 1] = "MODIFIER_CALLBACK_MODE_PROCESS_IDLE";
    })(ModifierCallbackModeProcess = Skeleton3D.ModifierCallbackModeProcess || (Skeleton3D.ModifierCallbackModeProcess = {}));
})(Skeleton3D || (Skeleton3D = {}));
export var VisualShaderNodeFloatFunc;
(function (VisualShaderNodeFloatFunc) {
    let Function;
    (function (Function) {
        Function[Function["FUNC_SIN"] = 0] = "FUNC_SIN";
        Function[Function["FUNC_COS"] = 1] = "FUNC_COS";
        Function[Function["FUNC_TAN"] = 2] = "FUNC_TAN";
        Function[Function["FUNC_ASIN"] = 3] = "FUNC_ASIN";
        Function[Function["FUNC_ACOS"] = 4] = "FUNC_ACOS";
        Function[Function["FUNC_ATAN"] = 5] = "FUNC_ATAN";
        Function[Function["FUNC_SINH"] = 6] = "FUNC_SINH";
        Function[Function["FUNC_COSH"] = 7] = "FUNC_COSH";
        Function[Function["FUNC_TANH"] = 8] = "FUNC_TANH";
        Function[Function["FUNC_LOG"] = 9] = "FUNC_LOG";
        Function[Function["FUNC_EXP"] = 10] = "FUNC_EXP";
        Function[Function["FUNC_SQRT"] = 11] = "FUNC_SQRT";
        Function[Function["FUNC_ABS"] = 12] = "FUNC_ABS";
        Function[Function["FUNC_SIGN"] = 13] = "FUNC_SIGN";
        Function[Function["FUNC_FLOOR"] = 14] = "FUNC_FLOOR";
        Function[Function["FUNC_ROUND"] = 15] = "FUNC_ROUND";
        Function[Function["FUNC_CEIL"] = 16] = "FUNC_CEIL";
        Function[Function["FUNC_FRACT"] = 17] = "FUNC_FRACT";
        Function[Function["FUNC_SATURATE"] = 18] = "FUNC_SATURATE";
        Function[Function["FUNC_NEGATE"] = 19] = "FUNC_NEGATE";
        Function[Function["FUNC_ACOSH"] = 20] = "FUNC_ACOSH";
        Function[Function["FUNC_ASINH"] = 21] = "FUNC_ASINH";
        Function[Function["FUNC_ATANH"] = 22] = "FUNC_ATANH";
        Function[Function["FUNC_DEGREES"] = 23] = "FUNC_DEGREES";
        Function[Function["FUNC_EXP2"] = 24] = "FUNC_EXP2";
        Function[Function["FUNC_INVERSE_SQRT"] = 25] = "FUNC_INVERSE_SQRT";
        Function[Function["FUNC_LOG2"] = 26] = "FUNC_LOG2";
        Function[Function["FUNC_RADIANS"] = 27] = "FUNC_RADIANS";
        Function[Function["FUNC_RECIPROCAL"] = 28] = "FUNC_RECIPROCAL";
        Function[Function["FUNC_ROUNDEVEN"] = 29] = "FUNC_ROUNDEVEN";
        Function[Function["FUNC_TRUNC"] = 30] = "FUNC_TRUNC";
        Function[Function["FUNC_ONEMINUS"] = 31] = "FUNC_ONEMINUS";
        Function[Function["FUNC_MAX"] = 32] = "FUNC_MAX";
    })(Function = VisualShaderNodeFloatFunc.Function || (VisualShaderNodeFloatFunc.Function = {}));
})(VisualShaderNodeFloatFunc || (VisualShaderNodeFloatFunc = {}));
export var Line2D;
(function (Line2D) {
    let LineJointMode;
    (function (LineJointMode) {
        LineJointMode[LineJointMode["LINE_JOINT_SHARP"] = 0] = "LINE_JOINT_SHARP";
        LineJointMode[LineJointMode["LINE_JOINT_BEVEL"] = 1] = "LINE_JOINT_BEVEL";
        LineJointMode[LineJointMode["LINE_JOINT_ROUND"] = 2] = "LINE_JOINT_ROUND";
    })(LineJointMode = Line2D.LineJointMode || (Line2D.LineJointMode = {}));
    let LineCapMode;
    (function (LineCapMode) {
        LineCapMode[LineCapMode["LINE_CAP_NONE"] = 0] = "LINE_CAP_NONE";
        LineCapMode[LineCapMode["LINE_CAP_BOX"] = 1] = "LINE_CAP_BOX";
        LineCapMode[LineCapMode["LINE_CAP_ROUND"] = 2] = "LINE_CAP_ROUND";
    })(LineCapMode = Line2D.LineCapMode || (Line2D.LineCapMode = {}));
    let LineTextureMode;
    (function (LineTextureMode) {
        LineTextureMode[LineTextureMode["LINE_TEXTURE_NONE"] = 0] = "LINE_TEXTURE_NONE";
        LineTextureMode[LineTextureMode["LINE_TEXTURE_TILE"] = 1] = "LINE_TEXTURE_TILE";
        LineTextureMode[LineTextureMode["LINE_TEXTURE_STRETCH"] = 2] = "LINE_TEXTURE_STRETCH";
    })(LineTextureMode = Line2D.LineTextureMode || (Line2D.LineTextureMode = {}));
})(Line2D || (Line2D = {}));
export var GPUParticlesCollisionHeightField3D;
(function (GPUParticlesCollisionHeightField3D) {
    let Resolution;
    (function (Resolution) {
        Resolution[Resolution["RESOLUTION_256"] = 0] = "RESOLUTION_256";
        Resolution[Resolution["RESOLUTION_512"] = 1] = "RESOLUTION_512";
        Resolution[Resolution["RESOLUTION_1024"] = 2] = "RESOLUTION_1024";
        Resolution[Resolution["RESOLUTION_2048"] = 3] = "RESOLUTION_2048";
        Resolution[Resolution["RESOLUTION_4096"] = 4] = "RESOLUTION_4096";
        Resolution[Resolution["RESOLUTION_8192"] = 5] = "RESOLUTION_8192";
        Resolution[Resolution["RESOLUTION_MAX"] = 6] = "RESOLUTION_MAX";
    })(Resolution = GPUParticlesCollisionHeightField3D.Resolution || (GPUParticlesCollisionHeightField3D.Resolution = {}));
    let UpdateMode;
    (function (UpdateMode) {
        UpdateMode[UpdateMode["UPDATE_MODE_WHEN_MOVED"] = 0] = "UPDATE_MODE_WHEN_MOVED";
        UpdateMode[UpdateMode["UPDATE_MODE_ALWAYS"] = 1] = "UPDATE_MODE_ALWAYS";
    })(UpdateMode = GPUParticlesCollisionHeightField3D.UpdateMode || (GPUParticlesCollisionHeightField3D.UpdateMode = {}));
})(GPUParticlesCollisionHeightField3D || (GPUParticlesCollisionHeightField3D = {}));
export var CharacterBody3D;
(function (CharacterBody3D) {
    let MotionMode;
    (function (MotionMode) {
        MotionMode[MotionMode["MOTION_MODE_GROUNDED"] = 0] = "MOTION_MODE_GROUNDED";
        MotionMode[MotionMode["MOTION_MODE_FLOATING"] = 1] = "MOTION_MODE_FLOATING";
    })(MotionMode = CharacterBody3D.MotionMode || (CharacterBody3D.MotionMode = {}));
    let PlatformOnLeave;
    (function (PlatformOnLeave) {
        PlatformOnLeave[PlatformOnLeave["PLATFORM_ON_LEAVE_ADD_VELOCITY"] = 0] = "PLATFORM_ON_LEAVE_ADD_VELOCITY";
        PlatformOnLeave[PlatformOnLeave["PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY"] = 1] = "PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY";
        PlatformOnLeave[PlatformOnLeave["PLATFORM_ON_LEAVE_DO_NOTHING"] = 2] = "PLATFORM_ON_LEAVE_DO_NOTHING";
    })(PlatformOnLeave = CharacterBody3D.PlatformOnLeave || (CharacterBody3D.PlatformOnLeave = {}));
})(CharacterBody3D || (CharacterBody3D = {}));
export var VisualShaderNode;
(function (VisualShaderNode) {
    let PortType;
    (function (PortType) {
        PortType[PortType["PORT_TYPE_SCALAR"] = 0] = "PORT_TYPE_SCALAR";
        PortType[PortType["PORT_TYPE_SCALAR_INT"] = 1] = "PORT_TYPE_SCALAR_INT";
        PortType[PortType["PORT_TYPE_SCALAR_UINT"] = 2] = "PORT_TYPE_SCALAR_UINT";
        PortType[PortType["PORT_TYPE_VECTOR_2D"] = 3] = "PORT_TYPE_VECTOR_2D";
        PortType[PortType["PORT_TYPE_VECTOR_3D"] = 4] = "PORT_TYPE_VECTOR_3D";
        PortType[PortType["PORT_TYPE_VECTOR_4D"] = 5] = "PORT_TYPE_VECTOR_4D";
        PortType[PortType["PORT_TYPE_BOOLEAN"] = 6] = "PORT_TYPE_BOOLEAN";
        PortType[PortType["PORT_TYPE_TRANSFORM"] = 7] = "PORT_TYPE_TRANSFORM";
        PortType[PortType["PORT_TYPE_SAMPLER"] = 8] = "PORT_TYPE_SAMPLER";
        PortType[PortType["PORT_TYPE_MAX"] = 9] = "PORT_TYPE_MAX";
    })(PortType = VisualShaderNode.PortType || (VisualShaderNode.PortType = {}));
})(VisualShaderNode || (VisualShaderNode = {}));
export var Animation;
(function (Animation) {
    let TrackType;
    (function (TrackType) {
        TrackType[TrackType["TYPE_VALUE"] = 0] = "TYPE_VALUE";
        TrackType[TrackType["TYPE_POSITION_3D"] = 1] = "TYPE_POSITION_3D";
        TrackType[TrackType["TYPE_ROTATION_3D"] = 2] = "TYPE_ROTATION_3D";
        TrackType[TrackType["TYPE_SCALE_3D"] = 3] = "TYPE_SCALE_3D";
        TrackType[TrackType["TYPE_BLEND_SHAPE"] = 4] = "TYPE_BLEND_SHAPE";
        TrackType[TrackType["TYPE_METHOD"] = 5] = "TYPE_METHOD";
        TrackType[TrackType["TYPE_BEZIER"] = 6] = "TYPE_BEZIER";
        TrackType[TrackType["TYPE_AUDIO"] = 7] = "TYPE_AUDIO";
        TrackType[TrackType["TYPE_ANIMATION"] = 8] = "TYPE_ANIMATION";
    })(TrackType = Animation.TrackType || (Animation.TrackType = {}));
    let InterpolationType;
    (function (InterpolationType) {
        InterpolationType[InterpolationType["INTERPOLATION_NEAREST"] = 0] = "INTERPOLATION_NEAREST";
        InterpolationType[InterpolationType["INTERPOLATION_LINEAR"] = 1] = "INTERPOLATION_LINEAR";
        InterpolationType[InterpolationType["INTERPOLATION_CUBIC"] = 2] = "INTERPOLATION_CUBIC";
        InterpolationType[InterpolationType["INTERPOLATION_LINEAR_ANGLE"] = 3] = "INTERPOLATION_LINEAR_ANGLE";
        InterpolationType[InterpolationType["INTERPOLATION_CUBIC_ANGLE"] = 4] = "INTERPOLATION_CUBIC_ANGLE";
    })(InterpolationType = Animation.InterpolationType || (Animation.InterpolationType = {}));
    let UpdateMode;
    (function (UpdateMode) {
        UpdateMode[UpdateMode["UPDATE_CONTINUOUS"] = 0] = "UPDATE_CONTINUOUS";
        UpdateMode[UpdateMode["UPDATE_DISCRETE"] = 1] = "UPDATE_DISCRETE";
        UpdateMode[UpdateMode["UPDATE_CAPTURE"] = 2] = "UPDATE_CAPTURE";
    })(UpdateMode = Animation.UpdateMode || (Animation.UpdateMode = {}));
    let LoopMode;
    (function (LoopMode) {
        LoopMode[LoopMode["LOOP_NONE"] = 0] = "LOOP_NONE";
        LoopMode[LoopMode["LOOP_LINEAR"] = 1] = "LOOP_LINEAR";
        LoopMode[LoopMode["LOOP_PINGPONG"] = 2] = "LOOP_PINGPONG";
    })(LoopMode = Animation.LoopMode || (Animation.LoopMode = {}));
    let LoopedFlag;
    (function (LoopedFlag) {
        LoopedFlag[LoopedFlag["LOOPED_FLAG_NONE"] = 0] = "LOOPED_FLAG_NONE";
        LoopedFlag[LoopedFlag["LOOPED_FLAG_END"] = 1] = "LOOPED_FLAG_END";
        LoopedFlag[LoopedFlag["LOOPED_FLAG_START"] = 2] = "LOOPED_FLAG_START";
    })(LoopedFlag = Animation.LoopedFlag || (Animation.LoopedFlag = {}));
    let FindMode;
    (function (FindMode) {
        FindMode[FindMode["FIND_MODE_NEAREST"] = 0] = "FIND_MODE_NEAREST";
        FindMode[FindMode["FIND_MODE_APPROX"] = 1] = "FIND_MODE_APPROX";
        FindMode[FindMode["FIND_MODE_EXACT"] = 2] = "FIND_MODE_EXACT";
    })(FindMode = Animation.FindMode || (Animation.FindMode = {}));
})(Animation || (Animation = {}));
export var ResourceFormatLoader;
(function (ResourceFormatLoader) {
    let CacheMode;
    (function (CacheMode) {
        CacheMode[CacheMode["CACHE_MODE_IGNORE"] = 0] = "CACHE_MODE_IGNORE";
        CacheMode[CacheMode["CACHE_MODE_REUSE"] = 1] = "CACHE_MODE_REUSE";
        CacheMode[CacheMode["CACHE_MODE_REPLACE"] = 2] = "CACHE_MODE_REPLACE";
        CacheMode[CacheMode["CACHE_MODE_IGNORE_DEEP"] = 3] = "CACHE_MODE_IGNORE_DEEP";
        CacheMode[CacheMode["CACHE_MODE_REPLACE_DEEP"] = 4] = "CACHE_MODE_REPLACE_DEEP";
    })(CacheMode = ResourceFormatLoader.CacheMode || (ResourceFormatLoader.CacheMode = {}));
})(ResourceFormatLoader || (ResourceFormatLoader = {}));
export var CPUParticles3D;
(function (CPUParticles3D) {
    let DrawOrder;
    (function (DrawOrder) {
        DrawOrder[DrawOrder["DRAW_ORDER_INDEX"] = 0] = "DRAW_ORDER_INDEX";
        DrawOrder[DrawOrder["DRAW_ORDER_LIFETIME"] = 1] = "DRAW_ORDER_LIFETIME";
        DrawOrder[DrawOrder["DRAW_ORDER_VIEW_DEPTH"] = 2] = "DRAW_ORDER_VIEW_DEPTH";
    })(DrawOrder = CPUParticles3D.DrawOrder || (CPUParticles3D.DrawOrder = {}));
    let Parameter;
    (function (Parameter) {
        Parameter[Parameter["PARAM_INITIAL_LINEAR_VELOCITY"] = 0] = "PARAM_INITIAL_LINEAR_VELOCITY";
        Parameter[Parameter["PARAM_ANGULAR_VELOCITY"] = 1] = "PARAM_ANGULAR_VELOCITY";
        Parameter[Parameter["PARAM_ORBIT_VELOCITY"] = 2] = "PARAM_ORBIT_VELOCITY";
        Parameter[Parameter["PARAM_LINEAR_ACCEL"] = 3] = "PARAM_LINEAR_ACCEL";
        Parameter[Parameter["PARAM_RADIAL_ACCEL"] = 4] = "PARAM_RADIAL_ACCEL";
        Parameter[Parameter["PARAM_TANGENTIAL_ACCEL"] = 5] = "PARAM_TANGENTIAL_ACCEL";
        Parameter[Parameter["PARAM_DAMPING"] = 6] = "PARAM_DAMPING";
        Parameter[Parameter["PARAM_ANGLE"] = 7] = "PARAM_ANGLE";
        Parameter[Parameter["PARAM_SCALE"] = 8] = "PARAM_SCALE";
        Parameter[Parameter["PARAM_HUE_VARIATION"] = 9] = "PARAM_HUE_VARIATION";
        Parameter[Parameter["PARAM_ANIM_SPEED"] = 10] = "PARAM_ANIM_SPEED";
        Parameter[Parameter["PARAM_ANIM_OFFSET"] = 11] = "PARAM_ANIM_OFFSET";
        Parameter[Parameter["PARAM_MAX"] = 12] = "PARAM_MAX";
    })(Parameter = CPUParticles3D.Parameter || (CPUParticles3D.Parameter = {}));
    let ParticleFlags;
    (function (ParticleFlags) {
        ParticleFlags[ParticleFlags["PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY"] = 0] = "PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY";
        ParticleFlags[ParticleFlags["PARTICLE_FLAG_ROTATE_Y"] = 1] = "PARTICLE_FLAG_ROTATE_Y";
        ParticleFlags[ParticleFlags["PARTICLE_FLAG_DISABLE_Z"] = 2] = "PARTICLE_FLAG_DISABLE_Z";
        ParticleFlags[ParticleFlags["PARTICLE_FLAG_MAX"] = 3] = "PARTICLE_FLAG_MAX";
    })(ParticleFlags = CPUParticles3D.ParticleFlags || (CPUParticles3D.ParticleFlags = {}));
    let EmissionShape;
    (function (EmissionShape) {
        EmissionShape[EmissionShape["EMISSION_SHAPE_POINT"] = 0] = "EMISSION_SHAPE_POINT";
        EmissionShape[EmissionShape["EMISSION_SHAPE_SPHERE"] = 1] = "EMISSION_SHAPE_SPHERE";
        EmissionShape[EmissionShape["EMISSION_SHAPE_SPHERE_SURFACE"] = 2] = "EMISSION_SHAPE_SPHERE_SURFACE";
        EmissionShape[EmissionShape["EMISSION_SHAPE_BOX"] = 3] = "EMISSION_SHAPE_BOX";
        EmissionShape[EmissionShape["EMISSION_SHAPE_POINTS"] = 4] = "EMISSION_SHAPE_POINTS";
        EmissionShape[EmissionShape["EMISSION_SHAPE_DIRECTED_POINTS"] = 5] = "EMISSION_SHAPE_DIRECTED_POINTS";
        EmissionShape[EmissionShape["EMISSION_SHAPE_RING"] = 6] = "EMISSION_SHAPE_RING";
        EmissionShape[EmissionShape["EMISSION_SHAPE_MAX"] = 7] = "EMISSION_SHAPE_MAX";
    })(EmissionShape = CPUParticles3D.EmissionShape || (CPUParticles3D.EmissionShape = {}));
})(CPUParticles3D || (CPUParticles3D = {}));
export var SceneState;
(function (SceneState) {
    let GenEditState;
    (function (GenEditState) {
        GenEditState[GenEditState["GEN_EDIT_STATE_DISABLED"] = 0] = "GEN_EDIT_STATE_DISABLED";
        GenEditState[GenEditState["GEN_EDIT_STATE_INSTANCE"] = 1] = "GEN_EDIT_STATE_INSTANCE";
        GenEditState[GenEditState["GEN_EDIT_STATE_MAIN"] = 2] = "GEN_EDIT_STATE_MAIN";
        GenEditState[GenEditState["GEN_EDIT_STATE_MAIN_INHERITED"] = 3] = "GEN_EDIT_STATE_MAIN_INHERITED";
    })(GenEditState = SceneState.GenEditState || (SceneState.GenEditState = {}));
})(SceneState || (SceneState = {}));
export var VisualShaderNodeVectorOp;
(function (VisualShaderNodeVectorOp) {
    let Operator;
    (function (Operator) {
        Operator[Operator["OP_ADD"] = 0] = "OP_ADD";
        Operator[Operator["OP_SUB"] = 1] = "OP_SUB";
        Operator[Operator["OP_MUL"] = 2] = "OP_MUL";
        Operator[Operator["OP_DIV"] = 3] = "OP_DIV";
        Operator[Operator["OP_MOD"] = 4] = "OP_MOD";
        Operator[Operator["OP_POW"] = 5] = "OP_POW";
        Operator[Operator["OP_MAX"] = 6] = "OP_MAX";
        Operator[Operator["OP_MIN"] = 7] = "OP_MIN";
        Operator[Operator["OP_CROSS"] = 8] = "OP_CROSS";
        Operator[Operator["OP_ATAN2"] = 9] = "OP_ATAN2";
        Operator[Operator["OP_REFLECT"] = 10] = "OP_REFLECT";
        Operator[Operator["OP_STEP"] = 11] = "OP_STEP";
        Operator[Operator["OP_ENUM_SIZE"] = 12] = "OP_ENUM_SIZE";
    })(Operator = VisualShaderNodeVectorOp.Operator || (VisualShaderNodeVectorOp.Operator = {}));
})(VisualShaderNodeVectorOp || (VisualShaderNodeVectorOp = {}));
export var GradientTexture2D;
(function (GradientTexture2D) {
    let Fill;
    (function (Fill) {
        Fill[Fill["FILL_LINEAR"] = 0] = "FILL_LINEAR";
        Fill[Fill["FILL_RADIAL"] = 1] = "FILL_RADIAL";
        Fill[Fill["FILL_SQUARE"] = 2] = "FILL_SQUARE";
    })(Fill = GradientTexture2D.Fill || (GradientTexture2D.Fill = {}));
    let Repeat;
    (function (Repeat) {
        Repeat[Repeat["REPEAT_NONE"] = 0] = "REPEAT_NONE";
        Repeat[Repeat["REPEAT"] = 1] = "REPEAT";
        Repeat[Repeat["REPEAT_MIRROR"] = 2] = "REPEAT_MIRROR";
    })(Repeat = GradientTexture2D.Repeat || (GradientTexture2D.Repeat = {}));
})(GradientTexture2D || (GradientTexture2D = {}));
export var GPUParticles2D;
(function (GPUParticles2D) {
    let DrawOrder;
    (function (DrawOrder) {
        DrawOrder[DrawOrder["DRAW_ORDER_INDEX"] = 0] = "DRAW_ORDER_INDEX";
        DrawOrder[DrawOrder["DRAW_ORDER_LIFETIME"] = 1] = "DRAW_ORDER_LIFETIME";
        DrawOrder[DrawOrder["DRAW_ORDER_REVERSE_LIFETIME"] = 2] = "DRAW_ORDER_REVERSE_LIFETIME";
    })(DrawOrder = GPUParticles2D.DrawOrder || (GPUParticles2D.DrawOrder = {}));
    let EmitFlags;
    (function (EmitFlags) {
        EmitFlags[EmitFlags["EMIT_FLAG_POSITION"] = 1] = "EMIT_FLAG_POSITION";
        EmitFlags[EmitFlags["EMIT_FLAG_ROTATION_SCALE"] = 2] = "EMIT_FLAG_ROTATION_SCALE";
        EmitFlags[EmitFlags["EMIT_FLAG_VELOCITY"] = 4] = "EMIT_FLAG_VELOCITY";
        EmitFlags[EmitFlags["EMIT_FLAG_COLOR"] = 8] = "EMIT_FLAG_COLOR";
        EmitFlags[EmitFlags["EMIT_FLAG_CUSTOM"] = 16] = "EMIT_FLAG_CUSTOM";
    })(EmitFlags = GPUParticles2D.EmitFlags || (GPUParticles2D.EmitFlags = {}));
})(GPUParticles2D || (GPUParticles2D = {}));
export var Theme;
(function (Theme) {
    let DataType;
    (function (DataType) {
        DataType[DataType["DATA_TYPE_COLOR"] = 0] = "DATA_TYPE_COLOR";
        DataType[DataType["DATA_TYPE_CONSTANT"] = 1] = "DATA_TYPE_CONSTANT";
        DataType[DataType["DATA_TYPE_FONT"] = 2] = "DATA_TYPE_FONT";
        DataType[DataType["DATA_TYPE_FONT_SIZE"] = 3] = "DATA_TYPE_FONT_SIZE";
        DataType[DataType["DATA_TYPE_ICON"] = 4] = "DATA_TYPE_ICON";
        DataType[DataType["DATA_TYPE_STYLEBOX"] = 5] = "DATA_TYPE_STYLEBOX";
        DataType[DataType["DATA_TYPE_MAX"] = 6] = "DATA_TYPE_MAX";
    })(DataType = Theme.DataType || (Theme.DataType = {}));
})(Theme || (Theme = {}));
export var AudioEffectSpectrumAnalyzer;
(function (AudioEffectSpectrumAnalyzer) {
    let FFTSize;
    (function (FFTSize) {
        FFTSize[FFTSize["FFT_SIZE_256"] = 0] = "FFT_SIZE_256";
        FFTSize[FFTSize["FFT_SIZE_512"] = 1] = "FFT_SIZE_512";
        FFTSize[FFTSize["FFT_SIZE_1024"] = 2] = "FFT_SIZE_1024";
        FFTSize[FFTSize["FFT_SIZE_2048"] = 3] = "FFT_SIZE_2048";
        FFTSize[FFTSize["FFT_SIZE_4096"] = 4] = "FFT_SIZE_4096";
        FFTSize[FFTSize["FFT_SIZE_MAX"] = 5] = "FFT_SIZE_MAX";
    })(FFTSize = AudioEffectSpectrumAnalyzer.FFTSize || (AudioEffectSpectrumAnalyzer.FFTSize = {}));
})(AudioEffectSpectrumAnalyzer || (AudioEffectSpectrumAnalyzer = {}));
export var VisualShaderNodeFloatParameter;
(function (VisualShaderNodeFloatParameter) {
    let Hint;
    (function (Hint) {
        Hint[Hint["HINT_NONE"] = 0] = "HINT_NONE";
        Hint[Hint["HINT_RANGE"] = 1] = "HINT_RANGE";
        Hint[Hint["HINT_RANGE_STEP"] = 2] = "HINT_RANGE_STEP";
        Hint[Hint["HINT_MAX"] = 3] = "HINT_MAX";
    })(Hint = VisualShaderNodeFloatParameter.Hint || (VisualShaderNodeFloatParameter.Hint = {}));
})(VisualShaderNodeFloatParameter || (VisualShaderNodeFloatParameter = {}));
export var RenderingServer;
(function (RenderingServer) {
    RenderingServer.NO_INDEX_ARRAY = -1;
    RenderingServer.ARRAY_WEIGHTS_SIZE = 4;
    RenderingServer.CANVAS_ITEM_Z_MIN = -4096;
    RenderingServer.CANVAS_ITEM_Z_MAX = 4096;
    RenderingServer.MAX_GLOW_LEVELS = 7;
    RenderingServer.MAX_CURSORS = 8;
    RenderingServer.MAX_2D_DIRECTIONAL_LIGHTS = 8;
    RenderingServer.MAX_MESH_SURFACES = 256;
    RenderingServer.MATERIAL_RENDER_PRIORITY_MIN = -128;
    RenderingServer.MATERIAL_RENDER_PRIORITY_MAX = 127;
    RenderingServer.ARRAY_CUSTOM_COUNT = 4;
    RenderingServer.PARTICLES_EMIT_FLAG_POSITION = 1;
    RenderingServer.PARTICLES_EMIT_FLAG_ROTATION_SCALE = 2;
    RenderingServer.PARTICLES_EMIT_FLAG_VELOCITY = 4;
    RenderingServer.PARTICLES_EMIT_FLAG_COLOR = 8;
    RenderingServer.PARTICLES_EMIT_FLAG_CUSTOM = 16;
    let TextureType;
    (function (TextureType) {
        TextureType[TextureType["TEXTURE_TYPE_2D"] = 0] = "TEXTURE_TYPE_2D";
        TextureType[TextureType["TEXTURE_TYPE_LAYERED"] = 1] = "TEXTURE_TYPE_LAYERED";
        TextureType[TextureType["TEXTURE_TYPE_3D"] = 2] = "TEXTURE_TYPE_3D";
    })(TextureType = RenderingServer.TextureType || (RenderingServer.TextureType = {}));
    let TextureLayeredType;
    (function (TextureLayeredType) {
        TextureLayeredType[TextureLayeredType["TEXTURE_LAYERED_2D_ARRAY"] = 0] = "TEXTURE_LAYERED_2D_ARRAY";
        TextureLayeredType[TextureLayeredType["TEXTURE_LAYERED_CUBEMAP"] = 1] = "TEXTURE_LAYERED_CUBEMAP";
        TextureLayeredType[TextureLayeredType["TEXTURE_LAYERED_CUBEMAP_ARRAY"] = 2] = "TEXTURE_LAYERED_CUBEMAP_ARRAY";
    })(TextureLayeredType = RenderingServer.TextureLayeredType || (RenderingServer.TextureLayeredType = {}));
    let CubeMapLayer;
    (function (CubeMapLayer) {
        CubeMapLayer[CubeMapLayer["CUBEMAP_LAYER_LEFT"] = 0] = "CUBEMAP_LAYER_LEFT";
        CubeMapLayer[CubeMapLayer["CUBEMAP_LAYER_RIGHT"] = 1] = "CUBEMAP_LAYER_RIGHT";
        CubeMapLayer[CubeMapLayer["CUBEMAP_LAYER_BOTTOM"] = 2] = "CUBEMAP_LAYER_BOTTOM";
        CubeMapLayer[CubeMapLayer["CUBEMAP_LAYER_TOP"] = 3] = "CUBEMAP_LAYER_TOP";
        CubeMapLayer[CubeMapLayer["CUBEMAP_LAYER_FRONT"] = 4] = "CUBEMAP_LAYER_FRONT";
        CubeMapLayer[CubeMapLayer["CUBEMAP_LAYER_BACK"] = 5] = "CUBEMAP_LAYER_BACK";
    })(CubeMapLayer = RenderingServer.CubeMapLayer || (RenderingServer.CubeMapLayer = {}));
    let ShaderMode;
    (function (ShaderMode) {
        ShaderMode[ShaderMode["SHADER_SPATIAL"] = 0] = "SHADER_SPATIAL";
        ShaderMode[ShaderMode["SHADER_CANVAS_ITEM"] = 1] = "SHADER_CANVAS_ITEM";
        ShaderMode[ShaderMode["SHADER_PARTICLES"] = 2] = "SHADER_PARTICLES";
        ShaderMode[ShaderMode["SHADER_SKY"] = 3] = "SHADER_SKY";
        ShaderMode[ShaderMode["SHADER_FOG"] = 4] = "SHADER_FOG";
        ShaderMode[ShaderMode["SHADER_MAX"] = 5] = "SHADER_MAX";
    })(ShaderMode = RenderingServer.ShaderMode || (RenderingServer.ShaderMode = {}));
    let ArrayType;
    (function (ArrayType) {
        ArrayType[ArrayType["ARRAY_VERTEX"] = 0] = "ARRAY_VERTEX";
        ArrayType[ArrayType["ARRAY_NORMAL"] = 1] = "ARRAY_NORMAL";
        ArrayType[ArrayType["ARRAY_TANGENT"] = 2] = "ARRAY_TANGENT";
        ArrayType[ArrayType["ARRAY_COLOR"] = 3] = "ARRAY_COLOR";
        ArrayType[ArrayType["ARRAY_TEX_UV"] = 4] = "ARRAY_TEX_UV";
        ArrayType[ArrayType["ARRAY_TEX_UV2"] = 5] = "ARRAY_TEX_UV2";
        ArrayType[ArrayType["ARRAY_CUSTOM0"] = 6] = "ARRAY_CUSTOM0";
        ArrayType[ArrayType["ARRAY_CUSTOM1"] = 7] = "ARRAY_CUSTOM1";
        ArrayType[ArrayType["ARRAY_CUSTOM2"] = 8] = "ARRAY_CUSTOM2";
        ArrayType[ArrayType["ARRAY_CUSTOM3"] = 9] = "ARRAY_CUSTOM3";
        ArrayType[ArrayType["ARRAY_BONES"] = 10] = "ARRAY_BONES";
        ArrayType[ArrayType["ARRAY_WEIGHTS"] = 11] = "ARRAY_WEIGHTS";
        ArrayType[ArrayType["ARRAY_INDEX"] = 12] = "ARRAY_INDEX";
        ArrayType[ArrayType["ARRAY_MAX"] = 13] = "ARRAY_MAX";
    })(ArrayType = RenderingServer.ArrayType || (RenderingServer.ArrayType = {}));
    let ArrayCustomFormat;
    (function (ArrayCustomFormat) {
        ArrayCustomFormat[ArrayCustomFormat["ARRAY_CUSTOM_RGBA8_UNORM"] = 0] = "ARRAY_CUSTOM_RGBA8_UNORM";
        ArrayCustomFormat[ArrayCustomFormat["ARRAY_CUSTOM_RGBA8_SNORM"] = 1] = "ARRAY_CUSTOM_RGBA8_SNORM";
        ArrayCustomFormat[ArrayCustomFormat["ARRAY_CUSTOM_RG_HALF"] = 2] = "ARRAY_CUSTOM_RG_HALF";
        ArrayCustomFormat[ArrayCustomFormat["ARRAY_CUSTOM_RGBA_HALF"] = 3] = "ARRAY_CUSTOM_RGBA_HALF";
        ArrayCustomFormat[ArrayCustomFormat["ARRAY_CUSTOM_R_FLOAT"] = 4] = "ARRAY_CUSTOM_R_FLOAT";
        ArrayCustomFormat[ArrayCustomFormat["ARRAY_CUSTOM_RG_FLOAT"] = 5] = "ARRAY_CUSTOM_RG_FLOAT";
        ArrayCustomFormat[ArrayCustomFormat["ARRAY_CUSTOM_RGB_FLOAT"] = 6] = "ARRAY_CUSTOM_RGB_FLOAT";
        ArrayCustomFormat[ArrayCustomFormat["ARRAY_CUSTOM_RGBA_FLOAT"] = 7] = "ARRAY_CUSTOM_RGBA_FLOAT";
        ArrayCustomFormat[ArrayCustomFormat["ARRAY_CUSTOM_MAX"] = 8] = "ARRAY_CUSTOM_MAX";
    })(ArrayCustomFormat = RenderingServer.ArrayCustomFormat || (RenderingServer.ArrayCustomFormat = {}));
    let ArrayFormat;
    (function (ArrayFormat) {
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_VERTEX"] = 1] = "ARRAY_FORMAT_VERTEX";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_NORMAL"] = 2] = "ARRAY_FORMAT_NORMAL";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_TANGENT"] = 4] = "ARRAY_FORMAT_TANGENT";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_COLOR"] = 8] = "ARRAY_FORMAT_COLOR";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_TEX_UV"] = 16] = "ARRAY_FORMAT_TEX_UV";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_TEX_UV2"] = 32] = "ARRAY_FORMAT_TEX_UV2";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM0"] = 64] = "ARRAY_FORMAT_CUSTOM0";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM1"] = 128] = "ARRAY_FORMAT_CUSTOM1";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM2"] = 256] = "ARRAY_FORMAT_CUSTOM2";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM3"] = 512] = "ARRAY_FORMAT_CUSTOM3";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_BONES"] = 1024] = "ARRAY_FORMAT_BONES";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_WEIGHTS"] = 2048] = "ARRAY_FORMAT_WEIGHTS";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_INDEX"] = 4096] = "ARRAY_FORMAT_INDEX";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_BLEND_SHAPE_MASK"] = 7] = "ARRAY_FORMAT_BLEND_SHAPE_MASK";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM_BASE"] = 13] = "ARRAY_FORMAT_CUSTOM_BASE";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM_BITS"] = 3] = "ARRAY_FORMAT_CUSTOM_BITS";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM0_SHIFT"] = 13] = "ARRAY_FORMAT_CUSTOM0_SHIFT";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM1_SHIFT"] = 16] = "ARRAY_FORMAT_CUSTOM1_SHIFT";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM2_SHIFT"] = 19] = "ARRAY_FORMAT_CUSTOM2_SHIFT";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM3_SHIFT"] = 22] = "ARRAY_FORMAT_CUSTOM3_SHIFT";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM_MASK"] = 7] = "ARRAY_FORMAT_CUSTOM_MASK";
        ArrayFormat[ArrayFormat["ARRAY_COMPRESS_FLAGS_BASE"] = 25] = "ARRAY_COMPRESS_FLAGS_BASE";
        ArrayFormat[ArrayFormat["ARRAY_FLAG_USE_2D_VERTICES"] = 33554432] = "ARRAY_FLAG_USE_2D_VERTICES";
        ArrayFormat[ArrayFormat["ARRAY_FLAG_USE_DYNAMIC_UPDATE"] = 67108864] = "ARRAY_FLAG_USE_DYNAMIC_UPDATE";
        ArrayFormat[ArrayFormat["ARRAY_FLAG_USE_8_BONE_WEIGHTS"] = 134217728] = "ARRAY_FLAG_USE_8_BONE_WEIGHTS";
        ArrayFormat[ArrayFormat["ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY"] = 268435456] = "ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY";
        ArrayFormat[ArrayFormat["ARRAY_FLAG_COMPRESS_ATTRIBUTES"] = 536870912] = "ARRAY_FLAG_COMPRESS_ATTRIBUTES";
        ArrayFormat[ArrayFormat["ARRAY_FLAG_FORMAT_VERSION_BASE"] = 35] = "ARRAY_FLAG_FORMAT_VERSION_BASE";
        ArrayFormat[ArrayFormat["ARRAY_FLAG_FORMAT_VERSION_SHIFT"] = 35] = "ARRAY_FLAG_FORMAT_VERSION_SHIFT";
        ArrayFormat[ArrayFormat["ARRAY_FLAG_FORMAT_VERSION_1"] = 0] = "ARRAY_FLAG_FORMAT_VERSION_1";
        ArrayFormat[ArrayFormat["ARRAY_FLAG_FORMAT_VERSION_2"] = 34359738368] = "ARRAY_FLAG_FORMAT_VERSION_2";
        ArrayFormat[ArrayFormat["ARRAY_FLAG_FORMAT_CURRENT_VERSION"] = 34359738368] = "ARRAY_FLAG_FORMAT_CURRENT_VERSION";
        ArrayFormat[ArrayFormat["ARRAY_FLAG_FORMAT_VERSION_MASK"] = 255] = "ARRAY_FLAG_FORMAT_VERSION_MASK";
    })(ArrayFormat = RenderingServer.ArrayFormat || (RenderingServer.ArrayFormat = {}));
    let PrimitiveType;
    (function (PrimitiveType) {
        PrimitiveType[PrimitiveType["PRIMITIVE_POINTS"] = 0] = "PRIMITIVE_POINTS";
        PrimitiveType[PrimitiveType["PRIMITIVE_LINES"] = 1] = "PRIMITIVE_LINES";
        PrimitiveType[PrimitiveType["PRIMITIVE_LINE_STRIP"] = 2] = "PRIMITIVE_LINE_STRIP";
        PrimitiveType[PrimitiveType["PRIMITIVE_TRIANGLES"] = 3] = "PRIMITIVE_TRIANGLES";
        PrimitiveType[PrimitiveType["PRIMITIVE_TRIANGLE_STRIP"] = 4] = "PRIMITIVE_TRIANGLE_STRIP";
        PrimitiveType[PrimitiveType["PRIMITIVE_MAX"] = 5] = "PRIMITIVE_MAX";
    })(PrimitiveType = RenderingServer.PrimitiveType || (RenderingServer.PrimitiveType = {}));
    let BlendShapeMode;
    (function (BlendShapeMode) {
        BlendShapeMode[BlendShapeMode["BLEND_SHAPE_MODE_NORMALIZED"] = 0] = "BLEND_SHAPE_MODE_NORMALIZED";
        BlendShapeMode[BlendShapeMode["BLEND_SHAPE_MODE_RELATIVE"] = 1] = "BLEND_SHAPE_MODE_RELATIVE";
    })(BlendShapeMode = RenderingServer.BlendShapeMode || (RenderingServer.BlendShapeMode = {}));
    let MultimeshTransformFormat;
    (function (MultimeshTransformFormat) {
        MultimeshTransformFormat[MultimeshTransformFormat["MULTIMESH_TRANSFORM_2D"] = 0] = "MULTIMESH_TRANSFORM_2D";
        MultimeshTransformFormat[MultimeshTransformFormat["MULTIMESH_TRANSFORM_3D"] = 1] = "MULTIMESH_TRANSFORM_3D";
    })(MultimeshTransformFormat = RenderingServer.MultimeshTransformFormat || (RenderingServer.MultimeshTransformFormat = {}));
    let MultimeshPhysicsInterpolationQuality;
    (function (MultimeshPhysicsInterpolationQuality) {
        MultimeshPhysicsInterpolationQuality[MultimeshPhysicsInterpolationQuality["MULTIMESH_INTERP_QUALITY_FAST"] = 0] = "MULTIMESH_INTERP_QUALITY_FAST";
        MultimeshPhysicsInterpolationQuality[MultimeshPhysicsInterpolationQuality["MULTIMESH_INTERP_QUALITY_HIGH"] = 1] = "MULTIMESH_INTERP_QUALITY_HIGH";
    })(MultimeshPhysicsInterpolationQuality = RenderingServer.MultimeshPhysicsInterpolationQuality || (RenderingServer.MultimeshPhysicsInterpolationQuality = {}));
    let LightProjectorFilter;
    (function (LightProjectorFilter) {
        LightProjectorFilter[LightProjectorFilter["LIGHT_PROJECTOR_FILTER_NEAREST"] = 0] = "LIGHT_PROJECTOR_FILTER_NEAREST";
        LightProjectorFilter[LightProjectorFilter["LIGHT_PROJECTOR_FILTER_LINEAR"] = 1] = "LIGHT_PROJECTOR_FILTER_LINEAR";
        LightProjectorFilter[LightProjectorFilter["LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS"] = 2] = "LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS";
        LightProjectorFilter[LightProjectorFilter["LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS"] = 3] = "LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS";
        LightProjectorFilter[LightProjectorFilter["LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS_ANISOTROPIC"] = 4] = "LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS_ANISOTROPIC";
        LightProjectorFilter[LightProjectorFilter["LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS_ANISOTROPIC"] = 5] = "LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS_ANISOTROPIC";
    })(LightProjectorFilter = RenderingServer.LightProjectorFilter || (RenderingServer.LightProjectorFilter = {}));
    let LightType;
    (function (LightType) {
        LightType[LightType["LIGHT_DIRECTIONAL"] = 0] = "LIGHT_DIRECTIONAL";
        LightType[LightType["LIGHT_OMNI"] = 1] = "LIGHT_OMNI";
        LightType[LightType["LIGHT_SPOT"] = 2] = "LIGHT_SPOT";
    })(LightType = RenderingServer.LightType || (RenderingServer.LightType = {}));
    let LightParam;
    (function (LightParam) {
        LightParam[LightParam["LIGHT_PARAM_ENERGY"] = 0] = "LIGHT_PARAM_ENERGY";
        LightParam[LightParam["LIGHT_PARAM_INDIRECT_ENERGY"] = 1] = "LIGHT_PARAM_INDIRECT_ENERGY";
        LightParam[LightParam["LIGHT_PARAM_VOLUMETRIC_FOG_ENERGY"] = 2] = "LIGHT_PARAM_VOLUMETRIC_FOG_ENERGY";
        LightParam[LightParam["LIGHT_PARAM_SPECULAR"] = 3] = "LIGHT_PARAM_SPECULAR";
        LightParam[LightParam["LIGHT_PARAM_RANGE"] = 4] = "LIGHT_PARAM_RANGE";
        LightParam[LightParam["LIGHT_PARAM_SIZE"] = 5] = "LIGHT_PARAM_SIZE";
        LightParam[LightParam["LIGHT_PARAM_ATTENUATION"] = 6] = "LIGHT_PARAM_ATTENUATION";
        LightParam[LightParam["LIGHT_PARAM_SPOT_ANGLE"] = 7] = "LIGHT_PARAM_SPOT_ANGLE";
        LightParam[LightParam["LIGHT_PARAM_SPOT_ATTENUATION"] = 8] = "LIGHT_PARAM_SPOT_ATTENUATION";
        LightParam[LightParam["LIGHT_PARAM_SHADOW_MAX_DISTANCE"] = 9] = "LIGHT_PARAM_SHADOW_MAX_DISTANCE";
        LightParam[LightParam["LIGHT_PARAM_SHADOW_SPLIT_1_OFFSET"] = 10] = "LIGHT_PARAM_SHADOW_SPLIT_1_OFFSET";
        LightParam[LightParam["LIGHT_PARAM_SHADOW_SPLIT_2_OFFSET"] = 11] = "LIGHT_PARAM_SHADOW_SPLIT_2_OFFSET";
        LightParam[LightParam["LIGHT_PARAM_SHADOW_SPLIT_3_OFFSET"] = 12] = "LIGHT_PARAM_SHADOW_SPLIT_3_OFFSET";
        LightParam[LightParam["LIGHT_PARAM_SHADOW_FADE_START"] = 13] = "LIGHT_PARAM_SHADOW_FADE_START";
        LightParam[LightParam["LIGHT_PARAM_SHADOW_NORMAL_BIAS"] = 14] = "LIGHT_PARAM_SHADOW_NORMAL_BIAS";
        LightParam[LightParam["LIGHT_PARAM_SHADOW_BIAS"] = 15] = "LIGHT_PARAM_SHADOW_BIAS";
        LightParam[LightParam["LIGHT_PARAM_SHADOW_PANCAKE_SIZE"] = 16] = "LIGHT_PARAM_SHADOW_PANCAKE_SIZE";
        LightParam[LightParam["LIGHT_PARAM_SHADOW_OPACITY"] = 17] = "LIGHT_PARAM_SHADOW_OPACITY";
        LightParam[LightParam["LIGHT_PARAM_SHADOW_BLUR"] = 18] = "LIGHT_PARAM_SHADOW_BLUR";
        LightParam[LightParam["LIGHT_PARAM_TRANSMITTANCE_BIAS"] = 19] = "LIGHT_PARAM_TRANSMITTANCE_BIAS";
        LightParam[LightParam["LIGHT_PARAM_INTENSITY"] = 20] = "LIGHT_PARAM_INTENSITY";
        LightParam[LightParam["LIGHT_PARAM_MAX"] = 21] = "LIGHT_PARAM_MAX";
    })(LightParam = RenderingServer.LightParam || (RenderingServer.LightParam = {}));
    let LightBakeMode;
    (function (LightBakeMode) {
        LightBakeMode[LightBakeMode["LIGHT_BAKE_DISABLED"] = 0] = "LIGHT_BAKE_DISABLED";
        LightBakeMode[LightBakeMode["LIGHT_BAKE_STATIC"] = 1] = "LIGHT_BAKE_STATIC";
        LightBakeMode[LightBakeMode["LIGHT_BAKE_DYNAMIC"] = 2] = "LIGHT_BAKE_DYNAMIC";
    })(LightBakeMode = RenderingServer.LightBakeMode || (RenderingServer.LightBakeMode = {}));
    let LightOmniShadowMode;
    (function (LightOmniShadowMode) {
        LightOmniShadowMode[LightOmniShadowMode["LIGHT_OMNI_SHADOW_DUAL_PARABOLOID"] = 0] = "LIGHT_OMNI_SHADOW_DUAL_PARABOLOID";
        LightOmniShadowMode[LightOmniShadowMode["LIGHT_OMNI_SHADOW_CUBE"] = 1] = "LIGHT_OMNI_SHADOW_CUBE";
    })(LightOmniShadowMode = RenderingServer.LightOmniShadowMode || (RenderingServer.LightOmniShadowMode = {}));
    let LightDirectionalShadowMode;
    (function (LightDirectionalShadowMode) {
        LightDirectionalShadowMode[LightDirectionalShadowMode["LIGHT_DIRECTIONAL_SHADOW_ORTHOGONAL"] = 0] = "LIGHT_DIRECTIONAL_SHADOW_ORTHOGONAL";
        LightDirectionalShadowMode[LightDirectionalShadowMode["LIGHT_DIRECTIONAL_SHADOW_PARALLEL_2_SPLITS"] = 1] = "LIGHT_DIRECTIONAL_SHADOW_PARALLEL_2_SPLITS";
        LightDirectionalShadowMode[LightDirectionalShadowMode["LIGHT_DIRECTIONAL_SHADOW_PARALLEL_4_SPLITS"] = 2] = "LIGHT_DIRECTIONAL_SHADOW_PARALLEL_4_SPLITS";
    })(LightDirectionalShadowMode = RenderingServer.LightDirectionalShadowMode || (RenderingServer.LightDirectionalShadowMode = {}));
    let LightDirectionalSkyMode;
    (function (LightDirectionalSkyMode) {
        LightDirectionalSkyMode[LightDirectionalSkyMode["LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_AND_SKY"] = 0] = "LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_AND_SKY";
        LightDirectionalSkyMode[LightDirectionalSkyMode["LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_ONLY"] = 1] = "LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_ONLY";
        LightDirectionalSkyMode[LightDirectionalSkyMode["LIGHT_DIRECTIONAL_SKY_MODE_SKY_ONLY"] = 2] = "LIGHT_DIRECTIONAL_SKY_MODE_SKY_ONLY";
    })(LightDirectionalSkyMode = RenderingServer.LightDirectionalSkyMode || (RenderingServer.LightDirectionalSkyMode = {}));
    let ShadowQuality;
    (function (ShadowQuality) {
        ShadowQuality[ShadowQuality["SHADOW_QUALITY_HARD"] = 0] = "SHADOW_QUALITY_HARD";
        ShadowQuality[ShadowQuality["SHADOW_QUALITY_SOFT_VERY_LOW"] = 1] = "SHADOW_QUALITY_SOFT_VERY_LOW";
        ShadowQuality[ShadowQuality["SHADOW_QUALITY_SOFT_LOW"] = 2] = "SHADOW_QUALITY_SOFT_LOW";
        ShadowQuality[ShadowQuality["SHADOW_QUALITY_SOFT_MEDIUM"] = 3] = "SHADOW_QUALITY_SOFT_MEDIUM";
        ShadowQuality[ShadowQuality["SHADOW_QUALITY_SOFT_HIGH"] = 4] = "SHADOW_QUALITY_SOFT_HIGH";
        ShadowQuality[ShadowQuality["SHADOW_QUALITY_SOFT_ULTRA"] = 5] = "SHADOW_QUALITY_SOFT_ULTRA";
        ShadowQuality[ShadowQuality["SHADOW_QUALITY_MAX"] = 6] = "SHADOW_QUALITY_MAX";
    })(ShadowQuality = RenderingServer.ShadowQuality || (RenderingServer.ShadowQuality = {}));
    let ReflectionProbeUpdateMode;
    (function (ReflectionProbeUpdateMode) {
        ReflectionProbeUpdateMode[ReflectionProbeUpdateMode["REFLECTION_PROBE_UPDATE_ONCE"] = 0] = "REFLECTION_PROBE_UPDATE_ONCE";
        ReflectionProbeUpdateMode[ReflectionProbeUpdateMode["REFLECTION_PROBE_UPDATE_ALWAYS"] = 1] = "REFLECTION_PROBE_UPDATE_ALWAYS";
    })(ReflectionProbeUpdateMode = RenderingServer.ReflectionProbeUpdateMode || (RenderingServer.ReflectionProbeUpdateMode = {}));
    let ReflectionProbeAmbientMode;
    (function (ReflectionProbeAmbientMode) {
        ReflectionProbeAmbientMode[ReflectionProbeAmbientMode["REFLECTION_PROBE_AMBIENT_DISABLED"] = 0] = "REFLECTION_PROBE_AMBIENT_DISABLED";
        ReflectionProbeAmbientMode[ReflectionProbeAmbientMode["REFLECTION_PROBE_AMBIENT_ENVIRONMENT"] = 1] = "REFLECTION_PROBE_AMBIENT_ENVIRONMENT";
        ReflectionProbeAmbientMode[ReflectionProbeAmbientMode["REFLECTION_PROBE_AMBIENT_COLOR"] = 2] = "REFLECTION_PROBE_AMBIENT_COLOR";
    })(ReflectionProbeAmbientMode = RenderingServer.ReflectionProbeAmbientMode || (RenderingServer.ReflectionProbeAmbientMode = {}));
    let DecalTexture;
    (function (DecalTexture) {
        DecalTexture[DecalTexture["DECAL_TEXTURE_ALBEDO"] = 0] = "DECAL_TEXTURE_ALBEDO";
        DecalTexture[DecalTexture["DECAL_TEXTURE_NORMAL"] = 1] = "DECAL_TEXTURE_NORMAL";
        DecalTexture[DecalTexture["DECAL_TEXTURE_ORM"] = 2] = "DECAL_TEXTURE_ORM";
        DecalTexture[DecalTexture["DECAL_TEXTURE_EMISSION"] = 3] = "DECAL_TEXTURE_EMISSION";
        DecalTexture[DecalTexture["DECAL_TEXTURE_MAX"] = 4] = "DECAL_TEXTURE_MAX";
    })(DecalTexture = RenderingServer.DecalTexture || (RenderingServer.DecalTexture = {}));
    let DecalFilter;
    (function (DecalFilter) {
        DecalFilter[DecalFilter["DECAL_FILTER_NEAREST"] = 0] = "DECAL_FILTER_NEAREST";
        DecalFilter[DecalFilter["DECAL_FILTER_LINEAR"] = 1] = "DECAL_FILTER_LINEAR";
        DecalFilter[DecalFilter["DECAL_FILTER_NEAREST_MIPMAPS"] = 2] = "DECAL_FILTER_NEAREST_MIPMAPS";
        DecalFilter[DecalFilter["DECAL_FILTER_LINEAR_MIPMAPS"] = 3] = "DECAL_FILTER_LINEAR_MIPMAPS";
        DecalFilter[DecalFilter["DECAL_FILTER_NEAREST_MIPMAPS_ANISOTROPIC"] = 4] = "DECAL_FILTER_NEAREST_MIPMAPS_ANISOTROPIC";
        DecalFilter[DecalFilter["DECAL_FILTER_LINEAR_MIPMAPS_ANISOTROPIC"] = 5] = "DECAL_FILTER_LINEAR_MIPMAPS_ANISOTROPIC";
    })(DecalFilter = RenderingServer.DecalFilter || (RenderingServer.DecalFilter = {}));
    let VoxelGIQuality;
    (function (VoxelGIQuality) {
        VoxelGIQuality[VoxelGIQuality["VOXEL_GI_QUALITY_LOW"] = 0] = "VOXEL_GI_QUALITY_LOW";
        VoxelGIQuality[VoxelGIQuality["VOXEL_GI_QUALITY_HIGH"] = 1] = "VOXEL_GI_QUALITY_HIGH";
    })(VoxelGIQuality = RenderingServer.VoxelGIQuality || (RenderingServer.VoxelGIQuality = {}));
    let ParticlesMode;
    (function (ParticlesMode) {
        ParticlesMode[ParticlesMode["PARTICLES_MODE_2D"] = 0] = "PARTICLES_MODE_2D";
        ParticlesMode[ParticlesMode["PARTICLES_MODE_3D"] = 1] = "PARTICLES_MODE_3D";
    })(ParticlesMode = RenderingServer.ParticlesMode || (RenderingServer.ParticlesMode = {}));
    let ParticlesTransformAlign;
    (function (ParticlesTransformAlign) {
        ParticlesTransformAlign[ParticlesTransformAlign["PARTICLES_TRANSFORM_ALIGN_DISABLED"] = 0] = "PARTICLES_TRANSFORM_ALIGN_DISABLED";
        ParticlesTransformAlign[ParticlesTransformAlign["PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD"] = 1] = "PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD";
        ParticlesTransformAlign[ParticlesTransformAlign["PARTICLES_TRANSFORM_ALIGN_Y_TO_VELOCITY"] = 2] = "PARTICLES_TRANSFORM_ALIGN_Y_TO_VELOCITY";
        ParticlesTransformAlign[ParticlesTransformAlign["PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY"] = 3] = "PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY";
    })(ParticlesTransformAlign = RenderingServer.ParticlesTransformAlign || (RenderingServer.ParticlesTransformAlign = {}));
    let ParticlesDrawOrder;
    (function (ParticlesDrawOrder) {
        ParticlesDrawOrder[ParticlesDrawOrder["PARTICLES_DRAW_ORDER_INDEX"] = 0] = "PARTICLES_DRAW_ORDER_INDEX";
        ParticlesDrawOrder[ParticlesDrawOrder["PARTICLES_DRAW_ORDER_LIFETIME"] = 1] = "PARTICLES_DRAW_ORDER_LIFETIME";
        ParticlesDrawOrder[ParticlesDrawOrder["PARTICLES_DRAW_ORDER_REVERSE_LIFETIME"] = 2] = "PARTICLES_DRAW_ORDER_REVERSE_LIFETIME";
        ParticlesDrawOrder[ParticlesDrawOrder["PARTICLES_DRAW_ORDER_VIEW_DEPTH"] = 3] = "PARTICLES_DRAW_ORDER_VIEW_DEPTH";
    })(ParticlesDrawOrder = RenderingServer.ParticlesDrawOrder || (RenderingServer.ParticlesDrawOrder = {}));
    let ParticlesCollisionType;
    (function (ParticlesCollisionType) {
        ParticlesCollisionType[ParticlesCollisionType["PARTICLES_COLLISION_TYPE_SPHERE_ATTRACT"] = 0] = "PARTICLES_COLLISION_TYPE_SPHERE_ATTRACT";
        ParticlesCollisionType[ParticlesCollisionType["PARTICLES_COLLISION_TYPE_BOX_ATTRACT"] = 1] = "PARTICLES_COLLISION_TYPE_BOX_ATTRACT";
        ParticlesCollisionType[ParticlesCollisionType["PARTICLES_COLLISION_TYPE_VECTOR_FIELD_ATTRACT"] = 2] = "PARTICLES_COLLISION_TYPE_VECTOR_FIELD_ATTRACT";
        ParticlesCollisionType[ParticlesCollisionType["PARTICLES_COLLISION_TYPE_SPHERE_COLLIDE"] = 3] = "PARTICLES_COLLISION_TYPE_SPHERE_COLLIDE";
        ParticlesCollisionType[ParticlesCollisionType["PARTICLES_COLLISION_TYPE_BOX_COLLIDE"] = 4] = "PARTICLES_COLLISION_TYPE_BOX_COLLIDE";
        ParticlesCollisionType[ParticlesCollisionType["PARTICLES_COLLISION_TYPE_SDF_COLLIDE"] = 5] = "PARTICLES_COLLISION_TYPE_SDF_COLLIDE";
        ParticlesCollisionType[ParticlesCollisionType["PARTICLES_COLLISION_TYPE_HEIGHTFIELD_COLLIDE"] = 6] = "PARTICLES_COLLISION_TYPE_HEIGHTFIELD_COLLIDE";
    })(ParticlesCollisionType = RenderingServer.ParticlesCollisionType || (RenderingServer.ParticlesCollisionType = {}));
    let ParticlesCollisionHeightfieldResolution;
    (function (ParticlesCollisionHeightfieldResolution) {
        ParticlesCollisionHeightfieldResolution[ParticlesCollisionHeightfieldResolution["PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_256"] = 0] = "PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_256";
        ParticlesCollisionHeightfieldResolution[ParticlesCollisionHeightfieldResolution["PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_512"] = 1] = "PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_512";
        ParticlesCollisionHeightfieldResolution[ParticlesCollisionHeightfieldResolution["PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_1024"] = 2] = "PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_1024";
        ParticlesCollisionHeightfieldResolution[ParticlesCollisionHeightfieldResolution["PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_2048"] = 3] = "PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_2048";
        ParticlesCollisionHeightfieldResolution[ParticlesCollisionHeightfieldResolution["PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_4096"] = 4] = "PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_4096";
        ParticlesCollisionHeightfieldResolution[ParticlesCollisionHeightfieldResolution["PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_8192"] = 5] = "PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_8192";
        ParticlesCollisionHeightfieldResolution[ParticlesCollisionHeightfieldResolution["PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_MAX"] = 6] = "PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_MAX";
    })(ParticlesCollisionHeightfieldResolution = RenderingServer.ParticlesCollisionHeightfieldResolution || (RenderingServer.ParticlesCollisionHeightfieldResolution = {}));
    let FogVolumeShape;
    (function (FogVolumeShape) {
        FogVolumeShape[FogVolumeShape["FOG_VOLUME_SHAPE_ELLIPSOID"] = 0] = "FOG_VOLUME_SHAPE_ELLIPSOID";
        FogVolumeShape[FogVolumeShape["FOG_VOLUME_SHAPE_CONE"] = 1] = "FOG_VOLUME_SHAPE_CONE";
        FogVolumeShape[FogVolumeShape["FOG_VOLUME_SHAPE_CYLINDER"] = 2] = "FOG_VOLUME_SHAPE_CYLINDER";
        FogVolumeShape[FogVolumeShape["FOG_VOLUME_SHAPE_BOX"] = 3] = "FOG_VOLUME_SHAPE_BOX";
        FogVolumeShape[FogVolumeShape["FOG_VOLUME_SHAPE_WORLD"] = 4] = "FOG_VOLUME_SHAPE_WORLD";
        FogVolumeShape[FogVolumeShape["FOG_VOLUME_SHAPE_MAX"] = 5] = "FOG_VOLUME_SHAPE_MAX";
    })(FogVolumeShape = RenderingServer.FogVolumeShape || (RenderingServer.FogVolumeShape = {}));
    let ViewportScaling3DMode;
    (function (ViewportScaling3DMode) {
        ViewportScaling3DMode[ViewportScaling3DMode["VIEWPORT_SCALING_3D_MODE_BILINEAR"] = 0] = "VIEWPORT_SCALING_3D_MODE_BILINEAR";
        ViewportScaling3DMode[ViewportScaling3DMode["VIEWPORT_SCALING_3D_MODE_FSR"] = 1] = "VIEWPORT_SCALING_3D_MODE_FSR";
        ViewportScaling3DMode[ViewportScaling3DMode["VIEWPORT_SCALING_3D_MODE_FSR2"] = 2] = "VIEWPORT_SCALING_3D_MODE_FSR2";
        ViewportScaling3DMode[ViewportScaling3DMode["VIEWPORT_SCALING_3D_MODE_MAX"] = 3] = "VIEWPORT_SCALING_3D_MODE_MAX";
    })(ViewportScaling3DMode = RenderingServer.ViewportScaling3DMode || (RenderingServer.ViewportScaling3DMode = {}));
    let ViewportUpdateMode;
    (function (ViewportUpdateMode) {
        ViewportUpdateMode[ViewportUpdateMode["VIEWPORT_UPDATE_DISABLED"] = 0] = "VIEWPORT_UPDATE_DISABLED";
        ViewportUpdateMode[ViewportUpdateMode["VIEWPORT_UPDATE_ONCE"] = 1] = "VIEWPORT_UPDATE_ONCE";
        ViewportUpdateMode[ViewportUpdateMode["VIEWPORT_UPDATE_WHEN_VISIBLE"] = 2] = "VIEWPORT_UPDATE_WHEN_VISIBLE";
        ViewportUpdateMode[ViewportUpdateMode["VIEWPORT_UPDATE_WHEN_PARENT_VISIBLE"] = 3] = "VIEWPORT_UPDATE_WHEN_PARENT_VISIBLE";
        ViewportUpdateMode[ViewportUpdateMode["VIEWPORT_UPDATE_ALWAYS"] = 4] = "VIEWPORT_UPDATE_ALWAYS";
    })(ViewportUpdateMode = RenderingServer.ViewportUpdateMode || (RenderingServer.ViewportUpdateMode = {}));
    let ViewportClearMode;
    (function (ViewportClearMode) {
        ViewportClearMode[ViewportClearMode["VIEWPORT_CLEAR_ALWAYS"] = 0] = "VIEWPORT_CLEAR_ALWAYS";
        ViewportClearMode[ViewportClearMode["VIEWPORT_CLEAR_NEVER"] = 1] = "VIEWPORT_CLEAR_NEVER";
        ViewportClearMode[ViewportClearMode["VIEWPORT_CLEAR_ONLY_NEXT_FRAME"] = 2] = "VIEWPORT_CLEAR_ONLY_NEXT_FRAME";
    })(ViewportClearMode = RenderingServer.ViewportClearMode || (RenderingServer.ViewportClearMode = {}));
    let ViewportEnvironmentMode;
    (function (ViewportEnvironmentMode) {
        ViewportEnvironmentMode[ViewportEnvironmentMode["VIEWPORT_ENVIRONMENT_DISABLED"] = 0] = "VIEWPORT_ENVIRONMENT_DISABLED";
        ViewportEnvironmentMode[ViewportEnvironmentMode["VIEWPORT_ENVIRONMENT_ENABLED"] = 1] = "VIEWPORT_ENVIRONMENT_ENABLED";
        ViewportEnvironmentMode[ViewportEnvironmentMode["VIEWPORT_ENVIRONMENT_INHERIT"] = 2] = "VIEWPORT_ENVIRONMENT_INHERIT";
        ViewportEnvironmentMode[ViewportEnvironmentMode["VIEWPORT_ENVIRONMENT_MAX"] = 3] = "VIEWPORT_ENVIRONMENT_MAX";
    })(ViewportEnvironmentMode = RenderingServer.ViewportEnvironmentMode || (RenderingServer.ViewportEnvironmentMode = {}));
    let ViewportSDFOversize;
    (function (ViewportSDFOversize) {
        ViewportSDFOversize[ViewportSDFOversize["VIEWPORT_SDF_OVERSIZE_100_PERCENT"] = 0] = "VIEWPORT_SDF_OVERSIZE_100_PERCENT";
        ViewportSDFOversize[ViewportSDFOversize["VIEWPORT_SDF_OVERSIZE_120_PERCENT"] = 1] = "VIEWPORT_SDF_OVERSIZE_120_PERCENT";
        ViewportSDFOversize[ViewportSDFOversize["VIEWPORT_SDF_OVERSIZE_150_PERCENT"] = 2] = "VIEWPORT_SDF_OVERSIZE_150_PERCENT";
        ViewportSDFOversize[ViewportSDFOversize["VIEWPORT_SDF_OVERSIZE_200_PERCENT"] = 3] = "VIEWPORT_SDF_OVERSIZE_200_PERCENT";
        ViewportSDFOversize[ViewportSDFOversize["VIEWPORT_SDF_OVERSIZE_MAX"] = 4] = "VIEWPORT_SDF_OVERSIZE_MAX";
    })(ViewportSDFOversize = RenderingServer.ViewportSDFOversize || (RenderingServer.ViewportSDFOversize = {}));
    let ViewportSDFScale;
    (function (ViewportSDFScale) {
        ViewportSDFScale[ViewportSDFScale["VIEWPORT_SDF_SCALE_100_PERCENT"] = 0] = "VIEWPORT_SDF_SCALE_100_PERCENT";
        ViewportSDFScale[ViewportSDFScale["VIEWPORT_SDF_SCALE_50_PERCENT"] = 1] = "VIEWPORT_SDF_SCALE_50_PERCENT";
        ViewportSDFScale[ViewportSDFScale["VIEWPORT_SDF_SCALE_25_PERCENT"] = 2] = "VIEWPORT_SDF_SCALE_25_PERCENT";
        ViewportSDFScale[ViewportSDFScale["VIEWPORT_SDF_SCALE_MAX"] = 3] = "VIEWPORT_SDF_SCALE_MAX";
    })(ViewportSDFScale = RenderingServer.ViewportSDFScale || (RenderingServer.ViewportSDFScale = {}));
    let ViewportMSAA;
    (function (ViewportMSAA) {
        ViewportMSAA[ViewportMSAA["VIEWPORT_MSAA_DISABLED"] = 0] = "VIEWPORT_MSAA_DISABLED";
        ViewportMSAA[ViewportMSAA["VIEWPORT_MSAA_2X"] = 1] = "VIEWPORT_MSAA_2X";
        ViewportMSAA[ViewportMSAA["VIEWPORT_MSAA_4X"] = 2] = "VIEWPORT_MSAA_4X";
        ViewportMSAA[ViewportMSAA["VIEWPORT_MSAA_8X"] = 3] = "VIEWPORT_MSAA_8X";
        ViewportMSAA[ViewportMSAA["VIEWPORT_MSAA_MAX"] = 4] = "VIEWPORT_MSAA_MAX";
    })(ViewportMSAA = RenderingServer.ViewportMSAA || (RenderingServer.ViewportMSAA = {}));
    let ViewportScreenSpaceAA;
    (function (ViewportScreenSpaceAA) {
        ViewportScreenSpaceAA[ViewportScreenSpaceAA["VIEWPORT_SCREEN_SPACE_AA_DISABLED"] = 0] = "VIEWPORT_SCREEN_SPACE_AA_DISABLED";
        ViewportScreenSpaceAA[ViewportScreenSpaceAA["VIEWPORT_SCREEN_SPACE_AA_FXAA"] = 1] = "VIEWPORT_SCREEN_SPACE_AA_FXAA";
        ViewportScreenSpaceAA[ViewportScreenSpaceAA["VIEWPORT_SCREEN_SPACE_AA_MAX"] = 2] = "VIEWPORT_SCREEN_SPACE_AA_MAX";
    })(ViewportScreenSpaceAA = RenderingServer.ViewportScreenSpaceAA || (RenderingServer.ViewportScreenSpaceAA = {}));
    let ViewportOcclusionCullingBuildQuality;
    (function (ViewportOcclusionCullingBuildQuality) {
        ViewportOcclusionCullingBuildQuality[ViewportOcclusionCullingBuildQuality["VIEWPORT_OCCLUSION_BUILD_QUALITY_LOW"] = 0] = "VIEWPORT_OCCLUSION_BUILD_QUALITY_LOW";
        ViewportOcclusionCullingBuildQuality[ViewportOcclusionCullingBuildQuality["VIEWPORT_OCCLUSION_BUILD_QUALITY_MEDIUM"] = 1] = "VIEWPORT_OCCLUSION_BUILD_QUALITY_MEDIUM";
        ViewportOcclusionCullingBuildQuality[ViewportOcclusionCullingBuildQuality["VIEWPORT_OCCLUSION_BUILD_QUALITY_HIGH"] = 2] = "VIEWPORT_OCCLUSION_BUILD_QUALITY_HIGH";
    })(ViewportOcclusionCullingBuildQuality = RenderingServer.ViewportOcclusionCullingBuildQuality || (RenderingServer.ViewportOcclusionCullingBuildQuality = {}));
    let ViewportRenderInfo;
    (function (ViewportRenderInfo) {
        ViewportRenderInfo[ViewportRenderInfo["VIEWPORT_RENDER_INFO_OBJECTS_IN_FRAME"] = 0] = "VIEWPORT_RENDER_INFO_OBJECTS_IN_FRAME";
        ViewportRenderInfo[ViewportRenderInfo["VIEWPORT_RENDER_INFO_PRIMITIVES_IN_FRAME"] = 1] = "VIEWPORT_RENDER_INFO_PRIMITIVES_IN_FRAME";
        ViewportRenderInfo[ViewportRenderInfo["VIEWPORT_RENDER_INFO_DRAW_CALLS_IN_FRAME"] = 2] = "VIEWPORT_RENDER_INFO_DRAW_CALLS_IN_FRAME";
        ViewportRenderInfo[ViewportRenderInfo["VIEWPORT_RENDER_INFO_MAX"] = 3] = "VIEWPORT_RENDER_INFO_MAX";
    })(ViewportRenderInfo = RenderingServer.ViewportRenderInfo || (RenderingServer.ViewportRenderInfo = {}));
    let ViewportRenderInfoType;
    (function (ViewportRenderInfoType) {
        ViewportRenderInfoType[ViewportRenderInfoType["VIEWPORT_RENDER_INFO_TYPE_VISIBLE"] = 0] = "VIEWPORT_RENDER_INFO_TYPE_VISIBLE";
        ViewportRenderInfoType[ViewportRenderInfoType["VIEWPORT_RENDER_INFO_TYPE_SHADOW"] = 1] = "VIEWPORT_RENDER_INFO_TYPE_SHADOW";
        ViewportRenderInfoType[ViewportRenderInfoType["VIEWPORT_RENDER_INFO_TYPE_CANVAS"] = 2] = "VIEWPORT_RENDER_INFO_TYPE_CANVAS";
        ViewportRenderInfoType[ViewportRenderInfoType["VIEWPORT_RENDER_INFO_TYPE_MAX"] = 3] = "VIEWPORT_RENDER_INFO_TYPE_MAX";
    })(ViewportRenderInfoType = RenderingServer.ViewportRenderInfoType || (RenderingServer.ViewportRenderInfoType = {}));
    let ViewportDebugDraw;
    (function (ViewportDebugDraw) {
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_DISABLED"] = 0] = "VIEWPORT_DEBUG_DRAW_DISABLED";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_UNSHADED"] = 1] = "VIEWPORT_DEBUG_DRAW_UNSHADED";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_LIGHTING"] = 2] = "VIEWPORT_DEBUG_DRAW_LIGHTING";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_OVERDRAW"] = 3] = "VIEWPORT_DEBUG_DRAW_OVERDRAW";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_WIREFRAME"] = 4] = "VIEWPORT_DEBUG_DRAW_WIREFRAME";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_NORMAL_BUFFER"] = 5] = "VIEWPORT_DEBUG_DRAW_NORMAL_BUFFER";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_VOXEL_GI_ALBEDO"] = 6] = "VIEWPORT_DEBUG_DRAW_VOXEL_GI_ALBEDO";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_VOXEL_GI_LIGHTING"] = 7] = "VIEWPORT_DEBUG_DRAW_VOXEL_GI_LIGHTING";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_VOXEL_GI_EMISSION"] = 8] = "VIEWPORT_DEBUG_DRAW_VOXEL_GI_EMISSION";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_SHADOW_ATLAS"] = 9] = "VIEWPORT_DEBUG_DRAW_SHADOW_ATLAS";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS"] = 10] = "VIEWPORT_DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_SCENE_LUMINANCE"] = 11] = "VIEWPORT_DEBUG_DRAW_SCENE_LUMINANCE";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_SSAO"] = 12] = "VIEWPORT_DEBUG_DRAW_SSAO";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_SSIL"] = 13] = "VIEWPORT_DEBUG_DRAW_SSIL";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_PSSM_SPLITS"] = 14] = "VIEWPORT_DEBUG_DRAW_PSSM_SPLITS";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_DECAL_ATLAS"] = 15] = "VIEWPORT_DEBUG_DRAW_DECAL_ATLAS";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_SDFGI"] = 16] = "VIEWPORT_DEBUG_DRAW_SDFGI";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_SDFGI_PROBES"] = 17] = "VIEWPORT_DEBUG_DRAW_SDFGI_PROBES";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_GI_BUFFER"] = 18] = "VIEWPORT_DEBUG_DRAW_GI_BUFFER";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_DISABLE_LOD"] = 19] = "VIEWPORT_DEBUG_DRAW_DISABLE_LOD";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_CLUSTER_OMNI_LIGHTS"] = 20] = "VIEWPORT_DEBUG_DRAW_CLUSTER_OMNI_LIGHTS";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_CLUSTER_SPOT_LIGHTS"] = 21] = "VIEWPORT_DEBUG_DRAW_CLUSTER_SPOT_LIGHTS";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_CLUSTER_DECALS"] = 22] = "VIEWPORT_DEBUG_DRAW_CLUSTER_DECALS";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_CLUSTER_REFLECTION_PROBES"] = 23] = "VIEWPORT_DEBUG_DRAW_CLUSTER_REFLECTION_PROBES";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_OCCLUDERS"] = 24] = "VIEWPORT_DEBUG_DRAW_OCCLUDERS";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_MOTION_VECTORS"] = 25] = "VIEWPORT_DEBUG_DRAW_MOTION_VECTORS";
        ViewportDebugDraw[ViewportDebugDraw["VIEWPORT_DEBUG_DRAW_INTERNAL_BUFFER"] = 26] = "VIEWPORT_DEBUG_DRAW_INTERNAL_BUFFER";
    })(ViewportDebugDraw = RenderingServer.ViewportDebugDraw || (RenderingServer.ViewportDebugDraw = {}));
    let ViewportVRSMode;
    (function (ViewportVRSMode) {
        ViewportVRSMode[ViewportVRSMode["VIEWPORT_VRS_DISABLED"] = 0] = "VIEWPORT_VRS_DISABLED";
        ViewportVRSMode[ViewportVRSMode["VIEWPORT_VRS_TEXTURE"] = 1] = "VIEWPORT_VRS_TEXTURE";
        ViewportVRSMode[ViewportVRSMode["VIEWPORT_VRS_XR"] = 2] = "VIEWPORT_VRS_XR";
        ViewportVRSMode[ViewportVRSMode["VIEWPORT_VRS_MAX"] = 3] = "VIEWPORT_VRS_MAX";
    })(ViewportVRSMode = RenderingServer.ViewportVRSMode || (RenderingServer.ViewportVRSMode = {}));
    let ViewportVRSUpdateMode;
    (function (ViewportVRSUpdateMode) {
        ViewportVRSUpdateMode[ViewportVRSUpdateMode["VIEWPORT_VRS_UPDATE_DISABLED"] = 0] = "VIEWPORT_VRS_UPDATE_DISABLED";
        ViewportVRSUpdateMode[ViewportVRSUpdateMode["VIEWPORT_VRS_UPDATE_ONCE"] = 1] = "VIEWPORT_VRS_UPDATE_ONCE";
        ViewportVRSUpdateMode[ViewportVRSUpdateMode["VIEWPORT_VRS_UPDATE_ALWAYS"] = 2] = "VIEWPORT_VRS_UPDATE_ALWAYS";
        ViewportVRSUpdateMode[ViewportVRSUpdateMode["VIEWPORT_VRS_UPDATE_MAX"] = 3] = "VIEWPORT_VRS_UPDATE_MAX";
    })(ViewportVRSUpdateMode = RenderingServer.ViewportVRSUpdateMode || (RenderingServer.ViewportVRSUpdateMode = {}));
    let SkyMode;
    (function (SkyMode) {
        SkyMode[SkyMode["SKY_MODE_AUTOMATIC"] = 0] = "SKY_MODE_AUTOMATIC";
        SkyMode[SkyMode["SKY_MODE_QUALITY"] = 1] = "SKY_MODE_QUALITY";
        SkyMode[SkyMode["SKY_MODE_INCREMENTAL"] = 2] = "SKY_MODE_INCREMENTAL";
        SkyMode[SkyMode["SKY_MODE_REALTIME"] = 3] = "SKY_MODE_REALTIME";
    })(SkyMode = RenderingServer.SkyMode || (RenderingServer.SkyMode = {}));
    let CompositorEffectFlags;
    (function (CompositorEffectFlags) {
        CompositorEffectFlags[CompositorEffectFlags["COMPOSITOR_EFFECT_FLAG_ACCESS_RESOLVED_COLOR"] = 1] = "COMPOSITOR_EFFECT_FLAG_ACCESS_RESOLVED_COLOR";
        CompositorEffectFlags[CompositorEffectFlags["COMPOSITOR_EFFECT_FLAG_ACCESS_RESOLVED_DEPTH"] = 2] = "COMPOSITOR_EFFECT_FLAG_ACCESS_RESOLVED_DEPTH";
        CompositorEffectFlags[CompositorEffectFlags["COMPOSITOR_EFFECT_FLAG_NEEDS_MOTION_VECTORS"] = 4] = "COMPOSITOR_EFFECT_FLAG_NEEDS_MOTION_VECTORS";
        CompositorEffectFlags[CompositorEffectFlags["COMPOSITOR_EFFECT_FLAG_NEEDS_ROUGHNESS"] = 8] = "COMPOSITOR_EFFECT_FLAG_NEEDS_ROUGHNESS";
        CompositorEffectFlags[CompositorEffectFlags["COMPOSITOR_EFFECT_FLAG_NEEDS_SEPARATE_SPECULAR"] = 16] = "COMPOSITOR_EFFECT_FLAG_NEEDS_SEPARATE_SPECULAR";
    })(CompositorEffectFlags = RenderingServer.CompositorEffectFlags || (RenderingServer.CompositorEffectFlags = {}));
    let CompositorEffectCallbackType;
    (function (CompositorEffectCallbackType) {
        CompositorEffectCallbackType[CompositorEffectCallbackType["COMPOSITOR_EFFECT_CALLBACK_TYPE_PRE_OPAQUE"] = 0] = "COMPOSITOR_EFFECT_CALLBACK_TYPE_PRE_OPAQUE";
        CompositorEffectCallbackType[CompositorEffectCallbackType["COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_OPAQUE"] = 1] = "COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_OPAQUE";
        CompositorEffectCallbackType[CompositorEffectCallbackType["COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_SKY"] = 2] = "COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_SKY";
        CompositorEffectCallbackType[CompositorEffectCallbackType["COMPOSITOR_EFFECT_CALLBACK_TYPE_PRE_TRANSPARENT"] = 3] = "COMPOSITOR_EFFECT_CALLBACK_TYPE_PRE_TRANSPARENT";
        CompositorEffectCallbackType[CompositorEffectCallbackType["COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_TRANSPARENT"] = 4] = "COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_TRANSPARENT";
        CompositorEffectCallbackType[CompositorEffectCallbackType["COMPOSITOR_EFFECT_CALLBACK_TYPE_ANY"] = -1] = "COMPOSITOR_EFFECT_CALLBACK_TYPE_ANY";
    })(CompositorEffectCallbackType = RenderingServer.CompositorEffectCallbackType || (RenderingServer.CompositorEffectCallbackType = {}));
    let EnvironmentBG;
    (function (EnvironmentBG) {
        EnvironmentBG[EnvironmentBG["ENV_BG_CLEAR_COLOR"] = 0] = "ENV_BG_CLEAR_COLOR";
        EnvironmentBG[EnvironmentBG["ENV_BG_COLOR"] = 1] = "ENV_BG_COLOR";
        EnvironmentBG[EnvironmentBG["ENV_BG_SKY"] = 2] = "ENV_BG_SKY";
        EnvironmentBG[EnvironmentBG["ENV_BG_CANVAS"] = 3] = "ENV_BG_CANVAS";
        EnvironmentBG[EnvironmentBG["ENV_BG_KEEP"] = 4] = "ENV_BG_KEEP";
        EnvironmentBG[EnvironmentBG["ENV_BG_CAMERA_FEED"] = 5] = "ENV_BG_CAMERA_FEED";
        EnvironmentBG[EnvironmentBG["ENV_BG_MAX"] = 6] = "ENV_BG_MAX";
    })(EnvironmentBG = RenderingServer.EnvironmentBG || (RenderingServer.EnvironmentBG = {}));
    let EnvironmentAmbientSource;
    (function (EnvironmentAmbientSource) {
        EnvironmentAmbientSource[EnvironmentAmbientSource["ENV_AMBIENT_SOURCE_BG"] = 0] = "ENV_AMBIENT_SOURCE_BG";
        EnvironmentAmbientSource[EnvironmentAmbientSource["ENV_AMBIENT_SOURCE_DISABLED"] = 1] = "ENV_AMBIENT_SOURCE_DISABLED";
        EnvironmentAmbientSource[EnvironmentAmbientSource["ENV_AMBIENT_SOURCE_COLOR"] = 2] = "ENV_AMBIENT_SOURCE_COLOR";
        EnvironmentAmbientSource[EnvironmentAmbientSource["ENV_AMBIENT_SOURCE_SKY"] = 3] = "ENV_AMBIENT_SOURCE_SKY";
    })(EnvironmentAmbientSource = RenderingServer.EnvironmentAmbientSource || (RenderingServer.EnvironmentAmbientSource = {}));
    let EnvironmentReflectionSource;
    (function (EnvironmentReflectionSource) {
        EnvironmentReflectionSource[EnvironmentReflectionSource["ENV_REFLECTION_SOURCE_BG"] = 0] = "ENV_REFLECTION_SOURCE_BG";
        EnvironmentReflectionSource[EnvironmentReflectionSource["ENV_REFLECTION_SOURCE_DISABLED"] = 1] = "ENV_REFLECTION_SOURCE_DISABLED";
        EnvironmentReflectionSource[EnvironmentReflectionSource["ENV_REFLECTION_SOURCE_SKY"] = 2] = "ENV_REFLECTION_SOURCE_SKY";
    })(EnvironmentReflectionSource = RenderingServer.EnvironmentReflectionSource || (RenderingServer.EnvironmentReflectionSource = {}));
    let EnvironmentGlowBlendMode;
    (function (EnvironmentGlowBlendMode) {
        EnvironmentGlowBlendMode[EnvironmentGlowBlendMode["ENV_GLOW_BLEND_MODE_ADDITIVE"] = 0] = "ENV_GLOW_BLEND_MODE_ADDITIVE";
        EnvironmentGlowBlendMode[EnvironmentGlowBlendMode["ENV_GLOW_BLEND_MODE_SCREEN"] = 1] = "ENV_GLOW_BLEND_MODE_SCREEN";
        EnvironmentGlowBlendMode[EnvironmentGlowBlendMode["ENV_GLOW_BLEND_MODE_SOFTLIGHT"] = 2] = "ENV_GLOW_BLEND_MODE_SOFTLIGHT";
        EnvironmentGlowBlendMode[EnvironmentGlowBlendMode["ENV_GLOW_BLEND_MODE_REPLACE"] = 3] = "ENV_GLOW_BLEND_MODE_REPLACE";
        EnvironmentGlowBlendMode[EnvironmentGlowBlendMode["ENV_GLOW_BLEND_MODE_MIX"] = 4] = "ENV_GLOW_BLEND_MODE_MIX";
    })(EnvironmentGlowBlendMode = RenderingServer.EnvironmentGlowBlendMode || (RenderingServer.EnvironmentGlowBlendMode = {}));
    let EnvironmentFogMode;
    (function (EnvironmentFogMode) {
        EnvironmentFogMode[EnvironmentFogMode["ENV_FOG_MODE_EXPONENTIAL"] = 0] = "ENV_FOG_MODE_EXPONENTIAL";
        EnvironmentFogMode[EnvironmentFogMode["ENV_FOG_MODE_DEPTH"] = 1] = "ENV_FOG_MODE_DEPTH";
    })(EnvironmentFogMode = RenderingServer.EnvironmentFogMode || (RenderingServer.EnvironmentFogMode = {}));
    let EnvironmentToneMapper;
    (function (EnvironmentToneMapper) {
        EnvironmentToneMapper[EnvironmentToneMapper["ENV_TONE_MAPPER_LINEAR"] = 0] = "ENV_TONE_MAPPER_LINEAR";
        EnvironmentToneMapper[EnvironmentToneMapper["ENV_TONE_MAPPER_REINHARD"] = 1] = "ENV_TONE_MAPPER_REINHARD";
        EnvironmentToneMapper[EnvironmentToneMapper["ENV_TONE_MAPPER_FILMIC"] = 2] = "ENV_TONE_MAPPER_FILMIC";
        EnvironmentToneMapper[EnvironmentToneMapper["ENV_TONE_MAPPER_ACES"] = 3] = "ENV_TONE_MAPPER_ACES";
    })(EnvironmentToneMapper = RenderingServer.EnvironmentToneMapper || (RenderingServer.EnvironmentToneMapper = {}));
    let EnvironmentSSRRoughnessQuality;
    (function (EnvironmentSSRRoughnessQuality) {
        EnvironmentSSRRoughnessQuality[EnvironmentSSRRoughnessQuality["ENV_SSR_ROUGHNESS_QUALITY_DISABLED"] = 0] = "ENV_SSR_ROUGHNESS_QUALITY_DISABLED";
        EnvironmentSSRRoughnessQuality[EnvironmentSSRRoughnessQuality["ENV_SSR_ROUGHNESS_QUALITY_LOW"] = 1] = "ENV_SSR_ROUGHNESS_QUALITY_LOW";
        EnvironmentSSRRoughnessQuality[EnvironmentSSRRoughnessQuality["ENV_SSR_ROUGHNESS_QUALITY_MEDIUM"] = 2] = "ENV_SSR_ROUGHNESS_QUALITY_MEDIUM";
        EnvironmentSSRRoughnessQuality[EnvironmentSSRRoughnessQuality["ENV_SSR_ROUGHNESS_QUALITY_HIGH"] = 3] = "ENV_SSR_ROUGHNESS_QUALITY_HIGH";
    })(EnvironmentSSRRoughnessQuality = RenderingServer.EnvironmentSSRRoughnessQuality || (RenderingServer.EnvironmentSSRRoughnessQuality = {}));
    let EnvironmentSSAOQuality;
    (function (EnvironmentSSAOQuality) {
        EnvironmentSSAOQuality[EnvironmentSSAOQuality["ENV_SSAO_QUALITY_VERY_LOW"] = 0] = "ENV_SSAO_QUALITY_VERY_LOW";
        EnvironmentSSAOQuality[EnvironmentSSAOQuality["ENV_SSAO_QUALITY_LOW"] = 1] = "ENV_SSAO_QUALITY_LOW";
        EnvironmentSSAOQuality[EnvironmentSSAOQuality["ENV_SSAO_QUALITY_MEDIUM"] = 2] = "ENV_SSAO_QUALITY_MEDIUM";
        EnvironmentSSAOQuality[EnvironmentSSAOQuality["ENV_SSAO_QUALITY_HIGH"] = 3] = "ENV_SSAO_QUALITY_HIGH";
        EnvironmentSSAOQuality[EnvironmentSSAOQuality["ENV_SSAO_QUALITY_ULTRA"] = 4] = "ENV_SSAO_QUALITY_ULTRA";
    })(EnvironmentSSAOQuality = RenderingServer.EnvironmentSSAOQuality || (RenderingServer.EnvironmentSSAOQuality = {}));
    let EnvironmentSSILQuality;
    (function (EnvironmentSSILQuality) {
        EnvironmentSSILQuality[EnvironmentSSILQuality["ENV_SSIL_QUALITY_VERY_LOW"] = 0] = "ENV_SSIL_QUALITY_VERY_LOW";
        EnvironmentSSILQuality[EnvironmentSSILQuality["ENV_SSIL_QUALITY_LOW"] = 1] = "ENV_SSIL_QUALITY_LOW";
        EnvironmentSSILQuality[EnvironmentSSILQuality["ENV_SSIL_QUALITY_MEDIUM"] = 2] = "ENV_SSIL_QUALITY_MEDIUM";
        EnvironmentSSILQuality[EnvironmentSSILQuality["ENV_SSIL_QUALITY_HIGH"] = 3] = "ENV_SSIL_QUALITY_HIGH";
        EnvironmentSSILQuality[EnvironmentSSILQuality["ENV_SSIL_QUALITY_ULTRA"] = 4] = "ENV_SSIL_QUALITY_ULTRA";
    })(EnvironmentSSILQuality = RenderingServer.EnvironmentSSILQuality || (RenderingServer.EnvironmentSSILQuality = {}));
    let EnvironmentSDFGIYScale;
    (function (EnvironmentSDFGIYScale) {
        EnvironmentSDFGIYScale[EnvironmentSDFGIYScale["ENV_SDFGI_Y_SCALE_50_PERCENT"] = 0] = "ENV_SDFGI_Y_SCALE_50_PERCENT";
        EnvironmentSDFGIYScale[EnvironmentSDFGIYScale["ENV_SDFGI_Y_SCALE_75_PERCENT"] = 1] = "ENV_SDFGI_Y_SCALE_75_PERCENT";
        EnvironmentSDFGIYScale[EnvironmentSDFGIYScale["ENV_SDFGI_Y_SCALE_100_PERCENT"] = 2] = "ENV_SDFGI_Y_SCALE_100_PERCENT";
    })(EnvironmentSDFGIYScale = RenderingServer.EnvironmentSDFGIYScale || (RenderingServer.EnvironmentSDFGIYScale = {}));
    let EnvironmentSDFGIRayCount;
    (function (EnvironmentSDFGIRayCount) {
        EnvironmentSDFGIRayCount[EnvironmentSDFGIRayCount["ENV_SDFGI_RAY_COUNT_4"] = 0] = "ENV_SDFGI_RAY_COUNT_4";
        EnvironmentSDFGIRayCount[EnvironmentSDFGIRayCount["ENV_SDFGI_RAY_COUNT_8"] = 1] = "ENV_SDFGI_RAY_COUNT_8";
        EnvironmentSDFGIRayCount[EnvironmentSDFGIRayCount["ENV_SDFGI_RAY_COUNT_16"] = 2] = "ENV_SDFGI_RAY_COUNT_16";
        EnvironmentSDFGIRayCount[EnvironmentSDFGIRayCount["ENV_SDFGI_RAY_COUNT_32"] = 3] = "ENV_SDFGI_RAY_COUNT_32";
        EnvironmentSDFGIRayCount[EnvironmentSDFGIRayCount["ENV_SDFGI_RAY_COUNT_64"] = 4] = "ENV_SDFGI_RAY_COUNT_64";
        EnvironmentSDFGIRayCount[EnvironmentSDFGIRayCount["ENV_SDFGI_RAY_COUNT_96"] = 5] = "ENV_SDFGI_RAY_COUNT_96";
        EnvironmentSDFGIRayCount[EnvironmentSDFGIRayCount["ENV_SDFGI_RAY_COUNT_128"] = 6] = "ENV_SDFGI_RAY_COUNT_128";
        EnvironmentSDFGIRayCount[EnvironmentSDFGIRayCount["ENV_SDFGI_RAY_COUNT_MAX"] = 7] = "ENV_SDFGI_RAY_COUNT_MAX";
    })(EnvironmentSDFGIRayCount = RenderingServer.EnvironmentSDFGIRayCount || (RenderingServer.EnvironmentSDFGIRayCount = {}));
    let EnvironmentSDFGIFramesToConverge;
    (function (EnvironmentSDFGIFramesToConverge) {
        EnvironmentSDFGIFramesToConverge[EnvironmentSDFGIFramesToConverge["ENV_SDFGI_CONVERGE_IN_5_FRAMES"] = 0] = "ENV_SDFGI_CONVERGE_IN_5_FRAMES";
        EnvironmentSDFGIFramesToConverge[EnvironmentSDFGIFramesToConverge["ENV_SDFGI_CONVERGE_IN_10_FRAMES"] = 1] = "ENV_SDFGI_CONVERGE_IN_10_FRAMES";
        EnvironmentSDFGIFramesToConverge[EnvironmentSDFGIFramesToConverge["ENV_SDFGI_CONVERGE_IN_15_FRAMES"] = 2] = "ENV_SDFGI_CONVERGE_IN_15_FRAMES";
        EnvironmentSDFGIFramesToConverge[EnvironmentSDFGIFramesToConverge["ENV_SDFGI_CONVERGE_IN_20_FRAMES"] = 3] = "ENV_SDFGI_CONVERGE_IN_20_FRAMES";
        EnvironmentSDFGIFramesToConverge[EnvironmentSDFGIFramesToConverge["ENV_SDFGI_CONVERGE_IN_25_FRAMES"] = 4] = "ENV_SDFGI_CONVERGE_IN_25_FRAMES";
        EnvironmentSDFGIFramesToConverge[EnvironmentSDFGIFramesToConverge["ENV_SDFGI_CONVERGE_IN_30_FRAMES"] = 5] = "ENV_SDFGI_CONVERGE_IN_30_FRAMES";
        EnvironmentSDFGIFramesToConverge[EnvironmentSDFGIFramesToConverge["ENV_SDFGI_CONVERGE_MAX"] = 6] = "ENV_SDFGI_CONVERGE_MAX";
    })(EnvironmentSDFGIFramesToConverge = RenderingServer.EnvironmentSDFGIFramesToConverge || (RenderingServer.EnvironmentSDFGIFramesToConverge = {}));
    let EnvironmentSDFGIFramesToUpdateLight;
    (function (EnvironmentSDFGIFramesToUpdateLight) {
        EnvironmentSDFGIFramesToUpdateLight[EnvironmentSDFGIFramesToUpdateLight["ENV_SDFGI_UPDATE_LIGHT_IN_1_FRAME"] = 0] = "ENV_SDFGI_UPDATE_LIGHT_IN_1_FRAME";
        EnvironmentSDFGIFramesToUpdateLight[EnvironmentSDFGIFramesToUpdateLight["ENV_SDFGI_UPDATE_LIGHT_IN_2_FRAMES"] = 1] = "ENV_SDFGI_UPDATE_LIGHT_IN_2_FRAMES";
        EnvironmentSDFGIFramesToUpdateLight[EnvironmentSDFGIFramesToUpdateLight["ENV_SDFGI_UPDATE_LIGHT_IN_4_FRAMES"] = 2] = "ENV_SDFGI_UPDATE_LIGHT_IN_4_FRAMES";
        EnvironmentSDFGIFramesToUpdateLight[EnvironmentSDFGIFramesToUpdateLight["ENV_SDFGI_UPDATE_LIGHT_IN_8_FRAMES"] = 3] = "ENV_SDFGI_UPDATE_LIGHT_IN_8_FRAMES";
        EnvironmentSDFGIFramesToUpdateLight[EnvironmentSDFGIFramesToUpdateLight["ENV_SDFGI_UPDATE_LIGHT_IN_16_FRAMES"] = 4] = "ENV_SDFGI_UPDATE_LIGHT_IN_16_FRAMES";
        EnvironmentSDFGIFramesToUpdateLight[EnvironmentSDFGIFramesToUpdateLight["ENV_SDFGI_UPDATE_LIGHT_MAX"] = 5] = "ENV_SDFGI_UPDATE_LIGHT_MAX";
    })(EnvironmentSDFGIFramesToUpdateLight = RenderingServer.EnvironmentSDFGIFramesToUpdateLight || (RenderingServer.EnvironmentSDFGIFramesToUpdateLight = {}));
    let SubSurfaceScatteringQuality;
    (function (SubSurfaceScatteringQuality) {
        SubSurfaceScatteringQuality[SubSurfaceScatteringQuality["SUB_SURFACE_SCATTERING_QUALITY_DISABLED"] = 0] = "SUB_SURFACE_SCATTERING_QUALITY_DISABLED";
        SubSurfaceScatteringQuality[SubSurfaceScatteringQuality["SUB_SURFACE_SCATTERING_QUALITY_LOW"] = 1] = "SUB_SURFACE_SCATTERING_QUALITY_LOW";
        SubSurfaceScatteringQuality[SubSurfaceScatteringQuality["SUB_SURFACE_SCATTERING_QUALITY_MEDIUM"] = 2] = "SUB_SURFACE_SCATTERING_QUALITY_MEDIUM";
        SubSurfaceScatteringQuality[SubSurfaceScatteringQuality["SUB_SURFACE_SCATTERING_QUALITY_HIGH"] = 3] = "SUB_SURFACE_SCATTERING_QUALITY_HIGH";
    })(SubSurfaceScatteringQuality = RenderingServer.SubSurfaceScatteringQuality || (RenderingServer.SubSurfaceScatteringQuality = {}));
    let DOFBokehShape;
    (function (DOFBokehShape) {
        DOFBokehShape[DOFBokehShape["DOF_BOKEH_BOX"] = 0] = "DOF_BOKEH_BOX";
        DOFBokehShape[DOFBokehShape["DOF_BOKEH_HEXAGON"] = 1] = "DOF_BOKEH_HEXAGON";
        DOFBokehShape[DOFBokehShape["DOF_BOKEH_CIRCLE"] = 2] = "DOF_BOKEH_CIRCLE";
    })(DOFBokehShape = RenderingServer.DOFBokehShape || (RenderingServer.DOFBokehShape = {}));
    let DOFBlurQuality;
    (function (DOFBlurQuality) {
        DOFBlurQuality[DOFBlurQuality["DOF_BLUR_QUALITY_VERY_LOW"] = 0] = "DOF_BLUR_QUALITY_VERY_LOW";
        DOFBlurQuality[DOFBlurQuality["DOF_BLUR_QUALITY_LOW"] = 1] = "DOF_BLUR_QUALITY_LOW";
        DOFBlurQuality[DOFBlurQuality["DOF_BLUR_QUALITY_MEDIUM"] = 2] = "DOF_BLUR_QUALITY_MEDIUM";
        DOFBlurQuality[DOFBlurQuality["DOF_BLUR_QUALITY_HIGH"] = 3] = "DOF_BLUR_QUALITY_HIGH";
    })(DOFBlurQuality = RenderingServer.DOFBlurQuality || (RenderingServer.DOFBlurQuality = {}));
    let InstanceType;
    (function (InstanceType) {
        InstanceType[InstanceType["INSTANCE_NONE"] = 0] = "INSTANCE_NONE";
        InstanceType[InstanceType["INSTANCE_MESH"] = 1] = "INSTANCE_MESH";
        InstanceType[InstanceType["INSTANCE_MULTIMESH"] = 2] = "INSTANCE_MULTIMESH";
        InstanceType[InstanceType["INSTANCE_PARTICLES"] = 3] = "INSTANCE_PARTICLES";
        InstanceType[InstanceType["INSTANCE_PARTICLES_COLLISION"] = 4] = "INSTANCE_PARTICLES_COLLISION";
        InstanceType[InstanceType["INSTANCE_LIGHT"] = 5] = "INSTANCE_LIGHT";
        InstanceType[InstanceType["INSTANCE_REFLECTION_PROBE"] = 6] = "INSTANCE_REFLECTION_PROBE";
        InstanceType[InstanceType["INSTANCE_DECAL"] = 7] = "INSTANCE_DECAL";
        InstanceType[InstanceType["INSTANCE_VOXEL_GI"] = 8] = "INSTANCE_VOXEL_GI";
        InstanceType[InstanceType["INSTANCE_LIGHTMAP"] = 9] = "INSTANCE_LIGHTMAP";
        InstanceType[InstanceType["INSTANCE_OCCLUDER"] = 10] = "INSTANCE_OCCLUDER";
        InstanceType[InstanceType["INSTANCE_VISIBLITY_NOTIFIER"] = 11] = "INSTANCE_VISIBLITY_NOTIFIER";
        InstanceType[InstanceType["INSTANCE_FOG_VOLUME"] = 12] = "INSTANCE_FOG_VOLUME";
        InstanceType[InstanceType["INSTANCE_MAX"] = 13] = "INSTANCE_MAX";
        InstanceType[InstanceType["INSTANCE_GEOMETRY_MASK"] = 14] = "INSTANCE_GEOMETRY_MASK";
    })(InstanceType = RenderingServer.InstanceType || (RenderingServer.InstanceType = {}));
    let InstanceFlags;
    (function (InstanceFlags) {
        InstanceFlags[InstanceFlags["INSTANCE_FLAG_USE_BAKED_LIGHT"] = 0] = "INSTANCE_FLAG_USE_BAKED_LIGHT";
        InstanceFlags[InstanceFlags["INSTANCE_FLAG_USE_DYNAMIC_GI"] = 1] = "INSTANCE_FLAG_USE_DYNAMIC_GI";
        InstanceFlags[InstanceFlags["INSTANCE_FLAG_DRAW_NEXT_FRAME_IF_VISIBLE"] = 2] = "INSTANCE_FLAG_DRAW_NEXT_FRAME_IF_VISIBLE";
        InstanceFlags[InstanceFlags["INSTANCE_FLAG_IGNORE_OCCLUSION_CULLING"] = 3] = "INSTANCE_FLAG_IGNORE_OCCLUSION_CULLING";
        InstanceFlags[InstanceFlags["INSTANCE_FLAG_MAX"] = 4] = "INSTANCE_FLAG_MAX";
    })(InstanceFlags = RenderingServer.InstanceFlags || (RenderingServer.InstanceFlags = {}));
    let ShadowCastingSetting;
    (function (ShadowCastingSetting) {
        ShadowCastingSetting[ShadowCastingSetting["SHADOW_CASTING_SETTING_OFF"] = 0] = "SHADOW_CASTING_SETTING_OFF";
        ShadowCastingSetting[ShadowCastingSetting["SHADOW_CASTING_SETTING_ON"] = 1] = "SHADOW_CASTING_SETTING_ON";
        ShadowCastingSetting[ShadowCastingSetting["SHADOW_CASTING_SETTING_DOUBLE_SIDED"] = 2] = "SHADOW_CASTING_SETTING_DOUBLE_SIDED";
        ShadowCastingSetting[ShadowCastingSetting["SHADOW_CASTING_SETTING_SHADOWS_ONLY"] = 3] = "SHADOW_CASTING_SETTING_SHADOWS_ONLY";
    })(ShadowCastingSetting = RenderingServer.ShadowCastingSetting || (RenderingServer.ShadowCastingSetting = {}));
    let VisibilityRangeFadeMode;
    (function (VisibilityRangeFadeMode) {
        VisibilityRangeFadeMode[VisibilityRangeFadeMode["VISIBILITY_RANGE_FADE_DISABLED"] = 0] = "VISIBILITY_RANGE_FADE_DISABLED";
        VisibilityRangeFadeMode[VisibilityRangeFadeMode["VISIBILITY_RANGE_FADE_SELF"] = 1] = "VISIBILITY_RANGE_FADE_SELF";
        VisibilityRangeFadeMode[VisibilityRangeFadeMode["VISIBILITY_RANGE_FADE_DEPENDENCIES"] = 2] = "VISIBILITY_RANGE_FADE_DEPENDENCIES";
    })(VisibilityRangeFadeMode = RenderingServer.VisibilityRangeFadeMode || (RenderingServer.VisibilityRangeFadeMode = {}));
    let BakeChannels;
    (function (BakeChannels) {
        BakeChannels[BakeChannels["BAKE_CHANNEL_ALBEDO_ALPHA"] = 0] = "BAKE_CHANNEL_ALBEDO_ALPHA";
        BakeChannels[BakeChannels["BAKE_CHANNEL_NORMAL"] = 1] = "BAKE_CHANNEL_NORMAL";
        BakeChannels[BakeChannels["BAKE_CHANNEL_ORM"] = 2] = "BAKE_CHANNEL_ORM";
        BakeChannels[BakeChannels["BAKE_CHANNEL_EMISSION"] = 3] = "BAKE_CHANNEL_EMISSION";
    })(BakeChannels = RenderingServer.BakeChannels || (RenderingServer.BakeChannels = {}));
    let CanvasTextureChannel;
    (function (CanvasTextureChannel) {
        CanvasTextureChannel[CanvasTextureChannel["CANVAS_TEXTURE_CHANNEL_DIFFUSE"] = 0] = "CANVAS_TEXTURE_CHANNEL_DIFFUSE";
        CanvasTextureChannel[CanvasTextureChannel["CANVAS_TEXTURE_CHANNEL_NORMAL"] = 1] = "CANVAS_TEXTURE_CHANNEL_NORMAL";
        CanvasTextureChannel[CanvasTextureChannel["CANVAS_TEXTURE_CHANNEL_SPECULAR"] = 2] = "CANVAS_TEXTURE_CHANNEL_SPECULAR";
    })(CanvasTextureChannel = RenderingServer.CanvasTextureChannel || (RenderingServer.CanvasTextureChannel = {}));
    let NinePatchAxisMode;
    (function (NinePatchAxisMode) {
        NinePatchAxisMode[NinePatchAxisMode["NINE_PATCH_STRETCH"] = 0] = "NINE_PATCH_STRETCH";
        NinePatchAxisMode[NinePatchAxisMode["NINE_PATCH_TILE"] = 1] = "NINE_PATCH_TILE";
        NinePatchAxisMode[NinePatchAxisMode["NINE_PATCH_TILE_FIT"] = 2] = "NINE_PATCH_TILE_FIT";
    })(NinePatchAxisMode = RenderingServer.NinePatchAxisMode || (RenderingServer.NinePatchAxisMode = {}));
    let CanvasItemTextureFilter;
    (function (CanvasItemTextureFilter) {
        CanvasItemTextureFilter[CanvasItemTextureFilter["CANVAS_ITEM_TEXTURE_FILTER_DEFAULT"] = 0] = "CANVAS_ITEM_TEXTURE_FILTER_DEFAULT";
        CanvasItemTextureFilter[CanvasItemTextureFilter["CANVAS_ITEM_TEXTURE_FILTER_NEAREST"] = 1] = "CANVAS_ITEM_TEXTURE_FILTER_NEAREST";
        CanvasItemTextureFilter[CanvasItemTextureFilter["CANVAS_ITEM_TEXTURE_FILTER_LINEAR"] = 2] = "CANVAS_ITEM_TEXTURE_FILTER_LINEAR";
        CanvasItemTextureFilter[CanvasItemTextureFilter["CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS"] = 3] = "CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS";
        CanvasItemTextureFilter[CanvasItemTextureFilter["CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS"] = 4] = "CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS";
        CanvasItemTextureFilter[CanvasItemTextureFilter["CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC"] = 5] = "CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC";
        CanvasItemTextureFilter[CanvasItemTextureFilter["CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC"] = 6] = "CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC";
        CanvasItemTextureFilter[CanvasItemTextureFilter["CANVAS_ITEM_TEXTURE_FILTER_MAX"] = 7] = "CANVAS_ITEM_TEXTURE_FILTER_MAX";
    })(CanvasItemTextureFilter = RenderingServer.CanvasItemTextureFilter || (RenderingServer.CanvasItemTextureFilter = {}));
    let CanvasItemTextureRepeat;
    (function (CanvasItemTextureRepeat) {
        CanvasItemTextureRepeat[CanvasItemTextureRepeat["CANVAS_ITEM_TEXTURE_REPEAT_DEFAULT"] = 0] = "CANVAS_ITEM_TEXTURE_REPEAT_DEFAULT";
        CanvasItemTextureRepeat[CanvasItemTextureRepeat["CANVAS_ITEM_TEXTURE_REPEAT_DISABLED"] = 1] = "CANVAS_ITEM_TEXTURE_REPEAT_DISABLED";
        CanvasItemTextureRepeat[CanvasItemTextureRepeat["CANVAS_ITEM_TEXTURE_REPEAT_ENABLED"] = 2] = "CANVAS_ITEM_TEXTURE_REPEAT_ENABLED";
        CanvasItemTextureRepeat[CanvasItemTextureRepeat["CANVAS_ITEM_TEXTURE_REPEAT_MIRROR"] = 3] = "CANVAS_ITEM_TEXTURE_REPEAT_MIRROR";
        CanvasItemTextureRepeat[CanvasItemTextureRepeat["CANVAS_ITEM_TEXTURE_REPEAT_MAX"] = 4] = "CANVAS_ITEM_TEXTURE_REPEAT_MAX";
    })(CanvasItemTextureRepeat = RenderingServer.CanvasItemTextureRepeat || (RenderingServer.CanvasItemTextureRepeat = {}));
    let CanvasGroupMode;
    (function (CanvasGroupMode) {
        CanvasGroupMode[CanvasGroupMode["CANVAS_GROUP_MODE_DISABLED"] = 0] = "CANVAS_GROUP_MODE_DISABLED";
        CanvasGroupMode[CanvasGroupMode["CANVAS_GROUP_MODE_CLIP_ONLY"] = 1] = "CANVAS_GROUP_MODE_CLIP_ONLY";
        CanvasGroupMode[CanvasGroupMode["CANVAS_GROUP_MODE_CLIP_AND_DRAW"] = 2] = "CANVAS_GROUP_MODE_CLIP_AND_DRAW";
        CanvasGroupMode[CanvasGroupMode["CANVAS_GROUP_MODE_TRANSPARENT"] = 3] = "CANVAS_GROUP_MODE_TRANSPARENT";
    })(CanvasGroupMode = RenderingServer.CanvasGroupMode || (RenderingServer.CanvasGroupMode = {}));
    let CanvasLightMode;
    (function (CanvasLightMode) {
        CanvasLightMode[CanvasLightMode["CANVAS_LIGHT_MODE_POINT"] = 0] = "CANVAS_LIGHT_MODE_POINT";
        CanvasLightMode[CanvasLightMode["CANVAS_LIGHT_MODE_DIRECTIONAL"] = 1] = "CANVAS_LIGHT_MODE_DIRECTIONAL";
    })(CanvasLightMode = RenderingServer.CanvasLightMode || (RenderingServer.CanvasLightMode = {}));
    let CanvasLightBlendMode;
    (function (CanvasLightBlendMode) {
        CanvasLightBlendMode[CanvasLightBlendMode["CANVAS_LIGHT_BLEND_MODE_ADD"] = 0] = "CANVAS_LIGHT_BLEND_MODE_ADD";
        CanvasLightBlendMode[CanvasLightBlendMode["CANVAS_LIGHT_BLEND_MODE_SUB"] = 1] = "CANVAS_LIGHT_BLEND_MODE_SUB";
        CanvasLightBlendMode[CanvasLightBlendMode["CANVAS_LIGHT_BLEND_MODE_MIX"] = 2] = "CANVAS_LIGHT_BLEND_MODE_MIX";
    })(CanvasLightBlendMode = RenderingServer.CanvasLightBlendMode || (RenderingServer.CanvasLightBlendMode = {}));
    let CanvasLightShadowFilter;
    (function (CanvasLightShadowFilter) {
        CanvasLightShadowFilter[CanvasLightShadowFilter["CANVAS_LIGHT_FILTER_NONE"] = 0] = "CANVAS_LIGHT_FILTER_NONE";
        CanvasLightShadowFilter[CanvasLightShadowFilter["CANVAS_LIGHT_FILTER_PCF5"] = 1] = "CANVAS_LIGHT_FILTER_PCF5";
        CanvasLightShadowFilter[CanvasLightShadowFilter["CANVAS_LIGHT_FILTER_PCF13"] = 2] = "CANVAS_LIGHT_FILTER_PCF13";
        CanvasLightShadowFilter[CanvasLightShadowFilter["CANVAS_LIGHT_FILTER_MAX"] = 3] = "CANVAS_LIGHT_FILTER_MAX";
    })(CanvasLightShadowFilter = RenderingServer.CanvasLightShadowFilter || (RenderingServer.CanvasLightShadowFilter = {}));
    let CanvasOccluderPolygonCullMode;
    (function (CanvasOccluderPolygonCullMode) {
        CanvasOccluderPolygonCullMode[CanvasOccluderPolygonCullMode["CANVAS_OCCLUDER_POLYGON_CULL_DISABLED"] = 0] = "CANVAS_OCCLUDER_POLYGON_CULL_DISABLED";
        CanvasOccluderPolygonCullMode[CanvasOccluderPolygonCullMode["CANVAS_OCCLUDER_POLYGON_CULL_CLOCKWISE"] = 1] = "CANVAS_OCCLUDER_POLYGON_CULL_CLOCKWISE";
        CanvasOccluderPolygonCullMode[CanvasOccluderPolygonCullMode["CANVAS_OCCLUDER_POLYGON_CULL_COUNTER_CLOCKWISE"] = 2] = "CANVAS_OCCLUDER_POLYGON_CULL_COUNTER_CLOCKWISE";
    })(CanvasOccluderPolygonCullMode = RenderingServer.CanvasOccluderPolygonCullMode || (RenderingServer.CanvasOccluderPolygonCullMode = {}));
    let GlobalShaderParameterType;
    (function (GlobalShaderParameterType) {
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_BOOL"] = 0] = "GLOBAL_VAR_TYPE_BOOL";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_BVEC2"] = 1] = "GLOBAL_VAR_TYPE_BVEC2";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_BVEC3"] = 2] = "GLOBAL_VAR_TYPE_BVEC3";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_BVEC4"] = 3] = "GLOBAL_VAR_TYPE_BVEC4";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_INT"] = 4] = "GLOBAL_VAR_TYPE_INT";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_IVEC2"] = 5] = "GLOBAL_VAR_TYPE_IVEC2";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_IVEC3"] = 6] = "GLOBAL_VAR_TYPE_IVEC3";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_IVEC4"] = 7] = "GLOBAL_VAR_TYPE_IVEC4";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_RECT2I"] = 8] = "GLOBAL_VAR_TYPE_RECT2I";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_UINT"] = 9] = "GLOBAL_VAR_TYPE_UINT";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_UVEC2"] = 10] = "GLOBAL_VAR_TYPE_UVEC2";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_UVEC3"] = 11] = "GLOBAL_VAR_TYPE_UVEC3";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_UVEC4"] = 12] = "GLOBAL_VAR_TYPE_UVEC4";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_FLOAT"] = 13] = "GLOBAL_VAR_TYPE_FLOAT";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_VEC2"] = 14] = "GLOBAL_VAR_TYPE_VEC2";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_VEC3"] = 15] = "GLOBAL_VAR_TYPE_VEC3";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_VEC4"] = 16] = "GLOBAL_VAR_TYPE_VEC4";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_COLOR"] = 17] = "GLOBAL_VAR_TYPE_COLOR";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_RECT2"] = 18] = "GLOBAL_VAR_TYPE_RECT2";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_MAT2"] = 19] = "GLOBAL_VAR_TYPE_MAT2";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_MAT3"] = 20] = "GLOBAL_VAR_TYPE_MAT3";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_MAT4"] = 21] = "GLOBAL_VAR_TYPE_MAT4";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_TRANSFORM_2D"] = 22] = "GLOBAL_VAR_TYPE_TRANSFORM_2D";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_TRANSFORM"] = 23] = "GLOBAL_VAR_TYPE_TRANSFORM";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_SAMPLER2D"] = 24] = "GLOBAL_VAR_TYPE_SAMPLER2D";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_SAMPLER2DARRAY"] = 25] = "GLOBAL_VAR_TYPE_SAMPLER2DARRAY";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_SAMPLER3D"] = 26] = "GLOBAL_VAR_TYPE_SAMPLER3D";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_SAMPLERCUBE"] = 27] = "GLOBAL_VAR_TYPE_SAMPLERCUBE";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_SAMPLEREXT"] = 28] = "GLOBAL_VAR_TYPE_SAMPLEREXT";
        GlobalShaderParameterType[GlobalShaderParameterType["GLOBAL_VAR_TYPE_MAX"] = 29] = "GLOBAL_VAR_TYPE_MAX";
    })(GlobalShaderParameterType = RenderingServer.GlobalShaderParameterType || (RenderingServer.GlobalShaderParameterType = {}));
    let RenderingInfo;
    (function (RenderingInfo) {
        RenderingInfo[RenderingInfo["RENDERING_INFO_TOTAL_OBJECTS_IN_FRAME"] = 0] = "RENDERING_INFO_TOTAL_OBJECTS_IN_FRAME";
        RenderingInfo[RenderingInfo["RENDERING_INFO_TOTAL_PRIMITIVES_IN_FRAME"] = 1] = "RENDERING_INFO_TOTAL_PRIMITIVES_IN_FRAME";
        RenderingInfo[RenderingInfo["RENDERING_INFO_TOTAL_DRAW_CALLS_IN_FRAME"] = 2] = "RENDERING_INFO_TOTAL_DRAW_CALLS_IN_FRAME";
        RenderingInfo[RenderingInfo["RENDERING_INFO_TEXTURE_MEM_USED"] = 3] = "RENDERING_INFO_TEXTURE_MEM_USED";
        RenderingInfo[RenderingInfo["RENDERING_INFO_BUFFER_MEM_USED"] = 4] = "RENDERING_INFO_BUFFER_MEM_USED";
        RenderingInfo[RenderingInfo["RENDERING_INFO_VIDEO_MEM_USED"] = 5] = "RENDERING_INFO_VIDEO_MEM_USED";
        RenderingInfo[RenderingInfo["RENDERING_INFO_PIPELINE_COMPILATIONS_CANVAS"] = 6] = "RENDERING_INFO_PIPELINE_COMPILATIONS_CANVAS";
        RenderingInfo[RenderingInfo["RENDERING_INFO_PIPELINE_COMPILATIONS_MESH"] = 7] = "RENDERING_INFO_PIPELINE_COMPILATIONS_MESH";
        RenderingInfo[RenderingInfo["RENDERING_INFO_PIPELINE_COMPILATIONS_SURFACE"] = 8] = "RENDERING_INFO_PIPELINE_COMPILATIONS_SURFACE";
        RenderingInfo[RenderingInfo["RENDERING_INFO_PIPELINE_COMPILATIONS_DRAW"] = 9] = "RENDERING_INFO_PIPELINE_COMPILATIONS_DRAW";
        RenderingInfo[RenderingInfo["RENDERING_INFO_PIPELINE_COMPILATIONS_SPECIALIZATION"] = 10] = "RENDERING_INFO_PIPELINE_COMPILATIONS_SPECIALIZATION";
    })(RenderingInfo = RenderingServer.RenderingInfo || (RenderingServer.RenderingInfo = {}));
    let PipelineSource;
    (function (PipelineSource) {
        PipelineSource[PipelineSource["PIPELINE_SOURCE_CANVAS"] = 0] = "PIPELINE_SOURCE_CANVAS";
        PipelineSource[PipelineSource["PIPELINE_SOURCE_MESH"] = 1] = "PIPELINE_SOURCE_MESH";
        PipelineSource[PipelineSource["PIPELINE_SOURCE_SURFACE"] = 2] = "PIPELINE_SOURCE_SURFACE";
        PipelineSource[PipelineSource["PIPELINE_SOURCE_DRAW"] = 3] = "PIPELINE_SOURCE_DRAW";
        PipelineSource[PipelineSource["PIPELINE_SOURCE_SPECIALIZATION"] = 4] = "PIPELINE_SOURCE_SPECIALIZATION";
        PipelineSource[PipelineSource["PIPELINE_SOURCE_MAX"] = 5] = "PIPELINE_SOURCE_MAX";
    })(PipelineSource = RenderingServer.PipelineSource || (RenderingServer.PipelineSource = {}));
    let Features;
    (function (Features) {
        Features[Features["FEATURE_SHADERS"] = 0] = "FEATURE_SHADERS";
        Features[Features["FEATURE_MULTITHREADED"] = 1] = "FEATURE_MULTITHREADED";
    })(Features = RenderingServer.Features || (RenderingServer.Features = {}));
})(RenderingServer || (RenderingServer = {}));
export var ProgressBar;
(function (ProgressBar) {
    let FillMode;
    (function (FillMode) {
        FillMode[FillMode["FILL_BEGIN_TO_END"] = 0] = "FILL_BEGIN_TO_END";
        FillMode[FillMode["FILL_END_TO_BEGIN"] = 1] = "FILL_END_TO_BEGIN";
        FillMode[FillMode["FILL_TOP_TO_BOTTOM"] = 2] = "FILL_TOP_TO_BOTTOM";
        FillMode[FillMode["FILL_BOTTOM_TO_TOP"] = 3] = "FILL_BOTTOM_TO_TOP";
    })(FillMode = ProgressBar.FillMode || (ProgressBar.FillMode = {}));
})(ProgressBar || (ProgressBar = {}));
export var RichTextLabel;
(function (RichTextLabel) {
    let ListType;
    (function (ListType) {
        ListType[ListType["LIST_NUMBERS"] = 0] = "LIST_NUMBERS";
        ListType[ListType["LIST_LETTERS"] = 1] = "LIST_LETTERS";
        ListType[ListType["LIST_ROMAN"] = 2] = "LIST_ROMAN";
        ListType[ListType["LIST_DOTS"] = 3] = "LIST_DOTS";
    })(ListType = RichTextLabel.ListType || (RichTextLabel.ListType = {}));
    let MenuItems;
    (function (MenuItems) {
        MenuItems[MenuItems["MENU_COPY"] = 0] = "MENU_COPY";
        MenuItems[MenuItems["MENU_SELECT_ALL"] = 1] = "MENU_SELECT_ALL";
        MenuItems[MenuItems["MENU_MAX"] = 2] = "MENU_MAX";
    })(MenuItems = RichTextLabel.MenuItems || (RichTextLabel.MenuItems = {}));
    let MetaUnderline;
    (function (MetaUnderline) {
        MetaUnderline[MetaUnderline["META_UNDERLINE_NEVER"] = 0] = "META_UNDERLINE_NEVER";
        MetaUnderline[MetaUnderline["META_UNDERLINE_ALWAYS"] = 1] = "META_UNDERLINE_ALWAYS";
        MetaUnderline[MetaUnderline["META_UNDERLINE_ON_HOVER"] = 2] = "META_UNDERLINE_ON_HOVER";
    })(MetaUnderline = RichTextLabel.MetaUnderline || (RichTextLabel.MetaUnderline = {}));
    let ImageUpdateMask;
    (function (ImageUpdateMask) {
        ImageUpdateMask[ImageUpdateMask["UPDATE_TEXTURE"] = 1] = "UPDATE_TEXTURE";
        ImageUpdateMask[ImageUpdateMask["UPDATE_SIZE"] = 2] = "UPDATE_SIZE";
        ImageUpdateMask[ImageUpdateMask["UPDATE_COLOR"] = 4] = "UPDATE_COLOR";
        ImageUpdateMask[ImageUpdateMask["UPDATE_ALIGNMENT"] = 8] = "UPDATE_ALIGNMENT";
        ImageUpdateMask[ImageUpdateMask["UPDATE_REGION"] = 16] = "UPDATE_REGION";
        ImageUpdateMask[ImageUpdateMask["UPDATE_PAD"] = 32] = "UPDATE_PAD";
        ImageUpdateMask[ImageUpdateMask["UPDATE_TOOLTIP"] = 64] = "UPDATE_TOOLTIP";
        ImageUpdateMask[ImageUpdateMask["UPDATE_WIDTH_IN_PERCENT"] = 128] = "UPDATE_WIDTH_IN_PERCENT";
    })(ImageUpdateMask = RichTextLabel.ImageUpdateMask || (RichTextLabel.ImageUpdateMask = {}));
})(RichTextLabel || (RichTextLabel = {}));
export var VisualShaderNodeIs;
(function (VisualShaderNodeIs) {
    let Function;
    (function (Function) {
        Function[Function["FUNC_IS_INF"] = 0] = "FUNC_IS_INF";
        Function[Function["FUNC_IS_NAN"] = 1] = "FUNC_IS_NAN";
        Function[Function["FUNC_MAX"] = 2] = "FUNC_MAX";
    })(Function = VisualShaderNodeIs.Function || (VisualShaderNodeIs.Function = {}));
})(VisualShaderNodeIs || (VisualShaderNodeIs = {}));
export var VisualShaderNodeColorOp;
(function (VisualShaderNodeColorOp) {
    let Operator;
    (function (Operator) {
        Operator[Operator["OP_SCREEN"] = 0] = "OP_SCREEN";
        Operator[Operator["OP_DIFFERENCE"] = 1] = "OP_DIFFERENCE";
        Operator[Operator["OP_DARKEN"] = 2] = "OP_DARKEN";
        Operator[Operator["OP_LIGHTEN"] = 3] = "OP_LIGHTEN";
        Operator[Operator["OP_OVERLAY"] = 4] = "OP_OVERLAY";
        Operator[Operator["OP_DODGE"] = 5] = "OP_DODGE";
        Operator[Operator["OP_BURN"] = 6] = "OP_BURN";
        Operator[Operator["OP_SOFT_LIGHT"] = 7] = "OP_SOFT_LIGHT";
        Operator[Operator["OP_HARD_LIGHT"] = 8] = "OP_HARD_LIGHT";
        Operator[Operator["OP_MAX"] = 9] = "OP_MAX";
    })(Operator = VisualShaderNodeColorOp.Operator || (VisualShaderNodeColorOp.Operator = {}));
})(VisualShaderNodeColorOp || (VisualShaderNodeColorOp = {}));
export var CanvasItem;
(function (CanvasItem) {
    CanvasItem.NOTIFICATION_TRANSFORM_CHANGED = 2000;
    CanvasItem.NOTIFICATION_LOCAL_TRANSFORM_CHANGED = 35;
    CanvasItem.NOTIFICATION_DRAW = 30;
    CanvasItem.NOTIFICATION_VISIBILITY_CHANGED = 31;
    CanvasItem.NOTIFICATION_ENTER_CANVAS = 32;
    CanvasItem.NOTIFICATION_EXIT_CANVAS = 33;
    CanvasItem.NOTIFICATION_WORLD_2D_CHANGED = 36;
    let TextureFilter;
    (function (TextureFilter) {
        TextureFilter[TextureFilter["TEXTURE_FILTER_PARENT_NODE"] = 0] = "TEXTURE_FILTER_PARENT_NODE";
        TextureFilter[TextureFilter["TEXTURE_FILTER_NEAREST"] = 1] = "TEXTURE_FILTER_NEAREST";
        TextureFilter[TextureFilter["TEXTURE_FILTER_LINEAR"] = 2] = "TEXTURE_FILTER_LINEAR";
        TextureFilter[TextureFilter["TEXTURE_FILTER_NEAREST_WITH_MIPMAPS"] = 3] = "TEXTURE_FILTER_NEAREST_WITH_MIPMAPS";
        TextureFilter[TextureFilter["TEXTURE_FILTER_LINEAR_WITH_MIPMAPS"] = 4] = "TEXTURE_FILTER_LINEAR_WITH_MIPMAPS";
        TextureFilter[TextureFilter["TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC"] = 5] = "TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC";
        TextureFilter[TextureFilter["TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC"] = 6] = "TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC";
        TextureFilter[TextureFilter["TEXTURE_FILTER_MAX"] = 7] = "TEXTURE_FILTER_MAX";
    })(TextureFilter = CanvasItem.TextureFilter || (CanvasItem.TextureFilter = {}));
    let TextureRepeat;
    (function (TextureRepeat) {
        TextureRepeat[TextureRepeat["TEXTURE_REPEAT_PARENT_NODE"] = 0] = "TEXTURE_REPEAT_PARENT_NODE";
        TextureRepeat[TextureRepeat["TEXTURE_REPEAT_DISABLED"] = 1] = "TEXTURE_REPEAT_DISABLED";
        TextureRepeat[TextureRepeat["TEXTURE_REPEAT_ENABLED"] = 2] = "TEXTURE_REPEAT_ENABLED";
        TextureRepeat[TextureRepeat["TEXTURE_REPEAT_MIRROR"] = 3] = "TEXTURE_REPEAT_MIRROR";
        TextureRepeat[TextureRepeat["TEXTURE_REPEAT_MAX"] = 4] = "TEXTURE_REPEAT_MAX";
    })(TextureRepeat = CanvasItem.TextureRepeat || (CanvasItem.TextureRepeat = {}));
    let ClipChildrenMode;
    (function (ClipChildrenMode) {
        ClipChildrenMode[ClipChildrenMode["CLIP_CHILDREN_DISABLED"] = 0] = "CLIP_CHILDREN_DISABLED";
        ClipChildrenMode[ClipChildrenMode["CLIP_CHILDREN_ONLY"] = 1] = "CLIP_CHILDREN_ONLY";
        ClipChildrenMode[ClipChildrenMode["CLIP_CHILDREN_AND_DRAW"] = 2] = "CLIP_CHILDREN_AND_DRAW";
        ClipChildrenMode[ClipChildrenMode["CLIP_CHILDREN_MAX"] = 3] = "CLIP_CHILDREN_MAX";
    })(ClipChildrenMode = CanvasItem.ClipChildrenMode || (CanvasItem.ClipChildrenMode = {}));
})(CanvasItem || (CanvasItem = {}));
export var NavigationPolygon;
(function (NavigationPolygon) {
    let SamplePartitionType;
    (function (SamplePartitionType) {
        SamplePartitionType[SamplePartitionType["SAMPLE_PARTITION_CONVEX_PARTITION"] = 0] = "SAMPLE_PARTITION_CONVEX_PARTITION";
        SamplePartitionType[SamplePartitionType["SAMPLE_PARTITION_TRIANGULATE"] = 1] = "SAMPLE_PARTITION_TRIANGULATE";
        SamplePartitionType[SamplePartitionType["SAMPLE_PARTITION_MAX"] = 2] = "SAMPLE_PARTITION_MAX";
    })(SamplePartitionType = NavigationPolygon.SamplePartitionType || (NavigationPolygon.SamplePartitionType = {}));
    let ParsedGeometryType;
    (function (ParsedGeometryType) {
        ParsedGeometryType[ParsedGeometryType["PARSED_GEOMETRY_MESH_INSTANCES"] = 0] = "PARSED_GEOMETRY_MESH_INSTANCES";
        ParsedGeometryType[ParsedGeometryType["PARSED_GEOMETRY_STATIC_COLLIDERS"] = 1] = "PARSED_GEOMETRY_STATIC_COLLIDERS";
        ParsedGeometryType[ParsedGeometryType["PARSED_GEOMETRY_BOTH"] = 2] = "PARSED_GEOMETRY_BOTH";
        ParsedGeometryType[ParsedGeometryType["PARSED_GEOMETRY_MAX"] = 3] = "PARSED_GEOMETRY_MAX";
    })(ParsedGeometryType = NavigationPolygon.ParsedGeometryType || (NavigationPolygon.ParsedGeometryType = {}));
    let SourceGeometryMode;
    (function (SourceGeometryMode) {
        SourceGeometryMode[SourceGeometryMode["SOURCE_GEOMETRY_ROOT_NODE_CHILDREN"] = 0] = "SOURCE_GEOMETRY_ROOT_NODE_CHILDREN";
        SourceGeometryMode[SourceGeometryMode["SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN"] = 1] = "SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN";
        SourceGeometryMode[SourceGeometryMode["SOURCE_GEOMETRY_GROUPS_EXPLICIT"] = 2] = "SOURCE_GEOMETRY_GROUPS_EXPLICIT";
        SourceGeometryMode[SourceGeometryMode["SOURCE_GEOMETRY_MAX"] = 3] = "SOURCE_GEOMETRY_MAX";
    })(SourceGeometryMode = NavigationPolygon.SourceGeometryMode || (NavigationPolygon.SourceGeometryMode = {}));
})(NavigationPolygon || (NavigationPolygon = {}));
export var VisualShaderNodeRemap;
(function (VisualShaderNodeRemap) {
    let OpType;
    (function (OpType) {
        OpType[OpType["OP_TYPE_SCALAR"] = 0] = "OP_TYPE_SCALAR";
        OpType[OpType["OP_TYPE_VECTOR_2D"] = 1] = "OP_TYPE_VECTOR_2D";
        OpType[OpType["OP_TYPE_VECTOR_2D_SCALAR"] = 2] = "OP_TYPE_VECTOR_2D_SCALAR";
        OpType[OpType["OP_TYPE_VECTOR_3D"] = 3] = "OP_TYPE_VECTOR_3D";
        OpType[OpType["OP_TYPE_VECTOR_3D_SCALAR"] = 4] = "OP_TYPE_VECTOR_3D_SCALAR";
        OpType[OpType["OP_TYPE_VECTOR_4D"] = 5] = "OP_TYPE_VECTOR_4D";
        OpType[OpType["OP_TYPE_VECTOR_4D_SCALAR"] = 6] = "OP_TYPE_VECTOR_4D_SCALAR";
        OpType[OpType["OP_TYPE_MAX"] = 7] = "OP_TYPE_MAX";
    })(OpType = VisualShaderNodeRemap.OpType || (VisualShaderNodeRemap.OpType = {}));
})(VisualShaderNodeRemap || (VisualShaderNodeRemap = {}));
export var PinJoint3D;
(function (PinJoint3D) {
    let Param;
    (function (Param) {
        Param[Param["PARAM_BIAS"] = 0] = "PARAM_BIAS";
        Param[Param["PARAM_DAMPING"] = 1] = "PARAM_DAMPING";
        Param[Param["PARAM_IMPULSE_CLAMP"] = 2] = "PARAM_IMPULSE_CLAMP";
    })(Param = PinJoint3D.Param || (PinJoint3D.Param = {}));
})(PinJoint3D || (PinJoint3D = {}));
export var SceneTree;
(function (SceneTree) {
    let GroupCallFlags;
    (function (GroupCallFlags) {
        GroupCallFlags[GroupCallFlags["GROUP_CALL_DEFAULT"] = 0] = "GROUP_CALL_DEFAULT";
        GroupCallFlags[GroupCallFlags["GROUP_CALL_REVERSE"] = 1] = "GROUP_CALL_REVERSE";
        GroupCallFlags[GroupCallFlags["GROUP_CALL_DEFERRED"] = 2] = "GROUP_CALL_DEFERRED";
        GroupCallFlags[GroupCallFlags["GROUP_CALL_UNIQUE"] = 4] = "GROUP_CALL_UNIQUE";
    })(GroupCallFlags = SceneTree.GroupCallFlags || (SceneTree.GroupCallFlags = {}));
})(SceneTree || (SceneTree = {}));
export var HTTPClient;
(function (HTTPClient) {
    let Method;
    (function (Method) {
        Method[Method["METHOD_GET"] = 0] = "METHOD_GET";
        Method[Method["METHOD_HEAD"] = 1] = "METHOD_HEAD";
        Method[Method["METHOD_POST"] = 2] = "METHOD_POST";
        Method[Method["METHOD_PUT"] = 3] = "METHOD_PUT";
        Method[Method["METHOD_DELETE"] = 4] = "METHOD_DELETE";
        Method[Method["METHOD_OPTIONS"] = 5] = "METHOD_OPTIONS";
        Method[Method["METHOD_TRACE"] = 6] = "METHOD_TRACE";
        Method[Method["METHOD_CONNECT"] = 7] = "METHOD_CONNECT";
        Method[Method["METHOD_PATCH"] = 8] = "METHOD_PATCH";
        Method[Method["METHOD_MAX"] = 9] = "METHOD_MAX";
    })(Method = HTTPClient.Method || (HTTPClient.Method = {}));
    let Status;
    (function (Status) {
        Status[Status["STATUS_DISCONNECTED"] = 0] = "STATUS_DISCONNECTED";
        Status[Status["STATUS_RESOLVING"] = 1] = "STATUS_RESOLVING";
        Status[Status["STATUS_CANT_RESOLVE"] = 2] = "STATUS_CANT_RESOLVE";
        Status[Status["STATUS_CONNECTING"] = 3] = "STATUS_CONNECTING";
        Status[Status["STATUS_CANT_CONNECT"] = 4] = "STATUS_CANT_CONNECT";
        Status[Status["STATUS_CONNECTED"] = 5] = "STATUS_CONNECTED";
        Status[Status["STATUS_REQUESTING"] = 6] = "STATUS_REQUESTING";
        Status[Status["STATUS_BODY"] = 7] = "STATUS_BODY";
        Status[Status["STATUS_CONNECTION_ERROR"] = 8] = "STATUS_CONNECTION_ERROR";
        Status[Status["STATUS_TLS_HANDSHAKE_ERROR"] = 9] = "STATUS_TLS_HANDSHAKE_ERROR";
    })(Status = HTTPClient.Status || (HTTPClient.Status = {}));
    let ResponseCode;
    (function (ResponseCode) {
        ResponseCode[ResponseCode["RESPONSE_CONTINUE"] = 100] = "RESPONSE_CONTINUE";
        ResponseCode[ResponseCode["RESPONSE_SWITCHING_PROTOCOLS"] = 101] = "RESPONSE_SWITCHING_PROTOCOLS";
        ResponseCode[ResponseCode["RESPONSE_PROCESSING"] = 102] = "RESPONSE_PROCESSING";
        ResponseCode[ResponseCode["RESPONSE_OK"] = 200] = "RESPONSE_OK";
        ResponseCode[ResponseCode["RESPONSE_CREATED"] = 201] = "RESPONSE_CREATED";
        ResponseCode[ResponseCode["RESPONSE_ACCEPTED"] = 202] = "RESPONSE_ACCEPTED";
        ResponseCode[ResponseCode["RESPONSE_NON_AUTHORITATIVE_INFORMATION"] = 203] = "RESPONSE_NON_AUTHORITATIVE_INFORMATION";
        ResponseCode[ResponseCode["RESPONSE_NO_CONTENT"] = 204] = "RESPONSE_NO_CONTENT";
        ResponseCode[ResponseCode["RESPONSE_RESET_CONTENT"] = 205] = "RESPONSE_RESET_CONTENT";
        ResponseCode[ResponseCode["RESPONSE_PARTIAL_CONTENT"] = 206] = "RESPONSE_PARTIAL_CONTENT";
        ResponseCode[ResponseCode["RESPONSE_MULTI_STATUS"] = 207] = "RESPONSE_MULTI_STATUS";
        ResponseCode[ResponseCode["RESPONSE_ALREADY_REPORTED"] = 208] = "RESPONSE_ALREADY_REPORTED";
        ResponseCode[ResponseCode["RESPONSE_IM_USED"] = 226] = "RESPONSE_IM_USED";
        ResponseCode[ResponseCode["RESPONSE_MULTIPLE_CHOICES"] = 300] = "RESPONSE_MULTIPLE_CHOICES";
        ResponseCode[ResponseCode["RESPONSE_MOVED_PERMANENTLY"] = 301] = "RESPONSE_MOVED_PERMANENTLY";
        ResponseCode[ResponseCode["RESPONSE_FOUND"] = 302] = "RESPONSE_FOUND";
        ResponseCode[ResponseCode["RESPONSE_SEE_OTHER"] = 303] = "RESPONSE_SEE_OTHER";
        ResponseCode[ResponseCode["RESPONSE_NOT_MODIFIED"] = 304] = "RESPONSE_NOT_MODIFIED";
        ResponseCode[ResponseCode["RESPONSE_USE_PROXY"] = 305] = "RESPONSE_USE_PROXY";
        ResponseCode[ResponseCode["RESPONSE_SWITCH_PROXY"] = 306] = "RESPONSE_SWITCH_PROXY";
        ResponseCode[ResponseCode["RESPONSE_TEMPORARY_REDIRECT"] = 307] = "RESPONSE_TEMPORARY_REDIRECT";
        ResponseCode[ResponseCode["RESPONSE_PERMANENT_REDIRECT"] = 308] = "RESPONSE_PERMANENT_REDIRECT";
        ResponseCode[ResponseCode["RESPONSE_BAD_REQUEST"] = 400] = "RESPONSE_BAD_REQUEST";
        ResponseCode[ResponseCode["RESPONSE_UNAUTHORIZED"] = 401] = "RESPONSE_UNAUTHORIZED";
        ResponseCode[ResponseCode["RESPONSE_PAYMENT_REQUIRED"] = 402] = "RESPONSE_PAYMENT_REQUIRED";
        ResponseCode[ResponseCode["RESPONSE_FORBIDDEN"] = 403] = "RESPONSE_FORBIDDEN";
        ResponseCode[ResponseCode["RESPONSE_NOT_FOUND"] = 404] = "RESPONSE_NOT_FOUND";
        ResponseCode[ResponseCode["RESPONSE_METHOD_NOT_ALLOWED"] = 405] = "RESPONSE_METHOD_NOT_ALLOWED";
        ResponseCode[ResponseCode["RESPONSE_NOT_ACCEPTABLE"] = 406] = "RESPONSE_NOT_ACCEPTABLE";
        ResponseCode[ResponseCode["RESPONSE_PROXY_AUTHENTICATION_REQUIRED"] = 407] = "RESPONSE_PROXY_AUTHENTICATION_REQUIRED";
        ResponseCode[ResponseCode["RESPONSE_REQUEST_TIMEOUT"] = 408] = "RESPONSE_REQUEST_TIMEOUT";
        ResponseCode[ResponseCode["RESPONSE_CONFLICT"] = 409] = "RESPONSE_CONFLICT";
        ResponseCode[ResponseCode["RESPONSE_GONE"] = 410] = "RESPONSE_GONE";
        ResponseCode[ResponseCode["RESPONSE_LENGTH_REQUIRED"] = 411] = "RESPONSE_LENGTH_REQUIRED";
        ResponseCode[ResponseCode["RESPONSE_PRECONDITION_FAILED"] = 412] = "RESPONSE_PRECONDITION_FAILED";
        ResponseCode[ResponseCode["RESPONSE_REQUEST_ENTITY_TOO_LARGE"] = 413] = "RESPONSE_REQUEST_ENTITY_TOO_LARGE";
        ResponseCode[ResponseCode["RESPONSE_REQUEST_URI_TOO_LONG"] = 414] = "RESPONSE_REQUEST_URI_TOO_LONG";
        ResponseCode[ResponseCode["RESPONSE_UNSUPPORTED_MEDIA_TYPE"] = 415] = "RESPONSE_UNSUPPORTED_MEDIA_TYPE";
        ResponseCode[ResponseCode["RESPONSE_REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "RESPONSE_REQUESTED_RANGE_NOT_SATISFIABLE";
        ResponseCode[ResponseCode["RESPONSE_EXPECTATION_FAILED"] = 417] = "RESPONSE_EXPECTATION_FAILED";
        ResponseCode[ResponseCode["RESPONSE_IM_A_TEAPOT"] = 418] = "RESPONSE_IM_A_TEAPOT";
        ResponseCode[ResponseCode["RESPONSE_MISDIRECTED_REQUEST"] = 421] = "RESPONSE_MISDIRECTED_REQUEST";
        ResponseCode[ResponseCode["RESPONSE_UNPROCESSABLE_ENTITY"] = 422] = "RESPONSE_UNPROCESSABLE_ENTITY";
        ResponseCode[ResponseCode["RESPONSE_LOCKED"] = 423] = "RESPONSE_LOCKED";
        ResponseCode[ResponseCode["RESPONSE_FAILED_DEPENDENCY"] = 424] = "RESPONSE_FAILED_DEPENDENCY";
        ResponseCode[ResponseCode["RESPONSE_UPGRADE_REQUIRED"] = 426] = "RESPONSE_UPGRADE_REQUIRED";
        ResponseCode[ResponseCode["RESPONSE_PRECONDITION_REQUIRED"] = 428] = "RESPONSE_PRECONDITION_REQUIRED";
        ResponseCode[ResponseCode["RESPONSE_TOO_MANY_REQUESTS"] = 429] = "RESPONSE_TOO_MANY_REQUESTS";
        ResponseCode[ResponseCode["RESPONSE_REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "RESPONSE_REQUEST_HEADER_FIELDS_TOO_LARGE";
        ResponseCode[ResponseCode["RESPONSE_UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "RESPONSE_UNAVAILABLE_FOR_LEGAL_REASONS";
        ResponseCode[ResponseCode["RESPONSE_INTERNAL_SERVER_ERROR"] = 500] = "RESPONSE_INTERNAL_SERVER_ERROR";
        ResponseCode[ResponseCode["RESPONSE_NOT_IMPLEMENTED"] = 501] = "RESPONSE_NOT_IMPLEMENTED";
        ResponseCode[ResponseCode["RESPONSE_BAD_GATEWAY"] = 502] = "RESPONSE_BAD_GATEWAY";
        ResponseCode[ResponseCode["RESPONSE_SERVICE_UNAVAILABLE"] = 503] = "RESPONSE_SERVICE_UNAVAILABLE";
        ResponseCode[ResponseCode["RESPONSE_GATEWAY_TIMEOUT"] = 504] = "RESPONSE_GATEWAY_TIMEOUT";
        ResponseCode[ResponseCode["RESPONSE_HTTP_VERSION_NOT_SUPPORTED"] = 505] = "RESPONSE_HTTP_VERSION_NOT_SUPPORTED";
        ResponseCode[ResponseCode["RESPONSE_VARIANT_ALSO_NEGOTIATES"] = 506] = "RESPONSE_VARIANT_ALSO_NEGOTIATES";
        ResponseCode[ResponseCode["RESPONSE_INSUFFICIENT_STORAGE"] = 507] = "RESPONSE_INSUFFICIENT_STORAGE";
        ResponseCode[ResponseCode["RESPONSE_LOOP_DETECTED"] = 508] = "RESPONSE_LOOP_DETECTED";
        ResponseCode[ResponseCode["RESPONSE_NOT_EXTENDED"] = 510] = "RESPONSE_NOT_EXTENDED";
        ResponseCode[ResponseCode["RESPONSE_NETWORK_AUTH_REQUIRED"] = 511] = "RESPONSE_NETWORK_AUTH_REQUIRED";
    })(ResponseCode = HTTPClient.ResponseCode || (HTTPClient.ResponseCode = {}));
})(HTTPClient || (HTTPClient = {}));
export var EditorScenePostImportPlugin;
(function (EditorScenePostImportPlugin) {
    let InternalImportCategory;
    (function (InternalImportCategory) {
        InternalImportCategory[InternalImportCategory["INTERNAL_IMPORT_CATEGORY_NODE"] = 0] = "INTERNAL_IMPORT_CATEGORY_NODE";
        InternalImportCategory[InternalImportCategory["INTERNAL_IMPORT_CATEGORY_MESH_3D_NODE"] = 1] = "INTERNAL_IMPORT_CATEGORY_MESH_3D_NODE";
        InternalImportCategory[InternalImportCategory["INTERNAL_IMPORT_CATEGORY_MESH"] = 2] = "INTERNAL_IMPORT_CATEGORY_MESH";
        InternalImportCategory[InternalImportCategory["INTERNAL_IMPORT_CATEGORY_MATERIAL"] = 3] = "INTERNAL_IMPORT_CATEGORY_MATERIAL";
        InternalImportCategory[InternalImportCategory["INTERNAL_IMPORT_CATEGORY_ANIMATION"] = 4] = "INTERNAL_IMPORT_CATEGORY_ANIMATION";
        InternalImportCategory[InternalImportCategory["INTERNAL_IMPORT_CATEGORY_ANIMATION_NODE"] = 5] = "INTERNAL_IMPORT_CATEGORY_ANIMATION_NODE";
        InternalImportCategory[InternalImportCategory["INTERNAL_IMPORT_CATEGORY_SKELETON_3D_NODE"] = 6] = "INTERNAL_IMPORT_CATEGORY_SKELETON_3D_NODE";
        InternalImportCategory[InternalImportCategory["INTERNAL_IMPORT_CATEGORY_MAX"] = 7] = "INTERNAL_IMPORT_CATEGORY_MAX";
    })(InternalImportCategory = EditorScenePostImportPlugin.InternalImportCategory || (EditorScenePostImportPlugin.InternalImportCategory = {}));
})(EditorScenePostImportPlugin || (EditorScenePostImportPlugin = {}));
export var SurfaceTool;
(function (SurfaceTool) {
    let CustomFormat;
    (function (CustomFormat) {
        CustomFormat[CustomFormat["CUSTOM_RGBA8_UNORM"] = 0] = "CUSTOM_RGBA8_UNORM";
        CustomFormat[CustomFormat["CUSTOM_RGBA8_SNORM"] = 1] = "CUSTOM_RGBA8_SNORM";
        CustomFormat[CustomFormat["CUSTOM_RG_HALF"] = 2] = "CUSTOM_RG_HALF";
        CustomFormat[CustomFormat["CUSTOM_RGBA_HALF"] = 3] = "CUSTOM_RGBA_HALF";
        CustomFormat[CustomFormat["CUSTOM_R_FLOAT"] = 4] = "CUSTOM_R_FLOAT";
        CustomFormat[CustomFormat["CUSTOM_RG_FLOAT"] = 5] = "CUSTOM_RG_FLOAT";
        CustomFormat[CustomFormat["CUSTOM_RGB_FLOAT"] = 6] = "CUSTOM_RGB_FLOAT";
        CustomFormat[CustomFormat["CUSTOM_RGBA_FLOAT"] = 7] = "CUSTOM_RGBA_FLOAT";
        CustomFormat[CustomFormat["CUSTOM_MAX"] = 8] = "CUSTOM_MAX";
    })(CustomFormat = SurfaceTool.CustomFormat || (SurfaceTool.CustomFormat = {}));
    let SkinWeightCount;
    (function (SkinWeightCount) {
        SkinWeightCount[SkinWeightCount["SKIN_4_WEIGHTS"] = 0] = "SKIN_4_WEIGHTS";
        SkinWeightCount[SkinWeightCount["SKIN_8_WEIGHTS"] = 1] = "SKIN_8_WEIGHTS";
    })(SkinWeightCount = SurfaceTool.SkinWeightCount || (SurfaceTool.SkinWeightCount = {}));
})(SurfaceTool || (SurfaceTool = {}));
export var PortableCompressedTexture2D;
(function (PortableCompressedTexture2D) {
    let CompressionMode;
    (function (CompressionMode) {
        CompressionMode[CompressionMode["COMPRESSION_MODE_LOSSLESS"] = 0] = "COMPRESSION_MODE_LOSSLESS";
        CompressionMode[CompressionMode["COMPRESSION_MODE_LOSSY"] = 1] = "COMPRESSION_MODE_LOSSY";
        CompressionMode[CompressionMode["COMPRESSION_MODE_BASIS_UNIVERSAL"] = 2] = "COMPRESSION_MODE_BASIS_UNIVERSAL";
        CompressionMode[CompressionMode["COMPRESSION_MODE_S3TC"] = 3] = "COMPRESSION_MODE_S3TC";
        CompressionMode[CompressionMode["COMPRESSION_MODE_ETC2"] = 4] = "COMPRESSION_MODE_ETC2";
        CompressionMode[CompressionMode["COMPRESSION_MODE_BPTC"] = 5] = "COMPRESSION_MODE_BPTC";
    })(CompressionMode = PortableCompressedTexture2D.CompressionMode || (PortableCompressedTexture2D.CompressionMode = {}));
})(PortableCompressedTexture2D || (PortableCompressedTexture2D = {}));
export var AnimationMixer;
(function (AnimationMixer) {
    let AnimationCallbackModeProcess;
    (function (AnimationCallbackModeProcess) {
        AnimationCallbackModeProcess[AnimationCallbackModeProcess["ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS"] = 0] = "ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS";
        AnimationCallbackModeProcess[AnimationCallbackModeProcess["ANIMATION_CALLBACK_MODE_PROCESS_IDLE"] = 1] = "ANIMATION_CALLBACK_MODE_PROCESS_IDLE";
        AnimationCallbackModeProcess[AnimationCallbackModeProcess["ANIMATION_CALLBACK_MODE_PROCESS_MANUAL"] = 2] = "ANIMATION_CALLBACK_MODE_PROCESS_MANUAL";
    })(AnimationCallbackModeProcess = AnimationMixer.AnimationCallbackModeProcess || (AnimationMixer.AnimationCallbackModeProcess = {}));
    let AnimationCallbackModeMethod;
    (function (AnimationCallbackModeMethod) {
        AnimationCallbackModeMethod[AnimationCallbackModeMethod["ANIMATION_CALLBACK_MODE_METHOD_DEFERRED"] = 0] = "ANIMATION_CALLBACK_MODE_METHOD_DEFERRED";
        AnimationCallbackModeMethod[AnimationCallbackModeMethod["ANIMATION_CALLBACK_MODE_METHOD_IMMEDIATE"] = 1] = "ANIMATION_CALLBACK_MODE_METHOD_IMMEDIATE";
    })(AnimationCallbackModeMethod = AnimationMixer.AnimationCallbackModeMethod || (AnimationMixer.AnimationCallbackModeMethod = {}));
    let AnimationCallbackModeDiscrete;
    (function (AnimationCallbackModeDiscrete) {
        AnimationCallbackModeDiscrete[AnimationCallbackModeDiscrete["ANIMATION_CALLBACK_MODE_DISCRETE_DOMINANT"] = 0] = "ANIMATION_CALLBACK_MODE_DISCRETE_DOMINANT";
        AnimationCallbackModeDiscrete[AnimationCallbackModeDiscrete["ANIMATION_CALLBACK_MODE_DISCRETE_RECESSIVE"] = 1] = "ANIMATION_CALLBACK_MODE_DISCRETE_RECESSIVE";
        AnimationCallbackModeDiscrete[AnimationCallbackModeDiscrete["ANIMATION_CALLBACK_MODE_DISCRETE_FORCE_CONTINUOUS"] = 2] = "ANIMATION_CALLBACK_MODE_DISCRETE_FORCE_CONTINUOUS";
    })(AnimationCallbackModeDiscrete = AnimationMixer.AnimationCallbackModeDiscrete || (AnimationMixer.AnimationCallbackModeDiscrete = {}));
})(AnimationMixer || (AnimationMixer = {}));
export var AnimationPlayer;
(function (AnimationPlayer) {
    let AnimationProcessCallback;
    (function (AnimationProcessCallback) {
        AnimationProcessCallback[AnimationProcessCallback["ANIMATION_PROCESS_PHYSICS"] = 0] = "ANIMATION_PROCESS_PHYSICS";
        AnimationProcessCallback[AnimationProcessCallback["ANIMATION_PROCESS_IDLE"] = 1] = "ANIMATION_PROCESS_IDLE";
        AnimationProcessCallback[AnimationProcessCallback["ANIMATION_PROCESS_MANUAL"] = 2] = "ANIMATION_PROCESS_MANUAL";
    })(AnimationProcessCallback = AnimationPlayer.AnimationProcessCallback || (AnimationPlayer.AnimationProcessCallback = {}));
    let AnimationMethodCallMode;
    (function (AnimationMethodCallMode) {
        AnimationMethodCallMode[AnimationMethodCallMode["ANIMATION_METHOD_CALL_DEFERRED"] = 0] = "ANIMATION_METHOD_CALL_DEFERRED";
        AnimationMethodCallMode[AnimationMethodCallMode["ANIMATION_METHOD_CALL_IMMEDIATE"] = 1] = "ANIMATION_METHOD_CALL_IMMEDIATE";
    })(AnimationMethodCallMode = AnimationPlayer.AnimationMethodCallMode || (AnimationPlayer.AnimationMethodCallMode = {}));
})(AnimationPlayer || (AnimationPlayer = {}));
export var StyleBoxTexture;
(function (StyleBoxTexture) {
    let AxisStretchMode;
    (function (AxisStretchMode) {
        AxisStretchMode[AxisStretchMode["AXIS_STRETCH_MODE_STRETCH"] = 0] = "AXIS_STRETCH_MODE_STRETCH";
        AxisStretchMode[AxisStretchMode["AXIS_STRETCH_MODE_TILE"] = 1] = "AXIS_STRETCH_MODE_TILE";
        AxisStretchMode[AxisStretchMode["AXIS_STRETCH_MODE_TILE_FIT"] = 2] = "AXIS_STRETCH_MODE_TILE_FIT";
    })(AxisStretchMode = StyleBoxTexture.AxisStretchMode || (StyleBoxTexture.AxisStretchMode = {}));
})(StyleBoxTexture || (StyleBoxTexture = {}));
export var GPUParticles3D;
(function (GPUParticles3D) {
    let DrawOrder;
    (function (DrawOrder) {
        DrawOrder[DrawOrder["DRAW_ORDER_INDEX"] = 0] = "DRAW_ORDER_INDEX";
        DrawOrder[DrawOrder["DRAW_ORDER_LIFETIME"] = 1] = "DRAW_ORDER_LIFETIME";
        DrawOrder[DrawOrder["DRAW_ORDER_REVERSE_LIFETIME"] = 2] = "DRAW_ORDER_REVERSE_LIFETIME";
        DrawOrder[DrawOrder["DRAW_ORDER_VIEW_DEPTH"] = 3] = "DRAW_ORDER_VIEW_DEPTH";
    })(DrawOrder = GPUParticles3D.DrawOrder || (GPUParticles3D.DrawOrder = {}));
    let EmitFlags;
    (function (EmitFlags) {
        EmitFlags[EmitFlags["EMIT_FLAG_POSITION"] = 1] = "EMIT_FLAG_POSITION";
        EmitFlags[EmitFlags["EMIT_FLAG_ROTATION_SCALE"] = 2] = "EMIT_FLAG_ROTATION_SCALE";
        EmitFlags[EmitFlags["EMIT_FLAG_VELOCITY"] = 4] = "EMIT_FLAG_VELOCITY";
        EmitFlags[EmitFlags["EMIT_FLAG_COLOR"] = 8] = "EMIT_FLAG_COLOR";
        EmitFlags[EmitFlags["EMIT_FLAG_CUSTOM"] = 16] = "EMIT_FLAG_CUSTOM";
    })(EmitFlags = GPUParticles3D.EmitFlags || (GPUParticles3D.EmitFlags = {}));
    GPUParticles3D.MAX_DRAW_PASSES = 4;
    let TransformAlign;
    (function (TransformAlign) {
        TransformAlign[TransformAlign["TRANSFORM_ALIGN_DISABLED"] = 0] = "TRANSFORM_ALIGN_DISABLED";
        TransformAlign[TransformAlign["TRANSFORM_ALIGN_Z_BILLBOARD"] = 1] = "TRANSFORM_ALIGN_Z_BILLBOARD";
        TransformAlign[TransformAlign["TRANSFORM_ALIGN_Y_TO_VELOCITY"] = 2] = "TRANSFORM_ALIGN_Y_TO_VELOCITY";
        TransformAlign[TransformAlign["TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY"] = 3] = "TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY";
    })(TransformAlign = GPUParticles3D.TransformAlign || (GPUParticles3D.TransformAlign = {}));
})(GPUParticles3D || (GPUParticles3D = {}));
export var AnimationNode;
(function (AnimationNode) {
    let FilterAction;
    (function (FilterAction) {
        FilterAction[FilterAction["FILTER_IGNORE"] = 0] = "FILTER_IGNORE";
        FilterAction[FilterAction["FILTER_PASS"] = 1] = "FILTER_PASS";
        FilterAction[FilterAction["FILTER_STOP"] = 2] = "FILTER_STOP";
        FilterAction[FilterAction["FILTER_BLEND"] = 3] = "FILTER_BLEND";
    })(FilterAction = AnimationNode.FilterAction || (AnimationNode.FilterAction = {}));
})(AnimationNode || (AnimationNode = {}));
export var AudioEffectFilter;
(function (AudioEffectFilter) {
    let FilterDB;
    (function (FilterDB) {
        FilterDB[FilterDB["FILTER_6DB"] = 0] = "FILTER_6DB";
        FilterDB[FilterDB["FILTER_12DB"] = 1] = "FILTER_12DB";
        FilterDB[FilterDB["FILTER_18DB"] = 2] = "FILTER_18DB";
        FilterDB[FilterDB["FILTER_24DB"] = 3] = "FILTER_24DB";
    })(FilterDB = AudioEffectFilter.FilterDB || (AudioEffectFilter.FilterDB = {}));
})(AudioEffectFilter || (AudioEffectFilter = {}));
export var CompositorEffect;
(function (CompositorEffect) {
    let EffectCallbackType;
    (function (EffectCallbackType) {
        EffectCallbackType[EffectCallbackType["EFFECT_CALLBACK_TYPE_PRE_OPAQUE"] = 0] = "EFFECT_CALLBACK_TYPE_PRE_OPAQUE";
        EffectCallbackType[EffectCallbackType["EFFECT_CALLBACK_TYPE_POST_OPAQUE"] = 1] = "EFFECT_CALLBACK_TYPE_POST_OPAQUE";
        EffectCallbackType[EffectCallbackType["EFFECT_CALLBACK_TYPE_POST_SKY"] = 2] = "EFFECT_CALLBACK_TYPE_POST_SKY";
        EffectCallbackType[EffectCallbackType["EFFECT_CALLBACK_TYPE_PRE_TRANSPARENT"] = 3] = "EFFECT_CALLBACK_TYPE_PRE_TRANSPARENT";
        EffectCallbackType[EffectCallbackType["EFFECT_CALLBACK_TYPE_POST_TRANSPARENT"] = 4] = "EFFECT_CALLBACK_TYPE_POST_TRANSPARENT";
        EffectCallbackType[EffectCallbackType["EFFECT_CALLBACK_TYPE_MAX"] = 5] = "EFFECT_CALLBACK_TYPE_MAX";
    })(EffectCallbackType = CompositorEffect.EffectCallbackType || (CompositorEffect.EffectCallbackType = {}));
})(CompositorEffect || (CompositorEffect = {}));
export var PhysicalBone3D;
(function (PhysicalBone3D) {
    let DampMode;
    (function (DampMode) {
        DampMode[DampMode["DAMP_MODE_COMBINE"] = 0] = "DAMP_MODE_COMBINE";
        DampMode[DampMode["DAMP_MODE_REPLACE"] = 1] = "DAMP_MODE_REPLACE";
    })(DampMode = PhysicalBone3D.DampMode || (PhysicalBone3D.DampMode = {}));
    let JointType;
    (function (JointType) {
        JointType[JointType["JOINT_TYPE_NONE"] = 0] = "JOINT_TYPE_NONE";
        JointType[JointType["JOINT_TYPE_PIN"] = 1] = "JOINT_TYPE_PIN";
        JointType[JointType["JOINT_TYPE_CONE"] = 2] = "JOINT_TYPE_CONE";
        JointType[JointType["JOINT_TYPE_HINGE"] = 3] = "JOINT_TYPE_HINGE";
        JointType[JointType["JOINT_TYPE_SLIDER"] = 4] = "JOINT_TYPE_SLIDER";
        JointType[JointType["JOINT_TYPE_6DOF"] = 5] = "JOINT_TYPE_6DOF";
    })(JointType = PhysicalBone3D.JointType || (PhysicalBone3D.JointType = {}));
})(PhysicalBone3D || (PhysicalBone3D = {}));
export var XRHandTracker;
(function (XRHandTracker) {
    let HandTrackingSource;
    (function (HandTrackingSource) {
        HandTrackingSource[HandTrackingSource["HAND_TRACKING_SOURCE_UNKNOWN"] = 0] = "HAND_TRACKING_SOURCE_UNKNOWN";
        HandTrackingSource[HandTrackingSource["HAND_TRACKING_SOURCE_UNOBSTRUCTED"] = 1] = "HAND_TRACKING_SOURCE_UNOBSTRUCTED";
        HandTrackingSource[HandTrackingSource["HAND_TRACKING_SOURCE_CONTROLLER"] = 2] = "HAND_TRACKING_SOURCE_CONTROLLER";
        HandTrackingSource[HandTrackingSource["HAND_TRACKING_SOURCE_NOT_TRACKED"] = 3] = "HAND_TRACKING_SOURCE_NOT_TRACKED";
        HandTrackingSource[HandTrackingSource["HAND_TRACKING_SOURCE_MAX"] = 4] = "HAND_TRACKING_SOURCE_MAX";
    })(HandTrackingSource = XRHandTracker.HandTrackingSource || (XRHandTracker.HandTrackingSource = {}));
    let HandJoint;
    (function (HandJoint) {
        HandJoint[HandJoint["HAND_JOINT_PALM"] = 0] = "HAND_JOINT_PALM";
        HandJoint[HandJoint["HAND_JOINT_WRIST"] = 1] = "HAND_JOINT_WRIST";
        HandJoint[HandJoint["HAND_JOINT_THUMB_METACARPAL"] = 2] = "HAND_JOINT_THUMB_METACARPAL";
        HandJoint[HandJoint["HAND_JOINT_THUMB_PHALANX_PROXIMAL"] = 3] = "HAND_JOINT_THUMB_PHALANX_PROXIMAL";
        HandJoint[HandJoint["HAND_JOINT_THUMB_PHALANX_DISTAL"] = 4] = "HAND_JOINT_THUMB_PHALANX_DISTAL";
        HandJoint[HandJoint["HAND_JOINT_THUMB_TIP"] = 5] = "HAND_JOINT_THUMB_TIP";
        HandJoint[HandJoint["HAND_JOINT_INDEX_FINGER_METACARPAL"] = 6] = "HAND_JOINT_INDEX_FINGER_METACARPAL";
        HandJoint[HandJoint["HAND_JOINT_INDEX_FINGER_PHALANX_PROXIMAL"] = 7] = "HAND_JOINT_INDEX_FINGER_PHALANX_PROXIMAL";
        HandJoint[HandJoint["HAND_JOINT_INDEX_FINGER_PHALANX_INTERMEDIATE"] = 8] = "HAND_JOINT_INDEX_FINGER_PHALANX_INTERMEDIATE";
        HandJoint[HandJoint["HAND_JOINT_INDEX_FINGER_PHALANX_DISTAL"] = 9] = "HAND_JOINT_INDEX_FINGER_PHALANX_DISTAL";
        HandJoint[HandJoint["HAND_JOINT_INDEX_FINGER_TIP"] = 10] = "HAND_JOINT_INDEX_FINGER_TIP";
        HandJoint[HandJoint["HAND_JOINT_MIDDLE_FINGER_METACARPAL"] = 11] = "HAND_JOINT_MIDDLE_FINGER_METACARPAL";
        HandJoint[HandJoint["HAND_JOINT_MIDDLE_FINGER_PHALANX_PROXIMAL"] = 12] = "HAND_JOINT_MIDDLE_FINGER_PHALANX_PROXIMAL";
        HandJoint[HandJoint["HAND_JOINT_MIDDLE_FINGER_PHALANX_INTERMEDIATE"] = 13] = "HAND_JOINT_MIDDLE_FINGER_PHALANX_INTERMEDIATE";
        HandJoint[HandJoint["HAND_JOINT_MIDDLE_FINGER_PHALANX_DISTAL"] = 14] = "HAND_JOINT_MIDDLE_FINGER_PHALANX_DISTAL";
        HandJoint[HandJoint["HAND_JOINT_MIDDLE_FINGER_TIP"] = 15] = "HAND_JOINT_MIDDLE_FINGER_TIP";
        HandJoint[HandJoint["HAND_JOINT_RING_FINGER_METACARPAL"] = 16] = "HAND_JOINT_RING_FINGER_METACARPAL";
        HandJoint[HandJoint["HAND_JOINT_RING_FINGER_PHALANX_PROXIMAL"] = 17] = "HAND_JOINT_RING_FINGER_PHALANX_PROXIMAL";
        HandJoint[HandJoint["HAND_JOINT_RING_FINGER_PHALANX_INTERMEDIATE"] = 18] = "HAND_JOINT_RING_FINGER_PHALANX_INTERMEDIATE";
        HandJoint[HandJoint["HAND_JOINT_RING_FINGER_PHALANX_DISTAL"] = 19] = "HAND_JOINT_RING_FINGER_PHALANX_DISTAL";
        HandJoint[HandJoint["HAND_JOINT_RING_FINGER_TIP"] = 20] = "HAND_JOINT_RING_FINGER_TIP";
        HandJoint[HandJoint["HAND_JOINT_PINKY_FINGER_METACARPAL"] = 21] = "HAND_JOINT_PINKY_FINGER_METACARPAL";
        HandJoint[HandJoint["HAND_JOINT_PINKY_FINGER_PHALANX_PROXIMAL"] = 22] = "HAND_JOINT_PINKY_FINGER_PHALANX_PROXIMAL";
        HandJoint[HandJoint["HAND_JOINT_PINKY_FINGER_PHALANX_INTERMEDIATE"] = 23] = "HAND_JOINT_PINKY_FINGER_PHALANX_INTERMEDIATE";
        HandJoint[HandJoint["HAND_JOINT_PINKY_FINGER_PHALANX_DISTAL"] = 24] = "HAND_JOINT_PINKY_FINGER_PHALANX_DISTAL";
        HandJoint[HandJoint["HAND_JOINT_PINKY_FINGER_TIP"] = 25] = "HAND_JOINT_PINKY_FINGER_TIP";
        HandJoint[HandJoint["HAND_JOINT_MAX"] = 26] = "HAND_JOINT_MAX";
    })(HandJoint = XRHandTracker.HandJoint || (XRHandTracker.HandJoint = {}));
    let HandJointFlags;
    (function (HandJointFlags) {
        HandJointFlags[HandJointFlags["HAND_JOINT_FLAG_ORIENTATION_VALID"] = 1] = "HAND_JOINT_FLAG_ORIENTATION_VALID";
        HandJointFlags[HandJointFlags["HAND_JOINT_FLAG_ORIENTATION_TRACKED"] = 2] = "HAND_JOINT_FLAG_ORIENTATION_TRACKED";
        HandJointFlags[HandJointFlags["HAND_JOINT_FLAG_POSITION_VALID"] = 4] = "HAND_JOINT_FLAG_POSITION_VALID";
        HandJointFlags[HandJointFlags["HAND_JOINT_FLAG_POSITION_TRACKED"] = 8] = "HAND_JOINT_FLAG_POSITION_TRACKED";
        HandJointFlags[HandJointFlags["HAND_JOINT_FLAG_LINEAR_VELOCITY_VALID"] = 16] = "HAND_JOINT_FLAG_LINEAR_VELOCITY_VALID";
        HandJointFlags[HandJointFlags["HAND_JOINT_FLAG_ANGULAR_VELOCITY_VALID"] = 32] = "HAND_JOINT_FLAG_ANGULAR_VELOCITY_VALID";
    })(HandJointFlags = XRHandTracker.HandJointFlags || (XRHandTracker.HandJointFlags = {}));
})(XRHandTracker || (XRHandTracker = {}));
export var AnimationNodeAnimation;
(function (AnimationNodeAnimation) {
    let PlayMode;
    (function (PlayMode) {
        PlayMode[PlayMode["PLAY_MODE_FORWARD"] = 0] = "PLAY_MODE_FORWARD";
        PlayMode[PlayMode["PLAY_MODE_BACKWARD"] = 1] = "PLAY_MODE_BACKWARD";
    })(PlayMode = AnimationNodeAnimation.PlayMode || (AnimationNodeAnimation.PlayMode = {}));
})(AnimationNodeAnimation || (AnimationNodeAnimation = {}));
export var CPUParticles2D;
(function (CPUParticles2D) {
    let DrawOrder;
    (function (DrawOrder) {
        DrawOrder[DrawOrder["DRAW_ORDER_INDEX"] = 0] = "DRAW_ORDER_INDEX";
        DrawOrder[DrawOrder["DRAW_ORDER_LIFETIME"] = 1] = "DRAW_ORDER_LIFETIME";
    })(DrawOrder = CPUParticles2D.DrawOrder || (CPUParticles2D.DrawOrder = {}));
    let Parameter;
    (function (Parameter) {
        Parameter[Parameter["PARAM_INITIAL_LINEAR_VELOCITY"] = 0] = "PARAM_INITIAL_LINEAR_VELOCITY";
        Parameter[Parameter["PARAM_ANGULAR_VELOCITY"] = 1] = "PARAM_ANGULAR_VELOCITY";
        Parameter[Parameter["PARAM_ORBIT_VELOCITY"] = 2] = "PARAM_ORBIT_VELOCITY";
        Parameter[Parameter["PARAM_LINEAR_ACCEL"] = 3] = "PARAM_LINEAR_ACCEL";
        Parameter[Parameter["PARAM_RADIAL_ACCEL"] = 4] = "PARAM_RADIAL_ACCEL";
        Parameter[Parameter["PARAM_TANGENTIAL_ACCEL"] = 5] = "PARAM_TANGENTIAL_ACCEL";
        Parameter[Parameter["PARAM_DAMPING"] = 6] = "PARAM_DAMPING";
        Parameter[Parameter["PARAM_ANGLE"] = 7] = "PARAM_ANGLE";
        Parameter[Parameter["PARAM_SCALE"] = 8] = "PARAM_SCALE";
        Parameter[Parameter["PARAM_HUE_VARIATION"] = 9] = "PARAM_HUE_VARIATION";
        Parameter[Parameter["PARAM_ANIM_SPEED"] = 10] = "PARAM_ANIM_SPEED";
        Parameter[Parameter["PARAM_ANIM_OFFSET"] = 11] = "PARAM_ANIM_OFFSET";
        Parameter[Parameter["PARAM_MAX"] = 12] = "PARAM_MAX";
    })(Parameter = CPUParticles2D.Parameter || (CPUParticles2D.Parameter = {}));
    let ParticleFlags;
    (function (ParticleFlags) {
        ParticleFlags[ParticleFlags["PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY"] = 0] = "PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY";
        ParticleFlags[ParticleFlags["PARTICLE_FLAG_ROTATE_Y"] = 1] = "PARTICLE_FLAG_ROTATE_Y";
        ParticleFlags[ParticleFlags["PARTICLE_FLAG_DISABLE_Z"] = 2] = "PARTICLE_FLAG_DISABLE_Z";
        ParticleFlags[ParticleFlags["PARTICLE_FLAG_MAX"] = 3] = "PARTICLE_FLAG_MAX";
    })(ParticleFlags = CPUParticles2D.ParticleFlags || (CPUParticles2D.ParticleFlags = {}));
    let EmissionShape;
    (function (EmissionShape) {
        EmissionShape[EmissionShape["EMISSION_SHAPE_POINT"] = 0] = "EMISSION_SHAPE_POINT";
        EmissionShape[EmissionShape["EMISSION_SHAPE_SPHERE"] = 1] = "EMISSION_SHAPE_SPHERE";
        EmissionShape[EmissionShape["EMISSION_SHAPE_SPHERE_SURFACE"] = 2] = "EMISSION_SHAPE_SPHERE_SURFACE";
        EmissionShape[EmissionShape["EMISSION_SHAPE_RECTANGLE"] = 3] = "EMISSION_SHAPE_RECTANGLE";
        EmissionShape[EmissionShape["EMISSION_SHAPE_POINTS"] = 4] = "EMISSION_SHAPE_POINTS";
        EmissionShape[EmissionShape["EMISSION_SHAPE_DIRECTED_POINTS"] = 5] = "EMISSION_SHAPE_DIRECTED_POINTS";
        EmissionShape[EmissionShape["EMISSION_SHAPE_MAX"] = 6] = "EMISSION_SHAPE_MAX";
    })(EmissionShape = CPUParticles2D.EmissionShape || (CPUParticles2D.EmissionShape = {}));
})(CPUParticles2D || (CPUParticles2D = {}));
export var VisualShaderNodeMultiplyAdd;
(function (VisualShaderNodeMultiplyAdd) {
    let OpType;
    (function (OpType) {
        OpType[OpType["OP_TYPE_SCALAR"] = 0] = "OP_TYPE_SCALAR";
        OpType[OpType["OP_TYPE_VECTOR_2D"] = 1] = "OP_TYPE_VECTOR_2D";
        OpType[OpType["OP_TYPE_VECTOR_3D"] = 2] = "OP_TYPE_VECTOR_3D";
        OpType[OpType["OP_TYPE_VECTOR_4D"] = 3] = "OP_TYPE_VECTOR_4D";
        OpType[OpType["OP_TYPE_MAX"] = 4] = "OP_TYPE_MAX";
    })(OpType = VisualShaderNodeMultiplyAdd.OpType || (VisualShaderNodeMultiplyAdd.OpType = {}));
})(VisualShaderNodeMultiplyAdd || (VisualShaderNodeMultiplyAdd = {}));
export var ReflectionProbe;
(function (ReflectionProbe) {
    let UpdateMode;
    (function (UpdateMode) {
        UpdateMode[UpdateMode["UPDATE_ONCE"] = 0] = "UPDATE_ONCE";
        UpdateMode[UpdateMode["UPDATE_ALWAYS"] = 1] = "UPDATE_ALWAYS";
    })(UpdateMode = ReflectionProbe.UpdateMode || (ReflectionProbe.UpdateMode = {}));
    let AmbientMode;
    (function (AmbientMode) {
        AmbientMode[AmbientMode["AMBIENT_DISABLED"] = 0] = "AMBIENT_DISABLED";
        AmbientMode[AmbientMode["AMBIENT_ENVIRONMENT"] = 1] = "AMBIENT_ENVIRONMENT";
        AmbientMode[AmbientMode["AMBIENT_COLOR"] = 2] = "AMBIENT_COLOR";
    })(AmbientMode = ReflectionProbe.AmbientMode || (ReflectionProbe.AmbientMode = {}));
})(ReflectionProbe || (ReflectionProbe = {}));
export var FlowContainer;
(function (FlowContainer) {
    let AlignmentMode;
    (function (AlignmentMode) {
        AlignmentMode[AlignmentMode["ALIGNMENT_BEGIN"] = 0] = "ALIGNMENT_BEGIN";
        AlignmentMode[AlignmentMode["ALIGNMENT_CENTER"] = 1] = "ALIGNMENT_CENTER";
        AlignmentMode[AlignmentMode["ALIGNMENT_END"] = 2] = "ALIGNMENT_END";
    })(AlignmentMode = FlowContainer.AlignmentMode || (FlowContainer.AlignmentMode = {}));
    let LastWrapAlignmentMode;
    (function (LastWrapAlignmentMode) {
        LastWrapAlignmentMode[LastWrapAlignmentMode["LAST_WRAP_ALIGNMENT_INHERIT"] = 0] = "LAST_WRAP_ALIGNMENT_INHERIT";
        LastWrapAlignmentMode[LastWrapAlignmentMode["LAST_WRAP_ALIGNMENT_BEGIN"] = 1] = "LAST_WRAP_ALIGNMENT_BEGIN";
        LastWrapAlignmentMode[LastWrapAlignmentMode["LAST_WRAP_ALIGNMENT_CENTER"] = 2] = "LAST_WRAP_ALIGNMENT_CENTER";
        LastWrapAlignmentMode[LastWrapAlignmentMode["LAST_WRAP_ALIGNMENT_END"] = 3] = "LAST_WRAP_ALIGNMENT_END";
    })(LastWrapAlignmentMode = FlowContainer.LastWrapAlignmentMode || (FlowContainer.LastWrapAlignmentMode = {}));
})(FlowContainer || (FlowContainer = {}));
export var MeshConvexDecompositionSettings;
(function (MeshConvexDecompositionSettings) {
    let Mode;
    (function (Mode) {
        Mode[Mode["CONVEX_DECOMPOSITION_MODE_VOXEL"] = 0] = "CONVEX_DECOMPOSITION_MODE_VOXEL";
        Mode[Mode["CONVEX_DECOMPOSITION_MODE_TETRAHEDRON"] = 1] = "CONVEX_DECOMPOSITION_MODE_TETRAHEDRON";
    })(Mode = MeshConvexDecompositionSettings.Mode || (MeshConvexDecompositionSettings.Mode = {}));
})(MeshConvexDecompositionSettings || (MeshConvexDecompositionSettings = {}));
export var CharacterBody2D;
(function (CharacterBody2D) {
    let MotionMode;
    (function (MotionMode) {
        MotionMode[MotionMode["MOTION_MODE_GROUNDED"] = 0] = "MOTION_MODE_GROUNDED";
        MotionMode[MotionMode["MOTION_MODE_FLOATING"] = 1] = "MOTION_MODE_FLOATING";
    })(MotionMode = CharacterBody2D.MotionMode || (CharacterBody2D.MotionMode = {}));
    let PlatformOnLeave;
    (function (PlatformOnLeave) {
        PlatformOnLeave[PlatformOnLeave["PLATFORM_ON_LEAVE_ADD_VELOCITY"] = 0] = "PLATFORM_ON_LEAVE_ADD_VELOCITY";
        PlatformOnLeave[PlatformOnLeave["PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY"] = 1] = "PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY";
        PlatformOnLeave[PlatformOnLeave["PLATFORM_ON_LEAVE_DO_NOTHING"] = 2] = "PLATFORM_ON_LEAVE_DO_NOTHING";
    })(PlatformOnLeave = CharacterBody2D.PlatformOnLeave || (CharacterBody2D.PlatformOnLeave = {}));
})(CharacterBody2D || (CharacterBody2D = {}));
export var NavigationMesh;
(function (NavigationMesh) {
    let SamplePartitionType;
    (function (SamplePartitionType) {
        SamplePartitionType[SamplePartitionType["SAMPLE_PARTITION_WATERSHED"] = 0] = "SAMPLE_PARTITION_WATERSHED";
        SamplePartitionType[SamplePartitionType["SAMPLE_PARTITION_MONOTONE"] = 1] = "SAMPLE_PARTITION_MONOTONE";
        SamplePartitionType[SamplePartitionType["SAMPLE_PARTITION_LAYERS"] = 2] = "SAMPLE_PARTITION_LAYERS";
        SamplePartitionType[SamplePartitionType["SAMPLE_PARTITION_MAX"] = 3] = "SAMPLE_PARTITION_MAX";
    })(SamplePartitionType = NavigationMesh.SamplePartitionType || (NavigationMesh.SamplePartitionType = {}));
    let ParsedGeometryType;
    (function (ParsedGeometryType) {
        ParsedGeometryType[ParsedGeometryType["PARSED_GEOMETRY_MESH_INSTANCES"] = 0] = "PARSED_GEOMETRY_MESH_INSTANCES";
        ParsedGeometryType[ParsedGeometryType["PARSED_GEOMETRY_STATIC_COLLIDERS"] = 1] = "PARSED_GEOMETRY_STATIC_COLLIDERS";
        ParsedGeometryType[ParsedGeometryType["PARSED_GEOMETRY_BOTH"] = 2] = "PARSED_GEOMETRY_BOTH";
        ParsedGeometryType[ParsedGeometryType["PARSED_GEOMETRY_MAX"] = 3] = "PARSED_GEOMETRY_MAX";
    })(ParsedGeometryType = NavigationMesh.ParsedGeometryType || (NavigationMesh.ParsedGeometryType = {}));
    let SourceGeometryMode;
    (function (SourceGeometryMode) {
        SourceGeometryMode[SourceGeometryMode["SOURCE_GEOMETRY_ROOT_NODE_CHILDREN"] = 0] = "SOURCE_GEOMETRY_ROOT_NODE_CHILDREN";
        SourceGeometryMode[SourceGeometryMode["SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN"] = 1] = "SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN";
        SourceGeometryMode[SourceGeometryMode["SOURCE_GEOMETRY_GROUPS_EXPLICIT"] = 2] = "SOURCE_GEOMETRY_GROUPS_EXPLICIT";
        SourceGeometryMode[SourceGeometryMode["SOURCE_GEOMETRY_MAX"] = 3] = "SOURCE_GEOMETRY_MAX";
    })(SourceGeometryMode = NavigationMesh.SourceGeometryMode || (NavigationMesh.SourceGeometryMode = {}));
})(NavigationMesh || (NavigationMesh = {}));
export var VisualShaderNodeVectorBase;
(function (VisualShaderNodeVectorBase) {
    let OpType;
    (function (OpType) {
        OpType[OpType["OP_TYPE_VECTOR_2D"] = 0] = "OP_TYPE_VECTOR_2D";
        OpType[OpType["OP_TYPE_VECTOR_3D"] = 1] = "OP_TYPE_VECTOR_3D";
        OpType[OpType["OP_TYPE_VECTOR_4D"] = 2] = "OP_TYPE_VECTOR_4D";
        OpType[OpType["OP_TYPE_MAX"] = 3] = "OP_TYPE_MAX";
    })(OpType = VisualShaderNodeVectorBase.OpType || (VisualShaderNodeVectorBase.OpType = {}));
})(VisualShaderNodeVectorBase || (VisualShaderNodeVectorBase = {}));
export var EditorSettings;
(function (EditorSettings) {
    EditorSettings.NOTIFICATION_EDITOR_SETTINGS_CHANGED = 10000;
})(EditorSettings || (EditorSettings = {}));
export var ImageFormatLoader;
(function (ImageFormatLoader) {
    let LoaderFlags;
    (function (LoaderFlags) {
        LoaderFlags[LoaderFlags["FLAG_NONE"] = 0] = "FLAG_NONE";
        LoaderFlags[LoaderFlags["FLAG_FORCE_LINEAR"] = 1] = "FLAG_FORCE_LINEAR";
        LoaderFlags[LoaderFlags["FLAG_CONVERT_COLORS"] = 2] = "FLAG_CONVERT_COLORS";
    })(LoaderFlags = ImageFormatLoader.LoaderFlags || (ImageFormatLoader.LoaderFlags = {}));
})(ImageFormatLoader || (ImageFormatLoader = {}));
export var VisualShaderNodeUVFunc;
(function (VisualShaderNodeUVFunc) {
    let Function;
    (function (Function) {
        Function[Function["FUNC_PANNING"] = 0] = "FUNC_PANNING";
        Function[Function["FUNC_SCALING"] = 1] = "FUNC_SCALING";
        Function[Function["FUNC_MAX"] = 2] = "FUNC_MAX";
    })(Function = VisualShaderNodeUVFunc.Function || (VisualShaderNodeUVFunc.Function = {}));
})(VisualShaderNodeUVFunc || (VisualShaderNodeUVFunc = {}));
export var AESContext;
(function (AESContext) {
    let Mode;
    (function (Mode) {
        Mode[Mode["MODE_ECB_ENCRYPT"] = 0] = "MODE_ECB_ENCRYPT";
        Mode[Mode["MODE_ECB_DECRYPT"] = 1] = "MODE_ECB_DECRYPT";
        Mode[Mode["MODE_CBC_ENCRYPT"] = 2] = "MODE_CBC_ENCRYPT";
        Mode[Mode["MODE_CBC_DECRYPT"] = 3] = "MODE_CBC_DECRYPT";
        Mode[Mode["MODE_MAX"] = 4] = "MODE_MAX";
    })(Mode = AESContext.Mode || (AESContext.Mode = {}));
})(AESContext || (AESContext = {}));
export var EditorSceneFormatImporter;
(function (EditorSceneFormatImporter) {
    EditorSceneFormatImporter.IMPORT_SCENE = 1;
    EditorSceneFormatImporter.IMPORT_ANIMATION = 2;
    EditorSceneFormatImporter.IMPORT_FAIL_ON_MISSING_DEPENDENCIES = 4;
    EditorSceneFormatImporter.IMPORT_GENERATE_TANGENT_ARRAYS = 8;
    EditorSceneFormatImporter.IMPORT_USE_NAMED_SKIN_BINDS = 16;
    EditorSceneFormatImporter.IMPORT_DISCARD_MESHES_AND_MATERIALS = 32;
    EditorSceneFormatImporter.IMPORT_FORCE_DISABLE_MESH_COMPRESSION = 64;
})(EditorSceneFormatImporter || (EditorSceneFormatImporter = {}));
export var Area3D;
(function (Area3D) {
    let SpaceOverride;
    (function (SpaceOverride) {
        SpaceOverride[SpaceOverride["SPACE_OVERRIDE_DISABLED"] = 0] = "SPACE_OVERRIDE_DISABLED";
        SpaceOverride[SpaceOverride["SPACE_OVERRIDE_COMBINE"] = 1] = "SPACE_OVERRIDE_COMBINE";
        SpaceOverride[SpaceOverride["SPACE_OVERRIDE_COMBINE_REPLACE"] = 2] = "SPACE_OVERRIDE_COMBINE_REPLACE";
        SpaceOverride[SpaceOverride["SPACE_OVERRIDE_REPLACE"] = 3] = "SPACE_OVERRIDE_REPLACE";
        SpaceOverride[SpaceOverride["SPACE_OVERRIDE_REPLACE_COMBINE"] = 4] = "SPACE_OVERRIDE_REPLACE_COMBINE";
    })(SpaceOverride = Area3D.SpaceOverride || (Area3D.SpaceOverride = {}));
})(Area3D || (Area3D = {}));
export var GDExtension;
(function (GDExtension) {
    let InitializationLevel;
    (function (InitializationLevel) {
        InitializationLevel[InitializationLevel["INITIALIZATION_LEVEL_CORE"] = 0] = "INITIALIZATION_LEVEL_CORE";
        InitializationLevel[InitializationLevel["INITIALIZATION_LEVEL_SERVERS"] = 1] = "INITIALIZATION_LEVEL_SERVERS";
        InitializationLevel[InitializationLevel["INITIALIZATION_LEVEL_SCENE"] = 2] = "INITIALIZATION_LEVEL_SCENE";
        InitializationLevel[InitializationLevel["INITIALIZATION_LEVEL_EDITOR"] = 3] = "INITIALIZATION_LEVEL_EDITOR";
    })(InitializationLevel = GDExtension.InitializationLevel || (GDExtension.InitializationLevel = {}));
})(GDExtension || (GDExtension = {}));
export var GDExtensionManager;
(function (GDExtensionManager) {
    let LoadStatus;
    (function (LoadStatus) {
        LoadStatus[LoadStatus["LOAD_STATUS_OK"] = 0] = "LOAD_STATUS_OK";
        LoadStatus[LoadStatus["LOAD_STATUS_FAILED"] = 1] = "LOAD_STATUS_FAILED";
        LoadStatus[LoadStatus["LOAD_STATUS_ALREADY_LOADED"] = 2] = "LOAD_STATUS_ALREADY_LOADED";
        LoadStatus[LoadStatus["LOAD_STATUS_NOT_LOADED"] = 3] = "LOAD_STATUS_NOT_LOADED";
        LoadStatus[LoadStatus["LOAD_STATUS_NEEDS_RESTART"] = 4] = "LOAD_STATUS_NEEDS_RESTART";
    })(LoadStatus = GDExtensionManager.LoadStatus || (GDExtensionManager.LoadStatus = {}));
})(GDExtensionManager || (GDExtensionManager = {}));
export var VisualShaderNodeIntFunc;
(function (VisualShaderNodeIntFunc) {
    let Function;
    (function (Function) {
        Function[Function["FUNC_ABS"] = 0] = "FUNC_ABS";
        Function[Function["FUNC_NEGATE"] = 1] = "FUNC_NEGATE";
        Function[Function["FUNC_SIGN"] = 2] = "FUNC_SIGN";
        Function[Function["FUNC_BITWISE_NOT"] = 3] = "FUNC_BITWISE_NOT";
        Function[Function["FUNC_MAX"] = 4] = "FUNC_MAX";
    })(Function = VisualShaderNodeIntFunc.Function || (VisualShaderNodeIntFunc.Function = {}));
})(VisualShaderNodeIntFunc || (VisualShaderNodeIntFunc = {}));
export var TileSetAtlasSource;
(function (TileSetAtlasSource) {
    let TileAnimationMode;
    (function (TileAnimationMode) {
        TileAnimationMode[TileAnimationMode["TILE_ANIMATION_MODE_DEFAULT"] = 0] = "TILE_ANIMATION_MODE_DEFAULT";
        TileAnimationMode[TileAnimationMode["TILE_ANIMATION_MODE_RANDOM_START_TIMES"] = 1] = "TILE_ANIMATION_MODE_RANDOM_START_TIMES";
        TileAnimationMode[TileAnimationMode["TILE_ANIMATION_MODE_MAX"] = 2] = "TILE_ANIMATION_MODE_MAX";
    })(TileAnimationMode = TileSetAtlasSource.TileAnimationMode || (TileSetAtlasSource.TileAnimationMode = {}));
    TileSetAtlasSource.TRANSFORM_FLIP_H = 4096;
    TileSetAtlasSource.TRANSFORM_FLIP_V = 8192;
    TileSetAtlasSource.TRANSFORM_TRANSPOSE = 16384;
})(TileSetAtlasSource || (TileSetAtlasSource = {}));
export var VisibleOnScreenEnabler2D;
(function (VisibleOnScreenEnabler2D) {
    let EnableMode;
    (function (EnableMode) {
        EnableMode[EnableMode["ENABLE_MODE_INHERIT"] = 0] = "ENABLE_MODE_INHERIT";
        EnableMode[EnableMode["ENABLE_MODE_ALWAYS"] = 1] = "ENABLE_MODE_ALWAYS";
        EnableMode[EnableMode["ENABLE_MODE_WHEN_PAUSED"] = 2] = "ENABLE_MODE_WHEN_PAUSED";
    })(EnableMode = VisibleOnScreenEnabler2D.EnableMode || (VisibleOnScreenEnabler2D.EnableMode = {}));
})(VisibleOnScreenEnabler2D || (VisibleOnScreenEnabler2D = {}));
export var Light2D;
(function (Light2D) {
    let ShadowFilter;
    (function (ShadowFilter) {
        ShadowFilter[ShadowFilter["SHADOW_FILTER_NONE"] = 0] = "SHADOW_FILTER_NONE";
        ShadowFilter[ShadowFilter["SHADOW_FILTER_PCF5"] = 1] = "SHADOW_FILTER_PCF5";
        ShadowFilter[ShadowFilter["SHADOW_FILTER_PCF13"] = 2] = "SHADOW_FILTER_PCF13";
    })(ShadowFilter = Light2D.ShadowFilter || (Light2D.ShadowFilter = {}));
    let BlendMode;
    (function (BlendMode) {
        BlendMode[BlendMode["BLEND_MODE_ADD"] = 0] = "BLEND_MODE_ADD";
        BlendMode[BlendMode["BLEND_MODE_SUB"] = 1] = "BLEND_MODE_SUB";
        BlendMode[BlendMode["BLEND_MODE_MIX"] = 2] = "BLEND_MODE_MIX";
    })(BlendMode = Light2D.BlendMode || (Light2D.BlendMode = {}));
})(Light2D || (Light2D = {}));
export var IP;
(function (IP) {
    let ResolverStatus;
    (function (ResolverStatus) {
        ResolverStatus[ResolverStatus["RESOLVER_STATUS_NONE"] = 0] = "RESOLVER_STATUS_NONE";
        ResolverStatus[ResolverStatus["RESOLVER_STATUS_WAITING"] = 1] = "RESOLVER_STATUS_WAITING";
        ResolverStatus[ResolverStatus["RESOLVER_STATUS_DONE"] = 2] = "RESOLVER_STATUS_DONE";
        ResolverStatus[ResolverStatus["RESOLVER_STATUS_ERROR"] = 3] = "RESOLVER_STATUS_ERROR";
    })(ResolverStatus = IP.ResolverStatus || (IP.ResolverStatus = {}));
    IP.RESOLVER_MAX_QUERIES = 256;
    IP.RESOLVER_INVALID_ID = -1;
    let Type;
    (function (Type) {
        Type[Type["TYPE_NONE"] = 0] = "TYPE_NONE";
        Type[Type["TYPE_IPV4"] = 1] = "TYPE_IPV4";
        Type[Type["TYPE_IPV6"] = 2] = "TYPE_IPV6";
        Type[Type["TYPE_ANY"] = 3] = "TYPE_ANY";
    })(Type = IP.Type || (IP.Type = {}));
})(IP || (IP = {}));
export var NavigationPathQueryResult2D;
(function (NavigationPathQueryResult2D) {
    let PathSegmentType;
    (function (PathSegmentType) {
        PathSegmentType[PathSegmentType["PATH_SEGMENT_TYPE_REGION"] = 0] = "PATH_SEGMENT_TYPE_REGION";
        PathSegmentType[PathSegmentType["PATH_SEGMENT_TYPE_LINK"] = 1] = "PATH_SEGMENT_TYPE_LINK";
    })(PathSegmentType = NavigationPathQueryResult2D.PathSegmentType || (NavigationPathQueryResult2D.PathSegmentType = {}));
})(NavigationPathQueryResult2D || (NavigationPathQueryResult2D = {}));
export var XRPose;
(function (XRPose) {
    let TrackingConfidence;
    (function (TrackingConfidence) {
        TrackingConfidence[TrackingConfidence["XR_TRACKING_CONFIDENCE_NONE"] = 0] = "XR_TRACKING_CONFIDENCE_NONE";
        TrackingConfidence[TrackingConfidence["XR_TRACKING_CONFIDENCE_LOW"] = 1] = "XR_TRACKING_CONFIDENCE_LOW";
        TrackingConfidence[TrackingConfidence["XR_TRACKING_CONFIDENCE_HIGH"] = 2] = "XR_TRACKING_CONFIDENCE_HIGH";
    })(TrackingConfidence = XRPose.TrackingConfidence || (XRPose.TrackingConfidence = {}));
})(XRPose || (XRPose = {}));
export var SliderJoint3D;
(function (SliderJoint3D) {
    let Param;
    (function (Param) {
        Param[Param["PARAM_LINEAR_LIMIT_UPPER"] = 0] = "PARAM_LINEAR_LIMIT_UPPER";
        Param[Param["PARAM_LINEAR_LIMIT_LOWER"] = 1] = "PARAM_LINEAR_LIMIT_LOWER";
        Param[Param["PARAM_LINEAR_LIMIT_SOFTNESS"] = 2] = "PARAM_LINEAR_LIMIT_SOFTNESS";
        Param[Param["PARAM_LINEAR_LIMIT_RESTITUTION"] = 3] = "PARAM_LINEAR_LIMIT_RESTITUTION";
        Param[Param["PARAM_LINEAR_LIMIT_DAMPING"] = 4] = "PARAM_LINEAR_LIMIT_DAMPING";
        Param[Param["PARAM_LINEAR_MOTION_SOFTNESS"] = 5] = "PARAM_LINEAR_MOTION_SOFTNESS";
        Param[Param["PARAM_LINEAR_MOTION_RESTITUTION"] = 6] = "PARAM_LINEAR_MOTION_RESTITUTION";
        Param[Param["PARAM_LINEAR_MOTION_DAMPING"] = 7] = "PARAM_LINEAR_MOTION_DAMPING";
        Param[Param["PARAM_LINEAR_ORTHOGONAL_SOFTNESS"] = 8] = "PARAM_LINEAR_ORTHOGONAL_SOFTNESS";
        Param[Param["PARAM_LINEAR_ORTHOGONAL_RESTITUTION"] = 9] = "PARAM_LINEAR_ORTHOGONAL_RESTITUTION";
        Param[Param["PARAM_LINEAR_ORTHOGONAL_DAMPING"] = 10] = "PARAM_LINEAR_ORTHOGONAL_DAMPING";
        Param[Param["PARAM_ANGULAR_LIMIT_UPPER"] = 11] = "PARAM_ANGULAR_LIMIT_UPPER";
        Param[Param["PARAM_ANGULAR_LIMIT_LOWER"] = 12] = "PARAM_ANGULAR_LIMIT_LOWER";
        Param[Param["PARAM_ANGULAR_LIMIT_SOFTNESS"] = 13] = "PARAM_ANGULAR_LIMIT_SOFTNESS";
        Param[Param["PARAM_ANGULAR_LIMIT_RESTITUTION"] = 14] = "PARAM_ANGULAR_LIMIT_RESTITUTION";
        Param[Param["PARAM_ANGULAR_LIMIT_DAMPING"] = 15] = "PARAM_ANGULAR_LIMIT_DAMPING";
        Param[Param["PARAM_ANGULAR_MOTION_SOFTNESS"] = 16] = "PARAM_ANGULAR_MOTION_SOFTNESS";
        Param[Param["PARAM_ANGULAR_MOTION_RESTITUTION"] = 17] = "PARAM_ANGULAR_MOTION_RESTITUTION";
        Param[Param["PARAM_ANGULAR_MOTION_DAMPING"] = 18] = "PARAM_ANGULAR_MOTION_DAMPING";
        Param[Param["PARAM_ANGULAR_ORTHOGONAL_SOFTNESS"] = 19] = "PARAM_ANGULAR_ORTHOGONAL_SOFTNESS";
        Param[Param["PARAM_ANGULAR_ORTHOGONAL_RESTITUTION"] = 20] = "PARAM_ANGULAR_ORTHOGONAL_RESTITUTION";
        Param[Param["PARAM_ANGULAR_ORTHOGONAL_DAMPING"] = 21] = "PARAM_ANGULAR_ORTHOGONAL_DAMPING";
        Param[Param["PARAM_MAX"] = 22] = "PARAM_MAX";
    })(Param = SliderJoint3D.Param || (SliderJoint3D.Param = {}));
})(SliderJoint3D || (SliderJoint3D = {}));
export var NavigationPathQueryParameters2D;
(function (NavigationPathQueryParameters2D) {
    let PathfindingAlgorithm;
    (function (PathfindingAlgorithm) {
        PathfindingAlgorithm[PathfindingAlgorithm["PATHFINDING_ALGORITHM_ASTAR"] = 0] = "PATHFINDING_ALGORITHM_ASTAR";
    })(PathfindingAlgorithm = NavigationPathQueryParameters2D.PathfindingAlgorithm || (NavigationPathQueryParameters2D.PathfindingAlgorithm = {}));
    let PathPostProcessing;
    (function (PathPostProcessing) {
        PathPostProcessing[PathPostProcessing["PATH_POSTPROCESSING_CORRIDORFUNNEL"] = 0] = "PATH_POSTPROCESSING_CORRIDORFUNNEL";
        PathPostProcessing[PathPostProcessing["PATH_POSTPROCESSING_EDGECENTERED"] = 1] = "PATH_POSTPROCESSING_EDGECENTERED";
    })(PathPostProcessing = NavigationPathQueryParameters2D.PathPostProcessing || (NavigationPathQueryParameters2D.PathPostProcessing = {}));
    let PathMetadataFlags;
    (function (PathMetadataFlags) {
        PathMetadataFlags[PathMetadataFlags["PATH_METADATA_INCLUDE_NONE"] = 0] = "PATH_METADATA_INCLUDE_NONE";
        PathMetadataFlags[PathMetadataFlags["PATH_METADATA_INCLUDE_TYPES"] = 1] = "PATH_METADATA_INCLUDE_TYPES";
        PathMetadataFlags[PathMetadataFlags["PATH_METADATA_INCLUDE_RIDS"] = 2] = "PATH_METADATA_INCLUDE_RIDS";
        PathMetadataFlags[PathMetadataFlags["PATH_METADATA_INCLUDE_OWNERS"] = 4] = "PATH_METADATA_INCLUDE_OWNERS";
        PathMetadataFlags[PathMetadataFlags["PATH_METADATA_INCLUDE_ALL"] = 7] = "PATH_METADATA_INCLUDE_ALL";
    })(PathMetadataFlags = NavigationPathQueryParameters2D.PathMetadataFlags || (NavigationPathQueryParameters2D.PathMetadataFlags = {}));
})(NavigationPathQueryParameters2D || (NavigationPathQueryParameters2D = {}));
export var VisualShaderNodeCubemap;
(function (VisualShaderNodeCubemap) {
    let Source;
    (function (Source) {
        Source[Source["SOURCE_TEXTURE"] = 0] = "SOURCE_TEXTURE";
        Source[Source["SOURCE_PORT"] = 1] = "SOURCE_PORT";
        Source[Source["SOURCE_MAX"] = 2] = "SOURCE_MAX";
    })(Source = VisualShaderNodeCubemap.Source || (VisualShaderNodeCubemap.Source = {}));
    let TextureType;
    (function (TextureType) {
        TextureType[TextureType["TYPE_DATA"] = 0] = "TYPE_DATA";
        TextureType[TextureType["TYPE_COLOR"] = 1] = "TYPE_COLOR";
        TextureType[TextureType["TYPE_NORMAL_MAP"] = 2] = "TYPE_NORMAL_MAP";
        TextureType[TextureType["TYPE_MAX"] = 3] = "TYPE_MAX";
    })(TextureType = VisualShaderNodeCubemap.TextureType || (VisualShaderNodeCubemap.TextureType = {}));
})(VisualShaderNodeCubemap || (VisualShaderNodeCubemap = {}));
export var Timer;
(function (Timer) {
    let TimerProcessCallback;
    (function (TimerProcessCallback) {
        TimerProcessCallback[TimerProcessCallback["TIMER_PROCESS_PHYSICS"] = 0] = "TIMER_PROCESS_PHYSICS";
        TimerProcessCallback[TimerProcessCallback["TIMER_PROCESS_IDLE"] = 1] = "TIMER_PROCESS_IDLE";
    })(TimerProcessCallback = Timer.TimerProcessCallback || (Timer.TimerProcessCallback = {}));
})(Timer || (Timer = {}));
export var PlaneMesh;
(function (PlaneMesh) {
    let Orientation;
    (function (Orientation) {
        Orientation[Orientation["FACE_X"] = 0] = "FACE_X";
        Orientation[Orientation["FACE_Y"] = 1] = "FACE_Y";
        Orientation[Orientation["FACE_Z"] = 2] = "FACE_Z";
    })(Orientation = PlaneMesh.Orientation || (PlaneMesh.Orientation = {}));
})(PlaneMesh || (PlaneMesh = {}));
export var Node;
(function (Node) {
    Node.NOTIFICATION_ENTER_TREE = 10;
    Node.NOTIFICATION_EXIT_TREE = 11;
    Node.NOTIFICATION_MOVED_IN_PARENT = 12;
    Node.NOTIFICATION_READY = 13;
    Node.NOTIFICATION_PAUSED = 14;
    Node.NOTIFICATION_UNPAUSED = 15;
    Node.NOTIFICATION_PHYSICS_PROCESS = 16;
    Node.NOTIFICATION_PROCESS = 17;
    Node.NOTIFICATION_PARENTED = 18;
    Node.NOTIFICATION_UNPARENTED = 19;
    Node.NOTIFICATION_SCENE_INSTANTIATED = 20;
    Node.NOTIFICATION_DRAG_BEGIN = 21;
    Node.NOTIFICATION_DRAG_END = 22;
    Node.NOTIFICATION_PATH_RENAMED = 23;
    Node.NOTIFICATION_CHILD_ORDER_CHANGED = 24;
    Node.NOTIFICATION_INTERNAL_PROCESS = 25;
    Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS = 26;
    Node.NOTIFICATION_POST_ENTER_TREE = 27;
    Node.NOTIFICATION_DISABLED = 28;
    Node.NOTIFICATION_ENABLED = 29;
    Node.NOTIFICATION_RESET_PHYSICS_INTERPOLATION = 2001;
    Node.NOTIFICATION_EDITOR_PRE_SAVE = 9001;
    Node.NOTIFICATION_EDITOR_POST_SAVE = 9002;
    Node.NOTIFICATION_WM_MOUSE_ENTER = 1002;
    Node.NOTIFICATION_WM_MOUSE_EXIT = 1003;
    Node.NOTIFICATION_WM_WINDOW_FOCUS_IN = 1004;
    Node.NOTIFICATION_WM_WINDOW_FOCUS_OUT = 1005;
    Node.NOTIFICATION_WM_CLOSE_REQUEST = 1006;
    Node.NOTIFICATION_WM_GO_BACK_REQUEST = 1007;
    Node.NOTIFICATION_WM_SIZE_CHANGED = 1008;
    Node.NOTIFICATION_WM_DPI_CHANGE = 1009;
    Node.NOTIFICATION_VP_MOUSE_ENTER = 1010;
    Node.NOTIFICATION_VP_MOUSE_EXIT = 1011;
    Node.NOTIFICATION_OS_MEMORY_WARNING = 2009;
    Node.NOTIFICATION_TRANSLATION_CHANGED = 2010;
    Node.NOTIFICATION_WM_ABOUT = 2011;
    Node.NOTIFICATION_CRASH = 2012;
    Node.NOTIFICATION_OS_IME_UPDATE = 2013;
    Node.NOTIFICATION_APPLICATION_RESUMED = 2014;
    Node.NOTIFICATION_APPLICATION_PAUSED = 2015;
    Node.NOTIFICATION_APPLICATION_FOCUS_IN = 2016;
    Node.NOTIFICATION_APPLICATION_FOCUS_OUT = 2017;
    Node.NOTIFICATION_TEXT_SERVER_CHANGED = 2018;
    let ProcessMode;
    (function (ProcessMode) {
        ProcessMode[ProcessMode["PROCESS_MODE_INHERIT"] = 0] = "PROCESS_MODE_INHERIT";
        ProcessMode[ProcessMode["PROCESS_MODE_PAUSABLE"] = 1] = "PROCESS_MODE_PAUSABLE";
        ProcessMode[ProcessMode["PROCESS_MODE_WHEN_PAUSED"] = 2] = "PROCESS_MODE_WHEN_PAUSED";
        ProcessMode[ProcessMode["PROCESS_MODE_ALWAYS"] = 3] = "PROCESS_MODE_ALWAYS";
        ProcessMode[ProcessMode["PROCESS_MODE_DISABLED"] = 4] = "PROCESS_MODE_DISABLED";
    })(ProcessMode = Node.ProcessMode || (Node.ProcessMode = {}));
    let ProcessThreadGroup;
    (function (ProcessThreadGroup) {
        ProcessThreadGroup[ProcessThreadGroup["PROCESS_THREAD_GROUP_INHERIT"] = 0] = "PROCESS_THREAD_GROUP_INHERIT";
        ProcessThreadGroup[ProcessThreadGroup["PROCESS_THREAD_GROUP_MAIN_THREAD"] = 1] = "PROCESS_THREAD_GROUP_MAIN_THREAD";
        ProcessThreadGroup[ProcessThreadGroup["PROCESS_THREAD_GROUP_SUB_THREAD"] = 2] = "PROCESS_THREAD_GROUP_SUB_THREAD";
    })(ProcessThreadGroup = Node.ProcessThreadGroup || (Node.ProcessThreadGroup = {}));
    let ProcessThreadMessages;
    (function (ProcessThreadMessages) {
        ProcessThreadMessages[ProcessThreadMessages["FLAG_PROCESS_THREAD_MESSAGES"] = 1] = "FLAG_PROCESS_THREAD_MESSAGES";
        ProcessThreadMessages[ProcessThreadMessages["FLAG_PROCESS_THREAD_MESSAGES_PHYSICS"] = 2] = "FLAG_PROCESS_THREAD_MESSAGES_PHYSICS";
        ProcessThreadMessages[ProcessThreadMessages["FLAG_PROCESS_THREAD_MESSAGES_ALL"] = 3] = "FLAG_PROCESS_THREAD_MESSAGES_ALL";
    })(ProcessThreadMessages = Node.ProcessThreadMessages || (Node.ProcessThreadMessages = {}));
    let PhysicsInterpolationMode;
    (function (PhysicsInterpolationMode) {
        PhysicsInterpolationMode[PhysicsInterpolationMode["PHYSICS_INTERPOLATION_MODE_INHERIT"] = 0] = "PHYSICS_INTERPOLATION_MODE_INHERIT";
        PhysicsInterpolationMode[PhysicsInterpolationMode["PHYSICS_INTERPOLATION_MODE_ON"] = 1] = "PHYSICS_INTERPOLATION_MODE_ON";
        PhysicsInterpolationMode[PhysicsInterpolationMode["PHYSICS_INTERPOLATION_MODE_OFF"] = 2] = "PHYSICS_INTERPOLATION_MODE_OFF";
    })(PhysicsInterpolationMode = Node.PhysicsInterpolationMode || (Node.PhysicsInterpolationMode = {}));
    let DuplicateFlags;
    (function (DuplicateFlags) {
        DuplicateFlags[DuplicateFlags["DUPLICATE_SIGNALS"] = 1] = "DUPLICATE_SIGNALS";
        DuplicateFlags[DuplicateFlags["DUPLICATE_GROUPS"] = 2] = "DUPLICATE_GROUPS";
        DuplicateFlags[DuplicateFlags["DUPLICATE_SCRIPTS"] = 4] = "DUPLICATE_SCRIPTS";
        DuplicateFlags[DuplicateFlags["DUPLICATE_USE_INSTANTIATION"] = 8] = "DUPLICATE_USE_INSTANTIATION";
    })(DuplicateFlags = Node.DuplicateFlags || (Node.DuplicateFlags = {}));
    let InternalMode;
    (function (InternalMode) {
        InternalMode[InternalMode["INTERNAL_MODE_DISABLED"] = 0] = "INTERNAL_MODE_DISABLED";
        InternalMode[InternalMode["INTERNAL_MODE_FRONT"] = 1] = "INTERNAL_MODE_FRONT";
        InternalMode[InternalMode["INTERNAL_MODE_BACK"] = 2] = "INTERNAL_MODE_BACK";
    })(InternalMode = Node.InternalMode || (Node.InternalMode = {}));
    let AutoTranslateMode;
    (function (AutoTranslateMode) {
        AutoTranslateMode[AutoTranslateMode["AUTO_TRANSLATE_MODE_INHERIT"] = 0] = "AUTO_TRANSLATE_MODE_INHERIT";
        AutoTranslateMode[AutoTranslateMode["AUTO_TRANSLATE_MODE_ALWAYS"] = 1] = "AUTO_TRANSLATE_MODE_ALWAYS";
        AutoTranslateMode[AutoTranslateMode["AUTO_TRANSLATE_MODE_DISABLED"] = 2] = "AUTO_TRANSLATE_MODE_DISABLED";
    })(AutoTranslateMode = Node.AutoTranslateMode || (Node.AutoTranslateMode = {}));
})(Node || (Node = {}));
export var MainLoop;
(function (MainLoop) {
    MainLoop.NOTIFICATION_OS_MEMORY_WARNING = 2009;
    MainLoop.NOTIFICATION_TRANSLATION_CHANGED = 2010;
    MainLoop.NOTIFICATION_WM_ABOUT = 2011;
    MainLoop.NOTIFICATION_CRASH = 2012;
    MainLoop.NOTIFICATION_OS_IME_UPDATE = 2013;
    MainLoop.NOTIFICATION_APPLICATION_RESUMED = 2014;
    MainLoop.NOTIFICATION_APPLICATION_PAUSED = 2015;
    MainLoop.NOTIFICATION_APPLICATION_FOCUS_IN = 2016;
    MainLoop.NOTIFICATION_APPLICATION_FOCUS_OUT = 2017;
    MainLoop.NOTIFICATION_TEXT_SERVER_CHANGED = 2018;
})(MainLoop || (MainLoop = {}));
export var VisualShaderNodeClamp;
(function (VisualShaderNodeClamp) {
    let OpType;
    (function (OpType) {
        OpType[OpType["OP_TYPE_FLOAT"] = 0] = "OP_TYPE_FLOAT";
        OpType[OpType["OP_TYPE_INT"] = 1] = "OP_TYPE_INT";
        OpType[OpType["OP_TYPE_UINT"] = 2] = "OP_TYPE_UINT";
        OpType[OpType["OP_TYPE_VECTOR_2D"] = 3] = "OP_TYPE_VECTOR_2D";
        OpType[OpType["OP_TYPE_VECTOR_3D"] = 4] = "OP_TYPE_VECTOR_3D";
        OpType[OpType["OP_TYPE_VECTOR_4D"] = 5] = "OP_TYPE_VECTOR_4D";
        OpType[OpType["OP_TYPE_MAX"] = 6] = "OP_TYPE_MAX";
    })(OpType = VisualShaderNodeClamp.OpType || (VisualShaderNodeClamp.OpType = {}));
})(VisualShaderNodeClamp || (VisualShaderNodeClamp = {}));
export var VisualShaderNodeTransformFunc;
(function (VisualShaderNodeTransformFunc) {
    let Function;
    (function (Function) {
        Function[Function["FUNC_INVERSE"] = 0] = "FUNC_INVERSE";
        Function[Function["FUNC_TRANSPOSE"] = 1] = "FUNC_TRANSPOSE";
        Function[Function["FUNC_MAX"] = 2] = "FUNC_MAX";
    })(Function = VisualShaderNodeTransformFunc.Function || (VisualShaderNodeTransformFunc.Function = {}));
})(VisualShaderNodeTransformFunc || (VisualShaderNodeTransformFunc = {}));
export var Object;
(function (Object) {
    Object.NOTIFICATION_POSTINITIALIZE = 0;
    Object.NOTIFICATION_PREDELETE = 1;
    Object.NOTIFICATION_EXTENSION_RELOADED = 2;
    let ConnectFlags;
    (function (ConnectFlags) {
        ConnectFlags[ConnectFlags["CONNECT_DEFERRED"] = 1] = "CONNECT_DEFERRED";
        ConnectFlags[ConnectFlags["CONNECT_PERSIST"] = 2] = "CONNECT_PERSIST";
        ConnectFlags[ConnectFlags["CONNECT_ONE_SHOT"] = 4] = "CONNECT_ONE_SHOT";
        ConnectFlags[ConnectFlags["CONNECT_REFERENCE_COUNTED"] = 8] = "CONNECT_REFERENCE_COUNTED";
    })(ConnectFlags = Object.ConnectFlags || (Object.ConnectFlags = {}));
})(Object || (Object = {}));
export var TextServer;
(function (TextServer) {
    let FontAntialiasing;
    (function (FontAntialiasing) {
        FontAntialiasing[FontAntialiasing["FONT_ANTIALIASING_NONE"] = 0] = "FONT_ANTIALIASING_NONE";
        FontAntialiasing[FontAntialiasing["FONT_ANTIALIASING_GRAY"] = 1] = "FONT_ANTIALIASING_GRAY";
        FontAntialiasing[FontAntialiasing["FONT_ANTIALIASING_LCD"] = 2] = "FONT_ANTIALIASING_LCD";
    })(FontAntialiasing = TextServer.FontAntialiasing || (TextServer.FontAntialiasing = {}));
    let FontLCDSubpixelLayout;
    (function (FontLCDSubpixelLayout) {
        FontLCDSubpixelLayout[FontLCDSubpixelLayout["FONT_LCD_SUBPIXEL_LAYOUT_NONE"] = 0] = "FONT_LCD_SUBPIXEL_LAYOUT_NONE";
        FontLCDSubpixelLayout[FontLCDSubpixelLayout["FONT_LCD_SUBPIXEL_LAYOUT_HRGB"] = 1] = "FONT_LCD_SUBPIXEL_LAYOUT_HRGB";
        FontLCDSubpixelLayout[FontLCDSubpixelLayout["FONT_LCD_SUBPIXEL_LAYOUT_HBGR"] = 2] = "FONT_LCD_SUBPIXEL_LAYOUT_HBGR";
        FontLCDSubpixelLayout[FontLCDSubpixelLayout["FONT_LCD_SUBPIXEL_LAYOUT_VRGB"] = 3] = "FONT_LCD_SUBPIXEL_LAYOUT_VRGB";
        FontLCDSubpixelLayout[FontLCDSubpixelLayout["FONT_LCD_SUBPIXEL_LAYOUT_VBGR"] = 4] = "FONT_LCD_SUBPIXEL_LAYOUT_VBGR";
        FontLCDSubpixelLayout[FontLCDSubpixelLayout["FONT_LCD_SUBPIXEL_LAYOUT_MAX"] = 5] = "FONT_LCD_SUBPIXEL_LAYOUT_MAX";
    })(FontLCDSubpixelLayout = TextServer.FontLCDSubpixelLayout || (TextServer.FontLCDSubpixelLayout = {}));
    let Direction;
    (function (Direction) {
        Direction[Direction["DIRECTION_AUTO"] = 0] = "DIRECTION_AUTO";
        Direction[Direction["DIRECTION_LTR"] = 1] = "DIRECTION_LTR";
        Direction[Direction["DIRECTION_RTL"] = 2] = "DIRECTION_RTL";
        Direction[Direction["DIRECTION_INHERITED"] = 3] = "DIRECTION_INHERITED";
    })(Direction = TextServer.Direction || (TextServer.Direction = {}));
    let Orientation;
    (function (Orientation) {
        Orientation[Orientation["ORIENTATION_HORIZONTAL"] = 0] = "ORIENTATION_HORIZONTAL";
        Orientation[Orientation["ORIENTATION_VERTICAL"] = 1] = "ORIENTATION_VERTICAL";
    })(Orientation = TextServer.Orientation || (TextServer.Orientation = {}));
    let JustificationFlag;
    (function (JustificationFlag) {
        JustificationFlag[JustificationFlag["JUSTIFICATION_NONE"] = 0] = "JUSTIFICATION_NONE";
        JustificationFlag[JustificationFlag["JUSTIFICATION_KASHIDA"] = 1] = "JUSTIFICATION_KASHIDA";
        JustificationFlag[JustificationFlag["JUSTIFICATION_WORD_BOUND"] = 2] = "JUSTIFICATION_WORD_BOUND";
        JustificationFlag[JustificationFlag["JUSTIFICATION_TRIM_EDGE_SPACES"] = 4] = "JUSTIFICATION_TRIM_EDGE_SPACES";
        JustificationFlag[JustificationFlag["JUSTIFICATION_AFTER_LAST_TAB"] = 8] = "JUSTIFICATION_AFTER_LAST_TAB";
        JustificationFlag[JustificationFlag["JUSTIFICATION_CONSTRAIN_ELLIPSIS"] = 16] = "JUSTIFICATION_CONSTRAIN_ELLIPSIS";
        JustificationFlag[JustificationFlag["JUSTIFICATION_SKIP_LAST_LINE"] = 32] = "JUSTIFICATION_SKIP_LAST_LINE";
        JustificationFlag[JustificationFlag["JUSTIFICATION_SKIP_LAST_LINE_WITH_VISIBLE_CHARS"] = 64] = "JUSTIFICATION_SKIP_LAST_LINE_WITH_VISIBLE_CHARS";
        JustificationFlag[JustificationFlag["JUSTIFICATION_DO_NOT_SKIP_SINGLE_LINE"] = 128] = "JUSTIFICATION_DO_NOT_SKIP_SINGLE_LINE";
    })(JustificationFlag = TextServer.JustificationFlag || (TextServer.JustificationFlag = {}));
    let AutowrapMode;
    (function (AutowrapMode) {
        AutowrapMode[AutowrapMode["AUTOWRAP_OFF"] = 0] = "AUTOWRAP_OFF";
        AutowrapMode[AutowrapMode["AUTOWRAP_ARBITRARY"] = 1] = "AUTOWRAP_ARBITRARY";
        AutowrapMode[AutowrapMode["AUTOWRAP_WORD"] = 2] = "AUTOWRAP_WORD";
        AutowrapMode[AutowrapMode["AUTOWRAP_WORD_SMART"] = 3] = "AUTOWRAP_WORD_SMART";
    })(AutowrapMode = TextServer.AutowrapMode || (TextServer.AutowrapMode = {}));
    let LineBreakFlag;
    (function (LineBreakFlag) {
        LineBreakFlag[LineBreakFlag["BREAK_NONE"] = 0] = "BREAK_NONE";
        LineBreakFlag[LineBreakFlag["BREAK_MANDATORY"] = 1] = "BREAK_MANDATORY";
        LineBreakFlag[LineBreakFlag["BREAK_WORD_BOUND"] = 2] = "BREAK_WORD_BOUND";
        LineBreakFlag[LineBreakFlag["BREAK_GRAPHEME_BOUND"] = 4] = "BREAK_GRAPHEME_BOUND";
        LineBreakFlag[LineBreakFlag["BREAK_ADAPTIVE"] = 8] = "BREAK_ADAPTIVE";
        LineBreakFlag[LineBreakFlag["BREAK_TRIM_EDGE_SPACES"] = 16] = "BREAK_TRIM_EDGE_SPACES";
        LineBreakFlag[LineBreakFlag["BREAK_TRIM_INDENT"] = 32] = "BREAK_TRIM_INDENT";
    })(LineBreakFlag = TextServer.LineBreakFlag || (TextServer.LineBreakFlag = {}));
    let VisibleCharactersBehavior;
    (function (VisibleCharactersBehavior) {
        VisibleCharactersBehavior[VisibleCharactersBehavior["VC_CHARS_BEFORE_SHAPING"] = 0] = "VC_CHARS_BEFORE_SHAPING";
        VisibleCharactersBehavior[VisibleCharactersBehavior["VC_CHARS_AFTER_SHAPING"] = 1] = "VC_CHARS_AFTER_SHAPING";
        VisibleCharactersBehavior[VisibleCharactersBehavior["VC_GLYPHS_AUTO"] = 2] = "VC_GLYPHS_AUTO";
        VisibleCharactersBehavior[VisibleCharactersBehavior["VC_GLYPHS_LTR"] = 3] = "VC_GLYPHS_LTR";
        VisibleCharactersBehavior[VisibleCharactersBehavior["VC_GLYPHS_RTL"] = 4] = "VC_GLYPHS_RTL";
    })(VisibleCharactersBehavior = TextServer.VisibleCharactersBehavior || (TextServer.VisibleCharactersBehavior = {}));
    let OverrunBehavior;
    (function (OverrunBehavior) {
        OverrunBehavior[OverrunBehavior["OVERRUN_NO_TRIMMING"] = 0] = "OVERRUN_NO_TRIMMING";
        OverrunBehavior[OverrunBehavior["OVERRUN_TRIM_CHAR"] = 1] = "OVERRUN_TRIM_CHAR";
        OverrunBehavior[OverrunBehavior["OVERRUN_TRIM_WORD"] = 2] = "OVERRUN_TRIM_WORD";
        OverrunBehavior[OverrunBehavior["OVERRUN_TRIM_ELLIPSIS"] = 3] = "OVERRUN_TRIM_ELLIPSIS";
        OverrunBehavior[OverrunBehavior["OVERRUN_TRIM_WORD_ELLIPSIS"] = 4] = "OVERRUN_TRIM_WORD_ELLIPSIS";
    })(OverrunBehavior = TextServer.OverrunBehavior || (TextServer.OverrunBehavior = {}));
    let TextOverrunFlag;
    (function (TextOverrunFlag) {
        TextOverrunFlag[TextOverrunFlag["OVERRUN_NO_TRIM"] = 0] = "OVERRUN_NO_TRIM";
        TextOverrunFlag[TextOverrunFlag["OVERRUN_TRIM"] = 1] = "OVERRUN_TRIM";
        TextOverrunFlag[TextOverrunFlag["OVERRUN_TRIM_WORD_ONLY"] = 2] = "OVERRUN_TRIM_WORD_ONLY";
        TextOverrunFlag[TextOverrunFlag["OVERRUN_ADD_ELLIPSIS"] = 4] = "OVERRUN_ADD_ELLIPSIS";
        TextOverrunFlag[TextOverrunFlag["OVERRUN_ENFORCE_ELLIPSIS"] = 8] = "OVERRUN_ENFORCE_ELLIPSIS";
        TextOverrunFlag[TextOverrunFlag["OVERRUN_JUSTIFICATION_AWARE"] = 16] = "OVERRUN_JUSTIFICATION_AWARE";
    })(TextOverrunFlag = TextServer.TextOverrunFlag || (TextServer.TextOverrunFlag = {}));
    let GraphemeFlag;
    (function (GraphemeFlag) {
        GraphemeFlag[GraphemeFlag["GRAPHEME_IS_VALID"] = 1] = "GRAPHEME_IS_VALID";
        GraphemeFlag[GraphemeFlag["GRAPHEME_IS_RTL"] = 2] = "GRAPHEME_IS_RTL";
        GraphemeFlag[GraphemeFlag["GRAPHEME_IS_VIRTUAL"] = 4] = "GRAPHEME_IS_VIRTUAL";
        GraphemeFlag[GraphemeFlag["GRAPHEME_IS_SPACE"] = 8] = "GRAPHEME_IS_SPACE";
        GraphemeFlag[GraphemeFlag["GRAPHEME_IS_BREAK_HARD"] = 16] = "GRAPHEME_IS_BREAK_HARD";
        GraphemeFlag[GraphemeFlag["GRAPHEME_IS_BREAK_SOFT"] = 32] = "GRAPHEME_IS_BREAK_SOFT";
        GraphemeFlag[GraphemeFlag["GRAPHEME_IS_TAB"] = 64] = "GRAPHEME_IS_TAB";
        GraphemeFlag[GraphemeFlag["GRAPHEME_IS_ELONGATION"] = 128] = "GRAPHEME_IS_ELONGATION";
        GraphemeFlag[GraphemeFlag["GRAPHEME_IS_PUNCTUATION"] = 256] = "GRAPHEME_IS_PUNCTUATION";
        GraphemeFlag[GraphemeFlag["GRAPHEME_IS_UNDERSCORE"] = 512] = "GRAPHEME_IS_UNDERSCORE";
        GraphemeFlag[GraphemeFlag["GRAPHEME_IS_CONNECTED"] = 1024] = "GRAPHEME_IS_CONNECTED";
        GraphemeFlag[GraphemeFlag["GRAPHEME_IS_SAFE_TO_INSERT_TATWEEL"] = 2048] = "GRAPHEME_IS_SAFE_TO_INSERT_TATWEEL";
        GraphemeFlag[GraphemeFlag["GRAPHEME_IS_EMBEDDED_OBJECT"] = 4096] = "GRAPHEME_IS_EMBEDDED_OBJECT";
        GraphemeFlag[GraphemeFlag["GRAPHEME_IS_SOFT_HYPHEN"] = 8192] = "GRAPHEME_IS_SOFT_HYPHEN";
    })(GraphemeFlag = TextServer.GraphemeFlag || (TextServer.GraphemeFlag = {}));
    let Hinting;
    (function (Hinting) {
        Hinting[Hinting["HINTING_NONE"] = 0] = "HINTING_NONE";
        Hinting[Hinting["HINTING_LIGHT"] = 1] = "HINTING_LIGHT";
        Hinting[Hinting["HINTING_NORMAL"] = 2] = "HINTING_NORMAL";
    })(Hinting = TextServer.Hinting || (TextServer.Hinting = {}));
    let SubpixelPositioning;
    (function (SubpixelPositioning) {
        SubpixelPositioning[SubpixelPositioning["SUBPIXEL_POSITIONING_DISABLED"] = 0] = "SUBPIXEL_POSITIONING_DISABLED";
        SubpixelPositioning[SubpixelPositioning["SUBPIXEL_POSITIONING_AUTO"] = 1] = "SUBPIXEL_POSITIONING_AUTO";
        SubpixelPositioning[SubpixelPositioning["SUBPIXEL_POSITIONING_ONE_HALF"] = 2] = "SUBPIXEL_POSITIONING_ONE_HALF";
        SubpixelPositioning[SubpixelPositioning["SUBPIXEL_POSITIONING_ONE_QUARTER"] = 3] = "SUBPIXEL_POSITIONING_ONE_QUARTER";
        SubpixelPositioning[SubpixelPositioning["SUBPIXEL_POSITIONING_ONE_HALF_MAX_SIZE"] = 20] = "SUBPIXEL_POSITIONING_ONE_HALF_MAX_SIZE";
        SubpixelPositioning[SubpixelPositioning["SUBPIXEL_POSITIONING_ONE_QUARTER_MAX_SIZE"] = 16] = "SUBPIXEL_POSITIONING_ONE_QUARTER_MAX_SIZE";
    })(SubpixelPositioning = TextServer.SubpixelPositioning || (TextServer.SubpixelPositioning = {}));
    let Feature;
    (function (Feature) {
        Feature[Feature["FEATURE_SIMPLE_LAYOUT"] = 1] = "FEATURE_SIMPLE_LAYOUT";
        Feature[Feature["FEATURE_BIDI_LAYOUT"] = 2] = "FEATURE_BIDI_LAYOUT";
        Feature[Feature["FEATURE_VERTICAL_LAYOUT"] = 4] = "FEATURE_VERTICAL_LAYOUT";
        Feature[Feature["FEATURE_SHAPING"] = 8] = "FEATURE_SHAPING";
        Feature[Feature["FEATURE_KASHIDA_JUSTIFICATION"] = 16] = "FEATURE_KASHIDA_JUSTIFICATION";
        Feature[Feature["FEATURE_BREAK_ITERATORS"] = 32] = "FEATURE_BREAK_ITERATORS";
        Feature[Feature["FEATURE_FONT_BITMAP"] = 64] = "FEATURE_FONT_BITMAP";
        Feature[Feature["FEATURE_FONT_DYNAMIC"] = 128] = "FEATURE_FONT_DYNAMIC";
        Feature[Feature["FEATURE_FONT_MSDF"] = 256] = "FEATURE_FONT_MSDF";
        Feature[Feature["FEATURE_FONT_SYSTEM"] = 512] = "FEATURE_FONT_SYSTEM";
        Feature[Feature["FEATURE_FONT_VARIABLE"] = 1024] = "FEATURE_FONT_VARIABLE";
        Feature[Feature["FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION"] = 2048] = "FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION";
        Feature[Feature["FEATURE_USE_SUPPORT_DATA"] = 4096] = "FEATURE_USE_SUPPORT_DATA";
        Feature[Feature["FEATURE_UNICODE_IDENTIFIERS"] = 8192] = "FEATURE_UNICODE_IDENTIFIERS";
        Feature[Feature["FEATURE_UNICODE_SECURITY"] = 16384] = "FEATURE_UNICODE_SECURITY";
    })(Feature = TextServer.Feature || (TextServer.Feature = {}));
    let ContourPointTag;
    (function (ContourPointTag) {
        ContourPointTag[ContourPointTag["CONTOUR_CURVE_TAG_ON"] = 1] = "CONTOUR_CURVE_TAG_ON";
        ContourPointTag[ContourPointTag["CONTOUR_CURVE_TAG_OFF_CONIC"] = 0] = "CONTOUR_CURVE_TAG_OFF_CONIC";
        ContourPointTag[ContourPointTag["CONTOUR_CURVE_TAG_OFF_CUBIC"] = 2] = "CONTOUR_CURVE_TAG_OFF_CUBIC";
    })(ContourPointTag = TextServer.ContourPointTag || (TextServer.ContourPointTag = {}));
    let SpacingType;
    (function (SpacingType) {
        SpacingType[SpacingType["SPACING_GLYPH"] = 0] = "SPACING_GLYPH";
        SpacingType[SpacingType["SPACING_SPACE"] = 1] = "SPACING_SPACE";
        SpacingType[SpacingType["SPACING_TOP"] = 2] = "SPACING_TOP";
        SpacingType[SpacingType["SPACING_BOTTOM"] = 3] = "SPACING_BOTTOM";
        SpacingType[SpacingType["SPACING_MAX"] = 4] = "SPACING_MAX";
    })(SpacingType = TextServer.SpacingType || (TextServer.SpacingType = {}));
    let FontStyle;
    (function (FontStyle) {
        FontStyle[FontStyle["FONT_BOLD"] = 1] = "FONT_BOLD";
        FontStyle[FontStyle["FONT_ITALIC"] = 2] = "FONT_ITALIC";
        FontStyle[FontStyle["FONT_FIXED_WIDTH"] = 4] = "FONT_FIXED_WIDTH";
    })(FontStyle = TextServer.FontStyle || (TextServer.FontStyle = {}));
    let StructuredTextParser;
    (function (StructuredTextParser) {
        StructuredTextParser[StructuredTextParser["STRUCTURED_TEXT_DEFAULT"] = 0] = "STRUCTURED_TEXT_DEFAULT";
        StructuredTextParser[StructuredTextParser["STRUCTURED_TEXT_URI"] = 1] = "STRUCTURED_TEXT_URI";
        StructuredTextParser[StructuredTextParser["STRUCTURED_TEXT_FILE"] = 2] = "STRUCTURED_TEXT_FILE";
        StructuredTextParser[StructuredTextParser["STRUCTURED_TEXT_EMAIL"] = 3] = "STRUCTURED_TEXT_EMAIL";
        StructuredTextParser[StructuredTextParser["STRUCTURED_TEXT_LIST"] = 4] = "STRUCTURED_TEXT_LIST";
        StructuredTextParser[StructuredTextParser["STRUCTURED_TEXT_GDSCRIPT"] = 5] = "STRUCTURED_TEXT_GDSCRIPT";
        StructuredTextParser[StructuredTextParser["STRUCTURED_TEXT_CUSTOM"] = 6] = "STRUCTURED_TEXT_CUSTOM";
    })(StructuredTextParser = TextServer.StructuredTextParser || (TextServer.StructuredTextParser = {}));
    let FixedSizeScaleMode;
    (function (FixedSizeScaleMode) {
        FixedSizeScaleMode[FixedSizeScaleMode["FIXED_SIZE_SCALE_DISABLE"] = 0] = "FIXED_SIZE_SCALE_DISABLE";
        FixedSizeScaleMode[FixedSizeScaleMode["FIXED_SIZE_SCALE_INTEGER_ONLY"] = 1] = "FIXED_SIZE_SCALE_INTEGER_ONLY";
        FixedSizeScaleMode[FixedSizeScaleMode["FIXED_SIZE_SCALE_ENABLED"] = 2] = "FIXED_SIZE_SCALE_ENABLED";
    })(FixedSizeScaleMode = TextServer.FixedSizeScaleMode || (TextServer.FixedSizeScaleMode = {}));
})(TextServer || (TextServer = {}));
export var Generic6DOFJoint3D;
(function (Generic6DOFJoint3D) {
    let Param;
    (function (Param) {
        Param[Param["PARAM_LINEAR_LOWER_LIMIT"] = 0] = "PARAM_LINEAR_LOWER_LIMIT";
        Param[Param["PARAM_LINEAR_UPPER_LIMIT"] = 1] = "PARAM_LINEAR_UPPER_LIMIT";
        Param[Param["PARAM_LINEAR_LIMIT_SOFTNESS"] = 2] = "PARAM_LINEAR_LIMIT_SOFTNESS";
        Param[Param["PARAM_LINEAR_RESTITUTION"] = 3] = "PARAM_LINEAR_RESTITUTION";
        Param[Param["PARAM_LINEAR_DAMPING"] = 4] = "PARAM_LINEAR_DAMPING";
        Param[Param["PARAM_LINEAR_MOTOR_TARGET_VELOCITY"] = 5] = "PARAM_LINEAR_MOTOR_TARGET_VELOCITY";
        Param[Param["PARAM_LINEAR_MOTOR_FORCE_LIMIT"] = 6] = "PARAM_LINEAR_MOTOR_FORCE_LIMIT";
        Param[Param["PARAM_LINEAR_SPRING_STIFFNESS"] = 7] = "PARAM_LINEAR_SPRING_STIFFNESS";
        Param[Param["PARAM_LINEAR_SPRING_DAMPING"] = 8] = "PARAM_LINEAR_SPRING_DAMPING";
        Param[Param["PARAM_LINEAR_SPRING_EQUILIBRIUM_POINT"] = 9] = "PARAM_LINEAR_SPRING_EQUILIBRIUM_POINT";
        Param[Param["PARAM_ANGULAR_LOWER_LIMIT"] = 10] = "PARAM_ANGULAR_LOWER_LIMIT";
        Param[Param["PARAM_ANGULAR_UPPER_LIMIT"] = 11] = "PARAM_ANGULAR_UPPER_LIMIT";
        Param[Param["PARAM_ANGULAR_LIMIT_SOFTNESS"] = 12] = "PARAM_ANGULAR_LIMIT_SOFTNESS";
        Param[Param["PARAM_ANGULAR_DAMPING"] = 13] = "PARAM_ANGULAR_DAMPING";
        Param[Param["PARAM_ANGULAR_RESTITUTION"] = 14] = "PARAM_ANGULAR_RESTITUTION";
        Param[Param["PARAM_ANGULAR_FORCE_LIMIT"] = 15] = "PARAM_ANGULAR_FORCE_LIMIT";
        Param[Param["PARAM_ANGULAR_ERP"] = 16] = "PARAM_ANGULAR_ERP";
        Param[Param["PARAM_ANGULAR_MOTOR_TARGET_VELOCITY"] = 17] = "PARAM_ANGULAR_MOTOR_TARGET_VELOCITY";
        Param[Param["PARAM_ANGULAR_MOTOR_FORCE_LIMIT"] = 18] = "PARAM_ANGULAR_MOTOR_FORCE_LIMIT";
        Param[Param["PARAM_ANGULAR_SPRING_STIFFNESS"] = 19] = "PARAM_ANGULAR_SPRING_STIFFNESS";
        Param[Param["PARAM_ANGULAR_SPRING_DAMPING"] = 20] = "PARAM_ANGULAR_SPRING_DAMPING";
        Param[Param["PARAM_ANGULAR_SPRING_EQUILIBRIUM_POINT"] = 21] = "PARAM_ANGULAR_SPRING_EQUILIBRIUM_POINT";
        Param[Param["PARAM_MAX"] = 22] = "PARAM_MAX";
    })(Param = Generic6DOFJoint3D.Param || (Generic6DOFJoint3D.Param = {}));
    let Flag;
    (function (Flag) {
        Flag[Flag["FLAG_ENABLE_LINEAR_LIMIT"] = 0] = "FLAG_ENABLE_LINEAR_LIMIT";
        Flag[Flag["FLAG_ENABLE_ANGULAR_LIMIT"] = 1] = "FLAG_ENABLE_ANGULAR_LIMIT";
        Flag[Flag["FLAG_ENABLE_LINEAR_SPRING"] = 3] = "FLAG_ENABLE_LINEAR_SPRING";
        Flag[Flag["FLAG_ENABLE_ANGULAR_SPRING"] = 2] = "FLAG_ENABLE_ANGULAR_SPRING";
        Flag[Flag["FLAG_ENABLE_MOTOR"] = 4] = "FLAG_ENABLE_MOTOR";
        Flag[Flag["FLAG_ENABLE_LINEAR_MOTOR"] = 5] = "FLAG_ENABLE_LINEAR_MOTOR";
        Flag[Flag["FLAG_MAX"] = 6] = "FLAG_MAX";
    })(Flag = Generic6DOFJoint3D.Flag || (Generic6DOFJoint3D.Flag = {}));
})(Generic6DOFJoint3D || (Generic6DOFJoint3D = {}));
export var ItemList;
(function (ItemList) {
    let IconMode;
    (function (IconMode) {
        IconMode[IconMode["ICON_MODE_TOP"] = 0] = "ICON_MODE_TOP";
        IconMode[IconMode["ICON_MODE_LEFT"] = 1] = "ICON_MODE_LEFT";
    })(IconMode = ItemList.IconMode || (ItemList.IconMode = {}));
    let SelectMode;
    (function (SelectMode) {
        SelectMode[SelectMode["SELECT_SINGLE"] = 0] = "SELECT_SINGLE";
        SelectMode[SelectMode["SELECT_MULTI"] = 1] = "SELECT_MULTI";
    })(SelectMode = ItemList.SelectMode || (ItemList.SelectMode = {}));
})(ItemList || (ItemList = {}));
export var ScrollContainer;
(function (ScrollContainer) {
    let ScrollMode;
    (function (ScrollMode) {
        ScrollMode[ScrollMode["SCROLL_MODE_DISABLED"] = 0] = "SCROLL_MODE_DISABLED";
        ScrollMode[ScrollMode["SCROLL_MODE_AUTO"] = 1] = "SCROLL_MODE_AUTO";
        ScrollMode[ScrollMode["SCROLL_MODE_SHOW_ALWAYS"] = 2] = "SCROLL_MODE_SHOW_ALWAYS";
        ScrollMode[ScrollMode["SCROLL_MODE_SHOW_NEVER"] = 3] = "SCROLL_MODE_SHOW_NEVER";
        ScrollMode[ScrollMode["SCROLL_MODE_RESERVE"] = 4] = "SCROLL_MODE_RESERVE";
    })(ScrollMode = ScrollContainer.ScrollMode || (ScrollContainer.ScrollMode = {}));
})(ScrollContainer || (ScrollContainer = {}));
export var RigidBody2D;
(function (RigidBody2D) {
    let FreezeMode;
    (function (FreezeMode) {
        FreezeMode[FreezeMode["FREEZE_MODE_STATIC"] = 0] = "FREEZE_MODE_STATIC";
        FreezeMode[FreezeMode["FREEZE_MODE_KINEMATIC"] = 1] = "FREEZE_MODE_KINEMATIC";
    })(FreezeMode = RigidBody2D.FreezeMode || (RigidBody2D.FreezeMode = {}));
    let CenterOfMassMode;
    (function (CenterOfMassMode) {
        CenterOfMassMode[CenterOfMassMode["CENTER_OF_MASS_MODE_AUTO"] = 0] = "CENTER_OF_MASS_MODE_AUTO";
        CenterOfMassMode[CenterOfMassMode["CENTER_OF_MASS_MODE_CUSTOM"] = 1] = "CENTER_OF_MASS_MODE_CUSTOM";
    })(CenterOfMassMode = RigidBody2D.CenterOfMassMode || (RigidBody2D.CenterOfMassMode = {}));
    let DampMode;
    (function (DampMode) {
        DampMode[DampMode["DAMP_MODE_COMBINE"] = 0] = "DAMP_MODE_COMBINE";
        DampMode[DampMode["DAMP_MODE_REPLACE"] = 1] = "DAMP_MODE_REPLACE";
    })(DampMode = RigidBody2D.DampMode || (RigidBody2D.DampMode = {}));
    let CCDMode;
    (function (CCDMode) {
        CCDMode[CCDMode["CCD_MODE_DISABLED"] = 0] = "CCD_MODE_DISABLED";
        CCDMode[CCDMode["CCD_MODE_CAST_RAY"] = 1] = "CCD_MODE_CAST_RAY";
        CCDMode[CCDMode["CCD_MODE_CAST_SHAPE"] = 2] = "CCD_MODE_CAST_SHAPE";
    })(CCDMode = RigidBody2D.CCDMode || (RigidBody2D.CCDMode = {}));
})(RigidBody2D || (RigidBody2D = {}));
export var PhysicsServer3D;
(function (PhysicsServer3D) {
    let JointType;
    (function (JointType) {
        JointType[JointType["JOINT_TYPE_PIN"] = 0] = "JOINT_TYPE_PIN";
        JointType[JointType["JOINT_TYPE_HINGE"] = 1] = "JOINT_TYPE_HINGE";
        JointType[JointType["JOINT_TYPE_SLIDER"] = 2] = "JOINT_TYPE_SLIDER";
        JointType[JointType["JOINT_TYPE_CONE_TWIST"] = 3] = "JOINT_TYPE_CONE_TWIST";
        JointType[JointType["JOINT_TYPE_6DOF"] = 4] = "JOINT_TYPE_6DOF";
        JointType[JointType["JOINT_TYPE_MAX"] = 5] = "JOINT_TYPE_MAX";
    })(JointType = PhysicsServer3D.JointType || (PhysicsServer3D.JointType = {}));
    let PinJointParam;
    (function (PinJointParam) {
        PinJointParam[PinJointParam["PIN_JOINT_BIAS"] = 0] = "PIN_JOINT_BIAS";
        PinJointParam[PinJointParam["PIN_JOINT_DAMPING"] = 1] = "PIN_JOINT_DAMPING";
        PinJointParam[PinJointParam["PIN_JOINT_IMPULSE_CLAMP"] = 2] = "PIN_JOINT_IMPULSE_CLAMP";
    })(PinJointParam = PhysicsServer3D.PinJointParam || (PhysicsServer3D.PinJointParam = {}));
    let HingeJointParam;
    (function (HingeJointParam) {
        HingeJointParam[HingeJointParam["HINGE_JOINT_BIAS"] = 0] = "HINGE_JOINT_BIAS";
        HingeJointParam[HingeJointParam["HINGE_JOINT_LIMIT_UPPER"] = 1] = "HINGE_JOINT_LIMIT_UPPER";
        HingeJointParam[HingeJointParam["HINGE_JOINT_LIMIT_LOWER"] = 2] = "HINGE_JOINT_LIMIT_LOWER";
        HingeJointParam[HingeJointParam["HINGE_JOINT_LIMIT_BIAS"] = 3] = "HINGE_JOINT_LIMIT_BIAS";
        HingeJointParam[HingeJointParam["HINGE_JOINT_LIMIT_SOFTNESS"] = 4] = "HINGE_JOINT_LIMIT_SOFTNESS";
        HingeJointParam[HingeJointParam["HINGE_JOINT_LIMIT_RELAXATION"] = 5] = "HINGE_JOINT_LIMIT_RELAXATION";
        HingeJointParam[HingeJointParam["HINGE_JOINT_MOTOR_TARGET_VELOCITY"] = 6] = "HINGE_JOINT_MOTOR_TARGET_VELOCITY";
        HingeJointParam[HingeJointParam["HINGE_JOINT_MOTOR_MAX_IMPULSE"] = 7] = "HINGE_JOINT_MOTOR_MAX_IMPULSE";
    })(HingeJointParam = PhysicsServer3D.HingeJointParam || (PhysicsServer3D.HingeJointParam = {}));
    let HingeJointFlag;
    (function (HingeJointFlag) {
        HingeJointFlag[HingeJointFlag["HINGE_JOINT_FLAG_USE_LIMIT"] = 0] = "HINGE_JOINT_FLAG_USE_LIMIT";
        HingeJointFlag[HingeJointFlag["HINGE_JOINT_FLAG_ENABLE_MOTOR"] = 1] = "HINGE_JOINT_FLAG_ENABLE_MOTOR";
    })(HingeJointFlag = PhysicsServer3D.HingeJointFlag || (PhysicsServer3D.HingeJointFlag = {}));
    let SliderJointParam;
    (function (SliderJointParam) {
        SliderJointParam[SliderJointParam["SLIDER_JOINT_LINEAR_LIMIT_UPPER"] = 0] = "SLIDER_JOINT_LINEAR_LIMIT_UPPER";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_LINEAR_LIMIT_LOWER"] = 1] = "SLIDER_JOINT_LINEAR_LIMIT_LOWER";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_LINEAR_LIMIT_SOFTNESS"] = 2] = "SLIDER_JOINT_LINEAR_LIMIT_SOFTNESS";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_LINEAR_LIMIT_RESTITUTION"] = 3] = "SLIDER_JOINT_LINEAR_LIMIT_RESTITUTION";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_LINEAR_LIMIT_DAMPING"] = 4] = "SLIDER_JOINT_LINEAR_LIMIT_DAMPING";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_LINEAR_MOTION_SOFTNESS"] = 5] = "SLIDER_JOINT_LINEAR_MOTION_SOFTNESS";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_LINEAR_MOTION_RESTITUTION"] = 6] = "SLIDER_JOINT_LINEAR_MOTION_RESTITUTION";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_LINEAR_MOTION_DAMPING"] = 7] = "SLIDER_JOINT_LINEAR_MOTION_DAMPING";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_LINEAR_ORTHOGONAL_SOFTNESS"] = 8] = "SLIDER_JOINT_LINEAR_ORTHOGONAL_SOFTNESS";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_LINEAR_ORTHOGONAL_RESTITUTION"] = 9] = "SLIDER_JOINT_LINEAR_ORTHOGONAL_RESTITUTION";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_LINEAR_ORTHOGONAL_DAMPING"] = 10] = "SLIDER_JOINT_LINEAR_ORTHOGONAL_DAMPING";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_ANGULAR_LIMIT_UPPER"] = 11] = "SLIDER_JOINT_ANGULAR_LIMIT_UPPER";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_ANGULAR_LIMIT_LOWER"] = 12] = "SLIDER_JOINT_ANGULAR_LIMIT_LOWER";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_ANGULAR_LIMIT_SOFTNESS"] = 13] = "SLIDER_JOINT_ANGULAR_LIMIT_SOFTNESS";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_ANGULAR_LIMIT_RESTITUTION"] = 14] = "SLIDER_JOINT_ANGULAR_LIMIT_RESTITUTION";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_ANGULAR_LIMIT_DAMPING"] = 15] = "SLIDER_JOINT_ANGULAR_LIMIT_DAMPING";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_ANGULAR_MOTION_SOFTNESS"] = 16] = "SLIDER_JOINT_ANGULAR_MOTION_SOFTNESS";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_ANGULAR_MOTION_RESTITUTION"] = 17] = "SLIDER_JOINT_ANGULAR_MOTION_RESTITUTION";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_ANGULAR_MOTION_DAMPING"] = 18] = "SLIDER_JOINT_ANGULAR_MOTION_DAMPING";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_ANGULAR_ORTHOGONAL_SOFTNESS"] = 19] = "SLIDER_JOINT_ANGULAR_ORTHOGONAL_SOFTNESS";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_ANGULAR_ORTHOGONAL_RESTITUTION"] = 20] = "SLIDER_JOINT_ANGULAR_ORTHOGONAL_RESTITUTION";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_ANGULAR_ORTHOGONAL_DAMPING"] = 21] = "SLIDER_JOINT_ANGULAR_ORTHOGONAL_DAMPING";
        SliderJointParam[SliderJointParam["SLIDER_JOINT_MAX"] = 22] = "SLIDER_JOINT_MAX";
    })(SliderJointParam = PhysicsServer3D.SliderJointParam || (PhysicsServer3D.SliderJointParam = {}));
    let ConeTwistJointParam;
    (function (ConeTwistJointParam) {
        ConeTwistJointParam[ConeTwistJointParam["CONE_TWIST_JOINT_SWING_SPAN"] = 0] = "CONE_TWIST_JOINT_SWING_SPAN";
        ConeTwistJointParam[ConeTwistJointParam["CONE_TWIST_JOINT_TWIST_SPAN"] = 1] = "CONE_TWIST_JOINT_TWIST_SPAN";
        ConeTwistJointParam[ConeTwistJointParam["CONE_TWIST_JOINT_BIAS"] = 2] = "CONE_TWIST_JOINT_BIAS";
        ConeTwistJointParam[ConeTwistJointParam["CONE_TWIST_JOINT_SOFTNESS"] = 3] = "CONE_TWIST_JOINT_SOFTNESS";
        ConeTwistJointParam[ConeTwistJointParam["CONE_TWIST_JOINT_RELAXATION"] = 4] = "CONE_TWIST_JOINT_RELAXATION";
    })(ConeTwistJointParam = PhysicsServer3D.ConeTwistJointParam || (PhysicsServer3D.ConeTwistJointParam = {}));
    let G6DOFJointAxisParam;
    (function (G6DOFJointAxisParam) {
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_LINEAR_LOWER_LIMIT"] = 0] = "G6DOF_JOINT_LINEAR_LOWER_LIMIT";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_LINEAR_UPPER_LIMIT"] = 1] = "G6DOF_JOINT_LINEAR_UPPER_LIMIT";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_LINEAR_LIMIT_SOFTNESS"] = 2] = "G6DOF_JOINT_LINEAR_LIMIT_SOFTNESS";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_LINEAR_RESTITUTION"] = 3] = "G6DOF_JOINT_LINEAR_RESTITUTION";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_LINEAR_DAMPING"] = 4] = "G6DOF_JOINT_LINEAR_DAMPING";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_LINEAR_MOTOR_TARGET_VELOCITY"] = 5] = "G6DOF_JOINT_LINEAR_MOTOR_TARGET_VELOCITY";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_LINEAR_MOTOR_FORCE_LIMIT"] = 6] = "G6DOF_JOINT_LINEAR_MOTOR_FORCE_LIMIT";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_LINEAR_SPRING_STIFFNESS"] = 7] = "G6DOF_JOINT_LINEAR_SPRING_STIFFNESS";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_LINEAR_SPRING_DAMPING"] = 8] = "G6DOF_JOINT_LINEAR_SPRING_DAMPING";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_LINEAR_SPRING_EQUILIBRIUM_POINT"] = 9] = "G6DOF_JOINT_LINEAR_SPRING_EQUILIBRIUM_POINT";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_ANGULAR_LOWER_LIMIT"] = 10] = "G6DOF_JOINT_ANGULAR_LOWER_LIMIT";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_ANGULAR_UPPER_LIMIT"] = 11] = "G6DOF_JOINT_ANGULAR_UPPER_LIMIT";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_ANGULAR_LIMIT_SOFTNESS"] = 12] = "G6DOF_JOINT_ANGULAR_LIMIT_SOFTNESS";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_ANGULAR_DAMPING"] = 13] = "G6DOF_JOINT_ANGULAR_DAMPING";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_ANGULAR_RESTITUTION"] = 14] = "G6DOF_JOINT_ANGULAR_RESTITUTION";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_ANGULAR_FORCE_LIMIT"] = 15] = "G6DOF_JOINT_ANGULAR_FORCE_LIMIT";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_ANGULAR_ERP"] = 16] = "G6DOF_JOINT_ANGULAR_ERP";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_ANGULAR_MOTOR_TARGET_VELOCITY"] = 17] = "G6DOF_JOINT_ANGULAR_MOTOR_TARGET_VELOCITY";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_ANGULAR_MOTOR_FORCE_LIMIT"] = 18] = "G6DOF_JOINT_ANGULAR_MOTOR_FORCE_LIMIT";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_ANGULAR_SPRING_STIFFNESS"] = 19] = "G6DOF_JOINT_ANGULAR_SPRING_STIFFNESS";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_ANGULAR_SPRING_DAMPING"] = 20] = "G6DOF_JOINT_ANGULAR_SPRING_DAMPING";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_ANGULAR_SPRING_EQUILIBRIUM_POINT"] = 21] = "G6DOF_JOINT_ANGULAR_SPRING_EQUILIBRIUM_POINT";
        G6DOFJointAxisParam[G6DOFJointAxisParam["G6DOF_JOINT_MAX"] = 22] = "G6DOF_JOINT_MAX";
    })(G6DOFJointAxisParam = PhysicsServer3D.G6DOFJointAxisParam || (PhysicsServer3D.G6DOFJointAxisParam = {}));
    let G6DOFJointAxisFlag;
    (function (G6DOFJointAxisFlag) {
        G6DOFJointAxisFlag[G6DOFJointAxisFlag["G6DOF_JOINT_FLAG_ENABLE_LINEAR_LIMIT"] = 0] = "G6DOF_JOINT_FLAG_ENABLE_LINEAR_LIMIT";
        G6DOFJointAxisFlag[G6DOFJointAxisFlag["G6DOF_JOINT_FLAG_ENABLE_ANGULAR_LIMIT"] = 1] = "G6DOF_JOINT_FLAG_ENABLE_ANGULAR_LIMIT";
        G6DOFJointAxisFlag[G6DOFJointAxisFlag["G6DOF_JOINT_FLAG_ENABLE_ANGULAR_SPRING"] = 2] = "G6DOF_JOINT_FLAG_ENABLE_ANGULAR_SPRING";
        G6DOFJointAxisFlag[G6DOFJointAxisFlag["G6DOF_JOINT_FLAG_ENABLE_LINEAR_SPRING"] = 3] = "G6DOF_JOINT_FLAG_ENABLE_LINEAR_SPRING";
        G6DOFJointAxisFlag[G6DOFJointAxisFlag["G6DOF_JOINT_FLAG_ENABLE_MOTOR"] = 4] = "G6DOF_JOINT_FLAG_ENABLE_MOTOR";
        G6DOFJointAxisFlag[G6DOFJointAxisFlag["G6DOF_JOINT_FLAG_ENABLE_LINEAR_MOTOR"] = 5] = "G6DOF_JOINT_FLAG_ENABLE_LINEAR_MOTOR";
        G6DOFJointAxisFlag[G6DOFJointAxisFlag["G6DOF_JOINT_FLAG_MAX"] = 6] = "G6DOF_JOINT_FLAG_MAX";
    })(G6DOFJointAxisFlag = PhysicsServer3D.G6DOFJointAxisFlag || (PhysicsServer3D.G6DOFJointAxisFlag = {}));
    let ShapeType;
    (function (ShapeType) {
        ShapeType[ShapeType["SHAPE_WORLD_BOUNDARY"] = 0] = "SHAPE_WORLD_BOUNDARY";
        ShapeType[ShapeType["SHAPE_SEPARATION_RAY"] = 1] = "SHAPE_SEPARATION_RAY";
        ShapeType[ShapeType["SHAPE_SPHERE"] = 2] = "SHAPE_SPHERE";
        ShapeType[ShapeType["SHAPE_BOX"] = 3] = "SHAPE_BOX";
        ShapeType[ShapeType["SHAPE_CAPSULE"] = 4] = "SHAPE_CAPSULE";
        ShapeType[ShapeType["SHAPE_CYLINDER"] = 5] = "SHAPE_CYLINDER";
        ShapeType[ShapeType["SHAPE_CONVEX_POLYGON"] = 6] = "SHAPE_CONVEX_POLYGON";
        ShapeType[ShapeType["SHAPE_CONCAVE_POLYGON"] = 7] = "SHAPE_CONCAVE_POLYGON";
        ShapeType[ShapeType["SHAPE_HEIGHTMAP"] = 8] = "SHAPE_HEIGHTMAP";
        ShapeType[ShapeType["SHAPE_SOFT_BODY"] = 9] = "SHAPE_SOFT_BODY";
        ShapeType[ShapeType["SHAPE_CUSTOM"] = 10] = "SHAPE_CUSTOM";
    })(ShapeType = PhysicsServer3D.ShapeType || (PhysicsServer3D.ShapeType = {}));
    let AreaParameter;
    (function (AreaParameter) {
        AreaParameter[AreaParameter["AREA_PARAM_GRAVITY_OVERRIDE_MODE"] = 0] = "AREA_PARAM_GRAVITY_OVERRIDE_MODE";
        AreaParameter[AreaParameter["AREA_PARAM_GRAVITY"] = 1] = "AREA_PARAM_GRAVITY";
        AreaParameter[AreaParameter["AREA_PARAM_GRAVITY_VECTOR"] = 2] = "AREA_PARAM_GRAVITY_VECTOR";
        AreaParameter[AreaParameter["AREA_PARAM_GRAVITY_IS_POINT"] = 3] = "AREA_PARAM_GRAVITY_IS_POINT";
        AreaParameter[AreaParameter["AREA_PARAM_GRAVITY_POINT_UNIT_DISTANCE"] = 4] = "AREA_PARAM_GRAVITY_POINT_UNIT_DISTANCE";
        AreaParameter[AreaParameter["AREA_PARAM_LINEAR_DAMP_OVERRIDE_MODE"] = 5] = "AREA_PARAM_LINEAR_DAMP_OVERRIDE_MODE";
        AreaParameter[AreaParameter["AREA_PARAM_LINEAR_DAMP"] = 6] = "AREA_PARAM_LINEAR_DAMP";
        AreaParameter[AreaParameter["AREA_PARAM_ANGULAR_DAMP_OVERRIDE_MODE"] = 7] = "AREA_PARAM_ANGULAR_DAMP_OVERRIDE_MODE";
        AreaParameter[AreaParameter["AREA_PARAM_ANGULAR_DAMP"] = 8] = "AREA_PARAM_ANGULAR_DAMP";
        AreaParameter[AreaParameter["AREA_PARAM_PRIORITY"] = 9] = "AREA_PARAM_PRIORITY";
        AreaParameter[AreaParameter["AREA_PARAM_WIND_FORCE_MAGNITUDE"] = 10] = "AREA_PARAM_WIND_FORCE_MAGNITUDE";
        AreaParameter[AreaParameter["AREA_PARAM_WIND_SOURCE"] = 11] = "AREA_PARAM_WIND_SOURCE";
        AreaParameter[AreaParameter["AREA_PARAM_WIND_DIRECTION"] = 12] = "AREA_PARAM_WIND_DIRECTION";
        AreaParameter[AreaParameter["AREA_PARAM_WIND_ATTENUATION_FACTOR"] = 13] = "AREA_PARAM_WIND_ATTENUATION_FACTOR";
    })(AreaParameter = PhysicsServer3D.AreaParameter || (PhysicsServer3D.AreaParameter = {}));
    let AreaSpaceOverrideMode;
    (function (AreaSpaceOverrideMode) {
        AreaSpaceOverrideMode[AreaSpaceOverrideMode["AREA_SPACE_OVERRIDE_DISABLED"] = 0] = "AREA_SPACE_OVERRIDE_DISABLED";
        AreaSpaceOverrideMode[AreaSpaceOverrideMode["AREA_SPACE_OVERRIDE_COMBINE"] = 1] = "AREA_SPACE_OVERRIDE_COMBINE";
        AreaSpaceOverrideMode[AreaSpaceOverrideMode["AREA_SPACE_OVERRIDE_COMBINE_REPLACE"] = 2] = "AREA_SPACE_OVERRIDE_COMBINE_REPLACE";
        AreaSpaceOverrideMode[AreaSpaceOverrideMode["AREA_SPACE_OVERRIDE_REPLACE"] = 3] = "AREA_SPACE_OVERRIDE_REPLACE";
        AreaSpaceOverrideMode[AreaSpaceOverrideMode["AREA_SPACE_OVERRIDE_REPLACE_COMBINE"] = 4] = "AREA_SPACE_OVERRIDE_REPLACE_COMBINE";
    })(AreaSpaceOverrideMode = PhysicsServer3D.AreaSpaceOverrideMode || (PhysicsServer3D.AreaSpaceOverrideMode = {}));
    let BodyMode;
    (function (BodyMode) {
        BodyMode[BodyMode["BODY_MODE_STATIC"] = 0] = "BODY_MODE_STATIC";
        BodyMode[BodyMode["BODY_MODE_KINEMATIC"] = 1] = "BODY_MODE_KINEMATIC";
        BodyMode[BodyMode["BODY_MODE_RIGID"] = 2] = "BODY_MODE_RIGID";
        BodyMode[BodyMode["BODY_MODE_RIGID_LINEAR"] = 3] = "BODY_MODE_RIGID_LINEAR";
    })(BodyMode = PhysicsServer3D.BodyMode || (PhysicsServer3D.BodyMode = {}));
    let BodyParameter;
    (function (BodyParameter) {
        BodyParameter[BodyParameter["BODY_PARAM_BOUNCE"] = 0] = "BODY_PARAM_BOUNCE";
        BodyParameter[BodyParameter["BODY_PARAM_FRICTION"] = 1] = "BODY_PARAM_FRICTION";
        BodyParameter[BodyParameter["BODY_PARAM_MASS"] = 2] = "BODY_PARAM_MASS";
        BodyParameter[BodyParameter["BODY_PARAM_INERTIA"] = 3] = "BODY_PARAM_INERTIA";
        BodyParameter[BodyParameter["BODY_PARAM_CENTER_OF_MASS"] = 4] = "BODY_PARAM_CENTER_OF_MASS";
        BodyParameter[BodyParameter["BODY_PARAM_GRAVITY_SCALE"] = 5] = "BODY_PARAM_GRAVITY_SCALE";
        BodyParameter[BodyParameter["BODY_PARAM_LINEAR_DAMP_MODE"] = 6] = "BODY_PARAM_LINEAR_DAMP_MODE";
        BodyParameter[BodyParameter["BODY_PARAM_ANGULAR_DAMP_MODE"] = 7] = "BODY_PARAM_ANGULAR_DAMP_MODE";
        BodyParameter[BodyParameter["BODY_PARAM_LINEAR_DAMP"] = 8] = "BODY_PARAM_LINEAR_DAMP";
        BodyParameter[BodyParameter["BODY_PARAM_ANGULAR_DAMP"] = 9] = "BODY_PARAM_ANGULAR_DAMP";
        BodyParameter[BodyParameter["BODY_PARAM_MAX"] = 10] = "BODY_PARAM_MAX";
    })(BodyParameter = PhysicsServer3D.BodyParameter || (PhysicsServer3D.BodyParameter = {}));
    let BodyDampMode;
    (function (BodyDampMode) {
        BodyDampMode[BodyDampMode["BODY_DAMP_MODE_COMBINE"] = 0] = "BODY_DAMP_MODE_COMBINE";
        BodyDampMode[BodyDampMode["BODY_DAMP_MODE_REPLACE"] = 1] = "BODY_DAMP_MODE_REPLACE";
    })(BodyDampMode = PhysicsServer3D.BodyDampMode || (PhysicsServer3D.BodyDampMode = {}));
    let BodyState;
    (function (BodyState) {
        BodyState[BodyState["BODY_STATE_TRANSFORM"] = 0] = "BODY_STATE_TRANSFORM";
        BodyState[BodyState["BODY_STATE_LINEAR_VELOCITY"] = 1] = "BODY_STATE_LINEAR_VELOCITY";
        BodyState[BodyState["BODY_STATE_ANGULAR_VELOCITY"] = 2] = "BODY_STATE_ANGULAR_VELOCITY";
        BodyState[BodyState["BODY_STATE_SLEEPING"] = 3] = "BODY_STATE_SLEEPING";
        BodyState[BodyState["BODY_STATE_CAN_SLEEP"] = 4] = "BODY_STATE_CAN_SLEEP";
    })(BodyState = PhysicsServer3D.BodyState || (PhysicsServer3D.BodyState = {}));
    let AreaBodyStatus;
    (function (AreaBodyStatus) {
        AreaBodyStatus[AreaBodyStatus["AREA_BODY_ADDED"] = 0] = "AREA_BODY_ADDED";
        AreaBodyStatus[AreaBodyStatus["AREA_BODY_REMOVED"] = 1] = "AREA_BODY_REMOVED";
    })(AreaBodyStatus = PhysicsServer3D.AreaBodyStatus || (PhysicsServer3D.AreaBodyStatus = {}));
    let ProcessInfo;
    (function (ProcessInfo) {
        ProcessInfo[ProcessInfo["INFO_ACTIVE_OBJECTS"] = 0] = "INFO_ACTIVE_OBJECTS";
        ProcessInfo[ProcessInfo["INFO_COLLISION_PAIRS"] = 1] = "INFO_COLLISION_PAIRS";
        ProcessInfo[ProcessInfo["INFO_ISLAND_COUNT"] = 2] = "INFO_ISLAND_COUNT";
    })(ProcessInfo = PhysicsServer3D.ProcessInfo || (PhysicsServer3D.ProcessInfo = {}));
    let SpaceParameter;
    (function (SpaceParameter) {
        SpaceParameter[SpaceParameter["SPACE_PARAM_CONTACT_RECYCLE_RADIUS"] = 0] = "SPACE_PARAM_CONTACT_RECYCLE_RADIUS";
        SpaceParameter[SpaceParameter["SPACE_PARAM_CONTACT_MAX_SEPARATION"] = 1] = "SPACE_PARAM_CONTACT_MAX_SEPARATION";
        SpaceParameter[SpaceParameter["SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION"] = 2] = "SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION";
        SpaceParameter[SpaceParameter["SPACE_PARAM_CONTACT_DEFAULT_BIAS"] = 3] = "SPACE_PARAM_CONTACT_DEFAULT_BIAS";
        SpaceParameter[SpaceParameter["SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD"] = 4] = "SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD";
        SpaceParameter[SpaceParameter["SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD"] = 5] = "SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD";
        SpaceParameter[SpaceParameter["SPACE_PARAM_BODY_TIME_TO_SLEEP"] = 6] = "SPACE_PARAM_BODY_TIME_TO_SLEEP";
        SpaceParameter[SpaceParameter["SPACE_PARAM_SOLVER_ITERATIONS"] = 7] = "SPACE_PARAM_SOLVER_ITERATIONS";
    })(SpaceParameter = PhysicsServer3D.SpaceParameter || (PhysicsServer3D.SpaceParameter = {}));
    let BodyAxis;
    (function (BodyAxis) {
        BodyAxis[BodyAxis["BODY_AXIS_LINEAR_X"] = 1] = "BODY_AXIS_LINEAR_X";
        BodyAxis[BodyAxis["BODY_AXIS_LINEAR_Y"] = 2] = "BODY_AXIS_LINEAR_Y";
        BodyAxis[BodyAxis["BODY_AXIS_LINEAR_Z"] = 4] = "BODY_AXIS_LINEAR_Z";
        BodyAxis[BodyAxis["BODY_AXIS_ANGULAR_X"] = 8] = "BODY_AXIS_ANGULAR_X";
        BodyAxis[BodyAxis["BODY_AXIS_ANGULAR_Y"] = 16] = "BODY_AXIS_ANGULAR_Y";
        BodyAxis[BodyAxis["BODY_AXIS_ANGULAR_Z"] = 32] = "BODY_AXIS_ANGULAR_Z";
    })(BodyAxis = PhysicsServer3D.BodyAxis || (PhysicsServer3D.BodyAxis = {}));
})(PhysicsServer3D || (PhysicsServer3D = {}));
export var TouchScreenButton;
(function (TouchScreenButton) {
    let VisibilityMode;
    (function (VisibilityMode) {
        VisibilityMode[VisibilityMode["VISIBILITY_ALWAYS"] = 0] = "VISIBILITY_ALWAYS";
        VisibilityMode[VisibilityMode["VISIBILITY_TOUCHSCREEN_ONLY"] = 1] = "VISIBILITY_TOUCHSCREEN_ONLY";
    })(VisibilityMode = TouchScreenButton.VisibilityMode || (TouchScreenButton.VisibilityMode = {}));
})(TouchScreenButton || (TouchScreenButton = {}));
export var CollisionObject3D;
(function (CollisionObject3D) {
    let DisableMode;
    (function (DisableMode) {
        DisableMode[DisableMode["DISABLE_MODE_REMOVE"] = 0] = "DISABLE_MODE_REMOVE";
        DisableMode[DisableMode["DISABLE_MODE_MAKE_STATIC"] = 1] = "DISABLE_MODE_MAKE_STATIC";
        DisableMode[DisableMode["DISABLE_MODE_KEEP_ACTIVE"] = 2] = "DISABLE_MODE_KEEP_ACTIVE";
    })(DisableMode = CollisionObject3D.DisableMode || (CollisionObject3D.DisableMode = {}));
})(CollisionObject3D || (CollisionObject3D = {}));
export var Window;
(function (Window) {
    Window.NOTIFICATION_VISIBILITY_CHANGED = 30;
    Window.NOTIFICATION_THEME_CHANGED = 32;
    let Mode;
    (function (Mode) {
        Mode[Mode["MODE_WINDOWED"] = 0] = "MODE_WINDOWED";
        Mode[Mode["MODE_MINIMIZED"] = 1] = "MODE_MINIMIZED";
        Mode[Mode["MODE_MAXIMIZED"] = 2] = "MODE_MAXIMIZED";
        Mode[Mode["MODE_FULLSCREEN"] = 3] = "MODE_FULLSCREEN";
        Mode[Mode["MODE_EXCLUSIVE_FULLSCREEN"] = 4] = "MODE_EXCLUSIVE_FULLSCREEN";
    })(Mode = Window.Mode || (Window.Mode = {}));
    let Flags;
    (function (Flags) {
        Flags[Flags["FLAG_RESIZE_DISABLED"] = 0] = "FLAG_RESIZE_DISABLED";
        Flags[Flags["FLAG_BORDERLESS"] = 1] = "FLAG_BORDERLESS";
        Flags[Flags["FLAG_ALWAYS_ON_TOP"] = 2] = "FLAG_ALWAYS_ON_TOP";
        Flags[Flags["FLAG_TRANSPARENT"] = 3] = "FLAG_TRANSPARENT";
        Flags[Flags["FLAG_NO_FOCUS"] = 4] = "FLAG_NO_FOCUS";
        Flags[Flags["FLAG_POPUP"] = 5] = "FLAG_POPUP";
        Flags[Flags["FLAG_EXTEND_TO_TITLE"] = 6] = "FLAG_EXTEND_TO_TITLE";
        Flags[Flags["FLAG_MOUSE_PASSTHROUGH"] = 7] = "FLAG_MOUSE_PASSTHROUGH";
        Flags[Flags["FLAG_SHARP_CORNERS"] = 8] = "FLAG_SHARP_CORNERS";
        Flags[Flags["FLAG_MAX"] = 9] = "FLAG_MAX";
    })(Flags = Window.Flags || (Window.Flags = {}));
    let ContentScaleMode;
    (function (ContentScaleMode) {
        ContentScaleMode[ContentScaleMode["CONTENT_SCALE_MODE_DISABLED"] = 0] = "CONTENT_SCALE_MODE_DISABLED";
        ContentScaleMode[ContentScaleMode["CONTENT_SCALE_MODE_CANVAS_ITEMS"] = 1] = "CONTENT_SCALE_MODE_CANVAS_ITEMS";
        ContentScaleMode[ContentScaleMode["CONTENT_SCALE_MODE_VIEWPORT"] = 2] = "CONTENT_SCALE_MODE_VIEWPORT";
    })(ContentScaleMode = Window.ContentScaleMode || (Window.ContentScaleMode = {}));
    let ContentScaleAspect;
    (function (ContentScaleAspect) {
        ContentScaleAspect[ContentScaleAspect["CONTENT_SCALE_ASPECT_IGNORE"] = 0] = "CONTENT_SCALE_ASPECT_IGNORE";
        ContentScaleAspect[ContentScaleAspect["CONTENT_SCALE_ASPECT_KEEP"] = 1] = "CONTENT_SCALE_ASPECT_KEEP";
        ContentScaleAspect[ContentScaleAspect["CONTENT_SCALE_ASPECT_KEEP_WIDTH"] = 2] = "CONTENT_SCALE_ASPECT_KEEP_WIDTH";
        ContentScaleAspect[ContentScaleAspect["CONTENT_SCALE_ASPECT_KEEP_HEIGHT"] = 3] = "CONTENT_SCALE_ASPECT_KEEP_HEIGHT";
        ContentScaleAspect[ContentScaleAspect["CONTENT_SCALE_ASPECT_EXPAND"] = 4] = "CONTENT_SCALE_ASPECT_EXPAND";
    })(ContentScaleAspect = Window.ContentScaleAspect || (Window.ContentScaleAspect = {}));
    let ContentScaleStretch;
    (function (ContentScaleStretch) {
        ContentScaleStretch[ContentScaleStretch["CONTENT_SCALE_STRETCH_FRACTIONAL"] = 0] = "CONTENT_SCALE_STRETCH_FRACTIONAL";
        ContentScaleStretch[ContentScaleStretch["CONTENT_SCALE_STRETCH_INTEGER"] = 1] = "CONTENT_SCALE_STRETCH_INTEGER";
    })(ContentScaleStretch = Window.ContentScaleStretch || (Window.ContentScaleStretch = {}));
    let LayoutDirection;
    (function (LayoutDirection) {
        LayoutDirection[LayoutDirection["LAYOUT_DIRECTION_INHERITED"] = 0] = "LAYOUT_DIRECTION_INHERITED";
        LayoutDirection[LayoutDirection["LAYOUT_DIRECTION_APPLICATION_LOCALE"] = 1] = "LAYOUT_DIRECTION_APPLICATION_LOCALE";
        LayoutDirection[LayoutDirection["LAYOUT_DIRECTION_LTR"] = 2] = "LAYOUT_DIRECTION_LTR";
        LayoutDirection[LayoutDirection["LAYOUT_DIRECTION_RTL"] = 3] = "LAYOUT_DIRECTION_RTL";
        LayoutDirection[LayoutDirection["LAYOUT_DIRECTION_SYSTEM_LOCALE"] = 4] = "LAYOUT_DIRECTION_SYSTEM_LOCALE";
        LayoutDirection[LayoutDirection["LAYOUT_DIRECTION_MAX"] = 5] = "LAYOUT_DIRECTION_MAX";
        LayoutDirection[LayoutDirection["LAYOUT_DIRECTION_LOCALE"] = 1] = "LAYOUT_DIRECTION_LOCALE";
    })(LayoutDirection = Window.LayoutDirection || (Window.LayoutDirection = {}));
    let WindowInitialPosition;
    (function (WindowInitialPosition) {
        WindowInitialPosition[WindowInitialPosition["WINDOW_INITIAL_POSITION_ABSOLUTE"] = 0] = "WINDOW_INITIAL_POSITION_ABSOLUTE";
        WindowInitialPosition[WindowInitialPosition["WINDOW_INITIAL_POSITION_CENTER_PRIMARY_SCREEN"] = 1] = "WINDOW_INITIAL_POSITION_CENTER_PRIMARY_SCREEN";
        WindowInitialPosition[WindowInitialPosition["WINDOW_INITIAL_POSITION_CENTER_MAIN_WINDOW_SCREEN"] = 2] = "WINDOW_INITIAL_POSITION_CENTER_MAIN_WINDOW_SCREEN";
        WindowInitialPosition[WindowInitialPosition["WINDOW_INITIAL_POSITION_CENTER_OTHER_SCREEN"] = 3] = "WINDOW_INITIAL_POSITION_CENTER_OTHER_SCREEN";
        WindowInitialPosition[WindowInitialPosition["WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_MOUSE_FOCUS"] = 4] = "WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_MOUSE_FOCUS";
        WindowInitialPosition[WindowInitialPosition["WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_KEYBOARD_FOCUS"] = 5] = "WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_KEYBOARD_FOCUS";
    })(WindowInitialPosition = Window.WindowInitialPosition || (Window.WindowInitialPosition = {}));
})(Window || (Window = {}));
export var CurveTexture;
(function (CurveTexture) {
    let TextureMode;
    (function (TextureMode) {
        TextureMode[TextureMode["TEXTURE_MODE_RGB"] = 0] = "TEXTURE_MODE_RGB";
        TextureMode[TextureMode["TEXTURE_MODE_RED"] = 1] = "TEXTURE_MODE_RED";
    })(TextureMode = CurveTexture.TextureMode || (CurveTexture.TextureMode = {}));
})(CurveTexture || (CurveTexture = {}));
export var Sky;
(function (Sky) {
    let RadianceSize;
    (function (RadianceSize) {
        RadianceSize[RadianceSize["RADIANCE_SIZE_32"] = 0] = "RADIANCE_SIZE_32";
        RadianceSize[RadianceSize["RADIANCE_SIZE_64"] = 1] = "RADIANCE_SIZE_64";
        RadianceSize[RadianceSize["RADIANCE_SIZE_128"] = 2] = "RADIANCE_SIZE_128";
        RadianceSize[RadianceSize["RADIANCE_SIZE_256"] = 3] = "RADIANCE_SIZE_256";
        RadianceSize[RadianceSize["RADIANCE_SIZE_512"] = 4] = "RADIANCE_SIZE_512";
        RadianceSize[RadianceSize["RADIANCE_SIZE_1024"] = 5] = "RADIANCE_SIZE_1024";
        RadianceSize[RadianceSize["RADIANCE_SIZE_2048"] = 6] = "RADIANCE_SIZE_2048";
        RadianceSize[RadianceSize["RADIANCE_SIZE_MAX"] = 7] = "RADIANCE_SIZE_MAX";
    })(RadianceSize = Sky.RadianceSize || (Sky.RadianceSize = {}));
    let ProcessMode;
    (function (ProcessMode) {
        ProcessMode[ProcessMode["PROCESS_MODE_AUTOMATIC"] = 0] = "PROCESS_MODE_AUTOMATIC";
        ProcessMode[ProcessMode["PROCESS_MODE_QUALITY"] = 1] = "PROCESS_MODE_QUALITY";
        ProcessMode[ProcessMode["PROCESS_MODE_INCREMENTAL"] = 2] = "PROCESS_MODE_INCREMENTAL";
        ProcessMode[ProcessMode["PROCESS_MODE_REALTIME"] = 3] = "PROCESS_MODE_REALTIME";
    })(ProcessMode = Sky.ProcessMode || (Sky.ProcessMode = {}));
})(Sky || (Sky = {}));
export var CollisionObject2D;
(function (CollisionObject2D) {
    let DisableMode;
    (function (DisableMode) {
        DisableMode[DisableMode["DISABLE_MODE_REMOVE"] = 0] = "DISABLE_MODE_REMOVE";
        DisableMode[DisableMode["DISABLE_MODE_MAKE_STATIC"] = 1] = "DISABLE_MODE_MAKE_STATIC";
        DisableMode[DisableMode["DISABLE_MODE_KEEP_ACTIVE"] = 2] = "DISABLE_MODE_KEEP_ACTIVE";
    })(DisableMode = CollisionObject2D.DisableMode || (CollisionObject2D.DisableMode = {}));
})(CollisionObject2D || (CollisionObject2D = {}));
export var FileDialog;
(function (FileDialog) {
    let FileMode;
    (function (FileMode) {
        FileMode[FileMode["FILE_MODE_OPEN_FILE"] = 0] = "FILE_MODE_OPEN_FILE";
        FileMode[FileMode["FILE_MODE_OPEN_FILES"] = 1] = "FILE_MODE_OPEN_FILES";
        FileMode[FileMode["FILE_MODE_OPEN_DIR"] = 2] = "FILE_MODE_OPEN_DIR";
        FileMode[FileMode["FILE_MODE_OPEN_ANY"] = 3] = "FILE_MODE_OPEN_ANY";
        FileMode[FileMode["FILE_MODE_SAVE_FILE"] = 4] = "FILE_MODE_SAVE_FILE";
    })(FileMode = FileDialog.FileMode || (FileDialog.FileMode = {}));
    let Access;
    (function (Access) {
        Access[Access["ACCESS_RESOURCES"] = 0] = "ACCESS_RESOURCES";
        Access[Access["ACCESS_USERDATA"] = 1] = "ACCESS_USERDATA";
        Access[Access["ACCESS_FILESYSTEM"] = 2] = "ACCESS_FILESYSTEM";
    })(Access = FileDialog.Access || (FileDialog.Access = {}));
})(FileDialog || (FileDialog = {}));
export var AnimationNodeOneShot;
(function (AnimationNodeOneShot) {
    let OneShotRequest;
    (function (OneShotRequest) {
        OneShotRequest[OneShotRequest["ONE_SHOT_REQUEST_NONE"] = 0] = "ONE_SHOT_REQUEST_NONE";
        OneShotRequest[OneShotRequest["ONE_SHOT_REQUEST_FIRE"] = 1] = "ONE_SHOT_REQUEST_FIRE";
        OneShotRequest[OneShotRequest["ONE_SHOT_REQUEST_ABORT"] = 2] = "ONE_SHOT_REQUEST_ABORT";
        OneShotRequest[OneShotRequest["ONE_SHOT_REQUEST_FADE_OUT"] = 3] = "ONE_SHOT_REQUEST_FADE_OUT";
    })(OneShotRequest = AnimationNodeOneShot.OneShotRequest || (AnimationNodeOneShot.OneShotRequest = {}));
    let MixMode;
    (function (MixMode) {
        MixMode[MixMode["MIX_MODE_BLEND"] = 0] = "MIX_MODE_BLEND";
        MixMode[MixMode["MIX_MODE_ADD"] = 1] = "MIX_MODE_ADD";
    })(MixMode = AnimationNodeOneShot.MixMode || (AnimationNodeOneShot.MixMode = {}));
})(AnimationNodeOneShot || (AnimationNodeOneShot = {}));
export var RigidBody3D;
(function (RigidBody3D) {
    let FreezeMode;
    (function (FreezeMode) {
        FreezeMode[FreezeMode["FREEZE_MODE_STATIC"] = 0] = "FREEZE_MODE_STATIC";
        FreezeMode[FreezeMode["FREEZE_MODE_KINEMATIC"] = 1] = "FREEZE_MODE_KINEMATIC";
    })(FreezeMode = RigidBody3D.FreezeMode || (RigidBody3D.FreezeMode = {}));
    let CenterOfMassMode;
    (function (CenterOfMassMode) {
        CenterOfMassMode[CenterOfMassMode["CENTER_OF_MASS_MODE_AUTO"] = 0] = "CENTER_OF_MASS_MODE_AUTO";
        CenterOfMassMode[CenterOfMassMode["CENTER_OF_MASS_MODE_CUSTOM"] = 1] = "CENTER_OF_MASS_MODE_CUSTOM";
    })(CenterOfMassMode = RigidBody3D.CenterOfMassMode || (RigidBody3D.CenterOfMassMode = {}));
    let DampMode;
    (function (DampMode) {
        DampMode[DampMode["DAMP_MODE_COMBINE"] = 0] = "DAMP_MODE_COMBINE";
        DampMode[DampMode["DAMP_MODE_REPLACE"] = 1] = "DAMP_MODE_REPLACE";
    })(DampMode = RigidBody3D.DampMode || (RigidBody3D.DampMode = {}));
})(RigidBody3D || (RigidBody3D = {}));
export var PhysicsServer2D;
(function (PhysicsServer2D) {
    let SpaceParameter;
    (function (SpaceParameter) {
        SpaceParameter[SpaceParameter["SPACE_PARAM_CONTACT_RECYCLE_RADIUS"] = 0] = "SPACE_PARAM_CONTACT_RECYCLE_RADIUS";
        SpaceParameter[SpaceParameter["SPACE_PARAM_CONTACT_MAX_SEPARATION"] = 1] = "SPACE_PARAM_CONTACT_MAX_SEPARATION";
        SpaceParameter[SpaceParameter["SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION"] = 2] = "SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION";
        SpaceParameter[SpaceParameter["SPACE_PARAM_CONTACT_DEFAULT_BIAS"] = 3] = "SPACE_PARAM_CONTACT_DEFAULT_BIAS";
        SpaceParameter[SpaceParameter["SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD"] = 4] = "SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD";
        SpaceParameter[SpaceParameter["SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD"] = 5] = "SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD";
        SpaceParameter[SpaceParameter["SPACE_PARAM_BODY_TIME_TO_SLEEP"] = 6] = "SPACE_PARAM_BODY_TIME_TO_SLEEP";
        SpaceParameter[SpaceParameter["SPACE_PARAM_CONSTRAINT_DEFAULT_BIAS"] = 7] = "SPACE_PARAM_CONSTRAINT_DEFAULT_BIAS";
        SpaceParameter[SpaceParameter["SPACE_PARAM_SOLVER_ITERATIONS"] = 8] = "SPACE_PARAM_SOLVER_ITERATIONS";
    })(SpaceParameter = PhysicsServer2D.SpaceParameter || (PhysicsServer2D.SpaceParameter = {}));
    let ShapeType;
    (function (ShapeType) {
        ShapeType[ShapeType["SHAPE_WORLD_BOUNDARY"] = 0] = "SHAPE_WORLD_BOUNDARY";
        ShapeType[ShapeType["SHAPE_SEPARATION_RAY"] = 1] = "SHAPE_SEPARATION_RAY";
        ShapeType[ShapeType["SHAPE_SEGMENT"] = 2] = "SHAPE_SEGMENT";
        ShapeType[ShapeType["SHAPE_CIRCLE"] = 3] = "SHAPE_CIRCLE";
        ShapeType[ShapeType["SHAPE_RECTANGLE"] = 4] = "SHAPE_RECTANGLE";
        ShapeType[ShapeType["SHAPE_CAPSULE"] = 5] = "SHAPE_CAPSULE";
        ShapeType[ShapeType["SHAPE_CONVEX_POLYGON"] = 6] = "SHAPE_CONVEX_POLYGON";
        ShapeType[ShapeType["SHAPE_CONCAVE_POLYGON"] = 7] = "SHAPE_CONCAVE_POLYGON";
        ShapeType[ShapeType["SHAPE_CUSTOM"] = 8] = "SHAPE_CUSTOM";
    })(ShapeType = PhysicsServer2D.ShapeType || (PhysicsServer2D.ShapeType = {}));
    let AreaParameter;
    (function (AreaParameter) {
        AreaParameter[AreaParameter["AREA_PARAM_GRAVITY_OVERRIDE_MODE"] = 0] = "AREA_PARAM_GRAVITY_OVERRIDE_MODE";
        AreaParameter[AreaParameter["AREA_PARAM_GRAVITY"] = 1] = "AREA_PARAM_GRAVITY";
        AreaParameter[AreaParameter["AREA_PARAM_GRAVITY_VECTOR"] = 2] = "AREA_PARAM_GRAVITY_VECTOR";
        AreaParameter[AreaParameter["AREA_PARAM_GRAVITY_IS_POINT"] = 3] = "AREA_PARAM_GRAVITY_IS_POINT";
        AreaParameter[AreaParameter["AREA_PARAM_GRAVITY_POINT_UNIT_DISTANCE"] = 4] = "AREA_PARAM_GRAVITY_POINT_UNIT_DISTANCE";
        AreaParameter[AreaParameter["AREA_PARAM_LINEAR_DAMP_OVERRIDE_MODE"] = 5] = "AREA_PARAM_LINEAR_DAMP_OVERRIDE_MODE";
        AreaParameter[AreaParameter["AREA_PARAM_LINEAR_DAMP"] = 6] = "AREA_PARAM_LINEAR_DAMP";
        AreaParameter[AreaParameter["AREA_PARAM_ANGULAR_DAMP_OVERRIDE_MODE"] = 7] = "AREA_PARAM_ANGULAR_DAMP_OVERRIDE_MODE";
        AreaParameter[AreaParameter["AREA_PARAM_ANGULAR_DAMP"] = 8] = "AREA_PARAM_ANGULAR_DAMP";
        AreaParameter[AreaParameter["AREA_PARAM_PRIORITY"] = 9] = "AREA_PARAM_PRIORITY";
    })(AreaParameter = PhysicsServer2D.AreaParameter || (PhysicsServer2D.AreaParameter = {}));
    let AreaSpaceOverrideMode;
    (function (AreaSpaceOverrideMode) {
        AreaSpaceOverrideMode[AreaSpaceOverrideMode["AREA_SPACE_OVERRIDE_DISABLED"] = 0] = "AREA_SPACE_OVERRIDE_DISABLED";
        AreaSpaceOverrideMode[AreaSpaceOverrideMode["AREA_SPACE_OVERRIDE_COMBINE"] = 1] = "AREA_SPACE_OVERRIDE_COMBINE";
        AreaSpaceOverrideMode[AreaSpaceOverrideMode["AREA_SPACE_OVERRIDE_COMBINE_REPLACE"] = 2] = "AREA_SPACE_OVERRIDE_COMBINE_REPLACE";
        AreaSpaceOverrideMode[AreaSpaceOverrideMode["AREA_SPACE_OVERRIDE_REPLACE"] = 3] = "AREA_SPACE_OVERRIDE_REPLACE";
        AreaSpaceOverrideMode[AreaSpaceOverrideMode["AREA_SPACE_OVERRIDE_REPLACE_COMBINE"] = 4] = "AREA_SPACE_OVERRIDE_REPLACE_COMBINE";
    })(AreaSpaceOverrideMode = PhysicsServer2D.AreaSpaceOverrideMode || (PhysicsServer2D.AreaSpaceOverrideMode = {}));
    let BodyMode;
    (function (BodyMode) {
        BodyMode[BodyMode["BODY_MODE_STATIC"] = 0] = "BODY_MODE_STATIC";
        BodyMode[BodyMode["BODY_MODE_KINEMATIC"] = 1] = "BODY_MODE_KINEMATIC";
        BodyMode[BodyMode["BODY_MODE_RIGID"] = 2] = "BODY_MODE_RIGID";
        BodyMode[BodyMode["BODY_MODE_RIGID_LINEAR"] = 3] = "BODY_MODE_RIGID_LINEAR";
    })(BodyMode = PhysicsServer2D.BodyMode || (PhysicsServer2D.BodyMode = {}));
    let BodyParameter;
    (function (BodyParameter) {
        BodyParameter[BodyParameter["BODY_PARAM_BOUNCE"] = 0] = "BODY_PARAM_BOUNCE";
        BodyParameter[BodyParameter["BODY_PARAM_FRICTION"] = 1] = "BODY_PARAM_FRICTION";
        BodyParameter[BodyParameter["BODY_PARAM_MASS"] = 2] = "BODY_PARAM_MASS";
        BodyParameter[BodyParameter["BODY_PARAM_INERTIA"] = 3] = "BODY_PARAM_INERTIA";
        BodyParameter[BodyParameter["BODY_PARAM_CENTER_OF_MASS"] = 4] = "BODY_PARAM_CENTER_OF_MASS";
        BodyParameter[BodyParameter["BODY_PARAM_GRAVITY_SCALE"] = 5] = "BODY_PARAM_GRAVITY_SCALE";
        BodyParameter[BodyParameter["BODY_PARAM_LINEAR_DAMP_MODE"] = 6] = "BODY_PARAM_LINEAR_DAMP_MODE";
        BodyParameter[BodyParameter["BODY_PARAM_ANGULAR_DAMP_MODE"] = 7] = "BODY_PARAM_ANGULAR_DAMP_MODE";
        BodyParameter[BodyParameter["BODY_PARAM_LINEAR_DAMP"] = 8] = "BODY_PARAM_LINEAR_DAMP";
        BodyParameter[BodyParameter["BODY_PARAM_ANGULAR_DAMP"] = 9] = "BODY_PARAM_ANGULAR_DAMP";
        BodyParameter[BodyParameter["BODY_PARAM_MAX"] = 10] = "BODY_PARAM_MAX";
    })(BodyParameter = PhysicsServer2D.BodyParameter || (PhysicsServer2D.BodyParameter = {}));
    let BodyDampMode;
    (function (BodyDampMode) {
        BodyDampMode[BodyDampMode["BODY_DAMP_MODE_COMBINE"] = 0] = "BODY_DAMP_MODE_COMBINE";
        BodyDampMode[BodyDampMode["BODY_DAMP_MODE_REPLACE"] = 1] = "BODY_DAMP_MODE_REPLACE";
    })(BodyDampMode = PhysicsServer2D.BodyDampMode || (PhysicsServer2D.BodyDampMode = {}));
    let BodyState;
    (function (BodyState) {
        BodyState[BodyState["BODY_STATE_TRANSFORM"] = 0] = "BODY_STATE_TRANSFORM";
        BodyState[BodyState["BODY_STATE_LINEAR_VELOCITY"] = 1] = "BODY_STATE_LINEAR_VELOCITY";
        BodyState[BodyState["BODY_STATE_ANGULAR_VELOCITY"] = 2] = "BODY_STATE_ANGULAR_VELOCITY";
        BodyState[BodyState["BODY_STATE_SLEEPING"] = 3] = "BODY_STATE_SLEEPING";
        BodyState[BodyState["BODY_STATE_CAN_SLEEP"] = 4] = "BODY_STATE_CAN_SLEEP";
    })(BodyState = PhysicsServer2D.BodyState || (PhysicsServer2D.BodyState = {}));
    let JointType;
    (function (JointType) {
        JointType[JointType["JOINT_TYPE_PIN"] = 0] = "JOINT_TYPE_PIN";
        JointType[JointType["JOINT_TYPE_GROOVE"] = 1] = "JOINT_TYPE_GROOVE";
        JointType[JointType["JOINT_TYPE_DAMPED_SPRING"] = 2] = "JOINT_TYPE_DAMPED_SPRING";
        JointType[JointType["JOINT_TYPE_MAX"] = 3] = "JOINT_TYPE_MAX";
    })(JointType = PhysicsServer2D.JointType || (PhysicsServer2D.JointType = {}));
    let JointParam;
    (function (JointParam) {
        JointParam[JointParam["JOINT_PARAM_BIAS"] = 0] = "JOINT_PARAM_BIAS";
        JointParam[JointParam["JOINT_PARAM_MAX_BIAS"] = 1] = "JOINT_PARAM_MAX_BIAS";
        JointParam[JointParam["JOINT_PARAM_MAX_FORCE"] = 2] = "JOINT_PARAM_MAX_FORCE";
    })(JointParam = PhysicsServer2D.JointParam || (PhysicsServer2D.JointParam = {}));
    let PinJointParam;
    (function (PinJointParam) {
        PinJointParam[PinJointParam["PIN_JOINT_SOFTNESS"] = 0] = "PIN_JOINT_SOFTNESS";
        PinJointParam[PinJointParam["PIN_JOINT_LIMIT_UPPER"] = 1] = "PIN_JOINT_LIMIT_UPPER";
        PinJointParam[PinJointParam["PIN_JOINT_LIMIT_LOWER"] = 2] = "PIN_JOINT_LIMIT_LOWER";
        PinJointParam[PinJointParam["PIN_JOINT_MOTOR_TARGET_VELOCITY"] = 3] = "PIN_JOINT_MOTOR_TARGET_VELOCITY";
    })(PinJointParam = PhysicsServer2D.PinJointParam || (PhysicsServer2D.PinJointParam = {}));
    let PinJointFlag;
    (function (PinJointFlag) {
        PinJointFlag[PinJointFlag["PIN_JOINT_FLAG_ANGULAR_LIMIT_ENABLED"] = 0] = "PIN_JOINT_FLAG_ANGULAR_LIMIT_ENABLED";
        PinJointFlag[PinJointFlag["PIN_JOINT_FLAG_MOTOR_ENABLED"] = 1] = "PIN_JOINT_FLAG_MOTOR_ENABLED";
    })(PinJointFlag = PhysicsServer2D.PinJointFlag || (PhysicsServer2D.PinJointFlag = {}));
    let DampedSpringParam;
    (function (DampedSpringParam) {
        DampedSpringParam[DampedSpringParam["DAMPED_SPRING_REST_LENGTH"] = 0] = "DAMPED_SPRING_REST_LENGTH";
        DampedSpringParam[DampedSpringParam["DAMPED_SPRING_STIFFNESS"] = 1] = "DAMPED_SPRING_STIFFNESS";
        DampedSpringParam[DampedSpringParam["DAMPED_SPRING_DAMPING"] = 2] = "DAMPED_SPRING_DAMPING";
    })(DampedSpringParam = PhysicsServer2D.DampedSpringParam || (PhysicsServer2D.DampedSpringParam = {}));
    let CCDMode;
    (function (CCDMode) {
        CCDMode[CCDMode["CCD_MODE_DISABLED"] = 0] = "CCD_MODE_DISABLED";
        CCDMode[CCDMode["CCD_MODE_CAST_RAY"] = 1] = "CCD_MODE_CAST_RAY";
        CCDMode[CCDMode["CCD_MODE_CAST_SHAPE"] = 2] = "CCD_MODE_CAST_SHAPE";
    })(CCDMode = PhysicsServer2D.CCDMode || (PhysicsServer2D.CCDMode = {}));
    let AreaBodyStatus;
    (function (AreaBodyStatus) {
        AreaBodyStatus[AreaBodyStatus["AREA_BODY_ADDED"] = 0] = "AREA_BODY_ADDED";
        AreaBodyStatus[AreaBodyStatus["AREA_BODY_REMOVED"] = 1] = "AREA_BODY_REMOVED";
    })(AreaBodyStatus = PhysicsServer2D.AreaBodyStatus || (PhysicsServer2D.AreaBodyStatus = {}));
    let ProcessInfo;
    (function (ProcessInfo) {
        ProcessInfo[ProcessInfo["INFO_ACTIVE_OBJECTS"] = 0] = "INFO_ACTIVE_OBJECTS";
        ProcessInfo[ProcessInfo["INFO_COLLISION_PAIRS"] = 1] = "INFO_COLLISION_PAIRS";
        ProcessInfo[ProcessInfo["INFO_ISLAND_COUNT"] = 2] = "INFO_ISLAND_COUNT";
    })(ProcessInfo = PhysicsServer2D.ProcessInfo || (PhysicsServer2D.ProcessInfo = {}));
})(PhysicsServer2D || (PhysicsServer2D = {}));
export var Shader;
(function (Shader) {
    let Mode;
    (function (Mode) {
        Mode[Mode["MODE_SPATIAL"] = 0] = "MODE_SPATIAL";
        Mode[Mode["MODE_CANVAS_ITEM"] = 1] = "MODE_CANVAS_ITEM";
        Mode[Mode["MODE_PARTICLES"] = 2] = "MODE_PARTICLES";
        Mode[Mode["MODE_SKY"] = 3] = "MODE_SKY";
        Mode[Mode["MODE_FOG"] = 4] = "MODE_FOG";
    })(Mode = Shader.Mode || (Shader.Mode = {}));
})(Shader || (Shader = {}));
export var XRHandModifier3D;
(function (XRHandModifier3D) {
    let BoneUpdate;
    (function (BoneUpdate) {
        BoneUpdate[BoneUpdate["BONE_UPDATE_FULL"] = 0] = "BONE_UPDATE_FULL";
        BoneUpdate[BoneUpdate["BONE_UPDATE_ROTATION_ONLY"] = 1] = "BONE_UPDATE_ROTATION_ONLY";
        BoneUpdate[BoneUpdate["BONE_UPDATE_MAX"] = 2] = "BONE_UPDATE_MAX";
    })(BoneUpdate = XRHandModifier3D.BoneUpdate || (XRHandModifier3D.BoneUpdate = {}));
})(XRHandModifier3D || (XRHandModifier3D = {}));
export var EditorUndoRedoManager;
(function (EditorUndoRedoManager) {
    let SpecialHistory;
    (function (SpecialHistory) {
        SpecialHistory[SpecialHistory["GLOBAL_HISTORY"] = 0] = "GLOBAL_HISTORY";
        SpecialHistory[SpecialHistory["REMOTE_HISTORY"] = -9] = "REMOTE_HISTORY";
        SpecialHistory[SpecialHistory["INVALID_HISTORY"] = -99] = "INVALID_HISTORY";
    })(SpecialHistory = EditorUndoRedoManager.SpecialHistory || (EditorUndoRedoManager.SpecialHistory = {}));
})(EditorUndoRedoManager || (EditorUndoRedoManager = {}));
export var AnimatedTexture;
(function (AnimatedTexture) {
    AnimatedTexture.MAX_FRAMES = 256;
})(AnimatedTexture || (AnimatedTexture = {}));
export var AnimationNodeStateMachineTransition;
(function (AnimationNodeStateMachineTransition) {
    let SwitchMode;
    (function (SwitchMode) {
        SwitchMode[SwitchMode["SWITCH_MODE_IMMEDIATE"] = 0] = "SWITCH_MODE_IMMEDIATE";
        SwitchMode[SwitchMode["SWITCH_MODE_SYNC"] = 1] = "SWITCH_MODE_SYNC";
        SwitchMode[SwitchMode["SWITCH_MODE_AT_END"] = 2] = "SWITCH_MODE_AT_END";
    })(SwitchMode = AnimationNodeStateMachineTransition.SwitchMode || (AnimationNodeStateMachineTransition.SwitchMode = {}));
    let AdvanceMode;
    (function (AdvanceMode) {
        AdvanceMode[AdvanceMode["ADVANCE_MODE_DISABLED"] = 0] = "ADVANCE_MODE_DISABLED";
        AdvanceMode[AdvanceMode["ADVANCE_MODE_ENABLED"] = 1] = "ADVANCE_MODE_ENABLED";
        AdvanceMode[AdvanceMode["ADVANCE_MODE_AUTO"] = 2] = "ADVANCE_MODE_AUTO";
    })(AdvanceMode = AnimationNodeStateMachineTransition.AdvanceMode || (AnimationNodeStateMachineTransition.AdvanceMode = {}));
})(AnimationNodeStateMachineTransition || (AnimationNodeStateMachineTransition = {}));
export var Tree;
(function (Tree) {
    let SelectMode;
    (function (SelectMode) {
        SelectMode[SelectMode["SELECT_SINGLE"] = 0] = "SELECT_SINGLE";
        SelectMode[SelectMode["SELECT_ROW"] = 1] = "SELECT_ROW";
        SelectMode[SelectMode["SELECT_MULTI"] = 2] = "SELECT_MULTI";
    })(SelectMode = Tree.SelectMode || (Tree.SelectMode = {}));
    let DropModeFlags;
    (function (DropModeFlags) {
        DropModeFlags[DropModeFlags["DROP_MODE_DISABLED"] = 0] = "DROP_MODE_DISABLED";
        DropModeFlags[DropModeFlags["DROP_MODE_ON_ITEM"] = 1] = "DROP_MODE_ON_ITEM";
        DropModeFlags[DropModeFlags["DROP_MODE_INBETWEEN"] = 2] = "DROP_MODE_INBETWEEN";
    })(DropModeFlags = Tree.DropModeFlags || (Tree.DropModeFlags = {}));
})(Tree || (Tree = {}));
export var RDFramebufferPass;
(function (RDFramebufferPass) {
    RDFramebufferPass.ATTACHMENT_UNUSED = -1;
})(RDFramebufferPass || (RDFramebufferPass = {}));
export var AudioStreamWAV;
(function (AudioStreamWAV) {
    let Format;
    (function (Format) {
        Format[Format["FORMAT_8_BITS"] = 0] = "FORMAT_8_BITS";
        Format[Format["FORMAT_16_BITS"] = 1] = "FORMAT_16_BITS";
        Format[Format["FORMAT_IMA_ADPCM"] = 2] = "FORMAT_IMA_ADPCM";
        Format[Format["FORMAT_QOA"] = 3] = "FORMAT_QOA";
    })(Format = AudioStreamWAV.Format || (AudioStreamWAV.Format = {}));
    let LoopMode;
    (function (LoopMode) {
        LoopMode[LoopMode["LOOP_DISABLED"] = 0] = "LOOP_DISABLED";
        LoopMode[LoopMode["LOOP_FORWARD"] = 1] = "LOOP_FORWARD";
        LoopMode[LoopMode["LOOP_PINGPONG"] = 2] = "LOOP_PINGPONG";
        LoopMode[LoopMode["LOOP_BACKWARD"] = 3] = "LOOP_BACKWARD";
    })(LoopMode = AudioStreamWAV.LoopMode || (AudioStreamWAV.LoopMode = {}));
})(AudioStreamWAV || (AudioStreamWAV = {}));
export var ResourceImporter;
(function (ResourceImporter) {
    let ImportOrder;
    (function (ImportOrder) {
        ImportOrder[ImportOrder["IMPORT_ORDER_DEFAULT"] = 0] = "IMPORT_ORDER_DEFAULT";
        ImportOrder[ImportOrder["IMPORT_ORDER_SCENE"] = 100] = "IMPORT_ORDER_SCENE";
    })(ImportOrder = ResourceImporter.ImportOrder || (ResourceImporter.ImportOrder = {}));
})(ResourceImporter || (ResourceImporter = {}));
export var OmniLight3D;
(function (OmniLight3D) {
    let ShadowMode;
    (function (ShadowMode) {
        ShadowMode[ShadowMode["SHADOW_DUAL_PARABOLOID"] = 0] = "SHADOW_DUAL_PARABOLOID";
        ShadowMode[ShadowMode["SHADOW_CUBE"] = 1] = "SHADOW_CUBE";
    })(ShadowMode = OmniLight3D.ShadowMode || (OmniLight3D.ShadowMode = {}));
})(OmniLight3D || (OmniLight3D = {}));
export var VisualShaderNodeTexture;
(function (VisualShaderNodeTexture) {
    let Source;
    (function (Source) {
        Source[Source["SOURCE_TEXTURE"] = 0] = "SOURCE_TEXTURE";
        Source[Source["SOURCE_SCREEN"] = 1] = "SOURCE_SCREEN";
        Source[Source["SOURCE_2D_TEXTURE"] = 2] = "SOURCE_2D_TEXTURE";
        Source[Source["SOURCE_2D_NORMAL"] = 3] = "SOURCE_2D_NORMAL";
        Source[Source["SOURCE_DEPTH"] = 4] = "SOURCE_DEPTH";
        Source[Source["SOURCE_PORT"] = 5] = "SOURCE_PORT";
        Source[Source["SOURCE_3D_NORMAL"] = 6] = "SOURCE_3D_NORMAL";
        Source[Source["SOURCE_ROUGHNESS"] = 7] = "SOURCE_ROUGHNESS";
        Source[Source["SOURCE_MAX"] = 8] = "SOURCE_MAX";
    })(Source = VisualShaderNodeTexture.Source || (VisualShaderNodeTexture.Source = {}));
    let TextureType;
    (function (TextureType) {
        TextureType[TextureType["TYPE_DATA"] = 0] = "TYPE_DATA";
        TextureType[TextureType["TYPE_COLOR"] = 1] = "TYPE_COLOR";
        TextureType[TextureType["TYPE_NORMAL_MAP"] = 2] = "TYPE_NORMAL_MAP";
        TextureType[TextureType["TYPE_MAX"] = 3] = "TYPE_MAX";
    })(TextureType = VisualShaderNodeTexture.TextureType || (VisualShaderNodeTexture.TextureType = {}));
})(VisualShaderNodeTexture || (VisualShaderNodeTexture = {}));
export var VisualShaderNodeParticleAccelerator;
(function (VisualShaderNodeParticleAccelerator) {
    let Mode;
    (function (Mode) {
        Mode[Mode["MODE_LINEAR"] = 0] = "MODE_LINEAR";
        Mode[Mode["MODE_RADIAL"] = 1] = "MODE_RADIAL";
        Mode[Mode["MODE_TANGENTIAL"] = 2] = "MODE_TANGENTIAL";
        Mode[Mode["MODE_MAX"] = 3] = "MODE_MAX";
    })(Mode = VisualShaderNodeParticleAccelerator.Mode || (VisualShaderNodeParticleAccelerator.Mode = {}));
})(VisualShaderNodeParticleAccelerator || (VisualShaderNodeParticleAccelerator = {}));
export var BackBufferCopy;
(function (BackBufferCopy) {
    let CopyMode;
    (function (CopyMode) {
        CopyMode[CopyMode["COPY_MODE_DISABLED"] = 0] = "COPY_MODE_DISABLED";
        CopyMode[CopyMode["COPY_MODE_RECT"] = 1] = "COPY_MODE_RECT";
        CopyMode[CopyMode["COPY_MODE_VIEWPORT"] = 2] = "COPY_MODE_VIEWPORT";
    })(CopyMode = BackBufferCopy.CopyMode || (BackBufferCopy.CopyMode = {}));
})(BackBufferCopy || (BackBufferCopy = {}));
export var EditorFeatureProfile;
(function (EditorFeatureProfile) {
    let Feature;
    (function (Feature) {
        Feature[Feature["FEATURE_3D"] = 0] = "FEATURE_3D";
        Feature[Feature["FEATURE_SCRIPT"] = 1] = "FEATURE_SCRIPT";
        Feature[Feature["FEATURE_ASSET_LIB"] = 2] = "FEATURE_ASSET_LIB";
        Feature[Feature["FEATURE_SCENE_TREE"] = 3] = "FEATURE_SCENE_TREE";
        Feature[Feature["FEATURE_NODE_DOCK"] = 4] = "FEATURE_NODE_DOCK";
        Feature[Feature["FEATURE_FILESYSTEM_DOCK"] = 5] = "FEATURE_FILESYSTEM_DOCK";
        Feature[Feature["FEATURE_IMPORT_DOCK"] = 6] = "FEATURE_IMPORT_DOCK";
        Feature[Feature["FEATURE_HISTORY_DOCK"] = 7] = "FEATURE_HISTORY_DOCK";
        Feature[Feature["FEATURE_GAME"] = 8] = "FEATURE_GAME";
        Feature[Feature["FEATURE_MAX"] = 9] = "FEATURE_MAX";
    })(Feature = EditorFeatureProfile.Feature || (EditorFeatureProfile.Feature = {}));
})(EditorFeatureProfile || (EditorFeatureProfile = {}));
export var TreeItem;
(function (TreeItem) {
    let TreeCellMode;
    (function (TreeCellMode) {
        TreeCellMode[TreeCellMode["CELL_MODE_STRING"] = 0] = "CELL_MODE_STRING";
        TreeCellMode[TreeCellMode["CELL_MODE_CHECK"] = 1] = "CELL_MODE_CHECK";
        TreeCellMode[TreeCellMode["CELL_MODE_RANGE"] = 2] = "CELL_MODE_RANGE";
        TreeCellMode[TreeCellMode["CELL_MODE_ICON"] = 3] = "CELL_MODE_ICON";
        TreeCellMode[TreeCellMode["CELL_MODE_CUSTOM"] = 4] = "CELL_MODE_CUSTOM";
    })(TreeCellMode = TreeItem.TreeCellMode || (TreeItem.TreeCellMode = {}));
})(TreeItem || (TreeItem = {}));
export var CodeEdit;
(function (CodeEdit) {
    let CodeCompletionKind;
    (function (CodeCompletionKind) {
        CodeCompletionKind[CodeCompletionKind["KIND_CLASS"] = 0] = "KIND_CLASS";
        CodeCompletionKind[CodeCompletionKind["KIND_FUNCTION"] = 1] = "KIND_FUNCTION";
        CodeCompletionKind[CodeCompletionKind["KIND_SIGNAL"] = 2] = "KIND_SIGNAL";
        CodeCompletionKind[CodeCompletionKind["KIND_VARIABLE"] = 3] = "KIND_VARIABLE";
        CodeCompletionKind[CodeCompletionKind["KIND_MEMBER"] = 4] = "KIND_MEMBER";
        CodeCompletionKind[CodeCompletionKind["KIND_ENUM"] = 5] = "KIND_ENUM";
        CodeCompletionKind[CodeCompletionKind["KIND_CONSTANT"] = 6] = "KIND_CONSTANT";
        CodeCompletionKind[CodeCompletionKind["KIND_NODE_PATH"] = 7] = "KIND_NODE_PATH";
        CodeCompletionKind[CodeCompletionKind["KIND_FILE_PATH"] = 8] = "KIND_FILE_PATH";
        CodeCompletionKind[CodeCompletionKind["KIND_PLAIN_TEXT"] = 9] = "KIND_PLAIN_TEXT";
    })(CodeCompletionKind = CodeEdit.CodeCompletionKind || (CodeEdit.CodeCompletionKind = {}));
    let CodeCompletionLocation;
    (function (CodeCompletionLocation) {
        CodeCompletionLocation[CodeCompletionLocation["LOCATION_LOCAL"] = 0] = "LOCATION_LOCAL";
        CodeCompletionLocation[CodeCompletionLocation["LOCATION_PARENT_MASK"] = 256] = "LOCATION_PARENT_MASK";
        CodeCompletionLocation[CodeCompletionLocation["LOCATION_OTHER_USER_CODE"] = 512] = "LOCATION_OTHER_USER_CODE";
        CodeCompletionLocation[CodeCompletionLocation["LOCATION_OTHER"] = 1024] = "LOCATION_OTHER";
    })(CodeCompletionLocation = CodeEdit.CodeCompletionLocation || (CodeEdit.CodeCompletionLocation = {}));
})(CodeEdit || (CodeEdit = {}));
export var NavigationPathQueryParameters3D;
(function (NavigationPathQueryParameters3D) {
    let PathfindingAlgorithm;
    (function (PathfindingAlgorithm) {
        PathfindingAlgorithm[PathfindingAlgorithm["PATHFINDING_ALGORITHM_ASTAR"] = 0] = "PATHFINDING_ALGORITHM_ASTAR";
    })(PathfindingAlgorithm = NavigationPathQueryParameters3D.PathfindingAlgorithm || (NavigationPathQueryParameters3D.PathfindingAlgorithm = {}));
    let PathPostProcessing;
    (function (PathPostProcessing) {
        PathPostProcessing[PathPostProcessing["PATH_POSTPROCESSING_CORRIDORFUNNEL"] = 0] = "PATH_POSTPROCESSING_CORRIDORFUNNEL";
        PathPostProcessing[PathPostProcessing["PATH_POSTPROCESSING_EDGECENTERED"] = 1] = "PATH_POSTPROCESSING_EDGECENTERED";
    })(PathPostProcessing = NavigationPathQueryParameters3D.PathPostProcessing || (NavigationPathQueryParameters3D.PathPostProcessing = {}));
    let PathMetadataFlags;
    (function (PathMetadataFlags) {
        PathMetadataFlags[PathMetadataFlags["PATH_METADATA_INCLUDE_NONE"] = 0] = "PATH_METADATA_INCLUDE_NONE";
        PathMetadataFlags[PathMetadataFlags["PATH_METADATA_INCLUDE_TYPES"] = 1] = "PATH_METADATA_INCLUDE_TYPES";
        PathMetadataFlags[PathMetadataFlags["PATH_METADATA_INCLUDE_RIDS"] = 2] = "PATH_METADATA_INCLUDE_RIDS";
        PathMetadataFlags[PathMetadataFlags["PATH_METADATA_INCLUDE_OWNERS"] = 4] = "PATH_METADATA_INCLUDE_OWNERS";
        PathMetadataFlags[PathMetadataFlags["PATH_METADATA_INCLUDE_ALL"] = 7] = "PATH_METADATA_INCLUDE_ALL";
    })(PathMetadataFlags = NavigationPathQueryParameters3D.PathMetadataFlags || (NavigationPathQueryParameters3D.PathMetadataFlags = {}));
})(NavigationPathQueryParameters3D || (NavigationPathQueryParameters3D = {}));
export var SkeletonProfile;
(function (SkeletonProfile) {
    let TailDirection;
    (function (TailDirection) {
        TailDirection[TailDirection["TAIL_DIRECTION_AVERAGE_CHILDREN"] = 0] = "TAIL_DIRECTION_AVERAGE_CHILDREN";
        TailDirection[TailDirection["TAIL_DIRECTION_SPECIFIC_CHILD"] = 1] = "TAIL_DIRECTION_SPECIFIC_CHILD";
        TailDirection[TailDirection["TAIL_DIRECTION_END"] = 2] = "TAIL_DIRECTION_END";
    })(TailDirection = SkeletonProfile.TailDirection || (SkeletonProfile.TailDirection = {}));
})(SkeletonProfile || (SkeletonProfile = {}));
export var UndoRedo;
(function (UndoRedo) {
    let MergeMode;
    (function (MergeMode) {
        MergeMode[MergeMode["MERGE_DISABLE"] = 0] = "MERGE_DISABLE";
        MergeMode[MergeMode["MERGE_ENDS"] = 1] = "MERGE_ENDS";
        MergeMode[MergeMode["MERGE_ALL"] = 2] = "MERGE_ALL";
    })(MergeMode = UndoRedo.MergeMode || (UndoRedo.MergeMode = {}));
})(UndoRedo || (UndoRedo = {}));
export var CameraServer;
(function (CameraServer) {
    let FeedImage;
    (function (FeedImage) {
        FeedImage[FeedImage["FEED_RGBA_IMAGE"] = 0] = "FEED_RGBA_IMAGE";
        FeedImage[FeedImage["FEED_YCBCR_IMAGE"] = 0] = "FEED_YCBCR_IMAGE";
        FeedImage[FeedImage["FEED_Y_IMAGE"] = 0] = "FEED_Y_IMAGE";
        FeedImage[FeedImage["FEED_CBCR_IMAGE"] = 1] = "FEED_CBCR_IMAGE";
    })(FeedImage = CameraServer.FeedImage || (CameraServer.FeedImage = {}));
})(CameraServer || (CameraServer = {}));
export var NavigationPathQueryResult3D;
(function (NavigationPathQueryResult3D) {
    let PathSegmentType;
    (function (PathSegmentType) {
        PathSegmentType[PathSegmentType["PATH_SEGMENT_TYPE_REGION"] = 0] = "PATH_SEGMENT_TYPE_REGION";
        PathSegmentType[PathSegmentType["PATH_SEGMENT_TYPE_LINK"] = 1] = "PATH_SEGMENT_TYPE_LINK";
    })(PathSegmentType = NavigationPathQueryResult3D.PathSegmentType || (NavigationPathQueryResult3D.PathSegmentType = {}));
})(NavigationPathQueryResult3D || (NavigationPathQueryResult3D = {}));
export var OS;
(function (OS) {
    let RenderingDriver;
    (function (RenderingDriver) {
        RenderingDriver[RenderingDriver["RENDERING_DRIVER_VULKAN"] = 0] = "RENDERING_DRIVER_VULKAN";
        RenderingDriver[RenderingDriver["RENDERING_DRIVER_OPENGL3"] = 1] = "RENDERING_DRIVER_OPENGL3";
        RenderingDriver[RenderingDriver["RENDERING_DRIVER_D3D12"] = 2] = "RENDERING_DRIVER_D3D12";
        RenderingDriver[RenderingDriver["RENDERING_DRIVER_METAL"] = 3] = "RENDERING_DRIVER_METAL";
    })(RenderingDriver = OS.RenderingDriver || (OS.RenderingDriver = {}));
    let SystemDir;
    (function (SystemDir) {
        SystemDir[SystemDir["SYSTEM_DIR_DESKTOP"] = 0] = "SYSTEM_DIR_DESKTOP";
        SystemDir[SystemDir["SYSTEM_DIR_DCIM"] = 1] = "SYSTEM_DIR_DCIM";
        SystemDir[SystemDir["SYSTEM_DIR_DOCUMENTS"] = 2] = "SYSTEM_DIR_DOCUMENTS";
        SystemDir[SystemDir["SYSTEM_DIR_DOWNLOADS"] = 3] = "SYSTEM_DIR_DOWNLOADS";
        SystemDir[SystemDir["SYSTEM_DIR_MOVIES"] = 4] = "SYSTEM_DIR_MOVIES";
        SystemDir[SystemDir["SYSTEM_DIR_MUSIC"] = 5] = "SYSTEM_DIR_MUSIC";
        SystemDir[SystemDir["SYSTEM_DIR_PICTURES"] = 6] = "SYSTEM_DIR_PICTURES";
        SystemDir[SystemDir["SYSTEM_DIR_RINGTONES"] = 7] = "SYSTEM_DIR_RINGTONES";
    })(SystemDir = OS.SystemDir || (OS.SystemDir = {}));
})(OS || (OS = {}));
export var TextureRect;
(function (TextureRect) {
    let ExpandMode;
    (function (ExpandMode) {
        ExpandMode[ExpandMode["EXPAND_KEEP_SIZE"] = 0] = "EXPAND_KEEP_SIZE";
        ExpandMode[ExpandMode["EXPAND_IGNORE_SIZE"] = 1] = "EXPAND_IGNORE_SIZE";
        ExpandMode[ExpandMode["EXPAND_FIT_WIDTH"] = 2] = "EXPAND_FIT_WIDTH";
        ExpandMode[ExpandMode["EXPAND_FIT_WIDTH_PROPORTIONAL"] = 3] = "EXPAND_FIT_WIDTH_PROPORTIONAL";
        ExpandMode[ExpandMode["EXPAND_FIT_HEIGHT"] = 4] = "EXPAND_FIT_HEIGHT";
        ExpandMode[ExpandMode["EXPAND_FIT_HEIGHT_PROPORTIONAL"] = 5] = "EXPAND_FIT_HEIGHT_PROPORTIONAL";
    })(ExpandMode = TextureRect.ExpandMode || (TextureRect.ExpandMode = {}));
    let StretchMode;
    (function (StretchMode) {
        StretchMode[StretchMode["STRETCH_SCALE"] = 0] = "STRETCH_SCALE";
        StretchMode[StretchMode["STRETCH_TILE"] = 1] = "STRETCH_TILE";
        StretchMode[StretchMode["STRETCH_KEEP"] = 2] = "STRETCH_KEEP";
        StretchMode[StretchMode["STRETCH_KEEP_CENTERED"] = 3] = "STRETCH_KEEP_CENTERED";
        StretchMode[StretchMode["STRETCH_KEEP_ASPECT"] = 4] = "STRETCH_KEEP_ASPECT";
        StretchMode[StretchMode["STRETCH_KEEP_ASPECT_CENTERED"] = 5] = "STRETCH_KEEP_ASPECT_CENTERED";
        StretchMode[StretchMode["STRETCH_KEEP_ASPECT_COVERED"] = 6] = "STRETCH_KEEP_ASPECT_COVERED";
    })(StretchMode = TextureRect.StretchMode || (TextureRect.StretchMode = {}));
})(TextureRect || (TextureRect = {}));
export var AudioEffectPitchShift;
(function (AudioEffectPitchShift) {
    let FFTSize;
    (function (FFTSize) {
        FFTSize[FFTSize["FFT_SIZE_256"] = 0] = "FFT_SIZE_256";
        FFTSize[FFTSize["FFT_SIZE_512"] = 1] = "FFT_SIZE_512";
        FFTSize[FFTSize["FFT_SIZE_1024"] = 2] = "FFT_SIZE_1024";
        FFTSize[FFTSize["FFT_SIZE_2048"] = 3] = "FFT_SIZE_2048";
        FFTSize[FFTSize["FFT_SIZE_4096"] = 4] = "FFT_SIZE_4096";
        FFTSize[FFTSize["FFT_SIZE_MAX"] = 5] = "FFT_SIZE_MAX";
    })(FFTSize = AudioEffectPitchShift.FFTSize || (AudioEffectPitchShift.FFTSize = {}));
})(AudioEffectPitchShift || (AudioEffectPitchShift = {}));
export var Mesh;
(function (Mesh) {
    let PrimitiveType;
    (function (PrimitiveType) {
        PrimitiveType[PrimitiveType["PRIMITIVE_POINTS"] = 0] = "PRIMITIVE_POINTS";
        PrimitiveType[PrimitiveType["PRIMITIVE_LINES"] = 1] = "PRIMITIVE_LINES";
        PrimitiveType[PrimitiveType["PRIMITIVE_LINE_STRIP"] = 2] = "PRIMITIVE_LINE_STRIP";
        PrimitiveType[PrimitiveType["PRIMITIVE_TRIANGLES"] = 3] = "PRIMITIVE_TRIANGLES";
        PrimitiveType[PrimitiveType["PRIMITIVE_TRIANGLE_STRIP"] = 4] = "PRIMITIVE_TRIANGLE_STRIP";
    })(PrimitiveType = Mesh.PrimitiveType || (Mesh.PrimitiveType = {}));
    let ArrayType;
    (function (ArrayType) {
        ArrayType[ArrayType["ARRAY_VERTEX"] = 0] = "ARRAY_VERTEX";
        ArrayType[ArrayType["ARRAY_NORMAL"] = 1] = "ARRAY_NORMAL";
        ArrayType[ArrayType["ARRAY_TANGENT"] = 2] = "ARRAY_TANGENT";
        ArrayType[ArrayType["ARRAY_COLOR"] = 3] = "ARRAY_COLOR";
        ArrayType[ArrayType["ARRAY_TEX_UV"] = 4] = "ARRAY_TEX_UV";
        ArrayType[ArrayType["ARRAY_TEX_UV2"] = 5] = "ARRAY_TEX_UV2";
        ArrayType[ArrayType["ARRAY_CUSTOM0"] = 6] = "ARRAY_CUSTOM0";
        ArrayType[ArrayType["ARRAY_CUSTOM1"] = 7] = "ARRAY_CUSTOM1";
        ArrayType[ArrayType["ARRAY_CUSTOM2"] = 8] = "ARRAY_CUSTOM2";
        ArrayType[ArrayType["ARRAY_CUSTOM3"] = 9] = "ARRAY_CUSTOM3";
        ArrayType[ArrayType["ARRAY_BONES"] = 10] = "ARRAY_BONES";
        ArrayType[ArrayType["ARRAY_WEIGHTS"] = 11] = "ARRAY_WEIGHTS";
        ArrayType[ArrayType["ARRAY_INDEX"] = 12] = "ARRAY_INDEX";
        ArrayType[ArrayType["ARRAY_MAX"] = 13] = "ARRAY_MAX";
    })(ArrayType = Mesh.ArrayType || (Mesh.ArrayType = {}));
    let ArrayCustomFormat;
    (function (ArrayCustomFormat) {
        ArrayCustomFormat[ArrayCustomFormat["ARRAY_CUSTOM_RGBA8_UNORM"] = 0] = "ARRAY_CUSTOM_RGBA8_UNORM";
        ArrayCustomFormat[ArrayCustomFormat["ARRAY_CUSTOM_RGBA8_SNORM"] = 1] = "ARRAY_CUSTOM_RGBA8_SNORM";
        ArrayCustomFormat[ArrayCustomFormat["ARRAY_CUSTOM_RG_HALF"] = 2] = "ARRAY_CUSTOM_RG_HALF";
        ArrayCustomFormat[ArrayCustomFormat["ARRAY_CUSTOM_RGBA_HALF"] = 3] = "ARRAY_CUSTOM_RGBA_HALF";
        ArrayCustomFormat[ArrayCustomFormat["ARRAY_CUSTOM_R_FLOAT"] = 4] = "ARRAY_CUSTOM_R_FLOAT";
        ArrayCustomFormat[ArrayCustomFormat["ARRAY_CUSTOM_RG_FLOAT"] = 5] = "ARRAY_CUSTOM_RG_FLOAT";
        ArrayCustomFormat[ArrayCustomFormat["ARRAY_CUSTOM_RGB_FLOAT"] = 6] = "ARRAY_CUSTOM_RGB_FLOAT";
        ArrayCustomFormat[ArrayCustomFormat["ARRAY_CUSTOM_RGBA_FLOAT"] = 7] = "ARRAY_CUSTOM_RGBA_FLOAT";
        ArrayCustomFormat[ArrayCustomFormat["ARRAY_CUSTOM_MAX"] = 8] = "ARRAY_CUSTOM_MAX";
    })(ArrayCustomFormat = Mesh.ArrayCustomFormat || (Mesh.ArrayCustomFormat = {}));
    let ArrayFormat;
    (function (ArrayFormat) {
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_VERTEX"] = 1] = "ARRAY_FORMAT_VERTEX";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_NORMAL"] = 2] = "ARRAY_FORMAT_NORMAL";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_TANGENT"] = 4] = "ARRAY_FORMAT_TANGENT";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_COLOR"] = 8] = "ARRAY_FORMAT_COLOR";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_TEX_UV"] = 16] = "ARRAY_FORMAT_TEX_UV";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_TEX_UV2"] = 32] = "ARRAY_FORMAT_TEX_UV2";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM0"] = 64] = "ARRAY_FORMAT_CUSTOM0";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM1"] = 128] = "ARRAY_FORMAT_CUSTOM1";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM2"] = 256] = "ARRAY_FORMAT_CUSTOM2";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM3"] = 512] = "ARRAY_FORMAT_CUSTOM3";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_BONES"] = 1024] = "ARRAY_FORMAT_BONES";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_WEIGHTS"] = 2048] = "ARRAY_FORMAT_WEIGHTS";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_INDEX"] = 4096] = "ARRAY_FORMAT_INDEX";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_BLEND_SHAPE_MASK"] = 7] = "ARRAY_FORMAT_BLEND_SHAPE_MASK";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM_BASE"] = 13] = "ARRAY_FORMAT_CUSTOM_BASE";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM_BITS"] = 3] = "ARRAY_FORMAT_CUSTOM_BITS";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM0_SHIFT"] = 13] = "ARRAY_FORMAT_CUSTOM0_SHIFT";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM1_SHIFT"] = 16] = "ARRAY_FORMAT_CUSTOM1_SHIFT";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM2_SHIFT"] = 19] = "ARRAY_FORMAT_CUSTOM2_SHIFT";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM3_SHIFT"] = 22] = "ARRAY_FORMAT_CUSTOM3_SHIFT";
        ArrayFormat[ArrayFormat["ARRAY_FORMAT_CUSTOM_MASK"] = 7] = "ARRAY_FORMAT_CUSTOM_MASK";
        ArrayFormat[ArrayFormat["ARRAY_COMPRESS_FLAGS_BASE"] = 25] = "ARRAY_COMPRESS_FLAGS_BASE";
        ArrayFormat[ArrayFormat["ARRAY_FLAG_USE_2D_VERTICES"] = 33554432] = "ARRAY_FLAG_USE_2D_VERTICES";
        ArrayFormat[ArrayFormat["ARRAY_FLAG_USE_DYNAMIC_UPDATE"] = 67108864] = "ARRAY_FLAG_USE_DYNAMIC_UPDATE";
        ArrayFormat[ArrayFormat["ARRAY_FLAG_USE_8_BONE_WEIGHTS"] = 134217728] = "ARRAY_FLAG_USE_8_BONE_WEIGHTS";
        ArrayFormat[ArrayFormat["ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY"] = 268435456] = "ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY";
        ArrayFormat[ArrayFormat["ARRAY_FLAG_COMPRESS_ATTRIBUTES"] = 536870912] = "ARRAY_FLAG_COMPRESS_ATTRIBUTES";
    })(ArrayFormat = Mesh.ArrayFormat || (Mesh.ArrayFormat = {}));
    let BlendShapeMode;
    (function (BlendShapeMode) {
        BlendShapeMode[BlendShapeMode["BLEND_SHAPE_MODE_NORMALIZED"] = 0] = "BLEND_SHAPE_MODE_NORMALIZED";
        BlendShapeMode[BlendShapeMode["BLEND_SHAPE_MODE_RELATIVE"] = 1] = "BLEND_SHAPE_MODE_RELATIVE";
    })(BlendShapeMode = Mesh.BlendShapeMode || (Mesh.BlendShapeMode = {}));
})(Mesh || (Mesh = {}));
export var Input;
(function (Input) {
    let MouseMode;
    (function (MouseMode) {
        MouseMode[MouseMode["MOUSE_MODE_VISIBLE"] = 0] = "MOUSE_MODE_VISIBLE";
        MouseMode[MouseMode["MOUSE_MODE_HIDDEN"] = 1] = "MOUSE_MODE_HIDDEN";
        MouseMode[MouseMode["MOUSE_MODE_CAPTURED"] = 2] = "MOUSE_MODE_CAPTURED";
        MouseMode[MouseMode["MOUSE_MODE_CONFINED"] = 3] = "MOUSE_MODE_CONFINED";
        MouseMode[MouseMode["MOUSE_MODE_CONFINED_HIDDEN"] = 4] = "MOUSE_MODE_CONFINED_HIDDEN";
    })(MouseMode = Input.MouseMode || (Input.MouseMode = {}));
    let CursorShape;
    (function (CursorShape) {
        CursorShape[CursorShape["CURSOR_ARROW"] = 0] = "CURSOR_ARROW";
        CursorShape[CursorShape["CURSOR_IBEAM"] = 1] = "CURSOR_IBEAM";
        CursorShape[CursorShape["CURSOR_POINTING_HAND"] = 2] = "CURSOR_POINTING_HAND";
        CursorShape[CursorShape["CURSOR_CROSS"] = 3] = "CURSOR_CROSS";
        CursorShape[CursorShape["CURSOR_WAIT"] = 4] = "CURSOR_WAIT";
        CursorShape[CursorShape["CURSOR_BUSY"] = 5] = "CURSOR_BUSY";
        CursorShape[CursorShape["CURSOR_DRAG"] = 6] = "CURSOR_DRAG";
        CursorShape[CursorShape["CURSOR_CAN_DROP"] = 7] = "CURSOR_CAN_DROP";
        CursorShape[CursorShape["CURSOR_FORBIDDEN"] = 8] = "CURSOR_FORBIDDEN";
        CursorShape[CursorShape["CURSOR_VSIZE"] = 9] = "CURSOR_VSIZE";
        CursorShape[CursorShape["CURSOR_HSIZE"] = 10] = "CURSOR_HSIZE";
        CursorShape[CursorShape["CURSOR_BDIAGSIZE"] = 11] = "CURSOR_BDIAGSIZE";
        CursorShape[CursorShape["CURSOR_FDIAGSIZE"] = 12] = "CURSOR_FDIAGSIZE";
        CursorShape[CursorShape["CURSOR_MOVE"] = 13] = "CURSOR_MOVE";
        CursorShape[CursorShape["CURSOR_VSPLIT"] = 14] = "CURSOR_VSPLIT";
        CursorShape[CursorShape["CURSOR_HSPLIT"] = 15] = "CURSOR_HSPLIT";
        CursorShape[CursorShape["CURSOR_HELP"] = 16] = "CURSOR_HELP";
    })(CursorShape = Input.CursorShape || (Input.CursorShape = {}));
})(Input || (Input = {}));
export var ColorPicker;
(function (ColorPicker) {
    let ColorModeType;
    (function (ColorModeType) {
        ColorModeType[ColorModeType["MODE_RGB"] = 0] = "MODE_RGB";
        ColorModeType[ColorModeType["MODE_HSV"] = 1] = "MODE_HSV";
        ColorModeType[ColorModeType["MODE_RAW"] = 2] = "MODE_RAW";
        ColorModeType[ColorModeType["MODE_OKHSL"] = 3] = "MODE_OKHSL";
    })(ColorModeType = ColorPicker.ColorModeType || (ColorPicker.ColorModeType = {}));
    let PickerShapeType;
    (function (PickerShapeType) {
        PickerShapeType[PickerShapeType["SHAPE_HSV_RECTANGLE"] = 0] = "SHAPE_HSV_RECTANGLE";
        PickerShapeType[PickerShapeType["SHAPE_HSV_WHEEL"] = 1] = "SHAPE_HSV_WHEEL";
        PickerShapeType[PickerShapeType["SHAPE_VHS_CIRCLE"] = 2] = "SHAPE_VHS_CIRCLE";
        PickerShapeType[PickerShapeType["SHAPE_OKHSL_CIRCLE"] = 3] = "SHAPE_OKHSL_CIRCLE";
        PickerShapeType[PickerShapeType["SHAPE_NONE"] = 4] = "SHAPE_NONE";
    })(PickerShapeType = ColorPicker.PickerShapeType || (ColorPicker.PickerShapeType = {}));
})(ColorPicker || (ColorPicker = {}));
export var Tween;
(function (Tween) {
    let TweenProcessMode;
    (function (TweenProcessMode) {
        TweenProcessMode[TweenProcessMode["TWEEN_PROCESS_PHYSICS"] = 0] = "TWEEN_PROCESS_PHYSICS";
        TweenProcessMode[TweenProcessMode["TWEEN_PROCESS_IDLE"] = 1] = "TWEEN_PROCESS_IDLE";
    })(TweenProcessMode = Tween.TweenProcessMode || (Tween.TweenProcessMode = {}));
    let TweenPauseMode;
    (function (TweenPauseMode) {
        TweenPauseMode[TweenPauseMode["TWEEN_PAUSE_BOUND"] = 0] = "TWEEN_PAUSE_BOUND";
        TweenPauseMode[TweenPauseMode["TWEEN_PAUSE_STOP"] = 1] = "TWEEN_PAUSE_STOP";
        TweenPauseMode[TweenPauseMode["TWEEN_PAUSE_PROCESS"] = 2] = "TWEEN_PAUSE_PROCESS";
    })(TweenPauseMode = Tween.TweenPauseMode || (Tween.TweenPauseMode = {}));
    let TransitionType;
    (function (TransitionType) {
        TransitionType[TransitionType["TRANS_LINEAR"] = 0] = "TRANS_LINEAR";
        TransitionType[TransitionType["TRANS_SINE"] = 1] = "TRANS_SINE";
        TransitionType[TransitionType["TRANS_QUINT"] = 2] = "TRANS_QUINT";
        TransitionType[TransitionType["TRANS_QUART"] = 3] = "TRANS_QUART";
        TransitionType[TransitionType["TRANS_QUAD"] = 4] = "TRANS_QUAD";
        TransitionType[TransitionType["TRANS_EXPO"] = 5] = "TRANS_EXPO";
        TransitionType[TransitionType["TRANS_ELASTIC"] = 6] = "TRANS_ELASTIC";
        TransitionType[TransitionType["TRANS_CUBIC"] = 7] = "TRANS_CUBIC";
        TransitionType[TransitionType["TRANS_CIRC"] = 8] = "TRANS_CIRC";
        TransitionType[TransitionType["TRANS_BOUNCE"] = 9] = "TRANS_BOUNCE";
        TransitionType[TransitionType["TRANS_BACK"] = 10] = "TRANS_BACK";
        TransitionType[TransitionType["TRANS_SPRING"] = 11] = "TRANS_SPRING";
    })(TransitionType = Tween.TransitionType || (Tween.TransitionType = {}));
    let EaseType;
    (function (EaseType) {
        EaseType[EaseType["EASE_IN"] = 0] = "EASE_IN";
        EaseType[EaseType["EASE_OUT"] = 1] = "EASE_OUT";
        EaseType[EaseType["EASE_IN_OUT"] = 2] = "EASE_IN_OUT";
        EaseType[EaseType["EASE_OUT_IN"] = 3] = "EASE_OUT_IN";
    })(EaseType = Tween.EaseType || (Tween.EaseType = {}));
})(Tween || (Tween = {}));
export var TabBar;
(function (TabBar) {
    let AlignmentMode;
    (function (AlignmentMode) {
        AlignmentMode[AlignmentMode["ALIGNMENT_LEFT"] = 0] = "ALIGNMENT_LEFT";
        AlignmentMode[AlignmentMode["ALIGNMENT_CENTER"] = 1] = "ALIGNMENT_CENTER";
        AlignmentMode[AlignmentMode["ALIGNMENT_RIGHT"] = 2] = "ALIGNMENT_RIGHT";
        AlignmentMode[AlignmentMode["ALIGNMENT_MAX"] = 3] = "ALIGNMENT_MAX";
    })(AlignmentMode = TabBar.AlignmentMode || (TabBar.AlignmentMode = {}));
    let CloseButtonDisplayPolicy;
    (function (CloseButtonDisplayPolicy) {
        CloseButtonDisplayPolicy[CloseButtonDisplayPolicy["CLOSE_BUTTON_SHOW_NEVER"] = 0] = "CLOSE_BUTTON_SHOW_NEVER";
        CloseButtonDisplayPolicy[CloseButtonDisplayPolicy["CLOSE_BUTTON_SHOW_ACTIVE_ONLY"] = 1] = "CLOSE_BUTTON_SHOW_ACTIVE_ONLY";
        CloseButtonDisplayPolicy[CloseButtonDisplayPolicy["CLOSE_BUTTON_SHOW_ALWAYS"] = 2] = "CLOSE_BUTTON_SHOW_ALWAYS";
        CloseButtonDisplayPolicy[CloseButtonDisplayPolicy["CLOSE_BUTTON_MAX"] = 3] = "CLOSE_BUTTON_MAX";
    })(CloseButtonDisplayPolicy = TabBar.CloseButtonDisplayPolicy || (TabBar.CloseButtonDisplayPolicy = {}));
})(TabBar || (TabBar = {}));
export var AspectRatioContainer;
(function (AspectRatioContainer) {
    let StretchMode;
    (function (StretchMode) {
        StretchMode[StretchMode["STRETCH_WIDTH_CONTROLS_HEIGHT"] = 0] = "STRETCH_WIDTH_CONTROLS_HEIGHT";
        StretchMode[StretchMode["STRETCH_HEIGHT_CONTROLS_WIDTH"] = 1] = "STRETCH_HEIGHT_CONTROLS_WIDTH";
        StretchMode[StretchMode["STRETCH_FIT"] = 2] = "STRETCH_FIT";
        StretchMode[StretchMode["STRETCH_COVER"] = 3] = "STRETCH_COVER";
    })(StretchMode = AspectRatioContainer.StretchMode || (AspectRatioContainer.StretchMode = {}));
    let AlignmentMode;
    (function (AlignmentMode) {
        AlignmentMode[AlignmentMode["ALIGNMENT_BEGIN"] = 0] = "ALIGNMENT_BEGIN";
        AlignmentMode[AlignmentMode["ALIGNMENT_CENTER"] = 1] = "ALIGNMENT_CENTER";
        AlignmentMode[AlignmentMode["ALIGNMENT_END"] = 2] = "ALIGNMENT_END";
    })(AlignmentMode = AspectRatioContainer.AlignmentMode || (AspectRatioContainer.AlignmentMode = {}));
})(AspectRatioContainer || (AspectRatioContainer = {}));
export var SubViewport;
(function (SubViewport) {
    let ClearMode;
    (function (ClearMode) {
        ClearMode[ClearMode["CLEAR_MODE_ALWAYS"] = 0] = "CLEAR_MODE_ALWAYS";
        ClearMode[ClearMode["CLEAR_MODE_NEVER"] = 1] = "CLEAR_MODE_NEVER";
        ClearMode[ClearMode["CLEAR_MODE_ONCE"] = 2] = "CLEAR_MODE_ONCE";
    })(ClearMode = SubViewport.ClearMode || (SubViewport.ClearMode = {}));
    let UpdateMode;
    (function (UpdateMode) {
        UpdateMode[UpdateMode["UPDATE_DISABLED"] = 0] = "UPDATE_DISABLED";
        UpdateMode[UpdateMode["UPDATE_ONCE"] = 1] = "UPDATE_ONCE";
        UpdateMode[UpdateMode["UPDATE_WHEN_VISIBLE"] = 2] = "UPDATE_WHEN_VISIBLE";
        UpdateMode[UpdateMode["UPDATE_WHEN_PARENT_VISIBLE"] = 3] = "UPDATE_WHEN_PARENT_VISIBLE";
        UpdateMode[UpdateMode["UPDATE_ALWAYS"] = 4] = "UPDATE_ALWAYS";
    })(UpdateMode = SubViewport.UpdateMode || (SubViewport.UpdateMode = {}));
})(SubViewport || (SubViewport = {}));
export var TileSet;
(function (TileSet) {
    let TileShape;
    (function (TileShape) {
        TileShape[TileShape["TILE_SHAPE_SQUARE"] = 0] = "TILE_SHAPE_SQUARE";
        TileShape[TileShape["TILE_SHAPE_ISOMETRIC"] = 1] = "TILE_SHAPE_ISOMETRIC";
        TileShape[TileShape["TILE_SHAPE_HALF_OFFSET_SQUARE"] = 2] = "TILE_SHAPE_HALF_OFFSET_SQUARE";
        TileShape[TileShape["TILE_SHAPE_HEXAGON"] = 3] = "TILE_SHAPE_HEXAGON";
    })(TileShape = TileSet.TileShape || (TileSet.TileShape = {}));
    let TileLayout;
    (function (TileLayout) {
        TileLayout[TileLayout["TILE_LAYOUT_STACKED"] = 0] = "TILE_LAYOUT_STACKED";
        TileLayout[TileLayout["TILE_LAYOUT_STACKED_OFFSET"] = 1] = "TILE_LAYOUT_STACKED_OFFSET";
        TileLayout[TileLayout["TILE_LAYOUT_STAIRS_RIGHT"] = 2] = "TILE_LAYOUT_STAIRS_RIGHT";
        TileLayout[TileLayout["TILE_LAYOUT_STAIRS_DOWN"] = 3] = "TILE_LAYOUT_STAIRS_DOWN";
        TileLayout[TileLayout["TILE_LAYOUT_DIAMOND_RIGHT"] = 4] = "TILE_LAYOUT_DIAMOND_RIGHT";
        TileLayout[TileLayout["TILE_LAYOUT_DIAMOND_DOWN"] = 5] = "TILE_LAYOUT_DIAMOND_DOWN";
    })(TileLayout = TileSet.TileLayout || (TileSet.TileLayout = {}));
    let TileOffsetAxis;
    (function (TileOffsetAxis) {
        TileOffsetAxis[TileOffsetAxis["TILE_OFFSET_AXIS_HORIZONTAL"] = 0] = "TILE_OFFSET_AXIS_HORIZONTAL";
        TileOffsetAxis[TileOffsetAxis["TILE_OFFSET_AXIS_VERTICAL"] = 1] = "TILE_OFFSET_AXIS_VERTICAL";
    })(TileOffsetAxis = TileSet.TileOffsetAxis || (TileSet.TileOffsetAxis = {}));
    let CellNeighbor;
    (function (CellNeighbor) {
        CellNeighbor[CellNeighbor["CELL_NEIGHBOR_RIGHT_SIDE"] = 0] = "CELL_NEIGHBOR_RIGHT_SIDE";
        CellNeighbor[CellNeighbor["CELL_NEIGHBOR_RIGHT_CORNER"] = 1] = "CELL_NEIGHBOR_RIGHT_CORNER";
        CellNeighbor[CellNeighbor["CELL_NEIGHBOR_BOTTOM_RIGHT_SIDE"] = 2] = "CELL_NEIGHBOR_BOTTOM_RIGHT_SIDE";
        CellNeighbor[CellNeighbor["CELL_NEIGHBOR_BOTTOM_RIGHT_CORNER"] = 3] = "CELL_NEIGHBOR_BOTTOM_RIGHT_CORNER";
        CellNeighbor[CellNeighbor["CELL_NEIGHBOR_BOTTOM_SIDE"] = 4] = "CELL_NEIGHBOR_BOTTOM_SIDE";
        CellNeighbor[CellNeighbor["CELL_NEIGHBOR_BOTTOM_CORNER"] = 5] = "CELL_NEIGHBOR_BOTTOM_CORNER";
        CellNeighbor[CellNeighbor["CELL_NEIGHBOR_BOTTOM_LEFT_SIDE"] = 6] = "CELL_NEIGHBOR_BOTTOM_LEFT_SIDE";
        CellNeighbor[CellNeighbor["CELL_NEIGHBOR_BOTTOM_LEFT_CORNER"] = 7] = "CELL_NEIGHBOR_BOTTOM_LEFT_CORNER";
        CellNeighbor[CellNeighbor["CELL_NEIGHBOR_LEFT_SIDE"] = 8] = "CELL_NEIGHBOR_LEFT_SIDE";
        CellNeighbor[CellNeighbor["CELL_NEIGHBOR_LEFT_CORNER"] = 9] = "CELL_NEIGHBOR_LEFT_CORNER";
        CellNeighbor[CellNeighbor["CELL_NEIGHBOR_TOP_LEFT_SIDE"] = 10] = "CELL_NEIGHBOR_TOP_LEFT_SIDE";
        CellNeighbor[CellNeighbor["CELL_NEIGHBOR_TOP_LEFT_CORNER"] = 11] = "CELL_NEIGHBOR_TOP_LEFT_CORNER";
        CellNeighbor[CellNeighbor["CELL_NEIGHBOR_TOP_SIDE"] = 12] = "CELL_NEIGHBOR_TOP_SIDE";
        CellNeighbor[CellNeighbor["CELL_NEIGHBOR_TOP_CORNER"] = 13] = "CELL_NEIGHBOR_TOP_CORNER";
        CellNeighbor[CellNeighbor["CELL_NEIGHBOR_TOP_RIGHT_SIDE"] = 14] = "CELL_NEIGHBOR_TOP_RIGHT_SIDE";
        CellNeighbor[CellNeighbor["CELL_NEIGHBOR_TOP_RIGHT_CORNER"] = 15] = "CELL_NEIGHBOR_TOP_RIGHT_CORNER";
    })(CellNeighbor = TileSet.CellNeighbor || (TileSet.CellNeighbor = {}));
    let TerrainMode;
    (function (TerrainMode) {
        TerrainMode[TerrainMode["TERRAIN_MODE_MATCH_CORNERS_AND_SIDES"] = 0] = "TERRAIN_MODE_MATCH_CORNERS_AND_SIDES";
        TerrainMode[TerrainMode["TERRAIN_MODE_MATCH_CORNERS"] = 1] = "TERRAIN_MODE_MATCH_CORNERS";
        TerrainMode[TerrainMode["TERRAIN_MODE_MATCH_SIDES"] = 2] = "TERRAIN_MODE_MATCH_SIDES";
    })(TerrainMode = TileSet.TerrainMode || (TileSet.TerrainMode = {}));
})(TileSet || (TileSet = {}));
export var RenderingDevice;
(function (RenderingDevice) {
    let DeviceType;
    (function (DeviceType) {
        DeviceType[DeviceType["DEVICE_TYPE_OTHER"] = 0] = "DEVICE_TYPE_OTHER";
        DeviceType[DeviceType["DEVICE_TYPE_INTEGRATED_GPU"] = 1] = "DEVICE_TYPE_INTEGRATED_GPU";
        DeviceType[DeviceType["DEVICE_TYPE_DISCRETE_GPU"] = 2] = "DEVICE_TYPE_DISCRETE_GPU";
        DeviceType[DeviceType["DEVICE_TYPE_VIRTUAL_GPU"] = 3] = "DEVICE_TYPE_VIRTUAL_GPU";
        DeviceType[DeviceType["DEVICE_TYPE_CPU"] = 4] = "DEVICE_TYPE_CPU";
        DeviceType[DeviceType["DEVICE_TYPE_MAX"] = 5] = "DEVICE_TYPE_MAX";
    })(DeviceType = RenderingDevice.DeviceType || (RenderingDevice.DeviceType = {}));
    let DriverResource;
    (function (DriverResource) {
        DriverResource[DriverResource["DRIVER_RESOURCE_LOGICAL_DEVICE"] = 0] = "DRIVER_RESOURCE_LOGICAL_DEVICE";
        DriverResource[DriverResource["DRIVER_RESOURCE_PHYSICAL_DEVICE"] = 1] = "DRIVER_RESOURCE_PHYSICAL_DEVICE";
        DriverResource[DriverResource["DRIVER_RESOURCE_TOPMOST_OBJECT"] = 2] = "DRIVER_RESOURCE_TOPMOST_OBJECT";
        DriverResource[DriverResource["DRIVER_RESOURCE_COMMAND_QUEUE"] = 3] = "DRIVER_RESOURCE_COMMAND_QUEUE";
        DriverResource[DriverResource["DRIVER_RESOURCE_QUEUE_FAMILY"] = 4] = "DRIVER_RESOURCE_QUEUE_FAMILY";
        DriverResource[DriverResource["DRIVER_RESOURCE_TEXTURE"] = 5] = "DRIVER_RESOURCE_TEXTURE";
        DriverResource[DriverResource["DRIVER_RESOURCE_TEXTURE_VIEW"] = 6] = "DRIVER_RESOURCE_TEXTURE_VIEW";
        DriverResource[DriverResource["DRIVER_RESOURCE_TEXTURE_DATA_FORMAT"] = 7] = "DRIVER_RESOURCE_TEXTURE_DATA_FORMAT";
        DriverResource[DriverResource["DRIVER_RESOURCE_SAMPLER"] = 8] = "DRIVER_RESOURCE_SAMPLER";
        DriverResource[DriverResource["DRIVER_RESOURCE_UNIFORM_SET"] = 9] = "DRIVER_RESOURCE_UNIFORM_SET";
        DriverResource[DriverResource["DRIVER_RESOURCE_BUFFER"] = 10] = "DRIVER_RESOURCE_BUFFER";
        DriverResource[DriverResource["DRIVER_RESOURCE_COMPUTE_PIPELINE"] = 11] = "DRIVER_RESOURCE_COMPUTE_PIPELINE";
        DriverResource[DriverResource["DRIVER_RESOURCE_RENDER_PIPELINE"] = 12] = "DRIVER_RESOURCE_RENDER_PIPELINE";
        DriverResource[DriverResource["DRIVER_RESOURCE_VULKAN_DEVICE"] = 0] = "DRIVER_RESOURCE_VULKAN_DEVICE";
        DriverResource[DriverResource["DRIVER_RESOURCE_VULKAN_PHYSICAL_DEVICE"] = 1] = "DRIVER_RESOURCE_VULKAN_PHYSICAL_DEVICE";
        DriverResource[DriverResource["DRIVER_RESOURCE_VULKAN_INSTANCE"] = 2] = "DRIVER_RESOURCE_VULKAN_INSTANCE";
        DriverResource[DriverResource["DRIVER_RESOURCE_VULKAN_QUEUE"] = 3] = "DRIVER_RESOURCE_VULKAN_QUEUE";
        DriverResource[DriverResource["DRIVER_RESOURCE_VULKAN_QUEUE_FAMILY_INDEX"] = 4] = "DRIVER_RESOURCE_VULKAN_QUEUE_FAMILY_INDEX";
        DriverResource[DriverResource["DRIVER_RESOURCE_VULKAN_IMAGE"] = 5] = "DRIVER_RESOURCE_VULKAN_IMAGE";
        DriverResource[DriverResource["DRIVER_RESOURCE_VULKAN_IMAGE_VIEW"] = 6] = "DRIVER_RESOURCE_VULKAN_IMAGE_VIEW";
        DriverResource[DriverResource["DRIVER_RESOURCE_VULKAN_IMAGE_NATIVE_TEXTURE_FORMAT"] = 7] = "DRIVER_RESOURCE_VULKAN_IMAGE_NATIVE_TEXTURE_FORMAT";
        DriverResource[DriverResource["DRIVER_RESOURCE_VULKAN_SAMPLER"] = 8] = "DRIVER_RESOURCE_VULKAN_SAMPLER";
        DriverResource[DriverResource["DRIVER_RESOURCE_VULKAN_DESCRIPTOR_SET"] = 9] = "DRIVER_RESOURCE_VULKAN_DESCRIPTOR_SET";
        DriverResource[DriverResource["DRIVER_RESOURCE_VULKAN_BUFFER"] = 10] = "DRIVER_RESOURCE_VULKAN_BUFFER";
        DriverResource[DriverResource["DRIVER_RESOURCE_VULKAN_COMPUTE_PIPELINE"] = 11] = "DRIVER_RESOURCE_VULKAN_COMPUTE_PIPELINE";
        DriverResource[DriverResource["DRIVER_RESOURCE_VULKAN_RENDER_PIPELINE"] = 12] = "DRIVER_RESOURCE_VULKAN_RENDER_PIPELINE";
    })(DriverResource = RenderingDevice.DriverResource || (RenderingDevice.DriverResource = {}));
    let DataFormat;
    (function (DataFormat) {
        DataFormat[DataFormat["DATA_FORMAT_R4G4_UNORM_PACK8"] = 0] = "DATA_FORMAT_R4G4_UNORM_PACK8";
        DataFormat[DataFormat["DATA_FORMAT_R4G4B4A4_UNORM_PACK16"] = 1] = "DATA_FORMAT_R4G4B4A4_UNORM_PACK16";
        DataFormat[DataFormat["DATA_FORMAT_B4G4R4A4_UNORM_PACK16"] = 2] = "DATA_FORMAT_B4G4R4A4_UNORM_PACK16";
        DataFormat[DataFormat["DATA_FORMAT_R5G6B5_UNORM_PACK16"] = 3] = "DATA_FORMAT_R5G6B5_UNORM_PACK16";
        DataFormat[DataFormat["DATA_FORMAT_B5G6R5_UNORM_PACK16"] = 4] = "DATA_FORMAT_B5G6R5_UNORM_PACK16";
        DataFormat[DataFormat["DATA_FORMAT_R5G5B5A1_UNORM_PACK16"] = 5] = "DATA_FORMAT_R5G5B5A1_UNORM_PACK16";
        DataFormat[DataFormat["DATA_FORMAT_B5G5R5A1_UNORM_PACK16"] = 6] = "DATA_FORMAT_B5G5R5A1_UNORM_PACK16";
        DataFormat[DataFormat["DATA_FORMAT_A1R5G5B5_UNORM_PACK16"] = 7] = "DATA_FORMAT_A1R5G5B5_UNORM_PACK16";
        DataFormat[DataFormat["DATA_FORMAT_R8_UNORM"] = 8] = "DATA_FORMAT_R8_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_R8_SNORM"] = 9] = "DATA_FORMAT_R8_SNORM";
        DataFormat[DataFormat["DATA_FORMAT_R8_USCALED"] = 10] = "DATA_FORMAT_R8_USCALED";
        DataFormat[DataFormat["DATA_FORMAT_R8_SSCALED"] = 11] = "DATA_FORMAT_R8_SSCALED";
        DataFormat[DataFormat["DATA_FORMAT_R8_UINT"] = 12] = "DATA_FORMAT_R8_UINT";
        DataFormat[DataFormat["DATA_FORMAT_R8_SINT"] = 13] = "DATA_FORMAT_R8_SINT";
        DataFormat[DataFormat["DATA_FORMAT_R8_SRGB"] = 14] = "DATA_FORMAT_R8_SRGB";
        DataFormat[DataFormat["DATA_FORMAT_R8G8_UNORM"] = 15] = "DATA_FORMAT_R8G8_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_R8G8_SNORM"] = 16] = "DATA_FORMAT_R8G8_SNORM";
        DataFormat[DataFormat["DATA_FORMAT_R8G8_USCALED"] = 17] = "DATA_FORMAT_R8G8_USCALED";
        DataFormat[DataFormat["DATA_FORMAT_R8G8_SSCALED"] = 18] = "DATA_FORMAT_R8G8_SSCALED";
        DataFormat[DataFormat["DATA_FORMAT_R8G8_UINT"] = 19] = "DATA_FORMAT_R8G8_UINT";
        DataFormat[DataFormat["DATA_FORMAT_R8G8_SINT"] = 20] = "DATA_FORMAT_R8G8_SINT";
        DataFormat[DataFormat["DATA_FORMAT_R8G8_SRGB"] = 21] = "DATA_FORMAT_R8G8_SRGB";
        DataFormat[DataFormat["DATA_FORMAT_R8G8B8_UNORM"] = 22] = "DATA_FORMAT_R8G8B8_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_R8G8B8_SNORM"] = 23] = "DATA_FORMAT_R8G8B8_SNORM";
        DataFormat[DataFormat["DATA_FORMAT_R8G8B8_USCALED"] = 24] = "DATA_FORMAT_R8G8B8_USCALED";
        DataFormat[DataFormat["DATA_FORMAT_R8G8B8_SSCALED"] = 25] = "DATA_FORMAT_R8G8B8_SSCALED";
        DataFormat[DataFormat["DATA_FORMAT_R8G8B8_UINT"] = 26] = "DATA_FORMAT_R8G8B8_UINT";
        DataFormat[DataFormat["DATA_FORMAT_R8G8B8_SINT"] = 27] = "DATA_FORMAT_R8G8B8_SINT";
        DataFormat[DataFormat["DATA_FORMAT_R8G8B8_SRGB"] = 28] = "DATA_FORMAT_R8G8B8_SRGB";
        DataFormat[DataFormat["DATA_FORMAT_B8G8R8_UNORM"] = 29] = "DATA_FORMAT_B8G8R8_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_B8G8R8_SNORM"] = 30] = "DATA_FORMAT_B8G8R8_SNORM";
        DataFormat[DataFormat["DATA_FORMAT_B8G8R8_USCALED"] = 31] = "DATA_FORMAT_B8G8R8_USCALED";
        DataFormat[DataFormat["DATA_FORMAT_B8G8R8_SSCALED"] = 32] = "DATA_FORMAT_B8G8R8_SSCALED";
        DataFormat[DataFormat["DATA_FORMAT_B8G8R8_UINT"] = 33] = "DATA_FORMAT_B8G8R8_UINT";
        DataFormat[DataFormat["DATA_FORMAT_B8G8R8_SINT"] = 34] = "DATA_FORMAT_B8G8R8_SINT";
        DataFormat[DataFormat["DATA_FORMAT_B8G8R8_SRGB"] = 35] = "DATA_FORMAT_B8G8R8_SRGB";
        DataFormat[DataFormat["DATA_FORMAT_R8G8B8A8_UNORM"] = 36] = "DATA_FORMAT_R8G8B8A8_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_R8G8B8A8_SNORM"] = 37] = "DATA_FORMAT_R8G8B8A8_SNORM";
        DataFormat[DataFormat["DATA_FORMAT_R8G8B8A8_USCALED"] = 38] = "DATA_FORMAT_R8G8B8A8_USCALED";
        DataFormat[DataFormat["DATA_FORMAT_R8G8B8A8_SSCALED"] = 39] = "DATA_FORMAT_R8G8B8A8_SSCALED";
        DataFormat[DataFormat["DATA_FORMAT_R8G8B8A8_UINT"] = 40] = "DATA_FORMAT_R8G8B8A8_UINT";
        DataFormat[DataFormat["DATA_FORMAT_R8G8B8A8_SINT"] = 41] = "DATA_FORMAT_R8G8B8A8_SINT";
        DataFormat[DataFormat["DATA_FORMAT_R8G8B8A8_SRGB"] = 42] = "DATA_FORMAT_R8G8B8A8_SRGB";
        DataFormat[DataFormat["DATA_FORMAT_B8G8R8A8_UNORM"] = 43] = "DATA_FORMAT_B8G8R8A8_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_B8G8R8A8_SNORM"] = 44] = "DATA_FORMAT_B8G8R8A8_SNORM";
        DataFormat[DataFormat["DATA_FORMAT_B8G8R8A8_USCALED"] = 45] = "DATA_FORMAT_B8G8R8A8_USCALED";
        DataFormat[DataFormat["DATA_FORMAT_B8G8R8A8_SSCALED"] = 46] = "DATA_FORMAT_B8G8R8A8_SSCALED";
        DataFormat[DataFormat["DATA_FORMAT_B8G8R8A8_UINT"] = 47] = "DATA_FORMAT_B8G8R8A8_UINT";
        DataFormat[DataFormat["DATA_FORMAT_B8G8R8A8_SINT"] = 48] = "DATA_FORMAT_B8G8R8A8_SINT";
        DataFormat[DataFormat["DATA_FORMAT_B8G8R8A8_SRGB"] = 49] = "DATA_FORMAT_B8G8R8A8_SRGB";
        DataFormat[DataFormat["DATA_FORMAT_A8B8G8R8_UNORM_PACK32"] = 50] = "DATA_FORMAT_A8B8G8R8_UNORM_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_A8B8G8R8_SNORM_PACK32"] = 51] = "DATA_FORMAT_A8B8G8R8_SNORM_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_A8B8G8R8_USCALED_PACK32"] = 52] = "DATA_FORMAT_A8B8G8R8_USCALED_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_A8B8G8R8_SSCALED_PACK32"] = 53] = "DATA_FORMAT_A8B8G8R8_SSCALED_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_A8B8G8R8_UINT_PACK32"] = 54] = "DATA_FORMAT_A8B8G8R8_UINT_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_A8B8G8R8_SINT_PACK32"] = 55] = "DATA_FORMAT_A8B8G8R8_SINT_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_A8B8G8R8_SRGB_PACK32"] = 56] = "DATA_FORMAT_A8B8G8R8_SRGB_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_A2R10G10B10_UNORM_PACK32"] = 57] = "DATA_FORMAT_A2R10G10B10_UNORM_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_A2R10G10B10_SNORM_PACK32"] = 58] = "DATA_FORMAT_A2R10G10B10_SNORM_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_A2R10G10B10_USCALED_PACK32"] = 59] = "DATA_FORMAT_A2R10G10B10_USCALED_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_A2R10G10B10_SSCALED_PACK32"] = 60] = "DATA_FORMAT_A2R10G10B10_SSCALED_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_A2R10G10B10_UINT_PACK32"] = 61] = "DATA_FORMAT_A2R10G10B10_UINT_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_A2R10G10B10_SINT_PACK32"] = 62] = "DATA_FORMAT_A2R10G10B10_SINT_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_A2B10G10R10_UNORM_PACK32"] = 63] = "DATA_FORMAT_A2B10G10R10_UNORM_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_A2B10G10R10_SNORM_PACK32"] = 64] = "DATA_FORMAT_A2B10G10R10_SNORM_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_A2B10G10R10_USCALED_PACK32"] = 65] = "DATA_FORMAT_A2B10G10R10_USCALED_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_A2B10G10R10_SSCALED_PACK32"] = 66] = "DATA_FORMAT_A2B10G10R10_SSCALED_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_A2B10G10R10_UINT_PACK32"] = 67] = "DATA_FORMAT_A2B10G10R10_UINT_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_A2B10G10R10_SINT_PACK32"] = 68] = "DATA_FORMAT_A2B10G10R10_SINT_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_R16_UNORM"] = 69] = "DATA_FORMAT_R16_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_R16_SNORM"] = 70] = "DATA_FORMAT_R16_SNORM";
        DataFormat[DataFormat["DATA_FORMAT_R16_USCALED"] = 71] = "DATA_FORMAT_R16_USCALED";
        DataFormat[DataFormat["DATA_FORMAT_R16_SSCALED"] = 72] = "DATA_FORMAT_R16_SSCALED";
        DataFormat[DataFormat["DATA_FORMAT_R16_UINT"] = 73] = "DATA_FORMAT_R16_UINT";
        DataFormat[DataFormat["DATA_FORMAT_R16_SINT"] = 74] = "DATA_FORMAT_R16_SINT";
        DataFormat[DataFormat["DATA_FORMAT_R16_SFLOAT"] = 75] = "DATA_FORMAT_R16_SFLOAT";
        DataFormat[DataFormat["DATA_FORMAT_R16G16_UNORM"] = 76] = "DATA_FORMAT_R16G16_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_R16G16_SNORM"] = 77] = "DATA_FORMAT_R16G16_SNORM";
        DataFormat[DataFormat["DATA_FORMAT_R16G16_USCALED"] = 78] = "DATA_FORMAT_R16G16_USCALED";
        DataFormat[DataFormat["DATA_FORMAT_R16G16_SSCALED"] = 79] = "DATA_FORMAT_R16G16_SSCALED";
        DataFormat[DataFormat["DATA_FORMAT_R16G16_UINT"] = 80] = "DATA_FORMAT_R16G16_UINT";
        DataFormat[DataFormat["DATA_FORMAT_R16G16_SINT"] = 81] = "DATA_FORMAT_R16G16_SINT";
        DataFormat[DataFormat["DATA_FORMAT_R16G16_SFLOAT"] = 82] = "DATA_FORMAT_R16G16_SFLOAT";
        DataFormat[DataFormat["DATA_FORMAT_R16G16B16_UNORM"] = 83] = "DATA_FORMAT_R16G16B16_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_R16G16B16_SNORM"] = 84] = "DATA_FORMAT_R16G16B16_SNORM";
        DataFormat[DataFormat["DATA_FORMAT_R16G16B16_USCALED"] = 85] = "DATA_FORMAT_R16G16B16_USCALED";
        DataFormat[DataFormat["DATA_FORMAT_R16G16B16_SSCALED"] = 86] = "DATA_FORMAT_R16G16B16_SSCALED";
        DataFormat[DataFormat["DATA_FORMAT_R16G16B16_UINT"] = 87] = "DATA_FORMAT_R16G16B16_UINT";
        DataFormat[DataFormat["DATA_FORMAT_R16G16B16_SINT"] = 88] = "DATA_FORMAT_R16G16B16_SINT";
        DataFormat[DataFormat["DATA_FORMAT_R16G16B16_SFLOAT"] = 89] = "DATA_FORMAT_R16G16B16_SFLOAT";
        DataFormat[DataFormat["DATA_FORMAT_R16G16B16A16_UNORM"] = 90] = "DATA_FORMAT_R16G16B16A16_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_R16G16B16A16_SNORM"] = 91] = "DATA_FORMAT_R16G16B16A16_SNORM";
        DataFormat[DataFormat["DATA_FORMAT_R16G16B16A16_USCALED"] = 92] = "DATA_FORMAT_R16G16B16A16_USCALED";
        DataFormat[DataFormat["DATA_FORMAT_R16G16B16A16_SSCALED"] = 93] = "DATA_FORMAT_R16G16B16A16_SSCALED";
        DataFormat[DataFormat["DATA_FORMAT_R16G16B16A16_UINT"] = 94] = "DATA_FORMAT_R16G16B16A16_UINT";
        DataFormat[DataFormat["DATA_FORMAT_R16G16B16A16_SINT"] = 95] = "DATA_FORMAT_R16G16B16A16_SINT";
        DataFormat[DataFormat["DATA_FORMAT_R16G16B16A16_SFLOAT"] = 96] = "DATA_FORMAT_R16G16B16A16_SFLOAT";
        DataFormat[DataFormat["DATA_FORMAT_R32_UINT"] = 97] = "DATA_FORMAT_R32_UINT";
        DataFormat[DataFormat["DATA_FORMAT_R32_SINT"] = 98] = "DATA_FORMAT_R32_SINT";
        DataFormat[DataFormat["DATA_FORMAT_R32_SFLOAT"] = 99] = "DATA_FORMAT_R32_SFLOAT";
        DataFormat[DataFormat["DATA_FORMAT_R32G32_UINT"] = 100] = "DATA_FORMAT_R32G32_UINT";
        DataFormat[DataFormat["DATA_FORMAT_R32G32_SINT"] = 101] = "DATA_FORMAT_R32G32_SINT";
        DataFormat[DataFormat["DATA_FORMAT_R32G32_SFLOAT"] = 102] = "DATA_FORMAT_R32G32_SFLOAT";
        DataFormat[DataFormat["DATA_FORMAT_R32G32B32_UINT"] = 103] = "DATA_FORMAT_R32G32B32_UINT";
        DataFormat[DataFormat["DATA_FORMAT_R32G32B32_SINT"] = 104] = "DATA_FORMAT_R32G32B32_SINT";
        DataFormat[DataFormat["DATA_FORMAT_R32G32B32_SFLOAT"] = 105] = "DATA_FORMAT_R32G32B32_SFLOAT";
        DataFormat[DataFormat["DATA_FORMAT_R32G32B32A32_UINT"] = 106] = "DATA_FORMAT_R32G32B32A32_UINT";
        DataFormat[DataFormat["DATA_FORMAT_R32G32B32A32_SINT"] = 107] = "DATA_FORMAT_R32G32B32A32_SINT";
        DataFormat[DataFormat["DATA_FORMAT_R32G32B32A32_SFLOAT"] = 108] = "DATA_FORMAT_R32G32B32A32_SFLOAT";
        DataFormat[DataFormat["DATA_FORMAT_R64_UINT"] = 109] = "DATA_FORMAT_R64_UINT";
        DataFormat[DataFormat["DATA_FORMAT_R64_SINT"] = 110] = "DATA_FORMAT_R64_SINT";
        DataFormat[DataFormat["DATA_FORMAT_R64_SFLOAT"] = 111] = "DATA_FORMAT_R64_SFLOAT";
        DataFormat[DataFormat["DATA_FORMAT_R64G64_UINT"] = 112] = "DATA_FORMAT_R64G64_UINT";
        DataFormat[DataFormat["DATA_FORMAT_R64G64_SINT"] = 113] = "DATA_FORMAT_R64G64_SINT";
        DataFormat[DataFormat["DATA_FORMAT_R64G64_SFLOAT"] = 114] = "DATA_FORMAT_R64G64_SFLOAT";
        DataFormat[DataFormat["DATA_FORMAT_R64G64B64_UINT"] = 115] = "DATA_FORMAT_R64G64B64_UINT";
        DataFormat[DataFormat["DATA_FORMAT_R64G64B64_SINT"] = 116] = "DATA_FORMAT_R64G64B64_SINT";
        DataFormat[DataFormat["DATA_FORMAT_R64G64B64_SFLOAT"] = 117] = "DATA_FORMAT_R64G64B64_SFLOAT";
        DataFormat[DataFormat["DATA_FORMAT_R64G64B64A64_UINT"] = 118] = "DATA_FORMAT_R64G64B64A64_UINT";
        DataFormat[DataFormat["DATA_FORMAT_R64G64B64A64_SINT"] = 119] = "DATA_FORMAT_R64G64B64A64_SINT";
        DataFormat[DataFormat["DATA_FORMAT_R64G64B64A64_SFLOAT"] = 120] = "DATA_FORMAT_R64G64B64A64_SFLOAT";
        DataFormat[DataFormat["DATA_FORMAT_B10G11R11_UFLOAT_PACK32"] = 121] = "DATA_FORMAT_B10G11R11_UFLOAT_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_E5B9G9R9_UFLOAT_PACK32"] = 122] = "DATA_FORMAT_E5B9G9R9_UFLOAT_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_D16_UNORM"] = 123] = "DATA_FORMAT_D16_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_X8_D24_UNORM_PACK32"] = 124] = "DATA_FORMAT_X8_D24_UNORM_PACK32";
        DataFormat[DataFormat["DATA_FORMAT_D32_SFLOAT"] = 125] = "DATA_FORMAT_D32_SFLOAT";
        DataFormat[DataFormat["DATA_FORMAT_S8_UINT"] = 126] = "DATA_FORMAT_S8_UINT";
        DataFormat[DataFormat["DATA_FORMAT_D16_UNORM_S8_UINT"] = 127] = "DATA_FORMAT_D16_UNORM_S8_UINT";
        DataFormat[DataFormat["DATA_FORMAT_D24_UNORM_S8_UINT"] = 128] = "DATA_FORMAT_D24_UNORM_S8_UINT";
        DataFormat[DataFormat["DATA_FORMAT_D32_SFLOAT_S8_UINT"] = 129] = "DATA_FORMAT_D32_SFLOAT_S8_UINT";
        DataFormat[DataFormat["DATA_FORMAT_BC1_RGB_UNORM_BLOCK"] = 130] = "DATA_FORMAT_BC1_RGB_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_BC1_RGB_SRGB_BLOCK"] = 131] = "DATA_FORMAT_BC1_RGB_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_BC1_RGBA_UNORM_BLOCK"] = 132] = "DATA_FORMAT_BC1_RGBA_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_BC1_RGBA_SRGB_BLOCK"] = 133] = "DATA_FORMAT_BC1_RGBA_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_BC2_UNORM_BLOCK"] = 134] = "DATA_FORMAT_BC2_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_BC2_SRGB_BLOCK"] = 135] = "DATA_FORMAT_BC2_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_BC3_UNORM_BLOCK"] = 136] = "DATA_FORMAT_BC3_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_BC3_SRGB_BLOCK"] = 137] = "DATA_FORMAT_BC3_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_BC4_UNORM_BLOCK"] = 138] = "DATA_FORMAT_BC4_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_BC4_SNORM_BLOCK"] = 139] = "DATA_FORMAT_BC4_SNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_BC5_UNORM_BLOCK"] = 140] = "DATA_FORMAT_BC5_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_BC5_SNORM_BLOCK"] = 141] = "DATA_FORMAT_BC5_SNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_BC6H_UFLOAT_BLOCK"] = 142] = "DATA_FORMAT_BC6H_UFLOAT_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_BC6H_SFLOAT_BLOCK"] = 143] = "DATA_FORMAT_BC6H_SFLOAT_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_BC7_UNORM_BLOCK"] = 144] = "DATA_FORMAT_BC7_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_BC7_SRGB_BLOCK"] = 145] = "DATA_FORMAT_BC7_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ETC2_R8G8B8_UNORM_BLOCK"] = 146] = "DATA_FORMAT_ETC2_R8G8B8_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ETC2_R8G8B8_SRGB_BLOCK"] = 147] = "DATA_FORMAT_ETC2_R8G8B8_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK"] = 148] = "DATA_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK"] = 149] = "DATA_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK"] = 150] = "DATA_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK"] = 151] = "DATA_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_EAC_R11_UNORM_BLOCK"] = 152] = "DATA_FORMAT_EAC_R11_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_EAC_R11_SNORM_BLOCK"] = 153] = "DATA_FORMAT_EAC_R11_SNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_EAC_R11G11_UNORM_BLOCK"] = 154] = "DATA_FORMAT_EAC_R11G11_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_EAC_R11G11_SNORM_BLOCK"] = 155] = "DATA_FORMAT_EAC_R11G11_SNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_4x4_UNORM_BLOCK"] = 156] = "DATA_FORMAT_ASTC_4x4_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_4x4_SRGB_BLOCK"] = 157] = "DATA_FORMAT_ASTC_4x4_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_5x4_UNORM_BLOCK"] = 158] = "DATA_FORMAT_ASTC_5x4_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_5x4_SRGB_BLOCK"] = 159] = "DATA_FORMAT_ASTC_5x4_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_5x5_UNORM_BLOCK"] = 160] = "DATA_FORMAT_ASTC_5x5_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_5x5_SRGB_BLOCK"] = 161] = "DATA_FORMAT_ASTC_5x5_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_6x5_UNORM_BLOCK"] = 162] = "DATA_FORMAT_ASTC_6x5_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_6x5_SRGB_BLOCK"] = 163] = "DATA_FORMAT_ASTC_6x5_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_6x6_UNORM_BLOCK"] = 164] = "DATA_FORMAT_ASTC_6x6_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_6x6_SRGB_BLOCK"] = 165] = "DATA_FORMAT_ASTC_6x6_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_8x5_UNORM_BLOCK"] = 166] = "DATA_FORMAT_ASTC_8x5_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_8x5_SRGB_BLOCK"] = 167] = "DATA_FORMAT_ASTC_8x5_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_8x6_UNORM_BLOCK"] = 168] = "DATA_FORMAT_ASTC_8x6_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_8x6_SRGB_BLOCK"] = 169] = "DATA_FORMAT_ASTC_8x6_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_8x8_UNORM_BLOCK"] = 170] = "DATA_FORMAT_ASTC_8x8_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_8x8_SRGB_BLOCK"] = 171] = "DATA_FORMAT_ASTC_8x8_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_10x5_UNORM_BLOCK"] = 172] = "DATA_FORMAT_ASTC_10x5_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_10x5_SRGB_BLOCK"] = 173] = "DATA_FORMAT_ASTC_10x5_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_10x6_UNORM_BLOCK"] = 174] = "DATA_FORMAT_ASTC_10x6_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_10x6_SRGB_BLOCK"] = 175] = "DATA_FORMAT_ASTC_10x6_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_10x8_UNORM_BLOCK"] = 176] = "DATA_FORMAT_ASTC_10x8_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_10x8_SRGB_BLOCK"] = 177] = "DATA_FORMAT_ASTC_10x8_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_10x10_UNORM_BLOCK"] = 178] = "DATA_FORMAT_ASTC_10x10_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_10x10_SRGB_BLOCK"] = 179] = "DATA_FORMAT_ASTC_10x10_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_12x10_UNORM_BLOCK"] = 180] = "DATA_FORMAT_ASTC_12x10_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_12x10_SRGB_BLOCK"] = 181] = "DATA_FORMAT_ASTC_12x10_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_12x12_UNORM_BLOCK"] = 182] = "DATA_FORMAT_ASTC_12x12_UNORM_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_ASTC_12x12_SRGB_BLOCK"] = 183] = "DATA_FORMAT_ASTC_12x12_SRGB_BLOCK";
        DataFormat[DataFormat["DATA_FORMAT_G8B8G8R8_422_UNORM"] = 184] = "DATA_FORMAT_G8B8G8R8_422_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_B8G8R8G8_422_UNORM"] = 185] = "DATA_FORMAT_B8G8R8G8_422_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_G8_B8_R8_3PLANE_420_UNORM"] = 186] = "DATA_FORMAT_G8_B8_R8_3PLANE_420_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_G8_B8R8_2PLANE_420_UNORM"] = 187] = "DATA_FORMAT_G8_B8R8_2PLANE_420_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_G8_B8_R8_3PLANE_422_UNORM"] = 188] = "DATA_FORMAT_G8_B8_R8_3PLANE_422_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_G8_B8R8_2PLANE_422_UNORM"] = 189] = "DATA_FORMAT_G8_B8R8_2PLANE_422_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_G8_B8_R8_3PLANE_444_UNORM"] = 190] = "DATA_FORMAT_G8_B8_R8_3PLANE_444_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_R10X6_UNORM_PACK16"] = 191] = "DATA_FORMAT_R10X6_UNORM_PACK16";
        DataFormat[DataFormat["DATA_FORMAT_R10X6G10X6_UNORM_2PACK16"] = 192] = "DATA_FORMAT_R10X6G10X6_UNORM_2PACK16";
        DataFormat[DataFormat["DATA_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16"] = 193] = "DATA_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16";
        DataFormat[DataFormat["DATA_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16"] = 194] = "DATA_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16";
        DataFormat[DataFormat["DATA_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16"] = 195] = "DATA_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16";
        DataFormat[DataFormat["DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16"] = 196] = "DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16";
        DataFormat[DataFormat["DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16"] = 197] = "DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16";
        DataFormat[DataFormat["DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16"] = 198] = "DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16";
        DataFormat[DataFormat["DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16"] = 199] = "DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16";
        DataFormat[DataFormat["DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16"] = 200] = "DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16";
        DataFormat[DataFormat["DATA_FORMAT_R12X4_UNORM_PACK16"] = 201] = "DATA_FORMAT_R12X4_UNORM_PACK16";
        DataFormat[DataFormat["DATA_FORMAT_R12X4G12X4_UNORM_2PACK16"] = 202] = "DATA_FORMAT_R12X4G12X4_UNORM_2PACK16";
        DataFormat[DataFormat["DATA_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16"] = 203] = "DATA_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16";
        DataFormat[DataFormat["DATA_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16"] = 204] = "DATA_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16";
        DataFormat[DataFormat["DATA_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16"] = 205] = "DATA_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16";
        DataFormat[DataFormat["DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16"] = 206] = "DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16";
        DataFormat[DataFormat["DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16"] = 207] = "DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16";
        DataFormat[DataFormat["DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16"] = 208] = "DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16";
        DataFormat[DataFormat["DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16"] = 209] = "DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16";
        DataFormat[DataFormat["DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16"] = 210] = "DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16";
        DataFormat[DataFormat["DATA_FORMAT_G16B16G16R16_422_UNORM"] = 211] = "DATA_FORMAT_G16B16G16R16_422_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_B16G16R16G16_422_UNORM"] = 212] = "DATA_FORMAT_B16G16R16G16_422_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_G16_B16_R16_3PLANE_420_UNORM"] = 213] = "DATA_FORMAT_G16_B16_R16_3PLANE_420_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_G16_B16R16_2PLANE_420_UNORM"] = 214] = "DATA_FORMAT_G16_B16R16_2PLANE_420_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_G16_B16_R16_3PLANE_422_UNORM"] = 215] = "DATA_FORMAT_G16_B16_R16_3PLANE_422_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_G16_B16R16_2PLANE_422_UNORM"] = 216] = "DATA_FORMAT_G16_B16R16_2PLANE_422_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_G16_B16_R16_3PLANE_444_UNORM"] = 217] = "DATA_FORMAT_G16_B16_R16_3PLANE_444_UNORM";
        DataFormat[DataFormat["DATA_FORMAT_MAX"] = 218] = "DATA_FORMAT_MAX";
    })(DataFormat = RenderingDevice.DataFormat || (RenderingDevice.DataFormat = {}));
    let BarrierMask;
    (function (BarrierMask) {
        BarrierMask[BarrierMask["BARRIER_MASK_VERTEX"] = 1] = "BARRIER_MASK_VERTEX";
        BarrierMask[BarrierMask["BARRIER_MASK_FRAGMENT"] = 8] = "BARRIER_MASK_FRAGMENT";
        BarrierMask[BarrierMask["BARRIER_MASK_COMPUTE"] = 2] = "BARRIER_MASK_COMPUTE";
        BarrierMask[BarrierMask["BARRIER_MASK_TRANSFER"] = 4] = "BARRIER_MASK_TRANSFER";
        BarrierMask[BarrierMask["BARRIER_MASK_RASTER"] = 9] = "BARRIER_MASK_RASTER";
        BarrierMask[BarrierMask["BARRIER_MASK_ALL_BARRIERS"] = 32767] = "BARRIER_MASK_ALL_BARRIERS";
        BarrierMask[BarrierMask["BARRIER_MASK_NO_BARRIER"] = 32768] = "BARRIER_MASK_NO_BARRIER";
    })(BarrierMask = RenderingDevice.BarrierMask || (RenderingDevice.BarrierMask = {}));
    let TextureType;
    (function (TextureType) {
        TextureType[TextureType["TEXTURE_TYPE_1D"] = 0] = "TEXTURE_TYPE_1D";
        TextureType[TextureType["TEXTURE_TYPE_2D"] = 1] = "TEXTURE_TYPE_2D";
        TextureType[TextureType["TEXTURE_TYPE_3D"] = 2] = "TEXTURE_TYPE_3D";
        TextureType[TextureType["TEXTURE_TYPE_CUBE"] = 3] = "TEXTURE_TYPE_CUBE";
        TextureType[TextureType["TEXTURE_TYPE_1D_ARRAY"] = 4] = "TEXTURE_TYPE_1D_ARRAY";
        TextureType[TextureType["TEXTURE_TYPE_2D_ARRAY"] = 5] = "TEXTURE_TYPE_2D_ARRAY";
        TextureType[TextureType["TEXTURE_TYPE_CUBE_ARRAY"] = 6] = "TEXTURE_TYPE_CUBE_ARRAY";
        TextureType[TextureType["TEXTURE_TYPE_MAX"] = 7] = "TEXTURE_TYPE_MAX";
    })(TextureType = RenderingDevice.TextureType || (RenderingDevice.TextureType = {}));
    let TextureSamples;
    (function (TextureSamples) {
        TextureSamples[TextureSamples["TEXTURE_SAMPLES_1"] = 0] = "TEXTURE_SAMPLES_1";
        TextureSamples[TextureSamples["TEXTURE_SAMPLES_2"] = 1] = "TEXTURE_SAMPLES_2";
        TextureSamples[TextureSamples["TEXTURE_SAMPLES_4"] = 2] = "TEXTURE_SAMPLES_4";
        TextureSamples[TextureSamples["TEXTURE_SAMPLES_8"] = 3] = "TEXTURE_SAMPLES_8";
        TextureSamples[TextureSamples["TEXTURE_SAMPLES_16"] = 4] = "TEXTURE_SAMPLES_16";
        TextureSamples[TextureSamples["TEXTURE_SAMPLES_32"] = 5] = "TEXTURE_SAMPLES_32";
        TextureSamples[TextureSamples["TEXTURE_SAMPLES_64"] = 6] = "TEXTURE_SAMPLES_64";
        TextureSamples[TextureSamples["TEXTURE_SAMPLES_MAX"] = 7] = "TEXTURE_SAMPLES_MAX";
    })(TextureSamples = RenderingDevice.TextureSamples || (RenderingDevice.TextureSamples = {}));
    let TextureUsageBits;
    (function (TextureUsageBits) {
        TextureUsageBits[TextureUsageBits["TEXTURE_USAGE_SAMPLING_BIT"] = 1] = "TEXTURE_USAGE_SAMPLING_BIT";
        TextureUsageBits[TextureUsageBits["TEXTURE_USAGE_COLOR_ATTACHMENT_BIT"] = 2] = "TEXTURE_USAGE_COLOR_ATTACHMENT_BIT";
        TextureUsageBits[TextureUsageBits["TEXTURE_USAGE_DEPTH_STENCIL_ATTACHMENT_BIT"] = 4] = "TEXTURE_USAGE_DEPTH_STENCIL_ATTACHMENT_BIT";
        TextureUsageBits[TextureUsageBits["TEXTURE_USAGE_STORAGE_BIT"] = 8] = "TEXTURE_USAGE_STORAGE_BIT";
        TextureUsageBits[TextureUsageBits["TEXTURE_USAGE_STORAGE_ATOMIC_BIT"] = 16] = "TEXTURE_USAGE_STORAGE_ATOMIC_BIT";
        TextureUsageBits[TextureUsageBits["TEXTURE_USAGE_CPU_READ_BIT"] = 32] = "TEXTURE_USAGE_CPU_READ_BIT";
        TextureUsageBits[TextureUsageBits["TEXTURE_USAGE_CAN_UPDATE_BIT"] = 64] = "TEXTURE_USAGE_CAN_UPDATE_BIT";
        TextureUsageBits[TextureUsageBits["TEXTURE_USAGE_CAN_COPY_FROM_BIT"] = 128] = "TEXTURE_USAGE_CAN_COPY_FROM_BIT";
        TextureUsageBits[TextureUsageBits["TEXTURE_USAGE_CAN_COPY_TO_BIT"] = 256] = "TEXTURE_USAGE_CAN_COPY_TO_BIT";
        TextureUsageBits[TextureUsageBits["TEXTURE_USAGE_INPUT_ATTACHMENT_BIT"] = 512] = "TEXTURE_USAGE_INPUT_ATTACHMENT_BIT";
    })(TextureUsageBits = RenderingDevice.TextureUsageBits || (RenderingDevice.TextureUsageBits = {}));
    let TextureSwizzle;
    (function (TextureSwizzle) {
        TextureSwizzle[TextureSwizzle["TEXTURE_SWIZZLE_IDENTITY"] = 0] = "TEXTURE_SWIZZLE_IDENTITY";
        TextureSwizzle[TextureSwizzle["TEXTURE_SWIZZLE_ZERO"] = 1] = "TEXTURE_SWIZZLE_ZERO";
        TextureSwizzle[TextureSwizzle["TEXTURE_SWIZZLE_ONE"] = 2] = "TEXTURE_SWIZZLE_ONE";
        TextureSwizzle[TextureSwizzle["TEXTURE_SWIZZLE_R"] = 3] = "TEXTURE_SWIZZLE_R";
        TextureSwizzle[TextureSwizzle["TEXTURE_SWIZZLE_G"] = 4] = "TEXTURE_SWIZZLE_G";
        TextureSwizzle[TextureSwizzle["TEXTURE_SWIZZLE_B"] = 5] = "TEXTURE_SWIZZLE_B";
        TextureSwizzle[TextureSwizzle["TEXTURE_SWIZZLE_A"] = 6] = "TEXTURE_SWIZZLE_A";
        TextureSwizzle[TextureSwizzle["TEXTURE_SWIZZLE_MAX"] = 7] = "TEXTURE_SWIZZLE_MAX";
    })(TextureSwizzle = RenderingDevice.TextureSwizzle || (RenderingDevice.TextureSwizzle = {}));
    let TextureSliceType;
    (function (TextureSliceType) {
        TextureSliceType[TextureSliceType["TEXTURE_SLICE_2D"] = 0] = "TEXTURE_SLICE_2D";
        TextureSliceType[TextureSliceType["TEXTURE_SLICE_CUBEMAP"] = 1] = "TEXTURE_SLICE_CUBEMAP";
        TextureSliceType[TextureSliceType["TEXTURE_SLICE_3D"] = 2] = "TEXTURE_SLICE_3D";
    })(TextureSliceType = RenderingDevice.TextureSliceType || (RenderingDevice.TextureSliceType = {}));
    let SamplerFilter;
    (function (SamplerFilter) {
        SamplerFilter[SamplerFilter["SAMPLER_FILTER_NEAREST"] = 0] = "SAMPLER_FILTER_NEAREST";
        SamplerFilter[SamplerFilter["SAMPLER_FILTER_LINEAR"] = 1] = "SAMPLER_FILTER_LINEAR";
    })(SamplerFilter = RenderingDevice.SamplerFilter || (RenderingDevice.SamplerFilter = {}));
    let SamplerRepeatMode;
    (function (SamplerRepeatMode) {
        SamplerRepeatMode[SamplerRepeatMode["SAMPLER_REPEAT_MODE_REPEAT"] = 0] = "SAMPLER_REPEAT_MODE_REPEAT";
        SamplerRepeatMode[SamplerRepeatMode["SAMPLER_REPEAT_MODE_MIRRORED_REPEAT"] = 1] = "SAMPLER_REPEAT_MODE_MIRRORED_REPEAT";
        SamplerRepeatMode[SamplerRepeatMode["SAMPLER_REPEAT_MODE_CLAMP_TO_EDGE"] = 2] = "SAMPLER_REPEAT_MODE_CLAMP_TO_EDGE";
        SamplerRepeatMode[SamplerRepeatMode["SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER"] = 3] = "SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER";
        SamplerRepeatMode[SamplerRepeatMode["SAMPLER_REPEAT_MODE_MIRROR_CLAMP_TO_EDGE"] = 4] = "SAMPLER_REPEAT_MODE_MIRROR_CLAMP_TO_EDGE";
        SamplerRepeatMode[SamplerRepeatMode["SAMPLER_REPEAT_MODE_MAX"] = 5] = "SAMPLER_REPEAT_MODE_MAX";
    })(SamplerRepeatMode = RenderingDevice.SamplerRepeatMode || (RenderingDevice.SamplerRepeatMode = {}));
    let SamplerBorderColor;
    (function (SamplerBorderColor) {
        SamplerBorderColor[SamplerBorderColor["SAMPLER_BORDER_COLOR_FLOAT_TRANSPARENT_BLACK"] = 0] = "SAMPLER_BORDER_COLOR_FLOAT_TRANSPARENT_BLACK";
        SamplerBorderColor[SamplerBorderColor["SAMPLER_BORDER_COLOR_INT_TRANSPARENT_BLACK"] = 1] = "SAMPLER_BORDER_COLOR_INT_TRANSPARENT_BLACK";
        SamplerBorderColor[SamplerBorderColor["SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_BLACK"] = 2] = "SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_BLACK";
        SamplerBorderColor[SamplerBorderColor["SAMPLER_BORDER_COLOR_INT_OPAQUE_BLACK"] = 3] = "SAMPLER_BORDER_COLOR_INT_OPAQUE_BLACK";
        SamplerBorderColor[SamplerBorderColor["SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_WHITE"] = 4] = "SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_WHITE";
        SamplerBorderColor[SamplerBorderColor["SAMPLER_BORDER_COLOR_INT_OPAQUE_WHITE"] = 5] = "SAMPLER_BORDER_COLOR_INT_OPAQUE_WHITE";
        SamplerBorderColor[SamplerBorderColor["SAMPLER_BORDER_COLOR_MAX"] = 6] = "SAMPLER_BORDER_COLOR_MAX";
    })(SamplerBorderColor = RenderingDevice.SamplerBorderColor || (RenderingDevice.SamplerBorderColor = {}));
    let VertexFrequency;
    (function (VertexFrequency) {
        VertexFrequency[VertexFrequency["VERTEX_FREQUENCY_VERTEX"] = 0] = "VERTEX_FREQUENCY_VERTEX";
        VertexFrequency[VertexFrequency["VERTEX_FREQUENCY_INSTANCE"] = 1] = "VERTEX_FREQUENCY_INSTANCE";
    })(VertexFrequency = RenderingDevice.VertexFrequency || (RenderingDevice.VertexFrequency = {}));
    let IndexBufferFormat;
    (function (IndexBufferFormat) {
        IndexBufferFormat[IndexBufferFormat["INDEX_BUFFER_FORMAT_UINT16"] = 0] = "INDEX_BUFFER_FORMAT_UINT16";
        IndexBufferFormat[IndexBufferFormat["INDEX_BUFFER_FORMAT_UINT32"] = 1] = "INDEX_BUFFER_FORMAT_UINT32";
    })(IndexBufferFormat = RenderingDevice.IndexBufferFormat || (RenderingDevice.IndexBufferFormat = {}));
    let StorageBufferUsage;
    (function (StorageBufferUsage) {
        StorageBufferUsage[StorageBufferUsage["STORAGE_BUFFER_USAGE_DISPATCH_INDIRECT"] = 1] = "STORAGE_BUFFER_USAGE_DISPATCH_INDIRECT";
    })(StorageBufferUsage = RenderingDevice.StorageBufferUsage || (RenderingDevice.StorageBufferUsage = {}));
    let UniformType;
    (function (UniformType) {
        UniformType[UniformType["UNIFORM_TYPE_SAMPLER"] = 0] = "UNIFORM_TYPE_SAMPLER";
        UniformType[UniformType["UNIFORM_TYPE_SAMPLER_WITH_TEXTURE"] = 1] = "UNIFORM_TYPE_SAMPLER_WITH_TEXTURE";
        UniformType[UniformType["UNIFORM_TYPE_TEXTURE"] = 2] = "UNIFORM_TYPE_TEXTURE";
        UniformType[UniformType["UNIFORM_TYPE_IMAGE"] = 3] = "UNIFORM_TYPE_IMAGE";
        UniformType[UniformType["UNIFORM_TYPE_TEXTURE_BUFFER"] = 4] = "UNIFORM_TYPE_TEXTURE_BUFFER";
        UniformType[UniformType["UNIFORM_TYPE_SAMPLER_WITH_TEXTURE_BUFFER"] = 5] = "UNIFORM_TYPE_SAMPLER_WITH_TEXTURE_BUFFER";
        UniformType[UniformType["UNIFORM_TYPE_IMAGE_BUFFER"] = 6] = "UNIFORM_TYPE_IMAGE_BUFFER";
        UniformType[UniformType["UNIFORM_TYPE_UNIFORM_BUFFER"] = 7] = "UNIFORM_TYPE_UNIFORM_BUFFER";
        UniformType[UniformType["UNIFORM_TYPE_STORAGE_BUFFER"] = 8] = "UNIFORM_TYPE_STORAGE_BUFFER";
        UniformType[UniformType["UNIFORM_TYPE_INPUT_ATTACHMENT"] = 9] = "UNIFORM_TYPE_INPUT_ATTACHMENT";
        UniformType[UniformType["UNIFORM_TYPE_MAX"] = 10] = "UNIFORM_TYPE_MAX";
    })(UniformType = RenderingDevice.UniformType || (RenderingDevice.UniformType = {}));
    let RenderPrimitive;
    (function (RenderPrimitive) {
        RenderPrimitive[RenderPrimitive["RENDER_PRIMITIVE_POINTS"] = 0] = "RENDER_PRIMITIVE_POINTS";
        RenderPrimitive[RenderPrimitive["RENDER_PRIMITIVE_LINES"] = 1] = "RENDER_PRIMITIVE_LINES";
        RenderPrimitive[RenderPrimitive["RENDER_PRIMITIVE_LINES_WITH_ADJACENCY"] = 2] = "RENDER_PRIMITIVE_LINES_WITH_ADJACENCY";
        RenderPrimitive[RenderPrimitive["RENDER_PRIMITIVE_LINESTRIPS"] = 3] = "RENDER_PRIMITIVE_LINESTRIPS";
        RenderPrimitive[RenderPrimitive["RENDER_PRIMITIVE_LINESTRIPS_WITH_ADJACENCY"] = 4] = "RENDER_PRIMITIVE_LINESTRIPS_WITH_ADJACENCY";
        RenderPrimitive[RenderPrimitive["RENDER_PRIMITIVE_TRIANGLES"] = 5] = "RENDER_PRIMITIVE_TRIANGLES";
        RenderPrimitive[RenderPrimitive["RENDER_PRIMITIVE_TRIANGLES_WITH_ADJACENCY"] = 6] = "RENDER_PRIMITIVE_TRIANGLES_WITH_ADJACENCY";
        RenderPrimitive[RenderPrimitive["RENDER_PRIMITIVE_TRIANGLE_STRIPS"] = 7] = "RENDER_PRIMITIVE_TRIANGLE_STRIPS";
        RenderPrimitive[RenderPrimitive["RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_AJACENCY"] = 8] = "RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_AJACENCY";
        RenderPrimitive[RenderPrimitive["RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_RESTART_INDEX"] = 9] = "RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_RESTART_INDEX";
        RenderPrimitive[RenderPrimitive["RENDER_PRIMITIVE_TESSELATION_PATCH"] = 10] = "RENDER_PRIMITIVE_TESSELATION_PATCH";
        RenderPrimitive[RenderPrimitive["RENDER_PRIMITIVE_MAX"] = 11] = "RENDER_PRIMITIVE_MAX";
    })(RenderPrimitive = RenderingDevice.RenderPrimitive || (RenderingDevice.RenderPrimitive = {}));
    let PolygonCullMode;
    (function (PolygonCullMode) {
        PolygonCullMode[PolygonCullMode["POLYGON_CULL_DISABLED"] = 0] = "POLYGON_CULL_DISABLED";
        PolygonCullMode[PolygonCullMode["POLYGON_CULL_FRONT"] = 1] = "POLYGON_CULL_FRONT";
        PolygonCullMode[PolygonCullMode["POLYGON_CULL_BACK"] = 2] = "POLYGON_CULL_BACK";
    })(PolygonCullMode = RenderingDevice.PolygonCullMode || (RenderingDevice.PolygonCullMode = {}));
    let PolygonFrontFace;
    (function (PolygonFrontFace) {
        PolygonFrontFace[PolygonFrontFace["POLYGON_FRONT_FACE_CLOCKWISE"] = 0] = "POLYGON_FRONT_FACE_CLOCKWISE";
        PolygonFrontFace[PolygonFrontFace["POLYGON_FRONT_FACE_COUNTER_CLOCKWISE"] = 1] = "POLYGON_FRONT_FACE_COUNTER_CLOCKWISE";
    })(PolygonFrontFace = RenderingDevice.PolygonFrontFace || (RenderingDevice.PolygonFrontFace = {}));
    let StencilOperation;
    (function (StencilOperation) {
        StencilOperation[StencilOperation["STENCIL_OP_KEEP"] = 0] = "STENCIL_OP_KEEP";
        StencilOperation[StencilOperation["STENCIL_OP_ZERO"] = 1] = "STENCIL_OP_ZERO";
        StencilOperation[StencilOperation["STENCIL_OP_REPLACE"] = 2] = "STENCIL_OP_REPLACE";
        StencilOperation[StencilOperation["STENCIL_OP_INCREMENT_AND_CLAMP"] = 3] = "STENCIL_OP_INCREMENT_AND_CLAMP";
        StencilOperation[StencilOperation["STENCIL_OP_DECREMENT_AND_CLAMP"] = 4] = "STENCIL_OP_DECREMENT_AND_CLAMP";
        StencilOperation[StencilOperation["STENCIL_OP_INVERT"] = 5] = "STENCIL_OP_INVERT";
        StencilOperation[StencilOperation["STENCIL_OP_INCREMENT_AND_WRAP"] = 6] = "STENCIL_OP_INCREMENT_AND_WRAP";
        StencilOperation[StencilOperation["STENCIL_OP_DECREMENT_AND_WRAP"] = 7] = "STENCIL_OP_DECREMENT_AND_WRAP";
        StencilOperation[StencilOperation["STENCIL_OP_MAX"] = 8] = "STENCIL_OP_MAX";
    })(StencilOperation = RenderingDevice.StencilOperation || (RenderingDevice.StencilOperation = {}));
    let CompareOperator;
    (function (CompareOperator) {
        CompareOperator[CompareOperator["COMPARE_OP_NEVER"] = 0] = "COMPARE_OP_NEVER";
        CompareOperator[CompareOperator["COMPARE_OP_LESS"] = 1] = "COMPARE_OP_LESS";
        CompareOperator[CompareOperator["COMPARE_OP_EQUAL"] = 2] = "COMPARE_OP_EQUAL";
        CompareOperator[CompareOperator["COMPARE_OP_LESS_OR_EQUAL"] = 3] = "COMPARE_OP_LESS_OR_EQUAL";
        CompareOperator[CompareOperator["COMPARE_OP_GREATER"] = 4] = "COMPARE_OP_GREATER";
        CompareOperator[CompareOperator["COMPARE_OP_NOT_EQUAL"] = 5] = "COMPARE_OP_NOT_EQUAL";
        CompareOperator[CompareOperator["COMPARE_OP_GREATER_OR_EQUAL"] = 6] = "COMPARE_OP_GREATER_OR_EQUAL";
        CompareOperator[CompareOperator["COMPARE_OP_ALWAYS"] = 7] = "COMPARE_OP_ALWAYS";
        CompareOperator[CompareOperator["COMPARE_OP_MAX"] = 8] = "COMPARE_OP_MAX";
    })(CompareOperator = RenderingDevice.CompareOperator || (RenderingDevice.CompareOperator = {}));
    let LogicOperation;
    (function (LogicOperation) {
        LogicOperation[LogicOperation["LOGIC_OP_CLEAR"] = 0] = "LOGIC_OP_CLEAR";
        LogicOperation[LogicOperation["LOGIC_OP_AND"] = 1] = "LOGIC_OP_AND";
        LogicOperation[LogicOperation["LOGIC_OP_AND_REVERSE"] = 2] = "LOGIC_OP_AND_REVERSE";
        LogicOperation[LogicOperation["LOGIC_OP_COPY"] = 3] = "LOGIC_OP_COPY";
        LogicOperation[LogicOperation["LOGIC_OP_AND_INVERTED"] = 4] = "LOGIC_OP_AND_INVERTED";
        LogicOperation[LogicOperation["LOGIC_OP_NO_OP"] = 5] = "LOGIC_OP_NO_OP";
        LogicOperation[LogicOperation["LOGIC_OP_XOR"] = 6] = "LOGIC_OP_XOR";
        LogicOperation[LogicOperation["LOGIC_OP_OR"] = 7] = "LOGIC_OP_OR";
        LogicOperation[LogicOperation["LOGIC_OP_NOR"] = 8] = "LOGIC_OP_NOR";
        LogicOperation[LogicOperation["LOGIC_OP_EQUIVALENT"] = 9] = "LOGIC_OP_EQUIVALENT";
        LogicOperation[LogicOperation["LOGIC_OP_INVERT"] = 10] = "LOGIC_OP_INVERT";
        LogicOperation[LogicOperation["LOGIC_OP_OR_REVERSE"] = 11] = "LOGIC_OP_OR_REVERSE";
        LogicOperation[LogicOperation["LOGIC_OP_COPY_INVERTED"] = 12] = "LOGIC_OP_COPY_INVERTED";
        LogicOperation[LogicOperation["LOGIC_OP_OR_INVERTED"] = 13] = "LOGIC_OP_OR_INVERTED";
        LogicOperation[LogicOperation["LOGIC_OP_NAND"] = 14] = "LOGIC_OP_NAND";
        LogicOperation[LogicOperation["LOGIC_OP_SET"] = 15] = "LOGIC_OP_SET";
        LogicOperation[LogicOperation["LOGIC_OP_MAX"] = 16] = "LOGIC_OP_MAX";
    })(LogicOperation = RenderingDevice.LogicOperation || (RenderingDevice.LogicOperation = {}));
    let BlendFactor;
    (function (BlendFactor) {
        BlendFactor[BlendFactor["BLEND_FACTOR_ZERO"] = 0] = "BLEND_FACTOR_ZERO";
        BlendFactor[BlendFactor["BLEND_FACTOR_ONE"] = 1] = "BLEND_FACTOR_ONE";
        BlendFactor[BlendFactor["BLEND_FACTOR_SRC_COLOR"] = 2] = "BLEND_FACTOR_SRC_COLOR";
        BlendFactor[BlendFactor["BLEND_FACTOR_ONE_MINUS_SRC_COLOR"] = 3] = "BLEND_FACTOR_ONE_MINUS_SRC_COLOR";
        BlendFactor[BlendFactor["BLEND_FACTOR_DST_COLOR"] = 4] = "BLEND_FACTOR_DST_COLOR";
        BlendFactor[BlendFactor["BLEND_FACTOR_ONE_MINUS_DST_COLOR"] = 5] = "BLEND_FACTOR_ONE_MINUS_DST_COLOR";
        BlendFactor[BlendFactor["BLEND_FACTOR_SRC_ALPHA"] = 6] = "BLEND_FACTOR_SRC_ALPHA";
        BlendFactor[BlendFactor["BLEND_FACTOR_ONE_MINUS_SRC_ALPHA"] = 7] = "BLEND_FACTOR_ONE_MINUS_SRC_ALPHA";
        BlendFactor[BlendFactor["BLEND_FACTOR_DST_ALPHA"] = 8] = "BLEND_FACTOR_DST_ALPHA";
        BlendFactor[BlendFactor["BLEND_FACTOR_ONE_MINUS_DST_ALPHA"] = 9] = "BLEND_FACTOR_ONE_MINUS_DST_ALPHA";
        BlendFactor[BlendFactor["BLEND_FACTOR_CONSTANT_COLOR"] = 10] = "BLEND_FACTOR_CONSTANT_COLOR";
        BlendFactor[BlendFactor["BLEND_FACTOR_ONE_MINUS_CONSTANT_COLOR"] = 11] = "BLEND_FACTOR_ONE_MINUS_CONSTANT_COLOR";
        BlendFactor[BlendFactor["BLEND_FACTOR_CONSTANT_ALPHA"] = 12] = "BLEND_FACTOR_CONSTANT_ALPHA";
        BlendFactor[BlendFactor["BLEND_FACTOR_ONE_MINUS_CONSTANT_ALPHA"] = 13] = "BLEND_FACTOR_ONE_MINUS_CONSTANT_ALPHA";
        BlendFactor[BlendFactor["BLEND_FACTOR_SRC_ALPHA_SATURATE"] = 14] = "BLEND_FACTOR_SRC_ALPHA_SATURATE";
        BlendFactor[BlendFactor["BLEND_FACTOR_SRC1_COLOR"] = 15] = "BLEND_FACTOR_SRC1_COLOR";
        BlendFactor[BlendFactor["BLEND_FACTOR_ONE_MINUS_SRC1_COLOR"] = 16] = "BLEND_FACTOR_ONE_MINUS_SRC1_COLOR";
        BlendFactor[BlendFactor["BLEND_FACTOR_SRC1_ALPHA"] = 17] = "BLEND_FACTOR_SRC1_ALPHA";
        BlendFactor[BlendFactor["BLEND_FACTOR_ONE_MINUS_SRC1_ALPHA"] = 18] = "BLEND_FACTOR_ONE_MINUS_SRC1_ALPHA";
        BlendFactor[BlendFactor["BLEND_FACTOR_MAX"] = 19] = "BLEND_FACTOR_MAX";
    })(BlendFactor = RenderingDevice.BlendFactor || (RenderingDevice.BlendFactor = {}));
    let BlendOperation;
    (function (BlendOperation) {
        BlendOperation[BlendOperation["BLEND_OP_ADD"] = 0] = "BLEND_OP_ADD";
        BlendOperation[BlendOperation["BLEND_OP_SUBTRACT"] = 1] = "BLEND_OP_SUBTRACT";
        BlendOperation[BlendOperation["BLEND_OP_REVERSE_SUBTRACT"] = 2] = "BLEND_OP_REVERSE_SUBTRACT";
        BlendOperation[BlendOperation["BLEND_OP_MINIMUM"] = 3] = "BLEND_OP_MINIMUM";
        BlendOperation[BlendOperation["BLEND_OP_MAXIMUM"] = 4] = "BLEND_OP_MAXIMUM";
        BlendOperation[BlendOperation["BLEND_OP_MAX"] = 5] = "BLEND_OP_MAX";
    })(BlendOperation = RenderingDevice.BlendOperation || (RenderingDevice.BlendOperation = {}));
    let PipelineDynamicStateFlags;
    (function (PipelineDynamicStateFlags) {
        PipelineDynamicStateFlags[PipelineDynamicStateFlags["DYNAMIC_STATE_LINE_WIDTH"] = 1] = "DYNAMIC_STATE_LINE_WIDTH";
        PipelineDynamicStateFlags[PipelineDynamicStateFlags["DYNAMIC_STATE_DEPTH_BIAS"] = 2] = "DYNAMIC_STATE_DEPTH_BIAS";
        PipelineDynamicStateFlags[PipelineDynamicStateFlags["DYNAMIC_STATE_BLEND_CONSTANTS"] = 4] = "DYNAMIC_STATE_BLEND_CONSTANTS";
        PipelineDynamicStateFlags[PipelineDynamicStateFlags["DYNAMIC_STATE_DEPTH_BOUNDS"] = 8] = "DYNAMIC_STATE_DEPTH_BOUNDS";
        PipelineDynamicStateFlags[PipelineDynamicStateFlags["DYNAMIC_STATE_STENCIL_COMPARE_MASK"] = 16] = "DYNAMIC_STATE_STENCIL_COMPARE_MASK";
        PipelineDynamicStateFlags[PipelineDynamicStateFlags["DYNAMIC_STATE_STENCIL_WRITE_MASK"] = 32] = "DYNAMIC_STATE_STENCIL_WRITE_MASK";
        PipelineDynamicStateFlags[PipelineDynamicStateFlags["DYNAMIC_STATE_STENCIL_REFERENCE"] = 64] = "DYNAMIC_STATE_STENCIL_REFERENCE";
    })(PipelineDynamicStateFlags = RenderingDevice.PipelineDynamicStateFlags || (RenderingDevice.PipelineDynamicStateFlags = {}));
    let InitialAction;
    (function (InitialAction) {
        InitialAction[InitialAction["INITIAL_ACTION_LOAD"] = 0] = "INITIAL_ACTION_LOAD";
        InitialAction[InitialAction["INITIAL_ACTION_CLEAR"] = 1] = "INITIAL_ACTION_CLEAR";
        InitialAction[InitialAction["INITIAL_ACTION_DISCARD"] = 2] = "INITIAL_ACTION_DISCARD";
        InitialAction[InitialAction["INITIAL_ACTION_MAX"] = 3] = "INITIAL_ACTION_MAX";
        InitialAction[InitialAction["INITIAL_ACTION_CLEAR_REGION"] = 1] = "INITIAL_ACTION_CLEAR_REGION";
        InitialAction[InitialAction["INITIAL_ACTION_CLEAR_REGION_CONTINUE"] = 1] = "INITIAL_ACTION_CLEAR_REGION_CONTINUE";
        InitialAction[InitialAction["INITIAL_ACTION_KEEP"] = 0] = "INITIAL_ACTION_KEEP";
        InitialAction[InitialAction["INITIAL_ACTION_DROP"] = 2] = "INITIAL_ACTION_DROP";
        InitialAction[InitialAction["INITIAL_ACTION_CONTINUE"] = 0] = "INITIAL_ACTION_CONTINUE";
    })(InitialAction = RenderingDevice.InitialAction || (RenderingDevice.InitialAction = {}));
    let FinalAction;
    (function (FinalAction) {
        FinalAction[FinalAction["FINAL_ACTION_STORE"] = 0] = "FINAL_ACTION_STORE";
        FinalAction[FinalAction["FINAL_ACTION_DISCARD"] = 1] = "FINAL_ACTION_DISCARD";
        FinalAction[FinalAction["FINAL_ACTION_MAX"] = 2] = "FINAL_ACTION_MAX";
        FinalAction[FinalAction["FINAL_ACTION_READ"] = 0] = "FINAL_ACTION_READ";
        FinalAction[FinalAction["FINAL_ACTION_CONTINUE"] = 0] = "FINAL_ACTION_CONTINUE";
    })(FinalAction = RenderingDevice.FinalAction || (RenderingDevice.FinalAction = {}));
    let ShaderStage;
    (function (ShaderStage) {
        ShaderStage[ShaderStage["SHADER_STAGE_VERTEX"] = 0] = "SHADER_STAGE_VERTEX";
        ShaderStage[ShaderStage["SHADER_STAGE_FRAGMENT"] = 1] = "SHADER_STAGE_FRAGMENT";
        ShaderStage[ShaderStage["SHADER_STAGE_TESSELATION_CONTROL"] = 2] = "SHADER_STAGE_TESSELATION_CONTROL";
        ShaderStage[ShaderStage["SHADER_STAGE_TESSELATION_EVALUATION"] = 3] = "SHADER_STAGE_TESSELATION_EVALUATION";
        ShaderStage[ShaderStage["SHADER_STAGE_COMPUTE"] = 4] = "SHADER_STAGE_COMPUTE";
        ShaderStage[ShaderStage["SHADER_STAGE_MAX"] = 5] = "SHADER_STAGE_MAX";
        ShaderStage[ShaderStage["SHADER_STAGE_VERTEX_BIT"] = 1] = "SHADER_STAGE_VERTEX_BIT";
        ShaderStage[ShaderStage["SHADER_STAGE_FRAGMENT_BIT"] = 2] = "SHADER_STAGE_FRAGMENT_BIT";
        ShaderStage[ShaderStage["SHADER_STAGE_TESSELATION_CONTROL_BIT"] = 4] = "SHADER_STAGE_TESSELATION_CONTROL_BIT";
        ShaderStage[ShaderStage["SHADER_STAGE_TESSELATION_EVALUATION_BIT"] = 8] = "SHADER_STAGE_TESSELATION_EVALUATION_BIT";
        ShaderStage[ShaderStage["SHADER_STAGE_COMPUTE_BIT"] = 16] = "SHADER_STAGE_COMPUTE_BIT";
    })(ShaderStage = RenderingDevice.ShaderStage || (RenderingDevice.ShaderStage = {}));
    let ShaderLanguage;
    (function (ShaderLanguage) {
        ShaderLanguage[ShaderLanguage["SHADER_LANGUAGE_GLSL"] = 0] = "SHADER_LANGUAGE_GLSL";
        ShaderLanguage[ShaderLanguage["SHADER_LANGUAGE_HLSL"] = 1] = "SHADER_LANGUAGE_HLSL";
    })(ShaderLanguage = RenderingDevice.ShaderLanguage || (RenderingDevice.ShaderLanguage = {}));
    let PipelineSpecializationConstantType;
    (function (PipelineSpecializationConstantType) {
        PipelineSpecializationConstantType[PipelineSpecializationConstantType["PIPELINE_SPECIALIZATION_CONSTANT_TYPE_BOOL"] = 0] = "PIPELINE_SPECIALIZATION_CONSTANT_TYPE_BOOL";
        PipelineSpecializationConstantType[PipelineSpecializationConstantType["PIPELINE_SPECIALIZATION_CONSTANT_TYPE_INT"] = 1] = "PIPELINE_SPECIALIZATION_CONSTANT_TYPE_INT";
        PipelineSpecializationConstantType[PipelineSpecializationConstantType["PIPELINE_SPECIALIZATION_CONSTANT_TYPE_FLOAT"] = 2] = "PIPELINE_SPECIALIZATION_CONSTANT_TYPE_FLOAT";
    })(PipelineSpecializationConstantType = RenderingDevice.PipelineSpecializationConstantType || (RenderingDevice.PipelineSpecializationConstantType = {}));
    let Limit;
    (function (Limit) {
        Limit[Limit["LIMIT_MAX_BOUND_UNIFORM_SETS"] = 0] = "LIMIT_MAX_BOUND_UNIFORM_SETS";
        Limit[Limit["LIMIT_MAX_FRAMEBUFFER_COLOR_ATTACHMENTS"] = 1] = "LIMIT_MAX_FRAMEBUFFER_COLOR_ATTACHMENTS";
        Limit[Limit["LIMIT_MAX_TEXTURES_PER_UNIFORM_SET"] = 2] = "LIMIT_MAX_TEXTURES_PER_UNIFORM_SET";
        Limit[Limit["LIMIT_MAX_SAMPLERS_PER_UNIFORM_SET"] = 3] = "LIMIT_MAX_SAMPLERS_PER_UNIFORM_SET";
        Limit[Limit["LIMIT_MAX_STORAGE_BUFFERS_PER_UNIFORM_SET"] = 4] = "LIMIT_MAX_STORAGE_BUFFERS_PER_UNIFORM_SET";
        Limit[Limit["LIMIT_MAX_STORAGE_IMAGES_PER_UNIFORM_SET"] = 5] = "LIMIT_MAX_STORAGE_IMAGES_PER_UNIFORM_SET";
        Limit[Limit["LIMIT_MAX_UNIFORM_BUFFERS_PER_UNIFORM_SET"] = 6] = "LIMIT_MAX_UNIFORM_BUFFERS_PER_UNIFORM_SET";
        Limit[Limit["LIMIT_MAX_DRAW_INDEXED_INDEX"] = 7] = "LIMIT_MAX_DRAW_INDEXED_INDEX";
        Limit[Limit["LIMIT_MAX_FRAMEBUFFER_HEIGHT"] = 8] = "LIMIT_MAX_FRAMEBUFFER_HEIGHT";
        Limit[Limit["LIMIT_MAX_FRAMEBUFFER_WIDTH"] = 9] = "LIMIT_MAX_FRAMEBUFFER_WIDTH";
        Limit[Limit["LIMIT_MAX_TEXTURE_ARRAY_LAYERS"] = 10] = "LIMIT_MAX_TEXTURE_ARRAY_LAYERS";
        Limit[Limit["LIMIT_MAX_TEXTURE_SIZE_1D"] = 11] = "LIMIT_MAX_TEXTURE_SIZE_1D";
        Limit[Limit["LIMIT_MAX_TEXTURE_SIZE_2D"] = 12] = "LIMIT_MAX_TEXTURE_SIZE_2D";
        Limit[Limit["LIMIT_MAX_TEXTURE_SIZE_3D"] = 13] = "LIMIT_MAX_TEXTURE_SIZE_3D";
        Limit[Limit["LIMIT_MAX_TEXTURE_SIZE_CUBE"] = 14] = "LIMIT_MAX_TEXTURE_SIZE_CUBE";
        Limit[Limit["LIMIT_MAX_TEXTURES_PER_SHADER_STAGE"] = 15] = "LIMIT_MAX_TEXTURES_PER_SHADER_STAGE";
        Limit[Limit["LIMIT_MAX_SAMPLERS_PER_SHADER_STAGE"] = 16] = "LIMIT_MAX_SAMPLERS_PER_SHADER_STAGE";
        Limit[Limit["LIMIT_MAX_STORAGE_BUFFERS_PER_SHADER_STAGE"] = 17] = "LIMIT_MAX_STORAGE_BUFFERS_PER_SHADER_STAGE";
        Limit[Limit["LIMIT_MAX_STORAGE_IMAGES_PER_SHADER_STAGE"] = 18] = "LIMIT_MAX_STORAGE_IMAGES_PER_SHADER_STAGE";
        Limit[Limit["LIMIT_MAX_UNIFORM_BUFFERS_PER_SHADER_STAGE"] = 19] = "LIMIT_MAX_UNIFORM_BUFFERS_PER_SHADER_STAGE";
        Limit[Limit["LIMIT_MAX_PUSH_CONSTANT_SIZE"] = 20] = "LIMIT_MAX_PUSH_CONSTANT_SIZE";
        Limit[Limit["LIMIT_MAX_UNIFORM_BUFFER_SIZE"] = 21] = "LIMIT_MAX_UNIFORM_BUFFER_SIZE";
        Limit[Limit["LIMIT_MAX_VERTEX_INPUT_ATTRIBUTE_OFFSET"] = 22] = "LIMIT_MAX_VERTEX_INPUT_ATTRIBUTE_OFFSET";
        Limit[Limit["LIMIT_MAX_VERTEX_INPUT_ATTRIBUTES"] = 23] = "LIMIT_MAX_VERTEX_INPUT_ATTRIBUTES";
        Limit[Limit["LIMIT_MAX_VERTEX_INPUT_BINDINGS"] = 24] = "LIMIT_MAX_VERTEX_INPUT_BINDINGS";
        Limit[Limit["LIMIT_MAX_VERTEX_INPUT_BINDING_STRIDE"] = 25] = "LIMIT_MAX_VERTEX_INPUT_BINDING_STRIDE";
        Limit[Limit["LIMIT_MIN_UNIFORM_BUFFER_OFFSET_ALIGNMENT"] = 26] = "LIMIT_MIN_UNIFORM_BUFFER_OFFSET_ALIGNMENT";
        Limit[Limit["LIMIT_MAX_COMPUTE_SHARED_MEMORY_SIZE"] = 27] = "LIMIT_MAX_COMPUTE_SHARED_MEMORY_SIZE";
        Limit[Limit["LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_X"] = 28] = "LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_X";
        Limit[Limit["LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Y"] = 29] = "LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Y";
        Limit[Limit["LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Z"] = 30] = "LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Z";
        Limit[Limit["LIMIT_MAX_COMPUTE_WORKGROUP_INVOCATIONS"] = 31] = "LIMIT_MAX_COMPUTE_WORKGROUP_INVOCATIONS";
        Limit[Limit["LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_X"] = 32] = "LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_X";
        Limit[Limit["LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Y"] = 33] = "LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Y";
        Limit[Limit["LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Z"] = 34] = "LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Z";
        Limit[Limit["LIMIT_MAX_VIEWPORT_DIMENSIONS_X"] = 35] = "LIMIT_MAX_VIEWPORT_DIMENSIONS_X";
        Limit[Limit["LIMIT_MAX_VIEWPORT_DIMENSIONS_Y"] = 36] = "LIMIT_MAX_VIEWPORT_DIMENSIONS_Y";
    })(Limit = RenderingDevice.Limit || (RenderingDevice.Limit = {}));
    let MemoryType;
    (function (MemoryType) {
        MemoryType[MemoryType["MEMORY_TEXTURES"] = 0] = "MEMORY_TEXTURES";
        MemoryType[MemoryType["MEMORY_BUFFERS"] = 1] = "MEMORY_BUFFERS";
        MemoryType[MemoryType["MEMORY_TOTAL"] = 2] = "MEMORY_TOTAL";
    })(MemoryType = RenderingDevice.MemoryType || (RenderingDevice.MemoryType = {}));
    RenderingDevice.INVALID_ID = -1;
    RenderingDevice.INVALID_FORMAT_ID = -1;
    let BreadcrumbMarker;
    (function (BreadcrumbMarker) {
        BreadcrumbMarker[BreadcrumbMarker["NONE"] = 0] = "NONE";
        BreadcrumbMarker[BreadcrumbMarker["REFLECTION_PROBES"] = 65536] = "REFLECTION_PROBES";
        BreadcrumbMarker[BreadcrumbMarker["SKY_PASS"] = 131072] = "SKY_PASS";
        BreadcrumbMarker[BreadcrumbMarker["LIGHTMAPPER_PASS"] = 196608] = "LIGHTMAPPER_PASS";
        BreadcrumbMarker[BreadcrumbMarker["SHADOW_PASS_DIRECTIONAL"] = 262144] = "SHADOW_PASS_DIRECTIONAL";
        BreadcrumbMarker[BreadcrumbMarker["SHADOW_PASS_CUBE"] = 327680] = "SHADOW_PASS_CUBE";
        BreadcrumbMarker[BreadcrumbMarker["OPAQUE_PASS"] = 393216] = "OPAQUE_PASS";
        BreadcrumbMarker[BreadcrumbMarker["ALPHA_PASS"] = 458752] = "ALPHA_PASS";
        BreadcrumbMarker[BreadcrumbMarker["TRANSPARENT_PASS"] = 524288] = "TRANSPARENT_PASS";
        BreadcrumbMarker[BreadcrumbMarker["POST_PROCESSING_PASS"] = 589824] = "POST_PROCESSING_PASS";
        BreadcrumbMarker[BreadcrumbMarker["BLIT_PASS"] = 655360] = "BLIT_PASS";
        BreadcrumbMarker[BreadcrumbMarker["UI_PASS"] = 720896] = "UI_PASS";
        BreadcrumbMarker[BreadcrumbMarker["DEBUG_PASS"] = 786432] = "DEBUG_PASS";
    })(BreadcrumbMarker = RenderingDevice.BreadcrumbMarker || (RenderingDevice.BreadcrumbMarker = {}));
})(RenderingDevice || (RenderingDevice = {}));
export var Performance;
(function (Performance) {
    let Monitor;
    (function (Monitor) {
        Monitor[Monitor["TIME_FPS"] = 0] = "TIME_FPS";
        Monitor[Monitor["TIME_PROCESS"] = 1] = "TIME_PROCESS";
        Monitor[Monitor["TIME_PHYSICS_PROCESS"] = 2] = "TIME_PHYSICS_PROCESS";
        Monitor[Monitor["TIME_NAVIGATION_PROCESS"] = 3] = "TIME_NAVIGATION_PROCESS";
        Monitor[Monitor["MEMORY_STATIC"] = 4] = "MEMORY_STATIC";
        Monitor[Monitor["MEMORY_STATIC_MAX"] = 5] = "MEMORY_STATIC_MAX";
        Monitor[Monitor["MEMORY_MESSAGE_BUFFER_MAX"] = 6] = "MEMORY_MESSAGE_BUFFER_MAX";
        Monitor[Monitor["OBJECT_COUNT"] = 7] = "OBJECT_COUNT";
        Monitor[Monitor["OBJECT_RESOURCE_COUNT"] = 8] = "OBJECT_RESOURCE_COUNT";
        Monitor[Monitor["OBJECT_NODE_COUNT"] = 9] = "OBJECT_NODE_COUNT";
        Monitor[Monitor["OBJECT_ORPHAN_NODE_COUNT"] = 10] = "OBJECT_ORPHAN_NODE_COUNT";
        Monitor[Monitor["RENDER_TOTAL_OBJECTS_IN_FRAME"] = 11] = "RENDER_TOTAL_OBJECTS_IN_FRAME";
        Monitor[Monitor["RENDER_TOTAL_PRIMITIVES_IN_FRAME"] = 12] = "RENDER_TOTAL_PRIMITIVES_IN_FRAME";
        Monitor[Monitor["RENDER_TOTAL_DRAW_CALLS_IN_FRAME"] = 13] = "RENDER_TOTAL_DRAW_CALLS_IN_FRAME";
        Monitor[Monitor["RENDER_VIDEO_MEM_USED"] = 14] = "RENDER_VIDEO_MEM_USED";
        Monitor[Monitor["RENDER_TEXTURE_MEM_USED"] = 15] = "RENDER_TEXTURE_MEM_USED";
        Monitor[Monitor["RENDER_BUFFER_MEM_USED"] = 16] = "RENDER_BUFFER_MEM_USED";
        Monitor[Monitor["PHYSICS_2D_ACTIVE_OBJECTS"] = 17] = "PHYSICS_2D_ACTIVE_OBJECTS";
        Monitor[Monitor["PHYSICS_2D_COLLISION_PAIRS"] = 18] = "PHYSICS_2D_COLLISION_PAIRS";
        Monitor[Monitor["PHYSICS_2D_ISLAND_COUNT"] = 19] = "PHYSICS_2D_ISLAND_COUNT";
        Monitor[Monitor["PHYSICS_3D_ACTIVE_OBJECTS"] = 20] = "PHYSICS_3D_ACTIVE_OBJECTS";
        Monitor[Monitor["PHYSICS_3D_COLLISION_PAIRS"] = 21] = "PHYSICS_3D_COLLISION_PAIRS";
        Monitor[Monitor["PHYSICS_3D_ISLAND_COUNT"] = 22] = "PHYSICS_3D_ISLAND_COUNT";
        Monitor[Monitor["AUDIO_OUTPUT_LATENCY"] = 23] = "AUDIO_OUTPUT_LATENCY";
        Monitor[Monitor["NAVIGATION_ACTIVE_MAPS"] = 24] = "NAVIGATION_ACTIVE_MAPS";
        Monitor[Monitor["NAVIGATION_REGION_COUNT"] = 25] = "NAVIGATION_REGION_COUNT";
        Monitor[Monitor["NAVIGATION_AGENT_COUNT"] = 26] = "NAVIGATION_AGENT_COUNT";
        Monitor[Monitor["NAVIGATION_LINK_COUNT"] = 27] = "NAVIGATION_LINK_COUNT";
        Monitor[Monitor["NAVIGATION_POLYGON_COUNT"] = 28] = "NAVIGATION_POLYGON_COUNT";
        Monitor[Monitor["NAVIGATION_EDGE_COUNT"] = 29] = "NAVIGATION_EDGE_COUNT";
        Monitor[Monitor["NAVIGATION_EDGE_MERGE_COUNT"] = 30] = "NAVIGATION_EDGE_MERGE_COUNT";
        Monitor[Monitor["NAVIGATION_EDGE_CONNECTION_COUNT"] = 31] = "NAVIGATION_EDGE_CONNECTION_COUNT";
        Monitor[Monitor["NAVIGATION_EDGE_FREE_COUNT"] = 32] = "NAVIGATION_EDGE_FREE_COUNT";
        Monitor[Monitor["NAVIGATION_OBSTACLE_COUNT"] = 33] = "NAVIGATION_OBSTACLE_COUNT";
        Monitor[Monitor["PIPELINE_COMPILATIONS_CANVAS"] = 34] = "PIPELINE_COMPILATIONS_CANVAS";
        Monitor[Monitor["PIPELINE_COMPILATIONS_MESH"] = 35] = "PIPELINE_COMPILATIONS_MESH";
        Monitor[Monitor["PIPELINE_COMPILATIONS_SURFACE"] = 36] = "PIPELINE_COMPILATIONS_SURFACE";
        Monitor[Monitor["PIPELINE_COMPILATIONS_DRAW"] = 37] = "PIPELINE_COMPILATIONS_DRAW";
        Monitor[Monitor["PIPELINE_COMPILATIONS_SPECIALIZATION"] = 38] = "PIPELINE_COMPILATIONS_SPECIALIZATION";
        Monitor[Monitor["MONITOR_MAX"] = 39] = "MONITOR_MAX";
    })(Monitor = Performance.Monitor || (Performance.Monitor = {}));
})(Performance || (Performance = {}));
export var VisualShaderNodeBillboard;
(function (VisualShaderNodeBillboard) {
    let BillboardType;
    (function (BillboardType) {
        BillboardType[BillboardType["BILLBOARD_TYPE_DISABLED"] = 0] = "BILLBOARD_TYPE_DISABLED";
        BillboardType[BillboardType["BILLBOARD_TYPE_ENABLED"] = 1] = "BILLBOARD_TYPE_ENABLED";
        BillboardType[BillboardType["BILLBOARD_TYPE_FIXED_Y"] = 2] = "BILLBOARD_TYPE_FIXED_Y";
        BillboardType[BillboardType["BILLBOARD_TYPE_PARTICLES"] = 3] = "BILLBOARD_TYPE_PARTICLES";
        BillboardType[BillboardType["BILLBOARD_TYPE_MAX"] = 4] = "BILLBOARD_TYPE_MAX";
    })(BillboardType = VisualShaderNodeBillboard.BillboardType || (VisualShaderNodeBillboard.BillboardType = {}));
})(VisualShaderNodeBillboard || (VisualShaderNodeBillboard = {}));
export var Label3D;
(function (Label3D) {
    let DrawFlags;
    (function (DrawFlags) {
        DrawFlags[DrawFlags["FLAG_SHADED"] = 0] = "FLAG_SHADED";
        DrawFlags[DrawFlags["FLAG_DOUBLE_SIDED"] = 1] = "FLAG_DOUBLE_SIDED";
        DrawFlags[DrawFlags["FLAG_DISABLE_DEPTH_TEST"] = 2] = "FLAG_DISABLE_DEPTH_TEST";
        DrawFlags[DrawFlags["FLAG_FIXED_SIZE"] = 3] = "FLAG_FIXED_SIZE";
        DrawFlags[DrawFlags["FLAG_MAX"] = 4] = "FLAG_MAX";
    })(DrawFlags = Label3D.DrawFlags || (Label3D.DrawFlags = {}));
    let AlphaCutMode;
    (function (AlphaCutMode) {
        AlphaCutMode[AlphaCutMode["ALPHA_CUT_DISABLED"] = 0] = "ALPHA_CUT_DISABLED";
        AlphaCutMode[AlphaCutMode["ALPHA_CUT_DISCARD"] = 1] = "ALPHA_CUT_DISCARD";
        AlphaCutMode[AlphaCutMode["ALPHA_CUT_OPAQUE_PREPASS"] = 2] = "ALPHA_CUT_OPAQUE_PREPASS";
        AlphaCutMode[AlphaCutMode["ALPHA_CUT_HASH"] = 3] = "ALPHA_CUT_HASH";
    })(AlphaCutMode = Label3D.AlphaCutMode || (Label3D.AlphaCutMode = {}));
})(Label3D || (Label3D = {}));
export var BaseMaterial3D;
(function (BaseMaterial3D) {
    let TextureParam;
    (function (TextureParam) {
        TextureParam[TextureParam["TEXTURE_ALBEDO"] = 0] = "TEXTURE_ALBEDO";
        TextureParam[TextureParam["TEXTURE_METALLIC"] = 1] = "TEXTURE_METALLIC";
        TextureParam[TextureParam["TEXTURE_ROUGHNESS"] = 2] = "TEXTURE_ROUGHNESS";
        TextureParam[TextureParam["TEXTURE_EMISSION"] = 3] = "TEXTURE_EMISSION";
        TextureParam[TextureParam["TEXTURE_NORMAL"] = 4] = "TEXTURE_NORMAL";
        TextureParam[TextureParam["TEXTURE_RIM"] = 5] = "TEXTURE_RIM";
        TextureParam[TextureParam["TEXTURE_CLEARCOAT"] = 6] = "TEXTURE_CLEARCOAT";
        TextureParam[TextureParam["TEXTURE_FLOWMAP"] = 7] = "TEXTURE_FLOWMAP";
        TextureParam[TextureParam["TEXTURE_AMBIENT_OCCLUSION"] = 8] = "TEXTURE_AMBIENT_OCCLUSION";
        TextureParam[TextureParam["TEXTURE_HEIGHTMAP"] = 9] = "TEXTURE_HEIGHTMAP";
        TextureParam[TextureParam["TEXTURE_SUBSURFACE_SCATTERING"] = 10] = "TEXTURE_SUBSURFACE_SCATTERING";
        TextureParam[TextureParam["TEXTURE_SUBSURFACE_TRANSMITTANCE"] = 11] = "TEXTURE_SUBSURFACE_TRANSMITTANCE";
        TextureParam[TextureParam["TEXTURE_BACKLIGHT"] = 12] = "TEXTURE_BACKLIGHT";
        TextureParam[TextureParam["TEXTURE_REFRACTION"] = 13] = "TEXTURE_REFRACTION";
        TextureParam[TextureParam["TEXTURE_DETAIL_MASK"] = 14] = "TEXTURE_DETAIL_MASK";
        TextureParam[TextureParam["TEXTURE_DETAIL_ALBEDO"] = 15] = "TEXTURE_DETAIL_ALBEDO";
        TextureParam[TextureParam["TEXTURE_DETAIL_NORMAL"] = 16] = "TEXTURE_DETAIL_NORMAL";
        TextureParam[TextureParam["TEXTURE_ORM"] = 17] = "TEXTURE_ORM";
        TextureParam[TextureParam["TEXTURE_MAX"] = 18] = "TEXTURE_MAX";
    })(TextureParam = BaseMaterial3D.TextureParam || (BaseMaterial3D.TextureParam = {}));
    let TextureFilter;
    (function (TextureFilter) {
        TextureFilter[TextureFilter["TEXTURE_FILTER_NEAREST"] = 0] = "TEXTURE_FILTER_NEAREST";
        TextureFilter[TextureFilter["TEXTURE_FILTER_LINEAR"] = 1] = "TEXTURE_FILTER_LINEAR";
        TextureFilter[TextureFilter["TEXTURE_FILTER_NEAREST_WITH_MIPMAPS"] = 2] = "TEXTURE_FILTER_NEAREST_WITH_MIPMAPS";
        TextureFilter[TextureFilter["TEXTURE_FILTER_LINEAR_WITH_MIPMAPS"] = 3] = "TEXTURE_FILTER_LINEAR_WITH_MIPMAPS";
        TextureFilter[TextureFilter["TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC"] = 4] = "TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC";
        TextureFilter[TextureFilter["TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC"] = 5] = "TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC";
        TextureFilter[TextureFilter["TEXTURE_FILTER_MAX"] = 6] = "TEXTURE_FILTER_MAX";
    })(TextureFilter = BaseMaterial3D.TextureFilter || (BaseMaterial3D.TextureFilter = {}));
    let DetailUV;
    (function (DetailUV) {
        DetailUV[DetailUV["DETAIL_UV_1"] = 0] = "DETAIL_UV_1";
        DetailUV[DetailUV["DETAIL_UV_2"] = 1] = "DETAIL_UV_2";
    })(DetailUV = BaseMaterial3D.DetailUV || (BaseMaterial3D.DetailUV = {}));
    let Transparency;
    (function (Transparency) {
        Transparency[Transparency["TRANSPARENCY_DISABLED"] = 0] = "TRANSPARENCY_DISABLED";
        Transparency[Transparency["TRANSPARENCY_ALPHA"] = 1] = "TRANSPARENCY_ALPHA";
        Transparency[Transparency["TRANSPARENCY_ALPHA_SCISSOR"] = 2] = "TRANSPARENCY_ALPHA_SCISSOR";
        Transparency[Transparency["TRANSPARENCY_ALPHA_HASH"] = 3] = "TRANSPARENCY_ALPHA_HASH";
        Transparency[Transparency["TRANSPARENCY_ALPHA_DEPTH_PRE_PASS"] = 4] = "TRANSPARENCY_ALPHA_DEPTH_PRE_PASS";
        Transparency[Transparency["TRANSPARENCY_MAX"] = 5] = "TRANSPARENCY_MAX";
    })(Transparency = BaseMaterial3D.Transparency || (BaseMaterial3D.Transparency = {}));
    let ShadingMode;
    (function (ShadingMode) {
        ShadingMode[ShadingMode["SHADING_MODE_UNSHADED"] = 0] = "SHADING_MODE_UNSHADED";
        ShadingMode[ShadingMode["SHADING_MODE_PER_PIXEL"] = 1] = "SHADING_MODE_PER_PIXEL";
        ShadingMode[ShadingMode["SHADING_MODE_PER_VERTEX"] = 2] = "SHADING_MODE_PER_VERTEX";
        ShadingMode[ShadingMode["SHADING_MODE_MAX"] = 3] = "SHADING_MODE_MAX";
    })(ShadingMode = BaseMaterial3D.ShadingMode || (BaseMaterial3D.ShadingMode = {}));
    let Feature;
    (function (Feature) {
        Feature[Feature["FEATURE_EMISSION"] = 0] = "FEATURE_EMISSION";
        Feature[Feature["FEATURE_NORMAL_MAPPING"] = 1] = "FEATURE_NORMAL_MAPPING";
        Feature[Feature["FEATURE_RIM"] = 2] = "FEATURE_RIM";
        Feature[Feature["FEATURE_CLEARCOAT"] = 3] = "FEATURE_CLEARCOAT";
        Feature[Feature["FEATURE_ANISOTROPY"] = 4] = "FEATURE_ANISOTROPY";
        Feature[Feature["FEATURE_AMBIENT_OCCLUSION"] = 5] = "FEATURE_AMBIENT_OCCLUSION";
        Feature[Feature["FEATURE_HEIGHT_MAPPING"] = 6] = "FEATURE_HEIGHT_MAPPING";
        Feature[Feature["FEATURE_SUBSURFACE_SCATTERING"] = 7] = "FEATURE_SUBSURFACE_SCATTERING";
        Feature[Feature["FEATURE_SUBSURFACE_TRANSMITTANCE"] = 8] = "FEATURE_SUBSURFACE_TRANSMITTANCE";
        Feature[Feature["FEATURE_BACKLIGHT"] = 9] = "FEATURE_BACKLIGHT";
        Feature[Feature["FEATURE_REFRACTION"] = 10] = "FEATURE_REFRACTION";
        Feature[Feature["FEATURE_DETAIL"] = 11] = "FEATURE_DETAIL";
        Feature[Feature["FEATURE_MAX"] = 12] = "FEATURE_MAX";
    })(Feature = BaseMaterial3D.Feature || (BaseMaterial3D.Feature = {}));
    let BlendMode;
    (function (BlendMode) {
        BlendMode[BlendMode["BLEND_MODE_MIX"] = 0] = "BLEND_MODE_MIX";
        BlendMode[BlendMode["BLEND_MODE_ADD"] = 1] = "BLEND_MODE_ADD";
        BlendMode[BlendMode["BLEND_MODE_SUB"] = 2] = "BLEND_MODE_SUB";
        BlendMode[BlendMode["BLEND_MODE_MUL"] = 3] = "BLEND_MODE_MUL";
        BlendMode[BlendMode["BLEND_MODE_PREMULT_ALPHA"] = 4] = "BLEND_MODE_PREMULT_ALPHA";
    })(BlendMode = BaseMaterial3D.BlendMode || (BaseMaterial3D.BlendMode = {}));
    let AlphaAntiAliasing;
    (function (AlphaAntiAliasing) {
        AlphaAntiAliasing[AlphaAntiAliasing["ALPHA_ANTIALIASING_OFF"] = 0] = "ALPHA_ANTIALIASING_OFF";
        AlphaAntiAliasing[AlphaAntiAliasing["ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE"] = 1] = "ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE";
        AlphaAntiAliasing[AlphaAntiAliasing["ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE_AND_TO_ONE"] = 2] = "ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE_AND_TO_ONE";
    })(AlphaAntiAliasing = BaseMaterial3D.AlphaAntiAliasing || (BaseMaterial3D.AlphaAntiAliasing = {}));
    let DepthDrawMode;
    (function (DepthDrawMode) {
        DepthDrawMode[DepthDrawMode["DEPTH_DRAW_OPAQUE_ONLY"] = 0] = "DEPTH_DRAW_OPAQUE_ONLY";
        DepthDrawMode[DepthDrawMode["DEPTH_DRAW_ALWAYS"] = 1] = "DEPTH_DRAW_ALWAYS";
        DepthDrawMode[DepthDrawMode["DEPTH_DRAW_DISABLED"] = 2] = "DEPTH_DRAW_DISABLED";
    })(DepthDrawMode = BaseMaterial3D.DepthDrawMode || (BaseMaterial3D.DepthDrawMode = {}));
    let CullMode;
    (function (CullMode) {
        CullMode[CullMode["CULL_BACK"] = 0] = "CULL_BACK";
        CullMode[CullMode["CULL_FRONT"] = 1] = "CULL_FRONT";
        CullMode[CullMode["CULL_DISABLED"] = 2] = "CULL_DISABLED";
    })(CullMode = BaseMaterial3D.CullMode || (BaseMaterial3D.CullMode = {}));
    let Flags;
    (function (Flags) {
        Flags[Flags["FLAG_DISABLE_DEPTH_TEST"] = 0] = "FLAG_DISABLE_DEPTH_TEST";
        Flags[Flags["FLAG_ALBEDO_FROM_VERTEX_COLOR"] = 1] = "FLAG_ALBEDO_FROM_VERTEX_COLOR";
        Flags[Flags["FLAG_SRGB_VERTEX_COLOR"] = 2] = "FLAG_SRGB_VERTEX_COLOR";
        Flags[Flags["FLAG_USE_POINT_SIZE"] = 3] = "FLAG_USE_POINT_SIZE";
        Flags[Flags["FLAG_FIXED_SIZE"] = 4] = "FLAG_FIXED_SIZE";
        Flags[Flags["FLAG_BILLBOARD_KEEP_SCALE"] = 5] = "FLAG_BILLBOARD_KEEP_SCALE";
        Flags[Flags["FLAG_UV1_USE_TRIPLANAR"] = 6] = "FLAG_UV1_USE_TRIPLANAR";
        Flags[Flags["FLAG_UV2_USE_TRIPLANAR"] = 7] = "FLAG_UV2_USE_TRIPLANAR";
        Flags[Flags["FLAG_UV1_USE_WORLD_TRIPLANAR"] = 8] = "FLAG_UV1_USE_WORLD_TRIPLANAR";
        Flags[Flags["FLAG_UV2_USE_WORLD_TRIPLANAR"] = 9] = "FLAG_UV2_USE_WORLD_TRIPLANAR";
        Flags[Flags["FLAG_AO_ON_UV2"] = 10] = "FLAG_AO_ON_UV2";
        Flags[Flags["FLAG_EMISSION_ON_UV2"] = 11] = "FLAG_EMISSION_ON_UV2";
        Flags[Flags["FLAG_ALBEDO_TEXTURE_FORCE_SRGB"] = 12] = "FLAG_ALBEDO_TEXTURE_FORCE_SRGB";
        Flags[Flags["FLAG_DONT_RECEIVE_SHADOWS"] = 13] = "FLAG_DONT_RECEIVE_SHADOWS";
        Flags[Flags["FLAG_DISABLE_AMBIENT_LIGHT"] = 14] = "FLAG_DISABLE_AMBIENT_LIGHT";
        Flags[Flags["FLAG_USE_SHADOW_TO_OPACITY"] = 15] = "FLAG_USE_SHADOW_TO_OPACITY";
        Flags[Flags["FLAG_USE_TEXTURE_REPEAT"] = 16] = "FLAG_USE_TEXTURE_REPEAT";
        Flags[Flags["FLAG_INVERT_HEIGHTMAP"] = 17] = "FLAG_INVERT_HEIGHTMAP";
        Flags[Flags["FLAG_SUBSURFACE_MODE_SKIN"] = 18] = "FLAG_SUBSURFACE_MODE_SKIN";
        Flags[Flags["FLAG_PARTICLE_TRAILS_MODE"] = 19] = "FLAG_PARTICLE_TRAILS_MODE";
        Flags[Flags["FLAG_ALBEDO_TEXTURE_MSDF"] = 20] = "FLAG_ALBEDO_TEXTURE_MSDF";
        Flags[Flags["FLAG_DISABLE_FOG"] = 21] = "FLAG_DISABLE_FOG";
        Flags[Flags["FLAG_MAX"] = 22] = "FLAG_MAX";
    })(Flags = BaseMaterial3D.Flags || (BaseMaterial3D.Flags = {}));
    let DiffuseMode;
    (function (DiffuseMode) {
        DiffuseMode[DiffuseMode["DIFFUSE_BURLEY"] = 0] = "DIFFUSE_BURLEY";
        DiffuseMode[DiffuseMode["DIFFUSE_LAMBERT"] = 1] = "DIFFUSE_LAMBERT";
        DiffuseMode[DiffuseMode["DIFFUSE_LAMBERT_WRAP"] = 2] = "DIFFUSE_LAMBERT_WRAP";
        DiffuseMode[DiffuseMode["DIFFUSE_TOON"] = 3] = "DIFFUSE_TOON";
    })(DiffuseMode = BaseMaterial3D.DiffuseMode || (BaseMaterial3D.DiffuseMode = {}));
    let SpecularMode;
    (function (SpecularMode) {
        SpecularMode[SpecularMode["SPECULAR_SCHLICK_GGX"] = 0] = "SPECULAR_SCHLICK_GGX";
        SpecularMode[SpecularMode["SPECULAR_TOON"] = 1] = "SPECULAR_TOON";
        SpecularMode[SpecularMode["SPECULAR_DISABLED"] = 2] = "SPECULAR_DISABLED";
    })(SpecularMode = BaseMaterial3D.SpecularMode || (BaseMaterial3D.SpecularMode = {}));
    let BillboardMode;
    (function (BillboardMode) {
        BillboardMode[BillboardMode["BILLBOARD_DISABLED"] = 0] = "BILLBOARD_DISABLED";
        BillboardMode[BillboardMode["BILLBOARD_ENABLED"] = 1] = "BILLBOARD_ENABLED";
        BillboardMode[BillboardMode["BILLBOARD_FIXED_Y"] = 2] = "BILLBOARD_FIXED_Y";
        BillboardMode[BillboardMode["BILLBOARD_PARTICLES"] = 3] = "BILLBOARD_PARTICLES";
    })(BillboardMode = BaseMaterial3D.BillboardMode || (BaseMaterial3D.BillboardMode = {}));
    let TextureChannel;
    (function (TextureChannel) {
        TextureChannel[TextureChannel["TEXTURE_CHANNEL_RED"] = 0] = "TEXTURE_CHANNEL_RED";
        TextureChannel[TextureChannel["TEXTURE_CHANNEL_GREEN"] = 1] = "TEXTURE_CHANNEL_GREEN";
        TextureChannel[TextureChannel["TEXTURE_CHANNEL_BLUE"] = 2] = "TEXTURE_CHANNEL_BLUE";
        TextureChannel[TextureChannel["TEXTURE_CHANNEL_ALPHA"] = 3] = "TEXTURE_CHANNEL_ALPHA";
        TextureChannel[TextureChannel["TEXTURE_CHANNEL_GRAYSCALE"] = 4] = "TEXTURE_CHANNEL_GRAYSCALE";
    })(TextureChannel = BaseMaterial3D.TextureChannel || (BaseMaterial3D.TextureChannel = {}));
    let EmissionOperator;
    (function (EmissionOperator) {
        EmissionOperator[EmissionOperator["EMISSION_OP_ADD"] = 0] = "EMISSION_OP_ADD";
        EmissionOperator[EmissionOperator["EMISSION_OP_MULTIPLY"] = 1] = "EMISSION_OP_MULTIPLY";
    })(EmissionOperator = BaseMaterial3D.EmissionOperator || (BaseMaterial3D.EmissionOperator = {}));
    let DistanceFadeMode;
    (function (DistanceFadeMode) {
        DistanceFadeMode[DistanceFadeMode["DISTANCE_FADE_DISABLED"] = 0] = "DISTANCE_FADE_DISABLED";
        DistanceFadeMode[DistanceFadeMode["DISTANCE_FADE_PIXEL_ALPHA"] = 1] = "DISTANCE_FADE_PIXEL_ALPHA";
        DistanceFadeMode[DistanceFadeMode["DISTANCE_FADE_PIXEL_DITHER"] = 2] = "DISTANCE_FADE_PIXEL_DITHER";
        DistanceFadeMode[DistanceFadeMode["DISTANCE_FADE_OBJECT_DITHER"] = 3] = "DISTANCE_FADE_OBJECT_DITHER";
    })(DistanceFadeMode = BaseMaterial3D.DistanceFadeMode || (BaseMaterial3D.DistanceFadeMode = {}));
})(BaseMaterial3D || (BaseMaterial3D = {}));
export var RibbonTrailMesh;
(function (RibbonTrailMesh) {
    let Shape;
    (function (Shape) {
        Shape[Shape["SHAPE_FLAT"] = 0] = "SHAPE_FLAT";
        Shape[Shape["SHAPE_CROSS"] = 1] = "SHAPE_CROSS";
    })(Shape = RibbonTrailMesh.Shape || (RibbonTrailMesh.Shape = {}));
})(RibbonTrailMesh || (RibbonTrailMesh = {}));
export var Thread;
(function (Thread) {
    let Priority;
    (function (Priority) {
        Priority[Priority["PRIORITY_LOW"] = 0] = "PRIORITY_LOW";
        Priority[Priority["PRIORITY_NORMAL"] = 1] = "PRIORITY_NORMAL";
        Priority[Priority["PRIORITY_HIGH"] = 2] = "PRIORITY_HIGH";
    })(Priority = Thread.Priority || (Thread.Priority = {}));
})(Thread || (Thread = {}));
export var Decal;
(function (Decal) {
    let DecalTexture;
    (function (DecalTexture) {
        DecalTexture[DecalTexture["TEXTURE_ALBEDO"] = 0] = "TEXTURE_ALBEDO";
        DecalTexture[DecalTexture["TEXTURE_NORMAL"] = 1] = "TEXTURE_NORMAL";
        DecalTexture[DecalTexture["TEXTURE_ORM"] = 2] = "TEXTURE_ORM";
        DecalTexture[DecalTexture["TEXTURE_EMISSION"] = 3] = "TEXTURE_EMISSION";
        DecalTexture[DecalTexture["TEXTURE_MAX"] = 4] = "TEXTURE_MAX";
    })(DecalTexture = Decal.DecalTexture || (Decal.DecalTexture = {}));
})(Decal || (Decal = {}));
export var ConeTwistJoint3D;
(function (ConeTwistJoint3D) {
    let Param;
    (function (Param) {
        Param[Param["PARAM_SWING_SPAN"] = 0] = "PARAM_SWING_SPAN";
        Param[Param["PARAM_TWIST_SPAN"] = 1] = "PARAM_TWIST_SPAN";
        Param[Param["PARAM_BIAS"] = 2] = "PARAM_BIAS";
        Param[Param["PARAM_SOFTNESS"] = 3] = "PARAM_SOFTNESS";
        Param[Param["PARAM_RELAXATION"] = 4] = "PARAM_RELAXATION";
        Param[Param["PARAM_MAX"] = 5] = "PARAM_MAX";
    })(Param = ConeTwistJoint3D.Param || (ConeTwistJoint3D.Param = {}));
})(ConeTwistJoint3D || (ConeTwistJoint3D = {}));
export var AudioStreamPlayer;
(function (AudioStreamPlayer) {
    let MixTarget;
    (function (MixTarget) {
        MixTarget[MixTarget["MIX_TARGET_STEREO"] = 0] = "MIX_TARGET_STEREO";
        MixTarget[MixTarget["MIX_TARGET_SURROUND"] = 1] = "MIX_TARGET_SURROUND";
        MixTarget[MixTarget["MIX_TARGET_CENTER"] = 2] = "MIX_TARGET_CENTER";
    })(MixTarget = AudioStreamPlayer.MixTarget || (AudioStreamPlayer.MixTarget = {}));
})(AudioStreamPlayer || (AudioStreamPlayer = {}));
export var GraphEdit;
(function (GraphEdit) {
    let PanningScheme;
    (function (PanningScheme) {
        PanningScheme[PanningScheme["SCROLL_ZOOMS"] = 0] = "SCROLL_ZOOMS";
        PanningScheme[PanningScheme["SCROLL_PANS"] = 1] = "SCROLL_PANS";
    })(PanningScheme = GraphEdit.PanningScheme || (GraphEdit.PanningScheme = {}));
    let GridPattern;
    (function (GridPattern) {
        GridPattern[GridPattern["GRID_PATTERN_LINES"] = 0] = "GRID_PATTERN_LINES";
        GridPattern[GridPattern["GRID_PATTERN_DOTS"] = 1] = "GRID_PATTERN_DOTS";
    })(GridPattern = GraphEdit.GridPattern || (GraphEdit.GridPattern = {}));
})(GraphEdit || (GraphEdit = {}));
export var StreamPeerTLS;
(function (StreamPeerTLS) {
    let Status;
    (function (Status) {
        Status[Status["STATUS_DISCONNECTED"] = 0] = "STATUS_DISCONNECTED";
        Status[Status["STATUS_HANDSHAKING"] = 1] = "STATUS_HANDSHAKING";
        Status[Status["STATUS_CONNECTED"] = 2] = "STATUS_CONNECTED";
        Status[Status["STATUS_ERROR"] = 3] = "STATUS_ERROR";
        Status[Status["STATUS_ERROR_HOSTNAME_MISMATCH"] = 4] = "STATUS_ERROR_HOSTNAME_MISMATCH";
    })(Status = StreamPeerTLS.Status || (StreamPeerTLS.Status = {}));
})(StreamPeerTLS || (StreamPeerTLS = {}));
export var SplitContainer;
(function (SplitContainer) {
    let DraggerVisibility;
    (function (DraggerVisibility) {
        DraggerVisibility[DraggerVisibility["DRAGGER_VISIBLE"] = 0] = "DRAGGER_VISIBLE";
        DraggerVisibility[DraggerVisibility["DRAGGER_HIDDEN"] = 1] = "DRAGGER_HIDDEN";
        DraggerVisibility[DraggerVisibility["DRAGGER_HIDDEN_COLLAPSED"] = 2] = "DRAGGER_HIDDEN_COLLAPSED";
    })(DraggerVisibility = SplitContainer.DraggerVisibility || (SplitContainer.DraggerVisibility = {}));
})(SplitContainer || (SplitContainer = {}));
export var EditorExportPreset;
(function (EditorExportPreset) {
    let ExportFilter;
    (function (ExportFilter) {
        ExportFilter[ExportFilter["EXPORT_ALL_RESOURCES"] = 0] = "EXPORT_ALL_RESOURCES";
        ExportFilter[ExportFilter["EXPORT_SELECTED_SCENES"] = 1] = "EXPORT_SELECTED_SCENES";
        ExportFilter[ExportFilter["EXPORT_SELECTED_RESOURCES"] = 2] = "EXPORT_SELECTED_RESOURCES";
        ExportFilter[ExportFilter["EXCLUDE_SELECTED_RESOURCES"] = 3] = "EXCLUDE_SELECTED_RESOURCES";
        ExportFilter[ExportFilter["EXPORT_CUSTOMIZED"] = 4] = "EXPORT_CUSTOMIZED";
    })(ExportFilter = EditorExportPreset.ExportFilter || (EditorExportPreset.ExportFilter = {}));
    let FileExportMode;
    (function (FileExportMode) {
        FileExportMode[FileExportMode["MODE_FILE_NOT_CUSTOMIZED"] = 0] = "MODE_FILE_NOT_CUSTOMIZED";
        FileExportMode[FileExportMode["MODE_FILE_STRIP"] = 1] = "MODE_FILE_STRIP";
        FileExportMode[FileExportMode["MODE_FILE_KEEP"] = 2] = "MODE_FILE_KEEP";
        FileExportMode[FileExportMode["MODE_FILE_REMOVE"] = 3] = "MODE_FILE_REMOVE";
    })(FileExportMode = EditorExportPreset.FileExportMode || (EditorExportPreset.FileExportMode = {}));
    let ScriptExportMode;
    (function (ScriptExportMode) {
        ScriptExportMode[ScriptExportMode["MODE_SCRIPT_TEXT"] = 0] = "MODE_SCRIPT_TEXT";
        ScriptExportMode[ScriptExportMode["MODE_SCRIPT_BINARY_TOKENS"] = 1] = "MODE_SCRIPT_BINARY_TOKENS";
        ScriptExportMode[ScriptExportMode["MODE_SCRIPT_BINARY_TOKENS_COMPRESSED"] = 2] = "MODE_SCRIPT_BINARY_TOKENS_COMPRESSED";
    })(ScriptExportMode = EditorExportPreset.ScriptExportMode || (EditorExportPreset.ScriptExportMode = {}));
})(EditorExportPreset || (EditorExportPreset = {}));
export var EditorContextMenuPlugin;
(function (EditorContextMenuPlugin) {
    let ContextMenuSlot;
    (function (ContextMenuSlot) {
        ContextMenuSlot[ContextMenuSlot["CONTEXT_SLOT_SCENE_TREE"] = 0] = "CONTEXT_SLOT_SCENE_TREE";
        ContextMenuSlot[ContextMenuSlot["CONTEXT_SLOT_FILESYSTEM"] = 1] = "CONTEXT_SLOT_FILESYSTEM";
        ContextMenuSlot[ContextMenuSlot["CONTEXT_SLOT_FILESYSTEM_CREATE"] = 3] = "CONTEXT_SLOT_FILESYSTEM_CREATE";
        ContextMenuSlot[ContextMenuSlot["CONTEXT_SLOT_SCRIPT_EDITOR"] = 2] = "CONTEXT_SLOT_SCRIPT_EDITOR";
    })(ContextMenuSlot = EditorContextMenuPlugin.ContextMenuSlot || (EditorContextMenuPlugin.ContextMenuSlot = {}));
})(EditorContextMenuPlugin || (EditorContextMenuPlugin = {}));
export var VisualShaderNodeIntOp;
(function (VisualShaderNodeIntOp) {
    let Operator;
    (function (Operator) {
        Operator[Operator["OP_ADD"] = 0] = "OP_ADD";
        Operator[Operator["OP_SUB"] = 1] = "OP_SUB";
        Operator[Operator["OP_MUL"] = 2] = "OP_MUL";
        Operator[Operator["OP_DIV"] = 3] = "OP_DIV";
        Operator[Operator["OP_MOD"] = 4] = "OP_MOD";
        Operator[Operator["OP_MAX"] = 5] = "OP_MAX";
        Operator[Operator["OP_MIN"] = 6] = "OP_MIN";
        Operator[Operator["OP_BITWISE_AND"] = 7] = "OP_BITWISE_AND";
        Operator[Operator["OP_BITWISE_OR"] = 8] = "OP_BITWISE_OR";
        Operator[Operator["OP_BITWISE_XOR"] = 9] = "OP_BITWISE_XOR";
        Operator[Operator["OP_BITWISE_LEFT_SHIFT"] = 10] = "OP_BITWISE_LEFT_SHIFT";
        Operator[Operator["OP_BITWISE_RIGHT_SHIFT"] = 11] = "OP_BITWISE_RIGHT_SHIFT";
        Operator[Operator["OP_ENUM_SIZE"] = 12] = "OP_ENUM_SIZE";
    })(Operator = VisualShaderNodeIntOp.Operator || (VisualShaderNodeIntOp.Operator = {}));
})(VisualShaderNodeIntOp || (VisualShaderNodeIntOp = {}));
export var EditorExportPlatform;
(function (EditorExportPlatform) {
    let ExportMessageType;
    (function (ExportMessageType) {
        ExportMessageType[ExportMessageType["EXPORT_MESSAGE_NONE"] = 0] = "EXPORT_MESSAGE_NONE";
        ExportMessageType[ExportMessageType["EXPORT_MESSAGE_INFO"] = 1] = "EXPORT_MESSAGE_INFO";
        ExportMessageType[ExportMessageType["EXPORT_MESSAGE_WARNING"] = 2] = "EXPORT_MESSAGE_WARNING";
        ExportMessageType[ExportMessageType["EXPORT_MESSAGE_ERROR"] = 3] = "EXPORT_MESSAGE_ERROR";
    })(ExportMessageType = EditorExportPlatform.ExportMessageType || (EditorExportPlatform.ExportMessageType = {}));
    let DebugFlags;
    (function (DebugFlags) {
        DebugFlags[DebugFlags["DEBUG_FLAG_DUMB_CLIENT"] = 1] = "DEBUG_FLAG_DUMB_CLIENT";
        DebugFlags[DebugFlags["DEBUG_FLAG_REMOTE_DEBUG"] = 2] = "DEBUG_FLAG_REMOTE_DEBUG";
        DebugFlags[DebugFlags["DEBUG_FLAG_REMOTE_DEBUG_LOCALHOST"] = 4] = "DEBUG_FLAG_REMOTE_DEBUG_LOCALHOST";
        DebugFlags[DebugFlags["DEBUG_FLAG_VIEW_COLLISIONS"] = 8] = "DEBUG_FLAG_VIEW_COLLISIONS";
        DebugFlags[DebugFlags["DEBUG_FLAG_VIEW_NAVIGATION"] = 16] = "DEBUG_FLAG_VIEW_NAVIGATION";
    })(DebugFlags = EditorExportPlatform.DebugFlags || (EditorExportPlatform.DebugFlags = {}));
})(EditorExportPlatform || (EditorExportPlatform = {}));
export var TextureLayered;
(function (TextureLayered) {
    let LayeredType;
    (function (LayeredType) {
        LayeredType[LayeredType["LAYERED_TYPE_2D_ARRAY"] = 0] = "LAYERED_TYPE_2D_ARRAY";
        LayeredType[LayeredType["LAYERED_TYPE_CUBEMAP"] = 1] = "LAYERED_TYPE_CUBEMAP";
        LayeredType[LayeredType["LAYERED_TYPE_CUBEMAP_ARRAY"] = 2] = "LAYERED_TYPE_CUBEMAP_ARRAY";
    })(LayeredType = TextureLayered.LayeredType || (TextureLayered.LayeredType = {}));
})(TextureLayered || (TextureLayered = {}));
export var VisualShaderNodeTransformOp;
(function (VisualShaderNodeTransformOp) {
    let Operator;
    (function (Operator) {
        Operator[Operator["OP_AxB"] = 0] = "OP_AxB";
        Operator[Operator["OP_BxA"] = 1] = "OP_BxA";
        Operator[Operator["OP_AxB_COMP"] = 2] = "OP_AxB_COMP";
        Operator[Operator["OP_BxA_COMP"] = 3] = "OP_BxA_COMP";
        Operator[Operator["OP_ADD"] = 4] = "OP_ADD";
        Operator[Operator["OP_A_MINUS_B"] = 5] = "OP_A_MINUS_B";
        Operator[Operator["OP_B_MINUS_A"] = 6] = "OP_B_MINUS_A";
        Operator[Operator["OP_A_DIV_B"] = 7] = "OP_A_DIV_B";
        Operator[Operator["OP_B_DIV_A"] = 8] = "OP_B_DIV_A";
        Operator[Operator["OP_MAX"] = 9] = "OP_MAX";
    })(Operator = VisualShaderNodeTransformOp.Operator || (VisualShaderNodeTransformOp.Operator = {}));
})(VisualShaderNodeTransformOp || (VisualShaderNodeTransformOp = {}));
export var DirectionalLight3D;
(function (DirectionalLight3D) {
    let ShadowMode;
    (function (ShadowMode) {
        ShadowMode[ShadowMode["SHADOW_ORTHOGONAL"] = 0] = "SHADOW_ORTHOGONAL";
        ShadowMode[ShadowMode["SHADOW_PARALLEL_2_SPLITS"] = 1] = "SHADOW_PARALLEL_2_SPLITS";
        ShadowMode[ShadowMode["SHADOW_PARALLEL_4_SPLITS"] = 2] = "SHADOW_PARALLEL_4_SPLITS";
    })(ShadowMode = DirectionalLight3D.ShadowMode || (DirectionalLight3D.ShadowMode = {}));
    let SkyMode;
    (function (SkyMode) {
        SkyMode[SkyMode["SKY_MODE_LIGHT_AND_SKY"] = 0] = "SKY_MODE_LIGHT_AND_SKY";
        SkyMode[SkyMode["SKY_MODE_LIGHT_ONLY"] = 1] = "SKY_MODE_LIGHT_ONLY";
        SkyMode[SkyMode["SKY_MODE_SKY_ONLY"] = 2] = "SKY_MODE_SKY_ONLY";
    })(SkyMode = DirectionalLight3D.SkyMode || (DirectionalLight3D.SkyMode = {}));
})(DirectionalLight3D || (DirectionalLight3D = {}));
export var JSONRPC;
(function (JSONRPC) {
    let ErrorCode;
    (function (ErrorCode) {
        ErrorCode[ErrorCode["PARSE_ERROR"] = -32700] = "PARSE_ERROR";
        ErrorCode[ErrorCode["INVALID_REQUEST"] = -32600] = "INVALID_REQUEST";
        ErrorCode[ErrorCode["METHOD_NOT_FOUND"] = -32601] = "METHOD_NOT_FOUND";
        ErrorCode[ErrorCode["INVALID_PARAMS"] = -32602] = "INVALID_PARAMS";
        ErrorCode[ErrorCode["INTERNAL_ERROR"] = -32603] = "INTERNAL_ERROR";
    })(ErrorCode = JSONRPC.ErrorCode || (JSONRPC.ErrorCode = {}));
})(JSONRPC || (JSONRPC = {}));
export var LineEdit;
(function (LineEdit) {
    let MenuItems;
    (function (MenuItems) {
        MenuItems[MenuItems["MENU_CUT"] = 0] = "MENU_CUT";
        MenuItems[MenuItems["MENU_COPY"] = 1] = "MENU_COPY";
        MenuItems[MenuItems["MENU_PASTE"] = 2] = "MENU_PASTE";
        MenuItems[MenuItems["MENU_CLEAR"] = 3] = "MENU_CLEAR";
        MenuItems[MenuItems["MENU_SELECT_ALL"] = 4] = "MENU_SELECT_ALL";
        MenuItems[MenuItems["MENU_UNDO"] = 5] = "MENU_UNDO";
        MenuItems[MenuItems["MENU_REDO"] = 6] = "MENU_REDO";
        MenuItems[MenuItems["MENU_SUBMENU_TEXT_DIR"] = 7] = "MENU_SUBMENU_TEXT_DIR";
        MenuItems[MenuItems["MENU_DIR_INHERITED"] = 8] = "MENU_DIR_INHERITED";
        MenuItems[MenuItems["MENU_DIR_AUTO"] = 9] = "MENU_DIR_AUTO";
        MenuItems[MenuItems["MENU_DIR_LTR"] = 10] = "MENU_DIR_LTR";
        MenuItems[MenuItems["MENU_DIR_RTL"] = 11] = "MENU_DIR_RTL";
        MenuItems[MenuItems["MENU_DISPLAY_UCC"] = 12] = "MENU_DISPLAY_UCC";
        MenuItems[MenuItems["MENU_SUBMENU_INSERT_UCC"] = 13] = "MENU_SUBMENU_INSERT_UCC";
        MenuItems[MenuItems["MENU_INSERT_LRM"] = 14] = "MENU_INSERT_LRM";
        MenuItems[MenuItems["MENU_INSERT_RLM"] = 15] = "MENU_INSERT_RLM";
        MenuItems[MenuItems["MENU_INSERT_LRE"] = 16] = "MENU_INSERT_LRE";
        MenuItems[MenuItems["MENU_INSERT_RLE"] = 17] = "MENU_INSERT_RLE";
        MenuItems[MenuItems["MENU_INSERT_LRO"] = 18] = "MENU_INSERT_LRO";
        MenuItems[MenuItems["MENU_INSERT_RLO"] = 19] = "MENU_INSERT_RLO";
        MenuItems[MenuItems["MENU_INSERT_PDF"] = 20] = "MENU_INSERT_PDF";
        MenuItems[MenuItems["MENU_INSERT_ALM"] = 21] = "MENU_INSERT_ALM";
        MenuItems[MenuItems["MENU_INSERT_LRI"] = 22] = "MENU_INSERT_LRI";
        MenuItems[MenuItems["MENU_INSERT_RLI"] = 23] = "MENU_INSERT_RLI";
        MenuItems[MenuItems["MENU_INSERT_FSI"] = 24] = "MENU_INSERT_FSI";
        MenuItems[MenuItems["MENU_INSERT_PDI"] = 25] = "MENU_INSERT_PDI";
        MenuItems[MenuItems["MENU_INSERT_ZWJ"] = 26] = "MENU_INSERT_ZWJ";
        MenuItems[MenuItems["MENU_INSERT_ZWNJ"] = 27] = "MENU_INSERT_ZWNJ";
        MenuItems[MenuItems["MENU_INSERT_WJ"] = 28] = "MENU_INSERT_WJ";
        MenuItems[MenuItems["MENU_INSERT_SHY"] = 29] = "MENU_INSERT_SHY";
        MenuItems[MenuItems["MENU_MAX"] = 30] = "MENU_MAX";
    })(MenuItems = LineEdit.MenuItems || (LineEdit.MenuItems = {}));
    let VirtualKeyboardType;
    (function (VirtualKeyboardType) {
        VirtualKeyboardType[VirtualKeyboardType["KEYBOARD_TYPE_DEFAULT"] = 0] = "KEYBOARD_TYPE_DEFAULT";
        VirtualKeyboardType[VirtualKeyboardType["KEYBOARD_TYPE_MULTILINE"] = 1] = "KEYBOARD_TYPE_MULTILINE";
        VirtualKeyboardType[VirtualKeyboardType["KEYBOARD_TYPE_NUMBER"] = 2] = "KEYBOARD_TYPE_NUMBER";
        VirtualKeyboardType[VirtualKeyboardType["KEYBOARD_TYPE_NUMBER_DECIMAL"] = 3] = "KEYBOARD_TYPE_NUMBER_DECIMAL";
        VirtualKeyboardType[VirtualKeyboardType["KEYBOARD_TYPE_PHONE"] = 4] = "KEYBOARD_TYPE_PHONE";
        VirtualKeyboardType[VirtualKeyboardType["KEYBOARD_TYPE_EMAIL_ADDRESS"] = 5] = "KEYBOARD_TYPE_EMAIL_ADDRESS";
        VirtualKeyboardType[VirtualKeyboardType["KEYBOARD_TYPE_PASSWORD"] = 6] = "KEYBOARD_TYPE_PASSWORD";
        VirtualKeyboardType[VirtualKeyboardType["KEYBOARD_TYPE_URL"] = 7] = "KEYBOARD_TYPE_URL";
    })(VirtualKeyboardType = LineEdit.VirtualKeyboardType || (LineEdit.VirtualKeyboardType = {}));
})(LineEdit || (LineEdit = {}));
export var HingeJoint3D;
(function (HingeJoint3D) {
    let Param;
    (function (Param) {
        Param[Param["PARAM_BIAS"] = 0] = "PARAM_BIAS";
        Param[Param["PARAM_LIMIT_UPPER"] = 1] = "PARAM_LIMIT_UPPER";
        Param[Param["PARAM_LIMIT_LOWER"] = 2] = "PARAM_LIMIT_LOWER";
        Param[Param["PARAM_LIMIT_BIAS"] = 3] = "PARAM_LIMIT_BIAS";
        Param[Param["PARAM_LIMIT_SOFTNESS"] = 4] = "PARAM_LIMIT_SOFTNESS";
        Param[Param["PARAM_LIMIT_RELAXATION"] = 5] = "PARAM_LIMIT_RELAXATION";
        Param[Param["PARAM_MOTOR_TARGET_VELOCITY"] = 6] = "PARAM_MOTOR_TARGET_VELOCITY";
        Param[Param["PARAM_MOTOR_MAX_IMPULSE"] = 7] = "PARAM_MOTOR_MAX_IMPULSE";
        Param[Param["PARAM_MAX"] = 8] = "PARAM_MAX";
    })(Param = HingeJoint3D.Param || (HingeJoint3D.Param = {}));
    let Flag;
    (function (Flag) {
        Flag[Flag["FLAG_USE_LIMIT"] = 0] = "FLAG_USE_LIMIT";
        Flag[Flag["FLAG_ENABLE_MOTOR"] = 1] = "FLAG_ENABLE_MOTOR";
        Flag[Flag["FLAG_MAX"] = 2] = "FLAG_MAX";
    })(Flag = HingeJoint3D.Flag || (HingeJoint3D.Flag = {}));
})(HingeJoint3D || (HingeJoint3D = {}));
export var ResourceSaver;
(function (ResourceSaver) {
    let SaverFlags;
    (function (SaverFlags) {
        SaverFlags[SaverFlags["FLAG_NONE"] = 0] = "FLAG_NONE";
        SaverFlags[SaverFlags["FLAG_RELATIVE_PATHS"] = 1] = "FLAG_RELATIVE_PATHS";
        SaverFlags[SaverFlags["FLAG_BUNDLE_RESOURCES"] = 2] = "FLAG_BUNDLE_RESOURCES";
        SaverFlags[SaverFlags["FLAG_CHANGE_PATH"] = 4] = "FLAG_CHANGE_PATH";
        SaverFlags[SaverFlags["FLAG_OMIT_EDITOR_PROPERTIES"] = 8] = "FLAG_OMIT_EDITOR_PROPERTIES";
        SaverFlags[SaverFlags["FLAG_SAVE_BIG_ENDIAN"] = 16] = "FLAG_SAVE_BIG_ENDIAN";
        SaverFlags[SaverFlags["FLAG_COMPRESS"] = 32] = "FLAG_COMPRESS";
        SaverFlags[SaverFlags["FLAG_REPLACE_SUBRESOURCE_PATHS"] = 64] = "FLAG_REPLACE_SUBRESOURCE_PATHS";
    })(SaverFlags = ResourceSaver.SaverFlags || (ResourceSaver.SaverFlags = {}));
})(ResourceSaver || (ResourceSaver = {}));
export var GPUParticlesCollisionSDF3D;
(function (GPUParticlesCollisionSDF3D) {
    let Resolution;
    (function (Resolution) {
        Resolution[Resolution["RESOLUTION_16"] = 0] = "RESOLUTION_16";
        Resolution[Resolution["RESOLUTION_32"] = 1] = "RESOLUTION_32";
        Resolution[Resolution["RESOLUTION_64"] = 2] = "RESOLUTION_64";
        Resolution[Resolution["RESOLUTION_128"] = 3] = "RESOLUTION_128";
        Resolution[Resolution["RESOLUTION_256"] = 4] = "RESOLUTION_256";
        Resolution[Resolution["RESOLUTION_512"] = 5] = "RESOLUTION_512";
        Resolution[Resolution["RESOLUTION_MAX"] = 6] = "RESOLUTION_MAX";
    })(Resolution = GPUParticlesCollisionSDF3D.Resolution || (GPUParticlesCollisionSDF3D.Resolution = {}));
})(GPUParticlesCollisionSDF3D || (GPUParticlesCollisionSDF3D = {}));
export var ScriptLanguageExtension;
(function (ScriptLanguageExtension) {
    let LookupResultType;
    (function (LookupResultType) {
        LookupResultType[LookupResultType["LOOKUP_RESULT_SCRIPT_LOCATION"] = 0] = "LOOKUP_RESULT_SCRIPT_LOCATION";
        LookupResultType[LookupResultType["LOOKUP_RESULT_CLASS"] = 1] = "LOOKUP_RESULT_CLASS";
        LookupResultType[LookupResultType["LOOKUP_RESULT_CLASS_CONSTANT"] = 2] = "LOOKUP_RESULT_CLASS_CONSTANT";
        LookupResultType[LookupResultType["LOOKUP_RESULT_CLASS_PROPERTY"] = 3] = "LOOKUP_RESULT_CLASS_PROPERTY";
        LookupResultType[LookupResultType["LOOKUP_RESULT_CLASS_METHOD"] = 4] = "LOOKUP_RESULT_CLASS_METHOD";
        LookupResultType[LookupResultType["LOOKUP_RESULT_CLASS_SIGNAL"] = 5] = "LOOKUP_RESULT_CLASS_SIGNAL";
        LookupResultType[LookupResultType["LOOKUP_RESULT_CLASS_ENUM"] = 6] = "LOOKUP_RESULT_CLASS_ENUM";
        LookupResultType[LookupResultType["LOOKUP_RESULT_CLASS_TBD_GLOBALSCOPE"] = 7] = "LOOKUP_RESULT_CLASS_TBD_GLOBALSCOPE";
        LookupResultType[LookupResultType["LOOKUP_RESULT_CLASS_ANNOTATION"] = 8] = "LOOKUP_RESULT_CLASS_ANNOTATION";
        LookupResultType[LookupResultType["LOOKUP_RESULT_MAX"] = 9] = "LOOKUP_RESULT_MAX";
    })(LookupResultType = ScriptLanguageExtension.LookupResultType || (ScriptLanguageExtension.LookupResultType = {}));
    let CodeCompletionLocation;
    (function (CodeCompletionLocation) {
        CodeCompletionLocation[CodeCompletionLocation["LOCATION_LOCAL"] = 0] = "LOCATION_LOCAL";
        CodeCompletionLocation[CodeCompletionLocation["LOCATION_PARENT_MASK"] = 256] = "LOCATION_PARENT_MASK";
        CodeCompletionLocation[CodeCompletionLocation["LOCATION_OTHER_USER_CODE"] = 512] = "LOCATION_OTHER_USER_CODE";
        CodeCompletionLocation[CodeCompletionLocation["LOCATION_OTHER"] = 1024] = "LOCATION_OTHER";
    })(CodeCompletionLocation = ScriptLanguageExtension.CodeCompletionLocation || (ScriptLanguageExtension.CodeCompletionLocation = {}));
    let CodeCompletionKind;
    (function (CodeCompletionKind) {
        CodeCompletionKind[CodeCompletionKind["CODE_COMPLETION_KIND_CLASS"] = 0] = "CODE_COMPLETION_KIND_CLASS";
        CodeCompletionKind[CodeCompletionKind["CODE_COMPLETION_KIND_FUNCTION"] = 1] = "CODE_COMPLETION_KIND_FUNCTION";
        CodeCompletionKind[CodeCompletionKind["CODE_COMPLETION_KIND_SIGNAL"] = 2] = "CODE_COMPLETION_KIND_SIGNAL";
        CodeCompletionKind[CodeCompletionKind["CODE_COMPLETION_KIND_VARIABLE"] = 3] = "CODE_COMPLETION_KIND_VARIABLE";
        CodeCompletionKind[CodeCompletionKind["CODE_COMPLETION_KIND_MEMBER"] = 4] = "CODE_COMPLETION_KIND_MEMBER";
        CodeCompletionKind[CodeCompletionKind["CODE_COMPLETION_KIND_ENUM"] = 5] = "CODE_COMPLETION_KIND_ENUM";
        CodeCompletionKind[CodeCompletionKind["CODE_COMPLETION_KIND_CONSTANT"] = 6] = "CODE_COMPLETION_KIND_CONSTANT";
        CodeCompletionKind[CodeCompletionKind["CODE_COMPLETION_KIND_NODE_PATH"] = 7] = "CODE_COMPLETION_KIND_NODE_PATH";
        CodeCompletionKind[CodeCompletionKind["CODE_COMPLETION_KIND_FILE_PATH"] = 8] = "CODE_COMPLETION_KIND_FILE_PATH";
        CodeCompletionKind[CodeCompletionKind["CODE_COMPLETION_KIND_PLAIN_TEXT"] = 9] = "CODE_COMPLETION_KIND_PLAIN_TEXT";
        CodeCompletionKind[CodeCompletionKind["CODE_COMPLETION_KIND_MAX"] = 10] = "CODE_COMPLETION_KIND_MAX";
    })(CodeCompletionKind = ScriptLanguageExtension.CodeCompletionKind || (ScriptLanguageExtension.CodeCompletionKind = {}));
})(ScriptLanguageExtension || (ScriptLanguageExtension = {}));
export var ResourceLoader;
(function (ResourceLoader) {
    let ThreadLoadStatus;
    (function (ThreadLoadStatus) {
        ThreadLoadStatus[ThreadLoadStatus["THREAD_LOAD_INVALID_RESOURCE"] = 0] = "THREAD_LOAD_INVALID_RESOURCE";
        ThreadLoadStatus[ThreadLoadStatus["THREAD_LOAD_IN_PROGRESS"] = 1] = "THREAD_LOAD_IN_PROGRESS";
        ThreadLoadStatus[ThreadLoadStatus["THREAD_LOAD_FAILED"] = 2] = "THREAD_LOAD_FAILED";
        ThreadLoadStatus[ThreadLoadStatus["THREAD_LOAD_LOADED"] = 3] = "THREAD_LOAD_LOADED";
    })(ThreadLoadStatus = ResourceLoader.ThreadLoadStatus || (ResourceLoader.ThreadLoadStatus = {}));
    let CacheMode;
    (function (CacheMode) {
        CacheMode[CacheMode["CACHE_MODE_IGNORE"] = 0] = "CACHE_MODE_IGNORE";
        CacheMode[CacheMode["CACHE_MODE_REUSE"] = 1] = "CACHE_MODE_REUSE";
        CacheMode[CacheMode["CACHE_MODE_REPLACE"] = 2] = "CACHE_MODE_REPLACE";
        CacheMode[CacheMode["CACHE_MODE_IGNORE_DEEP"] = 3] = "CACHE_MODE_IGNORE_DEEP";
        CacheMode[CacheMode["CACHE_MODE_REPLACE_DEEP"] = 4] = "CACHE_MODE_REPLACE_DEEP";
    })(CacheMode = ResourceLoader.CacheMode || (ResourceLoader.CacheMode = {}));
})(ResourceLoader || (ResourceLoader = {}));
export var AnimationNodeBlendTree;
(function (AnimationNodeBlendTree) {
    AnimationNodeBlendTree.CONNECTION_OK = 0;
    AnimationNodeBlendTree.CONNECTION_ERROR_NO_INPUT = 1;
    AnimationNodeBlendTree.CONNECTION_ERROR_NO_INPUT_INDEX = 2;
    AnimationNodeBlendTree.CONNECTION_ERROR_NO_OUTPUT = 3;
    AnimationNodeBlendTree.CONNECTION_ERROR_SAME_NODE = 4;
    AnimationNodeBlendTree.CONNECTION_ERROR_CONNECTION_EXISTS = 5;
})(AnimationNodeBlendTree || (AnimationNodeBlendTree = {}));
export var AnimationNodeBlendSpace1D;
(function (AnimationNodeBlendSpace1D) {
    let BlendMode;
    (function (BlendMode) {
        BlendMode[BlendMode["BLEND_MODE_INTERPOLATED"] = 0] = "BLEND_MODE_INTERPOLATED";
        BlendMode[BlendMode["BLEND_MODE_DISCRETE"] = 1] = "BLEND_MODE_DISCRETE";
        BlendMode[BlendMode["BLEND_MODE_DISCRETE_CARRY"] = 2] = "BLEND_MODE_DISCRETE_CARRY";
    })(BlendMode = AnimationNodeBlendSpace1D.BlendMode || (AnimationNodeBlendSpace1D.BlendMode = {}));
})(AnimationNodeBlendSpace1D || (AnimationNodeBlendSpace1D = {}));
export var HashingContext;
(function (HashingContext) {
    let HashType;
    (function (HashType) {
        HashType[HashType["HASH_MD5"] = 0] = "HASH_MD5";
        HashType[HashType["HASH_SHA1"] = 1] = "HASH_SHA1";
        HashType[HashType["HASH_SHA256"] = 2] = "HASH_SHA256";
    })(HashType = HashingContext.HashType || (HashingContext.HashType = {}));
})(HashingContext || (HashingContext = {}));
export var AudioServer;
(function (AudioServer) {
    let SpeakerMode;
    (function (SpeakerMode) {
        SpeakerMode[SpeakerMode["SPEAKER_MODE_STEREO"] = 0] = "SPEAKER_MODE_STEREO";
        SpeakerMode[SpeakerMode["SPEAKER_SURROUND_31"] = 1] = "SPEAKER_SURROUND_31";
        SpeakerMode[SpeakerMode["SPEAKER_SURROUND_51"] = 2] = "SPEAKER_SURROUND_51";
        SpeakerMode[SpeakerMode["SPEAKER_SURROUND_71"] = 3] = "SPEAKER_SURROUND_71";
    })(SpeakerMode = AudioServer.SpeakerMode || (AudioServer.SpeakerMode = {}));
    let PlaybackType;
    (function (PlaybackType) {
        PlaybackType[PlaybackType["PLAYBACK_TYPE_DEFAULT"] = 0] = "PLAYBACK_TYPE_DEFAULT";
        PlaybackType[PlaybackType["PLAYBACK_TYPE_STREAM"] = 1] = "PLAYBACK_TYPE_STREAM";
        PlaybackType[PlaybackType["PLAYBACK_TYPE_SAMPLE"] = 2] = "PLAYBACK_TYPE_SAMPLE";
        PlaybackType[PlaybackType["PLAYBACK_TYPE_MAX"] = 3] = "PLAYBACK_TYPE_MAX";
    })(PlaybackType = AudioServer.PlaybackType || (AudioServer.PlaybackType = {}));
})(AudioServer || (AudioServer = {}));
export var VisualShaderNodeSample3D;
(function (VisualShaderNodeSample3D) {
    let Source;
    (function (Source) {
        Source[Source["SOURCE_TEXTURE"] = 0] = "SOURCE_TEXTURE";
        Source[Source["SOURCE_PORT"] = 1] = "SOURCE_PORT";
        Source[Source["SOURCE_MAX"] = 2] = "SOURCE_MAX";
    })(Source = VisualShaderNodeSample3D.Source || (VisualShaderNodeSample3D.Source = {}));
})(VisualShaderNodeSample3D || (VisualShaderNodeSample3D = {}));
export var PathFollow3D;
(function (PathFollow3D) {
    let RotationMode;
    (function (RotationMode) {
        RotationMode[RotationMode["ROTATION_NONE"] = 0] = "ROTATION_NONE";
        RotationMode[RotationMode["ROTATION_Y"] = 1] = "ROTATION_Y";
        RotationMode[RotationMode["ROTATION_XY"] = 2] = "ROTATION_XY";
        RotationMode[RotationMode["ROTATION_XYZ"] = 3] = "ROTATION_XYZ";
        RotationMode[RotationMode["ROTATION_ORIENTED"] = 4] = "ROTATION_ORIENTED";
    })(RotationMode = PathFollow3D.RotationMode || (PathFollow3D.RotationMode = {}));
})(PathFollow3D || (PathFollow3D = {}));
export var XRServer;
(function (XRServer) {
    let TrackerType;
    (function (TrackerType) {
        TrackerType[TrackerType["TRACKER_HEAD"] = 1] = "TRACKER_HEAD";
        TrackerType[TrackerType["TRACKER_CONTROLLER"] = 2] = "TRACKER_CONTROLLER";
        TrackerType[TrackerType["TRACKER_BASESTATION"] = 4] = "TRACKER_BASESTATION";
        TrackerType[TrackerType["TRACKER_ANCHOR"] = 8] = "TRACKER_ANCHOR";
        TrackerType[TrackerType["TRACKER_HAND"] = 16] = "TRACKER_HAND";
        TrackerType[TrackerType["TRACKER_BODY"] = 32] = "TRACKER_BODY";
        TrackerType[TrackerType["TRACKER_FACE"] = 64] = "TRACKER_FACE";
        TrackerType[TrackerType["TRACKER_ANY_KNOWN"] = 127] = "TRACKER_ANY_KNOWN";
        TrackerType[TrackerType["TRACKER_UNKNOWN"] = 128] = "TRACKER_UNKNOWN";
        TrackerType[TrackerType["TRACKER_ANY"] = 255] = "TRACKER_ANY";
    })(TrackerType = XRServer.TrackerType || (XRServer.TrackerType = {}));
    let RotationMode;
    (function (RotationMode) {
        RotationMode[RotationMode["RESET_FULL_ROTATION"] = 0] = "RESET_FULL_ROTATION";
        RotationMode[RotationMode["RESET_BUT_KEEP_TILT"] = 1] = "RESET_BUT_KEEP_TILT";
        RotationMode[RotationMode["DONT_RESET_ROTATION"] = 2] = "DONT_RESET_ROTATION";
    })(RotationMode = XRServer.RotationMode || (XRServer.RotationMode = {}));
})(XRServer || (XRServer = {}));
export var EditorPlugin;
(function (EditorPlugin) {
    let CustomControlContainer;
    (function (CustomControlContainer) {
        CustomControlContainer[CustomControlContainer["CONTAINER_TOOLBAR"] = 0] = "CONTAINER_TOOLBAR";
        CustomControlContainer[CustomControlContainer["CONTAINER_SPATIAL_EDITOR_MENU"] = 1] = "CONTAINER_SPATIAL_EDITOR_MENU";
        CustomControlContainer[CustomControlContainer["CONTAINER_SPATIAL_EDITOR_SIDE_LEFT"] = 2] = "CONTAINER_SPATIAL_EDITOR_SIDE_LEFT";
        CustomControlContainer[CustomControlContainer["CONTAINER_SPATIAL_EDITOR_SIDE_RIGHT"] = 3] = "CONTAINER_SPATIAL_EDITOR_SIDE_RIGHT";
        CustomControlContainer[CustomControlContainer["CONTAINER_SPATIAL_EDITOR_BOTTOM"] = 4] = "CONTAINER_SPATIAL_EDITOR_BOTTOM";
        CustomControlContainer[CustomControlContainer["CONTAINER_CANVAS_EDITOR_MENU"] = 5] = "CONTAINER_CANVAS_EDITOR_MENU";
        CustomControlContainer[CustomControlContainer["CONTAINER_CANVAS_EDITOR_SIDE_LEFT"] = 6] = "CONTAINER_CANVAS_EDITOR_SIDE_LEFT";
        CustomControlContainer[CustomControlContainer["CONTAINER_CANVAS_EDITOR_SIDE_RIGHT"] = 7] = "CONTAINER_CANVAS_EDITOR_SIDE_RIGHT";
        CustomControlContainer[CustomControlContainer["CONTAINER_CANVAS_EDITOR_BOTTOM"] = 8] = "CONTAINER_CANVAS_EDITOR_BOTTOM";
        CustomControlContainer[CustomControlContainer["CONTAINER_INSPECTOR_BOTTOM"] = 9] = "CONTAINER_INSPECTOR_BOTTOM";
        CustomControlContainer[CustomControlContainer["CONTAINER_PROJECT_SETTING_TAB_LEFT"] = 10] = "CONTAINER_PROJECT_SETTING_TAB_LEFT";
        CustomControlContainer[CustomControlContainer["CONTAINER_PROJECT_SETTING_TAB_RIGHT"] = 11] = "CONTAINER_PROJECT_SETTING_TAB_RIGHT";
    })(CustomControlContainer = EditorPlugin.CustomControlContainer || (EditorPlugin.CustomControlContainer = {}));
    let DockSlot;
    (function (DockSlot) {
        DockSlot[DockSlot["DOCK_SLOT_LEFT_UL"] = 0] = "DOCK_SLOT_LEFT_UL";
        DockSlot[DockSlot["DOCK_SLOT_LEFT_BL"] = 1] = "DOCK_SLOT_LEFT_BL";
        DockSlot[DockSlot["DOCK_SLOT_LEFT_UR"] = 2] = "DOCK_SLOT_LEFT_UR";
        DockSlot[DockSlot["DOCK_SLOT_LEFT_BR"] = 3] = "DOCK_SLOT_LEFT_BR";
        DockSlot[DockSlot["DOCK_SLOT_RIGHT_UL"] = 4] = "DOCK_SLOT_RIGHT_UL";
        DockSlot[DockSlot["DOCK_SLOT_RIGHT_BL"] = 5] = "DOCK_SLOT_RIGHT_BL";
        DockSlot[DockSlot["DOCK_SLOT_RIGHT_UR"] = 6] = "DOCK_SLOT_RIGHT_UR";
        DockSlot[DockSlot["DOCK_SLOT_RIGHT_BR"] = 7] = "DOCK_SLOT_RIGHT_BR";
        DockSlot[DockSlot["DOCK_SLOT_MAX"] = 8] = "DOCK_SLOT_MAX";
    })(DockSlot = EditorPlugin.DockSlot || (EditorPlugin.DockSlot = {}));
    let AfterGUIInput;
    (function (AfterGUIInput) {
        AfterGUIInput[AfterGUIInput["AFTER_GUI_INPUT_PASS"] = 0] = "AFTER_GUI_INPUT_PASS";
        AfterGUIInput[AfterGUIInput["AFTER_GUI_INPUT_STOP"] = 1] = "AFTER_GUI_INPUT_STOP";
        AfterGUIInput[AfterGUIInput["AFTER_GUI_INPUT_CUSTOM"] = 2] = "AFTER_GUI_INPUT_CUSTOM";
    })(AfterGUIInput = EditorPlugin.AfterGUIInput || (EditorPlugin.AfterGUIInput = {}));
})(EditorPlugin || (EditorPlugin = {}));
export var VisualShaderNodeDerivativeFunc;
(function (VisualShaderNodeDerivativeFunc) {
    let OpType;
    (function (OpType) {
        OpType[OpType["OP_TYPE_SCALAR"] = 0] = "OP_TYPE_SCALAR";
        OpType[OpType["OP_TYPE_VECTOR_2D"] = 1] = "OP_TYPE_VECTOR_2D";
        OpType[OpType["OP_TYPE_VECTOR_3D"] = 2] = "OP_TYPE_VECTOR_3D";
        OpType[OpType["OP_TYPE_VECTOR_4D"] = 3] = "OP_TYPE_VECTOR_4D";
        OpType[OpType["OP_TYPE_MAX"] = 4] = "OP_TYPE_MAX";
    })(OpType = VisualShaderNodeDerivativeFunc.OpType || (VisualShaderNodeDerivativeFunc.OpType = {}));
    let Function;
    (function (Function) {
        Function[Function["FUNC_SUM"] = 0] = "FUNC_SUM";
        Function[Function["FUNC_X"] = 1] = "FUNC_X";
        Function[Function["FUNC_Y"] = 2] = "FUNC_Y";
        Function[Function["FUNC_MAX"] = 3] = "FUNC_MAX";
    })(Function = VisualShaderNodeDerivativeFunc.Function || (VisualShaderNodeDerivativeFunc.Function = {}));
    let Precision;
    (function (Precision) {
        Precision[Precision["PRECISION_NONE"] = 0] = "PRECISION_NONE";
        Precision[Precision["PRECISION_COARSE"] = 1] = "PRECISION_COARSE";
        Precision[Precision["PRECISION_FINE"] = 2] = "PRECISION_FINE";
        Precision[Precision["PRECISION_MAX"] = 3] = "PRECISION_MAX";
    })(Precision = VisualShaderNodeDerivativeFunc.Precision || (VisualShaderNodeDerivativeFunc.Precision = {}));
})(VisualShaderNodeDerivativeFunc || (VisualShaderNodeDerivativeFunc = {}));
export var SoftBody3D;
(function (SoftBody3D) {
    let DisableMode;
    (function (DisableMode) {
        DisableMode[DisableMode["DISABLE_MODE_REMOVE"] = 0] = "DISABLE_MODE_REMOVE";
        DisableMode[DisableMode["DISABLE_MODE_KEEP_ACTIVE"] = 1] = "DISABLE_MODE_KEEP_ACTIVE";
    })(DisableMode = SoftBody3D.DisableMode || (SoftBody3D.DisableMode = {}));
})(SoftBody3D || (SoftBody3D = {}));
export var BoxContainer;
(function (BoxContainer) {
    let AlignmentMode;
    (function (AlignmentMode) {
        AlignmentMode[AlignmentMode["ALIGNMENT_BEGIN"] = 0] = "ALIGNMENT_BEGIN";
        AlignmentMode[AlignmentMode["ALIGNMENT_CENTER"] = 1] = "ALIGNMENT_CENTER";
        AlignmentMode[AlignmentMode["ALIGNMENT_END"] = 2] = "ALIGNMENT_END";
    })(AlignmentMode = BoxContainer.AlignmentMode || (BoxContainer.AlignmentMode = {}));
})(BoxContainer || (BoxContainer = {}));
export var AudioEffectSpectrumAnalyzerInstance;
(function (AudioEffectSpectrumAnalyzerInstance) {
    let MagnitudeMode;
    (function (MagnitudeMode) {
        MagnitudeMode[MagnitudeMode["MAGNITUDE_AVERAGE"] = 0] = "MAGNITUDE_AVERAGE";
        MagnitudeMode[MagnitudeMode["MAGNITUDE_MAX"] = 1] = "MAGNITUDE_MAX";
    })(MagnitudeMode = AudioEffectSpectrumAnalyzerInstance.MagnitudeMode || (AudioEffectSpectrumAnalyzerInstance.MagnitudeMode = {}));
})(AudioEffectSpectrumAnalyzerInstance || (AudioEffectSpectrumAnalyzerInstance = {}));
export var Curve;
(function (Curve) {
    let TangentMode;
    (function (TangentMode) {
        TangentMode[TangentMode["TANGENT_FREE"] = 0] = "TANGENT_FREE";
        TangentMode[TangentMode["TANGENT_LINEAR"] = 1] = "TANGENT_LINEAR";
        TangentMode[TangentMode["TANGENT_MODE_COUNT"] = 2] = "TANGENT_MODE_COUNT";
    })(TangentMode = Curve.TangentMode || (Curve.TangentMode = {}));
})(Curve || (Curve = {}));
export var TabContainer;
(function (TabContainer) {
    let TabPosition;
    (function (TabPosition) {
        TabPosition[TabPosition["POSITION_TOP"] = 0] = "POSITION_TOP";
        TabPosition[TabPosition["POSITION_BOTTOM"] = 1] = "POSITION_BOTTOM";
        TabPosition[TabPosition["POSITION_MAX"] = 2] = "POSITION_MAX";
    })(TabPosition = TabContainer.TabPosition || (TabContainer.TabPosition = {}));
})(TabContainer || (TabContainer = {}));
export var PacketPeerDTLS;
(function (PacketPeerDTLS) {
    let Status;
    (function (Status) {
        Status[Status["STATUS_DISCONNECTED"] = 0] = "STATUS_DISCONNECTED";
        Status[Status["STATUS_HANDSHAKING"] = 1] = "STATUS_HANDSHAKING";
        Status[Status["STATUS_CONNECTED"] = 2] = "STATUS_CONNECTED";
        Status[Status["STATUS_ERROR"] = 3] = "STATUS_ERROR";
        Status[Status["STATUS_ERROR_HOSTNAME_MISMATCH"] = 4] = "STATUS_ERROR_HOSTNAME_MISMATCH";
    })(Status = PacketPeerDTLS.Status || (PacketPeerDTLS.Status = {}));
})(PacketPeerDTLS || (PacketPeerDTLS = {}));
export var VisualShaderNodeSmoothStep;
(function (VisualShaderNodeSmoothStep) {
    let OpType;
    (function (OpType) {
        OpType[OpType["OP_TYPE_SCALAR"] = 0] = "OP_TYPE_SCALAR";
        OpType[OpType["OP_TYPE_VECTOR_2D"] = 1] = "OP_TYPE_VECTOR_2D";
        OpType[OpType["OP_TYPE_VECTOR_2D_SCALAR"] = 2] = "OP_TYPE_VECTOR_2D_SCALAR";
        OpType[OpType["OP_TYPE_VECTOR_3D"] = 3] = "OP_TYPE_VECTOR_3D";
        OpType[OpType["OP_TYPE_VECTOR_3D_SCALAR"] = 4] = "OP_TYPE_VECTOR_3D_SCALAR";
        OpType[OpType["OP_TYPE_VECTOR_4D"] = 5] = "OP_TYPE_VECTOR_4D";
        OpType[OpType["OP_TYPE_VECTOR_4D_SCALAR"] = 6] = "OP_TYPE_VECTOR_4D_SCALAR";
        OpType[OpType["OP_TYPE_MAX"] = 7] = "OP_TYPE_MAX";
    })(OpType = VisualShaderNodeSmoothStep.OpType || (VisualShaderNodeSmoothStep.OpType = {}));
})(VisualShaderNodeSmoothStep || (VisualShaderNodeSmoothStep = {}));
export var VisualShaderNodeParameter;
(function (VisualShaderNodeParameter) {
    let Qualifier;
    (function (Qualifier) {
        Qualifier[Qualifier["QUAL_NONE"] = 0] = "QUAL_NONE";
        Qualifier[Qualifier["QUAL_GLOBAL"] = 1] = "QUAL_GLOBAL";
        Qualifier[Qualifier["QUAL_INSTANCE"] = 2] = "QUAL_INSTANCE";
        Qualifier[Qualifier["QUAL_MAX"] = 3] = "QUAL_MAX";
    })(Qualifier = VisualShaderNodeParameter.Qualifier || (VisualShaderNodeParameter.Qualifier = {}));
})(VisualShaderNodeParameter || (VisualShaderNodeParameter = {}));
export var DisplayServer;
(function (DisplayServer) {
    let Feature;
    (function (Feature) {
        Feature[Feature["FEATURE_GLOBAL_MENU"] = 0] = "FEATURE_GLOBAL_MENU";
        Feature[Feature["FEATURE_SUBWINDOWS"] = 1] = "FEATURE_SUBWINDOWS";
        Feature[Feature["FEATURE_TOUCHSCREEN"] = 2] = "FEATURE_TOUCHSCREEN";
        Feature[Feature["FEATURE_MOUSE"] = 3] = "FEATURE_MOUSE";
        Feature[Feature["FEATURE_MOUSE_WARP"] = 4] = "FEATURE_MOUSE_WARP";
        Feature[Feature["FEATURE_CLIPBOARD"] = 5] = "FEATURE_CLIPBOARD";
        Feature[Feature["FEATURE_VIRTUAL_KEYBOARD"] = 6] = "FEATURE_VIRTUAL_KEYBOARD";
        Feature[Feature["FEATURE_CURSOR_SHAPE"] = 7] = "FEATURE_CURSOR_SHAPE";
        Feature[Feature["FEATURE_CUSTOM_CURSOR_SHAPE"] = 8] = "FEATURE_CUSTOM_CURSOR_SHAPE";
        Feature[Feature["FEATURE_NATIVE_DIALOG"] = 9] = "FEATURE_NATIVE_DIALOG";
        Feature[Feature["FEATURE_IME"] = 10] = "FEATURE_IME";
        Feature[Feature["FEATURE_WINDOW_TRANSPARENCY"] = 11] = "FEATURE_WINDOW_TRANSPARENCY";
        Feature[Feature["FEATURE_HIDPI"] = 12] = "FEATURE_HIDPI";
        Feature[Feature["FEATURE_ICON"] = 13] = "FEATURE_ICON";
        Feature[Feature["FEATURE_NATIVE_ICON"] = 14] = "FEATURE_NATIVE_ICON";
        Feature[Feature["FEATURE_ORIENTATION"] = 15] = "FEATURE_ORIENTATION";
        Feature[Feature["FEATURE_SWAP_BUFFERS"] = 16] = "FEATURE_SWAP_BUFFERS";
        Feature[Feature["FEATURE_CLIPBOARD_PRIMARY"] = 18] = "FEATURE_CLIPBOARD_PRIMARY";
        Feature[Feature["FEATURE_TEXT_TO_SPEECH"] = 19] = "FEATURE_TEXT_TO_SPEECH";
        Feature[Feature["FEATURE_EXTEND_TO_TITLE"] = 20] = "FEATURE_EXTEND_TO_TITLE";
        Feature[Feature["FEATURE_SCREEN_CAPTURE"] = 21] = "FEATURE_SCREEN_CAPTURE";
        Feature[Feature["FEATURE_STATUS_INDICATOR"] = 22] = "FEATURE_STATUS_INDICATOR";
        Feature[Feature["FEATURE_NATIVE_HELP"] = 23] = "FEATURE_NATIVE_HELP";
        Feature[Feature["FEATURE_NATIVE_DIALOG_INPUT"] = 24] = "FEATURE_NATIVE_DIALOG_INPUT";
        Feature[Feature["FEATURE_NATIVE_DIALOG_FILE"] = 25] = "FEATURE_NATIVE_DIALOG_FILE";
        Feature[Feature["FEATURE_NATIVE_DIALOG_FILE_EXTRA"] = 26] = "FEATURE_NATIVE_DIALOG_FILE_EXTRA";
    })(Feature = DisplayServer.Feature || (DisplayServer.Feature = {}));
    let MouseMode;
    (function (MouseMode) {
        MouseMode[MouseMode["MOUSE_MODE_VISIBLE"] = 0] = "MOUSE_MODE_VISIBLE";
        MouseMode[MouseMode["MOUSE_MODE_HIDDEN"] = 1] = "MOUSE_MODE_HIDDEN";
        MouseMode[MouseMode["MOUSE_MODE_CAPTURED"] = 2] = "MOUSE_MODE_CAPTURED";
        MouseMode[MouseMode["MOUSE_MODE_CONFINED"] = 3] = "MOUSE_MODE_CONFINED";
        MouseMode[MouseMode["MOUSE_MODE_CONFINED_HIDDEN"] = 4] = "MOUSE_MODE_CONFINED_HIDDEN";
    })(MouseMode = DisplayServer.MouseMode || (DisplayServer.MouseMode = {}));
    DisplayServer.SCREEN_WITH_MOUSE_FOCUS = -4;
    DisplayServer.SCREEN_WITH_KEYBOARD_FOCUS = -3;
    DisplayServer.SCREEN_PRIMARY = -2;
    DisplayServer.SCREEN_OF_MAIN_WINDOW = -1;
    DisplayServer.MAIN_WINDOW_ID = 0;
    DisplayServer.INVALID_WINDOW_ID = -1;
    DisplayServer.INVALID_INDICATOR_ID = -1;
    let ScreenOrientation;
    (function (ScreenOrientation) {
        ScreenOrientation[ScreenOrientation["SCREEN_LANDSCAPE"] = 0] = "SCREEN_LANDSCAPE";
        ScreenOrientation[ScreenOrientation["SCREEN_PORTRAIT"] = 1] = "SCREEN_PORTRAIT";
        ScreenOrientation[ScreenOrientation["SCREEN_REVERSE_LANDSCAPE"] = 2] = "SCREEN_REVERSE_LANDSCAPE";
        ScreenOrientation[ScreenOrientation["SCREEN_REVERSE_PORTRAIT"] = 3] = "SCREEN_REVERSE_PORTRAIT";
        ScreenOrientation[ScreenOrientation["SCREEN_SENSOR_LANDSCAPE"] = 4] = "SCREEN_SENSOR_LANDSCAPE";
        ScreenOrientation[ScreenOrientation["SCREEN_SENSOR_PORTRAIT"] = 5] = "SCREEN_SENSOR_PORTRAIT";
        ScreenOrientation[ScreenOrientation["SCREEN_SENSOR"] = 6] = "SCREEN_SENSOR";
    })(ScreenOrientation = DisplayServer.ScreenOrientation || (DisplayServer.ScreenOrientation = {}));
    let VirtualKeyboardType;
    (function (VirtualKeyboardType) {
        VirtualKeyboardType[VirtualKeyboardType["KEYBOARD_TYPE_DEFAULT"] = 0] = "KEYBOARD_TYPE_DEFAULT";
        VirtualKeyboardType[VirtualKeyboardType["KEYBOARD_TYPE_MULTILINE"] = 1] = "KEYBOARD_TYPE_MULTILINE";
        VirtualKeyboardType[VirtualKeyboardType["KEYBOARD_TYPE_NUMBER"] = 2] = "KEYBOARD_TYPE_NUMBER";
        VirtualKeyboardType[VirtualKeyboardType["KEYBOARD_TYPE_NUMBER_DECIMAL"] = 3] = "KEYBOARD_TYPE_NUMBER_DECIMAL";
        VirtualKeyboardType[VirtualKeyboardType["KEYBOARD_TYPE_PHONE"] = 4] = "KEYBOARD_TYPE_PHONE";
        VirtualKeyboardType[VirtualKeyboardType["KEYBOARD_TYPE_EMAIL_ADDRESS"] = 5] = "KEYBOARD_TYPE_EMAIL_ADDRESS";
        VirtualKeyboardType[VirtualKeyboardType["KEYBOARD_TYPE_PASSWORD"] = 6] = "KEYBOARD_TYPE_PASSWORD";
        VirtualKeyboardType[VirtualKeyboardType["KEYBOARD_TYPE_URL"] = 7] = "KEYBOARD_TYPE_URL";
    })(VirtualKeyboardType = DisplayServer.VirtualKeyboardType || (DisplayServer.VirtualKeyboardType = {}));
    let CursorShape;
    (function (CursorShape) {
        CursorShape[CursorShape["CURSOR_ARROW"] = 0] = "CURSOR_ARROW";
        CursorShape[CursorShape["CURSOR_IBEAM"] = 1] = "CURSOR_IBEAM";
        CursorShape[CursorShape["CURSOR_POINTING_HAND"] = 2] = "CURSOR_POINTING_HAND";
        CursorShape[CursorShape["CURSOR_CROSS"] = 3] = "CURSOR_CROSS";
        CursorShape[CursorShape["CURSOR_WAIT"] = 4] = "CURSOR_WAIT";
        CursorShape[CursorShape["CURSOR_BUSY"] = 5] = "CURSOR_BUSY";
        CursorShape[CursorShape["CURSOR_DRAG"] = 6] = "CURSOR_DRAG";
        CursorShape[CursorShape["CURSOR_CAN_DROP"] = 7] = "CURSOR_CAN_DROP";
        CursorShape[CursorShape["CURSOR_FORBIDDEN"] = 8] = "CURSOR_FORBIDDEN";
        CursorShape[CursorShape["CURSOR_VSIZE"] = 9] = "CURSOR_VSIZE";
        CursorShape[CursorShape["CURSOR_HSIZE"] = 10] = "CURSOR_HSIZE";
        CursorShape[CursorShape["CURSOR_BDIAGSIZE"] = 11] = "CURSOR_BDIAGSIZE";
        CursorShape[CursorShape["CURSOR_FDIAGSIZE"] = 12] = "CURSOR_FDIAGSIZE";
        CursorShape[CursorShape["CURSOR_MOVE"] = 13] = "CURSOR_MOVE";
        CursorShape[CursorShape["CURSOR_VSPLIT"] = 14] = "CURSOR_VSPLIT";
        CursorShape[CursorShape["CURSOR_HSPLIT"] = 15] = "CURSOR_HSPLIT";
        CursorShape[CursorShape["CURSOR_HELP"] = 16] = "CURSOR_HELP";
        CursorShape[CursorShape["CURSOR_MAX"] = 17] = "CURSOR_MAX";
    })(CursorShape = DisplayServer.CursorShape || (DisplayServer.CursorShape = {}));
    let FileDialogMode;
    (function (FileDialogMode) {
        FileDialogMode[FileDialogMode["FILE_DIALOG_MODE_OPEN_FILE"] = 0] = "FILE_DIALOG_MODE_OPEN_FILE";
        FileDialogMode[FileDialogMode["FILE_DIALOG_MODE_OPEN_FILES"] = 1] = "FILE_DIALOG_MODE_OPEN_FILES";
        FileDialogMode[FileDialogMode["FILE_DIALOG_MODE_OPEN_DIR"] = 2] = "FILE_DIALOG_MODE_OPEN_DIR";
        FileDialogMode[FileDialogMode["FILE_DIALOG_MODE_OPEN_ANY"] = 3] = "FILE_DIALOG_MODE_OPEN_ANY";
        FileDialogMode[FileDialogMode["FILE_DIALOG_MODE_SAVE_FILE"] = 4] = "FILE_DIALOG_MODE_SAVE_FILE";
    })(FileDialogMode = DisplayServer.FileDialogMode || (DisplayServer.FileDialogMode = {}));
    let WindowMode;
    (function (WindowMode) {
        WindowMode[WindowMode["WINDOW_MODE_WINDOWED"] = 0] = "WINDOW_MODE_WINDOWED";
        WindowMode[WindowMode["WINDOW_MODE_MINIMIZED"] = 1] = "WINDOW_MODE_MINIMIZED";
        WindowMode[WindowMode["WINDOW_MODE_MAXIMIZED"] = 2] = "WINDOW_MODE_MAXIMIZED";
        WindowMode[WindowMode["WINDOW_MODE_FULLSCREEN"] = 3] = "WINDOW_MODE_FULLSCREEN";
        WindowMode[WindowMode["WINDOW_MODE_EXCLUSIVE_FULLSCREEN"] = 4] = "WINDOW_MODE_EXCLUSIVE_FULLSCREEN";
    })(WindowMode = DisplayServer.WindowMode || (DisplayServer.WindowMode = {}));
    let WindowFlags;
    (function (WindowFlags) {
        WindowFlags[WindowFlags["WINDOW_FLAG_RESIZE_DISABLED"] = 0] = "WINDOW_FLAG_RESIZE_DISABLED";
        WindowFlags[WindowFlags["WINDOW_FLAG_BORDERLESS"] = 1] = "WINDOW_FLAG_BORDERLESS";
        WindowFlags[WindowFlags["WINDOW_FLAG_ALWAYS_ON_TOP"] = 2] = "WINDOW_FLAG_ALWAYS_ON_TOP";
        WindowFlags[WindowFlags["WINDOW_FLAG_TRANSPARENT"] = 3] = "WINDOW_FLAG_TRANSPARENT";
        WindowFlags[WindowFlags["WINDOW_FLAG_NO_FOCUS"] = 4] = "WINDOW_FLAG_NO_FOCUS";
        WindowFlags[WindowFlags["WINDOW_FLAG_POPUP"] = 5] = "WINDOW_FLAG_POPUP";
        WindowFlags[WindowFlags["WINDOW_FLAG_EXTEND_TO_TITLE"] = 6] = "WINDOW_FLAG_EXTEND_TO_TITLE";
        WindowFlags[WindowFlags["WINDOW_FLAG_MOUSE_PASSTHROUGH"] = 7] = "WINDOW_FLAG_MOUSE_PASSTHROUGH";
        WindowFlags[WindowFlags["WINDOW_FLAG_SHARP_CORNERS"] = 8] = "WINDOW_FLAG_SHARP_CORNERS";
        WindowFlags[WindowFlags["WINDOW_FLAG_MAX"] = 9] = "WINDOW_FLAG_MAX";
    })(WindowFlags = DisplayServer.WindowFlags || (DisplayServer.WindowFlags = {}));
    let WindowEvent;
    (function (WindowEvent) {
        WindowEvent[WindowEvent["WINDOW_EVENT_MOUSE_ENTER"] = 0] = "WINDOW_EVENT_MOUSE_ENTER";
        WindowEvent[WindowEvent["WINDOW_EVENT_MOUSE_EXIT"] = 1] = "WINDOW_EVENT_MOUSE_EXIT";
        WindowEvent[WindowEvent["WINDOW_EVENT_FOCUS_IN"] = 2] = "WINDOW_EVENT_FOCUS_IN";
        WindowEvent[WindowEvent["WINDOW_EVENT_FOCUS_OUT"] = 3] = "WINDOW_EVENT_FOCUS_OUT";
        WindowEvent[WindowEvent["WINDOW_EVENT_CLOSE_REQUEST"] = 4] = "WINDOW_EVENT_CLOSE_REQUEST";
        WindowEvent[WindowEvent["WINDOW_EVENT_GO_BACK_REQUEST"] = 5] = "WINDOW_EVENT_GO_BACK_REQUEST";
        WindowEvent[WindowEvent["WINDOW_EVENT_DPI_CHANGE"] = 6] = "WINDOW_EVENT_DPI_CHANGE";
        WindowEvent[WindowEvent["WINDOW_EVENT_TITLEBAR_CHANGE"] = 7] = "WINDOW_EVENT_TITLEBAR_CHANGE";
    })(WindowEvent = DisplayServer.WindowEvent || (DisplayServer.WindowEvent = {}));
    let VSyncMode;
    (function (VSyncMode) {
        VSyncMode[VSyncMode["VSYNC_DISABLED"] = 0] = "VSYNC_DISABLED";
        VSyncMode[VSyncMode["VSYNC_ENABLED"] = 1] = "VSYNC_ENABLED";
        VSyncMode[VSyncMode["VSYNC_ADAPTIVE"] = 2] = "VSYNC_ADAPTIVE";
        VSyncMode[VSyncMode["VSYNC_MAILBOX"] = 3] = "VSYNC_MAILBOX";
    })(VSyncMode = DisplayServer.VSyncMode || (DisplayServer.VSyncMode = {}));
    let HandleType;
    (function (HandleType) {
        HandleType[HandleType["DISPLAY_HANDLE"] = 0] = "DISPLAY_HANDLE";
        HandleType[HandleType["WINDOW_HANDLE"] = 1] = "WINDOW_HANDLE";
        HandleType[HandleType["WINDOW_VIEW"] = 2] = "WINDOW_VIEW";
        HandleType[HandleType["OPENGL_CONTEXT"] = 3] = "OPENGL_CONTEXT";
        HandleType[HandleType["EGL_DISPLAY"] = 4] = "EGL_DISPLAY";
        HandleType[HandleType["EGL_CONFIG"] = 5] = "EGL_CONFIG";
    })(HandleType = DisplayServer.HandleType || (DisplayServer.HandleType = {}));
    let TTSUtteranceEvent;
    (function (TTSUtteranceEvent) {
        TTSUtteranceEvent[TTSUtteranceEvent["TTS_UTTERANCE_STARTED"] = 0] = "TTS_UTTERANCE_STARTED";
        TTSUtteranceEvent[TTSUtteranceEvent["TTS_UTTERANCE_ENDED"] = 1] = "TTS_UTTERANCE_ENDED";
        TTSUtteranceEvent[TTSUtteranceEvent["TTS_UTTERANCE_CANCELED"] = 2] = "TTS_UTTERANCE_CANCELED";
        TTSUtteranceEvent[TTSUtteranceEvent["TTS_UTTERANCE_BOUNDARY"] = 3] = "TTS_UTTERANCE_BOUNDARY";
    })(TTSUtteranceEvent = DisplayServer.TTSUtteranceEvent || (DisplayServer.TTSUtteranceEvent = {}));
})(DisplayServer || (DisplayServer = {}));
export var Environment;
(function (Environment) {
    let BGMode;
    (function (BGMode) {
        BGMode[BGMode["BG_CLEAR_COLOR"] = 0] = "BG_CLEAR_COLOR";
        BGMode[BGMode["BG_COLOR"] = 1] = "BG_COLOR";
        BGMode[BGMode["BG_SKY"] = 2] = "BG_SKY";
        BGMode[BGMode["BG_CANVAS"] = 3] = "BG_CANVAS";
        BGMode[BGMode["BG_KEEP"] = 4] = "BG_KEEP";
        BGMode[BGMode["BG_CAMERA_FEED"] = 5] = "BG_CAMERA_FEED";
        BGMode[BGMode["BG_MAX"] = 6] = "BG_MAX";
    })(BGMode = Environment.BGMode || (Environment.BGMode = {}));
    let AmbientSource;
    (function (AmbientSource) {
        AmbientSource[AmbientSource["AMBIENT_SOURCE_BG"] = 0] = "AMBIENT_SOURCE_BG";
        AmbientSource[AmbientSource["AMBIENT_SOURCE_DISABLED"] = 1] = "AMBIENT_SOURCE_DISABLED";
        AmbientSource[AmbientSource["AMBIENT_SOURCE_COLOR"] = 2] = "AMBIENT_SOURCE_COLOR";
        AmbientSource[AmbientSource["AMBIENT_SOURCE_SKY"] = 3] = "AMBIENT_SOURCE_SKY";
    })(AmbientSource = Environment.AmbientSource || (Environment.AmbientSource = {}));
    let ReflectionSource;
    (function (ReflectionSource) {
        ReflectionSource[ReflectionSource["REFLECTION_SOURCE_BG"] = 0] = "REFLECTION_SOURCE_BG";
        ReflectionSource[ReflectionSource["REFLECTION_SOURCE_DISABLED"] = 1] = "REFLECTION_SOURCE_DISABLED";
        ReflectionSource[ReflectionSource["REFLECTION_SOURCE_SKY"] = 2] = "REFLECTION_SOURCE_SKY";
    })(ReflectionSource = Environment.ReflectionSource || (Environment.ReflectionSource = {}));
    let ToneMapper;
    (function (ToneMapper) {
        ToneMapper[ToneMapper["TONE_MAPPER_LINEAR"] = 0] = "TONE_MAPPER_LINEAR";
        ToneMapper[ToneMapper["TONE_MAPPER_REINHARDT"] = 1] = "TONE_MAPPER_REINHARDT";
        ToneMapper[ToneMapper["TONE_MAPPER_FILMIC"] = 2] = "TONE_MAPPER_FILMIC";
        ToneMapper[ToneMapper["TONE_MAPPER_ACES"] = 3] = "TONE_MAPPER_ACES";
    })(ToneMapper = Environment.ToneMapper || (Environment.ToneMapper = {}));
    let GlowBlendMode;
    (function (GlowBlendMode) {
        GlowBlendMode[GlowBlendMode["GLOW_BLEND_MODE_ADDITIVE"] = 0] = "GLOW_BLEND_MODE_ADDITIVE";
        GlowBlendMode[GlowBlendMode["GLOW_BLEND_MODE_SCREEN"] = 1] = "GLOW_BLEND_MODE_SCREEN";
        GlowBlendMode[GlowBlendMode["GLOW_BLEND_MODE_SOFTLIGHT"] = 2] = "GLOW_BLEND_MODE_SOFTLIGHT";
        GlowBlendMode[GlowBlendMode["GLOW_BLEND_MODE_REPLACE"] = 3] = "GLOW_BLEND_MODE_REPLACE";
        GlowBlendMode[GlowBlendMode["GLOW_BLEND_MODE_MIX"] = 4] = "GLOW_BLEND_MODE_MIX";
    })(GlowBlendMode = Environment.GlowBlendMode || (Environment.GlowBlendMode = {}));
    let FogMode;
    (function (FogMode) {
        FogMode[FogMode["FOG_MODE_EXPONENTIAL"] = 0] = "FOG_MODE_EXPONENTIAL";
        FogMode[FogMode["FOG_MODE_DEPTH"] = 1] = "FOG_MODE_DEPTH";
    })(FogMode = Environment.FogMode || (Environment.FogMode = {}));
    let SDFGIYScale;
    (function (SDFGIYScale) {
        SDFGIYScale[SDFGIYScale["SDFGI_Y_SCALE_50_PERCENT"] = 0] = "SDFGI_Y_SCALE_50_PERCENT";
        SDFGIYScale[SDFGIYScale["SDFGI_Y_SCALE_75_PERCENT"] = 1] = "SDFGI_Y_SCALE_75_PERCENT";
        SDFGIYScale[SDFGIYScale["SDFGI_Y_SCALE_100_PERCENT"] = 2] = "SDFGI_Y_SCALE_100_PERCENT";
    })(SDFGIYScale = Environment.SDFGIYScale || (Environment.SDFGIYScale = {}));
})(Environment || (Environment = {}));
export var CameraFeed;
(function (CameraFeed) {
    let FeedDataType;
    (function (FeedDataType) {
        FeedDataType[FeedDataType["FEED_NOIMAGE"] = 0] = "FEED_NOIMAGE";
        FeedDataType[FeedDataType["FEED_RGB"] = 1] = "FEED_RGB";
        FeedDataType[FeedDataType["FEED_YCBCR"] = 2] = "FEED_YCBCR";
        FeedDataType[FeedDataType["FEED_YCBCR_SEP"] = 3] = "FEED_YCBCR_SEP";
        FeedDataType[FeedDataType["FEED_EXTERNAL"] = 4] = "FEED_EXTERNAL";
    })(FeedDataType = CameraFeed.FeedDataType || (CameraFeed.FeedDataType = {}));
    let FeedPosition;
    (function (FeedPosition) {
        FeedPosition[FeedPosition["FEED_UNSPECIFIED"] = 0] = "FEED_UNSPECIFIED";
        FeedPosition[FeedPosition["FEED_FRONT"] = 1] = "FEED_FRONT";
        FeedPosition[FeedPosition["FEED_BACK"] = 2] = "FEED_BACK";
    })(FeedPosition = CameraFeed.FeedPosition || (CameraFeed.FeedPosition = {}));
})(CameraFeed || (CameraFeed = {}));
export var Image;
(function (Image) {
    Image.MAX_WIDTH = 16777216;
    Image.MAX_HEIGHT = 16777216;
    let Format;
    (function (Format) {
        Format[Format["FORMAT_L8"] = 0] = "FORMAT_L8";
        Format[Format["FORMAT_LA8"] = 1] = "FORMAT_LA8";
        Format[Format["FORMAT_R8"] = 2] = "FORMAT_R8";
        Format[Format["FORMAT_RG8"] = 3] = "FORMAT_RG8";
        Format[Format["FORMAT_RGB8"] = 4] = "FORMAT_RGB8";
        Format[Format["FORMAT_RGBA8"] = 5] = "FORMAT_RGBA8";
        Format[Format["FORMAT_RGBA4444"] = 6] = "FORMAT_RGBA4444";
        Format[Format["FORMAT_RGB565"] = 7] = "FORMAT_RGB565";
        Format[Format["FORMAT_RF"] = 8] = "FORMAT_RF";
        Format[Format["FORMAT_RGF"] = 9] = "FORMAT_RGF";
        Format[Format["FORMAT_RGBF"] = 10] = "FORMAT_RGBF";
        Format[Format["FORMAT_RGBAF"] = 11] = "FORMAT_RGBAF";
        Format[Format["FORMAT_RH"] = 12] = "FORMAT_RH";
        Format[Format["FORMAT_RGH"] = 13] = "FORMAT_RGH";
        Format[Format["FORMAT_RGBH"] = 14] = "FORMAT_RGBH";
        Format[Format["FORMAT_RGBAH"] = 15] = "FORMAT_RGBAH";
        Format[Format["FORMAT_RGBE9995"] = 16] = "FORMAT_RGBE9995";
        Format[Format["FORMAT_DXT1"] = 17] = "FORMAT_DXT1";
        Format[Format["FORMAT_DXT3"] = 18] = "FORMAT_DXT3";
        Format[Format["FORMAT_DXT5"] = 19] = "FORMAT_DXT5";
        Format[Format["FORMAT_RGTC_R"] = 20] = "FORMAT_RGTC_R";
        Format[Format["FORMAT_RGTC_RG"] = 21] = "FORMAT_RGTC_RG";
        Format[Format["FORMAT_BPTC_RGBA"] = 22] = "FORMAT_BPTC_RGBA";
        Format[Format["FORMAT_BPTC_RGBF"] = 23] = "FORMAT_BPTC_RGBF";
        Format[Format["FORMAT_BPTC_RGBFU"] = 24] = "FORMAT_BPTC_RGBFU";
        Format[Format["FORMAT_ETC"] = 25] = "FORMAT_ETC";
        Format[Format["FORMAT_ETC2_R11"] = 26] = "FORMAT_ETC2_R11";
        Format[Format["FORMAT_ETC2_R11S"] = 27] = "FORMAT_ETC2_R11S";
        Format[Format["FORMAT_ETC2_RG11"] = 28] = "FORMAT_ETC2_RG11";
        Format[Format["FORMAT_ETC2_RG11S"] = 29] = "FORMAT_ETC2_RG11S";
        Format[Format["FORMAT_ETC2_RGB8"] = 30] = "FORMAT_ETC2_RGB8";
        Format[Format["FORMAT_ETC2_RGBA8"] = 31] = "FORMAT_ETC2_RGBA8";
        Format[Format["FORMAT_ETC2_RGB8A1"] = 32] = "FORMAT_ETC2_RGB8A1";
        Format[Format["FORMAT_ETC2_RA_AS_RG"] = 33] = "FORMAT_ETC2_RA_AS_RG";
        Format[Format["FORMAT_DXT5_RA_AS_RG"] = 34] = "FORMAT_DXT5_RA_AS_RG";
        Format[Format["FORMAT_ASTC_4x4"] = 35] = "FORMAT_ASTC_4x4";
        Format[Format["FORMAT_ASTC_4x4_HDR"] = 36] = "FORMAT_ASTC_4x4_HDR";
        Format[Format["FORMAT_ASTC_8x8"] = 37] = "FORMAT_ASTC_8x8";
        Format[Format["FORMAT_ASTC_8x8_HDR"] = 38] = "FORMAT_ASTC_8x8_HDR";
        Format[Format["FORMAT_MAX"] = 39] = "FORMAT_MAX";
    })(Format = Image.Format || (Image.Format = {}));
    let Interpolation;
    (function (Interpolation) {
        Interpolation[Interpolation["INTERPOLATE_NEAREST"] = 0] = "INTERPOLATE_NEAREST";
        Interpolation[Interpolation["INTERPOLATE_BILINEAR"] = 1] = "INTERPOLATE_BILINEAR";
        Interpolation[Interpolation["INTERPOLATE_CUBIC"] = 2] = "INTERPOLATE_CUBIC";
        Interpolation[Interpolation["INTERPOLATE_TRILINEAR"] = 3] = "INTERPOLATE_TRILINEAR";
        Interpolation[Interpolation["INTERPOLATE_LANCZOS"] = 4] = "INTERPOLATE_LANCZOS";
    })(Interpolation = Image.Interpolation || (Image.Interpolation = {}));
    let AlphaMode;
    (function (AlphaMode) {
        AlphaMode[AlphaMode["ALPHA_NONE"] = 0] = "ALPHA_NONE";
        AlphaMode[AlphaMode["ALPHA_BIT"] = 1] = "ALPHA_BIT";
        AlphaMode[AlphaMode["ALPHA_BLEND"] = 2] = "ALPHA_BLEND";
    })(AlphaMode = Image.AlphaMode || (Image.AlphaMode = {}));
    let CompressMode;
    (function (CompressMode) {
        CompressMode[CompressMode["COMPRESS_S3TC"] = 0] = "COMPRESS_S3TC";
        CompressMode[CompressMode["COMPRESS_ETC"] = 1] = "COMPRESS_ETC";
        CompressMode[CompressMode["COMPRESS_ETC2"] = 2] = "COMPRESS_ETC2";
        CompressMode[CompressMode["COMPRESS_BPTC"] = 3] = "COMPRESS_BPTC";
        CompressMode[CompressMode["COMPRESS_ASTC"] = 4] = "COMPRESS_ASTC";
        CompressMode[CompressMode["COMPRESS_MAX"] = 5] = "COMPRESS_MAX";
    })(CompressMode = Image.CompressMode || (Image.CompressMode = {}));
    let UsedChannels;
    (function (UsedChannels) {
        UsedChannels[UsedChannels["USED_CHANNELS_L"] = 0] = "USED_CHANNELS_L";
        UsedChannels[UsedChannels["USED_CHANNELS_LA"] = 1] = "USED_CHANNELS_LA";
        UsedChannels[UsedChannels["USED_CHANNELS_R"] = 2] = "USED_CHANNELS_R";
        UsedChannels[UsedChannels["USED_CHANNELS_RG"] = 3] = "USED_CHANNELS_RG";
        UsedChannels[UsedChannels["USED_CHANNELS_RGB"] = 4] = "USED_CHANNELS_RGB";
        UsedChannels[UsedChannels["USED_CHANNELS_RGBA"] = 5] = "USED_CHANNELS_RGBA";
    })(UsedChannels = Image.UsedChannels || (Image.UsedChannels = {}));
    let CompressSource;
    (function (CompressSource) {
        CompressSource[CompressSource["COMPRESS_SOURCE_GENERIC"] = 0] = "COMPRESS_SOURCE_GENERIC";
        CompressSource[CompressSource["COMPRESS_SOURCE_SRGB"] = 1] = "COMPRESS_SOURCE_SRGB";
        CompressSource[CompressSource["COMPRESS_SOURCE_NORMAL"] = 2] = "COMPRESS_SOURCE_NORMAL";
    })(CompressSource = Image.CompressSource || (Image.CompressSource = {}));
    let ASTCFormat;
    (function (ASTCFormat) {
        ASTCFormat[ASTCFormat["ASTC_FORMAT_4x4"] = 0] = "ASTC_FORMAT_4x4";
        ASTCFormat[ASTCFormat["ASTC_FORMAT_8x8"] = 1] = "ASTC_FORMAT_8x8";
    })(ASTCFormat = Image.ASTCFormat || (Image.ASTCFormat = {}));
})(Image || (Image = {}));
export var VisualShaderNodeTextureParameter;
(function (VisualShaderNodeTextureParameter) {
    let TextureType;
    (function (TextureType) {
        TextureType[TextureType["TYPE_DATA"] = 0] = "TYPE_DATA";
        TextureType[TextureType["TYPE_COLOR"] = 1] = "TYPE_COLOR";
        TextureType[TextureType["TYPE_NORMAL_MAP"] = 2] = "TYPE_NORMAL_MAP";
        TextureType[TextureType["TYPE_ANISOTROPY"] = 3] = "TYPE_ANISOTROPY";
        TextureType[TextureType["TYPE_MAX"] = 4] = "TYPE_MAX";
    })(TextureType = VisualShaderNodeTextureParameter.TextureType || (VisualShaderNodeTextureParameter.TextureType = {}));
    let ColorDefault;
    (function (ColorDefault) {
        ColorDefault[ColorDefault["COLOR_DEFAULT_WHITE"] = 0] = "COLOR_DEFAULT_WHITE";
        ColorDefault[ColorDefault["COLOR_DEFAULT_BLACK"] = 1] = "COLOR_DEFAULT_BLACK";
        ColorDefault[ColorDefault["COLOR_DEFAULT_TRANSPARENT"] = 2] = "COLOR_DEFAULT_TRANSPARENT";
        ColorDefault[ColorDefault["COLOR_DEFAULT_MAX"] = 3] = "COLOR_DEFAULT_MAX";
    })(ColorDefault = VisualShaderNodeTextureParameter.ColorDefault || (VisualShaderNodeTextureParameter.ColorDefault = {}));
    let TextureFilter;
    (function (TextureFilter) {
        TextureFilter[TextureFilter["FILTER_DEFAULT"] = 0] = "FILTER_DEFAULT";
        TextureFilter[TextureFilter["FILTER_NEAREST"] = 1] = "FILTER_NEAREST";
        TextureFilter[TextureFilter["FILTER_LINEAR"] = 2] = "FILTER_LINEAR";
        TextureFilter[TextureFilter["FILTER_NEAREST_MIPMAP"] = 3] = "FILTER_NEAREST_MIPMAP";
        TextureFilter[TextureFilter["FILTER_LINEAR_MIPMAP"] = 4] = "FILTER_LINEAR_MIPMAP";
        TextureFilter[TextureFilter["FILTER_NEAREST_MIPMAP_ANISOTROPIC"] = 5] = "FILTER_NEAREST_MIPMAP_ANISOTROPIC";
        TextureFilter[TextureFilter["FILTER_LINEAR_MIPMAP_ANISOTROPIC"] = 6] = "FILTER_LINEAR_MIPMAP_ANISOTROPIC";
        TextureFilter[TextureFilter["FILTER_MAX"] = 7] = "FILTER_MAX";
    })(TextureFilter = VisualShaderNodeTextureParameter.TextureFilter || (VisualShaderNodeTextureParameter.TextureFilter = {}));
    let TextureRepeat;
    (function (TextureRepeat) {
        TextureRepeat[TextureRepeat["REPEAT_DEFAULT"] = 0] = "REPEAT_DEFAULT";
        TextureRepeat[TextureRepeat["REPEAT_ENABLED"] = 1] = "REPEAT_ENABLED";
        TextureRepeat[TextureRepeat["REPEAT_DISABLED"] = 2] = "REPEAT_DISABLED";
        TextureRepeat[TextureRepeat["REPEAT_MAX"] = 3] = "REPEAT_MAX";
    })(TextureRepeat = VisualShaderNodeTextureParameter.TextureRepeat || (VisualShaderNodeTextureParameter.TextureRepeat = {}));
    let TextureSource;
    (function (TextureSource) {
        TextureSource[TextureSource["SOURCE_NONE"] = 0] = "SOURCE_NONE";
        TextureSource[TextureSource["SOURCE_SCREEN"] = 1] = "SOURCE_SCREEN";
        TextureSource[TextureSource["SOURCE_DEPTH"] = 2] = "SOURCE_DEPTH";
        TextureSource[TextureSource["SOURCE_NORMAL_ROUGHNESS"] = 3] = "SOURCE_NORMAL_ROUGHNESS";
        TextureSource[TextureSource["SOURCE_MAX"] = 4] = "SOURCE_MAX";
    })(TextureSource = VisualShaderNodeTextureParameter.TextureSource || (VisualShaderNodeTextureParameter.TextureSource = {}));
})(VisualShaderNodeTextureParameter || (VisualShaderNodeTextureParameter = {}));
export var VisualShaderNodeCompare;
(function (VisualShaderNodeCompare) {
    let ComparisonType;
    (function (ComparisonType) {
        ComparisonType[ComparisonType["CTYPE_SCALAR"] = 0] = "CTYPE_SCALAR";
        ComparisonType[ComparisonType["CTYPE_SCALAR_INT"] = 1] = "CTYPE_SCALAR_INT";
        ComparisonType[ComparisonType["CTYPE_SCALAR_UINT"] = 2] = "CTYPE_SCALAR_UINT";
        ComparisonType[ComparisonType["CTYPE_VECTOR_2D"] = 3] = "CTYPE_VECTOR_2D";
        ComparisonType[ComparisonType["CTYPE_VECTOR_3D"] = 4] = "CTYPE_VECTOR_3D";
        ComparisonType[ComparisonType["CTYPE_VECTOR_4D"] = 5] = "CTYPE_VECTOR_4D";
        ComparisonType[ComparisonType["CTYPE_BOOLEAN"] = 6] = "CTYPE_BOOLEAN";
        ComparisonType[ComparisonType["CTYPE_TRANSFORM"] = 7] = "CTYPE_TRANSFORM";
        ComparisonType[ComparisonType["CTYPE_MAX"] = 8] = "CTYPE_MAX";
    })(ComparisonType = VisualShaderNodeCompare.ComparisonType || (VisualShaderNodeCompare.ComparisonType = {}));
    let Function;
    (function (Function) {
        Function[Function["FUNC_EQUAL"] = 0] = "FUNC_EQUAL";
        Function[Function["FUNC_NOT_EQUAL"] = 1] = "FUNC_NOT_EQUAL";
        Function[Function["FUNC_GREATER_THAN"] = 2] = "FUNC_GREATER_THAN";
        Function[Function["FUNC_GREATER_THAN_EQUAL"] = 3] = "FUNC_GREATER_THAN_EQUAL";
        Function[Function["FUNC_LESS_THAN"] = 4] = "FUNC_LESS_THAN";
        Function[Function["FUNC_LESS_THAN_EQUAL"] = 5] = "FUNC_LESS_THAN_EQUAL";
        Function[Function["FUNC_MAX"] = 6] = "FUNC_MAX";
    })(Function = VisualShaderNodeCompare.Function || (VisualShaderNodeCompare.Function = {}));
    let Condition;
    (function (Condition) {
        Condition[Condition["COND_ALL"] = 0] = "COND_ALL";
        Condition[Condition["COND_ANY"] = 1] = "COND_ANY";
        Condition[Condition["COND_MAX"] = 2] = "COND_MAX";
    })(Condition = VisualShaderNodeCompare.Condition || (VisualShaderNodeCompare.Condition = {}));
})(VisualShaderNodeCompare || (VisualShaderNodeCompare = {}));
export var Geometry2D;
(function (Geometry2D) {
    let PolyBooleanOperation;
    (function (PolyBooleanOperation) {
        PolyBooleanOperation[PolyBooleanOperation["OPERATION_UNION"] = 0] = "OPERATION_UNION";
        PolyBooleanOperation[PolyBooleanOperation["OPERATION_DIFFERENCE"] = 1] = "OPERATION_DIFFERENCE";
        PolyBooleanOperation[PolyBooleanOperation["OPERATION_INTERSECTION"] = 2] = "OPERATION_INTERSECTION";
        PolyBooleanOperation[PolyBooleanOperation["OPERATION_XOR"] = 3] = "OPERATION_XOR";
    })(PolyBooleanOperation = Geometry2D.PolyBooleanOperation || (Geometry2D.PolyBooleanOperation = {}));
    let PolyJoinType;
    (function (PolyJoinType) {
        PolyJoinType[PolyJoinType["JOIN_SQUARE"] = 0] = "JOIN_SQUARE";
        PolyJoinType[PolyJoinType["JOIN_ROUND"] = 1] = "JOIN_ROUND";
        PolyJoinType[PolyJoinType["JOIN_MITER"] = 2] = "JOIN_MITER";
    })(PolyJoinType = Geometry2D.PolyJoinType || (Geometry2D.PolyJoinType = {}));
    let PolyEndType;
    (function (PolyEndType) {
        PolyEndType[PolyEndType["END_POLYGON"] = 0] = "END_POLYGON";
        PolyEndType[PolyEndType["END_JOINED"] = 1] = "END_JOINED";
        PolyEndType[PolyEndType["END_BUTT"] = 2] = "END_BUTT";
        PolyEndType[PolyEndType["END_SQUARE"] = 3] = "END_SQUARE";
        PolyEndType[PolyEndType["END_ROUND"] = 4] = "END_ROUND";
    })(PolyEndType = Geometry2D.PolyEndType || (Geometry2D.PolyEndType = {}));
})(Geometry2D || (Geometry2D = {}));
export var EditorVCSInterface;
(function (EditorVCSInterface) {
    let ChangeType;
    (function (ChangeType) {
        ChangeType[ChangeType["CHANGE_TYPE_NEW"] = 0] = "CHANGE_TYPE_NEW";
        ChangeType[ChangeType["CHANGE_TYPE_MODIFIED"] = 1] = "CHANGE_TYPE_MODIFIED";
        ChangeType[ChangeType["CHANGE_TYPE_RENAMED"] = 2] = "CHANGE_TYPE_RENAMED";
        ChangeType[ChangeType["CHANGE_TYPE_DELETED"] = 3] = "CHANGE_TYPE_DELETED";
        ChangeType[ChangeType["CHANGE_TYPE_TYPECHANGE"] = 4] = "CHANGE_TYPE_TYPECHANGE";
        ChangeType[ChangeType["CHANGE_TYPE_UNMERGED"] = 5] = "CHANGE_TYPE_UNMERGED";
    })(ChangeType = EditorVCSInterface.ChangeType || (EditorVCSInterface.ChangeType = {}));
    let TreeArea;
    (function (TreeArea) {
        TreeArea[TreeArea["TREE_AREA_COMMIT"] = 0] = "TREE_AREA_COMMIT";
        TreeArea[TreeArea["TREE_AREA_STAGED"] = 1] = "TREE_AREA_STAGED";
        TreeArea[TreeArea["TREE_AREA_UNSTAGED"] = 2] = "TREE_AREA_UNSTAGED";
    })(TreeArea = EditorVCSInterface.TreeArea || (EditorVCSInterface.TreeArea = {}));
})(EditorVCSInterface || (EditorVCSInterface = {}));
export var PackedScene;
(function (PackedScene) {
    let GenEditState;
    (function (GenEditState) {
        GenEditState[GenEditState["GEN_EDIT_STATE_DISABLED"] = 0] = "GEN_EDIT_STATE_DISABLED";
        GenEditState[GenEditState["GEN_EDIT_STATE_INSTANCE"] = 1] = "GEN_EDIT_STATE_INSTANCE";
        GenEditState[GenEditState["GEN_EDIT_STATE_MAIN"] = 2] = "GEN_EDIT_STATE_MAIN";
        GenEditState[GenEditState["GEN_EDIT_STATE_MAIN_INHERITED"] = 3] = "GEN_EDIT_STATE_MAIN_INHERITED";
    })(GenEditState = PackedScene.GenEditState || (PackedScene.GenEditState = {}));
})(PackedScene || (PackedScene = {}));
export var TileMapLayer;
(function (TileMapLayer) {
    let DebugVisibilityMode;
    (function (DebugVisibilityMode) {
        DebugVisibilityMode[DebugVisibilityMode["DEBUG_VISIBILITY_MODE_DEFAULT"] = 0] = "DEBUG_VISIBILITY_MODE_DEFAULT";
        DebugVisibilityMode[DebugVisibilityMode["DEBUG_VISIBILITY_MODE_FORCE_HIDE"] = 2] = "DEBUG_VISIBILITY_MODE_FORCE_HIDE";
        DebugVisibilityMode[DebugVisibilityMode["DEBUG_VISIBILITY_MODE_FORCE_SHOW"] = 1] = "DEBUG_VISIBILITY_MODE_FORCE_SHOW";
    })(DebugVisibilityMode = TileMapLayer.DebugVisibilityMode || (TileMapLayer.DebugVisibilityMode = {}));
})(TileMapLayer || (TileMapLayer = {}));
