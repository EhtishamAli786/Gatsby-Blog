import React from "react";
import { Link, navigate } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: "inline-block",
    marginTop: 4,
  },
  rightMenu: {
    float: "right",
  },
  siteTitleUI: {
    cursor: "pointer",
    color: "#f5f5f5",
    fontWeight: "500",
    fontSize: "1.3rem",
    letterSpacing: "0.5px",
    textDecoration: "none",
  },
  rightBtnStyles: {
    fontSize: "1.1rem",
    fontWeight: "500",
    color: "#fafafa",
  },
}));

export const Header = ({ siteTitle }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar style={{ backgroundColor: "rebeccapurple" }}>
        <Grid container direction="row">
          <Hidden smDown>
            <Grid item sm={1} />
          </Hidden>
          <Grid
            item
            xs={12}
            md={10}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="h6" className={classes.title}>
              <Link to="/" className={classes.siteTitleUI}>
                {siteTitle}
              </Link>
            </Typography>
            <div className={classes.rightMenu}>
              <Button
                className={classes.rightBtnStyles}
                onClick={() => navigate("/blog")}
              >
                Blog
              </Button>
              <Hidden xsDown>
                <Button
                  className={classes.rightBtnStyles}
                  onClick={() => navigate("/#about")}
                >
                  About
                </Button>
              </Hidden>
            </div>
          </Grid>
          <Hidden smDown>
            <Grid item sm={1} />
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
