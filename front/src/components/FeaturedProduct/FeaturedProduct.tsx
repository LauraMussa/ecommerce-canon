//Next
import Image from "next/image";
import Link from "next/link";
//Icons
import { HiOutlineShoppingBag } from "react-icons/hi2";

const FeaturedProduct = () => {
  return (
    <div className="max-w-[82rem] text-blue-50 rounded-3xl overflow-hidden mx-auto mt-45 bg-gray-900/70">
      <section className=" w-full justify-between flex items-center overflow-hidden ">
        <div className=" ml-20 text-center ">
          <h2 className=" text-3xl my-2 font-bold md:text-5xl">
            Step Into Photography
          </h2>
          <p className="text-gray-500 hidden md:flex md:text-[17px]">
            Discover the perfect entry-level DSLR. <br />
            Easy to handle. The EOS 4000D makes photography effortless.
          </p>
          <div className="flex items-center justify-center gap-3 my-3 font-light ">
            <Link
              href={`/product/3`}
              className="gap-1 flex text-lg transition duration-200  text-blue-50 w-[fit-content] px-3 py-0.5 rounded-lg bg-blue-800 hover:bg-transparent hover:border-blue-50 border-transparent border"
            >
              <span>Product Details</span>
            </Link>

            <Link href="/login" className="flex items-center  gap-1   ">
              <span className="text-lg hover:underline">Add</span>
              <HiOutlineShoppingBag size={18} className="relative -top-[2px]" />
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            src="/images/canonHero3.png"
            alt="Canon Hero Background"
            width={700}
            height={100}
          />
        </div>
      </section>
    </div>
  );
};

export default FeaturedProduct;
