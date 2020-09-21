import React from "react";
import Grid from "@material-ui/core/Grid";
import { MainLayout } from "../components";

export default () => {
  return (
    <MainLayout title={"Ehtisham Ali"} mainClass={"red"}>
      <Grid container direction="row" justify="center">
        <Grid
          item
          xs={12}
          sm={9}
          direction="row"
          justify="space-between"
          alignItems="center"
        ></Grid>
      </Grid>
    </MainLayout>
  );
};
