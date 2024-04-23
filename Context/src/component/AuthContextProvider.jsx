import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuth: false,
    loading: false,
    error: null,
    token: "",
  });

  const login = async (email, password) => {
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        setAuthState({
          ...authState,
          isAuth: true,
          loading: false,
          token: data.token,
          error: null, // Reset error state on successful login
        });
      } else {
        // Handle non-okay responses (e.g., 400, 401, etc.)
        const data = await response.json();
        setAuthState({
          ...authState,
          loading: false,
          error: data.error || "Unknown error occurred",
        });
      }
    } catch (error) {
      // Handle network errors and other exceptions
      console.error("Fetch error:", error);
      setAuthState({
        ...authState,
        loading: false,
        error: "An error occurred while processing the request",
      });
    }
    
  };

  const logout = () => {
    setAuthState({
      isAuth: false,
      loading: false,
      error: null,
      token: "",
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


