import "./index.css";

import React from "react";

import SiteMetadata from "../components/SiteMetadata";
import HomePageLayout from "../layouts/HomePageLayout";
import { MouseContextProvider } from "../context/MouseContext";

export function IndexPage() {
  return (
    <MouseContextProvider>
      <SiteMetadata title="Home"></SiteMetadata>
      <HomePageLayout></HomePageLayout>
    </MouseContextProvider>
  );
}
export default IndexPage;
