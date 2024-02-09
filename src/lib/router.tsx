import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Layout from "@/components/layout/Layout";
import CharacterDetailPage from "@/pages/CharacterDetailPage";
import NotFound from "@/pages/NotFound";
import ServerError from "@/pages/ErrorPage";
import ComicDetailPage from "@/pages/ComicDetailPage";
import SeriesDetailPage from "@/pages/SeriesDetailPage";
import CharacterPage from "@/pages/CharacterPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ServerError />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/characters", element: <CharacterPage /> },
        { path: "/characters/:id", element: <CharacterDetailPage /> },
        { path: "/comics/:id", element: <ComicDetailPage /> },
        { path: "/series/:id", element: <SeriesDetailPage /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    basename: import.meta.env.VITE_APP_BASEURL || "/",
  },
);

export default router;
