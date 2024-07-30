"use client";
import { works } from "@/data/data";
import { cn, fontWrapper } from "@/lib/utils";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProjectSheet = ({ project }: { project: (typeof works)[0] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className={cn("border-b py-20 border-gray-900/20 relative")}>
      <div
        style={{ backgroundColor: project.color }}
        className="absolute inset-0 opacity-5 -z-10"
      />
      <Image
        src={project.logo as string}
        alt="logo"
        width={700}
        height={700}
        className=" absolute -left-0 w-96 -top-0 masklogo  -z-20 opacity-70"
      />
      <div className="wrapper flex-col md:flex-row gap-10 flex items-center md:items-end justify-between">
        <div className="flex flex-col gap-2 text-center md:text-start">
          {project.logo && (
            <Image
              src={project.logo as string}
              alt="logo"
              width={700}
              height={700}
              className="w-32 shadow-xl"
            />
          )}
          <h2 className={fontWrapper("text-4xl pl-4 mb-3 font-bold")}>
            {project.title}
          </h2>

          <p className="opacity-60 pl-4 text-xl">Our work</p>
          <div className="flex flex-col pl-4 items-center md:items-start gap-2">
            {project.tags.map((item) => (
              <span
                key={item}
                className="bg-white text-base px-1.5 py-0.5 text-secondary w-fit"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        {/* <div className="flex flex-col gap-6"> */}
        <div
          className={cn(
            "flex max-w-[70%] pb-3 scrollchange gap-4 bg-black/40 p-3 rounded overflow-auto flex-nowrap",
            !project.title && ""
          )}
        >
          {project.photos.map((item, i) => (
            <div key={i} className="flex w-auto h-fit">
              {item.startsWith("/videos") ? (
                <video
                  key={i}
                  src={item.split("_")[0]}
                  controls
                  width={820}
                  className={cn(
                    item.split("_")[1] !== "b"
                      ? "max-w-[240px] h-auto"
                      : "max-w-[760px] h-auto"
                  )}
                />
              ) : (
                <Image
                  src={item}
                  alt="image"
                  width={1000}
                  height={1000}
                  className="h-auto min-w-[340px]"
                />
              )}
            </div>
          ))}
        </div>
        {/* <div className="flex items-center justify-center gap-4">
            {project.photos.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "w-2 h-2 rounded-full bg-white duration-300 transition-all",
                  i + 1 == current ? "w-8" : "opacity-50"
                )}
              />
            ))}
          </div> */}
      </div>
      {/* </div> */}
    </div>
  );
};
export default ProjectSheet;

{
  /* <Carousel
            setApi={setApi}
            opts={{
              loop: true,
            }}
            className="max-w-[48rem]"
          >
            <CarouselContent>
              
              {project.photos.map((item, i) => (
                <CarouselItem
                  key={i}
                  className="flex max-h-[1000px] w-fit flex-col basis-1/2 gap-4"
                >
                  {item.startsWith("/videos") ? (
                    <video
                      key={i}
                      src={item}
                      controls
                      width={220}
                      className="h-full mx-auto"
                    />
                  ) : (
                    <Image
                      src={item}
                      alt="image"
                      width={900}
                      height={900}
                      className=""
                    />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>  */
}
