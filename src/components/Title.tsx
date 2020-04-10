import "./Title.css";

import React, { useContext } from "react";
import { MouseContext } from "../context/MouseContext";

interface Props {
  color: "red" | "green" | "yellow" | "blue";
  readonly children: string;
}

function Title(props: Props) {
  const { shadowPosition } = useContext(MouseContext);
  const shadow = `${shadowPosition} ${props.color}`;

  return (
    <div className="Title-root">
      <h1 style={{ color: "white", textShadow: shadow }}>{props.children}</h1>
      <div className="Title-underline" style={{ boxShadow: shadow }}></div>
    </div>
  );
}

export default Title;
