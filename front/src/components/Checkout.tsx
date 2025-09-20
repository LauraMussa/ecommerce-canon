"use client";
import { useAuth } from "@/context/UserContext";
import React, { useEffect, useState } from "react";
import Loader from "./Loader/Loader";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

import { createOrdes } from "@/services/orders.services";
const Checkout = () => {
  const { user } = useAuth();
  const { getIdProducts, products, getTotal, clearCart } = useCart();
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user]);
  if (!user) return <Loader />;

  const handleOpen = () => {
    if (typeof window !== "undefined") {
      setShow(true);
    }
  };
  const handleClose = () => {
    if (typeof window !== "undefined") {
      setShow(false);
    }
  };
  const finalPrice = () => {
    const total = getTotal();
    const tax = total * 0.08;
    const savings = 0;
    return total + tax + savings;
  };
  const handleCheckout = async () => {
    try {
      if (products.length > 0) {
        await createOrdes(user?.token!, getIdProducts());
      }
      clearCart();
      alert("Purchase completed successfully!");
      router.replace("/dashboard");
    } catch (error) {
      throw new Error(error as string);
    }
  };

  return (
    <>
      {user ? (
        <section className="text-blue-50 py-8 antialiased dark:bg-gray-900 mx-5 rounded-2xl mt-10 md:py-16">
          <form
            action="#"
            className="mx-auto min-h-screen max-w-screen-2xl flex justify-center  items-center 2xl:px-0"
          >
            <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-15 xl:gap-40">
              <div className="min-w-0 flex-1 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold ">Delivery Details</h2>

                  <div className=" flex flex-col gap-4 sm:grid-cols-2">
                    <div className="flex gap-3">
                      <label htmlFor="address">Shipping Address:</label>
                      <p>{user.user.address}, M5500 GQM, Mendoza, Argentina</p>
                    </div>
                    <div
                      className={
                        show
                          ? "fixed inset-0 z-50 flex flex-col px-6  m-40 rounded-2xl bg-gray-700"
                          : "hidden"
                      }
                    >
                      <button
                        type="button"
                        onClick={handleClose}
                        className="text-right text-4xl p-3 cursor-pointer"
                      >
                        x
                      </button>
                      <div className=" flex flex-col gap-5 justify-center h-full">
                        <div className=" flex gap-5 justify-around">
                          <div className="w-full">
                            <label
                              htmlFor="your_name"
                              className="mb-2 block text-sm font-medium text-gray-900 dark:text-blue-50"
                            >
                              {" "}
                              Your name{" "}
                            </label>
                            <input
                              type="text"
                              id="your_name"
                              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-blue-50 dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                              placeholder="Bonnie Green"
                              required
                            />
                          </div>
                          <div className="w-full">
                            <label
                              htmlFor="your_email"
                              className="mb-2 block text-sm font-medium text-gray-900 dark:text-blue-50"
                            >
                              {" "}
                              Your email*{" "}
                            </label>
                            <input
                              type="email"
                              id="your_email"
                              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-blue-50 dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                              placeholder="name@email.com"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <div className="mb-2 flex items-center gap-2">
                            <label
                              htmlFor="select-country-input-3"
                              className="block text-sm font-medium text-gray-900 dark:text-blue-50"
                            >
                              {" "}
                              Country*{" "}
                            </label>
                          </div>
                          <input
                            id="select-country-input-3"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-blue-50 dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="Enter your country"
                          ></input>
                        </div>

                        <div>
                          <div className="mb-2 flex items-center gap-2">
                            <label
                              htmlFor="select-city-input-3"
                              className="block text-sm font-medium text-gray-900 dark:text-blue-50"
                            >
                              {" "}
                              City*{" "}
                            </label>
                          </div>
                          <input
                            id="select-city-input-3"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-blue-50 dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="Enter your city"
                          ></input>
                        </div>
                        <div>
                          <label
                            htmlFor="street_address"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-blue-50"
                          >
                            Street & Number*
                          </label>
                          <input
                            type="text"
                            id="street_address"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 
                          text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 
                          dark:border-gray-600 dark:bg-gray-700 dark:text-blue-50 
                          dark:placeholder:text-gray-400 dark:focus:border-primary-500 
                          dark:focus:ring-primary-500"
                            placeholder="123 Main St"
                            required
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            alert("Address added!");
                            handleClose();
                          }}
                          className="cursor-pointer w-2xl mx-auto flex items-center justify-center  rounded-lg border 0 bg-white px-5 py-2 text-sm font-medium  hover:text-primary-700 focus:outline-none focus:ring-4  border-gray-600 dark:bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-blue-50 "
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        onClick={handleOpen}
                        type="button"
                        className="cursor-pointer flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-blue-50 dark:focus:ring-gray-700"
                      >
                        <span className="text-2xl">+</span> Add new address
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-blue-50">
                    Payment
                  </h3>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="credit-card"
                            aria-describedby="credit-card-text"
                            type="radio"
                            name="payment-method"
                            value=""
                            className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                        </div>

                        <div className="ms-4 text-sm">
                          <label
                            htmlFor="credit-card"
                            className="font-medium leading-none text-gray-900 dark:text-blue-50"
                          >
                            {" "}
                            Credit Card{" "}
                          </label>
                          <p
                            id="credit-card-text"
                            className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                          >
                            Pay with your credit card
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-2">
                        <button
                          type="button"
                          className="cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-blue-50"
                        >
                          Delete
                        </button>

                        <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                        <button
                          type="button"
                          className="cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-blue-50"
                        >
                          Edit
                        </button>
                      </div>
                    </div>

                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="paypal-2"
                            aria-describedby="paypal-text"
                            type="radio"
                            name="payment-method"
                            value=""
                            className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                        </div>

                        <div className="ms-4 text-sm">
                          <label
                            htmlFor="paypal-2"
                            className="font-medium leading-none text-gray-900 dark:text-blue-50"
                          >
                            {" "}
                            Paypal account{" "}
                          </label>
                          <p
                            id="paypal-text"
                            className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                          >
                            Connect to your account
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-2">
                        <button
                          type="button"
                          className="cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-blue-50"
                        >
                          Delete
                        </button>

                        <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                        <button
                          type="button"
                          className=" cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-blue-50"
                        >
                          Edit
                        </button>
                      </div>
                    </div>

                    <div className="rounded-lg border flex flex-col justify-center border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="pay-on-delivery"
                            aria-describedby="pay-on-delivery-text"
                            type="radio"
                            name="payment-method"
                            value=""
                            className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                        </div>

                        <div className="ms-4  text-sm">
                          <label
                            htmlFor="pay-on-delivery"
                            className="font-medium leading-none text-gray-900 dark:text-blue-50"
                          >
                            {" "}
                            Payment on delivery{" "}
                          </label>
                          <p
                            id="pay-on-delivery-text"
                            className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                          >
                            +$15 payment processing fee
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-blue-50">
                    Delivery Methods
                  </h3>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="fedex"
                            aria-describedby="fedex-text"
                            type="radio"
                            name="delivery-method"
                            value=""
                            className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                        </div>

                        <div className="ms-4 text-sm">
                          <label
                            htmlFor="fedex"
                            className="font-medium leading-none text-gray-900 dark:text-blue-50"
                          >
                            {" "}
                            Free Delivery - FedEx{" "}
                          </label>
                          <p
                            id="fedex-text"
                            className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                          >
                            Get it by Friday, 13 Dec 2025
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="dhl"
                            aria-describedby="dhl-text"
                            type="radio"
                            name="delivery-method"
                            value=""
                            className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                        </div>

                        <div className="ms-4 text-sm">
                          <label
                            htmlFor="dhl"
                            className="font-medium leading-none text-gray-900 dark:text-blue-50"
                          >
                            {" "}
                            $15 - DHL Fast Delivery{" "}
                          </label>
                          <p
                            id="dhl-text"
                            className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                          >
                            Get it by Tommorow
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex items-start ">
                        <div className="flex h-5 items-center">
                          <input
                            id="express"
                            aria-describedby="express-text"
                            type="radio"
                            name="delivery-method"
                            value=""
                            className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          />
                        </div>

                        <div className="ms-4 text-sm">
                          <label
                            htmlFor="express"
                            className="font-medium leading-none text-gray-900 dark:text-blue-50"
                          >
                            {" "}
                            $49 - Express Delivery{" "}
                          </label>
                          <p
                            id="express-text"
                            className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                          >
                            Get it today
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                <div className="flow-root">
                  <div className="-my-3 divide-y divide-gray-200 text-blue-50 dark:divide-gray-800">
                    {products.map((item) => {
                      return (
                        <ul>
                          <li className="flex justify-between items-center  py-3 px-2 ">
                            <img
                              src={item.image}
                              alt={item.name}
                              width={80}
                              className="bg-gray-700 rounded-2xl p-2.5"
                            />
                            <span>{item.name}</span>
                            <span>${item.price}</span>
                          </li>
                        </ul>
                      );
                    })}
                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400"></dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-blue-50">
                        ${getTotal()}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-500">
                        0
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Store Pickup
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-blue-50">
                        $ {getTotal()}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Tax
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-blue-50">
                        $199
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-bold text-gray-900 dark:text-blue-50">
                        Total
                      </dt>
                      <dd className="text-base font-bold text-gray-900 dark:text-blue-50">
                        ${finalPrice()}
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleCheckout}
                    type="submit"
                    className="bg-slate-800
                    hover:bg-slate-700
                     cursor-pointer flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-blue-50 hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Proceed to Payment
                  </button>

                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    One or more items in your cart require an account.{" "}
                    <a
                      href="#"
                      title=""
                      className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                    >
                      Sign in or create an account now.
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </form>
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Checkout;
