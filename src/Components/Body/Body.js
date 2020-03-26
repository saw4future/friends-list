import React from 'react';
import Friends from '../Friends/Friends';

const Body = () => {
    return (
        <div>
            <div className="main-container">
                <div className="friends-container">
                    <Friends></Friends>
                </div>
                <div className="cart-container">

                </div>
            </div>
        </div>
    );
};

export default Body;