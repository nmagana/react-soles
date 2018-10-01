const appEnviron = {
    filter: '',
    list: []
};

let sortFunction = function(a, b) {
    a_lower = a.toLowerCase();
    b_lower = b.toLowerCase();
    if (a_lower < b_lower) {return -1;}
    else if (a_lower == b_lower) {return 0;}
    else {return 1;}
};

let createList = function(filter) {
    filteredList = appEnviron.list.filter(listFilter(filter));
    filteredList.forEach(createListCallBack);
};

let createListCallBack = function(list_item) {
    const listElement = document.createElement('p');
    listElement.textContent = list_item;
    document.querySelector('#list').appendChild(listElement);
};

let clearList = function() {
    document.querySelector('#list').innerHTML = "";
};

let listFilter = function(word) {
    return function(list_item) {
        return list_item.toLowerCase().startsWith(word.toLowerCase());
    };
}

document.querySelector('#filter-input').addEventListener('input', function(e) {
    clearList()
    filter = e.target.value
    createList(filter)
    appEnviron.filter = filter;
});

document.querySelector('#add-item').addEventListener('submit', function(e) {
    e.preventDefault();
    addInputValue = e.target.elements.add_input.value;
    if (addInputValue === "") {return;}
    appEnviron.list.push(addInputValue);
    appEnviron.list.sort(sortFunction)
    e.target.elements.add_input.value = "";
    clearList();
    createList(appEnviron.filter)
});
