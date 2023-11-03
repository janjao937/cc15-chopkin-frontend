const ACCESS_TOKEN = "ACCESS_TOKEN";

// create accessToken
export const addAccessToken = (token) =>
	localStorage.setItem(ACCESS_TOKEN, token);

// get accessToken
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

// del accessToken
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);
