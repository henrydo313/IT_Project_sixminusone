import React from "react";
import PropTypes from 'prop-types';
import Book from "./Book";

function BookPage({Books}) {
    return (
        <ul className="BookPage-Items">
            {Books.map(Books=> 
                <li key={Books.id} className="BookPage-item">
                    <Book books={Books}/>
                </li>    
            )}
        </ul>
    );
}

BookPage.propTypes = {
    Books: PropTypes.array.isRequired
};

export default BookPage;