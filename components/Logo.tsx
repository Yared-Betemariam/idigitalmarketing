import Image from "next/image";

const Logo = () => {
  return (
    <a
      href="#"
      className=" tracking-widest text-xl text-primary font-extrabold"
    >
      <Image
        src={"/logo.png"}
        alt="logo"
        width={800}
        height={800}
        className="w-40"
      />
    </a>
  );
};
export default Logo;
