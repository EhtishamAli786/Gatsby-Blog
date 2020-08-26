import React from "react";
import { Link, navigate } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Toggle from "react-toggle";
import { useAppContext } from "../hooks";
import "react-toggle/style.css";
import "../css/header-comp.css";
const useStyles = makeStyles(({ palette }) => {
  return {
    title: {
      flexGrow: 1,
      display: "inline-block",
      marginTop: 4,
      fontFamily: "Montserrat",
    },
    rightMenu: {
      float: "right",
    },
    siteTitleUI: {
      cursor: "pointer",
      color: palette.text.clr1,
      fontWeight: "500",
      fontSize: "1.3rem",
      letterSpacing: "0.5px",
      textDecoration: "none",
    },
    rightBtnStyles: {
      fontSize: "1.1rem",
      fontWeight: "500",
      color: palette.text.clr1,
      fontFamily: "Montserrat",
    },
    switchStyles: {
      display: "inline-block",
      verticalAlign: "middle",
      marginLeft: 4,
    },
  };
});

export const Header = ({ siteTitle }) => {
  const { darkMode, setDarkMode } = useAppContext();
  const classes = useStyles();
  const handleChange = (event) => {
    setDarkMode(!darkMode);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container direction="row" justify="center">
          <Grid
            item
            xs={12}
            sm={9}
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
              <div className={classes.switchStyles}>
                <Toggle
                  defaultChecked={darkMode}
                  className="custom-classname"
                  icons={{
                    checked: (
                      <NightsStayIcon
                        color="yellow"
                        style={{
                          fontSize: 16,
                          alignSelf: "center",
                          color: "yellow",
                        }}
                      />
                    ),
                    unchecked: (
                      <WbSunnyIcon
                        color="yellow"
                        style={{
                          fontSize: 16,
                          alignSelf: "center",
                          color: "yellow",
                        }}
                      />
                    ),
                  }}
                  onChange={handleChange}
                  aria-labelledby="switch"
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
