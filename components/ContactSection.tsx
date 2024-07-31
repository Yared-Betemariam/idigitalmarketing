import { cn, font2 } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaTelegram } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */
const ContactSection = () => {
  const socialLinks = [
    {
      icon: <FaTelegram />,
      link: "t.me/abel_estifanos",
    },
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/profile.php?id=61563465033783",
    },
  ];

  const contactInfo = [
    {
      Icon: Mail,
      label: "Email",
      data: "idigitaladvertising2020@gmail.com",
    },
    {
      Icon: Phone,
      label: "Phone",
      data: "+2519 0088 4298",
    },
  ];
  return (
    <section
      id="contact"
      // className="bg-gradient-to-b to-gray-900 from-gray-800  text-gray-100"
    >
      <div className="flex flex-col md:flex-row wrapper justify-between items-center py-24 gap-12 md:gap-20 lg:gap-28">
        <div className=" flex flex-col gap-12  items-center md:items-start text-center md:text-start">
          <div className="flex flex-col gap-10 max-w-md mx-auto">
            <p className="subheader">Contact us</p>
            <h2 className={cn("h2 mx-auto md:mx-0", font2.className)}>
              Let's<span className="text-primary"> work</span>
            </h2>
            <p className="body max-w-72 md:max-w-none">
              Leave a message if you have any projects in mind, Looking forward
              to working with you.”
            </p>
          </div>
          <div className="flex items-center gap-8">
            {socialLinks.map((item) => (
              <a
                href={item.link}
                target="_blank"
                key={item.link}
                className="text-4xl text-gray-100/70 hover:text-gray-100 hover:scale-110 transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex md:w-[50%] flex-col gap-10">
          {contactInfo.map((item) => (
            <div
              key={item.data}
              className="flex  flex-col md:flex-row items-center gap-6 md:gap-10"
            >
              <div className="grid place-content-center bg-gradient-to-bl from-black to-secondary-foreground/20  p-6 shadow-none rounded-full">
                {<item.Icon size={42} className="w-6 h-6 md:h-10 md:w-10" />}
              </div>
              <div className="text-center md:text-start">
                <p className="opacity-70 text-base md:text-lg">{item.label}</p>
                <p className="text-xl :text-2xl">{item.data}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
