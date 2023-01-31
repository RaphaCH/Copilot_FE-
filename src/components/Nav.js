// Create a simple Nav component to generate a nav bar. the class name used to style the nav bar is nav. 

import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li className="items">
                    <p className="item">Home</p>
                </li>
                <li className='items'>
                    <p className='item'>About</p>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;

// generate the style for the nav bar in the Nav.css file. Nav bar should be simple, elegant and responsive. Items should be row by default. Primary color should be Purple



