import React from 'react';
import style from './CSS/nav.module.css';
import { useNavigate } from 'react-router-dom';



export default function Nav() {
    const navigate = useNavigate();
    return ( <nav>
        <div className={style.nav}>
            <h1 className={style.name} onClick={()=>navigate("/")}>Library Management System</h1>
            <ul className={style.links}> 
                <li className={style.items}>Popular</li>
                <li className={style.items}>Latest</li>
                <li className={style.items}>Books</li>
            </ul>
            <input type='text' id={style.searchBox} placeholder='Search for book'/>
            <ul className={style.login}>
                <li className={style.loginButton} onClick={()=>navigate("/login")}>Login</li>
            </ul>
        </div>
    </nav>
    );
}


