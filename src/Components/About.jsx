import {motion} from "framer-motion"
const About = () => {
  const headingVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.6
      }
    }
  }
  const paraVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.6
      }
    }
  }
  const imageVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.6
      }
    }
  }
  return (
    <>
      <div className="px-6 flex flex-wrap justify-center items-center py-10 space-y-6">
        <div className="text-center space-y-4 ">
          <motion.div variants={headingVariant} initial="hidden" whileInView="visible">
            <h1 className="text-6xl">Reelman Production</h1>
          </motion.div>
          <motion.div variants={paraVariant} initial="hidden" whileInView="visible">
            <p>
              We try to tell each story in a simple,natural and elegant
              way,without artifacts and excessive modifications,as we percieve
              and live it.
            </p>
            <p>
              We simply let ourselves be carried away by natural emotions and by
              the day without it or by the course of events.
            </p>
            <p>
              We love to think that our story will be a memory forever in
              someone's life.
            </p>
           
          </motion.div>
        </div>
        <motion.div variants={imageVariant} initial="hidden" whileInView="visible" className="lg:w-[45vw]">
          <img
            src="https://ashleighhaase.com/wp-content/uploads/sites/12921/2021/09/CLAIREDAVIE_CCW-418_websize-683x1024.jpg"
            alt=""
          />
        </motion.div>
      </div>
    </>
  );
};
export default About;
