const repeatLetter = require('../src/7');

test('3 times repeat ', () => {
  expect(repeatLetter('what ! ', 2)).toBe("wwhhaatt !!");
});