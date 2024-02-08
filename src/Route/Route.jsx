import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import News from "../Pages/News";
import Register from "../Login/Register";
import Login from "../Login/Login";
import NewsDetails from "../Pages/NewsDetails";
import Career from "../Pages/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("news.json"),
      },
      {
        path: "/news",
        element: <News></News>,
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
        element: <NewsDetails></NewsDetails>,
        loader: () => fetch("news.json"),
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
    ],
  },
]);

export default router;
