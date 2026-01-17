//-------------------------- GENERATORS --------------------------//
function* getNumbers() {
    yield 1
    yield 2
    yield 3
    return 4
}

const generator1 = getNumbers()
console.log(generator1.next()) // {value: 1, done: false}
console.log(generator1.next()) // {value: 2, done: false}
console.log(generator1.next()) // {value: 3, done: false}
console.log(generator1.next()) // {value: 4, done: true}


function* getNumbs(count) {
    for (let i=0; i<count; i++) {
        yield i
    }
}

const generator2 = getNumbs(3)
console.log(generator2.next()) // {value: 0, done: false}
console.log(generator2.next()) // {value: 1, done: false}
console.log(generator2.next()) // {value: 2, done: false}
console.log(generator2.next()) // {value: undefined, done: true}

const generator3 = getNumbs(3)
// avoid it
for (value of generator3) {
    console.log(value) // 0 1 2
}

function* getNumeros(count) {
    const value = yield 0
    yield value + 3
}
const generator4 = getNumeros(3)
console.log(generator4.next()) // {value: 0, done: false}
console.log(generator4.next(5)) // {value: 8, done: false} -> by passing 5 it gives that value to the previous yield number
console.log(generator4.return(2)) // {value: 2, done: true} 
console.log(generator4.throw(new Error('There was an error'))) // There was an error