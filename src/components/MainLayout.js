import React from "react";
import Box from "@material-ui/core/Box";
import { SEO } from "./SEO";
import { Header } from "./Header";

export const MainLayout = ({ children, title, mainClass }) => {
  return (
    <Box className={mainClass} style={{ flexGrow: 1 }}>
      <SEO title={title} />
      <Header siteTitle="Ehtisham Ali" />
      {children}
    </Box>
  );
};
