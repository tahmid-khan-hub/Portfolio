import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "./layout/HomeLayout.jsx";
import Home from "./components/Home/Home.jsx";
import Resume from "./pages/Resume/Resume.jsx";
import ErrorPage from "./pages/Error/Error.jsx";

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
    path: "resume",
    element: <Resume></Resume>,
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
