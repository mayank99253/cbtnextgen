import { createContext, useContext, useEffect, useState } from "react";

const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [adminToken, setAdminToken] = useState(
    localStorage.getItem("adminToken")
  );

  const isAdminAuth = !!adminToken;

  const login = (token) => {
    localStorage.setItem("adminToken", token);
    setAdminToken(token);
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setAdminToken(null);
  };

  return (
    <AdminAuthContext.Provider
      value={{ adminToken, isAdminAuth, login, logout }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
