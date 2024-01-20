import Marquee from "react-fast-marquee";
import {motion} from "framer-motion";
import video1 from "../fotos";
const Video = () => {
  const headingVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.04,
        duration: 0.8,
      },
    },
  };
  const videoVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.06,
        duration: 0.8,
      },
    },
  };
  return (
    <>
      <div className="flex flex-wrap justify-center items-center py-6 w-screen">
        <motion.div variants={headingVariant} initial="hidden" whileInView="visible" viewport={{once: true}} >
          <h1 className="text-6xl text-center mb-6">Selected 
          Works</h1>
        </motion.div>
        <motion.div variants={videoVariant} initial="hidden" whileInView="visible" viewport={{once: true}} className="w-screen h-full relative">
          <div className="absolute top-0 w-screen h-full flex justify-center items-end">
            <Marquee>
              <div className="flex overflow-hidden">
                <h1 className="video-h1">WEDDING DAY WEDDING DAY</h1>
              </div>
            </Marquee>
          </div>
          <img className="w-full h-full" src={video1} alt="wedding video" />
        </motion.div>
      </div>
    </>
  );
};
export default Video;
