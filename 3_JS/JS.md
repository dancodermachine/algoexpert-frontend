# JavaScript
## JS Basics
**JS**: The primary programming language of the web, primarely used for adding functionality to websites. JS is a general purpose multi-paradigm programming language with dynamic typing.

**Paradigm**: JS is multi-paradigm language, because it allows for programming in a veriety of paradigms. Some of the major paradigms of JS include:
* **Event-driven**: Functions can be made to respond to events, such as when a user clicks on an element or scrolls down the page.
* **Functional**: Functions can be written as "pure functions", meaning functions that always have the same output for a given of arguments and never produce side effects. Additionally, JS supports first-class functions and higher-order functions. This means that functions can be treated as normal values, passed as arguments to other functions and returned from functions.
* **Object-oriented**: Objects can be created as custom data stores and they can be made to inherit from each other.
* **Imperative**: Programs can be written by explicitly describing the control flow, such as with loops and conditionals.
* **Declarative**: Programs can be written by describing the desired output with implicit control flow. Oftentimes this is associated with functional programming (e.g., using `forEach` function to loop over an array instead of a loop).

**Primitive**:
* **Number**: Numeric values, including integers and decimal values.
* **BigInt**: Integers too large to store in a number.
* **Boolean**: A binary value of `true` or `false`.
* **String**: A sequence of characters.
* **Symbol**: A dynamically generated unique value.
* **Null**: A nonexistent value.
* **Undefined**: A value that has not been set.

```js
let // allows you reasing value
const // doesn't allow you to reasign

console.log() // allows you to output value in console
```
**Number Functions**
```js

```

## Variables & Scoping
**let**: a variable for declaring a block-scoped variable that cannot be accessed before initialization.

**const**: a keyword for declaring a constant value. Constants have the same behaviour as variables declared with `let`, except they cannot be reassigned.

**var**: a keyword for declaring a function-scoped variable that is automatically initialized to `undefined` when it is hoisted.

**Block scope**<br>
The behaviour of a variable that is only accessible inside of the block it was defined. Most of the time, the block will simply be the nearest pair of curly braces to the declaration.

**Function scope**<br>
The behaviour of a variable that is accessible anywhere inside the function it was defined.

```js
function test() {
    if (true) {
        var varNum = 0;
        let letNum = 0;
    }
    console.log('varNum', varNum); // 0 -> var is declared to function level
    console.log('letNum', letNum); // throws error -> let is only declared to its neares block wich is the if statement
}
test()
```

**Hoisting**<br>
The process by which the JS engine moves variable declarations to their scope, allocating memory for them before reaching the line of code where they are declared. For variables declared with `var`, they are initialized to `undefined` until reaching the line of code that initializes the variable. For variables declared with `let` or `const`, the variable is not initialized and thus cannot be accessed before the line of code that initializes it. For example:
```js
console.log(varNum); // undefined
console.log(letNum); // reference error

var varNum = 5;
let letNume = 5;

console.log(varNum); // 5
console.log(letNum); // 5
```
## Arrays
Arrays are a data structure for storing lists of information.<br>
JS arrays are mutable and can contain data of different types. While these are just standard objects, they have a special syntax for easily creating and updating them.

## Objects
**Objects**<br>
The base non-primitive data structure of JavaScript used to store key-value pairs. Object keys are usually strings, but they can also be symbols. Values on the other hand can be any type. Objects are usually declared with the object literal syntax such as:
```js
const website = {
    name: 'AlgoExpert',
    domain: 'algoexpert.io',
}
```
**Symbol**<br>
A primitive value in JS used for unique values.<br>
A symbol is created using the `Symbol(description)` function, which returns a unique symbol. Even if two symbols have the same description, they will still be considered unique.<br>
While symbols created using the `Symbol(description)` function are completely unique, symbols can also be created using `Symbol.for(key)`. This works the same way, except two calls for this function with the same key will return the same symbol, based on a global symbol registry.    

## Equality & Type Coercion
**Loose Equality**
The most basic equality operator is JS using `==`. Loose equality compares values regardless of types following these steps:
1. If both values are either `null` or `undefined`, return true.
2. Convert all `booleans` to `numbers`. `True` converts to `1` and `false` converts to `0`.
3. If comparing a `number` to a `string`, convert the `string` to a `number`.
4. If comparing an `object` to a `string`, convert the `object` using the `toString()` or `valueOf()` methods.
5. If the types are the same, follow the same rules as strict equality.
In general, strict equality should be preferred due to being easier to predict. However, loose equality can be useful for checking against `null` and `undefined` at once with `value == null`

**Strict Equality**
A JS equality operator using `===`. Strict equality compares both values and types following these steps:
1. If either value is `NaN`, return `false`.
2. If the values have different types, return `false`.
3. If both values are `null` or both values are `undefined`, return `true`.
4. If both values are `objects`, return `true` if they are the same object. `false` otherwise.
5. If both values are of the same primitive type, return true if the values are the same. `false` otherwise.

