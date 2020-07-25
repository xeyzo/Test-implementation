const romawi = require('../src/15')
test("cek bilangan romawi",() =>{

expect(romawi("I")).toBe(1);
expect(romawi("II")).toBe(2);
expect(romawi("III")).toBe(3);
expect(romawi("V")).toBe(5);
expect(romawi("VI")).toBe(6);
expect(romawi("X")).toBe(10);
expect(romawi("L")).toBe(50);
expect(romawi("C")).toBe(100);
expect(romawi("D")).toBe(500);
expect(romawi("M")).toBe(1000);
expect(romawi("MMXVIII")).toBe(2018);



})