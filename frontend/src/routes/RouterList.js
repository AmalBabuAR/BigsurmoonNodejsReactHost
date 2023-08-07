import React from "react";
import PublicHeader from "../components/common/Header/PublicHeader";
import Footer from "../components/common/Footer";
import { Route, Routes } from "react-router-dom";
import TitleWrapper from "./TitleWrapper";
import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home";
import Studio3D from "../Pages/Studio3D";
import Pricing from "../Pages/Pricing";
import AboutAR from "../Pages/AboutAR";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Congigurator from "../Pages/Congigurator";
import BookADemo from "../Pages/BookADemo";
import UserDashBoard from "../Pages/UserDashBoard";
import AdminDashboard from "../Pages/AdminDashboard";
import Editor from "../Pages/Editor";
import ErrorPage404 from "../components/common/ErrorPage404";

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
                <PublicHeader />
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
          <Route path="/dashboard" element={<UserDashBoard />} />
        </Route>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/editor/:url/:file" element={<Editor />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="*" element={<ErrorPage404 />} />
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
