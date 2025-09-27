"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto rounded-2xl w-full h-[90vh] flex items-center justify-end text-blue-50 xl:pr-20 ">
      <div className="absolute inset-0 -z-10 ">
        <Image
          src="/images/image60.png"
          alt="Canon Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
      </div>

      <div className="px-6 text-right sm:px-10  max-w-full">
        <h2 className="text-5xl font-semibold tracking-tight text-balance  sm:text-[6.5rem]">
          Capture life, <br /> frame your story.
        </h2>
        <p className="mt-6 text-sm text-pretty text-gray-300 sm:text-xl ">
          Elevate your photography with the latest Canon technology. <br /> Your
          vision deserves the perfect lens.
        </p>
        <div className=" sm:flex-row gap-4 ">
          <div className="h-[1px] my-2 w-full bg-blue-50/50 "></div>
          <Link
            href="#categories"
            className=" text-lg font-light text-accent-yellow hover:underline"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
