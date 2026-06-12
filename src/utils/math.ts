export interface Vec2 {
  x: number;
  y: number;
}

export const EPSILON = 0.00001;

export function vec2(x = 0, y = 0): Vec2 {
  return { x, y };
}

export function setVec2(out: Vec2, x: number, y: number): Vec2 {
  out.x = x;
  out.y = y;
  return out;
}

export function copyVec2(out: Vec2, source: Vec2): Vec2 {
  out.x = source.x;
  out.y = source.y;
  return out;
}

export function addScaled(out: Vec2, source: Vec2, scale: number): Vec2 {
  out.x += source.x * scale;
  out.y += source.y * scale;
  return out;
}

export function lengthSq(v: Vec2): number {
  return v.x * v.x + v.y * v.y;
}

export function length(v: Vec2): number {
  return Math.sqrt(lengthSq(v));
}

export function normalize(out: Vec2): Vec2 {
  const len = length(out);
  if (len <= EPSILON) {
    out.x = 0;
    out.y = 0;
    return out;
  }

  out.x /= len;
  out.y /= len;
  return out;
}

export function normalized(out: Vec2, input: Vec2): Vec2 {
  out.x = input.x;
  out.y = input.y;
  return normalize(out);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * clamp(t, 0, 1);
}

export function approach(value: number, target: number, amount: number): number {
  if (value < target) {
    return Math.min(value + amount, target);
  }
  return Math.max(value - amount, target);
}

export function distanceSq(a: Vec2, b: Vec2): number {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return dx * dx + dy * dy;
}

export function angleOf(v: Vec2): number {
  return Math.atan2(v.y, v.x);
}

export function fromAngle(out: Vec2, angle: number, magnitude = 1): Vec2 {
  out.x = Math.cos(angle) * magnitude;
  out.y = Math.sin(angle) * magnitude;
  return out;
}

export function wrapAngle(angle: number): number {
  while (angle > Math.PI) angle -= Math.PI * 2;
  while (angle < -Math.PI) angle += Math.PI * 2;
  return angle;
}

export function rotateToward(current: number, target: number, maxStep: number): number {
  const delta = wrapAngle(target - current);
  return current + clamp(delta, -maxStep, maxStep);
}

export function pointSegmentDistanceSq(point: Vec2, a: Vec2, b: Vec2): number {
  const abx = b.x - a.x;
  const aby = b.y - a.y;
  const apx = point.x - a.x;
  const apy = point.y - a.y;
  const abLenSq = abx * abx + aby * aby;
  if (abLenSq <= EPSILON) {
    return distanceSq(point, a);
  }

  const t = clamp((apx * abx + apy * aby) / abLenSq, 0, 1);
  const cx = a.x + abx * t;
  const cy = a.y + aby * t;
  const dx = point.x - cx;
  const dy = point.y - cy;
  return dx * dx + dy * dy;
}
