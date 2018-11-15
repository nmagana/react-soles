import React from 'react';

const Action = (props) => (
    <div>
        <button disabled={!props.hasOptions} onClick={props.handleAction}>What Should I do?</button>
    </div>
)

export default Action;