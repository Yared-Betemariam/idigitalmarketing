import { cn, fontWrapper } from "@/lib/utils";
import {
  CircleDollarSign,
  MessageSquareText,
  MousePointerClick,
  Notebook,
  Search,
  Speech,
  User,
  Users,
} from "lucide-react";

const services = [
  {
    Icon: MessageSquareText,
    title: "Establish social idendity",
    desc: "Using social media to give your business identity and well known credebitltiy in the public",
  },
  {
    Icon: MousePointerClick,
    title: "Ads compaigns",
    desc: "Running social media ads to your intended customers, telling them that your business presents the solution",
  },
  {
    Icon: Notebook,
    title: "Branding",
    desc: "Branding your busniess future with the right methods and practices used by big companies",
  },
];
const Services = () => {
  return (
    <section className="bg-primary/[0.025]">
      <section
        id="services"
        className="wrapper flex flex-col relative overflow-y-hidden"
      >
        {/* <span className="bg-circle bg-no-repeat -top-[15rem] left-0 opacity-10 -z-10 absolute w-[50rem] h-[50rem] bg-contain bg-center" /> */}
        <div className="flex flex-col py-14 gap-4">
          <p className="subheader text-center">Services</p>
          <h2 className={fontWrapper("h2 mx-auto text-center")}>
            What we <span className="text-primary">offer?</span>
          </h2>
          <p className="body max-w-md mx-auto text-center mb-8">
            Empowering Businesses with Full Service Digital Marketing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {services.map((item, i) => (
              <div
                key={i}
                className={cn(
                  "pt-8 p-12  bg-gradient-to-b from-black to-black/0 border-gray-100/0 flex flex-col gap-5 max-w-md rounded-tl-[3rem] rounded-br-[3rem]"
                )}
              >
                <item.Icon className="w-[4.5rem] h-[4.5rem] text-primary drop-shadow" />
                <p className={fontWrapper("text-3xl font-bold text")}>
                  {item.title}
                </p>
                <p className="opacity-80 font-normal text-base lg:text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};
export default Services;
