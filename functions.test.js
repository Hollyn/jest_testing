const functions = require('./functions')

// toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

// not toBe
test('Adds 2 + 2 to not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
})

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy()
})

// toBeTruthy
test('Should be truthy', () => {
    expect(functions.checkValue(2)).toBeTruthy()
})

// toEqual
test('Create a user', () => {
    expect(functions.createUser()).toStrictEqual({
        firstname: 'Hollyn',
        lastname: 'Derisse',
    })
})

// Async function

// Promisse
test('Should fetch the user Leanne Graham', () => {
    expect.assertions(1)
    return functions.fetchUser()
        .then((data) => {
            expect(data.name).toEqual('Leanne Graham')
        })
})

// Async Await
// test('User fetched name should be Leanne Graham', async () => {
//    const data = await functions.fetchUser()
//    expect(data.name).toEqual('Leanne Graham')
//    expect.assertions(1)
//    jest.setTimeout(30000)
// })