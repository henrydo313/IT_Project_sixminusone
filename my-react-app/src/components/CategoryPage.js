import CategoryContainer from "./CategoryContainer";
import Layout from "./Layout";
import {books} from './StaticData/BooksData';
import Style from './CSS/categoryPage.module.css';
import { useParams } from "react-router-dom";


export default function CategoryPage() {
    const { category } = useParams();

    return(
        <Layout>
            <div className={Style.CategoryContainer}>
                <CategoryContainer Books={books} CategoryType={category}/>
            </div>
            <div>
                {category}
            </div>
        </Layout>
    )
}