import "./Layout.css";

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  return <div className="Layout-root">{props.children}</div>;
}

export default Layout;
