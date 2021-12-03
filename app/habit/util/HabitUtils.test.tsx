import { getLevel, getMinXp } from './HabitUtils';

describe('Levels and xp', () => {
  const minXpPerLevel = [
    0, 1, 4, 8, 15, 22, 31, 41, 52, 64, 76, 90, 104, 119, 134, 150, 167, 184,
    201, 218, 236, 255, 273, 292, 311, 330, 349, 369, 388, 408, 428, 448, 468,
    488, 508, 528, 549, 569, 590, 610, 631, 651, 672, 693, 713,
  ];

  it('0 xp = level 0', () => {
    expect(getMinXp(0)).toBe(0);
    expect(getLevel(0)).toBe(0);
  });

  it('1 xp = level 1', () => {
    expect(getMinXp(1)).toBe(1);
    expect(getLevel(1)).toBe(1);
  });

  it('level function is inverse of xp', () => {
    for (let i = 0; i < 100; i += 1) {
      expect(getLevel(getMinXp(i))).toBe(i);
    }
  });

  it('xp function is inverse of level', () => {
    minXpPerLevel.forEach(minXp => {
      expect(getMinXp(getLevel(minXp))).toBe(minXp);
    });
  });

  it('minimum xp matches preset data', () => {
    for (let l = 0; l < minXpPerLevel.length; l += 1) {
      expect(getMinXp(l)).toBe(minXpPerLevel[l]);
    }
  });

  it('level increases at preset minimum xp', () => {
    for (let l = 0; l < minXpPerLevel.length; l += 1) {
      for (let xp = minXpPerLevel[l]; xp < minXpPerLevel[l + 1]; xp += 1) {
        expect(getLevel(xp)).toBe(l);
      }
    }
  });
});
