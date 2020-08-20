import React from "react";
import Box from "@material-ui/core/Box";
import { Header } from "./Header";
export const MainLayout = ({ children }) => (
  <Box color="black">
    <Header siteTitle="My Blog" />
    {children}
  </Box>
);
