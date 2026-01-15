//components/about-us/AboutGrid.jsx

import AboutCard from "./AboutCard";
import { aboutItems } from "./aboutData";

export default function AboutGrid() {
  return (
    <section className="bg-white pb-24">
      <div
        className="
            max-w-[1320px]    
            mx-auto
            px-6              
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-x-[35px]      
            gap-y-[56px]
            "
      >
        {aboutItems.map((item) => (
          <AboutCard key={item.id} item={item} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="/vi/about-us/store-location"
          className="
            inline-block
            bg-[#f58634]
            text-white
            px-10 py-5
            text-[26px]
            tracking-wider
            hover:bg-[#e07220]
            transition
          "
        >
          ĐỊA CHỈ CỬA HÀNG
        </a>
      </div>
    </section>
  );
}
