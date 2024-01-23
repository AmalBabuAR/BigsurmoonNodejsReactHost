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
import Referral from "../Pages/Referral";
import Blog from "../Pages/Blog";
import BlogCategory from "../Pages/BlogCategory";
import V2Home from "../Pages/V2Home";

const Wrapper = ({ children, title }) => {
  let description;
  let keywords;
  if (title === "Bigsurmoon") {
    description =
      "Interactive 3D and Augmented Reality experiences for e-commerce. All-in-one visualisation solution that drive Engagement and sales.";
    keywords =
      "All in One product visualisation solution, best tool for e-commerce to boost sales, Augmented reality for business, Augmented reality for furniture, fashion, electronics, accessories, events, marketing ,luxury, jewelery, 3D configurator,3D configurator for automobile ,furniture, e-commerce , fashion, luxury, jewelery ";
  } else if (title === "About | Augmented Reality") {
    description =
      "Discover the Augmented reality benefits with Bigsurmoon| Learn how AR is reshaping industries and creating great customer experiences. ";
    keywords =
      "Augmented reality for business, Augmented reality for furniture, fashion, electronics, accessories, events, marketing ,luxury, jewelery, ";
  } else if (title === "About | Configurator") {
    description =
      "Immersive e-commerce 360 and configurator. Create your 3D experiences today| Tailored for businesses.";
    keywords =
      "3D configurator,3D configurator for automobile ,furniture, e-commerce , fashion, luxury, jewelery";
  } else if (title === "Pricing") {
    description =
      "Our affordable pricing scales with your business. You get all the features on every plan. Start your free trial. ";
    keywords =
      "Start free trail , Suitable for small scale business and startups, Suitable for medium scale business with medium traffic, Suitable for large scale business with high traffic,Our affordable pricing scales with your business";
  } else if (title === "Support") {
    description =
      "Get reliable support from Bigsurmoon. Our dedicated team is here to assist you in harnessing the full potential of 3D and AR technology.";
    keywords =
      "24/7 support,Tailored Onboarding,Free Online Training,Talk to experts";
  } else if (title === "3D Modelling support") {
    description =
      "Step into the world of creativity at Bigsurmoon's 3D Studio. Transform your ideas into stunning 3D visuals with our expert team.";
  } else if (title === "Dashboard") {
    description = "Login | Streamline your AR and 3D projects | Upload";
  }

  useEffect(() => {
    let t = "Bigsurmoon";
    if (title) {
      t = `${title}` || `${t}`;
    }
    document.title = t;
  }, [title]);

  useEffect(() => {
    document.getElementsByTagName("META")[2].content = description;
    document.getElementsByTagName("META")[3].content = keywords;
    document.getElementsByTagName("META")[6].content = title;
    document.getElementsByTagName("META")[7].content = description;
  }, [description, title, keywords]);

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
        <V2Home />
      </Wrapper>
    ),
  },
  // {
  //   path: "/home",
  //   element: (
  //     <Wrapper title="home">
  //       <Home />
  //     </Wrapper>
  //   ),
  // },
  {
    path: "/aboutar",
    element: (
      <Wrapper title="About | Augmented Reality">
        <AboutAR />
      </Wrapper>
    ),
  },
  {
    path: "/aboutconfigurator",
    element: (
      <Wrapper title="About | Configurator">
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
    path: "/plan",
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
      <Wrapper title="3D Modelling Support">
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
    path: "/blog",
    element: (
      <Wrapper title="Blog">
        <Blog />
      </Wrapper>
    ),
  },
  {
    path: "/blog/:blogName",
    element: (
      <Wrapper title="Blog">
        <BlogCategory />
      </Wrapper>
    ),
  },
  {
    path: "/referral",
    element: (
      <Wrapper title="Bigsurmoon">
        <Referral />
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
