import { education, workExperiance } from "@/data/data";
import { cn } from "@/lib/utils";

/* eslint-disable react/no-unescaped-entities */
const Resume = () => {
  return (
    <div className="bg-secondary/5 border-y border-gray-900/25">
      <section
        id="resume"
        className="wrapper flex items-top py-6 flex-col md:gap-8 md:flex-row"
      >
        <div className="flex flex-col py-12 gap-6 px-4">
          <div className="flex flex-col gap-1 px-6 relative">
            <span className="w-2 inset-y-0 -left-1 absolute bg-secondary/90 drop-shadow-md rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold">Work Experiance</h2>
            <p className="text-base opacity-80">
              I'm a software engineer with over 4+ years of experiance working
              for various international companies.
            </p>
          </div>
          <div>
            {workExperiance.map((item, i) => (
              <div
                key={item.timeSpan}
                className={cn(
                  "relative  flex",
                  i !== workExperiance.length - 1 &&
                    "border-l-[1.5px] group/expbox border-gray-950/40 border-dashed"
                )}
              >
                <span className="w-[1.8rem] h-[1.8rem] absolute top-0 -left-[0.9rem] rounded-full bg-gray-700 flex">
                  <span className="bg-primary/40 group-hover/expbox:w-full group-hover/expbox:h-full duration-300 transition-all w-3 h-3 rounded-full mx-auto my-auto" />
                </span>
                <div className="mb-8 ml-8 text-base flex flex-col p-4 border border-gray-900/20 rounded-lg drop-shadow bg-black/5">
                  <span className="text-sm">{item.timeSpan}</span>
                  <p className="text-secondary">{item.role}</p>
                  <p>
                    <em className="text-primary">{item.companyName}</em>{" "}
                    <span>@{item.location}</span>
                  </p>
                  <ul className=" list-inside list-disc">
                    {item.works.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col py-12 gap-6">
          <div className="flex flex-col gap-1 px-6 relative">
            <span className="w-2 inset-y-0 -left-1 absolute bg-secondary/90 drop-shadow-md rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
            <p className="text-base opacity-80">
              I had the opportunity to pursue BSC and MSC degree in Computer
              Engineering.
            </p>
          </div>
          <div>
            {education.map((item, i) => (
              <div
                key={item.date}
                className={cn(
                  "relative  flex",
                  i !== education.length - 1 &&
                    "border-l-[1.5px] group/expbox border-gray-950/40 border-dashed"
                )}
              >
                <span className="w-[1.8rem] h-[1.8rem] absolute top-0 -left-[0.9rem] rounded-full bg-gray-700 flex">
                  <span className="bg-primary/40 group-hover/expbox:w-full group-hover/expbox:h-full duration-300 transition-all w-3 h-3 rounded-full mx-auto my-auto" />
                </span>
                <div className="mb-8 ml-8 text-base flex flex-col p-4 border border-gray-900/20 rounded-lg drop-shadow bg-black/5">
                  <span className="text-sm opacity-80">{item.date}</span>
                  <address className="text-secondary text-base">
                    {item.location}
                  </address>
                  <p className="text-base">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Resume;
