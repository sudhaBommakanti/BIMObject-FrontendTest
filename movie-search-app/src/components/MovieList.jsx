import React from 'react';
import '../css/movie-list.css'

const MovieList = ({ movieList = [] }) => {
    return (
        <>
            { movieList.map((data, index) => {
                if (data) {
                    return (
                        <div key={index} className="content-section">
                            <div className="content-image">
                                <a href={`search-page-details/i=${data.imdbID}`}>
                                    <img src={data.Poster} alt="Logo" />
                                </a>
                            </div>
                            <div className="content-data">
                                <h2 style={{ fontSize: '22px' }}>{data.Title}</h2>
                                <h3 style={{ fontSize: '18px' }}>{data.Type} - {data.Year}</h3>
                            </div>
                            {/* <hr className="star-primary" /> */}
                        </div>

                    )
                }
                else {
                    return <p>No Data was returned!</p>;
                }

            })}

        </>
    );
}

export default MovieList