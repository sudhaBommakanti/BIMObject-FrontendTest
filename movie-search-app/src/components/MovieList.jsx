import React from 'react';
import MovieCard from './MovieCard';
import { ListGroup } from 'react-bootstrap';
import '../css/movie-list.css'

const MovieList = ({ movieList = [] }) => {
    return (
        <>
            { movieList.map((data, index) => {
                console.log("data in movie list:", data);
                if (data) {
                    return (
                        <div className="content-section">
                            <div className="content-image">
                                <img src={data.Poster} alt="Logo" />
                            </div>
                            <div className="content-data">
                                <h2 style={{fontSize: '22px'}}>{data.Title}</h2>
                                <h3 style={{fontSize: '18px'}}>{data.Type} - {data.Year}</h3>
                                <p>Lorem ipsum....</p>

                            </div>
                            <hr className="star-primary" />
                        </div>

                    )
                }
                return null
            })}
        </>
    );
}

export default MovieList