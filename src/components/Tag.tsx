import "./Tag.css";

import React from "react";
import classNames from "classnames";

function Tag(props: Tag) {
  if (props.href)
    return (
      <a
        className={classNames("Tag-root", "Tag-link", {
          "Tag-code": props.name === "Code",
        })}
        href={props.href}
        target="blank"
        rel="noopener noreferrer"
      >
        {props.name}
      </a>
    );

  return <span className="Tag-root">{props.name}</span>;
}

export default Tag;
