import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Box, Grid } from "@material-ui/core";

export const Header = ({ siteTitle }) => (
  <Grid
    spacing={2}
    container
    style={{ backgroundColor: "rebeccapurple", height: 65 }}
  >
    <Grid item xs={12} spacing={2} md={4} style={{ backgroundColor: "red" }}>
      {siteTitle}
    </Grid>
    <Grid item xs={6} style={{ backgroundColor: "orange" }}>
      asdf
    </Grid>
  </Grid>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
