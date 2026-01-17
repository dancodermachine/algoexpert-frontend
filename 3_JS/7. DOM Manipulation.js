//-------------------------- SELECTING ELEMENTS --------------------------//
const secondLi = document.getElementById('second-li')

// If it selects multiple elements it will select just one
const firstLi = document.querySelector('li') 

// Selects every element matching 'li' element. Returns NodeList
const listItems = document.querySelectorAll('li') 
console.log(listItems.length) // 3
// forEach is the only thing from arrays you can you in a NodeList
listItems.forEach(li => console.log(li))

// Returns all elements that have that class. Returns a HTMLCollection 
const classItems = document.getElementsByClassName('list-item')

// Returns all elements that have that tag. Returns a HTMLCollection 
const tagItems = document.getElementsByTagName('li')

// To convert a HTMLCollection to and Array in order to iterate. However you would rather use something that returns a NodeList instead of a HTMLCollection in order to avoid this step.
Array.from(tagItems).forEach(li => console.log(li))


// document.querySelector('input[type="radio"]:checked')

//-------------------------- EDITING DOM NODES --------------------------//
const allListItems = document.querySelectorAll('li')
allListItems[0].style.backgroundColor = 'red' 
allListItems[0].textContent = 'Changed!'
allListItems[0].value = 5
allListItems[0].setAttribute('class', 'blue big') 
allListItems[0].classList.remove('blue')
allListItems[0].classList.add('blue')
// if class is already there it will remove it, else it will add it
allListItems[0].classList.toggle('blue')
// classList is prefer 
allListItems[0].className = 'blue big'

//-------------------------- CREATING & REMOVING DOM NODES --------------------------//
const p = document.createElement('p')
p.textContent = 'Hello World'

document.getElementById('scrollable').appendChild(p)
document.getElementById('scrollable').prepend(p)

// Try not to use it
document.body.innerHTML += '<p>HTML Test String</p>'

// Best way to iterate and insert items to HTML
const parent = document.querySelector('ol')
const fragment = document.createDocumentFragment()

for (let i=0; i<3; i++) {
    const li = document.createElement('li')
    li.textContent = `List item with i=${i}`
    fragment.append(li)
}
parent.append(fragment)

// Remove
const items = document.querySelectorAll('li')
items[0].remove()

//-------------------------- DOM SIZES --------------------------//
const everyItem = document.querySelectorAll('li')
const scrollable = document.getElementById('scrollable')

console.log(window.innerWidth) // 1091
console.log(window.innerHeight) // 821

// Will get you all the CSS from that element. Converts everything to pixels.
console.log(window.getComputedStyle(everyItem[0]))

// Height of visible content and padding
console.log(scrollable.clientHeight) // 90

// Height of visible content, padding, borders, and scrollbars
console.log(scrollable.offsetHeight) // 100

// Height of all content and padding, including content scrolled out of view
console.log(scrollable.scrollHeight) // 349

// Distance between top of the page and scrollable container
console.log(scrollable.offsetTop) // 126

//-------------------------- SCROLLING --------------------------//
// Scrolls until it finds the 5th paragraph
scrollable.querySelectorAll('p')[5].scrollIntoView()

// Scrolls until it finds the 5th paragraph
scrollable.scrollTo({
    top: scrollable.querySelectorAll('p')[2].offsetTop,
    behavior: 'smooth'
})