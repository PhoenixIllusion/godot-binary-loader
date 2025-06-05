import { DefaultCollisionObject2D } from './CollisionObject2D.default';
export function DefaultPhysicsBody2D(item) {
    DefaultCollisionObject2D(item);
    item.input_pickable ?? (item.input_pickable = false);
}
