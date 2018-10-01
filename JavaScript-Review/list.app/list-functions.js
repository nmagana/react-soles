let createList = function(filter) {
    filteredList = appEnviron.list.filter(listFilter(filter));
    filteredList.forEach(createListCallBack);
};

let clearList = function() {
    document.querySelector('#list').innerHTML = "";
};