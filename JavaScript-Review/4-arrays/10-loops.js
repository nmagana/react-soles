// Lesson 10: Loops
// In this lesson, you will learn looping with foreach and for loops.

// foreach - loops over each element of the array
// The foreach function takes in a function as its parameter. This function is
// known as a callback function. This function is called back at the end of the function
// that it is being passed into. The function will be called for each item in the array.

const nums = [100, 200, 300, 400, 500];

// foreach syntax
// first parameter - item
// second parameter - index
nums.forEach(function(num, index){
    console.log(`${num} is at index ${index}!`);
})

// For Loop Syntax
for (let count = 0; count < nums.length; count++) {
    console.log(nums[count])
}