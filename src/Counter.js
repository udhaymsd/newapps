import { useState } from "react";

//DRY - DONOT REPEAT YOURSELF
export function Counter() {
  // let like = 10;
  // const[state,setState] - useState(InitialValue);
  // state - current value
  // setState - function - update state
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  //camelCase -onclick - onClick
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDisLike(disLike + 1)}> {disLike} 👎 </button>
      {/* <p>{like}</p> */}
    </div>
  );
}
