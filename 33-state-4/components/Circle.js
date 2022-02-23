import React from "react";
import randomColor from "randomcolor";

export function OuterCircle(props) {
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
      className={`absolute rounded-full w-${props.size} h-${props.size} flex flex-col align-items justify-center left-${props.margin} top-${props.margin} cursor-pointer`}
      style={{ backgroundColor: "purple", opacity: ".4" }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
    />
  );
}

export function MiddleCircle(props) {
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
      className={`absolute rounded-full w-${props.size} h-${props.size} flex flex-col align-items justify-center left-${props.margin} top-${props.margin} cursor-pointer`}
      style={{ backgroundColor: "orange" }}
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
      className={`absolute rounded-full w-${props.size} h-${props.size} flex flex-col align-items justify-center left-${props.margin} top-${props.margin} cursor-pointer`}
      style={{ backgroundColor: "red" }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
    />
  );
}
