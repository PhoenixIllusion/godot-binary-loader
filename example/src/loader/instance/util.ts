import { Dictionary, VariantType, Array } from "@phoenixillusion/godot-scene-reader/parse/binary/variant.js";
import type { LinkRef } from "./scene";
import { assertType, unwrap_value } from "@phoenixillusion/godot-scene-reader/parse/binary/util/assert_unpack.js";
import { InternalResourceEntry } from "@phoenixillusion/godot-scene-reader/parse/binary/resource.js";

export function unwrap_array(array: VariantType): VariantType[] {
  return assertType<Array>(array, "array").value;
}

export function unwrap_dictionary(dictionary: Dictionary) {
  const result: Record<string, VariantType> = {};
  [...dictionary.value.entries()].forEach(([key, val]) => {
    const keyVal = unwrap_value(key);
    if(typeof keyVal == 'object') throw new Error('Attempted to unwrap Dictionary with key type "object"');
    result[keyVal as string] = val;
  });
  return result;
}

export function unwrap_property<T>(v: VariantType): T {
  if(v.type == 'array') {
    return unwrap_array(v).map(unwrap_property) as T
  }
  if(v.type == 'dictionary') {
    const dict = unwrap_dictionary(<Dictionary>v);
    for (const [k,v] of Object.entries(dict)) {
      dict[k] = unwrap_property(v);
    }
    return dict as T;
  }
  if(v.type == 'ref') {
    const ref = (<LinkRef>v).value as InternalResourceEntry;
    if(ref.properties)
      return {type: ref.type, properties: unwrap_properties(ref.properties) } as T;
  }
  if('value' in v) {
    return v.value as T;
  }
  return v as T;
}

export function unwrap_properties<T extends Record<string,any>>(properties: Record<string, VariantType>): T {
  const result = {} as Record<string,any>;
  for (const [k,v] of Object.entries(properties)) {
    result[k] = unwrap_property(v);
  }
  return result as T;
}