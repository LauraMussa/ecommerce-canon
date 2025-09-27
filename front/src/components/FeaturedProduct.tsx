// "use client";
// //Next
// import { useCart } from "@/context/CartContext";
// import { getProductById } from "@/services/product.service";
// import { ProductProps } from "@/types/products/ProductProps";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// //Icons
// import { HiOutlineShoppingBag } from "react-icons/hi2";

// const FeaturedProduct = () => {
//   const { addToCart, } = useCart();
//   const [product, setProduct] = useState<ProductProps | null>(null);

//   useEffect(() => {
//     const getProduct = async () => {
//       // setLoading(true)
//       try {
//         const res = await getProductById("2");
//         if (!res) {

//           throw new Error("Product not found");
//         } else {
//           setProduct(res);
//         }
//       } catch (error) {
//         console.log(error);
//         throw new Error("Error loading product");
//       } finally {
//         // setLoading(false)
//       }
//     };
//     getProduct();
//   }, []);
//   return (
//     <div className="max-w-[82rem] text-blue-50 rounded-3xl overflow-hidden mx-auto mt-45 bg-gray-900/70">
//       <section className=" w-full justify-between flex items-center overflow-hidden ">
//         <div className=" ml-20 text-center ">
//           <h2 className=" text-3xl my-2 font-bold md:text-5xl">
//             Step Into Photography
//           </h2>
//           <p className="text-gray-500 hidden md:flex md:text-[17px]">
//             Discover the perfect entry-level DSLR. <br />
//             Easy to handle. The EOS 4000D makes photography effortless.
//           </p>
//           <div className="flex items-center justify-center gap-3 my-3 font-light ">
//             <Link
//               href={`/product/${product?.id}`}
//               className="gap-1 flex text-lg transition duration-200  text-blue-50 w-[fit-content] px-3 py-0.5 rounded-lg bg-blue-800 hover:bg-transparent hover:border-blue-50 border-transparent border"
//             >
//               <span>Product Details</span>
//             </Link>

//             <button
//               onClick={() => product && addToCart(product)}
//               className="flex cursor-pointer items-center  gap-1   "
//             >
//               <span className="text-lg hover:underline">Add</span>
//               <HiOutlineShoppingBag size={18} className="relative -top-[2px]" />
//             </button>
//           </div>
//         </div>
//         <div className="">
//           <Image
//             src="/images/canonHero3.png"
//             alt="Canon Hero Background"
//             width={700}
//             height={100}
//           />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FeaturedProduct;
"use client";
//Next
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/services/product.service";
import { ProductProps } from "@/types/products/ProductProps";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
//Icons
import { HiOutlineShoppingBag } from "react-icons/hi2";

const FeaturedProduct = () => {
  const { addToCart } = useCart();
  const [product, setProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await getProductById("2");
        if (!res) throw new Error("Product not found");
        setProduct(res);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  return (
   <div className="w-full max-w-[82rem] mx-auto mt-20 md:mt-30 text-blue-50 rounded-3xl overflow-hidden px-4 sm:px-6 md:px-8 lg:p-0 lg:pl-8 lg:bg-gray-900/70">
  <section className="relative flex flex-col lg:flex-row  items-center justify-center min-h-[400px] md:min-h-[500px]">

    {/* Imagen de fondo solo en sm/md */}
    <div className="absolute inset-0 rounded-3xl overflow-hidden lg:hidden">
      <Image
        src="/images/canonHero3.png"
        alt="Canon Hero Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 rounded-3xl" />
    </div>

    {/* Texto */}
    <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center justify-center text-center lg:text-left lg:items-start py-12">
      <h2 className="text-3xl font-bold md:text-5xl mb-3">
        Step Into Photography
      </h2>
      <p className="text-gray-300 hidden md:block md:text-[17px] mb-4">
        Discover the perfect entry-level DSLR. <br />
        Easy to handle. The EOS 4000D makes photography effortless.
      </p>
      <div className="flex items-center justify-center lg:justify-start gap-3 font-light">
        <Link
          href={`/product/${product?.id}`}
          className="gap-1 flex text-lg transition duration-200 text-blue-50 w-fit px-3 py-0.5 rounded-lg bg-blue-800 hover:bg-transparent hover:border-blue-50 border-transparent border"
        >
          Product Details
        </Link>
        <button
          onClick={() => product && addToCart(product)}
          className="flex items-center gap-1 cursor-pointer"
        >
          <span className="text-lg hover:underline">Add</span>
          <HiOutlineShoppingBag size={18} className="relative -top-[2px]" />
        </button>
      </div>
    </div>

    {/* Imagen lateral solo en lg+ */}
    <div className="hidden lg:block lg:w-1/2 relative z-10">
      <Image
        src="/images/canonHero3.png"
        alt="Canon Hero Background"
        width={700}
        height={100}
        className="object-contain"
      />
    </div>

  </section>
</div>

  );
};

export default FeaturedProduct;
