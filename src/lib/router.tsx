import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Layout from "@/components/layout/Layout";
import CharacterPage from "@/pages/CharacterPage";
import NotFound from "@/pages/NotFound";
import ServerError from "@/pages/ErrorPage";
import ComicPage from "@/pages/ComicPage";
import SeriesPage from "@/pages/SeriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ServerError />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/character/:id", element: <CharacterPage /> },
      { path: "/comic/:id", element: <ComicPage /> },
      { path: "/series/:id", element: <SeriesPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
