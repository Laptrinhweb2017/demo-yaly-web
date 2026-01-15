//src/components/home/ProductCategory.jsx

"use client";

import { useState } from "react";
import { productCategories } from "./data/productCategoryData";

export default function ProductCategory() {
  return (
    <section className="bg-white pb-15">
      <div className="max-w-7xl mx-auto px-6 space-y-15">
        {productCategories.map((category) => (
          <CategoryBlock key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}

/* ===================== BLOCK ===================== */
function CategoryBlock({ category }) {
  const { title, viewMore, products } = category;

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

      <CategoryGrid products={products} />
    </div>
  );
}

/* ===================== GRID + SLIDE ===================== */
function CategoryGrid({ products }) {
  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const [page, setPage] = useState(0);

  const start = page * ITEMS_PER_PAGE;
  const visibleProducts = products.slice(start, start + ITEMS_PER_PAGE);

  const isFirst = page === 0;
  const isLast = page === totalPages - 1;

  return (
    <div className="relative">
      {/* GRID WRAPPER */}
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <CategoryCard key={product.uid} product={product} />
          ))}
        </div>
      </div>

      {/* PREV */}
      {!isFirst && (
        <button
          onClick={() => setPage((p) => p - 1)}
          className="
            absolute
            -left-10
            top-[200px]
            text-[36px]
            text-[#9a9a9a]
            hover:text-[#555]
            transition
          "
        >
          ‹
        </button>
      )}

      {/* NEXT */}
      {!isLast && (
        <button
          onClick={() => setPage((p) => p + 1)}
          className="
            absolute
            -right-10
            top-[200px]
            text-[36px]
            text-[#9a9a9a]
            hover:text-[#555]
            transition
          "
        >
          ›
        </button>
      )}
    </div>
  );
}

/* ===================== CARD ===================== */
function CategoryCard({ product }) {
  const { name, price, image, likes = 0, badge } = product;

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  return (
    <div
      className="
      bg-[#f8f8f8]
      pb-4
      transition
      hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]
    "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden bg-[#e2e2e2]">
        <img
          src={image}
          alt={name}
          className="w-full h-[420px] object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* BADGE */}
        {badge && (
          <span className="absolute top-3 left-3 bg-[#d84c6f] text-white text-[11px] px-2 py-1 rounded">
            {badge}
          </span>
        )}

        {/* CART */}
        <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-[14px]">
          🛒
        </div>
      </div>

      {/* INFO */}
      <div className="mt-4 px-4 space-y-2">
        <p className="text-[16px] uppercase text-[#2a2a2a] leading-[1.45]">
          {name}
        </p>

        <div className="flex items-center justify-between">
          <p className="text-[15px] font-medium">{price}</p>

          {likes !== undefined && (
            <div className="flex items-center gap-1 text-[#f58634]">
              <span className="text-[18px]">♥</span>
              <span className="text-[13px] text-[#888]">{likes}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


