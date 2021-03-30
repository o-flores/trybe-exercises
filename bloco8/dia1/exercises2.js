const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// temos que adicionar o 1 na subtração pois o metodo Math.random() inclui o 0 mas exclui o 1
const getRandomIntInclusive = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Exercicio 1
const getDragonDamage = () => {
  const minDmg = 15;
  const maxDmg = dragon.strength;
  return getRandomIntInclusive(maxDmg, minDmg);
}

//Exercicio 2
const getWarriorDamage = () => {
  const minDmg = warrior.strength;
  const maxDmg = minDmg * warrior.weaponDmg;
  return getRandomIntInclusive(maxDmg, minDmg);
}

//Exercicio 3
const getMageDamageAndMana = () => {
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const mana = mage.mana;
  const result = {
    manaSpent: 0,
    dmgDone: 'Sem mana suficiente',
  }
  if (mana >= 15) {
    result.manaSpent = 15;
    result.dmgDone = getRandomIntInclusive(minDmg, maxDmg);
  }
  return result
}

//Parte 2
const warriorAttack = () => {
  const dmgDone = getWarriorDamage();
  dragon.healthPoints -= dmgDone;
  warrior.damage = dmgDone;
}

const mageAttack = () => {
  const mageStats = getMageDamageAndMana();
  dragon.healthPoints -= mageStats.dmgDone;
  mage.damage = mageStats.dmgDone;
  mage.mana -= mageStats.manaSpent;
}

const dragonAttack = () => {
  const dmgDone = getDragonDamage();
  mage.healthPoints -= dmgDone;
  warrior.healthPoints -= dmgDone;
  dragon.damage = dmgDone;
}

const gameActions = {
  warriorTurn: warriorAttack(),
  mageTurn: mageAttack(),
  dragonTurn: dragonAttack(),
  battleMembers: battleMembers,
}

console.log(gameActions.battleMembers);
