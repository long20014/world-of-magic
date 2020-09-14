import React, { useState, useEffect } from 'react';
import './rpg-page.scss';
import { items, heroes, skillSets } from './mock-data';
import { Hero } from './models/hero.class';
import { armorBuilder, armors, refineArmor } from './mock-data/armors';

export default function RpgPage(props: any) {
  const [state, setState] = useState({
    chest: {
      items,
    },
    heroList: [new Hero(heroes[0]), new Hero(heroes[1])],
    currentSkills: skillSets.set1,
    armor: {},
  });

  const openChest = (chest: any, hero: any) => {
    const item = getItemFromChest(chest);
    addItem(item, hero);
    setNewState('heroList', state.heroList);
  };

  const getItemFromChest = (chest: any) => {
    const totalChance = chest.items.reduce(
      (total: number, item: any) => total + item.chance,
      0
    );
    if (totalChance === 100) {
      const sortChestItems = chest.items.sort(
        (item1: any, item2: any) => item1.chance - item2.chance
      );
      const luckyNumber = Math.floor(Math.random() * 10000) / 100;
      let threshold = 0;
      let itemIndex = 0;
      do {
        threshold = threshold + sortChestItems[itemIndex].chance;
        itemIndex++;
      } while (threshold < luckyNumber);
      if (!isItemsList(sortChestItems[itemIndex - 1])) {
        // alert('You have got a ' + sortChestItems[itemIndex-1].name);
        return sortChestItems[itemIndex - 1].name;
      } else if (isItemsList(sortChestItems[itemIndex - 1])) {
        const item = getRandomItemFromList(sortChestItems[itemIndex - 1].list);
        return item.name;
      }
    } else {
      alert('Total Chance error ' + totalChance);
    }
  };

  const getArmor = (armor: any) => {
    state.armor = Object.assign({}, armorBuilder(armor));
    setNewState('armor', state.armor);
    console.log(state.armor);
  };

  const DoRefineArmor = (armor: any, armorPrototype: any, option: any) => {
    refineArmor(armor, armorPrototype, option);
    setNewState('armor', state.armor);
    console.log(state.armor);
  };

  const getRandomItemFromList = (items: any) => {
    const luckyNumber = Math.floor(Math.random() * 10000) / 100;
    let threshold = 0;
    let itemIndex = 0;
    do {
      threshold = threshold + Math.floor(100 / items.length);
      itemIndex++;
    } while (threshold < luckyNumber);
    return items[itemIndex - 1];
  };

  const isItemsList = (obj: any) => {
    if (obj.list) {
      return true;
    }
    return false;
  };

  const setNewState = (key: string, value: any) => {
    setState((state) => {
      return { ...state, [key]: value };
    });
  };

  const getHero = () => {
    console.log(state.heroList);
  };

  const addItem = (item: any, hero: any) => {
    hero.addItem(item);
  };

  const testOpenChest = () => {
    const itemGainMap = new Map();
    for (let i = 0; i < 1000; i++) {
      const item = getItemFromChest(state.chest);
      let itemCount = 1;
      if (itemGainMap.has(item)) {
        itemCount = itemGainMap.get(item) + 1;
      }
      itemGainMap.set(item, itemCount);
    }
    console.log(itemGainMap);
  };

  document.onkeydown = function (event) {
    event = event || window.event;
    if (event.key === 'q') {
      switch (state.currentSkills[0].combo) {
        case 'set1_1':
          setNewState('currentSkills', skillSets.set1_1);
          break;
        case 'set1_1_1':
          setNewState('currentSkills', skillSets.set1_1_1);
          break;
        default:
          setNewState('currentSkills', skillSets.set1);
      }
    } else if (event.key === 'w') {
      switch (state.currentSkills[1].combo) {
        case 'set1_2':
          setNewState('currentSkills', skillSets.set1_2);
          break;
        default:
          setNewState('currentSkills', skillSets.set1);
      }
    } else if (event.key === 'e') {
      switch (state.currentSkills[2].combo) {
        case 'set1_3':
          setNewState('currentSkills', skillSets.set1_3);
          break;
        default:
          setNewState('currentSkills', skillSets.set1);
      }
    } else if (event.key === 'r') {
      switch (state.currentSkills[3].combo) {
        case 'set1_4':
          setNewState('currentSkills', skillSets.set1_4);
          break;
        default:
          setNewState('currentSkills', skillSets.set1);
      }
    }
  };

  return (
    <div className="component-wrapper">
      <h1>RpgPage</h1>
      <button onClick={() => openChest(state.chest, state.heroList[0])}>
        Open Treasure Chest
      </button>
      <button onClick={() => getHero()}>get heroes</button>
      <button onClick={() => testOpenChest()}>Test Treasure Chest</button>
      <button onClick={() => getArmor(armors[1])}>Test Get Armor</button>
      <button onClick={() => DoRefineArmor(state.armor, armors[1], 'maxHp')}>
        Test Refine Armor
      </button>
      <table>
        <thead>
          <tr>
            <th>item</th>
          </tr>
        </thead>
        <tbody>
          {state.heroList[0].getItems().map((item) => (
            <tr key={state.heroList[0].getItems().indexOf(item)}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="skills-wrapper">
        {state.currentSkills.map((item) => (
          <div className="skill-slot" key={item.name}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

// export default function RpgPage() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
