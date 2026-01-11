// components/footer/FooterBottom.jsx
import FooterColumn from "./FooterColumn";
import { footerColumns } from "./footerData";
import { allura } from "@/app/fonts";

export default function FooterBottom() {
  return (
    <div className="bg-[#4b4b4b] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-6">
          {/* LOGO */}
          <div className="flex flex-col items-center text-center space-y-2">
            <img src="/images/LoGo2.png" alt="Yaly Couture" className="w-200" />
          </div>

          {/* COLUMNS */}
          {footerColumns.map((col, i) => (
            <FooterColumn key={i} {...col} />
          ))}
        </div>

        {/* SOCIAL */}
        <div className="mt-12">
          <h3 className="text-white mb-4">Cộng đồng</h3>

          <div className="flex gap-4">
            {["fb", "ig", "tt", "yt", "social"].map((icon) => (
              <button
                key={icon}
                className="w-8 h-8 flex items-center justify-center opacity-70 hover:opacity-100 transition"
              >
                <img src={`/icons/${icon}.svg`} alt={icon} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
