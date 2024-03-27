import React from "react";

// implement Tile as a stateless component that renders the data from an object
export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile-title tile">
        {name}
      </p>
      {Object.values(description).map((value, index) => (
        <p key={index} className="tile">
          {value}
        </p>
      ))}
    </div>
  );
};
