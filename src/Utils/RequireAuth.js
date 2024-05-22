import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "./LocalStorage";

const RequireAuth = ({ children }) => {
  const Token = getToken();
  // if (!Token) {
  //   return <Navigate to={"/"} />;
  // }
  return children;
};

export default RequireAuth;
