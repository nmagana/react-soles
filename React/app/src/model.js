import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Header from './components/Header';

class DysfunctionalApp extends React.Component {
    state = {
        options: this.props.options,
        selectedOption: undefined
    };
    subtitle = 'Let the computer choose!';

    removeAllOptions = () => {
        this.setState({
            options: []
        });
    };

    deleteOption = (optionRemoved) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionRemoved)
        }))
    }

    handleAction = () => {
        const optionsLength = this.state.options.length;
        if (optionsLength > 0) {
            const selectedOption = this.state.options[Math.floor(Math.random() * optionsLength)];
            this.setState({selectedOption});
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

    handleExitModal = () => {
        this.setState({selectedOption: undefined});
    }

    render() { 
        return (
            <div>
                <Header subtitle={this.subtitle}/>
                <Action hasOptions={!!this.state.options.length} handleAction={this.handleAction}/>
                <Options 
                    options={this.state.options} 
                    removeAllOptions={this.removeAllOptions}
                    deleteOption={this.deleteOption}
                />
                <AddOption handleSubmit={this.handleSubmit}/>
                <Footer />
                <OptionModal selectedOption={this.state.selectedOption} handleExitModal={this.handleExitModal}/>
            </div>
        );
    }
}

DysfunctionalApp.defaultProps = {
    options: []
};

class Action extends React.Component {
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.handleAction}>What Should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    renderOptions(options) {
        return options.map((option) => <Option 
                                            deleteOption={this.props.deleteOption} 
                                            key={option} 
                                            option={option}
                                        />);
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

const Option = (props) => (
    <div>
        {props.option}
        <button onClick={() => props.deleteOption(props.option)}>
            x
        </button>
    </div>
);

class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option_input.value.trim();
        const error = this.props.handleSubmit(option);
        this.setState({error});
        if (!error){
            e.target.elements.option_input.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input autoComplete={"off"} name="option_input"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const Footer = (props) => (
    <div>
        <p>{props.title}</p>
        <p>{props.year}</p>
        </div>
);

Footer.defaultProps = {
    title: "A Nico Magaña Production ©",
    year: "Established 2018"
};

const OptionModal = (props) => (
    <Modal
        appElement={document.getElementById('app')}
        isOpen={!!props.selectedOption}
    >
        <h1>Selected Option</h1>
        <p>{props.selectedOption}</p>
        <button onClick={props.handleExitModal}>Exit</button>
    </Modal>
);

ReactDOM.render(<DysfunctionalApp />, document.getElementById('app'));