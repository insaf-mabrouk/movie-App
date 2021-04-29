import React from 'react'
import { Card , Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ReactStars from "react-rating-stars-component";
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
import Description from './Description'
import RouterApp from './RouterApp'

const MovieCard = ({movie}) => {
    
    
    return (
        <div className="Moviecard" >
            
    <Card style={{ width: '18rem' , boxShadow: "0 0 4px 8px rgba(0,0,0,0.3)"}}>
    <Card.Img variant="top" src={movie.poster} style={{display: "block",marginLeft: "auto",marginRight: "auto"}} />
    <Card.Body>
      <Card.Title style={{textAlign:"center"}}>{movie.title}</Card.Title>

      <Router>
        <Switch>
        
        
        <Link to={`/description/${movie.id}`}>Read the description</Link>
       
        
        
        </Switch>
        </Router>
    
      
      <Card.Text style={{textAlign:"center"}}>
      {movie.description}
      </Card.Text>
      <Card.Text >
          <ReactStars  value={movie.rating}  size={24} isHalf={true} style={{display: "block",marginLeft: "auto",marginRight: "auto"}}/>
      </Card.Text>
      <Button variant="secondary" style={{display: "block",marginLeft: "auto",marginRight: "auto"}} >watch trailer</Button>
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
