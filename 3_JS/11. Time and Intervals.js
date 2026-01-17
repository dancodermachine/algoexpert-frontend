const start = document.getElementById('start')
const stop = document.getElementById('stop')
const count = document.getElementById('count')

start.addEventListener('click', startTime)
stop.addEventListener('click', stopTime)

//-------------------------- SET INTERVAL --------------------------//

let timerID
function startTime() {
    timerID = setInterval(() => {
                count.textContent++
              }, 500)

}

function stopTime() {
    clearInterval((timerID) )    
}

//-------------------------- TIMEOUTS --------------------------//
setTimeout(() => {
    console.log('Timeout')
}, 1000)

setTimeout(() => {
    console.log(performance.now()) // 2094.800000011921 -> it took 1094milliseconds to run this code
}, 1000)

setTimeout(() => {
    console.log(Date.now()) // 1751701062932 -> number of milliseconds that has passed since January 1st of 1970
}, 1000)    