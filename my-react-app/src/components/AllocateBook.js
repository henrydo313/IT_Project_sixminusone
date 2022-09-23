import React from 'react';
import Layout from './Layout';
import styles from "./CSS/allocate-return.module.css";
import bookCover from "./Images/BookCover/BookCover.jpg";
import Book from "./Book";
import {books} from "./StaticData/BooksData";

export default function AllocateBook() {

    var selectedBook;
    // selectedBook = books.

    return (
        <Layout>
            <div className={styles.formBody}>
                <div className={styles.formContainer}>
                    <form action="" className={styles.form} id="">
                        <h1 className={styles.formTitle}>Allocate Book</h1>

                        <div className={styles.inputBlock} id="borrowerBlock">
                            <label className={styles.inputTitle}>Select User</label>
                            <input list="users" name="user" className={styles.formInput} placeholder="Search user"/>
                            <datalist id="users">
                                <option value="User1"/>
                                <option value="User2"/>
                                <option value="User3"/>
                                <option value="User4"/>
                                <option value="User5"/>
                            </datalist>
                        </div>

                        <div className={styles.inputBlock} id="bookBlock">
                            <label className={styles.inputTitle}>Select Book</label>
                            <input list="books" name="book" className={styles.formInput} placeholder="Search book"/>
                            <datalist id="books">
                                {books.map(books=> 
                                    <option>
                                        <Book books={books}/>
                                    </option>
                                )}
                            </datalist>
                        </div>

                        <img src={bookCover} alt="Book Cover" className={styles.coverImage}/>
                        {/* <img src={books[id].image} alt={books[id].alttext} className={styles.coverImage} /> */}

                        <div className={styles.buttonContainer}>
                            <input type="submit" className={styles.formButton + ' ' + styles.confirmButton} value="Confirm"/>
                            <input type="reset" className={styles.formButton + ' ' + styles.cancelButton} value="Cancel"/>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}