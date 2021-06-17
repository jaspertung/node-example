// module.exports or shorthand exports (fine for defining methods)

//exports.perimeter = (x, y) => 2 * (x + y)
//exports.area = (x, y) => x * y
// change export to return both methods -> make callback function & add error handling

module.exports = (x, y, callback) => { //create callback param function in app.js
    // node error handling (common pattern to follow)
    if (x <= 0 || y <= 0) {
        //async functions return error object as first arg
        callback(new Error(`Rectangle dimensions must be greated than zero. Received: ${x}, ${y}`))
    } else {
        setTimeout(() => //simulate delay
            //1st arg: null for no errors
            callback(null, { //2nd arg: object with 2 methods
                perimeter: () => 2 * (x + y),
                area: () => x * y
                //closures -> don't need to call x and y because available in outer function
            }),
            2000
        )
    }
}