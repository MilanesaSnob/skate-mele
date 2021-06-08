import React from 'react';
import './NavBar.css';


function NavBar() {
    return (
        <nav style={{backgroundColor: 'orange', overflow: 'hidden', width:'100%'}}>
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>

    )
}

export default NavBar;