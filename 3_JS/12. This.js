
//-------------------------- THIS IN FUNCTIONS --------------------------//
'use strict'
console.log(this) // Window

function logThis() {
    console.log(this) // undefined -> when we are in 'use strict'
}
logThis()

//-------------------------- THIS IN OBJECTS --------------------------//
const obj = {
    num: 10,
    logThis
}

obj.logThis() // {num: 10, logThis: ƒ}

//-------------------------- THIS IN EVENT LISTENERS --------------------------//
const button = document.querySelector('button')
// Do not use arrow function with 'this' as it will refer to the window. 
button.addEventListener('click', logThis)  // <button>Click Me</button> 

//-------------------------- THIS IN ARRAYS --------------------------//

[1, 2, 3].forEach(function(num) {
    console.log(this) // undefined -> if in 'strict mode' else it will log out a window.
    console.log(num);
})

[1, 2, 3].forEach(function(num) {
    console.log(this) // undefined -> if in 'strict mode' else it will log out a window
    console.log(num);
})


//-------------------------- THIS IN OBJECTS --------------------------//
class Person {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log('Hello I am ' + this.name)
    }
}

const conner = new Person('Conner')
conner.speak() // Hello I am Conner