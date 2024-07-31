import { fontWrapper } from "@/lib/utils";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight, FaTelegram } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Chekay Academy.",
      img: "/logos/1.png",
      role: "Agency",
      feedback: (
        <p className="text-lg">
          From the very beginning, they <span>truly understood</span> my
          business needs and worked tirelessly to create a tailored strategy
          that brought <span className="hl">incredible growth</span> to our
          company. Their expertise in SEO, social media marketing, and overall
          digital presence optimization has been{" "}
          <span className="hl">transformative</span>.
        </p>
      ),
    },
    {
      name: "Gereb delivery.",
      role: "Agency",
      img: "/logos/2.png",
      feedback: (
        <p className="text-lg">
          Their team's expertise and dedication have truly taken my business to
          the <span className="hl">next level</span>. Through their strategic
          campaigns and creative solutions, they have significantly{" "}
          <span className="hl">boosted</span> my online presence and engagement.
        </p>
      ),
    },
  ];
  return (
    <section className="bg-secondary/15">
      <section
        id="testimonials"
        className="wrapper  flex flex-col relative overflow-y-hidden"
      >
        <div className="flex flex-col py-20 gap-4">
          <p className="subheader mx-auto">Testimonails</p>
          <h2 className={fontWrapper("h2 mx-auto text-center md:text-start")}>
            Client <span className="text-primary">reviews</span>
          </h2>
          <p className="body mx-auto mb-12">
            Here are some of our client reviews.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mx-auto px-2">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="flex bg-gradient-to-b from-black to-black/0 flex-col p-8 px-5 w-full max-w-[24rem] shadow-x gap-4 rounded-tl-[3rem] rounded-br-[3rem]"
              >
                <div className="relative px-6 py-5  flex flex-col gap-6">
                  <FaQuoteLeft className="text-2xl opacity-50" />
                  {/* <span className="text-2xl md:text-3xl font-bold absolute -bottom-8 -right-8 opacity-80">
                  </span> */}
                  {item.feedback}
                </div>
                <div className="h-[0.75px] bg-gray-100/15 rounded-full mx-6" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 px-6">
                    {/* <div className="relative w-1 h-14 rounded-full">
                      {item.img ? (
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          className="object-center object-cover rounded-full"
                        />
                      ) : (
                        <div className="bg-red-700 rounded-full absolute inset-0 shadow-md"></div>
                      )}
                    </div> */}
                    <div className="flex flex-col text-xs">
                      <span className="text-lg font-semibold">{item.name}</span>
                      <span className="text-base opacity-50">{item.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};
export default TestimonialsSection;
