/* Lesson 7: Function Basics
In this lesson you will learn about basic function syntax. */

/* Function Syntax
Any number of arguments can be added, you also don't need to have any arguments.
For functions that are called and an argument isn't passed in, that argument will
default to undefined.
Lastly, function parameters or variable names cannot be accessed outside the function.
(unless there is a leaked global!) */

// This is called a function expression.
let sum = function(arg1, arg2) {
    // Put code inside function here.
    // Then put in a return statement.
    return arg1 + arg2;
}

// Syntax to call function and save to variable.
mySum = sum(3, 4);
console.log(mySum);

// This is called a function declaration.
function example(arg1) {
    return arg1;
}

console.log(example(100))

// Note: any number of arguments can be added to the function call and the compiler will not complain
console.log(sum(1, 2, 3, 4, 5)); // still compiles, prints 3

/* You can also create functions with default arguments. This means that if that argument
is not supplied, the function will use the default value
Note: Make sure the default arguments are the last arguments in the declaration. */

let subtraction = function(arg1, arg3 = 1) {
    return arg1 - arg3;
}

mySubtraction = subtraction(6);
console.log(mySubtraction); // will print 5
