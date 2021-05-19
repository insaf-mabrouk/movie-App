import React, {useState} from 'react'
import Filter from './components/Filter'
import MovieList from './components/MovieList'
import MovieAdd from './components/MovieAdd';
import data from './components/Movies';

const Home = () => {

  const [movies, setMovies] = useState(data)
  const [ratingSearch, setRatingSearch] =useState("")
  const [titleSearch, setTitleSearch] =useState("")

  let joinMovie=(newMovie, e)=>{
    e.preventDefault()
    setMovies([...movies,newMovie])
  };
  
    return (
        <div>
            <br/>
            <Filter ratingSearch={ratingSearch} setRatingSearch={setRatingSearch} titleSearch={titleSearch} setTitleSearch={setTitleSearch}/>
            <br/>
            <MovieAdd joinMovie={joinMovie} />
            <br/>
            <MovieList  movies ={movies} titleSearch={titleSearch} ratingSearch={ratingSearch}/>
            
            
        </div>
    )
}

export default Home
