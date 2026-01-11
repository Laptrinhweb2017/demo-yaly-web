// src/components/footer/FooterNewsletter

export default function FooterNewsletter() {
  return (
    <div className="relative bg-[#6f7682] py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white text-[20px] font-medium">
          Đăng ký nhận bản tin YALY
        </p>

        <div className="relative w-full md:w-[420px]">
          <input
            type="email"
            placeholder="Email của bạn"
            className="w-full rounded-md bg-white/20 text-white placeholder-white/70 px-4 py-2 outline-none"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white">
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}
