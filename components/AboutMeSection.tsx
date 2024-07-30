import { fontWrapper } from "@/lib/utils";
import Image from "next/image";

export const skillsets = [
  "/logos/1.png",
  "/logos/3.png",
  "/logos/5.png",
  "/logos/6.png",
  "/logos/7.png",
  "/logos/8.png",
  "/logos/9.png",
  "/logos/10.png",
  "/logos/11.png",
  "/logos/12.png",
  "/logos/chekay.png",
];

const AboutMeSection = () => {
  const recentWorks = [
    {
      title: "Projects Done",
      number: 50,
    },
    {
      title: "Years Experience",
      number: 4,
    },
    {
      title: "Happy Clients",
      number: 35,
    },
  ];

  return (
    <div className="py-10 border-y border-gray-900/20 relative overflow-hidden">
      {/* <span className="bg-circle bg-no-repeat -bottom-[10rem] -left-[10rem] opacity-15 -z-10 absolute w-[40rem] h-[40rem] bg-contain bg-center" /> */}

      <section className="wrapper flex py-10 flex-col" id="about">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="subheader text-center">About us</p>
          <h2 className={fontWrapper("text-5xl md:text-6xl font-bold mb-8")}>
            Who are <span className="text-primary">we?</span>
          </h2>
          <div className="body max-w-2xl text-center">
            {/* <p className="">
              This is me,{" "}
              <b>
                Experienced Designer & Developer who can provide your business a
                new creative start right a Way!
              </b>
            </p>
            <p>
              I am a passionate, detail-oriented & committed individual with
              strong problem-solving capability, time management skills, and
              organizational skills.
            </p>

            <p>
              I have successfully designed, developed, and deployed various
              mobile and web applications, following clean coding practices in a
              test-driven development framework. With a deep passion for and
              top-notch expertise in web and app development, I am well-prepared
              to be a valuable asset to your team.
            </p> */}
            <p>
              Welcome to iDigital, a premier digital marketing agency dedicated
              to helping businesses thrive in the online world. At iDigital, our
              work ethic is driven by a passion for innovation and a commitment
              to excellence. Through cutting-edge strategies and tailored
              solutions, we empower our clients to reach their target audience
              effectively and achieve their marketing goals. With iDigital by
              your side, you can rest assured that your online presence is in
              capable hands.
            </p>
          </div>
          <div className="flex gap-8 items-center w-full max-w-xl justify-between mt-4">
            {recentWorks.map((item) => (
              <div
                key={item.title}
                className="flex hover:scale-125 drop-shadow-xl transition-all duration-300 cursor-pointer flex-col gap-1 items-center justify-center"
              >
                <span className="text-5xl md:text-6xl font-semibold text-primary">
                  {item.number}+
                </span>
                <p className="text-sm md:text-base opacity-60">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const Images = skillsets.map((item, i) => (
  <div
    key={i}
    className="relative saturate-0 opacity-45 duration-200 transition-all hover:saturate-100 hover:opacity-70 w-32 h-32"
  >
    <Image
      alt="image"
      src={item}
      fill
      className="object-center  object-contain h-full"
    />
  </div>
));
export default AboutMeSection;
