import React from 'react';
import { AiOutlineBook } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="icon-logo">
                <AiOutlineBook />
                <h2>
                    <span>Learn</span>
                    <span className='lynks'>Lynks</span>
                </h2>
            </div>
            <nav>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </nav>
            <div className='btn'>
                <Link to="/register" className="register-btn">Register</Link>
                <Link to="/login" className="register-btn">Login</Link>
            </div>
        </div>
    );
};

export default Header;