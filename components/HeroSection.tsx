import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { cn, font2, fontWrapper } from "@/lib/utils";
import { Images } from "./AboutMeSection";
import ContactButton from "./ContactButton";

/* eslint-disable react/no-unescaped-entities */
const HeroSection = () => {
  return (
    <div className=" overflow-hidden relative border-b border-gray-900/10 text-gray-100">
      <Image
        src={"/about.jpg"}
        alt="Us"
        fill
        className="w-full h-auto object-center object-cover maskimage opacity-20 -z-40"
      />
      {/* <div className="pattern2 absolute inset-0 opacity-10 bg-black/20 -z-10 " />/ */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary to-secondary-foreground -z-50" />
      <section className="wrapper py-20 pb-12 flex-col gap-12 md:gap-20 md:flex-row md:items-center">
        <p className="subheader text-center">we are idigital</p>
        <div className="flex flex-col items-center justify-center text-center py-6 gap-10 lg:flex-1">
          <div className="flex items-center">
            <h1
              className={fontWrapper(
                "text-[2.25rem] leading-[1.2] sm:text-5xl md:text-7xl sm:leading-[3.5rem] md:leading-[5.75rem] font-bold drop-shadow-md capitalize flex flex-col gap-2"
              )}
            >
              <span>grow your business with</span>
              <span className="font-bold bg-gray-100 text-secondary-foreground mx-auto whitespace-nowrap p-2 px-4">
                digital marketing.
              </span>
            </h1>
          </div>
          <p className="body max-w-md md:max-w-xl">
            Our agency leverages social media to 2-10x your customers with
            digital marketing and differnt ads campains
          </p>
          <ContactButton />
        </div>
        {/* <div className="relative w-[65%] md:w-[35%] animate-puls lg:w-[30%] h-80 md:h-96 flex items-center justify-center overflow-hidden mx-auto">
        <Image
          src={"/heroweb.png"}
          className="origin-center w-60 lg:w-64 object-contain z-10 drop-shadow-md"
          alt="hero"
          fill
        />
      </div> */}
        <div className="text-center flex pt-6  flex-col gap-5 wrapper ">
          <p className="mx-auto text-base md:text-lg font-normal opacity-50 ">
            Worked with over different clients
          </p>
          <div className="overflow-hidden mask flex flex-nowrap">
            <div className="flex transition-all duration-300 gap-4 md:gap-12 animate_slide w-fit whitespace-nowrap">
              {Images}
              {Images}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
