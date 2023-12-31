import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>Home</Link>
            <Link to='/phones'>Phones</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;