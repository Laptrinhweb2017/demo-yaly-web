//src/components/auth/LoginForm.jsx

"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-5">
      {/* EMAIL */}
      <div>
        <label className="block text-[14px] text-[#333] mb-1">
          <span className="text-red-500">*</span> Địa chỉ Email
        </label>
        <input
          type="email"
          placeholder=""
          className="
            w-full
            h-[44px]
            px-3
            border border-[#ddd]
            rounded-sm
            text-[14px]
            outline-none
            focus:border-[#f58634]
            placeholder:text-[#bbb]
          "
        />
      </div>

      {/* PASSWORD */}
      <div>
        <label className="block text-[14px] text-[#333] mb-1">
          <span className="text-red-500">*</span> Mật khẩu
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="
              w-full
              h-[44px]
              px-3 pr-10
              border border-[#ddd]
              rounded-sm
              text-[14px]
              outline-none
              focus:border-[#f58634]
            "
          />

          {/* 👁 TOGGLE */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-[#999]
              hover:text-[#555]
            "
            aria-label="Toggle password"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* LOGIN BUTTON */}
      <button
        type="submit"
        className="
          w-full
          h-[46px]
          bg-[#6b7280]
          text-white
          text-[15px]
          font-semibold
          tracking-wide
          uppercase
          hover:bg-[#4b5563]
          transition
        "
      >
        ĐĂNG NHẬP
      </button>

      {/* FORGOT PASSWORD */}
      <p className="text-center text-[14px] text-blue-600 cursor-pointer hover:underline">
        Quên mật khẩu
      </p>

      {/* DIVIDER */}
      <div className="text-center text-[13px] text-[#777] mt-2">
        HOẶC ĐĂNG KÝ VỚI
      </div>

      {/* SOCIAL LOGIN */}
      <div className="flex gap-3">
        {/* GOOGLE */}
        <button
          type="button"
          className="
            flex-1
            h-[42px]
            border border-[#ddd]
            flex items-center justify-center gap-2
            text-[14px]
            font-medium
            uppercase
            hover:bg-[#f5f5f5]
            transition
          "
        >
          <img src="/icons/google.svg" alt="Google" className="w-5 h-5" />
          GOOGLE
        </button>

        {/* FACEBOOK */}
        <button
          type="button"
          className="
            flex-1
            h-[42px]
            border border-[#ddd]
            flex items-center justify-center gap-2
            text-[14px]
            font-medium
            uppercase
            hover:bg-[#f5f5f5]
            transition
          "
        >
          <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
          FACEBOOK
        </button>
      </div>
    </form>
  );
}
