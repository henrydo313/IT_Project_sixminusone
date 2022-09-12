import React from 'react';
import Layout from './Layout';
import Books from './Book';
import BusinessAndEcon from './Images/CategoryImages/BaE.png';
import Education from './Images/CategoryImages/ESaT.png';
import Literature from './Images/CategoryImages/LaF.png';
import Science from './Images/CategoryImages/SNaM.png';
import Health from './Images/CategoryImages/HFaN.png';
import Law from './Images/CategoryImages/Law.png'
import './CSS/home.css';

export default function Home() {
    return <Layout>
        <h1 className='CategoryLabel'>Categories</h1>
        <div className='Categories'>
            <img className='CategoryImage' src={BusinessAndEcon} alt='BusinessAndEcon'/>
            <img className='CategoryImage' src={Education} alt='Education'/>
            <img className='CategoryImage' src={Literature} alt='Literature'/>
            <img className='CategoryImage' src={Science} alt='Science'/>
            <img className='CategoryImage' src={Health} alt='Health'/>
            <img className='CategoryImage' src={Law} alt='Law'/>
        </div>
        <h1 className='PopularLabel'>Popular</h1>
        <div className='Books'>
            <Books />
        </div>
    </Layout>
}