import React from 'react';
import Modal from 'react-modal';

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

export default OptionModal;