// Lesson 13: Arrow Functions
// In this lesson, you will learn how to write arrow functions as well
// as learn about the Conditional (Ternary Operator)

// regular function
let multiplication = function(arg1, arg2) {
    return arg1 * arg2;
};

console.log(multiplication(1,2))

// You can write the above function using an arrow function
multiplication = (arg1, arg2) => {
    return arg1 * arg2;
};

console.log(multiplication(1,2))

// You can even write it in simpler syntax.
// No return statement is required, as it acts like an implied return statement.
multiplication = (arg1, arg2) => arg1 * arg2;
console.log(multiplication(1,2));

// arrow functions and objects
let user = {
    name: 'Nico',
    getName() {
        function printName() {
            console.log(this.name)
        }
        printName()
    }
}

user.getName() // undefined is printed
// this occurs because the this keyword is trying
// to find name within its current scope, but there is no name variable
// in its scope

// use arrows functions instead, which will actually grab
// the this value from its parent, therefore being able
// to get name in our example. However, because of this, don't use
// arrow functions as methods in the object, since the this object
// will be initialize to undefined

user = {
    name: 'Nico',
    getName() {
        printName = () => {
            console.log(this.name)
        }
        printName()
    }
}

user.getName() // will actually print Nico

// Ternary Operator Syntax
// condition ? Value if true: Value if false
let firstNum = 7;
let secondNum = 8;
let isMultiplication = true;
let result = isMultiplication ? firstNum * secondNum : firstNum / secondNum;
console.log(result); // prints the multiplication.