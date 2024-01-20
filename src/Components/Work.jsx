const Work = () => {
  const work = [
    {
      image: "/src/assets/images/work/gal-1.jpg",
      groom: "Akhil",
      bride: "Devika",
    },
    {
        image: "/src/assets/images/work/gal-1.jpg",
        groom: "jo",
        bride: "Joyal",
      },
  ];
  return (
    <>
      <div className=" w-screen p-6 flex flex-wrap items-center justify-center gap-5">
        {work.map((work) => (
          <div className="relative flex flex-wrap items-center justify-center uppercase">
            <img className="h-96" src={work.image} alt="" />
            <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full text-white/80">
              <h1 className="text-5xl">{work.groom}</h1>
              <p className="text-2xl">weds</p>
              <h1 className="text-5xl">{work.bride}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Work;
