const Item = require("../src/12")

test(" Find id 5 = true, Find id 3 = false",()=>{
    expect(Item.findById(3).isOnSale()).toBe(false)
    expect(Item.findById(5).isOnSale()).toBe(true)
})