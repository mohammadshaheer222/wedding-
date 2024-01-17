import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import {motion} from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false)
  }

  const navbarVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration:5,
      }
    }
  }
  const mobNavVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration:0.8,
      }
    }
  }
  return (
    <>
      <div>
        <div className="text-gray-400">
          <motion.nav variants={navbarVariant} initial="hidden" animate="visible" className="flex items-center justify-between px-6 py-2 fixed left-0 right-0 top-0 z-20">
            <h1 className="font-extrabold text-2xl uppercase tracking-wider md:text-4xl">
              Reelman
            </h1>
            <p onClick={openMenu} className="font-semibold text-sm tracking-wider cursor-pointer md:text-lg">
              {isOpen ? "[CLOSE]" : "[MENU]"}
            </p>
          </motion.nav>
          {isOpen && (
            
            <motion.div variants={mobNavVariant} initial="hidden" animate="visible" className="bg-white font-semibold tracking-wider flex flex-col items-center justify-center h-screen gap-10 fixed left-0 right-0 top-0 z-10 md:text-lg">
              <Link onClick={closeMenu}>Home</Link>
              <Link onClick={closeMenu}>About</Link>
              <Link onClick={closeMenu}>Works</Link>
              <Link onClick={closeMenu}>Contact</Link>
            </motion.div>
          )}
          <Carousel />
        </div>
      </div>
    </>
  );
};
export default Navbar;