import React from "react";
import Box from "@material-ui/core/Box";
import { Header } from "./Header";
import { Helmet } from "./Helmet";

export const MainLayout = ({ children, pageTitle, tags }) => {
  return (
    <Box color="black">
      <Helmet tags={tags} pageTitle={pageTitle} />
      <Header siteTitle="Ehtisham Ali" />
      {children}
    </Box>
  );
};
