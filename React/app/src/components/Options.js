import React from 'react';
import Option from './Option';

export default class Options extends React.Component {
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

