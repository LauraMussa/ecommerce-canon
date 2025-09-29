"use client";

import { ProductProps } from "@/types/products/ProductProps";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "./UserContext";
import {
  getLocalStorage,
  removeLocalStorage,
  saveLocalStorage,
} from "@/hooks/localStorage";
import { Order } from "@/types/user/UserProps";
import { toastConfirm, toastError, toastSuccess } from "@/helpers/toast";

interface CartProps {
  products: ProductProps[];
  addToCart: (product: ProductProps) => void;
  removeFromCart: (productId: number) => void;
  getIdProducts: () => number[];
  clearCart: () => void;
  getTotal: () => number;
  getProductCount: () => number;
  orders: Order[];
  setOrders: Dispatch<SetStateAction<Order[]>>;
  error: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
  setDiscount: Dispatch<SetStateAction<number>>;
  discount: number;
}

const CartContext = createContext<CartProps>({
  products: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getIdProducts: () => [],
  clearCart: () => {},
  getTotal: () => 0,
  getProductCount: () => 0,
  orders: [],
  setOrders: () => {},
  error: null,
  setError: () => {},
  setDiscount: () => 0,
  discount: 0,
});

interface CartProviderProps {
  children: React.ReactElement;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const [discount, setDiscount] = useState<number>(0);

  useEffect(() => {
    if (user) {
      if (products.length > 0) {
        saveLocalStorage("cart", products);
      }
    }
  }, [products, user]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const cartData = getLocalStorage("cart");
      if (cartData) {
        setProducts(JSON.parse(cartData));
      }
    }
  }, []);

  const addToCart = (product: ProductProps) => {
    if (user?.user) {
      const productExist = products.some((item) => item.id === product.id);

      if (productExist) {
        toastError("Already in your cart");
        return;
      }
      setProducts((prev) => [...prev, product]);
      toastSuccess("Added!");
    } else {
      toastError("You must have an account");
      return;
    }
  };

  const removeFromCart = (productId: number) => {
    toastConfirm("Remove from cart", () => {
      const itemList = (prev: ProductProps[]) =>
        prev.filter((p) => p.id !== productId);
      setProducts(itemList);
    });
  };

  const clearCart = () => {
    if (products.length > 0) {
      setProducts([]);
      removeLocalStorage("cart");
    }
  };
  const getTotal = () => {
    const total = products.reduce((t, item) => t + item.price, 0);
    return total;
  };

  const getProductCount = () => {
    return products.length;
  };

  const getIdProducts = () => {
    return products.map((item) => item.id);
  };
  const values = {
    products,
    addToCart,
    removeFromCart,
    getTotal,
    getProductCount,
    clearCart,
    getIdProducts,
    orders,
    setOrders,
    error,
    setError,
    setDiscount,
    discount,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
