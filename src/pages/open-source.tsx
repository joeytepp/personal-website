import "./index.css";

import React from "react";

import OpenSourcePageLayout from "../layouts/OpenSourcePageLayout";
import { MouseContextProvider } from "../context/MouseContext";

function OpenSourcePage() {
  return (
    <MouseContextProvider>
      <OpenSourcePageLayout></OpenSourcePageLayout>
    </MouseContextProvider>
  );
}

export default OpenSourcePage;
