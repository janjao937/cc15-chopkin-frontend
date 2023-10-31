import React, { createContext, useState, useEffect } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/auth/me")
        .then((res) => {
          setAuthUser(res.data.user);
        })
        .finally(() => setInitialLoading(false));
    } else {
      setInitialLoading(false);
    }
  }, []);

  const register = async (registerInputObject) => {
    const res = await axios.post("/auth/register", registerInputObject);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const login = async (LoginInputObject) => {
    const res = await axios.post("/auth/login", LoginInputObject);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  return (
    <AuthContext.Provider value={{ initialLoading, register, login }}>
      {children}
    </AuthContext.Provider>
  );
}
