"use client";

import { loginUser, registerUser } from "@/services/user.service";
import { LoginType } from "@/validators/loginSchema";
import { RegisterType } from "@/validators/registerSchema";
import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
}

interface UserContextType {
  user: User | null;
  setUser: (u: User | null) => void;
  login: (values: LoginType) => void;
  register: (values: RegisterType) => void;
  loading: boolean;
  setToken: Dispatch<SetStateAction<string | null>>;
  token: string | null;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  login: async () => {},
  register: async () => {},
  loading: true,
  setToken: () => {},
  token: null,
});
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    const userToken = localStorage.getItem("userToken");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
        setToken(userToken);
        setLoading(false);
      } catch {
        localStorage.removeItem("user");
        localStorage.removeItem("userToken");
      }
    }
  }, []);

  const login = async (values: LoginType) => {
    try {
      const dataUser = await loginUser(values);
      localStorage.setItem("userToken", dataUser.token);
      localStorage.setItem("user", JSON.stringify(dataUser.user));
      console.log("mi user", localStorage.getItem("user"));
      console.log("mi user 2", user);

      setUser(dataUser.user);
      return dataUser;
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };

  const register = async (values: RegisterType) => {
    try {
      const dataUser = await registerUser(values);
      localStorage.setItem("user", JSON.stringify(dataUser.user));
      setUser(dataUser.user);
      return dataUser;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  return (
    <UserContext.Provider
      value={{ user, setUser, register, login, loading, setToken, token }}
    >
      {children}
    </UserContext.Provider>
  );
};
