let sortFunction = function(a, b) {
    a_lower = a.toLowerCase();
    b_lower = b.toLowerCase();
    if (a_lower < b_lower) {return -1;}
    else if (a_lower == b_lower) {return 0;}
    else {return 1;}
};

let createListCallBack = function(list_item) {
    const listElement = document.createElement('p');
    listElement.textContent = list_item;
    document.querySelector('#list').appendChild(listElement);
};

let listFilter = function(word) {
    return function(list_item) {
        return list_item.toLowerCase().startsWith(word.toLowerCase());
    };
}