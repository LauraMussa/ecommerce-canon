import { ProductProps } from "@/types/products/ProductProps";
import axios from "axios";
import { useEffect, useState } from "react";
const url = "http://localhost:3001/products";
export function useFetch() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return { products };
}
