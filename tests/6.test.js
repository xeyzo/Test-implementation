const repeatString = require('../src/6');

test('2 times repeat ', () => {
  expect(repeatString("Wake up!!! ",2)).toBe("Wake up!!! Wake up!!! ");
});