## Syntatic Sugar & Modern JS
**Arrow Function**<br>
A more concise function syntax, particularly useful for replacing short anonymous functions. The basic syntax for an arrow function is:
```js
(param1, param2) => {
    doSomething(param1, param2)
    return 'hello world'
}
```
However, if an arrow function only requires one line, then the curly braces and return keyword can be removed.<br>
Additionally, when these are used inline such as for call to the array map function, the semicolon must be removed.<br>
Finally, if there is only one parameter, the parentheses around the parameter can also be removed. For example, this code will create an array with the values doubled:
```js
[1, 2, 3, 4].map(num => num * 2)
```
These are a few constraints to arrow functions which will be explored throughout the crash course. The most important of these is that arrow functions do not have their own `this` binding. Additionally, arrow functions cannot be used as constructors or generators.  

**Destructuring Assignment**<br>
A JS syntax for saving values from an array or object in variables. For example:
```js
const [first, second] = [1, 2, 3]
console.log(first) // 1
console.log(second) // 2

const {name} = {name: 'Conner'}
console.log(name) // Conner
```
Destructuring can also be used in a function parameter, for example:
```js
function printName({name}) {
    console.log(name)
}
```
**Rest Operator**<br>
A JS operator using `...` for condensing multiple elements into a single array. This uses the same syntax as the spread operator, but functionally is essentially the opposite.<br>
Rest syntax can be used in both arrays and objects to get all of the values not being destructured. For example:
```js
const arr = [1, 2, 3, 4]
const [first, second, ...rest] = arr // -> rest is [3, 4]

const obj = {key1: 1, key2: 2, key3: 3, key4: 4}
const {key1, key2, ...rest} = obj // -> rest is {key3: 3, key4: 4}
``` 
```js
const favouriteFilm = {
    title: "Top Gun",
    year: "1986",
    genre: "action",
    star: "Tom Cruise",
    director: "Tony Scott"
}
const {title, year, genre, star, director} = favouriteFilm
``` 
Moreover, rest syntax can be used for function parameters to accept an infinite number of arguments, which are accessible as an array. For example:
```js
function myFunc(...myArguments){
    console.log(myArguments)
}

myFunc(1, 2, 3, 4) // [1, 2, 3, 4]
```
**Spread Operator**<br>
A JS operator using `...` for expanding iterables into individual elements. For example `myFunction(...myArray)` would pass each value in `myArray` as individual arguments to `myFunction`.<br>
The spread syntax can also be used to combine two arrays, for example `[...arr1, ...arr2]` would make a single array with all of the values of both arrays. Similarly, objects can be spread as well. For example, `{key: 'value', ...otherObj}` would add all of the fields from other object into this object. Moreover, `{...obj}` can be used as a shallow clone of an object, since it creates a new object with the same fields. 

**Template Literal**<br>
Strings created using backticks ` `` ` that allow for inlining expressions rather than needing concatenation. Inlined expressions use the syntax `${expression}`. For example, `Hello ${name}` would have the same output as `'Hello' + name`.<br>
Template literals also allow for tagging to write a function that defines custom behaviour for the template literals. Tagging can be read about further in the MDN documentation, but it doesn't tend to be used too often.

**Null Coalescing**<br>
Also referred to as *nullish coalescing*, an operator using `??` for providing a default value if a value is `null`. If the value on the left side of the operator is not `null` or `underfined`, that value is used. Otherwise, the value on the right side of the operator is used. For example:
```js
const num1 = null ?? 1234 // 1234
const num2 = undefined ?? 1234 // 1234
const num3 = 5678 ?? 1234 // 5678
const num4 = '' ?? 1234 // ''
```

**Optional Chaining**<br>
A JS operator using `?.` for reading object properties without throwing an error if the object is `null`. For example, `person?.company?.website` will act same as `person.company.website`, however if any values in the chain are `null` or `undefined`, it will return `undefined` rather than throwing an error.

**Short Circuit Evaluation**<br>
A method of utilising the evaluation order of JS to conditionally run code. This usually uses the `&&` operator, because for it to return `true`, both the left and right expressions must be `true`. Since the browser runs the code from left to right, if it encounters `false` on the left side, it does not even run the code on the right side. Thus, this can be used to conditionally run code. For example:
```js
true && myFunc() // -> calls myFunc
false && myFunc() // -> doesn't call myFunc
```
Less commonly, short circuit evaluation can also be used with the `||` operator. Since this operator only needs one expression to be true, if the left side is true then the right side will not be evaluated. This is essentially the opposite of the behaviour with `&&`. For example:
```js
true || myFunc() // doesn't call myFunc()
false || myFunc() // calls myFunc()
``` 

