import React from "react";

import { MainLayout, AppProvider } from "../components";
import Grid from "@material-ui/core/Grid";
const IndexPage = () => {
  return (
    <AppProvider>
      <MainLayout pageTitle={"Ehtisham Ali"} tags={null}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid
            item
            xs={10}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <h1>My Portfolio | My Blog</h1>
            <p style={{ fontSize: "16px" }}>Coming Soon!</p>
            <span>Under Construction </span>
            <p id="about">About Me: I am a software developer</p>
          </Grid>
        </Grid>
      </MainLayout>
    </AppProvider>
  );
};

export default IndexPage;
