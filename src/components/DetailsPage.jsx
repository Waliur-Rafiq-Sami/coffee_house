import { MdOutlineArrowBackIosNew } from "react-icons/md";
import bg_img from "../assets/images/more/11.png";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const DetailsPage = () => {
  const navigate = useNavigate();
  const coffee = useLoaderData();
  const { name, Chef, Supplier, Taste, Category, Details, Photo, Price } =
    coffee;
  return (
    <div
      className="w-full bg-cover bg-center font-rancho  bg-[#fff] text-black "
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      <div className="max-w-3xl py-10 mx-auto">
        {/* //go Back  */}
        <button
          onClick={() => navigate("/")}
          className="btn bg-[#D2B48C] btn-outline border-none hover:bg-[#331A15]"
        >
          <span className="">
            <MdOutlineArrowBackIosNew />
          </span>
          <span> Back to home</span>
        </button>
        {/* //details  */}
        <div className="bg-[#F5F4F1] my-3 py-3 text-black rounded-xl shadow-xl md:mx-0 mx-5">
          <div className="flex justify-center gap-10 items-center ">
            <div>
              <img className="md:w-80" src={Photo} alt="Coffee Img" />
              <p className="font-bold text-center -mt-10 mb-8">
                Price :
                <span className="font-normal">
                  {"  "}
                  {Price}
                  <FaBangladeshiTakaSign className="inline text-gray-600 -ml-[1px] mr-1" />
                  Take
                </span>
              </p>
            </div>
            <div className=" space-y-2">
              <h2
                className="text-2xl text-center  font-bold text-black"
                style={{
                  textShadow: `
                2px 2px 2px gray,  
                2px 2px 3px white,  
                3px 1px 0px black  
    `,
                }}
              >
                Details
              </h2>
              <p className="font-bold">
                Name : <span className="font-normal">{name} </span>
              </p>
              <p className="font-bold">
                Chef : <span className="font-normal">{Chef} </span>
              </p>
              <p className="font-bold">
                Supplier : <span className="font-normal">{Supplier} </span>
              </p>
              <p className="font-bold">
                Taste : <span className="font-normal">{Taste} </span>
              </p>
              <p className="font-bold">
                Category : <span className="font-normal">{Category} </span>
              </p>
              <p className="font-bold">
                Category : <span className="font-normal">{Category} </span>
              </p>
              <p className="font-bold">
                Details : <span className="font-normal">{Details} </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
