import { Movie } from './Movie';
import { AddMovie } from './AddMovie';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { API } from './global';

export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  

  const getMovies = () => {
    fetch(`${API}/movies`,{
      method: "GET",
    }) 
    .then((data) => data.json())
     .then((mvs) => setMovieList(mvs));
  }

  

  useEffect(() =>{ getMovies();
  } ,[]);

  const navigate = useNavigate();
 
const deleteMovie = (id) => {
console.log("Deleting movie...", id);
//Delete -> Refresh data
fetch(`${API}/movies/${id}`,
   {method:"DELETE",}).then(() => getMovies());
  
  //  getMovies();
  };



  return (
    <div>
     
    <div className="movie-list-container">
      {movieList.map((mv,index) => (


        <Movie movie={mv} key={mv._id} id={mv._id}
        deleteBtn={<IconButton color='error' style={{marginLeft:"auto"}} onClick={() => deleteMovie(mv._id) } aria-label='delete a movie'><DeleteIcon/></IconButton>}
      editBtn = {<IconButton color='secondary' onClick={() => navigate (`/movies/edit/${mv._id}`) } aria-label='edit a movie'><EditIcon/></IconButton>}

     />
     ))}
    </div>
    </div>
  );
}


