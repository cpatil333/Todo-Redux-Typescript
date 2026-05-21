import { createBrowserRouter } from "react-router-dom";
import { userLoader } from "../loaders/userLoader";
import UserPage from "../pages/UserPage";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserPage />,
    loader: userLoader,
    errorElement:<ErrorPage/>
  },
]);