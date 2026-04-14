import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Hobbies } from "./components/Hobbies";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "competences", Component: Skills },
      { path: "projets", Component: Projects },
      { path: "experience", Component: Experience },
      { path: "hobbies", Component: Hobbies },
      { path: "contact", Component: Contact },
    ],
  },
]);