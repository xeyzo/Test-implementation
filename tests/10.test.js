const censor = require('../src/10')
test("Sensor word",() =>{
    expect(censor('shut up bitch !.', ['bitch'])).toBe("shut up ***** !.")
})
