const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(min, num), max);

export default clamp;
