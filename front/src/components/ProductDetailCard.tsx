import { getProductById } from "@/services/product.service";
import { ProductProps } from "@/types/products/ProductProps";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Loader from "./Loader/Loader";
import { useCart } from "@/context/CartContext";
const ProductDetailCard = ({ id }: { id: string }) => {
  const { addToCart } = useCart();
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const productById = await getProductById(id);
        setProduct(productById);
      } catch (error) {
        console.log(error);
        new Error(error as string);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    console.log("mi loading ", loading);

    return <Loader />;
  }

  let oldPrice = 0;
  if (product?.price) oldPrice = product?.price + 500;

  return (
    <>
      {loading && !product ? (
        <Loader />
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-[#192B45] p-4 sm:p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center text-blue-50 bg-gray-900/70 rounded-2xl shadow-lg overflow-hidden w-full max-w-7xl h-auto md:h-[70vh]">
        
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Descriptoin
              </h2>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                {product?.description}
              </p>

              <div className="flex items-center text-blue-500 mb-4 sm:mb-6">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-xl sm:text-2xl">
                      ★
                    </span>
                  ))}
                <span className="text-xl sm:text-2xl text-gray-400">★</span>
              </div>

              <div className="mb-4 sm:mb-6">
                <p className="line-through text-gray-400 text-lg sm:text-xl">
                  ${oldPrice}
                </p>
                <p className="text-2xl sm:text-3xl font-bold">
                  ${product?.price}
                </p>
              </div>

              <button
                onClick={() => product && addToCart(product)}
                className="w-[fit-content] border border-transparent hover:bg-transparent bg-blue-800 text-blue-50 hover:border-blue-50 cursor-pointer flex items-center gap-1 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition"
              >
                <span>Add</span>
                <HiOutlineShoppingBag className="relative -top-[2px]" />
              </button>
            </div>

            <div className="w-full md:w-1/2 relative flex items-center justify-center bg-gradient-to-br from-gray-900/40 to-[#264269] rounded-l-full md:rounded-l-full p-6 sm:p-10 md:p-26">
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
      )}
    </>
  );
};

export default ProductDetailCard;
