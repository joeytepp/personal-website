import "./AboutPageLayout.css";

import React from "react";

import Title from "../components/Title";
import Layout from "../components/Layout";
import TextLink from "../components/TextLink";

import { content, links } from "../../content/about.yml";
import Copyright from "../components/Copyright";

function AboutPageLayout() {
  return (
    <Layout>
      <div className="AboutPage-top">
        <Title href="/about" color="#0b69a3">
          About
        </Title>
      </div>
      <div className="AboutPage-body">
        {content.map((str: string, i: number) => (
          <p key={i}>{str}</p>
        ))}
      </div>
      <div className="AboutPage-links">
        {links.map((link, i: number) => (
          <TextLink href={link.href} key={i}>
            {link.name}
          </TextLink>
        ))}
      </div>
      <div className="AboutPage-return">
        <TextLink href="/" local>
          {"< Home"}
        </TextLink>
      </div>
      <div className="AboutPage-bottom">
        <Copyright></Copyright>
      </div>
    </Layout>
  );
}

export default AboutPageLayout;
