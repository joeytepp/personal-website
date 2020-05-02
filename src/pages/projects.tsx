import "./index.css";

import React from "react";

import { MouseContextProvider } from "../context/MouseContext";
import ProjectPageLayout from "../layouts/ProjectPageLayout";

function ProjectsPage() {
  return (
    <MouseContextProvider>
      <ProjectPageLayout></ProjectPageLayout>
    </MouseContextProvider>
  );
}

export default ProjectsPage;
