import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Router from "./Routers/Routes.jsx";
// import GoogleAnalytics from "./Components/GoogleAnalytics/GoogleAnalytics.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <GoogleAnalytics /> */}
    <RouterProvider router={Router} />
  </>
);
