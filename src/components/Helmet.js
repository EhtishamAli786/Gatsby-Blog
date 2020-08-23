import React from "react";
import { Helmet as ReactHelmet } from "react-helmet";

//TODO use gatsby default helmet component
export const Helmet = ({ tags, pageTitle }) => {
  return (
    <ReactHelmet>
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <title>{pageTitle}</title>
      {tags}
    </ReactHelmet>
  );
};
