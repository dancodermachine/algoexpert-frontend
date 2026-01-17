 for (let i=0; i<300_000; i++) {
    
}
console.log('slow operation finished')

self.addEventListener('message', (event) => {
    console.log(event.data) // 10
})

addEventListener('message', (event) => {
    console.log(event.data) // 10
})

onmessage = function(event) {
    console.log(event.data) // 10
}

// You can't do any DOM manipulation in a worker file


addEventListener('message', (event) => {
    // Sending information from the worker to the main js file
    postMessage(event.data * 10)
})