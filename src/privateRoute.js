import React from "react";
import { Route, Navigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

function PrivateRoutes({ component: Component, ...rest }) {
  const { currentUser } = UserAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
}

export default PrivateRoutes;
