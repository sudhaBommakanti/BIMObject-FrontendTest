import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [movieListDefault, setMovieListDefault] = useState();
  const [movieList, setMovieList] = useState();
  const URL = 'http://www.omdbapi.com/';
  const API_KEY = '&apikey=749bb216';
  const RESP = '&r=json'

  const { search } = window.location;
  console.log("search value:", search);
  const query = new URLSearchParams(search).get('s');
  console.log("query:",query);

  const fetchData = async () => {
    return await fetch(URL + search + API_KEY + RESP)
      .then(response => response.json())
      .then(data => {
          console.log("result: ",data);
         setMovieList(data.Search) 
         setMovieListDefault(data)
       });
    }

  const updateInput = async (input) => {
     console.log("input data:",input);
     const filtered = movieListDefault.filter(movie => {
      return movie.title.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setMovieList(filtered);
  }

  
  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Movie Info</h1>
      <SearchBar 
       input={input}
      // onChange={this.handleChange}
       
    onChange={updateInput}
      />
    <MovieList movieList={movieList}/>
    </>
   );
}

export default SearchPage