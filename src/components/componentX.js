import React from "react";
import "./componentX.css";
const ComponentX = ({ data }) => {
  return (
    <div className="component-x">
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <img src={data.image} className="component-image" />
      <br />
      <button>Apply</button>
      <button>Learn More</button>
    </div>
  );
};

export default ComponentX;
