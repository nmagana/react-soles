/* Lesson 9: Array Basics
In this lesson you will be looking at the basics of array creation and learn how to use some 
useful array methods. */

// Syntax to create array
const reminders = [100, 200, 300];

// You can access items by indexing them. Accessing the array out of bounds will return undefined. 

// gets first item
console.log(reminders[0]); // Prints Do Homework

// gets last item
console.log(reminders[reminders.length - 1]); // Prints Eat Dinner

// You can also create arrays of mixed items.
const mixedArray = ['string', true, 10];

// The following are some methods for arrays.

// push - adds an element to the end of an array.
reminders.push(400);
console.log(reminders);

// unshift - adds an element to the beginning of an array
reminders.unshift(0);
console.log(reminders);

// pop - removes an element from the end of an array
reminders.pop();
console.log(reminders)

// shift - removes an element from the beginning of an array
reminders.shift();
console.log(reminders);

/* splice - allows to insert, remove, or do both at any index
first argument - index to insert/delete
second argument - num items to delete
third argument, items to insert */
reminders.splice(1, 0, 1, 2, 3);
console.log(reminders);

// deletes 2 items starting at index 3, and also inserts 900 and 1000
reminders.splice(3, 2, 900, 1000);
console.log(reminders);
