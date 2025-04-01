import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {


  return localStorage.getItem('login') ? 
  <>
    <Outlet/>
  </> 
  : 
  <Navigate to="/"/>
  ;
};
export default PrivateRoute;