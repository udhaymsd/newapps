import{useFormik} from "formik";
import * as yup from "yup";


const formvalidationSchema = yup.object({
  email: yup
  .string()
  .min(5,"Need a longer email")
  .email("Please provide vaild email")
  .required("Why not fill this email ?"), 
  password:yup
  .string()
  .min(8, "Need a loger password")
  .max(12, "Too much password").
  required("Why not fill this password ?"),
});



export function BasicForm() {
const {handleSubmit,values,handleChange,handleBlur,touched,errors} = useFormik({
  initialValues: {email: "joe@gmail", password:""},
  validationSchema: formvalidationSchema,
  onSubmit: (values) => {
    console.log("onSubmit", values);
  }
});
  return (
    <form onSubmit={handleSubmit}>
      <input name="email"
       value={values.email}
        onChange={handleChange} 
        onBlur={handleBlur}
        type="email" placeholder="email" />   
         {touched.email && errors.email ? errors.email : null}
   <input name="password"value={values.password}
    onChange={handleChange}
     onBlur={handleBlur} type="password"
      placeholder="password" />    
         {touched.password &&errors.password ? errors.password : null}
{/* <pre>Values:{JSON.stringify(formik.values)}</pre>
      <pre>Error:{JSON.stringify(formik.errors)}</pre>
      <pre>Touched;{JSON.stringify(formik.touched)}</pre> */}
      <button type="submit">Submit</button>
    </form>
  );
}
