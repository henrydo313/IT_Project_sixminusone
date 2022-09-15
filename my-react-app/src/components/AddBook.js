import Layout from "./Layout";
import style from "./CSS/addbook.module.css";

export default function AddBook() {
    return (
        <Layout>
            <div className={style.AddBookLabel}>Add Book</div>
            <div className={style.AddBookContainer}>
                <div className={style.BookInfoLabel}>Book Information</div>
                <div className={style.BookNameAndCategory}>
                    <div className={style.Labels}>
                        <div className={style.Label}>book Name</div>
                        <div className={style.Label}>Category</div>
                    </div>
                    <div className={style.Inputs}>
                        <input type="text" name={style.BookName} id={style.input} placeholder="Enter the book's name here"/>
                        <input type="text" name={style.BookCategory} id={style.input} placeholder="Enter the book's category here"/>
                    </div>
                </div>
                <div className={style.BookAuthorAndISBN}>
                    <div className={style.Labels}>
                        <div className={style.Label}>Author</div>
                        <div className={style.Label}>ISBN</div>
                        
                    </div>
                    <div className={style.Inputs}>
                        <input type="text" name={style.BookAuthor} id={style.input} placeholder="Enter the book's author here"/>
                        <input type="text" name={style.BookISBN} id={style.input} placeholder="Enter the book's ISBN here"/>
                    </div>
                </div>
                <div className={style.BookPriceAndCover}>
                    <div className={style.Labels}>
                        <div className={style.Label}>Price</div>
                        <div className={style.Label}>Cover</div>
                    </div>
                    <div className={style.Inputs}>
                        <input type="text" name={style.BookPrice} id={style.input} placeholder="Enter the book's Price here"/>
                        <div className={style.AddCoverContainer}>
                            <input type="button" name={style.button} id={style.button} value="Add Cover"/>
                            <div className={style.CoverText}>test</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.submit}>
                <input type="button" className={style.submitButton} name={style.submitButton} id={style.submitButton} value="Submit"/>
            </div>
        </Layout>
    )
}