import React from "react";
import { categories } from "@/helpers/callouts";
import Link from "next/link";

import Image from "next/image";
const CategoriesPreviewList = () => {
  return (
    <div className="bg-  min-h-screen text-blue-50" id="categories">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none ">
          <h2 className="text-2xl font-bold text-blue-50 mb-6">
            Shop by Category
          </h2>
          <div className=" grid grid-rows-4 gap-6">
            {categories.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.href}
                  className="duration-200 hover:scale-102 active:opacity-75"
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="w-full  h-100 object-cover rounded-lg  "
                  />
                  <div className=" ">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPreviewList;
