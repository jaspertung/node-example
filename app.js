// const rect = {
//     perimeter: (x, y) => 2 * (x + y),
//     area: (x, y) => x * y
// }
// change to node

const rect = require('./rectangle')
// importing: look for file rectangle and use exports as properties of rect object

// after added error handling -> now importing rectangle in as a function rect constant no longer refers to an object, now refers to a function

// function solveRect(l, w) {
//     console.log(`Solving for rectangle with dimensions: ${l}, ${w}`)

//     if (l <= 0 || w <= 0) { //moved error handling to module
//         console.log(`Rectangle dimensions must be greated than zero. Received: ${l}, ${w}`)
//     } else {
//         console.log(`Area of rectangle: ${rect.area(l, w)}`)
//         console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}`)
//     }
// }

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`)

    rect(l, w, (err, rectangle) => { //3 args: 2 positive numbers from solveRect function and a callback function written directly inside the param list
        //only defining the callback function here, not called until the module in rectangle.js -> if x & y not positive, then callback function runs with error object as first arg
        if (err) { //check if callback definition has err as first arg
            console.log('ERROR:', err.message)
        } else {
            console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`) //method name is no longer rect (function now, not object), object that owns the methods now being called in callback function with name rectangle
            //don't need dimensions anymore because being called from rect function
            console.log(`Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`)
        }
    })
    console.log('This statement is logged after the call to rect()')
}

solveRect(2, 4)
solveRect(3, 5)
solveRect(0, 5)
solveRect(5, -3)