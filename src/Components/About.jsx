const About = () => {
  return (
    <>
      <div className="px-6 py-8  w-screen">
        <div className="md:flex justify-center space-y-8 items-center">
          <div className="md:flex md:flex-col ">
            
        <h1 className="text-6xl text-center">Reelman Production</h1>
            <p className="text-pretty ">
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
          </div>

          <img
            className="md:h-96 md:w-[50%]"
            src="https://ashleighhaase.com/wp-content/uploads/sites/12921/2021/09/CLAIREDAVIE_CCW-418_websize-683x1024.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default About;
