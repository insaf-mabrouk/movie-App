
import React, {useState} from 'react';

import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieAdd from './components/MovieAdd';
import data from './components/Movies';
import Filter from './components/Filter';


 function App(){
  const [movies, setMovies] = useState(data)
  const [ratingSearch, setRatingSearch] =useState("")
  const [titleSearch, setTitleSearch] =useState("")

  let joinMovie=(newMovie, e)=>{
    e.preventDefault()
    setMovies([...movies,newMovie])
  };
  

    return (
      <div className="App">
       <br/>
        <Filter ratingSearch={ratingSearch} setRatingSearch={setRatingSearch} titleSearch={titleSearch} setTitleSearch={setTitleSearch}/>
        
        <br/>
        <MovieList movies ={movies} titleSearch={titleSearch} ratingSearch={ratingSearch} />
        <br/>
        <MovieAdd joinMovie={joinMovie} />
        <br/>
        
        </div>
    )}
  export default App;

