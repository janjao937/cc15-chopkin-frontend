import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../page/HomePage";
import RestaurantPage from "../page/RestaurantPage";
import RegisterPage from "../page/RegisterPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/restaurant", element: <RestaurantPage /> },
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
