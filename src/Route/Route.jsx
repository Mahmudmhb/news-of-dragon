import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import News from "../Pages/News";
import Register from "../Login/Register";
import Login from "../Login/Login";
import NewsDetails from "../Pages/NewsDetails";
import Career from "../Pages/Career";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/news",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsDetails></NewsDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/news.json"),
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
    ],
  },
]);

export default router;
