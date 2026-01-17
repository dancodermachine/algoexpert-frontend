//-------------------------- CREATING ARRAYS --------------------------//
const arr1 = [1, 2, 3, 'error']; 
const arr2 = new Array(1, 2, 3);
const arr3 = new Array(4); // If you pass a single value it will create an array with that number of empty spaces.
console.log(arr1); // [1, 2, 3, 'error']
console.log(arr2); // [1, 2, 3]
console.log(arr3); // [empty × 4]

//-------------------------- GETTING & EDITING ARRAYS --------------------------//
const arr4 = [1, 2, 3];
console.log(arr4[1]) // 2
arr4[1] = 10;
console.log(arr4) // [1, 10, 3]
console.log(arr4.includes(3)) // true -> Check if 3 is included in the array
console.log(arr4.indexOf(3)) // 2 -> 2 is the index of 3 in the array

//-------------------------- ADDING ELEMENTS TO ARRAY --------------------------//
const arr5 = [1, 2, 3];

arr5.push(4);
console.log(arr5); // [1, 2, 3, 4] -> adds element at the end of the array

arr5.push(6, 7)
console.log(arr5); // [1, 2, 3, 4, 6, 7] -> you can add many elements at the end of the array

arr5.pop();
console.log(arr5); // [1, 2, 3, 4, 6] -> removes the last element of the array

arr5.unshift(9, 8);
console.log(arr5) // [9, 8, 1, 2, 3, 4, 6] -> inserts values at the beginning of the list. It is not as efficient as push

arr5.shift()
console.log(arr5) // [8, 1, 2, 3, 4, 6] -> same as pop but at the beginning of the array

//-------------------------- CHECKING IF IT IS ARRAY --------------------------//
const arr6 = [1, 2]
console.log(Array.isArray(arr6)) // true -> if you use 'typeof' it returns Object.
console.log(arr6 instanceof Array) // true 

//-------------------------- DELETING & REPLACING --------------------------//
const arr7 = [1, 2, 3]
arr7.splice(1, 1) // (starting index, number of elements you want to delete)
console.log(arr7) // [1, 3]

const arr8 = [1, 2, 3, 4]
arr8.splice(1, 2, 'hello') // (starting index, number of elements you want to delete, value use to insert)
console.log(arr8) // [1, 'hello', 4]

const arr9 = [1, 2, 3, 4]
arr9.splice(1, 1, 'hello', 'world') // (starting index, number of elements you want to delete, value use to insert)
console.log(arr9) // [1, 'hello', 'world', 3, 4]

const arr10 = [1, 2, 3, 4]
const arr10new = arr10.slice(1, 3) // (staring index inclusive, ending index exclusive) and it returns a new array
console.log(arr10new) // [2, 3]
console.log(arr10) // [1, 2, 3, 4] -> original array remains unchanged

//-------------------------- CONCAT --------------------------//
const arr11 = [1, 2, 3]
const newArr11 = arr11.concat(['hello', 'world'])
console.log(newArr11) // [1, 2, 3, 'hello', 'world'] ->  combines array

//-------------------------- JOIN --------------------------//
const arr12 = [1, 2, 3]
const newArr12 = arr12.join(' | ')
console.log(newArr12) // 1 | 2 | 3 -> string

//-------------------------- ITERATING OVER A LOOP --------------------------//
const arr13 = [1, 2, 3, 4]

for (let i = 0; i < arr13.length; i++) {
    console.log(arr13[i]);
}

for (const i of arr13) { // In this type of loop, access to the index is not possible.
    console.log(i);
}

// forEach does not return a new array
arr13.forEach(i => console.log(i))
arr13.forEach((value, index, array) => console.log(value, index, array)) // You get access to the index and array as well
arr13.forEach(function(value, index) {
    console.log(value, index, this)
}, {'num': 10})

//-------------------------- MAP --------------------------//
const arr14 = [1, 2, 3, 4]
const mappedArra14 = arr14.map(value => value + 1)
console.log(mappedArra14) // [2, 3, 4, 5]

//-------------------------- FILTER --------------------------//
const arr15 = [1, 2, 3, 4]
const filteredArra15 = arr15.filter(value => value < 4)
console.log(filteredArra15) // [1, 2, 3]

//const targetTweetObj = tweetsData.filter(function(tweet) {
//    return tweet.uuid = tweetId
//})

//-------------------------- FIND & FINDINDEX --------------------------//
const arr16 = [1, 2, 3, 4]
// Works same way as array.filter() but it will only return the first element that meets the condition
const findArr16 = arr16.find(value => value > 2)
console.log(findArr16) // 3

// Same as array.find() but it will return the index of the first element that meets the condition rather than the value
const findArrIndex16 = arr16.findIndex(value => value > 2)
console.log(findArrIndex16) // 2 ->  2 is the index of 3

//-------------------------- EVERY & SOME --------------------------//
const arr17 = [1, 2, 3, 4, 1, 2, 3, 4]
const everyArr17 = arr17.every(value => value > 2)
console.log(everyArr17) // false -> not EVERY element is higher than 2 so we return false

const someArr17 = arr17.some(value => value > 2)
console.log(someArr17) // true -> because SOME elements passed the condition

//-------------------------- REDUCE & REDUCERIGHT --------------------------//
const arr18 = [1, 2, 3]

const reduceArr18 = arr18.reduce((accumulator, currValue) => {
    // accumulator takes value of 1 since it is the first value and therefore it skips the first iteration
    return accumulator + currValue
})
console.log(reduceArr18) // 6

const reduceInitialArr18 = arr18.reduce((accumulator, currValue) => {
    return accumulator + currValue
}, 3) // 3 is thi initial value for the accumulator
console.log(reduceInitialArr18) // 9

const rainJanuaryByWeek = [10, 20, 0, 122]
const totalRainfallJanuary = rainJanuaryByWeek.reduce(function(total, currentElement) {
    console.log('total: ' + total, 'currentElement: ' + currentElement)
    return total + currentElement
})
console.log(totalRainfallJanuary)

// Starts from right
const reduceRightArr18 = arr18.reduceRight((accumulator, currValue) => {
    return accumulator - currValue
})
console.log(reduceRightArr18) // 0 -> 3 - 2 - 1 = 0

//-------------------------- SORTING --------------------------//
const arr19 = [1, 9, 7];
console.log(arr19.sort()) // [1, 7, 9] -> INPLACE (affects original array)

const arr20 = [1, 9, 7];

function Ascending(firstNumber, secondNumber) {
    return firstNumber - secondNumber
}

function Descending(firstNumber, secondNumber) {
    return secondNumber - firstNumber
}

console.log(arr20.sort(Ascending)) // [1, 7, 9]
console.log(arr20.sort(Descending)) // [9, 7, 1]

