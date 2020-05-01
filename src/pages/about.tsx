import "./index.css";

import React from "react";
import { MouseContextProvider } from "../context/MouseContext";
import SiteMetadata from "../components/SiteMetadata";
import AboutPageLayout from "../layouts/AboutPageLayout";

function AboutPage() {
  return (
    <MouseContextProvider>
      <SiteMetadata title="About"></SiteMetadata>
      <AboutPageLayout></AboutPageLayout>
    </MouseContextProvider>
  );
}

export default AboutPage;
