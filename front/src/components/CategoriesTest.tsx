"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type Category = {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  price?: string;
};

const callouts: Category[] = [
  {
    name: "Cameras",
    description: "Descubrí la mejor tecnología Canon en cámaras DSLR y mirrorless.",
    imageSrc: "photo-1549366359-23c135d82f08.png",
    imageAlt: "Cameras Category",
    href: "/categories/1",
    price: "$999",
  },
  {
    name: "Camcorders",
    description: "Filmación profesional para cada proyecto.",
    imageSrc: "photo-1641671668696-f5061907290f.png",
    imageAlt: "Camcorders Category",
    href: "/categories/2",
    price: "$799",
  },
  {
    name: "Printers",
    description: "Impresoras de alta calidad para hogar y oficina.",
    imageSrc: "printer(4).png",
    imageAlt: "Printers Category",
    href: "/categories/3",
    price: "$299",
  },
  {
    name: "Accessories",
    description: "Accesorios esenciales para tus equipos Canon.",
    imageSrc: "image10.png",
    imageAlt: "Accessories Category",
    href: "/categories/4",
    price: "$49",
  },
];

export default function CategoriesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none">
        <h2 className="text-2xl font-bold text-blue-50 mb-6">
          Shop by Category
        </h2>

        <div className="flex flex-col gap-4">
          {callouts.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-700 overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => toggleIndex(index)}
                className={`w-full flex justify-between items-center px-6 py-4 text-lg font-semibold transition-colors ${
                  openIndex === index
                    ? "bg-blue-800 text-white"
                    : "bg-gray-800 text-blue-50"
                }`}
              >
                {item.name}
                {openIndex === index ? (
                  <FiChevronUp className="w-5 h-5 transition-transform duration-500" />
                ) : (
                  <FiChevronDown className="w-5 h-5 transition-transform duration-500" />
                )}
              </button>

              {/* Contenido expandible con transición */}
              <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="relative w-full h-[500px]">
                  {/* Imagen de fondo */}
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60" />
                  {/* Texto */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                    <h3 className="text-2xl font-bold mb-4">{item.name}</h3>
                    <p className="max-w-xl text-blue-100 mb-4">
                      {item.description}
                    </p>
                    {item.price && (
                      <span className="text-xl font-bold text-blue-300 mb-6">
                        {item.price}
                      </span>
                    )}
                    <Link
                      href={item.href}
                      className="rounded-xl bg-blue-600 px-6 py-3 text-white font-medium shadow-md hover:bg-blue-500 transition"
                    >
                      Comprar ahora
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
