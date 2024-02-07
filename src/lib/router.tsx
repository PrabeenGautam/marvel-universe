import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Layout from "@/components/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="flex-center h-screen">Oops! Something went wrong!</div>
    ),
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default router;
