// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { AppContext } from "../components";

//TODO use gatsby default helmet component
export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
