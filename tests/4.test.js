const LeapYear = require('../src/4');

test('Leap Year 2000 = true ', () => {
  expect(LeapYear(2000)).toBe(true);
});