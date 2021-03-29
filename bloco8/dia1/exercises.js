const createEmployee = (name) => {
  return {
    nomeCompleto: name,
    email: `${name.split(' ')[0]}@trybe.com`,
  }
}

const newEmployee = () => {
  const employees = {
    id1: createEmployee('Pedro Guerra'),
    id2: createEmployee('Luiza Drumond'),
    id3: createEmployee('Carla Paiva'),
  }
  return employees;
}

console.log(newEmployee());