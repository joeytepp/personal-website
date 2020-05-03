import "./Job.css";

import React from "react";
import Card from "./Card";

function Job(props: Job) {
  return (
    <Card>
      <div className="Job-root">
        <div className="Job-grid">
          <div>
            <img src={props.image} className="Job-img"></img>
          </div>
          <div>
            <div>{props.title}</div>
            <div className="Job-location">{props.location}</div>
          </div>
          <div className="Job-date">{props.date}</div>
        </div>
        <div className="Job-description">{props.description}</div>
      </div>
    </Card>
  );
}

export default Job;
