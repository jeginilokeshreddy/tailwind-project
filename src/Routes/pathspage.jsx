import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Landingpage from "../pages/Landingpage";
import Errorpage from "../pages/errorpage";

const pathLinks = createBrowserRouter([
  {
    path: "/landingpage",

    element: <Landingpage />,
  },
  {
    path: "*",
    element: <Errorpage/>
  },
 
]);

export default pathLinks;
