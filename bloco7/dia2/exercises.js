const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
  
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addKey(object, key, value) {
  object[key] = value;
}

addKey(lesson2, 'turno', 'manhã');
console.log(lesson2)

function listKeys(object) {
  for (key in object) {
    console.log(key)
  }
}

listKeys(lesson2);

function getObjectSize(object) {
  console.log(Object.keys(object).length);
}

getObjectSize(lesson2);
