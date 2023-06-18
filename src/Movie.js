import { useState } from "react";

export function Movie({ movie }) {
//conditional styling
const styles = {
color: movie.rating > 8 ? "green" : "red",
};

const [show, setShow] = useState("true");
const paraStyles = {
  display: show ? "block" : "none",
};
  return (
    <div className='movie-container'>
      <img src={movie.poster} alt={movie.name} className='movie-poster' />
      <div className='movie-specs'>
        <h2 className='movie-rating'>{movie.name} </h2>
        <p style={styles} className='movie-rating'>⭐ {movie.rating} </p>
      </div>
      <button onClick={() =>setShow(!show)}> Toggle Summary </button>
      <p style={paraStyles} className='movie-summary'>{movie.summary}</p>

{/* Conditional Rendering */}
{/* {show ? <p className="movie.summary">{movie.summary}</p> : null} */}


    </div>
  );
}
