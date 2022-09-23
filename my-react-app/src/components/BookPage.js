import { useParams } from "react-router-dom";
import Layout from "./Layout";
import {books} from "./StaticData/BooksData";
import style from "./CSS/bookpage.module.css";

export default function BookPage() {
    const { id } = useParams();
    return (
        <Layout>
            <div className={style.Container}>
                <div className={style.imgCol}>
                <img src={books[id].image} alt={books[id].alttext} />
                </div>
                <div className={style.bookCol}>
                <h1>{books[id].name}</h1>
                <h2>by James Clear</h2>
                <p>{books[id].desc}</p>
                </div>
            </div>
            <div className={style.buttonContainer}>
                <input type="button" className={style.Button} id="editButton" value="Reserve Book" />
            </div>
        </Layout>
    )
} 