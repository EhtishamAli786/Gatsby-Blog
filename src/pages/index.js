import React from "react";

import { MainLayout } from "../components";
import Grid from "@material-ui/core/Grid";

const IndexPage = () => {
  const tags = null;
  return (
    <MainLayout pageTitle={"Ehtisham Ali"} tags={tags}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={10} direction="row" justify="center" alignItems="center">
          <h1>My Portfolio | My Blog</h1>
          <p style={{ fontSize: "16px" }}>Coming Soon!</p>
          <p>Under Construction 🔨🔨🔨🔨🔨🔨🔨 🏗️🏗️🏗️ </p>
          <p id="about">About Me: I am a software developer</p>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default IndexPage;
