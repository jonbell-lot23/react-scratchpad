import React from "react";

export default function RandomImage(props) {
  return (
    <div className="bg-black w-48 h-48 float-left relative">
      <span className="bg-black absolute r-0 b-0 absolute text-white px-2">
        {`${props.query} ${props.name}`}
      </span>
      <img src={`https://source.unsplash.com/random/300x300?${props.query}`} />
    </div>
  );
}
