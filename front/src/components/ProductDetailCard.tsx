// import { getProductById } from "@/services/product.service";

// import { CiCircleAlert } from "react-icons/ci";
// import { TbCancel } from "react-icons/tb";

// import { ProductProps } from "@/types/products/ProductProps";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { HiOutlineShoppingBag } from "react-icons/hi2";
// import Loader from "./Loader/Loader";
// import { useCart } from "@/context/CartContext";
// import Link from "next/link";
// const ProductDetailCard = ({ id }: { id: string }) => {
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState<ProductProps | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     const fetchProduct = async () => {
//       try {
//         const productById = await getProductById(id);
//         setProduct(productById);
//       } catch (error) {
//         console.log(error);
//         new Error(error as string);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProduct();
//   }, [id]);
//   if (loading) return <Loader />;

//   let oldPrice = 0;
//   if (product?.price) oldPrice = product?.price + 500;

//   return (
//     <>
//       {product ? (
//         <div className="min-h-screen flex items-center justify-center bg-[#192B45] p-4 sm:p-6 md:p-8">
//           <div className="flex flex-col md:text-left text-center md:flex-row items-stretch text-blue-50 bg-gray-900/70 rounded-2xl shadow-lg overflow-hidden w-full max-w-7xl h-auto md:min-h-[70vh]">
//             <div className="w-full md:w-1/2  p-6 sm:p-8 md:p-10 flex flex-col justify-center">
//               <h2 className="text-2xl sm:text-3xl font-bold  mb-4">
//                 Descriptoin
//               </h2>
//               <p className="text-gray-400  mb-4 sm:mb-6  text-sm sm:text-base">
//                 {product?.description}
//               </p>

//               <div className="flex justify-center  md:justify-start items-center text-accent-yellow mb-4 sm:mb-6">
//                 {Array(4)
//                   .fill(0)
//                   .map((_, i) => (
//                     <span key={i} className="text-xl sm:text-2xl">
//                       ★
//                     </span>
//                   ))}
//                 <span className="text-xl sm:text-2xl text-gray-400">★</span>
//               </div>
//               {product.stock === 0 && (
//                 <span className="mb-3 flex items-center gap-1">
//                   <p className="  text-gray-400">Out of stock</p>
//                   <TbCancel className="text-gray-500"   />
//                 </span>
//               )}

//               <div className="mb-4 sm:mb-6">
//                 <p className="line-through text-gray-400 text-lg sm:text-xl">
//                   ${oldPrice}
//                 </p>
//                 <p className="text-2xl sm:text-3xl font-bold">
//                   ${product?.price}
//                 </p>
//               </div>

//               <button
//                 disabled={product.stock > 0 ? false : true}
//                 onClick={() => product && addToCart(product)}
//                 className="disabled:bg-gray-400/20 disabled:hover:border-transparent disabled:hover:cursor-not-allowed w-[fit-content] mx-auto md:mx-0 border border-transparent hover:bg-transparent bg-blue-900 text-blue-50 hover:border-blue-50 cursor-pointer flex items-center gap-1 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition"
//               >
//                 <span>Add</span>
//                 <HiOutlineShoppingBag className="relative -top-[2px]" />
//               </button>
//             </div>

//             <div className="w-full  md:w-1/2 relative flex items-center justify-center bg-gradient-to-br from-gray-900/40 to-[#264269]  md:rounded-l-full p-6 sm:p-10 md:p-26">
//               {product?.image ? (
//                 <Image
//                   width={400}
//                   height={200}
//                   src={product?.image}
//                   alt={product?.name}
//                   className="max-w-full md:max-w-lg h-auto object-contain drop-shadow-2xl"
//                 />
//               ) : (
//                 <Loader />
//               )}

//               <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10 text-white text-right">
//                 <p className="font-bold text-sm sm:text-lg md:text-lg">CANON</p>
//                 <p className="text-lg sm:text-2xl md:text-2xl font-semibold">
//                   {product?.name}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="h-screen  text-blue-50 flex flex-col gap-5 justify-center items-center">
//           <span className="bg-slate-600 p-10  text-red-400  font-bold rounded-2xl flex items-center gap-1">
//             <CiCircleAlert size={30} />
//             <p className="text-2xl">PRODUCT NOT FOUND</p>
//           </span>
//           <Link
//             href={"/"}
//             className="cursor-pointer border-1 border-blue-50/50 px-4 py-2 rounded-2xl hover:border-transparent hover:bg-slate-500/50 "
//           >
//             Home
//           </Link>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProductDetailCard;
"use client";
// import { getProductById } from "@/services/product.service"; // <-- ELIMINADO
import { CiCircleAlert } from "react-icons/ci";
import { TbCancel } from "react-icons/tb";
import { ProductProps } from "@/types/products/ProductProps";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Loader from "./Loader/Loader";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
// IMPORTAR DATOS LOCALES
import { productsToPreLoad } from "@/helpers/products"; // <-- Ajusta la ruta

const ProductDetailCard = ({ id }: { id: string }) => {
  const { addToCart } = useCart();
  const [product, setProduct] = useState<ProductProps | null>(null);
  // La carga es tan rápida que casi no necesitamos loading, 
  // pero lo dejamos false por defecto o un true cortito si prefieres efecto visual.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    // SIMULAMOS LA BÚSQUEDA (sin async)
    const productId = Number(id);

    // Mapeamos primero para tener los IDs (igual que en los otros componentes)
    // Si tienes muchos productos, lo ideal sería tener este array mapeado en un solo lugar exportado,
    // pero para esta demo hacerlo aquí no afecta el rendimiento.
    const productsWithIds = productsToPreLoad.map((p, index) => ({
      ...p,
      id: index + 1,
    }));

    const foundProduct = productsWithIds.find((p) => p.id === productId);

    setProduct(foundProduct || null);
    setLoading(false);
    
  }, [id]);

  if (loading) return <Loader />;

  // ... (Resto del código igual)
  let oldPrice = 0;
  if (product?.price) oldPrice = product?.price + 500;

  return (
    <>
      {product ? (
        <div className="min-h-screen flex items-center justify-center bg-[#192B45] p-4 sm:p-6 md:p-8">
           {/* ... (Todo el JSX de renderizado es idéntico al tuyo) ... */}
          <div className="flex flex-col md:text-left text-center md:flex-row items-stretch text-blue-50 bg-gray-900/70 rounded-2xl shadow-lg overflow-hidden w-full max-w-7xl h-auto md:min-h-[70vh]">
            <div className="w-full md:w-1/2  p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold  mb-4">
                Description {/* Corregí "Descriptoin" que tenías un typo ;) */}
              </h2>
              <p className="text-gray-400  mb-4 sm:mb-6  text-sm sm:text-base">
                {product?.description}
              </p>

              <div className="flex justify-center  md:justify-start items-center text-accent-yellow mb-4 sm:mb-6">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-xl sm:text-2xl">
                      ★
                    </span>
                  ))}
                <span className="text-xl sm:text-2xl text-gray-400">★</span>
              </div>
              {product.stock === 0 && (
                <span className="mb-3 flex items-center gap-1">
                  <p className="  text-gray-400">Out of stock</p>
                  <TbCancel className="text-gray-500"   />
                </span>
              )}

              <div className="mb-4 sm:mb-6">
                <p className="line-through text-gray-400 text-lg sm:text-xl">
                  ${oldPrice}
                </p>
                <p className="text-2xl sm:text-3xl font-bold">
                  ${product?.price}
                </p>
              </div>

              <button
                disabled={product.stock > 0 ? false : true}
                onClick={() => product && addToCart(product)}
                className="disabled:bg-gray-400/20 disabled:hover:border-transparent disabled:hover:cursor-not-allowed w-[fit-content] mx-auto md:mx-0 border border-transparent hover:bg-transparent bg-blue-900 text-blue-50 hover:border-blue-50 cursor-pointer flex items-center gap-1 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition"
              >
                <span>Add</span>
                <HiOutlineShoppingBag className="relative -top-[2px]" />
              </button>
            </div>

            <div className="w-full  md:w-1/2 relative flex items-center justify-center bg-gradient-to-br from-gray-900/40 to-[#264269]  md:rounded-l-full p-6 sm:p-10 md:p-26">
              {product?.image ? (
                <Image
                  width={400}
                  height={200}
                  src={product?.image}
                  alt={product?.name}
                  className="max-w-full md:max-w-lg h-auto object-contain drop-shadow-2xl"
                />
              ) : (
                <Loader />
              )}

              <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10 text-white text-right">
                <p className="font-bold text-sm sm:text-lg md:text-lg">CANON</p>
                <p className="text-lg sm:text-2xl md:text-2xl font-semibold">
                  {product?.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen  text-blue-50 flex flex-col gap-5 justify-center items-center">
          <span className="bg-slate-600 p-10  text-red-400  font-bold rounded-2xl flex items-center gap-1">
            <CiCircleAlert size={30} />
            <p className="text-2xl">PRODUCT NOT FOUND</p>
          </span>
          <Link
            href={"/"}
            className="cursor-pointer border-1 border-blue-50/50 px-4 py-2 rounded-2xl hover:border-transparent hover:bg-slate-500/50 "
          >
            Home
          </Link>
        </div>
      )}
    </>
  );
};

export default ProductDetailCard;
