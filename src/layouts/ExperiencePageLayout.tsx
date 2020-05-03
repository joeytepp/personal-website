import "./ExperiencePageLayout.css";

import React from "react";

import Job from "../components/Job";
import Title from "../components/Title";
import Layout from "../components/Layout";

import { description, jobs } from "../../content/experience.yml";
import Copyright from "../components/Copyright";

function ExperiencePageLayout() {
  return (
    <Layout>
      <Title href="/experience" color="#0ba340">
        Experience
      </Title>
      <p className="ExperiencePage-description">{description}</p>
      <div>
        {jobs.map((job, i) => (
          <Job {...job} key={i}></Job>
        ))}
      </div>
      <Copyright></Copyright>
    </Layout>
  );
}

export default ExperiencePageLayout;
