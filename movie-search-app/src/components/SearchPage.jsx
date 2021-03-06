import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import '../css/movie-list.css'

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [movieListDefault, setMovieListDefault] = useState();
  const [movieList, setMovieList] = useState();
  const URL = 'http://www.omdbapi.com/';
  const API_KEY = '&apikey=749bb216';
  
  const { search } = window.location;
   
  const fetchData = async () => {
    return await fetch(URL + search + API_KEY)
      .then(response => response.json())
      .then(data => {
         setMovieList(data.Search) 
         setMovieListDefault(data)
       });
    }

  const updateInput = async (input) => {
     const filtered = movieListDefault.filter(movie => {
      return movie.title.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setMovieList(filtered);
  }

  // eslint-disable-next-line
  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <div className="search-div">
          <SearchBar 
            input={input}
            onChange={updateInput}
          />
      </div>
      
      <div className="centered" style={{width: '60%', Margin: '0px auto', textAlign:'center'}}>
            <MovieList movieList={movieList}/>
      </div>
    
    </>
   );
}

export default SearchPage