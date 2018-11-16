import React from 'react';

const Action = (props) => (
    <div className='container'>
        <button className='button big-button' disabled={!props.hasOptions} onClick={props.handleAction}>What Should I do?</button>
    </div>
)

export default Action;