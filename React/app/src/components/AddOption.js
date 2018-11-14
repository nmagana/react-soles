import React from 'react';

export default class AddOption extends React.Component {
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