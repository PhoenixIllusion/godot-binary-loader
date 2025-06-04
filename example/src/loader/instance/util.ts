import { VariantType } from "@phoenixillusion/godot-scene-reader/parse/binary/variant.js";
import { NodePath } from "./types/gen/types";
import { unwrap_property } from "@phoenixillusion/godot-scene-reader/process/scene/unwrap.js";

export function resolve_nodepath(currentPath: string[], nodePath: string[], absolute: boolean): string[] {
  if(absolute) {
    return nodePath;
  }
  // Process path to handle "." and ".."
  const finalPath: string[] = [... currentPath];
  for (const segment of nodePath) {
      if (segment === ".") continue; // Ignore current directory
      if (segment === "..") {
          if (finalPath.length > 0) {
              finalPath.pop(); // Move up one directory
          }
      } else {
          finalPath.push(segment); // Add valid segment
      }
  }

  return finalPath;
}

export function node_path_string(nodePath: NodePath|undefined) {
  if(!nodePath)
    return '';
  return nodePath.names.join('/') + (nodePath.subnames?.length ? ':' + nodePath.subnames.join(':'): '')
}

interface ParentChildSystem<T> {
  name: string;
  parent: ParentChildSystem<T>|null,
  children: ParentChildSystem<T>[]
}

export function navigate_nodepath<T extends  ParentChildSystem<T>>(obj: T, nodePath: NodePath): T | null {
  let result: T | null = obj;
  const path = [... nodePath.names ];
  while(path.length) {
    const p = path.shift();
    if(p == '.') continue;
    if(p == '..') result = result.parent as T;
    else
      result = result.children.find(x => x.name == p) as T || null;
    if(!result) {
      return null;
    }
  }
  return result as T;
}
export function navigate_nodepath_subpath<T extends Record<string,any>>(obj: T, nodePath: NodePath, leftover_path: string[], last_is_property = 1): any | null {
  let result: T | null = null;
  const { subnames } = nodePath;
  if(subnames.length) {
    let j = 0;
    for(;j < subnames.length - last_is_property; j++) {
      const subname = subnames[j];
      let test_obj = j == 0 ? obj : result
      let new_res_v: any|null = null;
      let obj_has_property = (typeof test_obj == 'object') && ('properties' in test_obj!);
      if(obj_has_property) {
        new_res_v = obj.properties[subname];
        if(!new_res_v) {
          return null;
        }
        if(!((typeof test_obj == 'object') && ('properties' in test_obj!))) {
          break;
        }
        result = new_res_v;
      } else {
        return null;
      }
    }
		for (; j < subnames.length; j++) {
			// Put the rest of the subpath in the leftover path
			leftover_path.push(subnames[j]);
		}
  }

  return result;
}

const cachedProperties = new Map();
export function unwrap_properties_cached<T extends Record<string, any>>(properties: Record<string, VariantType>): T {
  const result = {} as Record<string, any>;
  for (const [k, v] of Object.entries(properties)) {
    const u_p = cachedProperties.has(v) ? cachedProperties.get(v) : unwrap_property(v);
    cachedProperties.set(v, u_p);
    result[k] = u_p;
  }
  return result as T;
}
export function clear_unwrap_properties_cached() {
  cachedProperties.clear();
}
