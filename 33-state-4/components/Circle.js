import React from "react";
import randomColor from "randomcolor";

function Circle(props) {
  const [color, setColor] = React.useState("black");

  const onMouseOver = (e) => {
    console.log("onMouseOver");
    // props.highlight(props.id);
    console.log(props);
  };

  const onMouseOut = (e) => {
    console.log("onMouseOut");
  };

  const onClick = (e) => {
    console.log("onClick");
    setColor("blue");
  };

  return (
    <div
      className="rounded-full rounded-full w-12 h-12 flex flex-col align-items justify-center float-left m-1"
      style={{ backgroundColor: color }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
    ></div>
  );
}

export default Circle;

/*
<div class="bg-red-200 rounded-full w-12 h-12 flex flex-col align-items justify-center">
	<div class="bg-blue-500 rounded-full w-8 h-8 flex flex-col align-items justify-center ml-2">
	  <div class="bg-white rounded-full w-4 h-4 flex flex-col align-items justify-center ml-2"></div>
	</div>
  </div>
  */
