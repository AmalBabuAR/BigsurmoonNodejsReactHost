import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {

  if (localStorage.getItem("auth")) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}
