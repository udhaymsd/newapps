import { Movie } from './Movie';
import { AddMovie } from './AddMovie';
import { useEffect, useState } from 'react';

export function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch("https://649713dc83d4c69925a365b3.mockapi.io/movieProject",{
      method: "GET",
    }) 
    .then((data) => data.json())
     .then((mvs) => setMovieList(mvs));
  }

  

  useEffect(() =>{ 
    getMovies();
   } ,[]);
 
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
        deleteBtn={<button onClick={() => deleteMovie(mv.id) }>Delete</button>}/>
      ))}
    </div>
    </div>
  );
}


