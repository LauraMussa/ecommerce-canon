"use client";
import ProductDetailCard from "@/components/ProductDetailCard";
import { useParams } from "next/navigation";

const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <div>
        <ProductDetailCard id={params.productId as string} />
      </div>
    </>
  );
};

export default ProductDetail;
