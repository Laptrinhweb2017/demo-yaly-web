import "./globals.css";
import { Montserrat, Allura } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const allura = Allura({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
