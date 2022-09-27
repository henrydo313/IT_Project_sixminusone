import React from 'react';
import style from './CSS/nav.module.css';
import { useNavigate } from 'react-router-dom';


export default function Nav() {
    const navigate = useNavigate();
    return ( 
    <nav>
        <link href="https://fonts.googleapis.com/css2?family=Outfit&display=swap" rel="stylesheet"/>
        <div className={style.nav}>
            <h1 className={style.name} onClick={()=>navigate("/")}>Library Management System</h1>
            <ul className={style.links}> 
                <li className={style.items} onClick={()=>navigate("/search")}>Search</li>
                <li className={style.items}>Latest</li>
                <li className={style.items}>Books</li>
            </ul>
            <input type='search' id={style.searchBox} placeholder='Search for book'/>
            <ul className={style.login}>
                <li className={style.loginButton} onClick={()=>navigate("/login")}>Login</li>
            </ul>
        </div>
    </nav>
    );
}


