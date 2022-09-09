import React from 'react';
import './CSS/bottomBar.css';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const navigate = useNavigate();
    return ( <nav>
        <div className='bottomBar'>
            <ul className='bottomLinks'>
                <li className='bottomItems'>Contact Us</li>
            </ul>
        </div>
    </nav>
    )
}