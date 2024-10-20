
import { createContext, useContext, useEffect, useState, useCallback } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("Token"));
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const storeToken = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("Token", serverToken);
  };

  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("Token");
  };

  const isLoggedIn = !!token;

  // JWT authentication to get the data of the user who is logged in

  const userAuth = useCallback(async () => {
    try {
      const res = await fetch("https://petcare-api.onrender.com/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (res.ok) {
        const data = await res.json();
        setUser({
          name: data.userData.name,
          email: data.userData.email,
          gender: data.userData.gender,
          phno: data.userData.phno,
          petname: data.userData.petname,
          petage: data.userData.petage,
          petweight: data.userData.petweight,
          typeofpet: data.userData.typeofpet,
        });
      }
    } catch (error) {
    }
  }, [token]);
  
  useEffect(() => {
    userAuth();
  }, [token, userAuth]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeToken, LogoutUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }

  return authContextValue;
};
