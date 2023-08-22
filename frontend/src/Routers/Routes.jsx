import { createBrowserRouter, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import AboutAR from "../Pages/AboutAR";
import AboutConfigurator from "../Pages/AboutConfigurator";
import Login from "../Pages/Login";
import Pricing from "../Pages/Pricing";
import Register from "../Pages/Register";
import ThreeDStudio from "../Pages/ThreeDStudio";
import { useEffect, useLayoutEffect } from "react";
import Support from "../Pages/Support";
import ClientDashboard from "../Pages/ClientDashboard";
import ForgotPassword from "../Pages/ForgotPassword";
import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from "./PrivateRoute";

const Wrapper = ({ children, title }) => {
  useEffect(() => {
    let t = "Bigsurmoon";
    if (title) {
      t = `${title}` || `${t}`;
    }
    document.title = t;
  }, [title]);
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Wrapper title="Bigsurmoon">
        <Home />
      </Wrapper>
    ),
  },
  {
    path: "/aboutar",
    element: (
      <Wrapper title="About">
        <AboutAR />
      </Wrapper>
    ),
  },
  {
    path: "/aboutconfigurator",
    element: (
      <Wrapper title="About">
        <AboutConfigurator />
      </Wrapper>
    ),
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/login",
        element: (
          <Wrapper title="Login">
            <Login />
          </Wrapper>
        ),
      },
      {
        path: "/register",
        element: (
          <Wrapper title="Register">
            <Register />
          </Wrapper>
        ),
      },
      {
        path: "/forgot",
        element: (
          <Wrapper title="Forgot Password">
            <ForgotPassword />
          </Wrapper>
        ),
      },
    ],
  },
  {
    path: "/pricing",
    element: (
      <Wrapper title="Pricing">
        <Pricing />
      </Wrapper>
    ),
  },
  {
    path: "/support",
    element: (
      <Wrapper title="Support">
        <Support />
      </Wrapper>
    ),
  },
  {
    path: "/studio",
    element: (
      <Wrapper title="3D Studio">
        <ThreeDStudio />
      </Wrapper>
    ),
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/dashboard",
        element: (
          <Wrapper title="Dashboard">
            <ClientDashboard />
          </Wrapper>
        ),
      },
    ],
  },
]);
export default Router;
