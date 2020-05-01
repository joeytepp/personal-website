import "./Title.css";

import React, { useContext } from "react";
import { Link } from "gatsby";

import { MouseContext } from "../context/MouseContext";

interface Props {
  color: string;
  href: string;
  readonly children: string;
}

function Title(props: Props) {
  const { shadowPosition } = useContext(MouseContext);
  const shadow = `${shadowPosition} ${props.color}`;

  return (
    <div className="Title-root">
      <Link to={props.href}>
        <h1 style={{ color: "white", textShadow: shadow }}>{props.children}</h1>
        <div className="Title-underline" style={{ boxShadow: shadow }}></div>
      </Link>
    </div>
  );
}

export default Title;
