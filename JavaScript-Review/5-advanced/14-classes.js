/* Lesson 14: Classes
In this lesson, you will learn the syntax for creating classes, subclasses, getters, and setters. */

// Syntax for writing classes
class Person {
    constructor(firstName, lastName, age, family = []) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.family = family;
    } 

    greeting() {
        console.log('I am a person!');
    }

    // getter syntax
    get name() {
        return `${this.firstName} ${this.lastName}`;
    }

    // setter syntax
    set name(name) {
        const names = name.trim().split(' ')
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

    // Syntax for subclasses
    class Student extends Person {
        constructor(firstName, lastName, age, grade, family) {
        super(firstName, lastName, age, family)
                this.grade = grade;
            }

        updateGrade(change) {
            this.grade = change;
        } 
        
        // overrides the base class greeting()
        greeting() {
            console.log(`I am a student! My grade is a ${this.grade}`);
        }
    }

    const person = new Student('Steven', 'Gomez', 21, 'A++', ['Mom', 'Dad', 'Sister']);
    person.greeting();
    // example using getter
    console.log(person.name);
    // example using setter
    person.name = 'Nico Magana';
    console.log(person.name);
