//src/components/auth/AuthModal.jsx

"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import AuthTabs from "./AuthTabs";

export default function AuthModal({ open, onClose }) {
  const [tab, setTab] = useState("register"); // register | login

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* modal */}
      <div className="relative w-[420px] bg-white rounded-md shadow-xl">
        <AuthTabs tab={tab} setTab={setTab} />

        <div className="p-6">
          {tab === "register" ? <RegisterForm /> : <LoginForm />}
        </div>
      </div>
    </div>
  );
}
