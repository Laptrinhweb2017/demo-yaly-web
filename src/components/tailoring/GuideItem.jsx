// src/components/tailoring/GuideItem.jsx
import GuideImageStack from "./GuideImageStack";

export default function GuideItem({ item }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-b border-[#e5e5e5]">
      {/* LEFT – TEXT */}
      <div>
        <h3 className="text-[18px] font-semibold text-[#222] mb-3">
          {item.title}
        </h3>

        <ul className="space-y-2 text-[15px] text-[#555] leading-relaxed">
          {item.desc.map((line, i) => (
            <li key={i}>• {line}</li>
          ))}
        </ul>
      </div>

      {/* RIGHT – IMAGES */}
      <GuideImageStack images={item.images} />
    </div>
  );
}
