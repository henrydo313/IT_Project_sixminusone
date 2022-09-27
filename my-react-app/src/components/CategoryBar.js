import style from './CSS/categoryBar.module.css';
import { Link } from "react-router-dom";
import { categories } from './StaticData/CategoryData';

export default function CategoryBar() {
    return (
        <div className={style.Categories}>
            <Link to={`/category/${categories[0].categoryName}`}>
                <img className={style.CategoryImage} src={categories[0].image} alt='BusinessAndEcon'/>
            </Link>
            <Link to={`/category/${categories[1].categoryName}`}>
                <img className={style.CategoryImage} src={categories[1].image} alt='Education'/>
            </Link>
            <Link to={`/category/${categories[2].categoryName}`}>
                <img className={style.CategoryImage} src={categories[2].image} alt='Literature'/>
            </Link>
            <Link to={`/category/${categories[3].categoryName}`}>
                <img className={style.CategoryImage} src={categories[3].image} alt='Science'/>
            </Link>
            <Link to={`/category/${categories[4].categoryName}`}>
                <img className={style.CategoryImage} src={categories[4].image} alt='Health'/>
            </Link>
            <Link to={`/category/${categories[5].categoryName}`}>
                <img className={style.CategoryImage} src={categories[5].image} alt='Law'/>
            </Link>
        </div>
    )
}