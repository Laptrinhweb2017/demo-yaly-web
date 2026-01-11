//src/components/home/ProductCategory.jsx

export default function ProductCategory() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-28">
        <CategoryBlock title="NỮ" />
        <CategoryBlock title="NAM" />
        <CategoryBlock title="TIỆC CƯỚI" />
        <CategoryBlock title="HOẠ TIẾT HOA" />
      </div>
    </section>
  );
}

function CategoryBlock({ title }) {
  return (
    <div>
      {/* HEADER */}
      <div className="relative flex items-center justify-center mb-12">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-[#e5e5e5]" />

        <h2 className="relative bg-white px-8 text-[22px] tracking-[0.35em] font-medium text-[#444]">
          {title}
        </h2>

        <a
          href="#"
          className="absolute right-0 text-[14px] italic text-[#888] hover:text-[#f58634] transition"
        >
          Xem thêm &gt;
        </a>
      </div>

      <ProductGrid />
    </div>
  );
}

function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((item) => (
        <ProductCard key={item} />
      ))}
    </div>
  );
}

function ProductCard() {
  return (
    <div className="group">
      {/* IMAGE */}
      <div className="relative bg-[#f5f5f5] overflow-hidden">
        <img
          src="/images/sample-product.jpg"
          alt=""
          className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* ICON CART */}
        <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-[14px]">
          🛒
        </div>
      </div>

      {/* INFO */}
      <div className="mt-4 space-y-1">
        <h3 className="text-[13px] uppercase text-[#333] leading-snug">
          ĐẦM LINEN CỘT VAI HỞ EO HỌA TIẾT REN
        </h3>

        <p className="text-[15px] font-medium text-[#111]">2.990.000 đ</p>

        <div className="flex items-center gap-1 text-[#f58634] text-[13px]">
          ♥ <span className="text-[#999]">20</span>
        </div>
      </div>
    </div>
  );
}

