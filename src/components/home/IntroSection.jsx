// src/components/home/IntroSection.jsx

import Image from "next/image";
import { montserrat } from "@/app/fonts";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
        {/* LEFT IMAGE */}
        <div className="md:col-span-5">
          <div className="relative w-full h-[75vh] min-h-[650px]">
            <Image
              src="/images/intro-man.jpg"
              alt="Made to measure yaly"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-7">
          <h1
            className={`${montserrat.className} text-[45px] leading-[1.18] font-[970] text-[#4d4d4d] tracking-[0.005em] antialiased 
                [text-rendering:optimizeLegibility]`}
          >
            Yaly Couture - Thời Trang May Đo Cao Cấp
          </h1>

          <div className="mt-8 text-[18px] leading-[1.8] text-[#222] font-[Montserrat] max-w-[640px] [&_p]:m-0">
            <p>
              With{" "}
              <strong>
                <u className="decoration-[#171717] decoration-[2px] underline-offset-2">
                  300
                </u>
              </strong>{" "}
              skilled artisans, Yaly Couture delivers a luxurious tailored
              experience rooted in Hoi An&apos;s heritage.
              <br />
              Rigorous{" "}
              <strong>
                <u className="decoration-[#171717] decoration-[2px] underline-offset-2">
                  in-house training
                </u>
              </strong>{" "}
              ensures excellence from measurements to final products. Our
              craftsmen guarantees expertise in creating stunning,
              individualized garments at affordable price without compromising
              our exceptional quality standard.
              <br />
              Let&apos;s explore in detail the high-end bespoke tailoring
              process at{" "}
              <strong className="text-[#ed7d31] font-semibold">
                Yaly Couture
              </strong>
              , the most prestigious bespoke tailor workshop in Hoi An.
            </p>
          </div>

          <a
            href="/vi/about-us/yaly-couture-bespoke-tailor-traditional-elegant-affordable-hnhoa"
            className="
                inline-flex
                items-center
                justify-center
                mt-10
                bg-[#f58634]
                text-white
                px-3
                py-3
                text-[20px]
                font-[500]
                tracking-[0.18em]
                rounded-[2px]
                hover:bg-[#e07220]
                transition-colors
                duration-200
              "
          >
            XEM THÊM
          </a>
        </div>
      </div>
    </section>
  );
}
