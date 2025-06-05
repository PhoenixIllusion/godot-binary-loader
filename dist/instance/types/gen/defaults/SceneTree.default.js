import { DefaultMainLoop } from './MainLoop.default';
export function DefaultSceneTree(item) {
    DefaultMainLoop(item);
    item.auto_accept_quit ?? (item.auto_accept_quit = true);
    //current_scene
    item.debug_collisions_hint ?? (item.debug_collisions_hint = false);
    item.debug_navigation_hint ?? (item.debug_navigation_hint = false);
    item.debug_paths_hint ?? (item.debug_paths_hint = false);
    //edited_scene_root
    item.multiplayer_poll ?? (item.multiplayer_poll = true);
    item.paused ?? (item.paused = false);
    item.physics_interpolation ?? (item.physics_interpolation = false);
    item.quit_on_go_back ?? (item.quit_on_go_back = true);
    //root  
}
