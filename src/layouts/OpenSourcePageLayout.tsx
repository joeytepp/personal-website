import "./OpenSourcePageLayout.css";

import React from "react";

import Title from "../components/Title";
import Layout from "../components/Layout";
import PullRequest from "../components/PullRequest";

import { description, pulls } from "../../content/open-source.yml";
import Copyright from "../components/Copyright";

function OpenSourcePageLayout() {
  return (
    <Layout>
      <Title href="/open-source" color="#fa6400">
        Open Source
      </Title>
      <p>{description}</p>
      <div>
        {pulls.map((pull, i) => (
          <PullRequest {...pull} key={i}></PullRequest>
        ))}
      </div>
      <div className="OpenSourcePage-bottom">
        <Copyright></Copyright>
      </div>
    </Layout>
  );
}

export default OpenSourcePageLayout;