**Falsy Values**<br>
* `false`
* `0`
* `""`
* `null` -> how you as a developer signalise emptiness
* `undefined` -> how JS signilises emptiness 
* `NaN`

## Connecting JS to HTML
**`<script>`**<br>
The HTML tag for adding JS to the document. Usually the `<script>` appears in the `<head>` with no children. Instead of children, it usually has the `src` attribute set to the path of a JS file.<br>
By defualt, scripts block the browser from continuing to parse and render the rest of the DOM until the script has finished downloading and executing. However, there are two boolean attributes that can change this behaviour:
* `defer`: Fetch the script asynchronously without blocking the page. Only execute the script after the DOM has finished being parsed.
```js
<script src="Connecting JS To HTML.js" defer></script>
```
* `async` Fetch the script asynchronously without blocking the page. Whenever the script is ready, stop parsing the DOM and execute the script. This is usually only for scripts that do not need access to the DOM, because otherwise the behaviour will be inconsistent based on how quickly the script downloaded.
```js
<script src="Connecting JS To HTML.js" async></script>
```
## DOM Manipulation
Using JS to change the content, structure or styles of the page. There are a lot of functions and properties related to DOM manipulation, but there are some common ones:

**Getting Elements**:
* `document.getElementById(id)`: Gets single element based on its `id` attribute.
* `document.querySelector(cssSelector)`: Gets a single element based on a CSS selector. If multiple elements match the selector, returns the first one.
* `document.querySelectorAll(cssSelector)`: Gets all elements matching a CSS selector as a `NodeList`.
*`document.getElementsByTagName(tagName)`: Gets all elements with a specific HTML tag as a `HTMLCollection`.
* `document.getElementByClassName(className)`: Gets all elements with a specific class as a `HTMLCollection`.

**Setting Attrbutes**:
* `element.style.property`: Sets a CSS property using inline styles, altough CSS classes should usually be preferred. The style object will only contain inline styles, not those set with CSS.
* `element.setAttribute('attribute', 'value)`: Sets an HTML attribute to a specific value.
* `element.textContent`: The text content of an element, including that of any children. Note: this is slightly different from `element.innerText`, which only gets text that is actually rendered and `element.innerHTML` which gets the entire HTML code as a string.
* `element.attribute`: An alternative to the `setAttribute` function, attributes can be directly edited via their property name. For example, `element.value` would get the value attribute of the element.
* `element.classList`: An object for updating CSS classes. Specifically, this contains 3 primary functions: `add(className)`, `remove(className)`, `toggle(className)`

**Adding & Removing Elements**:
* `document.createElement(tagName)`: Creates a new HTML element.
* `document.createTextNode(text)`: Creates a text node as an alternative to setting `textContent`.
* `document.createDocumentFragment()`: Creates a document fragment, which is useful for appending multiple elements at once after a loop.
* `element.appendChild(element)`: Appends an element to the end of the contents of another element.
* `element.append(node1, node2, ...)`: Appends 1 or more nodes (elements or text) to the endof the contents of another element.
* `element.prepend(node1, node2, ...)`: Prepends 1 or more nodes (elements or text) to the beginning of the contents of another element.
* `element.remove()`: Removes the element from the DOM.

**Sizes & Scrolling**:
* `window.innerWidth`: The width of the browser window.
* `window.innerHeight`: The height of the browser window.
* `window.getComputedStyle(element)`: Get styles as they are currently rendered on the page, converted to pixels.
* `element.clientHeight`: The heigth of visible content and padding.
* `element.offsetHeight`: The height of visible content, padding, borders, and scrollbars.
* `element.scrollHeight`: The heigth of all content and padding, including content scrolled out of view.
* `element.offsetTop`: The distance from the outer top border of the element to the inner top border of the nearest positioned parent.
* `element.scrollIntoView()`: Scrolls the container so the element is in view.
* `element.scrollTo(optionsObj)`: Scrolls the element to a specified top value in the options object. Additionally, `behaviour: smooth` will create a smooth transition.

## Event-Driven Programming
**Event-Driven Programming**<br>
A programming paradigm where code runs as a response to events, usually initiated by the user.<br>
To create an event listener, use `element.addEventListener(eventName, callback, useCapture)`. If the third argument is `true`, the callback will fire during the capturing phase rather than the default bubbling phase.<br>
Additionally, `addEventListener` can be called with an options object as the third parameter instead of the `useCapture` boolean. This object can contain the following possible values:
* `capture`: The same as the boolean argument option; `true` for capturing, `false` for bubbling.
* `once`: If `true`, automatically removes the event listener after the event fires once.
* `passive`: If `true`, indicates to the browser that `event.preventDefault()` will not be called. This is useful for the browser to optimize performance, particularly with mobile scrolling event such as `touchstart` and `touchmove` to indicate to the browser that scrolling will not be cancelled.
* `signal`: An `AbortSignal`, usually coming from an `AbortController`. If the signal's `abort()` method is called, the event listener will be removed.

