import navImg from "../assets/images/more/3.png";

import img1 from "../assets/images/icons/1.png";
import img2 from "../assets/images/icons/2.png";
import img3 from "../assets/images/icons/3.png";
import img4 from "../assets/images/icons/4.png";
const NavBar = () => {
  return (
    <div className="w-full">
      {/* //main */}
      <div
        className="bg-no-repeat bg-cover bg-center font-rancho flex pt-30 justify-end text- px-4 h-[700px] md:pr-40"
        style={{ backgroundImage: `url(${navImg})` }}
      >
        <div className="md:p-5 p-2">
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="text-white mt-4 text-sm md:text-lg leading-relaxed max-w-3xl text-justify">
            It&apos;s coffee time - Sip &amp; Savor - Relaxation in every sip!
            Get the nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="mt-6 px-6 py-3 text-white bg-[#D2B48C] hover:bg-[#331A15] rounded-lg text-sm md:text-base transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
      {/* //icon  */}
      <div className="bg-[#ECEAE3]">
        <div className=" text-black flex md:flex-row flex-col justify-around container mx-auto py-8 md:gap-12">
          <div className="p-7 md:p-0 md:border-none border-b-2 border-gray-400 border-dashed">
            <img src={img1} alt="" />
            <h2
              className="text-xl font-bold text-black py-2"
              style={{
                textShadow: `
                2px 3px 2px gray,  
                2px 1px 3px white,  
                1px 2px 5px black`,
              }}
            >
              Awesome Aroma
            </h2>
            <p>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="p-7 md:p-0 md:border-none border-b-2 border-gray-400 border-dashed">
            <img src={img2} alt="" />
            <h2
              className="text-xl font-bold text-black py-2"
              style={{
                textShadow: `
                2px 3px 2px gray,  
                2px 1px 3px white,  
                1px 2px 5px black`,
              }}
            >
              High Quality
            </h2>
            <p>We served the coffee to you maintaining the best quality</p>
          </div>
          <div className="p-7 md:p-0 md:border-none border-b-2 border-gray-400 border-dashed">
            <img src={img3} alt="" />
            <h2
              className="text-xl font-bold text-black py-2"
              style={{
                textShadow: `
                2px 3px 2px gray,  
                2px 1px 3px white,  
                1px 2px 5px black`,
              }}
            >
              Pure Grades
            </h2>
            <p>
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div className="p-7 md:p-0 md:border-none border-b-2 border-gray-400 border-dashed">
            <img src={img4} alt="" />
            <h2
              className="text-xl font-bold text-black py-2"
              style={{
                textShadow: `
                2px 3px 2px gray,  
                2px 1px 3px white,  
                1px 2px 5px black`,
              }}
            >
              Proper Roasting
            </h2>
            <p>
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
