// src/components/tailoring/GuideImageStack.jsx
import Image from "next/image";

export default function GuideImageStack({ images }) {
  return (
    <div className="flex flex-col gap-4">
      {images.map((src, index) => (
        <div key={index} className="relative w-full aspect-[3/4]">
          <Image src={src} alt="" fill className="object-contain" />
        </div>
      ))}
    </div>
  );
}
