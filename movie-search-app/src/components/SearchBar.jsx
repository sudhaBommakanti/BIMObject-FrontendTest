const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            {/* <span className="visually-hidden">Search blog posts</span> */}
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="By Title"
            name="s" 
            
        />
        <input
            type="text"
            id="header-search"
            placeholder="Year"
            name="y" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;