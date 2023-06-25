import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  return (
    <div className='add-movie-form'>
      <TextField label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
      {/* {name} */}
      <TextField label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} />
      <TextField label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />
      <TextField label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />
      <TextField label="Trailer" variant="outlined" onChange={(event) => setTrailer(event.target.value)} />

      {/* copy the movieList and add newMovie to it */}

      <Button onClick={() => {
        const newMovie = {
          name: name,
          poster: poster,
          rating: rating,
          summary: summary,
          trailer: trailer,
        };
        console.log(newMovie);
        setMovieList([...movieList, newMovie]);

      }} variant="contained">Add movie</Button>
    </div>



  );
}
;
