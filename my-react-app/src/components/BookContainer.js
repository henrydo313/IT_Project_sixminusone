import React from "react";
import PropTypes from 'prop-types';
import Book from "./Book";
import style from "./CSS/bookContainer.module.css"
export default function BookContainer({Books}) {
    const scrollStrength = 100;
    const container = document.getElementById("BookContainer");
    container.addEventListener("wheel", function(e) {
        if(e.deltaY > 0) {
            container.scrollLeft += scrollStrength;
            e.preventDefault();
        }
        else {
            container.scrollLeft -= scrollStrength;
            e.preventDefault();
        }
    });

    return (
        <ul className={style.BookContainerItems} id="BookContainer">
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