import { DefaultResource } from './Resource.default.js';
export function DefaultPhysicsMaterial(item) {
    DefaultResource(item);
    item.absorbent ?? (item.absorbent = false);
    item.bounce ?? (item.bounce = 0.0);
    item.friction ?? (item.friction = 1.0);
    item.rough ?? (item.rough = false);
}
