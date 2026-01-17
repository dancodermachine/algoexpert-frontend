//-------------------------- LOOSE VS STRICT EQUALITY --------------------------//
console.log(5 == '5') // true -> 'loose' equality
console.log(5 === '5') // false -> 'strict' equality

//-------------------------- NAN --------------------------//
console.log(NaN == NaN) // false

//-------------------------- CHECKING NULL & UNDEFINED --------------------------//
console.log(null == null) // true
console.log(null == undefined) // true
console.log(undefined == undefined) // true

const x = 5
// setting x == null checks boths null and undefined
if(x == null){ 
    // do something
}

//-------------------------- OBJECT EQUALITY --------------------------//
const obj = {}
console.log(obj === {}) // false -> 2 objects are not the same base on their values
console.log(obj == {}) // false -> 2 objects are not the same base on their values
console.log(obj === obj) // true -> it is the same object

const arr = []
console.log(arr === []) // false -> 2 arrays are not the same base on their values
console.log(arr == []) // false -> 2 arrays are not the same base on their values
console.log(arr === arr) // true -> it is the same arrays
