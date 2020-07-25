const isIsogram = require("../src/14")
test("gelas = true, makan = false",()=>{
    expect(isIsogram("gelas")).toBe(true)
    expect(isIsogram("makan")).toBe(false)
})