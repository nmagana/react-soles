// Lesson 12: Filter and Sort Arrays
// In this lesson you will learn how to use the
// filter and sort methods used by arrays

// filter - removes items based on the callback function passed in
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

const filteredArray = storeItems.filter(function(storeItem) {
    if (storeItem.aisle > 2) {return true;}
});

console.log(filteredArray);

/* sort - sort function based on another callback function
the call back function compares two different items
return -1 with a comparison if you want that to come before,
return 1 with a comparison if you want that to come after,
return 0 if they are the same, meaning nothing happens.
modifies the existing array in place */

storeItems.sort(function(a, b) {
    if (a.item[0] < b.item[0]) {return -1;} 
    else if (a.item[0] > b.item[0]) {return 1;}
    else {return 0;}
})

console.log(storeItems);