"use client";

import { useAuth } from "@/context/UserContext";

import Link from "next/link";
import { useEffect } from "react";
import { GoTrash } from "react-icons/go";
import { useRouter } from "next/navigation";
import Loader from "./Loader/Loader";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { toastConfirm, toastError } from "@/helpers/toast";
const Cart = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { removeFromCart, getTotal, getProductCount, products, clearCart } =
    useCart();

  useEffect(() => {
    if (!user) router.replace("/login");
  }, [user, router]);

  const handleClear = () => {
    if (products.length > 0) {
      toastConfirm(
        "Clear cart",
        () => {
          clearCart();
        },
        () => {}
      );
    } else {
      toastError("No products yet");
    }
  };
  return (
    <>
      {user ? (
        <div className="max-w-3xl mx-4 md:mx-auto p-6 bg-gray-900/70 rounded-2xl my-15 text-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-50">
            Shopping Cart
          </h2>
          <ul className="divide-y divide-gray-700">
            {getProductCount() > 0 ? (
              <p className="text-right text-lg font-light my-2 p-3">
                Products:{" "}
                <span className="text-accent-yellow font-medium">
                  {getProductCount()}
                </span>
              </p>
            ) : null}

            {products?.length ? (
              products?.map((p) => (
                <li key={p.id} className="flex py-6 gap-6">
                  <Image
                    width={100}
                    height={100}
                    src={p.image}
                    alt={p.name}
                    className="h-24 w-24 bg-gray-700 p-2 rounded-md object-cover border border-gray-700"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium text-blue-50">{p.name}</h3>
                      </div>
                      <p className="text-blue-50 font-semibold">
                        ${p.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex justify-between items-end mt-2">
                      <button
                        onClick={() => removeFromCart(p.id)}
                        className="text-sm font-medium text-red-400 hover:scale-110 transition duration-200 cursor-pointer"
                      >
                        <GoTrash size={19} />
                      </button>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <div className="flex flex-col gap-3 justify-center items-center min-h-40">
                <p className="border-none text-2xl  ">No products yet.</p>
                <Link
                  href={"/shop"}
                  className="text-accent-yellow hover:underline"
                >
                  Add now
                </Link>
              </div>
            )}
          </ul>
          <div className="flex justify-between border-t border-gray-700 pt-6 mt-6">
            <p className="font-medium text-gray-200">Subtotal</p>
            <p className="font-medium text-white">${getTotal()}</p>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Shipping and taxes will be calculated at checkout.
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleClear}
              className="w-full border-red-500/50 hover:scale-102 transition-all duration-200 border-1 cursor-pointer text-blue-50 py-3 rounded-lg mt-6 font-medium shadow-lg hover:shadow-red-900/30"
            >
              Clear Cart
            </button>
            <Link
              href={products.length > 0 ? "/checkout" : "/shop"}
              className="w-full border-blue-500/50 text-center hover:scale-102 transition-all duration-200 border-1 cursor-pointer text-blue-50 py-3 rounded-lg mt-6 font-medium shadow-lg hover:shadow-blue-900/30"
            >
              Checkout
            </Link>
          </div>
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
            <label htmlFor="descount" className="text-sm md:text-base">
              Do you have a voucher or gift card?
            </label>
            <div className="flex items-center">
              <input
                type="text"
                name="descount"
                className="bg-slate-500/30 h-9 text-font-dark indent-2 focus:outline-none rounded-s-lg"
              />
              <button className="border-blue-600/50 border-1 px-4 h-9 text-xs md:text-base rounded-e-lg hover:bg-blue-500/50 cursor-pointer">
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
