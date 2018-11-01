// This code won't be rendered, but will just be used as a reference to
// where we are in the course!

import React from 'react';
import ReactDOM from 'react-dom';

class DysfunctionalApp extends React.Component {
        state = {
            options: this.props.options
        };

    removeAllOptions = () => {
        this.setState({
            options: []
        });
    };

    render() {
        const subtitle = 'Let the computer choose!';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action />
                <Options options={this.state.options} removeAllOptions={this.removeAllOptions}/>
                <AddOption />
            </div>
        );
    }
}

DysfunctionalApp.defaultProps = {
    options: ["Movies", "Beach", "Study"]
};



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
    renderOptions(options) {
        return options.map((option) => <Option key={option} option={option}/>);
    }
    
    render() {
        return (
            <div>
                {!this.props.options.length && <p>Please put in an option to get started!</p>}
                <button onClick={this.props.removeAllOptions}>Remove All</button>
               {this.renderOptions(this.props.options)}
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <p>Option: {this.props.option}</p>
        );
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