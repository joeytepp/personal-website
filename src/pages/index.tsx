import "../../static/css/index.css";

import React from "react";
import Title from "../components/Title";
import { MouseContextProvider } from "../context/MouseContext";

export function IndexPage() {
  return (
    <MouseContextProvider>
      <div>
        <Title color="red">Joey Tepperman</Title>
      </div>
    </MouseContextProvider>
  );
}
export default IndexPage;