To remove an event listener, call `element.removeEventListener(eventName, callback, useCapture)` or `element.removeEventListener(eventName, callback, optionsObj)` with the exact same parameters as were used to create the event listener. 

**Event Propagation**<br>
The process by which an event travels through the DOM to call event listeners on nested elements. Event propagation consists 3 phases:
1. Capturing: The event travels down from the root of the document to the event target.
2. Target: The event fires on the event target.
3. Bubbling: The event travels up from the event target to the root of the document.

At any point in the propagation process, an event listener can call `event.stopPropagation()`, which will stop the propagation process.

**Event Delegation**<br>
The process of using a single event listener on a parent element to manually delegate events to children, rather than using event listeners on each child.<br>
Event delegation takes advantage of event propagation. For example, after clicking on a button, that event will bubble up to the parent container.<br>
In the event a container has many children that all have similar event listeners, event delegation can make substantial performance improvements by lowering the total number of active event listeners. The `event.target` property can then be used to determine which child was the source of the event.

## Synchronous vs. Asynchronous JavaScript
**Synchronous JavaScript**  
* Each command must complete before the next one can run.  
* Commands are executed one after another, in order.  
* No two commands run simultaneously. Examples include variable declarations, `console.log()`, and `for` loops.

**Asynchronous JavaScript**  
* Allows code to run "out of order".  
* Long-running operations (like network requests or timers) can begin and finish later, without blocking the rest of the code from executing.  
* Enables better performance and user experience.
* JavaScript introduces **Promises** to help manage asynchronous operations in a clean and predictable way.


## Promises
**Promise**<br>
An object used for asynchronous operations. These objects have a state of either `pending`, `fulfilled` or `rejected`.<br>
* Pending: The promise has yet to be completed.
* Fulfilled: The promise was completed as promised.
* Rejected: The promise was not completed as promised.

A Promise is created with the `Promise()` constructor, which takes in a callback function, oftentimes called the executor. This callback function has two callback functios as parameters:
* `resolve(value)`: Fullfills the Promise and sets the value.
* `reject(error)`: Rejects the Promise and sets an error message.

The promise object has three primary functions:
* `then(fulfilledFn rejectedFn)`: Calls `fulfilledFn` if the Promise is fulfilled and `rejectedFn` if it is rejected. Returns a new fulfilled Promise with the return value of the callback function.
* `catch(rejectedFn)`: Calls `rejectedFn` if the Promise is rejected. Returns a new fulfilled Promise with the return value of the callback function.
* `finally(callback)`: Calls the callback function whenever the Promise is settled (fullfilled or rejected).

Since these functions all return a new Promise, they can be chained together, such as `promise.then(doX).then(doY).catch(handleError).finally(doZ)`

**async function**<br>
A function declared using the `async` keyword, causing the function to implicitly return a Promise and allowing for usage of the await keyword.<br>
Asynchronous functions are primarily an alternative syntax to chaining calls to `Promise.then`

**await**<br>
A keyword indicating that JS should wait for a Promise to settle before continuing execution of the code. Tradionally this is only available in async functions, but it can also be used at the top level of modules.

## Working with the Server
**API**<br>
Application Programme Interface. An API is any tool that helps connect your program with someone else's program.

**Client**<br>
Any device that connects to the internet to get data from somewhere (makes a "request"). Pretty much anything that sends signals or requests out to a server and gets a response back (e.g., smartwatch, phone, tablet, etc.).

**Server**<br>
Basically, just a computer. Accepts requests from clients asking for something, that responds to the client with that thing (e.g., an HTML page, an image or file, or just a plain data).

**Request**<br>
When a device asks for a "resource" (e.g., data, image, html, page, authentication token, etc). Requires connection to the internet somehow.

**Response**<br>
The reply to the request. Could contain the resource (HTML, JSON, data, etc.) asked for by the client. Could contain a response saying the client isn't authorised to receive the resource.

**JSON**<br>
Keys have to be double quoted.
```js
{
    "name": "Joe Schmoe",
    "single": true,
    "gender": "male",
    "hobbies": ["skiing", "surfing", "piccolo"],
}
```

**HTTP**<br>
Hypertext Transfer Protocol. A protocol is an agreed-upon, standard way of doing something. HTTP is a protocol for determining how Hypertext (text) should be transferred over the internet. Components:
1. Path (URL): Address where your desired resource lives.  
   a) BaseURL: Doesn't change. `https://apis.scrimba.com/jsonplaceholder`  
   b) Endpoint: Specific resource. `/posts`  
   c) When you put both together you get the API.
2. Method – your intention with the request  
   a) `GET` – getting data  
   b) `POST` – adding new data  
   c) `PUT` – updating existing data  
   d) `DELETE` – removing data
