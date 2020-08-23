import React from "react";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { MainLayout } from "../components";

const useStyles = makeStyles(({ palette }) => ({
  textColor2: {
    color: palette.text.clr2,
  },
  bgColor: {
    backgroundColor: palette.bgColor.clr1,
  },
  card: {
    minWidth: 275,
    marginBottom: "1.5rem",
    boxShadow: "none",
    marginTop: 20,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "1.55rem",
    marginBottom: "0.4375rem",
    fontWeight: "700",
    fontFamily: `'Montserrat', sans-serif`,
    cursor: "pointer",
    width: "fit-content",
  },
  pos: {
    color: palette.text.clr2,
    marginBottom: 12,
    marginTop: 4,
  },
  link: {
    color: palette.link.clr1,
    textDecoration: "underline",
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <MainLayout pageTitle={"Blog"} tags={null} mainClass={classes.bgColor}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid
          item
          sm={9}
          direction="row"
          justify="center"
          alignItems="center"
          alignSelf="center"
        >
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h3" className={classes.title}>
                The WET Codebase
              </Typography>
              <small className={classes.pos}>July 13, 2020 ☕ 1 min read</small>
              <Typography variant="body2" component="p">
                Come waste your time with me.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
};
