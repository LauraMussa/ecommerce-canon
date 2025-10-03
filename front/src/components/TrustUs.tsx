"use client";
import { trustUs } from "@/helpers/callouts";

import { useState } from "react";

export default function TrustSection() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleOpen = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="mt-20 px-20">
      <h2 className="text-2xl lg:text-4xl lg:mb-2 text-center text-blue-50">
        Get Canon Quality
      </h2>
      <section className="text-blue-50/80 py-10  flex items-center justify-center gap-36 ">
        <div className="w-5xl bg">
          <div className="flex flex-col gap-8  ">
            {trustUs.map((item, idx) => {
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
                    <p className="text-gray-300 hidden lg:block">
                      {item.description}
                    </p>
                  </div>
                  <div className="relative">
                    <div className="relative">
                      {isOpen && (
                        <div className="absolute top-full mt-4 left-1/2 text-center -translate-x-1/2 bg-gray-900/90 rounded-2xl w-64 p-6 z-50">
                          <p>{item.extra}</p>
                        </div>
                      )}
                      <button
                        type="button"
                        className="text-2xl font-bold transition duration-200 hover:scale-110 border rounded-full px-2 cursor-pointer"
                        onClick={() => handleOpen(idx)}
                      >
                        {isOpen ? <p className="px-[3px]">-</p> : <p>+</p>}
                      </button>
                    </div>
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