3. Body (optional). Only works with `POST` or `PUT`.
4. Headers – metainformation about the request (e.g., what browser or operating system, or API key)

**REST**<br>
REpresenational State Transfer. It is a design pattern to provide a standard way for clients and servers to communicate. Principles of REST:
* Client & Server separation.
* Statelessness: It means when the user access any web resource, the server does not keep track to the user's identity or actions performed on the page.
* Accessing 'Resources'.

Example 1:
- BaseURL: `https://mikesbikes.com/api`
- `/bikes`
  - `GET`
  - `POST`
- `/bikes/:id` (e.g., `/bikes/123`)
  - `GET`
  - `PUT`
  - `DELETE`
- `/bikes/:id/reviews` (e.g., `/bikes/123/reviews`)

Example 2 (querying):
- BaseURL: `https://mikesbikes.com/api`
- `/bikes`
- `/bikes?type=mountain`
    ```json
    { 
        type: "mountain" 
    }
  ```
- `/bikes?type=road&brand=trek`   
  ```json
    {
      type: "road",
      brand: "trek"
    }
  ```

- `/bikes?type=hybrid&brand=trek&color=gray`  
  ```json
    {
      type: "hybrid",
      brand: "trek",
      color: "gray"
    }
   ```

**fetch**<br>
A JS function for making network requests.<br>
`fetch(url)` returns a pending Promise. Once the network request completes, the promise will either resolve or reject. Any response other than a network error will result in a resolved Promise. The `url` parameter can be either a string or a `URL` object.<br>
This function can also take an options object as a second parameter. These are some of the more common options to use:
* `method`: The request method as a string, such as `GET` or `POST`.
* `body`: The body of the request, oftentimes used to pass `FormData`.
* `headers`: Headers to be added to the network request, oftentimes by creating a `Headers` object, although a standard object can be used as well.
* `signal`: An `AbortSignal`, usually coming from an `AbortController`. If the signal's `abort()` method is called, the request will be aborted.

When the request comes back from the server, the Promise returned by fetch will resolve to a `Response` object. This object has a variety of properties and methods for interacting with the network response. These are some of the most usefule ones:
* `response.text()`: Returns a Promise with a text representation of the response body.
* `response.json()`: Returns a Promise with an object representation of the response body.
* `response.status`: A number representation of the response status code. A successful request in the 200-299 range, most commonly 200. 
* `response.ok`: A boolean representation of the response status code. A successful request in the 200-299 range will be `true`, everything else evaluates to `false`. 
* `response.headers`: A `Headers` object containing the headers included with the response.

Example 1:
```js
fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => {
    if (!res.ok) {
      // If the response is not OK (e.g. 404, 500), throw an error.
      // This will skip the remaining .then() blocks and jump to .catch().
      throw Error("Something went wrong");
    }
    console.log(res.status); // Logs the HTTP status (e.g. 200)
    return res.json();       // Proceed to parse JSON if OK
  })
  .then(data => {
    console.log(data); // Logs the response JSON (e.g. dog image URL)
  })
  .catch(error => {
    console.error("Fetch failed:", error.message); // Handles fetch errors or thrown errors
  });
```

**data attributes**<br>
Data attributes allow you to store extra information directly on HTML elements. They are useful for embedding custom data that can later be accessed using JavaScript.

HTML Rules:
* Use lower case letters only.
* Use dashes `-` to separate words in HTML: `data-unique-name="your data"`.    
```html
<div data-user-id="12345" data-user-role="admin">Hello!</div>
```
JS Rule:
* Use *camelCase* (`userId`, `userRole`) in JavaScript to access dashed attributes.
```js
const element = document.querySelector('div');
console.log(element.dataset.userId);   // "12345"
console.log(element.dataset.userRole); // "admin"
```
Example:
```html
<form id="superpower-form">
  <label for="superpowers">Choose Your Superpower:</label>
  <select id="superpowers">
    <option value="flight" data-power-category="physical">Flight</option>
    <option value="invisibility" data-power-category="physical">Invisibility</option>
    <option value="superStrength" data-power-category="physical" selected>Super Strength</option>
    <option value="telepathy" data-power-category="psychological">Telepathy</option>
    <option value="timeTravel" data-power-category="psychological">Time Travel</option>
    <option value="wisdom" data-power-category="psychological">Wisdom</option>
  </select>

  <button type="button" id="submit-btn" data-action-type="submitSelection">Show Selected</button>
</form>
```
```js
document.addEventListener('click', function (event) {
  // Check if a button with data-action-type was clicked
  if (event.target.dataset.actionType === 'submitSelection') {
    const select = document.getElementById('superpowers');
    const selectedOption = select.options[select.selectedIndex];

    const power = selectedOption.value;
    const category = selectedOption.dataset.powerCategory;

    console.log(`Selected Power: ${power}`);
    console.log(`Category: ${category}`);
    console.log(`Button Action: ${event.target.dataset.actionType}`);
  }
});
```
**Other Resources**<br>
* Free APIs: https://github.com/public-apis/public-apis
* Chrome Extension: https://developer.chrome.com/docs/extensions
* Zapier API tutorial: https://zapier.com/resources/guides/apis
* API tutorial: https://www.restapitutorial.com/
* API tutorial: https://restfulapi.net/
* JSON formater: https://jsonlint.com/
* JSON formater Chrome Extension: https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en


