import React, { useState } from 'react';
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
 
const [isAuthenticated, setIsAuthenticated] = useState(false);

  setIsAuthenticated(true);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;