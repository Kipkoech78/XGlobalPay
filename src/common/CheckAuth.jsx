import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();
  if (location.pathname === "/") {
    return <Navigate to="/globalpay" />;
  }
  if (
    !isAuthenticated &&
    !(location.pathname.includes("/globalpay") ||
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }
  if (
    (isAuthenticated && location.pathname.includes("/login")) ||
    location.pathname.includes("/register")
  ) {
    return user?.role === "admin" ? (
      <Navigate to="admin/dashboard" />
    ) : (
      <Navigate to="globalpay/dashboard" />
    );
  }
  // Prevent regular users from accessing admin routes
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  // Prevent admins from accessing shopping routes
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("/globalpay")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }
  return <>{children} </>;
}

export default CheckAuth;
