
export default function searchBar() {
    return (
        <Layout>
            <div className={style.searchContainer}>
                <input type='search' id={style.searchBar} placeholder="Search for a book here" onChange={updateInput}></input>
            </div>
        </Layout>
    )
}
