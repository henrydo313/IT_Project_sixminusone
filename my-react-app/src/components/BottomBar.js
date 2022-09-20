import React from 'react';
import style from './CSS/bottomBar.module.css';
import { useNavigate } from 'react-router-dom';

export default function BottomBar() {
    const navigate = useNavigate();
    return (
        <div className={style.bottomBar}>
            <ul className={style.bottomLinks}>
                <li className={style.bottomItems} onClick={() => navigate("/aboutUs")}>About Us</li>
            </ul>
        </div>
    )
}