// src/app/(client)/layout.jsx
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/footer/Footer";

export default function ClientLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
