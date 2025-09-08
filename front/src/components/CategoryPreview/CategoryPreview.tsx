import Link from "next/link";
const user = true;
import { callouts } from "@/helpers/callouts";

export default function CategoryPreview() {
  return (
    <div className="min-h-screen" id="categories">
      <div className="mx-auto mt-32 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none ">
          <h2 className="text-4xl font-bold  text-blue-50 mb-5 ">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 ">
            <Link
              href={`${user ? callouts[0].href : "/login"}`}
              className="lg:col-span-2 group relative cursor-pointer"
            >
              <img
                src={callouts[0].imageSrc}
                alt={callouts[0].imageAlt}
                className="w-full h-100 object-cover rounded-lg group-hover:opacity-75"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{callouts[0].name}</h3>
                <p className="text-sm">{callouts[0].description}</p>
              </div>
            </Link>

            <div className="gap-3 flex flex-col justify-between ">
              {callouts.slice(1, 3).map((callout) => (
                <Link
                  href={`${user ? callout.href : "/login"}`}
                  key={callout.name}
                  className=" group relative cursor-pointer"
                >
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-48 object-cover rounded-lg group-hover:opacity-75 "
                  />
                  <div className="absolute bottom-2 left-2 text-white">
                    <h3 className="text-sm font-semibold">{callout.name}</h3>
                    <p className="text-xs">{callout.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href={user ? callouts[3].href : "/login"}
              className="lg:col-span-2  group relative mt-1 cursor-pointer"
            >
              <img
                src={callouts[3].imageSrc}
                alt={callouts[3].imageAlt}
                className="w-full h-78 object-cover rounded-lg group-hover:opacity-75"
              />
              <div className="absolute bottom-2 left-2 text-white">
                <h3 className="text-sm font-semibold">{callouts[3].name}</h3>
                <p className="text-xs">{callouts[3].description}</p>
              </div>
            </Link>
            <Link
              href={user ? callouts[4].href : "/login"}
              className="lg:col-span-1  group relative mt-1 cursor-pointer"
            >
              <img
                src={callouts[4].imageSrc}
                alt={callouts[4].imageAlt}
                className="w-full h-78 object-cover rounded-lg group-hover:opacity-75"
              />
              <div className="absolute bottom-2 left-2 text-white">
                <h3 className="text-sm font-semibold">{callouts[4].name}</h3>
                <p className="text-xs">{callouts[4].description}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
