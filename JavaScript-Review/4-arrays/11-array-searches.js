// Lesson 11: Array Searches
// In this lesson, you will learn methods to search within an array.

const nums = [0, 100, 200, 300, 400, 500];

// Returns index of first item if found, -1 if no items are found.
console.log(nums.indexOf(200)); // index 2

const storeItems = [{
    aisle: 1,
    item: 'Eggs'
}, {
    aisle: 4,
    item: 'Milk'
}, {
    aisle: 8,
    item: 'Chicken'
}];

// This will return false. This is because when objects are being compared, they are only
// equal if they are the same reference, even though their items are exactly the same.
console.log(storeItems.indexOf({
    aisle: 8,
    item: 'Chicken'
}));

// For objects, use the findIndex function instead, which allows to write a more flexible
// callback function as a parameter. The function will return the first index
// that returns true.

console.log(storeItems.findIndex(function(storeItem) {
    if (storeItem.aisle == 1 && storeItem.item == 'Eggs') {return true;}
}));

// In order to get the actual item, use the find method.
console.log(storeItems.find(function(storeItem) {
    if (storeItem.aisle == 8) {return true;}
}));
// above returns the object with item equal to Chicken.