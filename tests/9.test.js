const symmetrical = require('../src/9');
test('array mirror 1 2 3 = 1 2 3 3 2 1', () => {
  expect(symmetrical('apa')).toStrictEqual(true);
  expect(symmetrical('tidur')).toStrictEqual(false);
  expect(symmetrical(1001)).toStrictEqual(true);
  expect(symmetrical(8001008)).toStrictEqual(true);
});