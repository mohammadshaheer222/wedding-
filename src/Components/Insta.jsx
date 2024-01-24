// import { carousel1, carousel4, carousel5 } from "../fotos";
import carousel1 from "/src/assets/images/carousel/carousel1.jpg"
import carousel4 from "/src/assets/images/carousel/carousel4.jpg"
import carousel5 from "/src/assets/images/carousel/carousel5.jpg"
const Insta = () => {
  return (
    <>
      <div className="space-y-5">
        <h1 className="text-5xl md:text-6xl text-center uppercase">Instagram</h1>
        <div className="w-screen flex">
          <a href="https://www.instagram.com/p/C2LASOCv1we/?img_index=1"><img className="h-full w-full" src={carousel1} alt="" /></a>
          <a href="https://www.instagram.com/p/C2LASOCv1we/?img_index=1"><img className="h-full w-full" src={carousel4} alt="" /></a>
          <a href="https://www.instagram.com/p/C2LASOCv1we/?img_index=1"><img className="h-full w-full" src={carousel5} alt="" /></a>
          <a href="https://www.instagram.com/p/C2LASOCv1we/?img_index=1"><img className="h-full w-full" src={carousel1} alt="" /></a>
          
        </div>
      </div>
    </>
  );
};
export default Insta;
