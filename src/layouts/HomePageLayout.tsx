import "./HomePageLayout.css";

import React from "react";

import Title from "../components/Title";
import Layout from "../components/Layout";
import MailIcon from "../components/MailIcon";
import Copyright from "../components/Copyright";
import GitHubLogo from "../components/GitHubLogo";
import LinkedInLogo from "../components/LinkedInLogo";

function HomePageLayout() {
  return (
    <Layout>
      <div className="HomePage-top">
        <Title color="#a3990b" href="/">
          Joey Tepperman
        </Title>
        <div className="HomePage-social">
          <GitHubLogo></GitHubLogo>
          <LinkedInLogo></LinkedInLogo>
          <MailIcon></MailIcon>
        </div>
      </div>
      <div className="HomePage-body">
        <Title color="#0b69a3" href="/about">
          About
        </Title>
        <Title color="#a30B0b" href="/projects">
          Projects
        </Title>
        <Title color="#0ba340" href="/experience">
          Experience
        </Title>
        <Title color="#fa6400" href="/open-source">
          Open Source
        </Title>
      </div>
      <div className="HomePage-bottom">
        <Copyright></Copyright>
      </div>
    </Layout>
  );
}

export default HomePageLayout;
