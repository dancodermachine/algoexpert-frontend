//-------------------------- ANONYMOUS & ARROW FUNCTION --------------------------//
const arr1 = [1, 2, 3, 4]
const doubled = arr1.map(double)
function double(num) {
    return num * 2
}
console.log(doubled) // [2, 4, 6, 8]

// Anonymous functiom
const doubledAnonymous = arr1.map(function (num) {
    return num * 2
})
console.log(doubledAnonymous) // [2, 4, 6, 8]

// Arrow function
const doubledArrow = arr1.map((num) => {
    return num * 2
})
console.log(doubledArrow) // [2, 4, 6, 8]

// Arrow function abbreviated
const doubledArrowAbbreviated = arr1.map(num => num * 2)
console.log(doubledArrowAbbreviated) // [2, 4, 6, 8]

//-------------------------- DECONSTRUCTING ASSIGMENT & REST --------------------------//
const arr2 = [1, 2, 3, 4]
const [first, second] = arr2
console.log(first) // 1
console.log(second) // 2

const [f, s, ...rest] = arr2
console.log(rest) // [3, 4]

//-------------------------- DECONSTRUCTING OBJECTS --------------------------//
const person = {
    name: 'Conner',
    website: 'FrontEndExpert',
}
const {name} = person
console.log(name) // Conner

// name: firstName is for renaming the variable
const {name: firstName, ...r} = person 
console.log(firstName) // Conner
console.log(r) // {website: 'FrontEndExpert'}

function printName({name}) {
    console.log(name)
}
printName(person) // Conner

//-------------------------- SPREAD --------------------------//
const arr3 = [1, 2, 3, 4]
const arr4 = [5, 6, 7]

function add(x, y) {
    console.log(x + y)
}
// ...arr3 will spread all 4 values but since the function only accepts 2 it takes the first 2 values.
add(...arr3) // 3 

const combineArr34 = [...arr3, ...arr4]
console.log(combineArr34) // [1, 2, 3, 4, 5, 6, 7] 

function logParams(x, ...rest){
    console.log(x)
    console.log(rest)
}
logParams(1) // 1 [] 
logParams(2, [1, 2, 3]) // 2 [1, 2, 3]

//-------------------------- TEMPLATE LITERALS --------------------------//
const lastName = 'Ovens'
console.log(`My name is Sam ${lastName}`) // My name is Sam Ovens   

//-------------------------- OPTIONAL CHAINING --------------------------//
const per = {
    // company: {
    //     website: 'AlgoExpert.io'
    // }
}
console.log(per?.company?.website) // undefined -> without the '?' it will throw an error

//-------------------------- SHORT CIRCUIT EVALUATION --------------------------//
const shouldRunCode = true;

function logWorld() {
    console.log('Hello World')
}
shouldRunCode && logWorld() // 'Hello World' -> it runs because shouldRunCode is true