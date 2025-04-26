// src/context/AuthContext.js

"use client"; // Add this line at the top

import { createContext, useContext, useState } from "react";
import { usePostMutation } from "../_services/networkRequestServices";
import { clientComponentApiEndpoints } from "../_services/apiEndpoints";
import toast from "react-hot-toast";

// 1. Create the context
const AuthContext = createContext(null);

// 2. Provider component
export const AuthProvider = ({ children }) => {
  const { mutate: registerMutate, isPending: registerIsPending } =
    usePostMutation(
      clientComponentApiEndpoints.USER.REGISTER,
      handleRegisterSuccess,
      handleRegisterError
    );

  const { mutate: loginMutate, isPending: loginIsPending } = usePostMutation(
    clientComponentApiEndpoints.USER.LOGIN,
    handleLoginSuccess,
    handleLoginError
  );

  const login = (userData) => {
    loginMutate(userData);
  };

  const register = (userData) => {
    registerMutate(userData);
  };

  const logout = () => {};

  function handleRegisterSuccess({ data }) {
    toast.success(
      data?.message || "Registration successful! Please check your email."
    );
  }

  function handleRegisterError(error) {
    toast.error(
      error?.response?.data?.message ||
        "An error occurred during registration. Please try again."
    );
  }

  function handleLoginSuccess({ data }) {
    toast.success(data?.message || "Login successful!");
  }

  function handleLoginError(error) {
    toast.error(
      error?.response?.data?.message || "An error occurred during login."
    );
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        logout,
        loadingRegister: registerIsPending,
        loadingLogin: loginIsPending,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom hook to access context easily
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
