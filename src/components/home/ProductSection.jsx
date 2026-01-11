//src/components/home/ProductSection.jsx

"use client";

import { useState } from "react";
import { productSections } from "./data";

export default function ProductSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-28">
        {productSections.map((section) => (
          <ProductBlock key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}

/* ===================== BLOCK ===================== */
function ProductBlock({ section }) {
  const { title, viewMore, products } = section;

  return (
    <div>
      {/* HEADER */}
      <div className="relative flex items-center justify-center mb-12">
        <div className="absolute inset-x-0 top-1/2 h-px bg-[#e5e5e5]" />

        <h2 className="relative bg-white px-8 text-[22px] tracking-[0.35em] font-medium text-[#444]">
          {title}
        </h2>

        {viewMore && (
          <a
            href={viewMore}
            className="absolute right-0 text-[14px] italic text-[#888] hover:text-[#f58634] transition"
          >
            Xem thêm &gt;
          </a>
        )}
      </div>

      <ProductGrid products={products} />
    </div>
  );
}

/* ===================== GRID + SLIDE ===================== */
function ProductGrid({ products }) {
  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const [page, setPage] = useState(0);

  const start = page * ITEMS_PER_PAGE;
  const visibleProducts = products.slice(start, start + ITEMS_PER_PAGE);

  const isFirst = page === 0;
  const isLast = page === totalPages - 1;

  return (
    <div className="relative group/slider">
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <ProductCard key={product.uid} product={product} />
        ))}
      </div>

      {/* PREV ARROW */}
      {totalPages > 1 && (
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={isFirst}
          aria-label="Previous products"
          className={`
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            z-10
            text-[38px]
            transition-opacity
            duration-300
            ${
              isFirst
                ? "text-[#ccc] cursor-not-allowed opacity-0"
                : "text-[#9a9a9a] opacity-0 group-hover/slider:opacity-100 hover:text-[#555]"
            }
          `}
        >
          ‹
        </button>
      )}

      {/* NEXT ARROW */}
      {totalPages > 1 && (
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
          disabled={isLast}
          aria-label="Next products"
          className={`
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            z-10
            text-[38px]
            transition-opacity
            duration-300
            ${
              isLast
                ? "text-[#ccc] cursor-not-allowed opacity-0"
                : "text-[#9a9a9a] opacity-0 group-hover/slider:opacity-100 hover:text-[#555]"
            }
          `}
        >
          ›
        </button>
      )}
    </div>
  );
}


/* ===================== CARD ===================== */
function ProductCard({ product }) {
  const { name, price, image, likes, badge } = product;

  return (
    <div className="group">
      {/* IMAGE */}
      <div className="relative overflow-hidden bg-[#f5f5f5]">
        <img
          src={image}
          alt={name}
          className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* BADGE */}
        {badge && (
          <span className="absolute top-3 left-3 bg-[#d84c6f] text-white text-[11px] px-2 py-1 rounded">
            {badge}
          </span>
        )}

        {/* CART ICON */}
        <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-[14px]">
          🛒
        </div>
      </div>

      {/* INFO */}
      <div className="mt-4 space-y-1">
        <h3 className="text-[14px] uppercase text-[#333] leading-snug">
          {name}
        </h3>

        <p className="text-[15px] font-medium text-[#111]">{price}</p>

        {likes !== undefined && (
          <div className="flex items-center gap-1 text-[#f58634] text-[13px]">
            ♥ <span className="text-[#999]">{likes}</span>
          </div>
        )}
      </div>
    </div>
  );
}
