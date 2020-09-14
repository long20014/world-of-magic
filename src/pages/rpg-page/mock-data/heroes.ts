
import {KNIGHT, ARCHER, MAGE, ASSASSIN} from '../constants';
export const heroes = [
  {
    name: "Salvader - The Abandoned Knight",
    heroClass: KNIGHT,
    stats: {
      str: 50,
      agi: 39,
      int: 20,
      end: 35,
      vit: 35
    },
    items: ["hp potion", "rusty sword"]  
  },
  {
    name: "Arcadius - The Wandering Sage",
    heroClass: MAGE,
    stats: {
      str: 20,
      agi: 29,
      int: 65,
      end: 25,
      vit: 40
    }  
  }
]