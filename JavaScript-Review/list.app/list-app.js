const appEnviron = {
    filter: '',
    list: []
};

/*
    This event handler is called whenever something is typed in the filter input.
    The parameter represents the event that triggered this function. 
    e.target.value gets the value inside the filter input.
    The list is cleared first or else the list items remain on the screen.
    The filter is then used, to create a new list, and the global filter variable is set.
*/
document.querySelector('#filter-input').addEventListener('input', function(e) {
    clearList()
    filter = e.target.value
    createList(filter)
    appEnviron.filter = filter;
});

/*
    This event handler is called whenever the add item button is clicked.
    e.preventDefault is called so the web page won't refresh when the
    add item button is clicked.
    e.target.elements gets all the elements inside that have names,
    which is why add_input and its value can be accessed.
*/
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
