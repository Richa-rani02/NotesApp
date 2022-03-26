import "./Search.css";
export const Search = () => {
    return (
        <>
            <form action="" className="search-form" >
                <input type="search" id="search-box" placeholder="search here..."
                    value="" />
                <label htmlFor="search-box" className="fas fa-search"></label>
            </form>
        </>
    )
}