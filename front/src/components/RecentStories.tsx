"use client";
import { recentStories } from "@/helpers/callouts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";


const RecentStories = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="mx-auto max-w-7xl px-4 mt-25 text-blue-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none">
        <h2 className="text-3xl font-bold text-center mb-10">Recent Stories</h2>

        <div className="flex flex-col gap-4">
          {recentStories.map((item, index) => (
            <div
              key={index}
              className=" border-b border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(index)}
                className={`w-full flex justify-between rounded-t-2xl indent-5 items-center px-6 py-4 text-lg font-semibold transition-colors ${
                  openIndex === index
                    ? "bg-gray-900/70 text-white"
                    : " text-blue-50"
                }`}
              >
                {item.title}
                {openIndex === index ? (
                  <FiChevronUp className="w-5 h-5 transition-transform duration-500" />
                ) : (
                  <FiChevronDown className="w-5 h-5 transition-transform duration-500" />
                )}
              </button>

              <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="relative w-full h-[500px]">
                  <Image

                width={1000}
                height={100}
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/30" />

                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                    <p
                      className="max-w-xl text-lg
                      mb-4"
                    >
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className="rounded-xl px-5 py-1 text-font-dark bg-accent-yellow
                      hover:underline transition"
                    >
                      Read Article
                    </Link>
                    <span className="text-sm mt-3 ">{item.createdAt}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentStories;
