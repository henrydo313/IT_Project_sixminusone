import CategoryBook from "./CategoryBook";
import Style from './CSS/categoryContainer.module.css';

export default function CategoryContainer({Books}) {
    return (
        <ul className={Style.CategoryContainerItems} id="container" >
            {Books.map(Books=> 
                <li key={Books.id} className={Style.CategoryContainerItem}>
                    <CategoryBook books={Books}/>
                </li>
            )}
        </ul>
    );
}

