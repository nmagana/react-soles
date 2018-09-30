// Lesson 6: Extra Types
// In this lesson you will explore the undefined, null, and const.

// Variables will be assigned the value of undefined if they are not assigned a value.
// This value is given by the compiler.

let myVar
console.log(myVar) // undefined will be printed

if (myVar === undefined) {
    console.log('I am undefined!')
}

// Variables can be explicitly be assigned the value of null.
// Null can be useful if you want a value to be programically empty.

myVar = null

if (myVar === null) {
    console.log('I am null!')
}

// The keyword const is used when you want to assign a variable that you
// don't want to be changed for the rest of the program. If the variable
// is modified, an error will be generated.

const num = 5
// num = 3 <= This will break!