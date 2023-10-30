import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../page/HomePage";
import RestaurantPage from "../page/RestaurantPage";
import RegisterPage from "../page/RegisterPage";
import RecommendedPage from "../page/RecommendPage";
import AllRestuarantPage from "../page/AllRestaurantPage";
import UserProfile from "../page/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/restaurant", element: <RestaurantPage /> },
      { path: "/recommended", element: <RecommendedPage /> },
      { path: "/all-restaurants", element: <AllRestuarantPage /> },
      { path: "/profile/:userId", element: <UserProfile /> },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
