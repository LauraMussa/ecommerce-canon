// "use client";
// import { ParamProps, ProductProps } from "@/types/products/ProductProps";
// import React, { useEffect, useState } from "react";
// import ProductCard from "@/components/ProductCard";
// import { getProductsByCategory } from "@/services/product.service";
// const CategoryId = ({ params }: ParamProps) => {
//   const categoryNames = [
//     { name: "Cameras" },
//     { name: "Camcorders" },
//     { name: "Printers" },
//     { name: "Accessories" },
//     { name: "Objectives" },
//   ];
//   const { id } = params;

//   const [products, setProducts] = useState<ProductProps[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const productList = await getProductsByCategory(Number(id));
//         setProducts(productList);
//       } catch (error) {
//         throw error;
//       }
//     };
//     fetchProducts();
//   }, [id]);

//   return (
//     <div className=" m-auto min-h-screen flex  justify-center">
//       <div className=" py-16 sm:px-6 sm:py-24  lg:px-10 ">
//         <h2 className="text-3xl font-bold text-blue-50 mb-6 ">
//           {categoryNames[Number(id) - 1].name}
//         </h2>
//         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3  lg:gap-x-8">
//           {products.map((p, index) => {
//             return (
//               <div key={index}>
//                 <ProductCard
//                   id={p.id}
//                   name={p.name}
//                   description={p.description}
//                   price={p.price}
//                   stock={p.stock}
//                   image={p.image}
//                   categoryId={p.categoryId}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryId;
"use client";
import { ParamProps, ProductProps } from "@/types/products/ProductProps";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
// IMPORTA TU LISTA DE PRODUCTOS
import { productsToPreLoad } from "@/helpers/products"; // <-- Ajusta esta ruta

const CategoryId = ({ params }: ParamProps) => {
  const categoryNames = [
    { name: "Cameras" },
    { name: "Camcorders" },
    { name: "Printers" },
    { name: "Accessories" },
    { name: "Objectives" },
  ];

  const { id } = params as unknown as { id: string };

  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const categoryIdNumber = Number(id);

    const filteredProducts = productsToPreLoad.filter((product) => product.categoryId === categoryIdNumber);

    const mappedProducts = filteredProducts.map((p, index) => ({
      ...p,
      id: index + 1,
    }));

    setProducts(mappedProducts);
  }, [id]);

  const categoryName = categoryNames[Number(id) - 1]?.name || "Category";

  return (
    <div className="m-auto min-h-screen flex justify-center">
      <div className="py-16 sm:px-6 sm:py-24 lg:px-10">
        <h2 className="text-3xl font-bold text-blue-50 mb-6">{categoryName}</h2>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {products.map((p) => (
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
        ) : (
          <p className="text-white text-xl">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryId;
