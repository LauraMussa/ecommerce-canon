"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import Loader from "./Loader/Loader";
import { getOrders } from "@/services/orders.service";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { IoReload } from "react-icons/io5";
import Image from "next/image";
export default function UserDashboard() {
  const { user } = useAuth();
  const { orders, setOrders, setError, error } = useCart();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  const [show, setShow] = useState<number | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (!user?.token) {
          throw Error("Token not found");
        }
        const ordersList = await getOrders(user?.token);
        setOrders(ordersList);
        setError(null);
      } catch (error) {
        if (error) setError(`Error loading orders`);
        console.log(error);
      }
    };

    fetchOrders();
  }, [user?.token, setError, setOrders]);

  const totalOrder = (id: number) => {
    const order = orders.find((o) => o.id === id);

    return order?.products.reduce((total, item) => (total += item.price), 0);
  };

  const handleOpen = (id: number) => {
    if (typeof window !== "undefined") {
      setShow(show === id ? null : id);
    }
  };
  const handleClose = () => {
    if (typeof window !== "undefined") {
      setShow(null);
    }
  };
  return (
    <>
      {user ? (
        <div className="min-h-screen bg-slate-900 text-blue-50 flex flex-col mx-5 md:mx-20 rounded-2xl mt-10">
          <section className="flex flex-col items-center text-center p-6">
            <Image
              width={100}
              height={100}
              src="https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
              alt="profile picture"
              className="w-24 h-24 rounded-full object-cover border-4 border-orange-300 shadow-md"
            />
            <h2 className="mt-4 text-2xl font-semibold">{user.user.name}</h2>
            <p className="text-slate-300">{user.user.email}</p>
            <p className="text-slate-400">{user.user.phone}</p>

            <div className="mt-6 grid gap-4 w-full md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-slate-800 p-4 rounded-lg shadow border border-slate-700">
                <p className="text-slate-400 text-sm">Birthdate</p>
                <p className="font-medium">31/12/1994</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg shadow border border-slate-700">
                <p className="text-slate-400 text-sm">Address</p>
                <p className="font-medium">{user.user.address}</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg shadow border border-slate-700">
                <p className="text-slate-400 text-sm">Payment Methods</p>
                Visa **** 1234, PayPal
              </div>
            </div>
          </section>
          <section className="px-6 py-8">
            <h3 className="text-xl font-semibold mb-4">Last Orders</h3>
            <div className=" gap-4 flex flex-col ">
              {error ? (
                <div className=" flex  flex-col  gap-3 justify-center items-center text-blue-50 ">
                  <p className="text-red-500 text-2xl p-4">{error}</p>
                  <button
                    className=" flex items-center gap-2 cursor-pointer py-2 px-4 bg-slate-600 rounded-lg hover:bg-slate-500"
                    onClick={() => window.location.reload()}
                  >
                    Reload
                    <IoReload />
                  </button>
                </div>
              ) : orders.length > 0 ? (
                orders.map((order) => {
                  const isOpen = show === order.id;
                  return (
                    <>
                      <div
                        key={order.id}
                        className="bg-slate-800 py-4 text-sm relative gap-3 px-3 md:px-6 rounded-lg flex justify-between items-center shadow border border-slate-700  hover:border-orange-300 transition "
                      >
                        <div>
                          <p className="text-slate-400 text-sm">
                            Order #{order.id}
                          </p>
                          <p className="flex gap-1">
                            <span className="hidden md:block">Date:</span>{" "}
                            {order.date.slice(0, 10)}
                          </p>
                          <p className="flex gap-1 items-center">
                            Status:
                            <span className={"text-green-500 text-sm"}>
                              {order.status}
                            </span>
                          </p>
                          <p className="font-semibold mt-2">
                            Total: $ {totalOrder(order.id)}
                          </p>
                        </div>
                        <button
                          className="cursor-pointer hover:scale-105 transition duration-100 bg-slate-900/70 h-[fit-content] text-sm md:text-base px-3 py-2 rounded-2xl "
                          onClick={() => handleOpen(order.id)}
                        >
                          Items
                        </button>
                        <div
                          className={`absolute right-0 top-1/2 -translate-y-1/2 
    gap-4 px-6 py-3 rounded-2xl bg-slate-700 
    transition-all duration-300 ease-in-out z-50
    ${
      isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
    }`}
                        >
                          <div className="h-[fit-content]">
                            <p className="text-slate-300 text-sm text-center my-1">
                              Order #{order.id}
                            </p>
                            {order.products.map((item) => {
                              return (
                                <>
                                  <Link
                                    href={`/product/${item.id}`}
                                    title="View details"
                                    className="flex hover:scale-105 cursor-pointer transform duration-200"
                                  >
                                    {item.name}
                                  </Link>
                                </>
                              );
                            })}
                            <button
                              onClick={handleClose}
                              className="cursor-pointer mx-auto flex mt-4 px-3 py-1 rounded-2xl bg-slate-800 hover:shadow-amber-50 hover:scale-107 transition duration-200 text-blue-50"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <div className="mx-auto text-center flex flex-col items-center  justify-center h-100">
                  <p className="text-2xl">No orders yet.</p>

                  <span className="flex items-center gap-2">
                    <Link
                      href={"/shop"}
                      className="hover:cursor-pointer hover:underline text-accent-yellow"
                    >
                      Add now
                    </Link>
                  </span>
                </div>
              )}
            </div>
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
