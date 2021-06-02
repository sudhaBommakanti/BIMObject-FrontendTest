const SearchBar = () => (
    <form action="/" method="get">
        <input style={{ borderRadius: '12px' }}
            type="text"
            id="header-search"
            placeholder="Search Movie By Title"
            name="s"
        />
        <button style={{ marginLeft: '0.5rem', borderRadius: '12px' }} type="submit">Search</button>
    </form>
);

export default SearchBar;