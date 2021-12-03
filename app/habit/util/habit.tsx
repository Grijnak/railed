const c = 21;
const r = -0.09838692892654695;

function getMinXp(level: number): number {
  return Math.round(c * (level - (Math.exp(r * level) - 1) / r));
}

function getLevel(xp: number): number {
  let l = xp;
  while (xp < getMinXp(l)) {
    l = Math.floor(
      (c * (1 + (l * r - 1) * Math.exp(l * r)) - r * xp) /
        (c * r * (Math.exp(l * r) - 1)),
    );
  }
  while (xp >= getMinXp(l + 1)) {
    l += 1;
  }
  return l;
}

export { getMinXp, getLevel };
