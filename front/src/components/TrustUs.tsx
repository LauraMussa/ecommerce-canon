"use client";
import {
  TruckIcon,
  CheckBadgeIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function TrustSection() {
  const features = [
    {
      title: "Fast Shipping",
      description:
        "Get your order delivered to your doorstep in just a few days.",
      extra:
        "Enjoy 48–72 hour delivery nationwide with real-time tracking and secure packaging to ensure your camera arrives safely.",
      icon: TruckIcon,
    },
    {
      title: "Quality Guarantee",
      description: "All our products come with a 100% quality guarantee.",
      extra:
        "Every camera includes a 12-month warranty. If any defects appear, we provide hassle-free repair or replacement.",
      icon: CheckBadgeIcon,
    },
    {
      title: "Personalized Support",
      description: "Expert advice to help you choose the perfect camera.",
      extra:
        "Get free guidance on lenses, accessories, and setup, perfect for beginners and professionals alike.",
      icon: ChatBubbleLeftRightIcon,
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleOpen = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="mt-20">
      <h2 className="text-4xl mb-4 text-center text-blue-50">
        Get Canon Quality
      </h2>
      <section className="text-blue-50/80 py-10  flex items-center justify-center gap-36 ">
        <div className="w-5xl bg">
          <div className="flex flex-col gap-8  ">
            {features.map((item, idx) => {
              const Icon = item.icon;
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-gray-900/70  justify-between flex items-center rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
                >
                  <div>
                    <Icon className="w-12 h-12  mb-4 text-[#cba442]" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                  <div className="relative">
                    <div
                      className={
                        isOpen
                          ? "absolute -top-34 bg-gray-900/70 rounded-2xl w-md text-center p-6 -left-55"
                          : "hidden"
                      }
                    >
                      <p>{item.extra}</p>
                    </div>
                    <button
                      type="button"
                      className="text-2xl font-bold transition duration-200 hover:scale-110 border rounded-full px-2 cursor-pointer"
                      onClick={() => handleOpen(idx)}
                    >
                      {isOpen ? <p  className="px-[3px]">-</p> : <p>+</p>}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
