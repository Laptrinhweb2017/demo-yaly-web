"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname();

  const menu = [
    { label: "TRANG CHỦ", href: "/" },
    { label: "VỀ YALY", href: "/about-us" },
    {
      label: "MAY ĐO",
      href: "/vi/tailoring-guide",
      dropdown: [
        {
          label: "Cách chọn Sizes",
          href: "/vi/may-do/cach-chon-sizes",
        },
        {
          label: "Nữ - Hướng Dẫn Lấy Số Đo",
          href: "/vi/may-do/nu-huong-dan-lay-so-do",
        },
        {
          label: "Nam - Hướng Dẫn Lấy Số Đo",
          href: "/vi/may-do/nam-huong-dan-lay-so-do",
        },
      ],
    },

    { label: "MUA SẮM", href: "/mua-sam" },
    { label: "NỔI BẬT", href: "/noi-bat" },
    { label: "FAQS", href: "/faqs" },
  ];

  // ✅ CHỈ 2 MENU ĐƯỢC HOVER NỀN CAM
  const hoverMenus = ["MAY ĐO", "MUA SẮM"];

  return (
    <nav className="w-full bg-[#d1d1d1] relative z-50">
      <ul className="w-full flex items-center justify-center">
        {menu.map((item) => {
          const isActive = pathname === item.href;
          const hasDropdown = !!item.dropdown;
          const canHover = hoverMenus.includes(item.label); // ⭐ CHỐT Ở ĐÂY

          return (
            <li key={item.label} className="relative group">
              <Link
                href={item.href}
                className={`
                  px-3 py-4 block uppercase text-[20px] tracking-wider transition
                  ${
                    isActive
                      ? "bg-[#f58634] text-white font-semibold"
                      : `text-[#575757] ${
                          canHover ? "hover:bg-[#f58634] hover:text-white" : ""
                        }`
                  }
                `}
              >
                {item.label}
              </Link>

              {/* DROPDOWN – chỉ MAY ĐO có */}
              {hasDropdown && (
                <div
                  className="
                    absolute left-0 top-full mt-2 w-[300px]
                    bg-white rounded-lg
                    shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                    opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-200
                  "
                >
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="
                        block px-5 py-3 text-[15px] text-[#333]
                        hover:bg-[#f5f5f5]
                        first:rounded-t-lg last:rounded-b-lg
                      "
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
