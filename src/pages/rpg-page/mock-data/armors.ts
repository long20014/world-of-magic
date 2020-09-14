import heroService from '../services/hero.service';
import utilService from '../services/util.service';

interface MinMax {
  min: number;
  max: number;
}

interface Armor {
  id: string;
  name: string;
  defense: MinMax;
  hp: MinMax;
  options: any;
}

export const armors = [
  {
    id: '001',
    name: 'Wood armor',
    defense: { min: 10, max: 15 },
    hp: { min: 20, max: 27 },
    options: {},
  },
  {
    id: '001',
    name: 'Dragon armor',
    defense: { min: 150, max: 165 },
    hp: { min: 220, max: 270 },
    options: {
      maxHp: {
        stat: { min: 3, max: 7 },
        description: 'increase {var1} max HP',
      },
    },
  },
];

export function armorBuilder(armor: any) {
  const defense = utilService.getRandomInt(
    armor.defense.min,
    armor.defense.max
  );
  const hp = utilService.getRandomInt(armor.hp.min, armor.hp.max);

  const options: any = {};
  for (const option in armor.options) {
    const desc = armor.options[option].description;
    const min = armor.options[option].stat.min;
    const max = armor.options[option].stat.max;
    const stat = utilService.getRandomArbitrary(min, max);
    const description = utilService.insertVariablesToString(desc, [stat + '%']);
    options[option] = {
      stat,
      description,
    };
  }
  return {
    id: armor.id,
    name: armor.name,
    defense,
    hp,
    options,
  };
}

export function refineArmor(armor: any, armorPrototype: any, option: any) {
  if (armor.options[option]) {
    const desc = armorPrototype.options[option].description;
    const min = armorPrototype.options[option].stat.min;
    const max = armorPrototype.options[option].stat.max;
    const newStat = utilService.getRandomArbitrary(min, max, 1);
    const description = utilService.insertVariablesToString(desc, [
      newStat + '%',
    ]);
    const tempObj: any = {};
    tempObj[option] = {
      stat: newStat,
      description,
    };
    armor.options[option] = tempObj[option];
  }
}
