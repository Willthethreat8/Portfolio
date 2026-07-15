import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";

// Pages chargées à la demande : réduit le bundle initial,
// chaque page n'est téléchargée qu'à la première navigation.
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        lazy: async () => ({ Component: (await import("./components/Home")).Home }),
      },
      {
        path: "competences",
        lazy: async () => ({ Component: (await import("./components/Skills")).Skills }),
      },
      {
        path: "projets",
        lazy: async () => ({ Component: (await import("./components/Projects")).Projects }),
      },
      {
        path: "experience",
        lazy: async () => ({ Component: (await import("./components/Experience")).Experience }),
      },
      {
        path: "hobbies",
        lazy: async () => ({ Component: (await import("./components/Hobbies")).Hobbies }),
      },
      {
        path: "contact",
        lazy: async () => ({ Component: (await import("./components/Contact")).Contact }),
      },
    ],
  },
]);
