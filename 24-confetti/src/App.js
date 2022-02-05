import React from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import Confetti from "./Confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

export default class Realistic extends React.Component {
  render() {
    return (
      <>
        <Confetti />
      </>
    );
  }
}
