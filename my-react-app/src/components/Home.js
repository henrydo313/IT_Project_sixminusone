import React from 'react';
import Layout from './Layout';
import {books} from './StaticData/BooksData';
import style from './CSS/home.module.css';
import BookContainer from './BookContainer';
import CategoryBar from './CategoryBar';

export default function Home() {
    return <Layout>
        <h1 className={style.CategoryLabel}>Categories</h1>
        <CategoryBar />
        <h1 className={style.PopularLabel}>Popular</h1>
        <BookContainer Books={books}/>
        <h1 className={style.PopularLabel}>Latest</h1>
        <BookContainer Books={books}/>
    </Layout>
}