// "use client";
// import { getAllProducts } from "@/services/product.service";
// import ProductCard from "./ProductCard";
// import { useEffect, useState } from "react";
// import { ProductProps } from "@/types/products/ProductProps";
// import { useCart } from "@/context/CartContext";
// import { IoReload } from "react-icons/io5";

// export default function Store() {
//   const [productList, setProductList] = useState<ProductProps[] | null>(null);
//   const { error, setError } = useCart();
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const products = await getAllProducts();
//         setProductList(products);
//         setError(null);
//       } catch (error) {
//         console.log(error);
//         setError("Error loading products");
//       }
//     };
//     getProducts();
//   }, [setError]);

//   return (
//     <>
//       <div className=" min-h-screen flex justify-center">
//         {error ? (
//           <div className=" flex  flex-col  gap-3 justify-center items-center text-blue-50 ">
//             <p className="text-red-500 text-2xl p-4">{error}</p>
//             <button
//               className=" flex items-center gap-2 cursor-pointer py-2 px-4 bg-slate-600 rounded-lg hover:bg-slate-500"
//               onClick={() => window.location.reload()}
//             >
//               Reload
//               <IoReload />
//             </button>
//           </div>
//         ) : (
//           <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 ">
//             <div className="grid grid-cols-1 gap-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
//               <>
//                 {productList?.map((p, index) => {
//                   return (
//                     <div key={index}>
//                       <ProductCard
//                         id={p.id}
//                         name={p.name}
//                         description={p.description}
//                         price={p.price}
//                         stock={p.stock}
//                         image={p.image}
//                         categoryId={p.categoryId}
//                       />
//                     </div>
//                   );
//                 })}
//               </>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
"use client";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { ProductProps } from "@/types/products/ProductProps";
import { useCart } from "@/context/CartContext";

import { productsToPreLoad } from "@/helpers/products"; 

export default function Store() {
  const [productList, setProductList] = useState<ProductProps[] | null>(null);

  const { setError } = useCart(); 

  useEffect(() => {
    const mappedProducts = productsToPreLoad.map((p, index) => ({
      ...p,
      id: index + 1,
    }));

    setProductList(mappedProducts);
    setError(null); 
  }, [setError]);

  return (
    <div className="min-h-screen flex justify-center">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productList?.map((p) => (
            <div key={p.id}>
              <ProductCard
                id={p.id}
                name={p.name}
                description={p.description}
                price={p.price}
                stock={p.stock}
                image={p.image}
                categoryId={p.categoryId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
