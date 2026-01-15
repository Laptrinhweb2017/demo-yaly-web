// src/components/auth/RegisterForm.jsx

export default function RegisterForm() {
  return (
    <form className="space-y-4">
      <select className="w-full border px-3 py-2">
        <option>Nam</option>
        <option>Nữ</option>
      </select>

      <input placeholder="Tên" className="w-full border px-3 py-2" />
      <input placeholder="Họ" className="w-full border px-3 py-2" />
      <input placeholder="Địa chỉ Email" className="w-full border px-3 py-2" />
      <input
        type="password"
        placeholder="Mật khẩu"
        className="w-full border px-3 py-2"
      />
      <input
        type="password"
        placeholder="Xác nhận mật khẩu"
        className="w-full border px-3 py-2"
      />

      <button className="w-full bg-[#6b7280] text-white py-3">
        THAM GIA YALY
      </button>
    </form>
  );
}
