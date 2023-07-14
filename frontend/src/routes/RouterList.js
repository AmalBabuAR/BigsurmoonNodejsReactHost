import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Route, Routes } from "react-router-dom";
import TitleWrapper from "./TitleWrapper";
import Home from "../Pages/Home";
import Studio3D from "../Pages/Studio3D";
import Pricing from "../Pages/Pricing";
import AboutAR from "../Pages/AboutAR";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Congigurator from "../Pages/Congigurator";
import BookADemo from "../Pages/BookADemo";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import DashboardList from "../Pages/DashboardList";

function RouterList() {
  const modules = [
    { path: "/", element: <Home />, title: "Bigsurmoon" },
    { path: "/3d-studio", element: <Studio3D />, title: "Bigsurmoon" },
    { path: "/pricing", element: <Pricing />, title: "Bigsurmoon" },
    { path: "/about-ar", element: <AboutAR />, title: "Bigsurmoon" },
    { path: "/configurator", element: <Congigurator />, title: "Bigsurmoon" },
    { path: "/book-a-demo", element: <BookADemo />, title: "Bigsurmoon" },
  ];

  return (
    <>
      <Routes>
        {modules.map(({ title, path, element }) => (
          <Route
            path={path}
            key={path}
            element={
              <>
                <Header />
                <TitleWrapper title={title}> {element}</TitleWrapper>
                <Footer />
              </>
            }
          />
        ))}

        <Route path="" element={<ProtectedRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/list" element={<DashboardList />} />
        </Route>
      </Routes>
    </>
  );
}

{
  /* <Route
path="/login"
element={
  <ProtectedRoute>
    <Login />
  </ProtectedRoute>
}
/>
<Route
path="/signUp"
element={
  <ProtectedRoute>
    <SignUp />
  </ProtectedRoute>
}
/> */
}

export default RouterList;
