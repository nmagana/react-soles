'use strict';

var app = {
    title: 'dysFunctional',
    subtitle: 'Let the app choose what to do!',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options ? 'Here are your options' : 'No options'
    )
);

// use these variables to make your code
// more dynamic and less hard coded

var user = {
    name: 'Nico Magana',
    age: 17,
    location: 'Yorba Linda'
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    user.location && React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
