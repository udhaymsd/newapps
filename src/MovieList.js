import { Movie } from './Movie';
import { AddMovie } from './AddMovie';
import { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  

  const getMovies = () => {
    fetch("https://649713dc83d4c69925a365b3.mockapi.io/movieProject",{
      method: "GET",
    }) 
    .then((data) => data.json())
     .then((mvs) => setMovieList(mvs));
  }

  

  useEffect(() =>{ getMovies();
  } ,[]);

  const navigate = useNavigate();
 
const deleteMovie = (id) => {
console.log("Deleting movie...",id);
//Delete -> Refresh data
fetch(`https://649713dc83d4c69925a365b3.mockapi.io/movieProject/${id}`,
   {method:"DELETE",}).then(() => getMovies());
  
  //  getMovies();
  };



  return (
    <div>
     
    <div className="movie-list-container">
      {movieList.map((mv,index) => (
        <Movie movie={mv} key={mv.id} id={mv.id}
        deleteBtn={<IconButton color='error' style={{marginLeft:"auto"}} onClick={() => deleteMovie(mv.id) } aria-label='delete a movie'><DeleteIcon/></IconButton>}
      editBtn = {<IconButton color='secondary' onClick={() => navigate (`/movies/edit/${mv.id}`) } aria-label='edit a movie'><EditIcon/></IconButton>}

     />
     ))}
    </div>
    </div>
  );
}


