const Footer = () => {
  const date = new Date();
  return (
    <section className="border-t border-gray-100/10 bg-gradient-to-bl from-black to-secondary-foreground/20">
      <div className=" bg-zinc-800/5 shadow-md text-center py-6">
        <p className="opacity-30 hover:cursor-pointer hover:opacity-50 duration-200 transition-all text-base text-white  font-normal">
          &copy; {date.getFullYear()} Idigital. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};
export default Footer;
