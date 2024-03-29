import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./Home";
import Footer from "./Footer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    window.scrollY >= 90 ? setColor(true) : setColor(false);
  };
  window.addEventListener("scroll", changeColor);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  const navbarVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 5,
      },
    },
  };
  const mobNavVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.8,
      },
    },
  };
  return (
    <>
      <div>
        <div className="text-gray-500">
          <motion.nav
            variants={navbarVariant}
            initial="hidden"
            animate="visible"
            className={`flex items-center justify-between px-6 py-2 fixed left-0 right-0 top-0 z-20 ${
              color ? "bg-white" : "bg-none"
            }`}
          >
            <h1 >
              logo
            </h1>
            <div className="flex items-center gap-3"> 
              <a href="https://wa.me/7561847879" className="font-semibold text-sm tracking-wider cursor-pointer md:text-lg">[LET'S CHAT]</a>
              <p
                onClick={openMenu}
                className="font-semibold text-sm tracking-wider cursor-pointer md:text-lg"
              >
                {isOpen ? "[CLOSE]" : "[MENU]"}
              </p>
            </div>
          </motion.nav>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={mobNavVariant}
                exit="exit"
                initial="hidden"
                animate="visible"
                className="bg-white font-semibold tracking-wider flex flex-col items-center justify-center h-screen gap-10 fixed left-0 right-0 top-0 z-10 md:text-lg"
              >
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
                <Link onClick={closeMenu}>About</Link>
                <Link onClick={closeMenu}>Works</Link>
                <Link onClick={closeMenu}>Contact</Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Outlet />
        {/* <Footer /> */}
      </div>
    </>
  );
};
export default Navbar;
