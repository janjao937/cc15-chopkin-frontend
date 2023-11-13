import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import { clientId } from "../env.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ResContextProvider from "./contexts/ResContext.jsx";
import BookingContextProvider from "./contexts/BookingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<GoogleOAuthProvider clientId={clientId}>
		<AuthContextProvider>
			<ResContextProvider>
				<BookingContextProvider>
					<App />
				</BookingContextProvider>
			</ResContextProvider>
		</AuthContextProvider>
	</GoogleOAuthProvider>

	// </React.StrictMode>,
);
