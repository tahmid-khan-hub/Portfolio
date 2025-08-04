import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "./layout/HomeLayout.jsx";
import Home from "./components/Home/Home.jsx";
import ErrorPage from "./pages/Error/Error.jsx";
import ProjectsDetails from "./pages/Projects/ProjectsDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "projectsDetails/:id",
    element: <ProjectsDetails></ProjectsDetails>
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
