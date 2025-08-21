import { DefaultNode2D } from './Node2D.default.js';
export function DefaultNavigationRegion2D(item) {
    DefaultNode2D(item);
    item.enabled ?? (item.enabled = true);
    item.enter_cost ?? (item.enter_cost = 0.0);
    item.navigation_layers ?? (item.navigation_layers = 1);
    //navigation_polygon
    item.travel_cost ?? (item.travel_cost = 1.0);
    item.use_edge_connections ?? (item.use_edge_connections = true);
}
