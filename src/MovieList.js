import { useState } from 'react';
import { Movie } from './Movie';

export function MovieList({ movieList, setMovieList }) {
  const [name,setName] = useState("");
  const [poster,setPoster] = useState("");
  const [rating,setRating] = useState("");
  const [summary,setSummary] = useState("");

  return (
    <div>
      <div className='add-movie-form'>
        <input type="text " placeholder="Name" onChange={(event) => setName (event.target.value)}/> 
        {/* {name} */}
        <input type="text" placeholder="Poster" onChange={(event) =>setPoster (event.target.value)} />
        <input type="text" placeholder="Rating" onChange={(event) =>setRating (event.target.value)} />
        <input type="text" placeholder="Summary" onChange={(event) =>setSummary (event.target.value)} />
        
        {/* copy the movieList and add newMovie to it */}
        <button onClick={() => {
          const newMovie = {
            name: name,
            poster: poster ,  
            rating : rating ,
            summary : summary,
          };
          console.log(newMovie);
          setMovieList([...movieList,newMovie])

        }}>Add movie</button>
        
      </div>

    
    <div className="movie-list-container">
      {movieList.map((mv,index) => (
        <Movie movie={mv} key={index}/>
      ))}
    </div>
    </div>
  );
}
