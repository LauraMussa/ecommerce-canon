import { inspirations } from "@/helpers/callouts";
import Image from "next/image";

export const Inspirations = () => {
  return (
    <div className="flex flex-col  mt-30 sm:mt-40 text-background-light bg-gray-900/70">
      {inspirations.map((item, index) =>
        item.reverse ? (
          <section key={index} className="flex flex-col lg:flex-row">
            <div className="hidden lg:flex flex-col w-1/2 justify-center pl-10 pr-6 text-right">
              <h2 className="font-mono font-light text-sm">{item.subject}</h2>
              <p className="text-5xl font-bold mt-5 mb-3">{item.title}</p>
              <p>{item.text}</p>
            </div>
            <div className="relative w-full lg:w-1/2 h-[500px] lg:h-[750px] overflow-hidden">
              <Image
                fill
                src={item.image}
                alt="Shutter Stories"
                className="object-cover object-center hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 lg:hidden">
                <h2 className="font-mono font-light text-xs sm:text-sm">
                  {item.subject}
                </h2>
                <p className="text-2xl sm:text-3xl font-bold">{item.title}</p>
              </div>
            </div>
          </section>
        ) : (
          <section key={index} className="flex flex-col lg:flex-row-reverse">
            <div className="hidden lg:flex flex-col w-1/2 justify-center pr-10 pl-6 ">
              <h2 className="font-mono font-light text-sm">{item.subject}</h2>
              <p className="text-5xl font-bold mt-5 mb-3">{item.title}</p>
              <p>{item.text}</p>
            </div>
            <div className="relative w-full lg:w-1/2 h-[500px] lg:h-[750px] overflow-hidden">
              <Image
                fill
                src={item.image}
                alt="Macro Photography"
                className="object-cover object-center hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 lg:hidden">
                <h2 className="font-mono font-light text-xs sm:text-sm">
                  {item.subject}
                </h2>
                <p className="text-2xl sm:text-3xl font-bold">{item.title}</p>
              </div>
            </div>
          </section>
        )
      )}

      {/* <section className="flex flex-col lg:flex-row-reverse">
        <div className="hidden lg:flex flex-col w-1/2 justify-center pr-10 pl-6 ">
          <h2 className="font-mono font-light text-sm">MACRO PHOTOGRAPHY</h2>
          <p className="text-5xl font-bold mt-5 mb-3">PROFESSIONAL TOOLS</p>
          <p>
            The Canon Macro Twin Lite MT-26EX-RT, flash heads provide greater
            creative control for stunning macro shots.
          </p>
        </div>
        <div className="relative w-full lg:w-1/2 h-[500px] lg:h-[750px] overflow-hidden">
          <Image
            fill
            src="/images/inspiration2.png"
            alt="Macro Photography"
            className="object-cover object-center hover:scale-105 transition duration-300"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 lg:hidden">
            <h2 className="font-mono font-light text-xs sm:text-sm">
              MACRO PHOTOGRAPHY
            </h2>
            <p className="text-2xl sm:text-3xl font-bold">PROFESSIONAL TOOLS</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row">
        <div className="hidden lg:flex flex-col w-1/2 justify-center pl-10 pr-6 text-right">
          <h2 className="font-mono font-light text-sm">INSPIRATION</h2>
          <p className="text-5xl font-bold mt-5 mb-3">SHUTTER STORIES</p>
          <p>
            Inspiring stories from the world&apos;s leading photographers and
            filmmakers.
          </p>
        </div>
        <div className="relative w-full lg:w-1/2 h-[500px] lg:h-[750px] overflow-hidden">
          <Image
            fill
            src="/images/inspiration1.png"
            alt="Shutter Stories"
            className="object-cover object-center hover:scale-105 transition duration-300"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 lg:hidden">
            <h2 className="font-mono font-light text-xs sm:text-sm">
              INSPIRATION
            </h2>
            <p className="text-2xl sm:text-3xl font-bold">SHUTTER STORIES</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-1/2 h-[500px] lg:h-[750px] overflow-hidden">
          <Image
            fill
            src="/images/inspiration5.png"
            alt="Shutter Stories"
            className="object-cover object-center hover:scale-105 transition duration-300"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 lg:hidden">
            <h2 className="font-mono font-light text-xs sm:text-sm">
              INSPIRATION
            </h2>
            <p className="text-2xl sm:text-3xl font-bold">SHUTTER STORIES</p>
          </div>
        </div>
        <div className="hidden lg:flex flex-col w-1/2 justify-center pl-10 pr-6">
          <h2 className="font-mono font-light text-sm">INSPIRATION</h2>
          <p className="text-5xl font-bold mt-5 mb-3">SHUTTER STORIES</p>
          <p>
            Inspiring stories from the world&apos;s leading photographers and
            filmmakers.
          </p>
        </div>
      </section> */}
    </div>
  );
};
