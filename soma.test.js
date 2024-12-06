const soma = require('./soma');

test('soma 1 + 2 para resultar em 3', () => {
  expect(soma(1, 2)).toBe(3);
});