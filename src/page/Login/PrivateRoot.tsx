import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {

  const locallogin = localStorage.getItem('token')

  console.log("Private route: "+ (locallogin === null))


  return locallogin !== null && locallogin !== undefined && locallogin !== "" ? 
  <>
    <Outlet/>
  </> 
  : 
  <Navigate to="/"/>
  ;
};
export default PrivateRoute;