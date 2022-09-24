import React from 'react';
import style from './CSS/book.module.css';
import { Link } from 'react-router-dom';

const Book = ({books}) => {
    return (
        <Link to={`/book/${books.id}`}>
            <div className={style.BookContainer} >
                <img className={style.Book} src={books.image} alt='Book1'/>
                <div className={style.Title}>{books.name}</div>
            </div>
        </Link>

    );
}


export default Book;