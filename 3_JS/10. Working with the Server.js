//-------------------------- CREATING PROMISES --------------------------//
const BASE_API = 'https://localhost:800/api'

fetch(BASE_API)
    .then(res => res.text())
    .then(data => console.log(data))
    .catch(error => console.error('Oh no! ' + error))
    .finally()

// Finally will run regardless of try and catch. 

console.log('After fetch') // logs out first

//-------------------------- URL QUERY PARAMETERS --------------------------//
const url = new URL(BASE_API)
url.searchParams.set('firstName', 'Conner')
url.searchParams.set('lastName', 'Ardman')
console.log(url)

//-------------------------- ASYNC / AWAIT --------------------------//
async function main() {
    try {
        const response = await fetch(url)
        console.log(response.status)
        console.log(response.ok)
        console.log(response.headers.get('content-type'))
        const text = await response.text()
        console.log(text)
    } catch (error) {
        console.error('Oh no: ' + error)
    }  
}

//-------------------------- JSON --------------------------//
const JSON_API = 'https://localhost:800/jsonApi'

async function main() {
    try {
        const response = await fetch(JSON_API)
        // to see what response type you are receiving 
        console.log(response.headers.get('content-type'))

        const obj = await response.json()
        // to make it text
        console.log(JSON.parse(obj))
        
    } catch (error) {
        console.error('Oh no: ' + error)
    }  
}

//-------------------------- POST --------------------------//
const POST_API = 'https://localhost:800/postApi'
const headers = new Headers()
headers.append('Content-Type', 'application/json; charset=utf-8')

async function main() {
    try {
        const response = await fetch(POST_API, {
            method: 'POST',
            body: JSON.stringify({name: 'Conner'}),
            headers: headers
        })
        const text = await response.text()
        
    } catch (error) {
        console.error('Oh no: ' + error)
    }  
}

//-------------------------- FORMS --------------------------//
const form = document.querySelector('form')
form.addEventListener('submit', onSubmit)

async function onSubmit(event) {
    // preventDefault avoids information in the form appear in the URL
    event.preventDefault()

    const options = {
        method: 'POST',
        // It has all the key value pairs from the form
        body: new FormData(form)
    }

    try {
        const response = await fetch(POST_API, options)
        const text = await response.text()
    } catch (error) {
        console.error('Oh no: ' + error)
    }
}

//-------------------------- SLOW --------------------------//
const SLOW_API = 'https://localhost:800/slowApi'

async function main() {
    // If API doesn't respond within 2 seconds then we abort
    const abortController = new AbortController()
    setTimeout(() => abortController.abort(), 2000)
    
    try {
        const response = await fetch(SLOW_API, {
            signal: abortController.signal
        })
        const text = await response.text()
        console.log(text)
    } catch (error) {
        console.error('Oh no: ' + error)
    }  
}