## Timers & Intervals
**setInterval**<br>
A JS function for calling a function repeatedly over an interval.<br>
For example, `setInterval(myFunction, 1000)` would call `myFunc` ever second(however this could take longer if other code needs to finish running).<br>
This function returns an ID, and the interval can be cancelled by calling `clearInterval(intervalID)`

**setTimeout**<br>
A JS function for delaying execution of a callback function.<br>
For example, `setTimeout(myFunction, 1000)` would call `myFunc` after 1 second (however this could take longer if other code needs to finish running).<br>
This function returns an ID, and the timeout can be cancelled by calling `clearTimeout(timeoutID)`

**requestAnimationFrame**<br>
A JS function for calling a callback function before the next browser repaint. These are oftentimes used for animations to update the animation every frame.<br>
For example, `requestAnimationFrame(myFunction)` would call `myFunc` before the next repaint.<br>
This function returns an ID, and the callback can be cancelled by calling `cancelAnimationFrame(animationFrameID)`

## Closures
**Closure**<br>
A function along with a saved reference to the lexical environment it was defined in. Simply put, this means functions have access to all of the variables in scope at the same time of definition, even if the parent function has returned.

**Lexical Environment**<br>
An internal data structure used for keeping track of identifiers (variable and function names) and their values. A lexical environment stores for all of the locally available identifiers as well as a reference to the parent environment.

**Lexical Scoping**<br>
The scoping system in JS that ensures all code blocks have access to all identifiers in their parent environment. When an identifier is not defined locally, JS will look to the parent environment for it. If it is still not found there, it will look in grandparent's environment and so on before looking in the global environment.

## This
**this**<br>
A JS keyword for referencing the context in which the current code is running.<br>
The value of `this` is determined at runtime. In the browser, it will follow these general rules:
1. At the top level of a file (the global context), `this` refers to the global object, which is the `window`.
2. In a standard function without strict mode, `this` refers to the global object, which is the `windoww`.
3. In a standard function in strict mode, `this` is `undefined`.
4. In an object method, `this` refers to that object.
5. In a constructor function, `this` refers to the object being constructed.
6. When using event listeners, the object being listened to will be bound to `this`, assuming a standard function was used. For example, `element. addEventListener('click', func)` would bind `element` to `this` inside of `func`.

Arrow functions do not create their own `this` context, instead they retain the value of the enclosing context.<br>
JS provides three functions for binding the value of this to functions:
* `func.bind(thisArg)`: Returns a new function with `thisArg` bound to `this`.
* `func.call(thisArg, x, y)`: Calls `func(x, y)` with `thisArg` bound to `this`.
* `func.apply(thisArg, [x, y])`: Calls `func(x, y)` with `thisArg` bound to `this`.  

You use `this` when you want to refer to the object. Arrow functions and anonymous functions use the keyword `this` in a different way. 

## Classes
**Prototypal Inheritance**<br>
The inheritance model used in JS. The key difference between prototypal inheritance and classical inheritance is that in prototypal inheritance objects only inherit from other objects, rather than using class blueprints.

**Prototype Chain**<br>
The chain of inheritance created through object prototypes. When a property does not exist on an object, JS will look to its prototype. If it doesn't exist on that object, it will look to its prototype and so on until the chain ends with a null prototype.<br>
Internally, the prototype is stored on the `[[Prototype]]` property, but we cannot directly access this property. Instead, we have a few alternative ways to get and set prototypes:
* `obj.__photo__`: Although being deprecated, this property was the original way to get and set the prototype of an object and is still useful for debugging.
* `Object.getPrototypeOf(obj)`: Returns the prototype object of `obj`.
* `Object.setPrototypeOf(obj, proto)`: Sets the prototype object of `obj` to `proto`.
* `Object.create(proto)`: Creates a new object with the prototype set to `proto`.

**Function Constructor**<br>
A function intended to be used to construct an object using the `new` operator.<br>
When the new operator is used, a new object is created automatically. The prototype of the new object is then set to the `prototype` property of the constructor function (remember functions are just objects). Finally, the constructor function is called with the new object bound to `this`.<br>
By default the `prototype` property of the function will simply be an object with its `constructor` property set to the function itself. However, this can be changed, for example:
```js
function Person(name) {
    this.name = name
}
// This object will become the [[Prototype]] of any objects resulting from a new Person() call
Person.prototype = {
    constructor: Person,
    isHuman: true
}

const clement = new Person('Clement)
console.log(clement.isHuman) // true -> comes from the prototype object
```

