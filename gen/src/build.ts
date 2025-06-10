import { ParsedTarFileItem, parseTar, createTar } from 'nanotar';
import { xml2js } from 'xml-js';
import { readFile, writeFile } from 'fs/promises';

interface XmlElement {
  type: 'element';
  name: string;
  attributes: Object;
  elements: XmlElement[];
}

interface ConstantElement extends XmlElement {
  name: 'constant';
  attributes: {
    name: string;
    value: string;
    enum: string;
  }
}
interface MemberElement extends XmlElement {
  name: 'member';
  attributes: {
    name: string;
    type: string;
    default: string;
  }
}

interface ConstantsElement extends XmlElement {
  name: 'constants';
  elements: ConstantElement[];
}
interface MembersElement extends XmlElement {
  name: 'members';
  elements: MemberElement[];
}

interface ClassElement extends XmlElement {
  name: 'class'
  attributes: {
    name: string;
    inherits?: string;
  }
  elements: (ConstantsElement|MembersElement)[]
}

interface XmlFile {
  elements: [ClassElement]
}

interface GodotMember {
  name: string;
  type: string;
  default: string;
}

type GodotEnum = Record<string,Record<string,string>>;
interface GodotClass {
  name: string;
  inherits?: string;
  members: GodotMember[];
  enums: GodotEnum;
}

const cn = (s: string) => s.indexOf('/') >=0 ? `'${s}'` : s;
const un = (s: string) => s.indexOf('/') >=0 ? `['${s}']` : `.${s}`;
const cv = (s: string) => s.indexOf('(') >=0 ? `create.${s}` : s.replace('&','');

const BASE_LIST = ['@GlobalScope', 'GlobalScope', 'bool', 'float', 'int', 'String', 'StringName', 'Array',
  'PackedByteArray','PackedInt32Array','PackedInt64Array','PackedFloat32Array','PackedFloat64Array',
  'PackedStringArray', 'PackedVector2Array', 'PackedVector3Array', 'PackedColorArray', 'PackedVector4Array',
  'Basis', 'AABB', 'Rect2', 'Rect2i',  'Plane', "Quaternion", 'Projection', 'Color',
  'Vector2','Vector2i','Vector3','Vector3i','Vector4','Vector4i','Transform2D','Transform3D', "NodePath"
]
function checkBase(type:string) {
  return BASE_LIST.includes(type.replace('[]',''))
}

function printType( gclass: GodotClass): string {
  const { name, inherits} = gclass;
  const props = gclass.members;
  const propTypes: Set<string> = new Set();
  props.forEach(x => propTypes.add(x.type));
  const propNames = Array.from(propTypes.values()).filter(x => ![...BASE_LIST, name].includes(x.replace('[]','')));
  return `import * as type from './types'; ${inherits? `\nimport { ${inherits} } from './${inherits}';\nexport * from './${inherits}';`:''}
${ propNames.map(x => `import { ${x} } from './${x}';`).join('\n')}
export interface ${name}${ inherits ? ` extends ${inherits}`: ''} {
${props.map(p => {
  return `  ${cn(p.name)}: ${checkBase(p.type)?'type.':''}${p.type};`
}).join('\n')}  
}
`;
}

function wrapType(type: string) {
  if(checkBase(type)) {
    return `type.${type};`
  }
  return `{ type: "${type}" , properties: ${type} };`
}

