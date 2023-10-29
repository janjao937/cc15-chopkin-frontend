import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../page/HomePage";
import RestaurantPage from "../page/RestaurantPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/restaurant", element: <RestaurantPage /> },
		],
	},
]);

export default function Route() {
	return <RouterProvider router={router} />;
}
