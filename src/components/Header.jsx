import React from "react";
import { headerVariants, navItems } from "../common/Elements";
import { motion } from "framer-motion";
import { MdOutlineMenuOpen } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [showBorder, setShowBorder] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setShowBorder(true);
      } else {
        setShowBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle menu open state
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`fixed w-full  bg-neutral-900 mb-20 text-gray-200 font-semibold ${
        showBorder ? " shadow-md shadow-stone-700" : "border-0"
      }`}
      style={{ zIndex: 10 }}
    > 
     <div className="container flex justify-between items-center">
      <h1 className="text-lg lg:text-[22px] font-semibold">SERIES STHA</h1>

      {/* for larger screens */}
      <div className={`hidden lg:flex gap-x-5`}>
        {navItems.map((item) => (
          <div key={item.id} className="flex items-center gap-x-1">
            <h2 className="hover:text-indigo-500 duration-500 my-2 lg:my-0">
              {item.title}
            </h2>
            <p className="hidden lg:block">{item.icon}</p>
          </div>
        ))}
      </div>

      {/* for medium and small screens only */}
      <div
        className={`lg:hidden fixed top-20  h-[70vh] w-fit bg-neutral-800 
        drop-shadow-lg duration-500 font-semibold text-lg py-2  transition-transform transform ${
          menuOpen ? "translate-x-0 right-2" : "translate-x-full right-0"
        }`}
        style={{ zIndex: 20 }}
      >
        {navItems.map((item) => (
          <div key={item.id}>
            <h2 className="hover:text-indigo-500 duration-500 my-4 px-7">
              {item.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Menu icon for small screens */}
      <div
        className="block lg:hidden duration-500 cursor-pointer"
        onClick={toggleMenu}
      >
        {menuOpen ? <RxCross2 size={40} /> : <MdOutlineMenuOpen size={40} />}
      </div>
      </div>
    </motion.div>
  );
};

export default Header;
