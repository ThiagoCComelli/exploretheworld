import React from 'react';

import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <>
        <div className="mainNavbar">
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Locations</li>
                <li>Cart</li>
            </ul>
        </div>
        </>
    )
}

export default Navbar;
