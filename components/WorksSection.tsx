/* eslint-disable react/no-unescaped-entities */
import { works } from "@/data/data";
import Image from "next/image";
import ProjectSheet from "./ProjectSheet";
import { fontWrapper } from "@/lib/utils";

const WorksSection = () => {
  const vidoes = [
    "https://firebasestorage.googleapis.com/v0/b/chessv2-12d72.appspot.com/o/4_5844569703732741567.mp4?alt=media&token=d18e6bed-fbee-4094-a262-795db1b5a8e7",
    "https://firebasestorage.googleapis.com/v0/b/chessv2-12d72.appspot.com/o/VID_20240725_173151_062.mp4?alt=media&token=a4f6a9f9-3153-4752-8f06-1f30a7414340",
    "https://firebasestorage.googleapis.com/v0/b/chessv2-12d72.appspot.com/o/VID_20240725_173153_135.mp4?alt=media&token=bd1aad0d-7492-47c9-b882-087a1da6d566",
  ];
  return (
    <section id="works" className="relative pt-20 flex flex-col">
      {/* <span className="bg-circle bg-no-repeat top-[20rem] right-[20rem] opacity-20 absolute w-[40rem] -z-10 h-[40rem] bg-contain bg-center" /> */}
      <div className="wrapper flex flex-col  gap-4">
        <p className="subheader mx-auto">Portfolio</p>
        <h2 className={fontWrapper("h2 mx-auto text-center")}>
          Recent <span className="text-primary">Projects</span>
        </h2>
        <p className="body mx-auto mb-12">Projects that speak for themselves</p>
      </div>
      <div className="w-full flex flex-col">
        {works.map((item) => (
          <ProjectSheet key={item.title} project={item} />
        ))}
      </div>
      {/* <div className="wrapper flex flex-col relative overflow-hidden">
        <div className="w-[64rem] h-auto aspect-square -z-10 bg-secondary rounded-full absolute -top-[100%] inset-x-0 -translate-x-1/2 left-1/2 blur-3xl opacity-15" />
        <p className="body text-center pt-10">
          Some of the videos we made for our clients.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 py-12">
          {vidoes.map((item, i) => (
            // <div key={i} className="shadow-xl shadow-white">
            <video
              key={i}
              src={item}
              controls
              height={900}
              width={260}
              className="rounded-xl max-h- mx-auto shadow-xl shadow-black/20"
            />
            // </div>
          ))}
        </div>
      </div> */}
      <div className="relative bg-black/20 overflow-hidden">
        <video
          muted
          autoPlay
          playsInline
          loop
          src="/videos/0730.mp4"
          className="absolute maskvideo inset-x-0 ml-auto w-[65%] -z-10 opacity-20 h-auto object-bottom object-cover"
        />
        <div className="wrapper py-10 flex flex-col md:flex-row items-center md:items-sart gap-12 ">
          <div className="flex flex-col gap-10 max-w-md text-center md:text-start items-center md:items-start">
            <p className="subheader">How we operate</p>
            <h2 className={fontWrapper("h2 mx-auto md:mx-0")}>
              Behind the <span className="text-primary">scenes</span>
            </h2>
            <p className="body max-w-72 md:max-w-none">
              Our team works with maximum proefficeny to deliver the result you
              want
            </p>
          </div>
          <video
            src={"/videos/0730.mp4"}
            controls
            height={600}
            width={300}
            className="rounded-md h-[540px] mx-auto md:ml-auto md:mr-0  shadow-xl shadow-black/20 p-2 bg-black/40"
          />
        </div>
      </div>
    </section>
  );
};
export default WorksSection;
