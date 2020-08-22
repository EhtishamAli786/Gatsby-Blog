import React from "react";

import { SEO, MainLayout } from "../components";

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ height: 800, backgroundColor: "blue" }}>asd</div>
    <p id="about">About Me</p>
  </MainLayout>
);

export default IndexPage;
