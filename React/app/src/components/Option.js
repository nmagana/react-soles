import React from 'react';

const Option = (props) => (
    <div>
        {props.option}
        <button onClick={() => props.deleteOption(props.option)}>
            x
        </button>
    </div>
);

export default Option;