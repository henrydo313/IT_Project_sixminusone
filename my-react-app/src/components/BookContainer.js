import React, { useRef } from "react";
import PropTypes from 'prop-types';
import Book from "./Book";
import style from "./CSS/bookContainer.module.css";
import leftArrow from "./Images/leftarrow.png";
import rightArrow from "./Images/rightarrow.png";


export default function BookContainer({Books}) {
    const container = useRef();
    const scroll = (scrollStrength) => {
        container.current.scrollLeft -= scrollStrength;
    }

    

    return (
        <div className={style.BooksAndArrows}>
            <img className={style.Arrows} id={style.leftArrow} src={leftArrow} alt="leftArrow" onClick={() => scroll(500)}/>
            <ul className={style.BookContainerItems} id="container" ref={container}>
                {Books.map(Books=> 
                    <li key={Books.id} className={style.BookContainerItem}>
                        <Book books={Books}/>
                    </li>    
                )}
            </ul>
            <img className={style.Arrows} id={style.rightArrow} src={rightArrow} alt="rightArrow" onClick={() => scroll(-500)}/>
        </div>
    );
}


BookContainer.propTypes = {
    Books: PropTypes.array.isRequired
};
