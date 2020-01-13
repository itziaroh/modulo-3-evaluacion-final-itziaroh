import React from 'react';
import logo from '../img/logo.png';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Rick and Morty" className="header_logo" />
        </header>
    )
}

export default Header;