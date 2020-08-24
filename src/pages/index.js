import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { MainLayout } from "../components";
const useStyles = makeStyles(({ palette }) => ({
  textColor2: {
    color: palette.text.clr2,
  },
  bgColor: {
    backgroundColor: palette.bgColor.clr1,
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <MainLayout
      pageTitle={"Ehtisham Ali"}
      tags={null}
      mainClass={classes.bgColor}
    >
      <Grid container direction="row" justify="center">
        <Grid
          item
          xs={12}
          sm={9}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <div
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              marginTop: 26,
            }}
          >
            <h1 className={classes.textColor2}>My Portfolio | My Blog</h1>
            <p style={{ fontSize: "16px" }} className={classes.textColor2}>
              Coming Soon!
            </p>
            <span className={classes.textColor2}>Under Construction </span>
            <p id="about" className={classes.textColor2}>
              About Me: I am a software developer
            </p>
          </div>
        </Grid>
      </Grid>
    </MainLayout>
  );
};
