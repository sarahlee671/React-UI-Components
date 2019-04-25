import React from 'react';
import './Card.css';

const CardContent = () => {
    const handleClick = () => {
        window.location="http://reactjs.org"
    }

    return (
        <div className="card-content" onClick={handleClick}>
            <p className="card-title">Get started with React</p>
            <p className="card-para">React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <p className="react">reactjs.org</p>
        </div>
    );


};

export default CardContent;