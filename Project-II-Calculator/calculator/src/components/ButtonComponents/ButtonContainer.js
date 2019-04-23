import React from 'react';
import './Button.css';

const ButtonContainer = props => {
    return (
        <div className={`buttonContainer ${props.className}`}>
            {props.button}
        </div>
    );
};

export default ButtonContainer