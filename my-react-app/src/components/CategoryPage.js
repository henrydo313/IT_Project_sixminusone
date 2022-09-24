import CategoryContainer from "./CategoryContainer";
import Layout from "./Layout";
import {books} from './StaticData/BooksData';
import Style from './CSS/categoryPage.module.css';

export default function CategoryPage() {

    return(
        <Layout>
            <div className={Style.CategoryContainer}>
                <CategoryContainer Books={books}/>
            </div>
        </Layout>
    )
}