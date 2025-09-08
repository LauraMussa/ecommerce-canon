import { ProductProps } from "@/types/products/ProductProps";
import axios from "axios";

export const getAllProducts = async () => {
  try {
    const products = await fetch("http://localhost:3001/products");
    if (!products) throw Error;
    return products.json();
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id: string) => {
  try {
    const products = await getAllProducts();
    const productById = products.find((p: ProductProps) => p.id === Number(id));
    if (!productById) throw Error;
    return productById;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsAxios = async () => {
  try {
    const res = await axios.get("http://localhost:3001/products");
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const msg = error.response?.data.message;
      console.log(msg);
      return;
    }
    console.log(error);
  }
};
