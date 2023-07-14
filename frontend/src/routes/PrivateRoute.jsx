// import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
// import axios from "axios";
// // import Spinner from "../Spinner";
// import { useAuth } from "../context/auth";

export default function PrivateRoute() {
  // const [ok, setOk] = useState(false);
  // const [auth, setAuth] = useAuth();
  // const navigate = useNavigate()

  // useEffect(() => {
  //   const authCheck = async () => {
  //     const res = await axios.get("/api/user-auth");
  //     if (res.data.ok) {
  //       setOk(true);
  //     } else {
  //       setOk(false);
  //       navigate('/login')
  //     }
  //   };
  //   if (auth?.token) authCheck();
  // }, [auth?.token,navigate]);

  // return ok && <Outlet />

  if (localStorage.getItem("auth")) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}
