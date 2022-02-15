import React from "react";
import randomColor from "randomcolor";

function Box(props) {
  let defaultColor = "white";
  let highlightColor = "brown";

  let [color] = React.useState(defaultColor);

  // if (props.id % props.selected == 0) {

  if (props.id == props.highlighted) {
    color = defaultColor;
  } else {
    color = highlightColor;
  }

  function highlight(e) {
    props.highlight(props.id);
    console.log(props);
  }

  const removeHighlight = (e) => {
    props.highlight();
  };

  return (
    <div
      class="p-2 text-white rounded-xl mb-1 w-4 h-4 mr-1 float-left cursor-pointer"
      style={{ backgroundColor: color }}
      onMouseOver={highlight}
      onMouseOut={removeHighlight}
    ></div>
  );
}

export default Box;
