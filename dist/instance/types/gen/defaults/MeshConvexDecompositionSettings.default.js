import { DefaultRefCounted } from './RefCounted.default.js';
export function DefaultMeshConvexDecompositionSettings(item) {
    DefaultRefCounted(item);
    item.convex_hull_approximation ?? (item.convex_hull_approximation = true);
    item.convex_hull_downsampling ?? (item.convex_hull_downsampling = 4);
    item.max_concavity ?? (item.max_concavity = 1.0);
    item.max_convex_hulls ?? (item.max_convex_hulls = 1);
    item.max_num_vertices_per_convex_hull ?? (item.max_num_vertices_per_convex_hull = 32);
    item.min_volume_per_convex_hull ?? (item.min_volume_per_convex_hull = 0.0001);
    item.mode ?? (item.mode = 0);
    item.normalize_mesh ?? (item.normalize_mesh = false);
    item.plane_downsampling ?? (item.plane_downsampling = 4);
    item.project_hull_vertices ?? (item.project_hull_vertices = true);
    item.resolution ?? (item.resolution = 10000);
    item.revolution_axes_clipping_bias ?? (item.revolution_axes_clipping_bias = 0.05);
    item.symmetry_planes_clipping_bias ?? (item.symmetry_planes_clipping_bias = 0.05);
}
