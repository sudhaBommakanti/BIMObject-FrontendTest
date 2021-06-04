import '../css/movie-list.css';

const SearchBar = (props) => {
    return (
    <div className="search-bar">
        <form className="check">
            <input style={{ borderRadius: '12px' }}
                type="text"
                id="header-search"
                placeholder="Search Movie By Title"
                name="s"
            />
            <button style={{ marginLeft: '0.5rem', borderRadius: '12px' }} type="submit">Search</button>
        </form>
        <button style={{ marginLeft: '0.5rem', borderRadius: '12px' }} type="submit" onClick={message}>Reset</button>
    </div>
    );
}

const message = () => {
    window.history.pushState("object or string", "Title", "/");
}

export default SearchBar;