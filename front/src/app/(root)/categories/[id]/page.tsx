"use client";
import { ParamProps, ProductProps } from "@/types/products/ProductProps";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/services/product.service";
const categoryId = ({ params }: ParamProps) => {
  const categoryNames = [
    { name: "Cameras" },
    { name: "Camcorders" },
    { name: "Printers" },
    { name: "Accessories" },
  ];
  const { id } = params;

  const [products, setProducts] = useState<ProductProps[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await getProductsByCategory(Number(id));
        setProducts(productList);
      } catch (error) {
        throw error;
      }
    };
    fetchProducts();
  }, [id]);
  return (
    <div className=" m-auto min-h-screen flex  justify-center">
      <div className=" py-16 sm:px-6 sm:py-24  lg:px-10 ">
        <h2 className="text-3xl font-bold text-blue-50 mb-6 ">
          {categoryNames[Number(id) - 1].name}
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3  lg:gap-x-8">
          {products.map((p, index) => {
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
};

export default categoryId;
