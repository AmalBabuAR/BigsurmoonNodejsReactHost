import React from "react";
import { aritems } from "../../assets/data/data";
import arrowlogin from "../../assets/Arrows/Login shape 1.svg";
import { useNavigate } from "react-router-dom";

const AugumentedReality = () => {
  const navigate = useNavigate();
  return (
    <div className=" mx-auto font-roboto text-white overflow-hidden bg-black   ">
      <div>
        {aritems.map((m) => (
          <div key={m.id} className="max-w-[2000px] mx-auto">
            <div className=" ">
              <h1
                className={`absolute ${
                  m.id === 1 ? "text-white" : "text-black"
                }  text-lg font-bold px-5 lg:px-32 lg:text-5xl lg:mt-20 mt-5 `}
              >
                {m.title}
              </h1>
              <img src={m.img} className="h-40 md:h-52 lg:h-[500px] w-full " />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-black">
        <div className="bg-black  max-w-[1440px] mx-auto text-white px-3 pt-10 md:pt-16  md:flex md:items-center md:justify-between md:px-10 lg:px-16 lg:pb-16">
          <div>
            <h1 className="text-[25px] pl-3 lg:pl-0 font-semibold lg:text-[36px]  mb-3">
              {" "}
              7-day free trial
            </h1>
            <h1 className="w-[320px] pl-3 lg:pl-0 font-roboto font-light text-xs md:text-sm  mb-5 lg:leading-7  lg:text-[25px] lg:w-[550px]">
              Experience our platform's full potential, with our exclusive 7-day
              free trial, allowing you to explore all the features and benefits
            </h1>
          </div>
          <div className="pb-12 pl-3  flex flex-col justify-center align-center xl:pt-10 lg:pl-0 ">
            <button
              onClick={() => navigate("/pricing")}
              className={`text-white text-base gap-2  lg:gap-4 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400 rounded-full w-[130px]  lg:w-[250px] h-[32px] md:h-[35px] lg:h-[65px]  `}
            >
              <h3 className="text-[10px] font-roboto g lg:text-[18px]  ">
                Explore Plans{" "}
              </h3>
              <img src={arrowlogin} className="h-4 lg:h-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AugumentedReality;