function printJustType( gclass: GodotClass): string {
  const { name, inherits} = gclass;
  const props = gclass.members;
  return `
export interface ${name}${ inherits ? ` extends ${inherits}`: ''} {
${props.map(p => {
  return `  ${cn(p.name)}: ${wrapType(p.type)}`
}).join('\n')}  
}
`;
}
function printDefault( gclass: GodotClass): string {
  const { inherits} = gclass;
  return `import { create } from './../types';
import * as c from '../index';${inherits? `\nimport { Default${inherits} } from './${inherits}.default'`:''}
${printJustDefault(gclass)}
`
}
function printJustDefault( gclass: GodotClass): string {
  const { name, inherits} = gclass;
  const props = gclass.members;
return `
export function Default${name}(item: c.${name}) {${inherits? `\n  Default${inherits}(item);`:''}
${props.map(p => {
  if(p.default?.includes('{') || p.default === 'null')return `//${p.name} = ${p.default}`;
  if(p.default.trim().length == 0) return `//${p.name}`;
  return `  item${un(p.name)} ??= ${cv(p.default)};`
}).join('\n')}  
}
`
}

function printEnums(gclass: GodotClass): string {
  const { name, enums } = gclass;
  return `export namespace ${name} {`+Object.entries(enums).map(([e,v]) => 
(e !== 'undefined') ?
`export const enum ${e} {
${Object.entries(v).map(([k,v]) => {
return `  ${k} = ${cv(v)},`
}).join('\n')}
}
`: '\n'+
Object.entries(v).map(([k,v]) => {
  return `export const ${k} = ${cv(v)};`
  }).join('\n')
).join('\n')+'\n}\n'
}


function readXML(file: ParsedTarFileItem) {
  const xml = (xml2js(file.text) as XmlFile).elements[0];
  const {name, inherits} = xml.attributes;
  ParentLookup[name] = inherits;
  const members = xml.elements.find(x => x.name == 'members')?.elements
      .map(x => { const a = x.attributes; return {name: a.name, type: a.type, default: a.default || ''} }) || []
  const enums: Record<string,Record<string,string>> = {};
  xml.elements.find(x => x.name == 'constants')?.elements
      .forEach(x => { const a = x.attributes; enums[a.enum] = enums[a.enum]||{} ;enums[a.enum][a.name] = a.value }) || [];
  return { name: name.replace('@',''), inherits, members, enums };
}

function writeIndividualFiles(classes: GodotClass[]) {
  const defs: { name: string, data: string}[] = [];
  const defaults: { name: string, data: string}[] = [];
  classes.forEach(x => {
    if(BASE_LIST.includes(x.name)) return;
    defs.push({name: `${x.name}.ts`, data: `${printType(x)}\n${printEnums(x)}`});
    defaults.push({name: `${x.name}.default.ts`, data: printDefault(x)});
  })
  const data = createTar([... defs, ... defaults]);
  writeFile('out.tar', data);
}

const ParentLookup: Record<string,string|undefined> = {};
const ClassOfType = {
  Node: [] as string[],
  Node3D: [] as string[],
  CollisionObject3D: [] as string[],
  Resource: [] as string[],
  Texture: [] as string[],
  Mesh: [] as string[],
  Material: [] as string[],
  Shape3D: [] as string[],
  AudioStream: [] as string[],
  AnimationNode: [] as string[],
  AnimationRootNode: [] as string[]
}
const testClasses = Object.keys(ClassOfType) as (keyof typeof ClassOfType)[];

function isTypeOf(test: string, base: string): boolean {
  let current: string|undefined = test;
  let maxRecurse = 50;
  while(current) {
    if(current == base) {
      return true;
    }
    maxRecurse--;
    current = ParentLookup[current];
    if(maxRecurse == 0) {
      const chain: (string|undefined)[] = [ current ];
      for(let i=0;i<3;i++) {
        if(current)
          current = ParentLookup[current];
        chain.push(current);
      }
      throw new Error("Error on class "+chain.join(', '));
    }
  }

  return false;
}

function addToType({name, inherits}: {name: string, inherits?: string}) {
  if(!inherits) return;
  testClasses.forEach((base) => {
    if(isTypeOf(name, base)) {
      ClassOfType[base].push(name);
    }
  })
}
function printAllTypeMaps(): string {
  let result = '';

  testClasses.forEach(c => {
    const subclasses = ClassOfType[c];
    result += 
`
export interface ${c}Properties {
${subclasses.map(x => `  ${x}: ${x}`).join('\n')}
}
type ${c}TypeNames = keyof ${c}Properties;
export type ${c}TypeMap = {
  [K in ${c}TypeNames]: { type: K; properties: ${c}Properties[K] };
}
export type ${c}Type = ${c}TypeMap[keyof ${c}TypeMap];

`
  })

  return result;
}

(async() => {
  const file = await readFile('./godot-classes.tar');
  const files = parseTar(file).filter(x => x.name.endsWith('.xml') && !x.name.includes('/PaxHeader/'));
  const classes: GodotClass[] = files.map(readXML);

  let defs = `/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
import * as type from './types';\n`
  let defaults = `/*
  Generated via XML source files of https://github.com/godotengine/godot/tree/4.4/doc/classes
*/
//@ts-nocheck
`
  console.log('Printing Index and Defaults');
  const defaultFiles: {name: string, data: string}[] = [];
  classes.forEach(x => {
    if(BASE_LIST.find(s => s == x.name)) return;
    addToType(x);
    defs += `${printJustType(x)}\n${printEnums(x)}\n`;
    defaultFiles.push({ name: `defaults/${x.name}.default.ts`, data: defaults+printDefault(x)})
  })
  console.log('Printing TypeMaps');
  defs += printAllTypeMaps();
  const data = createTar([{name: 'index.ts', data: defs},... defaultFiles]);
  writeFile('out.tar', data);
})();