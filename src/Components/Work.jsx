import {motion} from "framer-motion";
import {work} from "../fotos"
const Work = () => {
  const imageVariant = {
    hidden: {
      opacity: 0,
    },
    visible: (index) => ({
      opacity: 1,
      transition: {
        delay:index * 0.04,
        duration: 0.8,
      },
    }),
  };
  const titleVariant = {
    hidden: {
      opacity: 0,
    },
    visible: (index) => ({
      opacity: 1,
      transition: {
        delay: index * 0.06,
        duration: 0.8,
      },
    }),
  };
  return (
    <>
      <div className=" w-screen p-6 flex flex-wrap items-center justify-center gap-5">
        {work.map((work, index) => (
          <div className="relative flex flex-wrap items-center justify-center uppercase hover:scale-105 cursor-pointer transition-all duration-200">
            <motion.img variants={imageVariant} initial="hidden" whileInView="visible" custom={index} viewport={{once: true}} className="h-96 rounded-sm" src={work.image} alt="" />
            <div  className="absolute top-0 flex flex-col items-center justify-end w-full h-full text-white/80">
              <motion.h1 variants={titleVariant} initial="hidden" whileInView="visible" custom={index} viewport={{once: true}} className="text-5xl">{work.groom}</motion.h1>
              <motion.p variants={titleVariant} initial="hidden" whileInView="visible" custom={index} viewport={{once: true}} >WEDS</motion.p>
              <motion.h1 variants={titleVariant} initial="hidden" whileInView="visible" custom={index} viewport={{once: true}} className="text-5xl">{work.bride}</motion.h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Work;
