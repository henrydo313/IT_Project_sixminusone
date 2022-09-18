import React from 'react';
import Layout from './Layout';
import {books} from './StaticData/BooksData';
import BusinessAndEcon from './Images/CategoryImages/BaE.png';
import Education from './Images/CategoryImages/ESaT.png';
import Literature from './Images/CategoryImages/LaF.png';
import Science from './Images/CategoryImages/SNaM.png';
import Health from './Images/CategoryImages/HFaN.png';
import Law from './Images/CategoryImages/Law.png'
import style from './CSS/home.module.css';
import BookContainer from './BookContainer';

export default function Home() {
    return <Layout>
        <h1 className={style.CategoryLabel}>Categories</h1>
        <div className={style.Categories}>
            <img className={style.CategoryImage} src={BusinessAndEcon} alt='BusinessAndEcon'/>
            <img className={style.CategoryImage} src={Education} alt='Education'/>
            <img className={style.CategoryImage} src={Literature} alt='Literature'/>
            <img className={style.CategoryImage} src={Science} alt='Science'/>
            <img className={style.CategoryImage} src={Health} alt='Health'/>
            <img className={style.CategoryImage} src={Law} alt='Law'/>
        </div>
        <h1 className={style.PopularLabel}>Popular</h1>
        <BookContainer Books={books}/>
        
    </Layout>
}