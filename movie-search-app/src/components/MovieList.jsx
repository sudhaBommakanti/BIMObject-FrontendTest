import React from 'react';

const MovieList = ({movieList=[]}) => {
  return (
    <>
    { movieList.map((data,index) => {
        console.log("data in movie list:",data);
        if (data) {
          return (
            <div key={data.name}>
              <h1>{data.Title}</h1>
              <p>{data.Year}</p>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default MovieList