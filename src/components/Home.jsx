import { useLoaderData, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Coffee from "./Coffee";
import { useState } from "react";
import img from "../assets/images/more/1.png";

const Home = () => {
  const navigate = useNavigate();
  const loadedCoffee = useLoaderData();
  const [coffee, setCoffee] = useState(loadedCoffee);
  return (
    <div className="bg-[#fff]">
      <NavBar></NavBar>
      {/* // Coffee Show  */}
      <>
        <div className="text-black text-center mt-15">
          <p>--sip & Savor</p>
          <h2
            className="text-4xl font-bold text-black"
            style={{
              textShadow: `
                2px 2px 2px gray,  
                2px 2px 3px white,  
                3px 1px 0px black  
    `,
            }}
          >
            Our Popular Products
          </h2>
          <button
            onClick={() => navigate("/AddNewCoffee")}
            className="btn border-0 focus:bg-gray-200
                    focus:outline-0 bg-[#D2B48C] hover:bg-[#331A15] font-bold tracking-wide text-lg mt-5"
          >
            Add Coffee
          </button>
        </div>
        <div
          className="w-full mt-10 bg-[#fff] bg-no-repeat"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5 py-5">
            {coffee.map((c) => (
              <Coffee
                key={c._id}
                info={c}
                coffee={coffee}
                setCoffee={setCoffee}
              ></Coffee>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default Home;
