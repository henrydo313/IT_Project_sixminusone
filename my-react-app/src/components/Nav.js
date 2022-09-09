import React from 'react';
import './CSS/nav.css';
import { useNavigate } from 'react-router-dom';



export default function Nav() {
    const navigate = useNavigate();
    return ( <nav>
        <div className='nav'>
            <h1 className="name" onClick={()=>navigate("/")}>Library Management System</h1>
            <ul className="links"> 
                <li className="items">Popular</li>
                <li className="items">Latest</li>
                <li className="items">Books</li>
            </ul>
            <input type='text' id='searchBox' placeholder='Search for book'></input>
            <ul className="login">
                <li className="loginButton" onClick={()=>navigate("/login")}>Login</li>
            </ul>
        </div>
    </nav>
    );
}


