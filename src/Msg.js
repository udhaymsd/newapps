
// export 
function Msg (props){
    // const name = "udhaya"
    // console.log(props);
    return ( <div>
  <h1>hello, {props.name} 🖐🏻 👌  </h1>
    </div>
    );
  }
 const double = (n) => n *2;

export {Msg,double}; //namd exports

export default Msg; //default exports

//   1.named exports/imports
//   2.default imports/exports