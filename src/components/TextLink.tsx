import "./TextLink.css";

import React from "react";

interface Props {
  href: string;
  children: string;
  local?: boolean;
}

function TextLink(props: Props) {
  return (
    <div className="TextLink-root">
      <a
        className="TextLink-link"
        href={props.href}
        target={props.local ? "" : "blank"}
        rel={props.local ? "" : "noopener noreferrer"}
      >
        {props.children}
      </a>
    </div>
  );
}

export default TextLink;
