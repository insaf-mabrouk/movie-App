import React from 'react';
import MovieCard from './MovieCard';
import '../App.css'



const MovieList = ({movies,titleSearch,ratingSearch}) => {
    
    return (
        <div className='listmovies'>
            
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
              {movies.filter(el=>el.title.toLowerCase().includes(titleSearch.toLowerCase().trim())
               && el.rating >=(ratingSearch)
              ).map((movie)=>(<MovieCard movie={movie}/>))}
         </div>  
        </div>
    )}
export default MovieList;
