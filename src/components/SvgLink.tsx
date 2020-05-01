import "./SvgLink.css";

import React, { ReactNode, useContext } from "react";
import { MouseContext } from "../context/MouseContext";

interface Props {
  children: ReactNode;
  href: string;
}

function SvgLink(props: Props) {
  const { shadowPosition } = useContext(MouseContext);

  return (
    <a href={props.href} target="blank" rel="noopener noreferrer">
      <svg
        focusable="false"
        data-prefix="fab"
        data-icon="github"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
        filter={`drop-shadow(${shadowPosition} grey)`}
        width="40px"
        className="svg-link"
      >
        {props.children}
      </svg>
    </a>
  );
}

export default SvgLink;
