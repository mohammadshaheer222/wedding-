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
      y:50
    },
    visible: (index) => ({
      opacity: 1,
      y:0,
      transition: {
        delay: index * 0.5,
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
            <motion.div variants={titleVariant} initial="hidden" whileInView="visible" custom={index} viewport={{once: true}} className="absolute top-0 flex flex-col items-center justify-end w-full h-full text-white/80">
              <h1  className="text-5xl">{work.groom}</h1>
              <p>WEDS</p>
              <h1 className="text-5xl">{work.bride}</h1>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Work;
