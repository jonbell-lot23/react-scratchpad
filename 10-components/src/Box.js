import React from "react";
import randomColor from "randomcolor";

class Box extends React.Component {
  render() {
    let color = randomColor({
      luminosity: "dark",
      hue: "blue",
      format: "hsla", // e.g. 'hsla(27, 88.99%, 81.83%, 0.6450211517512798)'
    });
    console.log(color);
    return (
      <div
        class="p-10 text-white rounded-md mb-8"
        style={{ backgroundColor: color }}
      >
        <h3>Hello from {this.props.value}</h3>
      </div>
    );
  }
}

export default Box;
