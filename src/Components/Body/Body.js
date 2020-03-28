import React from 'react';
import './Body.css'; 
import Friends from '../Friends/Friends';
import Cart from '../Cart/Cart';

const Body = () => {
    
    return (
        <div>
            <div className="main-container">
                <div className="friends-container">
                   
                       <Friends></Friends>
                </div>
                <div className="cart-container">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Body;