import React from "react";
import bgphone from "../../assets/Aboutar/BG 1.png";
import imglap from "../../assets/Configurator/imglap.png";
import { confitems } from "../../assets/data/data";
import pcimg from "../../assets/backgrounds/custpc.png";
import { useNavigate } from "react-router-dom";
import "../style.css";
// import bglarge from "../../assets/Aboutar/BG 1.png";
// import ringpng from "../../assets/Aboutar/Logo (2) 2.png";

const CustomizationSimplified = () => {
  const navigate = useNavigate();
  return (
    <div className="relative mx-auto overflow-hidden text-white font-roboto lg:h-full">
      <img
        src={bgphone}
        alt="Customization, Simplified"
        className="absolute w-full h-full bg-black lg:hidden -z-10"
      />
      <img
        src={pcimg}
        alt="Customization, Simplified"
        className="absolute hidden w-full bg-black lg:block -z-10"
      />

      <div className="pt-5 md:grid md:grid-cols-2 lg:hidden md:pt-32 md:px-10 ">
        <div className=" md:hidden">
          <img
            src={imglap}
            alt="No-Code, No app required. Completely web-based and easy-to-use"
            className="w-[310px] md:w-[510px] md:h-[200px] md:mt-10 md:ml-[-40px]  h-[124px] mt-20 mx-auto"
          />
        </div>
        <div>
          <div className="flex flex-col items-center content-center justify-center mt-5 mb-5 md:items-start ">
            <h1 className="text-[35px] md:text-4xl font-outfit font-medium  ">
              Customization,
            </h1>

            <h1 className="text-[35px] md:text-4xl font-outfit font-medium  ">
              Simplified
            </h1>
          </div>

          <div className="flex justify-center mb-5 text-xl text-center md:text-2xl md:text-left md:justify-start ">
            <h2 className="text-sm w-[300px]">
              No-Code, No app required. <br />
              Completely web-based and easy-to-use.
            </h2>
          </div>
          <div className="w-[320px] flex justify-around mx-auto md:mx-0 mb-10">
            <button
              onClick={() => navigate("/plan")}
              className="p-2 text-[12px] md:text-base text-center w-[125px] h-[30px] rounded-full  md:h-8 flex items-center justify-center md:w-32 md:ml-[-20px] btnClr"
            >
              Start Trial
            </button>
            <button
              onClick={() => navigate("/support")}
              className="p-2 text-[12px] md:text-base text-center rounded-full w-[125px] h-[30px] md:h-8 flex items-center justify-center md:w-32 btnClr"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={imglap}
            alt="No-Code, No app required. Completely web-based and easy-to-use"
            className="w-[310px] md:w-[510px] md:h-[200px] md:mt-0   h-[124px] mt-20 mx-auto"
          />
        </div>
      </div>
      <div className="flex items-center justify-center lg:min-h-screen">
        <div className="max-w-[1440px]  mx-auto  ">
          <div className="items-center justify-center hidden pt-28 xl:px-28 lg:grid lg:grid-cols-2 ">
            <div className="flex flex-col items-center content-center justify-center text-left ">
              <h3 className="text-4xl md:text-4xl lg:text-[94px] font-outfit xl:leading-[90px] font-medium  w-full mb-6">
                Customization,{" "}
              </h3>

              <h3 className="text-4xl md:text-5xl font-outfit font-medium w-full   mb-10 lg:text-[94px]">
                Simplified
              </h3>
              <h3 className="w-full text-2xl lg:pt-4">
                No-Code, No app required. <br /> Completely web-based and
                easy-to-use.
              </h3>
              <div className="flex w-full gap-10 mb-10 mt-28 lg:mt-14">
                <button
                  onClick={() => navigate("/plan")}
                  className="p-2 text-[18px] text-center flex justify-center items-center rounded-full w-48 h-16 btnClr"
                >
                  Start Trial
                </button>
                <button
                  onClick={() => navigate("/support")}
                  className="p-2 text-[18px] text-center  flex justify-center items-center rounded-full w-48 h-16 btnClr"
                >
                  Learn More
                </button>
              </div>
            </div>

            <img
              src={imglap}
              alt="No-Code, No app required. Completely web-based and easy-to-use"
              className=" xl:scale-125 xl:w-[700px] xl:pr-10  "
            />
          </div>
        </div>
      </div>
      <div className="pt-8 pb-5 text-white md:flex md:gap-5 md:px-12 md:justify-around md:pb-0 lg:hidden">
        {confitems.map((m) => (
          <div
            id={m.id}
            className="w-[280px] md:w-[210px] rounded-2xl flex flex-col  mb-10 bg-[#151515] mx-auto"
          >
            <img
              src={m.img}
              alt={m.t}
              className={`${
                m.id === 3
                  ? "w-[110px] md:w-[80px] md:h-[82px]"
                  : "w-[145px] h-[105px] md:w-[100px] md:h-[74px]"
              } ${
                m.id === 2 ? "w-[120px] h-[130px] md:w-[80px] md:h-[82px]" : ""
              }  mt-4 md:mt-8 h-[112px] mx-auto`}
            />
            <h2 className="text-center font-bold mt-5 mb-3 text-[#07BDFF] text-lg">
              {m.title}
            </h2>
            <h2 className="text-sm leading-5 font-normal text-center mb-5 w-[230px] md:w-full mx-auto">
              {m.t}
            </h2>
          </div>
        ))}
      </div>
      <div className="max-w-[1240px]  mx-auto hidden lg:block  ">
        <div className="items-center hidden mt-32 text-white md:flex md:gap-5 md:justify-around ">
          {confitems.map((m) => (
            <div
              id={m.id}
              className="w-[338px] h-[378px] rounded-2xl flex flex-col  mb-20 bg-[#151515]  mx-auto"
            >
              <img
                src={m.img}
                alt={m.t}
                className={`${
                  m.id === 1
                    ? "w-[150px] h-[130px] mb-6"
                    : "w-[150px] h-[150px]"
                } ${
                  m.id === 3 ? "w-[145px] h-[150px]" : "w-[150px] h-[150px]"
                } mt-10 pt-3 mx-auto`}
              />
              <h2 className="text-center mt-10 mb-3 font-medium text-[#07BDFF] text-2xl   ">
                {m.title}
              </h2>
              <h2 className="text-base text-center mb-5 w-[280px] mx-auto">
                {m.t}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomizationSimplified;
