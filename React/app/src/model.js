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

    handleAction = () => {
        const optionsLength = this.state.options.length;
        if (optionsLength > 0) {
            const chosenOption = this.state.options[Math.floor(Math.random() * optionsLength)];
            alert(chosenOption);
        }
    }

    handleSubmit = (option) => {
        if (!option) {
            return 'Input an option!';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option exists!';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }

    render() {
        const subtitle = 'Let the computer choose!';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action handleAction={this.handleAction}/>
                <Options options={this.state.options} removeAllOptions={this.removeAllOptions}/>
                <AddOption handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

DysfunctionalApp.defaultProps = {
    options: []
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
                <button onClick={this.props.handleAction}>What Should I do?</button>
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
            <div>
                {this.props.option}
            </div>
        );
    }
}

class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option_input.value.trim();
        const error = this.props.handleSubmit(option);
        // sets the state of the error
        // Note: if the variable is equal to the state variable, instead of doing
        // this.setState({error: error});, if they are the same name, you can do
        // this.setState({error});, making it more consise
        this.setState({error});
        // if there is no error (error is undefined),
        // clear the value of the input
        if (!error){
            e.target.elements.option_input.value = '';
        }
    }

    // using the && syntax as used in previous examples (:
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input name="option_input"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<DysfunctionalApp />, document.getElementById('app'));