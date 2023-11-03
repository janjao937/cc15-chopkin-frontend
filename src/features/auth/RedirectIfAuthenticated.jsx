import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/use-auth";

export default function RedirectIfAuthenticated({ children }) {
	const { authUser } = useAuth();
	console.log("authUser =>", authUser);

	if (authUser) {
		if (authUser?.isAdmin) {
			return <Navigate to="/admin" />;
		}
		return <Navigate to="/" />;
	}
	return children;
}
