import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import UserDashboard from "../pages/app/user/dashboard";
import ErrorPage from "../components/hoc/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/user",
        children: [
          {
            index: true,
            element: <UserDashboard />,
          },
        ],
      },
    ],
  },
]);

export default router;
