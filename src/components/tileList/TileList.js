import React from "react";

export const TileList = (props) => {
  props.data.map((obj, index) => { 
 
  return (
    <div>
      <Tile name={obj.name} description='' key={index} />
    </div>
    )}
  );
};
