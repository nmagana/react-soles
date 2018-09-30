// Lesson 2: Getting familiar with number operations
// In this lesson you will learn the basic operations for integers as well as
// using some methods used by integers and the Math library.

let number = 10;

// add numbers
let addition = number + 10;
console.log(addition);

// subtract numbers
let subtraction = number - 10;
console.log(subtraction);

// multiply numbers
let multiplication = number * 10;
console.log(multiplication);

let division = number / 10;
console.log(division);

// use parentheses to allow operations to happen before others
let paranthesesExample = (number + 5) * 10;
console.log(paranthesesExample);

// Below are some methods used for ints as well as using the Math library
let num = 69.6969

// Set number of digits after decimal point
console.log(num.toFixed(2))

// Round numbers to the nearest whole integer
console.log(Math.round(num))

// Rounds number down 
console.log(Math.floor(num))

// Rounds number up
console.log(Math.ceil(num))

// Use this to create a range of random numbers
let min = 420
let max = 1919
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min