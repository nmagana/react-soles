const appEnviron = {
    filter: '',
    list: []
};

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
