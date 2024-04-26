import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ShihamiLandingPage from "pages/ShihamiLandingPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "shihamilandingpage",
      element: <ShihamiLandingPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
