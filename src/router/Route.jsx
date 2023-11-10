import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../page/HomePage";
import RestaurantPage from "../page/RestaurantPage";
import RegisterPage from "../page/RegisterPage";
import LoginPage from "../page/LoginPage";
import RegisterRestaurantPage from "../page/RegisterRestaurantPage";
import RecommendedPage from "../page/RecommendPage";
import AllRestuarantPage from "../page/AllRestaurantPage";
import LayoutAdmin from "../layout/LayoutAdmin";
import AdminPage from "../page/admin/AdminPage";
import ListRestaurantPage from "../page/admin/ListRestaurantPage";
import NewRestaurantPage from "../page/admin/NewRestaurantPage";
import CustomerPage from "../page/admin/CustomerPage";
import BookingPage from "../page/admin/BookingPage";
import RestaurantInfoPage from "../page/RestuarantInfoPage";
import DetailCustomerPage from "../page/admin/DetailCustomerPage";
import ViewResPenddingEditPage from "../page/admin/ViewResPenddingEditPage";
import DetailBookingPage from "../page/admin/DetailBookingPage";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import AuthenticatedAdmin from "../features/auth/AuthenticatedAdmin";
import ResEditPendingPage from "../page/ResEditPendingPage";
import AuthenticatedRestaurant from "../features/auth/AuthenticatedRestaurant";
import AuthenticatedCustomer from "../features/auth/AuthenticatedCustomer";
import ResNationPage from "../page/ResNationPage";
import ResPenddingEditPage from "../page/admin/ResPenddingEditPage";
import PackagePage from "../page/admin/PackagePage";
import ViewPackagePendding from "../page/admin/ViewPackagePendding";
import ResEditPackagePage from "../page/ResEditPackagePage";
import Reservation from "../features/customer/Reservation";
import Favorite from "../features/customer/Favorite";
import BookHistory from "../features/customer/BookHistory";
import Voucher from "../features/customer/Voucher";
import Gift from "../features/customer/Gift";
import Benefits from "../features/customer/Benefits";
import Address from "../features/customer/Address";
import CusEditAccount from "../page/CusEditAccount";
import PaymentSuccessPage from "../page/PaymentSuccessPage";
import PaymentNotSuccessPage from "../page/PaymentNotSuccessPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "", element: <HomePage /> },
			{ path: "/restaurant", element: <RestaurantPage /> },
			{ path: "/recommended", element: <RecommendedPage /> },
			{ path: "/all-restaurants", element: <AllRestuarantPage /> },
			{ path: "/nation/:nationIndex", element: <ResNationPage /> },
			{
				path: "profile/:userId/",
				element: (
					<AuthenticatedCustomer>
						<Reservation />,
					</AuthenticatedCustomer>
				),
			},
			{
				path: "profile/:userId/favorite",
				element: (
					<AuthenticatedCustomer>
						<Favorite />
					</AuthenticatedCustomer>
				),
			},
			{
				path: "/profile/:userId/book-history",
				element: (
					<AuthenticatedCustomer>
						<BookHistory />
					</AuthenticatedCustomer>
				),
			},
			{
				path: "/profile/:userId/voucher",
				element: (
					<AuthenticatedCustomer>
						<Voucher />
					</AuthenticatedCustomer>
				),
			},
			{
				path: "/profile/:userId/gift",
				element: (
					<AuthenticatedCustomer>
						<Gift />
					</AuthenticatedCustomer>
				),
			},
			{
				path: "/profile/:userId/benefits",
				element: (
					<AuthenticatedCustomer>
						<Benefits />
					</AuthenticatedCustomer>
				),
			},
			{
				path: "/profile/:userId/address",
				element: (
					<AuthenticatedCustomer>
						<Address />
					</AuthenticatedCustomer>
				),
			},
			{
				path: "/profile/:userId/edit-account",
				element: (
					<AuthenticatedCustomer>
						<CusEditAccount />
					</AuthenticatedCustomer>
				),
			},

			// ############################# restaurant
			{
				path: "/restaurant/:resId",
				element: <RestaurantInfoPage />,
			},
			{
				path: "/restaurant/:resId/edit",
				element: (
					<AuthenticatedRestaurant>
						<ResEditPendingPage />
					</AuthenticatedRestaurant>
				),
			},
			{
				path: "/restaurant/:resId/edit/edit-package",
				element: (
					<AuthenticatedRestaurant>
						<ResEditPackagePage />
					</AuthenticatedRestaurant>
				),
			},
		],
	},
	{
		path: "/payment/:userId/success",
		element: (
			<AuthenticatedCustomer>
				<PaymentSuccessPage />
			</AuthenticatedCustomer>
		),
	},
	{
		path: "/payment/:userId/fail",
		element: (
			<AuthenticatedCustomer>
				<PaymentNotSuccessPage />
			</AuthenticatedCustomer>
		),
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

	// ############################# admin
	{
		path: "/admin",
		element: (
			<AuthenticatedAdmin>
				<LayoutAdmin />
			</AuthenticatedAdmin>
		),
		children: [
			{ path: "", element: <AdminPage /> },
			{ path: "list-restaurant", element: <ListRestaurantPage /> },
			{ path: "new-restaurant", element: <NewRestaurantPage /> },
			{ path: "customer", element: <CustomerPage /> },
			{ path: "customer/:customerId", element: <DetailCustomerPage /> },
			{ path: "booking", element: <BookingPage /> },
			{ path: "booking/:bookingId", element: <DetailBookingPage /> },
			{ path: "edit", element: <ResPenddingEditPage /> },
			{
				path: "edit/:resId",
				element: <ViewResPenddingEditPage />,
			},
			{ path: "package", element: <PackagePage /> },
			{
				path: "view-package/:packageId",
				element: <ViewPackagePendding />,
			},
		],
	},
]);

export default function Route() {
	return <RouterProvider router={router} />;
}
