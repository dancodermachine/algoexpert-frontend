//-------------------------- ADD EVENT LISTENER --------------------------//
const button = document.querySelector('button')

button.addEventListener('click', onClick)
document.body.addEventListener('click', onClick)

function onClick(event) {
    console.log(event)
    console.log(event.type)
    console.log(event.target)
    // console.log(event.target.id)  
    console.log(this) // Similar to target but not matter what it will log out the element that is before the .addEvenetListener which in this case is the button. This by default happens during the bubbling Bubbling phase if event propagation happends.
    console.log('You clicked the button.')

    
       
}

//-------------------------- COMMON EVENTS --------------------------//
'dbclick'
'mousedown'
'mouseup'
'keydown' // console.log(event.code) shows you which keyword you press
'keyup' 
'scroll' // console.log(event.target.scrollTop)
'mouseenter' // console.log(event.pageX, event.pageY)
'dragstart' // <button draggable="true">Click Me</button>
'dragover'

