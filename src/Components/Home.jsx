import { useState } from "react";
import { motion } from "framer-motion";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { slides } from "../fotos";
import About from "./About";
import Services from "./Services";
import Video from "./Video";

const Home = () => {
  const [currentIndex, setCurrent] = useState(0);
  const prevSlide = () => {
    const firstSlide = currentIndex == 0;
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrent(newIndex);
  };
  const nextSlide = () => {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrent(newIndex);
  };
  const HomeVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 2,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={HomeVariant}
        initial="hidden"
        animate="visible"
        className="w-screen h-screen text-2xl relative"
      >
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-full h-full duration-700 ease-in-out"
        >
          <img
            src={slides[currentIndex].url}
            alt="Reelman Productions"
            loading="lazy"
            className="hidden"
          />
        </div>
        <div className="absolute top-0 w-full h-full flex justify-between items-center text-2xl px-3 md:text-4xl">
          <div onClick={prevSlide}>
            <SlArrowLeft className="cursor-pointer" />
          </div>

          <div onClick={nextSlide}>
            <SlArrowRight className="cursor-pointer" />
          </div>
        </div>
      </motion.div>
      {/* <Services /> */}
      <About />
      <Video />
    </>
  );
};
export default Home;
