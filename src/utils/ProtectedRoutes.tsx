import React, { type JSX } from "react";
import { Navigate } from "react-router";

type Props = {
  children: JSX.Element;
};

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
};

export default ProtectedRoute;
