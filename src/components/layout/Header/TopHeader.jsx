import { Search, User, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function TopHeader() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 h-22 flex items-center justify-between">
        {/* LEFT - SEARCH */}
        <div className="flex items-center gap-3  rounded-full px-4 py-2 text-gray-500">
          <Search size={25} />

          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="outline-none bg-transparent text-xl w-40 text-gray-900 placeholder:italic font-normal"
          />
        </div>

        {/* CENTER - LOGO */}
        <div className="flex items-center">
          <Image
            src="/images/LoGo1.png"
            alt="Yaly Couture"
            width={240}
            height={100}
          />
        </div>

        {/* RIGHT - ICONS */}
        <div className="flex items-center gap-6 text-gray-700">
          {/* USER ICON */}
          <User
            size={29}
            className="cursor-pointer hover:text-orange-500 transition"
          />
          {/* CART ICON */}
          <div className="relative cursor-pointer">
            <ShoppingBag
              size={26}
              className="hover:text-orange-500 transition"
            />
            {/* BADGE */}
            <span
              className="absolute -top-2 -right-2 bg-red-500 text-white
                     text-xs font-semibold w-5 h-5 rounded-full
                     flex items-center justify-center"
            >
              0
            </span>
          </div>

          <div className="flex items-center">
            <div className="h-10 w-px bg-gray-300"></div>
          </div>

          <div className="flex items-center gap-1 text-xl">
            <span className="font-semibold text-gray-700">VN</span>
            <span className="mx-1 text-gray-400">|</span>
            <span className="text-gray-500">EN</span>
          </div>
        </div>
      </div>
    </div>
  );
}
