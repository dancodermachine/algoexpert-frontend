//-------------------------- COOKIES --------------------------//
// It doesn't delete previous cookies.
document.cookie = 'user=Conner'
console.log(document.cookie)

document.cookie = `user=Conner; expires=${new Date().toUTCString()}`
console.log(document.cookie)

document.cookie = 'user=Robert'
// 'max-age' is the number of seconds that we want the cookie to exist for
document.cookie = `user=Robert; max-age=0`
console.log(document.cookie)

// 'secure' means that we only send though https and not http
// 'samesite=strict' says we don't want this cookie to ever be shared cross origin
document.cookie = `user=Jack; secure; samesite=strict`


document.cookie = 'course=AlgoExpert'
const course = document
                .cookie
                .split('; ')
                .find(cookie => cookie.startsWith('course='))
                .split('=')[1]
console.log(course)

// Cookies required lots of string manipulation. Therefore most of the time we recommend other alternatives. There are libraries that help with cookies manipulation.

//-------------------------- WEB STORAGE --------------------------//
// local storage does not expire while session storage expires at the end of the session
localStorage.setItem('user', 'Conner')
localStorage.setItem('course', 'FrontendExpert')
console.log(localStorage.getItem('user')) // Conner
localStorage.removeItem('user')
localStorage.clear() // -> removes everything from local storage
console.log(localStorage.getItem('user'))

// session storage works the same but you use 'sessionStorage'
// local storage & session storage is preferable than cookies and indexedDB


//-------------------------- INDEXEDDB --------------------------//
const request = indexedDB.open('myDatabase', 1)

request.addEventListener('upgradeneeded', event => {
    const database = event.target.result
    const store = database.createObjectStore('users', {keyPath: 'id'})
    store.createIndex('name', 'name')

    store.add({
        id: 0,
        name: 'Conner',
        course: 'FrontendExpert'
    })
    store.add({
        id: 1,
        name: 'Clement',
        course: 'AlgoExpert'
    })
})

// connect to existant database
request.addEventListener('success', event => {
    const databaseExistent = event.target.result
    databaseExistent
    .transaction(['users'], 'readwrite')
    .objectStore('users')
    .add({
        id: 2,
        name: 'Ryan',
        course: 'MLExpert'
    })
    // .delete(1) // -> deletes id of 1
    // .get(0) // -> gets id of 0. It returns a promise

})

request.addEventListener('success', event => {
    const databaseExistent = event.target.result
    const request = databaseExistent
    .transaction(['users'], 'readwrite')
    .objectStore('users')
    .index('name')
    .get('Conner')

    request.addEventListener('success', event => {
        console.log(event.target.result.course) // FrontendExpert
    })
})
