// src/app/(client)/about-us/page.jsx

import AboutHero from "@/components/about-us/AboutHero";
import AboutGrid from "@/components/about-us/AboutGrid";

export default function AboutUsPage() {
  return (
    <main className="bg-[#f5f5f5]">
      <AboutHero />
      <AboutGrid />
    </main>
  );
}
