"use client";

import { UserContext } from "@/context/UserContext";
import { ProductList, ProductProps } from "@/types/products/ProductProps";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";
import { useRouter } from "next/navigation";
import Loader from "./Loader/Loader";

const Cart = ({ productsArray }: ProductList) => {
  const router = useRouter();
  const { user } = useContext(UserContext);

  const [products, setProducts] = useState<ProductProps[]>(productsArray);
  const subtotal = products.reduce((acc, p) => acc + p.price, 0);
  const removeFromCart = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  useEffect(() => {
    if (!user) router.replace("/login");
  }, []);

  return (
    <>
      {user ? (
        <div className="max-w-3xl mx-auto p-6 bg-gray-900/70 rounded-2xl my-15 text-gray-100">
          <h1 className="text-2xl font-bold mb-6 text-center text-blue-50">
            Shopping Cart
          </h1>

          <ul className="divide-y divide-gray-700">
            {products.map((product) => (
              <li key={product.id} className="flex py-6 gap-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-24 w-24 bg-blue-50/90 p-2 rounded-md object-cover border border-gray-700"
                />
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-blue-50">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {product.description}
                      </p>
                    </div>
                    <p className="text-blue-50 font-semibold">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex justify-between items-end mt-2">
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-sm font-medium text-red-400 hover:scale-110 transition duration-200 cursor-pointer"
                    >
                      <GoTrash size={19} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between border-t border-gray-700 pt-6 mt-6">
            <p className="font-medium text-gray-200">Subtotal</p>
            <p className="font-medium text-white">${subtotal.toFixed(2)}</p>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Shipping and taxes will be calculated at checkout.
          </p>

          <button className="w-full bg-blue-800 hover:bg-blue-700 cursor-pointer text-white py-3 rounded-lg mt-6 font-medium shadow-lg shadow-purple-900/50">
            Checkout
          </button>

          <div className="text-center mt-4">
            <Link
              href="/shop"
              className="text-sm flex items-center justify-center gap-1 text-blue-100  font-medium"
            >
              <span className="hover:underline active:underline">
                or Continue Shopping{" "}
              </span>

              <span>&rarr;</span>
            </Link>
          </div>
          <div className="  justify-center gap-3 items-center my-7 flex-col flex md:flex-row ">
            <label htmlFor="descount">
              Do you have a voucher or gift card?
            </label>
            <div className="flex items-center">
              <input
                type="text"
                name="descount"
                className="bg-blue-50 h-9 text-font-dark indent-2 focus:outline-none rounded-s-lg"
              />
              <button className="bg-blue-600 px-4 h-9 rounded-e-lg hover:bg-blue-500 cursor-pointer">
                Apply Code
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Cart;
