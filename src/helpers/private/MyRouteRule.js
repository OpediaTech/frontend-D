import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";




const MyRouteRule = () => {

  const { userInfo } = useSelector((state) => state.auth);


  const location = useLocation();

  console.log('user',userInfo)


  return userInfo && userInfo?.role ? (
    <Outlet />
  ) : (
    <Navigate to="login" state={{ from: location }} replace />
  );
};

export default MyRouteRule;


//Delower Hasan created this group