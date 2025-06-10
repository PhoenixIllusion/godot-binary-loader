import joltWasmUrl from "jolt-physics/jolt-physics.wasm.wasm?url";

const _jolt = {};

let Jolt;
let _lastJolt = 0;

export const loadJolt = async (importSettings) => {
    if (_lastJolt === Jolt) {
        return;
    }
    const j = await import('jolt-physics/wasm').then(module => module.default({
        ...importSettings,
        locateFile: () => joltWasmUrl,
    }));
    Object.assign(_jolt, j);
    _lastJolt = Jolt;

    j.Quat.sIdentity = j.Quat.prototype.sIdentity;
    j.Quat.sEulerAngles = j.Quat.prototype.sEulerAngles;
    j.Vec3.sZero = j.Vec3.prototype.sZero;
    j.Vec3.sAxisY = j.Vec3.prototype.sAxisY;
    return;
}

export default _jolt;