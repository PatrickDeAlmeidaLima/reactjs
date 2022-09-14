// 2 - links com react router
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
        </nav>
    )
}

export default Navbar