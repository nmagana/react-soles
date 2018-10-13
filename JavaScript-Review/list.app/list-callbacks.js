/*
    These are functions that are used as callbacks for other functions!
*/

/*
    Sort function that sorts based on alphabetical order,
    regardless of being capitalized or not.
*/
let sortFunction = function(a, b) {
    a_lower = a.toLowerCase();
    b_lower = b.toLowerCase();
    if (a_lower < b_lower) {return -1;}
    else if (a_lower == b_lower) {return 0;}
    else {return 1;}
};

/*
    List call back that creates a paragraph tag and appends to the
    element with the #list id.
*/
let createListCallBack = function(list_item) {
    const listElement = document.createElement('p');
    listElement.textContent = list_item;
    document.querySelector('#list').appendChild(listElement);
};

/*
   Returns a callback function that passes in a word and checks
   if the list item starts with that word.
*/
let listFilter = function(word) {
    return function(list_item) {
        return list_item.toLowerCase().startsWith(word.toLowerCase());
    };
}
