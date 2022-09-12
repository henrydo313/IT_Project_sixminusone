import React from 'react';
import './CSS/book.css';
import Book1 from './Images/BookCover/BookCover.jpg';

export default function Book() {
    return (
        <div className='BookContainer'>
            <img className='Book' src={Book1} alt='Book1'/>
            <div className='Title'>title</div>
        </div>
    );
}