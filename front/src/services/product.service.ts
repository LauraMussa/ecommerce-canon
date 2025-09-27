import { ProductProps } from "@/types/products/ProductProps";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getAllProducts = async () => {
  try {
    const products = await fetch(`${apiUrl}/products`);
    if (!products) throw Error;
    return await products.json();
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

