"use client";
import { useAuth } from "@/context/UserContext";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

import { createOrdes } from "@/services/orders.service";
import Image from "next/image";
import { toastSuccess } from "@/helpers/toast";
import AddressSelector from "./AddressSelector";
import PaymentMethods from "./PaymentMethods";
import DeliveryMethods from "./DeliveryMethods";
const Checkout = () => {
  const { user } = useAuth();
  const { getIdProducts, products, getTotal, clearCart, discount } = useCart();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<string>("credit-card");
  const [additionalAddresses, setAdditionalAddresses] = useState<
    { street: string; city: string; country: string }[]
  >([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    street: "",
  });

  const [selectedAddress, setSelectedAddress] = useState<string>(
    user ? user.user.address : ""
  );
  const [selectedDelivery, setSelectedDelivery] = useState<string>("fedex");
  
  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user, router]);
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

  const handleAddAddress = () => {
    setAdditionalAddresses((prev) => [
      ...prev,
      {
        street: formData.street,
        city: formData.city,
        country: formData.country,
      },
    ]);
    toastSuccess("Address added");
    handleClose();

    setFormData({ ...formData, street: "", city: "", country: "" });
  };

  const finalPrice = () => {
    const total = getTotal();
    const tax = total * 0.08;
    return total + tax - discount;
  };

  const handleCheckout = async () => {
    try {
      if (!user?.token) {
        throw new Error("No user token found");
      }
      if (products && products.length > 0) {
        await createOrdes(user.token, getIdProducts());
      }
      clearCart();
      toastSuccess("Purchase completed successfully!");
      router.replace("/dashboard");
    } catch (error) {
      throw new Error(error as string);
    }
  };

  return (
    <>
      {user ? (
        <section className="text-blue-50 py-8 antialiased dark:bg-gray-900 mx-5 p-4 rounded-2xl mt-10 md:py-16">
          <form className="mx-auto min-h-screen max-w-screen-2xl flex justify-center  items-center 2xl:px-0">
            <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-15 xl:gap-40">
              <div className="min-w-0 flex-1 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold ">Delivery Details</h2>

                  <AddressSelector
                    userAddress={user.user.address}
                    additionalAddresses={additionalAddresses}
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                    formData={formData}
                    setFormData={setFormData}
                    handleAddAddress={handleAddAddress}
                    show={show}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-blue-50">
                    Payment
                  </h3>

                  <PaymentMethods
                    selectedPayment={selectedPayment}
                    setSelectedPayment={setSelectedPayment}
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-blue-50">
                    Delivery Methods
                  </h3>

                  <DeliveryMethods
                    selectedDelivery={selectedDelivery}
                    setSelectedDelivery={setSelectedDelivery}
                  />
                </div>
              </div>

              <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                <div className="flow-root">
                  <div className="-my-3 divide-y divide-gray-200 text-blue-50 dark:divide-gray-800">
                    {products.map((item, index) => {
                      return (
                        <ul key={index}>
                          <li className="flex justify-between items-center  py-3 px-2 ">
                            <Image
                              height={100}
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
                        $ {discount}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Tax
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-blue-50">
                        $ {getTotal() * 0.08}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-bold text-gray-900 dark:text-blue-50">
                        Total
                      </dt>
                      <dd className="text-base font-bold text-gray-900 dark:text-blue-50">
                        $ {finalPrice()}
                      </dd>
                    </dl>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleCheckout}
                    type="button"
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
