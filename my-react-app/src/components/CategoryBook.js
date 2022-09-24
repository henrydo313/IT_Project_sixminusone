import PropTypes from 'prop-types';
import style from './CSS/categorybook.module.css'


const CategoryBook = ({books}) => {
    return (
        <div className={style.Book}>
            <div className={style.BookLeft}>
                <div className={style.BookImage}>
                    <img src={books.image} alt=''/>
                </div>
                <div className={style.BookTitle}>
                    {books.name}
                </div>
                <div>
                    {books.desc}
                </div>
            </div>
            <div className={style.BookRight}>
                <div className={style.BookCategory}>
                    Category
                </div>
            </div>
        </div>
    );
}

CategoryBook.propType = {
    books: PropTypes.object.isRequired,
}

export default CategoryBook
