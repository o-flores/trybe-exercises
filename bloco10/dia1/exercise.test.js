const searchEmployee = require('./exercise');

it('Verifica se a função existe', () => {
  expect(searchEmployee('8579-6', 'firstName')).toBeDefined();
});

it('Verifica se passando um id certo e um detail certo retorna o valor esperado', () => {
  expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
})

it('Verifica se passando um id errado retorna ID não identificada', () => {
  expect(searchEmployee('85796', 'firstName')).toBe('ID não identificada');
})

it('Verifica se passando um detail errado retorna Informação indisponível', () => {
  expect(searchEmployee('8579-6', 'salario')).toBe('Informação indisponível');
})