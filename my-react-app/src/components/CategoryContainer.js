import CategoryBook from "./CategoryBook";
import style from './CSS/categoryContainer.module.css';
import upArrow from "./Images/uparrow.png";
import downArrow from "./Images/downarrow.png";


export default function CategoryContainer({Books}, {CategoryType}) {
    // function checkCategory(categoryType) {
    //     Books.filter( (categoryType, Books) => Books.category == categoryType);
    // }


    return (
        <>
        <div className={style.ArrowsAndBooks}>
            <div className={style.Arrows}>
                <img  id={style.upArrow} src={upArrow} alt="upArrow" />
            </div>
            <ul className={style.CategoryContainerItems} id="container" >
                {Books.map(Books=> 
                    <li key={Books.id} className={style.CategoryContainerItem}>
                        <CategoryBook books={Books}/>
                    </li>
                )}
            </ul>
            <div className={style.Arrows} >
                <img id={style.downArrow} src={downArrow} alt="downArrow" />
            </div>
        </div>
        </>
    );
}