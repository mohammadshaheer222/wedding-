import Marquee from "react-fast-marquee";
import video1 from "../fotos";
const Video = () => {
  return (
    <>
      <div className="w-full h-full relative my-5">
        <div className="absolute top-0 h-full flex justify-center items-end">
          <Marquee>
            <div className="flex">
              <h1 className="video-h1">WEDDING</h1>
              <h1 className="video-h1">DAY</h1>
              <h1 className="video-h1">WEDDING</h1>
              <h1 className="video-h1">DAY</h1>
            </div>
          </Marquee>
        </div>
        <video muted loop autoPlay preload="none" src={video1}></video>
      </div>
    </>
  );
};
export default Video;
