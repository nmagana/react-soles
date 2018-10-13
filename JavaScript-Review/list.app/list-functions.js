/*
    Creates a list based on the filter that is currently inputted.
    Creates a new paragragh tag for each list item with the forEach function.
*/
let createList = function(filter) {
    filteredList = appEnviron.list.filter(listFilter(filter));
    filteredList.forEach(createListCallBack);
};

/*
    Clears all the paragraph tags by setting the innerHtml to an empty string.
*/
let clearList = function() {
    document.querySelector('#list').innerHTML = "";
};
