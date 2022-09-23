import React from 'react';
import style from './CSS/book.module.css';
import PropTypes from 'prop-types';
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

Book.propType = {
    books: PropTypes.object.isRequired,
}

export default Book;