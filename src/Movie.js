import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


export function Movie({ movie, id, deleteBtn }) {
//conditional styling
const styles = {
color: movie.rating > 8 ? "green" : "red",
};

const [show, setShow] = useState("true");
const paraStyles = {
  display: show ? "block" : "none",
};

const navigate = useNavigate();


  return (
    <Card className='movie-container'>
      <img src={movie.poster} alt={movie.name} className='movie-poster' />
     
     
      <CardContent>
      <div className='movie-specs'>
        <h2 className='movie-rating'>{movie.name} 


        <IconButton color="primary" onClick={() =>setShow(!show)} aria-label="Toggle Summary">{ show ? <ExpandLessIcon/> :<ExpandMoreIcon/>}
      </IconButton> 
   {/* {movies/2} */}
   <IconButton color="primary" onClick={() => navigate (`/movies/${id}`)}
      aria-label="add to Goto movie info">
  <InfoIcon />
</IconButton>
</h2>
        <p style={styles} className='movie-rating'>⭐ {movie.rating} </p>
      </div>
      
     
      
  
      {/* <p style={paraStyles} className='movie-summary'>{movie.summary}</p> */}

{/* Conditional Rendering */}
{show ? <p className="movie.summary">{movie.summary}</p> : null}
</CardContent>
<CardActions>
<Counter /> {deleteBtn}
</CardActions>
    </Card>
  );
}
