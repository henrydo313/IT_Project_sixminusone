import React from "react";
import PropTypes from 'prop-types';
import Book from "./Book";
import style from "./CSS/bookContainer.module.css"
export default function BookContainer({Books}) {
    return (
        <ul className={style.BookContainerItems}>
            {Books.map(Books=> 
                <li key={Books.id} className={style.BookContainerItem}>
                    <Book books={Books}/>
                </li>    
            )}
        </ul>
    );
}

BookContainer.propTypes = {
    Books: PropTypes.array.isRequired
};
