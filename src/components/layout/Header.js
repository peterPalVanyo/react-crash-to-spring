import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header style={headerStyle}>
            <h1 style={fontStyle}>Shopping List</h1>
            <Link style={fontStyle} to="/welcome">Welcome</Link>  | <Link style={fontStyle} to="/">Actual List</Link> | <Link style={fontStyle} to="/shops">Shops</Link>
        </header>
    )
}

const headerStyle = {
    background: '#B34234',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    opacity: 0.7
}

const fontStyle = {
    opacity: 1,
    color: '#fff'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;