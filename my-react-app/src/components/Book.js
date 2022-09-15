import React from 'react';
import style from './CSS/book.module.css';
import Book1 from './Images/BookCover/BookCover.jpg';

export default function Book() {
    return (
        <div className={style.BookContainer}>
            <img className={style.Book} src={Book1} alt='Book1'/>
            <div className={style.Title}>title</div>
        </div>
    );
}