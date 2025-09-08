// components/FeaturedProductExample.tsx
import Image from "next/image";
import React from "react";

const FeaturedProductExample: React.FC = () => {
  return (
    <section className="relative w-full max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6 text-white">
      
      {/* Imagen del producto */}
      <div className="w-full md:w-1/2 relative h-64 md:h-80 flex-shrink-0 overflow-hidden rounded-xl">
        <Image
          src="/images/canon-eos-r6.png" // Reemplaza con la ruta real de tu imagen
          alt="Cámara Canon EOS R6"
          fill
          style={{ objectFit: "contain" }}
          className="transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Información del producto */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
        <h2 className="text-3xl font-bold">Cámara Canon EOS R6</h2>
        <p className="text-blue-200">
          La cámara profesional para fotógrafos exigentes, con sensor full-frame
          y enfoque automático ultrarrápido.
        </p>
        <p className="text-2xl font-semibold">$2,599.99</p>

        <a
          href="/products/canon-eos-r6"
          className="mt-4 inline-block bg-blue-600 hover:bg-blue-500 transition-colors duration-300 text-white font-medium py-2 px-6 rounded-lg text-center"
        >
          Ver Producto
        </a>
      </div>
    </section>
  );
};

export default FeaturedProductExample;
