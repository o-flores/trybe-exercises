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

//Exercicio 1
const returnDragonDamage = () => {
  const max = dragon.strength;
  const min = 15;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
