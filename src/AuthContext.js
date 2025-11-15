import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [cal, setCal] = useState(undefined);

  useEffect(() => {
    const savedUser = JSON.parse(sessionStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }

    const savedCal = JSON.parse(sessionStorage.getItem("cal"));
    if (savedCal) {
      setCal(savedCal);
    }
  }, []);

  const savecalories = (adjustedCalories) => {
    setCal(adjustedCalories);
    sessionStorage.setItem("cal", JSON.stringify(adjustedCalories));
  };

  const Admin = (isAuthenticated) => {
    setAdmin(isAuthenticated);
    sessionStorage.setItem("admin", JSON.stringify(isAuthenticated));
  };

  const login = (userData) => {
    // Check if the user has an "admin" role, otherwise default to "customer"
    const userWithRole = {
      ...userData,
      role: userData.role === "admin" ? "admin" : "customer",
    };
    
    setUser(userWithRole);
    sessionStorage.setItem("user", JSON.stringify(userWithRole));
  };

  const logout = () => {
    setUser(null);
    setCal(undefined);
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("cal");
  };

  return (
    <AuthContext.Provider value={{ user,admin, cal, savecalories , Admin , login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
