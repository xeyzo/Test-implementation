const User = require('../src/11')

test("Cek user",()=>{
    expect(User.findByUsername("johndoe")).toStrictEqual({ id: 3, username: 'johndoe', name: 'John Doe' })
})