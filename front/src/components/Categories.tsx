"use client";
import Link from "next/link";
import { callouts } from "@/helpers/callouts";
import { useAuth } from "@/context/UserContext";
import Image from "next/image";

export default function Categories() {
  const { user } = useAuth();
  return (
    <div id="categories">
      <div className="mx-auto mt-25 max-w-7xl px-0 sm:px-4 lg:px-8">
        <div className="mx-auto max-w-full py-8 sm:py-16 lg:max-w-none">
          <h2 className="text-xl font-light sm:text-3xl lg:text-4xl lg:font-base text-blue-50 mb-5 px-3">
            Shop by Category
          </h2>

          <div className="grid grid-cols-1 gap-3 px-2  sm:gap-6 lg:grid-cols-3 lg:gap-4">
           
            <Link
              href={user ? callouts[0].href : `/categories/${1}`}
              className="relative group cursor-pointer lg:col-span-2"
            >
              <Image
                width={1000}
                height={100}
                src={callouts[0].imageSrc}
                alt={callouts[0].imageAlt}
                className="w-full h-64 sm:h-80 object-cover rounded-lg group-hover:opacity-75"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{callouts[0].name}</h3>
                <p className="text-sm">{callouts[0].description}</p>
              </div>
            </Link>

            <Link
              href={user ? callouts[1].href : `/categories/${3}`}
              className="relative group cursor-pointer"
            >
              <Image
                width={1000}
                height={100}
                src={callouts[1].imageSrc}
                alt={callouts[1].imageAlt}
                className="w-full h-64 sm:h-80 object-cover rounded-lg group-hover:opacity-75"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{callouts[1].name}</h3>
                <p className="text-sm">{callouts[1].description}</p>
              </div>
            </Link>

            <Link
              href={user ? callouts[2].href : `/categories/${2}`}
              className="relative group cursor-pointer lg:col-span-2"
            >
              <Image
                width={1000}
                height={100}
                src={callouts[2].imageSrc}
                alt={callouts[2].imageAlt}
                className="w-full h-64 sm:h-80 object-cover rounded-lg group-hover:opacity-75"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{callouts[2].name}</h3>
                <p className="text-sm">{callouts[2].description}</p>
              </div>
            </Link>

            <Link
              href={user ? callouts[3].href : `/categories/${4}`}
              className="relative group cursor-pointer"
            >
              <Image
                width={1000}
                height={100}
                src={callouts[3].imageSrc}
                alt={callouts[3].imageAlt}
                className="w-full h-64 sm:h-80 object-cover rounded-lg group-hover:opacity-75"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{callouts[3].name}</h3>
                <p className="text-sm">{callouts[3].description}</p>
              </div>
            </Link>

            <Link
              href={user ? callouts[4].href : `/categories/${4}`}
              className="relative group cursor-pointer lg:col-span-3"
            >
              <Image
                width={1000}
                height={100}
                src={callouts[4].imageSrc}
                alt={callouts[4].imageAlt}
                className="w-full h-64 sm:h-80 object-cover rounded-lg group-hover:opacity-75"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{callouts[4].name}</h3>
                <p className="text-sm">{callouts[4].description}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
