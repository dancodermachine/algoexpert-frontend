//-------------------------- OBJECTS OVERVIEW --------------------------//
const website = {
    name: 'AlgoExpert',
    rating: 5,
    founders: ['Clement', 'Antoine'],
    isAwesome: true,
    sayHello: () => console.log('hello'),
    get getRating() {
        return this.rating
    },
    set setRating(value) {
        this.rating= value
    }
}

console.log(website.name) // AlgoExpert
console.log(website['name']) // AlgoExpert

// EDITING
website.name = 'FrontEndExpert'
console.log(website.name) // FrontEndExpert

// ADD
website.foo = 'bar'
console.log(website.foo) // bar

// DELETE
delete website.foo
console.log(website) // {name: 'FrontEndExpert', rating: 5, founders: Array(2), isAwesome: true, sayHello: ƒ, …}

// CHECK IF VALUE IN OBJECT

// checks whether the specified property exists in the object itself or anywhere in its prototype chain (i.e inheritance)
console.log('name' in website) // true -> because name is a key of website

// checks whether 'name' is a direct property of the website object (not inherited)
console.log(website.hasOwnProperty('name')) // true -> because name is a key of website

// METHOD
website.sayHello() // hello -> logs 'hello'

// GET & SETTER
console.log(website.getRating) // 5
website.setRating = 6
console.log(website.getRating) // 6

//-------------------------- OBJECT EQUALITY --------------------------//
const obj1 = {}
console.log(obj1 === {}) // false -> 2 objects are not the same base on their values
console.log(obj1 === obj1) // true -> it is the same object 

//-------------------------- NEW OBJECT --------------------------//
const obj2 = new Object()
obj2.name = 'Connor'
console.log(obj2) // {name: 'Connor'}

//-------------------------- CONSTRUCTORS --------------------------//
function Site(name, rating, founders) {
    this.name = name
    this.rating = rating
    this.founders = founders
}
const frontEndExpert = new Site('FrontEndExpert', 5, ['Conner'])
console.log(frontEndExpert) // Site {name: 'FrontEndExpert', rating: 5, founders: Array(1)}

//-------------------------- SYMBOL --------------------------//
// symbols are unique identifiers. hidden from most iterations functions. we might want to use a symbol when we need to add a value to an object that we got back from a third-party API. But we want to make sure that our new property doesn't interfere with any of that third-party API code.
const id1 = Symbol('id')
const id2 = Symbol('id')
const obj3 = {
    [id1]: 1234,
    [id2]: 4321,
}
console.log(obj3) // {Symbol(id): 1234, Symbol(id): 4321}

//-------------------------- INHERITANCE --------------------------//
const inter = {
    name: 'AlgoExpert',
    rating: 5,
    founders: ['Clement', 'Antoine'],
}

const obj4 = {
    __proto__: inter 
}

console.log(obj4) // {} -> it returns empty object but you can still access to their properties and methods
console.log(obj4.name) // 'AlgoExpert'

//-------------------------- ITERATING OVER AN OBJECT --------------------------//
const web = {
    name: 'AlgoExpert',
    rating: 5,
    founders: ['Clement', 'Antoine'],
}

const obj5 = {
    foo: 'bar',
    [Symbol('id')]: 0,
    __proto__: web, 
}
// When we iterate over an object, there are different ways the properties can be treated based on if they are an own property, if they are a symbol and if they are a property coming from the __proto__ (inherited object). 

console.log(Object.keys(obj5)) // ['foo'] -> it excludes any keys that are not own keys
console.log(Object.values(obj5)) // ['bar'] -> it excludes any values that are not own values
console.log(Object.entries(obj5)) // [['foo', 'bar']] -> it returns a nested array of each key value pair

Object.entries(obj5).forEach(([key, value]) => console.log(key, value)); // foo bar

// When iterating this way it will still skip Symbol but it will now iterate over the values it is inherinting from (__proto__)
for (key in obj5) { 
    console.log(key) // foo name rating founders 
}

//-------------------------- COPYING OBJECTS --------------------------//
const websi = {
    name: 'AlgoExpert',
    rating: 5,
    founders: ['Clement', 'Antoine'],
}

const obj6 = {
    foo: 'bar',
    [Symbol('id')]: 0,
    __proto__: websi, 
}

const obj7 = {
    original: 123
}
// (target object, source object) and only copies the innumerable own properties
Object.assign(obj7, obj6)
console.log(obj7) // {original: 123, foo: 'bar', Symbol(id): 0}

//-------------------------- FREEZING OBJECTS --------------------------//
const link = {
    name: 'AlgoExpert',
    rating: 5,
    founders: ['Clement', 'Antoine'],
}
// it means we can't longer change this object, we make it immutable
Object.freeze(link)
link.name = 'FronteEndExpert'
console.log(link.name) // AlgoExpert -> it did not change
console.log(Object.isFrozen(link)) // true -> checks if object is frozen

//-------------------------- SEELING OBJECTS --------------------------//
const url = {
    name: 'AlgoExpert',
    rating: 5,
    founders: ['Clement', 'Antoine'],
}
// it means we can't longer change this object, we make it immutable
Object.seal(url)
url.name = 'FronteEndExpert'
console.log(url.name) // FronteEndExpert -> you can change existing properties
url.foo = 'bar'
console.log(url.foo) // undefined -> you can't add properties
console.log(Object.isSealed(url)) // true -> checks if object is sealed

//-------------------------- CONVERTING TO PRIMITIVES --------------------------//
const site = {
    name: 'AlgoExpert',
    rating: 5,
    founders: ['Clement', 'Antoine'],
}
console.log(site.toString()) // [object Object] -> not very useful

site.toString = function() {
    return 'Hello World'
}
console.log(site.toString()); // Hello World

console.log(site.valueOf()) // {name: 'AlgoExpert', rating: 5, founders: Array(2),toString: ƒ}