import React, { useContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  function isUserLoggedIn() {
    return isLoggedIn;
  }

  useEffect(() => {
    let token = localStorage.getItem("token")?.toString() || "";

    try {
      let u = jwt_decode(token);
      if (u) {
        setIsLoggedIn(true);
        setUser(u);
      }
    } catch (error) {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const value = {
    isUserLoggedIn,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
