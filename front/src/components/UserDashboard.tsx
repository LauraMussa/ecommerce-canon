"use client";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import Loader from "./Loader/Loader";

const orders = [
  {
    id: 1,
    name: "Canon ES R8",
    total: 123,
    date: "12/12/2025",
    status: "Shipping",
  },
  {
    id: 2,
    name: "Canon ES R8",
    total: 123,
    date: "12/12/2025",
    status: "Cancelled",
  },
  {
    id: 3,
    name: "Canon ES R8",
    total: 123,
    date: "12/12/2025",
    status: "Shipping",
  },
  {
    id: 4,
    name: "Canon ES R8",
    total: 123,
    date: "12/12/2025",
    status: "Delivered",
  },
];
const paymentMethods = [
  { name: "Credit Card", type: "Visa", last4: "1234" },
  { name: "PayPal" },
];

export default function UserDashboard() {
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user]);

  return (
    <>
      {user ? (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-blue-50 flex flex-col">
          <section className="flex flex-col items-center text-center p-6">
            <img
              src="https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
              alt="profile picture"
              className="w-24 h-24 rounded-full object-cover border-4 border-orange-300 shadow-md"
            />
            <h2 className="mt-4 text-2xl font-semibold">{user.name}</h2>
            <p className="text-slate-300">{user.email}</p>
            <p className="text-slate-400">{user.phone}</p>

            <div className="mt-6 grid gap-4 w-full md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-slate-800 p-4 rounded-lg shadow border border-slate-700">
                <p className="text-slate-400 text-sm">Birthdate</p>
                <p className="font-medium">31/12/1994</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg shadow border border-slate-700">
                <p className="text-slate-400 text-sm">Address</p>
                <p className="font-medium">{user.address}</p>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg shadow border border-slate-700">
                <p className="text-slate-400 text-sm">Payment Methods</p>
                Visa **** 1234, PayPal
              </div>
            </div>
          </section>
          <section className="px-6 py-8">
            <h3 className="text-xl font-semibold mb-4">Last Orders</h3>
            <div className="grid gap-4 md:grid-cols-2 ">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-slate-800 p-4 rounded-lg shadow border border-slate-700 hover:border-orange-400 transition"
                >
                  <p className="text-slate-400 text-sm">Order #{order.id}</p>
                  <p className="font-medium">{order.name}</p>
                  <p className="flex gap-1 items-center">
                    Status:
                    <span
                      className={
                        order.status === "Cancelled"
                          ? "text-red-500"
                          : order.status === "Delivered"
                          ? "text-green-500 text-sm"
                          : "text-orange-400 text-sm"
                      }
                    >
                      {order.status}
                    </span>
                  </p>
                  <p className="font-semibold mt-2">Total: ${order.total}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
