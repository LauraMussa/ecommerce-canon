"use client";
import ProductDetailCard from "@/components/ProductDetailCard";
import { useParams } from "next/navigation";
import React from "react";

const ProductDetail = () => {
  const params = useParams();

  return (
    <div>
      <ProductDetailCard id={params.productId as string} />
    </div>
  );
};

export default ProductDetail;
