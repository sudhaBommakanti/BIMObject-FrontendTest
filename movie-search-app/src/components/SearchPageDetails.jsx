import React, { useState, useEffect } from 'react';

import '../css/search-details.css'

const SearchPageDetails = (props) => {

    const URL = 'http://www.omdbapi.com/?';
    const API_KEY = '&apikey=749bb216';
    const imdbID = props.match.params.id;
    
    const [movieDetails, setMovieDetails] = useState('');
    
    const fetchData = async () => {
        return await fetch(URL + imdbID + API_KEY)
          .then(response => response.json())
          .then(data => {
             setMovieDetails(data)
           });
    }
    
     // eslint-disable-next-line
    useEffect( () => {fetchData()},[]);
   
    return (
        <>
            <div className="search-details-div">
                <div className="search-details-heading">
                    <h1 className="movie-details-heading">{movieDetails.Title}</h1>
                </div>
               <div className="search-details-data">
                    <div className="movie-image-div">
                        <img className="movie-image" src={movieDetails.Poster} alt="logo"></img>
                    </div>
                    <div className="movie-data-div">
                        <p className="movie-data-plot"><b>Plot - </b>{movieDetails.Plot}</p>
                        <p><b>Date Released - </b>{movieDetails.Released}</p>
                        <p><b>Movie Runtime - </b>{movieDetails.Runtime}</p>
                        <p><b>Actors - </b>{movieDetails.Actors}</p>
                        <p><b>Awards - </b>{movieDetails.Awards}</p>
                        <p><b>Genre - </b>{movieDetails.Genre}</p>
                        <p><b>Writer - </b>{movieDetails.Writer}</p>
                        <p><b>Director - </b>{movieDetails.Director}</p>
                        <p><b>IMDB-Rating - </b>{movieDetails.imdbRating}</p>
                       </div>
                </div>
            </div>
        </>
    );
}

export default SearchPageDetails