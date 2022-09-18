import React from "react";
import PropTypes from 'prop-types';
import Book from "./Book";
import style from "./CSS/bookContainer.module.css";
import leftArrow from "./Images/leftarrow.png";
import rightArrow from "./Images/rightarrow.png";
import { useHorizontalScroll } from "./scripts/HorizontalScroll";

export default function BookContainer({Books}) {
    const horizontalScroll = useHorizontalScroll();
    return (
        <div className={style.BooksAndArrows}>
            <img className={style.Arrows} id="leftArrow" src={leftArrow} alt="leftArrow"/>
            <ul className={style.BookContainerItems} ref={horizontalScroll}>
                {Books.map(Books=> 
                    <li key={Books.id} className={style.BookContainerItem}>
                        <Book books={Books}/>
                    </li>    
                )}
            </ul>
            <img className={style.Arrows} id="leftArrow" src={rightArrow} alt="rightArrow"/>
        </div>
    );
}


BookContainer.propTypes = {
    Books: PropTypes.array.isRequired
};
