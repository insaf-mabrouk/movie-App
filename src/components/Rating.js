import React from 'react';
import ReactStars from "react-rating-stars-component";



const Rating = ({rating,setRating,e}) => {
    
    return (
        <div>
            <ReactStars count={5}
            value={rating}
            onChange={e=>setRating(e.target.value)}
            
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"/>
        </div>
    )
}

export default Rating
