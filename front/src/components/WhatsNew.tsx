// What’s New at Canon
// Canon Club Collage Challenge: Capture, Print & Win
// Share your story through a photo, print it, and showcase it on the Canon Club wall for a chance to win the SELPHY CP1500.

// Sustainability at Our Core
// Responsibility and sustainability are in our DNA. Discover how Canon is driving change through innovative sustainability initiatives.

// Exclusive Offers
// Don’t miss out—explore our latest deals and past promotions all in one place.

// Professional Imaging
// Stay inspired with the latest news, stories, gear, and expert tips from world-renowned photographers and filmmakers.

import Image from "next/image";

export default function WhatsNew() {
  const features = [
    {
      title: "Canon Club Collage Challenge",
      description:
        "Share your story through a photo, print it, and showcase it on the Canon Club wall for a chance to win the SELPHY CP1500",
      image: "/Collage.png",
    },
    {
      title: "Sustainability at Our Core",
      description:
        "Responsibility and sustainability are in our DNA. Discover how Canon is driving change through innovative sustainability initiatives.",
      image: "/Sustainability2.png",
    },
    {
      title: "Exclusive Offers",
      description:
        "Don't miss out, explore our latest deals and past promotions all in one place.",
      image: "/Offers.png",
    },
    {
      title: "Professional Imaging",
      description:
        "Stay inspired with the latest news, stories, gear, and expert tips from world-renowned photographers and filmmakers.",
      image: "/Imaging.png",
    },
  ];

  return (
    <section className="text-blue-50 mt-45  bg-gray-900/70 py-16">
      <div className="max-w-8xl mx-auto px-6 ">
        <h2 className="text-3xl mx-4 mb-5 ">What&#39;s New at Canon</h2>
        <div className="grid gap-8 md:grid-cols-2 ">
          {features.map((item, idx) => {
            return (
              <div key={idx} className="flex items-center p-6 ">
                <div className="relative w-38 h-38 mr-4 flex-shrink-0 transition duration-200 hover:scale-105 cursor-pointer">
                  <Image
                    width={300}
                    height={100}
                    src={item.image}
                    alt={item.title}
                    className="object-cover"
                  ></Image>
                </div>

                <div className="text-left flex flex-col justify-end  h-32">
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
