import React from "react";
const user = true;

import CategoryPreview from "@/components/CategoryPreview/CategoryPreview";

import TrustSection from "@/components/TrustUs";
import EosRAdvantages from "@/components/Advantages";
import WhatsNew from "@/components/WhatsNew";
import { Inspirations } from "@/components/Inspirations";
import Categ from "@/components/CategoryPreview/Categ";
import RecentStories from "@/components/RecentStories";
import ChatBubble from "@/components/ChatBubble";
import Hero from "@/components/Hero";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";

const page = () => {
  return (
    <>
      <Hero />
      <Categ />
      <Inspirations />
      <FeaturedProduct />
      <WhatsNew />
      <RecentStories />
      <TrustSection />
      {/* <EosRAdvantages /> */}
    </>
  );
};

export default page;
