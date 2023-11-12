import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import { clientId } from "./config/env.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ResContextProvider from "./contexts/ResContext.jsx";
import BookingContextProvider from "./contexts/BookingContext.jsx";
import {Provider} from "react-redux";
import store from './app/store/store.js';

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<Provider store={store}>
	<GoogleOAuthProvider clientId={clientId}>
		<AuthContextProvider>
			<ResContextProvider>
				<BookingContextProvider>
					<App />
				</BookingContextProvider>
			</ResContextProvider>
		</AuthContextProvider>
	</GoogleOAuthProvider>
	</Provider>
	// </React.StrictMode>,
);
