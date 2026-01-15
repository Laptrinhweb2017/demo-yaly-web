// src/components/auth/AuthTabs.jsx
export default function AuthTabs({ tab, setTab }) {
  return (
    <div className="flex border-b">
      <button
        onClick={() => setTab("register")}
        className={`flex-1 py-3 text-center ${
          tab === "register"
            ? "border-b-2 border-orange-500 font-semibold"
            : "text-gray-400"
        }`}
      >
        ĐĂNG KÝ
      </button>

      <button
        onClick={() => setTab("login")}
        className={`flex-1 py-3 text-center ${
          tab === "login"
            ? "border-b-2 border-orange-500 font-semibold"
            : "text-gray-400"
        }`}
      >
        ĐĂNG NHẬP
      </button>
    </div>
  );
}
