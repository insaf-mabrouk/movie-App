import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';


const Addmovie = ({joinMovie}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[title,setTitle]=useState('')
  const[poster,setPoster]=useState('')
  const[description,setDescription]=useState('')
  const[rating,setRating]=useState('')

  const handleSubmit=(e)=>{
     let newMovie={
          title: title,
          poster: poster,
          description: description,
          rating: rating,
          id: Math.random()
        }
     joinMovie(newMovie,e)
        setTitle('')
        setPoster('')
        setDescription('')
        setRating('')
    }
  return (
        <div>
      <Button className= "secondary" variant="secondary" onClick={handleShow} style={{justifyContent:"center"}}>
        Add movie
      </Button>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
             <div>
            <div>
                <label className="input">Title:</label>
                <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            </div>
            <div>
                <label className="input" >Poster:</label>
                <input type="text" name="poster" value={poster} onChange={(e)=>setPoster(e.target.value)}></input>
            </div>
            <div>
                <label className="description" >Description:</label>
                <input type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}></input>
            </div>
            <div>
            <label className="rating" >Rating:</label>
              <input type="number" name="rating" value={rating} onChange={(e)=>setRating(e.target.value)}></input>
            </div>
            </div>
            </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>  
        </Modal.Footer>
      </Modal>
      </div>
  ) };
export default Addmovie
