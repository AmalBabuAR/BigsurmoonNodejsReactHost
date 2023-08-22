import React from "react";
import bgphone from "../../assets/Aboutar/BG 1.png";
import sofarotating from "../../assets/Aboutar/Sofa Animated_3.gif";
import ringpng from "../../assets/Aboutar/Logo (2) 2.png";
import bglarge from "../../assets/Aboutar/BG 1.png";
import pcimg from "../../assets/backgrounds/aboutar.svg";
import { useNavigate } from "react-router-dom";

const ProductVisualisation = () => {
  const navigate = useNavigate();
  return (
    <div className=" mx-auto font-outfit font-medium text-white overflow-hidden relative lg:min-h-screen  ">
      <img src={pcimg} className=" lg:hidden absolute bg-black -z-10 w-full " />
      <img
        src={pcimg}
        className="  hidden lg:block absolute bg-black -z-10 w-full  "
      />

      <div className="pt-28 md:hidden">
        <img src={sofarotating} className="px-10" />
        <div className="flex flex-col justify-center items-center mt-10">
          <h3 className="text-4xl md:text-5xl  mb-2">Product</h3>
          <div className="flex gap-2 items-center">
            <img src={ringpng} className="w-6 h-7 " />
            <h3 className="text-4xl md:text-5xl mb-2">Visualisation</h3>
          </div>
          <h3 className="text-4xl md:text-5xl text-[#3090f7] mb-16">
            Re-imagined
          </h3>
        </div>

        <div className="text-xl md:text-2xl text-center mb-5 ">
          <h3>
            One <span className="text-[#3090f7] ">Augmented Reality</span>{" "}
            Engine,
            <br />
            Multiple use cases
          </h3>
          <div className="flex justify-center">
          <button
            onClick={() => navigate("/support")}
            className="p-2 mx-auto text-[11px] md:mx-0 bg-gradient-to-r from-blue-500  to-blue-400 text-center flex justify-center items-center rounded-full font-normal w-[125px] h-[30px] my-6"
          >
            Get A Free Demo
          </button>
        </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto  ">
        <div className="gap-10 flex items-center justify-center md:h-[800px] md:px-20 lg:px-0 lg:min-h-screen  ">
          <div className="pt- hidden xl:px-40 md:grid md:grid-cols-2 items-center justify-center ">
            <div className="flex flex-col justify-center text-left  content-center items-center   ">
              <h3 className="text-4xl md:text-5xl lg:text-[94px]  w-full mb-4">
                Product
              </h3>
              <div className="flex gap-2 lg:gap-6 w-full   items-center">
                <img src={ringpng} className="w-6 lg:w-20 h-7 lg:h-16" />
                <h3 className="text-4xl md:text-5xl w-full lg:text-[94px] mb-4">
                  Visualisation
                </h3>
              </div>
              <h3 className="text-4xl md:text-5xl text-[#3090f7] w-full   mb-16 lg:text-8xl">
                Re-imagined
              </h3>
            </div>
            <img
              src={sofarotating}
              className="h-[332px] w-[406px] ml-40 mt-[-30px]"
            />
          </div>
        </div>
      </div>

      <div className="text-xl md:text-2xl lg:text-5xl lg:font-bold hidden md:block text-center mb-5 md:mt-[-250px] lg:mt-0  ">
        <h3>
          One <span className="text-[#3090f7] ">Augmented Reality</span> Engine,
          <br />
          <h3 className="mt-3 mb-24">Multiple use cases</h3>
        </h3>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/support")}
            className="p-2 mx-auto text-[14px] md:mx-0 bg-gradient-to-r from-blue-500  to-blue-400 text-center flex justify-center items-center rounded-full font-medium w-[150px] h-[40px] mt-[-50px] mb-10"
          >
            Get A Free Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductVisualisation;
