import React from "react";

import TrustSection from "@/components/TrustUs";
import WhatsNew from "@/components/WhatsNew";
import { Inspirations } from "@/components/Inspirations";
import RecentStories from "@/components/RecentStories";
import Hero from "@/components/Hero";
import FeaturedProduct from "@/components/FeaturedProduct";
import Categories from "@/components/Categories";

const page = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Inspirations />
      <FeaturedProduct />
      <WhatsNew />
      <RecentStories />
      <TrustSection />
    </>
  );
};

export default page;
