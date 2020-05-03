import "./PullRequest.css";

import React from "react";

import Card from "./Card";

const GITHUB_URL = "https://github.com";

function PullRequest(props: PullRequest) {
  return (
    <Card>
      <div className="PullRequest-root">
        <div className="PullRequest-grid">
          <div>
            <img className="PullRequest-img" src={props.image}></img>
          </div>
          <div>
            <div>
              <a
                className="PullRequest-link"
                href={`${GITHUB_URL}/${props.org}/${props.repo}`}
              >
                {props.org} / {props.repo}
              </a>
            </div>
            <div className="PullRequest-name">
              <a
                className="PullRequest-link"
                href={`${GITHUB_URL}/${props.org}/${props.repo}/pull/${props.number}`}
              >
                #{props.number} - {props.name}
              </a>
            </div>
            <div className="PullRequest-date-mobile">{props.date}</div>
          </div>
          <div className="PullRequest-date">{props.date}</div>
        </div>
        <div className="PullRequest-description">{props.description}</div>
      </div>
    </Card>
  );
}

export default PullRequest;
