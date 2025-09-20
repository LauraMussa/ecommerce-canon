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

interface CartProps {
  products: ProductProps[];
  setProducts: Dispatch<SetStateAction<ProductProps[]>>;
  // setProducts: (product: ProductProps | null) => void;
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
}

const CartContext = createContext<CartProps>({
  products: [],
  setProducts: () => {},
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
});

interface CartProviderProps {
  children: React.ReactElement;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

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
        alert("You already have this product on your cart");
        return;
      }
      setProducts((prev) => [...prev, product]);
      alert("Added to cart");
    } else {
      alert("You must have an account");
      return;
    }
  };

  const removeFromCart = (productId: number) => {
    const itemList = (prev: ProductProps[]) =>
      prev.filter((p) => p.id !== productId);
    setProducts(itemList);
  };

  const clearCart = () => {
    if (products.length > 0) {
      alert("Are you sure?");
      setProducts([]);
      removeLocalStorage("cart");
    } else {
      alert("No products yet");
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
    setProducts,
    orders,
    setOrders,
    error,
    setError,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
