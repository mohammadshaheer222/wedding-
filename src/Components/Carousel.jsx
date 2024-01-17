import { useState } from "react";
import { motion } from "framer-motion";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import carousel1 from "/src/assets/carousel/carousel1.jpg";
import carousel4 from "/src/assets/carousel/carousel4.jpg";
import carousel5 from "/src/assets/carousel/carousel5.jpg";

const Carousel = () => {
  const slides = [
    {
      url: carousel1,
    },
    {
      url: carousel4,
    },
    {
      url: carousel5,
    },
  ];
  const [currentIndex, setCurrent] = useState(0);
  const carouselVariant = {
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
  return (
    <>
      <motion.div
        variants={carouselVariant}
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
          className="w-full h-full duration-200"
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
    </>
  );
};
export default Carousel;
