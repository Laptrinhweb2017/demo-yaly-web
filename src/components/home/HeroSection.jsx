// src/components/home/HeroSection.jsx

"use client";

import { useEffect, useState } from "react";
import { heroSets } from "./data";
import { usePathname } from "next/navigation";

export default function HeroSection() {
  // Luôn render FIRST set cho SSR + hydration
  const [slides, setSlides] = useState(heroSets.first);
  const [current, setCurrent] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // chỉ chạy khi ở HOME
    if (pathname !== "/") return;

    const mode = sessionStorage.getItem("heroMode");

    // LẦN ĐẦU → B
    if (!mode) {
      sessionStorage.setItem("heroMode", "B");

      setTimeout(() => {
        setSlides(heroSets.second);
        setCurrent(0);
      }, 0);

      return;
    }

    // ĐẢO A <-> B
    const nextMode = mode === "A" ? "B" : "A";
    sessionStorage.setItem("heroMode", nextMode);

    setTimeout(() => {
      setSlides(nextMode === "A" ? heroSets.first : heroSets.second);
      setCurrent(0);
    }, 0);
  }, [pathname]);

  const total = slides.length;
  const item = slides[current];

  const isFirst = current === 0;
  const isLast = current === total - 1;

  const prevSlide = () => {
    if (isFirst) return;
    setCurrent((prev) => prev - 1);
  };

  const nextSlide = () => {
    if (isLast) return;
    setCurrent((prev) => prev + 1);
  };

  return (
    <section className="relative w-full h-[82vh] min-h-[560px] overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />

      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-[64px] font-light tracking-[0.14em] leading-none">
          {item.title}
        </h1>
        <p className="mt-3 text-[12px] uppercase tracking-[0.5em] text-white/90">
          {item.subtitle}
        </p>
      </div>

      {/* LEFT */}
      <button
        onClick={prevSlide}
        disabled={isFirst}
        className={`
    absolute left-6 top-1/2 -translate-y-1/2 z-20
    w-12 h-12 rounded-full
    flex items-center justify-center
    backdrop-blur-md
    border border-white/30
    transition
    ${
      isFirst
        ? "bg-white/5 opacity-40 cursor-not-allowed"
        : "bg-white/10 hover:bg-orange-400"
    }
  `}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-300"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* RIGHT */}
      <button
        onClick={nextSlide}
        disabled={isLast}
        className={`
    absolute right-6 top-1/2 -translate-y-1/2 z-20
    w-12 h-12 rounded-full
    flex items-center justify-center
    backdrop-blur-md
    border border-white/30
    transition
    ${
      isLast
        ? "bg-white/5 opacity-40 cursor-not-allowed"
        : "bg-white/10 hover:bg-orange-400"
    }
  `}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-300"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </section>
  );
}
