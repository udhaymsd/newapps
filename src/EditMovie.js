import { useParams } from "react-router-dom";

export function EditMovie() {
  const {id} = useParams()
  return (
    <div>
      <h1>Movie edit page :{id} </h1>
    </div>
  );
}
