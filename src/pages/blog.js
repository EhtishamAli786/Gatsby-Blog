import React from "react";
import Grid from "@material-ui/core/Grid";

import { MainLayout } from "../components";

const BLog = () => (
  <MainLayout pageTitle={"Blog"} tags={null}>
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid
        item
        xs={10}
        direction="row"
        justify="center"
        alignItems="center"
      ></Grid>
    </Grid>
  </MainLayout>
);

export default BLog;
