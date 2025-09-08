"use client";
import { getAllProducts } from "@/services/product.service";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { ProductProps } from "@/types/products/ProductProps";

export default function Store() {
  const [productList, setProductList] = useState<ProductProps[] | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      const products = await getAllProducts();
      console.log("mis productos", products);
      setProductList(products);
    };
    getProducts();
  }, []);

  return (
    <div className=" min-h-screen flex justify-center">
      <div className="mx-auto  px-4 py-16 sm:px-6 sm:py-24 lg:px-8 ">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 ">
          {productList?.map((p, index) => {
            return (
              <div key={index}>
                <ProductCard
                  id={p.id}
                  name={p.name}
                  description={p.description}
                  price={p.price}
                  stock={p.stock}
                  image={p.image}
                  categoryId={p.categoryId}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
