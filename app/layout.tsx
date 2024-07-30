import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ArrowRight } from "lucide-react";
import { FaPhone } from "react-icons/fa";

const font = DM_Sans({
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Idigital - Digital Marketing Agency",
  keywords: "",
  description:
    "A digital marketing agency that help business with social medial managment, ads and other digital services.",
  icons: [
    {
      rel: "icon",
      url: "/logo_s.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <div className="pattern fixed inset-0 opacity-[0.012]" /> */}
        {/* <section className="bg-white sticky top-0 z-50 h-16  md:h-12 text-sm md:text-base border-b border-gray-100/30 font-light flex items-center">
          <div className="wrapper text-secondary-foreground flex items-center md:justify-between md:gap-2 gap-0.5 flex-col md:flex-row">
            <p>
              We are offereing special discounts for our services this month.
            </p>
            <a
              href=""
              className="text-secondary flex tracking-wider  items-center gap-3 font-semibold"
            >
              <span>+251 9919 19199</span>
              <FaPhone className=" -scale-x-[100%]" />
            </a>
          </div>
        </section> */}
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
