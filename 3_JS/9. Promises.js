//-------------------------- CREATING PROMISES --------------------------//
const promise_resolve = new Promise((resolve, reject) => {
    resolve(2);
})
const promise_pending = new Promise((resolve, reject) => {

})
const promise_reject = new Promise((resolve, reject) => {
    reject(2);
})

console.log(promise_resolve) // Promise {<fulfilled>: 2}
console.log(promise_pending) // Promise {<pending>}
console.log(promise_reject) // Promise {<rejected>: 2}

//-------------------------- THEN CATCH FINALLY --------------------------//
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000)
});

promise.then(value => console.log(value), error => console.log('Oh no ' + error)) // 2

promise
    .then(value => console.log(value)) // 2
    .catch(error => console.log('Oh no ' + error))

//-------------------------- CHAIN --------------------------//
const promiseChaining = Promise.resolve(3)
console.log(promiseChaining)

promiseChaining
    .then(value => value * 2)
    .then(value => value + 1)
    .then(console.log) // 7
    .catch(error => console.log(`Oh no ${error}`))
    // finally doesn't get the 'value' or 'error' as parameters. It runs whether the promise was fulfilled or rejected 
    .finally(() => console.log('done')) // done

//-------------------------- ALL RACE ANY --------------------------//
Promise.all([
    Promise.resolve(3),
    Promise.resolve(2),
    new Promise((res, rej) => setTimeout(() => res(5), 1000))
]).then(console.log) // [3, 2, 5] -> it waits for all promises in order to log out

Promise.race([
    new Promise((res, rej) => setTimeout(() => res(1), 2000)),
    new Promise((res, rej) => setTimeout(() => rej(2), 1000)),
    new Promise((res, rej) => setTimeout(() => res(3), 4000))
]).then(console.log) // Uncaught (in promise) 2 -> returns whichever promise resolves first even if it is rejected

Promise.any([
    new Promise((res, rej) => setTimeout(() => res(1), 2000)),
    new Promise((res, rej) => setTimeout(() => rej(2), 1000)),
    new Promise((res, rej) => setTimeout(() => res(3), 4000))
]).then(console.log) // 1 -> returns whichever promise fulfills first 

//-------------------------- ASYNC AWAIT --------------------------//
async function tester1() {
    try {
        const value = await new Promise((res, rej) => setTimeout(() => res(3), 1000))
        console.log(value)
    } catch(error) {
        console.log('Oh no ' + error)
    } 
}
tester1()

// Above is same as below

async function tester2() {
    return await new Promise((res, rej) => setTimeout(() => res(3), 1000))
}
tester2().then(console.log).catch(error => console.log('Oh no ' + error))


