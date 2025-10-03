"use client";

import {
  getLocalStorage,
  removeLocalStorage,
  saveLocalStorage,
} from "@/hooks/localStorage";
import { createContext, useState, useEffect, useContext } from "react";
import { useCart } from "./CartContext";

interface User {
  login: boolean;
  user: {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: string;
    credentials: {
      id: number;
      password: string;
    };
    orders: [];
  };
  token: string;
}

interface UserProviderProps {
  children: React.ReactElement;
}

interface UserContextType {
  user: User | null;
  setUser: (u: User | null) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  logout: () => {},
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { clearCart } = useCart();
  useEffect(() => {
    if (user) {
      saveLocalStorage("user", user);
    }
  }, [user]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const dataUser = getLocalStorage("user");
      if (dataUser) {
        setUser(dataUser);
      }
    }
  }, []);

  const logout = () => {
    setUser(null);
    clearCart();
    if (typeof window !== "undefined" && window.localStorage) {
      removeLocalStorage("user");
      removeLocalStorage("cart");
      window.location.reload();
    }
  };
  const values = {
    user,
    setUser,
    logout,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useAuth = () => useContext(UserContext);
