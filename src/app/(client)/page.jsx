// src/app/(client)/page.jsx

import HeroSection from "@/components/home/HeroSection";
import CollectionBlocks from "@/components/home/CollectionBlocks";
import IntroSection from "@/components/home/IntroSection";
import ProductSection from "@/components/home/ProductSection";
import ProductCategory from "@/components/home/ProductCategory";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CollectionBlocks />
      <IntroSection />
      <ProductSection />
      <ProductCategory/>
    </>
  );
}
