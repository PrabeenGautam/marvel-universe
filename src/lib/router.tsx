import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Layout from "@/components/layout/Layout";
import CharacterPage from "@/pages/CharacterPage";
import NotFound from "@/pages/NotFound";
import ServerError from "@/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ServerError />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/character/:id", element: <CharacterPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
