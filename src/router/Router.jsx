import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Interests from "../pages/Interests";
import Awards from "../pages/Awards";
import Skills from "../pages/Skills";

const root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "interest",
        element: <Interests />,
      },
      {
        path: "awards",
        element: <Awards />,
      },
    ],
  },
]);

export default root;
