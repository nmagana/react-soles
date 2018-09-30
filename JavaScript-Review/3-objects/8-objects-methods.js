// Lesson 8: Objects Methods
// In this lesson, you will learn how to include functions
// in objects, and learn how to use the this pointer.

// Syntax to create object with properties and methods
// The this keyword is used in an object to reference properties that the object has
let classroom = {
    capacity: 100,
    enrolled: 50,
    checkAvailability: function(numToEnroll) {
        return this.enrolled + numToEnroll < this.capacity
    }
}

console.log(classroom.checkAvailability(40)) // True
console.log(classroom.checkAvailability(51)) // False