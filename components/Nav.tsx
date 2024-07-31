"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import ContactButton from "./ContactButton";
import Logo from "./Logo";
import MenuSheet from "./MenuSheet";

export const navLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Services",
    href: "#services",
  },
  // {
  //   name: "Resume",
  //   href: "#resume",
  // },
  {
    name: "Portfolio",
    href: "#works",
  },
  // {
  //   name: "Contact",
  //   href: "#contact",
  // },
];

const Nav = () => {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(`#${window.location.href.split("#")[1]}`);
  }, []);

  return (
    <header className="sticky top-0 w-full inset-x-0 pb-1 flex border-b bg-zinc-900 h-20 z-50 border-gray-100/15 ">
      <nav className="wrapper flex items-center justify-between w-full h-full">
        <Logo />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-10">
            {navLinks.map((item) => (
              <a
                href={item.href}
                onClick={() => setPathname(item.href)}
                key={item.name}
                className={cn(
                  pathname === item.href
                    ? "text-primary/90 scale-110"
                    : "opacity-80",
                  "transition-all hidden sm:block duration-300 text-[15px] md:text-[17px]"
                )}
              >
                {item.name}
              </a>
            ))}
            <ContactButton simple />
          </div>
          <div className="relative sm:hidden h-12 w-12">
            <MenuSheet />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
