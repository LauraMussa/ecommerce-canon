import Image from "next/image";
import React from "react";

export const Inspirations = () => {
  return (
    <div className="flex flex-col mt-40 text-background-light bg-gray-900/70">
      <section className="flex justify-between">
        <div className=" relative h-[750px] w-[100vw] overflow-hidden">
          <Image
            fill
            src={"/images/inspiration1.png"}
            alt=""
            className="object-center object-cover hover:scale-108 cursor-pointer transition duration-200"
          ></Image>
        </div>
        <div className="hidden md:flex flex-col indent-3 items-start w-full justify-center">
          <h2 className=" font-mono font-light text-sm">INSPIRATION </h2>
          <p className="text-5xl font-bold mt-5 mb-3">SHUTTER STORIES</p>
          <p>
            Inspiring stories from the world&apos;s leading photographers and
            filmmakers.
          </p>
        </div>
      </section>
      <section className="flex justify-between">
        <div className="hidden md:flex flex-col mr-4  items-end w-full justify-center">
          <h2 className="font-mono font-light text-sm">
            MACRO PHOTOGRAPHY{" "}
          </h2>
          <p className="text-5xl  font-bold mt-5 mb-3">
            PROFESSIONAL TOOLS{" "}
          </p>
          <p >
            The Canon Macro Twin Lite MT-26EX-RT, flash heads provide greater
            creative control for stunning macro shots.
          </p>
        </div>
        <div className=" relative h-[750px] w-[100vw] overflow-hidden">
          <Image
            fill
            src={"/images/inspiration2.png"}
            alt=""
            className="object-center object-cover hover:scale-108 cursor-pointer transition duration-200"
          ></Image>
        </div>
      </section>
    </div>
  );
};
