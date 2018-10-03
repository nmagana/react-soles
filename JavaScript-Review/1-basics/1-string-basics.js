
/* Lesson 1: String Basics
In this lesson you will learn about string operations and explore string methods and properties. */

// You can create variables in JavaScript by using let.
let color = 'blue';

// The following line is used to output to the console.
console.log(color);

// Now that color is declared, you can reassign without using let.
color = 'green';
console.log(color);

let food = 'eggs and ham';

// Variables can be created by concatenating variables and string literals.
let myOrder = 'I want ' + color + ' ' + food + ' please!';
console.log(myOrder);

/* To include variables directly in string, you can use Template Strings. This avoids using +.
Wrap the string with `` and use ${variable_name_here} to put in a variable directly in the string. */

myOrder = `I want ${color} ${food} please!`;
console.log(myOrder);

// Below are some useful properties and methods that strings have.

let school = 'Ucla'

// Length property, returns how many characters are in a string.
console.log(school.length)

// Method that converts string to Upper Case. 
console.log(school.toUpperCase())

// Method that converts string to Lower Case. 
console.log(school.toLowerCase())

let password = 'geneUCLAblock'
// Returns true if string passed to includes function is found in string, False otherwise.
console.log(password.includes('UCLA')) // Returns true
