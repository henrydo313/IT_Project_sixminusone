import React from "react";
import PropTypes from 'prop-types';
import Book from "./Book";
import style from "./CSS/bookContainer.module.css";
import leftArrow from "./Images/leftarrow.png";
import rightArrow from "./Images/rightarrow.png";
import { useRef } from "react";

export default function BookContainer({Books}) {
    const container = useRef();
    const scroll = (scrollStrength) => {
        container.current.scrollLeft -= scrollStrength;
    }

    const scrollWheel = (e) => {
        const scrollStrength = 500;
        if(e.deltaY > 0) {
            container.current.scrollLeft += scrollStrength
        }
        else {
            container.current.scrollLeft -= scrollStrength
        }
    }
    return (
        <div className={style.BooksAndArrows}>
            <img className={style.Arrows} src={leftArrow} alt="leftArrow" onClick={() => scroll(500)}/>
            <ul className={style.BookContainerItems} ref={container} onWheel={e => scrollWheel(e)}>
                {Books.map(Books=> 
                    <li key={Books.id} className={style.BookContainerItem}>
                        <Book books={Books}/>
                    </li>    
                )}
            </ul>
            <img className={style.Arrows} src={rightArrow} alt="rightArrow" onClick={() => scroll(-500)}/>
        </div>
    );
}


BookContainer.propTypes = {
    Books: PropTypes.array.isRequired
};
