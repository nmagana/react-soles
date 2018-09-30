// Lesson 7: Object basics
// In this lesson, you will learn the syntax to create objects, how to use them with functions,
// and see how they are passed by reference.

// Syntax to create objects with properties.
let car = {
    brand: 'Toyota',
    year: 2005,
    color: 'Blue'
};

console.log(car);
// objects can be modified by using the . operator
car.brand = 'Honda';
console.log(car);

// objects can be passed into functions and be manipulated by them. Objects are passed by
// reference. This means that if the object is modified in the function, the object
// will be changed if accessed outside the function
let changeColor = function(car, newColor) {
    car.color = newColor;
};

changeColor(car, 'Green');
console.log(car); // car will now be green

// Functions can also return an object
let convertFahrenheit = function (fahrenheit) { return {
    fahrenheit: fahrenheit,
    kelvin: (fahrenheit + 459.67) * (5 / 9),
    celsius: (fahrenheit - 32) * (5 / 9)
} };

temperatureObject = convertFahrenheit(50);
console.log(temperatureObject);
