/* Lesson 3: Bool and Comparison Operators
In this Lesson you will learn about different comparison operators. */


/* 
=== is True when type and value are equal. For example:
3 === 3 evaluates to True, while 3 === '3' evaluates to False.
*/

/* 
== is True when value is equal. Important note is that type does not have to be the same. For example:
3 == 3 evaluates to True, and 3 == '3' also evaluates to True.
*/

console.log('Ucla' === 'Ucla'); // True
console.log('UCLA' === 'ucla'); // False
console.log(3 === 3); // True
console.log(3 == '3'); // True
console.log(3 === '3'); // False

/* !== Returns true if the operands are of the same type but not equal, or are of different type, false otherwise.
!= Returns false if the operands are equal but not the same type, true otherwise. */

console.log('Ucla' !== 3); // True
console.log('Ucla' !== 'Ucla'); // False
console.log(3 !== '3'); // True
console.log(3 != '3'); // False

/* The following comparison operators exist as well:
> greater than
>= greater than or equal to 
< less than
<= less than or equal to
*/

console.log(4 > 3); // True
console.log(4 >= 4); // True
console.log(4 < 4); // False
console.log(3 <= 4); // True
