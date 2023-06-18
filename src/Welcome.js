import { Counter } from './Counter';

// function --> Componet
// 1. Componet must start with a capital letter
// 2. It must return one JSX element
//Welcome - Component Definition / Declaration
function Welcome(props) {
  // const name = "udhaya"
  // console.log(props);
  return (<div>
    <img className="profile-pic"
      src={props.pic} alt={props.name} />
    <h1>hello, {props.name} 🖐🏻 👌  </h1>
    <Counter />
  </div>
  );
}
