type Options = {
  alpha?: number;
};

const hex2rgb = (hex: string) => {
  hex = hex.replace(/^#/, '');

  const options: Options = {};
  let alphaFromHex = 1;

  if (hex.length === 8) {
    alphaFromHex = Number.parseInt(hex.slice(6, 8), 16) / 255;
    hex = hex.slice(0, 6);
  }

  if (hex.length === 4) {
    alphaFromHex = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
    hex = hex.slice(0, 3);
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const number = Number.parseInt(hex, 16);
  const r = number >> 16;
  const g = (number >> 8) & 255;
  const b = number & 255;
  const a = typeof options.alpha === 'number' ? options.alpha : alphaFromHex;

  return [r, g, b, a];
};

export default hex2rgb;
