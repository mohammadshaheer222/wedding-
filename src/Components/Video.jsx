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
        delay: 0.02,
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
        delay: 0.04,
        duration: 0.8,
      },
    },
  };
  return (
    <>
      <div className="py-6 flex flex-wrap justify-center items-center">
        <motion.div variants={headingVariant} initial="hidden" whileInView="visible" >
          <h1 className="text-6xl text-center">Selected Videos</h1>
        </motion.div>
        <motion.div variants={videoVariant} initial="hidden" whileInView="visible" className="w-screen h-full relative my-5">
          <div className="absolute top-0 w-screen h-full flex justify-center items-end">
            <Marquee>
              <div className="flex overflow-hidden">
                <h1 className="video-h1">WEDDING</h1>
                <h1 className="video-h1">DAY</h1>
                <h1 className="video-h1">WEDDING</h1>
                <h1 className="video-h1">DAY</h1>
              </div>
            </Marquee>
          </div>
          <video muted loop autoPlay preload="none" src={video1}></video>
        </motion.div>
      </div>
    </>
  );
};
export default Video;
