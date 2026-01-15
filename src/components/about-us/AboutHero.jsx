// src/components/about-us/AboutHero.jsx
import { allura } from "@/app/layout";

export default function AboutHero() {
  return (
    <section className="bg-white pt-10 pb-10 text-center">
      {/* TITLE */}
      <p
        className="
          text-[36px]
          md:text-[44px]
          font-light
          text-[#4a4a4a]
          uppercase
        "
      >
        THÔNG TIN VỀ <span className="text-[#4a4a4a] font-normal">YALY</span>
      </p>

      {/* SUB TITLE – FONT ALLURA */}
      <p
        className={`
          mt-4
          text-[22px]
          text-[#6b6b6b]
          tracking-[0.08em]
          ${allura.className}
        `}
      >
        – Custom Tailoring . Traditional Value –
      </p>
    </section>
  );
}
