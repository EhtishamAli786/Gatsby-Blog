import React from "react";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { graphql } from "gatsby";

import { MainLayout } from "../../components";

const moment = require("moment");

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

export default ({ data }) => {
  const classes = useStyles();
  const { article } = data.eablog;
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
                {article.title}
              </Typography>
              <small className={classes.pos}>
                {moment()
                  .utc(new Date(article.created_at).getTime())
                  .format("MMMM Do YYYY")}{" "}
                ☕ {article.minRead}
              </small>
              <Typography variant="body2" component="p">
                {article.description && article.description.substring(0, 30)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export const query = graphql`
  query($_id: ID!) {
    eablog {
      article(_id: $_id) {
        _id
        created_at
        description
        footerLinks
        minRead
        title
      }
    }
  }
`;
