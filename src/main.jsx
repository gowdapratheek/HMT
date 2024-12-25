import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Err from "./pages/Err";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/Contact";
import ProjectGallery from "./pages/ProjectGallery";
import ProjectDetail from "./components/ProjectDetail";
import Services from "./pages/Services";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Err />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <ProjectGallery />,
      },
      {
        path: "project/:id",
        element: <ProjectDetail />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "*",
        element: <Err />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
