const arrayMirroring = require('../src/8');
test('array mirror 1 2 3 = 1 2 3 3 2 1', () => {
  expect(arrayMirroring([1,2,3])).toStrictEqual([1,2,3,3,2,1]);
});