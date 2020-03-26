import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'; 
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/friends">Friends</a>
                <a href="/profile">Profile</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;