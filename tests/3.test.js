const mebiToKibi = require('../src/3');

test('adds 1 Mebi to kibi = 1024 ', () => {
  expect(mebiToKibi(1)).toBe(1024);
});