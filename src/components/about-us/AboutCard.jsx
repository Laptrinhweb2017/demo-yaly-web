// src/components/about-us/AboutCard.jsx

import Image from "next/image";

export default function AboutCard({ item }) {
  const { title, image, desc, link } = item;

  return (
    <a
      href={link}
      className="
        bg-white
        w-[415px] 
        border border-[#ececec]
        shadow-[0_6px_18px_rgba(0,0,0,0.08)]
        transition
        hover:shadow-[0_14px_36px_rgba(0,0,0,0.14)]
      "
    >
      {/* IMAGE – KHÔNG BO GÓC (chuẩn web gốc) */}
      <div className="relative w-full h-[440px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="410px"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* BODY – CHỈ BO PHÍA DƯỚI */}
      <div
        className="
          bg-white
          px-4 pt-3 pb-4
          rounded-b-[100px]
        "
      >
        {/* TITLE – 1 dòng */}
        <p
          className="
            text-[32zpx]
            text-[#222]
            font-normal
            leading-[1.35]
            truncate
          "
        >
          {title}
        </p>

        {/* DESC – 2 dòng */}
        <p
          className="
            mt-2
            text-[18px]
            text-[#666]
            leading-[1.6]
            line-clamp-2
          "
        >
          {desc}
        </p>
      </div>
    </a>
  );
}
