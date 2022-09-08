import React from 'react';
import './CSS/nav.css';

export default function Nav() {
    return ( <nav>
        <div className='nav'>
            <h1>Library Management System</h1>
            <ul className="links"> 
                <li className="items">Popular</li>
                <li className="items">Latest</li>
                <li className="items">Books</li>
            </ul>
            <input type='text' id='searchBox' placeholder='Search for book'></input>
            <ul className="login">
                <li className="loginButton">Login</li>
            </ul>
        </div>
    </nav>
    );
}