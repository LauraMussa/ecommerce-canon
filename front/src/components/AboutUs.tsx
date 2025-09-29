import { aboutUsCards, aboutUsSections } from "@/helpers/callouts";
import Image from "next/image";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const AboutUs = () => {
  return (
    <div className=" mt-5 md:mt-10 text-blue-50">
      <section className="flex flex-col md:flex-row items-center">
        <div className="relative w-full md:w-1/2 h-[25vh] md:h-[70vh]">
          <Image
            src="/images/about-usBuilding2.png"
            alt="about-us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex bg-black/40 text-center items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-medium">
              OUR LEGACY & FOUNDATION
            </h1>
          </div>
        </div>
        <div className="text-center gap-4 px-5 mt-4 md:p-10 md:w-1/2 text-sm md:text-lg items-center flex flex-col justify-center">
          <h2 className="text-xl font-medium md:text-5xl ">About Us</h2>

          <p>
            We employ more than 182,000 people in marketing and manufacturing
            facilities across Japan, the Americas, Europe, Asia, and Oceania.
            Kyosei is our corporate philosophy, the foundation of our business,
            brand, and sponsorship activities. Kyosei is a Japanese term that
            conveys the concept of living and working together for the common
            good, a principle embraced by all Canon employees.
          </p>
          <p className="text-sm cursor-pointer text-accent-yellow">
            <span className="hover:underline">
              Learn more about Canon and our history
            </span>{" "}
            <span>→</span>
          </p>
        </div>
      </section>
      <section className=" my-15 md:my-20 max-w-4xl mx-auto px-4">
        <h2 className="text-center text-xl md:text-4xl mb-4 md:mb-8">
          CORPORATE PROFILE
        </h2>
        <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2 mx-3  text-sm md:text-base">
          <div className="flex items-center w-full gap-2 p-2  border-t border-slate-200/50">
            <div className="flex-shrink-0 w-8 h-10 flex items-center  ">
              <IoIosCheckmarkCircleOutline size={25} />
            </div>
            <p>
              <span className="font-semibold">Company Name: </span>
              Canon U.S.A., Inc
            </p>
          </div>

          <div className="flex items-center gap-2 p-2 border-t border-slate-200/50">
            <div className="flex-shrink-0 w-8 h-10 flex items-center ">
              <IoIosCheckmarkCircleOutline size={25} />
            </div>
            <p>
              <span className="font-semibold">
                President and Chief Executive Officer:{" "}
              </span>
              Mr. Isao Kobayashi
            </p>
          </div>

          <div className="flex items-center gap-2 p-2 border-t border-b border-slate-200/50">
            <div className="flex-shrink-0 w-8 h-10 flex items-center ">
              <IoIosCheckmarkCircleOutline size={25} />
            </div>
            <p>
              <span className="font-semibold">Founded: </span>
              Established in 1955 and formally incorporated as Canon U.S.A.,
              Inc. in 1965.
            </p>
          </div>

          <div className="flex items-center gap-2 p-2 md:border-t border-b border-slate-200/50">
            <div className="flex-shrink-0 w-8 h-10 flex items-center ">
              <IoIosCheckmarkCircleOutline size={25} />
            </div>
            <p>
              <span className="font-semibold">Corporate Headquarters: </span>
              Melville, New York
            </p>
          </div>
        </div>
      </section>
      {aboutUsSections.map((section, index) =>
        section.reverse ? (
          <section
            key={index}
            className="relative flex h-[40vh] md:h-[55vh] flex-col md:flex-row"
          >
            {/* Texto */}
            <div
              className={`relative z-10 text-center gap-4 p-8 md:p-10 w-full md:w-1/2 h-full md:bg-slate-900 text-blue-50 text-sm md:text-lg flex flex-col justify-center ${
                section.reverse ? "order-1" : "order-2"
              }`}
            >
              <h2 className="text-lg md:text-3xl">{section.title}</h2>
              <p>{section.text}</p>
              <p className="text-sm cursor-pointer text-background  mx-auto p-2 rounded-lg bg-accent-yellow hover:bg-[#dabf7b] flex justify-center">
                MORE INFORMATION
              </p>
            </div>
            {/* Imagen de fondo solo en sm */}
            <div
              className="absolute inset-0 bg-cover bg-center md:hidden"
              style={{ backgroundImage: `url(${section.img})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Imagen lateral en md+ */}
            <div
              className={`relative w-1/2 min-h-[65vh] hidden md:block ${
                section.reverse ? "order-2" : "order-1"
              }`}
            >
              <Image
                src={section.img}
                alt={section.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </section>
        ) : (
          <section
            key={index}
            className="relative h-[40vh]  md:h-[55vh] flex flex-col md:flex-row"
          >
            {/* Imagen de fondo solo en sm */}
            <div
              className="absolute inset-0  bg-cover bg-center md:hidden"
              style={{ backgroundImage: `url(${section.img})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Imagen lateral en md+ */}
            <div
              className={`relative w-1/2 max-h-[65vh] hidden md:block ${
                section.reverse ? "order-2" : "order-1"
              }`}
            >
              <Image
                src={section.img}
                alt={section.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Texto */}
            <div
              className={`relative z-10 text-center gap-4 p-8 md:p-10 w-full md:w-1/2 h-full  md:bg-slate-900 text-blue-50 text-sm md:text-lg flex flex-col justify-center ${
                section.reverse ? "order-1" : "order-2"
              }`}
            >
              <h2 className="text-lg md:text-3xl">{section.title}</h2>
              <p>{section.text}</p>
              <p className="text-sm cursor-pointer text-background p-2 mx-auto rounded-lg bg-accent-yellow hover:bg-[#dabf7b] flex justify-center">
                MORE INFORMATION
              </p>
            </div>
          </section>
        )
      )}
      <section className="max-w-6xl mx-auto my-30 px-4">
        <h2 className="text-center text-xl md:text-3xl md:mb-8">MORE ABOUT CANON</h2>

        <div className="grid my-5 md:my-10 grid-cols-1 mx-10  sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutUsCards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-md overflow-hidden shadow-lg h-auto md:h-[50vh] bg-slate-200 hover:shadow-md transition"
            >
              <div className="relative w-full h-60">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute -bottom-2.5 left-2 bg-slate-900  text-xs font-semibold px-2 py-1">
                  {card.label}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-semibold mb-2 text-background">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default AboutUs;
