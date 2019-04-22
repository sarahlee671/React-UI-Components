import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
    return (
        <div>
            <h3>Lambda School</h3>
            <p>@lambdaSchool</p>
            <p>{moment().format('MMMM Do')}</p>
        </div>
    );
};

export default HeaderTitle;
