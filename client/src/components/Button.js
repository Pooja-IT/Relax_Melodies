import React from "react";

export default function Button(props) {

return (
      <button className="button-blue" onClick={props.onClick}>
            {props.children}
      </button>
      );
}