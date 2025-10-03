
import { whatsNew } from "@/helpers/callouts";
import Image from "next/image";

export default function WhatsNew() {

  return (
    <section className="text-blue-50 md:mt-35 mt-20  bg-gray-900/70 py-16">
      <div className="max-w-8xl mx-auto px-6 ">
        <h2 className="text-xl text-center md:text-left md:text-3xl mx-4 mb-7 ">What&#39;s New at Canon</h2>
        <div className="grid gap-8 md:grid-cols-2 ">
          {whatsNew.map((item, idx) => {
            return (
              <div key={idx} className="flex items-center p-3 md:p-6 ">
                <div className="relative  mr-4 flex-shrink-0 transition duration-200 md:w-38 md:h-38 items-center justify-center hover:scale-105 cursor-pointer">
                  <Image
                    width={300}
                    height={100}
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-20 md:w-33 rounded-sm  "
                  ></Image>
                </div>

                <div className="text-left flex flex-col justify-end  ">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="hidden lg:flex text-gray-300">
                    {item.description}
                  </p>
                  <button className="text-left font-light gap-1 cursor-pointer items-center flex ">
                    <span className="text-accent-yellow hover:underline">
                      Learn more
                    </span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
