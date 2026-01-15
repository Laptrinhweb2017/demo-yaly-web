// src/app/(client)/vi/tailoring-guide/page.jsx

import { tailoringGuideData } from "@/lib/tailoringGuideData";
import GuideItem from "@/components/tailoring/GuideItem";

export default function TailoringGuidePage() {
  return (
    <main className="bg-white">
      {/* HEADER */}
      <section className="max-w-[1200px] mx-auto px-6 pt-14 pb-10">
        <h1 className="text-[42px] font-light text-[#333] mb-4">
          Measurement Guide
        </h1>

        <p className="text-[16px] text-[#666] leading-relaxed max-w-[900px]">
          If you are a returning customer and your measurements have not
          changed, please skip this step. However, if you are new or your
          measurements have significantly changed, please follow the
          comprehensive DIY guidelines below to get your full measurements.
        </p>

        <p className="mt-2 text-[14px] text-red-500 italic">
          * We might contact you to further confirm your measurements
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-[1200px] mx-auto px-6 pb-20">
        {tailoringGuideData.map((item) => (
          <GuideItem key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}
