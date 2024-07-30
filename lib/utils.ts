import { type ClassValue, clsx } from "clsx";
import {
  Hanken_Grotesk,
  Outfit,
  Poppins,
  Raleway,
  Roboto_Condensed,
  Space_Grotesk,
} from "next/font/google";
import { twMerge } from "tailwind-merge";

export const font2 = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const fontWrapper = (className: ClassValue) => {
  return cn(className, font2.className);
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
