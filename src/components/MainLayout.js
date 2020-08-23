import React from "react";
import Box from "@material-ui/core/Box";
import { Header } from "./Header";
import { Helmet } from "./Helmet";

export const MainLayout = ({ children, pageTitle, tags, mainClass }) => {
  return (
    <Box className={mainClass} style={{ flexGrow: 1 }}>
      <Helmet tags={tags} pageTitle={pageTitle} />
      <Header siteTitle="Ehtisham Ali" />
      {children}
    </Box>
  );
};
