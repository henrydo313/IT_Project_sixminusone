import React from 'react';
import style from './CSS/book.module.css';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const Book = ({books}) => {
    const navigate = useNavigate();
    return (
        <div className={style.BookContainer} onClick={() => navigate("/")}>
            <img className={style.Book} src={books.image} alt='Book1'/>
            <div className={style.Title}>{books.name}</div>
        </div>
    );
}

Book.propType = {
    books: PropTypes.object.isRequired,
}

export default Book;