"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname();

  const menu = [
    { label: "TRANG CHỦ", href: "/" },
    { label: "VỀ YALY", href: "/ve-yaly" },
    { label: "MAY ĐO", href: "/may-do" },
    { label: "MUA SẮM", href: "/mua-sam" },
    { label: "NỔI BẬT", href: "/noi-bat" },
    { label: "FAQS", href: "/faqs" },
  ];


  const hoverMenus = ["MAY ĐO", "MUA SẮM"];

  return (
    <nav className="w-full bg-[#d1d1d1]">
      <ul className="w-full flex items-center justify-center">
        {menu.map((item) => {
          const isActive = pathname === item.href;
          const canHover = hoverMenus.includes(item.label);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`
                  px-5 py-4 block uppercase text-xl tracking-0.1em transition-colors duration-200
                  ${
                    isActive
                      ? "bg-[#f58634] text-white font-semibold"
                      : `text-[#575757] font-normal ${
                          canHover ? "hover:bg-[#f58634] hover:text-white" : ""
                        }`
                  }
                `}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
