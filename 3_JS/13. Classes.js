//-------------------------- PROTOTYPAL INHERITANCE --------------------------//
const person = {
    isHuman: true
}

const child1 = Object.create(person)
const child2 = Object.assign(Object.create(person), {
    maxAge: 18
})
const john = Object.create(child2)
john.name = 'Jhon'

console.log(person)
console.log(child1.isHuman)
console.log(child2)
console.log(child2.isHuman)

console.log(john) // {name: 'Jhon'}
console.log(john.__proto__) // {maxAge: 18}
console.log(john.__proto__.__proto__) // {isHuman: true}

console.log(Object.getPrototypeOf(john)) // {maxAge: 18}

const arrayProto = Object.getPrototypeOf([])
console.log(Object.getOwnPropertyNames(arrayProto))

//-------------------------- FUNCTION CONSTRUCTORS --------------------------//
function Person(name){
    this.name = name
}
Person.prototype = {
    constructor: Person,
    isHuman: true
}
const conner = new Person('Conner')
const clement = new Person('Clement')
console.log(Object.getPrototypeOf(conner) === Object.getPrototypeOf(clement)) // true
console.log(clement) // Person {name: 'Clement'}

Person.prototype.speak = function() {
    console.log('Hello this is ' + this.name)
}
conner.speak() // Hello this is Conner

//-------------------------- CLASSES --------------------------//
class Personal {
    // 'static' is a property of the person itself
    static isDog = false
    isHuman = true
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log('Hello this is ' + this.name)
    }
}

const dan = new Personal('Dan')
const rob = new Personal('Rob')
dan.speak()
console.log(dan.isHuman)

console.log(dan.isDog) // undefined 
console.log(Personal.isDog) // false

//-------------------------- INHERITANCE --------------------------//
class Human {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log('Hello this is ' + this.name)
    }
}

class Child extends Human {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}
const child = new Child('John', 10)
child.speak() // Hello this is Jhon
console.log(child instanceof Person) // false