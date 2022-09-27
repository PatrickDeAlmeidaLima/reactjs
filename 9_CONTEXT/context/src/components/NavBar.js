import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";
const NavBar = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    )
}

export default NavBar