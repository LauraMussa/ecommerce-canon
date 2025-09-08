"use client";
import { ProductProps } from "@/types/products/ProductProps";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const ProductCard = (product: ProductProps) => {
  return (
    <div className="bg-gray-900/80 text-blue-50 w-lg rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl">
      <div className=" w-full h-52 flex items-center justify-center bg-gradient-to-b from-[#5f7088] to-gray-900/70 p-4">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="max-h-40 object-contain drop-shadow-2xl"
        />
      </div>

      <div className="flex flex-col items-center text-center px-6 py-4 gap-2 flex-grow">
        <h3 className="text-xl font-bold text-blue-50">{product.name}</h3>

        <div className="flex  flex-col items-center justify-center gap-2">
          {product.stock > 0 ? (
            <p className="text-sm text-green-500">✔ In stock</p>
          ) : (
            <p className="text-sm text-gray-500">Out of stock</p>
          )}
          <div className="flex gap-2 items-center">
            <span className="line-through text-gray-500 text-sm">
              ${product.price}
            </span>
            <span className="text-blue-50 font-bold">${product.price}</span>
          </div>
        </div>

        <div className="flex gap-2 w-full items-center">
          <Link
            href={"/cart"}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-900 text-blue-50 hover:bg-transparent hover:text-blue-50/90 hover:border-blue-50 border border-transparent rounded-full p-2   transition"
          >
            <span>Add</span>
            <HiOutlineShoppingBag size={20} />
          </Link>
          <Link
            href={`/product/${product.id}`}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-900 text-blue-50 hover:bg-transparent hover:text-blue-50/90 hover:border-blue-50 border border-transparent rounded-full p-2   transition"
          >
            <span>View Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
