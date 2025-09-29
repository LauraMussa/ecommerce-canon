"use client";
import { CiCircleAlert } from "react-icons/ci";
import ProductDetailCard from "@/components/ProductDetailCard";
import { getAllProducts } from "@/services/product.service";
import { ProductProps } from "@/types/products/ProductProps";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";

const ProductDetail = () => {
  const params = useParams();
  const [productList, setProductList] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        setProductList(products);
      } catch (error) {
        console.log(error);
        throw new Error(error as string);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <Loader />;
  return (
    <>
      {Number(params.productId) > productList.length ? (
        <div className="h-screen text-blue-50 flex flex-col gap-5 justify-center items-center">
          <span className="bg-slate-600 p-10  text-red-400  font-bold rounded-2xl flex items-center gap-1">
            <CiCircleAlert size={30} />
            <p className="text-2xl">PRODUCT NOT FOUND</p>
          </span>
          <Link
            href={"/"}
            className="cursor-pointer border-1 border-blue-50/50 px-4 py-2 rounded-2xl hover:border-transparent hover:bg-slate-500/50 "
          >
            Home
          </Link>
        </div>
      ) : (
        <div>
          <ProductDetailCard id={params.productId as string} />
        </div>
      )}
    </>
  );
};

export default ProductDetail;
