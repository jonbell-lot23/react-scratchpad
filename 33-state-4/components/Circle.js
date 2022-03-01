import React from "react";
import randomColor from "randomcolor";

export function OuterCircle(props) {
  const [color, setColor] = React.useState("purple");

  const onMouseOver = (e) => {
    console.log("onMouseOver");
    setColor("#0BB5FF");
  };

  const onMouseOut = (e) => {
    console.log("onMouseOut");
  };

  const onClick = (e) => {
    console.log("onClick");
    setColor("#8B0000");
  };

  return (
    <div
      className={`float-left absolute rounded-full w-${props.size} h-${props.size} flex flex-col align-items justify-center top-${props.margin} left-${props.margin} cursor-pointer`}
      style={{ backgroundColor: color }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
    />
  );
}

export function MiddleCircle(props) {
  const [color, setColor] = React.useState("orange");

  const onMouseOver = (e) => {
    console.log("onMouseOver");
    setColor("#0BB5FF");
  };

  const onMouseOut = (e) => {
    console.log("onMouseOut");
  };

  const onClick = (e) => {
    console.log("onClick");
    setColor("#8B0000");
  };

  return (
    <div
      className={`float-left absolute rounded-full w-${props.size} h-${props.size} flex flex-col align-items justify-center top-${props.margin} left-${props.margin} cursor-pointer`}
      style={{ backgroundColor: color }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
    />
  );
}

export function InnerCircle(props) {
  const [color, setColor] = React.useState("#ececec");

  const onMouseOver = (e) => {
    console.log("onMouseOver");
    setColor("#0BB5FF");
  };

  const onMouseOut = (e) => {
    console.log("onMouseOut");
  };

  const onClick = (e) => {
    console.log("onClick");
    setColor("#8B0000");
  };

  return (
    <div
      className={`float-left absolute rounded-full w-${props.size} h-${props.size} flex flex-col align-items justify-center top-${props.margin} left-${props.margin} cursor-pointer`}
      style={{ backgroundColor: "red" }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
    />
  );
}

/*
<div class="relative">
  <div class="float-left absolute rounded-full w-12 h-12 flex flex-col align-items justify-center left-0 top-0 cursor-pointer" style="background-color:purple"></div>
  <div class="float-left absolute rounded-full w-8 h-8 flex flex-col align-items justify-center left-2 top-2 cursor-pointer" style="background-color:orange"></div>
  <div class="float-left absolute rounded-full w-4 h-4 flex flex-col align-items justify-center left-4 top-4 cursor-pointer" style="background-color:red"></div>
</div>
*/
