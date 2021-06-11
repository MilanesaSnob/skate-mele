import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';


function NavBar() {
    return (
        <div className="Top-nav"> 
            <nav>
                <a className="active" href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <CartWidget />
            </nav>
        </div>

    )
}

export default NavBar;