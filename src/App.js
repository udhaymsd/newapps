import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  return (
    <div className="App">
  <Welcome name="Benyl" 
   pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq3jk4JTW9sCsxGOF-xtCwClj-dAg2r4AKNhSoU_ps9JbkjvW3VUsWPrF4-ZqINhLY_SU8-V5wTYA&usqp=CAU&ec=48600112"/>
   <Welcome name="udhayakumar"
    pic="https://w0.peakpx.com/wallpaper/231/971/HD-wallpaper-cool-king-kolor-neon.jpg"/>
   <Welcome name="ravi"
    pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNr8nIxC3GhoCgXSe5R7Laa9QPvmv-jIhZec3O9GXXnQ&usqp=CAU&ec=48600112"/>
    


    </div>
  );
}


function Counter(){
  // let like = 10;
  // const[state,setState] - useState(InitialValue);
  // state - current value
  // setState - function - update state
  const [like,setLike] = useState(0);
  const [disLike,setDisLike] =useState(0);
  //camelCase -onclick - onClick
  return (
  <div>
  <button onClick={() => setLike(like + 1)}>👍 {like}</button>
<button onClick={() => setDisLike(disLike + 1)}> {disLike} 👎 </button>
  {/* <p>{like}</p> */}
  </div>
  );
}





// function --> Componet
// 1. Componet must start with a capital letter
// 2. It must return one JSX element


//Welcome - Component Definition / Declaration

function Welcome (props){
  // const name = "udhaya"
  // console.log(props);
  return ( <div>
    <img className = "profile-pic" 
    src={props.pic} alt={props.name} />
<h1>hello, {props.name} 🖐🏻 👌  </h1>
<Counter/>
  </div>
  );
}


export default App;
