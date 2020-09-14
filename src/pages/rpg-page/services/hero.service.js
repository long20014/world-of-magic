const calculateHP = (stats, heroClass, items = []) => {
  let hpFromItems = 0;
  const hpFromStats = stats.str*5 + stats.end*10 + stats.vit*20;
  for (const item in items) {
    hpFromItems+= item.hp ? item.hp : 0;
  } 
  return hpFromItems + hpFromStats;   
}

const calculateAtk = (stats, heroClass, items = []) => {
  let atkFromItems = 0;
  const arkFromStats = stats.str*2;
  for (const item in items) {
    atkFromItems+= item.atk ? item.atk : 0;
  } 
  return atkFromItems + arkFromStats;   
}

export default {
  calculateHP,
  calculateAtk 
}