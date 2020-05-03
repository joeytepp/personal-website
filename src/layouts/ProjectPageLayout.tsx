import "./ProjectPageLayout.css";

import React from "react";

import Title from "../components/Title";
import Layout from "../components/Layout";
import Project from "../components/Project";
import Copyright from "../components/Copyright";

import { description, projects } from "../../content/projects.yml";

function ProjectPageLayout() {
  return (
    <Layout>
      <Title color="#a30B0b" href="/projects">
        Projects
      </Title>
      <p className="ProjectPage-description">{description}</p>
      {projects.map((project, i) => (
        <Project {...project} key={i}></Project>
      ))}
      <Copyright></Copyright>
    </Layout>
  );
}

export default ProjectPageLayout;
