import React from "react";
import { howitwork, mainFeaturesconfig } from "../../assets/data/data";
// import box from "../../assets/Home/boximg.png";
// import lights from "../../assets/Home/lightsimg.png";
// import pc from "../../assets/Home/pcimg.png";

// import m5 from "../../assets/Configurator/globe1.png";
// import m1 from "../../assets/Configurator/unstucksofa.gif";
// import m4 from "../../assets/Configurator/piechart.png";
// import m3 from "../../assets/Configurator/stucksofa.gif";
// import mtbl from "../../assets/Configurator/tbc.gif";

// import m2 from "../../assets/Configurator/table.gif";

import p1 from "../../assets/3Dstudio/giflight.gif";
import p2 from "../../assets/3Dstudio/3lights.png";
import p3 from "../../assets/3Dstudio/step3.png";
import p4 from "../../assets/3Dstudio/step4.png";
import arrowlogin from "../../assets/Arrows/Login shape 1.svg";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black">
      <div className="bg-black max-w-[1440px] mx-auto p-4 text-white">
        <div className="md:hidden">
          <div className="text-center items-center">
            <h1 className="text-xl font-bold tracking-[8px] mb-3 mt-7 ">
              HOW IT WORKS
            </h1>
            <h2 className="text-sm px-2 mb-10">
              Our well-defined and efficient process ensures that projects are
              executed smoothly, deadlines are met, and the final deliverables
              align with our client's visions.
            </h2>
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/support")}
                className="p-2 mx-auto text-[11px] md:mx-0 bg-gradient-to-r from-blue-500  to-blue-400 text-center flex justify-center items-center rounded-full font-normal mt-[-20px] w-[125px] h-[30px] my-6"
              >
                Get A Free Demo
              </button>
            </div>
          </div>
          {howitwork.map((m) => (
            <div
              key={m.id}
              className="md:hidden md:grid-cols-2 md:gap-32 justify-center items-center"
            >
              <div className="flex justify-center  ">
                <img
                  src={m.img}
                  className={`  ${
                    m.id === 1 &&
                    "w-[291px] md:h-[150px] md:w-[250px] h-[281px] rounded-xl"
                  } ${m.id === 2 && "w-[290px] h-[170px]"} ${
                    m.id === 3 && "w-[131px] h-[148px]"
                  } ${m.id === 4 && "w-[190px]  h-[145px]"}`}
                />
              </div>
              <div>
                <h2
                  className={` text-xl px-3 mt-10 ${m.id === 4 && "mt-0"} mb-3`}
                >
                  {m.title}
                </h2>
                <h2 className="mb-12 pl-3 pr-8 text-left text-sm font-normal">
                  {m.desc}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <div className="text-center  items-center">
            <h1 className=" md:text-[20px] lg:text-3xl font-medium font-outfit md:tracking-[13px] lg:tracking-[15px] mb-5 mt-20 ">
              HOW IT WORKS
            </h1>
            <h2 className="lg:text-lg md:text-[14px] lg:text-[20px] px-20  lg:w-[750px] md:w-[550px]  mx-auto   font-light  mb-10">
              Our well-defined and efficient process ensures that projects are
              executed smoothly, deadlines are met, and the final deliverables
              align with our client's visions.
            </h2>
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/support")}
                className="p-2 mx-auto text-[14px] md:mx-0 bg-gradient-to-r from-blue-500  to-blue-400 text-center flex justify-center items-center rounded-full font-medium w-[150px] h-[40px] mt-[-25px] mb-10"
              >
                Get A Free Demo
              </button>
            </div>
          </div>

          <div className="md:grid md:grid-cols-2  md:px-10 mt-28  justify-center items-center lg:px-28  ">
            <div className=" flex flex-col justify-center mx-auto  ">
              <h2 className="text-[20px]   mb-4 lg:w-full lg:text-5xl">
                Step 1: Provide <br />
                Reference Materials
              </h2>
              <h2 className="mb-7 font-light xl:text-[26px] text-[14px] lg:text-lg w-3/4 ">
                Provide us with product images, color variations and Product
                dimensions. That’s it, from your end.
              </h2>
            </div>
            <div className="flex justify-center   ">
              <img
                src={p1}
                className="xl:w-[363px] w-[291px] h-[281px]   lg:h-[350px]  border rounded-xl   "
              />
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 px- mt-28  gap-10   justify-between items-center lg:px-10 ">
            <div className="flex justify-center  ">
              <img
                src={p2}
                className=" xl:w-[498px] w-[290px] h-[170px] xl:h-[293px]  "
              />
            </div>
            <div className=" flex flex-col justify-center mx-auto ">
              <h2 className="text-3xl  mb-3 pt-5 lg:w-full text-[20px] lg:text-5xl">
                Step 2: 3D Model Creation
              </h2>
              <h2 className="mb-7 font-light  xl:text-[26px] text-[14px] lg:text-lg w-3/4  ">
                We Analyse and study the images, create 3d model as provided
                informations. We also optimise the file heavily without losing
                quality.
              </h2>
              <h2 className="text-lg  text-[#57BEF8]"></h2>
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 px-10  mt-28 justify-between items-center lg:px-20 ">
            <div className=" flex flex-col justify-center mx-auto ">
              <h2 className=" text-[20px] mb-7 lg:w-full  lg:text-5xl">
                Step 3: Quality check
              </h2>
              <h2 className="mb-4 font-light  xl:text-[26px] text-[14px]  lg:text-lg  w-3/4  ">
                We undergo a comprehensive and rigorous quality check,
                guaranteeing precise details and accurate texture
                representation.
              </h2>
            </div>
            <div className="flex justify-center  ">
              <img
                src={p3}
                className=" xl:w-[302px] w-[131px] h-[148] lg:h-[300px]"
              />
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 mt-28    lg:px-10 ">
            <div className="flex ">
              <img
                src={p4}
                className="xl:w-[302px] w-[190px] h-[125px] mx-auto  xl:h-[300px]  "
              />
            </div>
            <div className=" flex flex-col justify-around   ">
              <h2 className=" text-[20px]  lg:w-full lg:text-5xl">
                Step 4: Upload
              </h2>
              <h2 className="mb-4 font-light xl:mt-[-50px]  xl:text-[26px] text-[14px] lg:text-lg w-3/4 ">
                After your 3D model is prepared, we upload it to bigsurmoon
                platform, which can be effortlessly embedded on any website and
                also can be downloaded any time.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="bg-black max-w-[1440px] mx-auto text-white px-3 pt-10 md:pt-10 md:pb-20 md:flex md:items-center md:justify-between md:px-10 lg:px-16 lg:pb-8 ">
          <div>
            <h1 className="text-[25px] font-semibold lg:text-[36px] mb-3">
              Get Quote
            </h1>
            <h1 className="w-[300px] md:text-sm text-xs mb-5 lg:leading-7 lg:text-[25px] lg:w-[550px]">
              Get in touch with us today to request a quote tailored to your
              needs, ask questions, or seek assistance.
            </h1>
          </div>
          <div className="pb-12">
            <button
              onClick={() => navigate("/support")}
              className={`text-white text-base gap-2 lg:gap-4 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400 rounded-full w-[98px] lg:w-[250px] h-[35px] lg:h-[65px]  `}
            >
              <h3 className="text-[10px] font-roboto g lg:text-[18px]  ">
                Get in touch{" "}
              </h3>
              <img src={arrowlogin} className="h-4 lg:h-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
