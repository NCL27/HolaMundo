const text = require('./Index');

test('retorno Hola Mundo', () => {
  expect(text()).toBe("Hola Mundo");
});