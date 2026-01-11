// src/app/fonts.js
import { Montserrat, Allura } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const allura = Allura({
  subsets: ["latin"],
  weight: "400",
});
