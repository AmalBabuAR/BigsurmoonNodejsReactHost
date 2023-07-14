import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
      const location = useLocation()
      const path = location.state || '/'
  if (localStorage.getItem("auth")) {
     if(path==='/pricing'){
       return <Navigate to='/book-a-demo'/>
      }else{
       return <Navigate to={path}/>
     }
  } else {
    return <Outlet />;
  }
}
