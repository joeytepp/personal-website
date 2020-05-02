import "./Card.css";

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Card(props: Props) {
  return <div className="Card-root">{props.children}</div>;
}

export default Card;
