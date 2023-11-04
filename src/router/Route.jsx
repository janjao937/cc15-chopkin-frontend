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
import DetailCustomerPage from "../page/admin/DetailCustomerPage";
import ViewEditingPage from "../page/admin/ViewEditingPage";
import DetailBookingPage from "../page/admin/DetailBookingPage";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import AuthenticatedAdmin from "../features/auth/AuthenticatedAdmin";
import ResEditPendingPage from "../page/ResEditPendingPage";
import AuthenticatedRestaurant from "../features/auth/AuthenticatedRestaurant";
import AuthenticatedCustomer from "../features/auth/AuthenticatedCustomer";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "", element: <HomePage /> },
			{ path: "/restaurant", element: <RestaurantPage /> },
			{ path: "/recommended", element: <RecommendedPage /> },
			{ path: "/all-restaurants", element: <AllRestuarantPage /> },
			{
				path: "/profile/:userId",
				element: (
					<AuthenticatedCustomer>
						<UserProfile />
					</AuthenticatedCustomer>
				),
			},
			{
				path: "/restaurant/:resId",
				element: (
					<AuthenticatedRestaurant>
						<RestaurantInfoPage />
					</AuthenticatedRestaurant>
				),
			},
			{
				path: "/restaurant/:resId/edit",
				element: (
					<AuthenticatedRestaurant>
						<ResEditPendingPage />
					</AuthenticatedRestaurant>
				),
			},
		],
	},
	{
		path: "/register",
		element: (
			<RedirectIfAuthenticated>
				<RegisterPage />
			</RedirectIfAuthenticated>
		),
	},
	{
		path: "/login",
		element: (
			<RedirectIfAuthenticated>
				<LoginPage />
			</RedirectIfAuthenticated>
		),
	},
	{
		path: "/register-restaurant",
		element: (
			<RedirectIfAuthenticated>
				<RegisterRestaurantPage />
			</RedirectIfAuthenticated>
		),
	},

	{
		path: "/admin",
		element: (
			<AuthenticatedAdmin>
				<LayoutAdmin />
			</AuthenticatedAdmin>
		),
		children: [
			{ path: "", element: <AdminPage /> },
			{ path: "list-restaurant", element: <AdminRestaurantPage /> },
			{ path: "new-restaurant", element: <NewRestaurantPage /> },
			{ path: "customer", element: <CustomerPage /> },
			{ path: "customer/:customerId", element: <DetailCustomerPage /> },
			{ path: "booking", element: <BookingPage /> },
			{ path: "booking/:bookingId", element: <DetailBookingPage /> },
			{ path: "edit", element: <EditingPage /> },
			{ path: "edit/:restaurantId", element: <ViewEditingPage /> },
		],
	},
]);

export default function Route() {
	return <RouterProvider router={router} />;
}
