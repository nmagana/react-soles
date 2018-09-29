// Lesson 7: Function Basics

// Function Syntax
// Any number of arguments can be added, also don't need to have any arguments.
// For functions that are called and an argument isn't passed in, that argument will
// default to undefined.
// Lastly, function parameters or variable names cannot be accessed outside the function.

let sum = function(arg1, arg2) {
    // put code inside function here
    
    // add return keyword to function
    return arg1 + arg2;
}

// syntax to call function and save to variable
mySum = sum(3, 4);
console.log(mySum);

// Note: any number of arguments can be added to the function call and the compiler will not complain
console.log(sum(1, 2, 3, 4, 5)); // still compiles, prints 3

// you can also create functions with default arguments. This means that if that argument
// is not supplied, the function will use the default value
// Note: Make sure the default arguments are the last arguments in the declaration.

let subtraction = function(arg1, arg3 = 1) {
    return arg1 - arg3;
}

mySubtraction = subtraction(6);
console.log(mySubtraction); // will print 5
