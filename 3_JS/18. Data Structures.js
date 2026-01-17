//-------------------------- STACKS --------------------------//
const stack = []
stack.push(1)
stack.push(2)
console.log(stack) // [1, 2]
console.log(stack.pop()) // 2

//-------------------------- QUEUES --------------------------//
const queue = []
queue.push(1)
queue.push(2)
console.log(queue) // [1, 2]
console.log(queue.shift()) // 1

//-------------------------- MAPS --------------------------//
const map = new Map()
map.set('test', 123)
map.set(10, 'ten')
console.log(map) // {'test' => 123, 10 => 'ten'}
console.log(map.get(10)) // ten
console.log(map.size) // 2
console.log(map.has(10)) // true
map.delete(10)
console.log(map) // {'test' => 123}
map.clear()
console.log(map) // {}


map.set('test', 123)
map.set(10, 'ten')

// Looping
for ([key, value] of map) {
    console.log([key, value])
}
map.forEach((value, key) => {
    console.log(key, value)
})

// Iterator
const iterEntries = map.entries()
const iterKeys = map.keys()
const iterValues = map.values()
console.log(iterEntries.next().value)
console.log(iterKeys.next().value)
console.log(iterValues.next().value)

// Serialised Map
const mapSerie = new Map([['test', 123], [10, 'ten']])

//-------------------------- SETS --------------------------//
const setNum = new Set([123, 456])
console.log(setNum) // {123, 456}

const set = new Set()
set.add(123)
set.add(456)
console.log(set) // {123, 456}
console.log(set.has(123)) // true
set.delete(123)
console.log(set) // {456}
set.clear()

set.add(123)
set.add(456)

// Looping
for (value of set) {
    console.log(value)
}
set.forEach(value => {
    console.log(value)
})

// Iterator
const iter = set.values()
console.log(iter.next().value)

// From array to set
const arr = [1, 2, 2, 3, 4]
console.log(Array.from(new Set(arr)))

//-------------------------- WEAKSETS & WEAKMAPS --------------------------//
const weakSet = new WeakSet()
// weakSet.add(123) -> this will through an error because weaksets only accept objects
weakSet.add({})

//-------------------------- LINKEDLISTS --------------------------//
