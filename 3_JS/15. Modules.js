// ./file.js = relative to current file
// import * as helpers from './15. Modules - Helpers.js'
// import * as person from './15. Modules - Person.js'

// helpers.frontendExpert()

// const conner = new person.Person('Conner')
// conner.sayHello()

import {algoExpert as algo, frontendExpert} from './15. Modules - Helpers.js'
// import Person from './15. Modules - Person.js'
import {Person} from './15. Modules - Person.js'

frontendExpert() // FrontendExpert is the best!
algo() // AlgoExpert is the best!

const conner = new Person('Conner')
conner.sayHello() // Hi, this is Conner


//-------------------------- IMPORT() --------------------------//
const shouldSayFrontend = true

if (shouldSayFrontend) {
    // const importedObj = await import('./15. Modules - Helpers.js')
    // importedObj.frontendExpert()

    const {frontendExpert} = await import('./15. Modules - Helpers.js')
    frontendExpert()
}

