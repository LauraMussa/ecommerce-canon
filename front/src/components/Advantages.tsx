
'use client'
import { advantages } from "@/helpers/callouts";
import { useState } from "react";
export default function EosRAdvantages() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="text-white py-16 bg-[hsl(209,78%,9%)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Advantages of EOS R Cameras</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-gray-900/70 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transition-all duration-500"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 focus:outline-none"
                >
                  <div className="flex flex-col items-center">
                    <Icon className="w-12 h-12 mb-2 text-[#cba442]" />
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <span className="text-2xl">{isOpen ? "-" : "+"}</span>
                </button>
                <div
                  className={`px-6 transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
                  }`}
                >
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
