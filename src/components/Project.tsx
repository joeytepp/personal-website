import "./Project.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

import Card from "./Card";
import Tag from "./Tag";
import Slideshow from "./Slideshow";

function Project(props: Project) {
  return (
    <Card>
      <div className="Project-grid">
        <div>
          <img className="Project-img" src={props.image}></img>
        </div>
        <div>
          <div>{props.title}</div>
          <div className="Project-tags">
            {props.tags.map((tag, i) => (
              <Tag {...tag} key={i}></Tag>
            ))}
          </div>
        </div>
        <div className="Project-date">{props.date}</div>
      </div>
      <Slideshow images={props.slideshow}></Slideshow>
      <div className="Project-description">{props.description}</div>
    </Card>
  );
}

export default Project;
