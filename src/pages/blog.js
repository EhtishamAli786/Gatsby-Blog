import React from "react";
import { navigate, graphql } from "gatsby";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { MainLayout } from "../components";
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
const BLog = ({ data }) => {
  const classes = useStyles();
  const { articles } = data.eablog;
  return (
    <MainLayout title={"Blog"} mainClass={classes.bgColor}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid
          item
          sm={9}
          direction="row"
          justify="center"
          alignItems="center"
          alignSelf="center"
        >
          <div
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              marginTop: 26,
            }}
          >
            <p
              className={classes.textColor2}
              style={{
                fontSize: "100%",
                letterSpacing: 0.4,
              }}
            >
              Personal Blog by{" "}
              <span className={classes.link}>Ehtisham Ali</span>
              <br />I want to share some ideas and want u to share too.
            </p>
          </div>
          {articles.map((item, key) => (
            <Card className={classes.card} key={key}>
              <CardContent>
                <Typography
                  variant="h3"
                  className={classes.title}
                  onClick={() => navigate(`/blog/${item._id}`)}
                >
                  {item.title}
                </Typography>
                <small className={classes.pos}>
                  {moment()
                    .utc(new Date(item.created_at).getTime())
                    .format("MMMM Do YYYY")}{" "}
                  ☕ {item.minRead}
                </small>
                <Typography variant="body2" component="p">
                  {item.description && item.description.substring(0, 30)}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </MainLayout>
  );
};
export const query = graphql`
  query EABLOG {
    eablog {
      articles {
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
export default BLog;
