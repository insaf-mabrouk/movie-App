
import React,{useState} from 'react'
import data from './Movies';


const Description =(movie) => {
    const [description, setDescription] = useState(data)
    const [movies, setMovies] = useState(data)
    console.log(movies,'movies')
    

    
    return (
        <div>
            <h1>Description</h1>
            <ul>{movies.map(el=><li>{el.description}</li>)}</ul>
            
        </div>
    )
}
export default Description
