"use client";
import { ParamProps } from "@/types/products/ProductProps";
import React from "react";
import { useFetch } from "@/hooks/useFetch";
import ProductCard from "@/components/ProductCard";
const categoryId = ({ params }: ParamProps) => {
  const categoryNames = [
    { name: "Cameras" },
    { name: "Camcorders" },
    { name: "Printers" },
    { name: "Accessories" },
  ];
  const { id } = params;
  console.log("mi id", id);
  const fetchList = useFetch();
  const categoryList = fetchList.products.filter((p) => {
    return p.categoryId === Number(id);
  });
  let categoryId = Number(id);
  console.log("lista", categoryList);
  console.log(categoryList[categoryId]);

  return (
    <div className=" m-auto min-h-screen flex  justify-center">
      <div className=" py-16 sm:px-6 sm:py-24  lg:px-10 ">
        <h2 className="text-3xl font-bold text-blue-50 mb-6 ">
          {categoryNames[categoryId - 1].name}
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3  lg:gap-x-8">
          {categoryList.map((p, index) => {
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
