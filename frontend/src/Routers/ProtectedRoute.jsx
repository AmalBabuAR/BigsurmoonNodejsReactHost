import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
      const location = useLocation()
      console.log(location);
      const path = location.state || '/'
      console.log(path);
  if (localStorage.getItem("auth")) {
    console.log(path);
     if(path==='/pricing'){
       return <Navigate to='/book-a-demo'/>
      }else{
       return <Navigate to={path}/>
     }
  } else {
    return <Outlet />;
  }
}
