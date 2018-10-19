import ReactDOM from 'react-dom';
import React from 'react';

const app = {
    options: [],
    title: 'dysFUNctional',
    subtitle: 'Let me choose!'
};

const submitForm = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option && app.options.indexOf(option) == -1) {
        console.log(option);
        app.options.push(option);
        e.target.elements.option.value = '';
        renderScreen();
    }
}

const createOptions = () => {
    return app.options.map((option) => <p key={option}>{option}</p>);
}

const clearOptions = () => {
    if (app.options.length) {
        app.options = [];
        renderScreen();
    }
}

const renderScreen = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length ? 'Here are your options' : 'No options'}</p>
            {createOptions()}
            <button onClick={clearOptions}>Clear All</button>
            <form onSubmit={submitForm}>
                <input type="text" name="option" autoComplete="off"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);  
}

renderScreen();