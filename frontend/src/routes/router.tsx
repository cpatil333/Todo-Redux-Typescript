import { createBrowserRouter } from "react-router-dom";
import { userLoader } from "../loaders/userLoader";
import UserPage from "../pages/UserPage";
import ErrorPage from "../pages/ErrorPage";
import Navbar from "../components/nav/Navbar";
import TodoPage from "../pages/TodoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <UserPage />,
        loader: userLoader,
      },
      { path: "/todos", element: <TodoPage /> },
    ],
  },
]);
