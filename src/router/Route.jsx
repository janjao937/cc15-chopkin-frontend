import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../page/HomePage";
import RestaurantPage from "../page/RestaurantPage";
import RegisterPage from "../page/RegisterPage";
import LoginPage from "../page/LoginPage";
import RegisterRestaurantPage from "../page/RegisterRestaurantPage";
import RecommendedPage from "../page/RecommendPage";
import AllRestuarantPage from "../page/AllRestaurantPage";
import UserProfile from "../page/UserProfile";
import LayoutAdmin from "../layout/LayoutAdmin";
import AdminPage from "../page/admin/AdminPage";
import AdminRestaurantPage from "../page/admin/RestaurantPage";
import NewRestaurantPage from "../page/admin/NewRestaurantPage";
import CustomerPage from "../page/admin/CustomerPage";
import BookingPage from "../page/admin/BookingPage";
import EditingPage from "../page/admin/EditingPage";
import RestaurantInfoPage from "../page/RestuarantInfoPage";

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
      { path: "/restaurant/:restuarantId", element: <RestaurantInfoPage /> },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register-restaurant",
    element: <RegisterRestaurantPage />,
  },

  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      { path: "", element: <AdminPage /> },
      { path: "list-restaurant", element: <AdminRestaurantPage /> },
      { path: "new-restaurant", element: <NewRestaurantPage /> },
      { path: "customer", element: <CustomerPage /> },
      { path: "booking", element: <BookingPage /> },
      { path: "edit", element: <EditingPage /> },
    ],
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
