import React from 'react';
import style from './CSS/book.module.css';
import PropTypes from 'prop-types';

const Book = ({books}) => {
    return (
        <div className={style.BookContainer}>
            <img className={style.Book} src={books.image} alt='Book1'/>
            <div className={style.Title}>{books.name}</div>
        </div>
    );
}

Book.propType = {
    books: PropTypes.object.isRequired,
}

export default Book;