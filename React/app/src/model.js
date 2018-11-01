// This code won't be rendered, but will just be used as a reference to
// where we are in the course!

import React from 'react';
import ReactDOM from 'react-dom';

class DysfunctionalApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: this.props.options,
            selectedOption: undefined
        };
    }
    render() {
        const subtitle = 'Let the computer choose!';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}



class Header extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                {this.props.subtitle && <p>{this.props.subtitle}</p>}
            </div>
        );
    }
}

Header.defaultProps = {
    title: 'dysFUNctional'
};

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What Should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Please put in an option to get started!</p>
                <button>Remove All</button>
                <p>Render Options Here</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<DysfunctionalApp />, document.getElementById('app'));