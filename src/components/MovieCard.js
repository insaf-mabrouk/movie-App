import React from 'react'
import { Card , Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ReactStars from "react-rating-stars-component";

const MovieCard = ({movie}) => {
    
    
    return (
        <div className="Moviecard" >
            
    <Card style={{ width: '18rem' , boxShadow: "0 0 4px 8px rgba(0,0,0,0.3)"}}>
    <Card.Img variant="top" src={movie.poster} style={{display: "block",marginLeft: "auto",marginRight: "auto"}} />
    <Card.Body>
      <Card.Title style={{textAlign:"center"}}>{movie.title}</Card.Title>
      <Card.Text style={{textAlign:"center"}}>
      {movie.description}
      </Card.Text>
      <Card.Text >
          <ReactStars  value={movie.rating}  size={24} isHalf={true} style={{display: "block",marginLeft: "auto",marginRight: "auto"}}/>
      </Card.Text>
      <Button variant="primary" style={{display: "block",marginLeft: "auto",marginRight: "auto"}} >Add to watch list</Button>
    </Card.Body>
  </Card>

        </div>
    )
}
MovieCard.defaultProps={
    poster:"https://www.popcorn.app/assets/app/images/placeholder-movieimage.png",
    title:"insert title",
    description: "insert description"
}


export default MovieCard
