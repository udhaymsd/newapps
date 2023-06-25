import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


//DRY - DONOT REPEAT YOURSELF
export function Counter() {
  // let like = 10;
  // const[state,setState] - useState(InitialValue);
  // state - current value
  // setState - function - update state
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  //camelCase -onclick - onClick

  // useEffect (() => {
  //     console.log("Like value is",like);  
  // },[like])


  return (
    <div>
      <IconButton color="primary" onClick={() => setLike(like + 1)}
      aria-label="like movie">  
      <Badge badgeContent={like} color="primary">
      👍
</Badge>

</IconButton>
<IconButton color="error" onClick={() => setDisLike(disLike + 1)} 
      aria-label="like movie">  
 <Badge badgeContent={disLike} color="error">
 👎
</Badge>

</IconButton> 
    
      {/* <p>{like}</p> */}
    </div>
  );
}