**Class**<br>
A JS syntax to emulate that of classical inheritance, although for the most part it is syntatic sugar on top of function constructors (classes are actually just functions under the hood).
An example class would look like this:
```js
class Person {
    static isHuman = true // public static field
    #age // private instance field

    constructor(name, age) {
        this.name = name
        this.#age = age
    }

    // instance method
    speak() {
        console.log('Hello this is ' + this.name)
    }

    // instance getter function
    get age() {
        return this.#age
    }
}

const conner = new Person('Conner', 24)
conner.speak() // Hello this Conner
console.log(conner.age) // 24 -> calls getter function
conner.age = 25 // -> calls setter function
console.log(conner.#age) // -> Error cannot access private field
console.log(conner.name) // Conner
console.log(conner.isHuman) // undefined
console.log(Person.isHuman) // true  
```
Classes can also extend other classes, which internally creates a prototype chain. In the class constructor, `super` can be used to call the parent constructor. `super.method()` can also be used in the class to call parent classes. For example:
```js
class Child extends Person {
    constructor(name, age, grade){
        super(name, age)
        this.grade = grade
    }
}
```

## Currying
The process of transforming a function to treat its parameters as a sequence of individual function calls that each take one parameter. For example, `func(a, b, c)` would become `func(a)(b)(c)`.<br>
Currying is achieved by creating functions that return other functions, taking advantage of closures. For example, a curried sum function would look like:
```js
function curriedSum(a) {
    return function(b) {
        return a + b
    }
}
``` 
This could then be used to create partial versions of this function, for example an "add four" function:
```js
const addFour = curriedSum(4)
addFour(10) // 14
```

## Generators
**Generator**<br>
An iterable object created by using a generator function.<br>
A generator function is defined using `function*`. Then each `yield` results in another item being added to the iterable generator object.<br>
The generator object has three methods:
* `next(value)`: Returns an object with the next value in the iterator and a done boolean. Optionally passes a value back into the generator function.
* `return(value)`: Adds a passed in argument to the iterable results and ends iteration.
* `throw(value)`: Throws an error, stopping code execution unless the error is caught.
```js
function* getNumbers() {
    const x = yield 1
    yield x + 2
    yield 3
}

const generatorObj = getNumbers()
console.log(generatorObj.next().value) // 1
console.log(generatorObj.next(3).value) // 5
console.log(generatorObj.return(7).value) // 7
console.log(generatorObj.next().value) // undefined
```

## Modules
**Module**<br>
JS code that runs in isolation, without pulling the global namespace.<br>
Tradionally modules were implemented using immediately invoked function expressions, but in modern JS there is a `type="module"` attribute that can be added to script tags. This attribute will have a few key effects:
* Identifiers at the top level will be scoped to the file rather than globally.
* The file will be in strict mode by default.   
* The `await` keyword can be used at the top level.
* The script will be deferred by default.

Modules can be access each other by using the `import` and `export` keywords. For example:
```js
// File 1
export const num = 10

// File 2
import { num } from 'file1.js'
``` 
**Immediately Invoked Function Expression**<br>
Also called an IIFE, a function that is immediately called after its definition. This can be useful for a variety of purposes, most notably to create a function scope to isolate code with.<br>
There are a few ways to define an IIFE, but the most common is using an anonymous or arrow function. This function is then wrapped in parentheses, which causes it to be treated as an expression. Finally, `()` is added to call the function.
```js
(function () {
    console.log('Wahoo!')
})()
```

## The Event Loop

## Web Workers
**Web Worker**<br>
A browser API for running scripts in a separated thread from the main execution thread.<br>
A worker object is created with the `Worker(filePath)` constructor function. The argument to this function is a path to another JS file that will run in a separated thread.<br>
Workers can send messages back and forth with the main thread via the `postMessage(message)` method and the `onmessage` event. For example:
```js
// main JS file
const worker = new Worker('worker.js')
worker.postMessage('hello')
worker.addEventListener('message', (event) => {
    console.log(event.data)
})

// worker.js
postMessage('world')
addEventListener('message', (event) => {
    console.log(event.data)
})
```
In general, most workers are dedicated workers, meaning they can only communicate with the script that created them. However, a `SharedWorker` can also be created to share a worker with multiple tabs or iframes. That said, `SharedWorkers` still do not have widespread support across browsers.

## Browser Storage
**Cookies**<br>
The simplies form of browser storage, comprised of string key-value pairs. Cookies are most often set by the server to store information such as the logged in user account, however they can also be created via the `document.cookie` JS property.

