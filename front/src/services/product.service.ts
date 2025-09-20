import { ProductProps } from "@/types/products/ProductProps";
import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getAllProducts = async () => {
  try {
 
    const products = await fetch(`${apiUrl}/products`);
    if (!products) throw Error;
    return products.json();
  } catch (error) {
    console.log(error);
    throw new Error(error as string);
  }
};

export const getProductById = async (id: string) => {
  try {
    const products = await getAllProducts();
    const productById = products.find((p: ProductProps) => p.id === Number(id));
    if (!productById) throw new Error("Product not found");
    return productById;
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export const getProductsByCategory = async (id: number) => {
  try {
    const products = await getAllProducts();
    const productsByCategory = products.filter(
      (p: ProductProps) => p.categoryId === Number(id)
    );
    if (!productsByCategory) throw Error;
    return productsByCategory;
  } catch (error) {
    console.log(error);
    throw new Error(error as string);
  }
};

export const getProductsAxios = async () => {
  try {
    const res = await axios.get(`${apiUrl}/products`);
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
