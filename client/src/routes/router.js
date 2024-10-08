import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../components/Layout";
import AllTeeniepings from "../pages/AllTeeniepings";
import TeeniepingDetail from "../pages/TeeniepingDetail";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AllTeeniepings />,
      },
      {
        path: "teeniepings/:teeniepingId",
        element: <TeeniepingDetail />,
      },
    ]
  },
]);

export default router;
