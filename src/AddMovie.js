import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from "yup";
import { API } from './global';



const movieVadlidationSchema = yup.object ({
  name: yup.string().required("Why not fill this name "), 
  poster: yup.string().required("Why not fill this poster ").min(4),
  rating: yup.number().required("Why not fill this rating ").min(0).max(10), 
  summary:yup.string().required("Why not fill this summary ").min(20), 
  trailer:yup.string().required("Why not fill this trailer ").min(4), 

});






export function AddMovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const {handleSubmit,values,handleChange,handleBlur,touched,errors} = 
  useFormik({
    initialValues: {name: "", poster:"", rating:"", summary:"",trailer:""},
    validationSchema : movieVadlidationSchema,
    onSubmit: (newMovie) => {
      console.log("onSubmit", newMovie);
      addMovie(newMovie)
    },
  });
 


  const navigate = useNavigate();

const addMovie = (newMovie) => {
//   const newMovie = {
//     name: name,
//     poster: poster,
//     rating: rating,
//     summary: summary,
//     trailer: trailer,
//   };
//   console.log(newMovie);

//   // //copy the movieList and add the newMovie to it.
//   // setMovieList([...movieList, newMovie]);


//   //Create - Post
//   //1. method- POST
//   //2. Body- data(JSON)
//   //3. Headers - JSON

  fetch(`${API}/movies/`,
{
method:"POST",
body:JSON.stringify(newMovie),
headers: {
"Content-Type": "application/json",
},
}).then(() => navigate("/movies"));


}


  return (
    <form onSubmit={handleSubmit}className='add-movie-form'>
      <TextField error={touched.name && errors.name} 
      helperText= {touched.name && errors.name ? errors.name : null}
      label="Name" variant="outlined" 
      name='name'
      value={values.name}
      onBlur={handleBlur}
      onChange={handleChange} />
   
      {/* {name} */}
      <TextField error={touched.poster && errors.poster} 
      helperText={touched.poster && errors.poster ? errors.poster : null} 
      label="Poster" variant="outlined" name='poster'
      value={values.poster}
      onBlur={handleBlur}
      onChange={handleChange} />
       
      <TextField error={touched.rating && errors.rating}
      helperText = {touched.rating && errors.rating ? errors.name : null}
      label="Rating" variant="outlined" name='rating'
      value={values.rating}
      onBlur={handleBlur}
      onChange={handleChange} />
      
      <TextField error={touched.summary && errors.summary}
      helperText= {touched.summary && errors.summary ? errors.summary : null}
      label="Summary" variant="outlined" name='summary'
      value={values.summary}
      onBlur={handleBlur}
      onChange={handleChange} />
       
      <TextField error={touched.trailer && errors.trailer}
      helperText =  {touched.trailer && errors.trailer ? errors.trailer : null}
      label="Trailer" variant="outlined" name='trailer'
      value={values.trailer}
      onBlur={handleBlur}
      onChange={handleChange}/>
 
      {/* copy the movieList and add newMovie to it */}

      <pre>Values:{JSON.stringify(values)}</pre>
      <pre>Error:{JSON.stringify(errors)}</pre>
      <pre>Touched;{JSON.stringify(touched)}</pre> 

      <Button type='submit'
      variant="contained">Add movie</Button>
    </form>

 

  );

}