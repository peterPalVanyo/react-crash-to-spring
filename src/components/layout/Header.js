import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header style={headerStyle}>
            <h1>Shopping List</h1>
            <Link style={linkStyle} to="/welcome">Welcome</Link>  | <Link style={linkStyle} to="/">Actual List</Link> | <Link style={linkStyle} to="/about">Lists</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;