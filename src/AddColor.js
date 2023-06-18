import { useState } from "react";
import { ColorBox } from './ColorBox';

export function AddColor() {
  const [color, setColor] = useState("orange");
  const INITIAL_COLOR_LIST = ["pink", "plum", "purple"];
  const [colorList, setColorList] = useState(INITIAL_COLOR_LIST);
  const styles = {
    background: color,
    fontSize: "20px",
  };
  return (
    <div>
      <input style={styles} type="text" onChange={(event) => setColor(event.target.value)} placeholder="Enter a color" value={color} />

      {/* copy the colorList and andd newColor to it */}

      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}

    </div>
  );
}
