import React, { useContext, useCallback } from "react";
import { AppContext } from "../components";

//TODO use gatsby default helmet component
export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