**Local Storage**<br>
Part of the web storage API, a system for storing information in the browser without any expiration date. Values can be added to local storage with `localStorage.setItem('key', 'value')`, and the value can be retrieved with `localStorage.getItem('key')`.

**Session Storage**<br>
Part of the web storage API, a system for storing information in the browser that expires at the end of a session. Values can be added to session storage with `sessionStorage.setItem('key', 'value')`, and the value can be retrieved with `sessionStorage.getItem('key')`

**IndexedDB**<br>
A browser API for storing complex objects. IdexedDB uses object values, which are similar to tables in relational databases. Each object in the object store must then have a unique key used to identify it.

## Data Structures with JS
**Map**<br>
A built-in JS class for holding key-value pairs. While similar to standard objects, maps have a few key differences:
* Map keys can be of any type, while object keys must be strings or symbols.
* Maps maintain insertion order for iteration, while objects do not.
* Maps cannot easily be converted to JSON, while objects can.
* Objects oftentimes utilise the prototype chain for inheritance, while Maps cannot do this.

**Set**<br>
A built-in JS class for holding unique values of any type. Values are considered unique if they are different primitives or references to different objects (this means that two different objects with the same contents are considered unique from each other). Values in `Sets` are kept in insertion order for when the `Set` is iterated over. 

**WeakMap**<br>
A built-in JS class for holding key-value pairs similar to the `Map` class. There are two primary differences between `Map` and `WeekMap`:
* `WeakMap` can only have objects as keys, primitive values cannot be added as keys.
* `WeakMap`s hold 'weak' references to objects, meaning that they do not prevent the objects from being garbage collected. If no other references to an object exist, it can be garbage collected and automatically removed from the `WeakMap`. As a result, `WeakMaps` cannot be iterated over.

**WeakSet**<br>
A built-in JS class for holding unique values similar to the `Set` class. However, a `WeakSet` acts just like a `WeakMap`, meaning that the values must all be objects, and references to those objects are 'weakly' held.

## JS Frameworks
**JS Library**<br>
A collection of pre-written JS code, usually in the form of functions that can be called throughout other projects to simplify the development process. Examples:
* `Underscore`: Over 100 utility functions for arrays, objects, functions, etc.
* `Lodash`: Fork of underscore, aimed at a more consistent and performant API.
* `JQuery`: DOM manipulation library. Simplifies animations, events, and Ajax. Many of its features have been adopted by other libraries/frameworks.
* `React`: Declarative user interface library. JSX syntax for HTML in JS. Reusable components. Virtual DOM used to keep track of UI.

**JS Framework**<br>
A collection of pre-written JS code that provides some additional structure to a project. It is often said that frameworks are more "opinionated" than libraries, or that frameworks generally call your code as opposed to your code calling a library.
* `Angular`: Framework for developing web applications. Reusable components with HTML templates. Comes with a collection of libraries and developer tools. 
* `Vue`: Progressive framework for building user interfaces. Components built with HTML templates (also supports JSX). Uses a virtual DOM similar to React. 

**Other Tools**<br>
* `Babel`: JS compiler for supporting new features in older browsers.
* `Webpack`: JS module bundler.
* `TypeScript`: Superset of JS with strong typing.
* `Node.js`: Backend JS runtime environment.

## Debugging Strategies
1. Use `console.log`
2. Use `debugger`
```js
const button = document.querySelector('button')
button.addEventListener('click', moveRight)
function moveRight() {
    debugger
    const circle = document.getElementById('circle')
    const { left } = getComputedStyle(circle)
    circle.style.left = left + 10
}
```
3. `Event Listener Breakpoints` tab.
4. Use `Network` tab.

## Writing Clean JS
**What is clean code?**<br>
* Easy to understand, update, and mantain.
* Idiomatic - follows conventions.

**Use Modern Syntax**<br>
* Arrow functions, destructuring, template literals, etc.

**Avoid Callback Nesting**<br>
* Use promises with async/await when possible.

**Don't Overuse 'This'**<br>

**Use Functional Programming**<br>
* Pure functions for consistent, maintainable code.
* Function chaining for readability. (e.g., `.filter` `.map`, `.reverse`)

**Code Autoformatters**<br>
A program that automatically formats code based on a set of rules, making it easy to mantain stylistic consistency. prettier.io is the most common autoformatter, but there are other alternatives as well.

**Style Guides**<br>
A document describing the preferred coding style for a project or organisation used to promote clean and consistent code. Many style guides, such as the Google JS Style Guide, are open source.

## UIID
What is a UUID?
* A string of 36 characters
* Often used to identify pieces of data
* Highly likely to be globally unique

```js
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

console.log(uuidv4()); // ⇒ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
```
* https://www.npmjs.com/package/uuid/v/7.0.2
* https://github.com/uuidjs/uuid#cdn-builds (not working)

