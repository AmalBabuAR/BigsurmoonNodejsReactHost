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
import CheckoutSuccess from "../Pages/CheckoutSuccess";
import CheckoutFailed from "../Pages/CheckoutFailed";
import TermsAndCondition from "../Pages/TermsAndCondition";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import Error from "../Pages/Error";

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
    path: "/checkoutSuccess",
    element: (
      <Wrapper title="Checkout Success">
        <CheckoutSuccess />
      </Wrapper>
    ),
  },
  {
    path: "/checkoutFailed",
    element: (
      <Wrapper title="Checkout Failed">
        <CheckoutFailed />
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
    path: "/termsAndCondition",
    element: (
      <Wrapper title="Terms And Condition">
        <TermsAndCondition />
      </Wrapper>
    ),
  },
  {
    path: "/privacyPolicy",
    element: (
      <Wrapper title="Privacy Policy">
        <PrivacyPolicy />
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
  {
    path: "*",
    element: (
      <Wrapper title="404">
        <Error />
      </Wrapper>
    ),
  },
]);
export default Router;
