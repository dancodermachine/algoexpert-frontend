//-------------------------- DEDICATED WORKERS --------------------------//
const slowButton = document.getElementById('slow')
const sayHelloButton = document.getElementById('say-hello')

slowButton.addEventListener('click', slowOperation)
sayHelloButton.addEventListener('click', sayHello)

function slowOperation() {
    const worker = new Worker('16. Web Workers - Worker.js')
    worker.postMessage(10)

    worker.addEventListener('message', event => {
        console.log(event.data)
    })
    // terminates the worker
    worker.terminate()
}

function sayHello() {
    console.log('hello world')
}







