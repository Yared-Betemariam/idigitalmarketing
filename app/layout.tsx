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
  title: "Idigital",
  keywords:
    "Software Development, Web Development, Mobile App Development, Full-Stack Development, Front-End Development, Back-End Development, UI/UX Design, Responsive Web Design, JavaScript, HTML5, CSS3, Vue.js, React.js, Angular, PHP, Laravel, Mobile App Design, Android App Development, iOS App Development, Cross-Platform Development, Database Design, API Development, Cloud Computing, DevOps, Agile Development, Test-Driven Development (TDD), Version Control (Git), Continuous Integration (CI/CD), Software Architecture, Code Optimization, Code Security, Project Management, Agile Methodologies developer, software developer, portifolo",
  description:
    "Discover my software development portfolio, showcasing expertise in web and mobile app development. As a seasoned software developer, I specialize in crafting responsive and high-performing applications using modern technologies like Vue.js, Ionic, Nuxt js, React.js, Angular.js, and more. Explore a range of projects that reflect my commitment to clean code, exceptional user experiences, and innovative problem-solving. Explore my work and let's collaborate on your next software project. I'm ready to turn your vision into a reality. Contact me to discuss how I can bring value to your software development endeavors.",
  icons: [
    {
      rel: "icon",
      url: "/logo.png",
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
