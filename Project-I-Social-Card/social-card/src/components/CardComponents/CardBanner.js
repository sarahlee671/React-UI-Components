import React from 'react';
import './Card.css';


const CardBanner = () => {
    const handleClick = () => {
        window.location="http://reactjs.org"
    }

    return (
        <img className="banner" src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png" onClick={handleClick}/>
    );
};

export default CardBanner;