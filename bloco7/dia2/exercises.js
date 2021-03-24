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

function getObjectValues(object) {
  console.log(Object.values(object));
}

getObjectValues(lesson2);

console.log('---------------------------------------')
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

function getTotalStudents(object) {
let sum = 0;
  for (key in object) {
    sum += object[key]['numeroEstudantes'];
  }
  return sum;
}

console.log(getTotalStudents(allLessons));

function getValueByNumber(object, number) {
  const values = Object.values(object);
  console.log(values[number]);
}

getValueByNumber(lesson3,1)
