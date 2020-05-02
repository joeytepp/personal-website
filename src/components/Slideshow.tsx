import "./Slideshow.css";

import React from "react";
import Slider from "react-slick";

interface Props {
  images: Array<string>;
}

function Slideshow(props: Props) {
  return (
    <div className="Slideshow-root">
      <Slider dots={true} dotsClass="slick-dots Slideshow-dots" infinite={true}>
        {props.images.map((image, i) => (
          <img src={image} key={i}></img>
        ))}
      </Slider>
    </div>
  );
}

export default Slideshow;
