import "./index.css";

import React from "react";

import { MouseContextProvider } from "../context/MouseContext";

import SiteMetadata from "../components/SiteMetadata";
import ExperiencePageLayout from "../layouts/ExperiencePageLayout";

function ExperiencePage() {
  return (
    <MouseContextProvider>
      <SiteMetadata title="Experience"></SiteMetadata>
      <ExperiencePageLayout></ExperiencePageLayout>
    </MouseContextProvider>
  );
}

export default ExperiencePage;
