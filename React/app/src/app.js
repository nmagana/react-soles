const app = {
    title: 'dysFunctional',
    subtitle: 'Let the app choose what to do!',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options ? 'Here are your options' : 'No options'}</p>
    </div>
);

// use these variables to make your code
// more dynamic and less hard coded

const user = {
    name: 'Nico Magana',
    age: 17,
    location: 'Yorba Linda'
}

const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {user.location && <p>Location: {user.location}</p>}
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);