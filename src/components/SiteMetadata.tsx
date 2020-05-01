import React from "react";
import Helmet from "react-helmet";

interface Props {
  title: string;
}
function SiteMetadata(props: Props) {
  return (
    <Helmet
      title={`Joey Tepperman | ${props.title}`}
      meta={[
        {
          name: "description",
          content: "Joey Tepperman's personal website and portfolio.",
        },
        {
          name: "keywords",
          content: "Joey, Tepperman, personal, website",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ]}
    ></Helmet>
  );
}

export default SiteMetadata;
