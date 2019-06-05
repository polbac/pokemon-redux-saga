import React from "react";
import { ItemContainer } from "./ItemStyles";

export const Item = props => {
  return (
    <ItemContainer onClick={props.onSelect}>
      {props.sprites ? (
        <img src={props.sprites.front_default} />
      ) : (
        <div className="blink">...</div>
      )}
      <p>{props.name}</p>
    </ItemContainer>
  );
};
