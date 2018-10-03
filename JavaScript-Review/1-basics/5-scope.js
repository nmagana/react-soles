/* Lesson 5: Variable Scope
In this lesson , you will learn about different types of scopes
in JavaScript. */

/* JavaScript uses Lexical (Static) Scoping. This means that the block, or scope, 
in which variables are created plays a big part if it can get accessed */

/* There are two types of scope:

Global Scope - Variables defined outside any code block and can be accessed
anywhere within the program.

Local Scope - Variables that are defined inside of a code block. */

/* Shadowing - When a variable in an inner scope with the same name as a variable
in an outer scope assigns a different value. */

let var1 = 4; // global scope
if (true) {
    let var1 = 3; // local scope, example of shadowing
    console.log(var1); // Prints 3
}
console.log(var1); // Prints 4

/* Leaked Globals - When a variable is used but has not been declared by using let,
the compiler creates it as a global variable. This can cause bugs. Always
make sure to use the let keyword when making a variable. */

/* Example of Leaked Global
Don't worry about the syntax for a function yet, it will be covered in the next lesson! */

let myFunc = function() {
    bruins = 5;
    console.log(bruins);
}

myFunc();
console.log(bruins); // This will still work because now the compiler treats it as a global!

