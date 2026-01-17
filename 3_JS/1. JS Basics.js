//-------------------------- NUMBER FUNCTIONS --------------------------//
let num1 = 10.8;
let strNum1 = '10.8'
let strNum2 = '10.8px'
console.log(Math.floor(num1)); // 10
console.log(Math.round(num1)); // 11 -> traditional .5 rule
console.log(Math.random()); // Random number between 0 and 1
console.log(Number(strNum1)); // 10.8 -> Convert from string to number
console.log(parseInt(strNum1)); // 10 -> Looks at number from left to right and find something which is not part of an integer (e.g., '.')
console.log(parseFloat(strNum2)); // 10.8 -> Looks at number from left to right and find something which is not part of a float (e.g., 'px')

//-------------------------- STRING --------------------------//
let str1 = 'abcd';
let str2 = '     abcd';
let str3 = 'a,b,c,d'

console.log(str1 + 4); // abc4 
console.log('Hello this is a single quote: \''); // Hello this is a single quote: ' -> the '\' symbol allows you to scape characters
console.log(`Result: ${10 + 20}`); // Result: 30 -> Template literal
console.log(str1[0]); // a -> gets letter at index 0 
console.log(str1.charAt(1)); // b -> gets letter at index 1
console.log(str1.includes('b')); // true -> whether the value passed is included in the string
console.log(str1.startsWith('e')); // false -> whether the string starts with the value passed
console.log(str1.endsWith('e')); // false -> whether the string ends with the value passed
console.log(str1.substr(0, 2)); //ab -> .substr(starting index, num values you want to get). if the second value is not passed it goes till the end of the string
console.log(str1.slice(1, 2)); // b -> (starting index, ending index exclusive) 
console.log(str1.padStart(10, '-')) // ------abcd -> (number of characters we want to have, if the length of the string is smaller that the number of characters we want, the we fill it with the value passed here).
console.log(str1.padEnd(10, '-')) // abcd------ -> similar to padStart
console.log(str2.trim()) // abcd -> removes any trailing or leading spaces .trimStart, .trimEnd will remove starting or ending white spaces respectively. 
console.log(str3.split(',')) // ['a', 'b', 'c', 'd'] -> String to array

//-------------------------- OBJECTS --------------------------//
const person = {
    name: 'Conner',
    course: 'FrontendExpert'
};
const objectToStr = JSON.stringify(person); // converts object to string
const strToObject = JSON.parse(objectToStr); // converts string to object
console.log(person.name) // Conner

const map = new Map(); // keys of a map can be of any type rather than restricted to strings
map.set(123, 'hello'); 
console.log(map.size); // 1 -> size of the map

const set = new Set(); // like a list but of unique values
set.add('hello');
console.log(set.has('hel')); // false -> because 'hel' is not included in the set
console.log(set.size); // 1 -> size of the set
set.delete('hello'); // removes item from set

const arr = [1, 2, 3] // array
console.log(arr.length); // 3 -> length of the array
console.log(arr[1]); // 2 -> it is index 1 of the array
arr.push(4); // inserts element at the end of the array
console.log(arr); // [1, 2, 3, 4]

//-------------------------- FUNCTIONS --------------------------//
function addTwo(a, b=6) {
    return a + b;
}

function callFunc(func, param1, param2) {
    console.log(func(param1, param2))
}

callFunc(addTwo, 1) // 7

//-------------------------- LOOPS --------------------------//
for (let i=0; i<4; i++) {
    console.log(i) / 0, 1, 2, 3
};

let j = 0;
while (j < 4) {
    console.log(j); // 0, 1, 2, 3
    j++;
};

for (const value of [1, 2, 3]) {
    console.log(value) // 1, 2, 3
};

const obj = {
    name: 'Conner',
    course: 'FrontendExpert'
};

for (const key in obj) {
    console.log(key, obj[key]); // name Conner, course FrontendExpert
}

[1, 2, 3].forEach(num => {
    console.log(num) // 1, 2, 3
})

//-------------------------- CONDITIONALS --------------------------//
const condition = true;
if (condition) {
    console.log('It was true')
} else if (condition === false) {
    console.log('It was false')
} else {
    console.log('Default')
}

const myNum = 2;
// It doesn't stop if it hits any of those cases. Default will always run regardless. But you can add a 'break' if you want to end something for a case. 
switch(myNum) {
    case 1:
        console.log('It was 1');
    case 2:
    case 3: 
        console.log('It was 2');
    default:
        console.log('Default')
}


// condition ? expression1 : expression2
// The condition should return a truthy or falsy value
// expression1 executes if the condition is truthy
// expression2  executes if the condition is falsy 
console.log(myNum > 5 ? 'Greater than 5': 'Less than 5') // Less than 5
const exerciseTimeMins = 10
const message1 = exerciseTimeMins < 30 ? 'You need to try harder!' : 'Doing good!' 
const message2 = exerciseTimeMins < 30 ? 'You need to try harder!' : exerciseTimeMins < 60 ? 'Doing good!' : 'Excellent'

//-------------------------- ERROR HANDLING --------------------------//
try {
    throw new Error('Oh No'); // Uncaught Error: Oh No
} catch (error) {
    console.error(error);
}

//-------------------------- LOGGING --------------------------//
console.time();
for (let i = 0; i < 5; i++) {
    console.log(i)
};
console.timeEnd(); // default: 0.44580078125 ms

console.time();
for (let i = 0; i < 10; i++) {
    console.log(i)
};
console.timeLog(); // default: 1.01904296875 ms

function foo() {
    console.trace(); 
};
foo(); // foo	@	1. JS Basics.js:141

//-------------------------- STRICT MODE --------------------------//
// 'use strict' use this at the beginning of the file to catch errors. You can also use it at function level.

function fee() {
    'use strict';
    x = 5;
}
fee() // 1. JS Basics.js:150 Uncaught ReferenceError: x is not defined at fee (1. JS Basics.js:150:7)