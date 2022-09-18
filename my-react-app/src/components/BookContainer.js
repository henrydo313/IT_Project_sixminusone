import React from "react";
import PropTypes from 'prop-types';
import Book from "./Book";
import style from "./CSS/bookContainer.module.css";
import leftArrow from "./Images/leftarrow.png";
import rightArrow from "./Images/rightarrow.png";

export default function BookContainer({Books}) {
    const scrollStrength = 100;
    const container = document.getElementById("BookRow");
    if(container != null)
    {
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
    }


    return (
        <div>
            <img className="Arrow" id="leftArrow" src={leftArrow} alt="leftArrow"/>
            <ul className={style.BookContainerItems} id="BookRow">
                {Books.map(Books=> 
                    <li key={Books.id} className={style.BookContainerItem}>
                        <Book books={Books}/>
                    </li>    
                )}
            </ul>
            <img className="Arrow" id="leftArrow" src={rightArrow} alt="rightArrow"/>
        </div>
    );
}

BookContainer.propTypes = {
    Books: PropTypes.array.isRequired
};
